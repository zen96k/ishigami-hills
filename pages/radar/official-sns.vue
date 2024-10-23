<template>
  <div>
    <div class="mx-3 my-3 grid grid-cols-1 gap-3 lg:grid-cols-3">
      <OfficialSnsTwitterOfficialFeed />
      <OfficialSnsInstagramOfficialFeed />
      <OfficialSnsTiktokOfficialFeed />
    </div>
  </div>
</template>

<script setup lang="ts">
  useHead({ title: "レーダー - 公式SNS" })
</script>
