<template>
  <div>
    <iframe
      id="stroll-map"
      class="size-full"
      src="https://www.google.com/maps/d/embed?mid=1SJg_XNwpVUfzKnulSJOpemX-nXqXPt8&ehbc=2E312F&noprof=1"
    />
  </div>
</template>

<script setup lang="ts">
  onMounted(() => {
    resizeStrollMapElementMinHeight()

    window.addEventListener("resize", resizeStrollMapElementMinHeight)
  })

  onUnmounted(() => {
    window.removeEventListener("resize", resizeStrollMapElementMinHeight)
  })
</script>
