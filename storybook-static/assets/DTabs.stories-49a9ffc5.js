import{k as x,e as Q,j as R,l as V,m as X,_ as Y}from"./DWysiwyg-688f494a.js";import"./vue.esm-bundler-673e2372.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const oe={title:"Tabs",component:x,argTypes:{tabs:{control:{type:"object"}},horizontal:{control:{type:"boolean"}},spacing:{control:{type:"text"}},initiallyActive:{control:{type:"text"}},inline:{control:{type:"boolean"}},scheme:{control:{type:"select"},options:["button","underline","inline","underline_card"]}}},t=e=>({components:{DTabs:x},setup(){return{args:e}},template:'<d-tabs v-bind="args" />'}),Z=e=>({components:{DTabs:x,DarkModeProvider:Y},setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-tabs v-bind="args" />
    </dark-mode-provider>
  `}),ee=(e=null)=>{const p=e?e.bind({}):Z.bind({});return p.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],p},a=t.bind({});a.args={tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",disabled:!0}]};const r=ee();r.args={tabs:[{text:"Test link",href:"#"},{text:"Test link",href:"#"},{text:"Test link",href:"#"},{text:"Test link",href:"#"},{text:"Test link",href:"#"}]};const te=e=>({components:{DTabs:x,DBox:Q,DText:R,DCard:V},data:()=>({activeTabIndex:0,tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",href:"#",disabled:!0}]}),setup(){return{args:e}},template:`
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
  `}),l=te.bind({}),n=t.bind({});n.args={scheme:"underline",tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",disabled:!0}]};const s=t.bind({});s.args={scheme:"underline_card",tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",disabled:!0}]};const d=t.bind({});d.args={scheme:"inline",tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",disabled:!0}]};const ae=e=>({components:{DTabs:x,DFilterDropdown:X},setup(){return{args:e}},template:`
    <d-tabs v-bind="args">
      <d-filter-dropdown :options="['All Time', 'Today', 'This month']" />
    </d-tabs>
  `}),o=ae.bind({});o.args={scheme:"underline_card",tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",disabled:!0}]};const b=t.bind({});b.args={scheme:"underline",hideBottomBorder:!0,tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",disabled:!0}]};const c=t.bind({});c.args={scheme:"underline_card",hideBottomBorder:!0,tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",disabled:!0}]};const i=t.bind({});i.args={scheme:"underline",activeTextColor:"#ff0000",tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",disabled:!0}]};const m=t.bind({});m.args={scheme:"underline",activeIndicatorColor:"#ff0000",tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",disabled:!0}]};var T,u,h;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,g,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:"DarkModeTemplateFactory()",...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var D,S,C;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(C=(S=l.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var I,y,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(k=(y=n.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var _,B,U;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(U=(B=s.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var A,W,F;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(F=(W=d.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var w,M,j;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
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
})`,...(j=(M=o.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var z,E,O;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(O=(E=b.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var P,$,q;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(q=($=c.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var G,H,J;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(J=(H=i.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,L,N;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(N=(L=m.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const be=["Default","DarkDefault","SampleWithContent","UnderlineSchemeTab","UnderlineCardSchemeTab","InlineSchemeTab","UnderlineCardWithSecondaryItem","UnderlineSchemeWithoutBorder","UnderlineCardSchemeWithoutBorder","CustomTabActiveTextColor","CustomTabActiveColor"];export{m as CustomTabActiveColor,i as CustomTabActiveTextColor,r as DarkDefault,a as Default,d as InlineSchemeTab,l as SampleWithContent,s as UnderlineCardSchemeTab,c as UnderlineCardSchemeWithoutBorder,o as UnderlineCardWithSecondaryItem,n as UnderlineSchemeTab,b as UnderlineSchemeWithoutBorder,be as __namedExportsOrder,oe as default};
//# sourceMappingURL=DTabs.stories-49a9ffc5.js.map