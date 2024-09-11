import DTooltip from "./DTooltip.vue";

export default {
  title: "Tooltip",
  component: { DTooltip },
  argTypes: {
    tooltip: {
      control: { type: "text" },
    },
    trigger: {
      control: { type: "select" },
      options: ["click", "hover", "toggle"],
    },
    timeout: {
      control: { type: "text" },
      default: 3,
    },
    disabled: {
      control: { type: "boolean" },
    },
    position: {
      control: { type: "select" },
      options: ["top", "bottom", "right", "left"],
    },
  },
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

export const ToggleTooltip = Template.bind({});
ToggleTooltip.args = {
  tooltip: "I am a test tooltip",
  trigger: "toggle",
  timeout: 5,
};

export const ClickTooltipWithoutTimeout = Template.bind({});
ClickTooltipWithoutTimeout.args = {
  tooltip: "I am a test tooltip",
  trigger: "click",
  timeout: false,
};

export const HoverTooltipWithoutTimeout = Template.bind({});
HoverTooltipWithoutTimeout.args = {
  tooltip: "I am a test tooltip",
  trigger: "hover",
  timeout: false,
};

export const RightTooltip = Template.bind({})
RightTooltip.args = {
  tooltip: "I am a test tooltip",
  trigger: "hover",
  timeout: 3,
  position: "right",
}

export const LeftTooltip = Template.bind({})
LeftTooltip.args = {
  tooltip: "I am a test tooltip",
  trigger: "hover",
  timeout: 3,
  position: "left",
}
