<template>
  <d-box
    :style="{ ...___theme }"
    class="ui-tag-dropdown__wrapper"
    :class="{
      [`size__${computedInputSize}`]: true,
    }"
  >
    <slot name="label">
      <d-box is="label">
        <d-text
          :class="labelClass"
          :font-face="labelFontFace"
          class="ui-tag-dropdown__label"
          scale="subhead"
        >
          {{ label }}
        </d-text>
      </d-box>
    </slot>

    <d-box
      class="ui-tag-dropdown__input-wrapper"
      :class="{ emptyDropdown: !inputTags.length, hasError: !!errorMessage }"
      @click="toggleOptions"
      ref="targetRef"
    >
      <d-box
        class="ui-tag-dropdown__left-icon"
        v-if="leftIcon || $slots.leftIcon"
      >
        <component
          :is="leftIcon"
          v-if="leftIcon"
          class="ui-text-field__left-icon"
          @click="emitLeftIconClicked"
        ></component>
        <d-box v-else-if="$slots.leftIcon" class="ui-text-field__left-icon">
          <slot name="leftIcon"></slot>
        </d-box>
      </d-box>
      <d-box class="ui-tag-dropdown__input-wrapper__left">
        <d-box
          is="div"
          v-for="(tag, index) in inputTags"
          class="ui-tag-dropdown__input-tag"
          :key="`ui-tag-dropdown${keyGen()}_${index}`"
        >
          <d-text
            class="ui-tag-dropdown__input-tag-text"
            scale="subhead"
            font-face="circularSTD"
            margin-y="0"
            my0
          >
            {{ typeof tag === "string" ? tag : tag.text }}
          </d-text>
          <CloseIcon
            class="ui-tag-dropdown__close-icon"
            @click="handleDeleteTag(tag)"
            height="16px"
            width="16px"
          />
        </d-box>
        <d-text
          v-if="placeholder && !inputTags.length"
          class="ui-tag-dropdown__placeholder"
          my0
        >
          {{ placeholder }}
        </d-text>
      </d-box>
      <d-box
        class="ui-tag-dropdown__input-wrapper__right"
        @click="emitRightIconClicked"
      >
        <component
          class="ui-text-field__right-icon"
          v-if="rightIcon"
          :is="rightIcon"
        ></component>
        <d-box v-else-if="$slots.rightIcon" class="ui-text-field__right-icon">
          <slot name="rightIcon"></slot>
        </d-box>
        <d-box
          v-else
          class="ui-tag-dropdown__input-wrapper__right__icon-wrapper"
        >
          <chevron-filled-down-icon
            class="ui-tag-dropdown__input-wrapper__right__icon-wrapper"
          />
        </d-box>
      </d-box>
    </d-box>
    <Teleport to="body">
      <d-box
        class="ui-tag-dropdown__dropdown"
        ref="dropdownRef"
        v-show="showOptions"
      >
        <d-box class="ui-tag-dropdown__dropdown__header">
          <d-textfield
            ref="validInput"
            invisible
            search
            v-model="inputValue"
            :left-icon="SearchIcon"
            :placeholder="placeholder"
            @keydown="handleEsc"
            size="large"
          />
        </d-box>

        <d-box
          class="ui-tag-dropdown__dropdown__options"
          @scroll="handleScroll"
        >
          <d-box
            class="ui-tag-dropdown__dropdown__option"
            v-for="(option, index) in visibleOptions"
            :key="`option-${index}`"
            @click="selectOption(option)"
            :class="{
              selected: selectedOptions.includes(option.value),
              dropdownMode: !showCheckboxes,
            }"
            :cursor="showCheckboxes ? 'auto' : 'pointer'"
          >
            <d-checkbox
              v-if="showCheckboxes"
              :value="option.value"
              v-model="selectedOptions"
            >
              <d-text
                dark-class=""
                margin-y="0"
                font-face="circularSTD"
                scale="subhead"
                >{{ option.text }}</d-text
              >
            </d-checkbox>
            <d-text v-else margin-y="0" font-face="circularSTD" scale="subhead">
              {{ option.text }}
            </d-text>
          </d-box>
          <d-box v-if="loading" class="ui-tag-dropdown__loader">
            <d-loader loader-size="48px" />
          </d-box>
        </d-box>
      </d-box>
    </Teleport>

    <d-box v-if="errorMessage" class="ui-text-field__error">
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
import {
  ChevronFilledDownIcon,
  CloseIcon,
  DBox,
  DCheckbox,
  DText,
  DTextfield,
  ErrorIcon,
  SearchIcon,
} from "../main";
import keyGen from "../utils/keyGen";
import { computed, inject, nextTick, onMounted, onUnmounted, ref } from "vue";
import { defaultThemeVars } from "../providers/default-theme";
import inputProps from "../utils/inputProps";
import { useInputSize } from "../utils/composables/useInputSize";
import { useDropdown } from "../utils/composables/useDropdown";
import DLoader from "@/d-loader/DLoader.vue";
import { computePosition, flip, offset, shift } from "@floating-ui/dom";

