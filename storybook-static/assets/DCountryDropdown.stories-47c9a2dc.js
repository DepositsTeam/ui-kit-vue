import{aj as D,l as f,B as w}from"./DVerticalMovable-99916a1b.js";import"./vue.esm-bundler-aecd4be6.js";import{s as x}from"./selectProps-2e81a4d1.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const F={component:D,title:"Forms/Country Dropdown",tags:["autodocs"],argTypes:{...f,...x}},a=v=>({components:{DCountryDropdown:D,DSelect:w},data:()=>({country:"",states:[],selectedState:""}),setup(){return{args:v}},methods:{hydrateStates:function(b){this.states=b.map(r=>({text:r.name,value:r.name}))}},template:`
    <d-country-dropdown v-bind="args" v-model="country" @states-changed="hydrateStates" />
    <d-select name="States" :options="states" v-model="selectedState" />
    <p>Selected states: {{ states }}</p>
    <p>Selected country: {{ country }}</p>
  `}),t=a.bind({});t.args={label:"Select a country"};const e=a.bind({});e.args={label:"Select a country",errorMessage:"Error message"};const n=a.bind({});n.args={label:"Select a country",returnFullObject:!0};const s=a.bind({});s.args={label:"Select a country",optionTitle:"iso3",optionValue:"iso2"};var o,c,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
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
})`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,l,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
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
})`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,i,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
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
})`,...(y=(i=n.parameters)==null?void 0:i.docs)==null?void 0:y.source}}};var S,g,h;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
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
})`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const O=["Default","HasError","ReturnFullObject","UseDifferentTitleAndValue"];export{t as Default,e as HasError,n as ReturnFullObject,s as UseDifferentTitleAndValue,O as __namedExportsOrder,F as default};
//# sourceMappingURL=DCountryDropdown.stories-47c9a2dc.js.map
