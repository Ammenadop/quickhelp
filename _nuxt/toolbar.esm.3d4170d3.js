import{s as t}from"./basecomponent.esm.412afc49.js";import{B as n,o as s,b as l,j as a,k as o,m as r}from"./entry.6aad99e7.js";var p=`
@layer primevue {
    .p-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .p-toolbar-group-start,
    .p-toolbar-group-center,
    .p-toolbar-group-end {
        display: flex;
        align-items: center;
    }

    .p-toolbar-group-left,
    .p-toolbar-group-right {
        display: flex;
        align-items: center;
    }
}
`,i={root:"p-toolbar p-component",start:"p-toolbar-group-start p-toolbar-group-left",center:"p-toolbar-group-center",end:"p-toolbar-group-end p-toolbar-group-right"},d=n.extend({name:"toolbar",css:p,classes:i}),b={name:"BaseToolbar",extends:t,props:{"aria-labelledby":{type:String,default:null}},style:d,provide:function(){return{$parentInstance:this}}},c={name:"Toolbar",extends:b},m=["aria-labelledby"];function u(e,g,f,v,y,$){return s(),l("div",r({class:e.cx("root"),role:"toolbar","aria-labelledby":e.ariaLabelledby},e.ptm("root"),{"data-pc-name":"toolbar"}),[a("div",r({class:e.cx("start")},e.ptm("start")),[o(e.$slots,"start")],16),a("div",r({class:e.cx("center")},e.ptm("center")),[o(e.$slots,"center")],16),a("div",r({class:e.cx("end")},e.ptm("end")),[o(e.$slots,"end")],16)],16,m)}c.render=u;export{c as default};
