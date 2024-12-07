import { verify, sign } from "jsonwebtoken";
import nodemailer, { SendMailOptions } from "nodemailer";
import * as path from "node:path";
import { CircusPresale } from "~/types/presales";

export default function usePresaleVerification() {
  const generateVerificationCode = (presale: CircusPresale): string => {
    return sign(presale, process.env.SECRET_KEY as string, {
      expiresIn: "24h",
    });
  };

  const sendVerificationEmail = async (presale: CircusPresale) => {
    const code = generateVerificationCode(presale);

    const filePath = path.join(
      process.cwd(),
      "public",
      "templates",
      "presale-code-email.html"
    );

    // @ts-ignore
    const file = Bun.file(filePath);
    const template = ((await file.text()) as string)
      .replace("{{ name }}", presale.name)
      .replace("{{ code }}", code)
      .replace(
        "{{ domain }}",
        process.env.HUMAN_READABLE_FRONTEND_ADDRESS as string
      )
      .replace("{{ currentYear }}", new Date().getFullYear().toString());

    const replacements = {
      "{{ name }}": presale.name,
      "{{ code }}": code,
      "{{ domain }}": process.env.HUMAN_READABLE_FRONTEND_ADDRESS as string,
      "{{ currentYear }}": new Date().getFullYear().toString(),
    };

    const html = Object.entries(replacements).reduce(
      (str, [key, value]) => str.replaceAll(key, value),
      template
    );

    const mailOptions: SendMailOptions = {
      from: process.env.SMTP_FROM,
      to: presale.email,
      subject: "Bitte bestätigen Sie Ihre Bestellung",
      html: html,
    };

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
    await transporter.sendMail(mailOptions);
  };

  const verifyCode = (code: string): CircusPresale => {
    return verify(code, process.env.SECRET_KEY as string) as CircusPresale;
  };

  return {
    sendVerificationEmail,
    verifyCode,
  };
}
