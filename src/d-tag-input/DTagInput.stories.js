import DTagInput from "./DTagInput.vue";

export default {
  title: "Forms/Tag Input",
  component: DTagInput,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge", "huge", "massive"],
    },
    values: {
      control: { type: "object" },
      table: {
        defaultValue: ["Option 1", "Option 2", "Option 3"],
      },
    },
    tagDelimiterKey: {
      control: { type: "select" },
      options: ["enter", "comma", "space"],
      table: {
        defaultValue: "enter",
      },
    },
  },
};

const Template = (args) => ({
  components: { DTagInput },
  data: () => ({
    input: ["Option one", "Option 2", "Option 3"],
  }),
  methods: {
    onTagAdded: function (newTag, tagsArray) {
      console.log(newTag, tagsArray);
    },
    onTagChanged: function (oldTagsArray, newTagsArray) {
      console.log(oldTagsArray, newTagsArray);
    },
    onTagDeleted: function (deletedTag, tagsArray) {
      console.log(deletedTag, tagsArray);
    },
    onTextChanged: function (value) {
      console.log(value);
    },
  },
  setup() {
    return { args };
  },
  template: `<d-tag-input @tag-added="onTagAdded" @text-changed="onTextChanged" @tag-deleted="onTagDeleted" @tag-changed="onTagChanged" :values="input" v-bind="args" />`,
});

export const SizeMassive = Template.bind({});
SizeMassive.args = {
  label: "Form Label",
  size: "massive",
};

export const SizeHuge = Template.bind({});
SizeHuge.args = {
  label: "Form Label",
  size: "huge",
};

export const SizeXLarge = Template.bind({});
SizeXLarge.args = {
  label: "Form Label",
  size: "xlarge",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  label: "Form Label",
  size: "large",
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  label: "Form Label",
  size: "medium",
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  label: "Form Label",
  size: "small",
};

