import{aa as b,E as f}from"./DWysiwyg-688f494a.js";import"./vue.esm-bundler-673e2372.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const j={component:b,title:"Forms/Country Dropdown",argTypes:{label:{control:{type:"text"}},placeholder:{control:{type:"text"}},disabled:{control:{type:"boolean"}},dropDown:{control:{type:"boolean"}},size:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]},errorMessage:{control:{type:"text"}},rightIcon:{control:{type:"object"}},leftIcon:{control:{type:"object"}},onlyNumbers:{control:{type:"boolean"}},wrapperClass:{control:{type:"text"}},fontFace:{control:{type:"select"},options:["circularSTD","heroNew"]},optionTitle:{control:{type:"text"},table:{defaultValue:"name"}},optionValue:{control:{type:"text"},table:{defaultValue:"iso2"}},returnFullObject:{control:{type:"boolean"}}}},a=D=>({components:{DCountryDropdown:b,DSelect:f},data:()=>({country:"",states:[],selectedState:""}),setup(){return{args:D}},methods:{hydrateStates:function(v){this.states=v.map(o=>({text:o.name,value:o.name}))}},template:`
    <d-country-dropdown v-bind="args" v-model="country" @states-changed="hydrateStates" />
    <d-select name="States" :options="states" v-model="selectedState" />
    <p>Selected states: {{states}}</p>
    <p>Selected country: {{country}}</p>
  `}),t=a.bind({});t.args={label:"Select a country"};const e=a.bind({});e.args={label:"Select a country",errorMessage:"Error message"};const n=a.bind({});n.args={label:"Select a country",returnFullObject:!0};const s=a.bind({});s.args={label:"Select a country",optionTitle:"iso3",optionValue:"iso2"};var r,c,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    DCountryDropdown,
    DSelect
  },
  data: () => ({
    country: "",
    states: [],
    selectedState: ""
  }),
  setup() {
    return {
      args
    };
  },
  methods: {
    hydrateStates: function (states) {
      this.states = states.map(state => ({
        text: state.name,
        value: state.name
      }));
    }
  },
  template: \`
    <d-country-dropdown v-bind="args" v-model="country" @states-changed="hydrateStates" />
    <d-select name="States" :options="states" v-model="selectedState" />
    <p>Selected states: {{states}}</p>
    <p>Selected country: {{country}}</p>
  \`
})`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,p,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    DCountryDropdown,
    DSelect
  },
  data: () => ({
    country: "",
    states: [],
    selectedState: ""
  }),
  setup() {
    return {
      args
    };
  },
  methods: {
    hydrateStates: function (states) {
      this.states = states.map(state => ({
        text: state.name,
        value: state.name
      }));
    }
  },
  template: \`
    <d-country-dropdown v-bind="args" v-model="country" @states-changed="hydrateStates" />
    <d-select name="States" :options="states" v-model="selectedState" />
    <p>Selected states: {{states}}</p>
    <p>Selected country: {{country}}</p>
  \`
})`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,y,i;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    DCountryDropdown,
    DSelect
  },
  data: () => ({
    country: "",
    states: [],
    selectedState: ""
  }),
  setup() {
    return {
      args
    };
  },
  methods: {
    hydrateStates: function (states) {
      this.states = states.map(state => ({
        text: state.name,
        value: state.name
      }));
    }
  },
  template: \`
    <d-country-dropdown v-bind="args" v-model="country" @states-changed="hydrateStates" />
    <d-select name="States" :options="states" v-model="selectedState" />
    <p>Selected states: {{states}}</p>
    <p>Selected country: {{country}}</p>
  \`
})`,...(i=(y=n.parameters)==null?void 0:y.docs)==null?void 0:i.source}}};var S,g,h;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    DCountryDropdown,
    DSelect
  },
  data: () => ({
    country: "",
    states: [],
    selectedState: ""
  }),
  setup() {
    return {
      args
    };
  },
  methods: {
    hydrateStates: function (states) {
      this.states = states.map(state => ({
        text: state.name,
        value: state.name
      }));
    }
  },
  template: \`
    <d-country-dropdown v-bind="args" v-model="country" @states-changed="hydrateStates" />
    <d-select name="States" :options="states" v-model="selectedState" />
    <p>Selected states: {{states}}</p>
    <p>Selected country: {{country}}</p>
  \`
})`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const F=["Default","HasError","ReturnFullObject","UseDifferentTitleAndValue"];export{t as Default,e as HasError,n as ReturnFullObject,s as UseDifferentTitleAndValue,F as __namedExportsOrder,j as default};
//# sourceMappingURL=DCountryDropdown.stories-acdfdc64.js.map
