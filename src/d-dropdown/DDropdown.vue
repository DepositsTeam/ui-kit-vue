<template>
  <d-box class="ui-dropdown">
    <d-textfield
      :label="label"
      :font-face="fontFace"
      :size="size"
      :error-message="errorMessage"
      :show-error="showError"
      :model-value="modelValue"
      :only-numbers="onlyNumbers"
      :wrapper-class="wrapperClass"
      :invisible="invisible"
      :label-class="labelClass"
      :disabled="disabled"
      :label-font-face="labelFontFace"
      v-model="inputValue"
      @focus="handleFocus"
      @keydown="handleKeyDown"
      @blur="handleBlur"
      drop-down
      @right-icon-clicked="toggleDropdown"
    />
    <d-box v-if="showOptions" class="ui-dropdown__options">
      <d-box
        v-for="(option, index) in computedOptions"
        :key="`option-${index}`"
        class="ui-dropdown__option"
        @click="handleClickedOption(option)"
        :class="{ active: selectedIndex === index }"
        @mouseenter="updateSelectedIndex(index)"
      >
        <d-text margin-y="0" scale="subhead" font-face="circularSTD">
          {{ typeof option === "string" ? option : option.text }}
        </d-text>
      </d-box>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DTextfield, DText } from "../main";
import inputProps from "../utils/inputProps";
import {
  ref,
  computed,
  onMounted,
  onBeforeMount,
  onUnmounted,
  nextTick,
  watch,
} from "vue";

const emit = defineEmits(["update:modelValue"]);
const mounted = ref(false);

const props = defineProps({
  options: {
    type: Array,
  },
  ...inputProps,
});

onBeforeMount(() => {
  const matched = props.options.filter((option) => {
    return typeof option === "string"
      ? option === props.modelValue
      : option.value === props.modelValue;
  });
  if (matched.length) {
    inputValue.value =
      typeof matched[0] === "string" ? matched[0] : matched[0].text;
  } else {
    inputValue.value = "";
  }
});

onMounted(() => {
  window.addEventListener("click", handleLeave);
  mounted.value = true;
});

onUnmounted(() => {
  window.removeEventListener("click", handleLeave);
  mounted.value = false;
});

watch(
  () => props.modelValue,
  (val) => {
    const matched = props.options.filter((option) => {
      return typeof option === "string" ? option === val : option.value === val;
    });
    if (matched.length) {
      inputValue.value =
        typeof matched[0] === "string" ? matched[0] : matched[0].text;
    } else {
      inputValue.value = "";
    }
  }
);

const inputValue = ref("");
const showOptions = ref(false);
const selectedIndex = ref(-1);

watch(inputValue, () => {
  if (!showOptions.value && mounted.value) {
    showOptions.value = true;
  }
});

const toggleDropdown = () => (showOptions.value = !showOptions.value);

const updateSelectedIndex = (index) => (selectedIndex.value = index);

const computedOptions = computed(() => {
  if (inputValue.value) {
    return [...props.options].filter((option) => {
      if (typeof option === "string") {
        return option.toLowerCase().includes(inputValue.value.toLowerCase());
      } else {
        return option.text
          .toLowerCase()
          .includes(inputValue.value.toLowerCase());
      }
    });
  } else return [...props.options];
});

const handleClickedOption = async (option) => {
  if (typeof option === "string") {
    inputValue.value = option;
    emit("update:modelValue", option);
  } else {
    inputValue.value = option.text;
    emit("update:modelValue", option.value);
  }
  await nextTick();
  showOptions.value = false;
};

const handleFocus = () => {
  showOptions.value = true;
};

const handleBlur = async () => {
  await nextTick();
  setTimeout(() => {
    showOptions.value = false;
    let exactMatch = false;
    for (let option of computedOptions.value) {
      if (typeof option === "string") {
        if (option.toLowerCase() === inputValue.value.toLowerCase()) {
          exactMatch = true;
          inputValue.value = option;
          emit("update:modelValue", option);
          break;
        }
      } else {
        if (option.text.toLowerCase() === inputValue.value.toLowerCase()) {
          exactMatch = true;
          inputValue.value = option.text;
          emit("update:modelValue", option.value);
          break;
        }
      }
    }
    if (!exactMatch) {
      inputValue.value = "";
    }
  }, 100);
};

const handleLeave = (e) => {
  if (!e.target.closest(".ui-dropdown")) {
    handleBlur();
  }
};

const handleKeyDown = (e) => {
  switch (e.key) {
    case "ArrowDown":
      if (selectedIndex.value + 1 <= computedOptions.value.length - 1)
        updateSelectedIndex(selectedIndex.value + 1);
      else updateSelectedIndex(0);
      break;
    case "ArrowUp":
      if (selectedIndex.value - 1 >= 0)
        updateSelectedIndex(selectedIndex.value - 1);
      else updateSelectedIndex(computedOptions.value.length - 1);
      break;
    case "Enter":
      handleClickedOption(computedOptions.value[selectedIndex.value]);
  }
};
</script>

<style lang="scss" scoped>
.ui-dropdown {
  .ui-dropdown__options {
    width: 100%;
    background: white;
    border-radius: 6px;
    border: 1px solid #e1e7ec;
    .ui-dropdown__option {
      padding: 16px 8px;
      cursor: pointer;
      &.active,
      &:hover {
        background: #f2fafc;
        color: #0db9e9;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0.5px;
          width: 2px;
          height: 100%;
          border-radius: 0 2px 2px 0;
          background: #0db9e9;
        }
      }
    }
  }
}
</style>