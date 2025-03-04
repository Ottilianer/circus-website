import PocketBase from "pocketbase";

export default defineNuxtPlugin((nuxtApp) => {
  const pb = new PocketBase("http://localhost:8090");

  return {
    provide: {
      pb,
    },
  };
});
