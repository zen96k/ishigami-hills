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
</script>
