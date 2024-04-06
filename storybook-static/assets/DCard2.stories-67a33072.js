import{ax as a}from"./DWysiwyg-80ca4765.js";import"./vue.esm-bundler-a99e1ba3.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const g={title:"Card 2",component:a,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},docLink:{control:{type:"text"}},demoLink:{control:{type:"text"}},icon:{control:{type:"text"}},checked:{control:{type:"boolean"}}}},p=s=>({components:{DCard2:a},setup(){return{args:s}},template:`
      <d-card2 v-bind="args"/>
    `}),e=p.bind({});e.args={title:"API Reference",description:"The Deposits API is built around a standard REST architecture, uses predictable, resource-oriented URLs, and all data are returned in JSON format. Requests are made with HTTP methods and HTTP response codes indicate the success or failure of those requests.",docLink:"https://docs.deposits.dev/",demoLink:"https://launch.new/programs",icon:"https://docs.deposits.dev/assets/svgs/home/services_dark.svg",checked:!1};const u=s=>({components:{DCard2:a},data:()=>({value:""}),setup(){return{args:s}},template:`
      <d-card2 v-model="value" value="I am a card" v-bind="args"/>
      <p>Card value is: {{ value }}</p>
    `}),t=u.bind({});t.args={title:"API Reference",description:"The Deposits API is built around a standard REST architecture, uses predictable, resource-oriented URLs, and all data are returned in JSON format. Requests are made with HTTP methods and HTTP response codes indicate the success or failure of those requests.",docLink:"https://docs.deposits.dev/",demoLink:"https://launch.new/programs",icon:"https://docs.deposits.dev/assets/svgs/home/services_dark.svg",checked:!1};var r,n,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
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
})`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var d,c,i;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
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
})`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const T=["Default","WithValue"];export{e as Default,t as WithValue,T as __namedExportsOrder,g as default};
//# sourceMappingURL=DCard2.stories-67a33072.js.map
