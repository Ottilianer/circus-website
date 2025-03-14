import PocketBase from "pocketbase";

export default defineNuxtPlugin((nuxtApp) => {
  const { pocketbaseAddress } = useRuntimeConfig().public;
  const pb = new PocketBase(pocketbaseAddress as string);
  pb.autoCancellation(false);
  return {
    provide: {
      pb,
    },
  };
});
