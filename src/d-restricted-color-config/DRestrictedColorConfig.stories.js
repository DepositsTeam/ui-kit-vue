import DRestrictedColorConfig from "./DRestrictedColorConfig.vue";
import DText from "../d-text/DText.vue";
import DAutoLayout from "../d-auto-layout/DAutoLayout.vue";

export default {
  components: { DAutoLayout },
  title: "Forms/Restricted Color Config",
  component: DRestrictedColorConfig,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
      default: "Color",
    },
    colors: {
      control: { type: "object" },
    },
  },
};

const Template = (args) => ({
  components: {
    DRestrictedColorConfig,
  },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `
      <d-restricted-color-config v-model="value" v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {
  colors: [
    {
      colorCode: "#0C9CCC",
      colorName: "Teal",
    },
    {
      colorCode: "#1A8B5A",
      colorName: "Green",
    },
    {
      colorCode: "#2A2E33",
      colorName: "Black",
    },
    {
      colorCode: "#971E31",
      colorName: "Red",
    },
    {
      colorCode: "#E1E7EC",
      colorName: "White",
    },
    {
      colorCode: "#E06104",
      colorName: "Orange",
    },
    {
      colorCode: "#0059AC",
      colorName: "Blue",
    },
    {
      colorCode: "#4D36C0",
      colorName: "Purple",
    },
  ],
  label: "Color",
};

const InitialValueTemplate = (args) => ({
  components: {
    DRestrictedColorConfig,
    DText,
    DAutoLayout,
  },
  data: () => ({
    value: "#2A2E33",
  }),
  setup() {
    return { args };
  },
  template: `
    <d-auto-layout direction="vertical">
      <d-restricted-color-config v-model="value" v-bind="args"/>
      <d-text>{{value}}</d-text>
    </d-auto-layout>
`,
});
export const InitialValue = InitialValueTemplate.bind({});
InitialValue.args = {
  colors: [
    {
      colorCode: "#0C9CCC",
      colorName: "Teal",
    },
    {
      colorCode: "#1A8B5A",
      colorName: "Green",
    },
    {
      colorCode: "#2A2E33",
      colorName: "Black",
    },
    {
      colorCode: "#971E31",
      colorName: "Red",
    },
    {
      colorCode: "#E1E7EC",
      colorName: "White",
    },
    {
      colorCode: "#E06104",
      colorName: "Orange",
    },
    {
      colorCode: "#0059AC",
      colorName: "Blue",
    },
    {
      colorCode: "#4D36C0",
      colorName: "Purple",
    },
  ],
  label: "Color",
};
