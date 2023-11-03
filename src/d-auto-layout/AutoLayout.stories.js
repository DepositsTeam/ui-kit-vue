import DAutoLayout from "./DAutoLayout.vue";
import { DBox } from "../main";

export default {
  title: "Layouts/Auto layout",
  component: DAutoLayout,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    itemSpacing: {
      control: { type: "text" },
    },
    alignment: {
      control: { type: "select" },
      options: [
        "top-left",
        "top-center",
        "top-right",
        "center-right",
        "center",
        "center-left",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
    },
  },
};

const Template = (args) => ({
  components: { DAutoLayout, DBox },
  setup() {
    return { args };
  },
  template: `<d-auto-layout :switch-breakpoint="500" v-bind="args">
    <d-box background="#0CB9E9" border-radius="6px" height="48px" width="48px" />
    <d-box background="#0CB9E9" border-radius="6px" height="48px" width="48px" />
    <d-box background="#0CB9E9" border-radius="6px" height="48px" width="48px" />
    <d-box background="#0CB9E9" border-radius="6px" height="48px" width="48px" />
    <d-box background="#0CB9E9" border-radius="6px" height="48px" width="48px" />
    <d-box background="#0CB9E9" border-radius="6px" height="48px" width="48px" />
    <d-box background="#0CB9E9" border-radius="6px" height="48px" width="48px" /> 
  </d-auto-layout>`,
});

export const Default = Template.bind({});

export const SwitchBreakpointHorizontal = Template.bind({});
SwitchBreakpointHorizontal.args = {
  switchBreakpoint: 1000,
};

export const SwitchWidthHorizontal = Template.bind({});
SwitchWidthHorizontal.args = {
  switchWidth: 300,
};
