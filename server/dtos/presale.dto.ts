import { z } from "zod";

export const PresaleDto = z.object({
  name: z.string(),
  description: z.string(),
  image: z.string(),
  price: z.number(),
  quantity: z.number(),
  startDate: z.string(),
  endDate: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
