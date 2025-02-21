<template>
  <div>
    <div class="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
      <RssGoogleNews />
      <RssGeneralInformation />
      <RssGotchNote />
      <RssAVMSNote />
    </div>
  </div>
</template>

<script setup lang="ts">
  useSeoMeta({
    title: "Radar"
  })
</script>
