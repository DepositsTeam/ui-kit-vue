import{E as f,n as k}from"./DWysiwyg-a82eaa9d.js";import"./vue.esm-bundler-41d8d808.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const I={title:"Menu (Context or Dropdown menu)",component:f,tags:["autodocs"],argTypes:{}},i=n=>({components:{DMenu:f,DButton:k},data:()=>({}),methods:{consoleOption:function(B){}},setup(){return{args:n}},template:`<d-menu v-bind="args" @option-clicked="(option) => consoleOption(option, item)">
  <d-button>...</d-button>
  </d-menu>`}),t=i.bind({});t.args={options:[{text:"Edit"},{text:"Delete"},{text:"Create"}]};const o=i.bind({});o.args={options:["Edit","Delete","Create"]};const e=i.bind({});e.args={options:[{text:"Edit"},{text:"Delete",textColor:"#D62F4B"},{text:"Create"}]};const r=i.bind({});r.args={options:[{text:"Edit",onClick:n=>alert("I clicked "+n.text)},{text:"Delete",textColor:"#D62F4B",onHover:n=>alert("I hovered an option with color "+n.textColor),disabled:!0},{text:"Create",disabled:!0}]};const s=i.bind({});s.args={trigger:"hover",options:[{text:"Edit",onClick:n=>alert("I clicked "+n.text)},{text:"Delete",textColor:"#D62F4B",onHover:n=>alert("I hovered an option with color "+n.textColor)},{text:"Create"}]};var a,p,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    DMenu,
    DButton
  },
  data: () => ({}),
  methods: {
    consoleOption: function (option) {}
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-menu v-bind="args" @option-clicked="(option) => consoleOption(option, item)">
  <d-button>...</d-button>
  </d-menu>\`
})`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,u,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    DMenu,
    DButton
  },
  data: () => ({}),
  methods: {
    consoleOption: function (option) {}
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-menu v-bind="args" @option-clicked="(option) => consoleOption(option, item)">
  <d-button>...</d-button>
  </d-menu>\`
})`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var l,g,b;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    DMenu,
    DButton
  },
  data: () => ({}),
  methods: {
    consoleOption: function (option) {}
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-menu v-bind="args" @option-clicked="(option) => consoleOption(option, item)">
  <d-button>...</d-button>
  </d-menu>\`
})`,...(b=(g=e.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var D,x,O;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  components: {
    DMenu,
    DButton
  },
  data: () => ({}),
  methods: {
    consoleOption: function (option) {}
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-menu v-bind="args" @option-clicked="(option) => consoleOption(option, item)">
  <d-button>...</d-button>
  </d-menu>\`
})`,...(O=(x=r.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var C,v,h;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    DMenu,
    DButton
  },
  data: () => ({}),
  methods: {
    consoleOption: function (option) {}
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-menu v-bind="args" @option-clicked="(option) => consoleOption(option, item)">
  <d-button>...</d-button>
  </d-menu>\`
})`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const T=["Default","StringOptions","CustomOptionColor","DisabledOption","HoverTrigger"];export{e as CustomOptionColor,t as Default,r as DisabledOption,s as HoverTrigger,o as StringOptions,T as __namedExportsOrder,I as default};
//# sourceMappingURL=DMenu.stories-1b5ab14a.js.map
