import nodemailer, { SendMailOptions } from "nodemailer";

export async function sendMail(options: SendMailOptions) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT as string),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  await transporter.sendMail(options);
}
