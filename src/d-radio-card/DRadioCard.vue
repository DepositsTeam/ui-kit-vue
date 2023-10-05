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
      <d-radio
        :ring-size="ringSize"
        :checked="isChecked"
        :ring-thickness="ringThickness"
        :ringed="ringed"
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
import { useRadio } from "@/utils/composables/useRadio";
import DRadio from "@/d-radio/DRadio.vue";

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
  disabled: {
    type: Boolean,
  },
  ringed: {
    type: Boolean,
    default: true,
  },
  ringSize: {
    type: String,
    default: "24px",
  },
  ringThickness: {
    type: String,
    default: "8px",
  },
});

const emit = defineEmits(["update:modelValue", "click"]);

const { isChecked, changed } = useRadio(props, emit);

const handleClick = () => {
  changed();
};
</script>
