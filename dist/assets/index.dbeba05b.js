/* empty css              */import{a1 as z,a2 as A,a3 as F,a4 as $,a5 as I,y as p,H as l,z as b,C as n,D as a,A as r,a6 as m,B as w,a7 as x,a8 as E,a9 as J,e as L,aa as M,x as O,ab as N,r as q,o as B,ac as C,w as V,E as k,ad as H,I as h,L as T,ae as P,af as K,ag as Q,ah as R,ai as j,p as S}from"./index.ac3b1fc8.js";/* empty css               *//* empty css               *//* empty css               */const G={components:{IconGithub:z,IconQqCircleFill:A,IconMoon:F,IconSun:$},data(){return{theme:"light",latency:0,initialFetch:!0}},computed:{latencyClass(){return this.latency<100?"latency-green":this.latency<200?"latency-orange":"latency-red"}},mounted(){this.fetchLatency(),setTimeout(()=>{this.fetchLatency(),setInterval(this.fetchLatency,1e4)},1e3)},methods:{toggleTheme(){this.theme=this.theme==="light"?"dark":"light",this.theme==="dark"?document.body.setAttribute("arco-theme","dark"):document.body.removeAttribute("arco-theme")},fetchLatency(){const f=Date.now();fetch("http://127.0.0.1:443/muip/auth_admin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({admin_key:"db322d9c-b738-48a0-9194-94e81d82ee53",key_type:"pem"})}).then(t=>t.json()).then(()=>{const i=Date.now()-f;this.latency=i}).catch(t=>{console.error("Error fetching latency:",t)})}}},W={class:"full-screen"},Y={class:"extra-container"},X={href:"https://github.com/lctoolsweb/LunarCoreTools/",target:"_blank",rel:"noopener noreferrer",class:"github-link"},Z={href:"http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=J54m8XB3Ig8VJ41ICO8KW029aSz4fFB-&authKey=tq9%2BSsg2M30Jy1v9OwJEa%2B%2FmarnH2AslQYQsv24BkkeqY39%2FtlpZsrIkqO01SScg&noverify=0&group_code=124750952",target:"_blank",rel:"noopener noreferrer",class:"qq-link"};function U(f,t,i,y,e,s){const o=p("icon-github"),g=p("icon-qq-circle-fill"),u=p("icon-moon"),c=p("icon-sun"),_=J;return l(),b("div",W,[n(_,{style:E({width:"100vw",background:e.theme==="dark"?"black":"white"}),title:"Ciallo\uFF5E(\u2220\u30FB\u03C9< )\u2312\u2606Tools"},{extra:a(()=>[r("div",Y,[r("span",{class:m(s.latencyClass)},w(e.latency)+" ms",3),r("a",X,[n(o,{class:m([{"dark-icon":e.theme==="dark"},"icon"])},null,8,["class"])]),r("a",Z,[n(g,{class:m([{"dark-icon":e.theme==="dark"},"icon"])},null,8,["class"])]),r("button",{onClick:t[0]||(t[0]=(...v)=>s.toggleTheme&&s.toggleTheme(...v)),class:"theme-toggle"},[e.theme==="light"?(l(),x(u,{key:0,class:m([{"dark-icon":e.theme==="dark"},"icon theme-icon"])},null,8,["class"])):(l(),x(c,{key:1,class:m([{"dark-icon":e.theme==="dark"},"icon theme-icon"])},null,8,["class"]))])])]),_:1},8,["style"])])}const ee=I(G,[["render",U]]);const te={class:"nav"},ne=L({__name:"startnav",setup(f){M();const{t,locale:i}=O(),y=N([{name:"frequently",path:"/start/commuse"},{name:"Customrelics",path:"/start/holyrelic"},{name:"Graduationrelics",path:"/start/holyrelic2"},{name:"Monsterspawning",path:"/start/monster"},{name:"Presetshortcuts",path:"/start/other"},{name:"LightCones",path:"/start/weapon"},{name:"item",path:"/start/thing"},{name:"character",path:"/start/avatar"},{name:"food",path:"/start/food"},{name:"avatar",path:"/start/page1"},{name:"scene",path:"/start/scene"},{name:"RemoteControl",path:"/start/control"},{name:"about",path:"/start/about"},{name:"suggest",path:"/start/suggest"}]);function e(u){C.push({path:u})}const s=q([""]),o=q(!0),g=()=>{o.value=window.innerWidth<=768};return g(),window.addEventListener("resize",g),B(()=>{s.value=[C.currentRoute.value.fullPath]}),V(()=>C.currentRoute.value.path,(u,c)=>{s.value=[u]},{immediate:!0}),B(()=>{i.value=navigator.language.includes("zh")?"zh":"en"}),(u,c)=>{const _=Q,v=R,D=j;return l(),b("div",te,[n(D,{class:"menu","default-collapsed":o.value,showCollapseButton:"","default-open-keys":["0","1","2","3"],"selected-keys":s.value},{default:a(()=>[n(v,{key:"0"},{icon:a(()=>[n(k(H))]),title:a(()=>[h(w(k(t)("menu.main")),1)]),default:a(()=>[(l(!0),b(T,null,P(y,(d,re)=>(l(),x(_,{key:d.path,onClick:le=>e(d.path)},{default:a(()=>[h(w(k(t)(`menu.${d.name.toLowerCase()}`)),1)]),_:2},1032,["onClick"]))),128))]),_:1}),n(v,{key:"3"},{icon:a(()=>[n(k(K))]),title:a(()=>[h("\u5176\u4ED6")]),default:a(()=>[n(_,{key:"/start/note",onClick:c[0]||(c[0]=d=>e("/start/note"))},{default:a(()=>[h(" \u53D1\u75C5\u6587\u5B66\u751F\u6210\u5668 ")]),_:1}),n(_,{key:"/start/player",onClick:c[1]||(c[1]=d=>e("/start/information"))},{default:a(()=>[h(" \u670D\u52A1\u5668\u72B6\u6001 ")]),_:1})]),_:1})]),_:1},8,["default-collapsed","selected-keys"])])}}});const ae=I(ne,[["__scopeId","data-v-cdffef3f"]]),se={class:"cont"},oe={class:"selectcom"},ce=L({__name:"index",setup(f){const t=M();function i(e){const s={type:"CMD",data:e},o=JSON.stringify(s);t.socketSend(o)}const y=q(t.isLogin);return S("send",i),S("isLogin",!y),(e,s)=>{const o=p("router-view");return l(),b(T,null,[n(ee),r("div",se,[n(ae),r("div",oe,[n(o)])])],64)}}});const he=I(ce,[["__scopeId","data-v-29539f6d"]]);export{he as default};