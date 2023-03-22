<template>
  <d-box
    class="ui-tooltip-wrapper"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <d-box ref="targetRef" class="ui-tooltip-target">
      <slot></slot>
    </d-box>
    <d-box ref="tooltipRef" class="ui-tooltip" :class="{ hidden }">
      {{ tooltip }}
      <d-box class="ui-tooltip__arrow" ref="arrowRef"></d-box>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox } from "../main";
import { ref, onMounted, onUnmounted } from "vue";
import { arrow, computePosition, flip, offset, shift } from "@floating-ui/dom";

const props = defineProps({
  tooltip: {
    type: String,
  },
  trigger: {
    type: String,
    validator: (value) => ["click", "hover"].includes(value),
    default: "hover",
  },
  timeout: {
    type: [Number, Boolean],
    default: 3,
  },
});

const targetRef = ref(null);
const tooltipRef = ref(null);
const arrowRef = ref(null);
const hidden = ref(true);

const updateTooltip = () => {
  computePosition(targetRef.value.$el, tooltipRef.value.$el, {
    placement: "top",
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
      top: arrowY != null ? `${arrowY}px` : "",
      right: "",
      bottom: "",
      [staticSide]: "-4px",
    });
  });
};

const removeOnClickOutside = (e) => {
  if (!e.target.closest(".ui-tooltip-wrapper") && props.trigger === "click") {
    hidden.value = true;
  }
};

const handleClick = (e) => {
  if (e.target.closest(".ui-tooltip-wrapper")) {
    if (hidden.value && props.trigger === "click") {
      hidden.value = false;
      updateTooltip();
      if (props.timeout && props.timeout > 0) {
        setTimeout(() => {
          hidden.value = true;
        }, props.timeout * 1000);
      }
    }
  }
};

const handleMouseEnter = () => {
  if (hidden.value && props.trigger === "hover") {
    hidden.value = false;
    updateTooltip();
  }
};

const handleMouseLeave = () => {
  if (!hidden.value && props.trigger === "hover") {
    hidden.value = true;
  }
};

onMounted(() => {
  updateTooltip();
  window.addEventListener("click", removeOnClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("click", removeOnClickOutside);
});
</script>

<style lang="scss">
.ui-tooltip {
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
  top: 0;
  left: 0;
  &.hidden {
    display: none;
  }
}
.ui-tooltip-target {
  display: inline-block;
}
.ui-tooltip__arrow {
  position: absolute;
  background: #222;
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
}
</style>
