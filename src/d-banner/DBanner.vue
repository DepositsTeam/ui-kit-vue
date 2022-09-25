<template>
  <d-box
    v-if="visible"
    :class="{ [`color-scheme__${colorScheme}`]: true, alignTop, full }"
    class="ui-banner"
  >
    <d-box @click="$emit('click')" class="text-content">
      <component
        v-if="(colorScheme !== 'default' || icon) && !noIcon"
        class="ui-banner-icon"
        :is="icon || schemeIcons[colorScheme]"
      ></component>
      <slot v-if="$slots.default"></slot>
      <d-text
        scale="subhead"
        class="ui-banner__title text-gray-700"
        font-face="circularSTD"
        v-else
      >
        <slot name="text" v-if="$slots.text"></slot>
        <span>{{ title }}</span></d-text
      >
      <d-text
        scale="subhead"
        class="ui-banner__description"
        font-face="circularSTD"
        ><span v-html="description"></span
      ></d-text>
    </d-box>
    <CloseIcon
      v-if="removable"
      smart-color="currentcolor"
      class="ui-banner__close-icon"
      @click="remove"
    />
  </d-box>
</template>

<script setup>
import { ref } from "vue";
import {
  DBox,
  DText,
  InfoIcon,
  WarningIcon,
  ErrorIcon,
  CheckIcon,
  CloseIcon,
} from "../main";

const schemeIcons = {
  info: InfoIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  success: CheckIcon,
};
const emit = defineEmits(["removed", "click"]);

defineProps({
  title: {
    type: String,
  },
  full: {
    type: Boolean,
    default: true,
  },
  description: {
    type: String,
  },
  colorScheme: {
    type: String,
    validator: (value) =>
      ["default", "info", "warning", "error", "success"].includes(value),
    default: "default",
  },
  removable: {
    type: Boolean,
  },
  onRemove: {
    type: Function,
  },
  alignTop: {
    type: Boolean,
  },
  icon: {
    type: Object,
  },
  noIcon: {
    type: Boolean,
    default: false,
  },
});

const visible = ref(true);

const remove = () => {
  emit("removed");
  visible.value = false;
};
</script>

<style lang="scss" scoped>
.ui-banner {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  border-radius: 4px;
  &.alignTop {
    align-items: flex-start;
  }
  &.full {
    display: flex;
  }

  .text-content {
    display: flex;
    align-items: center;

    & > * {
      margin-right: 8px;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .ui-banner__close-icon {
    height: 16px;
    width: 16px;
    color: #8895a7;
    cursor: pointer;
    margin-left: 16px;
  }

  .ui-banner-icon {
    height: 16px;
    width: 16px;
    margin-right: 8px;
  }

  .ui-banner__title,
  .ui-banner__description {
    margin-top: 0;
    margin-bottom: 0;
    color: #5f6b7a;
  }

  .ui-banner__title {
    &.dark_mode {
      color: #fff;
    }
  }

  .ui-banner__description {
    &.dark_mode {
      color: #94a3b8;
    }
  }

  &.color-scheme__default {
    background: #f5f8fa;
    &.dark_mode {
      background: var(--dark-input-background-color);
    }
  }

  &.color-scheme__success {
    background: #edfff9;
    &.dark_mode {
      background: #081e13;

      .ui-banner__title {
        color: #53d091;
      }

      .ui-banner-icon {
        color: #2eab6c;
      }
    }

    .ui-banner-icon {
      color: #00b058;
    }
  }

  &.color-scheme__error {
    background: #fff0f2;

    &.dark_mode {
      background: #350a12;

      .ui-banner__title {
        color: #eea7b3;
      }

      .ui-banner-icon {
        color: #df5e74;
      }
    }

    .ui-banner-icon {
      color: #d62f4b;
    }
  }

  &.color-scheme__warning {
    background: #fff8f0;

    &.dark_mode {
      background: #271701;

      .ui-banner__title {
        color: #fca835;
      }

      .ui-banner-icon {
        color: #dc8104;
      }
    }

    .ui-banner-icon {
      color: #ff9505;
    }
  }

  &.color-scheme__info {
    background: #f7fbff;

    &.dark_mode {
      background: #f7fbff;

      .ui-banner__title {
        color: #051b30;
      }
    }

    .ui-banner-icon {
      color: #0d7fe9;
    }
  }
}
</style>
