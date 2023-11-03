<template>
  <d-auto-layout cursor="pointer" @click="goBack" alignment="center-left">
    <slot name="icon">
      <d-box
        background="#94A3B8"
        border-radius="50%"
        display="flex"
        align-items="center"
        justify-content="center"
        height="20px"
        width="20px"
        padding="2px"
      >
        <arrow-left-icon smart-color="#FBFCFC" />
      </d-box>
    </slot>
    <slot name="text">
      <d-text my0 font-face="heroNew" color="#94A3B8">{{ text }}</d-text>
    </slot>
  </d-auto-layout>
</template>

<script setup>
import { DAutoLayout } from "@/main";
import { useRouter } from "vue-router";
import DText from "@/d-text/DText.vue";
import ArrowLeftIcon from "@/icons/ArrowLeftIcon.vue";
import DBox from "@/d-box/DBox.vue";

const router = useRouter();

const props = defineProps({
  url: {
    type: [String, Object],
    default: null,
  },
  icon: {
    type: [String, Object],
  },
  text: {
    type: String,
    default: "Back",
  },
});

const goBack = () => {
  if (!props.url) {
    router.back();
  } else {
    router.push(props.url);
  }
};
</script>

<style scoped></style>
