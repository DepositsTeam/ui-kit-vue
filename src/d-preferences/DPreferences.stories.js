import DPreferences from "./DPreferences.vue";

export default {
  title: "Preferences",
  component: DPreferences,
  tags: ["autodocs"],
  argTypes: {
    lists: {
      control: { type: "object" },
    },
  },
};

const Template = (args) => ({
  components: {
    DPreferences,
  },
  setup() {
    return { args };
  },
  template: `
      <d-preferences v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {
  lists: [
    {
      title: "PAY & TRANSFER",
      items: [
        {
          id: 1,
          key: "Successful payments",
          value: true,
        },
        {
          id: 2,
          key: "Failed payments",
          value: true,
        },
      ],
    },
    {
      title: "ACCOUNTS",
      items: [
        {
          id: 3,
          key: "Debits",
          value: true,
        },
        {
          id: 4,
          key: "Credits",
          value: true,
        },
      ],
    },
  ],
};
