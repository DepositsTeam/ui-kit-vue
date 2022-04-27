<template>
  <Teleport to="body">
    <div v-if="show" class="root-portal">
      <d-box
        class="ui-modal ui-modal__closerr"
        @click="handleCloseClicks"
        :class="{ greyContent, roundedBorders, greyHeader }"
      >
        <d-box class="ui-modal__content">
          <div class="ui-modal__heading" :class="{ headerClasses }">
            <slot name="heading" v-if="$slots.heading"></slot>
            <d-heading my0 is="h5" v-else> {{ heading }} </d-heading>
            <CloseIcon
              smart-color="#8895A7"
              class="ui-modal__closerr ui-modal__close-icon"
              @click="handleCloseClicks"
            />
          </div>
          <div class="ui-modal__body" :class="{ bodyClasses }">
            <slot></slot>
          </div>
        </d-box>
      </d-box>
    </div>
  </Teleport>
</template>

<script>
import DBox from "../d-box/DBox.vue";
import CloseIcon from "../icons/CloseIcon.vue";
import DHeading from "../d-heading/DHeading.vue";
export default {
  name: "DModal",
  emits: ["closeModal"],
  components: {
    DBox,
    CloseIcon,
    DHeading,
  },
  props: {
    show: {
      type: Boolean,
    },
    greyContent: {
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
