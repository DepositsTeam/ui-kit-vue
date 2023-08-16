import{a2 as i,u as b}from"./DWysiwyg-ce37d463.js";import"./vue.esm-bundler-d253c880.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const w={component:i,title:"Forms/Country Dropdown",argTypes:{label:{control:{type:"text"}},placeholder:{control:{type:"text"}},disabled:{control:{type:"boolean"}},dropDown:{control:{type:"boolean"}},size:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]},errorMessage:{control:{type:"text"}},rightIcon:{control:{type:"object"}},leftIcon:{control:{type:"object"}},onlyNumbers:{control:{type:"boolean"}},wrapperClass:{control:{type:"text"}},fontFace:{control:{type:"select"},options:["circularSTD","heroNew"]},optionTitle:{control:{type:"text"},table:{defaultValue:"name"}},optionValue:{control:{type:"text"},table:{defaultValue:"iso2"}},returnFullObject:{control:{type:"boolean"}}}},a=S=>({components:{DCountryDropdown:i,DSelect:b},data:()=>({country:"",states:[],selectedState:""}),setup(){return{args:S}},methods:{hydrateStates:function(g){this.states=g.map(s=>({text:s.name,value:s.name}))}},template:`
    <d-country-dropdown v-bind="args" v-model="country" @states-changed="hydrateStates" />
    <d-select name="States" :options="states" v-model="selectedState" />
    <p>Selected states: {{states}}</p>
    <p>Selected country: {{country}}</p>
  `}),t=a.bind({});t.args={label:"Select a country"};const e=a.bind({});e.args={label:"Select a country",returnFullObject:!0};const n=a.bind({});n.args={label:"Select a country",optionTitle:"iso3",optionValue:"iso2"};var o,r,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
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
})`,...(c=(r=t.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var l,d,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
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
})`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
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
})`,...(y=(m=n.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const x=["Default","ReturnFullObject","UseDifferentTitleAndValue"];export{t as Default,e as ReturnFullObject,n as UseDifferentTitleAndValue,x as __namedExportsOrder,w as default};
//# sourceMappingURL=DCountryDropdown.stories-561c58e2.js.map
