import{au as i,W as f,V as B,U as k,o as D}from"./DWysiwyg-2b801905.js";import"./vue.esm-bundler-6f1630d7.js";import"./iframe-6b342987.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const U={title:"Card 3",component:i,argTypes:{title:{control:{type:"text"}},subtitle:{control:{type:"text"}},description:{control:{type:"text"}},image:{control:{type:"text"}},topBgColor:{control:{type:"color"}},bottomBgColor:{control:{type:"color"}},imageBgColor:{control:{type:"color"}}}},v=r=>({components:{DCard3:i,DCol:f,DRow:B,DResponsiveLayout:k,DBox:D},setup(){return{args:r}},template:`
      <d-responsive-layout>
        <d-row>
          <d-col v-for="arg in args" :md="4">
            <d-card3 v-bind="arg"/>
          </d-col>
        </d-row>
      </d-responsive-layout>
    `}),e=v.bind([]);e.args=[{title:"Statements",description:"Using the Banking kit.",image:"https://console.api.ondeposits.com/demo/statement-new.svg"},{title:"E-Commerce",subtitle:"Like Shopify",description:"Using the Commerce kit",image:"https://console.api.ondeposits.com/demo/money-new.svg"},{title:"Money",subtitle:"Like Chime",description:"Using the Money kit",image:"https://console.api.ondeposits.com/demo/e-commerce-new.svg"}];const o=v.bind([]);o.args=[{title:"Getting Started",description:"Everything you need to get started with Deposits.",image:"https://docs.deposits.dev/assets/svgs/home/services_dark.svg",topBgColor:"#57627a",bottomBgColor:"#1e293b",imageBgColor:"#1b344d"},{title:"API Reference",description:"Complete reference documentation for Deposits APIs.",image:"https://docs.deposits.dev/assets/svgs/home/api_reference_dark.svg",topBgColor:"#57627a",bottomBgColor:"#1e293b",imageBgColor:"#1b344d"},{title:"Recipes",description:"Quick guides to help you build fast.",image:"https://docs.deposits.dev/assets/svgs/home/recipes_dark.svg",topBgColor:"#57627a",bottomBgColor:"#1e293b",imageBgColor:"#1b344d"}];const y=r=>({components:{DCard3:i},setup(){return{args:r}},template:`
      <d-card3 v-bind="args"/>
    `}),t=y.bind({});t.args={title:"Money",subtitle:"Like Chime",description:"Using the Money kit",image:"https://console.api.ondeposits.com/demo/money-new.svg"};const s=y.bind({});s.args={title:"Money",subtitle:"Like Chime",description:"Using the Money kit",image:"https://console.api.ondeposits.com/demo/money-new.svg",topBgColor:"#0bb9e9",bottomBgColor:"#bdf3fc",imageBgColor:"#ffffff"};var a,n,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"CardListTemplate.bind([])",...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var p,c,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"CardListTemplate.bind([])",...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,l,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    DCard3
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <d-card3 v-bind="args"/>
    \`
})`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var C,b,h;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    DCard3
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <d-card3 v-bind="args"/>
    \`
})`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const T=["LightModeCardList","DarkModeCardList","Default","WithBackgroundColors"];export{o as DarkModeCardList,t as Default,e as LightModeCardList,s as WithBackgroundColors,T as __namedExportsOrder,U as default};
//# sourceMappingURL=DCard3.stories-ec341ca4.js.map
