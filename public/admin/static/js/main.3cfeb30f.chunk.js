(window.webpackJsonpadmin=window.webpackJsonpadmin||[]).push([[0],{481:function(e,t,n){e.exports=n(930)},486:function(e,t,n){},528:function(e,t){},535:function(e,t){},549:function(e,t){},550:function(e,t){},930:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(33),i=n.n(a),c=(n(486),n(407)),s=n(182),u=n.n(s),l=n(209),p=n(117),f=function(e,t){switch(e){case p.d:var n=t.username,r=t.password,o=new Request("/authentication_token",{method:"POST",body:JSON.stringify({email:n,password:r}),headers:new Headers({"Content-Type":"application/json"})});return fetch(o).then((function(e){if(e.status<200||e.status>=300)throw new Error(e.statusText);return e.json()})).then((function(e){var t=e.token;localStorage.setItem("token",t),window.location.replace("/")}));case p.e:localStorage.removeItem("token");break;case p.b:if(401===t.status||403===t.status)return localStorage.removeItem("token"),Promise.reject();break;case p.a:return localStorage.getItem("token")?Promise.resolve():Promise.reject();default:return Promise.resolve()}},d=n(412),m=n(935);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={Authorization:"Bearer ".concat(localStorage.getItem("token"))},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(l.fetchHydra)(e,w({},t,{headers:new Headers(v)}))},g=function(e){return Object(l.hydraClient)(e,b)},y=function(e){return u()(e,{headers:new Headers(v)}).then((function(e){return{api:e.api}}),(function(e){var t=e.api,n=e.status;return 401===n?Promise.resolve({api:t,status:n,customRoutes:[o.a.createElement(d.a,{path:"/",render:function(){return o.a.createElement(m.a,{to:"/login"})}})]}):Promise.reject(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement((function(){return o.a.createElement(l.HydraAdmin,{apiDocumentationParser:y,authProvider:f,entrypoint:"/api",dataProvider:g})}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[481,1,2]]]);
//# sourceMappingURL=main.6f5d79a4.chunk.js.map