import DStaticStats from "./DStaticStats.vue";
import { Profile2UserOutlineIcon } from "@/main";

export default {
  title: "Static Stats",
  component: DStaticStats,
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
    DStaticStats,
  },
  setup() {
    return { args };
  },
  template: `
      <d-static-stats v-bind="args"/>`,
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
