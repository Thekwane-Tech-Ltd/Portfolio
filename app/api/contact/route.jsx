import nodemailer from "nodemailer";

export async function POST(req) {
  console.log("API HIT ✅");

  try {
    const body = await req.json();
    console.log("BODY:", body);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Test SMTP connection
    await transporter.verify();
    console.log("SMTP CONNECTION SUCCESS ✅");

    const info = await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: body.subject || "New Contact Message",
      text: `
Name: ${body.fullName}
Phone: ${body.phone}
Email: ${body.email}

Message:
${body.message}
      `,
    });

    console.log("EMAIL SENT:", info);

    return Response.json({ success: true });
  } catch (error) {
    console.error("ERROR:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}