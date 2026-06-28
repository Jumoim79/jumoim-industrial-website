export async function POST(req: Request) {

  try {
    const data = await req.json()

    const name = data.name || "-"
    const email = data.email || "-"
    const company = data.company || "-"
    const country = data.country || "-"
    const message = data.message || "-"

    // WhatsApp（主通道）
    const whatsapp_url =
      "https://wa.me/8613812345678?text=" +
      encodeURIComponent(
        `🔥 RFQ\n\nName:${name}\nEmail:${email}\nCompany:${company}\nCountry:${country}\n\nMessage:\n${message}`
      )

    return Response.json({
      status: "success",
      whatsapp_url
    })

  } catch (err: any) {
    return Response.json({
      status: "error",
      message: err.message
    })
  }
}