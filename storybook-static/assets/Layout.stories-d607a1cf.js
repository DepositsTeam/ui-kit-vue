import{P as s,Q as c,R as m,e as i}from"./DWysiwyg-39fe003b.js";import"./vue.esm-bundler-d253c880.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const v={title:"Layouts/Responsive Layout",component:s,argTypes:{}},u=n=>({components:{DResponsiveLayout:s,DRow:c,DCol:m},setup(){return{args:n}},template:`<d-responsive-layout debug-mode v-bind="args">
  <d-row>
    <d-col :xs="3" :sm="12">
      Some random item
    </d-col>
    <d-col :xs="9" :sm="12">
      Item begins here
    </d-col>
    
  </d-row>
  </d-responsive-layout>`}),o=u.bind({}),b=n=>({components:{DResponsiveLayout:s,DCol:m,DRow:c,DBox:i},setup(){return{args:n}},template:`<d-responsive-layout debug-mode  v-bind="args">
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
})`,...(t=(r=o.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var a,p,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
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
})`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const y=["Default","EqualCol"];export{o as Default,e as EqualCol,y as __namedExportsOrder,v as default};
//# sourceMappingURL=Layout.stories-d607a1cf.js.map
