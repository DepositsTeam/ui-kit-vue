import DStaticStats2 from "./DStaticStats2.vue";
import { Profile2UserFilledIcon } from "@/main";

export default {
  title: "Static Stats 2",
  component: DStaticStats2,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    icon: {
      control: { type: "object" },
    },
    text: {
      control: { type: "text" },
    },
    colorScheme: {
      control: { type: "select" },
      options: ["primary", "outline"],
    },
  },
};

const Template = (args) => ({
  components: {
    DStaticStats2,
  },
  setup() {
    return { args };
  },
  template: `
      <d-static-stats2 v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {
  label: "Entities",
  text: "10,432",
  icon: Profile2UserFilledIcon,
  colorScheme: "primary",
};
