<template>
  <d-box class="ui-filter-dropdown">
    <d-button :size="size" drop-down @click="toggleShowOptions">
      <template #leftIcon>
        <funnel-icon />
      </template>
      {{ selectedOption.text }}
    </d-button>

    <d-box v-show="showOptions" class="ui-filter-dropdown__options">
      <d-box
        v-for="(option, index) in computedOptions"
        :key="`option-${index}`"
        class="ui-filter-dropdown__option"
        :class="{ active: selectedOption.value === option.value }"
        @click="handleOptionClick(option)"
      >
        <d-box class="ui-dropdown__icon">
          <d-radio ringed :checked="selectedOption.value === option.value" />
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
import {
  DBox,
  FunnelIcon,
  ChevronFilledDownIcon,
  DText,
  DLoader,
  DRadio,
  DAutoLayout,
  DButton,
} from "../main";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useDropdown } from "../utils/composables/useDropdown";

const emit = defineEmits(["update:modelValue"]);

const showOptions = ref(false);

const mounted = ref(false);

const selectedOption = ref({});

const handleOptionClick = (option) => {
  emitOption(option);
  showOptions.value = false;
};

const toggleShowOptions = () => (showOptions.value = !showOptions.value);

const props = defineProps({
  minWidth: {
    type: String,
    default: "200px",
  },
  optionTitle: {
    type: String,
    default: "text",
  },
  optionValue: {
    type: String,
    default: "value",
  },
  options: {
    type: Array,
    default: () => ["Item 1", "Item 2", "item 3"],
  },
  returnFullObject: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
  },
  fetching: {
    type: Boolean,
  },
  size: {
    type: String,
    validator: (value) =>
      ["small", "medium", "large", "xlarge", "huge", "massive"].includes(value),
    default: "huge",
  },
});

const handleLeave = (e) => {
  if (!e.target.closest(".ui-filter-dropdown")) {
    showOptions.value = false;
  }
};

const emitOption = (option) => {
  if (props.returnFullObject) {
    emit("update:modelValue", option.originalOption);
  } else {
    emit("update:modelValue", option.value);
  }
};

onMounted(() => {
  window.addEventListener("click", handleLeave);
  const realValue =
    typeof props.modelValue === "object"
      ? props.modelValue[props.optionValue]
      : props.modelValue;
  const matched = [...computedOptions.value].filter(
    (option) => option.value === realValue
  );
  if (matched.length) {
    selectedOption.value = matched[0];
    emitOption(matched[0]);
  } else {
    selectedOption.value = computedOptions.value[0];
    emitOption(computedOptions.value[0]);
  }
  mounted.value = true;
});

onUnmounted(() => {
  window.removeEventListener("click", handleLeave);
  mounted.value = false;
});

const { computedOptions } = useDropdown(props);

watch(
  () => props.modelValue,
  (newValue) => {
    const modelValue =
      typeof newValue === "string" ? newValue : newValue[props.optionValue];
    const matched = [...computedOptions.value].filter(
      (option) => option.value === modelValue
    );
    if (matched.length) {
      selectedOption.value = matched[0];
    } else {
      selectedOption.value = computedOptions.value[0];
    }
  }
);
</script>

<style lang="scss">
.ui-filter-dropdown {
  position: relative;
  display: inline-block;
  .ui-filter__button {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    background: #f5f8fa;
    border-radius: 6px;
    border: 1px solid #e1e7ec;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    padding: 11px 24px;

    &:hover {
      background: #e1e7ec;
    }
  }
  .ui-filter-dropdown__options {
    width: 100%;
    background: white;
    border-radius: 6px;
    border: 1px solid #e1e7ec;
    max-height: 400px;
    overflow-y: auto;
    position: absolute;
    z-index: 99;
    top: 100%;
  }
  .ui-filter-dropdown__option {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 16px 8px;
    cursor: pointer;
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
</style>
