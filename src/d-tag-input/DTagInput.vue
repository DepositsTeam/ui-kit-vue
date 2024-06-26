<template>
  <d-box class="ui-tag-input__wrapper" :class="`size__${computedInputSize}`">
    <slot name="label">
      <d-label
        v-if="label"
        :label-class="labelClass"
        :html-for="computedID"
        :label-font-face="labelFontFace"
      >
        {{ label }}
      </d-label>
    </slot>

    <d-box
      class="ui-tag-input__input-wrapper"
      :class="{
        focus: focused,
        hasError: !!errorMessage || !!internalErrorMessage,
        pill,
      }"
    >
      <d-box
        is="div"
        v-for="(tag, index) in inputTags"
        class="ui-tag-input__input-tag"
        :key="`ui-tag-input${keyGen()}_${index}`"
        :class="{ duplicateTag: duplicateTagIndices.includes(index) }"
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
        @focus="handleFocus"
        @blur="handleBlur"
        v-model="input"
        @paste="(e) => handlePaste(e)"
        :size="computedInputSize"
        :id="computedID"
      />
    </d-box>
    <error-message
      v-if="computedErrorMessage"
      :error-message="computedErrorMessage"
    />
  </d-box>
</template>

<script setup>
import { CloseIcon, DBox, DText, DTextfield } from "../main";
import keyGen from "@/utils/keyGen";
import { computed, nextTick, onBeforeMount, ref, watch } from "vue";
import inputProps from "@/utils/props/inputProps";
import { useInputSize } from "@/utils/composables/useInputSize";
import uniqueRandomString from "@/utils/uniqueRandomString";
import ErrorMessage from "@/components/forms/DErrorMessage.vue";
import DLabel from "@/components/forms/DLabel.vue";

const _tagDelimiterKey = {
  space: " ",
  enter: "Enter",
  comma: ",",
};

const focused = ref(false);

const handleFocus = (e) => {
  e.currentTarget.select();
  focused.value = true;
};

const handleBlur = () => {
  focused.value = false;
};

const emit = defineEmits([
  "tag-added",
  "tag-deleted",
  "text-changed",
  "tag-changed",
  "update:modelValue",
]);

const props = defineProps({
  ...inputProps,
  modelValue: {
    type: Array,
    default: () => [],
  },
  tagDelimiterKey: {
    type: String,
    validator: (value) => ["enter", "comma", "space"].includes(value),
    default: "enter",
  },
  pill: {
    type: Boolean,
    default: false,
  },
  // TODO Make input, tags and the tag names customizable
});

const { computedInputSize } = useInputSize(props);

const computedID = computed(() => (props.id ? props.id : uniqueRandomString()));

const internalErrorMessage = ref(null);

const computedErrorMessage = computed(() =>
  internalErrorMessage.value ? internalErrorMessage.value : props.errorMessage
);

const input = ref("");
const inputTags = ref([]);
const isKeyReleased = ref("");
const duplicateTagIndices = ref([]);
const duplicateTags = ref([]);

// TODO -> Make this component work with v-model

onBeforeMount(() => {
  if (props.modelValue.length) {
    inputTags.value = props.modelValue;
  }
});

watch(input, () => {
  emit("text-changed", input.value);
});

const setIsKeyReleased = (value) => {
  isKeyReleased.value = value;
};

const handlePaste = (e) => {
  e.preventDefault();
  const copiedText = (e.clipboardData || window.clipboardData).getData("text");
  let oldTagArray = inputTags.value;
  let tagArraySet = new Set(
    copiedText
      .split(_tagDelimiterKey[props.tagDelimiterKey])
      .map((tag) => tag.trim())
  );
  const tagsArray = Array.from(tagArraySet).filter((tag) => tag.length);

  const tempDuplicateTags = [];
  const tempDuplicateTagIndices = [];

  tagsArray.forEach((tag) => {
    if (inputTags.value.includes(tag)) {
      tempDuplicateTags.push(tag);
      tempDuplicateTagIndices.push(inputTags.value.indexOf(tag));
    }
  });

  inputTags.value = Array.from(new Set([...inputTags.value, ...tagsArray]));
  duplicateTags.value = [...tempDuplicateTags];
  duplicateTagIndices.value = [...tempDuplicateTagIndices];
  nextTick(() => {
    emit("tag-added", [...tagsArray], oldTagArray);
    emit("tag-changed", oldTagArray, inputTags.value);
    emit("update:modelValue", inputTags.value);
  });
  input.value = "";
};

