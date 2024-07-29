<template>
  <d-box
    class="ui-alert"
    :class="{
      [`theme__${theme}`]: true,
      [`color-scheme__${colorScheme}`]: true,
      'is-toast': closable,
      smartColor,
      iconColor,
    }"
    v-if="showAlert"
    :style="{
      '--smart-color': smartColor,
      '--smart-text-header-color': getTextColor(
        smartColor,
        '#cbd5e1',
        '#212934'
      ),
      '--smart-text-body-color': getTextColor(smartColor, '#5f6b7a', '#94a3b8'),
      '--icon-color': iconColor,
      '--light-primary-title-text-color': getTextColor(
        d__theme['--light-primary-action-color'],
        '#ffffff',
        '#212934'
      ),
      '--light-primary-description-text-color': getTextColor(
        d__theme['--light-primary-action-color'],
        '#ffffff',
        '#5f6b7a'
      ),
      '--dark-primary-title-text-color': getTextColor(
        d__theme['--dark-primary-action-color'],
        '#ffffff',
        '#212934'
      ),
      '--dark-primary-description-text-color': getTextColor(
        d__theme['--dark-primary-action-color'],
        '#ffffff',
        '#5f6b7a'
      ),
    }"
  >
    <d-box class="ui-alert__content-wrapper">
      <d-box class="ui-alert__content">
        <component
          :is="icon"
          v-if="icon && !hideIcon"
          class="ui-alert__header-icon"
        ></component>
        <d-box
          v-else-if="$slots.icon && !hideIcon"
          class="ui-alert__header-icon"
        >
          <slot name="icon"> </slot>
        </d-box>
        <component
          v-else-if="colorScheme !== 'default' && !hideIcon"
          class="ui-alert__header-icon"
          :is="schemeIcons[colorScheme]"
        ></component>
        <d-box class="ui-alert__text" flex="1">
          <slot name="message">
            <d-box v-if="message" class="ui-alert__header">
              <d-heading scale="subtitle-2" class="ui-alert__header-text">
                {{ message }}
              </d-heading>
            </d-box>
          </slot>
          <slot name="description">
            <d-text
              v-if="description && theme !== 'inline'"
              scale="subhead"
              class="ui-alert__body"
              :class="{ 'no-top': !message }"

            >
              {{ description }}
            </d-text>
          </slot>
          <slot name="button">
            <d-box v-if="button" margin-top="16px">
              <d-button
                v-bind="{ ...button }"
                @click="emitClick"
                size="small"
                >{{ button.text }}</d-button
              >
            </d-box>
          </slot>
        </d-box>
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

<script setup>
import { DBox, DButton, DHeading, DText } from "../main";
import {
  CloseIcon,
  InfoIcon,
  WarningIcon,
  ErrorIcon,
  CheckIcon,
} from "../main";
import { inject, ref } from "vue";
import { getTextColor } from "@/utils/colorManager";
import { defaultThemeVars } from "@/providers/default-theme";

const emit = defineEmits(["closed", "button-clicked"]);
const d__theme = inject("d__theme", defaultThemeVars);

defineProps({
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
      ["default", "info", "warning", "error", "success", "primary"].includes(
        value
      ),
  },
  theme: {
    type: String,
    default: "flat",
    validator: (value) => ["flat", "filled", "inline"].includes(value),
  },
  button: {
    type: Object,
  },
  closable: {
    type: Boolean,
  },
  smartColor: {
    type: String,
  },
  iconColor: {
    type: String,
  },
  icon: {
    type: Object,
  },
  hideIcon: {
    type: Boolean,
  },
});
const schemeIcons = {
  info: InfoIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  success: CheckIcon,
};
const showAlert = ref(true);

const remove = () => {
  showAlert.value = false;
};
const handleRemoval = () => {
  remove();
  emit("closed");
};
const emitClick = () => emit("button-clicked");
</script>

