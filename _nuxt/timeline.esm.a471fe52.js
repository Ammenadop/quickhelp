import{B as c,O as v,o as m,b as s,F as d,e as g,m as l,j as a,k as p,h}from"./entry.6aad99e7.js";import{s as f}from"./basecomponent.esm.412afc49.js";var u=`
@layer primevue {
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: 70px;
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
        padding: 0 1rem;
    }

    .p-timeline-event-content {
        flex: 1;
        padding: 0 1rem;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: flex;
        align-self: baseline;
    }

    .p-timeline-event-connector {
        flex-grow: 1;
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }
}
`,x={root:function(r){var t=r.props;return["p-timeline p-component","p-timeline-"+t.align,"p-timeline-"+t.layout]},event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",content:"p-timeline-event-content"},y=c.extend({name:"timeline",css:u,classes:x}),k={name:"BaseTimeline",extends:f,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:y,provide:function(){return{$parentInstance:this}}},T={name:"Timeline",extends:k,methods:{getKey:function(r,t){return this.dataKey?v.resolveFieldData(r,this.dataKey):t},getPTOptions:function(r,t){return this.ptm(r,{context:{index:t,count:this.value.length}})}}};function O(e,r,t,P,w,i){return m(),s("div",l({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"timeline"}),[(m(!0),s(d,null,g(e.value,function(o,n){return m(),s("div",l({key:i.getKey(o,n),class:e.cx("event")},i.getPTOptions("event",n)),[a("div",l({class:e.cx("opposite",{index:n})},i.getPTOptions("opposite",n)),[p(e.$slots,"opposite",{item:o,index:n})],16),a("div",l({class:e.cx("separator")},i.getPTOptions("separator",n)),[p(e.$slots,"marker",{item:o,index:n},function(){return[a("div",l({class:e.cx("marker")},i.getPTOptions("marker",n)),null,16)]}),n!==e.value.length-1?p(e.$slots,"connector",{key:0,item:o,index:n},function(){return[a("div",l({class:e.cx("connector")},i.getPTOptions("connector",n)),null,16)]}):h("",!0)],16),a("div",l({class:e.cx("content")},i.getPTOptions("content",n)),[p(e.$slots,"content",{item:o,index:n})],16)],16)}),128))],16)}T.render=O;export{T as default};
