<template>
  <d-box class="ui-avatar-card2">
    <d-box class="ui-avatar-card2__header">
      <slot name="header">
        <d-text class="ui-avatar-card2__title" font-face="circularSTD">{{
          heading
        }}</d-text>
        <slot name="header-button">
          <d-button
            color-scheme="outline"
            :size="buttonSizes"
            @click="emit('header-button-clicked')"
            >{{ headerButtonText }}
          </d-button>
        </slot>
      </slot>
    </d-box>
    <d-box class="ui-avatar-card2__body">
      <slot name="body">
        <d-box class="ui-avatar-card2__body__left">
          <d-box class="ui-avatar-card2__title" font-face="circularSTD">{{
            title
          }}</d-box>
          <d-box class="ui-avatar-card2__body__text" font-face="circularSTD"
            >{{ description }}
          </d-box>
        </d-box>
        <d-box class="ui-avatar-card2__body__left">
          <slot name="avatar">
            <d-avatar
              :subtle="isAvatarSubtle"
              size="huge"
              :avatars="avatars"
              :stacked="true"
              :visible-avatars="noOfVisibleAvatars"
            ></d-avatar>
          </slot>
        </d-box>
      </slot>
    </d-box>
    <d-box class="ui-avatar-card2__footer">
      <slot name="footer">
        <d-button
          color-scheme="primary"
          :size="buttonSizes"
          @click="emit('footer-button-clicked')"
        >
          {{ footerButtonText }}

          <template #rightIcon>
            <d-box class="ui-avatar-card2__right-icon">
              <setting2-filled-icon />
            </d-box>
          </template>
        </d-button>
      </slot>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText, DAvatar, Setting2FilledIcon, DButton } from "@/main";

defineProps({
  heading: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  footerButtonText: {
    type: String,
    required: true,
  },
  headerButtonText: {
    type: String,
    required: true,
  },
  buttonSizes: {
    type: String,
    validator: (value) =>
      ["small", "medium", "large", "xlarge", "huge", "massive"].includes(value),
    default: "large",
  },
  isAvatarSubtle: {
    type: Boolean,
    default: true,
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

const emit = defineEmits(["header-button-clicked", "footer-button-clicked"]);
</script>

<style scoped>
.ui-avatar-card2 {
  display: flex;
  padding: 11px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 1px 5px 0px rgba(63, 63, 68, 0.1);

  .ui-avatar-card2__header {
    display: flex;
    padding: 8px 32px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-bottom: 1px solid #e2e8f0;

    .ui-avatar-card2__title {
      color: #4f627d;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 150% */
      text-transform: uppercase;
    }
  }

  .ui-avatar-card2__body {
    display: flex;
    padding: 0px 32px 16px 32px;
    justify-content: space-between;
    align-items: flex-end;
    align-self: stretch;
    border-bottom: 0.5px solid #e1e7ec;

    .ui-avatar-card__header__left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;

      .ui-avatar-card2__title {
        color: #8c97a7;
        font-size: 16px;
        font-style: normal;
        font-weight: 450;
        line-height: normal;
      }

      .ui-avatar-card2__body__text {
        color: #2a2e33;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
  }

  .ui-avatar-card2__footer {
    display: flex;
    padding: 10px 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    .ui-avatar-card2__right-icon {
      display: flex;
      height: 100%;
      width: 48px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      align-self: stretch;
      border-radius: 0px 6px 6px 0px;
      border: 1px solid rgba(0, 0, 0, 0.05); 
      background: linear-gradient(0deg, //    rgba(0, 0, 0, 0.15) 0%, //    rgba(0, 0, 0, 0.15) 100% //  ), //  var(--light); //box-shadow: 0px 1px 0px 0px rgba(27, 31, 35, 0.05);
    }
  }
}

p {
  margin: 0;
}
</style>
