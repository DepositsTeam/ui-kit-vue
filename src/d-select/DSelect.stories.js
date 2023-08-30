import DSelect from "./DSelect.vue";
import DarkModeProvider from "../providers/DarkModeProvider.vue";
import Search from "../icons/SearchIcon.vue";

export default {
  title: "Forms/Select Field",
  component: DSelect,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge", "huge", "massive"],
    },
    leftIcon: {
      control: { type: "object" },
    },
    errorMessage: {
      control: { type: "text" },
    },
    wrapperClass: {
      control: { type: "text" },
    },
    options: {
      control: { type: "object" },
      table: {
        defaultValue: ["Item 1", "Item 2", "Item 3"],
      },
    },
    placeholderEffect: {
      control: { type: "boolean" },
      table: {
        defaultValue: true,
      },
    },
    disabled: {
      control: { type: "boolean" },
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
  },
};

const DarkModeTemplate = (args) => ({
  components: { DSelect, DarkModeProvider },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
    <d-select v-bind="args" />
    </dark-mode-provider>
  `,
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

const Template = (args) => ({
  components: { DSelect },
  setup() {
    return { args };
  },
  template: `
    <d-select v-bind="args" />`,
});

const VModelTemplate = (args) => ({
  components: { DSelect },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `
    <d-select v-bind="args" v-model="value" />
    <span>Selected value is: {{value}}</span>
  `,
});

const PreselectedVModelTemplate = (args) => ({
  components: { DSelect },
  data: () => ({
    value: "001",
    options: [
      {
        id: "001",
        name: "Ted Mosby",
        sitcom: "How I Met Your Mother",
      },
      {
        id: "002",
        name: "Cameron Tucker",
        sitcom: "Modern Family",
      },
      {
        id: "003",
        name: "Ron Swanson",
        sitcom: "Parks and Recreation",
      },
    ],
  }),
  setup() {
    return { args };
  },
  template: `
    s<d-select v-bind="args" v-model="value" :options="options" />
    <span>Selected value is: {{value}}</span>
  `,
});

export const Default = Template.bind({});
Default.args = {
  label: "Form Label",
  size: "huge",
  options: ["Plastic off the sofa", "Flaccid gyroscopy"],
};

export const DarkModeDefault = DarkModeTemplateFactory();
DarkModeDefault.args = {
  label: "Form Label",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Form Label",
  disabled: true,
};

export const DarkModeDisabled = DarkModeTemplateFactory();
DarkModeDisabled.args = {
  label: "Form Label",
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: "Form Label",
  errorMessage: "Error Message",
};

export const DarkModeError = DarkModeTemplateFactory();
DarkModeError.args = {
  label: "Form Label",
  errorMessage: "Error Message",
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  label: "Form Label",
  leftIcon: Search,
};

export const DarkModeLeftIcon = DarkModeTemplateFactory();
DarkModeLeftIcon.args = {
  label: "Form Label",
  leftIcon: Search,
};

export const DropDown = Template.bind({});
DropDown.args = {
  label: "Form Label",
  dropDown: true,
};

export const DarkModeDropDown = DarkModeTemplateFactory();
DarkModeDropDown.args = {
  label: "Form Label",
  dropDown: true,
};

export const LeftIconAndDropDown = Template.bind({});
LeftIconAndDropDown.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
};

export const DarkModeLeftIconAndDropDown = DarkModeTemplateFactory();
DarkModeLeftIconAndDropDown.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
};

export const SizeMassive = Template.bind({});
SizeMassive.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "massive",
};

export const DarkModeSizeMassive = DarkModeTemplateFactory();
DarkModeSizeMassive.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "massive",
};

export const SizeHuge = Template.bind({});
SizeHuge.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "huge",
};

export const DarkModeSizeHuge = DarkModeTemplateFactory();
DarkModeSizeHuge.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "huge",
};

export const SizeXLarge = Template.bind({});
SizeXLarge.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "xlarge",
};

export const DarkModeXLarge = DarkModeTemplateFactory();
DarkModeXLarge.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "xlarge",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "large",
};

export const DarkModeSizeLarge = DarkModeTemplateFactory();
DarkModeSizeLarge.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "large",
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "medium",
};

export const DarkModeSizeMedium = DarkModeTemplateFactory();
DarkModeSizeMedium.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "medium",
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "small",
};

export const DarkModeSizeSmall = DarkModeTemplateFactory();
DarkModeSizeSmall.args = {
  label: "Form Label",
  dropDown: true,
  leftIcon: Search,
  size: "small",
};

export const VModel = VModelTemplate.bind({});
VModel.args = {
  size: "medium",
};

export const PreselectedVModel = PreselectedVModelTemplate.bind({});
PreselectedVModel.args = {
  optionTitle: "name",
  optionValue: "id",
  returnFullObject: true,
};
