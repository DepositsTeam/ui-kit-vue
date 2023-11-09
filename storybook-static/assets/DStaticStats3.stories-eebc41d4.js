import{d as i,e,u as t,o as l,f as a,g as c,t as o,m as _,y as S}from"./vue.esm-bundler-a18595c0.js";import{a as b,c as r,b as u,J as d,u as D,P as h}from"./DWysiwyg-3f7adbd7.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-87174ba5.js";const y={__name:"DStaticStats3",props:{stat1:{type:Object,required:!0},stat2:{type:Object,required:!0},icon:{type:[String,Object],required:!0}},setup(s){return(x,j)=>(l(),i(t(D),{"flex-grow":"1"},{default:e(()=>[a(t(r),{display:"flex","justify-content":"space-between",gap:"80px"},{default:e(()=>[a(t(r),null,{default:e(()=>[a(t(r),null,{default:e(()=>[a(t(u),{my0:"","max-width":"350px","font-face":"heroNew",class:"text-gray-500",scale:"subhead"},{default:e(()=>[c(o(s.stat1.text),1)]),_:1}),a(t(d),{my0:"","font-face":"circularSTD",scale:"h5","margin-bottom":"0.5rem",class:"text-gray-700"},{default:e(()=>[c(o(s.stat1.value),1)]),_:1})]),_:1}),a(t(r),{"margin-top":"2rem"},{default:e(()=>[a(t(u),{my0:"","max-width":"350px","font-face":"heroNew",class:"text-gray-500",scale:"subhead"},{default:e(()=>[c(o(s.stat2.text),1)]),_:1}),a(t(d),{my0:"","font-face":"circularSTD",scale:"h5","margin-bottom":"0.5rem",class:"text-gray-700"},{default:e(()=>[c(o(s.stat2.value),1)]),_:1})]),_:1})]),_:1}),a(t(r),{"background-color":"#F5F8FA","border-radius":"10px",height:"50px",width:"50px",overflow:"hidden",display:"flex","justify-content":"center","align-items":"center"},{default:e(()=>[a(t(r),null,{default:e(()=>[_(x.$slots,"icon",{},()=>[typeof s.icon=="string"?(l(),i(t(r),{key:0,class:"icon",is:"img",src:s.icon,alt:"Stats Image"},null,8,["src"])):(l(),i(S(s.icon),{key:1}))],!0)]),_:3})]),_:3})]),_:3})]),_:3}))}},g=b(y,[["__scopeId","data-v-039710a5"]]);y.__docgenInfo={exportName:"default",displayName:"DStaticStats3",description:"",tags:{},props:[{name:"stat1",type:{name:"object"},required:!0},{name:"stat2",type:{name:"object"},required:!0},{name:"icon",type:{name:"string|object"},required:!0}],slots:[{name:"icon"}],sourceFiles:["/Users/ericmcwinner/Documents/Work/Projects/Work/Vue/deposits-ui-kit-vue/src/d-static-stat3/DStaticStat3.vue"]};const N={title:"Static Stats 3",component:g,argTypes:{stat1:{control:{type:"object"}},stat2:{control:{type:"object"}},icon:{control:{type:["object","text"]}}}},v=s=>({components:{DStaticStats3:g},setup(){return{args:s}},template:`
      <d-static-stats3 v-bind="args"/>
    `}),n=v.bind({});n.args={stat1:{text:"API Calls this month",value:10},stat2:{text:"Total API Calls",value:50},icon:h};var m,p,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    DStaticStats3
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <d-static-stats3 v-bind="args"/>
    \`
})`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const C=["Default"];export{n as Default,C as __namedExportsOrder,N as default};
//# sourceMappingURL=DStaticStats3.stories-eebc41d4.js.map
