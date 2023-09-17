<template>
  <d-box
    class="d-auto-layout"
    :class="{
      [`direction__${direction}`]: direction,
      [`align__${alignment}`]: alignment,
      wrap,
      stretchItems,
      switch: shouldWidthSwitch || shouldSwitch,
      between,
      around,
      evenly,
      full__width__items: fullWidthItems,
    }"
    ref="elem"
    :style="{ '--spacing-value': itemSpacing }"
  >
    <slot></slot>
  </d-box>
</template>

<script setup>
import { DBox } from "../main";
import { onMounted, onUnmounted } from "vue";
import { ref } from "vue";

const shouldSwitch = ref(false);
const elem = ref(null);
const shouldWidthSwitch = ref(false);

const props = defineProps({
  direction: {
    type: String,
    validator: (value) => ["horizontal", "vertical"].includes(value),
    default: "horizontal",
  },
  itemSpacing: {
    type: [String, Number],
    default: "10px",
  },
  switchBreakpoint: {
    type: Number,
  },
  switchWidth: {
    type: Number,
  },
  alignment: {
    type: String,
    validator: (value) =>
      [
        "top-left",
        "top-center",
        "top-right",
        "center-right",
        "center",
        "center-left",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ].includes(value),
  },
  wrap: Boolean,
  stretchItems: {
    type: Boolean,
    default: false,
  },
  between: {
    type: Boolean,
  },
  around: {
    type: Boolean,
  },
  evenly: {
    type: Boolean,
  },
  fullWidthItems: {
    type: Boolean,
  },
});

const watchForSwitch = () => {
  if (props.switchBreakpoint) {
    shouldSwitch.value = window.innerWidth <= props.switchBreakpoint;
  }
};

const watchForWidthSwitch = () => {
  if (props.switchWidth) {
    shouldWidthSwitch.value =
      elem.value.$el.getBoundingClientRect().width <= props.switchWidth;
  }
};

onMounted(() => {
  watchForSwitch();
  watchForWidthSwitch();
  window.addEventListener("resize", watchForSwitch);
  window.addEventListener("resize", watchForWidthSwitch);
});

onUnmounted(() => {
  window.removeEventListener("resize", watchForSwitch);
  window.removeEventListener("resize", watchForWidthSwitch);
});
</script>

<style lang="scss">
.d-auto-layout {
  display: flex;
  &.wrap {
    flex-wrap: wrap;
  }
  &.between {
    justify-content: space-between;
  }
  &.evenly {
    justify-content: space-evenly;
  }
  &.around {
    justify-content: space-around;
  }
  &.direction__horizontal {
    flex-direction: row;
    gap: var(--spacing-value);
    &.switch {
      flex-direction: column;
    }
    &.stretchItems > * {
      flex: 1;
    }
    &.align__top-left {
      align-items: flex-start;
      &:not(.evenly):not(.around):not(.between) {
        justify-content: flex-start;
      }
    }
    &.align__top-center {
      align-items: flex-start;
      &:not(.evenly):not(.around):not(.between) {
        justify-content: center;
      }
    }
    &.align__top-right {
      align-items: flex-start;
      &:not(.evenly):not(.around):not(.between) {
        justify-content: flex-end;
      }
    }
    &.align__center-left {
      align-items: center;
      &:not(.evenly):not(.around):not(.between) {
        justify-content: flex-start;
      }
    }
    &.align__center {
      align-items: center;
      &:not(.evenly):not(.around):not(.between) {
        justify-content: center;
      }
    }
    &.align__center-right {
      align-items: center;
      &:not(.evenly):not(.around):not(.between) {
        justify-content: flex-end;
      }
    }
    &.align__bottom-left {
      align-items: flex-end;
      &:not(.evenly):not(.around):not(.between) {
        justify-content: flex-start;
      }
    }
    &.align__bottom-center {
      align-items: flex-end;
      &:not(.evenly):not(.around):not(.between) {
        justify-content: center;
      }
    }
    &.align__bottom-right {
      align-items: flex-end;
      &:not(.evenly):not(.around):not(.between) {
        justify-content: flex-end;
      }
    }
  }
  &.direction__vertical {
    flex-direction: column;
    gap: var(--spacing-value);
    &.switch {
      flex-direction: row;
    }
    &.full__width__items > * {
      width: 100%;
    }
    &.align__top-left {
      justify-content: flex-start;
      align-items: flex-start;
    }
    &.align__top-center {
      justify-content: flex-start;
      align-items: center;
    }
    &.align__top-right {
      justify-content: flex-start;
      align-items: flex-end;
    }
    &.align__center-right {
      justify-content: center;
      align-items: flex-start;
    }
    &.align__center {
      justify-content: center;
      align-items: center;
    }
    &.align__center-right {
      justify-content: center;
      align-items: flex-end;
    }
    &.align__bottom-left {
      justify-content: flex-end;
      align-items: flex-start;
    }
    &.align__bottom-center {
      justify-content: flex-end;
      align-items: center;
    }
    &.align__bottom-right {
      justify-content: flex-end;
      align-items: flex-end;
    }
  }
}
</style>
