"use strict";(self.webpackChunkc_users_booba_webstorm_projects_basedge_documentation=self.webpackChunkc_users_booba_webstorm_projects_basedge_documentation||[]).push([[7069],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>s});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),s=a,b=u["".concat(c,".").concat(s)]||u[s]||m[s]||o;return r?n.createElement(b,l(l({ref:t},p),{},{components:r})):n.createElement(b,l({ref:t},p))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8492:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"\u041f\u043e\u0433\u043e\u0434\u0430",keywords:["\u041f\u043e\u0433\u043e\u0434\u0430 Twitch Basedgebot"]},l="\u041f\u043e\u0433\u043e\u0434\u0430",i={unversionedId:"commands/weather",id:"commands/weather",title:"\u041f\u043e\u0433\u043e\u0434\u0430",description:"\u041f\u043e\u0433\u043e\u0434\u0430 \u2014 \u044d\u0442\u043e \u0442\u043e, \u0447\u0442\u043e \u0412\u044b \u0432\u0438\u0434\u0438\u0442\u0435 \u043d\u0430 \u0443\u043b\u0438\u0446\u0435, \u0438 \u0447\u0442\u043e \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0412\u0430\u0448 \u0441\u043c\u0430\u0440\u0442\u0444\u043e\u043d, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0442\u043e, \u043a\u0430\u043a \u0434\u043e\u043b\u0433\u043e \u0412\u044b \u0433\u043e\u0442\u043e\u0432\u044b \u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u043d\u0430 \u0443\u043b\u0438\u0446\u0435. \u0414\u043e\u0436\u0434\u043b\u0438\u0432\u0430\u044f \u043f\u043e\u0433\u043e\u0434\u0430 \u2014 \u044d\u0442\u043e \u0442\u043e, \u0447\u0442\u043e \u0412\u0430\u043c \u0441\u043a\u0430\u0437\u0430\u043b\u0438 \u0441\u0438\u043d\u043e\u043f\u0442\u0438\u043a\u0438, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0442\u043e, \u0447\u0442\u043e \u0412\u044b \u0441\u043b\u044b\u0448\u0438\u0442\u0435 \u043f\u043e \u0440\u0430\u0434\u0438\u043e. \u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043f\u043e\u0433\u043e\u0434\u043d\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u0439, \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c, \u043a\u0430\u043a \u0412\u0430\u043c \u043b\u0443\u0447\u0448\u0435 \u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u0434\u0435\u043d\u044c. \u0421\u0432\u0435\u0436\u0430\u044f \u043f\u043e\u0433\u043e\u0434\u0430 \u2014 \u044d\u0442\u043e \u0442\u043e, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e.",source:"@site/docs/commands/weather.md",sourceDirName:"commands",slug:"/commands/weather",permalink:"/Basedge-Documentation/docs/commands/weather",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"\u041f\u043e\u0433\u043e\u0434\u0430",keywords:["\u041f\u043e\u0433\u043e\u0434\u0430 Twitch Basedgebot"]},sidebar:"tutorialSidebar",previous:{title:"\u0422\u0440\u0430\u043d\u0441\u043b\u0438\u0442",permalink:"/Basedge-Documentation/docs/commands/transliteration"},next:{title:"\u041c\u043e\u0434\u0435\u0440\u0430\u0446\u0438\u044f",permalink:"/Basedge-Documentation/docs/category/\u043c\u043e\u0434\u0435\u0440\u0430\u0446\u0438\u044f"}},c={},d=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u043a\u043e\u043c\u0430\u043d\u0434\u044b",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",level:3}],p={toc:d};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043f\u043e\u0433\u043e\u0434\u0430"},"\u041f\u043e\u0433\u043e\u0434\u0430"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("quote",null,"\u041f\u043e\u0433\u043e\u0434\u0430 \u2014 \u044d\u0442\u043e \u0442\u043e, \u0447\u0442\u043e \u0412\u044b \u0432\u0438\u0434\u0438\u0442\u0435 \u043d\u0430 \u0443\u043b\u0438\u0446\u0435, \u0438 \u0447\u0442\u043e \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0412\u0430\u0448 \u0441\u043c\u0430\u0440\u0442\u0444\u043e\u043d, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0442\u043e, \u043a\u0430\u043a \u0434\u043e\u043b\u0433\u043e \u0412\u044b \u0433\u043e\u0442\u043e\u0432\u044b \u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u043d\u0430 \u0443\u043b\u0438\u0446\u0435. \u0414\u043e\u0436\u0434\u043b\u0438\u0432\u0430\u044f \u043f\u043e\u0433\u043e\u0434\u0430 \u2014 \u044d\u0442\u043e \u0442\u043e, \u0447\u0442\u043e \u0412\u0430\u043c \u0441\u043a\u0430\u0437\u0430\u043b\u0438 \u0441\u0438\u043d\u043e\u043f\u0442\u0438\u043a\u0438, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0442\u043e, \u0447\u0442\u043e \u0412\u044b \u0441\u043b\u044b\u0448\u0438\u0442\u0435 \u043f\u043e \u0440\u0430\u0434\u0438\u043e. \u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043f\u043e\u0433\u043e\u0434\u043d\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u0439, \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c, \u043a\u0430\u043a \u0412\u0430\u043c \u043b\u0443\u0447\u0448\u0435 \u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u0434\u0435\u043d\u044c. \u0421\u0432\u0435\u0436\u0430\u044f \u043f\u043e\u0433\u043e\u0434\u0430 \u2014 \u044d\u0442\u043e \u0442\u043e, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e."))),(0,a.kt)("p",{parentName:"blockquote"},"\xa9 SLONB0T")),(0,a.kt)("h3",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u043a\u043e\u043c\u0430\u043d\u0434\u044b"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"),(0,a.kt)("code",null,"!\u043f\u043e\u0433\u043e\u0434\u0430 location"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"location"),"  -  \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0440\u0435\u0433\u0438\u043e\u043d\u0430"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u041b\u043e\u043a\u0430\u0446\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043b\u044e\u0431\u044b\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c, \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u043c \u043d\u0430 \u043a\u0430\u0440\u0442\u0435"),(0,a.kt)("p",{parentName:"admonition"},"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,a.kt)("p",null,(0,a.kt)("code",null,"!\u043f\u043e\u0433\u043e\u0434\u0430 \u0410\u0432\u0441\u0442\u0440\u0430\u043b\u0438\u044f")),(0,a.kt)("p",null,(0,a.kt)("code",null,"!\u043f\u043e\u0433\u043e\u0434\u0430 \u0422\u044e\u043c\u0435\u043d\u044c"))),(0,a.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,a.kt)("img",{src:"https://media3.giphy.com/media/Zio1zV6iWZtpdmPgQA/giphy.gif?cid=790b76118dc6b58e9b690d329c77699258ffc3668d032d63&rid=giphy.gif&ct=g",alt:"\u041f\u043e\u0433\u043e\u0434\u0430, \u043f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",width:"350"}),(0,a.kt)("img",{src:"https://media4.giphy.com/media/7u9VKPjSbmVMSkGjQw/giphy.gif?cid=790b7611d302aeaebf456e0278444b8dbc34191dcbe728db&rid=giphy.gif&ct=g",alt:"\u041f\u043e\u0433\u043e\u0434\u0430, \u043f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",width:"350",id:"example-right"}),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435..."),(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Global cooldown"),(0,a.kt)("th",{parentName:"tr",align:"left"},"30 seconds\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"User cooldown"),(0,a.kt)("td",{parentName:"tr",align:"left"},"1 minute")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Mod only"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Sub only"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Aliases"),(0,a.kt)("td",{parentName:"tr",align:"left"},"!weather")))))),(0,a.kt)("p",{class:"update"},"Last update on 19.08.2022"))}m.isMDXComponent=!0}}]);