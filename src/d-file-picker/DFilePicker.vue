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
      ></d-box>
      <d-box class="close-btn" v-if="selectedFileName" @click="emptyFile">
        <close-icon />
      </d-box>
      <cloud-upload-filled-icon smart-color="#8895A7" />
      <slot v-if="!selectedFileName">
        <d-auto-layout
          class="placeholder"
          margin-top="16px"
          alignment="center"
          direction="vertical"
        >
          <d-text margin-y="0" font-face="circularSTD"
            >Drag & Drop to upload or <span class="blue">browse</span> to choose
            files</d-text
          >
          <d-text margin-y="0" font-face="circularSTD">
            <span v-if="computedAccepts">
              Supported file types ({{ computedAccepts }}.
            </span>
            <span v-else>(</span>
            Max upload size:
            {{ fileMaxSize }}MB)</d-text
          >
        </d-auto-layout>
      </slot>
      <d-text font-face="circularSTD" margin-top="16px">{{
        selectedFileName
      }}</d-text>
    </d-box>
    <d-box v-if="computedErrorMessage" class="ui-text-field__error">
      <ErrorIcon class="ui-text-field__error-icon" />
      <d-text
        class="ui-text-field__error-text"
        scale="subhead"
        fontFace="circularSTD"
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
import { ref, computed } from "vue";

const props = defineProps({
  btnText: {
    type: String,
    default: "Choose File",
  },
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

const computedAccepts = computed(() => {
  if (Array.isArray(props.accepts)) return props.accepts.join(", ");
  else {
    switch (props.accepts) {
      case "image":
        return ".png, .jpg, .jpeg, .svg, .bmp, .gif";
      case "document":
        return ".csv, .xls, .xlsx, .pdf, .doc, .docx";
      case "csv":
        return ".csv";
      default:
        return undefined;
    }
  }
});

const internalError = ref("");

const computedErrorMessage = computed(() =>
  internalError.value
    ? internalError.value
    : props.errorMessage
    ? props.errorMessage
    : undefined
);

const selectedFileName = ref("");
const file = ref(null);

const updateName = (e) => {
  let files = e.target.files || e.dataTransfer.files;
  selectedFileName.value = !files ? "" : files[0].name;
  if (files.length > props.maxFiles) {
    internalError.value = `You cannot upload more than ${props.maxFiles} file(s) at once`;
  } else {
    internalError.value = "";
  }
  for (let currentFile of files) {
    if (currentFile.size > props.fileMaxSize * 1000000) {
      internalError.value = `You cannot upload a file larger than ${props.fileMaxSize}MB`;
    }
  }
  if (internalError.value) {
    const input = file.value.$el;
    input.setAttribute("type", "text");
    input.setAttribute("type", "file");
    selectedFileName.value = "";
  } else {
    emit("change", files[0]);
  }
};

const emptyFile = () => {
  selectedFileName.value = "";
  const input = file.value.$el;
  input.setAttribute("type", "text");
  input.setAttribute("type", "file");
  emit("cleared");
};
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
  padding: 50px;
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
