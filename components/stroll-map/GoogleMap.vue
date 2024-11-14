<template>
  <div>
    <div
      id="map"
      :displayMarkerElementContent="displayMarkerElementContent"
    />
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

  const displayMarkerElementContent = ref(false)

  const toggleInitialMarkerElementContent = (
    advancedMarkerElement: google.maps.marker.AdvancedMarkerElement
  ) => {
    if (!displayMarkerElementContent.value) {
      advancedMarkerElement.content = buildInitialMarkerElementContent()
    } else {
      advancedMarkerElement.content = null
    }
    displayMarkerElementContent.value = !displayMarkerElementContent.value
  }

  const buildInitialMarkerElementContent = () => {
    const divElement = document.createElement("div")
    divElement.innerHTML = `
    <div class="card bg-base-100 max-w-96">
      <div class="card-body">
        <div class="card-actions justify-end">
          <button class="btn btn-square btn-xs bg-red-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
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
    ) as HTMLDivElement
    const appFooterElement = document.getElementById(
      "app-footer"
    ) as HTMLDivElement
    const mapElement = document.getElementById("map") as HTMLDivElement

    mapElement.style.height =
      window.innerHeight -
      appHeaderElement.offsetHeight -
      appFooterElement.offsetHeight +
      "px"

    const { Map } = await googleMap.importLibrary("maps")
    const { AdvancedMarkerElement } = await googleMap.importLibrary("marker")

    const map = new Map(
      document.getElementById("map") as HTMLElement,
      mapOptions
    )

    const initialMarkerElement = new AdvancedMarkerElement({
      map: map,
      position: initialPosition,
      title: "関東学院大学"
    })

    initialMarkerElement.addListener("click", () => {
      toggleInitialMarkerElementContent(initialMarkerElement)
    })
  })
</script>
