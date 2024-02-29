import{s as j}from"./index.esm.d4e4206e.js";import{B as N,O as d,m as c,R as G,r as x,a as U,o as u,b as f,F as k,e as H,j as K,c as y,q,w as S,f as g,i as A,h as p,t as C,K as W,U as E,Z as w,D as v,k as L,p as F,n as Z,g as J}from"./entry.6aad99e7.js";import{s as V}from"./basecomponent.esm.412afc49.js";import{s as Q}from"./index.esm.1083768b.js";import{s as X}from"./index.esm.f820a38c.js";import"./baseicon.esm.02bbc5b3.js";var Y=`
@layer primevue {
    .p-menubar {
        display: flex;
        align-items: center;
    }

    .p-menubar ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-menubar .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-menubar .p-menuitem-text {
        line-height: 1;
    }

    .p-menubar .p-menuitem {
        position: relative;
    }

    .p-menubar-root-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .p-menubar-root-list > li ul {
        display: none;
        z-index: 1;
    }

    .p-menubar-root-list > .p-menuitem-active > .p-submenu-list {
        display: block;
    }

    .p-menubar .p-submenu-list {
        display: none;
        position: absolute;
        z-index: 1;
    }

    .p-menubar .p-submenu-list > .p-menuitem-active > .p-submenu-list {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-menubar .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link .p-submenu-icon {
        margin-left: auto;
    }

    .p-menubar .p-menubar-end {
        margin-left: auto;
        align-self: center;
    }

    .p-menubar-button {
        display: none;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }
}
`,_={submenu:function(e){var i=e.instance,s=e.processedItem;return{display:i.isItemActive(s)?"block":"none"}}},$={root:function(e){var i=e.instance;return["p-menubar p-component",{"p-menubar-mobile-active":i.mobileActive}]},start:"p-menubar-start",button:"p-menubar-button",menu:"p-menubar-root-list",menuitem:function(e){var i=e.instance,s=e.processedItem;return["p-menuitem",{"p-menuitem-active p-highlight":i.isItemActive(s),"p-focus":i.isItemFocused(s),"p-disabled":i.isItemDisabled(s)}]},content:"p-menuitem-content",action:function(e){var i=e.props,s=e.isActive,a=e.isExactActive;return["p-menuitem-link",{"router-link-active":s,"router-link-active-exact":i.exact&&a}]},icon:"p-menuitem-icon",label:"p-menuitem-text",submenuIcon:"p-submenu-icon",submenu:"p-submenu-list",separator:"p-menuitem-separator",end:"p-menubar-end"},ee=N.extend({name:"menubar",css:Y,classes:$,inlineStyles:_}),te={name:"BaseMenubar",extends:V,props:{model:{type:Array,default:null},exact:{type:Boolean,default:!0},buttonProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},style:ee,provide:function(){return{$parentInstance:this}}},M={name:"MenubarSub",hostName:"Menubar",extends:V,emits:["item-mouseenter","item-click"],props:{items:{type:Array,default:null},root:{type:Boolean,default:!1},popup:{type:Boolean,default:!1},mobileActive:{type:Boolean,default:!1},templates:{type:Object,default:null},exact:{type:Boolean,default:!0},level:{type:Number,default:0},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},activeItemPath:{type:Object,default:null}},list:null,methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,i,s){return e&&e.item?d.getItemValue(e.item[i],s):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,i,s){return this.ptm(s,{context:{item:e,index:i,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level}})},isItemActive:function(e){return this.activeItemPath.some(function(i){return i.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return d.isNotEmpty(e.items)},onItemClick:function(e,i){this.getItemProp(i,"command",{originalEvent:e,item:i.item}),this.$emit("item-click",{originalEvent:e,processedItem:i,isFocus:!0})},onItemMouseEnter:function(e,i){this.$emit("item-mouseenter",{originalEvent:e,processedItem:i})},onItemActionClick:function(e,i){i&&i(e)},getAriaSetSize:function(){var e=this;return this.items.filter(function(i){return e.isItemVisible(i)&&!e.getItemProp(i,"separator")}).length},getAriaPosInset:function(e){var i=this;return e-this.items.slice(0,e).filter(function(s){return i.isItemVisible(s)&&i.getItemProp(s,"separator")}).length+1},getMenuItemProps:function(e,i){return{action:c({class:this.cx("action"),tabindex:-1,"aria-hidden":!0},this.getPTOptions(e,i,"action")),icon:c({class:[this.cx("icon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,i,"icon")),label:c({class:this.cx("label")},this.getPTOptions(e,i,"label")),submenuicon:c({class:this.cx("submenuIcon")},this.getPTOptions(e,i,"submenuIcon"))}}},components:{AngleRightIcon:X,AngleDownIcon:Q},directives:{ripple:G}},ie=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-highlight","data-p-focused","data-p-disabled"],ne=["onClick","onMouseenter"],se=["href","onClick"],re=["href","target"],ae=["id"];function oe(t,e,i,s,a,n){var o=x("router-link"),h=x("MenubarSub",!0),I=U("ripple");return u(),f("ul",c({class:i.level===0?t.cx("menu"):t.cx("submenu")},i.level===0?t.ptm("menu"):t.ptm("submenu")),[(u(!0),f(k,null,H(i.items,function(r,l){return u(),f(k,{key:n.getItemKey(r)},[n.isItemVisible(r)&&!n.getItemProp(r,"separator")?(u(),f("li",c({key:0,id:n.getItemId(r),style:n.getItemProp(r,"style"),class:[t.cx("menuitem",{processedItem:r}),n.getItemProp(r,"class")],role:"menuitem","aria-label":n.getItemLabel(r),"aria-disabled":n.isItemDisabled(r)||void 0,"aria-expanded":n.isItemGroup(r)?n.isItemActive(r):void 0,"aria-haspopup":n.isItemGroup(r)&&!n.getItemProp(r,"to")?"menu":void 0,"aria-level":i.level+1,"aria-setsize":n.getAriaSetSize(),"aria-posinset":n.getAriaPosInset(l)},n.getPTOptions(r,l,"menuitem"),{"data-p-highlight":n.isItemActive(r),"data-p-focused":n.isItemFocused(r),"data-p-disabled":n.isItemDisabled(r)}),[K("div",c({class:t.cx("content"),onClick:function(b){return n.onItemClick(b,r)},onMouseenter:function(b){return n.onItemMouseEnter(b,r)}},n.getPTOptions(r,l,"content")),[i.templates.item?(u(),y(g(i.templates.item),{key:1,item:r.item,root:i.root,hasSubmenu:n.getItemProp(r,"items"),label:n.getItemLabel(r),props:n.getMenuItemProps(r,l)},null,8,["item","root","hasSubmenu","label","props"])):(u(),f(k,{key:0},[n.getItemProp(r,"to")&&!n.isItemDisabled(r)?(u(),y(o,{key:0,to:n.getItemProp(r,"to"),custom:""},{default:q(function(m){var b=m.navigate,B=m.href,T=m.isActive,z=m.isExactActive;return[S((u(),f("a",c({href:B,class:t.cx("action",{isActive:T,isExactActive:z}),tabindex:"-1","aria-hidden":"true",onClick:function(R){return n.onItemActionClick(R,b)}},n.getPTOptions(r,l,"action")),[i.templates.itemicon?(u(),y(g(i.templates.itemicon),{key:0,item:r.item,class:A([t.cx("icon"),n.getItemProp(r,"icon")])},null,8,["item","class"])):n.getItemProp(r,"icon")?(u(),f("span",c({key:1,class:[t.cx("icon"),n.getItemProp(r,"icon")]},n.getPTOptions(r,l,"icon")),null,16)):p("",!0),K("span",c({class:t.cx("label")},n.getPTOptions(r,l,"label")),C(n.getItemLabel(r)),17)],16,se)),[[I]])]}),_:2},1032,["to"])):S((u(),f("a",c({key:1,href:n.getItemProp(r,"url"),class:t.cx("action"),target:n.getItemProp(r,"target"),tabindex:"-1","aria-hidden":"true"},n.getPTOptions(r,l,"action")),[i.templates.itemicon?(u(),y(g(i.templates.itemicon),{key:0,item:r.item,class:A([t.cx("icon"),n.getItemProp(r,"icon")])},null,8,["item","class"])):n.getItemProp(r,"icon")?(u(),f("span",c({key:1,class:[t.cx("icon"),n.getItemProp(r,"icon")]},n.getPTOptions(r,l,"icon")),null,16)):p("",!0),K("span",c({class:t.cx("label")},n.getPTOptions(r,l,"label")),C(n.getItemLabel(r)),17),n.getItemProp(r,"items")?(u(),f(k,{key:2},[i.templates.submenuicon?(u(),y(g(i.templates.submenuicon),{key:0,root:i.root,active:n.isItemActive(r),class:A(t.cx("submenuIcon"))},null,8,["root","active","class"])):(u(),y(g(i.root?"AngleDownIcon":"AngleRightIcon"),c({key:1,class:t.cx("submenuIcon")},n.getPTOptions(r,l,"submenuIcon")),null,16,["class"]))],64)):p("",!0)],16,re)),[[I]])],64))],16,ne),n.isItemVisible(r)&&n.isItemGroup(r)?(u(),y(h,{key:0,menuId:i.menuId,role:"menu",style:W(t.sx("submenu",!0,{processedItem:r})),focusedItemId:i.focusedItemId,items:r.items,mobileActive:i.mobileActive,activeItemPath:i.activeItemPath,templates:i.templates,exact:i.exact,level:i.level+1,pt:t.pt,unstyled:t.unstyled,onItemClick:e[0]||(e[0]=function(m){return t.$emit("item-click",m)}),onItemMouseenter:e[1]||(e[1]=function(m){return t.$emit("item-mouseenter",m)})},null,8,["menuId","style","focusedItemId","items","mobileActive","activeItemPath","templates","exact","level","pt","unstyled"])):p("",!0)],16,ie)):p("",!0),n.isItemVisible(r)&&n.getItemProp(r,"separator")?(u(),f("li",c({key:1,id:n.getItemId(r),class:[t.cx("separator"),n.getItemProp(r,"class")],style:n.getItemProp(r,"style"),role:"separator"},t.ptm("separator")),null,16,ae)):p("",!0)],64)}),128))],16)}M.render=oe;var ue={name:"Menubar",extends:te,emits:["focus","blur"],data:function(){return{id:this.$attrs.id,mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],dirty:!1}},watch:{"$attrs.id":function(e){this.id=e||E()},activeItemPath:function(e){d.isNotEmpty(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},outsideClickListener:null,container:null,menubar:null,beforeMount:function(){this.$slots.item||console.warn("In future versions, vue-router support will be removed. Item templating should be used.")},mounted:function(){this.id=this.id||E()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.container&&w.clear(this.container),this.container=null},methods:{getItemProp:function(e,i){return e?d.getItemValue(e[i]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemGroup:function(e){return d.isNotEmpty(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&d.isNotEmpty(e.items)},toggle:function(e){var i=this;this.mobileActive?(this.mobileActive=!1,w.clear(this.menubar),this.hide()):(this.mobileActive=!0,w.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){i.show()},1)),this.bindOutsideClickListener(),e.preventDefault()},show:function(){this.focusedItemInfo={index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},v.focus(this.menubar)},hide:function(e,i){var s=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){v.focus(s.$refs.menubutton)},0)),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},i&&v.focus(this.menubar),this.dirty=!1},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){var i=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!i&&d.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e){var i=e.processedItem,s=e.isFocus;if(!d.isEmpty(i)){var a=i.index,n=i.key,o=i.level,h=i.parentKey,I=i.items,r=d.isNotEmpty(I),l=this.activeItemPath.filter(function(m){return m.parentKey!==h&&m.parentKey!==n});r&&l.push(i),this.focusedItemInfo={index:a,level:o,parentKey:h},this.activeItemPath=l,r&&(this.dirty=!0),s&&v.focus(this.menubar)}},onItemClick:function(e){var i=e.originalEvent,s=e.processedItem,a=this.isProccessedItemGroup(s),n=d.isEmpty(s.parent),o=this.isSelected(s);if(o){var h=s.index,I=s.key,r=s.level,l=s.parentKey;this.activeItemPath=this.activeItemPath.filter(function(b){return I!==b.key&&I.startsWith(b.key)}),this.focusedItemInfo={index:h,level:r,parentKey:l},this.dirty=!n,v.focus(this.menubar)}else if(a)this.onItemChange(e);else{var m=n?s:this.activeItemPath.find(function(b){return b.parentKey===""});this.hide(i),this.changeFocusedItemIndex(i,m?m.index:-1),this.mobileActive=!1,v.focus(this.menubar)}},onItemMouseEnter:function(e){!this.mobileActive&&this.dirty&&this.onItemChange(e)},menuButtonClick:function(e){this.toggle(e)},menuButtonKeydown:function(e){(e.code==="Enter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey:function(e){var i=this.visibleItems[this.focusedItemInfo.index],s=i?d.isEmpty(i.parent):null;if(s){var a=this.isProccessedItemGroup(i);a&&(this.onItemChange({originalEvent:e,processedItem:i}),this.focusedItemInfo={index:-1,parentKey:i.key},this.onArrowRightKey(e))}else{var n=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,n),e.preventDefault()}},onArrowUpKey:function(e){var i=this,s=this.visibleItems[this.focusedItemInfo.index],a=d.isEmpty(s.parent);if(a){var n=this.isProccessedItemGroup(s);if(n){this.onItemChange({originalEvent:e,processedItem:s}),this.focusedItemInfo={index:-1,parentKey:s.key};var o=this.findLastItemIndex();this.changeFocusedItemIndex(e,o)}}else{var h=this.activeItemPath.find(function(r){return r.key===s.parentKey});if(this.focusedItemInfo.index===0)this.focusedItemInfo={index:-1,parentKey:h?h.parentKey:""},this.searchValue="",this.onArrowLeftKey(e),this.activeItemPath=this.activeItemPath.filter(function(r){return r.parentKey!==i.focusedItemInfo.parentKey});else{var I=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,I)}}e.preventDefault()},onArrowLeftKey:function(e){var i=this,s=this.visibleItems[this.focusedItemInfo.index],a=s?this.activeItemPath.find(function(o){return o.key===s.parentKey}):null;if(a)this.onItemChange({originalEvent:e,processedItem:a}),this.activeItemPath=this.activeItemPath.filter(function(o){return o.parentKey!==i.focusedItemInfo.parentKey}),e.preventDefault();else{var n=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,n),e.preventDefault()}},onArrowRightKey:function(e){var i=this.visibleItems[this.focusedItemInfo.index],s=i?this.activeItemPath.find(function(o){return o.key===i.parentKey}):null;if(s){var a=this.isProccessedItemGroup(i);a&&(this.onItemChange({originalEvent:e,processedItem:i}),this.focusedItemInfo={index:-1,parentKey:i.key},this.onArrowDownKey(e))}else{var n=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,n),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var i=v.findSingle(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),s=i&&v.findSingle(i,'a[data-pc-section="action"]');s?s.click():i&&i.click();var a=this.visibleItems[this.focusedItemInfo.index],n=this.isProccessedItemGroup(a);!n&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){this.hide(e,!0),this.focusedItemInfo.index=this.findFirstFocusedItemIndex(),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var i=this.visibleItems[this.focusedItemInfo.index],s=this.isProccessedItemGroup(i);!s&&this.onItemChange({originalEvent:e,processedItem:i})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(i){var s=e.menubar&&!e.menubar.contains(i.target),a=e.mobileActive&&e.$refs.menubutton?e.$refs.menubutton!==i.target&&!e.$refs.menubutton.contains(i.target):!0;a&&s&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(i){v.isTouchDevice()||e.hide(i,!0),e.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isItemMatched:function(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(i){return i.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(i){return e.isValidItem(i)})},findLastItemIndex:function(){var e=this;return d.findLastIndex(this.visibleItems,function(i){return e.isValidItem(i)})},findNextItemIndex:function(e){var i=this,s=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(a){return i.isValidItem(a)}):-1;return s>-1?s+e+1:e},findPrevItemIndex:function(e){var i=this,s=e>0?d.findLastIndex(this.visibleItems.slice(0,e),function(a){return i.isValidItem(a)}):-1;return s>-1?s:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(i){return e.isValidSelectedItem(i)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,i){var s=this;this.searchValue=(this.searchValue||"")+i;var a=-1,n=!1;return this.focusedItemInfo.index!==-1?(a=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(o){return s.isItemMatched(o)}),a=a===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(o){return s.isItemMatched(o)}):a+this.focusedItemInfo.index):a=this.visibleItems.findIndex(function(o){return s.isItemMatched(o)}),a!==-1&&(n=!0),a===-1&&this.focusedItemInfo.index===-1&&(a=this.findFirstFocusedItemIndex()),a!==-1&&this.changeFocusedItemIndex(e,a),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){s.searchValue="",s.searchTimeout=null},500),n},changeFocusedItemIndex:function(e,i){this.focusedItemInfo.index!==i&&(this.focusedItemInfo.index=i,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,i=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemId,s=v.findSingle(this.menubar,'li[id="'.concat(i,'"]'));s&&s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var i=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",o=[];return e&&e.forEach(function(h,I){var r=(n!==""?n+"_":"")+I,l={item:h,index:I,level:s,key:r,parent:a,parentKey:n};l.items=i.createProcessedItems(h.items,s+1,l,r),o.push(l)}),o},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,i=this.activeItemPath.find(function(s){return s.key===e.focusedItemInfo.parentKey});return i?i.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.id).concat(d.isNotEmpty(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{MenubarSub:M,BarsIcon:j}};function P(t){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(t)}function O(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),i.push.apply(i,s)}return i}function D(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?O(Object(i),!0).forEach(function(s){le(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):O(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function le(t,e,i){return e=ce(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function ce(t){var e=me(t,"string");return P(e)==="symbol"?e:String(e)}function me(t,e){if(P(t)!=="object"||t===null)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,e||"default");if(P(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var de=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function fe(t,e,i,s,a,n){var o,h=x("BarsIcon"),I=x("MenubarSub");return u(),f("div",c({ref:n.containerRef,class:t.cx("root")},t.ptm("root")),[t.$slots.start?(u(),f("div",c({key:0,class:t.cx("start")},t.ptm("start")),[L(t.$slots,"start")],16)):p("",!0),t.model&&t.model.length>0?(u(),f("a",c({key:1,ref:"menubutton",role:"button",tabindex:"0",class:t.cx("button"),"aria-haspopup":!!(t.model.length&&t.model.length>0),"aria-expanded":a.mobileActive,"aria-controls":a.id,"aria-label":(o=t.$primevue.config.locale.aria)===null||o===void 0?void 0:o.navigation,onClick:e[0]||(e[0]=function(r){return n.menuButtonClick(r)}),onKeydown:e[1]||(e[1]=function(r){return n.menuButtonKeydown(r)})},D(D({},t.buttonProps),t.ptm("button"))),[L(t.$slots,"popupicon",{},function(){return[F(h,Z(J(t.ptm("popupIcon"))),null,16)]})],16,de)):p("",!0),F(I,{ref:n.menubarRef,id:a.id,role:"menubar",items:n.processedItems,templates:t.$slots,root:!0,mobileActive:a.mobileActive,tabindex:"0","aria-activedescendant":a.focused?n.focusedItemId:void 0,menuId:a.id,focusedItemId:a.focused?n.focusedItemId:void 0,activeItemPath:a.activeItemPath,exact:t.exact,level:0,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,pt:t.pt,unstyled:t.unstyled,onFocus:n.onFocus,onBlur:n.onBlur,onKeydown:n.onKeyDown,onItemClick:n.onItemClick,onItemMouseenter:n.onItemMouseEnter},null,8,["id","items","templates","mobileActive","aria-activedescendant","menuId","focusedItemId","activeItemPath","exact","aria-labelledby","aria-label","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"]),t.$slots.end?(u(),f("div",c({key:2,class:t.cx("end")},t.ptm("end")),[L(t.$slots,"end")],16)):p("",!0)],16)}ue.render=fe;export{ue as default};
