export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const input = searchParams.get("q") || "industrial CNC machining mold";

  const caseData = {
    id: "case_" + Date.now(),
    version: "v5",
    created_at: new Date().toISOString(),

    title: `Industrial Case - ${input}`,
    industry: "Automotive Manufacturing",
    materials: "H13 Steel (HRC 58-62)",
    tolerance: "±0.02mm",

    outcome:
      "High precision CNC machining achieved with optimized tool path and thermal control.",

    status: "Generated",

    prompt_sdxl:
      `${input}, industrial precision, CNC machining, H13 steel, cinematic lighting, ultra realistic, blue steel tone`,

    prompt_video:
      `3D visualization of ${input}, CNC machining process, factory automation, cinematic industrial footage`,

    negative_prompt:
      "low quality, blur, deformation, unrealistic geometry",

    publish_target: ["website", "facebook", "ai_pipeline"]
  };

  return Response.json(caseData);
}