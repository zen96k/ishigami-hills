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
      return pageTitle === undefined ? "石上ヒルズ" : `石上ヒルズ - ${pageTitle}`
    }
  })
</script>

<!-- <style>
  @import url("https://fonts.googleapis.com/css2?family=DotGothic16&display=swap");

  body {
    font-family: "DotGothic16", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
</style> -->
