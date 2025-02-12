export default defineEventHandler(async (event) => {
  const { fastApiBaseUrl } = useRuntimeConfig(event)

  return await $fetch(`${fastApiBaseUrl}/rss/general-information`)
})
