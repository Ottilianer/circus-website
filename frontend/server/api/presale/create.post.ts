import createPresaleHandler from "~/server/handlers/presale/create-presale.handler";

export default defineEventHandler(async (event) => {
  await createPresaleHandler(await readBody(event));
});
