<template>
  <d-box
    :class="{ fullPage, loading }"
    class="ui-d-loader"
    :style="{ ...theme }"
  >
    <d-box v-if="loading">
      <div v-if="loader === 'ring'" class="ring-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </d-box>
    <slot v-else></slot>
  </d-box>
</template>

<script>
import { DBox } from "../main";
import { inject } from "vue";
import defaultTheme from "../providers/default-theme";

export default {
  name: "DLoader",
  components: {
    DBox,
  },
  props: {
    fullPage: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
      default: true,
    },
    loader: {
      type: String,
      validator: (value) => ["ring"].includes(value),
      default: "ring",
    },
  },
  setup() {
    const theme = inject("theme", defaultTheme);
    return { theme };
  },
};
</script>

<style scoped lang="scss">
.ui-d-loader {
  &.loading {
    &.fullPage {
      display: flex;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100vh;
      z-index: 99999999999999;
      background: white;
      align-items: center;
      justify-content: center;
      &.dark_mode {
        background: var(--darkmodebackground);
      }
    }
  }
}
.ring-loader {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--primarycolor) transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>