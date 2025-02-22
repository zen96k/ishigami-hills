export default () => {
  const appHeaderElement = document.getElementById("app-header") as HTMLElement
  const appFooterElement = document.getElementById("app-footer") as HTMLElement
  const strollMapElement = document.getElementById("stroll-map") as HTMLElement

  strollMapElement.style.minHeight =
    window.innerHeight -
    appHeaderElement.offsetHeight -
    appFooterElement.offsetHeight +
    "px"
}
