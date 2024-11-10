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

  const initialPosition = {
    lat: 35.32342341173676,
    lng: 139.6254324509497
  }
  const mapOptions = {
    center: initialPosition,
    zoom: 15,
    mapId: "67c4afba5d5d2642"
  }

  onMounted(async () => {
    const { Map } = await googleMap.importLibrary("maps")
    const { AdvancedMarkerElement } = await googleMap.importLibrary("marker")

    const map = new Map(
      document.getElementById("map") as HTMLElement,
      mapOptions
    )
    const advancedMarkerElement = new AdvancedMarkerElement({
      map,
      position: initialPosition
    })
  })
</script>
