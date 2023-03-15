import DExpandableTable from "./DExpandableTable.vue";

export default {
  title: "Expandable Table",
  argTypes: {},
  component: DExpandableTable,
};

const Template = (args) => ({
  components: {
    DExpandableTable,
  },
  setup() {
    return { args };
  },
  template: `<d-expandable-table v-bind="args" />`,
});

export const Default = Template.bind({});
