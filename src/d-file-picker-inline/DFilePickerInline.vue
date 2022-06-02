<template>
  <d-box
    class="ui-text-field__wrapper d-file-picker-inline"
    :class="[`size__${size}`]"
  >
    <d-box v-if="!!label" is="label">
      <d-text
        margin-top="0px"
        class="ui-text-field__label"
        :class="labelClass"
        scale="subhead"
        :font-face="labelFontFace"
        :size="size"
      >
        {{ label }}
      </d-text>
    </d-box>
    <d-box display="inline-flex" class="pseudo-input" :class="{ disabled }">
      <d-box class="ui-text-field__input">
        <d-text
          my0
          subhead
          :font-face="fontFace"
          :class="{
            placeholder: selectedFileName === 'No file selected',
          }"
          >{{ selectedFileName }}</d-text
        >
      </d-box>
      <d-box class="pseudo-button">
        <d-text subhead font-face="hero-new" my0>Choose File</d-text>
      </d-box>
      <d-box
        is="input"
        v-bind="$attrs"
        :disabled="disabled"
        @change="updateName"
        type="file"
      />
    </d-box>
  </d-box>
</template>

<script>
import DBox from "../d-box/DBox.vue";
import DText from "../d-text/DText.vue";
export default {
  name: "DFilePicker",
  components: { DBox, DText },
  emits: ["change"],
  data: () => ({
    selectedFileName: "No file selected",
  }),
  props: {
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
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "medium",
      validator: (value) =>
        ["small", "medium", "large", "xlarge", "huge", "massive"].includes(
          value
        ),
    },
  },
  methods: {
    updateName: function (e) {
      let files = e.target.files || e.dataTransfer.files;
      this.selectedFileName = !files ? "No file selected" : files[0].name;
      this.$emit("change", files[0]);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/textfield";
.d-file-picker-inline {
  position: relative;
  input {
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
}
.pseudo-input {
  display: flex;
  .ui-text-field__input {
    flex: 3;
  }
  .pseudo-button {
    flex: 1;
  }
}
.pseudo-button {
  background: #f5f8fa;
  word-break: keep-all;
  white-space: nowrap;
  display: flex;
  align-items: center;
  border: 1px solid #ced6de;
  position: relative;
  left: -3px;
  border-radius: 0 6px 6px 0;
  padding-left: 32px;
  padding-right: 32px;
}
</style>
