import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const body = await req.json();

  const filePath = path.join(process.cwd(), "data/cases/v1.json");

  let data = [];

  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath, "utf-8");
    data = JSON.parse(raw || "[]");
  }

  const newCase = {
    ...body,
    id: body.id || "case_" + Date.now(),
    created_at: new Date().toISOString()
  };

  data.unshift(newCase);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  return Response.json({
    success: true,
    inserted: newCase.id,
    total: data.length
  });
}