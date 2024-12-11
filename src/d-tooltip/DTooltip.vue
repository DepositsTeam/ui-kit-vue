<template>
  <d-box
    class="d-ui-tooltip-wrapper"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <d-box ref="targetRef" class="d-ui-tooltip-target">
      <slot></slot>
    </d-box>
    <Teleport to="body">
      <d-box ref="tooltipRef" class="d-ui-tooltip" :class="{ hidden }">
        {{ tooltip }}
        <d-box
          class="d-ui-tooltip__arrow"
          :class="{ [position]: true }"
          ref="arrowRef"
        ></d-box>
      </d-box>
    </Teleport>
  </d-box>
</template>

<script setup>
import { DBox } from "../main";
import { ref, onMounted, onUnmounted, watch } from "vue";
import { arrow, computePosition, flip, offset, shift } from "@floating-ui/dom";

const props = defineProps({
  tooltip: {
    type: String,
  },
  trigger: {
    type: String,
    validator: (value) => ["click", "hover", "toggle"].includes(value),
    default: "hover",
  },
  timeout: {
    type: [Number, Boolean, String],
    default: 3,
  },
  disabled: {
    type: Boolean,
  },
  position: {
    type: String,
    validator: (value) => ["top", "bottom", "right", "left"].includes(value),
    default: "top",
  },
});

const targetRef = ref(null);
const tooltipRef = ref(null);
const arrowRef = ref(null);
const hidden = ref(true);
let tooltipTimeout = ref(null);

const updateTooltip = () => {
  computePosition(targetRef.value.$el, tooltipRef.value.$el, {
    placement: props.position,
    middleware: [
      offset(6),
      flip(),
      shift({ padding: 5 }),
      arrow({ element: arrowRef.value.$el }),
    ],
  }).then(({ x, y, placement, middlewareData }) => {
    Object.assign(tooltipRef.value.$el.style, {
      left: `${x}px`,
      top: `${y}px`,
    });

    const { x: arrowX, y: arrowY } = middlewareData.arrow;

    const staticSide = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right",
    }[placement.split("-")[0]];

    Object.assign(arrowRef.value.$el.style, {
      left: arrowX != null ? `${arrowX}px` : "",
      top: arrowY != null ? `${arrowY + 4}px` : "",
      right: "",
      bottom: "",
      [staticSide]: "-3px",
    });
  });
};

const removeOnClickOutside = (e) => {
  if (
    !e.target.closest(".d-ui-tooltip-wrapper") &&
    (props.trigger === "click" || props.trigger === "toggle")
  ) {
    hidden.value = true;
  }
};

const handleClick = (e) => {
  if (props.disabled) {
    return;
  }
  if (e.target.closest(".d-ui-tooltip-wrapper")) {
    if (props.trigger === "toggle") {
      hidden.value = !hidden.value;
    } else {
      if (hidden.value) {
        if (props.trigger === "click") {
          hidden.value = false;
          updateTooltip();
          if (props.timeout && props.timeout > 0) {
            tooltipTimeout.value = setTimeout(() => {
              hidden.value = true;
            }, props.timeout * 1000);
          }
        }
      }
    }
  }
};

const handleMouseEnter = () => {
  if (props.disabled) {
    return;
  }
  clearTimeout(tooltipTimeout.value);
  if (hidden.value && props.trigger === "hover") {
    hidden.value = false;
    updateTooltip();
  }
};

const handleMouseLeave = () => {
  if (!hidden.value && props.trigger === "hover") {
    if (props.timeout && props.timeout >= 1) {
      tooltipTimeout.value = setTimeout(() => {
        hidden.value = true;
      }, props.timeout * 1000);
    } else {
      hidden.value = false;
    }
  }
};

onMounted(() => {
  if (!props.disabled) {
    updateTooltip();
    window.addEventListener("click", removeOnClickOutside);
  }
});

onUnmounted(() => {
  window.removeEventListener("click", removeOnClickOutside);
});

watch(
  () => props.position,
  () => {
    updateTooltip();
  }
);
</script>

<style lang="scss">
.d-ui-tooltip {
  background: #222;
  color: white;
  padding: 5px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  max-width: 320px;
  width: max-content;
  position: absolute;
  z-index: 1000;

  top: 0;
  left: 0;
  &.hidden {
    display: none;
  }
}
.d-ui-tooltip-target {
  display: inline-block;
}
.d-ui-tooltip__arrow {
  position: absolute;
  background: #222;
  width: 8px;
  height: 8px;
  transform: rotate(45deg);

  &.top {
  }
  &.bottom {
    transform: rotate(45deg);
  }
  &.left {
  }
  &.right {
    transform: rotate(45deg);
  }
}
</style>
