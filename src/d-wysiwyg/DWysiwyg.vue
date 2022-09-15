<template>
  <d-box>
    <d-box v-if="!!label" is="label">
      <d-text
        margin-top="0px"
        class="ui-text-field__label"
        :class="labelClass"
        scale="subhead"
        :font-face="labelFontFace"
      >
        {{ label }}
      </d-text>
    </d-box>
    <d-box
      :class="{ focused }"
      :style="{ ...d__theme }"
      class="d-wysiwyg-semantic-container"
    >
      <d-box :class="{ focused }" class="d-wysisyg-controls" v-if="editor">
        <button
          @click="editor.chain().focus().toggleBold().run()"
          :class="{ 'is-active': editor.isActive('bold') }"
        >
          <text-bold-icon />
        </button>
        <button
          @click="editor.chain().focus().toggleItalic().run()"
          :class="{ 'is-active': editor.isActive('italic') }"
        >
          <text-italic-icon />
        </button>
        <button
          @click="editor.chain().focus().toggleUnderline().run()"
          :class="{ 'is-active': editor.isActive('underline') }"
        >
          <text-underline-icon />
        </button>
        <button
          @click="editor.chain().focus().toggleBulletList().run()"
          :class="{ 'is-active': editor.isActive('bulletList') }"
        >
          <list-icon />
        </button>
        <button
          @click="editor.chain().focus().toggleBlockquote().run()"
          :class="{ 'is-active': editor.isActive('blockquote') }"
        >
          <block-quote-icon />
        </button>
        <button
          @click="editor.chain().focus().toggleCode().run()"
          :class="{ 'is-active': editor.isActive('code') }"
        >
          <document-code-outline-icon />
        </button>
        <button
          @click="editor.chain().focus().toggleCode().run()"
          :class="{ 'is-active': editor.isActive('code') }"
        >
          <image-icon />
        </button>
        <button
          @click="editor.chain().focus().toggleCode().run()"
          :class="{ 'is-active': editor.isActive('code') }"
        >
          <link-outline-icon />
        </button>
        <button @click="editor.chain().focus().undo().run()">
          <undo-outline-icon />
        </button>
        <button @click="editor.chain().focus().redo().run()">
          <redo-outline-icon />
        </button>
      </d-box>
      <editor-content
        :class="{ focused }"
        class="d-wysiwyg-editor"
        :editor="editor"
      />
    </d-box>
  </d-box>
</template>

<script>
import DBox from "../d-box/DBox.vue";
import DText from "../d-text/DText.vue";
import { Editor, EditorContent } from "@tiptap/vue-3";
import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";
import TextBoldIcon from "../icons/TextBoldIcon.vue";
import TextItalicIcon from "../icons/TextItalicIcon.vue";
import TextUnderlineIcon from "../icons/TextUnderlineIcon.vue";
import BlockQuoteIcon from "../icons/BlockQuoteIcon.vue";
import ListIcon from "../icons/List2Icon.vue";
import UndoOutlineIcon from "../icons/outline/UndoOutlineIcon.vue";
import RedoOutlineIcon from "../icons/outline/RedoOutlineIcon.vue";
import DocumentCodeOutlineIcon from "../icons/outline/DocumentCodeOutlineIcon.vue";
import Code from "@tiptap/extension-code";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import ImageIcon from "../icons/ImageIcon.vue";
import LinkOutlineIcon from "../icons/outline/LinkOutlineIcon.vue";
import { inject } from "vue";
import { defaultThemeVars } from "../providers/default-theme";

export default {
  name: "DWysiwyg",
  components: {
    LinkOutlineIcon,
    ImageIcon,
    DocumentCodeOutlineIcon,
    RedoOutlineIcon,
    UndoOutlineIcon,
    ListIcon,
    BlockQuoteIcon,
    TextUnderlineIcon,
    TextItalicIcon,
    TextBoldIcon,
    DBox,
    EditorContent,
    DText,
  },
  emits: ["update:modelValue"],
  data() {
    return {
      editor: null,
      focused: false,
    };
  },
  watch: {
    modelValue(value) {
      // HTML
      const isSame = this.editor.getHTML() === value;

      // JSON
      // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

      if (isSame) {
        return;
      }

      this.editor.commands.setContent(value, false);
    },
  },
  mounted() {
    this.editor = new Editor({
      content: "",
      extensions: [
        StarterKit,
        Underline,
        Link,
        Code,
        Placeholder.configure({
          placeholder: this.placeholder,
        }),
      ],
      onUpdate: () => {
        // HTML
        this.$emit("update:modelValue", this.editor.getHTML());

        // JSON
        // this.$emit('update:modelValue', this.editor.getJSON())
      },
      onFocus: () => {
        // The editor state has changed.
        this.focused = true;
      },
      onBlur: () => {
        // The editor isn’t focused anymore.
        this.focused = false;
      },
    });
  },
  beforeUnmount() {
    this.editor.destroy();
  },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
    },
    labelClass: {
      type: [String, Array, Object],
    },
    fontFace: {
      type: String,
    },
    labelFontFace: {
      type: String,
    },
    placeholder: {
      type: String,
      default: "Type content here",
    },
  },
  methods: {
    toggleFocusClass: function (val) {
      this.focused = val;
    },
  },
  setup() {
    const d__theme = inject("d__theme", defaultThemeVars);
    return { d__theme };
  },
};
</script>

<style lang="scss" scoped>
.d-wysisyg-controls {
  width: 100%;
  display: flex;
  border: 1px solid #ced6de;
  border-radius: 4px 4px 0 0;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */

  &::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }
  &.focused {
    border-color: var(--lightPrimaryActionColor);
  }
  button {
    background: transparent;
    border: none;
    color: #5f6b7a;
    cursor: pointer;
    margin: 8px;
    &:hover,
    &.is-active {
      color: var(--lightPrimaryActionColor);
    }
  }
}
.d-wysiwyg-editor {
  padding: 8px 16px;
  border: 1px solid #ced6de;
  border-radius: 0 0 4px 4px;
  min-height: 150px;
  &.focused {
    border-color: var(--lightPrimaryActionColor);
  }
}
.d-wysiwyg-semantic-container {
  border-radius: 4px;
  &:hover {
    & > div {
      border-color: var(--lightPrimaryActionColor);
    }
  }
  &.focused {
    box-shadow: 0 0 0 3px var(--lightPrimaryActionBoxShadowColor);
  }
}
</style>

<style>
.ProseMirror-focused {
  border-color: transparent;
  outline-color: transparent;
}
/* Placeholder (at the top) */
.ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #b8c4ce;
  pointer-events: none;
  height: 0;
}
.ProseMirror.ProseMirror-focused {
  outline: none;
  border: none;
}
</style>
