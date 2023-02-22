<template>
  <d-box class="ui-card__wrapper">
    <slot name="header"></slot>
    <d-box
      :is="radio || checkbox ? 'label' : 'div'"
      class="ui-card"
      :class="{
        state__selected: selected,
        [wrapperClass]: wrapperClass,
        shouldHover,
        border,
        hasHeader: $slots.header,
        hasFooter: $slots.footer,
        selected: !!props.modelValue,
        [cardClass]: true,
      }"
      marginLeft="0"
      marginRight="0"
      marginX="0"
      marginY="0"
      marginTop="0"
      marginBottom="0"
      width="100%"
    >
      <d-radio
        class="ui-card__form-selector"
        v-if="radio"
        :ringed="ringedRadio"
        v-bind="$attrs"
        v-model="updateValue"
        :value="value"
        :ring-size="ringSize"
        :ring-thickness="ringThickness"
      />
      <d-checkbox
        class="ui-card__form-selector"
        v-else-if="checkbox"
        v-bind="$attrs"
        v-model="updateValue"
        :dashed="dashedCheckbox"
        :value="value"
      />

      <d-box class="ui-card__content">
        <d-box v-if="title" class="ui-card__title">{{ title }}</d-box>
        <slot></slot>
        <d-box v-if="desc" class="ui-card__card-text">
          <d-box is="span" v-if="desc" v-html="desc"></d-box>
        </d-box>
      </d-box>

      <d-box v-if="icon" class="ui-card__icon">
        <component :is="icon" v-if="icon" class="ui-card__icon"></component>
      </d-box>
      <d-box v-if="$slots.icon" class="ui-card__icon">
        <slot name="icon"></slot>
      </d-box>
    </d-box>
    <slot name="footer"></slot>
  </d-box>
</template>

<script setup>
import { DBox, DRadio, DCheckbox } from "../main";
import { computed } from "vue";
import { wrapperProps } from "../utils/wrapperProps";
import { useWrapperProps } from "../utils/useWrapperProps";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  icon: {
    type: Object,
  },
  selected: {
    type: Boolean,
  },
  radio: {
    type: Boolean,
  },
  checkbox: {
    type: Boolean,
  },
  desc: {
    type: String,
    default: "",
  },
  value: {
    type: String,
  },
  ringedRadio: {
    type: Boolean,
  },
  dashedCheckbox: {
    type: Boolean,
  },
  modelValue: {
    default: false,
  },
  wrapperClass: {
    type: [String, Array, Object],
  },
  hoverColor: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: false,
  },
  cardClass: {
    type: String,
  },
  ringSize: {
    type: String,
    default: "16px",
  },
  ringThickness: {
    type: String,
    default: "5px",
  },
  ...wrapperProps,
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const shouldHover = computed(
  () => props.radio || props.checkbox || props.hoverColor
);

const { computedMargin, computedWidth } = useWrapperProps(props);
</script>

<style lang="scss">
.ui-card {
  font-family: "Circular Std", sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: #5f6b7a;
  text-decoration: none;
  transition-property: border-color;
  transition-duration: 0.5s;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  &.dark_mode {
    background: transparent;
    border: 1px solid #384860;
  }
  &.hasHeader {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  &.hasFooter {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  // --tw-space-x-reverse: 0;
  // margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  // margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
  // cursor: pointer;

  &.shouldHover:hover,
  &.selected {
    border: 1px solid #0db9e9;
    &.dark_mode {
      .ui-card__icon {
        &.dark_mode {
          color: #0db9e9;
        }
      }
    }
  }
  &.border {
    border: 1px solid #e1e7ec;
  }
}

.ui-card__form-selector {
  margin-top: 4px;
}

.state__selected {
  border: 1px solid #0db9e9;
  color: #212934;
  transition-property: color;
  transition-duration: 0.5s;
}

.ui-card__content {
  width: 100%;
  padding: 0 8px;
}

.ui-card__title {
  font-weight: 700;
  font-family: "Hero New", sans-serif;
  font-size: 16px;
  font-style: normal;
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
  width: 100%;
  &.dark_mode {
    color: #cbd5e1;
  }
}

.ui-card__card-text > span {
  font-family: "Circular Std", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  color: #525964;
  &.dark_mode {
    color: #94a3b8;
  }
}

.ui-card__icon {
  color: #ced6de;
  height: 20px;
  width: 20px;
  &.dark_mode {
    color: #4f627d;
  }
}
</style>
