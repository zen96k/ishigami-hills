<template>
  <div>
    <div class="card glass card-compact bg-teal-950">
      <div class="card-body">
        <h2 class="card-title">
          <span>一般情報</span>
          <!-- <span class="badge badge-warning">未実装</span> -->
        </h2>
        <span>公式サイトの一般情報。</span>
      </div>
      <div
        v-if="status === 'success'"
        class="overflow-x-auto bg-neutral"
      >
        <table class="table table-zebra table-pin-rows">
          <thead>
            <tr>
              <th></th>
              <th>Date</th>
              <th>Status</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in data.items"
              :key="item.guid"
            >
              <td>{{ index + 1 }}</td>
              <td>
                {{ new Date(item.pubDate).toLocaleDateString() }}
              </td>
              <td v-if="(new Date() - new Date(item.pubDate)) / 86400000 < 7">
                New
              </td>
              <td v-else>-</td>
              <td>
                <a
                  :href="item.link"
                  target="_blank"
                  >{{ item.title }}</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else-if="error !== undefined && error !== null">
        <div class="mx-2 my-2 flex flex-col">
          <div
            role="alert"
            class="alert border-2 border-error text-left"
          >
            <div class="text-sm text-error">一般情報の取得に失敗しました。</div>
          </div>
          <!-- <img
            src="https://cdn.prod.website-files.com/603c87adb15be3cb0b3ed9b5/670dcf8cf76ad01581f92afa_056-min.png"
            alt="手の届かない位置で充電ケーブルが抜けてもどかしい女の子のイラスト"
          /> -->
        </div>
      </div>
      <div v-else-if="status === 'pending'">
        <div class="mx-2 my-2 text-center">
          <span class="loading loading-spinner"></span>
        </div>
      </div>
      <div class="card-body"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const apiEndpointUrl = "https://api.rss2json.com/v1/api.json"
  const rssUrl = "https://www.sonymusic.co.jp/xml/artInfoRSS.php?id=72000340"

  const { data, error, status } = await useLazyFetch(
    `${apiEndpointUrl}?rss_url=${encodeURIComponent(rssUrl)}`
  )

  watch(data, () => {
    console.log("Data:")
    console.dir(data.value)
  })

  watch(error, () => {
    if (error.value !== undefined && error.value !== null) {
      console.error("Error:")
      console.error(error.value)
    }
  })
</script>
