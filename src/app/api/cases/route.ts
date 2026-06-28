import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "data/cases/v1.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  return Response.json([
    {
      ...data,
      id: "case_001",
      image: "/output/cnc-mold.png",
    },
    {
      id: "case_002",
      title: "Metal CNC Precision Parts",
      industry: "Industrial Manufacturing",
      materials: "Aluminum Alloy",
      tolerance: "±0.01mm",
      status: "Completed",
      image: "/output/metal-part.png",
      prompt_sdxl: "industrial metal CNC machining...",
      prompt_video: "industrial machining animation...",
    },
  ]);
}