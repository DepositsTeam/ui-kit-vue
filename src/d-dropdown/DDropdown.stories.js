import DDropdown from "./DDropdown.vue";
import DarkModeProvider from "../providers/DarkModeProvider.vue";
import ThemeProvider from "../providers/ThemeProvider.vue";
import { inputArgTypes } from "@/utils/props/inputProps";
import { selectArgTypes } from "@/utils/props/selectProps";

export default {
  title: "Forms/Dropdown",
  component: DDropdown,
  tags: ["autodocs"],
  argTypes: {
    ...inputArgTypes,
    ...selectArgTypes,
  },
};

const Template = (args) => ({
  components: { DDropdown, ThemeProvider },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `
    <ThemeProvider :initial-theme="{defaultInputSize: 'medium'}">
      <d-dropdown v-model="value" v-bind="args" />
    </ThemeProvider>
  `,
});

const PredefinedTemplate = (args) => ({
  components: { DDropdown },
  data: () => ({
    value: "identity",
    internalOptions: [
      {
        text: "Banking kit",
        value: "banking",
      },
      {
        text: "Money kit",
        value: "money",
      },
      {
        text: "Identity kit",
        value: "identity",
      },
      {
        text: "UI kit",
        value: "ui",
      },
      {
        text: "Commerce kit",
        value: "commerce",
      },
    ],
  }),
  setup() {
    return { args };
  },
  mounted() {
    setTimeout(() => {
      this.value = "ui";
      this.internalOptions = [
        {
          text: "Money kit",
          value: "money",
        },
        {
          text: "Identity kit",
          value: "identity",
        },
        {
          text: "UI kit",
          value: "ui",
        },
        {
          text: "Commerce kit",
          value: "commerce",
        },
      ];
    }, 3000);
  },
  template: `
    <d-dropdown v-model="value" v-bind="args" :options="internalOptions" />
    <p>Selected value is: {{value}}</p>
  `,
});

const DarkModePredefinedTemplate = (args) => ({
  components: { DDropdown, DarkModeProvider },
  data: () => ({
    value: "identity",
  }),
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
      <d-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `,
});

const DarkModeTemplate = (args) => ({
  components: { DDropdown, DarkModeProvider },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
      <d-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `,
});

const DarkModeTemplateFactory = (Template = null) => {
  const Bound = Template ? Template.bind({}) : DarkModeTemplate.bind({});
  Bound.decorators = [
    () => ({
      template:
        '<div style="padding: 3em; background: #121A26;"><story /></div>',
    }),
  ];
  return Bound;
};

const options = [
  {
    text: "Banking kit",
    value: "banking",
  },
  {
    text: "Money kit",
    value: "money",
  },
  {
    text: "Identity kit",
    value: "identity",
  },
  {
    text: "UI kit",
    value: "ui",
  },
  {
    text: "Commerce kit",
    value: "commerce",
  },
];

export const Default = Template.bind({});
Default.args = {
  options: [...options],
};

export const HasError = Template.bind({});
HasError.args = {
  options: [...options],
  errorMessage: "Error Message",
};

export const TextOptions = Template.bind({});
TextOptions.args = {
  options: [
    "Banking kit",
    "Money kit",
    "Identity kit",
    "UI kit",
    "Commerce kit",
  ],
};

export const DefaultDark = DarkModeTemplateFactory();
DefaultDark.args = {
  options: [...options],
};

export const Label = Template.bind({});
Label.args = {
  options: [...options],
  label: "Dropdown",
};

export const LabelDark = DarkModeTemplateFactory();
LabelDark.args = {
  options: [...options],
  label: "Dropdown",
};

export const Predefined = PredefinedTemplate.bind({});
Predefined.args = {
  label: "Predefined Dropdown",
  options: [...options],
};

export const PredefinedReturnFullObject = PredefinedTemplate.bind({});
PredefinedReturnFullObject.args = {
  label: "Predefined Dropdown",
  options: [...options],
  returnFullObject: true,
};

export const PredefinedDark = DarkModeTemplateFactory(
  DarkModePredefinedTemplate
);
PredefinedDark.args = {
  label: "Predefined Dropdown",
  options: [...options],
};
