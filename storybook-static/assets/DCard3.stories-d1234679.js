import{d as u,e as o,u as t,o as f,f as a,m as l,g as c,t as m,z as V}from"./vue.esm-bundler-a18595c0.js";import{c as r,J as T,b as $,X as q,W as E,V as M}from"./DWysiwyg-3f7adbd7.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-87174ba5.js";const S={__name:"DCard3",props:{title:{type:String,required:!0},subtitle:{type:String},description:{type:String,required:!0},image:{type:String,required:!0},topBgColor:{type:String,default:"#E2EDF7"},bottomBgColor:{type:String,default:"#ffffff"},imageBgColor:{type:String,default:"#ffffff"}},emits:["clicked"],setup(e,{emit:L}){return(d,p)=>(f(),u(t(r),{padding:".5rem .5rem 0 .5rem",cursor:"pointer",onClick:p[0]||(p[0]=U=>L("clicked"))},{default:o(()=>[a(t(r),{"background-color":e.topBgColor,padding:"1.5rem 2.5rem 0 2.5rem","border-radius":"10px 10px 0 0"},{default:o(()=>[a(t(r),{padding:"1.5rem 2rem","text-align":"center","background-color":e.imageBgColor,"border-radius":"10px 10px 0 0"},{default:o(()=>[l(d.$slots,"image",{},()=>[a(t(r),{is:"img",src:e.image,alt:e.title,"margin-bottom":"-18px",width:"100%"},null,8,["src","alt"])])]),_:3},8,["background-color"])]),_:3},8,["background-color"]),a(t(r),{"background-color":e.bottomBgColor,padding:"2rem 2.5rem","border-radius":"0 0 10px 10px"},{default:o(()=>[l(d.$slots,"title",{},()=>[a(t(T),{scale:"h5",my0:"","margin-bottom":"0.5rem",class:"text-gray-700 font-weight-700"},{default:o(()=>[c(m(e.title)+" ",1),e.subtitle?(f(),u(t(r),{key:0,is:"span","font-size":"15px",class:"text-gray-600 font-weight-400"},{default:o(()=>[c(" ( "+m(e.subtitle)+" ) ",1)]),_:1})):V("",!0)]),_:1})]),l(d.$slots,"description",{},()=>[a(t($),{my0:"","max-width":"350px","font-face":"circularSTD",class:"text-gray-600",scale:"subhead"},{default:o(()=>[c(m(e.description),1)]),_:1})])]),_:3},8,["background-color"])]),_:3}))}},g=S;S.__docgenInfo={exportName:"default",displayName:"DCard3",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!0},{name:"subtitle",type:{name:"string"}},{name:"description",type:{name:"string"},required:!0},{name:"image",type:{name:"string"},required:!0},{name:"topBgColor",type:{name:"string"},defaultValue:{func:!1,value:'"#E2EDF7"'}},{name:"bottomBgColor",type:{name:"string"},defaultValue:{func:!1,value:'"#ffffff"'}},{name:"imageBgColor",type:{name:"string"},defaultValue:{func:!1,value:'"#ffffff"'}}],events:[{name:"clicked"}],slots:[{name:"image"},{name:"title"},{name:"description"}],sourceFiles:["/Users/ericmcwinner/Documents/Work/Projects/Work/Vue/deposits-ui-kit-vue/src/d-card3/DCard3.vue"]};const z={title:"Card 3",component:g,argTypes:{title:{control:{type:"text"}},subtitle:{control:{type:"text"}},description:{control:{type:"text"}},image:{control:{type:"text"}},topBgColor:{control:{type:"color"}},bottomBgColor:{control:{type:"color"}},imageBgColor:{control:{type:"color"}}}},N=e=>({components:{DCard3:g,DCol:q,DRow:E,DResponsiveLayout:M,DBox:r},setup(){return{args:e}},template:`
      <d-responsive-layout>
        <d-row>
          <d-col v-for="arg in args" :md="4">
            <d-card3 v-bind="arg"/>
          </d-col>
        </d-row>
      </d-responsive-layout>
    `}),s=N.bind([]);s.args=[{title:"Recipes",description:"Quick guides to help you build fast.",image:"https://docs.deposits.dev/assets/svgs/home/recipes_dark.svg",topBgColor:"#0bb9e9",bottomBgColor:"#bdf3fc",imageBgColor:"#1b344d"},{title:"E-Commerce",subtitle:"Like Shopify",description:"Using the Commerce kit",image:"https://console.api.ondeposits.com/demo/money-new.svg"},{title:"Money",subtitle:"Like Chime",description:"Using the Money kit",image:"https://console.api.ondeposits.com/demo/e-commerce-new.svg",topBgColor:"#e85e75",bottomBgColor:"#e8dbdd",imageBgColor:"#ffffff"}];const w=e=>({components:{DCard3:g},setup(){return{args:e}},template:`
      <d-card3 v-bind="args"/>
    `}),n=w.bind({});n.args={title:"Money",subtitle:"Like Chime",description:"Using the Money kit",image:"https://console.api.ondeposits.com/demo/money-new.svg"};const i=w.bind({});i.args={title:"Money",subtitle:"Like Chime",description:"Using the Money kit",image:"https://console.api.ondeposits.com/demo/money-new.svg",topBgColor:"#0bb9e9",bottomBgColor:"#bdf3fc",imageBgColor:"#ffffff"};var b,y,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:"CardListTemplate.bind([])",...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var k,B,h;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    DCard3
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <d-card3 v-bind="args"/>
    \`
})`,...(h=(B=n.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var x,v,D;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    DCard3
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <d-card3 v-bind="args"/>
    \`
})`,...(D=(v=i.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const j=["CardList","Default","WithBackgroundColors"];export{s as CardList,n as Default,i as WithBackgroundColors,j as __namedExportsOrder,z as default};
//# sourceMappingURL=DCard3.stories-d1234679.js.map
