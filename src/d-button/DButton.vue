<template>
  <d-box
    class="ui-button"
    :class="{
      [`semantic__${colorScheme}`]: colorScheme,
      [`state__disabled`]: disabled,
      [`size__${size}`]: size,
      responsive,
    }"
    :is="typeof is === 'string' ? is.toLowerCase() : is"
    @click="handleClick"
    :style="{ ...theme }"
  >
    <component
      smart-color="currentcolor"
      class="ui-button__left-icon"
      v-if="leftIcon"
      :is="leftIcon"
    ></component>
    <span class="ui-button__button-text">
      <span v-if="text">{{ text }}</span>
      <slot v-else></slot>
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
import { inject, computed } from "vue";
import defaultTheme from "../providers/default-theme";
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
  },
  components: { ChevronFilledDownIcon, DBox },
  emits: ["click"],
  methods: {
    handleClick: function () {
      this.$emit("click");
    },
  },
  setup() {
    const theme = inject("theme", defaultTheme);
    return { theme };
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

  &.responsive {
    display: flex;
    width: 100%;
  }

  .ui-button__button-text {
    white-space: normal;
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
    background: var(--primarycolor);
    color: var(--primaryfontcolor);
    border: 1px solid var(--primaryboxshadowcolor);

    &:hover {
      background: var(--primaryhovercolor);
      color: var(--primarytexthovercolor);
    }

    &:focus {
      box-shadow: 0 0 0 3px var(--primaryboxshadowcolor);
    }

    &:disabled,
    &.state__disabled {
      background: var(--primarydisabledcolor);
      color: var(--primarytextdisabledcolor);
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
    color: var(--outlinecolor);
    border: 1px solid var(--outlinecolor);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    background: transparent;

    &:focus {
      box-shadow: 0 0 0 3px var(--outlineboxshadowcolor);
    }

    &:hover:not(:disabled):not(.state_disabled) {
      background: var(--outlinecolor);
      color: var(--primaryfontcolor);
      box-shadow: 0 1px 0 var(--outlineboxshadowcolor);
    }

    &:focus:hover {
      box-shadow: 0 0 0 3px var(--outlineboxshadowcolor);
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
