import{s as l}from"./basecomponent.esm.412afc49.js";import{B as p,o,b as c,k as r,j as m,m as i,c as u,f as d,l as f}from"./entry.6aad99e7.js";import{s as v}from"./index.esm.8a2d937c.js";import{s as g,a as y}from"./index.esm.5222617c.js";import{s as $}from"./index.esm.994363a5.js";import"./baseicon.esm.02bbc5b3.js";var h=`
@layer primevue {
    .p-inline-message {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: top;
    }
    
    .p-inline-message-icon {
        flex-shrink: 0;
    }

    .p-inline-message-icon-only .p-inline-message-text {
        visibility: hidden;
        width: 0;
    }

    .p-fluid .p-inline-message {
        display: flex;
    }
}
`,x={root:function(n){var s=n.props,t=n.instance;return["p-inline-message p-component p-inline-message-"+s.severity,{"p-inline-message-icon-only":!t.$slots.default}]},icon:function(n){var s=n.props;return["p-inline-message-icon",s.icon]},text:"p-inline-message-text"},B=p.extend({name:"inlinemessage",css:h,classes:x}),k={name:"BaseInlineMessage",extends:l,props:{severity:{type:String,default:"error"},icon:{type:String,default:void 0}},style:B,provide:function(){return{$parentInstance:this}}},S={name:"InlineMessage",extends:k,timeout:null,data:function(){return{visible:!0}},mounted:function(){var n=this;this.sticky||setTimeout(function(){n.visible=!1},this.life)},computed:{iconComponent:function(){return{info:g,success:v,warn:y,error:$}[this.severity]}}};function b(e,n,s,t,C,a){return o(),c("div",i({"aria-live":"polite",class:e.cx("root")},e.ptm("root")),[r(e.$slots,"icon",{},function(){return[(o(),u(d(e.icon?"span":a.iconComponent),i({class:e.cx("icon")},e.ptm("icon")),null,16,["class"]))]}),m("span",i({class:e.cx("text")},e.ptm("text")),[r(e.$slots,"default",{},function(){return[f(" ")]})],16)],16)}S.render=b;export{S as default};
