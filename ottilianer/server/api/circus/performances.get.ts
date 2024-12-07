import getPocketBaseInstance from "~/server/pocketbase";

export default defineEventHandler(async (event) => {
  const pocketbase = await getPocketBaseInstance();

  const performances = await pocketbase
    .collection("circus_performance")
    .getFullList();

  return {
    data: performances,
  };
});
