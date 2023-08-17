import DCardSwitch from "./DCardSwitch.vue";
import DSwitch from "@/d-switch/DSwitch.vue";
import { DBox } from "@/main";

export default {
  title: "Forms/Card Switch",
  component: DCardSwitch,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    text: {
      control: { type: "text" },
    },
    colorScheme: {
      control: { type: "select" },
      options: ["primary", "danger", "success", "outline", "invisible"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    thumbColor: {
      control: { type: "color" },
    },
    switchColor: {
      control: { type: "color" },
    },
    alignRight: {
      control: { type: "boolean" },
    },
    thumbSize: {
      control: { type: "text" },
      default: "18px",
    },
    switchWidth: {
      control: { type: "text" },
      default: "56px",
    },
    switchHeight: {
      control: { type: "text" },
      default: "26px",
    },
  },
};

const Template = (args) => ({
  components: {
    DCardSwitch,
  },
  data: () => ({
    value: "#0DB9E9",
  }),
  setup() {
    return { args };
  },
  template: `
      <d-card-switch v-bind="args"/>`,
});

const VModelledTemplate = (args) => ({
  components: { DCardSwitch, DBox },
  setup() {
    return { args };
  },
  data: () => ({
    currentState: true,
  }),
  template: `
      <d-box>
      <d-card-switch v-bind="args" v-model="currentState"/>
      <d-box>{{ JSON.stringify(currentState) }}</d-box>
      </d-box>
    `,
});

export const ModelledMode = VModelledTemplate.bind({});
ModelledMode.args = {
  title: "Google Authenticator",
  text: "Use the Google Authenticator app to generate one time security codes.",
};

export const Default = Template.bind({});
Default.args = {
  title: "Google Authenticator",
  text: "Use the Google Authenticator app to generate one time security codes.",
};
