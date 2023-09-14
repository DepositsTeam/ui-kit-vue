<template>
  <d-box
    is="label"
    class="ui-radio__wrapper"
    :class="{
      ringed,
      alignToTop,
      alignRight,
    }"
    @click="emitClick"
    :style="{ '--ring-size': ringSize, '--ring-thickness': ringThickness }"
  >
    <d-box
      is="input"
      :checked="isChecked"
      @change="changed"
      v-bind="$attrs"
      :disabled="disabled"
      ref="radio"
      class="ui-radio"
      type="radio"
      :class="{
        hasLabel: label || $slots.default,
        ringed,
      }"
    />
    <d-box class="ui-radio__label-wrap" v-if="$slots.default">
      <slot></slot>
    </d-box>
    <d-text v-else class="ui-radio__label-text" :class="labelClass">{{
      label
    }}</d-text>
  </d-box>
</template>

<script setup>
import { DBox, DText } from "../main";
import { ref, onMounted, computed } from "vue";

const emit = defineEmits(["update:modelValue", "click"]);

const props = defineProps({
  ringed: {
    type: Boolean,
  },
  alignToTop: {
    type: Boolean,
  },
  label: {
    type: String,
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
  labelClass: {
    type: [String, Object, Array],
  },
  alignRight: {
    type: Boolean,
  },
  ringSize: {
    type: String,
    default: "16px",
  },
  ringThickness: {
    type: String,
    default: "5px",
  },
  checked: {
    type: Boolean,
    default: null,
  },
});

const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
});

const computedValue = computed(() =>
  !props.value ? props.label : props.value
);

const isChecked = computed(() => {
  if (props.checked !== null) {
    return props.checked;
  } else {
    if (mounted.value) return props.modelValue === computedValue.value;
    else return false;
  }
});

const changed = () => {
  emit("update:modelValue", computedValue.value);
};

const emitClick = () => {
  emit("click");
};
</script>

<style lang="scss" scoped>
.ui-radio__wrapper {
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &.alignRight {
    flex-direction: row-reverse;
    > {
      input {
        &.hasLabel {
          margin-right: 0;
          margin-left: 8px;
        }
      }
    }
  }

  .ui-radio__label-text.ui-text {
    flex: 1;
    &.dark_mode {
      color: #cbd5e1;
    }
  }

  .ui-radio {
    pointer-events: none;
  }

  &.alignToTop {
    align-items: flex-start;
  }

  > {
    * {
      margin: 0;
      cursor: pointer;
    }

    input {
      &.hasLabel {
        margin-right: 8px;
      }
      position: relative;
      height: var(--ring-size);
      min-height: var(--ring-size);
      width: var(--ring-size);
      min-width: var(--ring-size);
      border-radius: 50%;
      background: white;
      border: 2px solid #ced6de;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      &.dark_mode {
        background: #202b3c;
        border: 1px solid #384860;
      }
    }
  }

  &.ringed {
    > input {
      height: var(--ring-size);
      width: var(--ring-size);
      border: 1px solid #ced6de;
    }

    > input:checked {
      height: var(--ring-size);
      width: var(--ring-size);
      border: var(--ring-thickness) solid var(--light-primary-action-color);
      outline: none;
      background: white;
      &.dark_mode {
        background: #202b3c;
        border-color: var(--dark-primary-action-color);
      }
    }

    &:hover > input {
      border-color: var(--light-primary-action-color);
      &.dark_mode {
        border-color: var(--dark-primary-action-color);
      }
    }
  }

  > input:checked:not(.ringed) {
    background: var(--light-primary-action-color);
    width: calc(var(--ring-size) - 8px);
    height: calc(var(--ring-size) - 8px);
    outline: 3px solid var(--light-primary-action-color);
    outline-offset: 1px;
    border-color: transparent;
    margin: 4px 12px 4px 4px;

    &.dark_mode {
      background: var(--dark-primary-action-color);
      outline: 3px solid var(--dark-primary-action-color);
    }
  }
}
</style>
