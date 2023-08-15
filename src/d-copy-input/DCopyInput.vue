<template>
  <d-box>
    <d-box display="flex">
      <d-box v-if="label" class="label-text">
        <d-text
          font-face="heroNew"
          class="text-gray-700 font-weight-700"
          is="subhead"
        >
          {{ label }}
        </d-text>
      </d-box>
      <d-box
        is="input"
        class="input-copy text-gray-500"
        readonly
        type="text"
        font-face="circularSTD"
        :value="text"
      />
      <d-box @click="copyCode" class="copy-btn" cursor="pointer">
        <copy-filled-icon height="30px" width="30px" class="text-gray-500" />
      </d-box>
    </d-box>
    <d-text v-if="helperText" class="helper__text">{{ helperText }}</d-text>
  </d-box>
</template>

<script setup>
import { DBox, DText, CopyFilledIcon } from "@/main";
import copy from "copy-to-clipboard";

const props = defineProps({
  label: {
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
  helperText: {
    type: String,
  },
});

const copyCode = () => {
  copy(props.text);

  alert("Text copied successfully!");
};
</script>

<style scoped>
.input-copy {
  padding: 0.8rem;
  font-size: 1.1rem;
  border: 1px solid #e1e7ec;
  border-right: none;
  border-left: none;
  background: #ffffff;
  cursor: copy;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

.input-copy:focus-visible {
  outline: none;
}

.label-text {
  border-radius: 5px 0 0 5px;
  background: linear-gradient(
      0deg,
      rgba(19, 48, 84, 0.03),
      rgba(19, 48, 84, 0.03)
    ),
    #f7fafc;
  border: 1px solid #e1e7ec;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem;
}

.copy-btn {
  padding: 0.6rem 1rem;
  font-size: 1.3rem;
  border-left: none;
  background: linear-gradient(
      0deg,
      rgba(19, 48, 84, 0.03),
      rgba(19, 48, 84, 0.03)
    ),
    #f7fafc;
  border: 1px solid #e1e7ec;
  border-radius: 0 5px 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 767px) {
  .input-copy {
    font-size: unset;
    width: 100%;
  }
}

.helper__text {
  color: #2a2e33;
  font-family: Circular Std, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 450;
  line-height: 16px;
}
</style>
