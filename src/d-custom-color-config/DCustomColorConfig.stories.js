import DCustomColorConfig from "./DCustomColorConfig.vue";

export default {
  title: "Forms/Custom Color Config",
  component: DCustomColorConfig,
  argTypes: {
    label: {
      control: { type: "text" },
      default: "Color",
    },
    height: {
      control: { type: "text" },
      default: "28.997px",
    },
    width: {
      control: { type: "text" },
      default: "28.997px",
    },
    colors: {
      control: { type: "object" },
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge", "huge", "massive"],
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
