<template>
  <d-auto-layout
    :direction="horizontal ? 'horizontal' : 'vertical'"
    :spacing="spacing"
  >
    <d-box
      v-for="(tab, index) in tabs"
      :key="`tab_${index}_${keyGen()}`"
      :is="tab.is ? tab.is : `a`"
      v-bind="generateSpacing(index)"
      class="ui-tab"
      :class="{
        active: internalActive === index,
        disabled: typeof tab === 'object' && tab.disabled,
      }"
      @click="switchActiveTabs(index, tab)"
    >
      <d-text is="span" scale="subhead">
        {{ typeof tab === "object" ? tab.text : tab }}
      </d-text>
    </d-box>
  </d-auto-layout>
</template>

<script setup>
import { DBox, DText, DAutoLayout } from "../main";
import keyGen from "../utils/keyGen";
import { onMounted, ref } from "vue";

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
});

const emit = defineEmits(["tabSwitched", "update:modelValue"]);

const internalActive = ref(0);

onMounted(() => {
  internalActive.value = parseInt(props.initiallyActive);
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

const switchActiveTabs = (index, tab) => {
  if (typeof tab === "object" && tab.disabled) {
    return;
  }

  internalActive.value = index;

  emit("tabSwitched", index, { index, tab });
  emit("update:modelValue", index);
};
</script>

<style lang="scss" scoped>
.ui-tab {
  text-decoration: none;
  color: #5f6b7a;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;

  &.dark_mode {
    color: #94a3b8;

    &:hover {
      background: var(--dark-input-background-color);
      .ui-text {
        color: var(--dark-primary-action-color);
      }
      &.disabled {
        opacity: 0.5;
      }
    }

    &:active:not(.disabled),
    &.active:not(.disabled) {
      background: var(--dark-primary-action-color);
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
    background: #f5f8fa;
    &.disabled {
      opacity: 0.5;
    }
  }

  &:active:not(.disabled),
  &.active:not(.disabled) {
    color: #fff;
    background: var(--light-primary-action-color);
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
