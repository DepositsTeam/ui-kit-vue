<template>
  <d-box
    :style="{ ...d__theme }"
    class="ui-tag-input__wrapper"
    :class="`size__${size}`"
  >
    <d-box is="label">
      <d-text
        :class="labelClass"
        :font-face="labelFontFace"
        class="ui-tag-input__label"
        scale="subhead"
      >
        {{ label }}
      </d-text>
    </d-box>
    <d-box class="ui-tag-input__input-wrapper">
      <d-box
        is="div"
        v-for="(tag, index) in inputTags"
        class="ui-tag-input__input-tag"
        :key="`ui-tag-input${keyGen()}_${index}`"
      >
        <d-text
          class="ui-tag-input__input-tag-text"
          scale="subhead"
          font-face="circularSTD"
        >
          {{ tag }}
        </d-text>
        <CloseIcon
          @click="handleDeleteTag(index)"
          class="ui-tag-input__close-icon"
          height="16px"
          width="16px"
        />
      </d-box>
      <d-textfield
        invisible
        class="ui-tag-input__input"
        v-bind="$attrs"
        @keydown="handleKeyDown"
        @keyup="() => setIsKeyReleased(true)"
        autoFocus
        @focus="(e) => e.currentTarget.select()"
        v-model="input"
        :size="size"
      />
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText, DTextfield, CloseIcon } from "../main";
import keyGen from "../utils/keyGen";
import { inject, ref, nextTick, onMounted } from "vue";
import { defaultThemeVars } from "../providers/default-theme";
import inputProps from "../utils/inputProps";
const _tagDelimiterKey = {
  space: " ",
  enter: "Enter",
  comma: ",",
};

const d__theme = inject("d__theme", defaultThemeVars);

const emit = defineEmits([
  "tag-added",
  "tag-deleted",
  "text-changed",
  "tag-changed",
  "update:modelValue",
]);

const props = defineProps({
  ...inputProps,
  values: {
    type: Array,
    default: () => ["Option 1", "Option 2", "Option 3"],
  },
  tagDelimiterKey: {
    type: String,
    validator: (value) => ["enter", "comma", "space"].includes(value),
    default: "enter",
  },
  // TODO Make input, tags and the tag names customizable
});

const input = ref("");
const inputTags = ref([]);
const isKeyReleased = ref("");

// TODO -> Make this component work with v-model

const setIsKeyReleased = (value) => {
  isKeyReleased.value = value;
};

const handleDeleteTag = (index) => {
  const deletedTag = inputTags.value[index];
  let oldTagArray = inputTags.value;
  inputTags.value = inputTags.value.filter((tag, i) => i !== index);
  nextTick(() => {
    emit("tag-deleted", deletedTag, inputTags.value);
    emit("tag-changed", oldTagArray, inputTags.value);
  });
};

const handleKeyDown = (event) => {
  const newTag = input.value.trim();
  let oldTagArray = inputTags.value;
  const key = _tagDelimiterKey[props.tagDelimiterKey];
  if (event.key === key && newTag.length && !inputTags.value.includes(newTag)) {
    event.preventDefault();
    inputTags.value.push(newTag);
    nextTick(() => {
      emit("tag-added", newTag, oldTagArray);
      emit("tag-changed", oldTagArray, inputTags.value);
    });
    input.value = "";
  }

  if (
    event.key === "Backspace" &&
    !input.value.length &&
    inputTags.value.length &&
    isKeyReleased.value
  ) {
    event.preventDefault();
    const tagsArray = [...inputTags.value];
    const deletedTag = tagsArray.pop();
    inputTags.value = tagsArray;
    input.value = deletedTag;

    nextTick(() => {
      emit("tag-deleted", deletedTag, inputTags.value);
      emit("tag-changed", oldTagArray, inputTags.value);
    });
  }
  isKeyReleased.value = false;
};
</script>

<style lang="scss" scoped>
.ui-tag-input__input-wrapper {
  border: 1px solid #ced6de;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(63, 63, 68, 0.1);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: #fff;
  &.dark_mode {
    background: var(--darkInputBackgroundColor);
    border-color: var(--darkInputBorderColor);
  }

  /* overflow: scroll; */
  /* width: 100%; */
}

.ui-tag-input__input {
  /* width: 100%; */
  min-width: 50%;
  border: none;
  outline: none;
  display: flex;

  /* flex: 1; */
}

.ui-tag-input__wrapper {
  &.size__massive .ui-tag-input__input-wrapper {
    min-height: 64px;
    padding: 0 16px;
  }

  &.size__huge .ui-tag-input__input-wrapper {
    min-height: 56px;
    padding: 0 16px;
  }

  &.size__xlarge .ui-tag-input__input-wrapper {
    min-height: 48px;
    padding: 0 12px;
  }

  &.size__large .ui-tag-input__input-wrapper {
    min-height: 40px;
    padding: 0 12px;
  }

  &.size__medium .ui-tag-input__input-wrapper {
    min-height: 32px;
    padding: 0 12px;
  }

  &.size__small .ui-tag-input__input-wrapper {
    min-height: 24px;
    padding: 0 8px;
  }
}

.ui-tag-input__input-tag {
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

.ui-tag-input__wrapper {
  &.size__massive .ui-tag-input__input-tag,
  &.size__huge .ui-tag-input__input-tag,
  &.size__xlarge .ui-tag-input__input-tag,
  &.size__large .ui-tag-input__input-tag {
    height: 24px;
  }

  &.size__medium .ui-tag-input__input-tag {
    height: 20px;
  }

  &.size__small .ui-tag-input__input-tag {
    height: 16px;
  }
}

.ui-tag-input__close-icon {
  height: 16px;
  width: 16px;
  margin-left: 12px;
  cursor: pointer;
}

.ui-tag-input__input-tag-text {
  font-size: 12px;
}

/* .ui-tag-input__wrapper.size__massive .ui-tag-input__input-wrapper{
	height: 64px;
	padding: 0 16px;
} */

/* .ui-tag-input__input-wrapper{
	border: 1px solid red;
	display: flex;
	align-items: center;
}

.ui-tag-input__input{
    border: 2px solid green;
    outline: none;
	flex: 1;
	display: flex;
}

.ui-tag-input__input-wrapper.size__massive {
	height: 64px;
	padding: 0 16px;
}


.ui-tag-input__input-tag{
	display: flex;
	align-items: center;
	background: #e1e7ec;
	white-space: nowrap;
	border-radius: 4px;
	margin-right: 4px;
	padding-left: 8px;

}

.ui-tag-input__input-tag .ui-tag-input__input__tag-item{
	fontSize: 12px;
}


 */
</style>
