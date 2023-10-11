import DQuickTool from "./DQuickTool.vue";
import { Send2OutlineIcon } from "@/main";

export default {
  title: "Quick Tool",
  component: DQuickTool,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    icon: {
      control: { type: "object" },
    },
    isAdded: {
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => ({
  components: {
    DQuickTool,
  },
  setup() {
    return { args };
  },
  template: `
      <d-quick-tool v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {
  title: "Send money",
  icon: Send2OutlineIcon,
  isAdded: true,
};
