// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],

  runtimeConfig: {
    public: {
      pocketBaseUrl: "http://127.0.0.1:8090",
    },
  },
  css: ["assets/css/tailwind.css", "assets/css/vue-datepicker.css"],

  image: {
    dir: "assets/media",
  },

  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },
});
