import{aH as r}from"./DWysiwyg-3c0e030f.js";import"./vue.esm-bundler-77038495.js";import"./iframe-6ddd522f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const y={title:"Accordion",component:r,argTypes:{},tags:["autodocs"]},g=n=>({components:{DAccordion:r},setup(){return{args:n}},template:'<d-accordion v-bind="args" />'}),f=n=>({components:{DAccordion:r},setup(){return{args:n}},template:`<d-accordion v-bind="args">
  Some hidden content
</d-accordion>`}),o=g.bind({});o.args={title:"Personal information verification"};const e=f.bind({});e.args={title:"Personal information verification"};const S=n=>({components:{DAccordion:r},setup(){return{args:n}},template:`<d-accordion v-bind="args">
    <template #left-icon-inactive>
      Something for your mind
    </template>
  </d-accordion>`}),t=S.bind({});t.args={title:"Slot Test"};var a,s,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    DAccordion
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-accordion v-bind="args" />\`
})`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var i,d,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
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
})`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,l,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
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
})`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const C=["Default","Content","SlotTest"];export{e as Content,o as Default,t as SlotTest,C as __namedExportsOrder,y as default};
//# sourceMappingURL=DAccordion.stories-291342a9.js.map
