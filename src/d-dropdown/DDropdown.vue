<template>
  <d-box class="ui-dropdown">
    <d-textfield
      :label="label"
      :font-face="fontFace"
      :size="computedInputSize"
      :error-message="errorMessage"
      :show-error="showError"
      :only-numbers="onlyNumbers"
      :wrapper-class="wrapperClass"
      :invisible="invisible"
      :label-class="labelClass"
      :disabled="disabled"
      :label-font-face="labelFontFace"
      :model-value="inputValue"
      @update:model-value="debouncedInput"
      @focus="handleFocus"
      @keydown="handleKeyDown"
      @blur="handleBlur"
      drop-down
      @right-icon-clicked="toggleDropdown"
      :placeholder="placeholder"
      :pill="pill"
      :readonly="readonly"
      :name="name"
      ref="inputField"
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
    <d-box>
      <dynamic-scroller
        :min-item-size="54"
        :items="visibleOptions"
        key-field="unique_identifier_for_dropdown"
        v-show="showOptions"
        class="ui-dropdown__options"
        ref="dropdownOptions"
      >
        <template v-slot="{ item: option, index: scrollerIndex, active }">
          <dynamic-scroller-item
            :data-index="scrollerIndex"
            :active="active"
            :item="option"
          >
            <d-box
              class="ui-dropdown__option"
              @click="handleClickedOption(option)"
              :class="{
                selected:
                  option.unique_identifier_for_dropdown === selectedID ||
                  option.unique_identifier_for_dropdown === activeID,
              }"
              @mouseenter="
                updateActiveID(option.unique_identifier_for_dropdown)
              "
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
          </dynamic-scroller-item>
        </template>
      </dynamic-scroller>

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
  watchEffect,
} from "vue";
import { useInputSize } from "../utils/composables/useInputSize";
import { useDropdown } from "../utils/composables/useDropdown";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import { DynamicScrollerItem, DynamicScroller } from "vue-virtual-scroller";
import debounce from "lodash.debounce";

const emit = defineEmits(["update:modelValue", "computedOptions"]);
const mounted = ref(false);
const dropdownOptions = ref(null);
const inputField = ref(null);

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
  disableDropdown: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  ...inputProps,
});

const { computedInputSize } = useInputSize(props);
const { computedOptions, findOptionIndexByUUID } = useDropdown(props);
const showAllValues = ref(true);
const selectedID = ref(null);
const activeID = ref(null);

onBeforeMount(() => {
  const realValue =
    typeof props.modelValue === "object"
      ? props.modelValue[props.optionValue]
      : props.modelValue;
  const matched = computedOptions.value.filter(
    (option) => option.value === realValue,
  );
  if (matched.length) {
    const matchedOption = matched[0];
    inputValue.value = matchedOption.text;
    emitOption({
      text: matchedOption[props.optionTitle],
      value: matchedOption[props.optionValue],
      originalOption: matchedOption.originalOption,
    });
    activeID.value = matchedOption.unique_identifier_for_dropdown;
    console.log(
      computedOptions.value,
      matchedOption.unique_identifier_for_dropdown,
    );
  } else {
    inputValue.value = "";
    activeID.value = computedOptions.value[0]?.unique_identifier_for_dropdown;
    console.log(
      computedOptions.value,
      computedOptions.value[0]?.unique_identifier_for_dropdown,
    );
  }
});

watch([selectedID, activeID], () => {
  console.log("Selected ID is: ", selectedID.value);
  console.log("Active ID is: ", activeID.value);
});

onMounted(() => {
  window.addEventListener("click", handleLeave);
  mounted.value = true;
});

onUnmounted(() => {
  window.removeEventListener("click", handleLeave);
  mounted.value = false;
});

watchEffect(() => {
  emit("computedOptions", computedOptions);
});

watch(
  () => props.modelValue,
  (val) => {
    const realValue =
      typeof val === "object" && val !== null ? val[props.optionValue] : val;
    const matched = computedOptions.value.filter(
      (option) => option.value === realValue,
    );
    if (matched.length) {
      inputValue.value = matched[0].text;
      selectedOption.value = matched[0];
      selectedID.value = matched[0].unique_identifier_for_dropdown;
    } else {
      inputValue.value = "";
      selectedID.value =
        computedOptions.value[0].unique_identifier_for_dropdown;
    }
  },
);

const inputValue = ref("");
const showOptions = ref(false);
const selectedIndex = ref(-1);
const selectedOption = ref(null);

const debouncedInput = debounce((value) => {
  inputValue.value = value;
}, 300);

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
    return computedOptions.value.filter((option) =>
      option.text.toLowerCase().includes(inputValue.value.toLowerCase()),
    );
  } else return computedOptions.value;
});

const handleClickedOption = async (option) => {
  if (option) {
    inputValue.value = option.text;
    emitOption(option);
    selectedOption.value = option;
    selectedID.value = option.unique_identifier_for_dropdown;
    activeID.value = option.unique_identifier_for_dropdown;
    await nextTick();
    showOptions.value = false;
    showAllValues.value = true;
  }
};

const handleFocus = async () => {
  if (!props.disableDropdown && !showOptions.value) {
    showOptions.value = true;
    await nextTick();
    if (selectedID.value) {
      console.log("selected index:", findOptionIndexByUUID(selectedID.value));
      dropdownOptions.value.scrollToItem(
        findOptionIndexByUUID(selectedID.value),
      );
    }
  }
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

const updateActiveID = (id) => (activeID.value = id);

const handleKeyDown = async (e) => {
  const defaultID = visibleOptions.value[0].unique_identifier_for_dropdown;
  if (!activeID.value) {
    activeID.value = defaultID;
    await nextTick();
  }
  const currentIndex = findOptionIndexByUUID(activeID.value);

  console.log(dropdownOptions.value.$el.scrollTop, dropdownOptions.value);
  switch (e.key) {
    case "ArrowDown":
      if (currentIndex + 1 <= visibleOptions.value.length - 1) {
        updateSelectedIndex(currentIndex + 1);
        activeID.value =
          visibleOptions.value[currentIndex + 1].unique_identifier_for_dropdown;
        dropdownOptions.value.scrollToItem(currentIndex + 1);
      } else {
        updateSelectedIndex(0);
        activeID.value = defaultID;
        dropdownOptions.value.scrollToItem(0);
      }
      break;
    case "ArrowUp":
      if (currentIndex - 1 >= 0) {
        updateSelectedIndex(selectedIndex.value - 1);
        activeID.value =
          visibleOptions.value[currentIndex - 1].unique_identifier_for_dropdown;
        dropdownOptions.value.scrollToItem(currentIndex - 1);
      } else {
        updateSelectedIndex(visibleOptions.value.length - 1);
        activeID.value =
          visibleOptions.value[
            visibleOptions.value.length - 1
          ].unique_identifier_for_dropdown;
        dropdownOptions.value.scrollToItem(visibleOptions.value.length - 1);
      }
      break;
    case "Enter":
      handleClickedOption(visibleOptions.value[selectedIndex.value]);
      inputField.value.$el.getElementsByTagName("input")[0].blur();
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
  .dark_mode .ui-dropdown__options {
    background: var(--dark-input-background-color);
    border-color: var(--dark-input-background-color);
  }
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
      &.selected,
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
