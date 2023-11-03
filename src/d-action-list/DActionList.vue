<template>
  <d-box class="ui-action-list">
    <d-box class="ui-action-list__header">
      <d-box class="ui-action-list__header__left">
        <d-text font-face="circularSTD">{{ label }}</d-text>
      </d-box>
      <d-box class="ui-action-list__header__left">
        <slot name="call-to-action">
          <d-button
            colorScheme="primary"
            :left-icon="AddIcon"
            :size="size"
            @click="emit('call-to-action-clicked')"
          >
            {{ callToActionText }}
          </d-button>
        </slot>
      </d-box>
    </d-box>
    <d-box class="ui-action-list__body__wrapper">
      <slot name="body">
        <d-box
          v-for="(application, index) in list"
          :key="`application__${index}`"
        >
          <d-action-list-item
            :logo="application.logo"
            :title="application.title"
            :subtitle="application.subtitle"
            :description="application.description"
            :button-size="application.buttonSize"
            :button-color-scheme="application.buttonColorScheme"
            :button-smart-color="application.buttonSmartColor"
            buttonText="Revoke Access"
            @clicked="listActionClicked(application)"
          />
        </d-box>
      </slot>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText, DButton, AddIcon, DActionListItem } from "@/main";

const emit = defineEmits(["call-to-action-clicked", "list-action-clicked"]);
defineProps({
  label: {
    type: String,
    required: true,
  },
  list: {
    type: Array,
    required: true,
  },
  size: {
    type: String,
    default: "large",
  },
  callToActionText: {
    type: String,
    default: "New Connection",
  },
});

const listActionClicked = (application) => {
  emit("list-action-clicked", application);
};
</script>

<style scoped lang="scss">
.ui-action-list {
  .ui-action-list__header {
    display: flex;
    padding: 16px 24px;
    justify-content: space-between;
    border-radius: 8px 8px 0 0;
    border: 0.5px solid #e1e7ec;
    background: #fff;
    align-self: stretch;

    .ui-action-list__header__left {
      color: #8c97a7;
      font-size: 14px;
      font-style: normal;
      font-weight: 450;
      line-height: normal;
    }
  }

  .ui-action-list__body__wrapper {
    .ui-action-list__body {
      display: flex;
      padding: 16px 24px;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
      border: 0.5px solid #e2e8f0;
      background: #fff;

      .ui-action-list__logo {
        height: 32px;
        border-radius: 50%;
      }

      &:last-child {
        border-radius: 0 0 8px 8px;
      }

      .ui-action-list__header__left {
        display: flex;
        align-items: center;
        gap: 8px;

        .d-action-card__logo {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
      }

      .ui-action-list__header__left {
        display: flex;
        align-items: center;
        gap: 16px;

        .ui-action-list__subtitle-text {
          color: #8c97a7;
          font-size: 14px;
          font-style: normal;
          font-weight: 450;
          line-height: 24px; /* 171.429% */
        }
      }
    }
  }
}
</style>
