import _ from"./inputtext.esm.f3f2de71.js";import u from"./textarea.esm.2c01e294.js";import h from"./fileupload.esm.2af57dc2.js";import{s as f}from"./dropdown.esm.ee79f348.js";import v from"./button.esm.e96d526b.js";import{Y as i,b,j as o,p as t,o as g}from"./entry.6aad99e7.js";import"./basecomponent.esm.412afc49.js";import"./index.esm.929b893b.js";import"./baseicon.esm.02bbc5b3.js";import"./index.esm.569a8cff.js";import"./message.esm.31d3d078.js";import"./index.esm.8a2d937c.js";import"./index.esm.5222617c.js";import"./index.esm.994363a5.js";import"./progressbar.esm.a0310345.js";import"./badge.esm.6f1a7f83.js";import"./index.esm.003214c5.js";import"./index.esm.6e0582ce.js";import"./overlayeventbus.esm.fc1332a8.js";import"./portal.esm.83ef037f.js";import"./virtualscroller.esm.762299b8.js";const S={class:"grid"},O={class:"col-12 md:col-10"},k={class:"card grid"},U={class:"col-12 md:col-8"},w=o("h5",null,"Raise Support Ticket",-1),x={class:"p-fluid formgrid grid"},T={class:"mt-4 p-fluid col-12"},V={class:"field grid"},B=o("label",{for:"name3",class:"col-12 mb-2 md:col-4 md:mb-0"},"Subject",-1),$={class:"col-12 md:col-8"},j={class:"field grid"},I={class:"field grid"},N=o("label",{for:"email3",class:"col-12 mb-2 md:col-4 md:mb-0"},"Select Attachment",-1),R={class:"col-12 md:col-8"},z={class:"col-12 md:col-4"},F={class:"p-fluid formgrid grid"},Y=o("h5",null,"Raise Support Ticket",-1),y={class:"mt-4 p-fluid col-12"},A={class:"field grid"},D=o("label",{for:"name3",class:"col-12 mb-2 md:col-4 md:mb-0"},"Subject",-1),E={class:"col-12 md:col-8"},L={class:"field grid col-12"},ro={__name:"Newticket",setup(M){const c=i([{name:"Option 1",code:"Option 1"},{name:"Option 2",code:"Option 2"},{name:"Option 3",code:"Option 3"}]),s=i(null);return(d,e)=>{const l=_,n=u,m=h,a=f,r=v;return g(),b("div",S,[o("div",O,[o("div",k,[o("div",U,[w,o("div",x,[o("div",T,[o("div",V,[B,o("div",$,[t(l,{id:"name3",type:"text"})])]),o("div",j,[t(n,{placeholder:"Your Message",autoResize:!0,rows:"3",cols:"30"})]),o("div",I,[N,o("div",R,[t(m,{mode:"basic",name:"demo[]",accept:"image/*",maxFileSize:1e6,onUploader:d.onUpload,customUpload:""},null,8,["onUploader"])])])])])]),o("div",z,[o("div",F,[Y,o("div",y,[o("div",A,[D,o("div",E,[t(a,{id:"state",modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=p=>s.value=p),options:c.value,optionLabel:"name",placeholder:"Select One"},null,8,["modelValue","options"])])]),o("div",L,[t(r,{label:"Submit Ticket"})])])])])])])])}}};export{ro as default};
