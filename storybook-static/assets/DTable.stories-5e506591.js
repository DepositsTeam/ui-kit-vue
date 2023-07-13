    <d-table v-bind="args" />`}),ba=t=>({components:{DTable:y,DBadge:T,DAutoLayout:ka,DSelect:Ha},setup(){return{args:t}},template:`
    <d-table v-bind="args">
    <template #table-header-left>
      <d-select size="large" placeholder="Last 7 days" width="200px" />
      <d-select size="large" placeholder="By Events" width="200px" />
      <d-select size="large" placeholder="All environments" width="200px" />
    </template>
    </d-table>
  `}),s=ba.bind({});s.args={columns:a,data:e,enableCsvExport:!0,enableCustomizeView:!0};const ja=t=>({components:{DTable:y,DarkModeProvider:Ba},setup(){return{args:t}},template:`
    <dark-mode-provider :dark-mode="true">
    <d-table v-bind="args" />
    </dark-mode-provider>
  `}),r=()=>{const t=ja.bind({});return t.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],t},l=o.bind({});l.args={columns:a,data:e};const m=o.bind({});m.args={columns:a,data:Fa};const S=r();S.args={columns:a,data:e};const u=o.bind({});u.args={data:e,columns:a,expandMode:!0,paginate:!0};const h=o.bind({});h.args={data:e,columns:a,expandMode:!0,expandedColumns:["name","city"]};const p=o.bind({});p.args={search:!0,data:e,columns:a};const g=r();g.args={search:!0,columns:a,data:e};const U=o.bind({});U.args={search:!0,columns:a,data:e,showCheckboxes:!0};const q=r();q.args={search:!0,showCheckboxes:!0,columns:a,data:e};const C=o.bind({});C.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:e};const w=r();w.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:e};const d=o.bind({});d.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:O,paginate:!0};const f=r();f.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:O,paginate:!0};const k=o.bind({});k.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:O,paginate:!0,paginateRight:!0};const M=r();M.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:O,paginate:!0,paginateRight:!0};const B=o.bind({});B.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:Na,paginate:!0};const N=r();N.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:Na,paginate:!0};const v=o.bind({});v.args={columns:[{display:"Name",dataSelector:"name",uppercase:!0,sortable:!0,filterable:!0,width:"",minWidth:"",maxWidth:"",pipe:t=>t.toUpperCase()},{display:"City",dataSelector:"city",uppercase:!0,sortable:!0,filterable:!0,width:"",minWidth:"",maxWidth:""},{display:"Company/Work",dataSelector:"company",uppercase:!0,filterable:!0,width:"",minWidth:"",maxWidth:""},{display:"Country",dataSelector:"country",uppercase:!0,sortable:!0,filterable:!1,width:"",minWidth:"",maxWidth:""},{display:"Qty",dataSelector:"qty",uppercase:!0,sortable:!0,sortNumerically:!0,filterable:!0,width:"80px",minWidth:"80px",maxWidth:"80px",position:"right",pipe:t=>t*2},{display:"State",dataSelector:"state",uppercase:!0,sortable:!1,filterable:!0,width:"",minWidth:"",maxWidth:"",excludeFromCSV:!0}],data:e};const I=t=>({components:{DTable:y,DBadge:T,DarkModeProvider:Ba},setup(){return{args:t}},template:`
    <dark-mode-provider :dark-mode="args.darkMode">
    <d-table v-bind="args">
      <template v-slot:item.tags="item">
        <d-badge v-for="(tag, index) in item.tags" :key="index">
          {{ tag }}
        </d-badge>
      </template>
    </d-table>
    </dark-mode-provider>
  `}),Y=I.bind({});Y.args={columns:va,paginate:!0,data:R,darkMode:!1};const D=I.bind({});D.args={columns:va,paginate:!0,data:R,darkMode:!0};const P=I.bind({});P.args={columns:E,paginate:!0,data:R,darkMode:!1};const J=I.bind({});J.args={columns:E,paginate:!0,data:R,darkMode:!1,showCheckboxes:!0};const Ea=t=>({components:{DTable:y},setup(){return{args:t}},methods:{alertPageChange(b){alert("The page changed and the new page is "+b+". I can do an ajax call to get this page's content.")}},template:`
    <d-table v-bind="args" @page-updated="alertPageChange" />`}),H=Ea.bind({});H.args={columns:a,data:e,paginate:!0,asyncPagination:!0,totalPages:7};const Ya=t=>({components:{DTable:y,DMenu:Wa,DButton:Ma},setup(){return{args:t}},methods:{handleRowClick:()=>{alert("Row was clicked but not button")}},template:`
    <d-table @row-clicked="handleRowClick" v-bind="args">
    <template v-slot:item.actions="item">
      <d-menu :options="['Fintech', 'UI Kit', 'Finance', 'Identity' ]">
        <d-button size="medium">...</d-button>
      </d-menu>
    </template>
    </d-table>
  `}),W=Ya.bind({});W.args={columns:Oa,data:e};const A=Ya.bind({});A.args={columns:Ia,data:e};const za=t=>({components:{DTable:y,DTooltip:Aa,DBadge:T,DTableCellText:fa},setup(){return{args:t}},template:`
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
  `}),L=za.bind({});L.args={columns:E,paginate:!0,data:R,darkMode:!1};const F=t=>({components:{DTable:y,DBox:Pa,DBadge:T,DButton:Ma},setup(){const b=La([{display:"Name",dataSelector:"Name",uppercase:!0,sortable:!0,filterable:!0,width:"",minWidth:"",maxWidth:""},{display:"Email",dataSelector:"Email",uppercase:!0,filterable:!0,width:"",minWidth:"",maxWidth:""},{display:"Tenants",dataSelector:"Tenants",uppercase:!0,sortable:!0,filterable:!0,width:"",minWidth:"",maxWidth:""},{display:"Reg Date",dataSelector:"Date",uppercase:!0,sortable:!0,filterable:!0,width:"",minWidth:"",maxWidth:""},{display:"kyc/kyb status",dataSelector:"Kyc",uppercase:!0,sortable:!1,filterable:!1,width:"",minWidth:"",maxWidth:""},{display:"Action",dataSelector:"Action",uppercase:!0,sortable:!1,filterable:!1,position:"right"}]),i=Ta({identities:[],data:[],per_page:0,currentPage:1,totalPages:1});return Ra(()=>{const c={data:[{id:2554,name:"Test Test",email:"deposits.test@gmail.com",tenant:{name:"money"},personal_information:{first_name:"Test",middle_name:null,last_name:"Test",phone_number:"+1-3854234144",email:"deposits.test@gmail.com",address:"Test",status:"verified"},liveliness_detection:{id:325,image_front:"https://api.files.deposits.dev/uploads/images/name-1686578167.",status:"pending"},document:[{id:326,image_front:"https://api.files.deposits.dev/uploads/images/photo-2022-05-31-09-54-14-1686578203.jpg",image_back:"https://api.files.deposits.dev/uploads/images/photo-2022-05-31-09-54-14-1686578204.jpg",status:"active"}],status:"active",created_at:"2023-05-10T11:13:15.000000Z"},{id:2555,name:"Test Test",email:"qa.deposits@gmail.com1687853960700",tenant:{name:"money"},personal_information:{first_name:"Test",middle_name:null,last_name:"Test",phone_number:"+1-6157635478",email:"qa.deposits@gmail.com1687853960700",address:"Test",status:"verified"},liveliness_detection:{id:321,image_front:"https://api.files.deposits.dev/uploads/images/name-1686408966.",status:"pending"},document:[{id:322,image_front:"https://api.files.deposits.dev/uploads/images/560a178f-c60d-4c11-b7aa-df33daa56303-1687349045.png",image_back:"https://api.files.deposits.dev/uploads/images/0ceddce0-a1b8-4267-9f28-c7a9ce1e8b3c-1687349054.png",status:"active"}],status:"active",created_at:"2023-05-10T13:54:51.000000Z"},{id:2258,name:"william qa",email:"william@freezepointqa.com",tenant:{name:"money"},personal_information:{first_name:"william",middle_name:null,last_name:"qa",phone_number:"+1-555 555-5555",email:"william@freezepointqa.com",address:"Street 1",status:"inprogress"},liveliness_detection:{id:228,image_front:"https://api.files.deposits.dev/uploads/images/name-1673437909.",status:"pending"},document:[{id:229,image_front:"https://api.files.deposits.dev/uploads/images/name-1673438000.",image_back:null,status:"completed"}],status:"pending",created_at:"2023-01-11T11:46:05.000000Z"},{id:1444,name:"Justin  Anton",email:"janton1@mail.com",tenant:{name:"money"},personal_information:{first_name:"Justin ",middle_name:null,last_name:"Anton",phone_number:"+13096207099",email:"janton1@mail.com",address:"1401 Royal Ave apt B ",status:"verified"},liveliness_detection:{id:195,image_front:"https://api.client.wallet.swys.xyz/files/PL8CoSiARaaa9Ap0J2HdDTVLglyUnbopUvddBzySRnqui5Prnq2tOopmh7bvi57I.png",status:"completed"},document:[],status:"active",created_at:"2022-06-09T03:40:36.000000Z"},{id:925,name:"Joseph Akintolayo",email:"Joseph.akintolayo@gmail.com",tenant:{name:"money"},personal_information:{first_name:"Joseph",middle_name:null,last_name:"Akintolayo",phone_number:"+12104879832",email:"Joseph.akintolayo@gmail.com",address:"1511 Clinton",status:"pending"},liveliness_detection:{id:36,image_front:"https://api.client.wallet.deposits.dev/files/2nBlX6XDQxpHezsgA6DMeb0HjV2W58IwY8ejo4z3AH8PUiBulLEO96TNtrdcRp0l.png",status:"failed"},document:[],status:"active",created_at:"2021-11-30T00:18:56.000000Z"},{id:945,name:"Nancy Akinkugbe",email:"nancy@renaissance.ng1688550068352",tenant:{name:"money"},personal_information:{first_name:"Nancy",middle_name:null,last_name:"Akinkugbe",phone_number:"+1-7798006712",email:"nancy@renaissance.ng1688550068352",address:"Location",status:"verified"},liveliness_detection:{id:5,image_front:"https://api.client.wallet.deposits.dev/files/mUfYR5QNUXZKoraRSe1A9TYQuoDOscepnF67HkcDwHUsaY3L9ZCTS6uy7vUFgbvM.jpg",status:"failed"},document:[{id:107,image_front:"https://api.files.deposits.dev/uploads/images/cu4fxvnofvd-1660045305.jpg",image_back:"https://api.files.deposits.dev/uploads/images/aamfl3gyjeb-1660045318.jpg",status:"active"},{id:346,image_front:"https://api.files.deposits.dev/uploads/images/img-4525-1688491706.png",image_back:null,status:"active"}],status:"active",created_at:"2021-12-21T17:36:19.000000Z"},{id:929,name:"Maxwell Case",email:"maxwell@deposits.com",tenant:{name:"money"},personal_information:{first_name:"Maxwell",middle_name:null,last_name:"Case",phone_number:"+18188005740",email:"maxwell@deposits.com",address:"5222 Belmont Ave",status:"verified"},liveliness_detection:{id:3,image_front:"https://api.client.wallet.deposits.dev/files/tuqSkr8drfFX0P8wDJE5tRUitpqSLqPSJSA6ScQTWzL9l65aWNH82E1LAfRJiGVz.jpg",status:"failed"},document:[],status:"active",created_at:"2021-12-02T17:19:54.000000Z"},{id:952,name:"William Iyomere",email:"esanjumi@hotmail.co.uk",tenant:{name:"money"},personal_information:{first_name:"William",middle_name:null,last_name:"Iyomere",phone_number:"+18030406538",email:"esanjumi@hotmail.co.uk",address:"321 road e close  house 1 festac town",status:"verified"},liveliness_detection:{id:2,image_front:"https://api.client.wallet.deposits.dev/files/CgP9oxFZS36xfyqgpiVwVUuNiQ4KeIYK7idJvvQC7BUTy3l9R69HIjc2gZvgZpRb.png",status:"failed"},document:[],status:"active",created_at:"2022-01-05T14:35:56.000000Z"},{id:998,name:"Taylor Mills",email:"taylormillsjr2@gmail.com",tenant:{name:"money"},personal_information:{first_name:"Taylor",middle_name:null,last_name:"Mills",phone_number:"+14438168593",email:"taylormillsjr2@gmail.com",address:"4416 Purple Martins Road  ",status:"verified"},liveliness_detection:{id:10,image_front:"https://api.client.wallet.deposits.dev/files/iAtM9FO1tK9N28psCAmTAqGZ8XUWZxMYsJUwdp7Ccx11foEqiauO7aYAoPt3Kjg4.png",status:"failed"},document:[],status:"active",created_at:"2022-02-17T14:51:50.000000Z"},{id:1008,name:"Ada William",email:"willspglobal@gmail.com",tenant:{name:"money"},personal_information:{first_name:"Ada",middle_name:null,last_name:"William",phone_number:"+16505130514",email:"willspglobal@gmail.com",address:"Texas chainsaw",status:"verified"},liveliness_detection:{id:1,image_front:"https://api.client.wallet.deposits.dev/files/DbF7fFg7tuH5AFiFcq665yH5SsyqHNBHTZKzvr1q4KgAQTATrqO40MHMnpmBgyae.png",status:"failed"},document:[],status:"active",created_at:"2022-02-23T14:35:40.000000Z"},{id:1026,name:"zachary hoffman",email:"bigstepperrz@gmail.com",tenant:{name:"money"},personal_information:{first_name:"zachary",middle_name:null,last_name:"hoffman",phone_number:null,email:"bigstepperrz@gmail.com",address:"7265 County Road u",status:"pending"},liveliness_detection:{id:4,image_front:"https://api.client.wallet.deposits.dev/files/FZa2DKQ3jyfCLaQDNJb9o28RdbxBdK00ZFrpfIJXqB9AVAQl70iS18nNdX16wvTC.jpg",status:"failed"},document:[],status:"active",created_at:"2022-03-02T03:12:37.000000Z"},{id:2488,name:"Eric McWinNEr",email:"mcwinnerwebdeveloper+3489347@gmail.com",tenant:{name:"money"},personal_information:{first_name:"Eric",middle_name:null,last_name:"McWinNEr",phone_number:"+1-2524196165",email:"mcwinnerwebdeveloper+3489347@gmail.com",address:null,status:"pending"},liveliness_detection:{id:312,image_front:"https://api.files.deposits.dev/uploads/images/name-1681387311.",status:"pending"},document:[{id:313,image_front:"https://api.files.deposits.dev/uploads/images/name-1681387520.",image_back:null,status:"active"}],status:"pending",created_at:"2023-04-13T11:48:48.000000Z"},{id:1041,name:"Matthew Lavigne",email:"paytonrlaws@outlook.com",tenant:{name:"money"},personal_information:{first_name:"Matthew",middle_name:null,last_name:"Lavigne",phone_number:"+16178540879",email:"paytonrlaws@outlook.com",address:"10 w river pkwy ",status:"verified"},liveliness_detection:{id:8,image_front:"https://api.client.wallet.deposits.dev/files/cNUr15H5U43HKYAJXwCF6qcWG49Q7Lj9CsnJLUfi1PXwJxJSL5TusgciyhsCbJxm.png",status:"failed"},document:[],status:"active",created_at:"2022-03-13T21:21:02.000000Z"},{id:2489,name:"Ericko McWinNEr",email:"mcwinnerwebdeveloper+8958967856968598@gmail.com",tenant:{name:"money"},personal_information:{first_name:"Ericko",middle_name:null,last_name:"McWinNEr",phone_number:"+1-2524196165",email:"mcwinnerwebdeveloper+8958967856968598@gmail.com",address:"Gguiuugg",status:"in_progress"},liveliness_detection:{id:314,image_front:"https://api.files.deposits.dev/uploads/images/name-1681388733.",status:"pending"},document:[{id:315,image_front:"https://api.files.deposits.dev/uploads/images/61718d57-b03f-4f4f-8649-09c3c586e2f6-1681413227.png",image_back:null,status:"active"}],status:"pending",created_at:"2023-04-13T12:15:55.000000Z"},{id:1042,name:"Thuy Walsh",email:"aabenadeola@yandex.com",tenant:{name:"money"},personal_information:{first_name:"Thuy",middle_name:null,last_name:"Walsh",phone_number:"+18125142332",email:"aabenadeola@yandex.com",address:"2023 Rockfield road  ",status:"verified"},liveliness_detection:{id:6,image_front:"https://api.client.wallet.deposits.dev/files/XHchEGoPv2acQVxHszBYOs6IqmGbetjTkRU4XDsyqN62ZgPfR9PRqfIrwJnEimHy.png",status:"failed"},document:[],status:"active",created_at:"2022-03-13T21:57:44.000000Z"},{id:1043,name:"Jacie Delahoussaye",email:"jaydel120390@gmail.com",tenant:{name:"money"},personal_information:{first_name:"Jacie",middle_name:null,last_name:"Delahoussaye",phone_number:"+13373515813",email:"jaydel120390@gmail.com",address:"408 bull tiger lane lot a",status:"verified"},liveliness_detection:{id:7,image_front:"https://api.client.wallet.deposits.dev/files/JNQZuDntX54Yow9PruTFFLdyYOLT1A87e7whVADvXWvTj1tgQQA8zFNWxVLY8F7l.png",status:"failed"},document:[],status:"active",created_at:"2022-03-15T12:45:55.000000Z"},{id:1046,name:"Cassandra Corbisiero",email:"Cassycorb@gmail.com",tenant:{name:"money"},personal_information:{first_name:"Cassandra",middle_name:null,last_name:"Corbisiero",phone_number:"+19412469997",email:"Cassycorb@gmail.com",address:"1157 Capricorn Blvd apt b1 ",status:"verified"},liveliness_detection:{id:9,image_front:"https://api.client.wallet.deposits.dev/files/WZVxx7nnUmFwlgHp2ADWqyIe89OOjisXaYJ6PigN9vDFmsYZGczWLl7Hajw3LN0Z.png",status:"failed"},document:[],status:"active",created_at:"2022-03-21T03:12:33.000000Z"},{id:1056,name:"ROMEL SHEPPARD",email:"Romelsheppard649072@gmail.com",tenant:{name:"money"},personal_information:{first_name:"ROMEL",middle_name:null,last_name:"SHEPPARD",phone_number:"+15109789857",email:"Romelsheppard649072@gmail.com",address:"897 55TH ST  APT B ",status:"verified"},liveliness_detection:{id:11,image_front:"https://api.client.wallet.deposits.dev/files/FJDSrsmAYuYp5r7MoEtArtMxZ7179JebjMHKczHtrsbVrnWSew8FMFTxGaoZx9pq.png",status:"failed"},document:[],status:"active",created_at:"2022-03-24T17:16:38.000000Z"},{id:1067,name:"Alexa Cottage",email:"hufinjcdydyg1399@gmail.com",tenant:{name:"money"},personal_information:{first_name:"Alexa",middle_name:null,last_name:"Cottage",phone_number:"+16468836426",email:"hufinjcdydyg1399@gmail.com",address:"7997 Independence Dr ",status:"verified"},liveliness_detection:{id:12,image_front:"https://api.client.wallet.deposits.dev/files/QXAt8ALPVUxdugLfUBwSXXNLFmTu1Rj7aha7qPDipXdC0umEHJAItLlfKoAVA4UK.png",status:"failed"},document:[],status:"active",created_at:"2022-03-27T21:03:32.000000Z"},{id:1087,name:"shania lynn",email:"shanialynn0609@gmail.com",tenant:{name:"money"},personal_information:{first_name:"shania",middle_name:null,last_name:"lynn",phone_number:"+18453130859",email:"shanialynn0609@gmail.com",address:"5 borden rd  ",status:"verified"},liveliness_detection:{id:13,image_front:"https://api.client.wallet.deposits.dev/files/LUr7kgzHQi2VboU6Zy0OmXISkO4fWlPtu8yZm5ku0NMcONMVJGid3VZsGDNB6rBv.png",status:"failed"},document:[],status:"active",created_at:"2022-03-29T18:58:18.000000Z"}],links:{first:"https://api.ghost.deposits.dev/api/v1/user/get-identities?page=1",last:"https://api.ghost.deposits.dev/api/v1/user/get-identities?page=13",prev:null,next:"https://api.ghost.deposits.dev/api/v1/user/get-identities?page=2"},meta:{current_page:1,from:1,last_page:13,path:"https://api.ghost.deposits.dev/api/v1/user/get-identities",per_page:"20",to:20,total:243}};i.identities=c.data,c.data.length==0&&(i.data=[]),i.currentPage=c.meta.current_page,i.totalPages=c.meta.last_page;for(let j=0;j<c.data.length;j++){const n=c.data[j];let z="pending",V="";n.tenant&&n.tenant.name&&(V=n.tenant.name),n.personal_information&&n.personal_information.name&&(z=n.personal_information.status);let Da={Name:n.name,Tenants:V,Email:n.email,Date:Ja(n.created_at).format("MMM d, Y"),Action:n.id,Kyc:z,route:"/identity/"+n.id};i.data.push(Da)}}),{args:t,columns:b,state:i}},template:`
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
  `});var K,G,_;s.parameters={...s.parameters,docs:{...(K=s.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
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
})`,...(_=(G=s.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var x,Z,Q;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(Q=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:Q.source}}};var X,$,tt;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
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
})`,...(tt=($=m.parameters)==null?void 0:$.docs)==null?void 0:tt.source}}};var at,et,nt;S.parameters={...S.parameters,docs:{...(at=S.parameters)==null?void 0:at.docs,source:{originalSource:"DarkModeTemplateFactory()",...(nt=(et=S.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};var ot,yt,rt;u.parameters={...u.parameters,docs:{...(ot=u.parameters)==null?void 0:ot.docs,source:{originalSource:`args => ({
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
})`,...(rt=(yt=u.parameters)==null?void 0:yt.docs)==null?void 0:rt.source}}};var it,ct,st;h.parameters={...h.parameters,docs:{...(it=h.parameters)==null?void 0:it.docs,source:{originalSource:`args => ({
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
})`,...(st=(ct=h.parameters)==null?void 0:ct.docs)==null?void 0:st.source}}};var lt,mt,St;p.parameters={...p.parameters,docs:{...(lt=p.parameters)==null?void 0:lt.docs,source:{originalSource:`args => ({
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
})`,...(St=(mt=p.parameters)==null?void 0:mt.docs)==null?void 0:St.source}}};var ut,ht,pt;g.parameters={...g.parameters,docs:{...(ut=g.parameters)==null?void 0:ut.docs,source:{originalSource:"DarkModeTemplateFactory()",...(pt=(ht=g.parameters)==null?void 0:ht.docs)==null?void 0:pt.source}}};var gt,Ut,qt;U.parameters={...U.parameters,docs:{...(gt=U.parameters)==null?void 0:gt.docs,source:{originalSource:`args => ({
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
})`,...(qt=(Ut=U.parameters)==null?void 0:Ut.docs)==null?void 0:qt.source}}};var Ct,wt,dt;q.parameters={...q.parameters,docs:{...(Ct=q.parameters)==null?void 0:Ct.docs,source:{originalSource:"DarkModeTemplateFactory()",...(dt=(wt=q.parameters)==null?void 0:wt.docs)==null?void 0:dt.source}}};var ft,kt,Mt;C.parameters={...C.parameters,docs:{...(ft=C.parameters)==null?void 0:ft.docs,source:{originalSource:`args => ({
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
})`,...(Mt=(kt=C.parameters)==null?void 0:kt.docs)==null?void 0:Mt.source}}};var Bt,Nt,vt;w.parameters={...w.parameters,docs:{...(Bt=w.parameters)==null?void 0:Bt.docs,source:{originalSource:"DarkModeTemplateFactory()",...(vt=(Nt=w.parameters)==null?void 0:Nt.docs)==null?void 0:vt.source}}};var Yt,Dt,Pt;d.parameters={...d.parameters,docs:{...(Yt=d.parameters)==null?void 0:Yt.docs,source:{originalSource:`args => ({
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
})`,...(Pt=(Dt=d.parameters)==null?void 0:Dt.docs)==null?void 0:Pt.source}}};var Jt,Ht,Wt;f.parameters={...f.parameters,docs:{...(Jt=f.parameters)==null?void 0:Jt.docs,source:{originalSource:"DarkModeTemplateFactory()",...(Wt=(Ht=f.parameters)==null?void 0:Ht.docs)==null?void 0:Wt.source}}};var At,Lt,Tt;k.parameters={...k.parameters,docs:{...(At=k.parameters)==null?void 0:At.docs,source:{originalSource:`args => ({
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
})`,...(Tt=(Lt=k.parameters)==null?void 0:Lt.docs)==null?void 0:Tt.source}}};var Rt,Ft,Ot;M.parameters={...M.parameters,docs:{...(Rt=M.parameters)==null?void 0:Rt.docs,source:{originalSource:"DarkModeTemplateFactory()",...(Ot=(Ft=M.parameters)==null?void 0:Ft.docs)==null?void 0:Ot.source}}};var It,bt,jt;B.parameters={...B.parameters,docs:{...(It=B.parameters)==null?void 0:It.docs,source:{originalSource:`args => ({
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
})`,...(jt=(bt=B.parameters)==null?void 0:bt.docs)==null?void 0:jt.source}}};var Et,zt,Vt;N.parameters={...N.parameters,docs:{...(Et=N.parameters)==null?void 0:Et.docs,source:{originalSource:"DarkModeTemplateFactory()",...(Vt=(zt=N.parameters)==null?void 0:zt.docs)==null?void 0:Vt.source}}};var Kt,Gt,_t;v.parameters={...v.parameters,docs:{...(Kt=v.parameters)==null?void 0:Kt.docs,source:{originalSource:`args => ({
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
})`,...(_t=(Gt=v.parameters)==null?void 0:Gt.docs)==null?void 0:_t.source}}};var xt,Zt,Qt;Y.parameters={...Y.parameters,docs:{...(xt=Y.parameters)==null?void 0:xt.docs,source:{originalSource:`args => ({
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
})`,...(Qt=(Zt=Y.parameters)==null?void 0:Zt.docs)==null?void 0:Qt.source}}};var Xt,$t,ta;D.parameters={...D.parameters,docs:{...(Xt=D.parameters)==null?void 0:Xt.docs,source:{originalSource:`args => ({
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
})`,...(ta=($t=D.parameters)==null?void 0:$t.docs)==null?void 0:ta.source}}};var aa,ea,na;P.parameters={...P.parameters,docs:{...(aa=P.parameters)==null?void 0:aa.docs,source:{originalSource:`args => ({
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
})`,...(na=(ea=P.parameters)==null?void 0:ea.docs)==null?void 0:na.source}}};var oa,ya,ra;J.parameters={...J.parameters,docs:{...(oa=J.parameters)==null?void 0:oa.docs,source:{originalSource:`args => ({
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
})`,...(ra=(ya=J.parameters)==null?void 0:ya.docs)==null?void 0:ra.source}}};var ia,ca,sa;H.parameters={...H.parameters,docs:{...(ia=H.parameters)==null?void 0:ia.docs,source:{originalSource:`args => ({
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
})`,...(sa=(ca=H.parameters)==null?void 0:ca.docs)==null?void 0:sa.source}}};var la,ma,Sa;W.parameters={...W.parameters,docs:{...(la=W.parameters)==null?void 0:la.docs,source:{originalSource:`args => ({
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
})`,...(Sa=(ma=W.parameters)==null?void 0:ma.docs)==null?void 0:Sa.source}}};var ua,ha,pa;A.parameters={...A.parameters,docs:{...(ua=A.parameters)==null?void 0:ua.docs,source:{originalSource:`args => ({
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
})`,...(pa=(ha=A.parameters)==null?void 0:ha.docs)==null?void 0:pa.source}}};var ga,Ua,qa;L.parameters={...L.parameters,docs:{...(ga=L.parameters)==null?void 0:ga.docs,source:{originalSource:`args => ({
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
})`,...(qa=(Ua=L.parameters)==null?void 0:Ua.docs)==null?void 0:qa.source}}};var Ca,wa,da;F.parameters={...F.parameters,docs:{...(Ca=F.parameters)==null?void 0:Ca.docs,source:{originalSource:`args => ({
  components: {
    DTable,
    DBox,
    DBadge,
    DButton
  },
  setup() {
    const columns = ref([{
      display: "Name",
      dataSelector: "Name",
      uppercase: true,
      sortable: true,
      filterable: true,
      width: "",
      minWidth: "",
      maxWidth: ""
    }, {
      display: "Email",
      dataSelector: "Email",
      uppercase: true,
      filterable: true,
      width: "",
      minWidth: "",
      maxWidth: ""
    }, {
      display: "Tenants",
      dataSelector: "Tenants",
      uppercase: true,
      sortable: true,
      filterable: true,
      width: "",
      minWidth: "",
      maxWidth: ""
    }, {
      display: "Reg Date",
      dataSelector: "Date",
      uppercase: true,
      sortable: true,
      filterable: true,
      width: "",
      minWidth: "",
      maxWidth: ""
    }, {
      display: "kyc/kyb status",
      dataSelector: "Kyc",
      uppercase: true,
      sortable: false,
      filterable: false,
      width: "",
      minWidth: "",
      maxWidth: ""
    }, {
      display: "Action",
      dataSelector: "Action",
      uppercase: true,
      sortable: false,
      filterable: false,
      position: "right"
    }]);
    const state = reactive({
      identities: [],
      data: [],
      per_page: 0,
      currentPage: 1,
      totalPages: 1
    });
    onMounted(() => {
      const data = {
        data: [{
          id: 2554,
          name: "Test Test",
          email: "deposits.test@gmail.com",
          tenant: {
            name: "money"
          },
          personal_information: {
            first_name: "Test",
            middle_name: null,
            last_name: "Test",
            phone_number: "+1-3854234144",
            email: "deposits.test@gmail.com",
            address: "Test",
            status: "verified"
          },
          liveliness_detection: {
            id: 325,
            image_front: "https://api.files.deposits.dev/uploads/images/name-1686578167.",
            status: "pending"
          },
          document: [{
            id: 326,
            image_front: "https://api.files.deposits.dev/uploads/images/photo-2022-05-31-09-54-14-1686578203.jpg",
            image_back: "https://api.files.deposits.dev/uploads/images/photo-2022-05-31-09-54-14-1686578204.jpg",
            status: "active"
          }],
          status: "active",
          created_at: "2023-05-10T11:13:15.000000Z"
        }, {
          id: 2555,
          name: "Test Test",
          email: "qa.deposits@gmail.com1687853960700",
          tenant: {
            name: "money"
          },
          personal_information: {
            first_name: "Test",
            middle_name: null,
            last_name: "Test",
            phone_number: "+1-6157635478",
            email: "qa.deposits@gmail.com1687853960700",
            address: "Test",
            status: "verified"
          },
          liveliness_detection: {
            id: 321,
            image_front: "https://api.files.deposits.dev/uploads/images/name-1686408966.",
            status: "pending"
          },
          document: [{
            id: 322,
            image_front: "https://api.files.deposits.dev/uploads/images/560a178f-c60d-4c11-b7aa-df33daa56303-1687349045.png",
            image_back: "https://api.files.deposits.dev/uploads/images/0ceddce0-a1b8-4267-9f28-c7a9ce1e8b3c-1687349054.png",
            status: "active"
          }],
          status: "active",
          created_at: "2023-05-10T13:54:51.000000Z"
        }, {
          id: 2258,
          name: "william qa",
          email: "william@freezepointqa.com",
          tenant: {
            name: "money"
          },
          personal_information: {
            first_name: "william",
            middle_name: null,
            last_name: "qa",
            phone_number: "+1-555 555-5555",
            email: "william@freezepointqa.com",
            address: "Street 1",
            status: "inprogress"
          },
          liveliness_detection: {
            id: 228,
            image_front: "https://api.files.deposits.dev/uploads/images/name-1673437909.",
            status: "pending"
          },
          document: [{
            id: 229,
            image_front: "https://api.files.deposits.dev/uploads/images/name-1673438000.",
            image_back: null,
            status: "completed"
          }],
          status: "pending",
          created_at: "2023-01-11T11:46:05.000000Z"
        }, {
          id: 1444,
          name: "Justin  Anton",
          email: "janton1@mail.com",
          tenant: {
            name: "money"
          },
          personal_information: {
            first_name: "Justin ",
            middle_name: null,
            last_name: "Anton",
            phone_number: "+13096207099",
            email: "janton1@mail.com",
            address: "1401 Royal Ave apt B ",
            status: "verified"
          },
          liveliness_detection: {
            id: 195,
            image_front: "https://api.client.wallet.swys.xyz/files/PL8CoSiARaaa9Ap0J2HdDTVLglyUnbopUvddBzySRnqui5Prnq2tOopmh7bvi57I.png",
            status: "completed"
          },
          document: [],
          status: "active",
          created_at: "2022-06-09T03:40:36.000000Z"
        }, {
          id: 925,
          name: "Joseph Akintolayo",
          email: "Joseph.akintolayo@gmail.com",
          tenant: {
            name: "money"
          },
          personal_information: {
            first_name: "Joseph",
            middle_name: null,
            last_name: "Akintolayo",
            phone_number: "+12104879832",
            email: "Joseph.akintolayo@gmail.com",
            address: "1511 Clinton",
            status: "pending"
          },
          liveliness_detection: {
            id: 36,
            image_front: "https://api.client.wallet.deposits.dev/files/2nBlX6XDQxpHezsgA6DMeb0HjV2W58IwY8ejo4z3AH8PUiBulLEO96TNtrdcRp0l.png",
            status: "failed"
          },
          document: [],
          status: "active",
          created_at: "2021-11-30T00:18:56.000000Z"
        }, {
          id: 945,
          name: "Nancy Akinkugbe",
          email: "nancy@renaissance.ng1688550068352",
          tenant: {
            name: "money"
          },
          personal_information: {
            first_name: "Nancy",
            middle_name: null,
            last_name: "Akinkugbe",
            phone_number: "+1-7798006712",
            email: "nancy@renaissance.ng1688550068352",
            address: "Location",
            status: "verified"
          },
          liveliness_detection: {
            id: 5,
            image_front: "https://api.client.wallet.deposits.dev/files/mUfYR5QNUXZKoraRSe1A9TYQuoDOscepnF67HkcDwHUsaY3L9ZCTS6uy7vUFgbvM.jpg",
            status: "failed"
          },
          document: [{
            id: 107,
            image_front: "https://api.files.deposits.dev/uploads/images/cu4fxvnofvd-1660045305.jpg",
            image_back: "https://api.files.deposits.dev/uploads/images/aamfl3gyjeb-1660045318.jpg",
            status: "active"
          }, {
            id: 346,
            image_front: "https://api.files.deposits.dev/uploads/images/img-4525-1688491706.png",
            image_back: null,
            status: "active"
          }],
          status: "active",
          created_at: "2021-12-21T17:36:19.000000Z"
        }, {
          id: 929,
          name: "Maxwell Case",
          email: "maxwell@deposits.com",
          tenant: {
            name: "money"
          },
          personal_information: {
            first_name: "Maxwell",
            middle_name: null,
            last_name: "Case",
            phone_number: "+18188005740",
            email: "maxwell@deposits.com",
            address: "5222 Belmont Ave",
            status: "verified"
          },
          liveliness_detection: {
            id: 3,
            image_front: "https://api.client.wallet.deposits.dev/files/tuqSkr8drfFX0P8wDJE5tRUitpqSLqPSJSA6ScQTWzL9l65aWNH82E1LAfRJiGVz.jpg",
            status: "failed"
          },
          document: [],
          status: "active",
          created_at: "2021-12-02T17:19:54.000000Z"
        }, {
          id: 952,
          name: "William Iyomere",
          email: "esanjumi@hotmail.co.uk",
          tenant: {
            name: "money"
          },
          personal_information: {
            first_name: "William",
            middle_name: null,
            last_name: "Iyomere",
            phone_number: "+18030406538",
            email: "esanjumi@hotmail.co.uk",
            address: "321 road e close  house 1 festac town",
            status: "verified"
          },
          liveliness_detection: {
            id: 2,
            image_front: "https://api.client.wallet.deposits.dev/files/CgP9oxFZS36xfyqgpiVwVUuNiQ4KeIYK7idJvvQC7BUTy3l9R69HIjc2gZvgZpRb.png",
            status: "failed"
          },
          document: [],
          status: "active",
          created_at: "2022-01-05T14:35:56.000000Z"
        }, {
          id: 998,
          name: "Taylor Mills",
          email: "taylormillsjr2@gmail.com",
          tenant: {
            name: "money"
          },
          personal_information: {
            first_name: "Taylor",
            middle_name: null,
            last_name: "Mills",
            phone_number: "+14438168593",
            email: "taylormillsjr2@gmail.com",
            address: "4416 Purple Martins Road  ",
            status: "verified"
          },
          liveliness_detection: {
            id: 10,
            image_front: "https://api.client.wallet.deposits.dev/files/iAtM9FO1tK9N28psCAmTAqGZ8XUWZxMYsJUwdp7Ccx11foEqiauO7aYAoPt3Kjg4.png",
            status: "failed"
          },
          document: [],
          status: "active",
          created_at: "2022-02-17T14:51:50.000000Z"
        }, {
          id: 1008,
          name: "Ada William",
          email: "willspglobal@gmail.com",
          tenant: {
            name: "money"
          },
          personal_information: {
            first_name: "Ada",
            middle_name: null,
            last_name: "William",
            phone_number: "+16505130514",
            email: "willspglobal@gmail.com",
            address: "Texas chainsaw",
            status: "verified"
          },
          liveliness_detection: {
            id: 1,
            image_front: "https://api.client.wallet.deposits.dev/files/DbF7fFg7tuH5AFiFcq665yH5SsyqHNBHTZKzvr1q4KgAQTATrqO40MHMnpmBgyae.png",
            status: "failed"
          },
          document: [],
          status: "active",
          created_at: "2022-02-23T14:35:40.000000Z"
        }, {
          id: 1026,
          name: "zachary hoffman",
          email: "bigstepperrz@gmail.com",
          tenant: {
            name: "money"
          },
          personal_information: {
            first_name: "zachary",
            middle_name: null,
            last_name: "hoffman",
            phone_number: null,
            email: "bigstepperrz@gmail.com",
            address: "7265 County Road u",
            status: "pending"
          },
          liveliness_detection: {
            id: 4,
            image_front: "https://api.client.wallet.deposits.dev/files/FZa2DKQ3jyfCLaQDNJb9o28RdbxBdK00ZFrpfIJXqB9AVAQl70iS18nNdX16wvTC.jpg",
            status: "failed"
          },
          document: [],
          status: "active",
          created_at: "2022-03-02T03:12:37.000000Z"
        }, {
          id: 2488,
          name: "Eric McWinNEr",
          email: "mcwinnerwebdeveloper+3489347@gmail.com",
          tenant: {
            name: "money"
          },
          personal_information: {
            first_name: "Eric",
            middle_name: null,
            last_name: "McWinNEr",
            phone_number: "+1-2524196165",
            email: "mcwinnerwebdeveloper+3489347@gmail.com",
            address: null,
            status: "pending"
          },
          liveliness_detection: {
            id: 312,
            image_front: "https://api.files.deposits.dev/uploads/images/name-1681387311.",
            status: "pending"
          },
          document: [{
            id: 313,
            image_front: "https://api.files.deposits.dev/uploads/images/name-1681387520.",
            image_back: null,
            status: "active"
          }],
          status: "pending",
          created_at: "2023-04-13T11:48:48.000000Z"
        }, {
          id: 1041,
          name: "Matthew Lavigne",
          email: "paytonrlaws@outlook.com",
          tenant: {
            name: "money"
          },
          personal_information: {
            first_name: "Matthew",
            middle_name: null,
            last_name: "Lavigne",
            phone_number: "+16178540879",
            email: "paytonrlaws@outlook.com",
            address: "10 w river pkwy ",
            status: "verified"
          },
          liveliness_detection: {
            id: 8,
            image_front: "https://api.client.wallet.deposits.dev/files/cNUr15H5U43HKYAJXwCF6qcWG49Q7Lj9CsnJLUfi1PXwJxJSL5TusgciyhsCbJxm.png",
            status: "failed"
          },
          document: [],
          status: "active",
          created_at: "2022-03-13T21:21:02.000000Z"
        }, {
          id: 2489,
          name: "Ericko McWinNEr",
          email: "mcwinnerwebdeveloper+8958967856968598@gmail.com",
          tenant: {
            name: "money"
          },
          personal_information: {
            first_name: "Ericko",
            middle_name: null,
            last_name: "McWinNEr",
            phone_number: "+1-2524196165",
            email: "mcwinnerwebdeveloper+8958967856968598@gmail.com",
            address: "Gguiuugg",
            status: "in_progress"
          },
          liveliness_detection: {
            id: 314,
            image_front: "https://api.files.deposits.dev/uploads/images/name-1681388733.",
            status: "pending"
          },
          document: [{
            id: 315,
            image_front: "https://api.files.deposits.dev/uploads/images/61718d57-b03f-4f4f-8649-09c3c586e2f6-1681413227.png",
            image_back: null,
            status: "active"
          }],
          status: "pending",
          created_at: "2023-04-13T12:15:55.000000Z"
        }, {
          id: 1042,
          name: "Thuy Walsh",
          email: "aabenadeola@yandex.com",
          tenant: {
            name: "money"
          },
          personal_information: {
            first_name: "Thuy",
            middle_name: null,
            last_name: "Walsh",
            phone_number: "+18125142332",
            email: "aabenadeola@yandex.com",
            address: "2023 Rockfield road  ",
            status: "verified"
          },
          liveliness_detection: {
            id: 6,
            image_front: "https://api.client.wallet.deposits.dev/files/XHchEGoPv2acQVxHszBYOs6IqmGbetjTkRU4XDsyqN62ZgPfR9PRqfIrwJnEimHy.png",
            status: "failed"
          },
          document: [],
          status: "active",
          created_at: "2022-03-13T21:57:44.000000Z"
        }, {
          id: 1043,
          name: "Jacie Delahoussaye",
          email: "jaydel120390@gmail.com",
          tenant: {
            name: "money"
          },
          personal_information: {
            first_name: "Jacie",
            middle_name: null,
            last_name: "Delahoussaye",
            phone_number: "+13373515813",
            email: "jaydel120390@gmail.com",
            address: "408 bull tiger lane lot a",
            status: "verified"
          },
          liveliness_detection: {
            id: 7,
            image_front: "https://api.client.wallet.deposits.dev/files/JNQZuDntX54Yow9PruTFFLdyYOLT1A87e7whVADvXWvTj1tgQQA8zFNWxVLY8F7l.png",
            status: "failed"
          },
          document: [],
          status: "active",
          created_at: "2022-03-15T12:45:55.000000Z"
        }, {
          id: 1046,
          name: "Cassandra Corbisiero",
          email: "Cassycorb@gmail.com",
          tenant: {
            name: "money"
          },
          personal_information: {
            first_name: "Cassandra",
            middle_name: null,
            last_name: "Corbisiero",
            phone_number: "+19412469997",
            email: "Cassycorb@gmail.com",
            address: "1157 Capricorn Blvd apt b1 ",
            status: "verified"
          },
          liveliness_detection: {
            id: 9,
            image_front: "https://api.client.wallet.deposits.dev/files/WZVxx7nnUmFwlgHp2ADWqyIe89OOjisXaYJ6PigN9vDFmsYZGczWLl7Hajw3LN0Z.png",
            status: "failed"
          },
          document: [],
          status: "active",
          created_at: "2022-03-21T03:12:33.000000Z"
        }, {
          id: 1056,
          name: "ROMEL SHEPPARD",
          email: "Romelsheppard649072@gmail.com",
          tenant: {
            name: "money"
          },
          personal_information: {
            first_name: "ROMEL",
            middle_name: null,
            last_name: "SHEPPARD",
            phone_number: "+15109789857",
            email: "Romelsheppard649072@gmail.com",
            address: "897 55TH ST  APT B ",
            status: "verified"
          },
          liveliness_detection: {
            id: 11,
            image_front: "https://api.client.wallet.deposits.dev/files/FJDSrsmAYuYp5r7MoEtArtMxZ7179JebjMHKczHtrsbVrnWSew8FMFTxGaoZx9pq.png",
            status: "failed"
          },
          document: [],
          status: "active",
          created_at: "2022-03-24T17:16:38.000000Z"
        }, {
          id: 1067,
          name: "Alexa Cottage",
          email: "hufinjcdydyg1399@gmail.com",
          tenant: {
            name: "money"
          },
          personal_information: {
            first_name: "Alexa",
            middle_name: null,
            last_name: "Cottage",
            phone_number: "+16468836426",
            email: "hufinjcdydyg1399@gmail.com",
            address: "7997 Independence Dr ",
            status: "verified"
          },
          liveliness_detection: {
            id: 12,
            image_front: "https://api.client.wallet.deposits.dev/files/QXAt8ALPVUxdugLfUBwSXXNLFmTu1Rj7aha7qPDipXdC0umEHJAItLlfKoAVA4UK.png",
            status: "failed"
          },
          document: [],
          status: "active",
          created_at: "2022-03-27T21:03:32.000000Z"
        }, {
          id: 1087,
          name: "shania lynn",
          email: "shanialynn0609@gmail.com",
          tenant: {
            name: "money"
          },
          personal_information: {
            first_name: "shania",
            middle_name: null,
            last_name: "lynn",
            phone_number: "+18453130859",
            email: "shanialynn0609@gmail.com",
            address: "5 borden rd  ",
            status: "verified"
          },
          liveliness_detection: {
            id: 13,
            image_front: "https://api.client.wallet.deposits.dev/files/LUr7kgzHQi2VboU6Zy0OmXISkO4fWlPtu8yZm5ku0NMcONMVJGid3VZsGDNB6rBv.png",
            status: "failed"
          },
          document: [],
          status: "active",
          created_at: "2022-03-29T18:58:18.000000Z"
        }],
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
          Date: moment(thisUser["created_at"]).format("MMM d, Y"),
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
})`,...(da=(wa=F.parameters)==null?void 0:wa.docs)==null?void 0:da.source}}};const xa=["ExtraHeadings","Default","ChangeColorForRow","DarkModeDefault","ExpandMode","ExpandModeWithSpecifiedExpandedColumns","Search","DarkModeSearch","Checkboxes","DarkModeCheckboxes","ButtonActions","DarkModeButtonActions","Pagination","DarkModePagination","RightPagination","DarkModeRightPagination","CustomComponent","DarkModeCustomComponent","PipedColumnExampleMultiplyQtyByTwo","OverflowTable","DarkModeOverflowTable","FixedColumnOverflowTable","FixedColumnOverflowTableWithCheckboxes","AsyncPaginationTable","ActionSitcomsTable","FixedActionSitcomsTable","FixedTooltipTable","TestTableTemplate"];export{W as ActionSitcomsTable,H as AsyncPaginationTable,C as ButtonActions,m as ChangeColorForRow,U as Checkboxes,B as CustomComponent,w as DarkModeButtonActions,q as DarkModeCheckboxes,N as DarkModeCustomComponent,S as DarkModeDefault,D as DarkModeOverflowTable,f as DarkModePagination,M as DarkModeRightPagination,g as DarkModeSearch,l as Default,u as ExpandMode,h as ExpandModeWithSpecifiedExpandedColumns,s as ExtraHeadings,A as FixedActionSitcomsTable,P as FixedColumnOverflowTable,J as FixedColumnOverflowTableWithCheckboxes,L as FixedTooltipTable,Y as OverflowTable,d as Pagination,v as PipedColumnExampleMultiplyQtyByTwo,k as RightPagination,p as Search,F as TestTableTemplate,xa as __namedExportsOrder,_a as default};
//# sourceMappingURL=DTable.stories-5e506591.js.map