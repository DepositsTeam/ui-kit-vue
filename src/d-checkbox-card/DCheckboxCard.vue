<template>
  <InputCard
    :heading="heading"
    :description="description"
    :expandable="expandable"
    :label="label"
    :label-class="labelClass"
    :label-font-face="labelFontFace"
    :expand-on-checked="expandOnChecked"
    :is-checked="isChecked"
    @clicked="handleClick"
  >
    <template #selector>
      <d-checkbox :dashed="dashed" size="18px" :checked="isChecked" />
    </template>
    <slot></slot>
    <template #icon v-if="$slots.icon">
      <slot name="icon"></slot>
    </template>
  </InputCard>
</template>

<script setup>
import { DCheckbox } from "@/main";
import { useCheckbox } from "@/utils/composables/useCheckbox";
import InputCard from "@/composed-components/input-card/InputCard.vue";
import inputCardProps from "@/composed-components/input-card/inputCardProps";

const props = defineProps({
  ...inputCardProps,
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
  trueValue: {
    default: true,
  },
  falseValue: {
    default: false,
  },
  values: {
    type: Array,
    default: () => [],
  },
  dashed: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
});

const emit = defineEmits(["update:modelValue"]);

const { isChecked, triggerChange: changed } = useCheckbox(props, emit);

const handleClick = () => {
  changed();
};
</script>
