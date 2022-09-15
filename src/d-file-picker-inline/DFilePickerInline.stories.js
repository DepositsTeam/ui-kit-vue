import DFilePickerInline from "./DFilePickerInline.vue";
import { DarkModeProvider } from "../main";

export default {
  title: "Forms/File Picker (Inline)",
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

const DarkModeTemplate = (args) => ({
  components: {
    DFilePickerInline,
    DarkModeProvider,
  },
  setup() {
    return { args };
  },
  template: `<dark-mode-provider :dark-mode="true"><d-file-picker-inline v-bind="args" /></dark-mode-provider>`,
});

const DarkModeTemplateFactory = () => {
  const Bound = DarkModeTemplate.bind({});
  Bound.decorators = [
    () => ({
      template:
        '<div style="padding: 3em; background: #121A26;"><story /></div>',
    }),
  ];
  return Bound;
};

export const Default = Template.bind({});
export const DarkMode = DarkModeTemplateFactory();
