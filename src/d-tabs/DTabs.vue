<template>
  <d-box
    class="ui-tab-card"
    :class="{
      cardMode: scheme === 'underline_card',
      hideBottomBorder,
    }"
    :style="{
      '--active-text-color': activeTextColor,
      '--active-indicator-color': activeIndicatorColor,
    }"
  >
    <d-auto-layout
      :direction="horizontal ? 'horizontal' : 'vertical'"
      :spacing="spacing"
      :class="{
        'ui-tabs__wrapper': true,
        [scheme]: scheme && !inline,
        hideBottomBorder,
      }"
    >
      <d-box
        v-for="(tab, index) in tabs"
        :key="`tab_${index}_${keyGen()}`"
        :is="is ? is : tab.is ? tab.is : tab.to ? RouterLink : `a`"
        v-bind="{ ...generateSpacing(index), ...$props }"
        class="ui-tab noLine"
        :to="tab.to"
        :class="{
          active: internalActive === index,
          disabled: typeof tab === 'object' && tab.disabled,
          inline: inline || scheme === 'inline',
          [scheme]: scheme && !inline,
          customTextColor: activeTextColor,
          customIndicatorColor: activeIndicatorColor,
        }"
        @click="switchActiveTabs(index, tab)"
      >
        <slot
          name="tab-content"
          v-bind="{ tab, index, isActive: internalActive === index }"
        >
          <d-auto-layout alignment="center">
            <d-text
              is="span"
              no-line
              my0
              :font-face="tabFontFace"
              :class="tabClass"
            >
              {{ typeof tab === "object" ? tab.text : tab }}
            </d-text>
            <d-box>
              <d-badge
                v-if="
                  typeof tab === 'object' &&
                  tab.total !== undefined &&
                  tab.total !== null &&
                  scheme !== 'button' &&
                  showBadge
                "
                :subtle="true"
                size="medium"
                :smart-color="
                  activeBadgeColor
                    ? activeBadgeColor
                    : internalActive === index
                    ? theme['--light-primary-500']
                    : undefined
                "
                :text="`${tab.total}`"
              />
            </d-box>
          </d-auto-layout>
        </slot>
      </d-box>
    </d-auto-layout>
    <slot v-if="scheme === 'underline_card'"></slot>
  </d-box>
</template>

<script setup>
import { DBox, DText, DAutoLayout, DBadge, useTheme } from "../main";
import keyGen from "../utils/keyGen";
import { onMounted, ref, watch } from "vue";
import { RouterLink } from "vue-router";

const { theme } = useTheme();

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
    validator: (value) =>
      ["button", "underline", "inline", "underline_card"].includes(value),
  },
  is: {
    type: [String, Object],
    default: "div",
  },
  activeTextColor: {
    type: String,
  },
  activeIndicatorColor: {
    type: String,
  },
  hideBottomBorder: {
    type: Boolean,
  },
  tabClass: {
    type: String,
  },
  tabFontFace: {
    type: String,
    default: "heroNew",
  },
  showBadge: {
    type: Boolean,
    default: true,
  },
  activeBadgeColor: {
    type: String,
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
.ui-tab-card {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 1rem;
  &.cardMode {
    padding-top: 1rem;
    padding-bottom: 1rem;
    background: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
    border-radius: 8px 8px 0 0;
    &:not(.hideBottomBorder) {
      border-bottom: 1px solid #e2edf6;
    }
    &.dark_mode {
      &:not(.hideBottomBorder) {
        border-bottom-color: #202b3c;
      }
    }
  }
}
.ui-tabs__wrapper {
  position: relative;
  align-self: flex-end;
  display: flex;
  width: 100%;
  &.underline_card {
    top: 1rem;
  }
  &.underline,
  &.underline_card {
    text-decoration: none;
    &:not(.underline_card):not(.hideBottomBorder)::after {
      position: absolute;
      content: "";
      width: 100%;
      left: 0;
      height: 1px;
      top: calc(100% + 1px);
      background: #e2edf6;
    }
    &.dark_mode:not(.underline_card):not(.hideBottomBorder)::after {
      background: #202b3c;
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
      &:not(.inline):not(.underline):not(.underline_card) {
        background: var(--dark-primary-action-color);
        &.customIndicatorColor {
          background: var(--active-indicator-color);
        }
      }
      &.inline {
        color: var(--dark-primary-action-color);
        &.customTextColor {
          color: var(--active-text-color);
        }
      }
      &.underline,
      &.underline_card {
        &:not(.underline_card) {
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
        &.customIndicatorColor {
          &::after {
            background: var(--active-indicator-color);
          }
        }
      }
      .ui-text {
        color: var(--dark-primary-action-color);
      }
      &.customTextColor .ui-text {
        color: var(--active-text-color);
      }
      &.disabled {
        opacity: 0.5;
      }
    }

    &:active:not(.disabled),
    &.active:not(.disabled) {
      &:not(.inline):not(.underline) {
        background: var(--dark-primary-action-color);
        &.customIndicatorColor {
          background: var(--active-indicator-color);
        }
      }
      &.inline {
        .ui-text {
          color: var(--dark-primary-action-color);
        }
        &.customTextColor .ui-text {
          color: var(--active-text-color);
        }
      }
      &.underline,
      &.underline_card {
        .ui-text {
          color: var(--dark-primary-action-color);
        }
        &.customTextColor .ui-text {
          color: var(--active-text-color);
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
        &.customIndicatorColor {
          &::after {
            background: var(--active-indicator-color);
          }
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
    &:not(.inline):not(.underline):not(.underline_card) {
      background: #f5f8fa;
    }
    &.underline,
    &.underline_card {
      &:not(.underline_card) {
        &::after {
          background: var(--light-primary-action-color);
          content: "";
          position: absolute;
          height: 3px;
          width: 100%;
          top: 100%;
          left: 0;
        }
        &.customIndicatorColor {
          &::after {
            background: var(--active-indicator-color);
          }
        }
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
      &.customTextColor {
        color: var(--active-text-color);
      }
    }
    &:not(.inline):not(.underline):not(.underline_card) {
      background: var(--light-primary-action-color);
      &.customIndicatorColor {
        background: var(--active-indicator-color);
      }
    }
    &.underline,
    &.underline_card {
      color: var(--light-primary-action-color);
      &.customTextColor {
        color: var(--active-text-color);
      }
      &::after {
        background: var(--light-primary-action-color);
        content: "";
        position: absolute;
        height: 3px;
        width: 100%;
        top: 100%;
        left: 0;
      }
      &.customIndicatorColor {
        &::after {
          background: var(--active-indicator-color);
        }
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