const props = defineProps({
  ...inputProps,
  placeholder: {
    type: String,
  },
  options: {
    type: Array,
  },
  modelValue: {
    type: Array,
  },
  showCheckboxes: {
    type: Boolean,
    default: true,
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
  loading: {
    type: Boolean,
    default: false,
  },
});

const { computedInputSize } = useInputSize(props);
const { computedOptions } = useDropdown(props);

const targetRef = ref(null);
const dropdownRef = ref(null);

const updateDropdown = () => {
  dropdownRef.value.$el.style.width = `${targetRef.value.$el.offsetWidth}px`;
  computePosition(targetRef.value.$el, dropdownRef.value.$el, {
    placement: "bottom-start",
    middleware: [offset(0), flip(), shift({ padding: 5 })],
  }).then(({ x, y }) => {
    Object.assign(dropdownRef.value.$el.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
  });
};

const updateScroll = () => {
  updateDropdown();
};

const emit = defineEmits([
  "update:modelValue",
  "leftIconClicked",
  "rightIconClicked",
  "scrolledToBottom",
]);

const emitLeftIconClicked = (e) => {
  emit("leftIconClicked", e);
};

const emitRightIconClicked = (e) => {
  emit("rightIconClicked", e);
};

const inputValue = ref("");
const showOptions = ref(false);
const validInput = ref(null);

const handleEsc = (e) => {
  if (e.key === "Escape") {
    showOptions.value = false;
    inputValue.value = "";
  }
};

const emitSelectedOptions = (options) => {
  if (props.returnFullObject) {
    emit(
      "update:modelValue",
      computedOptions.value
        .filter((option) => options.includes(option.value))
        .map((option) => option.originalOption)
    );
  } else {
    emit("update:modelValue", options);
  }
};

const visibleOptions = computed(() => {
  let prefilteredOptions = computedOptions.value;
  if (!props.showCheckboxes) {
    prefilteredOptions = computedOptions.value.filter(
      (option) => !selectedOptions.value.includes(option.value)
    );
  }

  return prefilteredOptions.filter((option) => {
    return option.text.toLowerCase().includes(inputValue.value.toLowerCase());
  });
});

const selectedOptions = computed({
  get() {
    return [...computedModelValue.value];
  },
  set(value) {
    emitSelectedOptions(value);
  },
});

const selectOption = (option) => {
  if (!props.showCheckboxes) {
    const currentSelectedOptions = [...selectedOptions.value];
    currentSelectedOptions.push(option.value);
    emitSelectedOptions(currentSelectedOptions);
  }
};

const toggleOptions = async () => {
  showOptions.value = !showOptions.value;
  await nextTick();
  updateDropdown();
  if (showOptions.value) {
    validInput.value.$el.getElementsByTagName("input")[0].focus();
  }
};

const hideOptionsOnOutsideClick = (e) => {
  if (
    !e.target.closest(".ui-tag-dropdown__wrapper") &&
    !e.target.closest(".ui-tag-dropdown__dropdown")
  ) {
    showOptions.value = false;
  }
};

const computedModelValue = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return [...props.modelValue].map((option) => {
      if (typeof option === "object") {
        return option[props.optionValue];
      } else {
        return option;
      }
    });
  } else {
    if (typeof props.modelValue === "object") {
      return [];
    } else {
      return [props.modelValue];
    }
  }
});

const inputTags = computed(() => {
  return computedOptions.value.filter((option) =>
    computedModelValue.value.includes(option.value)
  );
});

const handleDeleteTag = (currentTag) => {
  const currentSelectedOptions = [...selectedOptions.value];
  emitSelectedOptions(
    currentSelectedOptions.filter(
      (selectedOption) => selectedOption !== currentTag.value
    )
  );
};

onMounted(() => {
  updateDropdown();
  window.addEventListener("scroll", updateScroll);
  window.addEventListener("click", hideOptionsOnOutsideClick);
  if (selectedOptions.value) {
    emitSelectedOptions(selectedOptions.value);
  }
});

onUnmounted(() => {
  window.removeEventListener("click", hideOptionsOnOutsideClick);
  window.removeEventListener("scroll", updateScroll);
});

const ___theme = inject("___theme", defaultThemeVars);

const handleScroll = (e) => {
  const { scrollHeight, scrollTop, clientHeight } = e.target;
  if (Math.abs(scrollHeight - clientHeight - scrollTop) < 1) {
    emit("scrolled-to-bottom", e);
  }
};
</script>

<style lang="scss">
.ui-tag-dropdown__input-wrapper {
  border: 1px solid #ced6de;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(63, 63, 68, 0.1);
  display: flex;
  align-items: center;
  background: #fff;
  justify-content: space-between;
  position: relative;
  &.hasError {
    background: #fff0f2;
    border-color: #d62f4b;
  }
  &.dark_mode {
    background: var(--dark-input-background-color);
    border-color: var(--dark-input-border-color);
  }
  .ui-tag-dropdown__input-wrapper__left {
    display: flex;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
  }
  .ui-tag-dropdown__input-wrapper__right,
  .ui-tag-dropdown__left-icon {
    display: flex;
    align-items: center;
    height: 100%;
    width: 32px;
  }
  .ui-tag-dropdown__input-wrapper__right__icon-wrapper {
    right: 16px;
    color: #5f6b7a;
    .ui-tag-dropdown__input-wrapper__right__icon-wrapper {
      cursor: pointer;
    }
  }

  /* overflow: scroll; */
  /* width: 100%; */
}

