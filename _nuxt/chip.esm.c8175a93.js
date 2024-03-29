import{s as d}from"./index.esm.994363a5.js";import{s as u}from"./basecomponent.esm.412afc49.js";import{B as h,o as i,b as r,k as c,h as a,m as l,c as t,f as p,t as v}from"./entry.6aad99e7.js";import"./baseicon.esm.02bbc5b3.js";var y=`
@layer primevue {
    .p-chip {
        display: inline-flex;
        align-items: center;
    }

    .p-chip-text {
        line-height: 1.5;
    }

    .p-chip-icon.pi {
        line-height: 1.5;
    }

    .p-chip-remove-icon {
        line-height: 1.5;
        cursor: pointer;
    }

    .p-chip img {
        border-radius: 50%;
    }
}
`,f={root:function(n){var s=n.props;return["p-chip p-component",{"p-chip-image":s.image!=null}]},icon:"p-chip-icon",label:"p-chip-text",removeIcon:"p-chip-remove-icon"},b=h.extend({name:"chip",css:y,classes:f}),k={name:"BaseChip",extends:u,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:b,provide:function(){return{$parentInstance:this}}},g={name:"Chip",extends:k,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(n){(n.key==="Enter"||n.key==="Backspace")&&this.close(n)},close:function(n){this.visible=!1,this.$emit("remove",n)}},components:{TimesCircleIcon:d}},C=["aria-label"],w=["src"];function I(e,n,s,B,m,o){return m.visible?(i(),r("div",l({key:0,class:e.cx("root"),"aria-label":e.label},e.ptm("root"),{"data-pc-name":"chip"}),[c(e.$slots,"default",{},function(){return[e.image?(i(),r("img",l({key:0,src:e.image},e.ptm("image")),null,16,w)):e.$slots.icon?(i(),t(p(e.$slots.icon),l({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(i(),r("span",l({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):a("",!0),e.label?(i(),r("div",l({key:3,class:e.cx("label")},e.ptm("label")),v(e.label),17)):a("",!0)]}),e.removable?c(e.$slots,"removeicon",{key:0,onClick:o.close,onKeydown:o.onKeydown,removeCallback:o.close,keydownCallback:o.onKeydown},function(){return[(i(),t(p(e.removeIcon?"span":"TimesCircleIcon"),l({tabindex:"0",class:[e.cx("removeIcon"),e.removeIcon],onClick:o.close,onKeydown:o.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):a("",!0)],16,C)):a("",!0)}g.render=I;export{g as default};
