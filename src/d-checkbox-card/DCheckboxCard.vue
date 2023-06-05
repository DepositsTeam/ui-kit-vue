<template>
  <d-box class="d-checkbox-card__wrapper">
    <d-text
      v-if="label"
      margin-top="0px"
      class="ui-text-field__label"
      :class="labelClass"
      scale="subhead"
      :font-face="labelFontFace"
    >
      {{ label }}
    </d-text>
    <d-box @click="handleClick" class="d-checkbox-card">
      <d-auto-layout justify-content="space-between" align-items="center">
        <d-auto-layout gap="16px">
          <d-box
            align-self="center"
            v-if="$slots.icon"
            class="d-checkbox-card__icon"
          >
            <slot name="icon"></slot>
          </d-box>
          <d-box class="d-checkbox-card__content">
            <slot name="heading">
              <d-heading my0>{{ heading }}</d-heading>
            </slot>
            <slot name="description">
              <d-text scale="subhead" light-color="#8C97A7" my0>{{
                description
              }}</d-text>
            </slot>
          </d-box>
        </d-auto-layout>

        <d-box class="d-checkbox-card__checkbox">
          <d-checkbox :dashed="dashed" size="18px" :checked="isChecked" />
        </d-box>
      </d-auto-layout>
      <d-box
        v-if="expandable && expanded"
        class="d-checkbox-card__expansion-border"
      ></d-box>

      <d-box v-if="expanded" class="d-checkbox-card__expanded">
        <slot></slot>
      </d-box>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DHeading, DAutoLayout, DText, DCheckbox } from "../main";
import { ref } from "vue";
import { useCheckbox } from "../utils/composables/useCheckbox";

const expanded = ref(false);

const props = defineProps({
  heading: {
    type: String,
  },
  description: {
    type: String,
  },
  checked: {
    type: Boolean,
    default: null,
  },
  value: {
    type: [String, Number],
    default: "",
  },
  modelValue: {
    default: false,
  },
  trueValue: {
    default: true,
  },
  falseValue: {
    default: false,
  },
  values: {
    type: Array,
    default: () => [],
  },
  dashed: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
  expandable: {
    type: Boolean,
  },
  label: {
    type: String,
  },
  labelClass: {
    type: String,
  },
  labelFontFace: {
    type: String,
    default: "heroNew",
  },
});

const emit = defineEmits(["update:modelValue", "click"]);

const { isChecked, triggerChange: changed } = useCheckbox(props, emit);

const handleClick = (e) => {
  if (!props.disabled) {
    if (props.expandable) {
      // Handle stuff if it's expandable
      if (e.target.closest(".d-checkbox-card__checkbox")) {
        changed();
      } else {
        expanded.value = !expanded.value;
      }
    } else {
      changed();
    }
  }
};
</script>

<style lang="scss" scoped>
.d-checkbox-card {
  padding: 19px 16px;
  position: relative;
  border: 1px solid #e1e7ec;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  .d-checkbox-card__expansion-border {
    width: 100%;
    height: 0.5px;
    background: #e2e8f0;
    margin: 16px 0;
  }
  .d-checkbox-card__icon {
    border: 1px solid #e1e7ec;
    display: flex;
    min-height: 42px;
    min-width: 42px;
    padding: 12px;
    aspect-ratio: 1 / 1;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
  }
}
</style>
