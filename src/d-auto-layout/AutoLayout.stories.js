import DAutoLayout from "./DAutoLayout.vue";
import { DBox } from "../main";

export default {
  title: "Layouts/Auto layout",
  component: DAutoLayout,
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
  template: `<d-auto-layout v-bind="args">
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
