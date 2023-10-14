<template>
  <d-box
    class="ui-button"
    :class="{
      [`semantic__${colorScheme}`]: colorScheme,
      [`state__disabled`]: loading || disabled,
      [`size__${size}`]: size,
      responsive,
      smartColor,
      smartHoverColor,
      pill,
      noWrap,
    }"
    :font-face="fontFace"
    :is="typeof is === 'string' ? is.toLowerCase() : is"
    @click="handleClick"
    :disabled="loading || disabled"
    :style="{
      '--smart-color': smartColor,
      '--smart-hover-color': smartHoverColor,
      ...(smartColor
        ? {
            '--smart-calculated-hover-color': smartCalculatedHoverColor,
            '--smart-calculated-hover-text-color': getTextColor(
              smartCalculatedHoverColor
            ),
          }
        : {}),
      '--smart-text-color': getTextColor(smartColor),
      '--smart-hover-text-color': getTextColor(smartHoverColor),
    }"
  >
    <d-box is="span" v-if="loading">
      <d-box is="span" v-if="loaderType === 'text'" name="loadingText">
        <d-box is="span" class="ui-button__button-text loader-text">
          <d-box is="span" v-if="loadingText">{{ loadingText }}</d-box>
        </d-box>
      </d-box>
      <d-loader
        v-else
        loader-size="1.5em"
        :smart-color="computedTextColor"
        :loader="loaderType"
      />
    </d-box>
    <d-box v-else display="inline-flex" align-items="center">
      <d-box class="ui-button__left-icon" v-if="$slots['left-icon']">
        <slot name="left-icon"></slot>
      </d-box>
      <d-box class="ui-button__left-icon" v-else-if="$slots.leftIcon">
        <slot name="leftIcon"></slot>
      </d-box>
      <component
        smart-color="currentcolor"
        class="ui-button__left-icon"
        v-else-if="leftIcon"
        :is="leftIcon"
      ></component>
      <d-box class="ui-button__button-text">
        <d-box is="span" v-if="text">{{ text }}</d-box>
        <d-box v-else><slot></slot></d-box>
      </d-box>
      <ChevronFilledDownIcon
        v-if="dropDown"
        smart-color="currentcolor"
        class="ui-button__right-icon"
      />
      <d-box class="ui-button__right-icon" v-if="$slots.rightIcon">
        <slot name="rightIcon"></slot>
      </d-box>
      <d-box class="ui-button__right-icon" v-else-if="$slots.rightIcon">
        <slot name="rightIcon"></slot>
      </d-box>
      <component
        smart-color="currentcolor"
        class="ui-button__right-icon"
        v-else-if="rightIcon"
        :is="rightIcon"
      ></component>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, ChevronFilledDownIcon, DLoader } from "../main";
import { getTextColor } from "../utils/colorManager";
import tinycolor from "tinycolor2";
import { computed, inject, unref } from "vue";
import { defaultThemeVars } from "../providers/default-theme";

const d__theme = inject("d__theme", defaultThemeVars);

const darkMode = inject("d__darkMode", false);

const darkModeIsEnabled = computed(
  () => darkMode !== null && darkMode !== undefined && darkMode.value
);

const computedTextColor = computed(() => {
  return darkModeIsEnabled.value
    ? unref(d__theme)["--dark-primary-action-text-color"]
    : unref(d__theme)["--light-primary-action-text-color"];
});

