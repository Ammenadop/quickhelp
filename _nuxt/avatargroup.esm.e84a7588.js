import{B as r,o as e,b as t,k as n,m as s}from"./entry.6aad99e7.js";import{s as o}from"./basecomponent.esm.412afc49.js";var p=`
@layer primevue {
    .p-avatar-group .p-avatar + .p-avatar {
        margin-left: -1rem;
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }
}
`,v={root:"p-avatar-group p-component"},c=r.extend({name:"avatargroup",css:p,classes:v}),l={name:"BaseAvatarGroup",extends:o,style:c,provide:function(){return{$parentInstance:this}}},i={name:"AvatarGroup",extends:l};function m(a,u,d,f,g,$){return e(),t("div",s({class:a.cx("root")},a.ptm("root"),{"data-pc-name":"avatargroup"}),[n(a.$slots,"default")],16)}i.render=m;export{i as default};
