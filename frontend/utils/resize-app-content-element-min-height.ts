export default () => {
  const appHeaderElement = document.getElementById("app-header") as HTMLElement
  const appFooterElement = document.getElementById("app-footer") as HTMLElement
  const appContentElement = document.getElementById(
    "app-content"
  ) as HTMLElement

  appContentElement.style.minHeight =
    window.innerHeight -
    appHeaderElement.offsetHeight -
    appFooterElement.offsetHeight +
    "px"
}
