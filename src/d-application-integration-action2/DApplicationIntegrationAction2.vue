<template>
  <d-box class="application__card">
    <d-box class="header">
      <d-box is="img" class="logo" :src="logo" :alt="title" />
      <d-text class="label" font-face="heroNew">{{ title }}</d-text>
      <d-text class="text" font-face="circularSTD">{{ description }}</d-text>
    </d-box>
    <d-box class="body">
      <slot name="buttons">
        <d-button
          size="huge"
          colorScheme="primary"
          @click="emit('connectClicked')"
          :disabled="isDisabled"
        >
          Connect
        </d-button>
        <d-button
          v-if="hasLearnMore"
          size="huge"
          :right-icon="ExternalLinkIcon"
          colorScheme="neutral"
          @click="emit('learnMoreClicked')"
        >
          Learn more
        </d-button>
      </slot>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText, DButton, ExternalLinkIcon } from "@/main";

const emit = defineEmits(["connectClicked", "learnMoreClicked"]);
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  hasLearnMore: {
    type: Boolean,
    default: true,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.application__card {
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  border-radius: 8px;
  border: 0.5px solid #e1e7ec;

  .header {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .logo {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    .label {
      color: #1b1e21;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.16px;
    }

    .text {
      color: #6d7786;
      font-size: 14px;
      font-style: normal;
      font-weight: 450;
      line-height: normal;
      letter-spacing: 0.14px;
    }
  }

  .body {
    display: flex;
    padding-top: 16px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-top: 0.5px solid #e1e7ec;
  }
}

p {
  margin: 0;
}
</style>