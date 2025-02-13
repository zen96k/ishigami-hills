<template>
  <div class="drawer lg:drawer-open">
    <input
      id="app-drawer"
      type="checkbox"
      class="drawer-toggle"
    />
    <div class="drawer-content flex flex-col">
      <div class="navbar w-full bg-red-950">
        <div class="navbar-start">
          <div class="flex-none lg:hidden">
            <div class="flex items-center justify-center">
              <label
                for="app-drawer"
                aria-label="open sidebar"
                class="btn btn-square btn-outline"
              >
                <Icon name="ic:baseline-menu" />
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
          <div class="flex-none">
            <NuxtLink
              class="btn flex btn-square items-center justify-center btn-outline"
              to="https://github.com/zen96k/ishigami-hills"
              target="_blank"
            >
              <Icon
                name="mdi:github"
                size="2.5em"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="m-4">
        <slot />
      </div>
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
            to="/radar"
            class="menu-active flex items-center justify-between"
          >
            <div>Radar</div>
            <Icon name="ic:baseline-radar" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
