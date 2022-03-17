<template>
  <d-box
    is="label"
    class="ui-radio__wrapper"
    :class="{
      ringed,
      alignToTop,
    }"
  >
    <d-box
      is="input"
      :value="computedValue"
      :checked="isChecked"
      @change="changed"
      v-bind="$attrs"
      :disabled="disabled"
      ref="radio"
      class="ui-radio"
      type="radio"
    />
    <d-text class="ui-radio__label-text">{{ label }}</d-text>
  </d-box>
</template>

<script>
import DBox from "../d-box/DBox.vue";
import DText from "../d-text/DText.vue";
export default {
  name: "DRadio",
  emit: ["update:modelValue"],
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
      if (this.mounted) return this.modelValue == this.$refs.radio.value;
      else return false;
    },
    computedValue: function () {
      return this.value === "" ? this.label : this.value;
    },
  },
  methods: {
    changed: function (e) {
      this.$emit("update:modelValue", this.$refs.radio.value);
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
  },
};
</script>

<style lang="scss" scoped>
.ui-radio__wrapper {
  display: flex;
  align-items: center;

  &.alignToTop {
    align-items: flex-start;
  }

  > {
    * {
      margin: 0;
      cursor: pointer;
    }

    input {
      margin-right: 8px;
      position: relative;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      background: white;
      border: 2px solid #ced6de;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
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
      border: 5px solid #0db9e9;
      outline: none;
      background: white;
    }

    &:hover > input {
      border-color: #0c9ccc;
    }
  }

  > input:checked {
    background: #0d7fe9;
    width: 12px;
    height: 12px;
    outline: 2px solid #0d7fe9;
    outline-offset: 1px;
    border-color: transparent;
  }
}
</style>
