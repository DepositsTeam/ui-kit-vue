import DTable from "./DTableOld.vue";
import DBadge from "../d-badge/DBadge.vue";
import { columns, data } from "./data/sitcom-data";

export default {
  title: "Deprecated Table",
  component: DTable,
  argTypes: {},
};

const Template = (args) => ({
  components: {
    DTable,
  },
  setup() {
    return { args };
  },
  template: `<d-table v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  data,
  columns,
};

export const Search = Template.bind({});
Search.args = {
  data,
  columns,
  search: true,
};

export const Pagination = Template.bind({});
Pagination.args = {
  paginate: true,
  data,
  columns,
  itemsPerPage: 3,
  currentPageSiblings: 1,
};

export const CheckboxTable = Template.bind({});
CheckboxTable.args = {
  checkboxes: true,
  data,
  columns,
};

export const CheckboxCSVExport = Template.bind({});
CheckboxCSVExport.args = {
  checkboxes: true,
  data,
  columns,
  enableCsvExport: true,
};

export const CheckboxPagination = Template.bind({});
CheckboxPagination.args = {
  checkboxes: true,
  paginate: true,
  columns,
  data,
};

export const WithCustomizeView = Template.bind({});
WithCustomizeView.args = {
  checkboxes: true,
  paginate: true,
  columns,
  data,
  enableCustomizeView: true,
};

export const WithCustomComponents = Template.bind({});
WithCustomComponents.args = {
  columns,
  data: [
    {
      name: "Steve Carell",
      city: "Scranton",
      company: "Dunder Mifflin",
      country: "US",
      qty: "9",
      state: {
        components: {
          DBadge,
        },
        template: `<d-badge size="large" :subtle="true" color-scheme="green">Completed</d-badge>`,
      },
    },
    {
      name: "Jim Parsons",
      city: "Pasadena",
      company: "California Institute of Technology",
      country: "US",
      qty: "12",
      state: {
        is: DBadge,
        text: "Rejected",
        colorScheme: "red",
        size: "large",
        subtle: true,
      },
    },
    {
      name: "Josh Radnor",
      city: "New York",
      company: "Architectury",
      country: "US",
      qty: "9",
      state: {
        components: {
          DBadge,
        },
        template: `<d-badge size="large" :subtle="true" color-scheme="yellow">Pending Review</d-badge>`,
      },
    },
  ],
};
