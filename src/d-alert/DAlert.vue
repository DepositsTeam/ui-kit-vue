<template>
  <d-box
    class="ui-alert"
    :class="{
      [`theme__${theme}`]: true,
      [`color-scheme__${colorScheme}`]: true,
      'is-toast': closable,
    }"
    v-if="showAlert"
  >
    <d-box class="ui-alert__content-wrapper">
      <d-box class="ui-alert__content">
        <component
          v-if="colorScheme !== 'default'"
          class="ui-alert__header-icon"
          :is="schemeIcons[colorScheme]"
        ></component>
        <div class="ui-alert__text">
          <d-box v-if="message" class="ui-alert__header">
            <d-heading scale="subtitle-2" class="ui-alert__header-text">
              {{ message }}
            </d-heading>
          </d-box>
          <d-text
            v-if="description && theme !== 'inline'"
            scale="subhead"
            class="ui-alert__body"
            :class="{ 'no-top': !message }"
          >
            {{ description }}
          </d-text>
          <slot name="button"></slot>
        </div>
      </d-box>
    </d-box>
    <CloseIcon
      v-if="closable && theme !== 'inline'"
      smart-color="currentcolor"
      class="ui-alert__close-icon"
      @click="handleRemoval"
    />
  </d-box>
</template>

<script>
import DBox from "../d-box/DBox.vue";
import DHeading from "../d-heading/DHeading.vue";
import DText from "../d-text/DText.vue";
import CloseIcon from "../icons/CloseIcon.vue";
import InfoIcon from "../icons/InfoIcon.vue";
import WarningIcon from "../icons/WarningIcon.vue";
import ErrorIcon from "../icons/ErrorIcon.vue";
import CheckIcon from "../icons/CheckIcon.vue";
const schemeIcons = {
  info: InfoIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  success: CheckIcon,
};
export default {
  name: "DAlert",
  data: () => ({
    showAlert: true,
  }),
  setup() {
    return { schemeIcons };
  },
  components: {
    DBox,
    DHeading,
    DText,
    CloseIcon,
  },
  props: {
    message: {
      type: String,
    },
    description: {
      type: String,
    },
    colorScheme: {
      type: String,
      default: "default",
      validator: (value) =>
        ["default", "info", "warning", "error", "success"].includes(value),
    },
    theme: {
      type: String,
      default: "flat",
      validator: (value) => ["flat", "filled", "inline"].includes(value),
    },
    button: {
      type: Object,
    },
    action: {
      type: Function,
    },
    closable: {
      type: Boolean,
    },
    onClose: {
      type: Function,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    remove: function () {
      this.showAlert = false;
    },
    handleRemoval: function () {
      if (this.onClose && typeof this.onClose === "function") {
        this.onClose();
      } else {
        this.remove();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-alert {
  border: 1px solid #e1e7ec;
  border-radius: 4px;
  padding: 12px 16px;
  display: flex;
  align-items: flex-start;
  background: #fff;
  &.dark_mode {
    background: transparent;
  }

  &.is-toast {
    box-shadow: 0 6px 14px rgba(10, 52, 64, 0.12);
    border: 1px solid #e1e7ec;
  }

  .ui-alert__header-text {
    color: #212934;
    margin: 0;
  }

  .ui-alert__body {
    color: #5f6b7a;
    margin: 8px 0 0;
    &.no-top {
      margin: 0;
    }
  }

  .ui-alert__header-icon {
    height: 20px;
    width: 20px;
    margin-right: 12px;
  }

  &.color-scheme__info {
    &.is-toast {
      border-color: #0d7fe9;
      border-left: 4px solid #0d7fe9;
    }

    .ui-alert__header-icon {
      color: #0d7fe9;
    }
  }

  &.color-scheme__warning {
    &.is-toast {
      border-color: #ff9505;
      border-left: 4px solid #ff9505;
    }

    .ui-alert__header-icon {
      color: #ff9505;
    }
  }

  &.color-scheme__error {
    &.is-toast {
      border-color: #d62f4b;
      border-left: 4px solid #d62f4b;
    }

    .ui-alert__header-icon {
      color: #d62f4b;
    }
  }

  &.color-scheme__success {
    &.is-toast {
      border-color: #00b058;
      border-left: 4px solid #00b058;
    }

    .ui-alert__header-icon {
      color: #00b058;
    }
  }

  .ui-alert__call-to-action {
    margin-top: 12px;
  }

  &.theme__filled {
    background: #f5f8fa;

    &.color-scheme__info {
      background: #0d7fe9;
    }

    &.color-scheme__warning {
      background: #ff9505;
    }

    &.color-scheme__error {
      background: #d62f4b;
    }

    &.color-scheme__success {
      background: #00b058;
    }

    &:not(.color-scheme__default):not(.color-scheme__warning) {
      .ui-alert__header-text,
      .ui-alert__header-icon {
        color: #fff;
      }
    }

    &.color-scheme__warning .ui-alert__header-icon {
      color: #000;
    }

    &.color-scheme__info .ui-alert__body {
      color: #ddefff;
    }

    &.color-scheme__warning .ui-alert__body {
      color: #573302;
    }

    &.color-scheme__error .ui-alert__body {
      color: #fff0f2;
    }

    &.color-scheme__success .ui-alert__body {
      color: #edfff9;
    }
  }
}

.ui-alert__content {
  display: flex;
}

.ui-alert__content-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.ui-alert__close-icon {
  color: #8895a7;
  height: 20px;
  width: 20px;
  cursor: pointer;
}

.ui-alert {
  &.theme__inline {
    border: none;
    background: transparent;
    padding: 8px;
  }

  &.is-toast {
    box-shadow: 0 6px 14px rgba(10, 52, 64, 0.12);
    border: 1px solid #e1e7ec;
  }
}
</style>
