<template>
  <d-box
    v-if="visible"
    :class="{
      [`color-scheme__${colorScheme}`]: true,
      smartColor,
      alignTop,
      full,
    }"
    class="ui-banner"
    :style="{
      ...(smartColor
        ? {
            '--smart-color': smartColor,
            '--smart-title-color': getTextColor(smartColor),
            '--smart-description-color': getTextColor(
              smartColor,
              getSubtitleColor(props.smartColor)
            ),
          }
        : {}),
      '--icon-color': iconColor,
    }"
  >
    <d-box flex="1 1 0">
      <slot>
        <d-box class="ui-banner-content">
          <d-box @click="$emit('click')" class="text-content">
            <d-box
              class="ui-banner-icon"
              v-if="$slots.icon"
              :class="{ iconColor }"
            >
              <slot name="icon"> </slot>
            </d-box>
            <component
              v-else-if="(colorScheme !== 'default' || icon) && !noIcon"
              class="ui-banner-icon"
              :class="{ iconColor }"
              :is="icon || schemeIcons[colorScheme]"
            ></component>

            <d-text
              scale="subhead"
              class="ui-banner__title text-gray-700"
              font-face="circularSTD"
            >
              <span>{{ title }}</span></d-text
            >
            <d-text
              scale="subhead"
              class="ui-banner__description"
              font-face="circularSTD"
              v-if="!$slots.default && description"
              ><span v-html="description"></span
            ></d-text>
          </d-box>
        </d-box>
      </slot>
    </d-box>

    <CloseIcon
      v-if="removable"
      smart-color="currentcolor"
      class="ui-banner__close-icon"
      @click="remove"
    />
  </d-box>
</template>

<script setup>
import { ref } from "vue";
import {
  CheckIcon,
  CloseIcon,
  DBox,
  DText,
  ErrorIcon,
  InfoIcon,
  WarningIcon,
} from "../main";
import { getSubtitleColor, getTextColor } from "../utils/colorManager";

const schemeIcons = {
  info: InfoIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  success: CheckIcon,
};
const emit = defineEmits(["removed", "click"]);

const props = defineProps({
  title: {
    type: String,
  },
  full: {
    type: Boolean,
    default: true,
  },
  description: {
    type: String,
  },
  colorScheme: {
    type: String,
    validator: (value) =>
      ["default", "info", "warning", "error", "success"].includes(value),
    default: "default",
  },
  removable: {
    type: Boolean,
  },
  alignTop: {
    type: Boolean,
  },
  icon: {
    type: Object,
  },
  iconColor: {
    type: String,
  },
  noIcon: {
    type: Boolean,
    default: false,
  },
  smartColor: {
    type: String,
  },
});

const visible = ref(true);

const remove = () => {
  emit("removed");
  visible.value = false;
};
</script>

<style lang="scss" scoped>
.ui-banner {
  padding: 10px 16px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  &.full {
    display: flex;
  }

  .ui-banner-content {
  }

  &.alignTop {
    .text-content {
      align-items: flex-start;
      .ui-text {
        margin-top: 0;
        padding-top: 0;
      }
    }
  }

  &.smartColor {
    background: var(--smart-color);
    color: var(--smart-description-color);

    .ui-banner__title {
      color: var(--smart-title-color);
      margin-top: 0;
      margin-bottom: 0;
    }

    .ui-banner_description {
      color: var(--smart-description-color);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  .text-content {
    display: flex;
    align-items: center;

    & > * {
      margin-right: 8px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .ui-banner__close-icon {
    height: 16px;
    width: 16px;
    color: #8895a7;
    cursor: pointer;
    margin-left: 16px;
  }

  .ui-banner-icon {
    height: 16px;
    width: 16px;
    min-width: 16px;
    min-height: 16px;
    margin-right: 8px;
    &.iconColor {
      color: var(--icon-color);
    }
  }

  .ui-banner__title,
  .ui-banner__description {
    margin-top: 0;
    margin-bottom: 0;
  }

  &:not(.smartColor) {
    .ui-banner__description {
      color: #6d7786;
      &.dark_mode {
        color: #94a3b8;
      }
    }
  }

  .ui-banner__title {
    &.dark_mode {
      color: #fff;
    }
  }

  &.color-scheme__default:not(.smartColor) {
    background: #f5f8fa;

    &.dark_mode {
      background: var(--dark-input-background-color);
    }
  }

  &.color-scheme__success:not(.smartColor) {
    background: #edfff9;

    &.dark_mode {
      background: #081e13;

      .ui-banner__title {
        color: #53d091;
      }

      .ui-banner-icon:not(.iconColor) {
        color: #2eab6c;
      }
    }

    .ui-banner-icon:not(.iconColor) {
      color: #00b058;
    }
  }

  &.color-scheme__error:not(.smartColor) {
    background: #fff0f2;

    &.dark_mode {
      background: #350a12;

      .ui-banner__title {
        color: #eea7b3;
      }

      .ui-banner-icon:not(.iconColor) {
        color: #df5e74;
      }
    }

    .ui-banner-icon:not(.iconColor) {
      color: #d62f4b;
    }
  }

  &.color-scheme__warning:not(.smartColor) {
    background: #fff8f0;

    &.dark_mode {
      background: #271701;

      .ui-banner__title {
        color: #fca835;
      }

      .ui-banner-icon:not(.iconColor) {
        color: #dc8104;
      }
    }

    .ui-banner-icon:not(.iconColor) {
      color: #ff9505;
    }
  }

  &.color-scheme__info:not(.smartColor) {
    background: #f7fbff;

    &.dark_mode {
      background: rgba(#0d7fe9, 0.2);

      .ui-banner__title {
        color: #ffffff;
      }

      .ui-banner__description {
        color: #ffffff;
      }
    }

    .ui-banner-icon:not(.iconColor) {
      color: #0d7fe9;
    }
  }
}
</style>