const handleDeleteTag = (index) => {
  if (duplicateTagIndices.value.length) {
    if (duplicateTagIndices.value.find(index)) {
      duplicateTags.value.splice(
        duplicateTags.value.indexOf(inputTags.value[index]),
        1
      );
      duplicateTagIndices.value.splice(
        duplicateTagIndices.value.indexOf[index],
        1
      );
    }
  }
  const deletedTag = inputTags.value[index];
  let oldTagArray = inputTags.value;
  inputTags.value = inputTags.value.filter((tag, i) => i !== index);

  nextTick(() => {
    emit("tag-deleted", deletedTag, inputTags.value);
    emit("tag-changed", oldTagArray, inputTags.value);
    emit("update:modelValue", inputTags.value);
  });
};

const handleKeyDown = (event) => {
  const newTag = input.value.trim();
  let oldTagArray = inputTags.value;
  const key = _tagDelimiterKey[props.tagDelimiterKey];
  duplicateTags.value = [];
  duplicateTagIndices.value = [];
  if (event.key === key && newTag.length) {
    event.preventDefault();
    if (inputTags.value.includes(newTag)) {
      duplicateTags.value = [newTag];
      duplicateTagIndices.value = [inputTags.value.indexOf(newTag)];
      return;
    }
    inputTags.value.push(newTag);
    nextTick(() => {
      emit("tag-added", newTag, oldTagArray);
      emit("tag-changed", oldTagArray, inputTags.value);
      emit("update:modelValue", inputTags.value);
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
      emit("update:modelValue", inputTags.value);
    });
  }
  isKeyReleased.value = false;
};

watch(duplicateTags, (value) => {
  if (value.length) {
    internalErrorMessage.value = `The tags ${value} already exist`;
    console.log("I got here");
  } else {
    internalErrorMessage.value = "";
  }
});
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

  &.pill {
    border-radius: 980px;
  }

  &.hasError {
    background: #fff0f2;
    border-color: #d62f4b;
  }

  &.dark_mode {
    background: var(--dark-input-background-color);
    border-color: var(--dark-input-border-color);
  }

  &.focus {
    border-color: var(--light-primary-action-color);
    box-shadow: 0 0 0 3px var(--light-primary-action-box-shadow-color);
    outline: none;

    &.dark_mode {
      border-color: var(--dark-primary-action-color);
      box-shadow: 0 0 0 3px var(--dark-primary-action-box-shadow-color);
    }
  }

  &.dark_mode {
    background: var(--dark-input-background-color);
    border-color: var(--dark-input-border-color);
  }

  /* overflow: scroll; */
  /* width: 100%; */
}

.ui-tag-input__input {
  /* width: 100%; */
  min-width: 80px;
  border: none;
  outline: none;
  display: flex;

  /* flex: 1; */
}

.ui-tag-input__wrapper {
  box-sizing: border-box;

  &.size__massive .ui-tag-input__input-wrapper {
    //min-height: calc(64px - 16px);
    padding: 2px 16px;
  }

  &.size__huge .ui-tag-input__input-wrapper {
    //min-height: calc(56px - 16px);
    padding: 2px 16px;
  }

  &.size__xlarge .ui-tag-input__input-wrapper {
    //min-height: calc(48px - 16px);
    padding: 2px 12px;
  }

  &.size__large .ui-tag-input__input-wrapper {
    //min-height: calc(40px - 16px);
    padding: 2px 12px;
  }

  &.size__medium .ui-tag-input__input-wrapper {
    //min-height: calc(32px - 16px);
    padding: 2px 12px;
  }

  &.size__small .ui-tag-input__input-wrapper {
    //min-height: calc(24px - 8px);
    padding: 2px 8px;
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
  margin-top: 4px;
  margin-bottom: 4px;

  &.duplicateTag {
    background: var(--light-danger-500);
    color: white;
  }

  &.dark_mode {
    background: var(--dark-input-background-color);
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
