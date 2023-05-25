<template>
  <d-box @click="changed" class="d-radio-card">
    <d-auto-layout gap="16px">
      <d-box v-if="$slots.icon" class="d-radio-card__icon">
        <slot name="icon"></slot>
      </d-box>
      <d-box class="d-radio-card__content">
        <slot>
          <d-heading my0>{{ heading }}</d-heading>
          <d-text scale="subhead" light-color="#8C97A7" my0>{{
            description
          }}</d-text>
        </slot>
      </d-box>
    </d-auto-layout>

    <d-box class="d-radio-card__radio">
      <d-radio
        ring-size="24px"
        :checked="isChecked"
        ring-thickness="8px"
        ringed
      />
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DHeading, DAutoLayout, DText, DRadio } from "../main";
import { useRadio } from "../utils/composables/useRadio";

const props = defineProps({
  heading: {
    type: String,
  },
  description: {
    type: String,
  },
  checked: {
    type: Boolean,
    default: null,
  },
  value: {
    type: [String, Number],
    default: "",
  },
  modelValue: {
    default: false,
  },
  disabled: {
    type: Boolean,
  },
});

const emit = defineEmits(["update:modelValue", "click"]);

const { isChecked, changed } = useRadio(props, emit);
</script>

<style lang="scss" scoped>
.d-radio-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 16px;
  border: 1px solid #e1e7ec;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  .d-radio-card__icon {
    border: 1px solid #e1e7ec;
    display: flex;
    min-height: 42px;
    min-width: 42px;
    padding: 12px;
    aspect-ratio: 1 / 1;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
  }
}
</style>