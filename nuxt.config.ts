export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,
  spaLoadingTemplate: true,
  runtimeConfig: {
    public: {
      googleMapApiKey: "",
      appwriteProjectId: "",
      appwriteApiEndpoint: "",
      appwriteProjectDatabaseId: "",
      appwriteStrollMapPlaceInformationCollectionId: ""
    }
  },
  app: {
    head: {
      title: "石上ヒルズ",
      meta: [
        {
          property: "og:title",
          content: "石上ヒルズ"
        },
        {
          name: "description",
          content: "アジカンの非公式ファンサイト。"
        },
        {
          property: "og:description",
          content: "アジカンの非公式ファンサイト。"
        },
        {
          property: "og:site_name",
          content: "石上ヒルズ"
        },
        {
          property: "og:image",
          content:
            "https://cdn.prod.website-files.com/603c87adb15be3cb0b3ed9b5/670dcf30efc008ddd6d9027d_061-min.png"
        },
        {
          name: "twitter:title",
          content: "石上ヒルズ"
        },
        {
          name: "twitter:description",
          content: "アジカンの非公式ファンサイト。"
        },
        {
          name: "twitter:creator",
          content: "@zen96k"
        },
        {
          name: "twitter:image",
          content:
            "https://cdn.prod.website-files.com/603c87adb15be3cb0b3ed9b5/670dcf30efc008ddd6d9027d_061-min.png"
        },
        {
          name: "twitter:card",
          content: "summary"
        }
      ]
    }
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  modules: ["@nuxt/eslint", "@nuxt/icon", "@vueuse/nuxt"]
})
