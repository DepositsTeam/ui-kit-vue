import{D as r}from"./DAccordion-CN3Js_XK.js";import"./vue.esm-bundler-DYd614QV.js";import"./iframe-DxcWvM7r.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";const h={title:"Accordion",component:r,argTypes:{},tags:["autodocs"]},g=n=>({components:{DAccordion:r},setup(){return{args:n}},template:'<d-accordion v-bind="args" />'}),f=n=>({components:{DAccordion:r},setup(){return{args:n}},template:`<d-accordion v-bind="args">
  Some hidden content
</d-accordion>`}),e=g.bind({});e.args={title:"Personal information verification"};const o=f.bind({});o.args={title:"Personal information verification"};const S=n=>({components:{DAccordion:r},setup(){return{args:n}},template:`<d-accordion v-bind="args">
    <template #left-icon-inactive>
      Something for your mind
    </template>
  </d-accordion>`}),t=S.bind({});t.args={title:"Slot Test"};var a,s,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    DAccordion
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-accordion v-bind="args" />\`
})`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var i,d,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    DAccordion
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-accordion v-bind="args">
  Some hidden content
</d-accordion>\`
})`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,l,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    DAccordion
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-accordion v-bind="args">
    <template #left-icon-inactive>
      Something for your mind
    </template>
  </d-accordion>\`
})`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const y=["Default","Content","SlotTest"];export{o as Content,e as Default,t as SlotTest,y as __namedExportsOrder,h as default};
