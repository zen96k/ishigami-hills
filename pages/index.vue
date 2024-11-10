<template>
  <div />
</template>

<script setup lang="ts">
  onMounted(() => {
    setTimeout(() => {
      return navigateTo("/radar")
    }, 1000)
  })
</script>
