<template>
  <d-box class="ui-text-field__error">
    <ErrorIcon
      height="16px"
      width="16px"
      class="ui-text-field__error-icon"
      v-if="showIcon"
    />
    <d-text
      class="ui-text-field__error-text"
      :class="{ red: redText }"
      scale="subhead"
      fontFace="circularSTD"
      :color="redText ? 'text-danger-500' : undefined"
      my0
    >
      {{ errorMessage }}
    </d-text>
  </d-box>
</template>

<script setup>
import { DBox, DText, ErrorIcon } from "@/main.js";

defineProps({
  errorMessage: {
    type: String,
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
  redText: {
    type: Boolean,
    default: true,
  },
  alignToTop: {
    type: Boolean,
  },
});
</script>

<style scoped></style>
