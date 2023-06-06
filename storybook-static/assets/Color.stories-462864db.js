import{a as en,w as rn,k as te,u as ce,o as J,l as re,F as on,m as nn,p as K,t as oe}from"./vue.esm-bundler-b2140274.js";import{j as an,c as sn,s as tn}from"./DAccordion-9d3c9598.js";import"./_commonjsHelpers-87174ba5.js";const cn={key:0},ln={key:1},mn={class:"ui-color__container"},Xo={__name:"Color",props:{colorName:{type:String,default:"Cyan 100"},colorCode:{type:String,default:"#F2FAFC"},textColor:{type:String},colors:{type:Array}},setup(r){const ae=se=>{const ne=se.split(" ");return`${ne[0].toLowerCase()}-${ne[1]}`};return(se,ne)=>(J(),en(ce(sn),{class:te(["ui-color",[`bg-${ae(r.colorName)}`,`text-${r.textColor}`]])},{default:rn(()=>[r.colors&&r.colors.length?(J(),re("div",cn,[(J(!0),re(on,null,nn(r.colors,(ee,Zo)=>(J(),re("div",{key:`ui-color__${Zo}__${ce(tn)()}`,class:te(`ui-color__container bg-${ae(ee.colorName)} text-${ee.textColor}`)},[K("p",null,oe(ee.colorName),1),K("p",null,oe(ee.colorCode),1)],2))),128))])):(J(),re("div",ln,[K("div",mn,[K("p",null,oe(r.colorName),1),K("p",null,oe(r.colorCode),1)])]))]),_:1},8,["class"]))}},Yo=an(Xo,[["__scopeId","data-v-d78ecfa1"]]);Xo.__docgenInfo={exportName:"default",displayName:"Color",description:"",tags:{},props:[{name:"colorName",type:{name:"string"},defaultValue:{func:!1,value:'"Cyan 100"'}},{name:"colorCode",type:{name:"string"},defaultValue:{func:!1,value:'"#F2FAFC"'}},{name:"textColor",type:{name:"string"}},{name:"colors",type:{name:"array"}}],sourceFiles:["/Users/ericmcwinner/Documents/Work/Projects/Work/Vue/deposits-ui-kit-vue/src/d-color/Color.vue"]};const gn={title:"Color",component:Yo,argTypes:{colorName:{control:{type:"text"}},colorCode:{control:{type:"text"}},textColor:{control:{type:"text"}},colors:{control:{type:"object"}}}},e=r=>({components:{Color:Yo},setup(){return{args:r}},template:'<color v-bind="args" />'}),M=e.bind({});M.args={colors:[{colorName:"Cyan 100",colorCode:"#F2FAFC"},{colorName:"Cyan 200",colorCode:"#BDF3FC"},{colorName:"Cyan 300",colorCode:"#75E2FA"},{colorName:"Cyan 400",colorCode:"#43D2FA"},{colorName:"Cyan 500",colorCode:"#0DB9E9"},{colorName:"Cyan 600",colorCode:"#0C9CCC"},{colorName:"Cyan 700",colorCode:"#0B87B0",textColor:"white"},{colorName:"Cyan 800",colorCode:"#085E7A",textColor:"white"},{colorName:"Cyan 900",colorCode:"#094357",textColor:"white"}]};const Q=e.bind({});Q.args={colors:[{colorName:"Green 100",colorCode:"#EDFFF9"},{colorName:"Green 200",colorCode:"#C4EFDF"},{colorName:"Green 300",colorCode:"#9BDFC4"},{colorName:"Green 400",colorCode:"#71D0A7"},{colorName:"Green 500",colorCode:"#27C079"},{colorName:"Green 600",colorCode:"#00B058"},{colorName:"Green 700",colorCode:"#158957"},{colorName:"Green 800",colorCode:"#1F624A",textColor:"white"},{colorName:"Green 900",colorCode:"#1D3B32",textColor:"white"}]};const X=e.bind({});X.args={colors:[{colorName:"Orange 100",colorCode:"#FFF8F0"},{colorName:"Orange 200",colorCode:"#FFF0DB"},{colorName:"Orange 300",colorCode:"#FFE5C2"},{colorName:"Orange 400",colorCode:"#FFD49B"},{colorName:"Orange 500",colorCode:"#FFB44F"},{colorName:"Orange 600",colorCode:"#FF9505"},{colorName:"Orange 700",colorCode:"#E08304"},{colorName:"Orange 800",colorCode:"#995A06",textColor:"white"},{colorName:"Orange 900",colorCode:"#573302",textColor:"white"}]};const Y=e.bind({});Y.args={colors:[{colorName:"Red 100",colorCode:"#FFF0F2"},{colorName:"Red 200",colorCode:"#FCC5CE"},{colorName:"Red 300",colorCode:"#F99BAB"},{colorName:"Red 400",colorCode:"#E85E75"},{colorName:"Red 500",colorCode:"#D62F4B",textColor:"white"},{colorName:"Red 600",colorCode:"#AD283D",textColor:"white"},{colorName:"Red 700",colorCode:"#842432",textColor:"white"},{colorName:"Red 800",colorCode:"#5C1E27",textColor:"white"},{colorName:"Red 900",colorCode:"#331418",textColor:"white"}]};const Z=e.bind({});Z.args={colors:[{colorName:"Blue 100",colorCode:"#F7FBFF"},{colorName:"Blue 200",colorCode:"#DDEFFF"},{colorName:"Blue 300",colorCode:"#ACD7FF"},{colorName:"Blue 400",colorCode:"#62B2FD"},{colorName:"Blue 500",colorCode:"#0D7FE9"},{colorName:"Blue 600",colorCode:"#0059AC",textColor:"white"},{colorName:"Blue 700",colorCode:"#003F79",textColor:"white"},{colorName:"Blue 800",colorCode:"#022A50",textColor:"white"},{colorName:"Blue 900",colorCode:"#051B30",textColor:"white"}]};const o=e.bind({});o.args={colorName:"Cyan 100",colorCode:"#F2FAFC"};o.storyName="Cyan 100";const n=e.bind({});n.args={colorName:"Cyan 200",colorCode:"#BDF3FC"};n.storyName="Cyan 200";const a=e.bind({});a.args={colorName:"Cyan 300",colorCode:"#75E2FA"};a.storyName="Cyan 300";const s=e.bind({});s.args={colorName:"Cyan 400",colorCode:"#43D2FA"};s.storyName="Cyan 400";const t=e.bind({});t.args={colorName:"Cyan 500",colorCode:"#0DB9E9"};t.storyName="Cyan 500";const c=e.bind({});c.args={colorName:"Cyan 600",colorCode:"#0C9CCC"};c.storyName="Cyan 600";const l=e.bind({});l.args={colorName:"Cyan 700",colorCode:"#0B87B0",textColor:"white"};l.storyName="Cyan 700";const m=e.bind({});m.args={colorName:"Cyan 800",colorCode:"#085E7A",textColor:"white"};m.storyName="Cyan 800";const d=e.bind({});d.args={colorName:"Cyan 900",colorCode:"#094357",textColor:"white"};d.storyName="Cyan 900";const p=e.bind({});p.args={colorName:"Green 100",colorCode:"#EDFFF9"};p.storyName="Green 100";const u=e.bind({});u.args={colorName:"Green 200",colorCode:"#C4EFDF"};u.storyName="Green 200";const g=e.bind({});g.args={colorName:"Green 300",colorCode:"#9BDFC4"};g.storyName="Green 300";const C=e.bind({});C.args={colorName:"Green 400",colorCode:"#71D0A7"};C.storyName="Green 400";const i=e.bind({});i.args={colorName:"Green 500",colorCode:"#27C079"};i.storyName="Green 500";const N=e.bind({});N.args={colorName:"Green 600",colorCode:"#00B058"};N.storyName="Green 600";const y=e.bind({});y.args={colorName:"Green 700",colorCode:"#158957"};y.storyName="Green 700";const F=e.bind({});F.args={colorName:"Green 800",colorCode:"#1F624A",textColor:"white"};F.storyName="Green 800";const b=e.bind({});b.args={colorName:"Green 900",colorCode:"#1D3B32",textColor:"white"};b.storyName="Green 900";const B=e.bind({});B.args={colorName:"Orange 100",colorCode:"#FFF8F0"};B.storyName="Orange 100";const v=e.bind({});v.args={colorName:"Orange 200",colorCode:"#FFF0DB"};v.storyName="Orange 200";const S=e.bind({});S.args={colorName:"Orange 300",colorCode:"#FFE5C2"};S.storyName="Orange 300";const x=e.bind({});x.args={colorName:"Orange 400",colorCode:"#FFD49B"};x.storyName="Orange 400";const G=e.bind({});G.args={colorName:"Orange 500",colorCode:"#FFB44F"};G.storyName="Orange 500";const O=e.bind({});O.args={colorName:"Orange 600",colorCode:"#FF9505"};O.storyName="Orange 600";const R=e.bind({});R.args={colorName:"Orange 700",colorCode:"#E08304"};R.storyName="Orange 700";const h=e.bind({});h.args={colorName:"Orange 800",colorCode:"#995A06",textColor:"white"};h.storyName="Orange 800";const D=e.bind({});D.args={colorName:"Orange 900",colorCode:"#573302",textColor:"white"};D.storyName="Orange 900";const w=e.bind({});w.args={colorName:"Red 100",colorCode:"#FFF0F2"};w.storyName="Red 100";const _=e.bind({});_.args={colorName:"Red 200",colorCode:"#FCC5CE"};_.storyName="Red 200";const A=e.bind({});A.args={colorName:"Red 300",colorCode:"#F99BAB"};A.storyName="Red 300";const E=e.bind({});E.args={colorName:"Red 400",colorCode:"#E85E75"};E.storyName="Red 400";const f=e.bind({});f.args={colorName:"Red 500",colorCode:"#D62F4B",textColor:"white"};f.storyName="Red 500";const k=e.bind({});k.args={colorName:"Red 600",colorCode:"#AD283D",textColor:"white"};k.storyName="Red 600";const $=e.bind({});$.args={colorName:"Red 700",colorCode:"#842432",textColor:"white"};$.storyName="Red 700";const V=e.bind({});V.args={colorName:"Red 800",colorCode:"#5C1E27",textColor:"white"};V.storyName="Red 800";const j=e.bind({});j.args={colorName:"Red 900",colorCode:"#331418",textColor:"white"};j.storyName="Red 900";const I=e.bind({});I.args={colorName:"Blue 100",colorCode:"#F7FBFF"};I.storyName="Blue 100";const L=e.bind({});L.args={colorName:"Blue 200",colorCode:"#DDEFFF"};L.storyName="Blue 200";const P=e.bind({});P.args={colorName:"Blue 300",colorCode:"#ACD7FF"};P.storyName="Blue 300";const T=e.bind({});T.args={colorName:"Blue 400",colorCode:"#62B2FD"};T.storyName="Blue 400";const W=e.bind({});W.args={colorName:"Blue 500",colorCode:"#0D7FE9"};W.storyName="Blue 500";const z=e.bind({});z.args={colorName:"Blue 600",colorCode:"#0059AC",textColor:"white"};z.storyName="Blue 600";const U=e.bind({});U.args={colorName:"Blue 700",colorCode:"#003F79",textColor:"white"};U.storyName="Blue 700";const q=e.bind({});q.args={colorName:"Blue 800",colorCode:"#022A50",textColor:"white"};q.storyName="Blue 800";const H=e.bind({});H.args={colorName:"Blue 900",colorCode:"#051B30",textColor:"white"};H.storyName="Blue 900";var le,me,de;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(de=(me=M.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var pe,ue,ge;Q.parameters={...Q.parameters,docs:{...(pe=Q.parameters)==null?void 0:pe.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(ge=(ue=Q.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var Ce,ie,Ne;X.parameters={...X.parameters,docs:{...(Ce=X.parameters)==null?void 0:Ce.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(Ne=(ie=X.parameters)==null?void 0:ie.docs)==null?void 0:Ne.source}}};var ye,Fe,be;Y.parameters={...Y.parameters,docs:{...(ye=Y.parameters)==null?void 0:ye.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(be=(Fe=Y.parameters)==null?void 0:Fe.docs)==null?void 0:be.source}}};var Be,ve,Se;Z.parameters={...Z.parameters,docs:{...(Be=Z.parameters)==null?void 0:Be.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(Se=(ve=Z.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}};var xe,Ge,Oe;o.parameters={...o.parameters,docs:{...(xe=o.parameters)==null?void 0:xe.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(Oe=(Ge=o.parameters)==null?void 0:Ge.docs)==null?void 0:Oe.source}}};var Re,he,De;n.parameters={...n.parameters,docs:{...(Re=n.parameters)==null?void 0:Re.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(De=(he=n.parameters)==null?void 0:he.docs)==null?void 0:De.source}}};var we,_e,Ae;a.parameters={...a.parameters,docs:{...(we=a.parameters)==null?void 0:we.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(Ae=(_e=a.parameters)==null?void 0:_e.docs)==null?void 0:Ae.source}}};var Ee,fe,ke;s.parameters={...s.parameters,docs:{...(Ee=s.parameters)==null?void 0:Ee.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(ke=(fe=s.parameters)==null?void 0:fe.docs)==null?void 0:ke.source}}};var $e,Ve,je;t.parameters={...t.parameters,docs:{...($e=t.parameters)==null?void 0:$e.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(je=(Ve=t.parameters)==null?void 0:Ve.docs)==null?void 0:je.source}}};var Ie,Le,Pe;c.parameters={...c.parameters,docs:{...(Ie=c.parameters)==null?void 0:Ie.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(Pe=(Le=c.parameters)==null?void 0:Le.docs)==null?void 0:Pe.source}}};var Te,We,ze;l.parameters={...l.parameters,docs:{...(Te=l.parameters)==null?void 0:Te.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(ze=(We=l.parameters)==null?void 0:We.docs)==null?void 0:ze.source}}};var Ue,qe,He;m.parameters={...m.parameters,docs:{...(Ue=m.parameters)==null?void 0:Ue.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(He=(qe=m.parameters)==null?void 0:qe.docs)==null?void 0:He.source}}};var Je,Ke,Me;d.parameters={...d.parameters,docs:{...(Je=d.parameters)==null?void 0:Je.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(Me=(Ke=d.parameters)==null?void 0:Ke.docs)==null?void 0:Me.source}}};var Qe,Xe,Ye;p.parameters={...p.parameters,docs:{...(Qe=p.parameters)==null?void 0:Qe.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(Ye=(Xe=p.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,er,rr;u.parameters={...u.parameters,docs:{...(Ze=u.parameters)==null?void 0:Ze.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(rr=(er=u.parameters)==null?void 0:er.docs)==null?void 0:rr.source}}};var or,nr,ar;g.parameters={...g.parameters,docs:{...(or=g.parameters)==null?void 0:or.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(ar=(nr=g.parameters)==null?void 0:nr.docs)==null?void 0:ar.source}}};var sr,tr,cr;C.parameters={...C.parameters,docs:{...(sr=C.parameters)==null?void 0:sr.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(cr=(tr=C.parameters)==null?void 0:tr.docs)==null?void 0:cr.source}}};var lr,mr,dr;i.parameters={...i.parameters,docs:{...(lr=i.parameters)==null?void 0:lr.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(dr=(mr=i.parameters)==null?void 0:mr.docs)==null?void 0:dr.source}}};var pr,ur,gr;N.parameters={...N.parameters,docs:{...(pr=N.parameters)==null?void 0:pr.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(gr=(ur=N.parameters)==null?void 0:ur.docs)==null?void 0:gr.source}}};var Cr,ir,Nr;y.parameters={...y.parameters,docs:{...(Cr=y.parameters)==null?void 0:Cr.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(Nr=(ir=y.parameters)==null?void 0:ir.docs)==null?void 0:Nr.source}}};var yr,Fr,br;F.parameters={...F.parameters,docs:{...(yr=F.parameters)==null?void 0:yr.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(br=(Fr=F.parameters)==null?void 0:Fr.docs)==null?void 0:br.source}}};var Br,vr,Sr;b.parameters={...b.parameters,docs:{...(Br=b.parameters)==null?void 0:Br.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(Sr=(vr=b.parameters)==null?void 0:vr.docs)==null?void 0:Sr.source}}};var xr,Gr,Or;B.parameters={...B.parameters,docs:{...(xr=B.parameters)==null?void 0:xr.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(Or=(Gr=B.parameters)==null?void 0:Gr.docs)==null?void 0:Or.source}}};var Rr,hr,Dr;v.parameters={...v.parameters,docs:{...(Rr=v.parameters)==null?void 0:Rr.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(Dr=(hr=v.parameters)==null?void 0:hr.docs)==null?void 0:Dr.source}}};var wr,_r,Ar;S.parameters={...S.parameters,docs:{...(wr=S.parameters)==null?void 0:wr.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(Ar=(_r=S.parameters)==null?void 0:_r.docs)==null?void 0:Ar.source}}};var Er,fr,kr;x.parameters={...x.parameters,docs:{...(Er=x.parameters)==null?void 0:Er.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(kr=(fr=x.parameters)==null?void 0:fr.docs)==null?void 0:kr.source}}};var $r,Vr,jr;G.parameters={...G.parameters,docs:{...($r=G.parameters)==null?void 0:$r.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(jr=(Vr=G.parameters)==null?void 0:Vr.docs)==null?void 0:jr.source}}};var Ir,Lr,Pr;O.parameters={...O.parameters,docs:{...(Ir=O.parameters)==null?void 0:Ir.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(Pr=(Lr=O.parameters)==null?void 0:Lr.docs)==null?void 0:Pr.source}}};var Tr,Wr,zr;R.parameters={...R.parameters,docs:{...(Tr=R.parameters)==null?void 0:Tr.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(zr=(Wr=R.parameters)==null?void 0:Wr.docs)==null?void 0:zr.source}}};var Ur,qr,Hr;h.parameters={...h.parameters,docs:{...(Ur=h.parameters)==null?void 0:Ur.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(Hr=(qr=h.parameters)==null?void 0:qr.docs)==null?void 0:Hr.source}}};var Jr,Kr,Mr;D.parameters={...D.parameters,docs:{...(Jr=D.parameters)==null?void 0:Jr.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(Mr=(Kr=D.parameters)==null?void 0:Kr.docs)==null?void 0:Mr.source}}};var Qr,Xr,Yr;w.parameters={...w.parameters,docs:{...(Qr=w.parameters)==null?void 0:Qr.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(Yr=(Xr=w.parameters)==null?void 0:Xr.docs)==null?void 0:Yr.source}}};var Zr,eo,ro;_.parameters={..._.parameters,docs:{...(Zr=_.parameters)==null?void 0:Zr.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(ro=(eo=_.parameters)==null?void 0:eo.docs)==null?void 0:ro.source}}};var oo,no,ao;A.parameters={...A.parameters,docs:{...(oo=A.parameters)==null?void 0:oo.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(ao=(no=A.parameters)==null?void 0:no.docs)==null?void 0:ao.source}}};var so,to,co;E.parameters={...E.parameters,docs:{...(so=E.parameters)==null?void 0:so.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(co=(to=E.parameters)==null?void 0:to.docs)==null?void 0:co.source}}};var lo,mo,po;f.parameters={...f.parameters,docs:{...(lo=f.parameters)==null?void 0:lo.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(po=(mo=f.parameters)==null?void 0:mo.docs)==null?void 0:po.source}}};var uo,go,Co;k.parameters={...k.parameters,docs:{...(uo=k.parameters)==null?void 0:uo.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(Co=(go=k.parameters)==null?void 0:go.docs)==null?void 0:Co.source}}};var io,No,yo;$.parameters={...$.parameters,docs:{...(io=$.parameters)==null?void 0:io.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(yo=(No=$.parameters)==null?void 0:No.docs)==null?void 0:yo.source}}};var Fo,bo,Bo;V.parameters={...V.parameters,docs:{...(Fo=V.parameters)==null?void 0:Fo.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(Bo=(bo=V.parameters)==null?void 0:bo.docs)==null?void 0:Bo.source}}};var vo,So,xo;j.parameters={...j.parameters,docs:{...(vo=j.parameters)==null?void 0:vo.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(xo=(So=j.parameters)==null?void 0:So.docs)==null?void 0:xo.source}}};var Go,Oo,Ro;I.parameters={...I.parameters,docs:{...(Go=I.parameters)==null?void 0:Go.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(Ro=(Oo=I.parameters)==null?void 0:Oo.docs)==null?void 0:Ro.source}}};var ho,Do,wo;L.parameters={...L.parameters,docs:{...(ho=L.parameters)==null?void 0:ho.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(wo=(Do=L.parameters)==null?void 0:Do.docs)==null?void 0:wo.source}}};var _o,Ao,Eo;P.parameters={...P.parameters,docs:{...(_o=P.parameters)==null?void 0:_o.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(Eo=(Ao=P.parameters)==null?void 0:Ao.docs)==null?void 0:Eo.source}}};var fo,ko,$o;T.parameters={...T.parameters,docs:{...(fo=T.parameters)==null?void 0:fo.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...($o=(ko=T.parameters)==null?void 0:ko.docs)==null?void 0:$o.source}}};var Vo,jo,Io;W.parameters={...W.parameters,docs:{...(Vo=W.parameters)==null?void 0:Vo.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(Io=(jo=W.parameters)==null?void 0:jo.docs)==null?void 0:Io.source}}};var Lo,Po,To;z.parameters={...z.parameters,docs:{...(Lo=z.parameters)==null?void 0:Lo.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(To=(Po=z.parameters)==null?void 0:Po.docs)==null?void 0:To.source}}};var Wo,zo,Uo;U.parameters={...U.parameters,docs:{...(Wo=U.parameters)==null?void 0:Wo.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(Uo=(zo=U.parameters)==null?void 0:zo.docs)==null?void 0:Uo.source}}};var qo,Ho,Jo;q.parameters={...q.parameters,docs:{...(qo=q.parameters)==null?void 0:qo.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(Jo=(Ho=q.parameters)==null?void 0:Ho.docs)==null?void 0:Jo.source}}};var Ko,Mo,Qo;H.parameters={...H.parameters,docs:{...(Ko=H.parameters)==null?void 0:Ko.docs,source:{originalSource:`args => ({
  components: {
    Color
  },
  setup() {
    return {
      args
    };
  },
  template: \`<color v-bind="args" />\`
})`,...(Qo=(Mo=H.parameters)==null?void 0:Mo.docs)==null?void 0:Qo.source}}};const Cn=["Cyan","Green","Orange","Red","Blue","Cyan100","Cyan200","Cyan300","Cyan400","Cyan500","Cyan600","Cyan700","Cyan800","Cyan900","Green100","Green200","Green300","Green400","Green500","Green600","Green700","Green800","Green900","Orange100","Orange200","Orange300","Orange400","Orange500","Orange600","Orange700","Orange800","Orange900","Red100","Red200","Red300","Red400","Red500","Red600","Red700","Red800","Red900","Blue100","Blue200","Blue300","Blue400","Blue500","Blue600","Blue700","Blue800","Blue900"];export{Z as Blue,I as Blue100,L as Blue200,P as Blue300,T as Blue400,W as Blue500,z as Blue600,U as Blue700,q as Blue800,H as Blue900,M as Cyan,o as Cyan100,n as Cyan200,a as Cyan300,s as Cyan400,t as Cyan500,c as Cyan600,l as Cyan700,m as Cyan800,d as Cyan900,Q as Green,p as Green100,u as Green200,g as Green300,C as Green400,i as Green500,N as Green600,y as Green700,F as Green800,b as Green900,X as Orange,B as Orange100,v as Orange200,S as Orange300,x as Orange400,G as Orange500,O as Orange600,R as Orange700,h as Orange800,D as Orange900,Y as Red,w as Red100,_ as Red200,A as Red300,E as Red400,f as Red500,k as Red600,$ as Red700,V as Red800,j as Red900,Cn as __namedExportsOrder,gn as default};
//# sourceMappingURL=Color.stories-462864db.js.map
