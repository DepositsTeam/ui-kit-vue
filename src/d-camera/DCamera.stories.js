import DCamera from "./DCamera.vue";
import { DarkModeProvider } from "../main";

export default {
  title: "Camera",
  component: DCamera,
  argTypes: {
    showFocusFrame: {
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => ({
  components: { DCamera },
  setup() {
    return { args };
  },
  template: `<d-camera v-bind="args" />`,
});

export const Default = Template.bind({});
