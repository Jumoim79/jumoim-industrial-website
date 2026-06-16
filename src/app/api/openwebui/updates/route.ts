import { NextResponse } from "next/server";

// 模拟 CMS 内容（后面可换数据库）
let updates = [
  {
    id: 1,
    title: "Conformal Cooling Optimization Breakthrough",
    category: "plastic-mold",
    country: "global",
    content:
      "Advanced conformal cooling channels improved cycle time by 22% in high-precision injection molds.",
    date: new Date().toISOString(),
  },
  {
    id: 2,
    title: "High-Precision CNC Tolerance Upgrade",
    category: "cnc",
    country: "global",
    content:
      "Achieved ±0.005mm machining tolerance for aerospace-grade components.",
    date: new Date().toISOString(),
  },
];

// GET：网站读取内容
export async function GET() {
  return NextResponse.json({
    success: true,
    data: updates,
  });
}

// POST：OpenWebUI 写入内容（关键）
export async function POST(req: Request) {
  const body = await req.json();

  const newItem = {
    id: updates.length + 1,
    title: body.title,
    category: body.category,
    country: body.country || "global",
    content: body.content,
    date: new Date().toISOString(),
  };

  updates.unshift(newItem);

  return NextResponse.json({
    success: true,
    message: "Update added",
    data: newItem,
  });
}