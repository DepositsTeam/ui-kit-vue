import DUploadCard from "./DUploadCard.vue";

export default {
  component: DUploadCard,
  title: "Upload Card",
  tags: ["autodocs"],
  argTypes: {
    file: {
      control: {
        type: "object",
      },
    },
    uuid: {
      control: {
        type: "string",
      },
    },
    name: {
      control: {
        type: "string",
      },
    },
    extension: {
      control: {
        type: "string",
      },
    },
    size: {
      control: {
        type: "string",
      },
    },
    errorMessage: {
      control: {
        type: "string",
      },
    },
    status: {
      control: {
        type: "select",
        options: ["uploading", "paused", "error", "success"],
      },
    },
  },
};

const Template = (args) => ({
  components: { DUploadCard },
  setup() {
    return { args };
  },
  template: `<d-upload-card v-bind="args" />`,
});

export const Default = Template.bind({});
