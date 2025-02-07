import { z } from "zod";

export const CreatePresaleObject = z.object({
  // Name must be like "John Doe"
  name: z.string().regex(/^[a-zA-Z]+ [a-zA-Z]+$/),
  email: z.string().email(),
  regularCards: z.number(),
  discountCards: z.number(),

  // id of the performance
  performanceId: z.string(),
});