const emit = defineEmits(["click"]);
const props = defineProps({
  is: {
    type: [String, Object],
    validator: (value) => {
      if (typeof value === "string") {
        return ["button", "a", "span", "div"].includes(value);
      } else return true;
    },
    default: "button",
  },
  fontFace: {
    type: String,
    default: "heroNew",
  },
  colorScheme: {
    type: String,
    validator: (value) =>
      [
        "primary",
        "danger",
        "success",
        "outline",
        "invisible",
        "default",
      ].includes(value),
    default: "default",
  },
  disabled: {
    type: Boolean,
  },
  size: {
    type: String,
    validator: (value) =>
      ["small", "medium", "large", "xlarge", "huge", "massive"].includes(value),
    default: "huge",
  },
  leftIcon: {
    type: Object,
  },
  rightIcon: {
    type: Object,
  },
  dropDown: {
    type: Boolean,
  },
  responsive: {
    type: Boolean,
  },
  text: {
    type: String,
  },
  loading: {
    type: Boolean,
  },
  loaderType: {
    type: String,
    default: "text",
    validator: (value) =>
      ["text", "ring", "equalizer", "ringed-circle"].includes(value),
  },
  loadingText: {
    type: String,
    default: "Loading",
  },
  smartColor: {
    type: String,
  },
  smartHoverColor: {
    type: String,
  },
  pill: {
    type: Boolean,
  },
  noWrap: {
    type: Boolean,
  },
  // TODO - Add a property to break/wrap words/text.
});

const handleClick = () => {
  emit("click");
};

const smartCalculatedHoverColor = computed(() =>
  tinycolor(props.smartColor).darken(10).toHexString()
);
</script>

