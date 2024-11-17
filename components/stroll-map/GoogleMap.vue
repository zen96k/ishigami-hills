<template>
  <div>
    <div id="map" />
  </div>
</template>

<script setup lang="ts">
  import { Loader } from "@googlemaps/js-api-loader"

  const runtimeConfig = useRuntimeConfig()

  const { height: windowHeight } = useWindowSize()

  watch(windowHeight, () => {
    resizeMapElementHeight()
  })

  onMounted(async () => {
    const loader = new Loader({
      apiKey: runtimeConfig.public.googleMapApiKey,
      version: "weekly"
    })

    const { Place } = await loader.importLibrary("places")
    const { Map, InfoWindow } = await loader.importLibrary("maps")
    const { AdvancedMarkerElement } = await loader.importLibrary("marker")

    const mapElement = document.getElementById("map") as HTMLElement

    resizeMapElementHeight()

    const mapOptions: google.maps.MapOptions = {
      center: { lat: 35.323432850189725, lng: 139.625426530838 },
      zoom: 17,
      mapId: "67c4afba5d5d2642",
      mapTypeControl: false
    }

    const map = new Map(mapElement, mapOptions)

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
              <div class="card card-compact max-w-96 bg-base-300">
                <div class="card-body">
                  <h2 class="card-title">${place.displayName}</h2>
                  <span>まだ情報が登録されていません。</span>
                  <div class="card-actions justify-end">
                    <button
                      class="btn btn-primary btn-xs"
                      onclick="add_place_information.showModal()"
                    >
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
          infoWindow.open({
            map: map,
            anchor: markerElement
          })
          currentInfoWindow.value = infoWindow
        } else {
          currentInfoWindow.value.open({
            map: map,
            anchor: currentMarkerElement.value
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
