<template>
  <div>
    <div class="drawer lg:drawer-open">
      <input
        id="app-drawer"
        type="checkbox"
        class="drawer-toggle"
      />
      <div class="drawer-content flex flex-col">
        <div
          id="app-header"
          class="navbar w-full bg-red-950"
        >
          <div class="navbar-start">
            <div class="flex-none lg:hidden">
              <div class="flex items-center justify-center">
                <label
                  for="app-drawer"
                  aria-label="open sidebar"
                  class="btn btn-square btn-outline"
                >
                  <Icon name="material-symbols:menu" />
                </label>
              </div>
            </div>
          </div>
          <div class="navbar-center">
            <div class="flex-none">
              <NuxtLink
                to="/"
                class="flex items-center justify-center"
              >
                <img
                  src="https://cdn.prod.website-files.com/603c87adb15be3cb0b3ed9b5/670dcf30efc008ddd6d9027d_061-min.png"
                  class="h-12 w-12"
                />
                <div class="flex flex-col items-center">
                  <div class="text-xl">石上ヒルズ</div>
                  <div class="text-xs">アジカンの非公式ファンサイト</div>
                </div>
              </NuxtLink>
            </div>
          </div>
          <div class="navbar-end">
            <div class="flex-none" />
          </div>
        </div>
        <div id="app-content">
          <slot />
        </div>
        <footer
          id="app-footer"
          class="footer bg-red-950 p-1"
        >
          <div class="flex w-full items-center justify-between">
            <div>Developer: Kotaro Kuroda</div>
            <div class="flex items-center justify-center">
              <NuxtLink
                class="flex items-center justify-center"
                to="https://github.com/zen96k/ishigami-hills"
                target="_blank"
              >
                <Icon
                  name="mdi:github"
                  size="2.5em"
                />
              </NuxtLink>
              <NuxtLink
                class="flex items-center justify-center"
                to="https://x.com/zen96k"
                target="_blank"
              >
                <Icon
                  name="mdi:twitter"
                  size="2.5em"
                />
              </NuxtLink>
            </div>
          </div>
        </footer>
      </div>
      <div class="drawer-side">
        <label
          for="app-drawer"
          aria-label="close sidebar"
          class="drawer-overlay"
        />
        <ul class="menu min-h-dvh w-80 bg-base-300 p-4">
          <div class="divider">Menu</div>
          <li>
            <NuxtLink
              id="/radar"
              to="/radar"
              class="flex items-center justify-between"
            >
              <div>Radar</div>
              <Icon name="material-symbols:radar" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              id="/stroll-map"
              to="/stroll-map"
              class="flex items-center justify-between"
            >
              <div>お散歩マップ</div>
              <Icon name="material-symbols:map" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const route = useRoute()

  const menuIDs = ["/radar", "/stroll-map"]

  const toggleMenuActiveState = () => {
    for (const id of menuIDs) {
      const menuElement = document.getElementById(id) as HTMLElement
      if (route.path.includes(id)) {
        menuElement.classList.add("menu-active")
      } else {
        menuElement.classList.remove("menu-active")
      }
    }
  }

  watch(route, () => {
    toggleMenuActiveState()
  })

  onMounted(() => {
    toggleMenuActiveState()
    resizeAppContentElementMinHeight()

    window.addEventListener("resize", resizeAppContentElementMinHeight)
  })
</script>
