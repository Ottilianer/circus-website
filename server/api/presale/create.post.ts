import { z } from "zod";
import { sendMail } from "~/server/utils/mail";
import { Template } from "~/server/utils/templating";
import { createToken } from "~/server/utils/encryption";

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
  console.log("secretKey", useRuntimeConfig().secretKey);
  const code = await createToken(
    { data: presale },
    useRuntimeConfig().secretKey
  );

  const template = await new Template("presale-verify-email.html", {
    name: presale.name,
    code: code,
    domain: useRuntimeConfig().public.nuxtAddress,
    currentYear: new Date().getFullYear().toString(),
  }).load();

  try {
    await sendMail(
      presale.email,
      "Bestätigen Sie Ihre Teilnahme am Vorverkauf",
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
