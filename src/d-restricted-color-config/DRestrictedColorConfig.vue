<template>
  <d-box class="ui-restricted__color__config">
    <d-text font-face="heroNew" is="label" margin-bottom="1rem" display="block"
      >{{ label }}
    </d-text>
    <d-box
      display="flex"
      margin-bottom="1rem"
      align-items="center"
      gap="20px"
      flex-wrap="wrap"
    >
      <d-box
        v-for="(color, index) in colors"
        :key="`color_${index}`"
        class="ui-radio-element"
      >
        <input
          type="radio"
          :id="color.colorCode"
          @click="handleChangeEvents(color.colorCode)"
        />
        <d-box
          is="label"
          :for="color.colorCode"
          class="ui-radio-body"
          :border="
            modelValue === color.colorCode
              ? `2px solid ${color.colorCode}`
              : `2px solid rgba(128, 128, 128, 0.22)`
          "
          cursor="pointer"
        >
          <d-box
            class="ui-radio-circle"
            :background="color.colorCode"
            :border="`1px solid ${color.colorCode}`"
          ></d-box>
          <d-text color="#2A2E33" font-face="circularSTD" is="span"
            >{{ color.colorName }}
          </d-text>
        </d-box>
      </d-box>
    </d-box>
    <d-box>
      <d-alert
        message="You can pick a color closely related to your brand color"
        colorScheme="info"
      />
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText, DAlert } from "../main";

defineProps({
  modelValue: {
    type: String,
  },
  label: {
    type: String,
    default: "Color",
  },
  colors: {
    type: Array,
  },
});
const emit = defineEmits(["update:modelValue"]);

const handleChangeEvents = (color) => emit("update:modelValue", color);
</script>

<style scoped lang="scss">
.ui-restricted__color__config {
  .ui-radio-element {
    position: relative;

    input {
      display: none;
    }

    .ui-radio-body {
      padding: 10px 20px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      font-weight: 450;
      transition: 0.3s ease-in-out;

      .ui-radio-circle {
        height: 25px;
        width: 25px;
        border-radius: 100%;
        margin-right: 10px;
      }
    }
  }
}
</style>
