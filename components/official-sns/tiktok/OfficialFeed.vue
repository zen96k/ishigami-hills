<template>
  <div>
    <div class="card glass card-compact bg-teal-950">
      <div class="card-body">
        <h2 class="card-title">
          <span>Tiktok</span>
        </h2>
        <span>Tiktokの埋め込みコードを使用。</span>
      </div>
      <blockquote
        class="tiktok-embed"
        cite="https://www.tiktok.com/@akfg_official_"
        data-unique-id="akfg_official_"
        data-embed-type="creator"
        style="margin: 0%"
      >
        <section>
          <a
            target="_blank"
            href="https://www.tiktok.com/@akfg_official_?refer=creator_embed"
            >@akfg_official_</a
          >
        </section>
      </blockquote>
      <div class="card-body"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  useHead({
    script: [{ src: "https://www.tiktok.com/embed.js", async: true }]
  })
</script>
