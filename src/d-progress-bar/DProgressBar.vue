<template>
  <d-box
    class="ui-progress-bar"
    :style="{ ...d__theme, ...computedThemeStyles }"
    :class="{ [variant]: variant }"
  >
    <d-box
      class="ui-progress-bar__active"
      :style="{ '--width': `${computedProgressWidth}%` }"
      :class="{ [variant]: variant }"
    />
  </d-box>
</template>

<script setup>
import { DBox } from "../main";
import { computed, inject, unref } from "vue";
import { defaultThemeVars } from "../providers/default-theme";

const d__theme = inject("d__theme", defaultThemeVars);
const darkMode = inject("d__darkMode");

const darkModeIsEnabled = computed(
  () => darkMode !== null && darkMode !== undefined && darkMode.value
);

const props = defineProps({
  percentage: {
    type: [Number, String],
  },
  totalSteps: {
    type: Number,
  },
  currentStep: {
    type: Number,
  },
  fillColor: {
    type: String,
  },
  emptyColor: {
    type: String,
  },
  darkFillColor: {
    type: String,
  },
  darkEmptyColor: {
    type: String,
  },
  variant: {
    type: String,
    default: "variant-1",
    validator: (value) => ["variant-1", "variant-2"].includes(value),
  },
  height: {
    type: String,
    default: "6px",
  },
});

const computedThemeStyles = computed(() => {
  if (darkModeIsEnabled.value) {
    return {
      "--fill-color":
        props.darkFillColor || unref(d__theme)["--dark-primary-action-color"],
      "--empty-color": props.darkEmptyColor
        ? props.emptyColor
        : props.variant === "variant-2"
        ? unref(d__theme)["--dark-primary-200"]
        : "#384860",
      "--height": props.height,
    };
  } else {
    return {
      "--fill-color":
        props.fillColor || unref(d__theme)["--light-primary-action-color"],
      "--empty-color":
        props.emptyColor || props.variant === "variant-2"
          ? unref(d__theme)["--light-primary-200"]
          : "#384860",
      "--height": props.height,
    };
  }
});

const computedProgressWidth = computed(() => {
  if (props.percentage) {
    return props.percentage;
  } else {
    if (props.currentStep !== undefined && props.totalSteps !== undefined) {
      return Math.round((props.currentStep / props.totalSteps) * 100);
    } else return 0;
  }
});
</script>

<style lang="scss" scoped>
.ui-progress-bar {
  width: 100%;
  height: var(--height);
  border-radius: 30px;
  position: relative;
  background: var(--empty-color);
  .ui-progress-bar__active {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 30px;
    background: var(--fill-color);
    width: var(--width);
    height: 100%;
    &.variant-2 {
      border-radius: 30px 0 0 30px;
    }
  }
}
</style>
