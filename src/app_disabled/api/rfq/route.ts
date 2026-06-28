import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    // -----------------------------
    // 1. 保存RFQ到本地
    // -----------------------------
    const logDir = path.join(process.cwd(), "rfq_logs");

    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
    }

    const filePath = path.join(
      logDir,
      `rfq_${Date.now()}.json`
    );

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    // -----------------------------
    // 2. 邮件通知（工程师）
    // -----------------------------
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "YOUR_EMAIL@gmail.com",
        pass: "YOUR_APP_PASSWORD"
      }
    });

    await transporter.sendMail({
      from: "JUMOIM RFQ <YOUR_EMAIL@gmail.com>",
      to: "YOUR_EMAIL@gmail.com",
      subject: "New RFQ Request Received",
      text: `
New RFQ Received:

Name: ${data.name}
Email: ${data.email}
Material: ${data.material}
Quantity: ${data.quantity}
Message: ${data.message}

File: ${filePath}
      `
    });

    // -----------------------------
    // 3. 返回客户结果（无AI字样）
    // -----------------------------
    return new Response(
      JSON.stringify({
        success: true,
        message: "Your request has been received. Our engineering team will contact you shortly."
      }),
      { status: 200 }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Submission failed. Please try again later."
      }),
      { status: 500 }
    );
  }
}