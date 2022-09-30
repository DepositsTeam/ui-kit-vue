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
    }"
    :is="typeof is === 'string' ? is.toLowerCase() : is"
    @click="handleClick"
    :disabled="loading || disabled"
    :style="{
      '--smart-color': smartColor,
      '--smart-hover-color': smartHoverColor,
      '--smart-text-color': getTextColor(smartColor),
      '--smart-hover-text-color': getTextColor(smartHoverColor),
    }"
  >
    <d-box class="ui-button__left-icon" v-if="$slots.leftIcon">
      <slot name="leftIcon"></slot>
    </d-box>
    <component
      smart-color="currentcolor"
      class="ui-button__left-icon"
      v-else-if="leftIcon"
      :is="leftIcon"
    ></component>
    <span class="ui-button__button-text" :class="{ 'loader-text': loading }">
      <span v-if="loading" class>
        <span v-if="loadingText">{{ loadingText }}</span>
        <slot name="loadingText"></slot>
      </span>
      <span v-else>
        <span v-if="text">{{ text }}</span>
        <slot v-else></slot>
      </span>
    </span>
    <ChevronFilledDownIcon
      v-if="dropDown"
      smart-color="currentcolor"
      class="ui-button__right-icon"
    />
    <d-box class="ui-button__right-icon" v-if="$slots.rightIcon">
      <slot name="rightIcon"></slot>
    </d-box>
    <component
      smart-color="currentcolor"
      class="ui-button__right-icon"
      v-else-if="rightIcon"
      :is="rightIcon"
    ></component>
  </d-box>
</template>

<script setup>
import { DBox, ChevronFilledDownIcon } from "../main";
import { getTextColor } from "../utils/colorManager";

const emit = defineEmits(["click"]);
defineProps({
  is: {
    type: [String, Object],
    validator: (value) => {
      if (typeof value === "string") {
        return ["button", "a", "span", "div"].includes(value);
      } else return true;
    },
    default: "button",
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
    type: Object,
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
  // TODO - Add a property to break/wrap words/text.
});

const handleClick = () => {
  emit("click");
};
</script>

<style lang="scss" scoped>
.ui-button {
  font-family: "Hero New", sans-serif;
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
  &.pill {
    border-radius: 900px;
  }
  &.dark_mode.semantic__default {
    background: #121a26;
    border: 1px solid #202b3c;
    box-shadow: 0px 1px 0px rgba(27, 31, 35, 0.05);
    color: #cbd5e1;
  }
  &.smartColor {
    background: var(--smart-color);
    color: var(--smart-text-color);
    &.smartHoverColor:hover {
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

  &:hover {
    background: #e1e7ec;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(27, 92, 224, 0.2);
  }

  &:disabled,
  &.state__disabled {
    background: #f5f8fa;
    color: #ced6de;
    cursor: not-allowed;
    border-color: transparent;
  }

  &.semantic__primary {
    background: var(--light-primary-action-color);
    color: var(--light-text-color);
    border: 1px solid var(--light-primary-action-box-shadow-color);

    &.dark_mode {
      background: var(--dark-primary-action-color);
      color: var(--dark-text-color);
      border: 1px solid var(--dark-primary-action-box-shadow-color);

      &:hover {
        background: var(--dark-primary-action-hover-color);
        color: var(--dark-primary-action-text-hover-color);
      }

      &:focus {
        box-shadow: 0 0 0 3px var(--dark-primary-action-box-shadow-color);
      }

      &:disabled,
      &.state__disabled {
        background: var(--dark-primary-action-disabled-color);
        color: var(--dark-subtle-text-color);
      }
    }

    &:hover {
      background: var(--light-primary-action-hover-color);
      color: var(--light-primary-action-text-hover-color);
    }

    &:focus {
      box-shadow: 0 0 0 3px var(--light-primary-action-box-shadow-color);
    }

    &:disabled,
    &.state__disabled {
      background: var(--light-primary-action-disabled-color);
      color: var(--light-subtle-text-color);
      cursor: not-allowed;
      border-color: transparent;
    }
  }

  &.semantic__danger {
    background: #df5e74;
    border: 1px solid rgba(33, 41, 52, 0.07);
    color: #fff;

    &.dark_mode {
      background: #df5e74;
      color: #121a26;
      border: 1px solid rgba(33, 41, 52, 0.07);
      /* Button Shadow */

      box-shadow: 0 1px 0 rgba(27, 31, 35, 0.05);

      &:hover {
        background: #e47588;
        border: 1px solid rgba(33, 41, 52, 0.07);
        /* Button Shadow */

        box-shadow: 0 1px 0 rgba(27, 31, 35, 0.05);
      }

      &:focus {
        box-shadow: 0 0 0 3px rgba(214, 47, 75, 0.3);
      }

      &:disabled,
      &.state__disabled {
        background: #350a12;
      }
    }

    &:hover {
      background: #ad283d;
    }

    &:focus {
      box-shadow: 0 0 0 3px rgba(214, 47, 75, 0.3);
    }

    &:disabled,
    &.state__disabled {
      background: #fff0f2;
      color: #fff;
      cursor: not-allowed;
      border-color: transparent;
    }
  }

  &.semantic__success {
    background: #00b058;
    border: 1px solid rgba(33, 41, 52, 0.07);
    color: #fff;

    &.dark_mode {
      background: #2eab6c;
      color: #121a26;
      box-shadow: 0px 1px 0px rgba(27, 31, 35, 0.05);

      &:hover {
        background: #2a9b62;
        border: 1px solid rgba(33, 41, 52, 0.07);
        /* Button Shadow */

        box-shadow: 0 1px 0 rgba(27, 31, 35, 0.05);
      }

      &:focus {
        box-shadow: 0px 0px 0px 3px rgba(0, 176, 88, 0.3);
      }

      &:disabled,
      &.state__disabled {
        background: #175636;
      }
    }

    &:hover {
      background: #27c079;
    }

    &:focus {
      box-shadow: 0 0 0 3px rgba(0, 176, 88, 0.3);
    }

    &:disabled,
    &.state__disabled {
      background: #c4efdf;
      color: #fff;
      cursor: not-allowed;
      border-color: transparent;
    }
  }

  &:disabled:focus,
  &.state__disabled:focus {
    box-shadow: 0 1px 0 rgba(27, 31, 35, 0.05);
  }

  &.semantic__outline {
    color: var(--light-primary-action-color);
    border: 1px solid var(--light-primary-action-color);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    background: transparent;

    &:focus {
      box-shadow: 0 0 0 3px var(--light-primary-action-box-shadow-color);
    }

    &:hover:not(:disabled):not(.state_disabled) {
      background: var(--light-primary-action-color);
      color: var(--light-primary-action-text-color);
      box-shadow: 0 1px 0 var(--light-outline-action-box-shadow-color);
    }

    &:focus:hover {
      box-shadow: 0 0 0 3px var(--light-outline-action-box-shadow-color);
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

  &.semantic__invisible {
    color: #0d7fe9;
    border-color: transparent;
    background: transparent;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);

    &:focus {
      box-shadow: 0 0 0 3px rgba(27, 92, 224, 0.2);
    }

    &:hover {
      color: #0059ac;
    }

    &:disabled,
    &.state__disabled {
      color: #acd7ff;
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
