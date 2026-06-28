import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const dir = "D:/AI_FACTORY/outputs/images";

    const files = fs
      .readdirSync(dir)
      .filter(f => f.endsWith(".png") || f.endsWith(".jpg") || f.endsWith(".jpeg"))
      .map(f => {
        const filePath = path.join(dir, f);
        const stat = fs.statSync(filePath);

        return {
          name: f,
          url: `/ai_outputs/images/${f}`,
          time: stat.mtimeMs,
        };
      })
      .sort((a, b) => b.time - a.time);

    return NextResponse.json(files.slice(0, 20));
  } catch (e) {
    return NextResponse.json([]);
  }
}