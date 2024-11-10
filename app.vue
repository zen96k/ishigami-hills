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
    titleTemplate: (title) => {
      return title === undefined ? "石上ヒルズ" : `石上ヒルズ - ${title}`
    }
  })
  useSeoMeta({
    ogTitle: "石上ヒルズ",
    description: "アジカンの非公式ファンサイト。",
    ogDescription: "アジカンの非公式ファンサイト。",
    ogImage:
      "https://cdn.prod.website-files.com/603c87adb15be3cb0b3ed9b5/670dcf30efc008ddd6d9027d_061-min.png",
    twitterCard: "summary_large_image"
  })
</script>
