import { z } from "zod";
import jwt from "jsonwebtoken";
import { sendMail } from "~/server/utils/mail";

const CreatePresaleObject = z.object({
  // Name must be like "John Doe"
  name: z.string().regex(/^[a-zA-Z]+ [a-zA-Z]+$/),
  email: z.string().email(),
  regularCards: z.number(),
  discountCards: z.number(),
  performanceId: z.string(),
});

export default defineEventHandler(async (event) => {
  const presale = validateZodSchema(CreatePresaleObject, await readBody(event));

  const code = jwt.sign({ data: presale }, process.env.SECRET_KEY as string, {
    expiresIn: "24h",
  });

  const template = await new Template("presale-code-email.html", {
    name: presale.name,
    code: code,
    domain: process.env.NUXT_URL as string,
    currentYear: new Date().getFullYear().toString(),
  }).load();

  try {
    await sendMail(
      presale.email,
      "Bestätigen Sie Ihre Bestellung",
      template.render()
    );
  } catch (error) {
    return setResponseStatus(
      event,
      500,
      "Error sending email: " + (error as Error).message
    );
  }

  setResponseStatus(event, 200, "Email sent");
});
