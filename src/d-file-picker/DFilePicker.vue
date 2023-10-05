<template>
  <d-box class="ui-file-picker-box__wrapper">
    <d-box v-if="!!label" is="label">
      <d-text
        margin-top="0px"
        class="ui-text-field__label"
        :class="labelClass"
        scale="subhead"
        :font-face="labelFontFace"
      >
        {{ label }}
      </d-text>
    </d-box>
    <d-box class="ui-file-picker-box">
      <d-box
        type="file"
        class="ui-file-picker-input"
        is="input"
        ref="file"
        @change="updateName"
        v-bind="$attrs"
        :accept="computedAccepts"
        :disabled="disabled"
      ></d-box>
      <d-box class="close-btn" v-if="selectedFileName" @click="emptyFile">
        <close-icon />
      </d-box>
      <slot name="icon">
        <cloud-upload-filled-icon smart-color="#8895A7" />
      </slot>

      <slot v-if="!selectedFileName">
        <d-auto-layout
          class="placeholder"
          margin-top="16px"
          alignment="center"
          direction="vertical"
        >
          <slot>
            <d-text margin-y="0" font-face="circularSTD"
              >Drag & Drop to upload or <span class="blue">browse</span> to
              choose files</d-text
            >
            <d-text margin-y="0" font-face="circularSTD">
              <span v-if="computedAccepts">
                Supported file types ({{ computedAccepts }}.
              </span>
              <span v-else>(</span>
              Max upload size:
              {{ fileMaxSize }}MB)</d-text
            >
          </slot>
        </d-auto-layout>
      </slot>
      <d-text font-face="circularSTD">{{ selectedFileName }}</d-text>
    </d-box>
    <d-box v-if="computedErrorMessage" class="ui-text-field__error">
      <ErrorIcon height="16px" width="16px" class="ui-text-field__error-icon" />
      <d-text
        class="ui-text-field__error-text"
        scale="subhead"
        font-face="circularSTD"
      >
        {{ computedErrorMessage }}
      </d-text>
    </d-box>
  </d-box>
</template>

<script setup>
import {
  DBox,
  CloudUploadFilledIcon,
  CloseIcon,
  DText,
  ErrorIcon,
  DAutoLayout,
} from "../main";
import { useFilePicker } from "../utils/composables/useFilePicker";
import { ref } from "vue";

const props = defineProps({
  fileMaxSize: {
    type: [String, Number],
    default: 100,
  },
  accepts: {
    type: [Array, String],
    default: () => [".csv", ".xls", ".xlsx", ".pdf"],
    validator: (value) => {
      if (typeof value === "string") {
        return value === "image" || value === "document" || value === "csv";
      } else {
        if (Array.isArray(value)) {
          return [...new Set(value)].length === value.length;
        } else return false;
      }
    },
  },
  label: {
    type: String,
  },
  errorMessage: {
    type: String,
  },
  disabled: Boolean,
  labelFontFace: {
    type: String,
  },
  labelClass: {
    type: [String, Object, Array],
  },
  maxFiles: {
    type: [Number, String],
    default: 1,
  },
});

const emit = defineEmits(["change", "cleared"]);

const file = ref(null);

const {
  emptyFile,
  updateName,
  computedErrorMessage,
  computedAccepts,
  selectedFileName,
} = useFilePicker(props, emit, file);
</script>

<style lang="scss" scoped>
.ui-file-picker-box {
  position: relative;
  background: #f7fbff;
  border: 1px dashed #acd7ff;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 16px;
  color: #6d7786;
  &.dark_mode {
    background: var(--dark-input-background-color);
    border-color: var(--dark-primary-300);
    color: #94a3b8;
    .ui-text {
      color: #94a3b8;
    }
  }
  .close-btn {
    display: flex;
    color: white;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    background: #d62f4b;
    transition: 0.9s;
    position: absolute;
    z-index: 10;
    cursor: pointer;
    top: -16px;
    right: -16px;
    &:hover {
      background: #ad283d;
    }
  }
  .placeholder {
    span.blue {
      color: #0ebae9;
    }
  }
  .ui-file-picker-input {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 9;
  }
}
</style>
