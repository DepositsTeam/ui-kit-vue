import DStepper from "./DStepper.vue";
import { DarkModeProvider, DBox, DText, DBadge } from "../main";

export default {
  component: DStepper,
  title: "Stepper",
  tags: ["autodocs"],
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
    stepMode: {
      control: { type: "boolean" },
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
      description: "August 16, 2021 at 5:15 PM",
    },
    {
      text: "Select program use case",
      description: "August 16, 2021 at 5:15 PM <br /> Mode: Circumvented",
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

export const NonStepMode = Template.bind({});
NonStepMode.args = {
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
  stepMode: false,
};

export const NonStepModeWithDescription = Template.bind({});
NonStepModeWithDescription.args = {
  steps: [
    {
      text: "Complete basic KYB",
      description: "August 16, 2021 at 5:15 PM",
    },
    {
      text: "Select program use case",
      description: "August 16, 2021 at 5:15 PM <br /> Mode: Circumvented",
    },
    {
      text: "Configure program",
    },
    {
      text: "Demo & launch program",
    },
  ],
  stepMode: false,
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

const CustomIndicatorTemplate = (args) => ({
  components: { DStepper, DBox },
  setup() {
    return { args };
  },
  template: `<d-stepper v-bind="args">
  
  </d-stepper>`,
});

export const CustomIndicator = CustomIndicatorTemplate.bind({});
CustomIndicator.args = {
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

const CustomSlotStepperTemplate = (args) => ({
  components: { DStepper, DText, DBadge },
  setup() {
    return { args };
  },
  template: `<d-stepper v-bind="args">
  <template v-slot:step="item">
  <d-text my0>{{item.text}}</d-text>
  </template>
  
  </d-stepper>`,
});

export const CustomSlotStepper = CustomSlotStepperTemplate.bind({});

CustomSlotStepper.args = {
  steps: [
    {
      text: "Complete basic KYB",
    },
    {
      text: "Different text",
    },
    {
      text: "yet different text",
    },
  ],
};
