<template>
  <Teleport to="body">
    <d-box v-if="show" class="root-portal" :style="{ ...d__theme }">
      <d-box
        class="ui-modal ui-modal__closerr"
        @click="handleCloseClicks"
        :class="{ greyContent, roundedBorders, greyHeader, roundedBorders }"
      >
        <d-box
          class="ui-modal__content"
          :style="{ '--modalwidth': modalWidth }"
          :class="{ maxWidth: modalWidth }"
        >
          <d-box class="ui-modal__heading" :class="{ headerClasses }">
            <d-box>
              <slot name="heading" v-if="$slots.heading"></slot>
              <d-heading my0 is="h5" v-else> {{ heading }} </d-heading>
            </d-box>
            <CloseIcon
              smart-color="#8895A7"
              class="ui-modal__closerr ui-modal__close-icon"
              v-if="showCloseIcon"
              @click="handleCloseClicks"
            />
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
import { inject } from "vue";
import { DBox, DButton, DText, DHeading, CloseIcon } from "../main";
import { defaultThemeVars } from "../providers/default-theme";

const emit = defineEmits(["closeModal", "confirmAction"]);

const d__theme = inject("d__theme", defaultThemeVars);

defineProps({
  show: {
    type: Boolean,
  },
  greyContent: {
    type: Boolean,
  },
  roundedBorders: {
    type: Boolean,
  },
  requestClose: {
    type: Function,
  },
  modalWidth: {
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
});

const handleCloseClicks = (e) => {
  if (e.target.classList.contains("ui-modal__closerr")) {
    emit("closeModal");
  }
};
</script>

<style lang="scss" scoped>
.ui-modal {
  background: rgba(0, 0, 0, 0.35);

  /* position: fixed; */
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 24px;
  overflow-y: scroll;

  &.visibility__visible {
    display: flex;
  }

  .ui-modal__content {
    background: white;
    min-width: 315px;
    max-width: calc(100vw - 60px);
    &.maxWidth {
      max-width: var(--modalwidth);
    }
    &.dark_mode {
      background: var(--darkBackgroundColor);
    }
  }

  .ui-modal__heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    background: white;
    &.dark_mode {
      background: var(--darkBackgroundColor);
    }
  }

  .ui-modal__body {
    padding: 24px;
  }

  &.greyContent .ui-modal__content {
    background: #f5f8fa;
    &.dark_mode {
      background: var(--darkBackgroundColor);
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
