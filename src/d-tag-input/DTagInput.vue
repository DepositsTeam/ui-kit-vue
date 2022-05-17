<template>
  <d-box
    :style="{ ...theme }"
    class="ui-tag-input__wrapper"
    :class="`size__${size}`"
  >
    <d-box is="label">
      <d-text class="ui-tag-input__label" scale="subhead">
        {{ label }}
      </d-text>
    </d-box>
    <div class="ui-tag-input__input-wrapper">
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
    </div>
  </d-box>
</template>

<script>
import DBox from "../d-box/DBox.vue";
import DText from "../d-text/DText.vue";
import DTextfield from "../d-textfield/DTextfield.vue";
import CloseIcon from "../icons/CloseIcon.vue";
import keyGen from "../utils/keyGen";
import { inject } from "vue";
const _tagDelimiterKey = {
  space: " ",
  enter: "Enter",
  comma: ",",
};
export default {
  name: "DTagInput",
  components: {
    DBox,
    DText,
    DTextfield,
    CloseIcon,
  },
  emits: ["tag-added", "tag-deleted", "text-changed", "tag-changed"],
  data: () => ({
    input: "",
    inputTags: [],
    isKeyReleased: "",
  }),
  props: {
    label: {
      type: String,
      default: "Form Label",
    },
    size: {
      type: String,
      validator: (value) =>
        ["small", "medium", "large", "xlarge", "huge", "massive"].includes(
          value
        ),
      default: "medium",
    },
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
  },
  methods: {
    keyGen,
    setIsKeyReleased: function (value) {
      this.isKeyReleased = value;
    },
    handleDeleteTag: function (index) {
      const deletedTag = this.inputTags[index];
      let oldTagArray = this.inputTags;
      this.inputTags = this.inputTags.filter((tag, i) => i !== index);
      this.$nextTick(() => {
        this.$emit("tag-deleted", deletedTag, this.inputTags);
        this.$emit("tag-changed", oldTagArray, this.inputTags);
      });
    },
    handleKeyDown: function (event) {
      const newTag = this.input.trim();
      let oldTagArray = this.inputTags;
      const key = _tagDelimiterKey[this.tagDelimiterKey];
      if (
        event.key === key &&
        newTag.length &&
        !this.inputTags.includes(newTag)
      ) {
        event.preventDefault();
        this.inputTags.push(newTag);
        this.$nextTick(() => {
          this.$emit("tag-added", newTag, oldTagArray);
          this.$emit("tag-changed", oldTagArray, this.inputTags);
        });
        this.input = "";
      }

      if (
        event.key === "Backspace" &&
        !this.input.length &&
        this.inputTags.length &&
        this.isKeyReleased
      ) {
        event.preventDefault();
        const tagsArray = [...this.inputTags];
        const deletedTag = tagsArray.pop();
        this.inputTags = tagsArray;
        this.input = deletedTag;

        this.$nextTick(() => {
          this.$emit("tag-deleted", deletedTag, this.inputTags);
          this.$emit("tag-changed", oldTagArray, this.inputTags);
        });
      }
      this.isKeyReleased = false;
    },
  },
  setup() {
    const theme = inject("theme", null);
    return { theme };
  },
};
</script>

<style lang="scss" scoped>
.ui-tag-input__input-wrapper {
  border: 1px solid #ced6de;
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(63, 63, 68, 0.1);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: #fff;

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
  height: 8px;
  width: 8px;
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
