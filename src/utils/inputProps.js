export default {
  label: {
    type: String,
  },
  fontFace: {
    type: String,
  },
  size: {
    type: String,
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
  leftIcon: {
    type: Object,
  },
  rightIcon: {
    type: Object,
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

export const inputArgTypes = {
  label: {
    control: { type: "text" },
  },
  placeholder: {
    control: { type: "text" },
  },
  disabled: {
    control: { type: "boolean" },
  },
  dropDown: {
    control: { type: "boolean" },
  },
  size: {
    control: { type: "select" },
    options: ["small", "medium", "large", "xlarge", "huge", "massive"],
  },
  errorMessage: {
    control: { type: "text" },
  },
  rightIcon: {
    control: { type: "object" },
  },
  leftIcon: {
    control: { type: "object" },
  },
  onlyNumbers: {
    control: { type: "boolean" },
  },
  wrapperClass: {
    control: { type: "text" },
  },
  fontFace: {
    control: { type: "select" },
    options: ["circularSTD", "heroNew"],
  },
};
