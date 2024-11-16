<template>
  <div>
    <div id="map" />
  </div>
</template>

<script setup lang="ts">
  import { Loader } from "@googlemaps/js-api-loader"

  const runtimeConfig = useRuntimeConfig()

  onMounted(async () => {
    const loader = new Loader({
      apiKey: runtimeConfig.public.googleMapApiKey,
      version: "weekly"
    })

    const { Place } = await loader.importLibrary("places")
    const { Map, InfoWindow } = await loader.importLibrary("maps")
    const { AdvancedMarkerElement } = await loader.importLibrary("marker")

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

    const place = new Place({
      id: "ChIJ-Yif-kRBGGAR0WQdmmLo688"
    })
    await place.fetchFields({
      fields: ["location"]
    })

    const mapOptions: google.maps.MapOptions = {
      zoom: 17,
      mapId: "67c4afba5d5d2642",
      mapTypeControl: false
    }

    const map = new Map(mapElement, {
      center: place.location ?? null,
      ...mapOptions
    })

    const currentPlaceId = ref("")
    const currentMarkerElement = ref(new AdvancedMarkerElement())
    const currentInfoWindow = ref(new InfoWindow())

    map.addListener("click", async (event: google.maps.MapMouseEvent) => {
      if ("placeId" in event) {
        event.stop()

        if ((event.placeId as string) !== currentPlaceId.value) {
          currentPlaceId.value = ""
          currentMarkerElement.value.map = null
          currentInfoWindow.value.close()

          const place = new Place({
            id: event.placeId as string
          })
          await place.fetchFields({
            fields: ["displayName", "googleMapsURI", "location"]
          })
          currentPlaceId.value = place.id

          const markerElement = new AdvancedMarkerElement({
            map: map,
            position: place.location ?? null
          })
          currentMarkerElement.value = markerElement

          const contentElement = document.createElement("div")
          contentElement.innerHTML =
            /* HTML */
            `
              <div class="card max-w-96 bg-base-100">
                <div class="card-body">
                  <h2 class="card-title">${place.displayName}</h2>
                  <span>まだ情報が登録されていません。</span>
                  <div class="card-actions justify-end">
                    <button class="btn btn-disabled btn-primary btn-xs">
                      登録
                    </button>
                    <a
                      href="${place.googleMapsURI}"
                      target="_blank"
                      class="btn btn-primary btn-xs"
                    >
                      Googleマップ
                    </a>
                  </div>
                </div>
              </div>
            `

          const infoWindow = new InfoWindow({
            content: contentElement,
            position: event.latLng
          })
          currentInfoWindow.value = infoWindow
          infoWindow.open({
            map: map,
            anchor: markerElement
          })
        }
      } else {
        currentPlaceId.value = ""
        currentMarkerElement.value.map = null
        currentInfoWindow.value.close()
      }
    })
  })
</script>
