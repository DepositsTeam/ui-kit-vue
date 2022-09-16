<template>
  <d-box
    is="label"
    class="ui-switch__wrapper"
    :class="{
      [`state__disabled`]: disabled,
      [`semantic__${colorScheme}`]: colorScheme,
      custom_color: switchColor,
      custom_thumb_color: thumbColor,
    }"
    :style="{
      '--customswitchcolor': switchColor,
      '--customthumbcolor': thumbColor,
    }"
  >
    <d-box is="div" class="ui-switch">
      <d-box
        is="input"
        class="ui-slider"
        type="checkbox"
        :disabled="disabled"
        v-bind="$attrs"
      />
      <d-box is="span" class="ui-slider round" />
    </d-box>
    <d-text class="ui-switch__label-text">{{ label }}</d-text>
  </d-box>
</template>

<script setup>
import { DText, DBox } from "../main";

defineProps({
  colorScheme: {
    type: String,
    validator: (value) =>
      ["primary", "danger", "success", "outline", "invisible"].includes(value),
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
  },
});
</script>

<style lang="scss" scoped>
.ui-switch__wrapper {
  display: flex;
  align-items: center;
  cursor: pointer;
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
  width: 56px;
  height: 26px;

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

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
}

input:checked + .ui-slider {
  background-color: #17ce89;
}

.semantic__primary input:checked + .ui-slider.round {
  background-color: #0db9e9;
}

.semantic__danger input:checked + .ui-slider.round {
  background-color: #d62f4b;
}

.semantic__success input:checked + .ui-slider.round {
  background-color: #00b058;
}

.semantic__outline input:checked + .ui-slider.round {
  background-color: #ccc;
}

.semantic__invisible input:checked + .ui-slider.round {
  background-color: rgba(204, 204, 204, 0);
}

input {
  &:focus + .ui-slider {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + .ui-slider:before {
    -webkit-transform: translateX(29px);
    -ms-transform: translateX(29px);
    transform: translateX(29px);
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
