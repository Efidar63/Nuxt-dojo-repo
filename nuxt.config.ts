// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  compatibilityDate: "2025-02-26",

  // CSS file path
  css: ["~/assets/css/tailwind.css"],

  // Ensure app directory is watched for changes
  watch: ["~/app/**/*"],

  // Configure tailwind module
  tailwindcss: {
    exposeConfig: true,
  },

  // App configuration
  app: {
    head: {
      title: "Shoppie",
      meta: [{ name: "description", content: "Nuxt Dojo Merchandise Store" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/images/shopee.svg",
        },
      ],
    },
  },

  // Runtime config should be at the top level, not inside app
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
  },
});
