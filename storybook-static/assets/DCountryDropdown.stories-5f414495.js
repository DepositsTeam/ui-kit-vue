import{ak as w,n as O,E as T}from"./DWysiwyg-d62d5613.js";import"./vue.esm-bundler-77038495.js";import{s as E}from"./selectProps-2e81a4d1.js";import"./iframe-fea5ef6c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const R={component:w,title:"Forms/Country Dropdown",tags:["autodocs"],argTypes:{...O,...E}},r=x=>({components:{DCountryDropdown:w,DSelect:T},data:()=>({country:"",states:[],selectedState:""}),setup(){return{args:x}},methods:{hydrateStates:function(C){this.states=C.map(o=>({text:o.name,value:o.name}))}},template:`
    <d-country-dropdown v-bind="args" v-model="country" @states-changed="hydrateStates" />
    <d-select name="States" :options="states" v-model="selectedState" />
    <p>Selected states: {{ states }}</p>
    <p>Selected country: {{ country }}</p>
  `}),t=r.bind({});t.args={label:"Select a country"};const e=r.bind({});e.args={label:"Select a country",errorMessage:"Error message"};const n=r.bind({});n.args={label:"Select a country",returnFullObject:!0};const s=r.bind({});s.args={label:"Select a country",optionTitle:"iso3",optionValue:"iso2"};const a=r.bind({});a.args={label:"Select a country",onlyUs:!0,returnFullObject:!0};var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
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
    <p>Selected states: {{ states }}</p>
    <p>Selected country: {{ country }}</p>
  \`
})`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,u,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
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
    <p>Selected states: {{ states }}</p>
    <p>Selected country: {{ country }}</p>
  \`
})`,...(m=(u=e.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var y,S,i;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
    <p>Selected states: {{ states }}</p>
    <p>Selected country: {{ country }}</p>
  \`
})`,...(i=(S=n.parameters)==null?void 0:S.docs)==null?void 0:i.source}}};var g,h,D;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
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
    <p>Selected states: {{ states }}</p>
    <p>Selected country: {{ country }}</p>
  \`
})`,...(D=(h=s.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var v,b,f;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
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
    <p>Selected states: {{ states }}</p>
    <p>Selected country: {{ country }}</p>
  \`
})`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const k=["Default","HasError","ReturnFullObject","UseDifferentTitleAndValue","OnlyUS"];export{t as Default,e as HasError,a as OnlyUS,n as ReturnFullObject,s as UseDifferentTitleAndValue,k as __namedExportsOrder,R as default};
//# sourceMappingURL=DCountryDropdown.stories-5f414495.js.map
