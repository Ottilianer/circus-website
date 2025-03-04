import { z } from "zod";

import jwt from "jsonwebtoken";
import { CircusPresale } from "~/shared/types/presales";

const VerifyPresaleObject = z.object({
  code: z.string(),
});

export default defineEventHandler(async (event) => {
  const { code } = validateZodSchema(
    VerifyPresaleObject,
    await readBody(event)
  );

  let presale;
  let name, email, regular_cards, discount_cards, performance_id;
  try {
    const {
      data: {
        name: n,
        email: e,
        regularCards: rc,
        discountCards: dc,
        performanceId: pi,
      },
    } = jwt.verify(code, process.env.SECRET_KEY as string) as {
      data: any;
    };
    name = n;
    email = e;
    regular_cards = rc;
    discount_cards = dc;
    performance_id = pi;
  } catch (error) {
    setResponseStatus(event, 400, "Invalid code");
  }
  try {
    const pocketbase = await getPocketbase();
    pocketbase.collection("presales").create({
      name,
      email,
      regular_cards,
      discount_cards,
      performance: performance_id,
    });
    setResponseStatus(event, 200, "Presale created");
  } catch (error) {
    setResponseStatus(event, 500, "Error creating presale: " + error);
  }
});
