<template>
  <d-box>
    <d-box>
      <d-text font-face="heroNew">{{ label }}</d-text>
    </d-box>
    <d-box margin-top="24px">
      <d-box class="colors">
        <d-box
          class="color"
          @click="handleChangeEvents(color)"
          :border="`1px solid ${
            modelValue === color ? modelValue : 'transparent'
          }`"
          v-for="(color, index) in colors"
          :key="index"
        >
          <d-box
            class="color_inner"
            :background="color"
            :height="height"
            :width="width"
            :border="`1.45px solid ${color}`"
          ></d-box>
        </d-box>
      </d-box>
    </d-box>
    <d-box class="color__input__field" @click="copyCode">
      <d-box class="color__input__field__left">
        <d-text font-face="circularSTD">{{ modelValue }}</d-text>
      </d-box>
      <d-box class="color__input__field__right">
        <d-box
          class="color__input__field__square"
          :background="modelValue"
          :border="`1px solid ${modelValue}`"
        ></d-box>
      </d-box>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText } from "../main";
import { onBeforeMount } from "vue";
import copy from "copy-to-clipboard";

const props = defineProps({
  modelValue: {
    type: String,
  },
  label: {
    type: String,
  },
  height: {
    type: String,
    default: "28.997px",
  },
  width: {
    type: String,
    default: "28.997px",
  },
  colors: {
    type: Array,
  },
});
const emit = defineEmits(["update:modelValue"]);

onBeforeMount(() => {
  if (!props.modelValue && props.colors.length > 0) {
    emit("update:modelValue", props.colors[0]);
  }
});

const handleChangeEvents = (color) => emit("update:modelValue", color);

const copyCode = () => {
  copy(props.modelValue);

  alert("Code copied to clipboard!");
};
</script>

<style scoped lang="scss">
.colors {
  //background-color: red;
  display: flex;
  align-items: flex-start;
  gap: 18.848px;

  .color {
    border-radius: 10.79px;
    padding: 3.924px;
    background: transparent;
    cursor: pointer;

    .color_inner {
      border-radius: 7.847px;
    }
  }
}

.color__input__field {
  display: flex;
  margin-top: 16px;
  width: 390px;

  .color__input__field__left {
    display: flex;
    height: 40px;
    width: 90%;
    padding: 12px;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    border-radius: 4px 0px 0px 4px;
    border: 1px solid var(--colors-neutral-300, #ced6de);
    border-right: none;
    background: var(--color-neutral-white, #fff);
    box-shadow: 0px 1px 2px 0px rgba(63, 63, 68, 0.1);
  }

  .color__input__field__right {
    display: flex;
    width: 40px;
    height: 40px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 0px 4px 4px 0px;
    border: 1px solid var(--colors-neutral-300, #ced6de);
    background: var(--color-neutral-white, #fff);
    box-shadow: 0px 1px 2px 0px rgba(63, 63, 68, 0.1);

    .color__input__field__square {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      border-radius: 6px;
    }
  }
}
</style>
