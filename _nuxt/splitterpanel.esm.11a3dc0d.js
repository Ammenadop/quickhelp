import{s as r}from"./basecomponent.esm.412afc49.js";import{B as p,o as a,b as l,k as i,m as o}from"./entry.6aad99e7.js";var d=`
@layer primevue {
    .p-splitter-panel {
        flex-grow: 1;
    }

    .p-splitter-panel-nested {
        display: flex;
    }

    .p-splitter-panel .p-splitter {
        flex-grow: 1;
        border: 0 none;
    }
}
`,c={root:function(t){var n=t.instance;return["p-splitter-panel",{"p-splitter-panel-nested":n.isNested}]}},u=p.extend({name:"splitterpanel",css:d,classes:c}),m={name:"BaseSplitterPanel",extends:r,props:{size:{type:Number,default:null},minSize:{type:Number,default:null}},style:u,provide:function(){return{$parentInstance:this}}},f={name:"SplitterPanel",extends:m,computed:{isNested:function(){return this.$slots.default().some(function(t){return t.type.name==="Splitter"})},getPTOptions:function(){return{context:{nested:this.isNested}}}}};function v(e,t,n,y,S,s){return a(),l("div",o({ref:"container",class:e.cx("root")},e.ptm("root",s.getPTOptions),{"data-pc-name":"splitterpanel"}),[i(e.$slots,"default")],16)}f.render=v;export{f as default};
