import{k as h,I as V,d as L,e as a,x as w,u as t,o as I,f as e,m as u,g as i,t as v}from"./vue.esm-bundler-a18595c0.js";import{a as P,c as n,J as N,b as p,as as R,s as $,B as H,u as W}from"./DWysiwyg-3f7adbd7.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-87174ba5.js";const T={__name:"DCard2",props:{title:{type:String},description:{type:String},docLink:{type:String},demoLink:{type:String},icon:{type:Object},value:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:""}},emits:["update:modelValue"],setup(s,{emit:C}){const c=s,d=h(""),f=h(!1);V(()=>{d.value=c.value,g()});const S=()=>{C("update:modelValue",d.value),g()},g=()=>{c.modelValue&&d.value&&c.modelValue===d.value&&(f.value=!0)};return(l,B)=>(I(),L(t(W),{cursor:"pointer","flex-grow":"1",class:w([f.value?"checked":"","ui-d__card2"]),onClick:S},{default:a(()=>[e(t(n),{display:"flex",padding:"1rem",gap:"30px"},{default:a(()=>[e(t(n),null,{default:a(()=>[e(t(n),{is:"img",src:s.icon,width:"50px"},null,8,["src"])]),_:1}),e(t(n),null,{default:a(()=>[u(l.$slots,"title",{},()=>[e(t(N),{scale:"h5","margin-bottom":"0.5rem",class:"text-gray-700"},{default:a(()=>[i(v(s.title),1)]),_:1})],!0),u(l.$slots,"description",{},()=>[e(t(p),{"font-face":"circularSTD",class:"text-gray-600",scale:"subhead"},{default:a(()=>[i(v(s.description),1)]),_:1})],!0),e(t(n),{display:"flex",gap:"20px"},{default:a(()=>[u(l.$slots,"links",{},()=>[e(t(n),{is:"a",href:s.docLink,target:"_blank",display:"flex","align-items":"center","margin-top":"1rem",class:"text-gray-700","text-decoration":"none"},{default:a(()=>[e(R,{height:"20px",width:"20px",class:"text-gray-400"}),e(t(p),{class:"text-cyan-500","padding-right":".3rem","padding-left":".3rem"},{default:a(()=>[i(" Docs ")]),_:1}),e($,{height:"20px",width:"20px",class:"text-cyan-500"})]),_:1},8,["href"]),e(t(n),{is:"a",href:s.demoLink,target:"_blank",display:"flex","align-items":"center","margin-top":"1rem",class:"text-gray-700","text-decoration":"none"},{default:a(()=>[e(H,{height:"20px",width:"20px",class:"text-gray-400"}),e(t(p),{class:"text-cyan-500","padding-right":".3rem","padding-left":".3rem"},{default:a(()=>[i(" Demo ")]),_:1})]),_:1},8,["href"])],!0)]),_:3})]),_:3})]),_:3})]),_:3},8,["class"]))}},m=P(T,[["__scopeId","data-v-75af547b"]]);T.__docgenInfo={exportName:"default",displayName:"DCard2",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"docLink",type:{name:"string"}},{name:"demoLink",type:{name:"string"}},{name:"icon",type:{name:"object"}},{name:"value",type:{name:"string|number"},defaultValue:{func:!1,value:'""'}},{name:"modelValue",type:{name:"string|number"},defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue"}],slots:[{name:"title"},{name:"description"},{name:"links"}],sourceFiles:["/Users/ericmcwinner/Documents/Work/Projects/Work/Vue/deposits-ui-kit-vue/src/d-card2/DCard2.vue"]};const U={title:"Card 2",component:m,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},docLink:{control:{type:"text"}},demoLink:{control:{type:"text"}},icon:{control:{type:"text"}},checked:{control:{type:"boolean"}}}},q=s=>({components:{DCard2:m},setup(){return{args:s}},template:`
      <d-card2 v-bind="args"/>
    `}),r=q.bind({});r.args={title:"API Reference",description:"The Deposits API is built around a standard REST architecture, uses predictable, resource-oriented URLs, and all data are returned in JSON format. Requests are made with HTTP methods and HTTP response codes indicate the success or failure of those requests.",docLink:"https://docs.deposits.dev/",demoLink:"https://launch.new/programs",icon:"https://docs.deposits.dev/assets/svgs/home/services_dark.svg",checked:!1};const A=s=>({components:{DCard2:m},data:()=>({value:""}),setup(){return{args:s}},template:`
      <d-card2 v-model="value" value="I am a card" v-bind="args"/>
      <p>Card value is: {{ value }}</p>
    `}),o=A.bind({});o.args={title:"API Reference",description:"The Deposits API is built around a standard REST architecture, uses predictable, resource-oriented URLs, and all data are returned in JSON format. Requests are made with HTTP methods and HTTP response codes indicate the success or failure of those requests.",docLink:"https://docs.deposits.dev/",demoLink:"https://launch.new/programs",icon:"https://docs.deposits.dev/assets/svgs/home/services_dark.svg",checked:!1};var y,x,_;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  components: {
    DCard2
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <d-card2 v-bind="args"/>
    \`
})`,...(_=(x=r.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var k,b,D;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    DCard2
  },
  data: () => ({
    value: ""
  }),
  setup() {
    return {
      args
    };
  },
  template: \`
      <d-card2 v-model="value" value="I am a card" v-bind="args"/>
      <p>Card value is: {{ value }}</p>
    \`
})`,...(D=(b=o.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};const z=["Default","WithValue"];export{r as Default,o as WithValue,z as __namedExportsOrder,U as default};
//# sourceMappingURL=DCard2.stories-02aa20c5.js.map
