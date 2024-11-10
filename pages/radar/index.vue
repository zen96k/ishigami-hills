<template>
  <div />
</template>

<script setup lang="ts">
  onMounted(() => {
    setTimeout(() => {
      return navigateTo("/radar/official-site")
    }, 1000)
  })
</script>
