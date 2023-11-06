import DGridLayout from "./DGridLayout.vue";
import { DBox } from "../main";

export default {
  title: "Layouts/Grid Layout",
  component: DGridLayout,
  tags: ["autodocs"],
  argTypes: {
    gridWidth: {
      control: { type: "text" },
    },
    gridHeight: {
      control: { type: "text" },
    },
    colGutter: {
      control: { type: "text" },
    },
    rowGutter: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: { DGridLayout, DBox },
  setup() {
    return { args };
  },
  template: `<d-grid-layout v-bind="args">
    <d-box background="#0CB9E9" border-radius="6px" />
    <d-box background="#0CB9E9" border-radius="6px" />
    <d-box background="#0CB9E9" border-radius="6px" />
    <d-box background="#0CB9E9" border-radius="6px" />
    <d-box background="#0CB9E9" border-radius="6px" />
    <d-box background="#0CB9E9" border-radius="6px" />
    <d-box background="#0CB9E9" border-radius="6px" /> 
  </d-grid-layout>`,
});

export const Default = Template.bind({});
