import{X as o,c as w,g as M,l as B,E,_ as j}from"./DAccordion-15ab541e.js";import"./vue.esm-bundler-90c41ac5.js";import"./_commonjsHelpers-87174ba5.js";const H={title:"Tabs",component:o,argTypes:{tabs:{control:{type:"object"}},horizontal:{control:{type:"boolean"}},spacing:{control:{type:"text"}},initiallyActive:{control:{type:"text"}},inline:{control:{type:"boolean"}},scheme:{control:{type:"select"},options:["button","underline","inline","underline_card"]}}},c=e=>({components:{DTabs:o},setup(){return{args:e}},template:'<d-tabs v-bind="args" />'}),z=e=>({components:{DTabs:o,DarkModeProvider:j},setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-tabs v-bind="args" />
    </dark-mode-provider>
  `}),O=(e=null)=>{const i=e?e.bind({}):z.bind({});return i.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],i},t=c.bind({});t.args={tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",disabled:!0}]};const n=O();n.args={tabs:[{text:"Test link",href:"#"},{text:"Test link",href:"#"},{text:"Test link",href:"#"},{text:"Test link",href:"#"},{text:"Test link",href:"#"}]};const P=e=>({components:{DTabs:o,DBox:w,DText:M,DCard:B},data:()=>({activeTabIndex:0,tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",href:"#",disabled:!0}]}),setup(){return{args:e}},template:`
    <d-box>
    <d-tabs v-bind="args" v-model="activeTabIndex" :tabs="tabs" />
    <d-box v-if="activeTabIndex === 0">
      <d-card>
        <d-text>
          First set of content
        </d-text>
      </d-card>
    </d-box>
    <d-box v-if="activeTabIndex === 1">
      <d-card>
        <d-text>
          Second set of content
        </d-text>
      </d-card>
    </d-box>
    <d-box v-if="activeTabIndex === 2">
      <d-card>
        <d-text>
          Third set of content
        </d-text>
      </d-card>
    </d-box>
    <d-box v-if="activeTabIndex === 3">
      <d-card>
        <d-text>
          Fourth set of content
        </d-text>
      </d-card>
    </d-box>
    
    </d-box>
    <d-text>Active Tab Index: {{activeTabIndex}}</d-text>
  `}),b=P.bind({}),a=c.bind({});a.args={scheme:"underline",tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",disabled:!0}]};const r=c.bind({});r.args={scheme:"underline_card",tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",disabled:!0}]};const d=c.bind({});d.args={scheme:"inline",tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",disabled:!0}]};const X=e=>({components:{DTabs:o,DFilterDropdown:E},setup(){return{args:e}},template:`
    <d-tabs v-bind="args">
      <d-filter-dropdown :options="['All Time', 'Today', 'This month']" />
    </d-tabs>
  `}),s=X.bind({});s.args={scheme:"underline_card",tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",disabled:!0}]};var x,l,p;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,T,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:"DarkModeTemplateFactory()",...(u=(T=n.parameters)==null?void 0:T.docs)==null?void 0:u.source}}};var f,h,v;b.parameters={...b.parameters,docs:{...(f=b.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    DTabs,
    DBox,
    DText,
    DCard
  },
  data: () => ({
    activeTabIndex: 0,
    tabs: [{
      text: "Tab 1",
      href: "#"
    }, {
      text: "Tab 2",
      href: "#"
    }, {
      text: "Tab 3",
      href: "#"
    }, {
      text: "Tab 4",
      href: "#"
    }, {
      text: "Tab 5 (Disabled)",
      href: "#",
      disabled: true
    }]
  }),
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-box>
    <d-tabs v-bind="args" v-model="activeTabIndex" :tabs="tabs" />
    <d-box v-if="activeTabIndex === 0">
      <d-card>
        <d-text>
          First set of content
        </d-text>
      </d-card>
    </d-box>
    <d-box v-if="activeTabIndex === 1">
      <d-card>
        <d-text>
          Second set of content
        </d-text>
      </d-card>
    </d-box>
    <d-box v-if="activeTabIndex === 2">
      <d-card>
        <d-text>
          Third set of content
        </d-text>
      </d-card>
    </d-box>
    <d-box v-if="activeTabIndex === 3">
      <d-card>
        <d-text>
          Fourth set of content
        </d-text>
      </d-card>
    </d-box>
    
    </d-box>
    <d-text>Active Tab Index: {{activeTabIndex}}</d-text>
  \`
})`,...(v=(h=b.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var g,D,I;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(I=(D=a.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var S,y,k;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(k=(y=r.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var _,C,F;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(F=(C=d.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var U,A,W;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
  components: {
    DTabs,
    DFilterDropdown
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-tabs v-bind="args">
      <d-filter-dropdown :options="['All Time', 'Today', 'This month']" />
    </d-tabs>
  \`
})`,...(W=(A=s.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};const J=["Default","DarkDefault","SampleWithContent","UnderlineSchemeTab","UnderlineCardSchemeTab","InlineSchemeTab","UnderlineCardWithSecondaryItem"];export{n as DarkDefault,t as Default,d as InlineSchemeTab,b as SampleWithContent,r as UnderlineCardSchemeTab,s as UnderlineCardWithSecondaryItem,a as UnderlineSchemeTab,J as __namedExportsOrder,H as default};
//# sourceMappingURL=DTabs.stories-0423d7fd.js.map
