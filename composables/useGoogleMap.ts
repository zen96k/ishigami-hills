import { Loader } from "@googlemaps/js-api-loader"

export default () => {
  const runtimeConfig = useRuntimeConfig()

  return new Loader({
    apiKey: runtimeConfig.public.googleMapApiKey,
    version: "weekly"
  })
}
