<template>
  <div></div>
</template>

<script setup lang="ts">
  definePageMeta({ layout: "center" })

  onMounted(() => {
    setTimeout(() => {
      return navigateTo("/official-feed")
    }, 1000)
  })
</script>
