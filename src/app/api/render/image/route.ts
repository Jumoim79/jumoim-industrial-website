import { NextResponse } from "next/server";

const COMFY_URL = "http://127.0.0.1:8188";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const promptText = body.prompt;

    // 1. 构建 ComfyUI workflow
    const workflow = {
      prompt: {
        "1": {
          class_type: "CheckpointLoaderSimple",
          inputs: {
            ckpt_name: "sd_xl_base_1.0.safetensors"
          }
        },
        "2": {
          class_type: "CLIPTextEncode",
          inputs: {
            text: promptText,
            clip: ["1", 1]
          }
        },
        "3": {
          class_type: "CLIPTextEncode",
          inputs: {
            text: "low quality, blurry, distortion",
            clip: ["1", 1]
          }
        },
        "4": {
          class_type: "EmptyLatentImage",
          inputs: {
            width: 1024,
            height: 1024,
            batch_size: 1
          }
        },
        "5": {
          class_type: "KSampler",
          inputs: {
            seed: Math.floor(Math.random() * 999999),
            steps: 25,
            cfg: 7,
            sampler_name: "dpmpp_2m",
            scheduler: "karras",
            denoise: 1,
            model: ["1", 0],
            positive: ["2", 0],
            negative: ["3", 0],
            latent_image: ["4", 0]
          }
        },
        "6": {
          class_type: "VAEDecode",
          inputs: {
            samples: ["5", 0],
            vae: ["1", 2]
          }
        },
        "7": {
          class_type: "SaveImage",
          inputs: {
            filename_prefix: "jumoim_api",
            images: ["6", 0]
          }
        }
      }
    };

    // 2. 发送到 ComfyUI
    const res = await fetch(`${COMFY_URL}/prompt`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(workflow)
    });

    const data = await res.json();

    if (!data.prompt_id) {
      return NextResponse.json({
        success: false,
        error: "ComfyUI failed"
      });
    }

    const prompt_id = data.prompt_id;

    // 3. 等待结果（轮询 history）
    let outputImage = null;

    for (let i = 0; i < 20; i++) {
      await new Promise(r => setTimeout(r, 1000));

      const historyRes = await fetch(`${COMFY_URL}/history/${prompt_id}`);
      const history = await historyRes.json();

      const item = history[prompt_id];

      if (item?.outputs?.["7"]?.images?.[0]) {
        outputImage = item.outputs["7"].images[0].filename;
        break;
      }
    }

    // 4. 返回图片URL
    return NextResponse.json({
      success: true,
      prompt: promptText,
      image: outputImage
        ? `${COMFY_URL}/view?filename=${outputImage}&type=output`
        : null,
      prompt_id
    });

  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message
    });
  }
}