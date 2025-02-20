<template>
  <div>
    <div class="card-border card border-4 border-red-950">
      <div class="card-body">
        <div class="flex items-center justify-between">
          <div>Gotch</div>
          <button
            class="btn btn-sm btn-outline hover:bg-red-950"
            @click="refreshData"
          >
            Refresh
          </button>
        </div>
        <div class="divider">
          <div class="flex items-center justify-center">
            <div>GotchのNote</div>
            <Icon name="ic:baseline-rss-feed" />
          </div>
        </div>
        <div
          v-if="status === 'success'"
          class="max-h-96 overflow-auto border"
        >
          <table class="table table-zebra">
            <thead class="bg-red-950">
              <tr>
                <th>No.</th>
                <th>日付</th>
                <th>タイトル</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in data?.items"
                :key="index"
              >
                <td>{{ index + 1 }}</td>
                <td>
                  {{
                    new Date(item.pubDate)
                      .toLocaleDateString("ja-JP", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit"
                      })
                      .replaceAll("/", "-")
                  }}
                </td>
                <td>
                  <NuxtLink
                    :to="item.link"
                    target="_blank"
                    class="link link-hover"
                  >
                    {{ item.title }}
                  </NuxtLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else-if="status === 'error'">
          <div class="text-error">エラーが発生しました。</div>
          <div class="text-error">{{ error }}</div>
        </div>
        <div v-else-if="status === 'pending'">
          <div class="mockup-window border">
            <div class="grid h-96 place-content-center">
              <span class="loading loading-md loading-spinner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { data, refresh, error, status } = await useLazyFetch(
    "/api/rss/gotch-note"
  )

  const refreshData = () => {
    refresh()
  }

  watch(data, () => {
    if (status.value === "success") {
      data.value?.items.sort((a, b) => {
        if (b.pubDate < a.pubDate) {
          return -1
        } else if (a.pubDate < b.pubDate) {
          return 1
        } else {
          return 0
        }
      })
    }

    console.log("Data:")
    console.dir(data.value)
  })

  watch(error, () => {
    if (error.value !== null) {
      console.error("Error:")
      console.error(error.value)
    }
  })
</script>
