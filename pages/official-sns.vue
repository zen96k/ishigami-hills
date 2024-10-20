<template>
  <div>
    <div class="mx-3 my-3 grid grid-cols-1 gap-3 lg:grid-cols-2">
      <TwitterOfficialFeed />
      <TiktokOfficialFeed />
    </div>
  </div>
</template>

<script setup lang="ts">
  useHead({ title: "公式SNS" })
</script>
