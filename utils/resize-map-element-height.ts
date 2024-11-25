export const resizeMapElementHeight = () => {
  const appHeaderElement = document.getElementById("app-header") as HTMLElement
  const appFooterElement = document.getElementById("app-footer") as HTMLElement
  const mapElement = document.getElementById("map") as HTMLElement

  mapElement.style.height =
    window.innerHeight -
    appHeaderElement.offsetHeight -
    appFooterElement.offsetHeight +
    "px"
}
