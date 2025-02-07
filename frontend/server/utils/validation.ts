import { z } from "zod";

export function validateZodSchema<T>(schema: z.ZodType<T, any>, data: any): T {
  try {
    return schema.parse(data);
  } catch (error: any) {
    console.log(error);
    throw createError({
      data: error.errors,
      status: 422,
      statusMessage: "Schema validation error",
    });
  }
}
