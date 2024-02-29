import{B as O,D as c,m as d,R as D,r as E,a as F,o,b as u,j as h,F as T,e as M,c as m,q as S,w,f as v,i as P,h as g,t as A}from"./entry.6aad99e7.js";import{s as B}from"./basecomponent.esm.412afc49.js";var L=`
@layer primevue {
    .p-tabmenu {
        overflow-x: auto;
    }

    .p-tabmenu-nav {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
        flex-wrap: nowrap;
    }

    .p-tabmenu-nav a {
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        position: relative;
        text-decoration: none;
        text-decoration: none;
        overflow: hidden;
    }

    .p-tabmenu-nav a:focus {
        z-index: 1;
    }

    .p-tabmenu-nav .p-menuitem-text {
        line-height: 1;
    }

    .p-tabmenu-ink-bar {
        display: none;
        z-index: 1;
    }

    .p-tabmenu::-webkit-scrollbar {
        display: none;
    }
}
`,N={root:"p-tabmenu p-component",menu:"p-tabmenu-nav p-reset",menuitem:function(e){var n=e.instance,r=e.props,l=e.index,i=e.item,I=e.isActive,p=e.isExactActive;return["p-tabmenuitem",{"p-highlight":(r.exact?p:I)||n.d_activeIndex===l,"p-disabled":n.disabled(i)}]},action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text",inkbar:"p-tabmenu-ink-bar"},$=O.extend({name:"tabmenu",css:L,classes:N}),z={name:"BaseTabMenu",extends:B,props:{model:{type:Array,default:null},exact:{type:Boolean,default:!0},activeIndex:{type:Number,default:0},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},style:$,provide:function(){return{$parentInstance:this}}},H={name:"TabMenu",extends:z,emits:["update:activeIndex","tab-change"],timeout:null,data:function(){return{d_activeIndex:this.activeIndex}},watch:{$route:function(){var e=this;this.timeout=setTimeout(function(){return e.updateInkBar()},50)},activeIndex:function(e){this.d_activeIndex=e}},beforeMount:function(){this.$slots.item||console.warn("In future versions, vue-router support will be removed. Item templating should be used.")},mounted:function(){this.updateInkBar();var e=this.findActiveItem();e&&(e.tabIndex="0")},updated:function(){this.updateInkBar()},beforeUnmount:function(){clearTimeout(this.timeout)},methods:{getPTOptions:function(e,n,r){return this.ptm(e,{context:{item:n,index:r}})},onItemClick:function(e,n,r,l){if(this.disabled(n)){e.preventDefault();return}n.command&&n.command({originalEvent:e,item:n}),n.to&&l&&l(e),r!==this.d_activeIndex&&(this.d_activeIndex=r,this.$emit("update:activeIndex",this.d_activeIndex)),this.$emit("tab-change",{originalEvent:e,index:r})},onKeydownItem:function(e,n,r,l){switch(e.code){case"ArrowRight":{this.navigateToNextItem(e.target),e.preventDefault();break}case"ArrowLeft":{this.navigateToPrevItem(e.target),e.preventDefault();break}case"Home":{this.navigateToFirstItem(e.target),e.preventDefault();break}case"End":{this.navigateToLastItem(e.target),e.preventDefault();break}case"Space":case"Enter":{this.onItemClick(e,n,r,l),e.preventDefault();break}case"Tab":{this.onTabKey();break}}},navigateToNextItem:function(e){var n=this.findNextItem(e);n&&this.setFocusToMenuitem(e,n)},navigateToPrevItem:function(e){var n=this.findPrevItem(e);n&&this.setFocusToMenuitem(e,n)},navigateToFirstItem:function(e){var n=this.findFirstItem(e);n&&this.setFocusToMenuitem(e,n)},navigateToLastItem:function(e){var n=this.findLastItem(e);n&&this.setFocusToMenuitem(e,n)},findNextItem:function(e){var n=e.parentElement.nextElementSibling;return n?c.getAttribute(n,"data-p-disabled")===!0?this.findNextItem(n.children[0]):n.children[0]:null},findPrevItem:function(e){var n=e.parentElement.previousElementSibling;return n?c.getAttribute(n,"data-p-disabled")===!0?this.findPrevItem(n.children[0]):n.children[0]:null},findFirstItem:function(){var e=c.findSingle(this.$refs.nav,'[data-pc-section="menuitem"][data-p-disabled="false"]');return e?e.children[0]:null},findLastItem:function(){var e=c.find(this.$refs.nav,'[data-pc-section="menuitem"][data-p-disabled="false"]');return e?e[e.length-1].children[0]:null},findActiveItem:function(){var e=c.findSingle(this.$refs.nav,'[data-pc-section="menuitem"][data-p-disabled="false"][data-p-highlight="true"]');return e?e.children[0]:null},setFocusToMenuitem:function(e,n){e.tabIndex="-1",n.tabIndex="0",n.focus()},onTabKey:function(){var e=c.findSingle(this.$refs.nav,'[data-pc-section="menuitem"][data-p-disabled="false"][data-p-highlight="true"]'),n=c.findSingle(this.$refs.nav,'[data-pc-section="action"][tabindex="0"]');n!==e.children[0]&&(e&&(e.children[0].tabIndex="0"),n.tabIndex="-1")},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled===!0},label:function(e){return typeof e.label=="function"?e.label():e.label},updateInkBar:function(){for(var e=this.$refs.nav.children,n=!1,r=0;r<e.length;r++){var l=e[r];c.getAttribute(l,"data-p-highlight")&&(this.$refs.inkbar.style.width=c.getWidth(l)+"px",this.$refs.inkbar.style.left=c.getOffset(l).left-c.getOffset(this.$refs.nav).left+"px",n=!0)}n||(this.$refs.inkbar.style.width="0px",this.$refs.inkbar.style.left="0px")},getMenuItemProps:function(e,n){var r=this;return{action:d({class:this.cx("action"),tabindex:-1,onClick:function(i){return r.onItemClick(i,e,n)},onKeyDown:function(i){return r.onKeydownItem(i,e,n)}},this.getPTOptions("action",e,n)),icon:d({class:[this.cx("icon"),e.icon]},this.getPTOptions("icon",e,n)),label:d({class:this.cx("label")},this.getPTOptions("label",e,n))}}},directives:{ripple:D}},R=["aria-labelledby","aria-label"],U=["data-p-highlight","data-p-disabled"],V=["href","aria-label","aria-disabled","onClick","onKeydown"],j=["onClick","onKeydown","data-p-highlight","data-p-disabled"],q=["href","target","aria-label","aria-disabled"];function W(t,e,n,r,l,i){var I=E("router-link"),p=F("ripple");return o(),u("div",d({class:t.cx("root")},t.ptm("root"),{"data-pc-name":"tabmenu"}),[h("ul",d({ref:"nav",class:t.cx("menu"),role:"menubar","aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptm("menu")),[(o(!0),u(T,null,M(t.model,function(a,s){return o(),u(T,{key:i.label(a)+"_"+s.toString()},[a.to&&!i.disabled(a)?(o(),m(I,{key:0,to:a.to,custom:""},{default:S(function(f){var b=f.navigate,C=f.href,k=f.isActive,x=f.isExactActive;return[i.visible(a)?(o(),u("li",d({key:0,ref_for:!0,ref:"tab",class:[t.cx("menuitem",{item:a,isActive:k,isExactActive:x}),a.class],style:a.style,role:"presentation"},i.getPTOptions("menuitem",a,s),{"data-p-highlight":t.exact?x:k,"data-p-disabled":i.disabled(a)}),[t.$slots.item?(o(),m(v(t.$slots.item),{key:1,item:a,index:s},null,8,["item","index"])):w((o(),u("a",d({key:0,ref_for:!0,ref:"tabLink",role:"menuitem",href:C,class:t.cx("action"),"aria-label":i.label(a),"aria-disabled":i.disabled(a),tabindex:-1,onClick:function(y){return i.onItemClick(y,a,s,b)},onKeydown:function(y){return i.onKeydownItem(y,a,s,b)}},i.getPTOptions("action",a,s)),[t.$slots.itemicon?(o(),m(v(t.$slots.itemicon),{key:0,item:a,class:P([t.cx("icon"),a.icon])},null,8,["item","class"])):a.icon?(o(),u("span",d({key:1,class:[t.cx("icon"),a.icon]},i.getPTOptions("icon",a,s)),null,16)):g("",!0),h("span",d({class:t.cx("label")},i.getPTOptions("label",a,s)),A(i.label(a)),17)],16,V)),[[p]])],16,U)):g("",!0)]}),_:2},1032,["to"])):i.visible(a)?(o(),u("li",d({key:1,ref_for:!0,ref:"tab",class:[t.cx("menuitem",{item:a,index:s}),a.class],role:"presentation",onClick:function(b){return i.onItemClick(b,a,s)},onKeydown:function(b){return i.onKeydownItem(b,a,s)}},i.getPTOptions("menuitem",a,s),{"data-p-highlight":l.d_activeIndex===s,"data-p-disabled":i.disabled(a)}),[t.$slots.item?(o(),m(v(t.$slots.item),{key:1,item:a,index:s,label:i.label(a),props:i.getMenuItemProps(a,s)},null,8,["item","index","label","props"])):w((o(),u("a",d({key:0,ref_for:!0,ref:"tabLink",role:"menuitem",href:a.url,class:t.cx("action"),target:a.target,"aria-label":i.label(a),"aria-disabled":i.disabled(a),tabindex:-1},i.getPTOptions("action",a,s)),[t.$slots.itemicon?(o(),m(v(t.$slots.itemicon),{key:0,item:a,class:P([t.cx("icon"),a.icon])},null,8,["item","class"])):a.icon?(o(),u("span",d({key:1,class:[t.cx("icon"),a.icon]},i.getPTOptions("icon",a,s)),null,16)):g("",!0),h("span",d({class:t.cx("label")},i.getPTOptions("label",a,s)),A(i.label(a)),17)],16,q)),[[p]])],16,j)):g("",!0)],64)}),128)),h("li",d({ref:"inkbar",role:"none",class:t.cx("inkbar")},t.ptm("inkbar")),null,16)],16,R)],16)}H.render=W;export{H as default};
