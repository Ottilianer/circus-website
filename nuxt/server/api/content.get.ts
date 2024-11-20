import PocketBase from "pocketbase";

export default defineEventHandler(async (event) => {
  const pocketBase = new PocketBase("http://localhost:8090");
  try {
    const authData = await pocketBase.admins.authWithPassword(
      "onpu7ffcyx5n1dh",
      "1234567890"
    );
  } catch (error) {
    console.error(error);
  }
  return {
    hello: "JSON.stringify(content)",
  };
});
