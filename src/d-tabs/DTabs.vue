<template>
  <d-auto-layout
    :direction="horizontal ? 'horizontal' : 'vertical'"
    :spacing="spacing"
    :class="{ 'ui-tabs__wrapper': true, [scheme]: scheme && !inline }"
  >
    <d-box
      v-for="(tab, index) in tabs"
      :key="`tab_${index}_${keyGen()}`"
      :is="is ? is : tab.is ? tab.is : tab.to ? RouterLink : `a`"
      v-bind="{ ...generateSpacing(index), ...$props }"
      class="ui-tab"
      :to="tab.to"
      :class="{
        active: internalActive === index,
        disabled: typeof tab === 'object' && tab.disabled,
        inline: inline || scheme === 'inline',
        [scheme]: scheme && !inline,
      }"
      @click="switchActiveTabs(index, tab)"
    >
      <slot
        name="tab-content"
        v-bind="{ tab, index, isActive: internalActive === index }"
      >
        <d-text is="span" scale="subhead">
          {{ typeof tab === "object" ? tab.text : tab }}
        </d-text>
      </slot>
    </d-box>
  </d-auto-layout>
</template>

<script setup>
import { DBox, DText, DAutoLayout } from "../main";
import keyGen from "../utils/keyGen";
import { onMounted, ref, watch } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  tabs: {
    type: Array,
  },
  horizontal: {
    type: Boolean,
    default: true,
  },
  spacing: {
    type: String,
    default: "4px",
  },
  modelValue: {
    type: [Number, String],
    default: 0,
  },
  inline: {
    type: Boolean,
  },
  scheme: {
    type: String,
    default: "button",
    validator: (value) => ["button", "underline", "inline"].includes(value),
  },
  is: {
    type: [String, Object],
    default: "div",
  },
});

const emit = defineEmits(["tabSwitched", "update:modelValue"]);

const internalActive = ref(0);

onMounted(() => {
  internalActive.value = props.modelValue;
});

const generateSpacing = (index) => {
  if (index < props.tabs.length - 1) {
    if (props.horizontal) {
      return {
        marginRight: props.spacing || 0,
      };
    } else {
      return {
        marginBottom: props.spacing || 0,
      };
    }
  } else {
    return {};
  }
};

watch(
  () => props.modelValue,
  () => {
    internalActive.value = props.modelValue;
  }
);

const switchActiveTabs = (index, tab) => {
  if (typeof tab === "object" && tab.disabled) {
    return;
  }

  internalActive.value = index;

  emit("tabSwitched", index, tab);
  emit("update:modelValue", index);
};
</script>

<style lang="scss" scoped>
.ui-tabs__wrapper {
  position: relative;
  &.underline {
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      left: 0;
      height: 1px;
      top: calc(100% + 1px);
      background: #e2edf6;
    }
    &.dark_mode {
      &::after {
        background: #202b3c;
      }
    }
  }
}
.ui-tab {
  text-decoration: none;
  color: #5f6b7a;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  &::after {
    z-index: 20;
  }

  &.dark_mode {
    color: #94a3b8;

    &:hover {
      &:not(.inline):not(.underline) {
        background: var(--dark-primary-action-color);
      }
      &.inline {
        color: var(--dark-primary-action-color);
      }
      &.underline {
        &::after {
          content: "";
          background: var(--dark-primary-action-color);
          position: absolute;
          height: 3px;
          width: 100%;
          top: 100%;
          left: 0;
        }
      }
      .ui-text {
        color: var(--dark-primary-action-color);
      }
      &.disabled {
        opacity: 0.5;
      }
    }

    &:active:not(.disabled),
    &.active:not(.disabled) {
      &:not(.inline):not(.underline) {
        background: var(--dark-primary-action-color);
      }
      &.inline {
        .ui-text {
          color: var(--dark-primary-action-color);
        }
      }
      &.underline {
        .ui-text {
          color: var(--dark-primary-action-color);
        }
        &::after {
          content: "";
          background: var(--dark-primary-action-color);
          position: absolute;
          height: 3px;
          width: 100%;
          top: 100%;
          left: 0;
        }
      }
      .ui-text {
        color: #fff;
      }
    }
  }

  &.disabled {
    cursor: not-allowed;
  }

  &:hover {
    color: var(--light-primary-action-color);
    &:not(.inline):not(.underline) {
      background: #f5f8fa;
    }
    &.underline {
      &::after {
        background: var(--light-primary-action-color);
        content: "";
        position: absolute;
        height: 3px;
        width: 100%;
        top: 100%;
        left: 0;
      }
    }
    &.disabled {
      opacity: 0.5;
    }
  }

  &:active:not(.disabled),
  &.active:not(.disabled) {
    color: #fff;
    &.inline {
      color: var(--light-primary-action-color);
    }
    &:not(.inline):not(.underline) {
      background: var(--light-primary-action-color);
    }
    &.underline {
      color: var(--light-primary-action-color);
      &::after {
        background: var(--light-primary-action-color);
        content: "";
        position: absolute;
        height: 3px;
        width: 100%;
        top: 100%;
        left: 0;
      }
    }
  }
}

.ui-tabs {
  display: flex;
  flex-direction: column;

  &.horizontal {
    flex-direction: row;
  }
}
</style>
