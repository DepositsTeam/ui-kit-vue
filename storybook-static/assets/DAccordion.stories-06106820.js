import{aJ as n}from"./DWysiwyg-c17e0e8e.js";import"./vue.esm-bundler-ea20084a.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const S={title:"Accordion",component:n,argTypes:{},tags:["autodocs"]},m=o=>({components:{DAccordion:n},setup(){return{args:o}},template:'<d-accordion v-bind="args" />'}),t=m.bind({});t.args={title:"Personal information verification"};const p=o=>({components:{DAccordion:n},setup(){return{args:o}},template:`<d-accordion v-bind="args">
    <template #left-icon-inactive>
      Something for your mind
    </template>
  </d-accordion>`}),e=p.bind({});e.args={title:"Slot Test"};var r,a,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    DAccordion
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-accordion v-bind="args" />\`
})`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var c,i,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
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
})`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const v=["Default","SlotTest"];export{t as Default,e as SlotTest,v as __namedExportsOrder,S as default};
//# sourceMappingURL=DAccordion.stories-06106820.js.map
