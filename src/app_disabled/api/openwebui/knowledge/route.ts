import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const rfqPath = path.join(
  process.cwd(),
  "data",
  "rfq.json"
);

export async function GET() {
  try {
    let rfqData = [];

    if (fs.existsSync(rfqPath)) {
      const content = fs.readFileSync(
        rfqPath,
        "utf-8"
      );

      rfqData = content
        ? JSON.parse(content)
        : [];
    }

    const insights = rfqData.map(
      (item: any) => ({
        id: item.id,
        title:
          item.company ||
          "Engineering Request",
        content: item.message,
        category: item.category,
        createdAt: item.createdAt,
      })
    );

    return NextResponse.json({
      success: true,
      data: insights,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}