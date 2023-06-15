    <d-table v-bind="args">
      <template #table-header-left>
          <d-select size="large" placeholder="Last 7 days" width="200px" />
          <d-select size="large" placeholder="By Events" width="200px" />
        <d-select size="large" placeholder="All environments" width="200px" />
      </template>
    </d-table>
  `}),r=Ca.bind({});r.args={columns:a,data:e,enableCsvExport:!0,enableCustomizeView:!0};const wa=t=>({components:{DTable:o,DarkModeProvider:ia},setup(){return{args:t}},template:`
    <dark-mode-provider :dark-mode="true">
    <d-table v-bind="args" />
    </dark-mode-provider>
    `}),y=()=>{const t=wa.bind({});return t.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],t},i=n.bind({});i.args={columns:a,data:e};const c=n.bind({});c.args={columns:a,data:qa};const s=y();s.args={columns:a,data:e};const l=n.bind({});l.args={data:e,columns:a,expandMode:!0,paginate:!0};const m=n.bind({});m.args={data:e,columns:a,expandMode:!0,expandedColumns:["name","city"]};const S=n.bind({});S.args={search:!0,data:e,columns:a};const u=y();u.args={search:!0,columns:a,data:e};const h=n.bind({});h.args={search:!0,columns:a,data:e,showCheckboxes:!0};const p=y();p.args={search:!0,showCheckboxes:!0,columns:a,data:e};const q=n.bind({});q.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:e};const U=y();U.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:e};const g=n.bind({});g.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:H,paginate:!0};const C=y();C.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:H,paginate:!0};const w=n.bind({});w.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:H,paginate:!0,paginateRight:!0};const f=y();f.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:H,paginate:!0,paginateRight:!0};const d=n.bind({});d.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:ca,paginate:!0};const k=y();k.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:ca,paginate:!0};const M=n.bind({});M.args={columns:[{display:"Name",dataSelector:"name",uppercase:!0,sortable:!0,filterable:!0,width:"",minWidth:"",maxWidth:"",pipe:t=>t.toUpperCase()},{display:"City",dataSelector:"city",uppercase:!0,sortable:!0,filterable:!0,width:"",minWidth:"",maxWidth:""},{display:"Company/Work",dataSelector:"company",uppercase:!0,filterable:!0,width:"",minWidth:"",maxWidth:""},{display:"Country",dataSelector:"country",uppercase:!0,sortable:!0,filterable:!1,width:"",minWidth:"",maxWidth:""},{display:"Qty",dataSelector:"qty",uppercase:!0,sortable:!0,sortNumerically:!0,filterable:!0,width:"80px",minWidth:"80px",maxWidth:"80px",position:"right",pipe:t=>t*2},{display:"State",dataSelector:"state",uppercase:!0,sortable:!1,filterable:!0,width:"",minWidth:"",maxWidth:"",excludeFromCSV:!0}],data:e};const A=t=>({components:{DTable:o,DBadge:L,DarkModeProvider:ia},setup(){return{args:t}},template:`
    <dark-mode-provider :dark-mode="args.darkMode">
  <d-table v-bind="args">
    <template v-slot:item.tags="item">
      <d-badge v-for="(tag, index) in item.tags" :key="index">
        {{tag}}
      </d-badge>
    </template>
  </d-table>
    </dark-mode-provider>
  `}),B=A.bind({});B.args={columns:sa,paginate:!0,data:W,darkMode:!1};const N=A.bind({});N.args={columns:sa,paginate:!0,data:W,darkMode:!0};const v=A.bind({});v.args={columns:la,paginate:!0,data:W,darkMode:!1};const Y=A.bind({});Y.args={columns:la,paginate:!0,data:W,darkMode:!1,showCheckboxes:!0};const fa=t=>({components:{DTable:o},setup(){return{args:t}},methods:{alertPageChange(Sa){alert("The page changed and the new page is "+Sa+". I can do an ajax call to get this page's content.")}},template:'<d-table v-bind="args" @page-updated="alertPageChange" />'}),D=fa.bind({});D.args={columns:a,data:e,paginate:!0,asyncPagination:!0,totalPages:7};const ma=t=>({components:{DTable:o,DMenu:ha,DButton:pa},setup(){return{args:t}},methods:{handleRowClick:()=>{alert("Row was clicked but not button")}},template:`
    <d-table @row-clicked="handleRowClick" v-bind="args" >
    <template v-slot:item.actions="item">
        <d-menu :options="['Fintech', 'UI Kit', 'Finance', 'Identity' ]">
          <d-button size="medium">...</d-button>
        </d-menu>
      </template>
    </d-table>
  `}),P=ma.bind({});P.args={columns:Ua,data:e};const J=ma.bind({});J.args={columns:ga,data:e};var T,R,F;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    DTable,
    DBadge,
    DAutoLayout,
    DSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-table v-bind="args">
      <template #table-header-left>
          <d-select size="large" placeholder="Last 7 days" width="200px" />
          <d-select size="large" placeholder="By Events" width="200px" />
        <d-select size="large" placeholder="All environments" width="200px" />
      </template>
    </d-table>
  \`
})`,...(F=(R=r.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var O,I,b;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-table v-bind="args" />\`
})`,...(b=(I=i.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var E,z,V;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-table v-bind="args" />\`
})`,...(V=(z=c.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var j,G,K;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:"DarkModeTemplateFactory()",...(K=(G=s.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var x,_,Q;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-table v-bind="args" />\`
})`,...(Q=(_=l.parameters)==null?void 0:_.docs)==null?void 0:Q.source}}};var $,X,Z;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-table v-bind="args" />\`
})`,...(Z=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var tt,at,et;S.parameters={...S.parameters,docs:{...(tt=S.parameters)==null?void 0:tt.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-table v-bind="args" />\`
})`,...(et=(at=S.parameters)==null?void 0:at.docs)==null?void 0:et.source}}};var nt,ot,yt;u.parameters={...u.parameters,docs:{...(nt=u.parameters)==null?void 0:nt.docs,source:{originalSource:"DarkModeTemplateFactory()",...(yt=(ot=u.parameters)==null?void 0:ot.docs)==null?void 0:yt.source}}};var rt,it,ct;h.parameters={...h.parameters,docs:{...(rt=h.parameters)==null?void 0:rt.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-table v-bind="args" />\`
})`,...(ct=(it=h.parameters)==null?void 0:it.docs)==null?void 0:ct.source}}};var st,lt,mt;p.parameters={...p.parameters,docs:{...(st=p.parameters)==null?void 0:st.docs,source:{originalSource:"DarkModeTemplateFactory()",...(mt=(lt=p.parameters)==null?void 0:lt.docs)==null?void 0:mt.source}}};var St,ut,ht;q.parameters={...q.parameters,docs:{...(St=q.parameters)==null?void 0:St.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-table v-bind="args" />\`
})`,...(ht=(ut=q.parameters)==null?void 0:ut.docs)==null?void 0:ht.source}}};var pt,qt,Ut;U.parameters={...U.parameters,docs:{...(pt=U.parameters)==null?void 0:pt.docs,source:{originalSource:"DarkModeTemplateFactory()",...(Ut=(qt=U.parameters)==null?void 0:qt.docs)==null?void 0:Ut.source}}};var gt,Ct,wt;g.parameters={...g.parameters,docs:{...(gt=g.parameters)==null?void 0:gt.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-table v-bind="args" />\`
})`,...(wt=(Ct=g.parameters)==null?void 0:Ct.docs)==null?void 0:wt.source}}};var ft,dt,kt;C.parameters={...C.parameters,docs:{...(ft=C.parameters)==null?void 0:ft.docs,source:{originalSource:"DarkModeTemplateFactory()",...(kt=(dt=C.parameters)==null?void 0:dt.docs)==null?void 0:kt.source}}};var Mt,Bt,Nt;w.parameters={...w.parameters,docs:{...(Mt=w.parameters)==null?void 0:Mt.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-table v-bind="args" />\`
})`,...(Nt=(Bt=w.parameters)==null?void 0:Bt.docs)==null?void 0:Nt.source}}};var vt,Yt,Dt;f.parameters={...f.parameters,docs:{...(vt=f.parameters)==null?void 0:vt.docs,source:{originalSource:"DarkModeTemplateFactory()",...(Dt=(Yt=f.parameters)==null?void 0:Yt.docs)==null?void 0:Dt.source}}};var Pt,Jt,Ht;d.parameters={...d.parameters,docs:{...(Pt=d.parameters)==null?void 0:Pt.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-table v-bind="args" />\`
})`,...(Ht=(Jt=d.parameters)==null?void 0:Jt.docs)==null?void 0:Ht.source}}};var Wt,At,Lt;k.parameters={...k.parameters,docs:{...(Wt=k.parameters)==null?void 0:Wt.docs,source:{originalSource:"DarkModeTemplateFactory()",...(Lt=(At=k.parameters)==null?void 0:At.docs)==null?void 0:Lt.source}}};var Tt,Rt,Ft;M.parameters={...M.parameters,docs:{...(Tt=M.parameters)==null?void 0:Tt.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-table v-bind="args" />\`
})`,...(Ft=(Rt=M.parameters)==null?void 0:Rt.docs)==null?void 0:Ft.source}}};var Ot,It,bt;B.parameters={...B.parameters,docs:{...(Ot=B.parameters)==null?void 0:Ot.docs,source:{originalSource:`args => ({
  components: {
    DTable,
    DBadge,
    DarkModeProvider
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <dark-mode-provider :dark-mode="args.darkMode">
  <d-table v-bind="args">
    <template v-slot:item.tags="item">
      <d-badge v-for="(tag, index) in item.tags" :key="index">
        {{tag}}
      </d-badge>
    </template>
  </d-table>
    </dark-mode-provider>
  \`
})`,...(bt=(It=B.parameters)==null?void 0:It.docs)==null?void 0:bt.source}}};var Et,zt,Vt;N.parameters={...N.parameters,docs:{...(Et=N.parameters)==null?void 0:Et.docs,source:{originalSource:`args => ({
  components: {
    DTable,
    DBadge,
    DarkModeProvider
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <dark-mode-provider :dark-mode="args.darkMode">
  <d-table v-bind="args">
    <template v-slot:item.tags="item">
      <d-badge v-for="(tag, index) in item.tags" :key="index">
        {{tag}}
      </d-badge>
    </template>
  </d-table>
    </dark-mode-provider>
  \`
})`,...(Vt=(zt=N.parameters)==null?void 0:zt.docs)==null?void 0:Vt.source}}};var jt,Gt,Kt;v.parameters={...v.parameters,docs:{...(jt=v.parameters)==null?void 0:jt.docs,source:{originalSource:`args => ({
  components: {
    DTable,
    DBadge,
    DarkModeProvider
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <dark-mode-provider :dark-mode="args.darkMode">
  <d-table v-bind="args">
    <template v-slot:item.tags="item">
      <d-badge v-for="(tag, index) in item.tags" :key="index">
        {{tag}}
      </d-badge>
    </template>
  </d-table>
    </dark-mode-provider>
  \`
})`,...(Kt=(Gt=v.parameters)==null?void 0:Gt.docs)==null?void 0:Kt.source}}};var xt,_t,Qt;Y.parameters={...Y.parameters,docs:{...(xt=Y.parameters)==null?void 0:xt.docs,source:{originalSource:`args => ({
  components: {
    DTable,
    DBadge,
    DarkModeProvider
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <dark-mode-provider :dark-mode="args.darkMode">
  <d-table v-bind="args">
    <template v-slot:item.tags="item">
      <d-badge v-for="(tag, index) in item.tags" :key="index">
        {{tag}}
      </d-badge>
    </template>
  </d-table>
    </dark-mode-provider>
  \`
})`,...(Qt=(_t=Y.parameters)==null?void 0:_t.docs)==null?void 0:Qt.source}}};var $t,Xt,Zt;D.parameters={...D.parameters,docs:{...($t=D.parameters)==null?void 0:$t.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    alertPageChange(page) {
      alert("The page changed and the new page is " + page + ". I can do an ajax call to get this page's content.");
    }
  },
  template: \`<d-table v-bind="args" @page-updated="alertPageChange" />\`
})`,...(Zt=(Xt=D.parameters)==null?void 0:Xt.docs)==null?void 0:Zt.source}}};var ta,aa,ea;P.parameters={...P.parameters,docs:{...(ta=P.parameters)==null?void 0:ta.docs,source:{originalSource:`args => ({
  components: {
    DTable,
    DMenu,
    DButton
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    handleRowClick: () => {
      alert("Row was clicked but not button");
    }
  },
  template: \`
    <d-table @row-clicked="handleRowClick" v-bind="args" >
    <template v-slot:item.actions="item">
        <d-menu :options="['Fintech', 'UI Kit', 'Finance', 'Identity' ]">
          <d-button size="medium">...</d-button>
        </d-menu>
      </template>
    </d-table>
  \`
})`,...(ea=(aa=P.parameters)==null?void 0:aa.docs)==null?void 0:ea.source}}};var na,oa,ya;J.parameters={...J.parameters,docs:{...(na=J.parameters)==null?void 0:na.docs,source:{originalSource:`args => ({
  components: {
    DTable,
    DMenu,
    DButton
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    handleRowClick: () => {
      alert("Row was clicked but not button");
    }
  },
  template: \`
    <d-table @row-clicked="handleRowClick" v-bind="args" >
    <template v-slot:item.actions="item">
        <d-menu :options="['Fintech', 'UI Kit', 'Finance', 'Identity' ]">
          <d-button size="medium">...</d-button>
        </d-menu>
      </template>
    </d-table>
  \`
})`,...(ya=(oa=J.parameters)==null?void 0:oa.docs)==null?void 0:ya.source}}};const Na=["ExtraHeadings","Default","ChangeColorForRow","DarkModeDefault","ExpandMode","ExpandModeWithSpecifiedExpandedColumns","Search","DarkModeSearch","Checkboxes","DarkModeCheckboxes","ButtonActions","DarkModeButtonActions","Pagination","DarkModePagination","RightPagination","DarkModeRightPagination","CustomComponent","DarkModeCustomComponent","PipedColumnExampleMultiplyQtyByTwo","OverflowTable","DarkModeOverflowTable","FixedColumnOverflowTable","FixedColumnOverflowTableWithCheckboxes","AsyncPaginationTable","ActionSitcomsTable","FixedActionSitcomsTable"];export{P as ActionSitcomsTable,D as AsyncPaginationTable,q as ButtonActions,c as ChangeColorForRow,h as Checkboxes,d as CustomComponent,U as DarkModeButtonActions,p as DarkModeCheckboxes,k as DarkModeCustomComponent,s as DarkModeDefault,N as DarkModeOverflowTable,C as DarkModePagination,f as DarkModeRightPagination,u as DarkModeSearch,i as Default,l as ExpandMode,m as ExpandModeWithSpecifiedExpandedColumns,r as ExtraHeadings,J as FixedActionSitcomsTable,v as FixedColumnOverflowTable,Y as FixedColumnOverflowTableWithCheckboxes,B as OverflowTable,g as Pagination,M as PipedColumnExampleMultiplyQtyByTwo,w as RightPagination,S as Search,Na as __namedExportsOrder,Ba as default};
//# sourceMappingURL=DTable.stories-829b027b.js.map