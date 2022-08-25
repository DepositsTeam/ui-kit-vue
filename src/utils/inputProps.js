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
  autocomplete: {
    type: String,
  },
  form: {
    type: String,
  },
  list: {
    type: String,
  },
  minlength: {
    type: String,
  },
  max: {
    type: String,
  },
  min: {
    type: String,
  },
  multiple: {
    type: String,
  },
  name: {
    type: String,
  },
  pattern: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  required: {
    type: Boolean,
  },
  step: {
    type: String,
  },
  autofocus: {
    type: String,
  },
};
