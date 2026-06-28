export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt = body.prompt;

    // 🧠 ComfyUI真实API地址（本地默认）
    const COMFYUI_URL = "http://127.0.0.1:8188/prompt";

    const workflow = {
      prompt: {
        "3": {
          class_type: "CLIPTextEncode",
          inputs: {
            text: prompt,
          },
        },
      },
    };

    const res = await fetch(COMFYUI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workflow),
    });

    const data = await res.json();

    return Response.json({
      success: true,
      status: "sent_to_comfyui",
      comfyui_response: data,
    });
  } catch (err: any) {
    return Response.json(
      {
        success: false,
        error: err.message,
      },
      { status: 500 }
    );
  }
}