<template>
  <div>
    <div class="card glass card-compact bg-teal-950">
      <div class="card-body">
        <h2 class="card-title">
          <span>Instagram</span>
          <span class="badge badge-warning">未実装</span>
        </h2>
        <span>Instagramのフィード。</span>
      </div>
      <div class="card-body" />
    </div>
  </div>
</template>

<script setup lang="ts">
  useHead({
    script: [{ src: "https://platform.twitter.com/widgets.js", async: true }]
  })
</script>
