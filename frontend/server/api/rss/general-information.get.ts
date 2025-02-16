import type { components } from "../../../types/api"

export default defineEventHandler(async (event) => {
  const { fastApiBaseUrl } = useRuntimeConfig(event)
  type RSS = components["schemas"]["RSS"]

  return await $fetch<RSS>(`${fastApiBaseUrl}/rss/general-information`)
})
