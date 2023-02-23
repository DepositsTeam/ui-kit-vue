<template>
  <slot></slot>
  <Teleport to="body">
    <d-box class="ui-toast__wrapper" :class="`position__${position}`">
      <d-box class="ui-toast__column">
        <d-alert
          v-for="(toast, index) in toasts"
          v-bind="toast"
          :key="`toast_${index}_${keyGen()}`"
          closable
          @closed="() => removeToast(index)"
        />
      </d-box>
    </d-box>
  </Teleport>
</template>

<script setup>
import DBox from "../d-box/DBox.vue";
import DAlert from "../d-alert/DAlert.vue";
import keyGen from "../utils/keyGen";
import { onMounted, onUnmounted, provide, ref } from "vue";

const props = defineProps({
  autoClose: {
    type: Number,
    default: 5000,
  },
  position: {
    type: String,
    validator: (value) =>
      ["top-right", "top-left", "top-center", "bottom-left", "bottom-right"].includes(value),
    default: "top-right",
  },
  bordered: {
    type: Boolean,
    default: true,
  },
});

const toasts = ref([]);
const countUp = ref(0);
const interval = ref(null);

onMounted(() => {
  interval.value = setInterval(() => {
    if (toasts.value.length) {
      let holdingCountUp = 0;
      holdingCountUp = countUp.value;
      let currentToast = toasts.value[0];
      const timeToClose = currentToast.timeout || props.autoClose;
      if (holdingCountUp >= timeToClose) {
        let holderArray = [...toasts.value];
        holderArray.shift();
        toasts.value = holderArray;
        countUp.value = 0;
      }
      countUp.value += 1000;
    } else {
      countUp.value -= 1000;
    }
  }, 1000);
});

onUnmounted(() => {
  clearInterval(interval.value);
});

const pushToast = (toast) => {
  if (toasts.value.length === 0) {
    countUp.value = -1;
  }
  toasts.value.push(toast);
};
const removeToast = (index) => {
  let holderArray = [...toasts.value];
  holderArray.splice(index, 1);
  toasts.value = holderArray;
  if (index === 0) {
    countUp.value = 0;
  }
};
provide("___pushToast", pushToast);
provide("d__pushToast", pushToast);
provide("pushToast", pushToast);
</script>

<style lang="scss" scoped>
.ui-toast__wrapper {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 0;
  pointer-events: none;
}

.ui-toast__column {
  width: 400px;
  position: absolute;
  padding: 32px;
  display: flex;
  flex-direction: column;
  top: 0;
  pointer-events: none;
  z-index: 99999;

  > *:not(:last-child) {
    margin-bottom: 16px;
  }

  .ui-alert {
    pointer-events: all;
  }
}

.ui-toast__wrapper {
  &.position__top-right .ui-toast__column {
    right: 0;
  }

  &.position__top-left .ui-toast__column {
    left: 0;
  }

  &.position__bottom-left .ui-toast__column {
    left: 0;
    justify-content: flex-end;
    bottom: 0;
    top: auto;
  }

  &.position__bottom-right .ui-toast__column {
    right: 0;
    justify-content: flex-end;
    bottom: 0;
    top: auto;
  }
}

.ui-toast-fade-enter-active,
.ui-toast-fade-move,
.ui-toast-fade-leave-active {
  transition: opacity 0.5s ease;
}

.ui-toast-fade-enter-from,
.ui-toast-fade-leave-to {
  opacity: 0;
}
</style>
