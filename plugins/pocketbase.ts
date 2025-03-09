import PocketBase from "pocketbase";

export default defineNuxtPlugin((nuxtApp) => {
  const pb = new PocketBase(useRuntimeConfig().public.POCKETBASE_ADDRESS);
  pb.autoCancellation(false);
  return {
    provide: {
      pb,
    },
  };
});
