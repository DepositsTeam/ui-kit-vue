<template>
  <d-box>
    <d-text font-face="heroNew" is="label" margin-bottom="1rem" display="block"
      >{{ label }}
    </d-text>
    <d-box
      display="flex"
      margin-bottom="1rem"
      align-items="center"
      gap="20px"
      class="flex-wrap-sm"
    >
      <d-box
        v-for="(color, index) in colors"
        :key="`color_${index}`"
        class="radio-element"
      >
        <input
          type="radio"
          :id="color.colorCode"
          @click="handleChangeEvents(color.colorCode)"
        />
        <d-box
          is="label"
          :for="color.colorCode"
          class="radio-body"
          :border="
            modelValue === color.colorCode
              ? `2px solid ${color.colorCode}`
              : `2px solid rgba(128, 128, 128, 0.22)`
          "
          cursor="pointer"
        >
          <d-box
            class="radio-circle"
            :background="color.colorCode"
            :border="`1px solid ${color.colorCode}`"
          ></d-box>
          <d-text font-face="circularSTD" is="span"
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
.radio-element {
  position: relative;
}

.radio-element input {
  display: none;
}

.radio-element .radio-body .radio-circle {
  height: 25px;
  width: 25px;
  border-radius: 100%;
  margin-right: 10px;
}

.radio-element .radio-body {
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-weight: bold;
  transition: 0.3s ease-in-out;
}
</style>
