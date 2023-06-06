<script setup>
import {
  DBox,
  DText,
  DAutoLayout,
  DRadio,
  ChevronFilledDownIcon,
} from "../main";
import { useDropdown } from "../utils/composables/useDropdown";
import { computed, onBeforeMount, onMounted, ref } from "vue";
import inputProps from "../utils/inputProps";

const props = defineProps({
  ...inputProps,
  label: {
    type: String,
  },
  labelClass: {
    type: String,
  },
  labelFontFace: {
    type: String,
    default: "heroNew",
  },
  modelValue: {
    default: false,
  },
  value: {
    default: false,
  },
  options: {
    type: Array,
    default: () => [
      {
        title: "Wells Fargo",
        description: "Checking **7698",
        otherValue: "othervalue",
        icon: "https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/wells-fargo.png",
      },
      {
        title: "Bank of America",
        description: "Checking **1243",
        otherValue: "othervalue",
        icon: "https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/bank-of-america.png",
      },
      {
        title: "Citibank",
        description: "Checking **8350",
        otherValue: "othervalue",
        icon: "https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/citi-bank.png",
      },
    ],
  },
  optionTitle: {
    type: String,
    default: "title",
  },
  optionDescription: {
    type: String,
    default: "description",
  },
  optionIcon: {
    type: String,
    default: "icon",
  },
  optionValue: {
    type: String,
    default: "value",
  },
  returnFullObject: {
    type: Boolean,
    default: false,
  },
  changeButtonText: {
    type: String,
    default: "Change",
  },
  radioValue: {
    default: false,
  },
  borderedIcon: {
    type: Boolean,
  },
});

const { computedOptions } = useDropdown(props);

const emit = defineEmits(["update:radioValue", "update:modelValue"]);

const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
});

const isChecked = computed(() => {
  if (mounted.value) {
    return props.radioValue === props.value;
  }
  return false;
});

const showOptions = ref(false);

const triggerDropdown = () => {
  showOptions.value = !showOptions.value;
};

const selectedOption = ref(null);

const selectOption = (option) => {
  selectedOption.value = option;
  showOptions.value = false;
  emit("update:modelValue", selectedOption.value.originalOption);
  // Emit this value
};

onBeforeMount(() => {
  if (props.modelValue) {
    let selected;
    if (typeof props.modelValue === "string") {
      selected = computedOptions.value.find(
        (option) => option.value === props.modelValue
      );
    } else {
      let value = props.modelValue[props.optionValue]
        ? props.modelValue[props.optionValue]
        : props.modelValue[props.optionTitle];
      selected = computedOptions.value.find((option) => {
        return option.value === value;
      });
    }
    if (!selected) {
      selected = computedOptions.value[0];
    }
    selectedOption.value = selected;
    emit("update:modelValue", selected.originalOption);
  } else {
    selectedOption.value = computedOptions.value[0];
    emit("update:modelValue", selectedOption.value.originalOption);
    // TODO Emit this value
  }
});

const handleChange = () => {
  console.log(props.value, props.radioValue);
  emit("update:radioValue", props.value);
};
</script>

<template>
  <d-box class="d-radio-card-select__wrapper">
    <d-text
      v-if="label"
      margin-top="0px"
      class="ui-text-field__label"
      :class="labelClass"
      scale="subhead"
      :font-face="labelFontFace"
    >
      {{ label }}
    </d-text>
    <d-box class="d-radio-card-select" cursor="pointer">
      <d-auto-layout justify-content="space-between">
        <d-auto-layout>
          <d-box
            is="img"
            v-if="selectedOption.icon"
            :src="selectedOption.icon"
            :alt="selectedOption.text"
          />

          <d-auto-layout direction="vertical" item-spacing="2px">
            <d-text my0 scale="subhead" font-weight="600" font-face="heroNew">{{
              selectedOption.text
            }}</d-text>
            <d-text my0 font-size="12px" color="#8C97A7">{{
              selectedOption.description
            }}</d-text>
          </d-auto-layout>
        </d-auto-layout>
        <d-auto-layout>
          <d-box
            class="d-radio-card-select__change-button"
            v-if="computedOptions.length > 1"
            @click="triggerDropdown"
          >
            <d-text color="#6D7786" my0 font-size="12px" font-face="heroNew">{{
              changeButtonText
            }}</d-text>
            <chevron-filled-down-icon smart-color="#6D7786" />
          </d-box>
          <d-box @click="handleChange">
            <d-radio
              ringed
              ring-size="24px"
              :checked="isChecked"
              ring-thickness="8px"
            />
          </d-box>
        </d-auto-layout>
      </d-auto-layout>
      <d-box class="d-radio-card-select__options" v-if="showOptions">
        <d-box
          class="d-radio-card-select__option"
          v-for="option in computedOptions"
          :key="option.unique_identifier_for_dropdown"
          @click="selectOption(option)"
        >
          <d-auto-layout justify-content="space-between">
            <d-auto-layout>
              <d-box
                is="img"
                v-if="option.icon"
                :src="option.icon"
                :alt="option.text"
              />
              <d-auto-layout direction="vertical" item-spacing="2px">
                <d-text
                  my0
                  scale="subhead"
                  font-weight="600"
                  font-face="heroNew"
                  >{{ option.text }}</d-text
                >
                <d-text my0 font-size="12px" color="#8C97A7">{{
                  option.description
                }}</d-text>
              </d-auto-layout>
            </d-auto-layout>
            <d-auto-layout>
              <d-radio
                :checked="isChecked"
                ringed
                ring-size="24px"
                ring-thickness="8px"
              />
            </d-auto-layout>
          </d-auto-layout>
        </d-box>
      </d-box>
    </d-box>
  </d-box>
</template>

<style scoped lang="scss">
.d-radio-card-select__wrapper {
  .d-radio-card-select {
    border: 1px solid #ced6de;
    padding: 14px 16px;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(63, 63, 68, 0.1);
    position: relative;
    .d-radio-card-select__options {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      width: 100%;
      padding: 14px 16px;
      border: 0.5px solid #f5f8fa;
      box-shadow: 0 6px 14px rgba(10, 52, 64, 0.12);
      display: flex;
      flex-direction: column;
      gap: 16px;
      z-index: 9;
      background: white;
    }
    .d-radio-card-select__change-button {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      background: #f4f6f8;
      padding: 7px 16px;
      border-radius: 30px;
    }
  }
}
</style>
