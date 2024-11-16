<template>
  <div>
    <div id="map" />
  </div>
</template>

<script setup lang="ts">
  const googleMap = useGoogleMap()

  const initialPosition = {
    lat: 35.32342341173676,
    lng: 139.6254324509497
  }
  const mapOptions: google.maps.MapOptions = {
    center: initialPosition,
    zoom: 17,
    mapId: "67c4afba5d5d2642",
    mapTypeControl: false
  }

  const createInfoWindowContent = () => {
    const divElement = document.createElement("div")
    divElement.innerHTML = `
    <div class="card bg-base-100 max-w-96">
      <div class="card-body">
        <h2 class="card-title">関東学院大学</h2>
        <span>
          ASIAN KUNG-FU GENERATIONが結成された場所。
        </span>
        <div class="card-actions justify-end">
          <button class="btn btn-primary btn-xs">Google Map</button>
        </div>
      </div>
    </div>
    `

    return divElement
  }

  onMounted(async () => {
    const appHeaderElement = document.getElementById(
      "app-header"
    ) as HTMLElement
    const appFooterElement = document.getElementById(
      "app-footer"
    ) as HTMLElement
    const mapElement = document.getElementById("map") as HTMLElement

    mapElement.style.height =
      window.innerHeight -
      appHeaderElement.offsetHeight -
      appFooterElement.offsetHeight +
      "px"

    const { Map } = await googleMap.importLibrary("maps")

    const map = new Map(
      document.getElementById("map") as HTMLElement,
      mapOptions
    )

    map.addListener("click", (event: google.maps.MapMouseEvent) => {
      if ("placeId" in event) {
        event.stop()
        console.dir(event)
        const infoWindow = new google.maps.InfoWindow({
          content: createInfoWindowContent(),
          position: event.latLng
        })
        infoWindow.open({ map: map })
      }
    })
  })
</script>
