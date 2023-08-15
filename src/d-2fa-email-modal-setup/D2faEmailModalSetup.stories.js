import D2faEmailModalSetup from "./D2faEmailModalSetup.vue";

export default {
  title: "Modals/2fa Email Modal Setup",
  component: D2faEmailModalSetup,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    secret: {
      control: { type: "text" },
    },
    image: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: {
    D2faEmailModalSetup,
  },
  setup() {
    return { args };
  },
  template: `
      <d-2fa-email-modal-setup v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {
  secret: "dk_17j48r8qnxq9984w9429uqcwur09quw0r",
  image: "https://img.abyssale.com/574bfa75-c880-46be-97ae-599473818958",
};
