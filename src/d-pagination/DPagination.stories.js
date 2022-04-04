import DPagination from "./DPagination.vue";

export default {
  title: "Pagination",
  component: DPagination,
  argTypes: {
    totalPages: {
      control: { type: "text" },
    },
    currentPage: {
      control: { type: "text" },
    },
    visiblePages: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: {
    DPagination,
  },
  setup() {
    return { args };
  },
  template: `<d-pagination v-bind="args" />`,
});

export const Default = Template.bind({});
