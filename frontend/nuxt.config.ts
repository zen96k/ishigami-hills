import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    fastApiBaseUrl: ""
  },
  modules: ["@nuxt/eslint", "@nuxt/icon"],
  vite: {
    plugins: [tailwindcss()]
  },
  css: ["~/assets/css/tailwind.css"]
})
