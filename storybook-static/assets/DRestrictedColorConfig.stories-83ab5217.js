import{q as i,J as t,g as m}from"./DWysiwyg-cf79d49d.js";import"./vue.esm-bundler-d253c880.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const E={components:{DAutoLayout:i},title:"Forms/Restricted Color Config",component:t,argTypes:{label:{control:{type:"text"},default:"Color"},colors:{control:{type:"object"}}}},u=r=>({components:{DRestrictedColorConfig:t},data:()=>({value:""}),setup(){return{args:r}},template:`
      <d-restricted-color-config v-model="value" v-bind="args"/>`}),o=u.bind({});o.args={colors:[{colorCode:"#0C9CCC",colorName:"Teal"},{colorCode:"#1A8B5A",colorName:"Green"},{colorCode:"#2A2E33",colorName:"Black"},{colorCode:"#971E31",colorName:"Red"},{colorCode:"#E1E7EC",colorName:"White"},{colorCode:"#E06104",colorName:"Orange"},{colorCode:"#0059AC",colorName:"Blue"},{colorCode:"#4D36C0",colorName:"Purple"}],label:"Color"};const C=r=>({components:{DRestrictedColorConfig:t,DText:m,DAutoLayout:i},data:()=>({value:"#2A2E33"}),setup(){return{args:r}},template:`
    <d-auto-layout direction="vertical">
      <d-restricted-color-config v-model="value" v-bind="args"/>
      <d-text>{{value}}</d-text>
    </d-auto-layout>
`}),e=C.bind({});e.args={colors:[{colorCode:"#0C9CCC",colorName:"Teal"},{colorCode:"#1A8B5A",colorName:"Green"},{colorCode:"#2A2E33",colorName:"Black"},{colorCode:"#971E31",colorName:"Red"},{colorCode:"#E1E7EC",colorName:"White"},{colorCode:"#E06104",colorName:"Orange"},{colorCode:"#0059AC",colorName:"Blue"},{colorCode:"#4D36C0",colorName:"Purple"}],label:"Color"};var a,l,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    DRestrictedColorConfig
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
      <d-restricted-color-config v-model="value" v-bind="args"/>\`
})`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var n,d,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    DRestrictedColorConfig,
    DText,
    DAutoLayout
  },
  data: () => ({
    value: "#2A2E33"
  }),
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-auto-layout direction="vertical">
      <d-restricted-color-config v-model="value" v-bind="args"/>
      <d-text>{{value}}</d-text>
    </d-auto-layout>
\`
})`,...(s=(d=e.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const f=["Default","InitialValue"];export{o as Default,e as InitialValue,f as __namedExportsOrder,E as default};
//# sourceMappingURL=DRestrictedColorConfig.stories-83ab5217.js.map
