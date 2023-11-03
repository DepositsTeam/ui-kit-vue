import DStaticStat from "./DStaticStat.vue";
import { Profile2UserOutlineIcon } from "@/main";

export default {
  title: "Static Stat",
  component: DStaticStat,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
    },
    icon: {
      control: { type: "object" },
    },
    collections: {
      control: { type: "object" },
    },
  },
};

const Template = (args) => ({
  components: {
    DStaticStat,
  },
  setup() {
    return { args };
  },
  template: `
      <d-static-stat v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {
  label: "Entities",
  icon: Profile2UserOutlineIcon,
  collections: [
    {
      title: "Total entities",
      text: "10,432",
    },
    {
      title: "Active entities",
      text: "7,432",
    },
    {
      title: "Entities",
      text: "220,842",
    },
    {
      title: "Transactions",
      text: "1,098 / $2.7M",
    },
  ],
};
