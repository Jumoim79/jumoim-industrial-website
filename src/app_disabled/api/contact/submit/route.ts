import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    if (!email || !message) {
      return NextResponse.json(
        { ok: false },
        { status: 400 }
      );
    }

    console.log("CONTACT:", body);

    return NextResponse.json({
      ok: true,
      message: "Message received",
    });
  } catch (e) {
    return NextResponse.json(
      { ok: false },
      { status: 500 }
    );
  }
}