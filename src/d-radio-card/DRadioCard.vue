<template>
  <d-box @click="handleClick" class="d-radio-card">
    <d-auto-layout justify-content="space-between" align-items="center">
      <d-auto-layout gap="16px">
        <d-box
          align-self="center"
          v-if="$slots.icon"
          class="d-radio-card__icon"
        >
          <slot name="icon"></slot>
        </d-box>
        <d-box class="d-radio-card__content">
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

      <d-box class="d-radio-card__radio">
        <d-radio
          ring-size="24px"
          :checked="isChecked"
          ring-thickness="8px"
          ringed
        />
      </d-box>
    </d-auto-layout>
    <d-box
      v-if="expandable && expanded"
      class="d-radio-card__expansion-border"
    ></d-box>

    <d-box v-if="expanded" class="d-radio-card__expanded">
      <slot></slot>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DHeading, DAutoLayout, DText, DRadio } from "../main";
import { useRadio } from "../utils/composables/useRadio";
import { ref } from "vue";

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
  disabled: {
    type: Boolean,
  },
  expandable: {
    type: Boolean,
  },
});

const emit = defineEmits(["update:modelValue", "click"]);

const { isChecked, changed } = useRadio(props, emit);

const handleClick = (e) => {
  if (!props.disabled) {
    if (props.expandable) {
      // Handle stuff if it's expandable
      if (e.target.closest(".d-radio-card__radio")) {
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
.d-radio-card {
  padding: 19px 16px;
  position: relative;
  border: 1px solid #e1e7ec;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  .d-radio-card__expansion-border {
    width: 100%;
    height: 0.5px;
    background: #e2e8f0;
    margin: 16px 0;
  }
  .d-radio-card__icon {
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
