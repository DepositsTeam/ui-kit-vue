import DPagination from "./DPagination.vue";

export default {
  title: "Pagination",
  component: DPagination,
  argTypes: {
    totalPages: {
      control: { type: "number" },
    },
    currentPage: {
      control: { type: "number" },
    },
    currentPageSiblings: {
      control: { type: "number" },
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
