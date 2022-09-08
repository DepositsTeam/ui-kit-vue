<template>
  <d-box
    :style="{ ...___theme }"
    class="ui-tag-dropdown__wrapper"
    :class="`size__${size}`"
  >
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
    <d-box class="ui-tag-dropdown__input-wrapper" @click="toggleOptions">
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
        <d-textfield
          readonly
          invisible
          class="ui-tag-dropdown__input"
          autoFocus
          :size="size"
        />
      </d-box>
      <d-box class="ui-tag-dropdown__input-wrapper__right">
        <d-box class="ui-tag-dropdown__input-wrapper__right__icon-wrapper">
          <chevron-filled-down-icon
            class="ui-tag-dropdown__input-wrapper__right__icon-wrapper"
          />
        </d-box>
      </d-box>
    </d-box>
    <d-box class="ui-tag-dropdown__dropdown" v-if="showOptions">
      <d-box class="ui-tag-dropdown__dropdown__header">
        <d-textfield
          ref="validInput"
          invisible
          search
          v-model="inputValue"
          :left-icon="SearchIcon"
          :placeholder="placeholder"
        />
      </d-box>

      <d-box class="ui-tag-dropdown__dropdown__options">
        <d-box
          class="ui-tag-dropdown__dropdown__option"
          v-for="(option, index) in computedOptions"
          :key="`option-${index}`"
          :class="{
            selected: selectedOptions.includes(
              typeof option === 'string' ? option : option.value
            ),
          }"
        >
          <d-checkbox
            :value="typeof option === 'string' ? option : option.value"
            v-model="selectedOptions"
          >
            <d-text
              dark-class=""
              margin-y="0"
              font-face="circularSTD"
              scale="subhead"
              >{{ typeof option === "string" ? option : option.text }}</d-text
            >
          </d-checkbox>
        </d-box>
      </d-box>
    </d-box>
  </d-box>
</template>

<script setup>
import {
  DBox,
  DText,
  DTextfield,
  CloseIcon,
  ChevronFilledDownIcon,
  DCheckbox,
  SearchIcon,
} from "../main";
import keyGen from "../utils/keyGen";
import {
  inject,
  ref,
  nextTick,
  onMounted,
  onUnmounted,
  computed,
  watch,
} from "vue";
import { defaultThemeVars } from "../providers/default-theme";
import inputProps from "../utils/inputProps";

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
});

const emit = defineEmits(["update:modelValue"]);

const inputValue = ref("");
const showOptions = ref(false);
const validInput = ref(null);

watch(props.modelValue, (val) => {
  emit("update:modelValue", val);
});

const computedOptions = computed(() => {
  return props.options.filter((option) => {
    if (typeof option === "string") {
      return option.toLowerCase().includes(inputValue.value.toLowerCase());
    } else {
      return option.text.toLowerCase().includes(inputValue.value.toLowerCase());
    }
  });
});

