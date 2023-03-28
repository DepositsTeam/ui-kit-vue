<template>
  <d-box
    class="d-context-menu-dropdown-wrapper"
    :style="{
      '--dropdown-min-width': minWidth,
    }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <d-box
      ref="targetRef"
      @click="handleTargetClick"
      class="d-context-menu-dropdown-target"
    >
      <slot></slot>
    </d-box>
    <d-box
      ref="dropdownRef"
      class="d-context-menu-dropdown"
      :class="{ hidden }"
    >
      <d-box
        class="d-context-menu-dropdown-option"
        v-for="option in computedOptions"
        :key="option.uuid"
        @click="handleOptionClick(option)"
        @mouseenter="handleOptionHover(option)"
      >
        <d-text
          my0
          mx0
          scale="subhead"
          :style="{ '--custom-option-color': option.textColor }"
          :font-face="option.fontFace"
          class="d-context-menu-dropdown-option__text"
          :class="{
            [option.className]: option.className,
            custom_color: option.textColor,
          }"
          >{{ option.text }}</d-text
        >
      </d-box>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText } from "../main";
import { computed, onMounted, onUnmounted, ref } from "vue";
import MenuOption from "./MenuOption";
import { computePosition, flip, offset, shift } from "@floating-ui/dom";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  options: {
    type: Array,
  },
  optionTitle: {
    type: String,
    default: "text",
  },
  trigger: {
    type: String,
    default: "click",
    validator: (value) => ["click", "hover"].includes(value),
  },
});

const emit = defineEmits(["option-clicked"]);

const targetRef = ref(null);
const dropdownRef = ref(null);

const hidden = ref(true);
const minWidth = ref("120px");

const computedOptions = computed(() =>
  [...props.options].map((option) => new MenuOption(option, props.optionTitle))
);

const updateDropdown = () => {
  const clientWidth = targetRef.value.$el.clientWidth;
  if (targetRef.value.$el.clientWidth >= minWidth.value) {
    minWidth.value = clientWidth + "px";
  }

  computePosition(targetRef.value.$el, dropdownRef.value.$el, {
    placement: "bottom-start",
    middleware: [offset(0), flip(), shift({ padding: 5 })],
  }).then(({ x, y }) => {
    Object.assign(dropdownRef.value.$el.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
  });
};

const removeOnClickOutside = (e) => {
  if (
    !e.target.closest(".d-context-menu-dropdown-wrapper") &&
    props.trigger === "click"
  ) {
    hidden.value = true;
  }
};

const handleTargetClick = () => {
  if (props.trigger === "click") {
    if (hidden.value) {
      hidden.value = false;
      updateDropdown();
      if (props.timeout && props.timeout > 0) {
        setTimeout(() => {
          hidden.value = true;
        }, props.timeout * 1000);
      }
    } else {
      hidden.value = true;
    }
  }
};

const handleMouseEnter = () => {
  if (hidden.value && props.trigger === "hover") {
    hidden.value = false;
    updateDropdown();
  }
};

const handleMouseLeave = () => {
  if (!hidden.value && props.trigger === "hover") {
    hidden.value = true;
  }
};

onMounted(() => {
  updateDropdown();
  window.addEventListener("click", removeOnClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("click", removeOnClickOutside);
});

const handleOptionClick = (option) => {
  if (option.to) {
    router.push(option.to);
  } else if (option.href) {
    window.open(option.href, "_blank");
  } else {
    if (option.onClick && typeof option.onClick === "function") {
      option.onClick(option.originalOption);
    }
  }

  emit("option-clicked", option.originalOption);
  hidden.value = true;
};

const handleOptionHover = (option) => {
  if (option.onHover && typeof option.onHover === "function") {
    option.onHover(option.originalOption);
  }
};
</script>

<style lang="scss" scoped>
.d-context-menu-dropdown {
  background: white;
  min-width: var(--dropdown-min-width);
  border-radius: 6px;
  font-weight: 500;
  max-width: 320px;
  width: max-content;
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  border: 0.5px solid #f1f1f1;
  &.dark_mode {
    background: var(--dark-input-background-color);
    border-color: var(--dark-input-border-color);
  }
  &.hidden {
    display: none;
  }
}
.d-context-menu-dropdown-option__text {
  font-weight: 450;
  color: #5f6b7a;
  &.custom_color {
    color: var(--custom-option-color);
  }
  &.dark_mode:not(.custom_color) {
    color: var(--dark-subtle-text-color);
  }
}
.d-context-menu-dropdown-target {
  display: inline-block;
}
.d-context-menu-dropdown-option {
  cursor: pointer;
  padding: 10px 16px;
  &:first-child {
    border-radius: 6px 6px 0 0;
  }
  &:last-child {
    border-radius: 0 0 6px 6px;
  }
  &:hover {
    background: #f7f7f7;
    &.dark_mode {
      background: var(--dark-input-border-color);
    }
  }
}
.d-context-menu-dropdown-wrapper {
  width: max-content;
}
</style>
