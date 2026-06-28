import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const body = await req.json();

  const filePath = path.join(process.cwd(), "data/cases/v1.json");

  const raw = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw || "[]");

  const newItem = {
    ...body,
    id: body.id || "case_" + Date.now(),
    created_at: new Date().toISOString()
  };

  data.unshift(newItem);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  return Response.json({
    success: true,
    id: newItem.id
  });
}