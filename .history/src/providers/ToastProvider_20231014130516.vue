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
import uniqueRandomString from "../utils/uniqueRandomString";

const props = defineProps({
  autoClose: {
    type: Number,
    default: 5000,
  },
  position: {
    type: String,
    validator: (value) =>
      [
        "top-right",
        "top-left",
        "top-center",
        "bottom-left",
        "bottom-right",
      ].includes(value),
    default: "top-right",
  },
  bordered: {
    type: Boolean,
    default: true,
  },
});

const toasts = ref([]);
const interval = ref(null);

onMounted(() => {
  interval.value = setInterval(() => {
    if (toasts.value.length) {
      const uuidsToRemove = [];
      toasts.value.forEach((toast) => {
        toast.remainingTime -= 1;
        if (toast.remainingTime < 1) {
          uuidsToRemove.push(toast.uuid);
        }
      });
      uuidsToRemove.forEach((uuid) => {
        toasts.value = [...toasts.value].filter((toast) => toast.uuid !== uuid);
      });
    }
  }, 1000);
});

onUnmounted(() => {
  clearInterval(interval.value);
});

const pushToast = (toast) => {
  const timeout = toast.autoClose || toast.timeout;
  toasts.value.push({
    ...toast,
    uuid: uniqueRandomString(),
    remainingTime: timeout ? timeout : 3,
  });
};

const clearToasts = () => {
  toasts.value = [];
};
const removeToast = (index) => {
  let holderArray = [...toasts.value];
  holderArray.splice(index, 1);
  toasts.value = holderArray;
};
provide("___pushToast", pushToast);
provide("d__pushToast", pushToast);
provide("pushToast", pushToast);
provide("clearToasts", clearToasts);
provide("d__clearToasts", clearToasts);
provide("___clearToasts", clearToasts);
</script>

<style lang="scss" scoped>
.ui-toast__column-mobile {
  left: 0;
  padding: 32px 15px;
  align-items: center;
}
.ui-toast__wrapper {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1000;
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

  &[]
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
