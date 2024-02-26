<template>
  <d-auto-layout
    cursor="pointer"
    class="go-back"
    @click="goBack"
    alignment="center-left"
  >
    <slot name="icon">
      <d-box
        class="go-back-bg"
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
      <d-text my0 font-face="heroNew" class="go-back-txt">{{ text }}</d-text>
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
  isManuallyTriggered: {
    type: Boolean,
  },
});

const emit = defineEmits(["trigger"]);

const goBack = () => {
  if (props.isManuallyTriggered) {
    emit("trigger");
  } else {
    if (!props.url) {
      router.back();
    } else {
      router.push(props.url);
    }
  }
};
</script>

<style lang="scss" scoped>
.go-back {
  transition: 0.8s;
  .go-back-bg {
    background: #94a3b8;
    transition: 0.8s;
  }
  .go-back-txt {
    color: #94a3b8;
    transition: 0.8s;
  }
  &:hover {
    cursor: pointer;
    .go-back-bg {
      background: #57606c;
    }
    .go-back-txt {
      color: #57606c;
    }
  }
}
</style>
