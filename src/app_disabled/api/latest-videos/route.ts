import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const dir = "D:/AI_FACTORY/outputs/videos";

    const files = fs
      .readdirSync(dir)
      .filter(f => f.endsWith(".mp4"))
      .map(f => {
        const filePath = path.join(dir, f);
        const stat = fs.statSync(filePath);

        return {
          name: f,
          url: `/ai_outputs/videos/${f}`,
          time: stat.mtimeMs,
        };
      })
      .sort((a, b) => b.time - a.time);

    return NextResponse.json(files.slice(0, 20));
  } catch (e) {
    return NextResponse.json([]);
  }
}