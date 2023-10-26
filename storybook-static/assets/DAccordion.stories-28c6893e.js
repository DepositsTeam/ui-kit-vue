import{aA as o}from"./DWysiwyg-308857eb.js";import"./vue.esm-bundler-4e4410a9.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-87174ba5.js";const S={title:"Accordion",component:o,argTypes:{}},m=n=>({components:{DAccordion:o},setup(){return{args:n}},template:'<d-accordion v-bind="args" />'}),e=m.bind({});e.args={title:"Personal information verification"};const p=n=>({components:{DAccordion:o},setup(){return{args:n}},template:`<d-accordion v-bind="args">
    <template #left-icon-inactive>
      Something for your mind
    </template>
  </d-accordion>`}),t=p.bind({});t.args={title:"Slot Test"};var r,a,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    DAccordion
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-accordion v-bind="args" />\`
})`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var c,i,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
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
})`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const v=["Default","SlotTest"];export{e as Default,t as SlotTest,v as __namedExportsOrder,S as default};
//# sourceMappingURL=DAccordion.stories-28c6893e.js.map
