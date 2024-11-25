<template>
  <div>
    <StrollMapGoogleMap
      @prepare-add-place-information="prepareAddPlaceInformation"
    />
    <StrollMapGoogleMapInteraction
      :add-place-information-template="addPlaceInformationTemplate"
    />
  </div>
</template>

<script setup lang="ts">
  useHeadSafe({ title: "お散歩マップ" })

  const addPlaceInformationTemplate = ref({
    placeId: "",
    displayName: "",
    googleMapsURI: "",
    latitude: 0,
    longitude: 0
  })

  const prepareAddPlaceInformation = (place: google.maps.places.Place) => {
    addPlaceInformationTemplate.value.placeId = place.id
    addPlaceInformationTemplate.value.displayName = place.displayName ?? ""
    addPlaceInformationTemplate.value.googleMapsURI = place.googleMapsURI
      ? `${new URL(place.googleMapsURI).origin}/?cid=${new URL(place.googleMapsURI).searchParams.get("cid")}`
      : ""
    addPlaceInformationTemplate.value.latitude = place.location?.lat() ?? 0
    addPlaceInformationTemplate.value.longitude = place.location?.lng() ?? 0
  }
</script>
