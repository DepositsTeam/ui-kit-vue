import DTooltip from "./DTooltip.vue";

export default {
  title: "Tooltip",
  component: { DTooltip },
  argTypes: {},
  tags: ["autodocs"],
};

const Template = (args) => ({
  components: {
    DTooltip,
  },
  setup() {
    return { args };
  },
  template: `<d-tooltip v-bind="args">I am a test</d-tooltip>`,
});

export const HoverTooltip = Template.bind({});
HoverTooltip.args = {
  tooltip: "I am a test tooltip",
};

export const ClickTooltip = Template.bind({});
ClickTooltip.args = {
  tooltip: "I am a test tooltip",
  trigger: "click",
  timeout: 5,
};

export const ClickTooltipWithoutTimeout = Template.bind({});
ClickTooltipWithoutTimeout.args = {
  tooltip: "I am a test tooltip",
  trigger: "click",
  timeout: false,
};
