<template>
  <d-box
    is="label"
    class="ui-switch__wrapper"
    :class="{
      [`state__disabled`]: disabled,
      [`semantic__${colorScheme}`]: colorScheme,
      custom_color: switchColor,
      custom_thumb_color: thumbColor,
      alignRight,
    }"
    :style="{
      '--customswitchcolor': switchColor,
      '--customthumbcolor': thumbColor,
      '--switch-height': switchHeight,
      '--switch-width': switchWidth,
      '--thumb-size': thumbSize,
    }"
  >
    <d-box is="div" class="ui-switch">
      <d-box
        is="input"
        class="ui-slider"
        type="checkbox"
        :disabled="disabled"
        v-bind="$attrs"
        :value="computedValue"
        @change="handleChange"
        :checked="isChecked"
      />
      <d-box is="span" class="ui-slider round" />
    </d-box>
    <d-text v-if="label" class="ui-switch__label-text">{{ label }}</d-text>
  </d-box>
</template>

<script setup>
import { DText, DBox } from "../main";
import { computed } from "vue";

const props = defineProps({
  colorScheme: {
    type: String,
    validator: (value) =>
      ["primary", "danger", "success", "warning"].includes(value),
    default: "success",
  },
  disabled: {
    type: Boolean,
  },
  label: {
    type: String,
  },
  switchColor: {
    type: String,
  },
  thumbColor: {
    type: String,
    default: "#ffffff",
  },
  alignRight: {
    type: Boolean,
    default: false,
  },
  thumbSize: {
    type: String,
    default: "18px",
  },
  switchWidth: {
    type: String,
    default: "56px",
  },
  switchHeight: {
    type: String,
    default: "26px",
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
});

const emit = defineEmits(["update:modelValue"]);

const computedValue = computed(() =>
  props.value === "" ? props.label : props.value
);

const computedTrueValue = computed(() => {
  if (props.value) {
    return props.value;
  } else {
    return props.trueValue === true ? true : this.value;
  }
});

const isChecked = computed(() => {
  if (props.modelValue instanceof Array) {
    if (props.values.length) {
      return props.values.every((element) => {
        return props.modelValue.includes(element);
      });
    }
    return props.modelValue.includes(computedValue.value);
  }
  return props.modelValue === computedTrueValue.value;
});

const handleChange = (e) => {
  if (props.disabled) {
    return;
  }
  let currentlyChecked = e.target.checked;
  // var getClassOf = Function.prototype.call.bind(Object.prototype.toString);
  // console.log(getClassOf(this.modelValue));
  // console.log("Type is", typeof this.modelValue);
  // console.log("object is", this.modelValue);
  if (props.values.length) {
    let newValue = [...props.modelValue];
    // TODO to look for the most efficient way to do this!!!!!! Saving space and time
    if (currentlyChecked) {
      props.values.forEach((value) => {
        if (!newValue.includes(value)) {
          newValue.push(value);
        }
      });
    } else {
      props.values.forEach((value) => {
        if (newValue.includes(value)) {
          newValue.splice(newValue.indexOf(value), 1);
        }
      });
    }
    emit("update:modelValue", newValue);
  } else {
    if (props.modelValue instanceof Array) {
      let newValue = [...props.modelValue];
      if (currentlyChecked) {
        newValue.push(computedValue.value);
      } else {
        newValue.splice(newValue.indexOf(computedValue.value), 1);
      }

      emit("update:modelValue", newValue);
    } else {
      emit(
        "update:modelValue",
        currentlyChecked ? props.trueValue : props.falseValue
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.ui-switch__wrapper {
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &.alignRight {
    flex-direction: row-reverse;
  }

  &.custom_color {
    .ui-switch {
      input:checked + .ui-slider {
        background: var(--customswitchcolor);
      }
    }
  }

  &.custom_thumb_color {
    .ui-slider {
      &:before {
        background-color: var(--customthumbcolor);
      }
    }
  }
}

.state__disabled > .ui-switch > .ui-slider {
  cursor: not-allowed;
}

.ui-switch__label-text {
  padding: 0 10px;

  &.dark_mode {
    color: #fff;
  }

  /* border: 1px gray solid; */
}

.ui-switch {
  position: relative;
  display: inline-block;
  width: var(--switch-width);
  height: var(--switch-height);

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
}

/* Hide default HTML checkbox */

/* The slider */

.ui-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  &.dark_mode {
    background-color: #4f627d;
  }

  &:before {
    position: absolute;
    content: "";
    height: var(--thumb-size);
    width: var(--thumb-size);
    left: calc((var(--switch-height) - var(--thumb-size)) / 2);
    bottom: calc((var(--switch-height) - var(--thumb-size)) / 2);
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
}

input:checked + .ui-slider {
  background-color: #17ce89;
}

.semantic__primary input:checked + .ui-slider.round {
  background-color: var(--light-primary-action-color);
}

.semantic__danger input:checked + .ui-slider.round {
  background-color: #d62f4b;
}

.semantic__success input:checked + .ui-slider.round {
  background-color: #00b058;
}

.semantic__outline input:checked + .ui-slider.round {
  background-color: #ccc;
  &.dark_mode {
    background-color: #4f627d;
  }
}

.semantic__invisible input:checked + .ui-slider.round {
  background-color: rgba(204, 204, 204, 0);
}

input {
  &:focus + .ui-slider {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + .ui-slider:before {
    -webkit-transform: translateX(
      calc(
        var(--switch-width) - var(--thumb-size) -
          ((var(--switch-height) - var(--thumb-size)))
      )
    );
    -ms-transform: translateX(
      calc(
        var(--switch-width) - var(--thumb-size) -
          ((var(--switch-height) - var(--thumb-size)))
      )
    );
    transform: translateX(
      calc(
        var(--switch-width) - var(--thumb-size) -
          ((var(--switch-height) - var(--thumb-size)))
      )
    );
  }
}

/* Rounded sliders */

.ui-slider.round {
  border-radius: 19px;

  &:before {
    border-radius: 50%;
  }
}
</style>
