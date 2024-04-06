    <d-table v-bind="args" />`}),tn=t=>({components:{DTable:y},setup(){return{args:t}},methods:{alertName:function(e){alert(`The name on the row clicked is: ${e.name}`)}},template:`
    <d-table @row-clicked="alertName" v-bind="args" />`}),an=t=>({components:{DTable:y,DBadge:l,DAutoLayout:it,DSelect:Ve},setup(){return{args:t}},template:`
    <d-table v-bind="args">
    <template #table-header-left>
      <d-select size="large" placeholder="Last 7 days" width="200px" />
      <d-select size="large" placeholder="By Events" width="200px" />
      <d-select size="large" placeholder="All environments" width="200px" />
    </template>
    </d-table>
  `}),S=an.bind({});S.args={columns:a,data:tt,enableCsvExport:!0,enableCustomizeView:!0};const en=t=>({components:{DTable:y,DarkModeProvider:Le},setup(){return{args:t}},template:`
    <dark-mode-provider :dark-mode="true">
    <d-table v-bind="args" />
    </dark-mode-provider>
  `}),m=()=>{const t=en.bind({});return t.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],t},u=r.bind({});u.args={columns:a,data:n};const h=r.bind({});h.args={columns:a,data:Ge};const p=m();p.args={columns:a,data:n};const g=tn.bind({});g.args={columns:a,data:n};const U=r.bind({});U.args={data:n,columns:a,expandMode:!0,paginate:!0};const q=r.bind({});q.args={data:n,columns:a,expandMode:!0,paginate:!0,hideExpandModeHeader:!0};const nn=t=>({components:{DTable:y},setup(){return{args:t}},template:`
    <d-table v-bind="args">
      <template #no-expanded-row-content>
        Select a row on the left pane to see more details
      </template>
    </d-table>
  `}),C=nn.bind({});C.args={data:n,columns:a,expandMode:!0,paginate:!0,hideExpandModeHeader:!0};const w=r.bind({});w.args={data:n,columns:a,expandMode:!0,expandedColumns:["name","city"]};const d=r.bind({});d.args={search:!0,data:n,columns:a};const on=t=>({components:{DTable:y},methods:{handleSearch:function(e){alert(`I will search for ${e} from an API`)}},setup(){return{args:t}},template:`
    <d-table 
      v-bind="args"
      @search="handleSearch"
    />
  `}),f=on.bind({});f.args={search:!0,data:n,columns:a,asyncSearch:!0};const k=m();k.args={search:!0,columns:a,data:n};const M=r.bind({});M.args={columns:a,data:n,showCheckboxes:!0};const B=m();B.args={showCheckboxes:!0,columns:a,data:n};const N=r.bind({});N.args={columns:a,data:n,enableCustomizeView:!0};const v=r.bind({});v.args={columns:a,data:n,enableCsvExport:!0,buttonActionsAlignment:"right"};const yn=t=>({components:{DTable:y},setup(){return{args:t}},methods:{alertStuff:function(){alert("Downloading CSV...")}},template:`
    <d-table @download-csv="alertStuff" v-bind="args" />
  `}),rn=t=>({components:{DTable:y},setup(){return{args:t}},template:`
    <d-table v-bind="args" />
  `}),Y=rn.bind({});Y.args={columns:a,data:n,enableCsvExport:!0,asyncCSVExport:!0,exportCsvUrl:"https://www.stats.govt.nz/assets/Uploads/Business-employment-data/Business-employment-data-June-2023-quarter/Download-data/business-employment-data-june-2023-quarter.zip"};const D=yn.bind({});D.args={columns:a,data:n,enableCsvExport:!0,asyncCSVExport:!0};const P=r.bind({});P.args={columns:a,data:n,loading:!0};const J=r.bind({});J.args={enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:n};const H=r.bind({});H.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:[]};const cn=t=>({components:{DTable:y,DAutoLayout:it,DText:Ae,DButton:$},setup(){return{args:t}},template:`
    <d-table v-bind="args">
      <template #empty-table-content>
        <d-auto-layout margin-y="1rem" direction="vertical" item-spacing="6px" alignment="center">
          <d-text font-face="heroNew" font-weight="500" my0>No payments yet</d-text>
          <d-text scale="subhead" font-face="heroNew" my0 color="#6D7786">You haven’t made any transfer yet.
            Your transfers will show up here once you have any.</d-text>
          <d-auto-layout margin-top="1rem">
            <d-button color-scheme="primary" size="medium">Send money</d-button>
            <d-button color-scheme="outline" size="medium">Pay a bill</d-button>
          </d-auto-layout>
        </d-auto-layout>
      </template>
    </d-table>
  `}),W=cn.bind({});W.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:[]};const A=m();A.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:n};const L=r.bind({});L.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:tt,paginate:!0};const T=r.bind({});T.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,paginate:!0,data:yt};const R=m();R.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:yt,paginate:!0};const F=r.bind({});F.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:yt,paginate:!0,paginateRight:!0};const I=m();I.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:yt,paginate:!0,paginateRight:!0};const sn=t=>({components:{DTable:y,DButton:$,DBadge:l},methods:{deleteRow:function(e){alert(e)}},setup(){return{args:t}},template:`
    <d-table v-bind="args">
      <template v-slot:item.state="row">
        <d-badge>{{row.state}}</d-badge>
      </template>
      
      <template v-slot:item.action="row">
        <d-button size="medium" @click="deleteRow(row.uuuid)">Delete row</d-button>
      </template>
      
    </d-table>
  `}),O=sn.bind({});O.args={columns:[...a,{dataSelector:"action",display:"Action"}],data:Ie};const b=m();b.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:Ie,paginate:!0};const E=r.bind({});E.args={columns:[{display:"Name",dataSelector:"name",uppercase:!0,sortable:!0,filterable:!0,width:"",minWidth:"",maxWidth:"",pipe:t=>t.toUpperCase()},{display:"City",dataSelector:"city",uppercase:!0,sortable:!0,filterable:!0,width:"",minWidth:"",maxWidth:""},{display:"No of characters in City",dataSelector:"non_existent_and_not_necessary",pipe:(t,e)=>e.city.length},{display:"Company/Work",dataSelector:"company",uppercase:!0,filterable:!0,width:"",minWidth:"",maxWidth:""},{display:"Country",dataSelector:"country",uppercase:!0,sortable:!0,filterable:!1,width:"",minWidth:"",maxWidth:""},{display:"Qty",dataSelector:"qty",uppercase:!0,sortable:!0,sortNumerically:!0,filterable:!0,width:"80px",minWidth:"80px",maxWidth:"80px",position:"right",pipe:t=>t*2},{display:"State",dataSelector:"state",uppercase:!0,sortable:!1,filterable:!0,width:"",minWidth:"",maxWidth:"",excludeFromCSV:!0}],data:n};const rt=t=>({components:{DTable:y,DBadge:l,DarkModeProvider:Le},setup(){return{args:t}},template:`
    <dark-mode-provider :dark-mode="args.darkMode">
    <d-table v-bind="args">
      <template v-slot:item.tags="item">
        <d-badge v-for="(tag, index) in item.tags" :key="index">
          {{ tag }}
        </d-badge>
      </template>
    </d-table>
    </dark-mode-provider>
  `}),z=rt.bind({});z.args={columns:Oe,paginate:!0,data:at,darkMode:!1};const V=rt.bind({});V.args={columns:Oe,paginate:!0,data:at,darkMode:!0};const j=rt.bind({});j.args={columns:ct,paginate:!0,data:at,darkMode:!1};const K=rt.bind({});K.args={columns:ct,paginate:!0,data:at,darkMode:!1,showCheckboxes:!0};const ln=t=>({components:{DTable:y},setup(){return{args:t}},methods:{alertPageChange(e){alert("The page changed and the new page is "+e+". I can do an ajax call to get this page's content.")}},template:`
    <d-table v-bind="args" @page-updated="alertPageChange" />`}),G=ln.bind({});G.args={columns:a,data:tt,paginate:!0,asyncPagination:!0,totalPages:7};const be=t=>({components:{DTable:y,DMenu:je,DButton:$},setup(){return{args:t}},methods:{handleRowClick:()=>{alert("Row was clicked but not button")}},template:`
    <d-table @row-clicked="handleRowClick" v-bind="args">
    <template v-slot:item.actions="item">
      <d-menu :options="['Fintech', 'UI Kit', 'Finance', 'Identity' ]">
        <d-button size="medium">...</d-button>
      </d-menu>
    </template>
    </d-table>
  `}),x=be.bind({});x.args={columns:xe,data:tt};const _=be.bind({});_.args={columns:_e,data:tt};const mn=t=>({components:{DTable:y,DTooltip:Ke,DBadge:l,DTableCellText:Je},setup(){return{args:t}},template:`
    <d-table v-bind="args">
    <template v-slot:item.tags="item">
      <d-badge v-for="(tag, index) in item.tags" :key="index">
        {{ tag }}
      </d-badge>
    </template>
    <template v-slot:item.customer_email="item">
      <d-tooltip :tooltip="item.customer_email">
        <d-table-cell-text>{{item.customer_email}}</d-table-cell-text>
      </d-tooltip>
    </template>
    <template v-slot:item.customer_phone="item">
      <d-tooltip :tooltip="item.customer_phone">
        <d-table-cell-text>{{item.customer_phone}}</d-table-cell-text>
      </d-tooltip>
    </template>
    </d-table>
  `}),Z=mn.bind({});Z.args={columns:ct,paginate:!0,data:at,darkMode:!1};const Sn=t=>({components:{DTable:y},methods:{tableUpdate:function(e){alert(`The current page is ${e.page} and the search value is ${e.search}. The returned payload is ${JSON.stringify(e)}`)},pageUpdate:function(e){console.log("Pagination changed",e)},searchUpdate:function(e){console.log("Search changed",e)}},setup(){return{args:t}},template:' <d-table v-bind="args" @page-updated="pageUpdate" @search="searchUpdate" @async-table-update="tableUpdate" />'}),Q=r.bind({});Q.args={columns:a,data:n,mobileColumns:["name","city"]};const X=Sn.bind({});X.args={columns:a,data:n,asyncPagination:!0,asyncSearch:!0,totalPages:49,paginate:!0,search:!0};const nt=t=>({components:{DTable:y,DBox:He,DBadge:l,DButton:$},methods:{sort:function(e){console.log(e)}},setup(){const e=Te(Ze),i=Re({identities:[],data:[],per_page:0,currentPage:1,totalPages:1});return Fe(()=>{const c={data:Xe,links:{first:"https://api.ghost.deposits.dev/api/v1/user/get-identities?page=1",last:"https://api.ghost.deposits.dev/api/v1/user/get-identities?page=13",prev:null,next:"https://api.ghost.deposits.dev/api/v1/user/get-identities?page=2"},meta:{current_page:1,from:1,last_page:13,path:"https://api.ghost.deposits.dev/api/v1/user/get-identities",per_page:"20",to:20,total:243}};i.identities=c.data,c.data.length==0&&(i.data=[]),i.currentPage=c.meta.current_page,i.totalPages=c.meta.last_page;for(let s=0;s<c.data.length;s++){const o=c.data[s];let et="pending",st="";o.tenant&&o.tenant.name&&(st=o.tenant.name),o.personal_information&&o.personal_information.name&&(et=o.personal_information.status);let Ee={Name:o.name,Tenants:st,Email:o.email,Date:We(o.created_at).format("MMM DD, Y"),Action:o.id,Kyc:et,route:"/identity/"+o.id};i.data.push(Ee)}}),{args:t,columns:e,state:i}},template:`
    <d-table
      v-bind="args"
      :columns="columns"
      :data="state.data"
      :enable-csv-export="true"
      :enable-customize-view="true"
      :paginate="true"
      :async-pagination="true"
      :search="true"
      :show-checkboxes="true"
      padding="none"
      paginate-right
      searchPlaceholder="Search entities"
      :total-pages="state.totalPages"
      :current-page="state.currentPage"
      async-sort
      @sort="sort"
    >
    <template v-slot:item.Kyc="item">
      <d-box
        align-items="center"
        display="inline-flex"
        text-decoration="none"
      >
        <d-badge
          :subtle="true"
          color-scheme="red"
          size="medium"
          text="failed"
        />
      </d-box>
    </template>
    <template v-slot:item.Action="item">
      <d-box
        is="a"
        :to="{ name: 'Identity', params: { id: item.Action } }"
        align-items="center"
        display="inline-flex"
        text-decoration="none"
      >
        <d-button
          responsive
          size="medium"
          text="Manual verify"
        ></d-button>
      </d-box>
    </template>
    </d-table>
  `}),ot=t=>({components:{DTable:y,DBox:He,DBadge:l,DButton:$,DText:Ae,EyeFilledIcon:ze},setup(){const e=Te(Qe),i=Re({tenants:[],data:[],per_page:10,currentPage:1,totalPages:1});return Fe(()=>{const c={data:$e,links:{first:"https://api.ghost.deposits.dev/api/v1/user/get-tenants?page=1",last:"https://api.ghost.deposits.dev/api/v1/user/get-tenants?page=17",prev:null,next:"https://api.ghost.deposits.dev/api/v1/user/get-tenants?page=2"},meta:{current_page:1,from:1,last_page:17,path:"https://api.ghost.deposits.dev/api/v1/user/get-tenants",per_page:10,to:10,total:170}};i.data=[],i.tenants=c.data,c.data.length==0&&(i.data=[]),i.currentPage=c.meta.current_page,i.totalPages=c.meta.last_page;for(let s=0;s<c.data.length;s++){const o=c.data[s];let et={ID:o.id,currency:`$${Math.floor(Math.random()*(100-20)+20)}`,Tenants:o.name,Email:o.contact_email,Date:We(o.created_at).format("MMM DD, YYYY"),Action:o.id,route:"/tenant/"+o.id+"/overview"};i.data.push(et)}}),{columns:e,state:i,args:t}},template:`
  <d-table
            :columns="columns"
            :data="state.data"
            :enable-csv-export="true"
            :enable-customize-view="true"
            :paginate="true"
            :search="true"
            :show-checkboxes="true"
            padding="none"
            paginate-right
            searchPlaceholder="Search tenant"
            :total-pages="state.totalPages"
            :current-page="state.currentPage"
            :async-pagination="true"
            
          >
            <template v-slot:item.Action="item">
              <d-box
                is="a"
                :to="{ name: 'TenantOverview', params: { id: item.Action } }"
                align-items="center"
                class="text-cyan-500"
                display="inline-flex"
                text-decoration="none"
              >
                <eye-filled-icon height="18px" width="18px" />
                <d-text
                  class="text-cyan-500"
                  font-face="circularSTD"
                  margin-left="4px"
                  my0
                  scale="p-16"
                >
                  View details
                </d-text>
              </d-box>
            </template>
          </d-table>
  `});var lt,mt,St;S.parameters={...S.parameters,docs:{...(lt=S.parameters)==null?void 0:lt.docs,source:{originalSource:`args => ({
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
})`,...(St=(mt=S.parameters)==null?void 0:mt.docs)==null?void 0:St.source}}};var ut,ht,pt;u.parameters={...u.parameters,docs:{...(ut=u.parameters)==null?void 0:ut.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-table v-bind="args" />\`
})`,...(pt=(ht=u.parameters)==null?void 0:ht.docs)==null?void 0:pt.source}}};var gt,Ut,qt;h.parameters={...h.parameters,docs:{...(gt=h.parameters)==null?void 0:gt.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-table v-bind="args" />\`
})`,...(qt=(Ut=h.parameters)==null?void 0:Ut.docs)==null?void 0:qt.source}}};var Ct,wt,dt;p.parameters={...p.parameters,docs:{...(Ct=p.parameters)==null?void 0:Ct.docs,source:{originalSource:"DarkModeTemplateFactory()",...(dt=(wt=p.parameters)==null?void 0:wt.docs)==null?void 0:dt.source}}};var ft,kt,Mt;g.parameters={...g.parameters,docs:{...(ft=g.parameters)==null?void 0:ft.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    alertName: function (row) {
      alert(\`The name on the row clicked is: \${row.name}\`);
    }
  },
  template: \`
    <d-table @row-clicked="alertName" v-bind="args" />\`
})`,...(Mt=(kt=g.parameters)==null?void 0:kt.docs)==null?void 0:Mt.source}}};var Bt,Nt,vt;U.parameters={...U.parameters,docs:{...(Bt=U.parameters)==null?void 0:Bt.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-table v-bind="args" />\`
})`,...(vt=(Nt=U.parameters)==null?void 0:Nt.docs)==null?void 0:vt.source}}};var Yt,Dt,Pt;q.parameters={...q.parameters,docs:{...(Yt=q.parameters)==null?void 0:Yt.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-table v-bind="args" />\`
})`,...(Pt=(Dt=q.parameters)==null?void 0:Dt.docs)==null?void 0:Pt.source}}};var Jt,Ht,Wt;C.parameters={...C.parameters,docs:{...(Jt=C.parameters)==null?void 0:Jt.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-table v-bind="args">
      <template #no-expanded-row-content>
        Select a row on the left pane to see more details
      </template>
    </d-table>
  \`
})`,...(Wt=(Ht=C.parameters)==null?void 0:Ht.docs)==null?void 0:Wt.source}}};var At,Lt,Tt;w.parameters={...w.parameters,docs:{...(At=w.parameters)==null?void 0:At.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-table v-bind="args" />\`
})`,...(Tt=(Lt=w.parameters)==null?void 0:Lt.docs)==null?void 0:Tt.source}}};var Rt,Ft,It;d.parameters={...d.parameters,docs:{...(Rt=d.parameters)==null?void 0:Rt.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-table v-bind="args" />\`
})`,...(It=(Ft=d.parameters)==null?void 0:Ft.docs)==null?void 0:It.source}}};var Ot,bt,Et;f.parameters={...f.parameters,docs:{...(Ot=f.parameters)==null?void 0:Ot.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  methods: {
    handleSearch: function (text) {
      alert(\`I will search for \${text} from an API\`);
    }
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-table 
      v-bind="args"
      @search="handleSearch"
    />
  \`
})`,...(Et=(bt=f.parameters)==null?void 0:bt.docs)==null?void 0:Et.source}}};var zt,Vt,jt;k.parameters={...k.parameters,docs:{...(zt=k.parameters)==null?void 0:zt.docs,source:{originalSource:"DarkModeTemplateFactory()",...(jt=(Vt=k.parameters)==null?void 0:Vt.docs)==null?void 0:jt.source}}};var Kt,Gt,xt;M.parameters={...M.parameters,docs:{...(Kt=M.parameters)==null?void 0:Kt.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-table v-bind="args" />\`
})`,...(xt=(Gt=M.parameters)==null?void 0:Gt.docs)==null?void 0:xt.source}}};var _t,Zt,Qt;B.parameters={...B.parameters,docs:{...(_t=B.parameters)==null?void 0:_t.docs,source:{originalSource:"DarkModeTemplateFactory()",...(Qt=(Zt=B.parameters)==null?void 0:Zt.docs)==null?void 0:Qt.source}}};var Xt,$t,ta;N.parameters={...N.parameters,docs:{...(Xt=N.parameters)==null?void 0:Xt.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-table v-bind="args" />\`
})`,...(ta=($t=N.parameters)==null?void 0:$t.docs)==null?void 0:ta.source}}};var aa,ea,na;v.parameters={...v.parameters,docs:{...(aa=v.parameters)==null?void 0:aa.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-table v-bind="args" />\`
})`,...(na=(ea=v.parameters)==null?void 0:ea.docs)==null?void 0:na.source}}};var oa,ya,ra;Y.parameters={...Y.parameters,docs:{...(oa=Y.parameters)==null?void 0:oa.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-table v-bind="args" />
  \`
})`,...(ra=(ya=Y.parameters)==null?void 0:ya.docs)==null?void 0:ra.source}}};var ia,ca,sa;D.parameters={...D.parameters,docs:{...(ia=D.parameters)==null?void 0:ia.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    alertStuff: function () {
      alert("Downloading CSV...");
    }
  },
  template: \`
    <d-table @download-csv="alertStuff" v-bind="args" />
  \`
})`,...(sa=(ca=D.parameters)==null?void 0:ca.docs)==null?void 0:sa.source}}};var la,ma,Sa;P.parameters={...P.parameters,docs:{...(la=P.parameters)==null?void 0:la.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-table v-bind="args" />\`
})`,...(Sa=(ma=P.parameters)==null?void 0:ma.docs)==null?void 0:Sa.source}}};var ua,ha,pa;J.parameters={...J.parameters,docs:{...(ua=J.parameters)==null?void 0:ua.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-table v-bind="args" />\`
})`,...(pa=(ha=J.parameters)==null?void 0:ha.docs)==null?void 0:pa.source}}};var ga,Ua,qa;H.parameters={...H.parameters,docs:{...(ga=H.parameters)==null?void 0:ga.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-table v-bind="args" />\`
})`,...(qa=(Ua=H.parameters)==null?void 0:Ua.docs)==null?void 0:qa.source}}};var Ca,wa,da;W.parameters={...W.parameters,docs:{...(Ca=W.parameters)==null?void 0:Ca.docs,source:{originalSource:`args => ({
  components: {
    DTable,
    DAutoLayout,
    DText,
    DButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-table v-bind="args">
      <template #empty-table-content>
        <d-auto-layout margin-y="1rem" direction="vertical" item-spacing="6px" alignment="center">
          <d-text font-face="heroNew" font-weight="500" my0>No payments yet</d-text>
          <d-text scale="subhead" font-face="heroNew" my0 color="#6D7786">You haven’t made any transfer yet.
            Your transfers will show up here once you have any.</d-text>
          <d-auto-layout margin-top="1rem">
            <d-button color-scheme="primary" size="medium">Send money</d-button>
            <d-button color-scheme="outline" size="medium">Pay a bill</d-button>
          </d-auto-layout>
        </d-auto-layout>
      </template>
    </d-table>
  \`
})`,...(da=(wa=W.parameters)==null?void 0:wa.docs)==null?void 0:da.source}}};var fa,ka,Ma;A.parameters={...A.parameters,docs:{...(fa=A.parameters)==null?void 0:fa.docs,source:{originalSource:"DarkModeTemplateFactory()",...(Ma=(ka=A.parameters)==null?void 0:ka.docs)==null?void 0:Ma.source}}};var Ba,Na,va;L.parameters={...L.parameters,docs:{...(Ba=L.parameters)==null?void 0:Ba.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-table v-bind="args" />\`
})`,...(va=(Na=L.parameters)==null?void 0:Na.docs)==null?void 0:va.source}}};var Ya,Da,Pa;T.parameters={...T.parameters,docs:{...(Ya=T.parameters)==null?void 0:Ya.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-table v-bind="args" />\`
})`,...(Pa=(Da=T.parameters)==null?void 0:Da.docs)==null?void 0:Pa.source}}};var Ja,Ha,Wa;R.parameters={...R.parameters,docs:{...(Ja=R.parameters)==null?void 0:Ja.docs,source:{originalSource:"DarkModeTemplateFactory()",...(Wa=(Ha=R.parameters)==null?void 0:Ha.docs)==null?void 0:Wa.source}}};var Aa,La,Ta;F.parameters={...F.parameters,docs:{...(Aa=F.parameters)==null?void 0:Aa.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-table v-bind="args" />\`
})`,...(Ta=(La=F.parameters)==null?void 0:La.docs)==null?void 0:Ta.source}}};var Ra,Fa,Ia;I.parameters={...I.parameters,docs:{...(Ra=I.parameters)==null?void 0:Ra.docs,source:{originalSource:"DarkModeTemplateFactory()",...(Ia=(Fa=I.parameters)==null?void 0:Fa.docs)==null?void 0:Ia.source}}};var Oa,ba,Ea;O.parameters={...O.parameters,docs:{...(Oa=O.parameters)==null?void 0:Oa.docs,source:{originalSource:`args => ({
  components: {
    DTable,
    DButton,
    DBadge
  },
  methods: {
    deleteRow: function (alerted) {
      alert(alerted);
    }
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-table v-bind="args">
      <template v-slot:item.state="row">
        <d-badge>{{row.state}}</d-badge>
      </template>
      
      <template v-slot:item.action="row">
        <d-button size="medium" @click="deleteRow(row.uuuid)">Delete row</d-button>
      </template>
      
    </d-table>
  \`
})`,...(Ea=(ba=O.parameters)==null?void 0:ba.docs)==null?void 0:Ea.source}}};var za,Va,ja;b.parameters={...b.parameters,docs:{...(za=b.parameters)==null?void 0:za.docs,source:{originalSource:"DarkModeTemplateFactory()",...(ja=(Va=b.parameters)==null?void 0:Va.docs)==null?void 0:ja.source}}};var Ka,Ga,xa;E.parameters={...E.parameters,docs:{...(Ka=E.parameters)==null?void 0:Ka.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-table v-bind="args" />\`
})`,...(xa=(Ga=E.parameters)==null?void 0:Ga.docs)==null?void 0:xa.source}}};var _a,Za,Qa;z.parameters={...z.parameters,docs:{...(_a=z.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
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
          {{ tag }}
        </d-badge>
      </template>
    </d-table>
    </dark-mode-provider>
  \`
})`,...(Qa=(Za=z.parameters)==null?void 0:Za.docs)==null?void 0:Qa.source}}};var Xa,$a,te;V.parameters={...V.parameters,docs:{...(Xa=V.parameters)==null?void 0:Xa.docs,source:{originalSource:`args => ({
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
          {{ tag }}
        </d-badge>
      </template>
    </d-table>
    </dark-mode-provider>
  \`
})`,...(te=($a=V.parameters)==null?void 0:$a.docs)==null?void 0:te.source}}};var ae,ee,ne;j.parameters={...j.parameters,docs:{...(ae=j.parameters)==null?void 0:ae.docs,source:{originalSource:`args => ({
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
          {{ tag }}
        </d-badge>
      </template>
    </d-table>
    </dark-mode-provider>
  \`
})`,...(ne=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var oe,ye,re;K.parameters={...K.parameters,docs:{...(oe=K.parameters)==null?void 0:oe.docs,source:{originalSource:`args => ({
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
          {{ tag }}
        </d-badge>
      </template>
    </d-table>
    </dark-mode-provider>
  \`
})`,...(re=(ye=K.parameters)==null?void 0:ye.docs)==null?void 0:re.source}}};var ie,ce,se;G.parameters={...G.parameters,docs:{...(ie=G.parameters)==null?void 0:ie.docs,source:{originalSource:`args => ({
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
  template: \`
    <d-table v-bind="args" @page-updated="alertPageChange" />\`
})`,...(se=(ce=G.parameters)==null?void 0:ce.docs)==null?void 0:se.source}}};var le,me,Se;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`args => ({
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
    <d-table @row-clicked="handleRowClick" v-bind="args">
    <template v-slot:item.actions="item">
      <d-menu :options="['Fintech', 'UI Kit', 'Finance', 'Identity' ]">
        <d-button size="medium">...</d-button>
      </d-menu>
    </template>
    </d-table>
  \`
})`,...(Se=(me=x.parameters)==null?void 0:me.docs)==null?void 0:Se.source}}};var ue,he,pe;_.parameters={..._.parameters,docs:{...(ue=_.parameters)==null?void 0:ue.docs,source:{originalSource:`args => ({
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
    <d-table @row-clicked="handleRowClick" v-bind="args">
    <template v-slot:item.actions="item">
      <d-menu :options="['Fintech', 'UI Kit', 'Finance', 'Identity' ]">
        <d-button size="medium">...</d-button>
      </d-menu>
    </template>
    </d-table>
  \`
})`,...(pe=(he=_.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};var ge,Ue,qe;Z.parameters={...Z.parameters,docs:{...(ge=Z.parameters)==null?void 0:ge.docs,source:{originalSource:`args => ({
  components: {
    DTable,
    DTooltip,
    DBadge,
    DTableCellText
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-table v-bind="args">
    <template v-slot:item.tags="item">
      <d-badge v-for="(tag, index) in item.tags" :key="index">
        {{ tag }}
      </d-badge>
    </template>
    <template v-slot:item.customer_email="item">
      <d-tooltip :tooltip="item.customer_email">
        <d-table-cell-text>{{item.customer_email}}</d-table-cell-text>
      </d-tooltip>
    </template>
    <template v-slot:item.customer_phone="item">
      <d-tooltip :tooltip="item.customer_phone">
        <d-table-cell-text>{{item.customer_phone}}</d-table-cell-text>
      </d-tooltip>
    </template>
    </d-table>
  \`
})`,...(qe=(Ue=Z.parameters)==null?void 0:Ue.docs)==null?void 0:qe.source}}};var Ce,we,de;Q.parameters={...Q.parameters,docs:{...(Ce=Q.parameters)==null?void 0:Ce.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-table v-bind="args" />\`
})`,...(de=(we=Q.parameters)==null?void 0:we.docs)==null?void 0:de.source}}};var fe,ke,Me;X.parameters={...X.parameters,docs:{...(fe=X.parameters)==null?void 0:fe.docs,source:{originalSource:`args => ({
  components: {
    DTable
  },
  methods: {
    tableUpdate: function (payload) {
      alert(\`The current page is \${payload.page} and the search value is \${payload.search}. The returned payload is \${JSON.stringify(payload)}\`);
    },
    pageUpdate: function (page) {
      console.log("Pagination changed", page);
    },
    searchUpdate: function (search) {
      console.log("Search changed", search);
    }
  },
  setup() {
    return {
      args
    };
  },
  template: \` <d-table v-bind="args" @page-updated="pageUpdate" @search="searchUpdate" @async-table-update="tableUpdate" />\`
})`,...(Me=(ke=X.parameters)==null?void 0:ke.docs)==null?void 0:Me.source}}};var Be,Ne,ve;nt.parameters={...nt.parameters,docs:{...(Be=nt.parameters)==null?void 0:Be.docs,source:{originalSource:`args => ({
  components: {
    DTable,
    DBox,
    DBadge,
    DButton
  },
  methods: {
    sort: function (value) {
      console.log(value);
    }
  },
  setup() {
    const columns = ref(sampleColumn1);
    const state = reactive({
      identities: [],
      data: [],
      per_page: 0,
      currentPage: 1,
      totalPages: 1
    });
    onMounted(() => {
      const data = {
        data: sampleData1,
        links: {
          first: "https://api.ghost.deposits.dev/api/v1/user/get-identities?page=1",
          last: "https://api.ghost.deposits.dev/api/v1/user/get-identities?page=13",
          prev: null,
          next: "https://api.ghost.deposits.dev/api/v1/user/get-identities?page=2"
        },
        meta: {
          current_page: 1,
          from: 1,
          last_page: 13,
          path: "https://api.ghost.deposits.dev/api/v1/user/get-identities",
          per_page: "20",
          to: 20,
          total: 243
        }
      };
      state.identities = data.data;
      if (data.data.length == 0) {
        state.data = [];
      }
      state.currentPage = data.meta.current_page;
      state.totalPages = data.meta.last_page;
      for (let i = 0; i < data.data.length; i++) {
        const thisUser = data.data[i];
        let status = "pending";
        let tenantName = "";
        if (thisUser["tenant"] && thisUser["tenant"]["name"]) {
          tenantName = thisUser["tenant"]["name"];
        }
        if (thisUser["personal_information"] && thisUser["personal_information"]["name"]) {
          status = thisUser["personal_information"]["status"];
        }
        let userInfo = {
          Name: thisUser["name"],
          Tenants: tenantName,
          Email: thisUser["email"],
          Date: moment(thisUser["created_at"]).format("MMM DD, Y"),
          Action: thisUser["id"],
          Kyc: status,
          route: "/identity/" + thisUser["id"]
        };
        state.data.push(userInfo);
      }
    });
    return {
      args,
      columns,
      state
    };
  },
  template: \`
    <d-table
      v-bind="args"
      :columns="columns"
      :data="state.data"
      :enable-csv-export="true"
      :enable-customize-view="true"
      :paginate="true"
      :async-pagination="true"
      :search="true"
      :show-checkboxes="true"
      padding="none"
      paginate-right
      searchPlaceholder="Search entities"
      :total-pages="state.totalPages"
      :current-page="state.currentPage"
      async-sort
      @sort="sort"
    >
    <template v-slot:item.Kyc="item">
      <d-box
        align-items="center"
        display="inline-flex"
        text-decoration="none"
      >
        <d-badge
          :subtle="true"
          color-scheme="red"
          size="medium"
          text="failed"
        />
      </d-box>
    </template>
    <template v-slot:item.Action="item">
      <d-box
        is="a"
        :to="{ name: 'Identity', params: { id: item.Action } }"
        align-items="center"
        display="inline-flex"
        text-decoration="none"
      >
        <d-button
          responsive
          size="medium"
          text="Manual verify"
        ></d-button>
      </d-box>
    </template>
    </d-table>
  \`
})`,...(ve=(Ne=nt.parameters)==null?void 0:Ne.docs)==null?void 0:ve.source}}};var Ye,De,Pe;ot.parameters={...ot.parameters,docs:{...(Ye=ot.parameters)==null?void 0:Ye.docs,source:{originalSource:`args => ({
  components: {
    DTable,
    DBox,
    DBadge,
    DButton,
    DText,
    EyeFilledIcon
  },
  setup() {
    const columns = ref(sampleColumn2);
    const state = reactive({
      tenants: [],
      data: [],
      per_page: 10,
      currentPage: 1,
      totalPages: 1
    });
    onMounted(() => {
      const data = {
        data: sampleData2,
        links: {
          first: "https://api.ghost.deposits.dev/api/v1/user/get-tenants?page=1",
          last: "https://api.ghost.deposits.dev/api/v1/user/get-tenants?page=17",
          prev: null,
          next: "https://api.ghost.deposits.dev/api/v1/user/get-tenants?page=2"
        },
        meta: {
          current_page: 1,
          from: 1,
          last_page: 17,
          path: "https://api.ghost.deposits.dev/api/v1/user/get-tenants",
          per_page: 10,
          to: 10,
          total: 170
        }
      };
      state.data = [];
      state.tenants = data.data;
      if (data.data.length == 0) {
        state.data = [];
      }
      state.currentPage = data.meta.current_page;
      state.totalPages = data.meta.last_page;
      for (let i = 0; i < data.data.length; i++) {
        const thisTenant = data.data[i];
        let tenantInfo = {
          ID: thisTenant["id"],
          currency: \`$\${Math.floor(Math.random() * (100 - 20) + 20)}\`,
          Tenants: thisTenant["name"],
          Email: thisTenant["contact_email"],
          Date: moment(thisTenant["created_at"]).format("MMM DD, YYYY"),
          Action: thisTenant["id"],
          route: "/tenant/" + thisTenant["id"] + "/overview"
        };
        state.data.push(tenantInfo);
      }
    });
    return {
      columns,
      state,
      args
    };
  },
  template: \`
  <d-table
            :columns="columns"
            :data="state.data"
            :enable-csv-export="true"
            :enable-customize-view="true"
            :paginate="true"
            :search="true"
            :show-checkboxes="true"
            padding="none"
            paginate-right
            searchPlaceholder="Search tenant"
            :total-pages="state.totalPages"
            :current-page="state.currentPage"
            :async-pagination="true"
            
          >
            <template v-slot:item.Action="item">
              <d-box
                is="a"
                :to="{ name: 'TenantOverview', params: { id: item.Action } }"
                align-items="center"
                class="text-cyan-500"
                display="inline-flex"
                text-decoration="none"
              >
                <eye-filled-icon height="18px" width="18px" />
                <d-text
                  class="text-cyan-500"
                  font-face="circularSTD"
                  margin-left="4px"
                  my0
                  scale="p-16"
                >
                  View details
                </d-text>
              </d-box>
            </template>
          </d-table>
  \`
})`,...(Pe=(De=ot.parameters)==null?void 0:De.docs)==null?void 0:Pe.source}}};const qn=["ExtraHeadings","Default","ChangeColorForRow","DarkModeDefault","RowClicked","ExpandMode","ExpandModeWithoutHeader","ExpandModeWithPlaceholderWhenNoSelectedRow","ExpandModeWithSpecifiedExpandedColumns","Search","AsyncSearch","DarkModeSearch","Checkboxes","DarkModeCheckboxes","CustomizeView","CSVExport","AsyncCSVURLExport","AsyncCSVExport","Loading","ButtonActions","EmptyTableData","EmptyTableCustomSlot","DarkModeButtonActions","Pagination","MassiveDataPagination","DarkModePagination","RightPagination","DarkModeRightPagination","CustomComponent","DarkModeCustomComponent","PipedColumnExampleMultiplyQtyByTwo","OverflowTable","DarkModeOverflowTable","FixedColumnOverflowTable","FixedColumnOverflowTableWithCheckboxes","AsyncPaginationTable","ActionSitcomsTable","FixedActionSitcomsTable","FixedTooltipTable","MobileColumns","AsyncTableUpdate","TestTableTemplate","TestTableTwo"];export{x as ActionSitcomsTable,D as AsyncCSVExport,Y as AsyncCSVURLExport,G as AsyncPaginationTable,f as AsyncSearch,X as AsyncTableUpdate,J as ButtonActions,v as CSVExport,h as ChangeColorForRow,M as Checkboxes,O as CustomComponent,N as CustomizeView,A as DarkModeButtonActions,B as DarkModeCheckboxes,b as DarkModeCustomComponent,p as DarkModeDefault,V as DarkModeOverflowTable,R as DarkModePagination,I as DarkModeRightPagination,k as DarkModeSearch,u as Default,W as EmptyTableCustomSlot,H as EmptyTableData,U as ExpandMode,C as ExpandModeWithPlaceholderWhenNoSelectedRow,w as ExpandModeWithSpecifiedExpandedColumns,q as ExpandModeWithoutHeader,S as ExtraHeadings,_ as FixedActionSitcomsTable,j as FixedColumnOverflowTable,K as FixedColumnOverflowTableWithCheckboxes,Z as FixedTooltipTable,P as Loading,T as MassiveDataPagination,Q as MobileColumns,z as OverflowTable,L as Pagination,E as PipedColumnExampleMultiplyQtyByTwo,F as RightPagination,g as RowClicked,d as Search,nt as TestTableTemplate,ot as TestTableTwo,qn as __namedExportsOrder,Un as default};
//# sourceMappingURL=DTable.stories-c5645ecf.js.map