import DRestrictedColorConfig from "./DRestrictedColorConfig.vue";

export default {
  title: "Forms/Restricted Color Config",
  component: DRestrictedColorConfig,
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
