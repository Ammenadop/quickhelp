import B from"./button.esm.e96d526b.js";import{s as h}from"./index.esm.6e0582ce.js";import S from"./tieredmenu.esm.dfc11b10.js";import{B as w,U as g,r as b,o as c,b as C,k as r,p as d,q as a,i as m,c as $,f as I,m as s,v as k,j as D}from"./entry.6aad99e7.js";import{s as P}from"./basecomponent.esm.412afc49.js";import"./badge.esm.6f1a7f83.js";import"./index.esm.003214c5.js";import"./baseicon.esm.02bbc5b3.js";import"./overlayeventbus.esm.fc1332a8.js";import"./portal.esm.83ef037f.js";import"./index.esm.f820a38c.js";function p(t){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(t)}function i(t,e,n){return e=z(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function z(t){var e=V(t,"string");return p(e)==="symbol"?e:String(e)}function V(t,e){if(p(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var u=n.call(t,e||"default");if(p(u)!=="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Z=`
@layer primevue {
    .p-splitbutton {
        display: inline-flex;
        position: relative;
    }

    .p-splitbutton .p-splitbutton-defaultbutton,
    .p-splitbutton.p-button-rounded > .p-splitbutton-defaultbutton.p-button,
    .p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button {
        flex: 1 1 auto;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 0 none;
    }

    .p-splitbutton-menubutton,
    .p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button,
    .p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .p-splitbutton .p-menu {
        min-width: 100%;
    }

    .p-fluid .p-splitbutton {
        display: flex;
    }
}
`,E={root:function(e){var n,u=e.props;return["p-splitbutton p-component",(n={},i(n,"p-button-".concat(u.severity),u.severity),i(n,"p-button-raised",u.raised),i(n,"p-button-rounded",u.rounded),i(n,"p-button-text",u.text),i(n,"p-button-outlined",u.outlined),i(n,"p-button-sm",u.size==="small"),i(n,"p-button-lg",u.size==="large"),n)]},button:"p-splitbutton-defaultbutton",menuButton:"p-splitbutton-menubutton"},T=w.extend({name:"splitbutton",css:Z,classes:E}),K={name:"BaseSplitButton",extends:P,props:{label:{type:String,default:null},icon:{type:String,default:null},model:{type:Array,default:null},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},appendTo:{type:String,default:"body"},disabled:{type:Boolean,default:!1},class:{type:null,default:null},style:{type:null,default:null},buttonProps:{type:null,default:null},menuButtonProps:{type:null,default:null},menuButtonIcon:{type:String,default:void 0},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},style:T,provide:function(){return{$parentInstance:this}}},N={name:"SplitButton",extends:K,emits:["click"],data:function(){return{isExpanded:!1}},mounted:function(){var e=this;this.$watch("$refs.menu.visible",function(n){e.isExpanded=n})},methods:{onDropdownButtonClick:function(e){e&&e.preventDefault(),this.$refs.menu.toggle({currentTarget:this.$el,relatedTarget:this.$refs.button.$el}),this.isExpanded=this.$refs.menu.visible},onDropdownKeydown:function(e){(e.code==="ArrowDown"||e.code==="ArrowUp")&&(this.onDropdownButtonClick(),e.preventDefault())},onDefaultButtonClick:function(e){this.isExpanded&&this.$refs.menu.hide(e),this.$emit("click",e)}},computed:{ariaId:function(){return g()},containerClass:function(){return[this.cx("root"),this.class]}},components:{PVSButton:B,PVSMenu:S,ChevronDownIcon:h}},A=["data-pc-severity"];function M(t,e,n,u,y,l){var f=b("PVSButton"),v=b("PVSMenu");return c(),C("div",s({class:l.containerClass,style:t.style},t.ptm("root"),{"data-pc-name":"splitbutton","data-pc-severity":t.severity}),[r(t.$slots,"default",{},function(){return[d(f,s({type:"button",class:t.cx("button"),label:t.label,disabled:t.disabled,severity:t.severity,text:t.text,outlined:t.outlined,size:t.size,"aria-label":t.label,onClick:l.onDefaultButtonClick,pt:t.ptm("button")},t.buttonProps,{unstyled:t.unstyled,"data-pc-section":"button"}),{icon:a(function(o){return[r(t.$slots,"icon",{class:m(o.class)},function(){return[D("span",s({class:[t.icon,o.class]},t.ptm("button").icon,{"data-pc-section":"buttonicon"}),null,16)]})]}),default:a(function(){return[r(t.$slots,"buttoncontent")]}),_:3},16,["class","label","disabled","severity","text","outlined","size","aria-label","onClick","pt","unstyled"])]}),d(f,s({ref:"button",type:"button",class:t.cx("menuButton"),disabled:t.disabled,"aria-haspopup":"true","aria-expanded":y.isExpanded,"aria-controls":l.ariaId+"_overlay",onClick:l.onDropdownButtonClick,onKeydown:l.onDropdownKeydown,pt:t.ptm("menuButton"),severity:t.severity,text:t.text,outlined:t.outlined,size:t.size},t.menuButtonProps,{unstyled:t.unstyled,"data-pc-section":"menubutton"}),{icon:a(function(o){return[r(t.$slots,"menubuttonicon",{class:m(o.class)},function(){return[(c(),$(I(t.menuButtonIcon?"span":"ChevronDownIcon"),s({class:[t.menuButtonIcon,o.class]},t.ptm("menuButton").icon,{"data-pc-section":"menubuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-expanded","aria-controls","onClick","onKeydown","pt","severity","text","outlined","size","unstyled"]),d(v,{ref:"menu",id:l.ariaId+"_overlay",model:t.model,popup:!0,autoZIndex:t.autoZIndex,baseZIndex:t.baseZIndex,appendTo:t.appendTo,unstyled:t.unstyled,pt:t.ptm("menu")},k({_:2},[t.$slots.menuitemicon?{name:"itemicon",fn:a(function(o){return[r(t.$slots,"menuitemicon",{item:o.item,class:m(o.class)})]}),key:"0"}:void 0,t.$slots.item?{name:"item",fn:a(function(o){return[r(t.$slots,"item",{item:o.item,hasSubmenu:o.hasSubmenu,label:o.label,props:o.props})]}),key:"1"}:void 0]),1032,["id","model","autoZIndex","baseZIndex","appendTo","unstyled","pt"])],16,A)}N.render=M;export{N as default};
