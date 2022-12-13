<template>
  <d-box
    class="ui-grid"
    :style="{
      '--min-grid-width': gridWidth,
      '--min-grid-height': gridHeight,
      '--col-gutter': colGutter,
      '--row-gutter': rowGutter,
    }"
    :width="width"
  >
    <slot></slot>
  </d-box>
</template>

<script setup>
import { DBox } from "../main";

defineProps({
  gridWidth: {
    type: [String, Number],
    default: "350px",
  },
  gridHeight: {
    type: [String, Number],
    default: "150px",
  },
  colGutter: {
    type: [String, Number],
    default: "30px",
  },
  rowGutter: {
    type: [String, Number],
    default: "30px",
  },
  width: {
    type: [String, Number],
    default: "100%",
  },
});
</script>

<style lang="scss">
.ui-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--min-grid-width), 1fr));
  grid-auto-rows: minmax(var(--min-grid-height), 1fr);
  column-gap: var(--col-gutter);
  row-gap: var(--row-gutter);
  @media only screen and (max-width: 460px) {
    display: flex;
    flex-direction: column;
  }
}
</style>
