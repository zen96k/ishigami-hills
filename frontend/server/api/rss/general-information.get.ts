export default defineEventHandler(() => {
  const apiEndpointUrl = "https://api.rss2json.com/v1/api.json"
  const rssUrl = "https://www.sonymusic.co.jp/xml/artInfoRSS.php?id=72000340"

  return $fetch(`${apiEndpointUrl}?rss_url=${encodeURIComponent(rssUrl)}`)
})
