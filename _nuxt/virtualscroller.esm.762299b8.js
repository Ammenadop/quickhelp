import{s as J}from"./index.esm.003214c5.js";import{B as Q,D as p,r as U,o as P,b as B,k as L,m as O,h as E,F as _,e as D,j as X,p as Y}from"./entry.6aad99e7.js";import{s as x}from"./basecomponent.esm.412afc49.js";import"./baseicon.esm.02bbc5b3.js";var $=`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    /* contain: content; */
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller .p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-virtualscroller-loader.p-component-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: 2rem;
}

.p-virtualscroller-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

/* Inline */
.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`,K=Q.extend({name:"virtualscroller",css:$}),tt={name:"BaseVirtualScroller",extends:x,props:{id:{type:String,default:null},style:null,class:null,items:{type:Array,default:null},itemSize:{type:[Number,Array],default:0},scrollHeight:null,scrollWidth:null,orientation:{type:String,default:"vertical"},numToleratedItems:{type:Number,default:null},delay:{type:Number,default:0},resizeDelay:{type:Number,default:10},lazy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loaderDisabled:{type:Boolean,default:!1},columns:{type:Array,default:null},loading:{type:Boolean,default:!1},showSpacer:{type:Boolean,default:!0},showLoader:{type:Boolean,default:!1},tabindex:{type:Number,default:0},inline:{type:Boolean,default:!1},step:{type:Number,default:0},appendOnly:{type:Boolean,default:!1},autoSize:{type:Boolean,default:!1}},style:K,provide:function(){return{$parentInstance:this}},beforeMount:function(){K.loadStyle()}};function R(e){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(e)}function Z(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),i.push.apply(i,n)}return i}function V(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Z(Object(i),!0).forEach(function(n){q(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Z(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}function q(e,t,i){return t=et(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function et(e){var t=it(e,"string");return R(t)==="symbol"?t:String(t)}function it(e,t){if(R(e)!=="object"||e===null)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var n=i.call(e,t||"default");if(R(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var st={name:"VirtualScroller",extends:tt,emits:["update:numToleratedItems","scroll","scroll-index-change","lazy-load"],data:function(){return{first:this.isBoth()?{rows:0,cols:0}:0,last:this.isBoth()?{rows:0,cols:0}:0,page:this.isBoth()?{rows:0,cols:0}:0,numItemsInViewport:this.isBoth()?{rows:0,cols:0}:0,lastScrollPos:this.isBoth()?{top:0,left:0}:0,d_numToleratedItems:this.numToleratedItems,d_loading:this.loading,loaderArr:[],spacerStyle:{},contentStyle:{}}},element:null,content:null,lastScrollPos:null,scrollTimeout:null,resizeTimeout:null,defaultWidth:0,defaultHeight:0,defaultContentWidth:0,defaultContentHeight:0,isRangeChanged:!1,lazyLoadState:{},resizeListener:null,initialized:!1,watch:{numToleratedItems:function(t){this.d_numToleratedItems=t},loading:function(t){this.d_loading=t},items:function(t,i){(!i||i.length!==(t||[]).length)&&(this.init(),this.calculateAutoSize())},itemSize:function(){this.init(),this.calculateAutoSize()},orientation:function(){this.lastScrollPos=this.isBoth()?{top:0,left:0}:0},scrollHeight:function(){this.init(),this.calculateAutoSize()},scrollWidth:function(){this.init(),this.calculateAutoSize()}},mounted:function(){this.viewInit(),this.lastScrollPos=this.isBoth()?{top:0,left:0}:0,this.lazyLoadState=this.lazyLoadState||{}},updated:function(){!this.initialized&&this.viewInit()},unmounted:function(){this.unbindResizeListener(),this.initialized=!1},methods:{viewInit:function(){p.isVisible(this.element)&&(this.setContentEl(this.content),this.init(),this.bindResizeListener(),this.defaultWidth=p.getWidth(this.element),this.defaultHeight=p.getHeight(this.element),this.defaultContentWidth=p.getWidth(this.content),this.defaultContentHeight=p.getHeight(this.content),this.initialized=!0)},init:function(){this.disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize())},isVertical:function(){return this.orientation==="vertical"},isHorizontal:function(){return this.orientation==="horizontal"},isBoth:function(){return this.orientation==="both"},scrollTo:function(t){this.lastScrollPos=this.both?{top:0,left:0}:0,this.element&&this.element.scrollTo(t)},scrollToIndex:function(t){var i=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"auto",l=this.isBoth(),s=this.isHorizontal(),a=this.first,h=this.calculateNumItems(),r=h.numToleratedItems,o=this.getContentPosition(),u=this.itemSize,m=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,S=arguments.length>1?arguments[1]:void 0;return v<=S?0:v},d=function(v,S,T){return v*S+T},g=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return i.scrollTo({left:v,top:S,behavior:n})},c=l?{rows:0,cols:0}:0,y=!1;l?(c={rows:m(t[0],r[0]),cols:m(t[1],r[1])},g(d(c.cols,u[1],o.left),d(c.rows,u[0],o.top)),y=c.rows!==a.rows||c.cols!==a.cols):(c=m(t,r),s?g(d(c,u,o.left),0):g(0,d(c,u,o.top)),y=c!==a),this.isRangeChanged=y,this.first=c},scrollInView:function(t,i){var n=this,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"auto";if(i){var s=this.isBoth(),a=this.isHorizontal(),h=this.getRenderedRange(),r=h.first,o=h.viewport,u=function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return n.scrollTo({left:I,top:v,behavior:l})},m=i==="to-start",d=i==="to-end";if(m){if(s)o.first.rows-r.rows>t[0]?u(o.first.cols*this.itemSize[1],(o.first.rows-1)*this.itemSize[0]):o.first.cols-r.cols>t[1]&&u((o.first.cols-1)*this.itemSize[1],o.first.rows*this.itemSize[0]);else if(o.first-r>t){var g=(o.first-1)*this.itemSize;a?u(g,0):u(0,g)}}else if(d){if(s)o.last.rows-r.rows<=t[0]+1?u(o.first.cols*this.itemSize[1],(o.first.rows+1)*this.itemSize[0]):o.last.cols-r.cols<=t[1]+1&&u((o.first.cols+1)*this.itemSize[1],o.first.rows*this.itemSize[0]);else if(o.last-r<=t+1){var c=(o.first+1)*this.itemSize;a?u(c,0):u(0,c)}}}else this.scrollToIndex(t,l)},getRenderedRange:function(){var t=function(m,d){return Math.floor(m/(d||m))},i=this.first,n=0;if(this.element){var l=this.isBoth(),s=this.isHorizontal(),a=this.element.scrollTop,h=a.scrollTop,r=a.scrollLeft;if(l)i={rows:t(h,this.itemSize[0]),cols:t(r,this.itemSize[1])},n={rows:i.rows+this.numItemsInViewport.rows,cols:i.cols+this.numItemsInViewport.cols};else{var o=s?r:h;i=t(o,this.itemSize),n=i+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:i,last:n}}},calculateNumItems:function(){var t=this.isBoth(),i=this.isHorizontal(),n=this.itemSize,l=this.getContentPosition(),s=this.element?this.element.offsetWidth-l.left:0,a=this.element?this.element.offsetHeight-l.top:0,h=function(d,g){return Math.ceil(d/(g||d))},r=function(d){return Math.ceil(d/2)},o=t?{rows:h(a,n[0]),cols:h(s,n[1])}:h(i?s:a,n),u=this.d_numToleratedItems||(t?[r(o.rows),r(o.cols)]:r(o));return{numItemsInViewport:o,numToleratedItems:u}},calculateOptions:function(){var t=this,i=this.isBoth(),n=this.first,l=this.calculateNumItems(),s=l.numItemsInViewport,a=l.numToleratedItems,h=function(u,m,d){var g=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return t.getLast(u+m+(u<d?2:3)*d,g)},r=i?{rows:h(n.rows,s.rows,a[0]),cols:h(n.cols,s.cols,a[1],!0)}:h(n,s,a);this.last=r,this.numItemsInViewport=s,this.d_numToleratedItems=a,this.$emit("update:numToleratedItems",this.d_numToleratedItems),this.showLoader&&(this.loaderArr=i?Array.from({length:s.rows}).map(function(){return Array.from({length:s.cols})}):Array.from({length:s})),this.lazy&&Promise.resolve().then(function(){t.lazyLoadState={first:t.step?i?{rows:0,cols:n.cols}:0:n,last:Math.min(t.step?t.step:r,t.items.length)},t.$emit("lazy-load",t.lazyLoadState)})},calculateAutoSize:function(){var t=this;this.autoSize&&!this.d_loading&&Promise.resolve().then(function(){if(t.content){var i=t.isBoth(),n=t.isHorizontal(),l=t.isVertical();t.content.style.minHeight=t.content.style.minWidth="auto",t.content.style.position="relative",t.element.style.contain="none";var s=[p.getWidth(t.content),p.getHeight(t.content)],a=s[0],h=s[1];a!==t.defaultContentWidth&&(t.element.style.width=""),h!==t.defaultContentHeight&&(t.element.style.height="");var r=[p.getWidth(t.element),p.getHeight(t.element)],o=r[0],u=r[1];(i||n)&&(t.element.style.width=o<t.defaultWidth?o+"px":t.scrollWidth||t.defaultWidth+"px"),(i||l)&&(t.element.style.height=u<t.defaultHeight?u+"px":t.scrollHeight||t.defaultHeight+"px"),t.content.style.minHeight=t.content.style.minWidth="",t.content.style.position="",t.element.style.contain=""}})},getLast:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,i=arguments.length>1?arguments[1]:void 0;return this.items?Math.min(i?(this.columns||this.items[0]).length:this.items.length,t):0},getContentPosition:function(){if(this.content){var t=getComputedStyle(this.content),i=parseFloat(t.paddingLeft)+Math.max(parseFloat(t.left)||0,0),n=parseFloat(t.paddingRight)+Math.max(parseFloat(t.right)||0,0),l=parseFloat(t.paddingTop)+Math.max(parseFloat(t.top)||0,0),s=parseFloat(t.paddingBottom)+Math.max(parseFloat(t.bottom)||0,0);return{left:i,right:n,top:l,bottom:s,x:i+n,y:l+s}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},setSize:function(){var t=this;if(this.element){var i=this.isBoth(),n=this.isHorizontal(),l=this.element.parentElement,s=this.scrollWidth||"".concat(this.element.offsetWidth||l.offsetWidth,"px"),a=this.scrollHeight||"".concat(this.element.offsetHeight||l.offsetHeight,"px"),h=function(o,u){return t.element.style[o]=u};i||n?(h("height",a),h("width",s)):h("height",a)}},setSpacerSize:function(){var t=this,i=this.items;if(i){var n=this.isBoth(),l=this.isHorizontal(),s=this.getContentPosition(),a=function(r,o,u){var m=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return t.spacerStyle=V(V({},t.spacerStyle),q({},"".concat(r),(o||[]).length*u+m+"px"))};n?(a("height",i,this.itemSize[0],s.y),a("width",this.columns||i[1],this.itemSize[1],s.x)):l?a("width",this.columns||i,this.itemSize,s.x):a("height",i,this.itemSize,s.y)}},setContentPosition:function(t){var i=this;if(this.content&&!this.appendOnly){var n=this.isBoth(),l=this.isHorizontal(),s=t?t.first:this.first,a=function(u,m){return u*m},h=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return i.contentStyle=V(V({},i.contentStyle),{transform:"translate3d(".concat(u,"px, ").concat(m,"px, 0)")})};if(n)h(a(s.cols,this.itemSize[1]),a(s.rows,this.itemSize[0]));else{var r=a(s,this.itemSize);l?h(r,0):h(0,r)}}},onScrollPositionChange:function(t){var i=this,n=t.target,l=this.isBoth(),s=this.isHorizontal(),a=this.getContentPosition(),h=function(f,w){return f?f>w?f-w:f:0},r=function(f,w){return Math.floor(f/(w||f))},o=function(f,w,H,F,z,b){return f<=z?z:b?H-F-z:w+z-1},u=function(f,w,H,F,z,b,N){return f<=b?0:Math.max(0,N?f<w?H:f-b:f>w?H:f-2*b)},m=function(f,w,H,F,z,b){var N=w+F+2*z;return f>=z&&(N+=z+1),i.getLast(N,b)},d=h(n.scrollTop,a.top),g=h(n.scrollLeft,a.left),c=l?{rows:0,cols:0}:0,y=this.last,I=!1,v=this.lastScrollPos;if(l){var S=this.lastScrollPos.top<=d,T=this.lastScrollPos.left<=g;if(!this.appendOnly||this.appendOnly&&(S||T)){var C={rows:r(d,this.itemSize[0]),cols:r(g,this.itemSize[1])},k={rows:o(C.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],S),cols:o(C.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],T)};c={rows:u(C.rows,k.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],S),cols:u(C.cols,k.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],T)},y={rows:m(C.rows,c.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:m(C.cols,c.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},I=c.rows!==this.first.rows||y.rows!==this.last.rows||c.cols!==this.first.cols||y.cols!==this.last.cols||this.isRangeChanged,v={top:d,left:g}}}else{var A=s?g:d,M=this.lastScrollPos<=A;if(!this.appendOnly||this.appendOnly&&M){var j=r(A,this.itemSize),G=o(j,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,M);c=u(j,G,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,M),y=m(j,c,this.last,this.numItemsInViewport,this.d_numToleratedItems),I=c!==this.first||y!==this.last||this.isRangeChanged,v=A}}return{first:c,last:y,isRangeChanged:I,scrollPos:v}},onScrollChange:function(t){var i=this.onScrollPositionChange(t),n=i.first,l=i.last,s=i.isRangeChanged,a=i.scrollPos;if(s){var h={first:n,last:l};if(this.setContentPosition(h),this.first=n,this.last=l,this.lastScrollPos=a,this.$emit("scroll-index-change",h),this.lazy&&this.isPageChanged(n)){var r={first:this.step?Math.min(this.getPageByFirst(n)*this.step,this.items.length-this.step):n,last:Math.min(this.step?(this.getPageByFirst(n)+1)*this.step:l,this.items.length)},o=this.lazyLoadState.first!==r.first||this.lazyLoadState.last!==r.last;o&&this.$emit("lazy-load",r),this.lazyLoadState=r}}},onScroll:function(t){var i=this;if(this.$emit("scroll",t),this.delay&&this.isPageChanged()){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){var n=this.onScrollPositionChange(t),l=n.isRangeChanged,s=l||(this.step?this.isPageChanged():!1);s&&(this.d_loading=!0)}this.scrollTimeout=setTimeout(function(){i.onScrollChange(t),i.d_loading&&i.showLoader&&(!i.lazy||i.loading===void 0)&&(i.d_loading=!1,i.page=i.getPageByFirst())},this.delay)}else this.onScrollChange(t)},onResize:function(){var t=this;this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){if(p.isVisible(t.element)){var i=t.isBoth(),n=t.isVertical(),l=t.isHorizontal(),s=[p.getWidth(t.element),p.getHeight(t.element)],a=s[0],h=s[1],r=a!==t.defaultWidth,o=h!==t.defaultHeight,u=i?r||o:l?r:n?o:!1;u&&(t.d_numToleratedItems=t.numToleratedItems,t.defaultWidth=a,t.defaultHeight=h,t.defaultContentWidth=p.getWidth(t.content),t.defaultContentHeight=p.getHeight(t.content),t.init())}},this.resizeDelay)},bindResizeListener:function(){this.resizeListener||(this.resizeListener=this.onResize.bind(this),window.addEventListener("resize",this.resizeListener),window.addEventListener("orientationchange",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),window.removeEventListener("orientationchange",this.resizeListener),this.resizeListener=null)},getOptions:function(t){var i=(this.items||[]).length,n=this.isBoth()?this.first.rows+t:this.first+t;return{index:n,count:i,first:n===0,last:n===i-1,even:n%2===0,odd:n%2!==0}},getLoaderOptions:function(t,i){var n=this.loaderArr.length;return V({index:t,count:n,first:t===0,last:t===n-1,even:t%2===0,odd:t%2!==0},i)},getPageByFirst:function(t){return Math.floor(((t??this.first)+this.d_numToleratedItems*4)/(this.step||1))},isPageChanged:function(t){return this.step?this.page!==this.getPageByFirst(t??this.first):!0},setContentEl:function(t){this.content=t||this.content||p.findSingle(this.element,'[data-pc-section="content"]')},elementRef:function(t){this.element=t},contentRef:function(t){this.content=t}},computed:{containerClass:function(){return["p-virtualscroller",this.class,{"p-virtualscroller-inline":this.inline,"p-virtualscroller-both p-both-scroll":this.isBoth(),"p-virtualscroller-horizontal p-horizontal-scroll":this.isHorizontal()}]},contentClass:function(){return["p-virtualscroller-content",{"p-virtualscroller-loading":this.d_loading}]},loaderClass:function(){return["p-virtualscroller-loader",{"p-component-overlay":!this.$slots.loader}]},loadedItems:function(){var t=this;return this.items&&!this.d_loading?this.isBoth()?this.items.slice(this.appendOnly?0:this.first.rows,this.last.rows).map(function(i){return t.columns?i:i.slice(t.appendOnly?0:t.first.cols,t.last.cols)}):this.isHorizontal()&&this.columns?this.items:this.items.slice(this.appendOnly?0:this.first,this.last):[]},loadedRows:function(){return this.d_loading?this.loaderDisabled?this.loaderArr:[]:this.loadedItems},loadedColumns:function(){if(this.columns){var t=this.isBoth(),i=this.isHorizontal();if(t||i)return this.d_loading&&this.loaderDisabled?t?this.loaderArr[0]:this.loaderArr:this.columns.slice(t?this.first.cols:this.first,t?this.last.cols:this.last)}return this.columns}},components:{SpinnerIcon:J}},nt=["tabindex"];function rt(e,t,i,n,l,s){var a=U("SpinnerIcon");return e.disabled?(P(),B(_,{key:1},[L(e.$slots,"default"),L(e.$slots,"content",{items:e.items,rows:e.items,columns:s.loadedColumns})],64)):(P(),B("div",O({key:0,ref:s.elementRef,class:s.containerClass,tabindex:e.tabindex,style:e.style,onScroll:t[0]||(t[0]=function(){return s.onScroll&&s.onScroll.apply(s,arguments)})},e.ptm("root"),{"data-pc-name":"virtualscroller"}),[L(e.$slots,"content",{styleClass:s.contentClass,items:s.loadedItems,getItemOptions:s.getOptions,loading:l.d_loading,getLoaderOptions:s.getLoaderOptions,itemSize:e.itemSize,rows:s.loadedRows,columns:s.loadedColumns,contentRef:s.contentRef,spacerStyle:l.spacerStyle,contentStyle:l.contentStyle,vertical:s.isVertical(),horizontal:s.isHorizontal(),both:s.isBoth()},function(){return[X("div",O({ref:s.contentRef,class:s.contentClass,style:l.contentStyle},e.ptm("content")),[(P(!0),B(_,null,D(s.loadedItems,function(h,r){return L(e.$slots,"item",{key:r,item:h,options:s.getOptions(r)})}),128))],16)]}),e.showSpacer?(P(),B("div",O({key:0,class:"p-virtualscroller-spacer",style:l.spacerStyle},e.ptm("spacer")),null,16)):E("",!0),!e.loaderDisabled&&e.showLoader&&l.d_loading?(P(),B("div",O({key:1,class:s.loaderClass},e.ptm("loader")),[e.$slots&&e.$slots.loader?(P(!0),B(_,{key:0},D(l.loaderArr,function(h,r){return L(e.$slots,"loader",{key:r,options:s.getLoaderOptions(r,s.isBoth()&&{numCols:e.d_numItemsInViewport.cols})})}),128)):E("",!0),L(e.$slots,"loadingicon",{},function(){return[Y(a,O({spin:"",class:"p-virtualscroller-loading-icon"},e.ptm("loadingIcon")),null,16)]})],16)):E("",!0)],16,nt))}st.render=rt;export{st as default};
