import { verify, sign } from "jsonwebtoken";
import { CircusPresale } from "~/types/presales";
import { Template } from "~/server/utils/templating";
import { sendMail } from "../utils/email";

export function generateVerificationCode(presale: CircusPresale): string {
  return sign(presale, process.env.SECRET_KEY as string, {
    expiresIn: "24h",
  });
}

export async function sendVerificationEmail(presale: CircusPresale) {
  const code = generateVerificationCode(presale);

  const template = new Template("presale-code-email.html", {
    name: presale.name,
    code: code,
    domain: process.env.HUMAN_READABLE_FRONTEND_ADDRESS as string,
    currentYear: new Date().getFullYear().toString(),
  });

  const html = (await template.load()).render();

  await sendMail({
    from: process.env.SMTP_FROM,
    to: presale.email,
    subject: "Bitte bestätigen Sie Ihre Bestellung",
    html: html,
  });
}

export function decodeVerificationCode(code: string): CircusPresale {
  return verify(code, process.env.SECRET_KEY as string) as CircusPresale;
}
