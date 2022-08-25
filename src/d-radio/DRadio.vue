<template>
  <d-box
    is="label"
    class="ui-radio__wrapper"
    :class="{
      ringed,
      alignToTop,
    }"
    @click="emitClick"
    :style="{ ...d__theme }"
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

<script>
import DBox from "../d-box/DBox.vue";
import DText from "../d-text/DText.vue";
import { inject } from "vue";
import { defaultThemeVars } from "../providers/default-theme";
export default {
  name: "DRadio",
  emit: ["update:modelValue", "click"],
  components: {
    DBox,
    DText,
  },
  data: () => ({
    mounted: false,
  }),
  mounted: function () {
    this.mounted = true;
  },
  computed: {
    isChecked: function () {
      if (this.mounted) return this.modelValue === this.computedValue;
      else return false;
    },
    computedValue: function () {
      return !this.value ? this.label : this.value;
    },
  },
  methods: {
    changed: function () {
      this.$emit("update:modelValue", this.computedValue);
    },
    emitClick: function () {
      this.$emit("click");
    },
  },
  props: {
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
  },
  setup() {
    const d__theme = inject("d__theme", defaultThemeVars);
    return { d__theme };
  },
};
</script>

<style lang="scss" scoped>
.ui-radio__wrapper {
  display: flex;
  align-items: center;
  cursor: pointer;

  .ui-radio__label-text.ui-text {
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
      height: 15px;
      width: 15px;
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
      height: 16px;
      width: 16px;
      border: 1px solid #ced6de;
    }

    > input:checked {
      height: 16px;
      width: 16px;
      border: 5px solid var(--lightPrimaryActionColor);
      outline: none;
      background: white;
      &.dark_mode {
        background: #202b3c;
      }
    }

    &:hover > input {
      border-color: var(--lightPrimaryActionColor);
    }
  }

  > input:checked {
    background: var(--lightPrimaryActionColor);
    width: 12px;
    height: 12px;
    outline: 2px solid var(--lightPrimaryActionColor);
    outline-offset: 1px;
    border-color: transparent;
  }
}
</style>
