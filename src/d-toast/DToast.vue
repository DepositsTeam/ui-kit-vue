<template>
  <Teleport to="body">
    <div class="ui-toast__wrapper" :class="`position__${position}`">
      <d-box class="ui-toast__column">
        <TransitionGroup name="ui-toast-fade">
          <d-alert
            v-for="(toast, index) in toasts"
            v-bind="toast"
            :key="`toast_${index}_${keyGen()}`"
            closable
            :onClose="() => removeToast(index)"
          />
        </TransitionGroup>
      </d-box>
    </div>
  </Teleport>
</template>

<script>
import DBox from "../d-box/DBox.vue";
import DAlert from "../d-alert/DAlert.vue";
import keyGen from "../utils/keyGen";
export default {
  name: "DToast",
  components: {
    DBox,
    DAlert,
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.toasts.length) {
        let holdingCountUp = 0;
        holdingCountUp = this.countUp;
        let currentToast = this.toasts[0];
        const timeToClose = currentToast.autoClose || this.autoClose;
        if (holdingCountUp >= timeToClose) {
          let holderArray = [...this.toasts];
          holderArray.shift();
          this.toasts = holderArray;
          this.countUp = 0;
        }
        this.countUp += 1;
      } else {
        this.countUp -= 1;
      }
    }, 1000);
  },
  unmounted() {
    clearInterval(this.interval);
  },
  data: () => ({
    toasts: [],
    countUp: 0,
    interval: null,
  }),
  methods: {
    keyGen,
    pushToast: function (toast) {
      if (this.toasts.length === 0) {
        this.countUp = -1;
      }
      this.toasts.push(toast);
    },
    removeToast: function (index) {
      let holderArray = [...this.toasts];
      holderArray.splice(index, 1);
      this.toasts = holderArray;
      if (index === 0) {
        this.countUp = 0;
      }
    },
  },
  props: {
    autoClose: {
      type: Number,
    },
    position: {
      type: String,
      validator: (value) =>
        ["top-right", "top-left", "bottom-left", "bottom-right"].includes(
          value
        ),
      default: "top-right",
    },
  },
};
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
  pointer-events: all;
  z-index: 99999;

  > *:not(:last-child) {
    margin-bottom: 16px;
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
