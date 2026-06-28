import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {

  try {
    const data = await req.json()

    const name = data.name || "-"
    const email = data.email || "-"
    const company = data.company || "-"
    const country = data.country || "-"
    const message = data.message || "-"

    // =========================
    // 1. 邮件系统（发给业务邮箱）
    // =========================
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your_email@gmail.com",
        pass: "your_app_password"
      }
    })

    const emailContent = `
========================
🔥 NEW RFQ FROM JUMOIM
========================

Name: ${name}
Email: ${email}
Company: ${company}
Country: ${country}

Message:
${message}

========================
SYSTEM: JUMOIM RFQ AUTO
========================
`

    await transporter.sendMail({
      from: "JUMOIM SYSTEM <your_email@gmail.com>",
      to: "sales@yourcompany.com",
      subject: "🔥 New Industrial RFQ - JUMOIM",
      text: emailContent
    })

    // =========================
    // 2. WhatsApp（业务员即时通知）
    // =========================
    const whatsappNumber = "8613812345678" // 你的业务员WB

    const whatsappMessage = encodeURIComponent(
      `🔥 NEW RFQ

Name: ${name}
Email: ${email}
Company: ${company}
Country: ${country}

Message:
${message}`
    )

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

    // =========================
    // 3. 返回结果（前端可直接跳转）
    // =========================
    return NextResponse.json({
      status: "success",
      email_sent: true,
      whatsapp_url: whatsappLink
    })

  } catch (err: any) {

    return NextResponse.json({
      status: "error",
      message: err.message
    })
  }
}