import { CircusPresale } from "~/types/presales";
import nodemailer, { SendMailOptions } from "nodemailer";
import * as path from "node:path";

export default class PresaleVerificationService {
  private static instance: PresaleVerificationService;
  private presaleCodes: Map<
    string,
    { presale: CircusPresale; expiresAt: number }
  >;

  private constructor() {
    this.presaleCodes = new Map<
      string,
      { presale: CircusPresale; expiresAt: number }
    >();
  }

  public static getInstance(): PresaleVerificationService {
    if (!PresaleVerificationService.instance) {
      PresaleVerificationService.instance = new PresaleVerificationService();
    }
    return PresaleVerificationService.instance;
  }

  public generateCode(presale: CircusPresale): string {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 0.25 * 60 * 1000;
    this.presaleCodes.set(code, { presale, expiresAt });
    return code;
  }

  public verifyCode(code: string) {
    if (!this.existsVerificationByCode(code)) {
      return { found: false, presale: null };
    }

    const { presale, expiresAt } = this.presaleCodes.get(code)!;
    if (Date.now() > expiresAt) {
      this.presaleCodes.delete(code);
      return { found: false, presale: null };
    }

    return { found: true, presale };
  }

  public existsVerificationByMail(email: string): boolean {
    return Array.from(this.presaleCodes.values()).some(
      ({ presale }) => presale.email === email
    );
  }

  public existsVerificationByCode(code: string): boolean {
    return this.presaleCodes.has(code);
  }

  public getCodeByMail(email: string): string | null {
    const code = Array.from(this.presaleCodes.entries()).find(
      ([, { presale }]) => presale.email === email
    )?.[0];
    return code || null;
  }

  public async sendVerificationEmail(code: string) {
    const presale = this.presaleCodes.get(code)!.presale;
    const filePath = path.join(
      process.cwd(),
      "public",
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
    });
    await transporter.sendMail(mailOptions);
  }

  public isCodeExpired(code: string): boolean {
    if (!this.presaleCodes.has(code)) {
      return true;
    }

    const { expiresAt } = this.presaleCodes.get(code)!;
    return Date.now() > expiresAt;
  }

  public deleteVerificationCode(code: string) {
    this.presaleCodes.delete(code);
  }

  public getExpirationTime(code: string): number {
    return this.presaleCodes.get(code)!.expiresAt;
  }
}
