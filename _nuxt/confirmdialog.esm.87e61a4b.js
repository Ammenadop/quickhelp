import B from"./button.esm.e96d526b.js";import{B as L,S as s,r as g,o as a,c as m,v as p,q as r,k as l,p as j,i as u,j as d,m as f,b,F as v,f as k,h as C,t as S}from"./entry.6aad99e7.js";import D from"./dialog.esm.654e38e2.js";import{s as F}from"./basecomponent.esm.412afc49.js";import"./badge.esm.6f1a7f83.js";import"./index.esm.003214c5.js";import"./baseicon.esm.02bbc5b3.js";import"./index.esm.569a8cff.js";import"./portal.esm.83ef037f.js";var I={root:"p-confirm-dialog",icon:function(n){var o=n.instance;return["p-confirm-dialog-icon",o.confirmation?o.confirmation.icon:null]},message:"p-confirm-dialog-message",rejectButton:function(n){var o=n.instance;return["p-confirm-dialog-reject",o.confirmation&&!o.confirmation.rejectClass?"p-button-text":null]},acceptButton:"p-confirm-dialog-accept"},O=L.extend({name:"confirmdialog",classes:I}),E={name:"BaseConfirmDialog",extends:F,props:{group:String,breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0}},style:O,provide:function(){return{$parentInstance:this}}},H={name:"ConfirmDialog",extends:E,confirmListener:null,closeListener:null,data:function(){return{visible:!1,confirmation:null}},mounted:function(){var n=this;this.confirmListener=function(o){o&&o.group===n.group&&(n.confirmation=o,n.confirmation.onShow&&n.confirmation.onShow(),n.visible=!0)},this.closeListener=function(){n.visible=!1,n.confirmation=null},s.on("confirm",this.confirmListener),s.on("close",this.closeListener)},beforeUnmount:function(){s.off("confirm",this.confirmListener),s.off("close",this.closeListener)},methods:{accept:function(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject:function(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onHide:function(){this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1},getCXOptions:function(n,o){return{contenxt:{icon:n,iconClass:o.class}}}},computed:{header:function(){return this.confirmation?this.confirmation.header:null},message:function(){return this.confirmation?this.confirmation.message:null},blockScroll:function(){return this.confirmation?this.confirmation.blockScroll:!0},position:function(){return this.confirmation?this.confirmation.position:null},acceptLabel:function(){return this.confirmation?this.confirmation.acceptLabel||this.$primevue.config.locale.accept:null},rejectLabel:function(){return this.confirmation?this.confirmation.rejectLabel||this.$primevue.config.locale.reject:null},acceptIcon:function(){return this.confirmation?this.confirmation.acceptIcon:null},rejectIcon:function(){return this.confirmation?this.confirmation.rejectIcon:null},autoFocusAccept:function(){return this.confirmation.defaultFocus===void 0||this.confirmation.defaultFocus==="accept"},autoFocusReject:function(){return this.confirmation.defaultFocus==="reject"},closeOnEscape:function(){return this.confirmation?this.confirmation.closeOnEscape:!0}},components:{CDialog:D,CDButton:B}};function A(e,n,o,R,i,t){var h=g("CDButton"),y=g("CDialog");return a(),m(y,{visible:i.visible,"onUpdate:visible":[n[2]||(n[2]=function(c){return i.visible=c}),t.onHide],role:"alertdialog",class:u(e.cx("root")),modal:!0,header:t.header,blockScroll:t.blockScroll,position:t.position,breakpoints:e.breakpoints,closeOnEscape:t.closeOnEscape,draggable:e.draggable,pt:e.pt,unstyled:e.unstyled},p({default:r(function(){return[e.$slots.container?C("",!0):(a(),b(v,{key:0},[e.$slots.message?(a(),m(k(e.$slots.message),{key:1,message:i.confirmation},null,8,["message"])):(a(),b(v,{key:0},[l(e.$slots,"icon",{},function(){return[e.$slots.icon?(a(),m(k(e.$slots.icon),{key:0,class:u(e.cx("icon"))},null,8,["class"])):i.confirmation.icon?(a(),b("span",f({key:1,class:e.cx("icon")},e.ptm("icon")),null,16)):C("",!0)]}),d("span",f({class:e.cx("message")},e.ptm("message")),S(t.message),17)],64))],64))]}),_:2},[e.$slots.container?{name:"container",fn:r(function(c){return[l(e.$slots,"container",{message:i.confirmation,onClose:c.onClose,onAccept:t.accept,onReject:t.reject,closeCallback:c.onclose,acceptCallback:t.accept,rejectCallback:t.reject})]}),key:"0"}:void 0,e.$slots.container?void 0:{name:"footer",fn:r(function(){return[j(h,{label:t.rejectLabel,class:u([e.cx("rejectButton"),i.confirmation.rejectClass]),onClick:n[0]||(n[0]=function(c){return t.reject()}),autofocus:t.autoFocusReject,unstyled:e.unstyled,pt:e.ptm("rejectButton"),"data-pc-name":"rejectbutton"},p({_:2},[t.rejectIcon||e.$slots.rejecticon?{name:"icon",fn:r(function(c){return[l(e.$slots,"rejecticon",{},function(){return[d("span",f({class:[t.rejectIcon,c.class]},e.ptm("rejectButton").icon,{"data-pc-name":"rejectbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1032,["label","class","autofocus","unstyled","pt"]),j(h,{label:t.acceptLabel,class:u([e.cx("acceptButton"),i.confirmation.acceptClass]),onClick:n[1]||(n[1]=function(c){return t.accept()}),autofocus:t.autoFocusAccept,unstyled:e.unstyled,pt:e.ptm("acceptButton"),"data-pc-name":"acceptbutton"},p({_:2},[t.acceptIcon||e.$slots.accepticon?{name:"icon",fn:r(function(c){return[l(e.$slots,"accepticon",{},function(){return[d("span",f({class:[t.acceptIcon,c.class]},e.ptm("acceptButton").icon,{"data-pc-name":"acceptbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1032,["label","class","autofocus","unstyled","pt"])]}),key:"1"}]),1032,["visible","class","header","blockScroll","position","breakpoints","closeOnEscape","draggable","onUpdate:visible","pt","unstyled"])}H.render=A;export{H as default};