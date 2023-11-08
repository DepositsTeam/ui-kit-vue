import DPagination from "./DPagination.vue";
import { DarkModeProvider } from "../main";

export default {
  title: "Pagination",
  component: DPagination,
  tags: ["autodocs"],
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
    smartColor: {
      control: { type: "color" },
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

const DarkModeTemplate = (args) => ({
  components: {
    DPagination,
    DarkModeProvider,
  },
  methods: {
    console: function (value) {
      console.log("Page changed to: ", value);
    },
  },
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
      <d-pagination @page-changed="console" v-bind="args" />
    </dark-mode-provider>
    `,
});

const DarkModeTemplateFactory = () => {
  const Bound = DarkModeTemplate.bind({});
  Bound.decorators = [
    () => ({
      template:
        '<div style="padding: 3em; background: #121A26;"><story /></div>',
    }),
  ];
  return Bound;
};

export const Default = Template.bind({});

export const DarkDefault = DarkModeTemplateFactory();

export const OnlyNextAndPrevAsync = Template.bind({});
OnlyNextAndPrevAsync.args = {
  hidePages: true,
  asyncPrevNext: true,
};

export const DisabledPrevOnlyNextAndPrevAsync = Template.bind({});
DisabledPrevOnlyNextAndPrevAsync.args = {
  hidePages: true,
  asyncPrevNext: true,
  prevDisabled: true,
};

export const DisabledNextOnlyNextAndPrevAsync = Template.bind({});
DisabledNextOnlyNextAndPrevAsync.args = {
  hidePages: true,
  asyncPrevNext: true,
  nextDisabled: true,
};
