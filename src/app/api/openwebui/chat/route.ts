import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { reply: "Please send message" },
        { status: 400 }
      );
    }

    // 工业客服逻辑（无 AI 字样）
    const reply =
      "We support Precision Mold / Metal Mold / CNC Manufacturing. Please submit RFQ for engineering evaluation.";

    return NextResponse.json({
      reply,
    });
  } catch {
    return NextResponse.json({
      reply: "Service unavailable",
    });
  }
}