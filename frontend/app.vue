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
  const title = ref("")

  useHead({
    titleTemplate: (titleChunk) => {
      title.value = titleChunk ? `${titleChunk} - 石上ヒルズ` : "石上ヒルズ"
      return title.value
    }
  })

  useSeoMeta({
    title: title.value,
    ogTitle: title.value,
    description: "アジカンの非公式ファンサイト",
    ogDescription: "アジカンの非公式ファンサイト",
    ogSiteName: "石上ヒルズ",
    ogImage:
      "https://cdn.prod.website-files.com/603c87adb15be3cb0b3ed9b5/670dcf30efc008ddd6d9027d_061-min.png",
    twitterTitle: title.value,
    twitterDescription: "アジカンの非公式ファンサイト",
    twitterCreator: "@zen96k",
    twitterImage:
      "https://cdn.prod.website-files.com/603c87adb15be3cb0b3ed9b5/670dcf30efc008ddd6d9027d_061-min.png",
    twitterCard: "summary"
  })
</script>
