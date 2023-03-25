var a=Object.defineProperty;var l=(e,t)=>a(e,"name",{value:t,configurable:!0});import{r,s}from"./DAccordion-866dc07b.js";import"./vue.esm-bundler-f42bdcc2.js";import"./iframe-e3c9dd8c.js";const b={parameters:{storySource:{source:`import DCountryDropdown from "./DCountryDropdown.vue";
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
    optionTitle: {
      control: { type: "text" },
      table: {
        defaultValue: "name",
      },
    },
    optionValue: {
      control: { type: "text" },
      table: {
        defaultValue: "iso2",
      },
    },
    returnFullObject: {
      control: { type: "boolean" },
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
  template: \`
    <d-country-dropdown v-bind="args" v-model="country" @states-changed="hydrateStates" />
    <d-select name="States" :options="states" v-model="selectedState" />
    <p>Selected states: {{states}}</p>
    <p>Selected country: {{country}}</p>
  \`,
});

export const Default = Template.bind({});
Default.args = {
  label: "Select a country",
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
`,locationsMap:{default:{startLoc:{col:17,line:61},endLoc:{col:2,line:85},startBody:{col:17,line:61},endBody:{col:2,line:85}},"return-full-object":{startLoc:{col:17,line:61},endLoc:{col:2,line:85},startBody:{col:17,line:61},endBody:{col:2,line:85}},"use-different-title-and-value":{startLoc:{col:17,line:61},endLoc:{col:2,line:85},startBody:{col:17,line:61},endBody:{col:2,line:85}}}}},component:r,title:"Forms/Country Dropdown",argTypes:{label:{control:{type:"text"}},placeholder:{control:{type:"text"}},disabled:{control:{type:"boolean"}},dropDown:{control:{type:"boolean"}},size:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]},errorMessage:{control:{type:"text"}},rightIcon:{control:{type:"object"}},leftIcon:{control:{type:"object"}},onlyNumbers:{control:{type:"boolean"}},wrapperClass:{control:{type:"text"}},fontFace:{control:{type:"select"},options:["circularSTD","heroNew"]},optionTitle:{control:{type:"text"},table:{defaultValue:"name"}},optionValue:{control:{type:"text"},table:{defaultValue:"iso2"}},returnFullObject:{control:{type:"boolean"}}}},n=l(e=>({components:{DCountryDropdown:r,DSelect:s},data:()=>({country:"",states:[],selectedState:""}),setup(){return{args:e}},methods:{hydrateStates:function(t){this.states=t.map(o=>({text:o.name,value:o.name}))}},template:`
    <d-country-dropdown v-bind="args" v-model="country" @states-changed="hydrateStates" />
    <d-select name="States" :options="states" v-model="selectedState" />
    <p>Selected states: {{states}}</p>
    <p>Selected country: {{country}}</p>
  `}),"Template"),c=n.bind({});c.args={label:"Select a country"};const p=n.bind({});p.args={label:"Select a country",returnFullObject:!0};const u=n.bind({});u.args={label:"Select a country",optionTitle:"iso3",optionValue:"iso2"};const f=["Default","ReturnFullObject","UseDifferentTitleAndValue"];export{c as Default,p as ReturnFullObject,u as UseDifferentTitleAndValue,f as __namedExportsOrder,b as default};
//# sourceMappingURL=DCountryDropdown.stories-b8f56236.js.map
