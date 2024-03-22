<template>
  <d-box class="ui-dropdown">
    <d-textfield
      :label="label"
      :font-face="fontFace"
      :size="computedInputSize"
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
      :placeholder="placeholder"
      :pill="pill"
    >
      <template
        #leftIcon
        v-if="
          ($slots.icon ||
            (typeof selectedOption === 'object' &&
              selectedOption &&
              selectedOption.icon)) &&
          selectedOption
        "
      >
        <d-box class="ui-dropdown__icon" v-if="$slots.icon">
          <slot name="icon" v-bind="selectedOption"></slot>
        </d-box>

        <d-box
          v-if="
            typeof selectedOption === 'object' &&
            selectedOption.icon &&
            !$slots.icon
          "
          class="ui-dropdown__icon"
        >
          <d-box
            is="img"
            :alt="selectedOption.text"
            :src="selectedOption.icon"
          />
        </d-box>
      </template>
      <template #label>
        <slot name="label"></slot>
      </template>
    </d-textfield>
    <d-box v-show="showOptions" class="ui-dropdown__options">
      <d-box
        v-for="(option, index) in visibleOptions"
        :key="`option-${index}`"
        class="ui-dropdown__option"
        @click="handleClickedOption(option)"
        :class="{ active: selectedIndex === index }"
        @mouseenter="updateSelectedIndex(index)"
      >
        <d-box class="ui-dropdown__icon" v-if="$slots.icon">
          <slot name="icon" v-bind="option"></slot>
        </d-box>

        <d-box
          v-if="typeof option === 'object' && option.icon && !$slots.icon"
          class="ui-dropdown__icon"
        >
          <d-box is="img" :alt="option.text" :src="option.icon" />
        </d-box>
        <d-text
          dark-class=""
          margin-y="0"
          scale="subhead"
          font-face="circularSTD"
        >
          {{ typeof option === "string" ? option : option.text }}
        </d-text>
      </d-box>
      <d-box
        display="flex"
        justify-content="center"
        alignment="center"
        v-if="fetching"
      >
        <d-loader transform="scale(0.25)"></d-loader>
      </d-box>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DTextfield, DText, DLoader } from "../main";
import inputProps from "../utils/props/inputProps";
import {
  ref,
  computed,
  onMounted,
  onBeforeMount,
  onUnmounted,
  nextTick,
  watch,
} from "vue";
import { useInputSize } from "../utils/composables/useInputSize";
import { useDropdown } from "../utils/composables/useDropdown";

const emit = defineEmits(["update:modelValue"]);
const mounted = ref(false);

const props = defineProps({
  options: {
    type: Array,
  },
  optionTitle: {
    type: String,
    default: "text",
  },
  optionValue: {
    type: String,
    default: "value",
  },
  returnFullObject: {
    type: Boolean,
    default: false,
  },
  fetching: {
    type: Boolean,
  },
  pill: {
    type: Boolean,
    default: false,
  },
  ...inputProps,
});

const { computedInputSize } = useInputSize(props);
const { computedOptions } = useDropdown(props);
const showAllValues = ref(true);

