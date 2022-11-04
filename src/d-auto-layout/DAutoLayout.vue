<template>
  <d-box
    class="d-auto-layout"
    :class="{
      [`direction__${direction}`]: direction,
      [`align__${alignment}`]: alignment,
      wrap,
    }"
    :style="{ '--spacing-value': itemSpacing }"
  >
    <slot></slot>
  </d-box>
</template>

<script setup>
import { DBox } from "../main";
defineProps({
  direction: {
    type: String,
    validator: (value) => ["horizontal", "vertical"].includes(value),
    default: "horizontal",
  },
  itemSpacing: {
    type: [String, Number],
    default: "10px",
  },
  alignment: {
    type: String,
    validator: (value) =>
      [
        "top-left",
        "top-center",
        "top-right",
        "center-right",
        "center",
        "center-left",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ].includes(value),
  },
  wrap: Boolean,
});
</script>

<style lang="scss">
.d-auto-layout {
  display: flex;
  &.wrap {
    flex-wrap: wrap;
  }
  &.direction__horizontal {
    flex-direction: row;
    & > *:not(:last-child) {
      margin-right: var(--spacing-value);
    }
    &.align__top-left {
      align-items: flex-start;
      justify-content: flex-start;
    }
    &.align__top-center {
      align-items: flex-start;
      justify-content: center;
    }
    &.align__top-right {
      align-items: flex-start;
      justify-content: flex-end;
    }
    &.align__center-right {
      align-items: center;
      justify-content: flex-start;
    }
    &.align__center {
      align-items: center;
      justify-content: center;
    }
    &.align__center-right {
      align-items: center;
      justify-content: flex-end;
    }
    &.align__bottom-left {
      align-items: flex-end;
      justify-content: flex-start;
    }
    &.align__bottom-center {
      align-items: flex-end;
      justify-content: center;
    }
    &.align__bottom-right {
      align-items: flex-end;
      justify-content: flex-end;
    }
  }
  &.direction__vertical {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: var(--spacing-value);
    }
    &.align__top-left {
      justify-content: flex-start;
      align-items: flex-start;
    }
    &.align__top-center {
      justify-content: flex-start;
      align-items: center;
    }
    &.align__top-right {
      justify-content: flex-start;
      align-items: flex-end;
    }
    &.align__center-right {
      justify-content: center;
      align-items: flex-start;
    }
    &.align__center {
      justify-content: center;
      align-items: center;
    }
    &.align__center-right {
      justify-content: center;
      align-items: flex-end;
    }
    &.align__bottom-left {
      justify-content: flex-end;
      align-items: flex-start;
    }
    &.align__bottom-center {
      justify-content: flex-end;
      align-items: center;
    }
    &.align__bottom-right {
      justify-content: flex-end;
      align-items: flex-end;
    }
  }
}
</style>
