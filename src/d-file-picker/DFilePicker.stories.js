import DFilePicker from "./DFilePicker.vue";
import { DarkModeProvider } from "../main";

export default {
  title: "Forms/File Picker",
  component: DFilePicker,
  argTypes: {
    btnText: {
      control: { type: "text" },
      default: "Choose File",
    },
    fileMaxSize: {
      control: { type: "text" },
      default: "100",
    },
    accepts: {
      control: { type: "object" },
      default: [".csv", ".xls", ".xlsx", ".pdf"],
    },
    label: {
      control: { type: "text" },
    },
    errorMessage: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    labelFontFace: {
      control: { type: "select" },
      options: ["heroNew", "circularSTD"],
    },
    labelClass: {
      control: { type: "text" },
    },
    maxFiles: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "select" },
      options: ["default", "btn"],
      default: "default",
    },
  },
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

export const HasError = Template.bind({});
HasError.args = {
  errorMessage: "Error message",
};

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

export const OneMbDark = DarkModeTemplateFactory();
OneMbDark.args = {
  fileMaxSize: 1,
};

export const ImageDark = DarkModeTemplateFactory();
ImageDark.args = {
  accepts: "image",
};

export const DocumentDark = DarkModeTemplateFactory();
DocumentDark.args = {
  accepts: "document",
};

export const CsvDark = DarkModeTemplateFactory();
CsvDark.args = {
  accepts: "csv",
};
