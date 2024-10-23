<template>
  <div></div>
</template>

<script setup lang="ts">
  useHead({ title: "レーダー" })

  onMounted(() => {
    setTimeout(() => {
      return navigateTo("/radar/official-site")
    }, 1000)
  })
</script>
