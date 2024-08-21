import{ax as a}from"./DWysiwyg-d62d5613.js";import"./vue.esm-bundler-77038495.js";import"./iframe-fea5ef6c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const f={title:"Card 2",component:a,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},docLink:{control:{type:"text"}},demoLink:{control:{type:"text"}},icon:{control:{type:"text"}},checked:{control:{type:"boolean"}}}},p=s=>({components:{DCard2:a},setup(){return{args:s}},template:`
      <d-card2 v-bind="args"/>
    `}),e=p.bind({});e.args={title:"API Reference",description:"The Deposits API is built around a standard REST architecture, uses predictable, resources-oriented URLs, and all data are returned in JSON format. Requests are made with HTTP methods and HTTP response codes indicate the success or failure of those requests.",docLink:"https://docs.deposits.dev/",demoLink:"https://launch.new/programs",icon:"https://docs.deposits.dev/assets/svgs/home/services_dark.svg",checked:!1};const u=s=>({components:{DCard2:a},data:()=>({value:""}),setup(){return{args:s}},template:`
      <d-card2 v-model="value" value="I am a card" v-bind="args"/>
      <p>Card value is: {{ value }}</p>
    `}),t=u.bind({});t.args={title:"API Reference",description:"The Deposits API is built around a standard REST architecture, uses predictable, resources-oriented URLs, and all data are returned in JSON format. Requests are made with HTTP methods and HTTP response codes indicate the success or failure of those requests.",docLink:"https://docs.deposits.dev/",demoLink:"https://launch.new/programs",icon:"https://docs.deposits.dev/assets/svgs/home/services_dark.svg",checked:!1};var r,o,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    DCard2
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <d-card2 v-bind="args"/>
    \`
})`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var d,c,i;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    DCard2
  },
  data: () => ({
    value: ""
  }),
  setup() {
    return {
      args
    };
  },
  template: \`
      <d-card2 v-model="value" value="I am a card" v-bind="args"/>
      <p>Card value is: {{ value }}</p>
    \`
})`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const b=["Default","WithValue"];export{e as Default,t as WithValue,b as __namedExportsOrder,f as default};
//# sourceMappingURL=DCard2.stories-2255bf95.js.map
