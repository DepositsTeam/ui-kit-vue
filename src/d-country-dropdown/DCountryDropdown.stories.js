import DCountryDropdown from "./DCountryDropdown.vue";
import { DSelect } from "../main";
import { inputArgTypes } from "@/utils/props/inputProps";
import { selectArgTypes } from "@/utils/props/selectProps";

export default {
  component: DCountryDropdown,
  title: "Forms/Country Dropdown",
  tags: ["autodocs"],
  argTypes: {
    ...inputArgTypes,
    ...selectArgTypes,
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
    <p>Selected states: {{ states }}</p>
    <p>Selected country: {{ country }}</p>
  `,
});

export const Default = Template.bind({});
Default.args = {
  label: "Select a country",
};

export const HasError = Template.bind({});
HasError.args = {
  label: "Select a country",
  errorMessage: "Error message",
};

export const ReturnFullObject = Template.bind({});
ReturnFullObject.args = {
  label: "Select a country",
  returnFullObject: true,
};

export const UseDifferentTitleAndValue = Template.bind({});
UseDifferentTitleAndValue.args = {
  label: "Select a country",
  optionTitle: "iso3",
  optionValue: "iso2",
};

export const OnlyUS = Template.bind({});
OnlyUS.args = {
  label: "Select a country",
  onlyUs: true,
  returnFullObject: true,
};
