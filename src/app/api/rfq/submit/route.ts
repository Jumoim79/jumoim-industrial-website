import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "rfq.json");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const rfqItem = {
      id: Date.now(),
      name: body.name,
      email: body.email,
      company: body.company,
      message: body.message,
      category: body.category || "general",
      createdAt: new Date().toISOString(),
      status: "new",
    };

    let existingData = [];

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");

      existingData = fileContent
        ? JSON.parse(fileContent)
        : [];
    }

    existingData.unshift(rfqItem);

    fs.writeFileSync(
      filePath,
      JSON.stringify(existingData, null, 2)
    );

    return NextResponse.json({
      success: true,
      message: "RFQ submitted successfully",
      data: rfqItem,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "RFQ submission failed",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({
        success: true,
        data: [],
      });
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");

    const data = fileContent
      ? JSON.parse(fileContent)
      : [];

    return NextResponse.json({
      success: true,
      data,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}