<template>
  <div>
    <!-- AddPlaceInformation -->
    <dialog
      id="add_place_information"
      class="modal modal-middle"
    >
      <div class="modal-box">
        <h3 class="text-2xl font-bold">情報を登録する</h3>
        <div class="grid justify-items-center">
          <form class="w-full">
            <label class="form-control">
              <div class="label">
                <span class="label-text">表示名</span>
                <span class="label-text-alt text-green-400">
                  変更できません
                </span>
              </div>
              <input
                v-model="placeInformation.displayName"
                type="text"
                placeholder="例: 関東学院大学"
                class="input input-sm input-bordered input-disabled"
              />
              <div class="label">
                <span class="label-text">説明</span>
                <span class="label-text-alt text-red-400">
                  入力してください
                </span>
              </div>
              <textarea
                v-model.trim="placeInformation.description"
                autofocus
                placeholder="例: ASIAN KUNG-FU GENERATIONが結成された場所。"
                class="textarea textarea-bordered textarea-sm h-96 border-red-400"
              />
              <div class="label">
                <span class="label-text">タグ</span>
                <span class="label-text-alt text-green-400">
                  変更できません
                </span>
              </div>
              <input
                v-model="placeInformation.tags"
                type="text"
                class="input input-sm input-bordered input-disabled"
              />
            </label>
          </form>
        </div>
        <div class="modal-action">
          <form method="dialog">
            <button
              class="btn btn-primary btn-sm mx-1"
              @click="confirmPlaceInformation"
            >
              確認
            </button>
            <button class="btn btn-error btn-sm mx-1">キャンセル</button>
          </form>
        </div>
      </div>
    </dialog>
    <!-- ConfirmPlaceInformation -->
    <dialog
      id="confirm_place_information"
      class="modal modal-middle"
    >
      <div class="modal-box">
        <h3 class="text-2xl font-bold">情報を確認する</h3>
        <span>下記の通り、情報を登録します。よろしいですか？</span>
        <table class="w-full border-separate border border-slate-500">
          <thead class="bg-red-950">
            <tr>
              <th class="border border-slate-600">項目</th>
              <th class="border border-slate-600">値</th>
            </tr>
          </thead>
          <tbody class="bg-gray-800">
            <tr>
              <td class="border border-slate-700">表示名</td>
              <td class="border border-slate-700">
                {{ placeInformation.displayName }}
              </td>
            </tr>
            <tr>
              <td class="border border-slate-700">説明</td>
              <td class="border border-slate-700">
                {{ placeInformation.description }}
              </td>
            </tr>
          </tbody>
        </table>
        <div class="modal-action">
          <form method="dialog">
            <button
              class="btn btn-primary btn-sm mx-1"
              @click="addPlaceInformation"
            >
              登録
            </button>
            <button
              class="btn btn-error btn-sm mx-1"
              onclick="add_place_information.showModal()"
            >
              修正
            </button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script setup lang="ts">
  import { PlaceInformation } from "~/app/StrollMap"
  import type { AddPlaceInformationTemplate } from "~/app/StrollMap"
  import { z } from "zod"

  const strollMap = useStrollMap()

  const props = defineProps<{
    addPlaceInformationTemplate: AddPlaceInformationTemplate
  }>()

  const placeInformation = ref(new PlaceInformation())

  watchEffect(() => {
    placeInformation.value.constructFromAddPlaceInformationTemplate(
      props.addPlaceInformationTemplate
    )
  })

  const confirmPlaceInformation = (event: Event) => {
    const descriptionSchema = z.string().min(1).trim()
    const { success, error } = descriptionSchema.safeParse(
      placeInformation.value.description
    )
    if (success) {
      const confirmPlaceInformationElement = document.getElementById(
        "confirm_place_information"
      ) as HTMLDialogElement
      confirmPlaceInformationElement.showModal()
    } else {
      console.error(error)
      event.preventDefault()
    }
  }

  const addPlaceInformation = () => {
    placeInformation.value.createdBy = "zen96k"
    const response = strollMap.addPlaceInformation(placeInformation.value)

    response
      .then((data) => {
        console.dir(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }
</script>
