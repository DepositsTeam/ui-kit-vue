<template>
  <d-box class="d-action-card">
    <d-box class="d-action-card__header">
      <d-box is="img" class="d-action-card__logo" :src="logo" :alt="title" />
      <d-text class="d-action-card__header__title" font-face="heroNew">{{
        title
      }}</d-text>
      <d-text
        class="d-action-card__header__description"
        font-face="circularSTD"
        >{{ description }}</d-text
      >
    </d-box>
    <d-box class="d-action-card__body">
      <slot name="buttons">
        <d-auto-layout>
          <d-button
            size="huge"
            colorScheme="primary"
            @click="emit('button1-clicked')"
            :disabled="disable"
          >
            {{ button1Text }}
          </d-button>
          <d-button
            size="huge"
            :right-icon="ExternalLinkIcon"
            colorScheme="neutral"
            @click="emit('button2-clicked')"
          >
            {{ button2Text }}
          </d-button>
        </d-auto-layout>
      </slot>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText, DButton, ExternalLinkIcon } from "@/main";
import DAutoLayout from "@/d-auto-layout/DAutoLayout.vue";

const emit = defineEmits(["button1-clicked", "button2-clicked"]);
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
  disable: {
    type: Boolean,
    default: false,
  },
  button1Text: {
    type: String,
    default: "Connect",
  },
  button2Text: {
    type: String,
    default: "Learn More",
  },
});
</script>

<style scoped lang="scss">
.d-action-card {
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  border-radius: 8px;
  border: 0.5px solid #e1e7ec;

  .d-action-card__header {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .d-action-card__logo {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    .d-action-card__header__title {
      color: #1b1e21;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.16px;
    }

    .d-action-card__header__description {
      color: #6d7786;
      font-size: 14px;
      font-style: normal;
      font-weight: 450;
      line-height: normal;
      letter-spacing: 0.14px;
    }
  }

  .d-action-card__body {
    display: flex;
    padding-top: 16px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-top: 0.5px solid #e1e7ec;
  }
}
</style>
