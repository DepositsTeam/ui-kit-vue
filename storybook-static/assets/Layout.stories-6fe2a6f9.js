import{V as s,W as l,X as m,c as u}from"./DWysiwyg-3f7adbd7.js";import"./vue.esm-bundler-a18595c0.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-87174ba5.js";const v={title:"Layouts/Responsive Layout",component:s,argTypes:{},tags:["autodocs"]},i=n=>({components:{DResponsiveLayout:s,DRow:l,DCol:m},setup(){return{args:n}},template:`<d-responsive-layout debug-mode v-bind="args">
  <d-row>
    <d-col :sm="6">
      Some random item
    </d-col>
    <d-col :xs="9" :sm="6">
      Item begins here
    </d-col>
    
  </d-row>
  </d-responsive-layout>`}),o=i.bind({}),b=n=>({components:{DResponsiveLayout:s,DCol:m,DRow:l,DBox:u},setup(){return{args:n}},template:`<d-responsive-layout debug-mode  v-bind="args">
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

  </d-responsive-layout>`}),e=b.bind({});var d,t,r;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
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
    <d-col :sm="6">
      Some random item
    </d-col>
    <d-col :xs="9" :sm="6">
      Item begins here
    </d-col>
    
  </d-row>
  </d-responsive-layout>\`
})`,...(r=(t=o.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};var a,c,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
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
})`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const y=["Default","EqualCol"];export{o as Default,e as EqualCol,y as __namedExportsOrder,v as default};
//# sourceMappingURL=Layout.stories-6fe2a6f9.js.map
