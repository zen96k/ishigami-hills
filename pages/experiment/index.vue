<template>
  <div />
</template>

<script setup lang="ts">
  onMounted(() => {
    setTimeout(() => {
      return navigateTo("/experiment/stroll-map")
    }, 1000)
  })
</script>
