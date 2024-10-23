<template>
  <div>
    <div class="drawer lg:drawer-open">
      <!-- メニューボタン -->
      <input
        id="app-navigation-menu"
        type="checkbox"
        class="drawer-toggle"
      />
      <!-- レイアウト -->
      <div class="drawer-content flex flex-col">
        <!-- ナビゲーションメニュー -->
        <div class="navbar w-full bg-teal-700">
          <!-- メニューボタン -->
          <div class="navbar-start">
            <div class="flex-none lg:hidden">
              <label
                for="app-navigation-menu"
                aria-label="open sidebar"
                class="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
          <!-- アプリケーション(アイコン/タイトル) -->
          <div class="navbar-center">
            <NuxtLink
              to="/official-feed"
              class="flex"
            >
              <img
                src="https://cdn.prod.website-files.com/603c87adb15be3cb0b3ed9b5/662b240f55950e4333f8873b_061.png"
                alt="苦手なコードが使われてない曲ばかり練習する女の子のイラスト"
                class="h-12 w-12"
              />
              <div class="self-center text-2xl font-semibold">石上ヒルズ</div>
            </NuxtLink>
          </div>
          <!-- アカウントアイコン -->
          <div class="navbar-end"></div>
        </div>
        <!-- コンテンツ -->
        <div class="min-h-screen">
          <slot />
        </div>
        <!-- フッター -->
        <footer class="footer footer-center bg-teal-700 p-1">
          <aside>
            <div class="font-semibold">Developed by: Kotaro Kuroda</div>
            <div class="font-semibold">
              Repository URL:
              <a
                href="https://github.com/zen96k/ishigami-hills"
                target="_blank"
                class="underline hover:no-underline"
              >
                https://github.com/zen96k/ishigami-hills
              </a>
            </div>
          </aside>
        </footer>
      </div>
      <div class="drawer-side">
        <label
          for="app-navigation-menu"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <ul
          class="menu min-h-screen w-80 bg-gray-700 p-4"
          @click="toggleMenuActiveStateOnClick"
        >
          <li>
            <NuxtLink
              id="/official-feed"
              to="/official-feed"
              class="font-semibold"
            >
              <i class="bi bi-bar-chart-fill"></i>
              公式フィード
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const requestURL = useRequestURL()

  const menuIDs = ["/official-feed"]

  const toggleMenuActiveStateByRequestURL = () => {
    for (const id of menuIDs) {
      const menuElement = document.getElementById(id)
      if (menuElement !== null) {
        if (requestURL.pathname.includes(id)) {
          menuElement.classList.add("active")
        } else {
          menuElement.classList.remove("active")
        }
      }
    }
  }

  const toggleMenuActiveStateOnClick = (event: Event) => {
    for (const id of menuIDs) {
      const menuElement = document.getElementById(id)
      if (menuElement !== null) {
        if (event.target instanceof HTMLElement) {
          if (event.target.id === id) {
            menuElement.classList.add("active")
          } else {
            menuElement.classList.remove("active")
          }
        }
      }
    }
  }

  onMounted(() => {
    toggleMenuActiveStateByRequestURL()
  })
</script>
