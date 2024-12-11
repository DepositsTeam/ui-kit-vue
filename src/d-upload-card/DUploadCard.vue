<template>
  <d-box class="ui-upload-card" :class="{ error: status === 'error' }">
    <d-auto-layout>
      <d-box>
        <d-box class="file-icon">
          <file-outline-icon smart-color="#E1E7EC" />
          <d-box class="extension" :class="[extBg]">
            {{ extension.toUpperCase() }}
          </d-box>
        </d-box>
      </d-box>
      <d-auto-layout item-spacing="2px" width="100%" direction="vertical">
        <d-auto-layout align-items="center" between flex="1">
          <d-text my0 font-weight="500">
            {{ name }}
          </d-text>
          <d-auto-layout>
            <d-box
              @click="emit('remove', uuid)"
              v-if="status === 'error' || status === 'success'"
            >
              <slot name="removeIcon">
                <trash-outline-icon />
              </slot>
            </d-box>
            <d-box @click="emit('pause', uuid)" v-if="status === 'uploading'">
              <slot name="pauseIcon">
                <pause-circle-outline-icon />
              </slot>
            </d-box>
            <d-box @click="emit('resume', uuid)" v-if="status === 'paused'">
              <slot name="resumeIcon">
                <play-circle-outline-icon />
              </slot>
            </d-box>
            <d-box
              @click="emit('cancelUpload', uuid)"
              v-if="['uploading', 'paused'].includes(status)"
            >
              <slot name="cancelIcon">
                <close-circle-outline-icon />
              </slot>
            </d-box>
          </d-auto-layout>
        </d-auto-layout>
        <d-auto-layout align-items="center" item-spacing="6px">
          <d-text my0 font-size="12px" color="#6D7786">
            {{ size }}
          </d-text>
          <d-box class="boundary" />
          <d-auto-layout
            align-items="center"
            item-spacing="4px"
            v-if="status === 'success'"
          >
            <d-box class="indicator success">
              <check-outline-icon class="indicator-icon" />
            </d-box>
            <d-text font-size="12px" my0>Completed</d-text>
          </d-auto-layout>
        </d-auto-layout>
      </d-auto-layout>
    </d-auto-layout>
    <d-progress-bar
      v-if="status === 'uploading'"
      margin-top="8px"
      :percentage="percentage"
    />
    <d-error-message
      v-if="status === 'error'"
      :error-message="`*${errorMessage}`"
      :show-icon="false"
    />
  </d-box>
</template>

<script setup>
import DBox from "@/d-box/DBox.vue";
import DAutoLayout from "@/d-auto-layout/DAutoLayout.vue";
import DText from "@/d-text/DText.vue";
import { computed } from "vue";
import mime from "mime";
import FileOutlineIcon from "@/icons/outline/FileOutlineIcon.vue";
import DProgressBar from "@/d-progress-bar/DProgressBar.vue";
import TrashOutlineIcon from "@/icons/outline/Trash2OutlineIcon.vue";
import DownloadOutlineIcon from "@/icons/outline/DownloadOutlineIcon.vue";
import CloseCircleOutlineIcon from "@/icons/outline/CloseCircleOutlineIcon.vue";
import PlayCircleOutlineIcon from "@/icons/outline/PlayCircleOutlineIcon.vue";
import RotateLeftOutlineIcon from "@/icons/outline/RotateLeftOutlineIcon.vue";
import PauseCircleOutlineIcon from "@/icons/outline/PauseCircleOutlineIcon.vue";
import DErrorMessage from "@/d-error-message/DErrorMessage.vue";
import { CheckOutlineIcon } from "@/main";

const props = defineProps({
  file: {
    type: Object,
  },
  uuid: {
    type: String,
  },
  name: {
    type: String,
    default: "My-filename.pdf",
  },
  extension: {
    type: String,
    default: "pdf",
  },
  size: {
    type: String,
    default: "1.2MB",
  },
  errorMessage: {
    type: String,
    default: "There is an error",
  },
  percentage: {
    type: [String, Number],
  },
  status: {
    type: String,
    validator: (value) =>
      ["uploading", "paused", "error", "success"].includes(value),
    default: "success",
  },
});

const emit = defineEmits([
  "remove",
  "retry",
  "pause",
  "resume",
  "cancelUpload",
]);

const extBg = computed(() => {
  const extension = props.extension || mime.getExtension(props.file.type);
  if (extension) {
    switch (extension) {
      case "pdf":
        return "pdf-red";
      case "csv":
      case "xls":
      case "xlsx":
        return "xls-green";
      case "doc":
      case "docx":
        return "doc-blue";
      default:
        return "unknown-black";
    }
  }
  return "unknown-black";
});
</script>

<style scoped lang="scss">
.ui-upload-card {
  width: 100%;
  border-radius: 8px;
  border: 1px solid #e1e7ec;
  padding: 16px;

  &.error {
    border: 1px solid #d62f4b;
    background: #fedadf;
  }

  .boundary {
    height: 6px;
    width: 6px;
    background: #6d7786;
    border-radius: 50%;
  }

  .indicator {
    display: inline-flex;
    border: 1.5px solid var(--indicator-color-border);
    flex-grow: 0;
    flex-shrink: 0;
    background: var(--indicator-color-bg);
    height: 13px;
    width: 13px;
    border-radius: 50%;
    position: relative;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    z-index: 15;

    .indicator-icon {
      height: 8px;
      width: 8px;
      position: relative;
    }

    &.success {
      background: #00b058;
      border: none;
      color: #fff;
      .indicator-icon {
        top: -0.5px;
      }
    }
    &.failed {
      background: #d62f4b;
      border: none;
      color: #fff;
    }
    &.pending {
      background: #ffb44f;
      border: none;
      color: #fff;
    }
  }

  .file-icon {
    display: flex;
    height: 32px;
    width: 32px;
    border-radius: 6px;
    border: 1px solid #f5f8fa;
    position: relative;
    justify-content: center;
    align-items: center;
    padding: 4px;
    background: white;

    .extension {
      position: absolute;
      font-size: 6px;
      padding: 2px 4px;
      right: 9px;
      top: 12px;
      font-weight: 500;
      border-radius: 2px;
      &.pdf-red {
        background: var(--light-danger-500);
        color: var(--light-danger-100);
      }
      &.xls-green {
        background: var(--light-success-500);
        color: var(--light-success-100);
      }
      &.doc-blue {
        background: #1757b7;
        color: #a1bcde;
      }
    }
  }
}
</style>
