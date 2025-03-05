import { z } from "zod";

import jwt from "jsonwebtoken";
import { CircusPerformance, CircusPresale } from "~/shared/types/presales";

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

    try {
      const performance = (await pocketbase
        .collection("performances")
        .getOne(performance_id)) as CircusPerformance;

      const template = await new Template("presale-ticket-email.html", {
        name: name,
        code: code,
        domain: process.env.NUXT_URL as string,
        currentYear: new Date().getFullYear().toString(),
        minutesBeforePerformance:
          process.env.PRESALE_MINUTES_BEFORE_PERFORMANCE ?? "30",
        performanceDate: new Date(performance.date).toLocaleDateString("de-DE"),
        performanceTime: new Date(performance.date).toLocaleTimeString("de-DE"),
        regularCards: regular_cards,
        discountCards: discount_cards,
        regularCardsTotal: String(
          regular_cards *
            (performance.specialPerformance
              ? Number(process.env.PRESALE_SPECIAL_REGULAR_PRICE) || 0
              : Number(process.env.PRESALE_REGULAR_PRICE) || 0)
        ),
        discountCardsTotal: String(
          discount_cards *
            (performance.specialPerformance
              ? Number(process.env.PRESALE_SPECIAL_DISCOUNT_PRICE) || 0
              : Number(process.env.PRESALE_DISCOUNT_PRICE) || 0)
        ),
      }).load();

      await sendMail(
        email,
        "Vielen Dank für Ihre Teilnahme am Vorverkauf",
        template.render()
      );
    } catch (error) {
      setResponseStatus(
        event,
        200,
        "Presale created, but error sending email: " + (error as Error).message
      );
    }

    setResponseStatus(event, 200, "Presale created");
  } catch (error) {
    setResponseStatus(event, 500, "Error creating presale: " + error);
  }
});
