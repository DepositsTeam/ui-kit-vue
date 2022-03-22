<template>
  <d-box
    v-if="visible"
    :class="`color-scheme__${colorScheme}`"
    class="ui-banner"
  >
    <d-box class="text-content">
      <component
        v-if="colorScheme !== 'default'"
        class="ui-banner-icon"
        :is="schemeIcons[colorScheme]"
      ></component>
      <d-text
        scale="subhead"
        class="ui-banner__title text-gray-700"
        font-face="circularSTD"
        >{{ title }}</d-text
      >
      <d-text
        scale="subhead"
        class="ui-banner__description text-gray-600"
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

<script>
import DBox from "../d-box/DBox.vue";
import DText from "../d-text/DText.vue";
import InfoIcon from "../icons/InfoIcon.vue";
import WarningIcon from "../icons/WarningIcon.vue";
import ErrorIcon from "../icons/ErrorIcon.vue";
import CheckIcon from "../icons/CheckIcon.vue";
import CloseIcon from "../icons/CloseIcon.vue";
const schemeIcons = {
  info: InfoIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  success: CheckIcon,
};
export default {
  name: "DBanner",
  data: () => ({
    schemeIcons,
    visible: true,
  }),
  components: {
    DBox,
    DText,
    CloseIcon,
  },
  props: {
    title: {
      type: String,
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
    onClick: {
      type: Function,
    },
  },
  methods: {
    remove: function () {
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-banner {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  border-radius: 4px;

  .text-content {
    display: flex;
    align-items: center;

    & > * {
      margin-right: 8px;
      &:last-child, {
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
  }

  &.color-scheme__default {
    background: #f5f8fa;
  }

  &.color-scheme__success {
    background: #edfff9;

    .ui-banner-icon {
      color: #00b058;
    }
  }

  &.color-scheme__error {
    background: #fff0f2;

    .ui-banner-icon {
      color: #d62f4b;
    }
  }

  &.color-scheme__warning {
    background: #fff8f0;

    .ui-banner-icon {
      color: #ff9505;
    }
  }

  &.color-scheme__info {
    background: #f7fbff;

    .ui-banner-icon {
      color: #0d7fe9;
    }
  }
}
</style>
