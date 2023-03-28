<template>
  <d-box class="d-context-menu-dropdown-wrapper">
    <d-box ref="targetRef" class="d-context-menu-dropdown-target">
      <slot></slot>
    </d-box>
    <d-box ref="dropdownRef" class="d-context-menu-dropdown">
      <d-box
        class="d-context-menu-dropdown-option"
        v-for="option in computedOptions"
        :key="option.uuid"
      >
        <d-text>{{ option.text }}</d-text>
      </d-box>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText } from "../main";
import { computed } from "vue";
import MenuOption from "./MenuOption";

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

const computedOptions = computed(() =>
  [...props.options].map((option) => new MenuOption(option, props.optionTitle))
);
</script>

<style lang="scss" scoped>
.d-context-menu-dropdown {
  background: white;
  color: white;
  padding: 8px;
  border-radius: 6px;
  font-weight: 500;
  max-width: 320px;
  width: max-content;
  position: absolute;
  top: 0;
  left: 0;
  &.hidden {
    display: none;
  }
}
</style>