<style lang="scss" scoped>
.ui-button {
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 0.5s;
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid #e1e7ec;
  box-shadow: 0 1px 0 rgba(27, 31, 35, 0.05);
  background: #f5f8fa;
  color: #212934;
  display: inline-flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  &.noWrap {
    white-space: nowrap;
    word-break: keep-all;
    .ui-button__button-text,
    .ui-button__button-text * {
      white-space: nowrap;
      word-break: keep-all;
    }
  }
  &.pill {
    border-radius: 900px;
  }
  &.dark_mode.semantic__default:not(.smartColor) {
    background: #121a26;
    border: 1px solid #202b3c;
    box-shadow: 0px 1px 0px rgba(27, 31, 35, 0.05);
    color: #cbd5e1;
    &.hover,
    &:hover {
      background: #202b3c;
    }
    &:focus {
      box-shadow: 0px 0px 0px 3px rgba(27, 92, 224, 0.2);
      border: 1px solid #384860;
    }
    &:disabled,
    &.state__disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  &.smartColor {
    background: var(--smart-color);
    color: var(--smart-text-color);
    border-color: transparent;
    &.semantic__outline {
      color: var(--smart-color);
      background: transparent;
      border: 1px solid var(--smart-color);
    }
    &:hover:not(:disabled):not(.state_disabled):not(.disabled),
    &.hover:not(:disabled):not(.state_disabled):not(.disabled) {
      background: var(--smart-calculated-hover-color);
      color: var(--smart-calculated-hover-text-color);
    }
    &:focus {
      box-shadow: 0 0 0 3px rgba(var(--smart-color), 0.2);
    }
    &.smartHoverColor:hover:not(:disabled):not(.state_disabled):not(.disabled),
    &.smartHoverColor.hover:not(:disabled):not(.state_disabled):not(.disabled) {
      background: var(--smart-hover-color);
      color: var(--smart-hover-text-color);
    }
  }

  &.responsive {
    display: flex;
    width: 100%;
  }

  .ui-button__button-text {
    white-space: nowrap;

    &.loader-text {
      &::after {
        display: inline-block;
        content: "";
        animation: dots steps(1, end) 1.5s infinite;
      }
    }
    @keyframes dots {
      0% {
        content: "";
      }
      25% {
        content: ".";
      }
      50% {
        content: "..";
      }
      75% {
        content: "...";
      }
      100% {
        content: "";
      }
    }
  }

  .ui-svg {
    width: 24px;
    height: 24px;
  }

  .ui-button__left-icon {
    margin-right: 8px;
  }

  .ui-button__right-icon {
    margin-left: 8px;
  }

  &:hover:not(:disabled):not(.state_disabled):not(.disabled),
  &.hover:not(:disabled):not(.state_disabled):not(.disabled) {
    background: #e1e7ec;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(27, 92, 224, 0.2);
  }

  &:disabled,
  &.state__disabled {
    opacity: 0.5;
    cursor: not-allowed;
    border-color: transparent;
  }

  &.semantic__primary:not(.smartColor) {
    background: var(--light-primary-action-color);
    color: var(--light-primary-action-text-color);
    border: 1px solid var(--light-primary-action-box-shadow-color);

    &.dark_mode {
      background: var(--dark-primary-action-color);
      color: var(--dark-primary-action-text-color);
      border: 1px solid var(--dark-primary-action-box-shadow-color);

      &:hover:not(:disabled):not(.state_disabled):not(.disabled),
      &.hover:not(:disabled):not(.state_disabled):not(.disabled) {
        background: var(--dark-primary-action-hover-color);
        color: var(--dark-primary-action-text-hover-color);
      }

      &:focus {
        box-shadow: 0 0 0 3px var(--dark-primary-action-box-shadow-color);
      }

      &:disabled,
      &.state__disabled {
        //background: var(--dark-primary-action-disabled-color);
        //color: var(--dark-subtle-text-color);
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
      }
    }

    &:hover:not(:disabled):not(.state_disabled):not(.disabled),
    &.hover:not(:disabled):not(.state_disabled):not(.disabled) {
      background: var(--light-primary-action-hover-color);
      color: var(--light-primary-action-text-hover-color);
    }

    &:focus {
      box-shadow: 0 0 0 3px var(--light-primary-action-box-shadow-color);
    }

    &:disabled,
    &.state__disabled {
      //background: var(--light-primary-action-disabled-color);
      //color: var(--light-subtle-text-color);
      opacity: 0.5;
      cursor: not-allowed;
      border-color: transparent;
    }
  }

  &.semantic__danger:not(.smartColor) {
    background: var(--light-danger-color);
    border: 1px solid rgba(33, 41, 52, 0.07);
    color: #fff;

    &.dark_mode {
      background: var(--dark-danger-color);
      color: #121a26;
      border: 1px solid rgba(33, 41, 52, 0.07);
      /* Button Shadow */

      box-shadow: 0 1px 0 rgba(27, 31, 35, 0.05);

      &:hover:not(:disabled):not(.state_disabled):not(.disabled),
      &.hover:not(:disabled):not(.state_disabled):not(.disabled) {
        background: var(--dark-danger-400);
        border: 1px solid rgba(33, 41, 52, 0.07);
        /* Button Shadow */

        box-shadow: 0 1px 0 rgba(27, 31, 35, 0.05);
      }

      &:focus {
        box-shadow: 0 0 0 3px var(--dark-danger-box-shadow-color);
      }

      &:disabled,
      &.state__disabled {
        //background: #350a12;
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    &:hover:not(:disabled):not(.state_disabled):not(.disabled),
    &.hover:not(:disabled):not(.state_disabled):not(.disabled) {
      background: var(--light-danger-600);
    }

    &:focus {
      box-shadow: 0 0 0 3px var(--light-danger-box-shadow-color);
    }

    &:disabled,
    &.state__disabled {
      //background: var(--light-danger-100);
      //color: #fff;
      opacity: 0.5;
      cursor: not-allowed;
      border-color: transparent;
    }
  }

  &.semantic__success:not(.smartColor) {
    background: var(--light-success-color);
    border: 1px solid rgba(33, 41, 52, 0.07);
    color: #fff;

    &.dark_mode {
      background: var(--dark-success-color);
      color: #121a26;
      box-shadow: 0px 1px 0px rgba(27, 31, 35, 0.05);

      &:hover:not(:disabled):not(.state_disabled):not(.disabled),
      &.hover:not(:disabled):not(.state_disabled):not(.disabled) {
        background: var(--dark-success-600);
        border: 1px solid rgba(33, 41, 52, 0.07);
        /* Button Shadow */

        box-shadow: 0 1px 0 rgba(27, 31, 35, 0.05);
      }

      &:focus {
        box-shadow: 0px 0px 0px 3px var(--dark-success-box-shadow-color);
      }

      &:disabled,
      &.state__disabled {
        //background: var(--dark-success-800);
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    &:hover:not(:disabled):not(.state_disabled):not(.disabled),
    &.hover:not(:disabled):not(.state_disabled):not(.disabled) {
      background: var(--light-success-600);
    }

    &:focus {
      box-shadow: 0 0 0 3px var(--light-success-box-shadow-color);
    }

    &:disabled,
    &.state__disabled {
      //background: var(--light-success-100);
      //color: #fff;
      opacity: 0.5;
      cursor: not-allowed;
      border-color: transparent;
    }
  }

  &:disabled:focus,
  &.state__disabled:focus {
    box-shadow: 0 1px 0 rgba(27, 31, 35, 0.05);
  }

  &.semantic__outline:not(.smartColor) {
    color: var(--light-primary-action-color);
    border: 1px solid var(--light-primary-action-color);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    background: transparent;

    &.dark_mode {
      border-color: var(--dark-primary-action-color);
      color: var(--dark-primary-action-color);
    }

    &:focus {
      box-shadow: 0 0 0 3px var(--light-primary-action-box-shadow-color);
      &.dark_mode {
        box-shadow: 0 0 0 3px var(--dark-primary-action-box-shadow-color);
      }
    }

    &:hover:not(:disabled):not(.state_disabled):not(.disabled),
    &.hover:not(:disabled):not(.state_disabled):not(.disabled) {
      background: var(--light-primary-action-color);
      color: var(--light-primary-action-text-color);
      box-shadow: 0 1px 0 var(--light-outline-action-box-shadow-color);

      &.dark_mode {
        background: var(--dark-primary-action-color);
        color: var(--dark-primary-action-text-color);
        box-shadow: 0 1px 0 var(--dark-outline-action-box-shadow-color);
      }
    }

    &:focus:hover,
    &.hover:focus {
      box-shadow: 0 0 0 3px var(--light-outline-action-box-shadow-color);
      &.dark_mode {
        box-shadow: 0 0 0 3px var(--dark-outline-action-box-shadow-color);
      }
    }

    &:disabled,
    &.state__disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background: transparent;
    }

    &:disabled:focus,
    &.state__disabled:focus {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }

  &.semantic__invisible:not(.smartColor) {
    color: var(--light-primary-action-color);
    border-color: transparent;
    background: transparent;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);

    &.dark_mode {
      color: var(--dark-primary-action-color);
    }

    &:focus {
      box-shadow: 0 0 0 3px rgba(27, 92, 224, 0.2);
    }

    &:hover:not(:disabled):not(.state_disabled):not(.disabled),
    &.hover:not(:disabled):not(.state_disabled):not(.disabled) {
      color: var(--light-primary-700);
    }

    &:disabled,
    &.state__disabled {
      opacity: 0.5;
      cursor: not-allowed;
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }

  &.size__small {
    padding: 4px 12px;
    font-size: 12px;
    height: 24px;
    .ui-button__left-icon {
      height: 20px;
      width: 20px;
    }
  }

  &.size__medium {
    padding: 8px 16px;
    height: 32px;
    .ui-button__left-icon {
      height: 20px;
      width: 20px;
    }
  }

  &.size__large {
    padding: 12px 24px;
    height: 40px;
  }

  &.size__xlarge {
    padding: 16px 24px;
    height: 48px;
  }

  &.size__huge {
    padding: 20px 24px;
    font-size: 16px;
    font-weight: 600;
    height: 56px;
  }

  &.size__massive {
    padding: 24px;
    font-size: 16px;
    font-weight: 600;
    height: 64px;

    .ui-svg {
      height: 28px;
      width: 28px;
    }
  }
}
</style>
