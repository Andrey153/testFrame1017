(this["webpackJsonp@frame1059/demo-app"]=this["webpackJsonp@frame1059/demo-app"]||[]).push([[0],{119:function(e,t,n){},139:function(e){e.exports=JSON.parse('{"packageVersion":"1.0.0","buildDate":"2021-08-07 10:25:32 +03","buildKey":4679,"buildsId":{"deviceId":4166,"devFolderName":"dev-4166","developerName":"Andrey Vyalkov"}}')},141:function(e){e.exports=JSON.parse('{"short_name":"Demo App","name":"Demo App Sample","icons":[{"src":"favicon.ico","sizes":"64x64 32x32 24x24 16x16","type":"image/x-icon"},{"src":"logo192.png","type":"image/png","sizes":"192x192"},{"src":"logo512.png","type":"image/png","sizes":"512x512"}],"start_url":".","display":"standalone","theme_color":"#000000","background_color":"#ffffff"}')},144:function(e,t,n){e.exports={test4655:"demo_test4655__1nmsv"}},147:function(e){e.exports=JSON.parse('{"short_name":"React App","name":"Create React App Sample","icons":[{"src":"favicon.ico","sizes":"64x64 32x32 24x24 16x16","type":"image/x-icon"},{"src":"logo192.png","type":"image/png","sizes":"192x192"},{"src":"logo512.png","type":"image/png","sizes":"512x512"}],"start_url":".","display":"standalone","theme_color":"#000000","background_color":"#ffffff"}')},151:function(e){e.exports=JSON.parse('{"short_name":"React App","name":"Create React App Sample","icons":[{"src":"favicon.ico","sizes":"64x64 32x32 24x24 16x16","type":"image/x-icon"},{"src":"logo192.png","type":"image/png","sizes":"192x192"},{"src":"logo512.png","type":"image/png","sizes":"512x512"}],"start_url":".","display":"standalone","theme_color":"#000000","background_color":"#ffffff"}')},164:function(e,t,n){},177:function(e,t,n){},179:function(e,t,n){},252:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(34),o=n.n(a),c=(n(164),n(28)),s=n.n(c),u=n(38),d=n(17),l=n(9),p=Object(l.f)(null),v=Object(l.e)(),f=Object(l.j)(v,null);var m=Object(l.e)(),j=Object(l.f)({});j.on(m,(function(e,t){return Object(d.a)(Object(d.a)({},e),t)}));var b=Object(l.e)();j.on(b,(function(e,t){var n=function(e){return{active:!!e.active,installing:!!e.installing,waiting:!!e.waiting}}(t);return Object(d.a)(Object(d.a)({},e),{},{registrationStatus:n})}));var g=Object(l.d)(function(){var e=Object(u.a)(s.a.mark((function e(t){var n,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="./buildInfo.json?p="+(new Date).getTime(),e.next=3,fetch(n);case 3:return i=e.sent,e.abrupt("return",i.json());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());p.on(g.doneData,(function(e,t){return t}));var O={store:{buildInfo:p,preBuildInfo:f,serviceWorkerStatus:j},event:{setPreBuildInfo:v,setServiceWorkerStatus:m,setRegistrationStatus:b},effect:{readFromServer:g}},h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e){if("serviceWorker"in navigator){console.log("--122---");var t=new URL(".",window.location.href);if(t.origin!==window.location.origin)return void console.log("--123---",t.origin,window.location.origin);window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");console.log("--124---",t),h?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):w(t,e)}))}}function w(e,t){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(s.a.mark((function e(t,n){var i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.getRegistration();case 2:i=e.sent,O.event.setServiceWorkerStatus({startRegisterDate:new Date}),i&&O.event.setRegistrationStatus(i),navigator.serviceWorker.register(t).then((function(e){O.event.setServiceWorkerStatus({registerBeginDate:new Date}),O.event.setRegistrationStatus(e),e.onupdatefound=function(){O.event.setServiceWorkerStatus({onUpdatefoundDate:new Date}),O.event.setRegistrationStatus(e);var t=e.installing;null!=t&&(t.onstatechange=function(){O.event.setServiceWorkerStatus({installingWorkerOnStateChange:new Date,installingWorkerState:t.state}),O.event.setRegistrationStatus(e),"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,271)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),r(e),a(e),o(e)}))},S=Object(l.f)({appId:"",version:"",params:{}}),k=Object(l.e)();S.on(k,(function(e){var t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries()),i=window.location.pathname.split("/");return i.length<1?{appId:"",version:"",params:{}}:{appId:i[0],version:i[1],params:n}})),window.addEventListener("popstate",(function(){k()}));var V=Object(l.e)();V.watch((function(e){var t=Object.keys(e.params).filter((function(t){return!!e.params[t]})).map((function(t){return"".concat(t,"=").concat(encodeURIComponent(e.params[t]||""))})).join("&");window.history.pushState(null,"","?"+t),e.params.pageViewId&&(document.title=e.params.pageViewId)})),S.on(V,(function(e,t){return Object(d.a)(Object(d.a)({},e),t)}));var L=Object(l.e)();L.watch((function(e){window.history.pushState(null,"","?menu="+e)})),S.on(L,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{params:{menu:t}})}));var M={store:{currentRoute:S},event:{updateCurrentRoute:k,setCurrentRoute:V,setCurrentRouteByMenuId:L}},A=n(25),D=n(21);function T(e,t){return R(e,t.menuItems,t.defaultLayoutId,t.defaultLayoutVariantId)}function R(e,t){var n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return t.find((function(t){if("menuItems"in t){if(n=R(e,t.menuItems,t.layoutId||i,t.layoutId?t.layoutVariantId||"":r))return!0}else if(t.menuId===e)return n=Object(d.a)(Object(d.a)({},t),{},{layoutId:t.layoutId||i,layoutVariantId:t.layoutId?t.layoutVariantId||"":r}),!0;return!1})),n}function P(e,t){return e.map((function(e){return"menuItems"in e?Object(d.a)(Object(d.a)({},e),{},{menuItems:P(e.menuItems,t),modulesId:[t]}):Object(d.a)(Object(d.a)({},e),{},{modulesId:[t]})}))}function C(e,t,n){var i=P(t,n);if(!e)return i;var r=Object(D.a)(e);return i.forEach((function(e){var t=r.findIndex((function(t){return t.menuId===e.menuId}));if(-1===t)r.push(e);else{var a=i[t];"menuItems"in e&&"menuItems"in a?C(a.menuItems,e.menuItems,n):r[t]=Object(d.a)(Object(d.a)({},e),{},{modulesId:[].concat(Object(D.a)(r[t].modulesId),Object(D.a)(e.modulesId))})}})),r}function N(e,t){var n=[];return e?(e.forEach((function(e){if("menuItems"in e){n.push(Object(d.a)({parentMenuId:t},e));var i=N(e.menuItems,e.menuId);null===i||void 0===i||i.forEach((function(e){return n.push(e)}))}else n.push(Object(d.a)({parentMenuId:t},e))})),n):n}function F(e,t,n){return n.reduce((function(n,i){return i.viewId===e&&(!n||E(n,t)<=E(i,t))?i:n}),void 0)}function E(e,t){if(!e.priority)return 0;switch(t){case"laptop":return e.priority.laptop||0;case"tablet":return e.priority.tablet||0;case"phone":return e.priority.phone||0;case"watch":return e.priority.watch||0;default:return 0}}function z(e,t,n,i,r,a){var o;return e&&t&&(o=i.find((function(n){return n.viewId===e&&n.variantId===t}))),o||(e&&(o=F(e,n,i)),o||(r&&a&&(o=i.find((function(e){return e.viewId===r&&e.variantId===a}))),o||(r&&(o=F(r,n,i)),o||i[0])))}var W=Object(l.f)([]),B=Object(l.f)("laptop"),U=Object(l.e)();B.on(U,(function(e,t){return t}));var _=Object(l.e)();W.on(_,(function(e,t){var n=t.viewRegisterData,i=t.module;if(n){var r=Object(D.a)(e);return n.forEach((function(e){var t=r.findIndex((function(t){return t.viewId===e.viewId&&t.variantId===e.variantId}));-1!==t?r[t]=Object(d.a)(Object(d.a)({},e),{},{moduleId:[].concat(Object(D.a)(r[t].moduleId),[i.moduleId])}):r.push(Object(d.a)(Object(d.a)({},e),{},{moduleId:[i.moduleId]}))})),r}}));var Q={store:{views:W,deviceType:B},event:{add:_,setDeviceType:U}},J=Object(l.f)(null),K=Object(l.f)(!1),H=Object(l.e)();K.on(H,(function(e){return!e}));var G=Object(l.e)();K.on(G,(function(e,t){return t}));var q=Object(l.c)([J,M.store.currentRoute]).map((function(e){var t=Object(A.a)(e,2),n=t[0],i=t[1];if(i.params.menu&&n)return T(i.params.menu,n)}));q.watch((function(e){document.title=e&&(e.documentTitle||e.menuId)||"todo default title app name"}));var Y=Object(l.e)();J.on(Y,(function(e,t){var n=t.appMenu,i=t.module;if(n){var r=C(null===e||void 0===e?void 0:e.menuItems,n.menuItems,i.moduleId);return Object(d.a)(Object(d.a)(Object(d.a)({},e),n),{},{menuItems:r})}}));var $=Object(l.e)();J.on($,(function(e,t){return t}));var X={store:{menu:J,currentMenuItem:q,collapsed:K,currentLayoutPage:Object(l.c)([M.store.currentRoute,Q.store.deviceType,Q.store.views,J]).map((function(e){var t,n,i,r,a,o,c=Object(A.a)(e,4),s=c[0],u=c[1],d=c[2],l=c[3];if(s.params.pageViewId){var p=z(s.params.pageViewId,s.params.pageViewVariantId,u,d,null===l||void 0===l?void 0:l.defaultPageViewId,null===l||void 0===l?void 0:l.defaultPageViewVariantId);return{layout:z(s.params.layoutId||(null===l||void 0===l?void 0:l.defaultLayoutId),s.params.layoutVariantId||(null===l||void 0===l?void 0:l.defaultLayoutVariantId),u,d,null===l||void 0===l?void 0:l.defaultLayoutId,null===l||void 0===l?void 0:l.defaultLayoutVariantId),page:p}}return s.params.menu&&l&&(a=T(s.params.menu,l)),o=z(null===(t=a)||void 0===t?void 0:t.pageViewId,null===(n=a)||void 0===n?void 0:n.pageViewVariantId,u,d,null===l||void 0===l?void 0:l.defaultPageViewId,null===l||void 0===l?void 0:l.defaultPageViewVariantId),{layout:z(null===(i=a)||void 0===i?void 0:i.layoutId,null===(r=a)||void 0===r?void 0:r.layoutVariantId,u,d,null===l||void 0===l?void 0:l.defaultLayoutId,null===l||void 0===l?void 0:l.defaultLayoutVariantId),page:o}}))},event:{add:Y,set:$,collapseToggle:H,setCollapse:G}},Z=n(18),ee=n(139),te=Object(l.f)([]),ne=Object(l.f)([]),ie=Object(l.f)([]),re=Object(l.e)();te.on(re,(function(e,t){if(t){var n=Object(D.a)(e);return t.forEach((function(e){var t=n.findIndex((function(t){return t.authorityId===e.authorityId}));-1!==t?n[t]=e:n.push(e)})),n}}));var ae=Object(l.e)();ne.on(re,(function(e,t){var n=Object(D.a)(e);if(t)return t.forEach((function(e){var t=n.findIndex((function(t){return t.authorityId===e.authorityId}));-1!==t?n[t]=e:n.push(e)})),n}));var oe=Object(l.e)();ie.on(oe,(function(e,t){var n=Object(D.a)(e);return t.forEach((function(e){var t=n.findIndex((function(t){return t.authorityId===e.authorityId}));-1!==t?n[t]=e:n.push(e)})),n}));var ce={store:{authorities:te,currentAuthorities:ne,debugAuthorities:ie},event:{addAuthorities:re,addCurrentAuthorities:ae,addDebugAuthorities:oe}},se=Object(l.f)({}),ue=Object(l.e)();se.on(ue,(function(e,t){if(t)return Object.assign({},e,t)}));var de={store:{locales:se},event:{add:ue}},le=Object(l.f)([]),pe=Object(l.e)();le.on(pe,(function(e,t){return[].concat(Object(D.a)(e),[t])}));var ve={store:{modules:le},event:{add:pe}},fe=Object(l.f)([]),me=Object(l.e)();fe.on(me,(function(e,t){return[].concat(Object(D.a)(e),Object(D.a)(t))}));var je=Object(l.e)();fe.on(je,(function(e){return e.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{timeResultQuickTest:void 0,resultQuickTest:void 0,timeRemoteServiceInfo:void 0,remoteServiceInfo:void 0})}))}));var be=Object(l.e)();fe.on(be,(function(e,t){var n=t.module,i=t.services;if(i){var r=null===i||void 0===i?void 0:i.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{modulesId:n.moduleId})}));return[].concat(Object(D.a)(e),Object(D.a)(r))}}));var ge=Object(l.d)(function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.runQuickTest){e.next=2;break}throw new Error("service.runQuickTest is undefined");case 2:return e.next=4,t.runQuickTest();case 4:return n=e.sent,e.abrupt("return",{serviceId:t.serviceId,resultQuickTest:n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());fe.on(ge.doneData,(function(e,t){var n=Object(D.a)(e),i=n.findIndex((function(e){return e.serviceId===t.serviceId}));if(-1!==i)return n[i]=Object(d.a)(Object(d.a)({},n[i]),{},{timeResultQuickTest:(new Date).toISOString(),resultQuickTest:t.resultQuickTest}),n}));var Oe=Object(l.d)(function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.getRemoteServiceInfo){e.next=2;break}throw new Error("service.getRemoteServiceInfo is undefined");case 2:return e.next=4,t.getRemoteServiceInfo();case 4:return n=e.sent,e.abrupt("return",{serviceId:t.serviceId,remoteServiceInfo:n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());fe.on(Oe.doneData,(function(e,t){var n=Object(D.a)(e),i=n.findIndex((function(e){return e.serviceId===t.serviceId}));if(-1!==i)return n[i]=Object(d.a)(Object(d.a)({},n[i]),{},{timeRemoteServiceInfo:(new Date).toISOString(),remoteServiceInfo:t.remoteServiceInfo}),n}));var he=Object(l.d)(function(){var e=Object(u.a)(s.a.mark((function e(t){var n,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return ge(e)})),i=t.map((function(e){return Oe(e)})),e.next=4,Promise.all(n);case 4:return e.next=6,Promise.all(i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Ie=Object(l.a)({effect:he,source:fe,mapParams:function(e,t){return t}});Object(l.g)({from:Ie,to:je});var we={store:{services:fe},event:{add:me,initModule:be},effects:{runAllQuickTestFx:he,updateServicesInfoFx:Ie}};function xe(e){var t,n;if(!ve.store.modules.getState().find((function(t){return t.moduleId===e.module.moduleId}))){ve.event.add(e.module);var i=null===e||void 0===e||null===(t=e.menu)||void 0===t?void 0:t.filter((function(t){return t.moduleId===e.module.moduleId}))[0];i||(i=null===e||void 0===e||null===(n=e.menu)||void 0===n?void 0:n.filter((function(e){return void 0===e.moduleId}))[0]),X.event.add({appMenu:i,module:e.module}),Q.event.add({viewRegisterData:e.views,module:e.module}),ce.event.addAuthorities(e.authorities),de.event.add(e.locales),we.event.initModule(e)}}var ye=n(6);var Se={viewType:"page",viewId:"DemoPageView",view:function(){return Object(ye.jsx)("div",{children:"DemoPageViewFromDemoApp"})}},ke=n(140),Ve=Array.from(Array(32),(function(e,t){return Object(ke.loremIpsum)({units:"paragraph"})}));var Le=[Se,{viewType:"page",viewId:"LoremIpsum",view:function(){return Object(ye.jsxs)("div",{children:[Object(ye.jsx)("h1",{children:"Lorem Ipsum"}),Ve.map((function(e){return Object(ye.jsx)("div",{style:{padding:"8px 0px 8px 0px"},children:e})}))]})}}],Me=n(262),Ae=[{defaultMenuId:"DemoPageView",defaultLayoutId:"SideMenuLayout",menuItems:[{menuId:"DemoPageView",icon:Object(ye.jsx)(Me.a,{}),pageViewId:"DemoPageView"},{menuId:"LoremIpsum",pageViewId:"LoremIpsum"}]}],De={ru:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}},en:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}}};function Te(e){return new Promise((function(t){setTimeout(t,e)}))}var Re=[{originUrl:"mock",serviceId:"demoService",description:"mock service for demo",servicePageViewId:"DemoServiceTestPageView",runQuickTest:function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Te(1e3);case 2:return e.abrupt("return",{status:"work"});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getRemoteServiceInfo:function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{name:"demoMockService",version:"1.0.0",buildDate:(new Date).toISOString(),restartDate:(new Date).toISOString(),description:"description from mock service"});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}];xe({module:{moduleId:"demoApp",description:"Simplest demo App with one demo page.",manifest:n(141)},views:Le,menu:Ae,authorities:[{authorityId:"debug1",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"},{authorityId:"debug2",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"}],locales:De,services:Re});n(119),n(177);var Pe=n(256),Ce=n(22),Ne=n(263),Fe=n(264),Ee=n(64);function ze(){return{width:window.innerWidth,height:window.innerHeight}}window.addEventListener("resize",(function(){Be(ze())}));var We=Object(l.f)(ze()),Be=Object(l.e)();We.on(Be,(function(e,t){return t}));var Ue=We.map((function(e){return{orientation:e.height<e.width?"landscape":"portrait",type:e.height>=992?"laptop":e.height>=768?"tablet":e.height>=480?"phone":"watch"}})),_e=We.map((function(e){return e.width<=768})),Qe={store:{screenSize:We,screen:Ue,hoveredMenu:_e},event:{setSize:Be}},Je=function e(t){var n=t.item;return"menuItems"in n?Object(ye.jsx)(Ee.a.SubMenu,{icon:n.icon,title:n.title||n.menuId,children:n.menuItems.map((function(t){return e({item:t})}))},n.menuId):Object(ye.jsx)(Ee.a.Item,{icon:n.icon,title:n.title||n.menuId,children:n.content||n.menuId},n.menuId)};function Ke(e){var t,n=Object(Z.a)(X.store.menu),i=Object(Z.a)(X.store.currentMenuItem),r=Object(Z.a)(Qe.store.hoveredMenu);return Object(ye.jsx)(Ee.a,Object(d.a)(Object(d.a)({onClick:function(e){r&&X.event.setCollapse(!0),M.event.setCurrentRouteByMenuId(e.key.toString())},style:{userSelect:"none"}},e),{},{selectedKeys:[(null===i||void 0===i?void 0:i.menuId)||""],children:null===n||void 0===n||null===(t=n.menuItems)||void 0===t?void 0:t.map((function(e){return Je({item:e})}))}))}var He=Pe.a.Header,Ge=Pe.a.Sider,qe=Pe.a.Content,Ye={viewType:"layout",viewId:"AntLayout",view:function(e){var t=Object(Z.a)(X.store.collapsed);return Object(ye.jsx)(Ce.a,{locale:{locale:"en"},children:Object(ye.jsxs)(Pe.a,{children:[Object(ye.jsxs)(Ge,{trigger:null,collapsible:!0,collapsed:t,children:[Object(ye.jsx)("div",{className:"logo"}),Object(ye.jsx)(Ke,{theme:"dark",mode:"inline"})]}),Object(ye.jsxs)(Pe.a,{className:"site-layout",children:[Object(ye.jsx)(He,{className:"site-layout-background",style:{padding:0},children:r.a.createElement(t?Ne.a:Fe.a,{className:"trigger",onClick:function(){return X.event.collapseToggle()}})}),Object(ye.jsx)(qe,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:280},children:e.children})]})]})})}},$e={viewType:"layout",viewId:"AntEmptyConfigProviderLayout",view:function(e){return Object(ye.jsx)(Ce.a,{locale:{locale:"en"},children:e.children})}},Xe=n(260);function Ze(){var e=Object(Z.a)(X.store.collapsed),t=Object(Z.a)(Qe.store.hoveredMenu);return Object(ye.jsx)(Xe.a,{placement:"left",mask:t,closable:!1,onClose:function(){return X.event.setCollapse(!0)},visible:!e,getContainer:!1,bodyStyle:{padding:"8px 0px 0px 0px",backgroundColor:"#001529"},width:"256px",children:Object(ye.jsx)(Ke,{theme:"dark",mode:"inline"})})}function et(){var e=Object(Z.a)(X.store.collapsed),t=Object(Z.a)(Qe.store.hoveredMenu),n=Object(i.useState)(!0),a=Object(A.a)(n,2),o=a[0],c=a[1];return Object(i.useEffect)((function(){var e=!1,t=0,n=function(){var n=document.body.scrollTop+document.documentElement.scrollTop;e||(e=!0,requestAnimationFrame((function(){t>n?c(!0):n>300&&o?c(!1):n<300&&!o&&c(!0),t=n,e=!1})))};return document.addEventListener("scroll",n,{passive:!0}),function(){document.removeEventListener("scroll",n)}}),[]),o?Object(ye.jsx)(Pe.a.Header,{className:"site-layout-background",style:{padding:0,paddingLeft:e||t?"0px":"256px",background:"#fff",position:"fixed",top:"0",right:"0",width:"100%",zIndex:9,transition:"width 0.2s"},children:r.a.createElement(e?Ne.a:Fe.a,{className:"trigger",onClick:function(){return X.event.collapseToggle()}})}):null}var tt=function(e){var t=Object(Z.a)(X.store.collapsed),n=Object(Z.a)(Qe.store.hoveredMenu);return Object(ye.jsx)("div",{style:{paddingLeft:t||n?"0px":"256px",paddingTop:"56px"},children:Object(ye.jsx)("div",{style:{padding:"16px"},children:e.children})})},nt=(n(179),{viewType:"layout",viewId:"SideMenuLayout",view:function(e){return Object(ye.jsxs)(Ce.a,{locale:{locale:"en"},children:[Object(ye.jsx)(Ze,{}),Object(ye.jsx)(et,{}),Object(ye.jsx)(tt,{children:e.children})]})}}),it=n(144),rt=n.n(it);var at={viewType:"page",viewId:"DemoPageView",view:function(){return document.body.style.setProperty("--color-test","green"),Object(ye.jsx)("div",{className:rt.a.test4655,children:"DemoPageView456"})}},ot=n(145),ct=n(50),st=n(266),ut=n(61),dt=n(265),lt=n(267);var pt={viewType:"page",viewId:"AboutPageView",view:function(){var e=Object(Z.a)(O.store.buildInfo),t=Object(Z.a)(O.store.preBuildInfo),n=Object(Z.a)(O.store.serviceWorkerStatus),r=Object(Z.a)(O.effect.readFromServer.pending),a=Object(i.useState)(!1),o=Object(A.a)(a,2),c=(o[0],o[1]),d=Object(i.useState)(!1),l=Object(A.a)(d,2),p=l[0],v=(l[1],Object(i.useState)(null)),f=Object(A.a)(v,2),m=(f[0],f[1],function(){var e=Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.getRegistration();case 2:null===(n=e.sent)||void 0===n||null===(t=n.waiting)||void 0===t||t.postMessage({type:"SKIP_WAITING"});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),j=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){O.effect.readFromServer("")}),[]),Object(i.useEffect)((function(){e&&(c(!0),setTimeout((function(){return c(!1)}),3e3))}),[e]),Object(ye.jsx)("div",{style:{maxWidth:"50em",textAlign:"center"},children:Object(ye.jsxs)("div",{style:{display:"inline-block",maxWidth:"40em",textAlign:"center",width:"100%"},children:["packageVersion: ",Object(ye.jsx)("b",{children:null===t||void 0===t?void 0:t.packageVersion}),Object(ye.jsx)("br",{}),"buildDate: ",Object(ye.jsx)("b",{children:null===t||void 0===t?void 0:t.buildDate.slice(0,19)}),Object(ye.jsx)(ot.a,{spinning:p}),Object(ye.jsx)("br",{}),Object(ye.jsx)("br",{}),Object(ye.jsx)(ct.a,{size:"large",icon:r?Object(ye.jsx)(ut.a,{}):Object(ye.jsx)(dt.a,{}),style:{width:"100%"},type:"link",onClick:O.effect.readFromServer,children:"Check new version"}),Object(ye.jsx)("br",{}),(null===e||void 0===e?void 0:e.buildDate)!==(null===t||void 0===t?void 0:t.buildDate)?Object(ye.jsx)(st.a,{message:"New version available",description:Object(ye.jsxs)(ye.Fragment,{children:["packageVersion:"," ",Object(ye.jsx)("b",{children:null===e||void 0===e?void 0:e.packageVersion.slice(0,19)}),Object(ye.jsx)("br",{}),"buildDate: ",Object(ye.jsx)("b",{children:null===e||void 0===e?void 0:e.buildDate.slice(0,19)}),Object(ye.jsx)(ot.a,{spinning:p}),Object(ye.jsx)("br",{})]}),type:"warning"}):Object(ye.jsx)(st.a,{message:"You use last available version",type:"info"}),Object(ye.jsx)("br",{}),Object(ye.jsx)(ct.a,{size:"large",style:{width:"100%"},type:"primary",onClick:m,children:"Update"}),Object(ye.jsx)("br",{}),Object(ye.jsx)("br",{}),Object(ye.jsx)(ct.a,{size:"large",style:{width:"100%"},type:"primary",onClick:j,children:"startRegisterRun"}),Object(ye.jsx)("br",{}),Object(ye.jsx)("br",{}),Object(ye.jsx)(ct.a,{icon:Object(ye.jsx)(lt.a,{}),style:{width:"100%"},type:"default",onClick:function(){window.location.reload()},size:"large",children:"Reload"}),Object(ye.jsx)("br",{}),Object(ye.jsx)("br",{}),"serviceWorkerStatus:",Object(ye.jsx)("pre",{children:JSON.stringify(n,null,2)})]})})}},vt=n(104),ft=n(268),mt=n(261),jt=n(269);var bt=[Ye,$e,nt,at,pt,{viewType:"page",viewId:"AntdDemoPage",view:function(){var e="middle";return Object(ye.jsxs)("div",{children:[Object(ye.jsxs)(ye.Fragment,{children:[Object(ye.jsxs)(vt.a.Group,{value:e,onChange:function(){},children:[Object(ye.jsx)(vt.a.Button,{value:"large",children:"Large"}),Object(ye.jsx)(vt.a.Button,{value:"default",children:"Default"}),Object(ye.jsx)(vt.a.Button,{value:"small",children:"Small"})]}),Object(ye.jsx)("br",{}),Object(ye.jsx)("br",{}),Object(ye.jsx)(ct.a,{type:"primary",size:e,children:"Primary"}),Object(ye.jsx)(ct.a,{size:e,children:"Default"}),Object(ye.jsx)(ct.a,{type:"dashed",size:e,children:"Dashed"}),Object(ye.jsx)("br",{}),Object(ye.jsx)(ct.a,{type:"link",size:e,children:"Link"}),Object(ye.jsx)("br",{}),Object(ye.jsxs)(ft.b,{children:[Object(ye.jsx)(ct.a,{type:"primary",icon:Object(ye.jsx)(jt.a,{}),size:e}),Object(ye.jsx)(ct.a,{type:"primary",shape:"circle",icon:Object(ye.jsx)(jt.a,{}),size:e}),Object(ye.jsx)(ct.a,{type:"primary",shape:"round",icon:Object(ye.jsx)(jt.a,{}),size:e}),Object(ye.jsx)(ct.a,{type:"primary",shape:"round",icon:Object(ye.jsx)(jt.a,{}),size:e,children:"Download"}),Object(ye.jsx)(ct.a,{type:"primary",icon:Object(ye.jsx)(jt.a,{}),size:e,children:"Download"})]}),Object(ye.jsx)("br",{}),Object(ye.jsx)("br",{}),Object(ye.jsxs)(ft.b,{children:[Object(ye.jsx)(ct.a,{type:"primary",danger:!0,children:"Primary"}),Object(ye.jsx)(ct.a,{danger:!0,children:"Default"}),Object(ye.jsx)(ct.a,{type:"dashed",danger:!0,children:"Dashed"}),Object(ye.jsx)(ct.a,{type:"text",danger:!0,children:"Text"}),Object(ye.jsx)(ct.a,{type:"link",danger:!0,children:"Link"})]})]}),Object(ye.jsx)(mt.a,{gutter:[16,16],children:Object(ye.jsxs)(ft.b,{children:[Object(ye.jsx)(st.a,{message:"Success Tips",type:"success",showIcon:!0}),Object(ye.jsx)(st.a,{message:"Informational Notes",type:"info",showIcon:!0}),Object(ye.jsx)(st.a,{message:"Warning",type:"warning",showIcon:!0,closable:!0}),Object(ye.jsx)(st.a,{message:"Error",type:"error",showIcon:!0}),Object(ye.jsx)(st.a,{message:"Success Tips",description:"Detailed description and advice about successful copywriting.",type:"success",showIcon:!0}),Object(ye.jsx)(st.a,{message:"Informational Notes",description:"Additional description and information about copywriting.",type:"info",showIcon:!0}),Object(ye.jsx)(st.a,{message:"Warning",description:"This is a warning notice about copywriting.",type:"warning",showIcon:!0,closable:!0}),Object(ye.jsx)(st.a,{message:"Error",description:"This is an error message about copywriting.",type:"error",showIcon:!0})]})})]})}}],gt={ru:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}},en:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}}};xe({module:{moduleId:"defaultAntd",description:"Use for provide base layouts from Ant Design. with some demo page",manifest:n(147)},views:bt,menu:[{defaultMenuId:"DemoPageView",defaultLayoutId:"SideMenuLayout",menuItems:[{menuId:"defaultAntd",menuItems:[{menuId:"defaultAntd.Pages",menuItems:[{menuId:"defaultAntd.Layouts.DemoPageView",pageViewId:"DemoPageView"},{menuId:"defaultAntd.Layouts.AntdDemoPage",pageViewId:"AntdDemoPage"},{menuId:"defaultAntd.Layouts.AboutPageView",pageViewId:"AboutPageView"}]}]},{menuId:"DemoPageView",pageViewId:"DemoPageView"},{menuId:"AboutPageView",pageViewId:"AboutPageView"}]}],authorities:[{authorityId:"debug1",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"},{authorityId:"debug2",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"}],locales:gt});var Ot=n(82),ht=n(158),It=n(259),wt=n(257),xt=(n(258),0);var yt=n(56),St=n(114),kt=["templateRecord","dataSource","columns","pagination"],Vt=function(e){var t=e.templateRecord,n=e.dataSource,r=e.columns,a=e.pagination,o=Object(ht.a)(e,kt),c=Object(i.useState)(""),s=Object(A.a)(c,2),u=s[0],l=s[1];if(!(null===n||void 0===n?void 0:n.length))return null;var p=n.map((function(e){var t=Object.entries(e).reduce((function(e,t){var n=Object(A.a)(t,2),i=n[0],r=n[1],a=JSON.stringify(r,null," ");return e[i]=null===a||void 0===a?void 0:a.substr(1,a.length-2),e}),{});return t.key||(t.key=function(){var e=Date.now();xt=e>(xt=xt||e)?e:xt+1;var t="000"+Math.trunc(999*Math.random());return xt.toString()+t.substr(t.length-3)}()),t})),v=t||p[0],f=r||Object.keys(v).map((function(e){return{title:e,dataIndex:e}})),m=u.trim().split(" ").map((function(e){return e.trim()})),j=p.filter((function(e){var t,n=f.reduce((function(t,n){return t+" "+e[n.dataIndex]}),"").toLowerCase(),i=Object(Ot.a)(m);try{for(i.s();!(t=i.n()).done;){var r=t.value;if(!n.includes(r.toLowerCase()))return!1}}catch(a){i.e(a)}finally{i.f()}return!0}));return Object(ye.jsxs)(ye.Fragment,{children:[Object(ye.jsx)(It.a,{prefix:u?Object(ye.jsx)(yt.a,{onClick:function(){return l("")}}):Object(ye.jsx)(St.a,{}),placeholder:"Input words for search",value:u,onChange:function(e){return l(e.target.value)},style:{maxWidth:"50em"}}),"\xa0\xa0","length: "+j.length,Object(ye.jsx)("br",{}),Object(ye.jsx)("br",{}),Object(ye.jsx)(wt.a,Object(d.a)({size:"small",dataSource:j,columns:f,pagination:a||!1},o))]})};var Lt={viewType:"page",viewId:"AuthoritiesList",view:function(){var e=Object(Z.a)(ce.store.authorities);return Object(ye.jsx)("div",{children:Object(ye.jsx)(Vt,{dataSource:e,templateRecord:{authorityId:"",descriptionForUser:"",descriptionForAdmin:""}})})}};var Mt={viewType:"page",viewId:"MenuList",view:function(){var e=Object(Z.a)(X.store.menu),t=N(null===e||void 0===e?void 0:e.menuItems,"");return Object(ye.jsx)("div",{children:Object(ye.jsx)(Vt,{dataSource:t,templateRecord:{modulesId:[],parentMenuId:"",menuId:"",authority:[],pageViewId:"",pageViewVariantId:"",layoutId:"",layoutVariantId:"",content:"",title:"",documentTitle:""},onRow:function(e,t){return{onDoubleClick:function(t){M.event.setCurrentRoute({params:{menu:e.menuId}})}}}})})}};var At={viewType:"page",viewId:"ModulesList",view:function(){var e=Object(Z.a)(ve.store.modules);return Object(ye.jsx)("div",{children:Object(ye.jsx)(Vt,{dataSource:e,templateRecord:{moduleId:"",description:""}})})}};var Dt={viewType:"page",viewId:"ViewList",view:function(){var e=Object(Z.a)(Q.store.views);return Object(ye.jsx)("div",{children:Object(ye.jsx)(Vt,{dataSource:e,templateRecord:{moduleId:[],viewType:"over",viewId:"",variantId:"",authorities:[],priority:{laptop:0,phone:0,tablet:0,watch:0}},onRow:function(e,t){return{onDoubleClick:function(t){M.event.setCurrentRoute({params:{pageViewId:e.viewId,pageViewVariantId:e.variantId}})}}}})})}},Tt=n(270);function Rt(e){var t=[];return Object.entries(e).forEach((function(e){var n=Object(A.a)(e,2),i=n[0],r=n[1];Object.entries(r).forEach((function(e){var n=Object(A.a)(e,2),r=n[0],a=n[1];Object.entries(a).forEach((function(e){var n=Object(A.a)(e,2),a=n[0],o=n[1];t.push({localeId:i,nameSpace:r,stringKey:a,stringValue:o})}))}))})),t}var Pt=[Lt,Mt,At,Dt,{viewType:"page",viewId:"ServicesList",view:function(){var e=Object(Z.a)(we.store.services),t=Object(Z.a)(we.effects.updateServicesInfoFx.pending);Object(i.useEffect)((function(){we.effects.updateServicesInfoFx(void 0)}),[]);var n={modulesId:"",serviceId:"",originUrl:"",resultQuickTest:void 0,remoteServiceInfo:void 0,description:"",servicePageViewId:""};return Object(ye.jsxs)("div",{children:[Object(ye.jsx)(ct.a,{type:"primary",icon:t?Object(ye.jsx)(ut.a,{}):Object(ye.jsx)(Tt.a,{}),disabled:t,onClick:function(){return we.effects.updateServicesInfoFx(void 0)},children:"Update"}),Object(ye.jsx)("br",{}),Object(ye.jsx)("br",{}),Object(ye.jsx)(Vt,{dataSource:e,templateRecord:n,onRow:function(e,t){return{onDoubleClick:function(t){M.event.setCurrentRoute({params:{pageViewId:e.servicePageViewId}})}}}})]})}},{viewType:"page",viewId:"LocalesList",view:function(){var e=Rt(Object(Z.a)(de.store.locales));return Object(ye.jsx)("div",{children:Object(ye.jsx)(Vt,{dataSource:e,templateRecord:{localeId:"",nameSpace:"",stringKey:"",stringValue:""}})})}},{viewType:"page",viewId:"SettingsList",view:function(){var e=Rt(Object(Z.a)(de.store.locales));return Object(ye.jsx)("div",{children:Object(ye.jsx)(Vt,{dataSource:e,templateRecord:{localeId:"",nameSpace:"",stringKey:"",stringValue:""}})})}},{viewType:"page",viewId:"ThemeSettingsList",view:function(){var e=Rt(Object(Z.a)(de.store.locales));return Object(ye.jsx)("div",{children:Object(ye.jsx)(Vt,{dataSource:e,templateRecord:{localeId:"",nameSpace:"",stringKey:"",stringValue:""}})})}},{viewType:"page",viewId:"NotificationsList",view:function(){var e=Rt(Object(Z.a)(de.store.locales));return Object(ye.jsx)("div",{children:Object(ye.jsx)(Vt,{dataSource:e,templateRecord:{localeId:"",nameSpace:"",stringKey:"",stringValue:""}})})}}],Ct={ru:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}},en:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}}};xe({module:{moduleId:"debug",description:"Use for debug page, with register module with register data",manifest:n(151)},views:Pt,menu:[{defaultLayoutId:"SideMenuLayout",menuItems:[{menuId:"debug",menuItems:[{menuId:"ModulesList",content:"Modules",pageViewId:"ModulesList"},{menuId:"ViewList",content:"Views",pageViewId:"ViewList"},{menuId:"ServicesList",content:"Services",pageViewId:"ServicesList"},{menuId:"AuthoritiesList",content:"Authorities",pageViewId:"AuthoritiesList"},{menuId:"MenuList",content:"Menu",pageViewId:"MenuList"},{menuId:"LocalesList",content:"Locales",pageViewId:"LocalesList"},{menuId:"SettingsList",content:"Settings",pageViewId:"SettingsList"},{menuId:"ThemeSettingsList",content:"ThemeSettings",pageViewId:"ThemeSettingsList"},{menuId:"NotificationsList",content:"Notifications",pageViewId:"NotificationsList"}]}]}],authorities:[{authorityId:"debug1",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"},{authorityId:"debug2",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"}],locales:Ct}),O.event.setPreBuildInfo(ee),M.event.updateCurrentRoute();var Nt=function(){var e=Object(Z.a)(X.store.currentLayoutPage),t=e.layout,n=e.page,i=(null===n||void 0===n?void 0:n.view)||function(){return Object(ye.jsx)("div",{children:"error 404"})},r=null===t||void 0===t?void 0:t.view;return r?Object(ye.jsx)(r,{children:Object(ye.jsx)(i,{})}):Object(ye.jsx)(i,{})};o.a.render(Object(ye.jsx)(r.a.StrictMode,{children:Object(ye.jsx)(Nt,{})}),document.getElementById("root")),I(),y(console.log)}},[[252,1,2]]]);