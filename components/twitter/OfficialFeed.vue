<template>
  <div>
    <div class="card glass card-compact bg-teal-950">
      <div class="card-body">
        <h2 class="card-title">
          <span>X(旧Twitter)</span>
          <span class="badge badge-primary">未実装</span>
        </h2>
        <p>Twitter Publishが機能しておらず、ポストを取得できない。</p>
        <p>Twitter APIを呼び出すしかない。</p>
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
