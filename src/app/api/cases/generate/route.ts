import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const body = await req.json();

  const newCase = {
    id: "case_" + Date.now(),
    title: body.title || "Auto CNC Case",
    industry: "Automotive Manufacturing",
    materials: "H13 Steel",
    tolerance: "±0.02mm",
    status: "Generated",

    prompt_sdxl:
      body.prompt ||
      "industrial CNC machining factory, H13 steel mold, cinematic lighting, ultra realistic, blue steel tone",

    prompt_video:
      "3D CNC machining animation, industrial factory automation, cinematic visualization",

    negative_prompt:
      "low quality, blur, deformation, unrealistic geometry",

    publish_target: ["website", "ai_pipeline", "facebook"],
  };

  // 📦 读取现有数据
  const filePath = path.join(process.cwd(), "data/cases/v1.json");

  let oldData = [];

  try {
    oldData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    if (!Array.isArray(oldData)) oldData = [oldData];
  } catch (e) {
    oldData = [];
  }

  // ➕ 新增到最前
  oldData.unshift(newCase);

  fs.writeFileSync(filePath, JSON.stringify(oldData, null, 2));

  return Response.json({
    success: true,
    message: "case generated",
    data: newCase,
  });
}