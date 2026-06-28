export async function GET() {
  const res = await fetch("http://127.0.0.1:9102/list")
  const data = await res.json()

  return Response.json({
    images: data.images || [],
    count: data.count || 0
  })
}