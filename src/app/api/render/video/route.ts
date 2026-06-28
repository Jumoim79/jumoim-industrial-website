export async function POST(req: Request) {
  const body = await req.json();

  const prompt =
    body.prompt_video ||
    "3D industrial CNC machining animation, factory automation, cinematic";

  const COMFYUI_URL = process.env.COMFYUI_URL;

  const res = await fetch(`${COMFYUI_URL}/prompt`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: {
        text: prompt
      }
    })
  });

  const result = await res.json();

  return Response.json({
    success: true,
    comfyui_task_id: result.prompt_id,
    status: "video_submitted"
  });
}