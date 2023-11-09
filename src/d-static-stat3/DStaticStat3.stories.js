import DStaticStat3 from "./DStaticStat3.vue";
import Profile2UserOutlineIcon from "/src/icons/outline/Profile2UserOutlineIcon.vue";

export default {
  title: "Static Stats 3",
  component: DStaticStat3,
  argTypes: {
    stat1: {
      control: { type: "object" },
    },
    stat2: {
      control: { type: "object" },
    },
    icon: {
      control: { type: ["object", "text"] },
    },
  },
};

const Template = (args) => ({
  components: {
    DStaticStat3,
  },
  setup() {
    return { args };
  },
  template: `
      <d-static-stat3 v-bind="args"/>
    `,
});

export const Default = Template.bind({});
Default.args = {
  stat1: {
    text: "API Calls this month",
    value: 10,
  },
  stat2: {
    text: "Total API Calls",
    value: 50,
  },
  icon: Profile2UserOutlineIcon,
};
