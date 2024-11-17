export default () => {
  const appHeaderElement = document.getElementById("app-header") as HTMLElement
  const appFooterElement = document.getElementById("app-footer") as HTMLElement
  const appContentsElement = document.getElementById(
    "app-contents"
  ) as HTMLElement

  appContentsElement.style.minHeight =
    window.innerHeight -
    appHeaderElement.offsetHeight -
    appFooterElement.offsetHeight +
    "px"
}
