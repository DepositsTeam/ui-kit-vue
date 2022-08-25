<template>
  <d-box
    class="ui-button"
    :class="{
      [`semantic__${colorScheme}`]: colorScheme,
      [`state__disabled`]: loading || disabled,
      [`size__${size}`]: size,
      responsive,
    }"
    :is="typeof is === 'string' ? is.toLowerCase() : is"
    @click="handleClick"
    :style="{ ...d__theme }"
    :disabled="loading || disabled"
  >
    <component
      smart-color="currentcolor"
      class="ui-button__left-icon"
      v-if="leftIcon"
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
      class="ui-button__dropdown-icon"
    />
  </d-box>
</template>

<script>
import ChevronFilledDownIcon from "../icons/ChevronFilledDownIcon.vue";
import DBox from "../d-box/DBox.vue";
import { inject } from "vue";
import { defaultThemeVars } from "../providers/default-theme";
export default {
  props: {
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
        ["small", "medium", "large", "xlarge", "huge", "massive"].includes(
          value
        ),
      default: "huge",
    },
    leftIcon: {
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
    // TODO - Add a property to break/wrap words/text.
  },
  components: { ChevronFilledDownIcon, DBox },
  emits: ["click"],
  methods: {
    handleClick: function () {
      this.$emit("click");
    },
  },
  setup() {
    const d__theme = inject("d__theme", defaultThemeVars);
    return { d__theme };
  },
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
  &.dark_mode.semantic__default {
    background: #121a26;
    border: 1px solid #202b3c;
    box-shadow: 0px 1px 0px rgba(27, 31, 35, 0.05);
    color: #cbd5e1;
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

  .ui-button__dropdown-icon {
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
    background: var(--lightPrimaryActionColor);
    color: var(--lightTextColor);
    border: 1px solid var(--lightPrimaryActionBoxShadowColor);

    &.dark_mode {
      background: var(--darkPrimaryActionColor);
      color: var(--darkTextColor);
      border: 1px solid var(--darkPrimaryActionBoxShadowColor);

      &:hover {
        background: var(--darkPrimaryActionHoverColor);
        color: var(--darkPrimaryActionTextHoverColor);
      }

      &:focus {
        box-shadow: 0 0 0 3px var(--darkPrimaryActionBoxShadowColor);
      }

      &:disabled,
      &.state__disabled {
        background: var(--darkPrimaryActionDisabledColor);
        color: var(--darkSubtleTextColor);
      }
    }

    &:hover {
      background: var(--lightPrimaryActionHoverColor);
      color: var(--lightPrimaryActionTextHoverColor);
    }

    &:focus {
      box-shadow: 0 0 0 3px var(--lightPrimaryActionBoxShadowColor);
    }

    &:disabled,
    &.state__disabled {
      background: var(--lightPrimaryActionDisabledColor);
      color: var(--lightSubtleTextColor);
      cursor: not-allowed;
      border-color: transparent;
    }
  }

  &.semantic__danger {
    background: #d62f4b;
    border: 1px solid rgba(33, 41, 52, 0.07);
    color: #fff;

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
    color: var(--lightPrimaryActionColor);
    border: 1px solid var(--lightPrimaryActionColor);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    background: transparent;

    &:focus {
      box-shadow: 0 0 0 3px var(--lightPrimaryActionBoxShadowColor);
    }

    &:hover:not(:disabled):not(.state_disabled) {
      background: var(--lightPrimaryActionColor);
      color: var(--lightPrimaryActionTextColor);
      box-shadow: 0 1px 0 var(--lightOutlineActionBoxShadowColor);
    }

    &:focus:hover {
      box-shadow: 0 0 0 3px var(--lightOutlineActionBoxShadowColor);
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