onBeforeMount(() => {
  const realValue =
    typeof props.modelValue === "object"
      ? props.modelValue[props.optionValue]
      : props.modelValue;
  const matched = [...computedOptions.value].filter(
    (option) => option.value === realValue
  );
  if (matched.length) {
    const matchedOption = matched[0];
    inputValue.value = matchedOption.text;
    emitOption({
      text: matchedOption[props.optionTitle],
      value: matchedOption[props.optionValue],
      originalOption: matchedOption.originalOption,
    });
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
    const realValue =
      typeof val === "object" && val !== null ? val[props.optionValue] : val;
    const matched = [...computedOptions.value].filter(
      (option) => option.value === realValue
    );
    if (matched.length) {
      inputValue.value = matched[0].text;
    } else {
      inputValue.value = "";
    }
  }
);

const inputValue = ref("");
const showOptions = ref(false);
const selectedIndex = ref(-1);
const selectedOption = ref(null);

watch(inputValue, (val, prevVal) => {
  if (val !== prevVal && showOptions.value) {
    showAllValues.value = false;
  }
  if (!val && prevVal && !showOptions.value) {

  }
  // if (!showOptions.value && mounted.value) {
  //   showOptions.value = true;
  // }
});

const emitOption = (option) => {
  if (option) {
    if (props.returnFullObject) {
      emit("update:modelValue", option.originalOption);
    } else {
      emit("update:modelValue", option.value);
    }
  } else {
    emit("update:modelValue", null);
  }
};

const toggleDropdown = () => (showOptions.value = !showOptions.value);

const updateSelectedIndex = (index) => (selectedIndex.value = index);

const visibleOptions = computed(() => {
  if (inputValue.value && !showAllValues.value) {
    return [...computedOptions.value].filter((option) =>
      option.text.toLowerCase().includes(inputValue.value.toLowerCase())
    );
  } else return computedOptions.value;
});

const handleClickedOption = async (option) => {
  if (option) {
    inputValue.value = option.text;
    emitOption(option);
    selectedOption.value = option;
    await nextTick();
    showOptions.value = false;
    showAllValues.value = true;
  }
};

const handleFocus = () => {
  showOptions.value = true;
};

const handleBlur = async () => {
  await nextTick();
  setTimeout(async () => {
    showOptions.value = false;
    showAllValues.value;
    let exactMatch = false;
    for (let option of visibleOptions.value) {
      if (option.text.toLowerCase() === inputValue.value.toLowerCase()) {
        exactMatch = true;
        inputValue.value = option.text;
        selectedOption.value = option;
        emitOption(option);
        break;
      }
    }
    if (!exactMatch) {
      inputValue.value = "";
      selectedOption.value = null;
      emitOption(null);
    }
  }, 300);
};

const handleLeave = (e) => {
  if (!e.target.closest(".ui-dropdown")) {
    handleBlur();
  }
};

const handleKeyDown = (e) => {
  switch (e.key) {
    case "ArrowDown":
      if (selectedIndex.value + 1 <= visibleOptions.value.length - 1)
        updateSelectedIndex(selectedIndex.value + 1);
      else updateSelectedIndex(0);
      break;
    case "ArrowUp":
      if (selectedIndex.value - 1 >= 0)
        updateSelectedIndex(selectedIndex.value - 1);
      else updateSelectedIndex(visibleOptions.value.length - 1);
      break;
    case "Enter":
      handleClickedOption(visibleOptions.value[selectedIndex.value]);
      break;
    case "Escape":
      handleBlur();
      e.target.blur();
      break;
  }
};
</script>

<style lang="scss" scoped>
.ui-dropdown {
  position: relative;
  .ui-dropdown__options {
    width: 100%;
    background: white;
    border-radius: 6px;
    border: 1px solid #e1e7ec;
    max-height: 400px;
    overflow-y: auto;
    position: absolute;
    z-index: 99;
    top: 100%;
    &.dark_mode {
      background: var(--dark-input-background-color);
      border-color: var(--dark-input-background-color);
    }
    .ui-dropdown__option {
      padding: 16px 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      .ui-dropdown__icon {
        margin-right: 8px;
      }
      &.dark_mode {
        color: #94a3b8;
      }
      &.active,
      &:hover {
        background: #f2fafc;
        color: var(--light-primary-color);
        position: relative;
        &.dark_mode {
          background: #041d25;
          color: var(--dark-primary-color);
        }
        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0.5px;
          width: 2px;
          height: 100%;
          border-radius: 0 2px 2px 0;
          background: var(--light-primary-color);
          &.dark_mode {
            background: var(--dark-primary-color);
          }
        }
      }
    }
  }
}
</style>
