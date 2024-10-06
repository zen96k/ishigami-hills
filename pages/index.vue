<template>
  <div></div>
</template>

<script setup lang="ts">
  definePageMeta({ layout: "center" })

  onMounted(() => {
    setTimeout(() => {
      return navigateTo("/official-sns")
    }, 1000)
  })
</script>
