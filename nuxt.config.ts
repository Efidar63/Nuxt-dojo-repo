// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  compatibilityDate: "2025-02-26",

  // Add CSS file path
  css: ["~/assets/css/tailwind.css"],

  // Ensure app directory is watched for changes
  watch: ["~/app/**/*"],

  // Configure tailwind module
  tailwindcss: {
    // This setting isn't required but can help if you're experiencing issues
    exposeConfig: true,
    // If you need to customize the config location:
    // configPath: '~/tailwind.config.js',
    // If you need to enable viewer:
    // viewer: true,
  },

  // Configure error handling for better debugging
  app: {
    head: {
      title: "Nuxt Dojo Merch",
      meta: [{ name: "description", content: "Nuxt Dojo Merchandise Store" }],
    },
  },
});
