<template>
  <div>
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
                <span class="label-text-alt text-red-400">必須</span>
              </div>
              <input
                type="text"
                placeholder="関東学院大学"
                class="input input-bordered"
              />
            </label>
            <label class="form-control">
              <div class="label">
                <span class="label-text">概要</span>
                <span class="label-text-alt text-red-400">必須</span>
              </div>
              <textarea
                class="textarea textarea-bordered h-96"
                placeholder="ASIAN KUNG-FU GENERATIONが結成された場所。"
              ></textarea>
            </label>
          </form>
        </div>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn btn-primary btn-sm mx-1">確認</button>
            <button class="btn btn-error btn-sm mx-1">キャンセル</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script setup lang="ts"></script>
