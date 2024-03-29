import DAvatarCard2 from "./DAvatarCard2.vue";

export default {
  title: "Avatar Card 2",
  component: DAvatarCard2,
  tags: ["autodocs"],
  argTypes: {
    heading: {
      control: { type: "text" },
    },
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    headerButtonText: {
      control: { type: "text" },
    },
    footerButtonText: {
      control: { type: "text" },
    },
    noOfVisibleAvatars: {
      control: { type: "number" },
    },
    isAvatarSubtle: {
      control: { type: "boolean" },
    },
    avatars: {
      control: { type: "object" },
    },
    buttonSizes: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge", "huge", "massive"],
    },
  },
};

const Template = (args) => ({
  components: {
    DAvatarCard2,
  },
  setup() {
    return { args };
  },
  template: `
      <d-avatar-card2 v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {
  heading: "UNPAID INVOICES",
  title: "Overdue",
  description: "16 ($41,350.56)",
  headerButtonText: "See all",
  footerButtonText: "Send reminder",
  noOfVisibleAvatars: 6,
  isAvatarSubtle: true,
  avatars: [
    {
      name: "John",
    },
    {
      imgURL:
        "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
    },
    {
      name: "Saviour",
    },
    {
      name: "June",
    },
    {
      imgURL:
        "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
    },
    {
      name: "Nora",
    },
    {
      name: "Presh",
    },
    {
      name: "Master",
    },
  ],
};
