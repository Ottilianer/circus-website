import { CreatePresaleObject } from "~/server/objects/presale.object";
import { validateZodSchema } from "~/server/utils/validation";
import * as jwt from "jsonwebtoken";
import * as pb from "pocketbase";

export default async (body: object) => {
  const presale = validateZodSchema(CreatePresaleObject, body);

  const code = jwt.sign(presale, process.env.SECRET_KEY as string, {
    expiresIn: "24h",
  });

  const template = await new Template("presale-code-email.html", {
    name: presale.name,
    code: code,
    domain: process.env.DOMAIN as string,
    currentYear: new Date().getFullYear().toString(),
  }).load();
};
