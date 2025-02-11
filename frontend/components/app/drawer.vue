<template>
  <div class="drawer lg:drawer-open">
    <input
      id="app-drawer"
      type="checkbox"
      class="drawer-toggle"
    />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="navbar w-full bg-red-950">
        <div class="navbar-start">
          <div class="flex-none">
            <label
              for="app-drawer"
              aria-label="open sidebar"
              class="btn btn-square btn-outline lg:hidden"
            >
              <Icon name="ic:baseline-menu" />
            </label>
          </div>
        </div>
        <div class="navbar-center">
          <NuxtLink
            to="/"
            class="flex items-center"
          >
            <img
              src="https://cdn.prod.website-files.com/603c87adb15be3cb0b3ed9b5/670dcf30efc008ddd6d9027d_061-min.png"
              class="h-12 w-12"
            />
            <div class="flex flex-col items-center">
              <span class="text-xl">石上ヒルズ</span>
              <span class="text-xs">アジカンの非公式ファンサイト</span>
            </div>
          </NuxtLink>
        </div>
        <div class="navbar-end">
          <NuxtLink
            class="btn btn-outline"
            to="https://github.com/zen96k/ishigami-hills"
            target="_blank"
          >
            <Icon name="octicon:logo-github-24" />
          </NuxtLink>
        </div>
      </div>
      <!-- Page content here -->
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
      <ul class="menu min-h-full w-80 bg-base-300 p-4">
        <!-- Sidebar content here -->
        <div class="divider">Menu</div>
        <li>
          <NuxtLink class="menu-active">Radar</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
