<template>
  <div>
    <a
      class="twitter-timeline"
      href="https://twitter.com/zen96k/lists/1847740575807914084?ref_src=twsrc%5Etfw"
      data-chrome="nofooter noborders"
      >A Twitter List by zen96k</a
    >
  </div>
</template>

<script setup lang="ts">
  useHead({
    title: "公式SNS",
    script: [{ src: "https://platform.twitter.com/widgets.js", async: true }]
  })
</script>
