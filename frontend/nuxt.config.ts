// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/test-utils/module"],

  components: [
    { path: "~/components/global", pathPrefix: false },
    "~/components",
  ],
  css: ["assets/css/tailwind.css"],

  image: {
    dir: "assets/media",
  },
});
