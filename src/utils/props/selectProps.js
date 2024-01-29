export default {
  options: {
    type: Array,
    default: () => ["Item 1", "Item 2", "item 3"],
  },
  optionTitle: {
    type: String,
    default: "text",
  },
  optionValue: {
    type: String,
    default: "value",
  },
  returnFullObject: {
    type: Boolean,
    default: false,
  },
  optionDescription: {
    type: String,
    default: "description",
  },
  optionIcon: {
    type: String,
    default: "icon",
  },
};

export const selectArgTypes = {
  options: {
    control: { type: "object" },
  },
  optionTitle: {
    control: { type: "text" },
  },
  optionValue: {
    control: { type: "text" },
  },
  returnFullObject: {
    control: { type: "boolean" },
  },
  optionDescription: {
    control: { type: "text" },
  },
  optionIcon: {
    control: { type: "text" },
  },
};
