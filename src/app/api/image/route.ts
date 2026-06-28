import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "public/output/latest.jpg"
  );

  if (!fs.existsSync(filePath)) {
    return new NextResponse("No image found", { status: 404 });
  }

  const file = fs.readFileSync(filePath);

  return new NextResponse(file, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "no-store"
    }
  });
}