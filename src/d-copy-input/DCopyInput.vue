<template>
  <d-box>
    <d-textfield readonly v-model="payload.text">
      <template #rightSection>
        <d-box @click="copyCode" class="copy-btn" cursor="pointer">
          <copy-filled-icon height="30px" width="30px" class="text-gray-500" />
        </d-box>
      </template>

      <template #leftSection>
        <d-box v-if="label" class="label-text">
          <d-text
            font-face="heroNew"
            class="text-gray-700 font-weight-700"
            is="subhead"
          >
            {{ label }}
          </d-text>
        </d-box>
      </template>
    </d-textfield>

    <d-text v-if="helperText" class="helper__text">{{ helperText }}</d-text>
  </d-box>
</template>

<script setup>
import { DBox, DText, CopyFilledIcon, DTextfield } from "@/main";
import copy from "copy-to-clipboard";
import { reactive } from "vue";

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

const payload = reactive({
  text: props.text,
});

const copyCode = () => {
  copy(props.text);

  alert("Text copied successfully!");
};
</script>

<style scoped>
.label-text {
  border-radius: 5px 0 0 5px;
  height: 100%;
  padding: 0 8px;
  white-space: nowrap;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  background: linear-gradient(
      0deg,
      rgba(19, 48, 84, 0.03),
      rgba(19, 48, 84, 0.03)
    ),
    #f7fafc;
  border: 1px solid #e1e7ec;
}

.copy-btn {
  background: linear-gradient(
      0deg,
      rgba(19, 48, 84, 0.03),
      rgba(19, 48, 84, 0.03)
    ),
    #f7fafc;
  border: 1px solid #e1e7ec;
  border-radius: 0 5px 5px 0;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
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
