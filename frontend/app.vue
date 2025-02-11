<template>
  <div>
    <Html lang="ja">
      <Head />
      <Body>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </Body>
    </Html>
  </div>
</template>

<script setup lang="ts">
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `石上ヒルズ - ${titleChunk}` : "石上ヒルズ"
    }
  })

  useSeoMeta({
    ogTitle: "石上ヒルズ",
    description: "アジカンの非公式ファンサイト",
    ogDescription: "アジカンの非公式ファンサイト",
    ogSiteName: "石上ヒルズ",
    ogImage:
      "https://cdn.prod.website-files.com/603c87adb15be3cb0b3ed9b5/670dcf30efc008ddd6d9027d_061-min.png",
    twitterTitle: "石上ヒルズ",
    twitterDescription: "アジカンの非公式ファンサイト",
    twitterCreator: "@zen96k",
    twitterImage:
      "https://cdn.prod.website-files.com/603c87adb15be3cb0b3ed9b5/670dcf30efc008ddd6d9027d_061-min.png",
    twitterCard: "summary"
  })
</script>
