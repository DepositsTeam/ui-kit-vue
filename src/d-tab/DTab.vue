<template>
  <d-box class="ui-tabs" :class="{ horizontal }">
    <d-box
      v-for="(tab, index) in tabs"
      :key="`tab_${index}_${keyGen()}`"
      :is="tab.is ? tab.is : `a`"
      v-bind="generateSpacing(index)"
      class="ui-tab"
    >
      <d-text is="span" scale="subhead">
        {{ tab.text }}
      </d-text>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText } from "../main";
import keyGen from "../utils/keyGen";

const props = defineProps({
  tabs: {
    type: Array,
  },
  horizontal: {
    type: Boolean,
  },
  spacing: {
    type: String,
  },
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
</script>

<style lang="scss" scoped>
.ui-tab {
  text-decoration: none;
  color: #5f6b7a;
  padding: 8px 16px;
  border-radius: 4px;

  &.dark_mode {
    color: #94a3b8;

    &:hover {
      background: var(--dark-input-background-color);
      .ui-text {
        color: var(--dark-primary-action-color);
      }
    }

    &:active {
      background: var(--dark-primary-action-color);
      .ui-text {
        color: #fff;
      }
    }
  }

  &:hover {
    color: var(--light-primary-action-color);
    background: #f5f8fa;
  }

  &:active {
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
