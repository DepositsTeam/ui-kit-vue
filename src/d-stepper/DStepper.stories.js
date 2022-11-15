import DStepper from "./DStepper.vue";
import { DarkModeProvider } from "../main";

export default {
  component: DStepper,
  title: "Stepper",
  argTypes: {
    steps: {
      control: { type: "object" },
    },
    currentStep: {
      control: { type: "number" },
    },
    scheme: {
      control: { type: "select" },
      options: ["variant-1", "variant-2"],
    },
    activeColor: {
      control: { type: "color" },
    },
  },
};

const Template = (args) => ({
  components: { DStepper },
  setup() {
    return { args };
  },
  template: `<d-stepper v-bind="args" />`,
});

const DarkModeTemplate = (args) => ({
  components: { DStepper, DarkModeProvider },
  setup() {
    return { args };
  },
  template: `<dark-mode-provider :dark-mode="true">
    <d-stepper v-bind="args" />  
  </dark-mode-provider>`,
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
Default.args = {
  steps: [
    {
      text: "Complete basic KYB",
      description: "August 16, 2021 at 5:15 PM",
    },
    {
      text: "Select program use case",
    },
    {
      text: "Configure program",
    },
    {
      text: "Demo & launch program",
    },
  ],
};

export const SecondStep = Template.bind({});
SecondStep.args = {
  steps: [
    {
      text: "Complete basic KYB",
    },
    {
      text: "Select program use case",
    },
    {
      text: "Configure program",
    },
    {
      text: "Demo & launch program",
    },
  ],
  currentStep: 1,
};

export const ArrayOfStrings = Template.bind({});
ArrayOfStrings.args = {
  steps: [
    "Complete basic KYB",
    "Select program use case",
    "Configure program",
    "Demo & launch program",
  ],
};

export const ArrayOfStringsSecondStep = Template.bind({});
ArrayOfStringsSecondStep.args = {
  steps: [
    "Complete basic KYB",
    "Select program use case",
    "Configure program",
    "Demo & launch program",
  ],
  currentStep: 1,
};

export const DefaultDark = DarkModeTemplateFactory();
DefaultDark.args = {
  steps: [
    {
      text: "Complete basic KYB",
    },
    {
      text: "Select program use case",
    },
    {
      text: "Configure program",
    },
    {
      text: "Demo & launch program",
    },
  ],
};

export const SecondStepDark = DarkModeTemplateFactory();
SecondStepDark.args = {
  steps: [
    {
      text: "Complete basic KYB",
    },
    {
      text: "Select program use case",
    },
    {
      text: "Configure program",
    },
    {
      text: "Demo & launch program",
    },
  ],
  currentStep: 1,
};

export const ArrayOfStringsDark = DarkModeTemplateFactory();
ArrayOfStringsDark.args = {
  steps: [
    "Complete basic KYB",
    "Select program use case",
    "Configure program",
    "Demo & launch program",
  ],
};

export const ArrayOfStringsSecondStepDark = DarkModeTemplateFactory();
ArrayOfStringsSecondStepDark.args = {
  steps: [
    "Complete basic KYB",
    "Select program use case",
    "Configure program",
    "Demo & launch program",
  ],
  currentStep: 1,
};
