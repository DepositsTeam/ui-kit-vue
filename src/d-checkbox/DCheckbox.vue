<template>
  <d-box
    class="ui-checkbox__wrapper"
    is="label"
    :class="{
      alignToTop,
      dashed,
      [wrapperClass]: wrapperClass,
    }"
    :style="{ ...theme }"
  >
    <d-box
      is="input"
      class="ui-checkbox"
      type="checkbox"
      v-bind="$attrs"
      :value="computedValue"
      @change="handleChange"
      :checked="isChecked"
    />
    <d-box v-if="$slots.default">
      <slot></slot>
    </d-box>
    <d-text
      v-else
      class="ui-checkbox__label-wrap ui-text heroNew"
      :class="{ [labelClass]: labelClass }"
      >{{ label }}</d-text
    >
  </d-box>
</template>

<script>
import DBox from "../d-box/DBox.vue";
import DText from "../d-text/DText.vue";
import { inject } from "vue";
import defaultTheme from "../providers/default-theme";
export default {
  name: "DCheckbox",
  emit: ["update:modelValue"],
  components: {
    DBox,
    DText,
  },
  props: {
    wrapperClass: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    alignToTop: {
      type: Boolean,
    },
    dashed: {
      type: Boolean,
    },
    label: {
      type: String,
    },
    labelClass: {
      type: String,
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
    top: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedValue: function () {
      return this.value === "" ? this.label : this.value;
    },
    computedTrueValue: function () {
      if (this.value) {
        return this.value;
      } else {
        return this.trueValue === true ? true : this.value;
      }
    },
    isChecked: function () {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value);
      }
      return this.modelValue === this.computedTrueValue;
    },
  },
  methods: {
    handleChange(e) {
      let currentlyChecked = e.target.checked;
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue];

        if (currentlyChecked) {
          newValue.push(this.computedValue.value);
        } else {
          newValue.splice(newValue.indexOf(this.computedValue.value), 1);
        }

        this.$emit("update:modelValue", newValue);
      } else {
        this.$emit(
          "update:modelValue",
          currentlyChecked ? this.trueValue : this.falseValue
        );
      }
    },
  },
  setup() {
    const theme = inject("theme", defaultTheme);
    return { theme };
  },
};
</script>

<style lang="scss" scoped>
.ui-checkbox__wrapper {
  display: flex;
  align-items: center;

  &.alignToTop {
    align-items: flex-start;
  }

  > {
    * {
      margin: 0;
    }

    input {
      margin-right: 8px;
      position: relative;
      height: 16px;
      width: 16px;
      background: white;
      border: 1px solid #ced6de;
      border-radius: 2px;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      cursor: not-allowed;

      &:checked {
        background-color: var(--primarycolor);
        width: 16px;
        height: 16px;
        border: none;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 4L4 6.5L9 1.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }

  &.dashed > input:checked {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 6H9.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  }

  > input:checked {
    &:hover {
      background-color: var(--primarycolor);
    }

    &:disabled {
      background-color: var(--primarydisabledcolor);
    }
  }
}
</style>
