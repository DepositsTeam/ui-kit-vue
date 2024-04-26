import{d as N,e as r,f as c,n as v,g as E,u as n,o as i,j as w,k as L,l as h,m as b,p as f,q as T,s as x,t as H,v as q,F as O}from"./vue.esm-bundler-c483924c.js";import{i as R,j as y,k as U,l as G,m as K,n as S,o as Q}from"./DWysiwyg-e35b52a3.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const j={__name:"DTransactionTimeline",props:{timeline:{type:Array},fontSize:{type:String,default:"14px"},spacing:{type:String,default:"50px"},indicatorSize:{type:String,default:"20px"},scheme:{type:String,validator:t=>["variant-1","variant-2"].includes(t),default:"variant-1"},activeColor:{type:String,default:"#2A2E33"},stepMode:{type:Boolean,default:!0},hideTicks:{type:Boolean,default:!1}},setup(t){const B=t,p=N(()=>Q(B.activeColor,"")),I=["active","inactive","failed","successful","pending","completed"],a=s=>s.status&&I.includes(s.status)?s.status:"inactive";return(s,X)=>(i(),r(n(y),{class:v(["ui-transaction-timeline",{[t.scheme]:t.scheme}]),style:E({"--spacing":t.spacing,"--indicator-size":t.indicatorSize,"--indicator-color":n(p)[500],"--indicator-color-border":n(p)[200],"--indicator-color-bg":n(p)[100],"--indicator-inactive-color":n(p)[300]})},{default:c(()=>[(i(!0),w(O,null,L(t.timeline,(e,o)=>(i(),r(n(y),{key:`step-${o}`,class:v(["ui-step",{inactive:a(e)==="inactive",completed:a(e)==="completed",active:a(e)==="active",successful:a(e)==="successful",failed:a(e)==="failed",pending:a(e)==="pending",last:o===t.timeline.length-1,dotted:o!==t.timeline.length-1?a(t.timeline[o+1])==="inactive":!1,[t.scheme]:t.scheme}])},{default:c(()=>[h(s.$slots,"step-indicator",T(x(typeof e=="object"?e:{step:e})),()=>[b(n(y),{class:v(["ui-step__indicator",{inactive:a(e)==="inactive",completed:a(e)==="completed",active:a(e)==="active",successful:a(e)==="successful",failed:a(e)==="failed",pending:a(e)==="pending",last:o===t.timeline.length-1,[t.scheme]:t.scheme,activeColor:t.activeColor}])},{default:c(()=>[a(e)==="completed"||a(e)==="successful"?(i(),r(n(U),{key:0,class:"indicator-icon"})):f("",!0),a(e)==="failed"?(i(),r(n(G),{key:1,class:"indicator-icon"})):f("",!0),a(e)==="pending"?(i(),r(n(K),{key:2,class:"indicator-icon"})):f("",!0)]),_:2},1032,["class"])],!0),b(n(y),{class:"ui-step__content"},{default:c(()=>[h(s.$slots,"step",T(x(typeof e=="object"?e:{})),()=>[b(n(S),{class:"ui-step__content-title","margin-bottom":"4px","margin-top":"0","font-size":t.fontSize},{default:c(()=>[H(q(typeof e=="string"?e:e.text),1)]),_:2},1032,["font-size"]),typeof e!="string"&&e.description?(i(),r(n(S),{key:0,"margin-y":"0",scale:"footnote",color:"#878B9A","font-weight":"450",innerHTML:e.description},null,8,["innerHTML"])):f("",!0)],!0)]),_:2},1024)]),_:2},1032,["class"]))),128))]),_:3},8,["style","class"]))}},A=R(j,[["__scopeId","data-v-6ec9c632"]]);j.__docgenInfo={exportName:"default",displayName:"DTransactionTimeline",description:"",tags:{},props:[{name:"timeline",type:{name:"array"}},{name:"fontSize",type:{name:"string"},defaultValue:{func:!1,value:'"14px"'}},{name:"spacing",type:{name:"string"},defaultValue:{func:!1,value:'"50px"'}},{name:"indicatorSize",type:{name:"string"},defaultValue:{func:!1,value:'"20px"'}},{name:"scheme",type:{name:"string"},defaultValue:{func:!1,value:'"variant-1"'},values:["variant-1","variant-2"]},{name:"activeColor",type:{name:"string"},defaultValue:{func:!1,value:'"#2A2E33"'}},{name:"stepMode",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"hideTicks",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"step-indicator",scoped:!0,bindings:[{name:"step",title:"binding"}]},{name:"step",scoped:!0,bindings:[]}],sourceFiles:["/Users/ericmcwinner/Documents/Work/Projects/Work/Vue/deposits-ui-kit-vue/src/d-transaction-timeline/DTransactionTimeline.vue"]};const ae={component:A,title:"Transaction Timeline",tags:["autodocs"],argTypes:{timeline:{control:{type:"object"}},currentStep:{control:{type:"number"}}}},g=t=>({components:{DTransactionTimeline:A},setup(){return{args:t}},template:'<d-transaction-timeline v-bind="args" />'}),l=g.bind({});l.args={timeline:[{text:"Initiated a transfer from Joseph",description:"February 21, 2024 at 5:22 PM",status:"completed"},{text:"We received $540 from Joseph to you...",description:"February 21, 2024 at 5:22 PM",status:"active"},{text:"We received $540 from Joseph to you...",description:"February 21, 2024 at 5:22 PM"},{text:"We received $540 from Joseph to you...",description:"February 21, 2024 at 5:22 PM"},{text:"We received $540 from Joseph to you...",description:"February 21, 2024 at 5:22 PM"}]};const u=g.bind({});u.args={timeline:[{text:"Initiated a transfer from Joseph",description:"February 21, 2024 at 5:22 PM",status:"completed"},{text:"We received $540 from Joseph to you...",description:"February 21, 2024 at 5:22 PM",status:"completed"},{text:"We received $540 from Joseph to you...",description:"February 21, 2024 at 5:22 PM",status:"completed"},{text:"We received $540 from Joseph to you...",description:"February 21, 2024 at 5:22 PM",status:"successful"}]};const d=g.bind({});d.args={timeline:[{text:"Initiated a transfer from Joseph",description:"February 21, 2024 at 5:22 PM",status:"completed"},{text:"We received $540 from Joseph to you...",description:"February 21, 2024 at 5:22 PM",status:"completed"},{text:"We received $540 from Joseph to you...",description:"February 21, 2024 at 5:22 PM",status:"completed"},{text:"We received $540 from Joseph to you...",description:"February 21, 2024 at 5:22 PM",status:"failed"}]};const m=g.bind({});m.args={timeline:[{text:"Initiated a transfer from Joseph",description:"February 21, 2024 at 5:22 PM",status:"completed"},{text:"We received $540 from Joseph to you...",description:"February 21, 2024 at 5:22 PM",status:"completed"},{text:"We received $540 from Joseph to you...",description:"February 21, 2024 at 5:22 PM",status:"completed"},{text:"We received $540 from Joseph to you...",description:"February 21, 2024 at 5:22 PM",status:"pending"}]};var F,P,M;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  components: {
    DTransactionTimeline
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-transaction-timeline v-bind="args" />\`
})`,...(M=(P=l.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var $,J,k;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  components: {
    DTransactionTimeline
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-transaction-timeline v-bind="args" />\`
})`,...(k=(J=u.parameters)==null?void 0:J.docs)==null?void 0:k.source}}};var W,D,z;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  components: {
    DTransactionTimeline
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-transaction-timeline v-bind="args" />\`
})`,...(z=(D=d.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var V,_,C;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    DTransactionTimeline
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-transaction-timeline v-bind="args" />\`
})`,...(C=(_=m.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const ne=["Active","Successful","Failed","Pending"];export{l as Active,d as Failed,m as Pending,u as Successful,ne as __namedExportsOrder,ae as default};
//# sourceMappingURL=DTransactionTimeline.stories-4d03cdbc.js.map
