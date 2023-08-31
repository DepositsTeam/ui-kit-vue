import{j as g,k as t,u as e,l,q as a,m as c,t as p,x as D,s as h,F as x,v as I}from"./vue.esm-bundler-d253c880.js";import{H as N,e as n,h as d,b as _,ak as S}from"./DWysiwyg-4f9daa5a.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const y={__name:"DApplicationIntegrationAction",props:{label:{type:String,required:!0},applications:{type:Object,required:!0}},emits:["newConnectionClicked","revokeAccessClicked"],setup(s,{emit:u}){const v=r=>{u("revokeAccessClicked",r)};return(r,m)=>(l(),g(e(n),{class:"application__card"},{default:t(()=>[a(e(n),{class:"header"},{default:t(()=>[a(e(n),{class:"left"},{default:t(()=>[a(e(d),{"font-face":"circularSTD"},{default:t(()=>[c(p(s.label),1)]),_:1})]),_:1}),a(e(n),{class:"right"},{default:t(()=>[a(e(_),{size:"large",colorScheme:"primary","left-icon":e(S),onClick:m[0]||(m[0]=o=>u("newConnectionClicked"))},{default:t(()=>[c(" New connection ")]),_:1},8,["left-icon"])]),_:1})]),_:1}),a(e(n),{class:"body"},{default:t(()=>[D(r.$slots,"body",{},()=>[(l(!0),h(x,null,I(s.applications,(o,C)=>(l(),g(e(n),{class:"card__body",key:`application__${C}`},{default:t(()=>[a(e(n),{class:"left"},{default:t(()=>[a(e(n),{class:"logo",is:"img",src:o.logo,alt:o.applicationName},null,8,["src","alt"]),a(e(d),null,{default:t(()=>[c(p(o.applicationName),1)]),_:2},1024)]),_:2},1024),a(e(n),{class:"right"},{default:t(()=>[a(e(d),{class:"text","font-face":"circularSTD"},{default:t(()=>[c(p(o.dateConnected),1)]),_:2},1024),a(e(_),{size:"large",colorScheme:"neutral",onClick:B=>v(o)},{default:t(()=>[c(" Revoke Access ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))],!0)]),_:3})]),_:3}))}},b=N(y,[["__scopeId","data-v-f50293e6"]]);y.__docgenInfo={exportName:"default",displayName:"DApplicationIntegrationAction",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"applications",type:{name:"object"},required:!0}],events:[{name:"newConnectionClicked"},{name:"revokeAccessClicked"}],slots:[{name:"body"}],sourceFiles:["/Users/ericmcwinner/Documents/Work/Projects/Work/Vue/deposits-ui-kit-vue/src/d-application-integration-action/DApplicationIntegrationAction.vue"]};const X={title:"Application Integration Action",component:b,argTypes:{label:{control:{type:"text"}},applications:{control:{type:"object"}}}},j=s=>({components:{DApplicationIntegrationAction:b},setup(){return{args:s}},template:`
      <d-application-integration-action v-bind="args"/>`}),i=j.bind({});i.args={label:"Application",applications:[{id:1,applicationName:"Quickbooks",logo:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",dateConnected:"Connected, July 27, 2021"},{id:1,applicationName:"Xero",logo:"https://marketplace.canva.com/EAFasgWgUyE/6/0/1600w/canva-neon-blue-and-black-gamer-badge-logo-eKEXSFkIoq0.jpg",dateConnected:"Connected, July 27, 2021"},{id:1,applicationName:"Zoho Books",logo:"https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn",dateConnected:"Connected, July 27, 2021"}]};var f,k,A;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    DApplicationIntegrationAction
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <d-application-integration-action v-bind="args"/>\`
})`,...(A=(k=i.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const $=["Default"];export{i as Default,$ as __namedExportsOrder,X as default};
//# sourceMappingURL=DApplicationIntegrationAction.stories-27d94840.js.map
