<template>
  <Teleport to="body">
    <div v-if="show" class="root-portal">
      <d-box
        class="ui-modal ui-modal__closerr"
        @click="handleCloseClicks"
        :class="{ greyContent, roundedBorders, greyHeader, roundedBorders }"
      >
        <d-box class="ui-modal__content">
          <d-box class="ui-modal__heading" :class="{ headerClasses }">
            <d-box v-if="!roundedBorders">
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
              scale="body"
              class="text-center text-black font-weight-600"
              v-if="roundedBorders && heading"
              >{{ heading }}</d-text
            >
            <d-text
              scale="subhead"
              v-if="contentText"
              class="mt-1 px-6 text-gray-500"
            >
              {{ contentText }}
            </d-text>
            <slot v-else></slot>
            <d-box margin-top="2em" class="modal__actions">
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
    </div>
  </Teleport>
</template>

<script>
import DBox from "../d-box/DBox.vue";
import DButton from "../d-button/DButton.vue";
import DText from "../d-text/DText.vue";
import CloseIcon from "../icons/CloseIcon.vue";
import DHeading from "../d-heading/DHeading.vue";
export default {
  name: "DModal",
  emits: ["closeModal", "confirmAction"],
  components: {
    DBox,
    CloseIcon,
    DHeading,
    DButton,
    DText,
  },
  props: {
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
    roundedBorders: {
      type: Boolean,
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
  },
  methods: {
    handleCloseClicks: function (e) {
      if (e.target.classList.contains("ui-modal__closerr")) {
        this.$emit("closeModal");
      }
    },
  },
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
  }

  .ui-modal__heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    background: white;
  }

  .ui-modal__body {
    padding: 24px;
  }

  &.greyContent .ui-modal__content {
    background: #f5f8fa;
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
