<template>
  <d-box
    class="ui-responsive__row"
    :class="{
      [`align__${alignment}`]: stretch !== undefined ? false : alignment,
      stretch,
      noColPadding,
    }"
    :style="{
      '--d-gutter-x': computedGutter.x,
      '--d-gutter-y': computedGutter.y,
    }"
  >
    <slot></slot>
  </d-box>
</template>

<script setup>
import { DBox } from "../main";
import { computed } from "vue";

const props = defineProps({
  alignment: {
    type: String,
    validator: (value) => ["top", "center", "bottom"].includes(value),
    default: "top",
  },
  gutter: {
    type: [String, Number, Object],
    default: "16px",
  },
  gutterX: {
    type: [String, Number],
  },
  gutterY: {
    type: [String, Number],
  },
  stretch: {
    type: Boolean,
  },
  noColPadding: {
    type: Boolean,
  },
});

const computedGutter = computed(() => {
  return {
    x: props.gutterX || props.gutter,
    y: props.gutterY || props.gutter,
  };
});
</script>

<style lang="scss">
@use "sass:map";
@import "../scss/variables";

.ui-responsive__row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  &.stretch {
    align-items: stretch;
  }
  & > .ui-responsive__col:first-child {
    padding-left: 0;
  }
  & > .ui-responsive__col:last-child {
    padding-right: 0;
  }
  & > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    //padding-right: var(--gutter-x);
    margin-top: var(--d-gutter-y);
  }
  &:not(.noColPadding) > * {
    padding-right: calc(var(--d-gutter-x) * 0.5);
    padding-left: calc(var(--d-gutter-x) * 0.5);
  }
  &.align__top {
    align-items: flex-start;
  }
  &.align__center {
    align-items: center;
  }
  &.align__bottom {
    align-items: flex-end;
  }
  & > .ui-responsive__col {
  }
}
</style>
