"use strict";(self.webpackChunkc_users_booba_webstorm_projects_basedge_documentation=self.webpackChunkc_users_booba_webstorm_projects_basedge_documentation||[]).push([[245],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434",keywords:["\u041f\u0435\u0440\u0435\u0432\u043e\u0434 Twitch Basedgebot"]},i="\u041f\u0435\u0440\u0435\u0432\u043e\u0434",l={unversionedId:"commands/transfer",id:"commands/transfer",title:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434",description:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u2014 \u044d\u0442\u043e \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043b\u043e\u0432\u0430, \u044d\u0442\u043e \u0435\u0449\u0435 \u0438 \u043c\u044b\u0441\u043b\u0438, \u0438\u0434\u0435\u0438, \u043e\u0431\u0440\u0430\u0437\u044b \u0438 \u0447\u0443\u0432\u0441\u0442\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u044b \u0432\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0435\u043c \u0432 \u0441\u043b\u043e\u0432\u043e, \u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0442\u0440\u0430\u0436\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u043f\u0438\u0441\u044c\u043c\u0435. \u041f\u0435\u0440\u0435\u0432\u043e\u0434\u0447\u0438\u043a\u0438 \u2013 \u044d\u0442\u043e \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u0438, \u0443 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0435\u0441\u0442\u044c \u0441\u0432\u043e\u0439 \u0441\u0442\u0438\u043b\u044c \u0440\u0430\u0431\u043e\u0442\u044b, \u0441\u0432\u043e\u0438 \u0432\u0437\u0433\u043b\u044f\u0434\u044b \u043d\u0430 \u0436\u0438\u0437\u043d\u044c \u0438 \u043d\u0430 \u0442\u043e, \u0447\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430.",source:"@site/docs/commands/transfer.md",sourceDirName:"commands",slug:"/commands/transfer",permalink:"/Basedge-Documentation/docs/commands/transfer",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434",keywords:["\u041f\u0435\u0440\u0435\u0432\u043e\u0434 Twitch Basedgebot"]},sidebar:"tutorialSidebar",previous:{title:"\u041f\u0440\u043e\u0433\u043d\u043e\u0437",permalink:"/Basedge-Documentation/docs/commands/forecast"},next:{title:"\u0422\u0440\u0430\u043d\u0441\u043b\u0438\u0442",permalink:"/Basedge-Documentation/docs/commands/transliteration"}},c={},s=[{value:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",level:3},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u043a\u043e\u043c\u0430\u043d\u0434\u044b",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043f\u0435\u0440\u0435\u0432\u043e\u0434"},"\u041f\u0435\u0440\u0435\u0432\u043e\u0434"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("quote",null,"\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u2014 \u044d\u0442\u043e \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043b\u043e\u0432\u0430, \u044d\u0442\u043e \u0435\u0449\u0435 \u0438 \u043c\u044b\u0441\u043b\u0438, \u0438\u0434\u0435\u0438, \u043e\u0431\u0440\u0430\u0437\u044b \u0438 \u0447\u0443\u0432\u0441\u0442\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u044b \u0432\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0435\u043c \u0432 \u0441\u043b\u043e\u0432\u043e, \u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0442\u0440\u0430\u0436\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u043f\u0438\u0441\u044c\u043c\u0435. \u041f\u0435\u0440\u0435\u0432\u043e\u0434\u0447\u0438\u043a\u0438 \u2013 \u044d\u0442\u043e \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u0438, \u0443 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0435\u0441\u0442\u044c \u0441\u0432\u043e\u0439 \u0441\u0442\u0438\u043b\u044c \u0440\u0430\u0431\u043e\u0442\u044b, \u0441\u0432\u043e\u0438 \u0432\u0437\u0433\u043b\u044f\u0434\u044b \u043d\u0430 \u0436\u0438\u0437\u043d\u044c \u0438 \u043d\u0430 \u0442\u043e, \u0447\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430."))),(0,a.kt)("p",{parentName:"blockquote"},"\xa9 SLONB0T")),(0,a.kt)("h3",{id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,a.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque neque risus, rutrum non consectetur a, sodales ut lacus. Proin sodales velit velit, quis fringilla arcu fringilla ac. Etiam augue nisi, rhoncus nec viverra sit amet, auctor in velit. Nunc ut mi finibus lectus euismod dignissim vel nec nibh. Pellentesque cursus pellentesque sem ut vestibulum. Nulla est ante, euismod sed tincidunt quis, gravida non odio."),(0,a.kt)("h3",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u043a\u043e\u043c\u0430\u043d\u0434\u044b"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"),(0,a.kt)("code",null,"!\u043f\u0435\u0440\u0435\u0432\u043e\u0434 nickname amount"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"nickname"),"  -  \u043d\u0438\u043a\u043d\u0435\u0439\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"amount"),"  -  \u0441\u0443\u043c\u043c\u0430 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430"))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u0417\u0430\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u0440\u0443\u0433\u043e\u043c\u0443 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0443 \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u043d\u044f\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u0440\u0435\u043c\u044f"),(0,a.kt)("p",{parentName:"admonition"},"\u041b\u0438\u043c\u0438\u0442 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u043e\u0432 \u0437\u0430 \u0441\u0443\u0442\u043a\u0438 - 10"),(0,a.kt)("p",{parentName:"admonition"},"\u041a\u043e\u043c\u0438\u0441\u0441\u0438\u044f - 5% \u043e\u0442 \u0441\u0443\u043c\u043c\u044b \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u0421\u0443\u043c\u043c\u0443 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430 \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441\u0430 ",(0,a.kt)("b",null,"-\u043a")),(0,a.kt)("p",{parentName:"admonition"},"\u041f\u0440\u0438\u043c\u0435\u0440: ",(0,a.kt)("code",null,"!\u043f\u0435\u0440\u0435\u0432\u043e\u0434 dyzrol 5\u043a"))),(0,a.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,a.kt)("img",{src:"https://media3.giphy.com/media/pjwvxlM80bOuOq3NPX/giphy.gif?cid=790b761136fcb385142773d0340d6db8a8f43d7470472e4c&rid=giphy.gif&ct=g",alt:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434, \u043f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",width:"350"}),(0,a.kt)("img",{src:"https://media3.giphy.com/media/XAt9V1lOQCvy4nXrck/giphy.gif?cid=790b76114566325c8a86c83a0a58c2d3483382dd4f0a0088&rid=giphy.gif&ct=g",alt:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434, \u043f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",width:"350",id:"example-right"}),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435..."),(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Global cooldown"),(0,a.kt)("th",{parentName:"tr",align:"left"},"3 seconds\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"User cooldown"),(0,a.kt)("td",{parentName:"tr",align:"left"},"15 seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Mod only"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Sub only"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Aliases"),(0,a.kt)("td",{parentName:"tr",align:"left"},"!transfer, !p2p")))))),(0,a.kt)("p",{class:"update"},"Last update on 19.08.2022"))}d.isMDXComponent=!0}}]);