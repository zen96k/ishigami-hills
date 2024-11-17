<template>
  <div>
    <Html
      lang="ja"
      data-theme="dark"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Html>
  </div>
</template>

<script setup lang="ts">
  useHeadSafe({
    titleTemplate: (title) => {
      const route = useRoute()
      const appName = "石上ヒルズ"
      if (route.path === "/") {
        return appName
      } else {
        return title === undefined ? appName : `${appName} - ${title}`
      }
    }
  })
</script>
