import p from"./button.esm.e96d526b.js";import{u}from"./layout.20f959cc.js";import{P as v}from"./ProductService.ed9696ca.js";import{Y as s,a0 as x,a1 as b,ai as f,r as g,b as h,j as e,p as l,q as y,l as _,P as a,o as w}from"./entry.6aad99e7.js";import"./badge.esm.6f1a7f83.js";import"./basecomponent.esm.412afc49.js";import"./index.esm.003214c5.js";import"./baseicon.esm.02bbc5b3.js";const k={class:"grid"},j={class:"col-12"},C=e("p",null," WELCOME TO QUICKHELP. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nemo unde optio laboriosam consequuntur? Rem obcaecati est non cupiditate laudantium, fugiat provident sunt sequi amet consequuntur fuga. Est, adipisci fugit? ",-1),L={class:"col-12 xl:col-4"},P={class:"card"},q={class:"flex justify-content-between align-items-center mb-5"},E=e("h5",{class:"text-green-500"},[e("i",{class:"pi pi-clock"}),_(" Active Loans & EWI ")],-1),T=a('<ul class="list-none p-0 m-0"><h6>Loan : 2250</h6></ul><ul class="list-none p-0 m-0"><li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"><div><span class="text-900 font-medium mr-2 mb-1 md:mb-0">450</span><div class="mt-1 text-600">30/01/2024</div></div><div class="mt-2 md:mt-0 flex align-items-center"><span class="text-green-500 ml-3 font-medium"><i class="pi pi-check"></i> Paid</span></div></li><li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"><div><span class="text-900 font-medium mr-2 mb-1 md:mb-0">450</span><div class="mt-1 text-600">30/02/2024</div></div><div class="mt-2 md:mt-0 flex align-items-center"><span class="text-orange-500 ml-3 font-medium"><i class="pi pi-times"></i> UnPaid</span></div></li></ul>',2),D=a('<div class="col-12 xl:col-8"><div class="card"><div class="grid"><div class="col-12 lg:col-6 xl:col-4"><div class="card mb-0"><div class="flex justify-content-between mb-3"><div><span class="block text-500 font-medium mb-3">Orders</span><div class="text-900 font-medium text-xl">152</div></div><div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem;"><i class="pi pi-shopping-cart text-blue-500 text-xl"></i></div></div><span class="text-green-500 font-medium">24 new </span><span class="text-500">since last visit</span></div></div><div class="col-12 lg:col-6 xl:col-4"><div class="card mb-0"><div class="flex justify-content-between mb-3"><div><span class="block text-500 font-medium mb-3">Revenue</span><div class="text-900 font-medium text-xl">$2.100</div></div><div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem;"><i class="pi pi-map-marker text-orange-500 text-xl"></i></div></div><span class="text-green-500 font-medium">%52+ </span><span class="text-500">since last week</span></div></div><div class="col-12 lg:col-6 xl:col-4"><div class="card mb-0"><div class="flex justify-content-between mb-3"><div><span class="block text-500 font-medium mb-3">Customers</span><div class="text-900 font-medium text-xl">28441</div></div><div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width:2.5rem;height:2.5rem;"><i class="pi pi-inbox text-cyan-500 text-xl"></i></div></div><span class="text-green-500 font-medium">520 </span><span class="text-500">newly registered</span></div></div><div class="col-12 lg:col-6 xl:col-4"><div class="card mb-0"><div class="flex justify-content-between mb-3"><div><span class="block text-500 font-medium mb-3">Comments</span><div class="text-900 font-medium text-xl">152 Unread</div></div><div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem;"><i class="pi pi-comment text-purple-500 text-xl"></i></div></div><span class="text-green-500 font-medium">85 </span><span class="text-500">responded</span></div></div><div class="col-12 lg:col-6 xl:col-4"><div class="card mb-0"><div class="flex justify-content-between mb-3"><div><span class="block text-500 font-medium mb-3">Comments</span><div class="text-900 font-medium text-xl">152 Unread</div></div><div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem;"><i class="pi pi-comment text-purple-500 text-xl"></i></div></div><span class="text-green-500 font-medium">85 </span><span class="text-500">responded</span></div></div><div class="col-12 lg:col-6 xl:col-4"><div class="card mb-0"><div class="flex justify-content-between mb-3"><div><span class="block text-500 font-medium mb-3">Comments</span><div class="text-900 font-medium text-xl">152 Unread</div></div><div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem;"><i class="pi pi-comment text-purple-500 text-xl"></i></div></div><span class="text-green-500 font-medium">85 </span><span class="text-500">responded</span></div></div></div></div></div>',1),F={__name:"dashboard",setup(N){const{isDarkTheme:n}=u(),c=s(null);x({labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:"#2f4860",borderColor:"#2f4860",tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:"#00bb7e",borderColor:"#00bb7e",tension:.4}]}),s([{label:"Add New",icon:"pi pi-fw pi-plus"},{label:"Remove",icon:"pi pi-fw pi-minus"}]);const i=s(null);b(()=>{v.getProductsSmall().then(t=>c.value=t)});const o=()=>{i.value={plugins:{legend:{labels:{color:"#495057"}}},scales:{x:{ticks:{color:"#495057"},grid:{color:"#ebedef"}},y:{ticks:{color:"#495057"},grid:{color:"#ebedef"}}}}},d=()=>{i.value={plugins:{legend:{labels:{color:"#ebedef"}}},scales:{x:{ticks:{color:"#ebedef"},grid:{color:"rgba(160, 167, 181, .3)"}},y:{ticks:{color:"#ebedef"},grid:{color:"rgba(160, 167, 181, .3)"}}}}};return f(n,t=>{t?d():o()},{immediate:!0}),(t,U)=>{const r=g("marquee"),m=p;return w(),h("div",k,[e("div",j,[l(r,{behavior:"scroll",direction:"left"},{default:y(()=>[C]),_:1})]),e("div",L,[e("div",P,[e("div",q,[E,l(m,{label:"Details",class:"p-button-success mr-2 mb-2"})]),T])]),D])}}};export{F as default};