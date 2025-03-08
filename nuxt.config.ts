// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/test-utils/module", "vue-sonner/nuxt", "@nuxthub/core"],

  sourcemap: {
    server: true,
    client: true,
  },

  runtimeConfig: {
    public: {
      POCKETBASE_ADDRESS: process.env.POCKETBASE_ADDRESS,
      PRESALE_SPECIAL_REGULAR_PRICE: process.env.PRESALE_SPECIAL_REGULAR_PRICE,
      PRESALE_SPECIAL_DISCOUNT_PRICE:
        process.env.PRESALE_SPECIAL_DISCOUNT_PRICE,
      PRESALE_REGULAR_PRICE: process.env.PRESALE_REGULAR_PRICE,
      PRESALE_DISCOUNT_PRICE: process.env.PRESALE_DISCOUNT_PRICE,
    },
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
    },
  },

  image: {
    dir: "public/media",
  },
});