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
    ogImage:
      "https://cdn.prod.website-files.com/603c87adb15be3cb0b3ed9b5/670dcf30efc008ddd6d9027d_061-min.png",
    twitterCard: "summary_large_image"
  })
</script>
