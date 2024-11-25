export class PlaceInformation {
  placeId: string = ""
  createdBy: string | null = null
  updatedBy: string | null = null
  displayName: string = ""
  description: string = ""
  googleMapsURI: string = ""
  latitude: number = 0
  longitude: number = 0
  tags: string[] = []
  commentIds: string[] = []

  public constructFromAddPlaceInformationTemplate({
    placeId,
    displayName,
    googleMapsURI,
    latitude,
    longitude
  }: AddPlaceInformationTemplate) {
    this.placeId = placeId
    this.displayName = displayName
    this.googleMapsURI = googleMapsURI
    this.latitude = latitude
    this.longitude = longitude
  }
}

export interface AddPlaceInformationTemplate {
  placeId: string
  displayName: string
  googleMapsURI: string
  latitude: number
  longitude: number
}
