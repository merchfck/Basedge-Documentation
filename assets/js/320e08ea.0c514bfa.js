"use strict";(self.webpackChunkc_users_booba_webstorm_projects_basedge_documentation=self.webpackChunkc_users_booba_webstorm_projects_basedge_documentation||[]).push([[7069],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>s});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),d=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=d(t.components);return r.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=d(n),s=a,k=u["".concat(c,".").concat(s)]||u[s]||m[s]||o;return n?r.createElement(k,l(l({ref:e},p),{},{components:n})):r.createElement(k,l({ref:e},p))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8492:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"\u041f\u043e\u0433\u043e\u0434\u0430",keywords:["\u041f\u043e\u0433\u043e\u0434\u0430 Twitch Basedgebot"]},l="\u041f\u043e\u0433\u043e\u0434\u0430",i={unversionedId:"commands/weather",id:"commands/weather",title:"\u041f\u043e\u0433\u043e\u0434\u0430",description:"\u041f\u043e\u0433\u043e\u0434\u0430 \u2014 \u044d\u0442\u043e \u0442\u043e, \u0447\u0442\u043e \u0412\u044b \u0432\u0438\u0434\u0438\u0442\u0435 \u043d\u0430 \u0443\u043b\u0438\u0446\u0435, \u0438 \u0447\u0442\u043e \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0412\u0430\u0448 \u0441\u043c\u0430\u0440\u0442\u0444\u043e\u043d, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0442\u043e, \u043a\u0430\u043a \u0434\u043e\u043b\u0433\u043e \u0412\u044b \u0433\u043e\u0442\u043e\u0432\u044b \u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u043d\u0430 \u0443\u043b\u0438\u0446\u0435. \u0414\u043e\u0436\u0434\u043b\u0438\u0432\u0430\u044f \u043f\u043e\u0433\u043e\u0434\u0430 \u2014 \u044d\u0442\u043e \u0442\u043e, \u0447\u0442\u043e \u0412\u0430\u043c \u0441\u043a\u0430\u0437\u0430\u043b\u0438 \u0441\u0438\u043d\u043e\u043f\u0442\u0438\u043a\u0438, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0442\u043e, \u0447\u0442\u043e \u0412\u044b \u0441\u043b\u044b\u0448\u0438\u0442\u0435 \u043f\u043e \u0440\u0430\u0434\u0438\u043e. \u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043f\u043e\u0433\u043e\u0434\u043d\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u0439, \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c, \u043a\u0430\u043a \u0412\u0430\u043c \u043b\u0443\u0447\u0448\u0435 \u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u0434\u0435\u043d\u044c. \u0421\u0432\u0435\u0436\u0430\u044f \u043f\u043e\u0433\u043e\u0434\u0430 \u2014 \u044d\u0442\u043e \u0442\u043e, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e.",source:"@site/docs/commands/weather.md",sourceDirName:"commands",slug:"/commands/weather",permalink:"/Basedge-Documentation/docs/commands/weather",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"\u041f\u043e\u0433\u043e\u0434\u0430",keywords:["\u041f\u043e\u0433\u043e\u0434\u0430 Twitch Basedgebot"]},sidebar:"tutorialSidebar",previous:{title:"\u0422\u0440\u0430\u043d\u0441\u043b\u0438\u0442",permalink:"/Basedge-Documentation/docs/commands/transliteration"},next:{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",permalink:"/Basedge-Documentation/docs/mod/custom_commands"}},c={},d=[{value:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",level:3},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u043a\u043e\u043c\u0430\u043d\u0434\u044b",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",level:3}],p={toc:d};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043f\u043e\u0433\u043e\u0434\u0430"},"\u041f\u043e\u0433\u043e\u0434\u0430"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("quote",null,"\u041f\u043e\u0433\u043e\u0434\u0430 \u2014 \u044d\u0442\u043e \u0442\u043e, \u0447\u0442\u043e \u0412\u044b \u0432\u0438\u0434\u0438\u0442\u0435 \u043d\u0430 \u0443\u043b\u0438\u0446\u0435, \u0438 \u0447\u0442\u043e \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0412\u0430\u0448 \u0441\u043c\u0430\u0440\u0442\u0444\u043e\u043d, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0442\u043e, \u043a\u0430\u043a \u0434\u043e\u043b\u0433\u043e \u0412\u044b \u0433\u043e\u0442\u043e\u0432\u044b \u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u043d\u0430 \u0443\u043b\u0438\u0446\u0435. \u0414\u043e\u0436\u0434\u043b\u0438\u0432\u0430\u044f \u043f\u043e\u0433\u043e\u0434\u0430 \u2014 \u044d\u0442\u043e \u0442\u043e, \u0447\u0442\u043e \u0412\u0430\u043c \u0441\u043a\u0430\u0437\u0430\u043b\u0438 \u0441\u0438\u043d\u043e\u043f\u0442\u0438\u043a\u0438, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0442\u043e, \u0447\u0442\u043e \u0412\u044b \u0441\u043b\u044b\u0448\u0438\u0442\u0435 \u043f\u043e \u0440\u0430\u0434\u0438\u043e. \u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043f\u043e\u0433\u043e\u0434\u043d\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u0439, \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c, \u043a\u0430\u043a \u0412\u0430\u043c \u043b\u0443\u0447\u0448\u0435 \u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u0434\u0435\u043d\u044c. \u0421\u0432\u0435\u0436\u0430\u044f \u043f\u043e\u0433\u043e\u0434\u0430 \u2014 \u044d\u0442\u043e \u0442\u043e, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e."))),(0,a.kt)("p",{parentName:"blockquote"},"\xa9 ",(0,a.kt)("a",{class:"slonbot weather",href:"https://www.twitch.tv/slonb0t"},"SLONB0T"))),(0,a.kt)("h3",{id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,a.kt)("p",null,"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u0437\u043d\u0430\u0442\u044c \u0442\u043e\u0447\u043d\u044b\u0439 \u043f\u0440\u043e\u0433\u043d\u043e\u0437 \u043f\u043e\u0433\u043e\u0434\u044b \u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0449\u0435\u0439 \u043b\u043e\u043a\u0430\u0446\u0438\u0438. \u0412 \u043d\u0435\u0435 \u0432\u0445\u043e\u0434\u044f\u0442 \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430, \u043e\u0441\u0430\u0434\u043a\u0438, \u0432\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c, \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0435\u0442\u0440\u0430 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b."),(0,a.kt)("h3",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u043a\u043e\u043c\u0430\u043d\u0434\u044b"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"),(0,a.kt)("code",null,"!\u043f\u043e\u0433\u043e\u0434\u0430 location"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"location"),"  -  \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0440\u0435\u0433\u0438\u043e\u043d\u0430"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u0437\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u0443\u044e \u043b\u043e\u043a\u0430\u0446\u0438\u044e")),(0,a.kt)("code",null,"!\u043f\u043e\u0433\u043e\u0434\u0430 set location"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u0412\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c ",(0,a.kt)("code",null,"!\u043f\u043e\u0433\u043e\u0434\u0430.")," \u041f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e ",(0,a.kt)("a",{parentName:"p",href:"/"},"Basedge")," \u0432\u044b\u0432\u0435\u0434\u0435\u0442 \u043f\u0440\u043e\u0433\u043d\u043e\u0437 \u043f\u043e\u0433\u043e\u0434\u044b \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0439 \u043b\u043e\u043a\u0430\u0446\u0438\u0438"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u041b\u043e\u043a\u0430\u0446\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043b\u044e\u0431\u044b\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c, \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u043c \u043d\u0430 \u043a\u0430\u0440\u0442\u0435"),(0,a.kt)("p",{parentName:"admonition"},"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,a.kt)("p",null,(0,a.kt)("code",null,"!\u043f\u043e\u0433\u043e\u0434\u0430 \u0410\u0432\u0441\u0442\u0440\u0430\u043b\u0438\u044f")),(0,a.kt)("p",null,(0,a.kt)("code",null,"!\u043f\u043e\u0433\u043e\u0434\u0430 \u0422\u044e\u043c\u0435\u043d\u044c"))),(0,a.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,a.kt)("img",{src:"https://media3.giphy.com/media/Zio1zV6iWZtpdmPgQA/giphy.gif?cid=790b76118dc6b58e9b690d329c77699258ffc3668d032d63&rid=giphy.gif&ct=g",alt:"\u041f\u043e\u0433\u043e\u0434\u0430, \u043f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",width:"350"}),(0,a.kt)("img",{src:"https://media4.giphy.com/media/7u9VKPjSbmVMSkGjQw/giphy.gif?cid=790b7611d302aeaebf456e0278444b8dbc34191dcbe728db&rid=giphy.gif&ct=g",alt:"\u041f\u043e\u0433\u043e\u0434\u0430, \u043f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",width:"350",id:"example-right"}),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435..."),(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Global cooldown"),(0,a.kt)("th",{parentName:"tr",align:"left"},"30 seconds\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"User cooldown"),(0,a.kt)("td",{parentName:"tr",align:"left"},"1 minute")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Mod only"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Sub only"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Aliases"),(0,a.kt)("td",{parentName:"tr",align:"left"},"!weather")))))),(0,a.kt)("p",{class:"update"},"Last update on 19.08.2022"))}m.isMDXComponent=!0}}]);