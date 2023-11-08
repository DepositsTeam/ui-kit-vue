<template>
  <d-auto-layout
    class="ui-composite-button"
    item-spacing="0"
    alignment="center"
    display="inline-flex"
    :class="{
      [`size__${computedSize}`]: computedSize,
    }"
    :style="{
      '--composite-left-btn-bg': computedLeftBtnBgColor,
      '--composite-left-btn-hover-bg': computedLeftBtnHoverBgColor,
      '--composite-left-btn-text-color': computedLeftBtnColor,
      '--composite-left-btn-border-color': tinycolor(computedLeftBtnBgColor)
        .darken(4)
        .toHexString(),
      '--composite-right-btn-bg': computedRightBtnBgColor,
      '--composite-right-btn-border-color': tinycolor(computedRightBtnBgColor)
        .darken(4)
        .toHexString(),
      '--composite-right-btn-hover-bg': computedRightBtnHoverBgColor,
    }"
  >
    <d-box
      class="ui-composite-button__left-button"
      :is="typeof is === 'string' ? is.toLowerCase() : is"
      @click="leftButtonClick"
      :class="{ disabled }"
      :disabled="disabled"
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
          :smart-color="computedLeftBtnColor"
          :loader="loaderType"
        />
      </d-box>
      <d-box v-else>
        <d-box v-if="text">{{ text }}</d-box>
        <d-box v-else>
          <slot></slot>
        </d-box>
      </d-box>
    </d-box>
    <d-box
      :is="typeof is === 'string' ? is.toLowerCase() : is"
      class="ui-composite-button__right-button"
      @click="rightButtonClick"
      :class="{ disabled }"
      :disabled="disabled"
    >
      <slot name="icon">
        <component
          :is="computedIcon"
          :smart-color="computedRightBtnColor"
          class="ui-composite-button__right-button__icon"
        >
        </component>
      </slot>
    </d-box>
  </d-auto-layout>
</template>

<script setup>
import DBox from "@/d-box/DBox.vue";
import DAutoLayout from "@/d-auto-layout/DAutoLayout.vue";
import { DLoader } from "@/main";
import { useTheme } from "@/main";
import { computed, inject, unref } from "vue";
import tinycolor from "tinycolor2";
import SettingFilledIcon from "@/icons/filled/SettingFilledIcon.vue";
import { getTextColor } from "@/utils/colorManager";

const defaultButtonSize = inject("d__defaultButtonSize");

const { theme } = useTheme();

const emit = defineEmits(["leftButtonClick", "rightButtonClick"]);

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
      ["primary", "danger", "success", "default"].includes(value),
    default: "default",
  },
  text: {
    type: String,
    default: "Send reminder",
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
  noWrap: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
  size: {
    type: String,
    validator: (value) =>
      ["small", "medium", "large", "xlarge", "huge", "massive"].includes(value),
  },
  icon: {
    type: Object,
  },
});

const computedThemeDictionary = computed(() => ({
  default: "#f5f8fa",
  danger: unref(theme)["--light-danger-color"],
  primary: unref(theme)["--light-primary-color"],
  success: unref(theme)["--light-success-color"],
}));

const computedLeftBtnBgColor = computed(() => {
  if (!props.smartColor) {
    return computedThemeDictionary.value[props.colorScheme];
  } else {
    return props.smartColor;
  }
});

const computedLeftBtnColor = computed(() =>
  getTextColor(computedLeftBtnBgColor.value)
);

const computedRightBtnBgColor = computed(() => {
  return tinycolor(computedLeftBtnBgColor.value).darken(10).toHexString();
});

const computedRightBtnColor = computed(() =>
  getTextColor(computedRightBtnBgColor.value)
);

const computedLeftBtnHoverBgColor = computed(() =>
  tinycolor(computedLeftBtnBgColor.value).darken(5).toHexString()
);

const computedRightBtnHoverBgColor = computed(() =>
  tinycolor(computedRightBtnBgColor.value).darken(5).toHexString()
);

const computedSize = computed(() => {
  return props.size
    ? props.size
    : unref(defaultButtonSize)
    ? unref(defaultButtonSize)
    : "xlarge";
});

const computedIcon = computed(() =>
  props.icon ? props.icon : SettingFilledIcon
);

const leftButtonClick = () => {
  if (!props.disabled) {
    emit("leftButtonClick");
  }
};

const rightButtonClick = () => {
  if (!props.disabled) {
    emit("rightButtonClick");
  }
};
</script>

<style scoped lang="scss">
.ui-composite-button {
  cursor: pointer;
  border-radius: 6px;
  //border: 1px solid #e1e7ec;
  align-items: stretch;

  &.size__small {
    height: 24px;
    & > .ui-composite-button__left-button {
      padding: 4px 12px;
      font-size: 12px;
    }

    .ui-composite-button__right-button__icon {
      height: 14px;
      width: 14px;
    }
  }

  &.size__medium {
    height: 32px;
    & > .ui-composite-button__left-button {
      padding: 8px 16px;
    }

    .ui-composite-button__right-button__icon {
      height: 16px;
      width: 16px;
    }
  }

  &.size__large {
    height: 40px;
    & > .ui-composite-button__left-button {
      padding: 12px 24px;
    }

    & > .ui-composite-button__right-button {
      padding-left: 10px;
      padding-right: 10px;
    }

    .ui-composite-button__right-button__icon {
      height: 18px;
      width: 18px;
    }
  }

  &.size__xlarge {
    height: 48px;
    & > .ui-composite-button__left-button {
      padding: 16px 24px;
    }

    & > .ui-composite-button__right-button {
      padding-left: 12px;
      padding-right: 12px;
    }

    .ui-composite-button__right-button__icon {
      height: 20px;
      width: 20px;
    }
  }

  &.size__huge {
    height: 56px;
    & > .ui-composite-button__left-button {
      padding: 20px 24px;
      font-size: 16px;
      font-weight: 600;
    }

    & > .ui-composite-button__right-button {
      padding-left: 12px;
      padding-right: 12px;
    }
  }

  &.size__massive {
    height: 64px;
    & > .ui-composite-button__left-button {
      padding: 24px;
      font-size: 16px;
      font-weight: 600;
    }

    & > .ui-composite-button__right-button {
      padding-left: 16px;
      padding-right: 16px;
    }

    .ui-svg {
      height: 28px;
      width: 28px;
    }
  }

  & > .ui-composite-button__left-button {
    background: var(--composite-left-btn-bg);
    border-radius: 6px 0 0 6px;
    border: 1px solid var(--composite-left-btn-border-color);
    padding: 8px 16px;
    color: var(--composite-left-btn-text-color);
    border-right: none;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    height: 100%;
    font-size: 14px;
    cursor: pointer;
    transition-property: background-color;
    transition-duration: 0.5s;
    &.disabled,
    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }
    &:hover {
      background: var(--composite-left-btn-hover-bg);
    }
  }

  & > .ui-composite-button__right-button {
    background: var(--composite-right-btn-bg);
    border-radius: 0 6px 6px 0;
    align-self: stretch;
    border: 1px solid var(--composite-right-btn-border-color);
    height: 100%;
    align-items: center;
    display: inline-flex;
    cursor: pointer;
    transition-property: background-color;
    transition-duration: 0.5s;
    &.disabled,
    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }
    &:hover {
      background: var(--composite-right-btn-hover-bg);
    }
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
}
</style>
