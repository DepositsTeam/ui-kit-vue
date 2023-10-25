<template>
  <d-box class="ui-avatar-card">
    <d-box class="ui-avatar-card__header">
      <d-box class="ui-avatar-card__header__left">
        <d-box class="ui-avatar-card__header__title">
          <d-text class="ui-avatar-card__header__title__text" my0
            >{{ title }}
          </d-text>
          <d-text my0 v-if="subTitle" class="ui-gray__text"
            >{{ subTitle }}
          </d-text>
        </d-box>
        <d-text my0 font-size="14px" color="#8C97A7">{{ description }}</d-text>
      </d-box>
      <d-box class="ui-avatar-card__header__right">
        <slot name="avatar-section">
          <d-avatar
            :subtle="isAvatarSubtle"
            size="huge"
            :avatars="avatars"
            :stacked="true"
            :visible-avatars="noOfVisibleAvatars"
          />
        </slot>
      </d-box>
    </d-box>
    <slot name="footer">
      <d-box class="ui-avatar-card__footer">
        <slot name="add-button">
          <d-box
            @click="emit('button-clicked')"
            cursor="pointer"
            class="ui-avatar-card__add-button"
          >
            {{ buttonText }}
          </d-box>
        </slot>
        <slot name="icons">
          <d-box class="ui-avatar-card__icons">
            <slot name="edit-icon">
              <edit2-icon
                class="ui-avatar-card__icon"
                @click="emit('edit-clicked')"
              />
            </slot>
            <slot name="delete-icon">
              <delete-icon
                class="ui-avatar-card__icon"
                @click="emit('delete-clicked')"
              />
            </slot>
          </d-box>
        </slot>
      </d-box>
    </slot>
  </d-box>
</template>

<script setup>
import { DBox, DText, DAvatar, Edit2Icon, DeleteIcon } from "@/main";

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  isAvatarSubtle: {
    type: Boolean,
    default: true,
  },
  buttonSize: {
    type: String,
  },
  noOfVisibleAvatars: {
    type: Number,
    default: 4,
  },
  avatars: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["edit-clicked", "delete-clicked", "button-clicked"]);
</script>

<style scoped>
.ui-avatar-card {
  display: flex;
  padding: 20px 16px 16px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  border-radius: 10px;
  border: 1px solid #e1e7ec;
  background: #fff;

  .ui-avatar-card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .ui-avatar-card__header__left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;

      .ui-avatar-card__header__title {
        display: flex;
        align-items: center;
        gap: 8px;

        .ui-avatar-card__header__title__text {
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
          color: #8c97a7;
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

  .ui-avatar-card__footer {
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

    .ui-avatar-card__icons {
      display: flex;
      align-items: flex-start;
      gap: 10px;

      .ui-avatar-card__icon {
        display: flex;
        width: 24px;
        height: 24px;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        color: #8c97a7;
        cursor: pointer;
      }
    }
  }
}
</style>
