import A from"./button.esm.e96d526b.js";import{_ as C}from"./CodeHighlight.6468f1ae.js";import{$ as M,a as D,o as m,b as u,j as e,t as B,h as v,i as h,w as j,K as N,k as O,p as s,q as c,l as E,a2 as R,a3 as L,Y as l}from"./entry.6aad99e7.js";import T from"./inputtext.esm.f3f2de71.js";import $ from"./checkbox.esm.c0c71931.js";import U from"./chip.esm.c8175a93.js";import"./badge.esm.6f1a7f83.js";import"./basecomponent.esm.412afc49.js";import"./index.esm.003214c5.js";import"./baseicon.esm.02bbc5b3.js";import"./index.esm.8a2d937c.js";import"./index.esm.994363a5.js";const H={props:{header:{type:String,default:null},code:null,recent:{type:Boolean,default:!1},containerClass:null,previewStyle:null},data(){return{BlockView:{PREVIEW:0,CODE:1},blockView:0}},methods:{activateView(n,a){this.blockView=a,n.preventDefault()},async copyCode(n){await navigator.clipboard.writeText(this.code),n.preventDefault()}},components:{CodeHighlight:C}},g=n=>(R("data-v-e48ae9db"),n=n(),L(),n),W={class:"block-section"},F={class:"block-header"},G={class:"block-title"},J={key:0,class:"badge-new"},Y={class:"block-actions"},z=g(()=>e("span",null,"Preview",-1)),K=[z],Q=g(()=>e("span",null,"Code",-1)),X=[Q],Z=g(()=>e("i",{class:"pi pi-copy"},null,-1)),ee=[Z],se={class:"block-content"},te={key:1};function ie(n,a,r,_,i,p){const x=C,b=D("tooltip");return m(),u("div",W,[e("div",F,[e("span",G,[e("span",null,B(r.header),1),r.recent?(m(),u("span",J,"New")):v("",!0)]),e("div",Y,[e("a",{tabindex:"0",class:h({"block-action-active":i.blockView===i.BlockView.PREVIEW}),onClick:a[0]||(a[0]=d=>p.activateView(d,i.BlockView.PREVIEW))},K,2),e("a",{tabindex:"0",class:h({"block-action-active":i.blockView===i.BlockView.CODE}),onClick:a[1]||(a[1]=d=>p.activateView(d,i.BlockView.CODE))},X,2),j((m(),u("a",{tabindex:0,class:"block-action-copy",onClick:a[2]||(a[2]=d=>p.copyCode(d))},ee)),[[b,{value:"Copied to clipboard"},void 0,{focus:!0,bottom:!0}]])])]),e("div",se,[i.blockView==i.BlockView.PREVIEW?(m(),u("div",{key:0,class:h(r.containerClass),style:N(r.previewStyle)},[O(n.$slots,"default",{},void 0,!0)],6)):v("",!0),i.blockView===i.BlockView.CODE?(m(),u("div",te,[s(x,{class:"surface-card m-0"},{default:c(()=>[E(B(r.code),1)]),_:1})])):v("",!0)])])}const le=M(H,[["render",ie],["__scopeId","data-v-e48ae9db"]]),ce=""+globalThis.__publicAssetsURL("demo/images/blocks/hero/hero-1.png"),ne=""+globalThis.__publicAssetsURL("demo/images/blocks/logos/hyper.svg"),ae={class:"grid grid-nogutter surface-section text-800"},oe={class:"col-12 md:col-6 p-6 text-center md:text-left flex align-items-center"},re=e("span",{class:"block text-6xl font-bold mb-1"},"Create the screens your",-1),de=e("div",{class:"text-6xl text-primary font-bold mb-3"},"your visitors deserve to see",-1),me=e("p",{class:"mt-0 mb-4 text-700 line-height-3"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",-1),ue=e("div",{class:"col-12 md:col-6 overflow-hidden"},[e("img",{src:ce,alt:"Image",class:"md:ml-auto block md:h-full",style:{"clip-path":"polygon(8% 0, 100% 0%, 100% 100%, 0 100%)"}})],-1),pe=e("div",{class:"surface-section px-4 py-8 md:px-6 lg:px-8 text-center"},[e("div",{class:"mb-3 font-bold text-2xl"},[e("span",{class:"text-900"},"One Product, "),e("span",{class:"text-blue-600"},"Many Solutions")]),e("div",{class:"text-700 text-sm mb-6"},"Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna."),e("div",{class:"grid"},[e("div",{class:"col-12 md:col-4 mb-4 px-5"},[e("span",{class:"p-3 shadow-2 mb-3 inline-block surface-card",style:{"border-radius":"10px"}},[e("i",{class:"pi pi-desktop text-4xl text-blue-500"})]),e("div",{class:"text-900 mb-3 font-medium"},"Built for Developers"),e("span",{class:"text-700 text-sm line-height-3"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")]),e("div",{class:"col-12 md:col-4 mb-4 px-5"},[e("span",{class:"p-3 shadow-2 mb-3 inline-block surface-card",style:{"border-radius":"10px"}},[e("i",{class:"pi pi-lock text-4xl text-blue-500"})]),e("div",{class:"text-900 mb-3 font-medium"},"End-to-End Encryption"),e("span",{class:"text-700 text-sm line-height-3"},"Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.")]),e("div",{class:"col-12 md:col-4 mb-4 px-5"},[e("span",{class:"p-3 shadow-2 mb-3 inline-block surface-card",style:{"border-radius":"10px"}},[e("i",{class:"pi pi-check-circle text-4xl text-blue-500"})]),e("div",{class:"text-900 mb-3 font-medium"},"Easy to Use"),e("span",{class:"text-700 text-sm line-height-3"},"Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.")]),e("div",{class:"col-12 md:col-4 mb-4 px-5"},[e("span",{class:"p-3 shadow-2 mb-3 inline-block surface-card",style:{"border-radius":"10px"}},[e("i",{class:"pi pi-globe text-4xl text-blue-500"})]),e("div",{class:"text-900 mb-3 font-medium"},"Fast & Global Support"),e("span",{class:"text-700 text-sm line-height-3"},"Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.")]),e("div",{class:"col-12 md:col-4 mb-4 px-5"},[e("span",{class:"p-3 shadow-2 mb-3 inline-block surface-card",style:{"border-radius":"10px"}},[e("i",{class:"pi pi-github text-4xl text-blue-500"})]),e("div",{class:"text-900 mb-3 font-medium"},"Open Source"),e("span",{class:"text-700 text-sm line-height-3"},"Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. ")]),e("div",{class:"col-12 md:col-4 md:mb-4 mb-0 px-3"},[e("span",{class:"p-3 shadow-2 mb-3 inline-block surface-card",style:{"border-radius":"10px"}},[e("i",{class:"pi pi-shield text-4xl text-blue-500"})]),e("div",{class:"text-900 mb-3 font-medium"},"Trusted Securitty"),e("span",{class:"text-700 text-sm line-height-3"},"Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.")])])],-1),xe={class:"surface-ground px-4 py-8 md:px-6 lg:px-8"},be=e("div",{class:"text-900 font-bold text-6xl mb-4 text-center"},"Pricing Plans",-1),fe=e("div",{class:"text-700 text-xl mb-6 text-center line-height-3"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.",-1),ve={class:"grid"},he={class:"col-12 lg:col-4"},ge={class:"p-3 h-full"},_e={class:"shadow-2 p-3 h-full flex flex-column surface-card",style:{"border-radius":"6px"}},we=e("div",{class:"text-900 font-medium text-xl mb-2"},"Basic",-1),ye=e("div",{class:"text-600"},"Plan description",-1),ke=e("hr",{class:"my-3 mx-0 border-top-1 border-none surface-border"},null,-1),Be=e("div",{class:"flex align-items-center"},[e("span",{class:"font-bold text-2xl text-900"},"$9"),e("span",{class:"ml-2 font-medium text-600"},"per month")],-1),Ce=e("hr",{class:"my-3 mx-0 border-top-1 border-none surface-border"},null,-1),De=e("ul",{class:"list-none p-0 m-0 flex-grow-1"},[e("li",{class:"flex align-items-center mb-3"},[e("i",{class:"pi pi-check-circle text-green-500 mr-2"}),e("span",null,"Arcu vitae elementum")]),e("li",{class:"flex align-items-center mb-3"},[e("i",{class:"pi pi-check-circle text-green-500 mr-2"}),e("span",null,"Dui faucibus in ornare")]),e("li",{class:"flex align-items-center mb-3"},[e("i",{class:"pi pi-check-circle text-green-500 mr-2"}),e("span",null,"Morbi tincidunt augue")])],-1),je=e("hr",{class:"mb-3 mx-0 border-top-1 border-none surface-border mt-auto"},null,-1),Ee={class:"col-12 lg:col-4"},Ve={class:"p-3 h-full"},Pe={class:"shadow-2 p-3 h-full flex flex-column surface-card",style:{"border-radius":"6px"}},Se=e("div",{class:"text-900 font-medium text-xl mb-2"},"Premium",-1),Ie=e("div",{class:"text-600"},"Plan description",-1),qe=e("hr",{class:"my-3 mx-0 border-top-1 border-none surface-border"},null,-1),Ae=e("div",{class:"flex align-items-center"},[e("span",{class:"font-bold text-2xl text-900"},"$29"),e("span",{class:"ml-2 font-medium text-600"},"per month")],-1),Me=e("hr",{class:"my-3 mx-0 border-top-1 border-none surface-border"},null,-1),Ne=e("ul",{class:"list-none p-0 m-0 flex-grow-1"},[e("li",{class:"flex align-items-center mb-3"},[e("i",{class:"pi pi-check-circle text-green-500 mr-2"}),e("span",null,"Arcu vitae elementum")]),e("li",{class:"flex align-items-center mb-3"},[e("i",{class:"pi pi-check-circle text-green-500 mr-2"}),e("span",null,"Dui faucibus in ornare")]),e("li",{class:"flex align-items-center mb-3"},[e("i",{class:"pi pi-check-circle text-green-500 mr-2"}),e("span",null,"Morbi tincidunt augue")]),e("li",{class:"flex align-items-center mb-3"},[e("i",{class:"pi pi-check-circle text-green-500 mr-2"}),e("span",null,"Duis ultricies lacus sed")])],-1),Oe=e("hr",{class:"mb-3 mx-0 border-top-1 border-none surface-border"},null,-1),Re={class:"col-12 lg:col-4"},Le={class:"p-3 h-full"},Te={class:"shadow-2 p-3 flex flex-column surface-card",style:{"border-radius":"6px"}},$e=e("div",{class:"text-900 font-medium text-xl mb-2"},"Enterprise",-1),Ue=e("div",{class:"text-600"},"Plan description",-1),He=e("hr",{class:"my-3 mx-0 border-top-1 border-none surface-border"},null,-1),We=e("div",{class:"flex align-items-center"},[e("span",{class:"font-bold text-2xl text-900"},"$49"),e("span",{class:"ml-2 font-medium text-600"},"per month")],-1),Fe=e("hr",{class:"my-3 mx-0 border-top-1 border-none surface-border"},null,-1),Ge=e("ul",{class:"list-none p-0 m-0 flex-grow-1"},[e("li",{class:"flex align-items-center mb-3"},[e("i",{class:"pi pi-check-circle text-green-500 mr-2"}),e("span",null,"Arcu vitae elementum")]),e("li",{class:"flex align-items-center mb-3"},[e("i",{class:"pi pi-check-circle text-green-500 mr-2"}),e("span",null,"Dui faucibus in ornare")]),e("li",{class:"flex align-items-center mb-3"},[e("i",{class:"pi pi-check-circle text-green-500 mr-2"}),e("span",null,"Morbi tincidunt augue")]),e("li",{class:"flex align-items-center mb-3"},[e("i",{class:"pi pi-check-circle text-green-500 mr-2"}),e("span",null,"Duis ultricies lacus sed")]),e("li",{class:"flex align-items-center mb-3"},[e("i",{class:"pi pi-check-circle text-green-500 mr-2"}),e("span",null,"Imperdiet proin")]),e("li",{class:"flex align-items-center mb-3"},[e("i",{class:"pi pi-check-circle text-green-500 mr-2"}),e("span",null,"Nisi scelerisque")])],-1),Je=e("hr",{class:"mb-3 mx-0 border-top-1 border-none surface-border"},null,-1),Ye={class:"surface-section px-4 py-8 md:px-6 lg:px-8"},ze={class:"text-700 text-center"},Ke=e("div",{class:"text-blue-600 font-bold mb-3"},[e("i",{class:"pi pi-discord"}),E(" POWERED BY DISCORD")],-1),Qe=e("div",{class:"text-900 font-bold text-5xl mb-3"},"Join Our Design Community",-1),Xe=e("div",{class:"text-700 text-2xl mb-5"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.",-1),Ze={class:"bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap"},es=e("div",{class:"font-bold mr-8"},"🔥 Hot Deals!",-1),ss=e("div",{class:"align-items-center hidden lg:flex"},[e("span",{class:"line-height-3"},"Libero voluptatum atque exercitationem praesentium provident odit.")],-1),ts=e("a",{class:"flex align-items-center ml-2 mr-8"},[e("a",{class:"text-white",href:"#"},[e("span",{class:"underline font-bold"},"Learn More")])],-1),is={class:"flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150 p-ripple",style:{width:"2rem",height:"2rem"}},ls=e("i",{class:"pi pi-times"},null,-1),cs=[ls],ns={class:"surface-section px-4 py-5 md:px-6 lg:px-8"},as=e("ul",{class:"list-none p-0 m-0 flex align-items-center font-medium mb-3"},[e("li",null,[e("a",{class:"text-500 no-underline line-height-3 cursor-pointer"},"Application")]),e("li",{class:"px-2"},[e("i",{class:"pi pi-angle-right text-500 line-height-3"})]),e("li",null,[e("span",{class:"text-900 line-height-3"},"Analytics")])],-1),os={class:"flex align-items-start flex-column lg:justify-content-between lg:flex-row"},rs=e("div",null,[e("div",{class:"font-medium text-3xl text-900"},"Customers"),e("div",{class:"flex align-items-center text-700 flex-wrap"},[e("div",{class:"mr-5 flex align-items-center mt-3"},[e("i",{class:"pi pi-users mr-2"}),e("span",null,"332 Active Users")]),e("div",{class:"mr-5 flex align-items-center mt-3"},[e("i",{class:"pi pi-globe mr-2"}),e("span",null,"9402 Sessions")]),e("div",{class:"flex align-items-center mt-3"},[e("i",{class:"pi pi-clock mr-2"}),e("span",null,"2.32m Avg. Duration")])])],-1),ds={class:"mt-3 lg:mt-0"},ms=e("div",{class:"surface-ground px-4 py-5 md:px-6 lg:px-8"},[e("div",{class:"grid"},[e("div",{class:"col-12 md:col-6 lg:col-3"},[e("div",{class:"surface-card shadow-2 p-3 border-round"},[e("div",{class:"flex justify-content-between mb-3"},[e("div",null,[e("span",{class:"block text-500 font-medium mb-3"},"Orders"),e("div",{class:"text-900 font-medium text-xl"},"152")]),e("div",{class:"flex align-items-center justify-content-center bg-blue-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[e("i",{class:"pi pi-shopping-cart text-blue-500 text-xl"})])]),e("span",{class:"text-green-500 font-medium"},"24 new "),e("span",{class:"text-500"},"since last visit")])]),e("div",{class:"col-12 md:col-6 lg:col-3"},[e("div",{class:"surface-card shadow-2 p-3 border-round"},[e("div",{class:"flex justify-content-between mb-3"},[e("div",null,[e("span",{class:"block text-500 font-medium mb-3"},"Revenue"),e("div",{class:"text-900 font-medium text-xl"},"$2.100")]),e("div",{class:"flex align-items-center justify-content-center bg-orange-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[e("i",{class:"pi pi-map-marker text-orange-500 text-xl"})])]),e("span",{class:"text-green-500 font-medium"},"%52+ "),e("span",{class:"text-500"},"since last week")])]),e("div",{class:"col-12 md:col-6 lg:col-3"},[e("div",{class:"surface-card shadow-2 p-3 border-round"},[e("div",{class:"flex justify-content-between mb-3"},[e("div",null,[e("span",{class:"block text-500 font-medium mb-3"},"Customers"),e("div",{class:"text-900 font-medium text-xl"},"28441")]),e("div",{class:"flex align-items-center justify-content-center bg-cyan-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[e("i",{class:"pi pi-inbox text-cyan-500 text-xl"})])]),e("span",{class:"text-green-500 font-medium"},"520 "),e("span",{class:"text-500"},"newly registered")])]),e("div",{class:"col-12 md:col-6 lg:col-3"},[e("div",{class:"surface-card shadow-2 p-3 border-round"},[e("div",{class:"flex justify-content-between mb-3"},[e("div",null,[e("span",{class:"block text-500 font-medium mb-3"},"Comments"),e("div",{class:"text-900 font-medium text-xl"},"152 Unread")]),e("div",{class:"flex align-items-center justify-content-center bg-purple-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[e("i",{class:"pi pi-comment text-purple-500 text-xl"})])]),e("span",{class:"text-green-500 font-medium"},"85 "),e("span",{class:"text-500"},"responded")])])])],-1),us={class:"surface-card p-4 shadow-2 border-round w-full lg:w-6"},ps=e("div",{class:"text-center mb-5"},[e("img",{src:ne,alt:"Image",height:"50",class:"mb-3"}),e("div",{class:"text-900 text-3xl font-medium mb-3"},"Welcome Back"),e("span",{class:"text-600 font-medium line-height-3"},"Don't have an account?"),e("a",{class:"font-medium no-underline ml-2 text-blue-500 cursor-pointer"},"Create today!")],-1),xs=e("label",{for:"email1",class:"block text-900 font-medium mb-2"},"Email",-1),bs=e("label",{for:"password1",class:"block text-900 font-medium mb-2"},"Password",-1),fs={class:"flex align-items-center justify-content-between mb-6"},vs={class:"flex align-items-center"},hs=e("label",{for:"rememberme1"},"Remember me",-1),gs=e("a",{class:"font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"},"Forgot password?",-1),_s={class:"surface-section"},ws=e("div",{class:"font-medium text-3xl text-900 mb-3"},"Movie Information",-1),ys=e("div",{class:"text-500 mb-5"},"Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.",-1),ks={class:"list-none p-0 m-0"},Bs={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},Cs=e("div",{class:"text-500 w-6 md:w-2 font-medium"},"Title",-1),Ds=e("div",{class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},"Heat",-1),js={class:"w-6 md:w-2 flex justify-content-end"},Es={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},Vs=e("div",{class:"text-500 w-6 md:w-2 font-medium"},"Genre",-1),Ps={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},Ss={class:"w-6 md:w-2 flex justify-content-end"},Is={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},qs=e("div",{class:"text-500 w-6 md:w-2 font-medium"},"Director",-1),As=e("div",{class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},"Michael Mann",-1),Ms={class:"w-6 md:w-2 flex justify-content-end"},Ns={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},Os=e("div",{class:"text-500 w-6 md:w-2 font-medium"},"Actors",-1),Rs=e("div",{class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},"Robert De Niro, Al Pacino",-1),Ls={class:"w-6 md:w-2 flex justify-content-end"},Ts={class:"flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap"},$s=e("div",{class:"text-500 w-6 md:w-2 font-medium"},"Plot",-1),Us=e("div",{class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3"},"A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist.",-1),Hs={class:"w-6 md:w-2 flex justify-content-end"},Ws=e("div",{class:"surface-card p-4 shadow-2 border-round"},[e("div",{class:"text-3xl font-medium text-900 mb-3"},"Card Title"),e("div",{class:"font-medium text-500 mb-3"},"Vivamus id nisl interdum, blandit augue sit amet, eleifend mi."),e("div",{style:{height:"150px"},class:"border-2 border-dashed surface-border"})],-1),lt={__name:"Blocks",setup(n){const a=l(`<div class="grid grid-nogutter surface-section text-800">
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
            <span class="block text-6xl font-bold mb-1">Create the screens your</span>
            <div class="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
            <p class="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <Button label="Learn More" type="button" class="mr-3 p-button-raised"></Button>
            <Button label="Live Demo" type="button" class="p-button-outlined"></Button>
        </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden">
        <img src="/demo/images/blocks/hero/hero-1.png" alt="Image" class="md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
    </div>
</div>`),r=l(`<div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
    <div class="mb-3 font-bold text-2xl">
        <span class="text-900">One Product, </span>
        <span class="text-blue-600">Many Solutions</span>
    </div>
    <div class="text-700 text-sm mb-6">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
    <div class="grid">
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-desktop text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 mb-3 font-medium">Built for Developers</div>
            <span class="text-700 text-sm line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-lock text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 mb-3 font-medium">End-to-End Encryption</div>
            <span class="text-700 text-sm line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-check-circle text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 mb-3 font-medium">Easy to Use</div>
            <span class="text-700 text-sm line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-globe text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 mb-3 font-medium">Fast & Global Support</div>
            <span class="text-700 text-sm line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-github text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 mb-3 font-medium">Open Source</div>
            <span class="text-700 text-sm line-height-3">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. </span>
        </div>
        <div class="col-12 md:col-4 md:mb-4 mb-0 px-3">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-shield text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 mb-3 font-medium">Trusted Securitty</div>
            <span class="text-700 text-sm line-height-3">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</span>
        </div>
    </div>
</div>`),_=l(`<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-bold text-6xl mb-4 text-center">Pricing Plans</div>
    <div class="text-700 text-xl mb-6 text-center line-height-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>

    <div class="grid">
        <div class="col-12 lg:col-4">
            <div class="p-3 h-full">
                <div class="shadow-2 p-3 h-full flex flex-column surface-card" style="border-radius: 6px">
                    <div class="text-900 font-medium text-xl mb-2">Basic</div>
                    <div class="text-600">Plan description</div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div class="flex align-items-center">
                        <span class="font-bold text-2xl text-900">$9</span>
                        <span class="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <ul class="list-none p-0 m-0 flex-grow-1">
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Arcu vitae elementum</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Dui faucibus in ornare</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Morbi tincidunt augue</span>
                        </li>
                    </ul>
                    <hr class="mb-3 mx-0 border-top-1 border-none surface-border mt-auto" />
                    <Button label="Buy Now" class="p-3 w-full mt-auto"></Button>
                </div>
            </div>
        </div>

        <div class="col-12 lg:col-4">
            <div class="p-3 h-full">
                <div class="shadow-2 p-3 h-full flex flex-column surface-card" style="border-radius: 6px">
                    <div class="text-900 font-medium text-xl mb-2">Premium</div>
                    <div class="text-600">Plan description</div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div class="flex align-items-center">
                        <span class="font-bold text-2xl text-900">$29</span>
                        <span class="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <ul class="list-none p-0 m-0 flex-grow-1">
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Arcu vitae elementum</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Dui faucibus in ornare</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Morbi tincidunt augue</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Duis ultricies lacus sed</span>
                        </li>
                    </ul>
                    <hr class="mb-3 mx-0 border-top-1 border-none surface-border" />
                    <Button label="Buy Now" class="p-3 w-full"></Button>
                </div>
            </div>
        </div>

        <div class="col-12 lg:col-4">
            <div class="p-3 h-full">
                <div class="shadow-2 p-3 flex flex-column surface-card" style="border-radius: 6px">
                    <div class="text-900 font-medium text-xl mb-2">Enterprise</div>
                    <div class="text-600">Plan description</div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div class="flex align-items-center">
                        <span class="font-bold text-2xl text-900">$49</span>
                        <span class="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <ul class="list-none p-0 m-0 flex-grow-1">
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Arcu vitae elementum</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Dui faucibus in ornare</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Morbi tincidunt augue</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Duis ultricies lacus sed</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Imperdiet proin</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Nisi scelerisque</span>
                        </li>
                    </ul>
                    <hr class="mb-3 mx-0 border-top-1 border-none surface-border" />
                    <Button label="Buy Now" class="p-3 w-full p-button-outlined"></Button>
                </div>
            </div>
        </div>
    </div>
</div>`),i=l(`<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-700 text-center">
        <div class="text-blue-600 font-bold mb-3"><i class="pi pi-discord"></i>&nbsp;POWERED BY DISCORD</div>
        <div class="text-900 font-bold text-5xl mb-3">Join Our Design Community</div>
        <div class="text-700 text-2xl mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
        <Button label="Join Now" icon="pi pi-discord" class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"></Button>
    </div>
</div>`),p=l(`<div class="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
    <div class="font-bold mr-8">🔥 Hot Deals!</div>
    <div class="align-items-center hidden lg:flex">
        <span class="line-height-3">Libero voluptatum atque exercitationem praesentium provident odit.</span>
    </div>
    <a class="flex align-items-center ml-2 mr-8">
        <a class="text-white" href="#"><span class="underline font-bold">Learn More</span></a>
    </a>
    <a v-ripple class="flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150 p-ripple" style="width:2rem; height: 2rem">
        <i class="pi pi-times"></i>
    </a>
</div>`),x=l(`<div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <ul class="list-none p-0 m-0 flex align-items-center font-medium mb-3">
        <li>
            <a class="text-500 no-underline line-height-3 cursor-pointer">Application</a>
        </li>
        <li class="px-2">
            <i class="pi pi-angle-right text-500 line-height-3"></i>
        </li>
        <li>
            <span class="text-900 line-height-3">Analytics</span>
        </li>
    </ul>
    <div class="flex align-items-start flex-column lg:justify-content-between lg:flex-row">
        <div>
            <div class="font-medium text-3xl text-900">Customers</div>
            <div class="flex align-items-center text-700 flex-wrap">
                <div class="mr-5 flex align-items-center mt-3">
                    <i class="pi pi-users mr-2"></i>
                    <span>332 Active Users</span>
                </div>
                <div class="mr-5 flex align-items-center mt-3">
                    <i class="pi pi-globe mr-2"></i>
                    <span>9402 Sessions</span>
                </div>
                <div class="flex align-items-center mt-3">
                    <i class="pi pi-clock mr-2"></i>
                    <span>2.32m Avg. Duration</span>
                </div>
            </div>
        </div>
        <div class="mt-3 lg:mt-0">
            <Button label="Add" class="p-button-outlined mr-2" icon="pi pi-user-plus"></Button>
            <Button label="Save" icon="pi pi-check"></Button>
        </div>
    </div>
</div>`),b=l(`<div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Orders</span>
                        <div class="text-900 font-medium text-xl">152</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">24 new </span>
                <span class="text-500">since last visit</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Revenue</span>
                        <div class="text-900 font-medium text-xl">$2.100</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-map-marker text-orange-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">%52+ </span>
                <span class="text-500">since last week</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Customers</span>
                        <div class="text-900 font-medium text-xl">28441</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-inbox text-cyan-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">520  </span>
                <span class="text-500">newly registered</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Comments</span>
                        <div class="text-900 font-medium text-xl">152 Unread</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-comment text-purple-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">85 </span>
                <span class="text-500">responded</span>
            </div>
        </div>
    </div>
</div>`),d=l(`<div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
    <div class="text-center mb-5">
        <img src="/demo/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3">
        <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span class="text-600 font-medium line-height-3">Don't have an account?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
    </div>

    <div>
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="email1" type="text" class="w-full mb-3" />

        <label for="password1" class="block text-900 font-medium mb-2">Password</label>
        <InputText id="password1" type="password" class="w-full mb-3" />

        <div class="flex align-items-center justify-content-between mb-6">
            <div class="flex align-items-center">
                <Checkbox id="rememberme1" :binary="true" v-model="checked" class="mr-2"></Checkbox>
                <label for="rememberme1">Remember me</label>
            </div>
            <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
        </div>

        <Button label="Sign In" icon="pi pi-user" class="w-full"></Button>
    </div>
</div>`),V=l(`<div class="surface-section">
    <div class="font-medium text-3xl text-900 mb-3">Movie Information</div>
    <div class="text-500 mb-5">Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.</div>
    <ul class="list-none p-0 m-0">
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Title</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Heat</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Genre</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                <Chip label="Crime" class="mr-2"></Chip>
                <Chip label="Drama" class="mr-2"></Chip>
                <Chip label="Thriller"></Chip>
            </div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Director</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Michael Mann</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Actors</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Robert De Niro, Al Pacino</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Plot</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
                A group of professional bank robbers start to feel the heat from police
                when they unknowingly leave a clue at their latest heist.</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
            </div>
        </li>
    </ul>
</div>`),P=l(`<div class="surface-card p-4 shadow-2 border-round">
    <div class="text-3xl font-medium text-900 mb-3">Card Title</div>
    <div class="font-medium text-500 mb-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
    <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
</div>`),w=l(!1);return(Fs,y)=>{const t=A,o=le,k=T,S=$,f=U,I=D("ripple");return m(),u("div",null,[s(o,{header:"Hero",code:a.value},{default:c(()=>[e("div",ae,[e("div",oe,[e("section",null,[re,de,me,s(t,{label:"Learn More",type:"button",class:"mr-3 p-button-raised"}),s(t,{label:"Live Demo",type:"button",class:"p-button-outlined"})])]),ue])]),_:1},8,["code"]),s(o,{header:"Feature",code:r.value},{default:c(()=>[pe]),_:1},8,["code"]),s(o,{header:"Pricing",code:_.value},{default:c(()=>[e("div",xe,[be,fe,e("div",ve,[e("div",he,[e("div",ge,[e("div",_e,[we,ye,ke,Be,Ce,De,je,s(t,{label:"Buy Now",class:"p-3 w-full mt-auto"})])])]),e("div",Ee,[e("div",Ve,[e("div",Pe,[Se,Ie,qe,Ae,Me,Ne,Oe,s(t,{label:"Buy Now",class:"p-3 w-full"})])])]),e("div",Re,[e("div",Le,[e("div",Te,[$e,Ue,He,We,Fe,Ge,Je,s(t,{label:"Buy Now",class:"p-3 w-full p-button-outlined"})])])])])])]),_:1},8,["code"]),s(o,{header:"Call to Action",code:i.value},{default:c(()=>[e("div",Ye,[e("div",ze,[Ke,Qe,Xe,s(t,{label:"Join Now",icon:"pi pi-discord",class:"font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"})])])]),_:1},8,["code"]),s(o,{header:"Banner",code:p.value,containerClass:"surface-section py-8"},{default:c(()=>[e("div",Ze,[es,ss,ts,j((m(),u("a",is,cs)),[[I]])])]),_:1},8,["code"]),s(o,{header:"Page Heading",code:x.value},{default:c(()=>[e("div",ns,[as,e("div",os,[rs,e("div",ds,[s(t,{label:"Add",class:"p-button-outlined mr-2",icon:"pi pi-user-plus"}),s(t,{label:"Save",icon:"pi pi-check"})])])])]),_:1},8,["code"]),s(o,{header:"Stats",code:b.value},{default:c(()=>[ms]),_:1},8,["code"]),s(o,{header:"Sign-In",code:d.value,containerClass:"surface-ground px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"},{default:c(()=>[e("div",us,[ps,e("div",null,[xs,s(k,{id:"email1",type:"text",class:"w-full mb-3"}),bs,s(k,{id:"password1",type:"password",class:"w-full mb-3"}),e("div",fs,[e("div",vs,[s(S,{id:"rememberme1",modelValue:w.value,"onUpdate:modelValue":y[0]||(y[0]=q=>w.value=q),binary:!0,class:"mr-2"},null,8,["modelValue"]),hs]),gs]),s(t,{label:"Sign In",icon:"pi pi-user",class:"w-full"})])])]),_:1},8,["code"]),s(o,{header:"Description List",code:V.value,containerClass:"surface-section px-4 py-8 md:px-6 lg:px-8"},{default:c(()=>[e("div",_s,[ws,ys,e("ul",ks,[e("li",Bs,[Cs,Ds,e("div",js,[s(t,{label:"Edit",icon:"pi pi-pencil",class:"p-button-text"})])]),e("li",Es,[Vs,e("div",Ps,[s(f,{label:"Crime",class:"mr-2"}),s(f,{label:"Drama",class:"mr-2"}),s(f,{label:"Thriller"})]),e("div",Ss,[s(t,{label:"Edit",icon:"pi pi-pencil",class:"p-button-text"})])]),e("li",Is,[qs,As,e("div",Ms,[s(t,{label:"Edit",icon:"pi pi-pencil",class:"p-button-text"})])]),e("li",Ns,[Os,Rs,e("div",Ls,[s(t,{label:"Edit",icon:"pi pi-pencil",class:"p-button-text"})])]),e("li",Ts,[$s,Us,e("div",Hs,[s(t,{label:"Edit",icon:"pi pi-pencil",class:"p-button-text"})])])])])]),_:1},8,["code"]),s(o,{header:"Card",code:P.value,containerClass:"px-4 py-8 md:px-6 lg:px-8"},{default:c(()=>[Ws]),_:1},8,["code"])])}}};export{lt as default};
