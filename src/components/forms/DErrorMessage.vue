<template>
  <d-box class="ui-text-field__error">
    <ErrorIcon height="16px" width="16px" class="ui-text-field__error-icon" />
    <d-text
      class="ui-text-field__error-text"
      scale="subhead"
      fontFace="circularSTD"
    >
      {{ errorMessage }}
    </d-text>
  </d-box>
</template>

<script setup>
import { DBox, DText, ErrorIcon } from "@/main";

defineProps({
  errorMessage: {
    type: String,
  },
});
</script>

<style scoped></style>
