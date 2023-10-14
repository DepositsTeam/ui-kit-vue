<template>
  <Teleport to="body">
    <d-box v-if="show" class="root-portal">
      <d-box
        class="ui-modal ui-modal__closerr"
        @click="handleCloseClicks"
        :class="{
          greyContent,
          roundedBorders,
          greyHeader,
          overlayBg,
          [`modal__${alignment}`]: alignment,
        }"
        :style="{
          '--overlay-bg': overlayBg,
        }"
      >
        <d-box
          class="ui-modal__content"
          :style="{
            '--modal-width': modalWidth,
            '--min-modal-width': minModalWidth,
            '--max-modal-width': maxModalWidth,
          }"
          :class="{ maxModalWidth, minModalWidth }"
        >
        <slot name="custom-heading" v-if="$slotscustom-heading"></slot>          
        <slot name="customHeading" v-if="$slots.customHeading"></slot>
          <d-box v-else class="ui-modal__heading" :class="{ headerClasses }">
            <d-box>
              <slot name="heading" v-if="$slots.heading"></slot>
              <d-heading my0 is="h5" v-else> {{ heading }}</d-heading>
            </d-box>
            <d-box
              class="ui-modal__closerr ui-modal__close-icon"
              @click="handleCloseClicks"
            >
              <CloseIcon
                smart-color="#8895A7"
                class="ui-modal__closerr ui-modal__close-icon"
                v-if="showCloseIcon"
              />
            </d-box>
          </d-box>
          <d-box class="ui-modal__body" :class="{ bodyClasses }">
            <d-text
              scale="subhead"
              v-if="contentText"
              class="mt-1 px-6 text-gray-500"
            >
              {{ contentText }}
            </d-text>
            <slot v-else></slot>
            <d-box v-if="showActions" margin-top="2em" class="modal__actions">
              <d-button
                color-scheme="primary"
                responsive
                size="huge"
                id="opensPlaid"
                :disabled="asyncLoading"
                @click="$emit('confirmAction')"
              >
                <span
                  v-if="asyncLoading"
                  class="ui-button__button-text loader-text"
                >
                  {{ asyncLoadingText }}
                </span>
                <span v-else class="ui-button__button-text">
                  {{ confirmBtnText }}
                </span>
              </d-button>
              <d-button
                :disabled="asyncLoading"
                color-scheme="danger"
                responsive
                size="huge"
                class="ui-modal__closerr"
                @click="$emit('closeModal')"
              >
                <span class="ui-button__button-text"> {{ denyBtnText }} </span>
              </d-button>
            </d-box>
          </d-box>
        </d-box>
      </d-box>
    </d-box>
  </Teleport>
</template>

<script setup>
import { CloseIcon, DBox, DButton, DHeading, DText } from "../main";
import { watch } from "vue";

const emit = defineEmits(["closeModal", "confirmAction"]);

const props = defineProps({
  show: {
    type: Boolean,
  },
  greyContent: {
    type: Boolean,
  },
  roundedBorders: {
    type: Boolean,
  },
  minModalWidth: {
    type: String,
  },
  modalWidth: {
    type: String,
  },
  maxModalWidth: {
    type: String,
  },
  heading: {
    type: String,
  },
  headerClasses: {
    type: [String, Object, Array],
  },
  bodyClasses: {
    type: [String, Object, Array],
  },
  greyHeader: {
    type: Boolean,
  },
  showCloseIcon: {
    type: Boolean,
    default: true,
  },
  showActions: {
    type: Boolean,
    default: false,
  },
  asyncLoading: {
    type: Boolean,
    default: false,
  },
  asyncLoadingText: {
    type: String,
    default: "Loading",
  },
  confirmBtnText: {
    type: String,
    default: "Yes",
  },
  denyBtnText: {
    type: String,
    default: "Cancel",
  },
  contentText: {
    type: String,
  },
  overlayBg: {
    type: String,
  },
  alignment: {
    type: String,
    validator: (value) => ["top", "bottom", "center"].includes(value),
    default: "top",
  },
});

const handleCloseClicks = (e) => {
  if (e.target.classList.contains("ui-modal__closerr")) {
    emit("closeModal");
  }
};

watch(
  () => props.show,
  (value) => {
    const removeModal = (e) => {
      if (e.key === "Escape") {
        emit("closeModal");
      }
    };
    if (value) {
      window.addEventListener("keydown", removeModal);
    } else {
      window.removeEventListener("keydown", removeModal);
    }
  }
);
</script>

<style lang="scss" scoped>
.ui-modal {
  background: rgba(0, 0, 0, 0.35);
  &.overlayBg {
    background: var(--overlay-bg);
  }

  /* position: fixed; */
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  padding: 24px;
  overflow-y: scroll;

  &.modal__top {
    align-items: flex-start;
  }

  &.modal__center {
    align-items: center;
  }

  &.modal__bottom {
    align-items: flex-end;
  }

  &.visibility__visible {
    display: flex;
  }

  .ui-modal__content {
    background: white;
    width: var(--modal-width);
    min-width: 315px;
    max-width: calc(100vw - 60px);
    max-height: calc(100svh - (24px * 2));
    overflow-y: auto;

    &.maxWidth {
      max-width: var(--max-modal-width);
    }

    &.minWidth {
      min-width: var(--min-modal-width);
    }

    &.dark_mode {
      background: var(--dark-background-color);
    }
  }

  .ui-modal__heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    background: white;

    &.dark_mode {
      background: var(--dark-background-color);
    }
  }

  .ui-modal__body {
    padding: 24px;
  }

  &.greyContent .ui-modal__content {
    background: #f5f8fa;

    &.dark_mode {
      background: var(--dark-background-color);
    }
  }

  &.greyHeader .ui-modal__heading {
    background: #f5f8fa;
  }

  &.roundedBorders .ui-modal__content {
    border-radius: 6px;

    .ui-modal__heading {
      border-radius: 6px 6px 0 0;
    }

    .ui-modal__body {
      border-radius: 0 0 6px 6px;
    }
  }
}

.root-portal {
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  left: 0;
}

.ui-modal__close-icon {
  cursor: pointer;
  height: 20px;
  width: 20px;
}
</style>
