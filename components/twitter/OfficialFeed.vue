<template>
  <div>
    <div class="card glass card-compact bg-teal-900">
      <div class="card-body">
        <h2 class="card-title">X(旧Twitter)</h2>
      </div>
      <a
        class="twitter-timeline"
        data-theme="dark"
        data-chrome="noheader nofooter noborders"
        href="https://twitter.com/zen96k/lists/1847740575807914084?ref_src=twsrc%5Etfw"
        >A Twitter List by zen96k</a
      >
      <div class="card-body"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  useHead({
    script: [{ src: "https://platform.twitter.com/widgets.js", async: true }]
  })
</script>
