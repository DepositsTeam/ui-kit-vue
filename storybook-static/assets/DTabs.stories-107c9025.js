import{u as v,n as ye,p as We,v as ke,w as _e,_ as Ae}from"./DWysiwyg-7d9c4c5c.js";import"./vue.esm-bundler-41d8d808.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const Pe={title:"Tabs",component:v,tags:["autodocs"],argTypes:{tabs:{control:{type:"object"}},horizontal:{control:{type:"boolean"}},spacing:{control:{type:"text"}},initiallyActive:{control:{type:"text"}},inline:{control:{type:"boolean"}},scheme:{control:{type:"select"},options:["button","underline","inline","underline_card"]}}},e=t=>({components:{DTabs:v},setup(){return{args:t}},template:'<d-tabs v-bind="args" />'}),Fe=t=>({components:{DTabs:v,DarkModeProvider:Ae},setup(){return{args:t}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-tabs v-bind="args" />
    </dark-mode-provider>
  `}),we=(t=null)=>{const S=t?t.bind({}):Fe.bind({});return S.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],S},a=e.bind({});a.args={tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",disabled:!0}]};const r=e.bind({});r.args={tabs:[{text:"Tab 1",href:"#",total:4},{text:"Tab 2",href:"#",total:4},{text:"Tab 3",href:"#",total:4},{text:"Tab 4",href:"#",total:4},{text:"Tab 5 (Disabled)",disabled:!0}]};const n=we();n.args={tabs:[{text:"Test link",href:"#"},{text:"Test link",href:"#"},{text:"Test link",href:"#"},{text:"Test link",href:"#"},{text:"Test link",href:"#"}]};const Me=t=>({components:{DTabs:v,DBox:ye,DText:We,DCard:ke},data:()=>({activeTabIndex:0,tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",href:"#",disabled:!0}]}),setup(){return{args:t}},template:`
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
  `}),D=Me.bind({}),s=e.bind({});s.args={scheme:"underline",tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",disabled:!0}]};const o=e.bind({});o.args={scheme:"underline",tabs:[{text:"Tab 1",href:"#",total:4},{text:"Tab 2",href:"#",total:4},{text:"Tab 3",href:"#",total:4},{text:"Tab 4",href:"#",total:4},{text:"Tab 5 (Disabled)",disabled:!0}]};const d=e.bind({});d.args={scheme:"underline_card",tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",disabled:!0}]};const b=e.bind({});b.args={scheme:"underline_card",tabs:[{text:"Tab 1",href:"#",total:5},{text:"Tab 2",href:"#",total:5},{text:"Tab 3",href:"#",total:5},{text:"Tab 4",href:"#",total:5},{text:"Tab 5 (Disabled)",disabled:!0}]};const c=e.bind({});c.args={scheme:"inline",tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",disabled:!0}]};const i=e.bind({});i.args={scheme:"inline",tabs:[{text:"Tab 1",href:"#",total:5},{text:"Tab 2",href:"#",total:5},{text:"Tab 3",href:"#",total:5},{text:"Tab 4",href:"#",total:5},{text:"Tab 5 (Disabled)",disabled:!0}]};const Ue=t=>({components:{DTabs:v,DFilterDropdown:_e},setup(){return{args:t}},template:`
    <d-tabs v-bind="args">
      <d-filter-dropdown :options="['All Time', 'Today', 'This month']" />
    </d-tabs>
  `}),l=Ue.bind({});l.args={scheme:"underline_card",tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",disabled:!0}]};const m=Ue.bind({});m.args={scheme:"underline_card",tabs:[{text:"Tab 1",href:"#",total:4},{text:"Tab 2",href:"#",total:4},{text:"Tab 3",href:"#",total:4},{text:"Tab 4",href:"#",total:4},{text:"Tab 5 (Disabled)",disabled:!0}]};const p=e.bind({});p.args={scheme:"underline",hideBottomBorder:!0,tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",disabled:!0}]};const T=e.bind({});T.args={scheme:"underline",hideBottomBorder:!0,tabs:[{text:"Tab 1",href:"#",total:7},{text:"Tab 2",href:"#",total:7},{text:"Tab 3",href:"#",total:7},{text:"Tab 4",href:"#",total:7},{text:"Tab 5 (Disabled)",disabled:!0}]};const u=e.bind({});u.args={scheme:"underline_card",hideBottomBorder:!0,tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",disabled:!0}]};const x=e.bind({});x.args={scheme:"underline_card",hideBottomBorder:!0,tabs:[{text:"Tab 1",href:"#",total:8},{text:"Tab 2",href:"#",total:8},{text:"Tab 3",href:"#",total:8},{text:"Tab 4",href:"#",total:8},{text:"Tab 5 (Disabled)",disabled:!0}]};const h=e.bind({});h.args={scheme:"underline",activeTextColor:"#ff0000",tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",disabled:!0}]};const f=e.bind({});f.args={scheme:"underline",activeIndicatorColor:"#ff0000",tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",disabled:!0}]};const g=e.bind({});g.args={scheme:"underline",activeBadgeColor:"#ff0000",tabs:[{text:"Tab 1",href:"#",total:189},{text:"Tab 2",href:"#",total:189},{text:"Tab 3",href:"#",total:189},{text:"Tab 4",href:"#",total:0},{text:"Tab 5 (Disabled)",disabled:!0}]};var B,C,I;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(I=(C=a.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var U,y,W;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(W=(y=r.parameters)==null?void 0:y.docs)==null?void 0:W.source}}};var k,_,A;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:"DarkModeTemplateFactory()",...(A=(_=n.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var F,w,M;D.parameters={...D.parameters,docs:{...(F=D.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
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
})`,...(M=(w=D.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var j,z,E;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(E=(z=s.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var O,P,$;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...($=(P=o.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var q,G,H;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,L;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(L=(K=b.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var N,Q,R;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(R=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var V,X,Y;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(Y=(X=i.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;l.parameters={...l.parameters,docs:{...(Z=l.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
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
})`,...(te=(ee=l.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,re,ne;m.parameters={...m.parameters,docs:{...(ae=m.parameters)==null?void 0:ae.docs,source:{originalSource:`args => ({
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
})`,...(ne=(re=m.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var se,oe,de;p.parameters={...p.parameters,docs:{...(se=p.parameters)==null?void 0:se.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(de=(oe=p.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var be,ce,ie;T.parameters={...T.parameters,docs:{...(be=T.parameters)==null?void 0:be.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(ie=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var le,me,pe;u.parameters={...u.parameters,docs:{...(le=u.parameters)==null?void 0:le.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(pe=(me=u.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var Te,ue,xe;x.parameters={...x.parameters,docs:{...(Te=x.parameters)==null?void 0:Te.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(xe=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:xe.source}}};var he,fe,ge;h.parameters={...h.parameters,docs:{...(he=h.parameters)==null?void 0:he.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(ge=(fe=h.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var ve,De,Se;f.parameters={...f.parameters,docs:{...(ve=f.parameters)==null?void 0:ve.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(Se=(De=f.parameters)==null?void 0:De.docs)==null?void 0:Se.source}}};var Be,Ce,Ie;g.parameters={...g.parameters,docs:{...(Be=g.parameters)==null?void 0:Be.docs,source:{originalSource:`args => ({
  components: {
    DTabs
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tabs v-bind="args" />\`
})`,...(Ie=(Ce=g.parameters)==null?void 0:Ce.docs)==null?void 0:Ie.source}}};const $e=["Default","DefaultBadge","DarkDefault","SampleWithContent","UnderlineSchemeTab","UnderlineSchemeTabBadge","UnderlineCardSchemeTab","UnderlineCardSchemeTabBadge","InlineSchemeTab","InlineSchemeTabBadge","UnderlineCardWithSecondaryItem","UnderlineCardWithSecondaryItemBadge","UnderlineSchemeWithoutBorder","UnderlineSchemeWithoutBorderBadge","UnderlineCardSchemeWithoutBorder","UnderlineCardSchemeWithoutBorderBadge","CustomTabActiveTextColor","CustomTabActiveColor","CustomActiveBadgeColor"];export{g as CustomActiveBadgeColor,f as CustomTabActiveColor,h as CustomTabActiveTextColor,n as DarkDefault,a as Default,r as DefaultBadge,c as InlineSchemeTab,i as InlineSchemeTabBadge,D as SampleWithContent,d as UnderlineCardSchemeTab,b as UnderlineCardSchemeTabBadge,u as UnderlineCardSchemeWithoutBorder,x as UnderlineCardSchemeWithoutBorderBadge,l as UnderlineCardWithSecondaryItem,m as UnderlineCardWithSecondaryItemBadge,s as UnderlineSchemeTab,o as UnderlineSchemeTabBadge,p as UnderlineSchemeWithoutBorder,T as UnderlineSchemeWithoutBorderBadge,$e as __namedExportsOrder,Pe as default};
//# sourceMappingURL=DTabs.stories-107c9025.js.map
