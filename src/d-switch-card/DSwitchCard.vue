<template>
  <InputCard
    :heading="heading"
    :description="description"
    :expandable="expandable"
    :label="label"
    :label-class="labelClass"
    :label-font-face="labelFontFace"
    @clicked="handleClick"
  >
    <template #selector>
      <d-switch
        :switch-color="switchColor"
        :thumb-color="thumbColor"
        :thumb-size="thumbSize"
        :switch-width="switchWidth"
        :switch-height="switchHeight"
        :color-scheme="colorScheme"
        size="18px"
        v-model="isChecked"
      />
    </template>
    <slot></slot>
    <template #icon v-if="$slots.icon">
      <slot name="icon"></slot>
    </template>
  </InputCard>
</template>

<script setup>
import InputCard from "@/composed-components/input-card/InputCard.vue";
import inputCardProps from "@/composed-components/input-card/inputCardProps";
import { useCheckbox } from "@/utils/composables/useCheckbox";
import DSwitch from "@/d-switch/DSwitch.vue";

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
  disabled: {
    type: Boolean,
  },
  switchColor: {
    type: String,
  },
  thumbColor: {
    type: String,
    default: "#ffffff",
  },
  thumbSize: {
    type: String,
    default: "18px",
  },
  switchWidth: {
    type: String,
    default: "56px",
  },
  switchHeight: {
    type: String,
    default: "26px",
  },
  colorScheme: {
    type: String,
    validator: (value) =>
      ["primary", "danger", "success", "warning"].includes(value),
    default: "success",
  },
});

const emit = defineEmits(["update:modelValue", "click"]);

const { isChecked, triggerChange: changed } = useCheckbox(props, emit);

const handleClick = () => {
  changed();
};
</script>
