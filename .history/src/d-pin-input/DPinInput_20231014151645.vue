<template>
  <d-box class="ui-text-field__wrapper" :class="[`size__${computedInputSize}`]">
    <slot name="label">
      <d-box v-if="!!label" is="label">
        <d-text
          margin-top="0px"
          class="ui-text-field__label"
          :class="labelClass"
          scale="subhead"
          :font-face="labelFontFace"
        >
          {{ label }}
        </d-text>
      </d-box>
    </slot>

    <d-auto-layout :item-spacing="spacing" :between="fullWidth">
      <d-textfield
        v-for="(item, index) in data"
        :id="item.id"
        :key="`item__${index}`"
        v-model="item.value"
        :placeholder="placeholder"
        :only-numbers="onlyNumbers"
        :type="password ? 'password' : 'text'"
        one-char-wide
        @focus="(e) => handleFocus(e, index)"
        @input="(e) => handleInput(e, index)"
        @keydown="(e) => handleKeyDown(e, index)"
        @paste="(e) => handlePaste(e, index)"
        maxlength="1"
        minlength="1"
        :show-error="!!errorMessage"
        :size="computedInputSize"
      />
    </d-auto-layout>
    <d-box v-if="errorMessage && !invisible" class="ui-text-field__error">
      <ErrorIcon height="16px" width="16px" class="ui-text-field__error-icon" />
      <d-text
        class="ui-text-field__error-text"
        scale="subhead"
        fontFace="circularSTD"
      >
        {{ errorMessage }}
      </d-text>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DTextfield, DText, ErrorIcon, DAutoLayout } from "../main";
import inputProps from "../utils/inputProps";
import { ref, onMounted } from "vue";
import uniqueRandomString from "../utils/uniqueRandomString";
import { useInputSize } from "../utils/composables/useInputSize";

const props = defineProps({
  ...inputProps,
  noOfCharacters: {
    type: Number,
    default: 6,
  },
  placeholder: {
    type: String,
    default: "-",
  },
  password: {
    type: Boolean,
  },
  spacing: {
    type: String,
    default: "8px",
  },
  fullWidth: {
    type: Boolean,
  },
});

const emit = defineEmits(["update:modelValue"]);

const { computedInputSize } = useInputSize(props);

const data = ref([]);

const handleFocus = (e, index) => {
  let focusShifted = false;
  if (index !== 0) {
    for (let i = 0; i < index; i++) {
      if (!data.value[i].value) {
        let elem = document
          .getElementById(data.value[i].id)
          .getElementsByTagName("input")[0];

        elem.focus();
        elem.select();
        focusShifted = true;
        break;
      }
    }
  }
  if (!focusShifted) {
    e.target.select();
  }
};

const handleInput = async (e, index) => {
  if (
    (data.value[index].value || data.value[index].value == 0) &&
    data.value[index].value !== ""
  ) {
    if (index !== data.value.length - 1) {
      let nextInput = document
        .getElementById(data.value[index + 1].id)
        .getElementsByTagName("input")[0];

      nextInput.focus();
      nextInput.select();
    }
  } else {
    if (index !== 0) {
      let nextInput = document
        .getElementById(data.value[index - 1].id)
        .getElementsByTagName("input")[0];

      nextInput.focus();
      nextInput.select();
    }
  }
  emit(
    "update:modelValue",
    data.value.reduce((prev, curr) => prev + curr.value, "")
  );
};

const handleKeyDown = async (e, index) => {
  if (e.key === "ArrowLeft") {
    if (index !== 0) {
      let nextInput = document
        .getElementById(data.value[index - 1].id)
        .getElementsByTagName("input")[0];
      nextInput.focus();
      setTimeout(() => {
        nextInput.select();
      });
    }
  }
  if (e.key === "ArrowRight") {
    if (index !== data.value.length - 1) {
      let nextInput = document
        .getElementById(data.value[index + 1].id)
        .getElementsByTagName("input")[0];
      nextInput.focus();
      setTimeout(() => {
        nextInput.select();
      });
    }
  }
  if (e.key === "Backspace" || e.key === "Delete") {
    if (index !== 0) {
      if (!data.value[index].value) {
        let nextInput = document
          .getElementById(data.value[index - 1].id)
          .getElementsByTagName("input")[0];
        nextInput.select();
        e.preventDefault();
        return;
      }
    }
  }
};
const handlePaste = (e) => {
  e.preventDefault();
  const copiedText = (e.clipboardData || window.clipboardData).getData("text");
  if (copiedText.length <= data.value.length) {
    copiedText.split("").forEach((val, index) => {
      data.value[index].value = val;
    });
    emit(
      "update:modelValue",
      data.value.reduce((prev, curr) => prev + curr.value, "")
    );
  }
};

onMounted(() => {
  data.value = [];
  for (let i = 0; i < props.noOfCharacters; i++) {
    data.value.push({
      value: "",
      id: uniqueRandomString(19, 8),
    });
  }

  if (props.modelValue && data.value.length) {
    if (props.modelValue.split("").length <= data.value.length) {
      props.modelValue.split("").forEach((val, index) => {
        data.value[index].value = val;
      });
      emit(
        "update:modelValue",
        data.value.reduce((prev, curr) => prev + curr.value, "")
      );
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../scss/textfield";
</style>
