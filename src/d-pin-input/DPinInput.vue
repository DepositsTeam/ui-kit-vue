<template>
  <d-box
    class="ui-text-field__wrapper"
    :class="[`size__${size}`]"
    :style="{ ...theme }"
  >
    <d-box v-if="!!label" is="label">
      <d-text
        margin-top="0px"
        class="ui-text-field__label"
        :class="labelClass"
        scale="subhead"
        :font-face="labelFontFace"
        :size="size"
      >
        {{ label }}
      </d-text>
    </d-box>
    <d-box
      :style="{
        '--spacing': spacing,
      }"
      display="inline-flex"
      class="ui-pin-input-container"
    >
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
        maxlength="1"
        minlength="1"
      />
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DTextfield, DText } from "../main";
import inputProps from "../utils/inputProps";
import { inject, ref, onMounted, nextTick } from "vue";
import defaultTheme from "../providers/default-theme";
import uniqueRandomString from "../utils/uniqueRandomString";

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
});

const emit = defineEmits(["update:modelValue"]);

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
};

onMounted(() => {
  for (let i = 0; i < props.noOfCharacters; i++) {
    data.value.push({
      value: "",
      id: uniqueRandomString(19),
    });
  }
  if (props.modelValue) {
    props.modelValue.split("").forEach((val, index) => {
      data.value[index].value = val;
    });
  }
});

const theme = inject("theme", defaultTheme);
</script>

<style lang="scss" scoped>
@import "../scss/textfield";
.ui-pin-input-container {
  & > * {
    &:not(:last-child) {
      margin-right: var(--spacing);
    }
  }
}
</style>
