<template>
  <div>
    <a
      class="twitter-timeline"
      data-theme="dark"
      data-chrome="noborders"
      href="https://twitter.com/zen96k/lists/1847740575807914084?ref_src=twsrc%5Etfw"
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
