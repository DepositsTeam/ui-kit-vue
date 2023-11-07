import{d as l,e as n,u as e,o as c,f as o,m as i,g as m,t as u,z as d}from"./vue.esm-bundler-a18595c0.js";import{c as r,J as h,b as D,l as C,u as k}from"./DWysiwyg-3f7adbd7.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-87174ba5.js";const S={__name:"DEmptyState",props:{illustration:{type:[String,Object]},title:{type:String},description:{type:String},buttonText:{type:String},buttonSize:{type:String},buttonColorScheme:{type:String},buttonSmartColor:{type:String}},emits:["clicked"],setup(t,{emit:x}){return(s,p)=>(c(),l(e(k),null,{default:n(()=>[o(e(r),{border:"1px dashed #E1E7EC","border-radius":"10px",display:"flex","flex-direction":"column","justify-content":"center","align-items":"center",gap:"30px","padding-y":"3rem"},{default:n(()=>[o(e(r),{"border-radius":"50%",padding:"2rem","background-color":"#F5F8FA",display:"inline-block"},{default:n(()=>[i(s.$slots,"illustration",{},()=>[o(e(r),{is:"img",src:t.illustration,alt:t.title},null,8,["src","alt"])])]),_:3}),o(e(r),{"text-align":"center"},{default:n(()=>[i(s.$slots,"title",{},()=>[t.title?(c(),l(e(h),{key:0,scale:"h5","margin-bottom":"0.5rem","margin-top":"0.5rem",class:"text-gray-700","font-face":"heroNew"},{default:n(()=>[m(u(t.title),1)]),_:1})):d("",!0)]),i(s.$slots,"description",{},()=>[o(e(D),{"font-face":"circularSTD",class:"text-gray-600",center:"",is:"p-18"},{default:n(()=>[m(u(t.description),1)]),_:1})])]),_:3}),o(e(r),{class:"program_head_row-btn-cont"},{default:n(()=>[i(s.$slots,"button",{},()=>[t.buttonText?(c(),l(e(C),{key:0,size:t.buttonSize,"smart-color":t.buttonSmartColor,"color-scheme":t.buttonColorScheme,onClick:p[0]||(p[0]=E=>x("clicked")),responsive:""},{default:n(()=>[m(u(t.buttonText),1)]),_:1},8,["size","smart-color","color-scheme"])):d("",!0)])]),_:3})]),_:3})]),_:3}))}},f=S;S.__docgenInfo={exportName:"default",displayName:"DEmptyState",description:"",tags:{},props:[{name:"illustration",type:{name:"string|object"}},{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"buttonText",type:{name:"string"}},{name:"buttonSize",type:{name:"string"}},{name:"buttonColorScheme",type:{name:"string"}},{name:"buttonSmartColor",type:{name:"string"}}],events:[{name:"clicked"}],slots:[{name:"illustration"},{name:"title"},{name:"description"},{name:"button"}],sourceFiles:["/Users/ericmcwinner/Documents/Work/Projects/Work/Vue/deposits-ui-kit-vue/src/d-empty-state/DEmptyState.vue"]};const $={title:"Empty State",component:f,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},illustration:{control:{type:"text"}},buttonText:{control:{type:"text"}},buttonSmartColor:{control:{type:"text"}},buttonColorScheme:{control:{type:"select"},options:["primary","danger","success","outline","invisible"]},buttonSize:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]}}},v=t=>({components:{DEmptyState:f},setup(){return{args:t}},template:'<d-empty-state v-bind="args"/>'}),a=v.bind({});a.args={title:"No programs have been created yet?",description:"No programs have been created yet, your programs will show up here.",illustration:"https://launch.new/assets/group-7995.74c17caa.svg",buttonText:"Create a new program"};var g,y,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    DEmptyState
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-empty-state v-bind="args"/>\`
})`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const j=["Default"];export{a as Default,j as __namedExportsOrder,$ as default};
//# sourceMappingURL=DEmptyState.stories-0d357b8b.js.map
