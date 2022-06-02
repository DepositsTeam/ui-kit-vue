import DFilePickerInline from "./DFilePickerInline.vue";

export default {
  title: "File Picker (Inline)",
  component: DFilePickerInline,
  argTypes: {},
};

const Template = (args) => ({
  components: {
    DFilePickerInline,
  },
  setup() {
    return { args };
  },
  template: `<d-file-picker-inline v-bind="args" />`,
});

export const Default = Template.bind({});
