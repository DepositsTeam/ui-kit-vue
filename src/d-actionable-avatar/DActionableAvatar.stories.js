import DActionableAvatar from "./DActionableAvatar.vue";

export default {
  title: "Actionable Avatar",
  component: DActionableAvatar,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    subTitle: {
      control: { type: "text" },
    },
    buttonText: {
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
    buttonSize: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge", "huge", "massive"],
    },
  },
};

const Template = (args) => ({
  components: {
    DActionableAvatar,
  },
  setup() {
    return { args };
  },
  methods: {
    deleteClicked: function () {
      alert("Delete clicked");
    },
  },
  template: `
      <d-actionable-avatar @delete-clicked="deleteClicked" v-bind="args">
      </d-actionable-avatar>
  `,
});

export const Default = Template.bind({});
Default.args = {
  title: "Platinum",
  description: "7 Tenants",
  subTitle: "(ID: 001)",
  buttonText: "+ Add tenants",
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
