<template>
  <div>
    <Html
      lang="ja"
      data-theme="sunset"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Html>
  </div>
</template>

<script setup lang="ts">
  useHead({
    titleTemplate: (pageTitle) => {
      return pageTitle === undefined
        ? "石上ヒルズ"
        : `石上ヒルズ - ${pageTitle}`
    },
    link: [{ rel: "icon", href: "/favicon.png" }]
  })
  useSeoMeta({
    title: "石上ヒルズ",
    ogTitle: "石上ヒルズ",
    description: "アジカンの非公式ファンサイト。",
    ogDescription: "アジカンの非公式ファンサイト。",
    ogImage: "https://nuxt.com/assets/design-kit/logo-green-white.png",
    twitterCard: "summary_large_image"
  })
</script>
