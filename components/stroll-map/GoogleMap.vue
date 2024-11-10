<template>
  <div>
    <div
      id="map"
      class="min-h-screen min-w-full"
    />
  </div>
</template>

<script setup lang="ts">
  const googleMap = useGoogleMap()

  const mapOptions = {
    center: {
      lat: 35.32355122812781,
      lng: 139.62584205091045
    },
    zoom: 15
  }

  onMounted(() => {
    googleMap
      .importLibrary("maps")
      .then(({ Map }) => {
        new Map(document.getElementById("map") as HTMLElement, mapOptions)
      })
      .catch((error) => {
        console.error(error)
      })
  })
</script>
