import{V as s,W as l,X as m,n as u}from"./DWysiwyg-dc51251e.js";import"./vue.esm-bundler-41d8d808.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const v={title:"Layouts/Responsive Layout",component:s,argTypes:{},tags:["autodocs"]},i=n=>({components:{DResponsiveLayout:s,DRow:l,DCol:m},setup(){return{args:n}},template:`<d-responsive-layout debug-mode v-bind="args">
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
})`,...(r=(t=o.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};var a,p,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
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
})`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const y=["Default","EqualCol"];export{o as Default,e as EqualCol,y as __namedExportsOrder,v as default};
//# sourceMappingURL=Layout.stories-c7612606.js.map
