import F from"./toast.esm.943b6d49.js";import E from"./button.esm.e96d526b.js";import W from"./toolbar.esm.3d4170d3.js";import Z from"./inputtext.esm.f3f2de71.js";import G from"./column.esm.8350cfc3.js";import H from"./datatable.esm.eab58f56.js";import J from"./dialog.esm.654e38e2.js";import{$ as Q,a4 as R,Y as c,a1 as X,b as v,j as l,p as a,q as s,o as f,l as y,t as g,i as C,h as _,N as ee,a2 as te,a3 as le}from"./entry.6aad99e7.js";import"./portal.esm.83ef037f.js";import"./basecomponent.esm.412afc49.js";import"./index.esm.8a2d937c.js";import"./baseicon.esm.02bbc5b3.js";import"./index.esm.5222617c.js";import"./index.esm.569a8cff.js";import"./index.esm.994363a5.js";import"./badge.esm.6f1a7f83.js";import"./index.esm.003214c5.js";import"./paginator.esm.c2f79db7.js";import"./index.esm.9ac7ece1.js";import"./dropdown.esm.ee79f348.js";import"./index.esm.6e0582ce.js";import"./overlayeventbus.esm.fc1332a8.js";import"./virtualscroller.esm.762299b8.js";import"./inputnumber.esm.985dfb8c.js";import"./index.esm.1083768b.js";import"./index.esm.2ad8480a.js";import"./index.esm.f820a38c.js";import"./index.esm.eeaec505.js";import"./index.esm.d4e4206e.js";import"./index.esm.929b893b.js";import"./index.esm.389513f2.js";const n=x=>(te("data-v-ef34a6e0"),x=x(),le(),x),ae={class:"grid"},oe={class:"col-12"},se={class:"card"},ie={class:"my-2"},ne={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},ue=n(()=>l("h5",{class:"m-0"},"Manage Vehicles",-1)),de={class:"block mt-2 md:mt-0 p-input-icon-left"},ce=n(()=>l("i",{class:"pi pi-search"},null,-1)),re=n(()=>l("span",{class:"p-column-title"},"Name",-1)),me=n(()=>l("span",{class:"p-column-title"},"Image",-1)),pe=["src","alt"],ve=n(()=>l("span",{class:"p-column-title"},"Plate No.",-1)),fe=n(()=>l("span",{class:"p-column-title"},"Color",-1)),_e=n(()=>l("span",{class:"p-column-title"},"Location",-1)),he=n(()=>l("span",{class:"p-column-title"},"Status",-1)),be=n(()=>l("span",{class:"p-column-title"},"Actions",-1)),ye=["src","alt"],ge={class:"field"},Se=n(()=>l("label",{for:"name"},"Name",-1)),we={key:0,class:"p-invalid"},ke={class:"field"},Ce=n(()=>l("label",{for:"name"},"Plate Number",-1)),xe={key:0,class:"p-invalid"},Ve={class:"field"},Ne=n(()=>l("label",{for:"name"},"Color",-1)),De={key:0,class:"p-invalid"},Ie={class:"field"},Ue=n(()=>l("label",{for:"name"},"Current Location",-1)),Me={key:0,class:"p-invalid"},Te=["alt"],Pe={class:"flex align-items-center justify-content-center"},$e=n(()=>l("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1)),qe={key:0},Oe={class:"flex align-items-center justify-content-center"},Le=n(()=>l("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1)),Ae={key:0},je={__name:"Vehicles",setup(x){const V=R(),r=c(null),h=c(!1),S=c(!1),w=c(!1),e=c({}),b=c(null),U=c(null),N=c({global:{value:null,matchMode:ee.CONTAINS}}),u=c(!1);c([{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}]),X(()=>{});const M=i=>i.toLocaleString("en-US",{style:"currency",currency:"USD"}),T=()=>{e.value={},u.value=!1,h.value=!0},P=()=>{h.value=!1,u.value=!1},$=()=>{u.value=!0,e.value.name&&e.value.name.trim()&&e.value.price&&(e.value.id?(e.value.inventoryStatus=e.value.inventoryStatus.value?e.value.inventoryStatus.value:e.value.inventoryStatus,r.value[A(e.value.id)]=e.value,V.add({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):(e.value.id=I(),e.value.code=I(),e.value.image="product-placeholder.svg",e.value.inventoryStatus=e.value.inventoryStatus?e.value.inventoryStatus.value:"INSTOCK",r.value.push(e.value),V.add({severity:"success",summary:"Successful",detail:"Product Created",life:3e3})),h.value=!1,e.value={})},q=i=>{e.value={...i},h.value=!0},O=i=>{e.value=i,S.value=!0},L=()=>{r.value=r.value.filter(i=>i.id!==e.value.id),S.value=!1,e.value={},V.add({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3})},A=i=>{let o=-1;for(let m=0;m<r.value.length;m++)if(r.value[m].id===i){o=m;break}return o},I=()=>{let i="";const o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let m=0;m<5;m++)i+=o.charAt(Math.floor(Math.random()*o.length));return i},j=()=>{w.value=!0},B=()=>{r.value=r.value.filter(i=>!b.value.includes(i)),w.value=!1,b.value=null,V.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})};return(i,o)=>{const m=F,d=E,K=W,k=Z,p=G,z=H,D=J;return f(),v("div",ae,[l("div",oe,[l("div",se,[a(m),a(K,{class:"mb-4"},{start:s(()=>[l("div",ie,[a(d,{label:"New",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:T}),a(d,{label:"Delete",icon:"pi pi-trash",class:"p-button-danger",onClick:j,disabled:!b.value||!b.value.length},null,8,["disabled"])])]),_:1}),a(z,{ref_key:"dt",ref:U,selection:b.value,"onUpdate:selection":o[1]||(o[1]=t=>b.value=t),value:r.value,dataKey:"id",paginator:!1,filters:N.value},{header:s(()=>[l("div",ne,[ue,l("span",de,[ce,a(k,{modelValue:N.value.global.value,"onUpdate:modelValue":o[0]||(o[0]=t=>N.value.global.value=t),placeholder:"Search..."},null,8,["modelValue"])])])]),default:s(()=>[a(p,{selectionMode:"multiple",headerStyle:"width: 3rem"}),a(p,{field:"name",header:"Name",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:s(t=>[re,y(" "+g(t.data.name),1)]),_:1}),a(p,{header:"Image",headerStyle:"width:14%; min-width:10rem;"},{body:s(t=>[me,l("img",{src:t.data.image,alt:t.data.image,class:"shadow-2",width:"100"},null,8,pe)]),_:1}),a(p,{field:"plate",header:"Plate No.",headerStyle:"width:14%; min-width:10rem;",sortable:!0},{body:s(t=>[ve,y(" "+g(t.data.plateno),1)]),_:1}),a(p,{field:"color",header:"Color",headerStyle:"width:14%; min-width:10rem;"},{body:s(t=>[fe,y(" "+g(t.data.color),1)]),_:1}),a(p,{field:"location",header:"Location",headerStyle:"width:14%; min-width:8rem;"},{body:s(t=>[_e,y(" "+g(M(t.data.clocation)),1)]),_:1}),a(p,{field:"inventoryStatus",header:"Status",headerStyle:"width:14%; min-width:10rem;"},{body:s(t=>[he,l("span",{class:C("product-badge status-"+(t.data.status?t.data.status.toLowerCase():""))},g(t.data.status),3)]),_:1}),a(p,{headerStyle:"min-width:10rem;",header:"Actions"},{body:s(t=>[be,a(d,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:Y=>q(t.data)},null,8,["onClick"]),a(d,{icon:"pi pi-trash",class:"p-button-rounded p-button-warning mt-2",onClick:Y=>O(t.data)},null,8,["onClick"])]),_:1})]),_:1},8,["selection","value","filters"]),a(D,{visible:h.value,"onUpdate:visible":o[6]||(o[6]=t=>h.value=t),style:{width:"550px"},header:"Vehicle Detail",modal:!0,class:"p-fluid"},{footer:s(()=>[a(d,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:P}),a(d,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:$})]),default:s(()=>[e.value.image?(f(),v("img",{key:0,src:"/demo/images/product/"+e.value.image,alt:e.value.image,width:"150",class:"mt-0 mx-auto mb-5 block shadow-2"},null,8,ye)):_("",!0),l("div",ge,[Se,a(k,{id:"name",modelValue:e.value.name,"onUpdate:modelValue":o[2]||(o[2]=t=>e.value.name=t),modelModifiers:{trim:!0},required:"true",autofocus:"",class:C({"p-invalid":u.value&&!e.value.name})},null,8,["modelValue","class"]),u.value&&!e.value.name?(f(),v("small",we,"Name is required.")):_("",!0)]),l("div",ke,[Ce,a(k,{id:"name",modelValue:e.value.plateno,"onUpdate:modelValue":o[3]||(o[3]=t=>e.value.plateno=t),modelModifiers:{trim:!0},required:"true",autofocus:"",class:C({"p-invalid":u.value&&!e.value.plateno})},null,8,["modelValue","class"]),u.value&&!e.value.plateno?(f(),v("small",xe,"Name is required.")):_("",!0)]),l("div",Ve,[Ne,a(k,{id:"name",modelValue:e.value.color,"onUpdate:modelValue":o[4]||(o[4]=t=>e.value.color=t),modelModifiers:{trim:!0},required:"true",autofocus:"",class:C({"p-invalid":u.value&&!e.value.color})},null,8,["modelValue","class"]),u.value&&!e.value.color?(f(),v("small",De,"Name is required.")):_("",!0)]),l("div",Ie,[Ue,a(k,{id:"name",modelValue:e.value.clocation,"onUpdate:modelValue":o[5]||(o[5]=t=>e.value.clocation=t),modelModifiers:{trim:!0},required:"true",autofocus:"",class:C({"p-invalid":u.value&&!e.value.clocation})},null,8,["modelValue","class"]),u.value&&!e.value.clocation?(f(),v("small",Me,"Name is required.")):_("",!0)]),l("img",{src:"https://www.epa.gov/sites/default/files/styles/medium/public/2015-07/mvac.jpg?itok=tZYzLCfp",alt:e.value.image,width:"350",class:"mt-0 mb-5 block"},null,8,Te)]),_:1},8,["visible"]),a(D,{visible:S.value,"onUpdate:visible":o[8]||(o[8]=t=>S.value=t),style:{width:"450px"},header:"Confirm",modal:!0},{footer:s(()=>[a(d,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:o[7]||(o[7]=t=>S.value=!1)}),a(d,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:L})]),default:s(()=>[l("div",Pe,[$e,e.value?(f(),v("span",qe,[y("Are you sure you want to delete "),l("b",null,g(e.value.name),1),y("?")])):_("",!0)])]),_:1},8,["visible"]),a(D,{visible:w.value,"onUpdate:visible":o[10]||(o[10]=t=>w.value=t),style:{width:"450px"},header:"Confirm",modal:!0},{footer:s(()=>[a(d,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:o[9]||(o[9]=t=>w.value=!1)}),a(d,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:B})]),default:s(()=>[l("div",Oe,[Le,e.value?(f(),v("span",Ae,"Are you sure you want to delete the selected products?")):_("",!0)])]),_:1},8,["visible"])])])])}}},ht=Q(je,[["__scopeId","data-v-ef34a6e0"]]);export{ht as default};
