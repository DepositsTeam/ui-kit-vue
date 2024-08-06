<template>
  <d-box class="ui-wysiwyg__wrapper">
    <slot name="label">
      <d-label
        v-if="!!label"
        :label-class="labelClass"
        :label-font-face="labelFontFace"
      >
        {{ label }}
      </d-label>
    </slot>

    <d-box :class="{ focused }" class="d-wysiwyg-semantic-container">
      <d-box :class="{ focused }" class="d-wysisyg-controls" v-if="editor">
        <button
          @click="editor.chain().focus().setTextAlign('left').run()"
          :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
        >
          <text-align-left-icon />
        </button>
        <button
          @click="editor.chain().focus().setTextAlign('center').run()"
          :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
        >
          <center-align-icon />
        </button>
        <button
          @click="editor.chain().focus().setTextAlign('right').run()"
          :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
        >
          <right-align-icon />
        </button>
        <button
          @click="editor.chain().focus().setTextAlign('justify').run()"
          :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
        >
          <justify-align-icon />
        </button>
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
        <button @click="addImage">
          <image-icon />
        </button>
        <button
          @click="toggleLink"
          :class="{ 'is-active': editor.isActive('link') }"
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

<script setup>
import {
  DBox,
  DText,
  TextBoldIcon,
  TextItalicIcon,
  TextUnderlineIcon,
  BlockQuoteIcon,
  ListIcon,
  UndoOutlineIcon,
  RedoOutlineIcon,
  DocumentCodeOutlineIcon,
  ImageIcon,
  LinkOutlineIcon,
  TextAlignLeftIcon,
  RightAlignIcon,
  CenterAlignIcon,
  JustifyAlignIcon,
} from "../main";
import { Editor, EditorContent } from "@tiptap/vue-3";
import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";
import Code from "@tiptap/extension-code";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import DLabel from "@/components/forms/DLabel.vue";

const emit = defineEmits(["update:modelValue"]);

const editor = ref(null);
const focused = ref(false);

const props = defineProps({
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
});

watch(
  () => props.modelValue,
  (value) => {
    // HTML
    const isSame = editor.value.getHTML() === value;

    // JSON
    // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

    if (isSame) {
      return;
    }

    editor.value.commands.setContent(value, false);
  }
);

onMounted(() => {
  editor.value = new Editor({
    content: "",
    extensions: [
      StarterKit,
      Underline,
      Link,
      Code,
      Image,
      Placeholder.configure({
        placeholder: props.placeholder,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    onUpdate: () => {
      // HTML
      emit("update:modelValue", editor.value.getHTML());

      // JSON
      // this.$emit('update:modelValue', this.editor.getJSON())
    },
    onFocus: () => {
      // The editor state has changed.
      focused.value = true;
    },
    onBlur: () => {
      // The editor isn’t focused anymore.
      focused.value = false;
    },
  });
});

onBeforeUnmount(() => {
  editor.value.destroy();
});

const toggleFocusClass = (val) => {
  focused.value = val;
};

const addImage = () => {
  const url = window.prompt("Enter your image URL");

  if (url) {
    editor.value.chain().focus().setImage({ src: url }).run();
  }
};

const toggleLink = () => {
  if (editor.value.isActive("link")) {
    editor.value.chain().focus().unsetLink().run();
  } else {
    const previousUrl = editor.value.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.value.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor.value
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url })
      .run();
  }
};
</script>

<style lang="scss" scoped>
.ui-wysiwyg__wrapper {
  &.dark_mode {
    .ui-text-field__label {
      color: var(--dark-input-label-color);
    }
  }
}
.d-wysisyg-controls {
  width: 100%;
  display: flex;
  border: 1px solid #ced6de;
  border-radius: 4px 4px 0 0;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  padding: 8px;
  gap: 8px;

  &::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }
  &.focused {
    border-color: var(--light-primary-action-color);
  }
  button {
    background: transparent;
    border: none;
    color: #5f6b7a;
    cursor: pointer;
    display: inline-flex;
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    &:hover {
      color: var(--light-primary-action-text-color);
    }
    &.is-active {
      background: var(--light-primary-action-color);
      color: var(--light-primary-action-text-color);
    }
  }
}
.d-wysiwyg-editor {
  padding: 8px 16px;
  border: 1px solid #ced6de;
  border-radius: 0 0 4px 4px;
  min-height: 150px;
  &.focused {
    border-color: var(--light-primary-action-color);
  }
}
.d-wysiwyg-semantic-container {
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(63, 63, 68, 0.1);
  &:hover {
    & > div {
      border-color: var(--light-primary-action-color);
    }
  }
  &.focused {
    box-shadow: 0 0 0 3px var(--light-primary-action-box-shadow-color);
  }
  &.dark_mode {
    .d-wysiwyg-editor {
      background-color: var(--dark-input-background-color);
      border-color: var(--dark-input-border-color);
      color: #fff;
    }
    .d-wysisyg-controls {
      background-color: var(--dark-input-background-color);
      border-color: var(--dark-input-border-color);
      button {
        color: #cbd5e1;
        &.is-active {
          color: var(--dark-primary-action-color);
        }
      }
    }
  }
}
</style>

<style lang="scss">
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

.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  img {
    max-width: 100%;
    height: auto;

    &.ProseMirror-selectednode {
      outline: 3px solid var(--light-primary-action-color);
    }
  }
}
</style>
