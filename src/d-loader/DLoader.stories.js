import DLoader from "./DLoader.vue";
import DText from "../d-text/DText.vue";

export default {
  title: "Loader",
  component: DLoader,
  argTypes: {
    fullPage: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    loader: {
      control: { type: "select" },
      options: ["ring"],
    },
  },
};

const Template = (args) => ({
  components: {
    DLoader,
    DText,
  },
  setup() {
    return { args };
  },
  template: `<d-loader v-bind="args"><d-text>I am some text that will show after loading</d-text></d-loader>`,
});

export const Default = Template.bind({});

export const FullPage = Template.bind({});
FullPage.args = {
  fullPage: true,
};
