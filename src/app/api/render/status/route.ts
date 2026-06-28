export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const task_id = searchParams.get("id");

  if (!task_id) {
    return Response.json({ error: "missing task_id" }, { status: 400 });
  }

  const COMFYUI_URL = process.env.COMFYUI_URL;

  const res = await fetch(`${COMFYUI_URL}/history/${task_id}`);
  const data = await res.json();

  let imageUrl = null;

  try {
    const outputs = data[task_id]?.outputs;

    for (const nodeId in outputs) {
      const images = outputs[nodeId]?.images;
      if (images?.length) {
        imageUrl = `/output/${images[0].filename}`;
        break;
      }
    }
  } catch (e) {}

  return Response.json({
    task_id,
    status: data[task_id] ? "completed" : "processing",
    image: imageUrl
  });
}