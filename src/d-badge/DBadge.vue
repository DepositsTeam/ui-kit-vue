<template>
  <d-box
    :class="{
      [`color-scheme__${colorScheme}`]: colorScheme,
      subtle,
      [`size__${size}`]: !customSize,
      sizeCustom: customSize,
      smartColor,
      customColor,
      noWrap,
    }"
    class="ui-badge"
    :style="{
      '--size': typeof customSize === 'number' ? `${customSize}px` : customSize,
      '--smart-color': smartColor
        ? subtle
          ? generateColorSpectrum(smartColor, '')['100']
          : smartColor
        : null,
      '--smart-text-color': smartColor
        ? subtle
          ? smartColor
          : getTextColor(smartColor)
        : null,
      '--custom-background-color': customColor?.background,
      '--custom-text-color': customColor?.color,
    }"
  >
    <d-text
      :equalLineHeight="size === 'large'"
      class="ui-badge__text"
      :scale="size === 'large' ? 'footnote' : 'overline'"
      :font-size="size === 'huge' ? '12px' : null"
      margin-y="0"
      dark-class=""
    >
      <d-box is="span" v-if="text">{{ text }}</d-box>
      <slot v-else></slot>
    </d-text>
  </d-box>
</template>

<script setup>
import { DBox, DText } from "../main";
import { generateColorSpectrum, getTextColor } from "@/utils/colorManager";

defineProps({
  colorScheme: {
    type: String,
    validator: (value) =>
      ["neutral", "green", "red", "yellow", "cyan", "blue"].includes(value),
    default: "neutral",
  },
  subtle: {
    type: Boolean,
  },
  size: {
    type: [String],
    validator: (value) => ["small", "medium", "large", "huge"].includes(value),
  },
  customSize: {
    type: [Number, String],
  },
  text: {
    type: String,
  },
  smartColor: {
    type: String,
  },
  noWrap: {
    type: Boolean,
  },
  customColor: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped>
.ui-badge {
  display: inline-flex;
  border-radius: 900000000px;
  padding: 2px 8px;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  &.noWrap {
    white-space: nowrap;
    word-break: keep-all;
    .ui-badge__text {
      white-space: nowrap;
      word-break: keep-all;
    }
  }
  &.dark_mode {
    color: #121a26;
  }
  &.smartColor {
    background: var(--smart-color);
    color: var(--smart-text-color);
  }
  &.customColor {
    background: var(--custom-background-color);
    color: var(--custom-text-color);
  }
}

.ui-badge__text {
  margin: 0;
}

.ui-badge {
  &.sizeCustom {
    padding: 2px 8px;
    height: var(--size);
  }
  &:not(.sizeCustom) {
    &.size__small {
      padding: 2px 8px;
    }

    &.size__medium,
    &.size__large {
      padding: 4px 8px;
    }

    &.size__huge {
      height: 30px;
      min-width: 60px;
      padding: 7px 14px;
    }
  }

  &.color-scheme__neutral:not(.smartColor):not(.customColor) {
    background: #8895a7;
    &.dark_mode {
      background: #64748b;
      color: #121a26;
    }
  }

  &.color-scheme__green:not(.smartColor):not(.customColor) {
    background: #00b058;
    &.dark_mode {
      background: #2eab6c;
      color: #121a26;
    }
  }

  &.color-scheme__red:not(.smartColor):not(.customColor) {
    background: #d62f4b;
    &.dark_mode {
      background: #df5e74;
      color: #121a26;
    }
  }

  &.color-scheme__yellow:not(.smartColor):not(.customColor) {
    background: #ff9505;
    &.dark_mode {
      background: #dc8104;
      color: #121a26;
    }
  }

  &.color-scheme__cyan:not(.smartColor):not(.customColor) {
    background: #0c9ccc;
    &.dark_mode {
      background: #0c9ccc;
      color: #121a26;
    }
  }

  &.color-scheme__blue:not(.smartColor):not(.customColor) {
    background: #0d7fe9;
    &.dark_mode {
      background: #418be1;
      color: #121a26;
    }
  }

  &.subtle:not(.smartColor):not(.customColor) {
    &.color-scheme__neutral {
      color: #212934;
      background: #e1e7ec;
      &.dark_mode {
        background: #202b3c;
        color: #cbd5e1;
        border: 1px solid #384860;
      }
    }

    &.color-scheme__green {
      color: #158957;
      background: #c4efdf;
      &.dark_mode {
        background: #175636;
        color: #32ba75;
      }
    }

    &.color-scheme__red {
      color: #842432;
      background: #fcc5ce;
      &.dark_mode {
        background: #911c30;
        color: #e88898;
      }
    }

    &.color-scheme__yellow {
      color: #e08304;
      background: #fff0db;
      &.dark_mode {
        background: #6e4102;
        color: #ef8c04;
      }
    }

    &.color-scheme__cyan {
      color: #0b87b0;
      background: #bdf3fc;
      &.dark_mode {
        background: #0b5169;
        color: #0b87b0;
      }
    }

    &.color-scheme__blue {
      color: #0059ac;
      background: #ddefff;
      &.dark_mode {
        background: #2a4c76;
        color: #91b2dc;
      }
    }
  }
}
</style>
