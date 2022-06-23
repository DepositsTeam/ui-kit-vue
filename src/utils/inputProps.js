export default {
  label: {
    type: String,
  },
  fontFace: {
    type: String,
  },
  size: {
    type: String,
    default: "huge",
    validator: (value) =>
      ["small", "medium", "large", "xlarge", "huge", "massive"].includes(value),
  },
  errorMessage: {
    type: String,
  },
  showError: {
    type: Boolean,
  },
  modelValue: {
    type: String,
  },
  onlyNumbers: {
    type: Boolean,
  },
  wrapperClass: {
    type: String,
  },
  invisible: {
    type: Boolean,
  },
  labelClass: {
    type: [String, Object, Array],
  },
  disabled: Boolean,
  labelFontFace: {
    type: String,
  },
};
