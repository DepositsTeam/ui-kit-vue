<template>
  <d-box class="auth__card">
    <d-box class="auth__card__inner">
      <d-box class="left">
        <d-text class="title" font-face="heroNew">{{ title }}</d-text>
        <d-text class="text" font-face="circularSTD">{{ text }}</d-text>
      </d-box>
      <d-box class="switch__area" @change="emit('change')">
        <d-switch
          :color-scheme="colorScheme"
          :disabled="disabled"
          :switch-color="switchColor"
          :thumb-color="thumbColor"
          :align-right="alignRight"
          :thumb-size="thumbSize"
          :switch-width="switchWidth"
          :switch-height="switchHeight"
          :true-value="trueValue"
          :false-value="falseValue"
          :controlled="controlled"
          v-model="checkboxVModel"
        />
      </d-box>
    </d-box>
    <slot name="cardFooter" />
  </d-box>
</template>

<script setup>
import { DBox, DText, DSwitch } from "../main";
import { computed, nextTick, onBeforeMount, reactive, ref, watch } from "vue";

const props = defineProps({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  colorScheme: {
    type: String,
    validator: (value) =>
      ["primary", "danger", "success", "warning"].includes(value),
    default: "success",
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
  alignRight: {
    type: Boolean,
    default: false,
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
  controlled: {
    type: Boolean,
  },
});

const checkbox = ref(null);

const emit = defineEmits(["update:modelValue"]);

const computedValue = computed(() =>
  props.value === "" ? props.label : props.value
);

const computedTrueValue = computed(() => {
  if (props.value) {
    return props.value;
  } else {
    return props.trueValue === true ? true : computedValue.value;
  }
});

const isChecked = computed(() => {
  return props.modelValue === computedTrueValue.value;
});

const checkboxVModel = computed({
  get() {
    return isChecked.value;
  },
  set() {
    emit("update:modelValue", !isChecked.value);
    if (props.controlled) {
      nextTick(() => {
        checkbox.value.checked = isChecked.value;
      });
    }
  },
});

watch(isChecked, (value) => {
  checkbox.value.checked = value;
});
</script>

<style scoped lang="scss">
.auth__card {
  display: flex;
  padding: 20px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  background: #ffffff;

  .auth__card__inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 100%;
  }

  .left {
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 8px;

    .title {
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.16px;
      color: #2a2e33;
    }

    .text {
      font-size: 14px;
      font-style: normal;
      font-weight: 450;
      line-height: normal;
      letter-spacing: 0.14px;
      color: #8c97a7;
      margin-bottom: 0;
    }
  }
}

p {
  margin: 0;
}
</style>
