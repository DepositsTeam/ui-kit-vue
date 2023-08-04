import DCustomColorConfig from "./DCustomColorConfig.vue";

export default {
  title: "Custom Color Config",
  component: DCustomColorConfig,
  argTypes: {
    label: {
      control: { type: "string" },
    },
    height: {
      control: { type: "string" },
    },
    width: {
      control: { type: "string" },
    },
    colors: {
      control: { type: "array" },
    },
  },
};

const Template = (args) => ({
  components: {
    DCustomColorConfig,
  },
  data: () => ({
    value: "#0DB9E9",
  }),
  setup() {
    return { args };
  },
  template: `
      <d-custom-color-config v-model="value" v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {
  colors: [
    "#0DB9E9",
    "#7B61FF",
    "#00BBAA",
    "#0D7FE9",
    "#FFCC00",
    "#27C079",
    "#E85E75",
  ],
  label: "Color",
  height: "28.997px",
  width: "28.997px",
};
