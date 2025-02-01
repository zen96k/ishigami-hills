export function useFlowbite(callback) {
  import("flowbite").then((flowbite) => {
    callback(flowbite)
  })
}
