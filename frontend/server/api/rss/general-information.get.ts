export default defineEventHandler(async (event) => {
  const { apiRssGeneralInformationBaseUrl } = useRuntimeConfig(event)

  return await $fetch(
    `${apiRssGeneralInformationBaseUrl}/rss/general-information`
  )
})
