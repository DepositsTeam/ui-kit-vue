<script setup>
import { DText } from "../main";
</script>

<template>
  <d-text font-face="circularSTD" my0 class="ui-table__body-cell-text">
    <slot></slot>
  </d-text>
</template>

<style lang="scss">
.ui-text.ui-table__body-cell-text {
  display: inline-block;
}
</style>
