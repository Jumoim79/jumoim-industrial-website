export async function GET() {
  return Response.json({
    status: "ok",
    message: "JUMOIM API is running",
    time: new Date().toISOString()
  });
}