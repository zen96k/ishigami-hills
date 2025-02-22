<template>
  <div>
    <div class="px-8 py-8 lg:px-16">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
        <RssGoogleNews />
        <RssGeneralInformation />
        <RssGotchNote />
        <RssAVMSNote />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  useSeoMeta({
    title: "Radar"
  })
</script>
