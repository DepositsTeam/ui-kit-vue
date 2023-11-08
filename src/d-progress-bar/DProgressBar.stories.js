import DProgressBar from "./DProgressBar.vue";
import { DarkModeProvider } from "../main";

export default {
  title: "Progress bar",
  component: DProgressBar,
  tags: ["autodocs"],
  argTypes: {
    percentage: {
      control: { type: "text" },
    },
    totalSteps: {
      control: { type: "number" },
    },
    currentStep: {
      control: { type: "number" },
    },
    fillColor: {
      control: { type: "color" },
    },
    emptyColor: {
      control: { type: "color" },
    },
    darkFillColor: {
      control: { type: "color" },
    },
    darkEmptyColor: {
      control: { type: "color" },
    },
    variant: {
      control: { type: "select" },
      options: ["variant-1", "variant-2"],
      default: "variant-1",
    },
    height: {
      control: { type: "text" },
      default: "6px",
    },
  },
};

const Template = (args) => ({
  components: { DProgressBar },
  setup() {
    return { args };
  },
  template: `<d-progress-bar v-bind="args" />`,
});

const DarkModeTemplate = (args) => ({
  components: { DProgressBar, DarkModeProvider },
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
      <d-progress-bar v-bind="args" />
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

export const Default = Template.bind({});

export const FiftyPercent = Template.bind({});
FiftyPercent.args = {
  percentage: 50,
};

export const HundredPercent = Template.bind({});
HundredPercent.args = {
  percentage: 100,
};

export const ThreeOutOfFive = Template.bind({});
ThreeOutOfFive.args = {
  totalSteps: 5,
  currentStep: 3,
};

export const DefaultDark = DarkModeTemplateFactory();

export const FiftyPercentDark = DarkModeTemplateFactory();
FiftyPercentDark.args = {
  percentage: 50,
};

export const HundredPercentDark = DarkModeTemplateFactory();
HundredPercentDark.args = {
  percentage: 100,
};

export const ThreeOutOfFiveDark = DarkModeTemplateFactory();
ThreeOutOfFiveDark.args = {
  totalSteps: 5,
  currentStep: 3,
};

export const Variant2 = Template.bind({});
Variant2.args = {
  variant: "variant-2",
  percentage: 25,
};

export const Variant2CustomHeight = Template.bind({});
Variant2CustomHeight.args = {
  variant: "variant-2",
  percentage: 25,
  height: "8px",
};