<style lang="scss" scoped>
.ui-alert {
  border: 1px solid #e1e7ec;
  border-radius: 4px;
  padding: 12px 16px;
  display: flex;
  align-items: flex-start;
  background: #fff;
  &.iconColor {
    .ui-alert__header-icon {
      color: var(--icon-color);
    }
  }
  &.dark_mode {
    background: var(--dark-background-color);
    border-color: #202b3c;
    .ui-alert__header-text {
      color: #cbd5e1;
    }
    .ui-alert__body {
      color: #94a3b8;
    }
    &.theme__flat {
      border-left: 4px solid;
      &:not(.smartColor) {
        &.color-scheme__primary {
          border-color: var(--light-primary-action-color);
          &.dark_mode {
            border-color: var(--dark-primary-action-color);
          }
        }
        &.color-scheme__info {
          border-color: #0d7fe9;
        }

        &.color-scheme__primary {
          border-color: var(--light-primary-action-color);
          &.dark_mode {
            border-color: var(--dark-primary-action-color);
          }
        }

        &.color-scheme__warning {
          border-color: #ff9505;
        }

        &.color-scheme__error {
          border-color: #d62f4b;
        }

        &.color-scheme__success {
          border-color: #00b058;
        }
      }
      &.smartColor {
        border-color: var(--smart-color);
      }
    }
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

  &.smartColor {
    &.is-toast {
      border-color: var(--smart-color);
      border-left: 4px solid var(--smart-color);
    }
    &.theme__filled {
      background: var(--smart-color);
      border-color: transparent;
      .ui-alert__header-text {
        color: var(--smart-text-header-color);
      }
      .ui-alert__body {
        color: var(--smart-text-body-color);
      }
    }
  }

  &:not(.smartColor) {
    &.color-scheme__info {
      &.is-toast {
        border-color: #0d7fe9;
        border-left: 4px solid #0d7fe9;
      }

      .ui-alert__header-icon {
        color: #0d7fe9;
      }
    }
    &.color-scheme__primary {
      &.is-toast {
        border-color: var(--light-primary-action-color);
        border-left: 4px solid var(--light-primary-action-color);
      }

      .ui-alert__header-icon {
        color: var(--light-primary-action-color);
      }

      &.dark_mode {
        &.is-toast {
          border-color: var(--dark-primary-action-color);
          border-left: 4px solid var(--dark-primary-action-color);
        }

        .ui-alert__header-icon {
          color: var(--dark-primary-action-color);
        }
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
  }

  .ui-alert__call-to-action {
    margin-top: 12px;
  }

  &.theme__filled {
    &:not(.smartColor) {
      background: #f5f8fa;

      &.dark_mode {
        background: #202b3c;
      }
      &.color-scheme__primary {
        background: var(--light-primary-action-color);
        .ui-alert__header-text {
          color: var(--light-primary-title-text-color);
        }
        .ui-alert__body {
          color: var(--light-primary-description-text-color);
        }
        &.dark_mode {
          background: var(--dark-primary-action-color);
          .ui-alert__header-text {
            color: var(--dark-primary-title-text-color);
          }
          .ui-alert__body {
            color: var(--dark-primary-description-text-color);
          }
        }
      }

      &.color-scheme__info {
        background: #0d7fe9;
        .ui-alert__header-text {
          color: #ffffff;
        }
        .ui-alert__body {
          color: #ddefff;
        }
        .ui-alert__header-icon {
          color: #fff;
        }
        &.dark_mode {
          background: #0d7fe9;
          .ui-alert__header-text {
            color: #ffffff;
          }
          .ui-alert__body {
            color: #ddefff;
          }
          .ui-alert__header-icon {
            color: #fff;
          }
        }
      }

      &.color-scheme__warning {
        background: #ff9505;
        .ui-alert__header-text {
          color: #525964;
        }
        .ui-alert__body {
          color: #573302;
        }
        .ui-alert__header-icon {
          color: #525964;
        }
        &.dark_mode {
          background: #dc8104;
          .ui-alert__header-text {
            color: #cbd5e1;
          }
          .ui-alert__body {
            color: #271701;
          }
          .ui-alert__header-icon {
            color: #cbd5e1;
          }
        }
      }

      &.color-scheme__danger,
      &.color-scheme__error {
        background: #d62f4b;
        .ui-alert__header-text {
          color: #fff;
        }
        .ui-alert__body {
          color: #fff0f2;
        }
        .ui-alert__header-icon {
          color: #fff;
        }
        &.dark_mode {
          background: #df5e74;
          .ui-alert__header-text {
            color: #fff;
          }
          .ui-alert__body {
            color: #350a12;
          }
          .ui-alert__header-icon {
            color: #fff;
          }
        }
      }

      &.color-scheme__success {
        background: #00b058;
        .ui-alert__header-text {
          color: #fff;
        }
        .ui-alert__body {
          color: #edfff9;
        }
        .ui-alert__header-icon {
          color: #fff;
        }
        &.dark_mode {
          background: #2eab6c;
          .ui-alert__header-text {
            color: #fff;
          }
          .ui-alert__body {
            color: #081e13;
          }
          .ui-alert__header-icon {
            color: #fff;
          }
        }
      }
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
