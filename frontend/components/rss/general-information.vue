<template>
  <div>
    <div class="flex items-center justify-between">
      <span>一般情報</span>
      <button
        class="btn btn-sm btn-outline hover:bg-red-950"
        @click="refreshData"
      >
        Refresh
      </button>
    </div>
    <div class="divider">公式サイトの一般情報</div>
    <div class="overflow-x-auto rounded-box border">
      <table class="table table-zebra">
        <thead class="glass bg-red-950">
          <tr>
            <th>No.</th>
            <th>日付</th>
            <th>タイトル</th>
          </tr>
        </thead>
        <tbody v-if="status === 'pending'">
          <tr
            v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
            :key="i"
          >
            <th class="skeleton" />
            <td class="skeleton" />
            <td class="skeleton" />
          </tr>
        </tbody>
        <tbody v-else>
          <tr
            v-for="(item, index) in data.items"
            :key="index"
          >
            <th>{{ index + 1 }}</th>
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
                class="underline"
              >
                {{ item.title }}
              </NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { data, refresh, error, status } = await useLazyFetch(
    "/api/rss/general-information"
  )

  const refreshData = () => {
    refresh()
  }

  watch(data, () => {
    data.value.items.sort((a, b) => {
      if (b.pubDate < a.pubDate) {
        return -1
      } else if (a.pubDate < b.pubDate) {
        return 1
      } else {
        return 0
      }
    })
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
