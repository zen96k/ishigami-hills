// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    fastApiBaseUrl: ""
  },
  modules: ["@nuxt/eslint", "@primevue/nuxt-module"],
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  primevue: {
    options: {
      theme: "none"
    }
  }
})
