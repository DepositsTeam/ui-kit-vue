<template>
  <d-box class="ui-responsive-layout" :class="{ full: full }">
    <slot></slot>
  </d-box>
</template>

<script setup>
import { DBox } from "../main";
defineProps({
  full: {
    type: Boolean,
  },
});
</script>

<style lang="scss">
@use "sass:map";
@import "../scss/variables";

.ui-responsive-layout {
  display: flex;
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
  &:not(.full) {
    @media only screen and (min-width: map.get($responsive-layout-breakpoints, "sm")) {
      padding: 0 32px;
    }
    @media only screen and (min-width: map.get($responsive-layout-breakpoints, "md")) {
      padding: 0 40px;
    }
    @media only screen and (min-width: map.get($responsive-layout-breakpoints, "lg")) {
      padding: 0 48px;
    }
    @media only screen and (min-width: map.get($responsive-layout-breakpoints, "xl")) {
      padding: 0 56px;
    }
    @media only screen and (min-width: map.get($responsive-layout-breakpoints, "xxl")) {
      max-width: calc(1400px - (56px * 2));
      width: 100%;
    }
  }
}
</style>