.ui-tag-dropdown__input {
  /* width: 100%; */
  min-width: 320px;
  border: none;
  outline: none;
  display: flex;

  /* flex: 1; */
}

.ui-tag-dropdown__wrapper {
  box-sizing: border-box;
  position: relative;
  .ui-tag-dropdown__placeholder {
    color: rgba(#b8c4ce, 0.5);
    font-family: "Hero New", sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
  &.size__massive .ui-tag-dropdown__input-wrapper {
    //min-height: calc(64px - 16px);
    &.emptyDropdown {
      height: 64px;
    }
    padding: 2px 16px;
    min-height: calc(64px - 8px);
  }

  &.size__huge .ui-tag-dropdown__input-wrapper {
    //min-height: calc(56px - 16px);
    &.emptyDropdown {
      height: 56px;
    }
    padding: 2px 16px;
    min-height: calc(56px - 8px);
  }

  &.size__xlarge .ui-tag-dropdown__input-wrapper {
    //min-height: calc(48px - 16px);
    &.emptyDropdown {
      height: 48px;
    }
    padding: 2px 12px;
    min-height: calc(48px - 8px);
  }

  &.size__large .ui-tag-dropdown__input-wrapper {
    //min-height: calc(40px - 16px);
    &.emptyDropdown {
      height: 40px;
    }
    padding: 2px 12px;
    min-height: calc(40px - 8px);
  }

  &.size__medium .ui-tag-dropdown__input-wrapper {
    //min-height: calc(32px - 16px);
    &.emptyDropdown {
      height: 32px;
    }
    padding: 2px 12px;
    min-height: calc(32px - 8px);
  }

  &.size__small .ui-tag-dropdown__input-wrapper {
    //min-height: calc(24px - 8px);
    &.emptyDropdown {
      height: 24px;
    }
    .ui-tag-dropdown__placeholder {
      font-size: 12px;
    }
    padding: 2px 8px;
    min-height: calc(42px - 8px);
  }
}

.ui-tag-dropdown__input-tag {
  display: flex;
  align-items: center;
  background: #e1e7ec;
  white-space: nowrap;
  border-radius: 4px;
  margin-right: 4px;
  margin-top: 4px;
  margin-bottom: 4px;
  padding: 0 8px;
  &.dark_mode {
    background: var(--dark-input-background-color);
    color: #cbd5e1;
  }
}

.ui-tag-dropdown__wrapper {
  &.size__massive .ui-tag-dropdown__input-tag,
  &.size__huge .ui-tag-dropdown__input-tag,
  &.size__xlarge .ui-tag-dropdown__input-tag,
  &.size__large .ui-tag-dropdown__input-tag {
    height: 24px;
  }

  &.size__medium .ui-tag-dropdown__input-tag {
    height: 20px;
  }

  &.size__small .ui-tag-dropdown__input-tag {
    height: 16px;
  }
}

.ui-tag-dropdown__close-icon {
  height: 16px;
  width: 16px;
  margin-left: 12px;
  cursor: pointer;
}

.ui-tag-dropdown__input-tag-text {
  font-size: 12px;
  margin-top: 0;
  margin-bottom: 0;
}

.ui-tag-dropdown__dropdown__header {
  box-shadow: inset 0px -1px 0px #e1e7ec;
  &.dark_mode {
    box-shadow: none;
    border-bottom: 1px solid var(--dark-input-border-color);
  }
}

.ui-tag-dropdown__dropdown__options {
  max-height: 250px;
  overflow-y: auto;
}

.ui-tag-dropdown__dropdown {
  border-radius: 6px;
  background: #fff;
  border: 1px solid #e1e7ec;
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  &.dark_mode {
    background: var(--dark-input-background-color);
    border-color: var(--dark-input-border-color);
  }
}

.ui-tag-dropdown__dropdown__option {
  padding: 8px 16px;
  &.dropdownMode {
    &:hover,
    &:active,
    &.selected {
      background: #f2fafc;
      color: #0db9e9;
      position: relative;
      &.dark_mode {
        background: #041d25;
        color: #0db9e9;
      }
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0.5px;
        width: 2px;
        height: 100%;
        border-radius: 0 2px 2px 0;
        background: #0db9e9;
        &.dark_mode {
          background: (var--dark-primary-action-color);
        }
      }
    }
  }
  &.dark_mode {
    color: #94a3b8;
    border-left: 2px solid transparent;
    &:hover,
    &.selected {
      background: #041d25;
      border-left: 2px solid var(--dark-primary-action-color);
    }
  }
}

.ui-tag-dropdown__loader {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
