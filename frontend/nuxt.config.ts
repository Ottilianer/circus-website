// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/test-utils/module",
    "vue-sonner/nuxt",
  ],

  components: [{ path: "~/components", pathPrefix: false }],
  css: ["public/css/tailwind.css"],

  app: {
    head: {
      // Favicons
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/media/logos/logo_squared.png",
        },
      ],
    },
  },

  image: {
    dir: "public/media",
  },
});
