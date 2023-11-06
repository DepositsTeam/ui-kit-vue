import DStaticStat2 from "./DStaticStat2.vue";
import { Profile2UserFilledIcon } from "@/main";

export default {
  title: "Static Stats 2",
  component: DStaticStat2,
  tags: ["autodocs"],
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
    variant: {
      control: { type: "select" },
      options: ["filled", "outline"],
    },
    smartColor: {
      control: { type: "color" },
    },
  },
};

const Template = (args) => ({
  components: {
    DStaticStat2,
  },
  setup() {
    return { args };
  },
  template: `
      <d-static-stat2 v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {
  label: "Entities",
  text: "10,432",
  icon: Profile2UserFilledIcon,
  colorScheme: "outline",
};
