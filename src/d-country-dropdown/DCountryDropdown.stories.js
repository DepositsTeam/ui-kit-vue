import DCountryDropdown from "./DCountryDropdown.vue";
import { DSelect } from "../main";

export default {
  component: DCountryDropdown,
  title: "Forms/Country Dropdown",
  argTypes: {
    label: {
      control: { type: "text" },
    },
    placeholder: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    dropDown: {
      control: { type: "boolean" },
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge", "huge", "massive"],
    },
    errorMessage: {
      control: { type: "text" },
    },
    rightIcon: {
      control: { type: "object" },
    },
    leftIcon: {
      control: { type: "object" },
    },
    onlyNumbers: {
      control: { type: "boolean" },
    },
    wrapperClass: {
      control: { type: "text" },
    },
    fontFace: {
      control: { type: "select" },
      options: ["circularSTD", "heroNew"],
    },
  },
};

const Template = (args) => ({
  components: { DCountryDropdown, DSelect },
  data: () => ({
    country: "",
    states: [],
    selectedState: "",
  }),
  setup() {
    return { args };
  },
  methods: {
    hydrateStates: function (states) {
      this.states = states.map((state) => ({
        text: state.name,
        value: state.name,
      }));
    },
  },
  template: `
    <d-country-dropdown v-bind="args" v-model="country" @states-changed="hydrateStates" />
    <d-select name="States" :options="states" v-model="selectedState" />
    <p>Selected states: {{states}}</p>
  `,
});

export const Default = Template.bind({});
Default.args = {
  label: "Select a country",
};
