(this["webpackJsonp@frame1059/demo-app"]=this["webpackJsonp@frame1059/demo-app"]||[]).push([[0],{121:function(e,t,n){},144:function(e,t,n){e.exports={test4655:"demo_test4655__1nmsv"}},145:function(e){e.exports=JSON.parse('{"name":"@frame1059/demo-app","version":"1.0.0","private":true,"homepage":"./","dependencies":{"@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^11.1.0","@testing-library/user-event":"^12.1.10","@types/fs-extra":"^9.0.12","@types/jest":"^26.0.15","@types/node":"^12.0.0","@types/react":"^17.0.5","@types/react-dom":"^16.9.8","@types/typescript":"^2.0.0","antd":"^4.15.5","effector":"^21.8.11","effector-logger":"^0.10.0","effector-react":"^21.3.2","fs-extra":"^10.0.0","lorem-ipsum":"^2.0.3","react":"^17.0.2","react-app-rewired":"^2.1.8","react-dom":"^17.0.2","react-scripts":"4.0.3","ts-node":"^10.0.0","typescript":"^4.3.2","web-vitals":"^0.2.4","workbox-background-sync":"^5.1.3","workbox-broadcast-update":"^5.1.3","workbox-cacheable-response":"^5.1.3","workbox-core":"^5.1.3","workbox-expiration":"^5.1.3","workbox-google-analytics":"^5.1.3","workbox-navigation-preload":"^5.1.3","workbox-precaching":"^5.1.3","workbox-range-requests":"^5.1.3","workbox-routing":"^5.1.3","workbox-strategies":"^5.1.3","workbox-streams":"^5.1.3"},"scripts":{"start":"react-app-rewired start","preBuild":"ts-node ../scripts/src/utils/preBuild.ts","build":"react-app-rewired build","build:compress":"node ../scripts/src/utils/compressBuild/compressBuild.js","build:info":"ts-node ../scripts/src/utils/buildWithInfo.ts","deployGitHub":"ts-node ../scripts/src/utils/deployOnGitHub.ts","pbd":"npm run preBuild && npm run build && npm run build:info && npm run deployGitHub","test":"react-app-rewired test","eject":"react-scripts eject","cssParse":"ts-node ./scripts/antdCssReplaceToVariable/antdCssReplaceToVariable.ts","deploy":"s3-deploy \'./build/**\' --cwd \'./dist/\' --bucket SOME_BUCKET_NAME --distId CF_DIST_ID --invalidate \'/INV_PATH_1 /INV_PATH_2\'"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"prettier":"2.3.0"}}')},146:function(e){e.exports=JSON.parse('{"short_name":"React App","name":"Create React App Sample","icons":[{"src":"favicon.ico","sizes":"64x64 32x32 24x24 16x16","type":"image/x-icon"},{"src":"logo192.png","type":"image/png","sizes":"192x192"},{"src":"logo512.png","type":"image/png","sizes":"512x512"}],"start_url":".","display":"standalone","theme_color":"#000000","background_color":"#ffffff"}')},151:function(e){e.exports=JSON.parse('{"short_name":"React App","name":"Create React App Sample","icons":[{"src":"favicon.ico","sizes":"64x64 32x32 24x24 16x16","type":"image/x-icon"},{"src":"logo192.png","type":"image/png","sizes":"192x192"},{"src":"logo512.png","type":"image/png","sizes":"512x512"}],"start_url":".","display":"standalone","theme_color":"#000000","background_color":"#ffffff"}')},164:function(e,t,n){},177:function(e,t,n){},179:function(e,t,n){},252:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(34),o=n.n(a),c=(n(164),n(28)),s=n.n(c),u=n(38),d=n(17),l=n(9),p=Object(l.f)(null),v=Object(l.d)(function(){var e=Object(u.a)(s.a.mark((function e(t){var n,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="./buildInfo.json?p="+(new Date).getTime(),e.next=3,fetch(n);case 3:return i=e.sent,e.abrupt("return",i.json());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());p.on(v.doneData,(function(e,t){return t}));var b=Object(l.e)(),m=Object(l.f)({});m.on(b,(function(e,t){return Object(d.a)(Object(d.a)({},e),t)}));var f=Object(l.e)();m.on(f,(function(e,t){var n=function(e){return{active:!!e.active,installing:!!e.installing,waiting:!!e.waiting}}(t);return Object(d.a)(Object(d.a)({},e),{},{registrationStatus:n})}));var j={store:{buildInfo:p,serviceWorkerStatus:m},event:{setServiceWorkerStatus:b,setRegistrationStatus:f},effect:{readFromServer:v}},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;var t="".concat(".","/service-worker.js");g?(I(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):w(t,e)}}function w(e,t){return h.apply(this,arguments)}function h(){return(h=Object(u.a)(s.a.mark((function e(t,n){var i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.getRegistration();case 2:i=e.sent,j.event.setServiceWorkerStatus({startRegisterDate:new Date}),i&&j.event.setRegistrationStatus(i),navigator.serviceWorker.register(t).then((function(e){j.event.setServiceWorkerStatus({registerBeginDate:new Date}),j.event.setRegistrationStatus(e),e.update(),e.onupdatefound=function(){j.event.setServiceWorkerStatus({onUpdatefoundDate:new Date}),j.event.setRegistrationStatus(e);var t=e.installing;null!=t&&(t.onstatechange=function(){j.event.setServiceWorkerStatus({installingWorkerOnStateChange:new Date,installingWorkerState:t.state}),j.event.setRegistrationStatus(e),"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}var x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,270)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),r(e),a(e),o(e)}))},y=Object(l.f)({appId:"",version:"",params:{}}),S=Object(l.e)();y.on(S,(function(e){var t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries()),i=window.location.pathname.split("/");return i.length<1?{appId:"",version:"",params:{}}:{appId:i[0],version:i[1],params:n}})),window.addEventListener("popstate",(function(){S()}));var k=Object(l.e)();k.watch((function(e){var t=Object.keys(e.params).filter((function(t){return!!e.params[t]})).map((function(t){return"".concat(t,"=").concat(encodeURIComponent(e.params[t]||""))})).join("&");window.history.pushState(null,"","?"+t),e.params.pageViewId&&(document.title=e.params.pageViewId)})),y.on(k,(function(e,t){return Object(d.a)(Object(d.a)({},e),t)}));var V=Object(l.e)();V.watch((function(e){window.history.pushState(null,"","?menu="+e)})),y.on(V,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{params:{menu:t}})}));var L={store:{currentRoute:y},event:{updateCurrentRoute:S,setCurrentRoute:k,setCurrentRouteByMenuId:V}},M=n(26),A=n(21);function D(e,t){return T(e,t.menuItems,t.defaultLayoutId,t.defaultLayoutVariantId)}function T(e,t){var n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return t.find((function(t){if("menuItems"in t){if(n=T(e,t.menuItems,t.layoutId||i,t.layoutId?t.layoutVariantId||"":r))return!0}else if(t.menuId===e)return n=Object(d.a)(Object(d.a)({},t),{},{layoutId:t.layoutId||i,layoutVariantId:t.layoutId?t.layoutVariantId||"":r}),!0;return!1})),n}function R(e,t){return e.map((function(e){return"menuItems"in e?Object(d.a)(Object(d.a)({},e),{},{menuItems:R(e.menuItems,t),modulesId:[t]}):Object(d.a)(Object(d.a)({},e),{},{modulesId:[t]})}))}function P(e,t,n){var i=R(t,n);if(!e)return i;var r=Object(A.a)(e);return i.forEach((function(e){var t=r.findIndex((function(t){return t.menuId===e.menuId}));if(-1===t)r.push(e);else{var a=i[t];"menuItems"in e&&"menuItems"in a?P(a.menuItems,e.menuItems,n):r[t]=Object(d.a)(Object(d.a)({},e),{},{modulesId:[].concat(Object(A.a)(r[t].modulesId),Object(A.a)(e.modulesId))})}})),r}function C(e,t){var n=[];return e?(e.forEach((function(e){if("menuItems"in e){n.push(Object(d.a)({parentMenuId:t},e));var i=C(e.menuItems,e.menuId);null===i||void 0===i||i.forEach((function(e){return n.push(e)}))}else n.push(Object(d.a)({parentMenuId:t},e))})),n):n}function N(e,t,n){return n.reduce((function(n,i){return i.viewId===e&&(!n||F(n,t)<=F(i,t))?i:n}),void 0)}function F(e,t){if(!e.priority)return 0;switch(t){case"laptop":return e.priority.laptop||0;case"tablet":return e.priority.tablet||0;case"phone":return e.priority.phone||0;case"watch":return e.priority.watch||0;default:return 0}}function E(e,t,n,i,r,a){var o;return e&&t&&(o=i.find((function(n){return n.viewId===e&&n.variantId===t}))),o||(e&&(o=N(e,n,i)),o||(r&&a&&(o=i.find((function(e){return e.viewId===r&&e.variantId===a}))),o||(r&&(o=N(r,n,i)),o||i[0])))}var B=Object(l.f)([]),W=Object(l.f)("laptop"),z=Object(l.e)();W.on(z,(function(e,t){return t}));var _=Object(l.e)();B.on(_,(function(e,t){var n=t.viewRegisterData,i=t.module;if(n){var r=Object(A.a)(e);return n.forEach((function(e){var t=r.findIndex((function(t){return t.viewId===e.viewId&&t.variantId===e.variantId}));-1!==t?r[t]=Object(d.a)(Object(d.a)({},e),{},{moduleId:[].concat(Object(A.a)(r[t].moduleId),[i.moduleId])}):r.push(Object(d.a)(Object(d.a)({},e),{},{moduleId:[i.moduleId]}))})),r}}));var U={store:{views:B,deviceType:W},event:{add:_,setDeviceType:z}},Q=Object(l.f)(null),K=Object(l.f)(!1),H=Object(l.e)();K.on(H,(function(e){return!e}));var J=Object(l.e)();K.on(J,(function(e,t){return t}));var G=Object(l.c)([Q,L.store.currentRoute]).map((function(e){var t=Object(M.a)(e,2),n=t[0],i=t[1];if(i.params.menu&&n)return D(i.params.menu,n)}));G.watch((function(e){document.title=e&&(e.documentTitle||e.menuId)||"todo default title app name"}));var q=Object(l.e)();Q.on(q,(function(e,t){var n=t.appMenu,i=t.module;if(n){var r=P(null===e||void 0===e?void 0:e.menuItems,n.menuItems,i.moduleId);return Object(d.a)(Object(d.a)(Object(d.a)({},e),n),{},{menuItems:r})}}));var Y=Object(l.e)();Q.on(Y,(function(e,t){return t}));var $={store:{menu:Q,currentMenuItem:G,collapsed:K,currentLayoutPage:Object(l.c)([L.store.currentRoute,U.store.deviceType,U.store.views,Q]).map((function(e){var t,n,i,r,a,o,c=Object(M.a)(e,4),s=c[0],u=c[1],d=c[2],l=c[3];if(s.params.pageViewId){var p=E(s.params.pageViewId,s.params.pageViewVariantId,u,d,null===l||void 0===l?void 0:l.defaultPageViewId,null===l||void 0===l?void 0:l.defaultPageViewVariantId);return{layout:E(s.params.layoutId||(null===l||void 0===l?void 0:l.defaultLayoutId),s.params.layoutVariantId||(null===l||void 0===l?void 0:l.defaultLayoutVariantId),u,d,null===l||void 0===l?void 0:l.defaultLayoutId,null===l||void 0===l?void 0:l.defaultLayoutVariantId),page:p}}return s.params.menu&&l&&(a=D(s.params.menu,l)),o=E(null===(t=a)||void 0===t?void 0:t.pageViewId,null===(n=a)||void 0===n?void 0:n.pageViewVariantId,u,d,null===l||void 0===l?void 0:l.defaultPageViewId,null===l||void 0===l?void 0:l.defaultPageViewVariantId),{layout:E(null===(i=a)||void 0===i?void 0:i.layoutId,null===(r=a)||void 0===r?void 0:r.layoutVariantId,u,d,null===l||void 0===l?void 0:l.defaultLayoutId,null===l||void 0===l?void 0:l.defaultLayoutVariantId),page:o}}))},event:{add:q,set:Y,collapseToggle:H,setCollapse:J}},X=n(19),Z=Object(l.f)([]),ee=Object(l.f)([]),te=Object(l.f)([]),ne=Object(l.e)();Z.on(ne,(function(e,t){if(t){var n=Object(A.a)(e);return t.forEach((function(e){var t=n.findIndex((function(t){return t.authorityId===e.authorityId}));-1!==t?n[t]=e:n.push(e)})),n}}));var ie=Object(l.e)();ee.on(ne,(function(e,t){var n=Object(A.a)(e);if(t)return t.forEach((function(e){var t=n.findIndex((function(t){return t.authorityId===e.authorityId}));-1!==t?n[t]=e:n.push(e)})),n}));var re=Object(l.e)();te.on(re,(function(e,t){var n=Object(A.a)(e);return t.forEach((function(e){var t=n.findIndex((function(t){return t.authorityId===e.authorityId}));-1!==t?n[t]=e:n.push(e)})),n}));var ae={store:{authorities:Z,currentAuthorities:ee,debugAuthorities:te},event:{addAuthorities:ne,addCurrentAuthorities:ie,addDebugAuthorities:re}},oe=Object(l.f)({}),ce=Object(l.e)();oe.on(ce,(function(e,t){if(t)return Object.assign({},e,t)}));var se={store:{locales:oe},event:{add:ce}},ue=Object(l.f)([]),de=Object(l.e)();ue.on(de,(function(e,t){return[].concat(Object(A.a)(e),[t])}));var le={store:{modules:ue},event:{add:de}},pe=Object(l.f)([]),ve=Object(l.e)();pe.on(ve,(function(e,t){return[].concat(Object(A.a)(e),Object(A.a)(t))}));var be=Object(l.e)();pe.on(be,(function(e){return e.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{timeResultQuickTest:void 0,resultQuickTest:void 0,timeRemoteServiceInfo:void 0,remoteServiceInfo:void 0})}))}));var me=Object(l.e)();pe.on(me,(function(e,t){var n=t.module,i=t.services;if(i){var r=null===i||void 0===i?void 0:i.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{modulesId:n.moduleId})}));return[].concat(Object(A.a)(e),Object(A.a)(r))}}));var fe=Object(l.d)(function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.runQuickTest){e.next=2;break}throw new Error("service.runQuickTest is undefined");case 2:return e.next=4,t.runQuickTest();case 4:return n=e.sent,e.abrupt("return",{serviceId:t.serviceId,resultQuickTest:n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());pe.on(fe.doneData,(function(e,t){var n=Object(A.a)(e),i=n.findIndex((function(e){return e.serviceId===t.serviceId}));if(-1!==i)return n[i]=Object(d.a)(Object(d.a)({},n[i]),{},{timeResultQuickTest:(new Date).toISOString(),resultQuickTest:t.resultQuickTest}),n}));var je=Object(l.d)(function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.getRemoteServiceInfo){e.next=2;break}throw new Error("service.getRemoteServiceInfo is undefined");case 2:return e.next=4,t.getRemoteServiceInfo();case 4:return n=e.sent,e.abrupt("return",{serviceId:t.serviceId,remoteServiceInfo:n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());pe.on(je.doneData,(function(e,t){var n=Object(A.a)(e),i=n.findIndex((function(e){return e.serviceId===t.serviceId}));if(-1!==i)return n[i]=Object(d.a)(Object(d.a)({},n[i]),{},{timeRemoteServiceInfo:(new Date).toISOString(),remoteServiceInfo:t.remoteServiceInfo}),n}));var ge=Object(l.d)(function(){var e=Object(u.a)(s.a.mark((function e(t){var n,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return fe(e)})),i=t.map((function(e){return je(e)})),e.next=4,Promise.all(n);case 4:return e.next=6,Promise.all(i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Oe=Object(l.a)({effect:ge,source:pe,mapParams:function(e,t){return t}});Object(l.g)({from:Oe,to:be});var we={store:{services:pe},event:{add:ve,initModule:me},effects:{runAllQuickTestFx:ge,updateServicesInfoFx:Oe}};function he(e){var t,n;if(!le.store.modules.getState().find((function(t){return t.moduleId===e.module.moduleId}))){le.event.add(e.module);var i=null===e||void 0===e||null===(t=e.menu)||void 0===t?void 0:t.filter((function(t){return t.moduleId===e.module.moduleId}))[0];i||(i=null===e||void 0===e||null===(n=e.menu)||void 0===n?void 0:n.filter((function(e){return void 0===e.moduleId}))[0]),$.event.add({appMenu:i,module:e.module}),U.event.add({viewRegisterData:e.views,module:e.module}),ae.event.addAuthorities(e.authorities),se.event.add(e.locales),we.event.initModule(e)}}var Ie=n(5);var xe={viewType:"page",viewId:"DemoPageView",view:function(){return Object(Ie.jsx)("div",{children:"DemoPageViewFromDemoApp"})}},ye=n(141),Se=Array.from(Array(32),(function(e,t){return Object(ye.loremIpsum)({units:"paragraph"})}));var ke=[xe,{viewType:"page",viewId:"LoremIpsum",view:function(){return Object(Ie.jsxs)("div",{children:[Object(Ie.jsx)("h1",{children:"Lorem Ipsum"}),Se.map((function(e){return Object(Ie.jsx)("div",{style:{padding:"8px 0px 8px 0px"},children:e})}))]})}}],Ve=n(262),Le=[{defaultMenuId:"DemoPageView",defaultLayoutId:"SideMenuLayout",menuItems:[{menuId:"DemoPageView",icon:Object(Ie.jsx)(Ve.a,{}),pageViewId:"DemoPageView"},{menuId:"LoremIpsum",pageViewId:"LoremIpsum"}]}],Me={ru:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}},en:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}}};function Ae(e){return new Promise((function(t){setTimeout(t,e)}))}var De=[{originUrl:"mock",serviceId:"demoService",description:"mock service for demo",servicePageViewId:"DemoServiceTestPageView",runQuickTest:function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ae(1e3);case 2:return e.abrupt("return",{status:"work"});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getRemoteServiceInfo:function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{name:"demoMockService",version:"1.0.0",buildDate:(new Date).toISOString(),restartDate:(new Date).toISOString(),description:"description from mock service"});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}],Te=n(85);he({module:{moduleId:"demoApp",description:"Simplest demo App with one demo page.",manifest:Te},views:ke,menu:Le,authorities:[{authorityId:"debug1",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"},{authorityId:"debug2",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"}],locales:Me,services:De});n(121),n(177);var Re=n(256),Pe=n(22),Ce=n(263),Ne=n(264),Fe=n(65);function Ee(){return{width:window.innerWidth,height:window.innerHeight}}window.addEventListener("resize",(function(){We(Ee())}));var Be=Object(l.f)(Ee()),We=Object(l.e)();Be.on(We,(function(e,t){return t}));var ze=Be.map((function(e){return{orientation:e.height<e.width?"landscape":"portrait",type:e.height>=992?"laptop":e.height>=768?"tablet":e.height>=480?"phone":"watch"}})),_e=Be.map((function(e){return e.width<=768})),Ue={store:{screenSize:Be,screen:ze,hoveredMenu:_e},event:{setSize:We}},Qe=function e(t){var n=t.item;return"menuItems"in n?Object(Ie.jsx)(Fe.a.SubMenu,{icon:n.icon,title:n.title||n.menuId,children:n.menuItems.map((function(t){return e({item:t})}))},n.menuId):Object(Ie.jsx)(Fe.a.Item,{icon:n.icon,title:n.title||n.menuId,children:n.content||n.menuId},n.menuId)};function Ke(e){var t,n=Object(X.a)($.store.menu),i=Object(X.a)($.store.currentMenuItem),r=Object(X.a)(Ue.store.hoveredMenu);return Object(Ie.jsx)(Fe.a,Object(d.a)(Object(d.a)({onClick:function(e){r&&$.event.setCollapse(!0),L.event.setCurrentRouteByMenuId(e.key.toString())},style:{userSelect:"none"}},e),{},{selectedKeys:[(null===i||void 0===i?void 0:i.menuId)||""],children:null===n||void 0===n||null===(t=n.menuItems)||void 0===t?void 0:t.map((function(e){return Qe({item:e})}))}))}var He=Re.a.Header,Je=Re.a.Sider,Ge=Re.a.Content,qe={viewType:"layout",viewId:"AntLayout",view:function(e){var t=Object(X.a)($.store.collapsed);return Object(Ie.jsx)(Pe.a,{locale:{locale:"en"},children:Object(Ie.jsxs)(Re.a,{children:[Object(Ie.jsxs)(Je,{trigger:null,collapsible:!0,collapsed:t,children:[Object(Ie.jsx)("div",{className:"logo"}),Object(Ie.jsx)(Ke,{theme:"dark",mode:"inline"})]}),Object(Ie.jsxs)(Re.a,{className:"site-layout",children:[Object(Ie.jsx)(He,{className:"site-layout-background",style:{padding:0},children:r.a.createElement(t?Ce.a:Ne.a,{className:"trigger",onClick:function(){return $.event.collapseToggle()}})}),Object(Ie.jsx)(Ge,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:280},children:e.children})]})]})})}},Ye={viewType:"layout",viewId:"AntEmptyConfigProviderLayout",view:function(e){return Object(Ie.jsx)(Pe.a,{locale:{locale:"en"},children:e.children})}},$e=n(260);function Xe(){var e=Object(X.a)($.store.collapsed),t=Object(X.a)(Ue.store.hoveredMenu);return Object(Ie.jsx)($e.a,{placement:"left",mask:t,closable:!1,onClose:function(){return $.event.setCollapse(!0)},visible:!e,getContainer:!1,bodyStyle:{padding:"8px 0px 0px 0px",backgroundColor:"#001529"},width:"256px",children:Object(Ie.jsx)(Ke,{theme:"dark",mode:"inline"})})}function Ze(){var e=Object(X.a)($.store.collapsed),t=Object(X.a)(Ue.store.hoveredMenu),n=Object(i.useState)(!0),a=Object(M.a)(n,2),o=a[0],c=a[1];return Object(i.useEffect)((function(){var e=!1,t=0,n=function(){var n=document.body.scrollTop+document.documentElement.scrollTop;e||(e=!0,requestAnimationFrame((function(){t>n?c(!0):n>300&&o?c(!1):n<300&&!o&&c(!0),t=n,e=!1})))};return document.addEventListener("scroll",n,{passive:!0}),function(){document.removeEventListener("scroll",n)}}),[]),o?Object(Ie.jsx)(Re.a.Header,{className:"site-layout-background",style:{padding:0,paddingLeft:e||t?"0px":"256px",background:"#fff",position:"fixed",top:"0",right:"0",width:"100%",zIndex:9,transition:"width 0.2s"},children:r.a.createElement(e?Ce.a:Ne.a,{className:"trigger",onClick:function(){return $.event.collapseToggle()}})}):null}var et=function(e){var t=Object(X.a)($.store.collapsed),n=Object(X.a)(Ue.store.hoveredMenu);return Object(Ie.jsx)("div",{style:{paddingLeft:t||n?"0px":"256px",paddingTop:"56px"},children:Object(Ie.jsx)("div",{style:{padding:"16px"},children:e.children})})},tt=(n(179),{viewType:"layout",viewId:"SideMenuLayout",view:function(e){return Object(Ie.jsxs)(Pe.a,{locale:{locale:"en"},children:[Object(Ie.jsx)(Xe,{}),Object(Ie.jsx)(Ze,{}),Object(Ie.jsx)(et,{children:e.children})]})}}),nt=n(144),it=n.n(nt);var rt={viewType:"page",viewId:"DemoPageView",view:function(){return document.body.style.setProperty("--color-test","green"),Object(Ie.jsx)("div",{className:it.a.test4655,children:"DemoPageView456"})}},at=n(265),ot=n(51),ct=n(62),st=n(266);var ut=n(145),dt=n(42);var lt={viewType:"page",viewId:"AboutPageView",view:function(){var e,t,n,r,a,o,c,d=Object(X.a)(j.store.buildInfo),l=Object(X.a)(j.store.serviceWorkerStatus),p=Object(X.a)(j.effect.readFromServer.pending),v=Object(i.useState)(!1),b=Object(M.a)(v,2),m=b[0],f=b[1],g=Object(i.useState)(!1),w=Object(M.a)(g,2),h=w[0],I=w[1],x=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f(!0),!(null===(t=l.registrationStatus)||void 0===t?void 0:t.waiting)){e.next=6;break}return e.next=4,y();case 4:e.next=7;break;case 6:O();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.next=3,navigator.serviceWorker.getRegistration();case 3:null===(n=e.sent)||void 0===n||null===(t=n.waiting)||void 0===t||t.postMessage({type:"SKIP_WAITING"});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){j.effect.readFromServer("")}),[]),Object(i.useEffect)((function(){var e;m&&(null===(e=l.registrationStatus)||void 0===e?void 0:e.waiting)&&y()}),[m,null===(e=l.registrationStatus)||void 0===e?void 0:e.waiting]),Object(i.useEffect)((function(){var e;h&&!(null===(e=l.registrationStatus)||void 0===e?void 0:e.waiting)&&window.location.reload()}),[h,null===(t=l.registrationStatus)||void 0===t?void 0:t.waiting]),Object(Ie.jsx)("div",{style:{maxWidth:"50em",textAlign:"center"},children:Object(Ie.jsxs)("div",{style:{display:"inline-block",maxWidth:"30em",textAlign:"center",width:"100%"},children:["nameApp: ",Object(Ie.jsx)("b",{children:Te.name}),Object(Ie.jsx)("br",{}),"shortName: ",Object(Ie.jsx)("b",{children:Te.short_name}),Object(Ie.jsx)("br",{}),"packageName: ",Object(Ie.jsx)("b",{children:ut.name}),Object(Ie.jsx)("br",{}),"publicURL: ",Object(Ie.jsx)("b",{children:"."}),Object(Ie.jsx)("br",{}),"origin: ",Object(Ie.jsx)("b",{children:window.location.origin}),Object(Ie.jsx)("br",{}),"href: ",Object(Ie.jsx)("b",{children:window.location.href}),Object(Ie.jsx)("br",{}),"packageVersion: ",Object(Ie.jsx)("b",{children:null===dt||void 0===dt?void 0:dt.packageVersion}),Object(Ie.jsx)("br",{}),"buildDate: ",Object(Ie.jsx)("b",{children:null===dt||void 0===dt?void 0:dt.buildDate.slice(0,19)}),Object(Ie.jsx)("br",{}),Object(Ie.jsx)("br",{}),p&&Object(Ie.jsx)(at.a,{message:Object(Ie.jsx)(ct.a,{}),type:"info"}),d&&!p&&((null===d||void 0===d?void 0:d.buildDate)!==(null===dt||void 0===dt?void 0:dt.buildDate)?Object(Ie.jsx)(at.a,{message:"New version available",description:Object(Ie.jsxs)(Ie.Fragment,{children:["packageVersion:"," ",Object(Ie.jsx)("b",{children:null===d||void 0===d?void 0:d.packageVersion.slice(0,19)}),Object(Ie.jsx)("br",{}),"buildDate: ",Object(Ie.jsx)("b",{children:null===d||void 0===d?void 0:d.buildDate.slice(0,19)}),Object(Ie.jsx)("br",{}),"files number: ",Object(Ie.jsx)("b",{children:null===d||void 0===d||null===(n=d.totalFiles)||void 0===n?void 0:n.num}),Object(Ie.jsx)("br",{}),"files size:",Object(Ie.jsx)("b",{children:(c=(null===d||void 0===d||null===(r=d.totalFiles)||void 0===r?void 0:r.size)||0,c>=1073741824?(c/1073741824).toFixed(2)+" GB":c>=1048576?(c/1048576).toFixed(2)+" MB":c>=1024?(c/1024).toFixed(2)+" KB":c>1?c+" bytes":1==c?c+" byte":"0 bytes")}),Object(Ie.jsx)("br",{}),(null===(a=l.registrationStatus)||void 0===a?void 0:a.installing)&&Object(Ie.jsx)(Ie.Fragment,{children:"downloading..."}),(null===(o=l.registrationStatus)||void 0===o?void 0:o.waiting)&&Object(Ie.jsx)(Ie.Fragment,{children:"downloaded"})]}),type:"warning"}):Object(Ie.jsx)(at.a,{message:"You use last available version",type:"success"})),Object(Ie.jsx)("br",{}),d&&(null===d||void 0===d?void 0:d.buildDate)!==(null===dt||void 0===dt?void 0:dt.buildDate)?Object(Ie.jsx)(ot.a,{disabled:m,size:"large",style:{width:"100%"},type:"primary",onClick:x,children:"Update"}):Object(Ie.jsx)(ot.a,{size:"large",disabled:p,style:{width:"100%"},type:"primary",onClick:j.effect.readFromServer,children:"Check new version"}),Object(Ie.jsx)("br",{}),Object(Ie.jsx)("br",{}),Object(Ie.jsx)(ot.a,{disabled:h,icon:h?Object(Ie.jsx)(ct.a,{}):Object(Ie.jsx)(st.a,{}),style:{width:"100%"},type:"primary",onClick:function(){I(!0),window.location.reload()},size:"large",children:"Reload"}),Object(Ie.jsx)("br",{}),Object(Ie.jsx)("br",{})]})})}},pt=n(106),vt=n(267),bt=n(261),mt=n(268);var ft=[qe,Ye,tt,rt,lt,{viewType:"page",viewId:"AntdDemoPage",view:function(){var e="middle";return Object(Ie.jsxs)("div",{children:[Object(Ie.jsxs)(Ie.Fragment,{children:[Object(Ie.jsxs)(pt.a.Group,{value:e,onChange:function(){},children:[Object(Ie.jsx)(pt.a.Button,{value:"large",children:"Large"}),Object(Ie.jsx)(pt.a.Button,{value:"default",children:"Default"}),Object(Ie.jsx)(pt.a.Button,{value:"small",children:"Small"})]}),Object(Ie.jsx)("br",{}),Object(Ie.jsx)("br",{}),Object(Ie.jsx)(ot.a,{type:"primary",size:e,children:"Primary"}),Object(Ie.jsx)(ot.a,{size:e,children:"Default"}),Object(Ie.jsx)(ot.a,{type:"dashed",size:e,children:"Dashed"}),Object(Ie.jsx)("br",{}),Object(Ie.jsx)(ot.a,{type:"link",size:e,children:"Link"}),Object(Ie.jsx)("br",{}),Object(Ie.jsxs)(vt.b,{children:[Object(Ie.jsx)(ot.a,{type:"primary",icon:Object(Ie.jsx)(mt.a,{}),size:e}),Object(Ie.jsx)(ot.a,{type:"primary",shape:"circle",icon:Object(Ie.jsx)(mt.a,{}),size:e}),Object(Ie.jsx)(ot.a,{type:"primary",shape:"round",icon:Object(Ie.jsx)(mt.a,{}),size:e}),Object(Ie.jsx)(ot.a,{type:"primary",shape:"round",icon:Object(Ie.jsx)(mt.a,{}),size:e,children:"Download"}),Object(Ie.jsx)(ot.a,{type:"primary",icon:Object(Ie.jsx)(mt.a,{}),size:e,children:"Download"})]}),Object(Ie.jsx)("br",{}),Object(Ie.jsx)("br",{}),Object(Ie.jsxs)(vt.b,{children:[Object(Ie.jsx)(ot.a,{type:"primary",danger:!0,children:"Primary"}),Object(Ie.jsx)(ot.a,{danger:!0,children:"Default"}),Object(Ie.jsx)(ot.a,{type:"dashed",danger:!0,children:"Dashed"}),Object(Ie.jsx)(ot.a,{type:"text",danger:!0,children:"Text"}),Object(Ie.jsx)(ot.a,{type:"link",danger:!0,children:"Link"})]})]}),Object(Ie.jsx)(bt.a,{gutter:[16,16],children:Object(Ie.jsxs)(vt.b,{children:[Object(Ie.jsx)(at.a,{message:"Success Tips",type:"success",showIcon:!0}),Object(Ie.jsx)(at.a,{message:"Informational Notes",type:"info",showIcon:!0}),Object(Ie.jsx)(at.a,{message:"Warning",type:"warning",showIcon:!0,closable:!0}),Object(Ie.jsx)(at.a,{message:"Error",type:"error",showIcon:!0}),Object(Ie.jsx)(at.a,{message:"Success Tips",description:"Detailed description and advice about successful copywriting.",type:"success",showIcon:!0}),Object(Ie.jsx)(at.a,{message:"Informational Notes",description:"Additional description and information about copywriting.",type:"info",showIcon:!0}),Object(Ie.jsx)(at.a,{message:"Warning",description:"This is a warning notice about copywriting.",type:"warning",showIcon:!0,closable:!0}),Object(Ie.jsx)(at.a,{message:"Error",description:"This is an error message about copywriting.",type:"error",showIcon:!0})]})})]})}}],jt={ru:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}},en:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}}};he({module:{moduleId:"defaultAntd",description:"Use for provide base layouts from Ant Design. with some demo page",manifest:n(146)},views:ft,menu:[{defaultMenuId:"DemoPageView",defaultLayoutId:"SideMenuLayout",menuItems:[{menuId:"defaultAntd",menuItems:[{menuId:"defaultAntd.Pages",menuItems:[{menuId:"defaultAntd.Layouts.DemoPageView",pageViewId:"DemoPageView"},{menuId:"defaultAntd.Layouts.AntdDemoPage",pageViewId:"AntdDemoPage"},{menuId:"defaultAntd.Layouts.AboutPageView",pageViewId:"AboutPageView"}]}]},{menuId:"DemoPageView",pageViewId:"DemoPageView"},{menuId:"AboutPageView",pageViewId:"AboutPageView"}]}],authorities:[{authorityId:"debug1",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"},{authorityId:"debug2",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"}],locales:jt});var gt=n(83),Ot=n(158),wt=n(259),ht=n(257),It=(n(258),0);var xt=n(57),yt=n(116),St=["templateRecord","dataSource","columns","pagination"],kt=function(e){var t=e.templateRecord,n=e.dataSource,r=e.columns,a=e.pagination,o=Object(Ot.a)(e,St),c=Object(i.useState)(""),s=Object(M.a)(c,2),u=s[0],l=s[1];if(!(null===n||void 0===n?void 0:n.length))return null;var p=n.map((function(e){var t=Object.entries(e).reduce((function(e,t){var n=Object(M.a)(t,2),i=n[0],r=n[1],a=JSON.stringify(r,null," ");return e[i]=null===a||void 0===a?void 0:a.substr(1,a.length-2),e}),{});return t.key||(t.key=function(){var e=Date.now();It=e>(It=It||e)?e:It+1;var t="000"+Math.trunc(999*Math.random());return It.toString()+t.substr(t.length-3)}()),t})),v=t||p[0],b=r||Object.keys(v).map((function(e){return{title:e,dataIndex:e}})),m=u.trim().split(" ").map((function(e){return e.trim()})),f=p.filter((function(e){var t,n=b.reduce((function(t,n){return t+" "+e[n.dataIndex]}),"").toLowerCase(),i=Object(gt.a)(m);try{for(i.s();!(t=i.n()).done;){var r=t.value;if(!n.includes(r.toLowerCase()))return!1}}catch(a){i.e(a)}finally{i.f()}return!0}));return Object(Ie.jsxs)(Ie.Fragment,{children:[Object(Ie.jsx)(wt.a,{prefix:u?Object(Ie.jsx)(xt.a,{onClick:function(){return l("")}}):Object(Ie.jsx)(yt.a,{}),placeholder:"Input words for search",value:u,onChange:function(e){return l(e.target.value)},style:{maxWidth:"50em"}}),"\xa0\xa0","length: "+f.length,Object(Ie.jsx)("br",{}),Object(Ie.jsx)("br",{}),Object(Ie.jsx)(ht.a,Object(d.a)({size:"small",dataSource:f,columns:b,pagination:a||!1},o))]})};var Vt={viewType:"page",viewId:"AuthoritiesList",view:function(){var e=Object(X.a)(ae.store.authorities);return Object(Ie.jsx)("div",{children:Object(Ie.jsx)(kt,{dataSource:e,templateRecord:{authorityId:"",descriptionForUser:"",descriptionForAdmin:""}})})}};var Lt={viewType:"page",viewId:"MenuList",view:function(){var e=Object(X.a)($.store.menu),t=C(null===e||void 0===e?void 0:e.menuItems,"");return Object(Ie.jsx)("div",{children:Object(Ie.jsx)(kt,{dataSource:t,templateRecord:{modulesId:[],parentMenuId:"",menuId:"",authority:[],pageViewId:"",pageViewVariantId:"",layoutId:"",layoutVariantId:"",content:"",title:"",documentTitle:""},onRow:function(e,t){return{onDoubleClick:function(t){L.event.setCurrentRoute({params:{menu:e.menuId}})}}}})})}};var Mt={viewType:"page",viewId:"ModulesList",view:function(){var e=Object(X.a)(le.store.modules);return Object(Ie.jsx)("div",{children:Object(Ie.jsx)(kt,{dataSource:e,templateRecord:{moduleId:"",description:""}})})}};var At={viewType:"page",viewId:"ViewList",view:function(){var e=Object(X.a)(U.store.views);return Object(Ie.jsx)("div",{children:Object(Ie.jsx)(kt,{dataSource:e,templateRecord:{moduleId:[],viewType:"over",viewId:"",variantId:"",authorities:[],priority:{laptop:0,phone:0,tablet:0,watch:0}},onRow:function(e,t){return{onDoubleClick:function(t){L.event.setCurrentRoute({params:{pageViewId:e.viewId,pageViewVariantId:e.variantId}})}}}})})}},Dt=n(269);function Tt(e){var t=[];return Object.entries(e).forEach((function(e){var n=Object(M.a)(e,2),i=n[0],r=n[1];Object.entries(r).forEach((function(e){var n=Object(M.a)(e,2),r=n[0],a=n[1];Object.entries(a).forEach((function(e){var n=Object(M.a)(e,2),a=n[0],o=n[1];t.push({localeId:i,nameSpace:r,stringKey:a,stringValue:o})}))}))})),t}var Rt=[Vt,Lt,Mt,At,{viewType:"page",viewId:"ServicesList",view:function(){var e=Object(X.a)(we.store.services),t=Object(X.a)(we.effects.updateServicesInfoFx.pending);Object(i.useEffect)((function(){we.effects.updateServicesInfoFx(void 0)}),[]);var n={modulesId:"",serviceId:"",originUrl:"",resultQuickTest:void 0,remoteServiceInfo:void 0,description:"",servicePageViewId:""};return Object(Ie.jsxs)("div",{children:[Object(Ie.jsx)(ot.a,{type:"primary",icon:t?Object(Ie.jsx)(ct.a,{}):Object(Ie.jsx)(Dt.a,{}),disabled:t,onClick:function(){return we.effects.updateServicesInfoFx(void 0)},children:"Update"}),Object(Ie.jsx)("br",{}),Object(Ie.jsx)("br",{}),Object(Ie.jsx)(kt,{dataSource:e,templateRecord:n,onRow:function(e,t){return{onDoubleClick:function(t){L.event.setCurrentRoute({params:{pageViewId:e.servicePageViewId}})}}}})]})}},{viewType:"page",viewId:"LocalesList",view:function(){var e=Tt(Object(X.a)(se.store.locales));return Object(Ie.jsx)("div",{children:Object(Ie.jsx)(kt,{dataSource:e,templateRecord:{localeId:"",nameSpace:"",stringKey:"",stringValue:""}})})}},{viewType:"page",viewId:"SettingsList",view:function(){var e=Tt(Object(X.a)(se.store.locales));return Object(Ie.jsx)("div",{children:Object(Ie.jsx)(kt,{dataSource:e,templateRecord:{localeId:"",nameSpace:"",stringKey:"",stringValue:""}})})}},{viewType:"page",viewId:"ThemeSettingsList",view:function(){var e=Tt(Object(X.a)(se.store.locales));return Object(Ie.jsx)("div",{children:Object(Ie.jsx)(kt,{dataSource:e,templateRecord:{localeId:"",nameSpace:"",stringKey:"",stringValue:""}})})}},{viewType:"page",viewId:"NotificationsList",view:function(){var e=Tt(Object(X.a)(se.store.locales));return Object(Ie.jsx)("div",{children:Object(Ie.jsx)(kt,{dataSource:e,templateRecord:{localeId:"",nameSpace:"",stringKey:"",stringValue:""}})})}}],Pt={ru:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}},en:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}}};he({module:{moduleId:"debug",description:"Use for debug page, with register module with register data",manifest:n(151)},views:Rt,menu:[{defaultLayoutId:"SideMenuLayout",menuItems:[{menuId:"debug",menuItems:[{menuId:"ModulesList",content:"Modules",pageViewId:"ModulesList"},{menuId:"ViewList",content:"Views",pageViewId:"ViewList"},{menuId:"ServicesList",content:"Services",pageViewId:"ServicesList"},{menuId:"AuthoritiesList",content:"Authorities",pageViewId:"AuthoritiesList"},{menuId:"MenuList",content:"Menu",pageViewId:"MenuList"},{menuId:"LocalesList",content:"Locales",pageViewId:"LocalesList"},{menuId:"SettingsList",content:"Settings",pageViewId:"SettingsList"},{menuId:"ThemeSettingsList",content:"ThemeSettings",pageViewId:"ThemeSettingsList"},{menuId:"NotificationsList",content:"Notifications",pageViewId:"NotificationsList"}]}]}],authorities:[{authorityId:"debug1",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"},{authorityId:"debug2",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"}],locales:Pt}),L.event.updateCurrentRoute();var Ct=function(){var e=Object(X.a)($.store.currentLayoutPage),t=e.layout,n=e.page,i=(null===n||void 0===n?void 0:n.view)||function(){return Object(Ie.jsx)("div",{children:"error 404"})},r=null===t||void 0===t?void 0:t.view;return r?Object(Ie.jsx)(r,{children:Object(Ie.jsx)(i,{})}):Object(Ie.jsx)(i,{})};o.a.render(Object(Ie.jsx)(r.a.StrictMode,{children:Object(Ie.jsx)(Ct,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");g?(I(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):w(t,e)}))}}(),x(console.log)},42:function(e){e.exports=JSON.parse('{"packageVersion":"1.0.0","buildDate":"2021-08-08 15:46:09 +03","buildKey":8636,"buildsId":{"deviceId":4166,"devFolderName":"dev-4166","developerName":"Andrey Vyalkov"}}')},85:function(e){e.exports=JSON.parse('{"short_name":"Demo App","name":"Demo App Sample","icons":[{"src":"favicon.ico","sizes":"64x64 32x32 24x24 16x16","type":"image/x-icon"},{"src":"logo192.png","type":"image/png","sizes":"192x192"},{"src":"logo512.png","type":"image/png","sizes":"512x512"}],"start_url":".","display":"standalone","theme_color":"#000000","background_color":"#ffffff"}')}},[[252,1,2]]]);