import DFilePickerInline from "./DFilePickerInline.vue";
import { DarkModeProvider } from "../main";
import { inputArgTypes } from "../utils/inputProps";

export default {
  title: "Forms/File Picker (Inline)",
  component: DFilePickerInline,
  argTypes: {
    ...inputArgTypes,
    placeholder: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: {
    DFilePickerInline,
  },
  methods: {
    changeFile: function (file) {
      console.log(file);
    },
  },
  setup() {
    return { args };
  },
  template: `<d-file-picker-inline @change="changeFile" v-bind="args" />`,
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
export const Button = Template.bind({});
Button.args = {
  variant: "button",
  btnText: "+ Upload front of driver's license",
};
export const Error = Template.bind({});
Error.args = {
  errorMessage: "This is a random error",
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

export const DarkMode = DarkModeTemplateFactory();
export const ErrorDark = DarkModeTemplateFactory();
ErrorDark.args = {
  errorMessage: "This is a random error",
};
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

export const MultipleFiles = Template.bind({});
MultipleFiles.args = {
  multiple: true,
  maxFiles: 5,
};
