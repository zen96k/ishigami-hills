import type { components } from "../../../types/api"

export default defineEventHandler(async (event) => {
  const { fastApiBaseUrl } = useRuntimeConfig(event)

  return await $fetch<components["schemas"]["RSS"]>(
    `${fastApiBaseUrl}/rss/general-information`
  )
})
