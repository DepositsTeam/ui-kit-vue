import DFilePicker from "./DFilePicker.vue";
import { DarkModeProvider } from "../main";

export default {
  title: "Forms/File Picker",
  component: DFilePicker,
  argTypes: {},
};

const Template = (args) => ({
  components: {
    DFilePicker,
  },
  setup() {
    return { args };
  },
  template: `<d-file-picker v-bind="args" />`,
});

const DarkModeTemplate = (args) => ({
  components: {
    DFilePicker,
    DarkModeProvider,
  },
  setup() {
    return { args };
  },
  template: `<dark-mode-provider :dark-mode="true"><d-file-picker v-bind="args"></d-file-picker></dark-mode-provider>`,
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

export const OneMb = Template.bind({});
OneMb.args = {
  fileMaxSize: 1,
};

export const Image = Template.bind({});
Image.args = {
  accepts: "image",
};

export const Document = Template.bind({});
Document.args = {
  accepts: "document",
};

export const Csv = Template.bind({});
Csv.args = {
  accepts: "csv",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Upload a file",
};

export const DarkMode = DarkModeTemplateFactory();
