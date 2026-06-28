import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const image = body.image || "/output/default.png";
    const prompt = body.prompt || "";

    // 📦 cases 数据路径
    const filePath = path.join(process.cwd(), "data/cases/v1.json");

    let cases = [];

    try {
      cases = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      if (!Array.isArray(cases)) cases = [cases];
    } catch (e) {
      cases = [];
    }

    // 🧠 找最新 case（自动回写）
    if (cases.length > 0) {
      cases[0] = {
        ...cases[0],
        image: image,
        status: "Rendered",
        prompt_sdxl: prompt || cases[0].prompt_sdxl,
        updated_at: new Date().toISOString(),
      };
    }

    // 💾 写回文件
    fs.writeFileSync(filePath, JSON.stringify(cases, null, 2));

    return Response.json({
      success: true,
      message: "case updated with generated image",
      image,
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