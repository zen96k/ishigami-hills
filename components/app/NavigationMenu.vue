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
        <div
          id="app-header"
          class="navbar w-full bg-red-950"
        >
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
                  />
                </svg>
              </label>
            </div>
          </div>
          <!-- アプリケーション(アイコン/タイトル) -->
          <div class="navbar-center">
            <NuxtLink
              to="/"
              class="flex items-center"
            >
              <img
                src="https://cdn.prod.website-files.com/603c87adb15be3cb0b3ed9b5/670dcf30efc008ddd6d9027d_061-min.png"
                alt="苦手なコードが使われてない曲ばかり練習する女の子のイラスト"
                class="h-14 w-14"
              />
              <div class="flex flex-col items-center">
                <span class="text-2xl font-semibold">石上ヒルズ</span>
                <span class="">アジカンの非公式ファンサイト。</span>
              </div>
            </NuxtLink>
          </div>
          <!-- アカウントアイコン -->
          <div class="navbar-end" />
        </div>
        <!-- コンテンツ -->
        <div id="app-contents">
          <slot />
        </div>
        <!-- フッター -->
        <footer
          id="app-footer"
          class="footer footer-center bg-red-950 p-1"
        >
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
      <div
        id="app-drawer"
        class="drawer-side"
      >
        <label
          for="app-navigation-menu"
          aria-label="close sidebar"
          class="drawer-overlay"
        />
        <ul class="menu min-h-screen w-80 bg-gray-800 p-4">
          <li>
            <details open>
              <summary>レーダー</summary>
              <ul>
                <li>
                  <NuxtLink
                    id="/radar/official-site"
                    to="/radar/official-site"
                  >
                    <span>公式サイト</span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    id="/radar/official-sns"
                    to="/radar/official-sns"
                  >
                    <span>公式SNS</span>
                    <span class="badge badge-warning">未実装</span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    id="/radar/media-information"
                    to="/radar/media-information"
                  >
                    <span>メディア情報</span>
                  </NuxtLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details open>
              <summary>実験的な機能</summary>
              <ul>
                <li>
                  <NuxtLink
                    id="/experiment/stroll-map"
                    to="/experiment/stroll-map"
                  >
                    <span>お散歩マップ</span>
                    <span class="badge badge-info">実装中</span>
                  </NuxtLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const route = useRoute()

  const { height: windowHeight } = useWindowSize()

  const menuIDs = [
    "/radar/official-site",
    "/radar/official-sns",
    "/radar/media-information",
    "/experiment/stroll-map"
  ]

  const toggleMenuActiveState = () => {
    for (const id of menuIDs) {
      const menuElement = document.getElementById(id) as HTMLElement
      if (route.path.includes(id)) {
        menuElement.classList.add("active")
      } else {
        menuElement.classList.remove("active")
      }
    }
  }

  watch(windowHeight, () => {
    resizeAppContentsElementHeight()
  })

  watch(route, () => {
    toggleMenuActiveState()
  })

  onMounted(() => {
    resizeAppContentsElementHeight()

    toggleMenuActiveState()
  })
</script>
