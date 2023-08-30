<template>
  <d-box>
    <d-textfield readonly v-model="payload.text" :size="size">
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
  size: {
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
  height: 100%;
  white-space: nowrap;
  background: linear-gradient(
      0deg,
      rgba(19, 48, 84, 0.03),
      rgba(19, 48, 84, 0.03)
    ),
    #f7fafc;
  border-right: 1px solid #e1e7ec;
  display: flex;
  padding: 6px 16px;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.copy-btn {
  background: linear-gradient(
      0deg,
      rgba(19, 48, 84, 0.03),
      rgba(19, 48, 84, 0.03)
    ),
    #f7fafc;
  border-left: 1px solid #e1e7ec;
  height: 100%;
  display: flex;
  width: 65px;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
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
