<template>
  <d-box
    class="ui-progress-bar"
    :style="{ ...d__theme, ...computedThemeStyles }"
  >
    <d-box
      class="ui-progress-bar__active"
      :style="{ '--width': `${computedProgressWidth}%` }"
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
});

const computedThemeStyles = computed(() => {
  if (darkModeIsEnabled.value) {
    return {
      "--fill-color": props.darkFillColor
        ? props.darkFillColor
        : unref(d__theme)["--darkPrimaryActionColor"],
      "--empty-color": props.darkEmptyColor ? props.emptyColor : "#384860",
    };
  } else {
    return {
      "--fill-color": props.fillColor
        ? props.fillColor
        : unref(d__theme)["--lightPrimaryActionColor"],
      "--empty-color": props.emptyColor ? props.emptyColor : "#CED6DE",
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
  height: 6px;
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
  }
}
</style>
