import { Client, Databases, ID } from "appwrite"
import type { PlaceInformation } from "~/app/StrollMap"

const runtimeConfig = useRuntimeConfig()

const apiEndpoint = runtimeConfig.public.appwriteApiEndpoint
const projectId = runtimeConfig.public.appwriteProjectId

const client = new Client()
client.setEndpoint(apiEndpoint).setProject(projectId)

const databases = new Databases(client)

export const useStrollMap = () => {
  const addPlaceInformation = async (placeInformation: PlaceInformation) => {
    const databaseId = runtimeConfig.public.appwriteProjectDatabaseId
    const collectionId =
      runtimeConfig.public.appwriteStrollMapPlaceInformationCollectionId

    const response = await databases.createDocument(
      databaseId,
      collectionId,
      ID.unique(),
      placeInformation
    )

    return response
  }

  return { addPlaceInformation }
}
