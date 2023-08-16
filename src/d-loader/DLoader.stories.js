import DLoader from "./DLoader.vue";
import DText from "../d-text/DText.vue";

export default {
  title: "Loader",
  component: DLoader,
  argTypes: {
    fullPage: {
      control: { type: "boolean" },
    },
    centered: {
      control: { type: "boolean" },
    },
    centeredFullHeight: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    loader: {
      control: { type: "select" },
      options: ["ring", "equalizer", "ringed-circle"],
    },
    smartColor: {
      control: { type: "color" },
    },
    translucent: {
      control: { type: "boolean" },
    },
    loaderSize: {
      control: { type: "text" },
      table: {
        defaultValue: "80px",
      },
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
Default.args = {
  fullPage: false,
};

export const EqualizerLoader = Template.bind({});
EqualizerLoader.args = {
  loader: "equalizer",
};

export const RingedCircle = Template.bind({});
RingedCircle.args = {
  loader: "ringed-circle",
};

export const FullPage = Template.bind({});
FullPage.args = {
  fullPage: true,
};

export const Centered = Template.bind({});
Centered.args = {
  centered: true,
};

export const CenteredFullHeight = Template.bind({});
CenteredFullHeight.args = {
  centeredFullHeight: true,
};
