(this["webpackJsonp@frame1059/demo-app"]=this["webpackJsonp@frame1059/demo-app"]||[]).push([[0],{119:function(e,t,n){},139:function(e){e.exports=JSON.parse('{"packageVersion":"1.0.0","buildDate":"2021-08-07 09:28:52 +03","buildKey":1452,"buildsId":{"deviceId":4166,"devFolderName":"dev-4166","developerName":"Andrey Vyalkov"}}')},141:function(e){e.exports=JSON.parse('{"short_name":"Demo App","name":"Demo App Sample","icons":[{"src":"favicon.ico","sizes":"64x64 32x32 24x24 16x16","type":"image/x-icon"},{"src":"logo192.png","type":"image/png","sizes":"192x192"},{"src":"logo512.png","type":"image/png","sizes":"512x512"}],"start_url":".","display":"standalone","theme_color":"#000000","background_color":"#ffffff"}')},144:function(e,t,n){e.exports={test4655:"demo_test4655__1nmsv"}},147:function(e){e.exports=JSON.parse('{"short_name":"React App","name":"Create React App Sample","icons":[{"src":"favicon.ico","sizes":"64x64 32x32 24x24 16x16","type":"image/x-icon"},{"src":"logo192.png","type":"image/png","sizes":"192x192"},{"src":"logo512.png","type":"image/png","sizes":"512x512"}],"start_url":".","display":"standalone","theme_color":"#000000","background_color":"#ffffff"}')},151:function(e){e.exports=JSON.parse('{"short_name":"React App","name":"Create React App Sample","icons":[{"src":"favicon.ico","sizes":"64x64 32x32 24x24 16x16","type":"image/x-icon"},{"src":"logo192.png","type":"image/png","sizes":"192x192"},{"src":"logo512.png","type":"image/png","sizes":"512x512"}],"start_url":".","display":"standalone","theme_color":"#000000","background_color":"#ffffff"}')},164:function(e,t,n){},177:function(e,t,n){},179:function(e,t,n){},252:function(e,t,n){"use strict";n.r(t),n.d(t,"startRegister",(function(){return Ct}));var i=n(28),r=n.n(i),a=n(38),o=n(0),c=n.n(o),s=n(34),u=n.n(s),d=(n(164),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function l(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");d?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):p(t,e)}))}}function p(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,271)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),r(e),a(e),o(e)}))},f=n(17),m=n(9),j=Object(m.f)({appId:"",version:"",params:{}}),b=Object(m.e)();j.on(b,(function(e){var t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries()),i=window.location.pathname.split("/");return i.length<1?{appId:"",version:"",params:{}}:{appId:i[0],version:i[1],params:n}})),window.addEventListener("popstate",(function(){b()}));var g=Object(m.e)();g.watch((function(e){var t=Object.keys(e.params).filter((function(t){return!!e.params[t]})).map((function(t){return"".concat(t,"=").concat(encodeURIComponent(e.params[t]||""))})).join("&");window.history.pushState(null,"","?"+t),e.params.pageViewId&&(document.title=e.params.pageViewId)})),j.on(g,(function(e,t){return Object(f.a)(Object(f.a)({},e),t)}));var O=Object(m.e)();O.watch((function(e){window.history.pushState(null,"","?menu="+e)})),j.on(O,(function(e,t){return Object(f.a)(Object(f.a)({},e),{},{params:{menu:t}})}));var h={store:{currentRoute:j},event:{updateCurrentRoute:b,setCurrentRoute:g,setCurrentRouteByMenuId:O}},I=n(25),w=n(21);function x(e,t){return y(e,t.menuItems,t.defaultLayoutId,t.defaultLayoutVariantId)}function y(e,t){var n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return t.find((function(t){if("menuItems"in t){if(n=y(e,t.menuItems,t.layoutId||i,t.layoutId?t.layoutVariantId||"":r))return!0}else if(t.menuId===e)return n=Object(f.a)(Object(f.a)({},t),{},{layoutId:t.layoutId||i,layoutVariantId:t.layoutId?t.layoutVariantId||"":r}),!0;return!1})),n}function S(e,t){return e.map((function(e){return"menuItems"in e?Object(f.a)(Object(f.a)({},e),{},{menuItems:S(e.menuItems,t),modulesId:[t]}):Object(f.a)(Object(f.a)({},e),{},{modulesId:[t]})}))}function k(e,t,n){var i=S(t,n);if(!e)return i;var r=Object(w.a)(e);return i.forEach((function(e){var t=r.findIndex((function(t){return t.menuId===e.menuId}));if(-1===t)r.push(e);else{var a=i[t];"menuItems"in e&&"menuItems"in a?k(a.menuItems,e.menuItems,n):r[t]=Object(f.a)(Object(f.a)({},e),{},{modulesId:[].concat(Object(w.a)(r[t].modulesId),Object(w.a)(e.modulesId))})}})),r}function V(e,t){var n=[];return e?(e.forEach((function(e){if("menuItems"in e){n.push(Object(f.a)({parentMenuId:t},e));var i=V(e.menuItems,e.menuId);null===i||void 0===i||i.forEach((function(e){return n.push(e)}))}else n.push(Object(f.a)({parentMenuId:t},e))})),n):n}function L(e,t,n){return n.reduce((function(n,i){return i.viewId===e&&(!n||M(n,t)<=M(i,t))?i:n}),void 0)}function M(e,t){if(!e.priority)return 0;switch(t){case"laptop":return e.priority.laptop||0;case"tablet":return e.priority.tablet||0;case"phone":return e.priority.phone||0;case"watch":return e.priority.watch||0;default:return 0}}function A(e,t,n,i,r,a){var o;return e&&t&&(o=i.find((function(n){return n.viewId===e&&n.variantId===t}))),o||(e&&(o=L(e,n,i)),o||(r&&a&&(o=i.find((function(e){return e.viewId===r&&e.variantId===a}))),o||(r&&(o=L(r,n,i)),o||i[0])))}var D=Object(m.f)([]),T=Object(m.f)("laptop"),R=Object(m.e)();T.on(R,(function(e,t){return t}));var P=Object(m.e)();D.on(P,(function(e,t){var n=t.viewRegisterData,i=t.module;if(n){var r=Object(w.a)(e);return n.forEach((function(e){var t=r.findIndex((function(t){return t.viewId===e.viewId&&t.variantId===e.variantId}));-1!==t?r[t]=Object(f.a)(Object(f.a)({},e),{},{moduleId:[].concat(Object(w.a)(r[t].moduleId),[i.moduleId])}):r.push(Object(f.a)(Object(f.a)({},e),{},{moduleId:[i.moduleId]}))})),r}}));var C={store:{views:D,deviceType:T},event:{add:P,setDeviceType:R}},N=Object(m.f)(null),F=Object(m.f)(!1),E=Object(m.e)();F.on(E,(function(e){return!e}));var z=Object(m.e)();F.on(z,(function(e,t){return t}));var B=Object(m.c)([N,h.store.currentRoute]).map((function(e){var t=Object(I.a)(e,2),n=t[0],i=t[1];if(i.params.menu&&n)return x(i.params.menu,n)}));B.watch((function(e){document.title=e&&(e.documentTitle||e.menuId)||"todo default title app name"}));var W=Object(m.e)();N.on(W,(function(e,t){var n=t.appMenu,i=t.module;if(n){var r=k(null===e||void 0===e?void 0:e.menuItems,n.menuItems,i.moduleId);return Object(f.a)(Object(f.a)(Object(f.a)({},e),n),{},{menuItems:r})}}));var U=Object(m.e)();N.on(U,(function(e,t){return t}));var _={store:{menu:N,currentMenuItem:B,collapsed:F,currentLayoutPage:Object(m.c)([h.store.currentRoute,C.store.deviceType,C.store.views,N]).map((function(e){var t,n,i,r,a,o,c=Object(I.a)(e,4),s=c[0],u=c[1],d=c[2],l=c[3];if(s.params.pageViewId){var p=A(s.params.pageViewId,s.params.pageViewVariantId,u,d,null===l||void 0===l?void 0:l.defaultPageViewId,null===l||void 0===l?void 0:l.defaultPageViewVariantId);return{layout:A(s.params.layoutId||(null===l||void 0===l?void 0:l.defaultLayoutId),s.params.layoutVariantId||(null===l||void 0===l?void 0:l.defaultLayoutVariantId),u,d,null===l||void 0===l?void 0:l.defaultLayoutId,null===l||void 0===l?void 0:l.defaultLayoutVariantId),page:p}}return s.params.menu&&l&&(a=x(s.params.menu,l)),o=A(null===(t=a)||void 0===t?void 0:t.pageViewId,null===(n=a)||void 0===n?void 0:n.pageViewVariantId,u,d,null===l||void 0===l?void 0:l.defaultPageViewId,null===l||void 0===l?void 0:l.defaultPageViewVariantId),{layout:A(null===(i=a)||void 0===i?void 0:i.layoutId,null===(r=a)||void 0===r?void 0:r.layoutVariantId,u,d,null===l||void 0===l?void 0:l.defaultLayoutId,null===l||void 0===l?void 0:l.defaultLayoutVariantId),page:o}}))},event:{add:W,set:U,collapseToggle:E,setCollapse:z}},Q=Object(m.f)(null),J=Object(m.e)(),K=Object(m.j)(J,null),H=Object(m.e)(),G=Object(m.f)({});G.on(H,(function(e,t){return Object(f.a)(Object(f.a)({},e),t)}));var q=Object(m.d)(function(){var e=Object(a.a)(r.a.mark((function e(t){var n,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="./buildInfo.json?p="+(new Date).getTime(),e.next=3,fetch(n);case 3:return i=e.sent,e.abrupt("return",i.json());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());Q.on(q.doneData,(function(e,t){return t}));var Y={store:{buildInfo:Q,preBuildInfo:K,serviceWorkerStatus:G},event:{setPreBuildInfo:J,setServiceWorkerStatus:H},effect:{readFromServer:q}},$=n(18),X=n(139),Z=Object(m.f)([]),ee=Object(m.f)([]),te=Object(m.f)([]),ne=Object(m.e)();Z.on(ne,(function(e,t){if(t){var n=Object(w.a)(e);return t.forEach((function(e){var t=n.findIndex((function(t){return t.authorityId===e.authorityId}));-1!==t?n[t]=e:n.push(e)})),n}}));var ie=Object(m.e)();ee.on(ne,(function(e,t){var n=Object(w.a)(e);if(t)return t.forEach((function(e){var t=n.findIndex((function(t){return t.authorityId===e.authorityId}));-1!==t?n[t]=e:n.push(e)})),n}));var re=Object(m.e)();te.on(re,(function(e,t){var n=Object(w.a)(e);return t.forEach((function(e){var t=n.findIndex((function(t){return t.authorityId===e.authorityId}));-1!==t?n[t]=e:n.push(e)})),n}));var ae={store:{authorities:Z,currentAuthorities:ee,debugAuthorities:te},event:{addAuthorities:ne,addCurrentAuthorities:ie,addDebugAuthorities:re}},oe=Object(m.f)({}),ce=Object(m.e)();oe.on(ce,(function(e,t){if(t)return Object.assign({},e,t)}));var se={store:{locales:oe},event:{add:ce}},ue=Object(m.f)([]),de=Object(m.e)();ue.on(de,(function(e,t){return[].concat(Object(w.a)(e),[t])}));var le={store:{modules:ue},event:{add:de}},pe=Object(m.f)([]),ve=Object(m.e)();pe.on(ve,(function(e,t){return[].concat(Object(w.a)(e),Object(w.a)(t))}));var fe=Object(m.e)();pe.on(fe,(function(e){return e.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{timeResultQuickTest:void 0,resultQuickTest:void 0,timeRemoteServiceInfo:void 0,remoteServiceInfo:void 0})}))}));var me=Object(m.e)();pe.on(me,(function(e,t){var n=t.module,i=t.services;if(i){var r=null===i||void 0===i?void 0:i.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{modulesId:n.moduleId})}));return[].concat(Object(w.a)(e),Object(w.a)(r))}}));var je=Object(m.d)(function(){var e=Object(a.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.runQuickTest){e.next=2;break}throw new Error("service.runQuickTest is undefined");case 2:return e.next=4,t.runQuickTest();case 4:return n=e.sent,e.abrupt("return",{serviceId:t.serviceId,resultQuickTest:n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());pe.on(je.doneData,(function(e,t){var n=Object(w.a)(e),i=n.findIndex((function(e){return e.serviceId===t.serviceId}));if(-1!==i)return n[i]=Object(f.a)(Object(f.a)({},n[i]),{},{timeResultQuickTest:(new Date).toISOString(),resultQuickTest:t.resultQuickTest}),n}));var be=Object(m.d)(function(){var e=Object(a.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.getRemoteServiceInfo){e.next=2;break}throw new Error("service.getRemoteServiceInfo is undefined");case 2:return e.next=4,t.getRemoteServiceInfo();case 4:return n=e.sent,e.abrupt("return",{serviceId:t.serviceId,remoteServiceInfo:n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());pe.on(be.doneData,(function(e,t){var n=Object(w.a)(e),i=n.findIndex((function(e){return e.serviceId===t.serviceId}));if(-1!==i)return n[i]=Object(f.a)(Object(f.a)({},n[i]),{},{timeRemoteServiceInfo:(new Date).toISOString(),remoteServiceInfo:t.remoteServiceInfo}),n}));var ge=Object(m.d)(function(){var e=Object(a.a)(r.a.mark((function e(t){var n,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return je(e)})),i=t.map((function(e){return be(e)})),e.next=4,Promise.all(n);case 4:return e.next=6,Promise.all(i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Oe=Object(m.a)({effect:ge,source:pe,mapParams:function(e,t){return t}});Object(m.g)({from:Oe,to:fe});var he={store:{services:pe},event:{add:ve,initModule:me},effects:{runAllQuickTestFx:ge,updateServicesInfoFx:Oe}};function Ie(e){var t,n;if(!le.store.modules.getState().find((function(t){return t.moduleId===e.module.moduleId}))){le.event.add(e.module);var i=null===e||void 0===e||null===(t=e.menu)||void 0===t?void 0:t.filter((function(t){return t.moduleId===e.module.moduleId}))[0];i||(i=null===e||void 0===e||null===(n=e.menu)||void 0===n?void 0:n.filter((function(e){return void 0===e.moduleId}))[0]),_.event.add({appMenu:i,module:e.module}),C.event.add({viewRegisterData:e.views,module:e.module}),ae.event.addAuthorities(e.authorities),se.event.add(e.locales),he.event.initModule(e)}}var we=n(6);var xe={viewType:"page",viewId:"DemoPageView",view:function(){return Object(we.jsx)("div",{children:"DemoPageViewFromDemoApp"})}},ye=n(140),Se=Array.from(Array(32),(function(e,t){return Object(ye.loremIpsum)({units:"paragraph"})}));var ke=[xe,{viewType:"page",viewId:"LoremIpsum",view:function(){return Object(we.jsxs)("div",{children:[Object(we.jsx)("h1",{children:"Lorem Ipsum"}),Se.map((function(e){return Object(we.jsx)("div",{style:{padding:"8px 0px 8px 0px"},children:e})}))]})}}],Ve=n(262),Le=[{defaultMenuId:"DemoPageView",defaultLayoutId:"SideMenuLayout",menuItems:[{menuId:"DemoPageView",icon:Object(we.jsx)(Ve.a,{}),pageViewId:"DemoPageView"},{menuId:"LoremIpsum",pageViewId:"LoremIpsum"}]}],Me={ru:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}},en:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}}};function Ae(e){return new Promise((function(t){setTimeout(t,e)}))}var De=[{originUrl:"mock",serviceId:"demoService",description:"mock service for demo",servicePageViewId:"DemoServiceTestPageView",runQuickTest:function(){var e=Object(a.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ae(1e3);case 2:return e.abrupt("return",{status:"work"});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getRemoteServiceInfo:function(){var e=Object(a.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{name:"demoMockService",version:"1.0.0",buildDate:(new Date).toISOString(),restartDate:(new Date).toISOString(),description:"description from mock service"});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}];Ie({module:{moduleId:"demoApp",description:"Simplest demo App with one demo page.",manifest:n(141)},views:ke,menu:Le,authorities:[{authorityId:"debug1",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"},{authorityId:"debug2",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"}],locales:Me,services:De});n(119),n(177);var Te=n(256),Re=n(22),Pe=n(263),Ce=n(264),Ne=n(64);function Fe(){return{width:window.innerWidth,height:window.innerHeight}}window.addEventListener("resize",(function(){ze(Fe())}));var Ee=Object(m.f)(Fe()),ze=Object(m.e)();Ee.on(ze,(function(e,t){return t}));var Be=Ee.map((function(e){return{orientation:e.height<e.width?"landscape":"portrait",type:e.height>=992?"laptop":e.height>=768?"tablet":e.height>=480?"phone":"watch"}})),We=Ee.map((function(e){return e.width<=768})),Ue={store:{screenSize:Ee,screen:Be,hoveredMenu:We},event:{setSize:ze}},_e=function e(t){var n=t.item;return"menuItems"in n?Object(we.jsx)(Ne.a.SubMenu,{icon:n.icon,title:n.title||n.menuId,children:n.menuItems.map((function(t){return e({item:t})}))},n.menuId):Object(we.jsx)(Ne.a.Item,{icon:n.icon,title:n.title||n.menuId,children:n.content||n.menuId},n.menuId)};function Qe(e){var t,n=Object($.a)(_.store.menu),i=Object($.a)(_.store.currentMenuItem),r=Object($.a)(Ue.store.hoveredMenu);return Object(we.jsx)(Ne.a,Object(f.a)(Object(f.a)({onClick:function(e){r&&_.event.setCollapse(!0),h.event.setCurrentRouteByMenuId(e.key.toString())},style:{userSelect:"none"}},e),{},{selectedKeys:[(null===i||void 0===i?void 0:i.menuId)||""],children:null===n||void 0===n||null===(t=n.menuItems)||void 0===t?void 0:t.map((function(e){return _e({item:e})}))}))}var Je=Te.a.Header,Ke=Te.a.Sider,He=Te.a.Content,Ge={viewType:"layout",viewId:"AntLayout",view:function(e){var t=Object($.a)(_.store.collapsed);return Object(we.jsx)(Re.a,{locale:{locale:"en"},children:Object(we.jsxs)(Te.a,{children:[Object(we.jsxs)(Ke,{trigger:null,collapsible:!0,collapsed:t,children:[Object(we.jsx)("div",{className:"logo"}),Object(we.jsx)(Qe,{theme:"dark",mode:"inline"})]}),Object(we.jsxs)(Te.a,{className:"site-layout",children:[Object(we.jsx)(Je,{className:"site-layout-background",style:{padding:0},children:c.a.createElement(t?Pe.a:Ce.a,{className:"trigger",onClick:function(){return _.event.collapseToggle()}})}),Object(we.jsx)(He,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:280},children:e.children})]})]})})}},qe={viewType:"layout",viewId:"AntEmptyConfigProviderLayout",view:function(e){return Object(we.jsx)(Re.a,{locale:{locale:"en"},children:e.children})}},Ye=n(260);function $e(){var e=Object($.a)(_.store.collapsed),t=Object($.a)(Ue.store.hoveredMenu);return Object(we.jsx)(Ye.a,{placement:"left",mask:t,closable:!1,onClose:function(){return _.event.setCollapse(!0)},visible:!e,getContainer:!1,bodyStyle:{padding:"8px 0px 0px 0px",backgroundColor:"#001529"},width:"256px",children:Object(we.jsx)(Qe,{theme:"dark",mode:"inline"})})}function Xe(){var e=Object($.a)(_.store.collapsed),t=Object($.a)(Ue.store.hoveredMenu),n=Object(o.useState)(!0),i=Object(I.a)(n,2),r=i[0],a=i[1];return Object(o.useEffect)((function(){var e=!1,t=0,n=function(){var n=document.body.scrollTop+document.documentElement.scrollTop;e||(e=!0,requestAnimationFrame((function(){t>n?a(!0):n>300&&r?a(!1):n<300&&!r&&a(!0),t=n,e=!1})))};return document.addEventListener("scroll",n,{passive:!0}),function(){document.removeEventListener("scroll",n)}}),[]),r?Object(we.jsx)(Te.a.Header,{className:"site-layout-background",style:{padding:0,paddingLeft:e||t?"0px":"256px",background:"#fff",position:"fixed",top:"0",right:"0",width:"100%",zIndex:9,transition:"width 0.2s"},children:c.a.createElement(e?Pe.a:Ce.a,{className:"trigger",onClick:function(){return _.event.collapseToggle()}})}):null}var Ze=function(e){var t=Object($.a)(_.store.collapsed),n=Object($.a)(Ue.store.hoveredMenu);return Object(we.jsx)("div",{style:{paddingLeft:t||n?"0px":"256px",paddingTop:"56px"},children:Object(we.jsx)("div",{style:{padding:"16px"},children:e.children})})},et=(n(179),{viewType:"layout",viewId:"SideMenuLayout",view:function(e){return Object(we.jsxs)(Re.a,{locale:{locale:"en"},children:[Object(we.jsx)($e,{}),Object(we.jsx)(Xe,{}),Object(we.jsx)(Ze,{children:e.children})]})}}),tt=n(144),nt=n.n(tt);var it={viewType:"page",viewId:"DemoPageView",view:function(){return document.body.style.setProperty("--color-test","green"),Object(we.jsx)("div",{className:nt.a.test4655,children:"DemoPageView456"})}},rt=n(145),at=n(50),ot=n(266),ct=n(61),st=n(265),ut=n(267);var dt={viewType:"page",viewId:"AboutPageView",view:function(){var e=Object($.a)(Y.store.buildInfo),t=Object($.a)(Y.store.preBuildInfo),n=Object($.a)(Y.store.serviceWorkerStatus),i=Object($.a)(Y.effect.readFromServer.pending),c=Object(o.useState)(!1),s=Object(I.a)(c,2),u=(s[0],s[1]),d=Object(o.useState)(!1),l=Object(I.a)(d,2),p=l[0],v=(l[1],Object(o.useState)(null)),f=Object(I.a)(v,2),m=(f[0],f[1],function(){var e=Object(a.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.getRegistration();case 2:null===(n=e.sent)||void 0===n||null===(t=n.waiting)||void 0===t||t.postMessage({type:"SKIP_WAITING"});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),j=function(){var e=Object(a.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ct();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){Y.effect.readFromServer("")}),[]),Object(o.useEffect)((function(){e&&(u(!0),setTimeout((function(){return u(!1)}),3e3))}),[e]),Object(we.jsx)("div",{style:{maxWidth:"50em",textAlign:"center"},children:Object(we.jsxs)("div",{style:{display:"inline-block",maxWidth:"20em",textAlign:"center",width:"100%"},children:["packageVersion: ",Object(we.jsx)("b",{children:null===t||void 0===t?void 0:t.packageVersion}),Object(we.jsx)("br",{}),"buildDate: ",Object(we.jsx)("b",{children:null===t||void 0===t?void 0:t.buildDate.slice(0,19)}),Object(we.jsx)(rt.a,{spinning:p}),Object(we.jsx)("br",{}),Object(we.jsx)("br",{}),Object(we.jsx)(at.a,{size:"large",icon:i?Object(we.jsx)(ct.a,{}):Object(we.jsx)(st.a,{}),style:{width:"100%"},type:"link",onClick:Y.effect.readFromServer,children:"Check new version"}),Object(we.jsx)("br",{}),(null===e||void 0===e?void 0:e.buildDate)!==(null===t||void 0===t?void 0:t.buildDate)?Object(we.jsx)(ot.a,{message:"New version available",description:Object(we.jsxs)(we.Fragment,{children:["packageVersion:"," ",Object(we.jsx)("b",{children:null===e||void 0===e?void 0:e.packageVersion.slice(0,19)}),Object(we.jsx)("br",{}),"buildDate: ",Object(we.jsx)("b",{children:null===e||void 0===e?void 0:e.buildDate.slice(0,19)}),Object(we.jsx)(rt.a,{spinning:p}),Object(we.jsx)("br",{})]}),type:"warning"}):Object(we.jsx)(ot.a,{message:"You use last available version",type:"info"}),Object(we.jsx)("br",{}),Object(we.jsx)(at.a,{size:"large",style:{width:"100%"},type:"primary",onClick:m,children:"Update"}),Object(we.jsx)("br",{}),Object(we.jsx)("br",{}),Object(we.jsx)(at.a,{size:"large",style:{width:"100%"},type:"primary",onClick:j,children:"startRegisterRun"}),Object(we.jsx)("br",{}),Object(we.jsx)("br",{}),Object(we.jsx)(at.a,{icon:Object(we.jsx)(ut.a,{}),style:{width:"100%"},type:"default",onClick:function(){window.location.reload()},size:"large",children:"Reload"}),Object(we.jsx)("br",{}),Object(we.jsx)("br",{}),"serviceWorkerStatus:",Object(we.jsx)("pre",{children:JSON.stringify(n,null,2)})]})})}},lt=n(104),pt=n(268),vt=n(261),ft=n(269);var mt=[Ge,qe,et,it,dt,{viewType:"page",viewId:"AntdDemoPage",view:function(){var e="middle";return Object(we.jsxs)("div",{children:[Object(we.jsxs)(we.Fragment,{children:[Object(we.jsxs)(lt.a.Group,{value:e,onChange:function(){},children:[Object(we.jsx)(lt.a.Button,{value:"large",children:"Large"}),Object(we.jsx)(lt.a.Button,{value:"default",children:"Default"}),Object(we.jsx)(lt.a.Button,{value:"small",children:"Small"})]}),Object(we.jsx)("br",{}),Object(we.jsx)("br",{}),Object(we.jsx)(at.a,{type:"primary",size:e,children:"Primary"}),Object(we.jsx)(at.a,{size:e,children:"Default"}),Object(we.jsx)(at.a,{type:"dashed",size:e,children:"Dashed"}),Object(we.jsx)("br",{}),Object(we.jsx)(at.a,{type:"link",size:e,children:"Link"}),Object(we.jsx)("br",{}),Object(we.jsxs)(pt.b,{children:[Object(we.jsx)(at.a,{type:"primary",icon:Object(we.jsx)(ft.a,{}),size:e}),Object(we.jsx)(at.a,{type:"primary",shape:"circle",icon:Object(we.jsx)(ft.a,{}),size:e}),Object(we.jsx)(at.a,{type:"primary",shape:"round",icon:Object(we.jsx)(ft.a,{}),size:e}),Object(we.jsx)(at.a,{type:"primary",shape:"round",icon:Object(we.jsx)(ft.a,{}),size:e,children:"Download"}),Object(we.jsx)(at.a,{type:"primary",icon:Object(we.jsx)(ft.a,{}),size:e,children:"Download"})]}),Object(we.jsx)("br",{}),Object(we.jsx)("br",{}),Object(we.jsxs)(pt.b,{children:[Object(we.jsx)(at.a,{type:"primary",danger:!0,children:"Primary"}),Object(we.jsx)(at.a,{danger:!0,children:"Default"}),Object(we.jsx)(at.a,{type:"dashed",danger:!0,children:"Dashed"}),Object(we.jsx)(at.a,{type:"text",danger:!0,children:"Text"}),Object(we.jsx)(at.a,{type:"link",danger:!0,children:"Link"})]})]}),Object(we.jsx)(vt.a,{gutter:[16,16],children:Object(we.jsxs)(pt.b,{children:[Object(we.jsx)(ot.a,{message:"Success Tips",type:"success",showIcon:!0}),Object(we.jsx)(ot.a,{message:"Informational Notes",type:"info",showIcon:!0}),Object(we.jsx)(ot.a,{message:"Warning",type:"warning",showIcon:!0,closable:!0}),Object(we.jsx)(ot.a,{message:"Error",type:"error",showIcon:!0}),Object(we.jsx)(ot.a,{message:"Success Tips",description:"Detailed description and advice about successful copywriting.",type:"success",showIcon:!0}),Object(we.jsx)(ot.a,{message:"Informational Notes",description:"Additional description and information about copywriting.",type:"info",showIcon:!0}),Object(we.jsx)(ot.a,{message:"Warning",description:"This is a warning notice about copywriting.",type:"warning",showIcon:!0,closable:!0}),Object(we.jsx)(ot.a,{message:"Error",description:"This is an error message about copywriting.",type:"error",showIcon:!0})]})})]})}}],jt={ru:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}},en:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}}};Ie({module:{moduleId:"defaultAntd",description:"Use for provide base layouts from Ant Design. with some demo page",manifest:n(147)},views:mt,menu:[{defaultMenuId:"DemoPageView",defaultLayoutId:"SideMenuLayout",menuItems:[{menuId:"defaultAntd",menuItems:[{menuId:"defaultAntd.Pages",menuItems:[{menuId:"defaultAntd.Layouts.DemoPageView",pageViewId:"DemoPageView"},{menuId:"defaultAntd.Layouts.AntdDemoPage",pageViewId:"AntdDemoPage"},{menuId:"defaultAntd.Layouts.AboutPageView",pageViewId:"AboutPageView"}]}]},{menuId:"DemoPageView",pageViewId:"DemoPageView"},{menuId:"AboutPageView",pageViewId:"AboutPageView"}]}],authorities:[{authorityId:"debug1",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"},{authorityId:"debug2",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"}],locales:jt});var bt=n(82),gt=n(158),Ot=n(259),ht=n(257),It=(n(258),0);var wt=n(56),xt=n(114),yt=["templateRecord","dataSource","columns","pagination"],St=function(e){var t=e.templateRecord,n=e.dataSource,i=e.columns,r=e.pagination,a=Object(gt.a)(e,yt),c=Object(o.useState)(""),s=Object(I.a)(c,2),u=s[0],d=s[1];if(!(null===n||void 0===n?void 0:n.length))return null;var l=n.map((function(e){var t=Object.entries(e).reduce((function(e,t){var n=Object(I.a)(t,2),i=n[0],r=n[1],a=JSON.stringify(r,null," ");return e[i]=null===a||void 0===a?void 0:a.substr(1,a.length-2),e}),{});return t.key||(t.key=function(){var e=Date.now();It=e>(It=It||e)?e:It+1;var t="000"+Math.trunc(999*Math.random());return It.toString()+t.substr(t.length-3)}()),t})),p=t||l[0],v=i||Object.keys(p).map((function(e){return{title:e,dataIndex:e}})),m=u.trim().split(" ").map((function(e){return e.trim()})),j=l.filter((function(e){var t,n=v.reduce((function(t,n){return t+" "+e[n.dataIndex]}),"").toLowerCase(),i=Object(bt.a)(m);try{for(i.s();!(t=i.n()).done;){var r=t.value;if(!n.includes(r.toLowerCase()))return!1}}catch(a){i.e(a)}finally{i.f()}return!0}));return Object(we.jsxs)(we.Fragment,{children:[Object(we.jsx)(Ot.a,{prefix:u?Object(we.jsx)(wt.a,{onClick:function(){return d("")}}):Object(we.jsx)(xt.a,{}),placeholder:"Input words for search",value:u,onChange:function(e){return d(e.target.value)},style:{maxWidth:"50em"}}),"\xa0\xa0","length: "+j.length,Object(we.jsx)("br",{}),Object(we.jsx)("br",{}),Object(we.jsx)(ht.a,Object(f.a)({size:"small",dataSource:j,columns:v,pagination:r||!1},a))]})};var kt={viewType:"page",viewId:"AuthoritiesList",view:function(){var e=Object($.a)(ae.store.authorities);return Object(we.jsx)("div",{children:Object(we.jsx)(St,{dataSource:e,templateRecord:{authorityId:"",descriptionForUser:"",descriptionForAdmin:""}})})}};var Vt={viewType:"page",viewId:"MenuList",view:function(){var e=Object($.a)(_.store.menu),t=V(null===e||void 0===e?void 0:e.menuItems,"");return Object(we.jsx)("div",{children:Object(we.jsx)(St,{dataSource:t,templateRecord:{modulesId:[],parentMenuId:"",menuId:"",authority:[],pageViewId:"",pageViewVariantId:"",layoutId:"",layoutVariantId:"",content:"",title:"",documentTitle:""},onRow:function(e,t){return{onDoubleClick:function(t){h.event.setCurrentRoute({params:{menu:e.menuId}})}}}})})}};var Lt={viewType:"page",viewId:"ModulesList",view:function(){var e=Object($.a)(le.store.modules);return Object(we.jsx)("div",{children:Object(we.jsx)(St,{dataSource:e,templateRecord:{moduleId:"",description:""}})})}};var Mt={viewType:"page",viewId:"ViewList",view:function(){var e=Object($.a)(C.store.views);return Object(we.jsx)("div",{children:Object(we.jsx)(St,{dataSource:e,templateRecord:{moduleId:[],viewType:"over",viewId:"",variantId:"",authorities:[],priority:{laptop:0,phone:0,tablet:0,watch:0}},onRow:function(e,t){return{onDoubleClick:function(t){h.event.setCurrentRoute({params:{pageViewId:e.viewId,pageViewVariantId:e.variantId}})}}}})})}},At=n(270);function Dt(e){var t=[];return Object.entries(e).forEach((function(e){var n=Object(I.a)(e,2),i=n[0],r=n[1];Object.entries(r).forEach((function(e){var n=Object(I.a)(e,2),r=n[0],a=n[1];Object.entries(a).forEach((function(e){var n=Object(I.a)(e,2),a=n[0],o=n[1];t.push({localeId:i,nameSpace:r,stringKey:a,stringValue:o})}))}))})),t}var Tt=[kt,Vt,Lt,Mt,{viewType:"page",viewId:"ServicesList",view:function(){var e=Object($.a)(he.store.services),t=Object($.a)(he.effects.updateServicesInfoFx.pending);Object(o.useEffect)((function(){he.effects.updateServicesInfoFx(void 0)}),[]);var n={modulesId:"",serviceId:"",originUrl:"",resultQuickTest:void 0,remoteServiceInfo:void 0,description:"",servicePageViewId:""};return Object(we.jsxs)("div",{children:[Object(we.jsx)(at.a,{type:"primary",icon:t?Object(we.jsx)(ct.a,{}):Object(we.jsx)(At.a,{}),disabled:t,onClick:function(){return he.effects.updateServicesInfoFx(void 0)},children:"Update"}),Object(we.jsx)("br",{}),Object(we.jsx)("br",{}),Object(we.jsx)(St,{dataSource:e,templateRecord:n,onRow:function(e,t){return{onDoubleClick:function(t){h.event.setCurrentRoute({params:{pageViewId:e.servicePageViewId}})}}}})]})}},{viewType:"page",viewId:"LocalesList",view:function(){var e=Dt(Object($.a)(se.store.locales));return Object(we.jsx)("div",{children:Object(we.jsx)(St,{dataSource:e,templateRecord:{localeId:"",nameSpace:"",stringKey:"",stringValue:""}})})}},{viewType:"page",viewId:"SettingsList",view:function(){var e=Dt(Object($.a)(se.store.locales));return Object(we.jsx)("div",{children:Object(we.jsx)(St,{dataSource:e,templateRecord:{localeId:"",nameSpace:"",stringKey:"",stringValue:""}})})}},{viewType:"page",viewId:"ThemeSettingsList",view:function(){var e=Dt(Object($.a)(se.store.locales));return Object(we.jsx)("div",{children:Object(we.jsx)(St,{dataSource:e,templateRecord:{localeId:"",nameSpace:"",stringKey:"",stringValue:""}})})}},{viewType:"page",viewId:"NotificationsList",view:function(){var e=Dt(Object($.a)(se.store.locales));return Object(we.jsx)("div",{children:Object(we.jsx)(St,{dataSource:e,templateRecord:{localeId:"",nameSpace:"",stringKey:"",stringValue:""}})})}}],Rt={ru:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}},en:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}}};Ie({module:{moduleId:"debug",description:"Use for debug page, with register module with register data",manifest:n(151)},views:Tt,menu:[{defaultLayoutId:"SideMenuLayout",menuItems:[{menuId:"debug",menuItems:[{menuId:"ModulesList",content:"Modules",pageViewId:"ModulesList"},{menuId:"ViewList",content:"Views",pageViewId:"ViewList"},{menuId:"ServicesList",content:"Services",pageViewId:"ServicesList"},{menuId:"AuthoritiesList",content:"Authorities",pageViewId:"AuthoritiesList"},{menuId:"MenuList",content:"Menu",pageViewId:"MenuList"},{menuId:"LocalesList",content:"Locales",pageViewId:"LocalesList"},{menuId:"SettingsList",content:"Settings",pageViewId:"SettingsList"},{menuId:"ThemeSettingsList",content:"ThemeSettings",pageViewId:"ThemeSettingsList"},{menuId:"NotificationsList",content:"Notifications",pageViewId:"NotificationsList"}]}]}],authorities:[{authorityId:"debug1",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"},{authorityId:"debug2",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"}],locales:Rt}),Y.event.setPreBuildInfo(X),h.event.updateCurrentRoute();var Pt=function(){var e=Object($.a)(_.store.currentLayoutPage),t=e.layout,n=e.page,i=(null===n||void 0===n?void 0:n.view)||function(){return Object(we.jsx)("div",{children:"error 404"})},r=null===t||void 0===t?void 0:t.view;return r?Object(we.jsx)(r,{children:Object(we.jsx)(i,{})}):Object(we.jsx)(i,{})};function Ct(){return Nt.apply(this,arguments)}function Nt(){return(Nt=Object(a.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.getRegistration();case 2:t=e.sent,Y.event.setServiceWorkerStatus({registration:t,startRegisterDate:new Date}),l({onSuccess:function(e){return Y.event.setServiceWorkerStatus({registration:e,onSuccessDate:new Date})},onUpdate:function(e){return Y.event.setServiceWorkerStatus({registration:e,onUpdateDate:new Date})}});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u.a.render(Object(we.jsx)(c.a.StrictMode,{children:Object(we.jsx)(Pt,{})}),document.getElementById("root")),Ct(),v(console.log)}},[[252,1,2]]]);