const selectedOptions = computed({
  get() {
    return [...props.modelValue];
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const toggleOptions = async () => {
  showOptions.value = !showOptions.value;
  await nextTick();
  if (showOptions.value) {
    validInput.value.$el.getElementsByTagName("input")[0].focus();
  }
};

const hideOptionsOnOutsideClick = (e) => {
  if (!e.target.closest(".ui-tag-dropdown__wrapper")) {
    showOptions.value = false;
  }
};

const inputTags = computed(() => {
  return [...props.options].filter((option) => {
    if (typeof option === "string") {
      return props.modelValue.includes(option);
    } else {
      return props.modelValue === "" || props.modelValue
        ? props.modelValue.includes(option.value)
        : false;
    }
  });
});

const handleDeleteTag = (currentTag) => {
  // const deletedTag = inputTags.value[index];
  // let oldTagArray = inputTags.value;
  emit(
    "update:modelValue",
    [...props.modelValue].filter((tag) => {
      return typeof currentTag === "string"
        ? tag !== currentTag
        : tag !== currentTag.value;
    })
  );
};

onMounted(() => {
  window.addEventListener("click", hideOptionsOnOutsideClick);
});

onUnmounted(() => {
  window.removeEventListener("click", hideOptionsOnOutsideClick);
});

const ___theme = inject("___theme", defaultThemeVars);
</script>

<style lang="scss">
.ui-tag-dropdown__input-wrapper {
  border: 1px solid #ced6de;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(63, 63, 68, 0.1);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: #fff;
  justify-content: space-between;
  &.dark_mode {
    background: var(--darkInputBackgroundColor);
    border-color: var(--darkInputBorderColor);
  }
  .ui-tag-dropdown__input-wrapper__left {
    display: flex;
    align-items: center;
  }
  .ui-tag-dropdown__input-wrapper__right__icon-wrapper {
    right: 16px;
    color: #5f6b7a;
    cursor: pointer;
    .ui-tag-dropdown__input-wrapper__right__icon-wrapper {
      cursor: pointer;
    }
  }

  /* overflow: scroll; */
  /* width: 100%; */
}

.ui-tag-dropdown__input {
  /* width: 100%; */
  min-width: 50%;
  border: none;
  outline: none;
  display: flex;

  /* flex: 1; */
}

.ui-tag-dropdown__wrapper {
  &.size__massive .ui-tag-dropdown__input-wrapper {
    min-height: 64px;
    padding: 0 16px;
  }

  &.size__huge .ui-tag-dropdown__input-wrapper {
    min-height: 56px;
    padding: 0 16px;
  }

  &.size__xlarge .ui-tag-dropdown__input-wrapper {
    min-height: 48px;
    padding: 0 12px;
  }

  &.size__large .ui-tag-dropdown__input-wrapper {
    min-height: 40px;
    padding: 0 12px;
  }

  &.size__medium .ui-tag-dropdown__input-wrapper {
    min-height: 32px;
    padding: 0 12px;
  }

  &.size__small .ui-tag-dropdown__input-wrapper {
    min-height: 24px;
    padding: 0 8px;
  }
}

.ui-tag-dropdown__input-tag {
  display: flex;
  align-items: center;
  background: #e1e7ec;
  white-space: nowrap;
  border-radius: 4px;
  margin-right: 4px;
  padding: 0 8px;
  &.dark_mode {
    background: var(--darkInputBackgroundColor);
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
}

.ui-tag-dropdown__dropdown__header {
  box-shadow: inset 0px -1px 0px #e1e7ec;
  &.dark_mode {
    box-shadow: none;
    border-bottom: 1px solid var(--darkInputBorderColor);
  }
}

.ui-tag-dropdown__dropdown {
  border-radius: 6px;
  background: #fff;
  border: 1px solid #e1e7ec;
  &.dark_mode {
    background: var(--darkInputBackgroundColor);
    border-color: var(--darkInputBorderColor);
  }
}

.ui-tag-dropdown__dropdown__option {
  padding: 8px 16px;
  &.dark_mode {
    color: #94a3b8;
    border-left: 2px solid transparent;
    &:hover,
    &.selected {
      background: #041d25;
      border-left: 2px solid var(--darkPrimaryActionColor);
    }
  }
}

/* .ui-tag-dropdown__wrapper.size__massive .ui-tag-dropdown__input-wrapper{
	height: 64px;
	padding: 0 16px;
} */

/* .ui-tag-dropdown__input-wrapper{
	border: 1px solid red;
	display: flex;
	align-items: center;
}

.ui-tag-dropdown__input{
    border: 2px solid green;
    outline: none;
	flex: 1;
	display: flex;
}

.ui-tag-dropdown__input-wrapper.size__massive {
	height: 64px;
	padding: 0 16px;
}


.ui-tag-dropdown__input-tag{
	display: flex;
	align-items: center;
	background: #e1e7ec;
	white-space: nowrap;
	border-radius: 4px;
	margin-right: 4px;
	padding-left: 8px;

}

.ui-tag-dropdown__input-tag .ui-tag-dropdown__input__tag-item{
	fontSize: 12px;
}


 */
</style>
