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
    "@nuxthub/core",
  ],

  sourcemap: {
    server: true,
    client: true,
  },

  runtimeConfig: {
    public: {
      pocketbaseAddress: "",
      presaleSpecialRegularPrice: "",
      presaleSpecialDiscountPrice: "",
      presaleRegularPrice: "",
      presaleDiscountPrice: "",
      presaleMinutesBeforePerformance: "",
      nuxtAddress: "",
    },

    secretKey: "",
    pocketbaseAdminUser: "",
    pocketbaseAdminPassword: "",
  },

  components: [{ path: "~/components", pathPrefix: false }],
  css: ["public/css/tailwind.css"],

  app: {
    head: {
      htmlAttrs: {
        lang: "de",
      },

      // Favicons
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/media/logos/logo_squared.png",
        },
      ],

      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Der Circus St. Ottilien ist einer der größten Schülercircusse der Welt. Er wird von Schülern des Gymnasiums St. Ottilien organisiert",
        },
      ],

      script: [
        {
          src: "https://cloud.umami.is/script.js",
          defer: true,
          "data-website-id": "c92ecedd-e595-47b5-a829-52f09b8a31a5",
        },
      ],
    },
  },

  image: {
    dir: "public/media",
  },
});
