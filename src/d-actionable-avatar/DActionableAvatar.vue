<template>
  <d-box class="ui-action__card">
    <d-box class="ui-header">
      <d-box class="ui-left">
        <d-box class="ui-header__title">
          <d-text class="ui-title">Platinum</d-text>
          <d-text class="ui-gray__text">(ID: 001)</d-text>
        </d-box>
        <d-text class="ui-text">7 Tenants</d-text>
      </d-box>
      <d-box class="ui-right">
        <d-avatar
          :subtle="true"
          size="huge"
          :avatars="avatars"
          :stacked="true"
          :visible-avatars="4"
        ></d-avatar>
      </d-box>
    </d-box>
    <d-box class="ui-footer">
      <d-box class="ui-button">+ Add tenants</d-box>
      <d-box class="ui-icons">
        <edit2-icon class="ui-icon" />
        <delete-icon class="ui-icon" />
      </d-box>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText, DAvatar, Edit2Icon, DeleteIcon } from "@/main";
import copy from "copy-to-clipboard";
import { reactive, ref } from "vue";

const props = defineProps({
  label: {
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
  helperText: {
    type: String,
  },
  size: {
    type: String,
  },
});

const avatars = ref([
  {
    name: "John",
  },
  {
    name: "Nelly",
  },
  {
    name: "Saviour",
  },
  {
    name: "June",
  },
  {
    name: "Dave",
  },
  {
    name: "Nora",
  },
  {
    name: "Presh",
  },
  {
    name: "Master",
  },
]);

const payload = reactive({
  text: props.text,
});

const copyCode = () => {
  copy(props.text);

  alert("Text copied successfully!");
};
</script>

<style scoped>
.ui-action__card {
  display: flex;
  padding: 20px 16px 16px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  border-radius: 10px;
  border: 1px solid #e1e7ec;
  background: #fff;

  .ui-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .ui-left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;

      .ui-header__title {
        display: flex;
        align-items: center;
        gap: 8px;

        .ui-title {
          color: #2a2e33;
          text-align: center;
          font-family: Circular Std;
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 0.14px;
        }

        .ui-gray__text {
          color: var(--colors-neutral-500, var(--color-grey-500, #8c97a7));
          text-align: center;
          font-family: Hero New;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 0.12px;
        }
      }
    }
  }

  .ui-footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    .ui-button {
      display: flex;
      padding: 16px;
      align-items: center;
      gap: 8px;
      border-radius: 6px;
      color: #0d7fe9;
      text-align: center;
      font-family: Hero New;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px;
      cursor: pointer;
    }

    .ui-icons {
      display: flex;
      align-items: flex-start;
      gap: 10px;

      .ui-icon {
        display: flex;
        width: 24px;
        height: 24px;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        color: #8c97a7;
      }
    }
  }
}

p {
  margin: 0;
}
</style>
