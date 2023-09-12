    <d-table v-bind="args" />`}),Fe=t=>({components:{DTable:y},setup(){return{args:t}},methods:{alertName:function(e){alert(`The name on the row clicked is: ${e.name}`)}},template:`
    <d-table @row-clicked="alertName" v-bind="args" />`}),be=t=>({components:{DTable:y,DBadge:l,DAutoLayout:ot,DSelect:He},setup(){return{args:t}},template:`
    <d-table v-bind="args">
    <template #table-header-left>
      <d-select size="large" placeholder="Last 7 days" width="200px" />
      <d-select size="large" placeholder="By Events" width="200px" />
      <d-select size="large" placeholder="All environments" width="200px" />
    </template>
    </d-table>
  `}),S=be.bind({});S.args={columns:a,data:Q,enableCsvExport:!0,enableCustomizeView:!0};const Ie=t=>({components:{DTable:y,DarkModeProvider:ke},setup(){return{args:t}},template:`
    <dark-mode-provider :dark-mode="true">
    <d-table v-bind="args" />
    </dark-mode-provider>
  `}),m=()=>{const t=Ie.bind({});return t.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],t},u=r.bind({});u.args={columns:a,data:n};const h=r.bind({});h.args={columns:a,data:Le};const p=m();p.args={columns:a,data:n};const g=Fe.bind({});g.args={columns:a,data:n};const U=r.bind({});U.args={data:n,columns:a,expandMode:!0,paginate:!0};const q=r.bind({});q.args={data:n,columns:a,expandMode:!0,expandedColumns:["name","city"]};const C=r.bind({});C.args={search:!0,data:n,columns:a};const Oe=t=>({components:{DTable:y},methods:{handleSearch:function(e){alert(`I will search for ${e} from an API`)}},setup(){return{args:t}},template:`
    <d-table 
      v-bind="args"
      @search="handleSearch"
    />
  `}),w=Oe.bind({});w.args={search:!0,data:n,columns:a,asyncSearch:!0};const d=m();d.args={search:!0,columns:a,data:n};const f=r.bind({});f.args={columns:a,data:n,showCheckboxes:!0};const k=m();k.args={showCheckboxes:!0,columns:a,data:n};const M=r.bind({});M.args={columns:a,data:n,enableCustomizeView:!0};const B=r.bind({});B.args={columns:a,data:n,enableCsvExport:!0,buttonActionsAlignment:"right"};const Ee=t=>({components:{DTable:y},setup(){return{args:t}},methods:{alertStuff:function(){alert("Downloading CSV...")}},template:`
    <d-table @download-csv="alertStuff" v-bind="args" />
  `}),ze=t=>({components:{DTable:y},setup(){return{args:t}},template:`
    <d-table v-bind="args" />
  `}),N=ze.bind({});N.args={columns:a,data:n,enableCsvExport:!0,asyncCSVExport:!0,exportCsvUrl:"https://www.stats.govt.nz/assets/Uploads/Business-employment-data/Business-employment-data-June-2023-quarter/Download-data/business-employment-data-june-2023-quarter.zip"};const v=Ee.bind({});v.args={columns:a,data:n,enableCsvExport:!0,asyncCSVExport:!0};const Y=r.bind({});Y.args={columns:a,data:n,loading:!0};const D=r.bind({});D.args={enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:n};const P=r.bind({});P.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:[]};const je=t=>({components:{DTable:y,DAutoLayout:ot,DText:fe,DButton:Z},setup(){return{args:t}},template:`
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
  `}),J=je.bind({});J.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:[]};const H=m();H.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:n};const W=r.bind({});W.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:Q,paginate:!0};const A=r.bind({});A.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,paginate:!0,data:et};const L=m();L.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:et,paginate:!0};const T=r.bind({});T.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:et,paginate:!0,paginateRight:!0};const R=m();R.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:et,paginate:!0,paginateRight:!0};const Ve=t=>({components:{DTable:y,DButton:Z,DBadge:l},methods:{deleteRow:function(e){alert(e)}},setup(){return{args:t}},template:`
    <d-table v-bind="args">
      <template v-slot:item.state="row">
        <d-badge>{{row.state}}</d-badge>
      </template>
      
      <template v-slot:item.action="row">
        <d-button size="medium" @click="deleteRow(row.uuuid)">Delete row</d-button>
      </template>
      
    </d-table>
  `}),F=Ve.bind({});F.args={columns:[...a,{dataSelector:"action",display:"Action"}],data:ve};const b=m();b.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:a,data:ve,paginate:!0};const I=r.bind({});I.args={columns:[{display:"Name",dataSelector:"name",uppercase:!0,sortable:!0,filterable:!0,width:"",minWidth:"",maxWidth:"",pipe:t=>t.toUpperCase()},{display:"City",dataSelector:"city",uppercase:!0,sortable:!0,filterable:!0,width:"",minWidth:"",maxWidth:""},{display:"No of characters in City",dataSelector:"non_existent_and_not_necessary",pipe:(t,e)=>e.city.length},{display:"Company/Work",dataSelector:"company",uppercase:!0,filterable:!0,width:"",minWidth:"",maxWidth:""},{display:"Country",dataSelector:"country",uppercase:!0,sortable:!0,filterable:!1,width:"",minWidth:"",maxWidth:""},{display:"Qty",dataSelector:"qty",uppercase:!0,sortable:!0,sortNumerically:!0,filterable:!0,width:"80px",minWidth:"80px",maxWidth:"80px",position:"right",pipe:t=>t*2},{display:"State",dataSelector:"state",uppercase:!0,sortable:!1,filterable:!0,width:"",minWidth:"",maxWidth:"",excludeFromCSV:!0}],data:n};const nt=t=>({components:{DTable:y,DBadge:l,DarkModeProvider:ke},setup(){return{args:t}},template:`
    <dark-mode-provider :dark-mode="args.darkMode">
    <d-table v-bind="args">
      <template v-slot:item.tags="item">
        <d-badge v-for="(tag, index) in item.tags" :key="index">
          {{ tag }}
        </d-badge>
      </template>
    </d-table>
    </dark-mode-provider>
  `}),O=nt.bind({});O.args={columns:Ye,paginate:!0,data:X,darkMode:!1};const E=nt.bind({});E.args={columns:Ye,paginate:!0,data:X,darkMode:!0};const z=nt.bind({});z.args={columns:yt,paginate:!0,data:X,darkMode:!1};const j=nt.bind({});j.args={columns:yt,paginate:!0,data:X,darkMode:!1,showCheckboxes:!0};const Ke=t=>({components:{DTable:y},setup(){return{args:t}},methods:{alertPageChange(e){alert("The page changed and the new page is "+e+". I can do an ajax call to get this page's content.")}},template:`
    <d-table v-bind="args" @page-updated="alertPageChange" />`}),V=Ke.bind({});V.args={columns:a,data:Q,paginate:!0,asyncPagination:!0,totalPages:7};const De=t=>({components:{DTable:y,DMenu:We,DButton:Z},setup(){return{args:t}},methods:{handleRowClick:()=>{alert("Row was clicked but not button")}},template:`
    <d-table @row-clicked="handleRowClick" v-bind="args">
    <template v-slot:item.actions="item">
      <d-menu :options="['Fintech', 'UI Kit', 'Finance', 'Identity' ]">
        <d-button size="medium">...</d-button>
      </d-menu>
    </template>
    </d-table>
  `}),K=De.bind({});K.args={columns:Te,data:Q};const G=De.bind({});G.args={columns:Re,data:Q};const Ge=t=>({components:{DTable:y,DTooltip:Ae,DBadge:l,DTableCellText:Ce},setup(){return{args:t}},template:`
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
  `}),_=Ge.bind({});_.args={columns:yt,paginate:!0,data:X,darkMode:!1};const _e=t=>({components:{DTable:y},methods:{tableUpdate:function(e){alert(`The current page is ${e.page} and the search value is ${e.search}. The returned payload is ${JSON.stringify(e)}`)},pageUpdate:function(e){console.log("Pagination changed",e)},searchUpdate:function(e){console.log("Search changed",e)}},setup(){return{args:t}},template:' <d-table v-bind="args" @page-updated="pageUpdate" @search="searchUpdate" @async-table-update="tableUpdate" />'}),x=_e.bind({});x.args={columns:a,data:n,asyncPagination:!0,asyncSearch:!0,totalPages:49,paginate:!0,search:!0};const tt=t=>({components:{DTable:y,DBox:we,DBadge:l,DButton:Z},setup(){const e=Me([{display:"Name",dataSelector:"Name",uppercase:!0,sortable:!0,filterable:!0,width:"",minWidth:"",maxWidth:""},{display:"Email",dataSelector:"Email",uppercase:!0,filterable:!0,width:"",minWidth:"",maxWidth:""},{display:"Tenants",dataSelector:"Tenants",uppercase:!0,sortable:!0,filterable:!0,width:"",minWidth:"",maxWidth:""},{display:"Reg Date",dataSelector:"Date",uppercase:!0,sortable:!0,filterable:!0,width:"",minWidth:"",maxWidth:""},{display:"kyc/kyb status",dataSelector:"Kyc",uppercase:!0,sortable:!1,filterable:!1,width:"",minWidth:"",maxWidth:""},{display:"Action",dataSelector:"Action",uppercase:!0,sortable:!1,filterable:!1,position:"right"}]),i=Be({identities:[],data:[],per_page:0,currentPage:1,totalPages:1});return Ne(()=>{const c={data:[{id:2554,name:"Test Test",email:"deposits.test@gmail.com",tenant:{name:"money"},personal_information:{first_name:"Test",middle_name:null,last_name:"Test",phone_number:"+1-3854234144",email:"deposits.test@gmail.com",address:"Test",status:"verified"},liveliness_detection:{id:325,image_front:"https://api.files.deposits.dev/uploads/images/name-1686578167.",status:"pending"},document:[{id:326,image_front:"https://api.files.deposits.dev/uploads/images/photo-2022-05-31-09-54-14-1686578203.jpg",image_back:"https://api.files.deposits.dev/uploads/images/photo-2022-05-31-09-54-14-1686578204.jpg",status:"active"}],status:"active",created_at:"2023-05-10T11:13:15.000000Z"},{id:2555,name:"Test Test",email:"qa.deposits@gmail.com1687853960700",tenant:{name:"money"},personal_information:{first_name:"Test",middle_name:null,last_name:"Test",phone_number:"+1-6157635478",email:"qa.deposits@gmail.com1687853960700",address:"Test",status:"verified"},liveliness_detection:{id:321,image_front:"https://api.files.deposits.dev/uploads/images/name-1686408966.",status:"pending"},document:[{id:322,image_front:"https://api.files.deposits.dev/uploads/images/560a178f-c60d-4c11-b7aa-df33daa56303-1687349045.png",image_back:"https://api.files.deposits.dev/uploads/images/0ceddce0-a1b8-4267-9f28-c7a9ce1e8b3c-1687349054.png",status:"active"}],status:"active",created_at:"2023-05-10T13:54:51.000000Z"},{id:2258,name:"william qa",email:"william@freezepointqa.com",tenant:{name:"money"},personal_information:{first_name:"william",middle_name:null,last_name:"qa",phone_number:"+1-555 555-5555",email:"william@freezepointqa.com",address:"Street 1",status:"inprogress"},liveliness_detection:{id:228,image_front:"https://api.files.deposits.dev/uploads/images/name-1673437909.",status:"pending"},document:[{id:229,image_front:"https://api.files.deposits.dev/uploads/images/name-1673438000.",image_back:null,status:"completed"}],status:"pending",created_at:"2023-01-11T11:46:05.000000Z"},{id:1444,name:"Justin  Anton",email:"janton1@mail.com",tenant:{name:"money"},personal_information:{first_name:"Justin ",middle_name:null,last_name:"Anton",phone_number:"+13096207099",email:"janton1@mail.com",address:"1401 Royal Ave apt B ",status:"verified"},liveliness_detection:{id:195,image_front:"https://api.client.wallet.swys.xyz/files/PL8CoSiARaaa9Ap0J2HdDTVLglyUnbopUvddBzySRnqui5Prnq2tOopmh7bvi57I.png",status:"completed"},document:[],status:"active",created_at:"2022-06-09T03:40:36.000000Z"},{id:925,name:"Joseph Akintolayo",email:"Joseph.akintolayo@gmail.com",tenant:{name:"money"},personal_information:{first_name:"Joseph",middle_name:null,last_name:"Akintolayo",phone_number:"+12104879832",email:"Joseph.akintolayo@gmail.com",address:"1511 Clinton",status:"pending"},liveliness_detection:{id:36,image_front:"https://api.client.wallet.deposits.dev/files/2nBlX6XDQxpHezsgA6DMeb0HjV2W58IwY8ejo4z3AH8PUiBulLEO96TNtrdcRp0l.png",status:"failed"},document:[],status:"active",created_at:"2021-11-30T00:18:56.000000Z"},{id:945,name:"Nancy Akinkugbe",email:"nancy@renaissance.ng1688550068352",tenant:{name:"money"},personal_information:{first_name:"Nancy",middle_name:null,last_name:"Akinkugbe",phone_number:"+1-7798006712",email:"nancy@renaissance.ng1688550068352",address:"Location",status:"verified"},liveliness_detection:{id:5,image_front:"https://api.client.wallet.deposits.dev/files/mUfYR5QNUXZKoraRSe1A9TYQuoDOscepnF67HkcDwHUsaY3L9ZCTS6uy7vUFgbvM.jpg",status:"failed"},document:[{id:107,image_front:"https://api.files.deposits.dev/uploads/images/cu4fxvnofvd-1660045305.jpg",image_back:"https://api.files.deposits.dev/uploads/images/aamfl3gyjeb-1660045318.jpg",status:"active"},{id:346,image_front:"https://api.files.deposits.dev/uploads/images/img-4525-1688491706.png",image_back:null,status:"active"}],status:"active",created_at:"2021-12-21T17:36:19.000000Z"},{id:929,name:"Maxwell Case",email:"maxwell@deposits.com",tenant:{name:"money"},personal_information:{first_name:"Maxwell",middle_name:null,last_name:"Case",phone_number:"+18188005740",email:"maxwell@deposits.com",address:"5222 Belmont Ave",status:"verified"},liveliness_detection:{id:3,image_front:"https://api.client.wallet.deposits.dev/files/tuqSkr8drfFX0P8wDJE5tRUitpqSLqPSJSA6ScQTWzL9l65aWNH82E1LAfRJiGVz.jpg",status:"failed"},document:[],status:"active",created_at:"2021-12-02T17:19:54.000000Z"},{id:952,name:"William Iyomere",email:"esanjumi@hotmail.co.uk",tenant:{name:"money"},personal_information:{first_name:"William",middle_name:null,last_name:"Iyomere",phone_number:"+18030406538",email:"esanjumi@hotmail.co.uk",address:"321 road e close  house 1 festac town",status:"verified"},liveliness_detection:{id:2,image_front:"https://api.client.wallet.deposits.dev/files/CgP9oxFZS36xfyqgpiVwVUuNiQ4KeIYK7idJvvQC7BUTy3l9R69HIjc2gZvgZpRb.png",status:"failed"},document:[],status:"active",created_at:"2022-01-05T14:35:56.000000Z"},{id:998,name:"Taylor Mills",email:"taylormillsjr2@gmail.com",tenant:{name:"money"},personal_information:{first_name:"Taylor",middle_name:null,last_name:"Mills",phone_number:"+14438168593",email:"taylormillsjr2@gmail.com",address:"4416 Purple Martins Road  ",status:"verified"},liveliness_detection:{id:10,image_front:"https://api.client.wallet.deposits.dev/files/iAtM9FO1tK9N28psCAmTAqGZ8XUWZxMYsJUwdp7Ccx11foEqiauO7aYAoPt3Kjg4.png",status:"failed"},document:[],status:"active",created_at:"2022-02-17T14:51:50.000000Z"},{id:1008,name:"Ada William",email:"willspglobal@gmail.com",tenant:{name:"money"},personal_information:{first_name:"Ada",middle_name:null,last_name:"William",phone_number:"+16505130514",email:"willspglobal@gmail.com",address:"Texas chainsaw",status:"verified"},liveliness_detection:{id:1,image_front:"https://api.client.wallet.deposits.dev/files/DbF7fFg7tuH5AFiFcq665yH5SsyqHNBHTZKzvr1q4KgAQTATrqO40MHMnpmBgyae.png",status:"failed"},document:[],status:"active",created_at:"2022-02-23T14:35:40.000000Z"},{id:1026,name:"zachary hoffman",email:"bigstepperrz@gmail.com",tenant:{name:"money"},personal_information:{first_name:"zachary",middle_name:null,last_name:"hoffman",phone_number:null,email:"bigstepperrz@gmail.com",address:"7265 County Road u",status:"pending"},liveliness_detection:{id:4,image_front:"https://api.client.wallet.deposits.dev/files/FZa2DKQ3jyfCLaQDNJb9o28RdbxBdK00ZFrpfIJXqB9AVAQl70iS18nNdX16wvTC.jpg",status:"failed"},document:[],status:"active",created_at:"2022-03-02T03:12:37.000000Z"},{id:2488,name:"Eric McWinNEr",email:"mcwinnerwebdeveloper+3489347@gmail.com",tenant:{name:"money"},personal_information:{first_name:"Eric",middle_name:null,last_name:"McWinNEr",phone_number:"+1-2524196165",email:"mcwinnerwebdeveloper+3489347@gmail.com",address:null,status:"pending"},liveliness_detection:{id:312,image_front:"https://api.files.deposits.dev/uploads/images/name-1681387311.",status:"pending"},document:[{id:313,image_front:"https://api.files.deposits.dev/uploads/images/name-1681387520.",image_back:null,status:"active"}],status:"pending",created_at:"2023-04-13T11:48:48.000000Z"},{id:1041,name:"Matthew Lavigne",email:"paytonrlaws@outlook.com",tenant:{name:"money"},personal_information:{first_name:"Matthew",middle_name:null,last_name:"Lavigne",phone_number:"+16178540879",email:"paytonrlaws@outlook.com",address:"10 w river pkwy ",status:"verified"},liveliness_detection:{id:8,image_front:"https://api.client.wallet.deposits.dev/files/cNUr15H5U43HKYAJXwCF6qcWG49Q7Lj9CsnJLUfi1PXwJxJSL5TusgciyhsCbJxm.png",status:"failed"},document:[],status:"active",created_at:"2022-03-13T21:21:02.000000Z"},{id:2489,name:"Ericko McWinNEr",email:"mcwinnerwebdeveloper+8958967856968598@gmail.com",tenant:{name:"money"},personal_information:{first_name:"Ericko",middle_name:null,last_name:"McWinNEr",phone_number:"+1-2524196165",email:"mcwinnerwebdeveloper+8958967856968598@gmail.com",address:"Gguiuugg",status:"in_progress"},liveliness_detection:{id:314,image_front:"https://api.files.deposits.dev/uploads/images/name-1681388733.",status:"pending"},document:[{id:315,image_front:"https://api.files.deposits.dev/uploads/images/61718d57-b03f-4f4f-8649-09c3c586e2f6-1681413227.png",image_back:null,status:"active"}],status:"pending",created_at:"2023-04-13T12:15:55.000000Z"},{id:1042,name:"Thuy Walsh",email:"aabenadeola@yandex.com",tenant:{name:"money"},personal_information:{first_name:"Thuy",middle_name:null,last_name:"Walsh",phone_number:"+18125142332",email:"aabenadeola@yandex.com",address:"2023 Rockfield road  ",status:"verified"},liveliness_detection:{id:6,image_front:"https://api.client.wallet.deposits.dev/files/XHchEGoPv2acQVxHszBYOs6IqmGbetjTkRU4XDsyqN62ZgPfR9PRqfIrwJnEimHy.png",status:"failed"},document:[],status:"active",created_at:"2022-03-13T21:57:44.000000Z"},{id:1043,name:"Jacie Delahoussaye",email:"jaydel120390@gmail.com",tenant:{name:"money"},personal_information:{first_name:"Jacie",middle_name:null,last_name:"Delahoussaye",phone_number:"+13373515813",email:"jaydel120390@gmail.com",address:"408 bull tiger lane lot a",status:"verified"},liveliness_detection:{id:7,image_front:"https://api.client.wallet.deposits.dev/files/JNQZuDntX54Yow9PruTFFLdyYOLT1A87e7whVADvXWvTj1tgQQA8zFNWxVLY8F7l.png",status:"failed"},document:[],status:"active",created_at:"2022-03-15T12:45:55.000000Z"},{id:1046,name:"Cassandra Corbisiero",email:"Cassycorb@gmail.com",tenant:{name:"money"},personal_information:{first_name:"Cassandra",middle_name:null,last_name:"Corbisiero",phone_number:"+19412469997",email:"Cassycorb@gmail.com",address:"1157 Capricorn Blvd apt b1 ",status:"verified"},liveliness_detection:{id:9,image_front:"https://api.client.wallet.deposits.dev/files/WZVxx7nnUmFwlgHp2ADWqyIe89OOjisXaYJ6PigN9vDFmsYZGczWLl7Hajw3LN0Z.png",status:"failed"},document:[],status:"active",created_at:"2022-03-21T03:12:33.000000Z"},{id:1056,name:"ROMEL SHEPPARD",email:"Romelsheppard649072@gmail.com",tenant:{name:"money"},personal_information:{first_name:"ROMEL",middle_name:null,last_name:"SHEPPARD",phone_number:"+15109789857",email:"Romelsheppard649072@gmail.com",address:"897 55TH ST  APT B ",status:"verified"},liveliness_detection:{id:11,image_front:"https://api.client.wallet.deposits.dev/files/FJDSrsmAYuYp5r7MoEtArtMxZ7179JebjMHKczHtrsbVrnWSew8FMFTxGaoZx9pq.png",status:"failed"},document:[],status:"active",created_at:"2022-03-24T17:16:38.000000Z"},{id:1067,name:"Alexa Cottage",email:"hufinjcdydyg1399@gmail.com",tenant:{name:"money"},personal_information:{first_name:"Alexa",middle_name:null,last_name:"Cottage",phone_number:"+16468836426",email:"hufinjcdydyg1399@gmail.com",address:"7997 Independence Dr ",status:"verified"},liveliness_detection:{id:12,image_front:"https://api.client.wallet.deposits.dev/files/QXAt8ALPVUxdugLfUBwSXXNLFmTu1Rj7aha7qPDipXdC0umEHJAItLlfKoAVA4UK.png",status:"failed"},document:[],status:"active",created_at:"2022-03-27T21:03:32.000000Z"},{id:1087,name:"shania lynn",email:"shanialynn0609@gmail.com",tenant:{name:"money"},personal_information:{first_name:"shania",middle_name:null,last_name:"lynn",phone_number:"+18453130859",email:"shanialynn0609@gmail.com",address:"5 borden rd  ",status:"verified"},liveliness_detection:{id:13,image_front:"https://api.client.wallet.deposits.dev/files/LUr7kgzHQi2VboU6Zy0OmXISkO4fWlPtu8yZm5ku0NMcONMVJGid3VZsGDNB6rBv.png",status:"failed"},document:[],status:"active",created_at:"2022-03-29T18:58:18.000000Z"}],links:{first:"https://api.ghost.deposits.dev/api/v1/user/get-identities?page=1",last:"https://api.ghost.deposits.dev/api/v1/user/get-identities?page=13",prev:null,next:"https://api.ghost.deposits.dev/api/v1/user/get-identities?page=2"},meta:{current_page:1,from:1,last_page:13,path:"https://api.ghost.deposits.dev/api/v1/user/get-identities",per_page:"20",to:20,total:243}};i.identities=c.data,c.data.length==0&&(i.data=[]),i.currentPage=c.meta.current_page,i.totalPages=c.meta.last_page;for(let s=0;s<c.data.length;s++){const o=c.data[s];let $="pending",rt="";o.tenant&&o.tenant.name&&(rt=o.tenant.name),o.personal_information&&o.personal_information.name&&($=o.personal_information.status);let Pe={Name:o.name,Tenants:rt,Email:o.email,Date:de(o.created_at).format("MMM d, Y"),Action:o.id,Kyc:$,route:"/identity/"+o.id};i.data.push(Pe)}}),{args:t,columns:e,state:i}},template:`
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
  `}),at=t=>({components:{DTable:y,DBox:we,DBadge:l,DButton:Z,DText:fe,EyeFilledIcon:Je},setup(){const e=Me([{display:"ID",dataSelector:"ID",uppercase:!0,sortable:!0,filterable:!0,sortNumerically:!0,width:"",minWidth:"",maxWidth:""},{display:"Tenants",dataSelector:"Tenants",uppercase:!0,sortable:!0,filterable:!0,width:"",minWidth:"",maxWidth:""},{display:"Email",dataSelector:"Email",uppercase:!0,filterable:!0,width:"",minWidth:"",maxWidth:""},{display:"Created Date",dataSelector:"Date",uppercase:!0,sortable:!0,filterable:!0,width:"",minWidth:"",maxWidth:""},{display:"Action",dataSelector:"Action",uppercase:!0,sortable:!1,filterable:!1,position:"right"}]),i=Be({tenants:[],data:[],per_page:10,currentPage:1,totalPages:1});return Ne(()=>{const c={data:[{id:6456789,name:"A new program",website:"http://somethingcom.com",contact_name:"Jonathan Doe",contact_email:"eapriok+6378639478@gmail.com",status:"active",created_at:"2022-07-03T21:05:12.000000Z"},{id:109,name:"AfroTech",website:"https://afrotech.clm",contact_name:"Joseph A",contact_email:"joseph@renapay.com",status:"active",created_at:"2022-11-15T17:17:03.000000Z"},{id:24,name:"AiBuy",website:"https://aibuy.io",contact_name:null,contact_email:null,status:"active",created_at:"2022-04-06T19:06:47.000000Z"},{id:20,name:"aibuy-demo",website:"https://aibuy.com",contact_name:null,contact_email:null,status:"active",created_at:"2022-03-29T18:19:10.000000Z"},{id:72,name:"Alias vel nihil haru",website:"https://www.naxunenucimy.mobi",contact_name:"Voluptas et dolor no",contact_email:"kibaso@mailinator.com",status:"active",created_at:"2022-07-15T13:08:41.000000Z"},{id:30,name:"Anna Rogachyova",website:"https://aibuy.io",contact_name:null,contact_email:null,status:"active",created_at:"2022-04-08T12:46:21.000000Z"},{id:58,name:"Another Team",website:"https://www.deposits.com",contact_name:"John Doe",contact_email:"william+01@deposits.com",status:"active",created_at:"2022-06-30T21:49:42.000000Z"},{id:11,name:"Ben smith",website:"http://www.facebook.com",contact_name:null,contact_email:"",status:"active",created_at:"2021-10-28T11:50:02.000000Z"},{id:51,name:"Benode",website:"https://dsdsdsd.dsd",contact_name:"John Doe",contact_email:"b@b.com",status:"active",created_at:"2022-06-26T15:03:27.000000Z"},{id:49,name:"Bernode limited",website:"https://bernode.com",contact_name:"Bernar",contact_email:"bernard@gmail.com",status:"active",created_at:"2022-06-26T14:17:07.000000Z"}],links:{first:"https://api.ghost.deposits.dev/api/v1/user/get-tenants?page=1",last:"https://api.ghost.deposits.dev/api/v1/user/get-tenants?page=17",prev:null,next:"https://api.ghost.deposits.dev/api/v1/user/get-tenants?page=2"},meta:{current_page:1,from:1,last_page:17,path:"https://api.ghost.deposits.dev/api/v1/user/get-tenants",per_page:10,to:10,total:170}};i.data=[],i.tenants=c.data,c.data.length==0&&(i.data=[]),i.currentPage=c.meta.current_page,i.totalPages=c.meta.last_page;for(let s=0;s<c.data.length;s++){const o=c.data[s];let $={ID:o.id,Tenants:o.name,Email:o.contact_email,Date:de(o.created_at).format("MMM DD, YYYY"),Action:o.id,route:"/tenant/"+o.id+"/overview"};i.data.push($)}}),{columns:e,state:i}},template:`
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
  `});var it,ct,st;S.parameters={...S.parameters,docs:{...(it=S.parameters)==null?void 0:it.docs,source:{originalSource:`args => ({
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
})`,...(st=(ct=S.parameters)==null?void 0:ct.docs)==null?void 0:st.source}}};var lt,mt,St;u.parameters={...u.parameters,docs:{...(lt=u.parameters)==null?void 0:lt.docs,source:{originalSource:`args => ({
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
})`,...(St=(mt=u.parameters)==null?void 0:mt.docs)==null?void 0:St.source}}};var ut,ht,pt;h.parameters={...h.parameters,docs:{...(ut=h.parameters)==null?void 0:ut.docs,source:{originalSource:`args => ({
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
})`,...(pt=(ht=h.parameters)==null?void 0:ht.docs)==null?void 0:pt.source}}};var gt,Ut,qt;p.parameters={...p.parameters,docs:{...(gt=p.parameters)==null?void 0:gt.docs,source:{originalSource:"DarkModeTemplateFactory()",...(qt=(Ut=p.parameters)==null?void 0:Ut.docs)==null?void 0:qt.source}}};var Ct,wt,dt;g.parameters={...g.parameters,docs:{...(Ct=g.parameters)==null?void 0:Ct.docs,source:{originalSource:`args => ({
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
})`,...(dt=(wt=g.parameters)==null?void 0:wt.docs)==null?void 0:dt.source}}};var ft,kt,Mt;U.parameters={...U.parameters,docs:{...(ft=U.parameters)==null?void 0:ft.docs,source:{originalSource:`args => ({
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
})`,...(Mt=(kt=U.parameters)==null?void 0:kt.docs)==null?void 0:Mt.source}}};var Bt,Nt,vt;q.parameters={...q.parameters,docs:{...(Bt=q.parameters)==null?void 0:Bt.docs,source:{originalSource:`args => ({
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
})`,...(vt=(Nt=q.parameters)==null?void 0:Nt.docs)==null?void 0:vt.source}}};var Yt,Dt,Pt;C.parameters={...C.parameters,docs:{...(Yt=C.parameters)==null?void 0:Yt.docs,source:{originalSource:`args => ({
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
})`,...(Pt=(Dt=C.parameters)==null?void 0:Dt.docs)==null?void 0:Pt.source}}};var Jt,Ht,Wt;w.parameters={...w.parameters,docs:{...(Jt=w.parameters)==null?void 0:Jt.docs,source:{originalSource:`args => ({
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
})`,...(Wt=(Ht=w.parameters)==null?void 0:Ht.docs)==null?void 0:Wt.source}}};var At,Lt,Tt;d.parameters={...d.parameters,docs:{...(At=d.parameters)==null?void 0:At.docs,source:{originalSource:"DarkModeTemplateFactory()",...(Tt=(Lt=d.parameters)==null?void 0:Lt.docs)==null?void 0:Tt.source}}};var Rt,Ft,bt;f.parameters={...f.parameters,docs:{...(Rt=f.parameters)==null?void 0:Rt.docs,source:{originalSource:`args => ({
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
})`,...(bt=(Ft=f.parameters)==null?void 0:Ft.docs)==null?void 0:bt.source}}};var It,Ot,Et;k.parameters={...k.parameters,docs:{...(It=k.parameters)==null?void 0:It.docs,source:{originalSource:"DarkModeTemplateFactory()",...(Et=(Ot=k.parameters)==null?void 0:Ot.docs)==null?void 0:Et.source}}};var zt,jt,Vt;M.parameters={...M.parameters,docs:{...(zt=M.parameters)==null?void 0:zt.docs,source:{originalSource:`args => ({
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
})`,...(Vt=(jt=M.parameters)==null?void 0:jt.docs)==null?void 0:Vt.source}}};var Kt,Gt,_t;B.parameters={...B.parameters,docs:{...(Kt=B.parameters)==null?void 0:Kt.docs,source:{originalSource:`args => ({
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
})`,...(_t=(Gt=B.parameters)==null?void 0:Gt.docs)==null?void 0:_t.source}}};var xt,Zt,Qt;N.parameters={...N.parameters,docs:{...(xt=N.parameters)==null?void 0:xt.docs,source:{originalSource:`args => ({
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
})`,...(Qt=(Zt=N.parameters)==null?void 0:Zt.docs)==null?void 0:Qt.source}}};var Xt,$t,ta;v.parameters={...v.parameters,docs:{...(Xt=v.parameters)==null?void 0:Xt.docs,source:{originalSource:`args => ({
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
})`,...(ta=($t=v.parameters)==null?void 0:$t.docs)==null?void 0:ta.source}}};var aa,ea,na;Y.parameters={...Y.parameters,docs:{...(aa=Y.parameters)==null?void 0:aa.docs,source:{originalSource:`args => ({
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
})`,...(na=(ea=Y.parameters)==null?void 0:ea.docs)==null?void 0:na.source}}};var oa,ya,ra;D.parameters={...D.parameters,docs:{...(oa=D.parameters)==null?void 0:oa.docs,source:{originalSource:`args => ({
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
})`,...(ra=(ya=D.parameters)==null?void 0:ya.docs)==null?void 0:ra.source}}};var ia,ca,sa;P.parameters={...P.parameters,docs:{...(ia=P.parameters)==null?void 0:ia.docs,source:{originalSource:`args => ({
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
})`,...(sa=(ca=P.parameters)==null?void 0:ca.docs)==null?void 0:sa.source}}};var la,ma,Sa;J.parameters={...J.parameters,docs:{...(la=J.parameters)==null?void 0:la.docs,source:{originalSource:`args => ({
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
})`,...(Sa=(ma=J.parameters)==null?void 0:ma.docs)==null?void 0:Sa.source}}};var ua,ha,pa;H.parameters={...H.parameters,docs:{...(ua=H.parameters)==null?void 0:ua.docs,source:{originalSource:"DarkModeTemplateFactory()",...(pa=(ha=H.parameters)==null?void 0:ha.docs)==null?void 0:pa.source}}};var ga,Ua,qa;W.parameters={...W.parameters,docs:{...(ga=W.parameters)==null?void 0:ga.docs,source:{originalSource:`args => ({
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
})`,...(qa=(Ua=W.parameters)==null?void 0:Ua.docs)==null?void 0:qa.source}}};var Ca,wa,da;A.parameters={...A.parameters,docs:{...(Ca=A.parameters)==null?void 0:Ca.docs,source:{originalSource:`args => ({
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
})`,...(da=(wa=A.parameters)==null?void 0:wa.docs)==null?void 0:da.source}}};var fa,ka,Ma;L.parameters={...L.parameters,docs:{...(fa=L.parameters)==null?void 0:fa.docs,source:{originalSource:"DarkModeTemplateFactory()",...(Ma=(ka=L.parameters)==null?void 0:ka.docs)==null?void 0:Ma.source}}};var Ba,Na,va;T.parameters={...T.parameters,docs:{...(Ba=T.parameters)==null?void 0:Ba.docs,source:{originalSource:`args => ({
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
})`,...(va=(Na=T.parameters)==null?void 0:Na.docs)==null?void 0:va.source}}};var Ya,Da,Pa;R.parameters={...R.parameters,docs:{...(Ya=R.parameters)==null?void 0:Ya.docs,source:{originalSource:"DarkModeTemplateFactory()",...(Pa=(Da=R.parameters)==null?void 0:Da.docs)==null?void 0:Pa.source}}};var Ja,Ha,Wa;F.parameters={...F.parameters,docs:{...(Ja=F.parameters)==null?void 0:Ja.docs,source:{originalSource:`args => ({
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
})`,...(Wa=(Ha=F.parameters)==null?void 0:Ha.docs)==null?void 0:Wa.source}}};var Aa,La,Ta;b.parameters={...b.parameters,docs:{...(Aa=b.parameters)==null?void 0:Aa.docs,source:{originalSource:"DarkModeTemplateFactory()",...(Ta=(La=b.parameters)==null?void 0:La.docs)==null?void 0:Ta.source}}};var Ra,Fa,ba;I.parameters={...I.parameters,docs:{...(Ra=I.parameters)==null?void 0:Ra.docs,source:{originalSource:`args => ({
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
})`,...(ba=(Fa=I.parameters)==null?void 0:Fa.docs)==null?void 0:ba.source}}};var Ia,Oa,Ea;O.parameters={...O.parameters,docs:{...(Ia=O.parameters)==null?void 0:Ia.docs,source:{originalSource:`args => ({
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
})`,...(Ea=(Oa=O.parameters)==null?void 0:Oa.docs)==null?void 0:Ea.source}}};var za,ja,Va;E.parameters={...E.parameters,docs:{...(za=E.parameters)==null?void 0:za.docs,source:{originalSource:`args => ({
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
})`,...(Va=(ja=E.parameters)==null?void 0:ja.docs)==null?void 0:Va.source}}};var Ka,Ga,_a;z.parameters={...z.parameters,docs:{...(Ka=z.parameters)==null?void 0:Ka.docs,source:{originalSource:`args => ({
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
})`,...(_a=(Ga=z.parameters)==null?void 0:Ga.docs)==null?void 0:_a.source}}};var xa,Za,Qa;j.parameters={...j.parameters,docs:{...(xa=j.parameters)==null?void 0:xa.docs,source:{originalSource:`args => ({
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
})`,...(Qa=(Za=j.parameters)==null?void 0:Za.docs)==null?void 0:Qa.source}}};var Xa,$a,te;V.parameters={...V.parameters,docs:{...(Xa=V.parameters)==null?void 0:Xa.docs,source:{originalSource:`args => ({
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
})`,...(te=($a=V.parameters)==null?void 0:$a.docs)==null?void 0:te.source}}};var ae,ee,ne;K.parameters={...K.parameters,docs:{...(ae=K.parameters)==null?void 0:ae.docs,source:{originalSource:`args => ({
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
})`,...(ne=(ee=K.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var oe,ye,re;G.parameters={...G.parameters,docs:{...(oe=G.parameters)==null?void 0:oe.docs,source:{originalSource:`args => ({
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
})`,...(re=(ye=G.parameters)==null?void 0:ye.docs)==null?void 0:re.source}}};var ie,ce,se;_.parameters={..._.parameters,docs:{...(ie=_.parameters)==null?void 0:ie.docs,source:{originalSource:`args => ({
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
})`,...(se=(ce=_.parameters)==null?void 0:ce.docs)==null?void 0:se.source}}};var le,me,Se;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`args => ({
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
})`,...(Se=(me=x.parameters)==null?void 0:me.docs)==null?void 0:Se.source}}};var ue,he,pe;tt.parameters={...tt.parameters,docs:{...(ue=tt.parameters)==null?void 0:ue.docs,source:{originalSource:`args => ({
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
})`,...(pe=(he=tt.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};var ge,Ue,qe;at.parameters={...at.parameters,docs:{...(ge=at.parameters)==null?void 0:ge.docs,source:{originalSource:`args => ({
  components: {
    DTable,
    DBox,
    DBadge,
    DButton,
    DText,
    EyeFilledIcon
  },
  setup() {
    const columns = ref([{
      display: "ID",
      dataSelector: "ID",
      uppercase: true,
      sortable: true,
      filterable: true,
      sortNumerically: true,
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
      display: "Email",
      dataSelector: "Email",
      uppercase: true,
      filterable: true,
      width: "",
      minWidth: "",
      maxWidth: ""
    }, {
      display: "Created Date",
      dataSelector: "Date",
      uppercase: true,
      sortable: true,
      filterable: true,
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
      tenants: [],
      data: [],
      per_page: 10,
      currentPage: 1,
      totalPages: 1
    });
    onMounted(() => {
      const data = {
        data: [{
          id: 6456789,
          name: "A new program",
          website: "http://somethingcom.com",
          contact_name: "Jonathan Doe",
          contact_email: "eapriok+6378639478@gmail.com",
          status: "active",
          created_at: "2022-07-03T21:05:12.000000Z"
        }, {
          id: 109,
          name: "AfroTech",
          website: "https://afrotech.clm",
          contact_name: "Joseph A",
          contact_email: "joseph@renapay.com",
          status: "active",
          created_at: "2022-11-15T17:17:03.000000Z"
        }, {
          id: 24,
          name: "AiBuy",
          website: "https://aibuy.io",
          contact_name: null,
          contact_email: null,
          status: "active",
          created_at: "2022-04-06T19:06:47.000000Z"
        }, {
          id: 20,
          name: "aibuy-demo",
          website: "https://aibuy.com",
          contact_name: null,
          contact_email: null,
          status: "active",
          created_at: "2022-03-29T18:19:10.000000Z"
        }, {
          id: 72,
          name: "Alias vel nihil haru",
          website: "https://www.naxunenucimy.mobi",
          contact_name: "Voluptas et dolor no",
          contact_email: "kibaso@mailinator.com",
          status: "active",
          created_at: "2022-07-15T13:08:41.000000Z"
        }, {
          id: 30,
          name: "Anna Rogachyova",
          website: "https://aibuy.io",
          contact_name: null,
          contact_email: null,
          status: "active",
          created_at: "2022-04-08T12:46:21.000000Z"
        }, {
          id: 58,
          name: "Another Team",
          website: "https://www.deposits.com",
          contact_name: "John Doe",
          contact_email: "william+01@deposits.com",
          status: "active",
          created_at: "2022-06-30T21:49:42.000000Z"
        }, {
          id: 11,
          name: "Ben smith",
          website: "http://www.facebook.com",
          contact_name: null,
          contact_email: "",
          status: "active",
          created_at: "2021-10-28T11:50:02.000000Z"
        }, {
          id: 51,
          name: "Benode",
          website: "https://dsdsdsd.dsd",
          contact_name: "John Doe",
          contact_email: "b@b.com",
          status: "active",
          created_at: "2022-06-26T15:03:27.000000Z"
        }, {
          id: 49,
          name: "Bernode limited",
          website: "https://bernode.com",
          contact_name: "Bernar",
          contact_email: "bernard@gmail.com",
          status: "active",
          created_at: "2022-06-26T14:17:07.000000Z"
        }],
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
      state
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
})`,...(qe=(Ue=at.parameters)==null?void 0:Ue.docs)==null?void 0:qe.source}}};const tn=["ExtraHeadings","Default","ChangeColorForRow","DarkModeDefault","RowClicked","ExpandMode","ExpandModeWithSpecifiedExpandedColumns","Search","AsyncSearch","DarkModeSearch","Checkboxes","DarkModeCheckboxes","CustomizeView","CSVExport","AsyncCSVURLExport","AsyncCSVExport","Loading","ButtonActions","EmptyTableData","EmptyTableCustomSlot","DarkModeButtonActions","Pagination","MassiveDataPagination","DarkModePagination","RightPagination","DarkModeRightPagination","CustomComponent","DarkModeCustomComponent","PipedColumnExampleMultiplyQtyByTwo","OverflowTable","DarkModeOverflowTable","FixedColumnOverflowTable","FixedColumnOverflowTableWithCheckboxes","AsyncPaginationTable","ActionSitcomsTable","FixedActionSitcomsTable","FixedTooltipTable","AsyncTableUpdate","TestTableTemplate","TestTableTwo"];export{K as ActionSitcomsTable,v as AsyncCSVExport,N as AsyncCSVURLExport,V as AsyncPaginationTable,w as AsyncSearch,x as AsyncTableUpdate,D as ButtonActions,B as CSVExport,h as ChangeColorForRow,f as Checkboxes,F as CustomComponent,M as CustomizeView,H as DarkModeButtonActions,k as DarkModeCheckboxes,b as DarkModeCustomComponent,p as DarkModeDefault,E as DarkModeOverflowTable,L as DarkModePagination,R as DarkModeRightPagination,d as DarkModeSearch,u as Default,J as EmptyTableCustomSlot,P as EmptyTableData,U as ExpandMode,q as ExpandModeWithSpecifiedExpandedColumns,S as ExtraHeadings,G as FixedActionSitcomsTable,z as FixedColumnOverflowTable,j as FixedColumnOverflowTableWithCheckboxes,_ as FixedTooltipTable,Y as Loading,A as MassiveDataPagination,O as OverflowTable,W as Pagination,I as PipedColumnExampleMultiplyQtyByTwo,T as RightPagination,g as RowClicked,C as Search,tt as TestTableTemplate,at as TestTableTwo,tn as __namedExportsOrder,$e as default};
//# sourceMappingURL=DTable.stories-0e895bf0.js.map