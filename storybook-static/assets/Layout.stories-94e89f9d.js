import{V as s,W as p,X as m,c as u}from"./DAccordion-1797e98b.js";import"./vue.esm-bundler-02a62393.js";import"./_commonjsHelpers-87174ba5.js";const w={title:"Layouts/Responsive Layout",component:s,argTypes:{}},i=n=>({components:{DResponsiveLayout:s,DRow:p,DCol:m},setup(){return{args:n}},template:`<d-responsive-layout debug-mode v-bind="args">
  <d-row>
    <d-col :xs="3" :sm="12">
      Some random item
    </d-col>
    <d-col :xs="9" :sm="12">
      Item begins here
    </d-col>
    
  </d-row>
  </d-responsive-layout>`}),o=i.bind({}),b=n=>({components:{DResponsiveLayout:s,DCol:m,DRow:p,DBox:u},setup(){return{args:n}},template:`<d-responsive-layout debug-mode  v-bind="args">
  <d-row>
    <d-col :md="{span: 3}" >
      <d-box height="90px" background="black" width="100%">
      </d-box>
    </d-col>
    <d-col :md="{span: 3}" >
      <d-box height="90px" background="purple" width="100%">
      </d-box>
    </d-col>
    <d-col :xs="6">
      <d-box height="90px" background="blue" width="100%">
      </d-box>
    </d-col>
  </d-row>

  </d-responsive-layout>`}),e=b.bind({});var d,r,t;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    DResponsiveLayout,
    DRow,
    DCol
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-responsive-layout debug-mode v-bind="args">
  <d-row>
    <d-col :xs="3" :sm="12">
      Some random item
    </d-col>
    <d-col :xs="9" :sm="12">
      Item begins here
    </d-col>
    
  </d-row>
  </d-responsive-layout>\`
})`,...(t=(r=o.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var a,c,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    DResponsiveLayout,
    DCol,
    DRow,
    DBox
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-responsive-layout debug-mode  v-bind="args">
  <d-row>
    <d-col :md="{span: 3}" >
      <d-box height="90px" background="black" width="100%">
      </d-box>
    </d-col>
    <d-col :md="{span: 3}" >
      <d-box height="90px" background="purple" width="100%">
      </d-box>
    </d-col>
    <d-col :xs="6">
      <d-box height="90px" background="blue" width="100%">
      </d-box>
    </d-col>
  </d-row>

  </d-responsive-layout>\`
})`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const v=["Default","EqualCol"];export{o as Default,e as EqualCol,v as __namedExportsOrder,w as default};
//# sourceMappingURL=Layout.stories-94e89f9d.js.map
