(this["webpackJsonp@frame1059/demo-app"]=this["webpackJsonp@frame1059/demo-app"]||[]).push([[0],{119:function(e,t,n){},139:function(e){e.exports=JSON.parse('{"packageVersion":"1.0.0","buildDate":"2021-08-07 12:56:19 +03","buildKey":3541,"buildsId":{"deviceId":4166,"devFolderName":"dev-4166","developerName":"Andrey Vyalkov"}}')},141:function(e){e.exports=JSON.parse('{"short_name":"Demo App","name":"Demo App Sample","icons":[{"src":"favicon.ico","sizes":"64x64 32x32 24x24 16x16","type":"image/x-icon"},{"src":"logo192.png","type":"image/png","sizes":"192x192"},{"src":"logo512.png","type":"image/png","sizes":"512x512"}],"start_url":".","display":"standalone","theme_color":"#000000","background_color":"#ffffff"}')},144:function(e,t,n){e.exports={test4655:"demo_test4655__1nmsv"}},145:function(e){e.exports=JSON.parse('{"short_name":"React App","name":"Create React App Sample","icons":[{"src":"favicon.ico","sizes":"64x64 32x32 24x24 16x16","type":"image/x-icon"},{"src":"logo192.png","type":"image/png","sizes":"192x192"},{"src":"logo512.png","type":"image/png","sizes":"512x512"}],"start_url":".","display":"standalone","theme_color":"#000000","background_color":"#ffffff"}')},150:function(e){e.exports=JSON.parse('{"short_name":"React App","name":"Create React App Sample","icons":[{"src":"favicon.ico","sizes":"64x64 32x32 24x24 16x16","type":"image/x-icon"},{"src":"logo192.png","type":"image/png","sizes":"192x192"},{"src":"logo512.png","type":"image/png","sizes":"512x512"}],"start_url":".","display":"standalone","theme_color":"#000000","background_color":"#ffffff"}')},163:function(e,t,n){},176:function(e,t,n){},178:function(e,t,n){},251:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(34),o=n.n(a),c=(n(163),n(28)),s=n.n(c),u=n(38),d=n(17),l=n(9),p=Object(l.f)(null),v=Object(l.e)(),f=Object(l.j)(v,null);var m=Object(l.e)(),j=Object(l.f)({});j.on(m,(function(e,t){return Object(d.a)(Object(d.a)({},e),t)}));var b=Object(l.e)();j.on(b,(function(e,t){var n=function(e){return{active:!!e.active,installing:!!e.installing,waiting:!!e.waiting}}(t);return Object(d.a)(Object(d.a)({},e),{},{registrationStatus:n})}));var g=Object(l.d)(function(){var e=Object(u.a)(s.a.mark((function e(t){var n,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="./buildInfo.json?p="+(new Date).getTime(),e.next=3,fetch(n);case 3:return i=e.sent,e.abrupt("return",i.json());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());p.on(g.doneData,(function(e,t){return t}));var O={store:{buildInfo:p,preBuildInfo:f,serviceWorkerStatus:j},event:{setPreBuildInfo:v,setServiceWorkerStatus:m,setRegistrationStatus:b},effect:{readFromServer:g}},h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;var t="".concat(".","/service-worker.js");h?(y(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):I(t,e)}}function I(e,t){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(s.a.mark((function e(t,n){var i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.getRegistration();case 2:i=e.sent,O.event.setServiceWorkerStatus({startRegisterDate:new Date}),i&&O.event.setRegistrationStatus(i),navigator.serviceWorker.register(t).then((function(e){O.event.setServiceWorkerStatus({registerBeginDate:new Date}),O.event.setRegistrationStatus(e),e.update(),e.onupdatefound=function(){O.event.setServiceWorkerStatus({onUpdatefoundDate:new Date}),O.event.setRegistrationStatus(e);var t=e.installing;null!=t&&(t.onstatechange=function(){O.event.setServiceWorkerStatus({installingWorkerOnStateChange:new Date,installingWorkerState:t.state}),O.event.setRegistrationStatus(e),"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}var S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,270)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),r(e),a(e),o(e)}))},k=Object(l.f)({appId:"",version:"",params:{}}),V=Object(l.e)();k.on(V,(function(e){var t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries()),i=window.location.pathname.split("/");return i.length<1?{appId:"",version:"",params:{}}:{appId:i[0],version:i[1],params:n}})),window.addEventListener("popstate",(function(){V()}));var L=Object(l.e)();L.watch((function(e){var t=Object.keys(e.params).filter((function(t){return!!e.params[t]})).map((function(t){return"".concat(t,"=").concat(encodeURIComponent(e.params[t]||""))})).join("&");window.history.pushState(null,"","?"+t),e.params.pageViewId&&(document.title=e.params.pageViewId)})),k.on(L,(function(e,t){return Object(d.a)(Object(d.a)({},e),t)}));var M=Object(l.e)();M.watch((function(e){window.history.pushState(null,"","?menu="+e)})),k.on(M,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{params:{menu:t}})}));var D={store:{currentRoute:k},event:{updateCurrentRoute:V,setCurrentRoute:L,setCurrentRouteByMenuId:M}},A=n(26),T=n(21);function R(e,t){return P(e,t.menuItems,t.defaultLayoutId,t.defaultLayoutVariantId)}function P(e,t){var n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return t.find((function(t){if("menuItems"in t){if(n=P(e,t.menuItems,t.layoutId||i,t.layoutId?t.layoutVariantId||"":r))return!0}else if(t.menuId===e)return n=Object(d.a)(Object(d.a)({},t),{},{layoutId:t.layoutId||i,layoutVariantId:t.layoutId?t.layoutVariantId||"":r}),!0;return!1})),n}function C(e,t){return e.map((function(e){return"menuItems"in e?Object(d.a)(Object(d.a)({},e),{},{menuItems:C(e.menuItems,t),modulesId:[t]}):Object(d.a)(Object(d.a)({},e),{},{modulesId:[t]})}))}function F(e,t,n){var i=C(t,n);if(!e)return i;var r=Object(T.a)(e);return i.forEach((function(e){var t=r.findIndex((function(t){return t.menuId===e.menuId}));if(-1===t)r.push(e);else{var a=i[t];"menuItems"in e&&"menuItems"in a?F(a.menuItems,e.menuItems,n):r[t]=Object(d.a)(Object(d.a)({},e),{},{modulesId:[].concat(Object(T.a)(r[t].modulesId),Object(T.a)(e.modulesId))})}})),r}function N(e,t){var n=[];return e?(e.forEach((function(e){if("menuItems"in e){n.push(Object(d.a)({parentMenuId:t},e));var i=N(e.menuItems,e.menuId);null===i||void 0===i||i.forEach((function(e){return n.push(e)}))}else n.push(Object(d.a)({parentMenuId:t},e))})),n):n}function z(e,t,n){return n.reduce((function(n,i){return i.viewId===e&&(!n||E(n,t)<=E(i,t))?i:n}),void 0)}function E(e,t){if(!e.priority)return 0;switch(t){case"laptop":return e.priority.laptop||0;case"tablet":return e.priority.tablet||0;case"phone":return e.priority.phone||0;case"watch":return e.priority.watch||0;default:return 0}}function W(e,t,n,i,r,a){var o;return e&&t&&(o=i.find((function(n){return n.viewId===e&&n.variantId===t}))),o||(e&&(o=z(e,n,i)),o||(r&&a&&(o=i.find((function(e){return e.viewId===r&&e.variantId===a}))),o||(r&&(o=z(r,n,i)),o||i[0])))}var B=Object(l.f)([]),U=Object(l.f)("laptop"),_=Object(l.e)();U.on(_,(function(e,t){return t}));var Q=Object(l.e)();B.on(Q,(function(e,t){var n=t.viewRegisterData,i=t.module;if(n){var r=Object(T.a)(e);return n.forEach((function(e){var t=r.findIndex((function(t){return t.viewId===e.viewId&&t.variantId===e.variantId}));-1!==t?r[t]=Object(d.a)(Object(d.a)({},e),{},{moduleId:[].concat(Object(T.a)(r[t].moduleId),[i.moduleId])}):r.push(Object(d.a)(Object(d.a)({},e),{},{moduleId:[i.moduleId]}))})),r}}));var K={store:{views:B,deviceType:U},event:{add:Q,setDeviceType:_}},J=Object(l.f)(null),H=Object(l.f)(!1),G=Object(l.e)();H.on(G,(function(e){return!e}));var q=Object(l.e)();H.on(q,(function(e,t){return t}));var Y=Object(l.c)([J,D.store.currentRoute]).map((function(e){var t=Object(A.a)(e,2),n=t[0],i=t[1];if(i.params.menu&&n)return R(i.params.menu,n)}));Y.watch((function(e){document.title=e&&(e.documentTitle||e.menuId)||"todo default title app name"}));var $=Object(l.e)();J.on($,(function(e,t){var n=t.appMenu,i=t.module;if(n){var r=F(null===e||void 0===e?void 0:e.menuItems,n.menuItems,i.moduleId);return Object(d.a)(Object(d.a)(Object(d.a)({},e),n),{},{menuItems:r})}}));var X=Object(l.e)();J.on(X,(function(e,t){return t}));var Z={store:{menu:J,currentMenuItem:Y,collapsed:H,currentLayoutPage:Object(l.c)([D.store.currentRoute,K.store.deviceType,K.store.views,J]).map((function(e){var t,n,i,r,a,o,c=Object(A.a)(e,4),s=c[0],u=c[1],d=c[2],l=c[3];if(s.params.pageViewId){var p=W(s.params.pageViewId,s.params.pageViewVariantId,u,d,null===l||void 0===l?void 0:l.defaultPageViewId,null===l||void 0===l?void 0:l.defaultPageViewVariantId);return{layout:W(s.params.layoutId||(null===l||void 0===l?void 0:l.defaultLayoutId),s.params.layoutVariantId||(null===l||void 0===l?void 0:l.defaultLayoutVariantId),u,d,null===l||void 0===l?void 0:l.defaultLayoutId,null===l||void 0===l?void 0:l.defaultLayoutVariantId),page:p}}return s.params.menu&&l&&(a=R(s.params.menu,l)),o=W(null===(t=a)||void 0===t?void 0:t.pageViewId,null===(n=a)||void 0===n?void 0:n.pageViewVariantId,u,d,null===l||void 0===l?void 0:l.defaultPageViewId,null===l||void 0===l?void 0:l.defaultPageViewVariantId),{layout:W(null===(i=a)||void 0===i?void 0:i.layoutId,null===(r=a)||void 0===r?void 0:r.layoutVariantId,u,d,null===l||void 0===l?void 0:l.defaultLayoutId,null===l||void 0===l?void 0:l.defaultLayoutVariantId),page:o}}))},event:{add:$,set:X,collapseToggle:G,setCollapse:q}},ee=n(18),te=n(139),ne=Object(l.f)([]),ie=Object(l.f)([]),re=Object(l.f)([]),ae=Object(l.e)();ne.on(ae,(function(e,t){if(t){var n=Object(T.a)(e);return t.forEach((function(e){var t=n.findIndex((function(t){return t.authorityId===e.authorityId}));-1!==t?n[t]=e:n.push(e)})),n}}));var oe=Object(l.e)();ie.on(ae,(function(e,t){var n=Object(T.a)(e);if(t)return t.forEach((function(e){var t=n.findIndex((function(t){return t.authorityId===e.authorityId}));-1!==t?n[t]=e:n.push(e)})),n}));var ce=Object(l.e)();re.on(ce,(function(e,t){var n=Object(T.a)(e);return t.forEach((function(e){var t=n.findIndex((function(t){return t.authorityId===e.authorityId}));-1!==t?n[t]=e:n.push(e)})),n}));var se={store:{authorities:ne,currentAuthorities:ie,debugAuthorities:re},event:{addAuthorities:ae,addCurrentAuthorities:oe,addDebugAuthorities:ce}},ue=Object(l.f)({}),de=Object(l.e)();ue.on(de,(function(e,t){if(t)return Object.assign({},e,t)}));var le={store:{locales:ue},event:{add:de}},pe=Object(l.f)([]),ve=Object(l.e)();pe.on(ve,(function(e,t){return[].concat(Object(T.a)(e),[t])}));var fe={store:{modules:pe},event:{add:ve}},me=Object(l.f)([]),je=Object(l.e)();me.on(je,(function(e,t){return[].concat(Object(T.a)(e),Object(T.a)(t))}));var be=Object(l.e)();me.on(be,(function(e){return e.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{timeResultQuickTest:void 0,resultQuickTest:void 0,timeRemoteServiceInfo:void 0,remoteServiceInfo:void 0})}))}));var ge=Object(l.e)();me.on(ge,(function(e,t){var n=t.module,i=t.services;if(i){var r=null===i||void 0===i?void 0:i.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{modulesId:n.moduleId})}));return[].concat(Object(T.a)(e),Object(T.a)(r))}}));var Oe=Object(l.d)(function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.runQuickTest){e.next=2;break}throw new Error("service.runQuickTest is undefined");case 2:return e.next=4,t.runQuickTest();case 4:return n=e.sent,e.abrupt("return",{serviceId:t.serviceId,resultQuickTest:n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());me.on(Oe.doneData,(function(e,t){var n=Object(T.a)(e),i=n.findIndex((function(e){return e.serviceId===t.serviceId}));if(-1!==i)return n[i]=Object(d.a)(Object(d.a)({},n[i]),{},{timeResultQuickTest:(new Date).toISOString(),resultQuickTest:t.resultQuickTest}),n}));var he=Object(l.d)(function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.getRemoteServiceInfo){e.next=2;break}throw new Error("service.getRemoteServiceInfo is undefined");case 2:return e.next=4,t.getRemoteServiceInfo();case 4:return n=e.sent,e.abrupt("return",{serviceId:t.serviceId,remoteServiceInfo:n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());me.on(he.doneData,(function(e,t){var n=Object(T.a)(e),i=n.findIndex((function(e){return e.serviceId===t.serviceId}));if(-1!==i)return n[i]=Object(d.a)(Object(d.a)({},n[i]),{},{timeRemoteServiceInfo:(new Date).toISOString(),remoteServiceInfo:t.remoteServiceInfo}),n}));var we=Object(l.d)(function(){var e=Object(u.a)(s.a.mark((function e(t){var n,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return Oe(e)})),i=t.map((function(e){return he(e)})),e.next=4,Promise.all(n);case 4:return e.next=6,Promise.all(i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Ie=Object(l.a)({effect:we,source:me,mapParams:function(e,t){return t}});Object(l.g)({from:Ie,to:be});var xe={store:{services:me},event:{add:je,initModule:ge},effects:{runAllQuickTestFx:we,updateServicesInfoFx:Ie}};function ye(e){var t,n;if(!fe.store.modules.getState().find((function(t){return t.moduleId===e.module.moduleId}))){fe.event.add(e.module);var i=null===e||void 0===e||null===(t=e.menu)||void 0===t?void 0:t.filter((function(t){return t.moduleId===e.module.moduleId}))[0];i||(i=null===e||void 0===e||null===(n=e.menu)||void 0===n?void 0:n.filter((function(e){return void 0===e.moduleId}))[0]),Z.event.add({appMenu:i,module:e.module}),K.event.add({viewRegisterData:e.views,module:e.module}),se.event.addAuthorities(e.authorities),le.event.add(e.locales),xe.event.initModule(e)}}var Se=n(5);var ke={viewType:"page",viewId:"DemoPageView",view:function(){return Object(Se.jsx)("div",{children:"DemoPageViewFromDemoApp"})}},Ve=n(140),Le=Array.from(Array(32),(function(e,t){return Object(Ve.loremIpsum)({units:"paragraph"})}));var Me=[ke,{viewType:"page",viewId:"LoremIpsum",view:function(){return Object(Se.jsxs)("div",{children:[Object(Se.jsx)("h1",{children:"Lorem Ipsum"}),Le.map((function(e){return Object(Se.jsx)("div",{style:{padding:"8px 0px 8px 0px"},children:e})}))]})}}],De=n(261),Ae=[{defaultMenuId:"DemoPageView",defaultLayoutId:"SideMenuLayout",menuItems:[{menuId:"DemoPageView",icon:Object(Se.jsx)(De.a,{}),pageViewId:"DemoPageView"},{menuId:"LoremIpsum",pageViewId:"LoremIpsum"}]}],Te={ru:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}},en:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}}};function Re(e){return new Promise((function(t){setTimeout(t,e)}))}var Pe=[{originUrl:"mock",serviceId:"demoService",description:"mock service for demo",servicePageViewId:"DemoServiceTestPageView",runQuickTest:function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Re(1e3);case 2:return e.abrupt("return",{status:"work"});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getRemoteServiceInfo:function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{name:"demoMockService",version:"1.0.0",buildDate:(new Date).toISOString(),restartDate:(new Date).toISOString(),description:"description from mock service"});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}];ye({module:{moduleId:"demoApp",description:"Simplest demo App with one demo page.",manifest:n(141)},views:Me,menu:Ae,authorities:[{authorityId:"debug1",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"},{authorityId:"debug2",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"}],locales:Te,services:Pe});n(119),n(176);var Ce=n(255),Fe=n(22),Ne=n(262),ze=n(263),Ee=n(64);function We(){return{width:window.innerWidth,height:window.innerHeight}}window.addEventListener("resize",(function(){Ue(We())}));var Be=Object(l.f)(We()),Ue=Object(l.e)();Be.on(Ue,(function(e,t){return t}));var _e=Be.map((function(e){return{orientation:e.height<e.width?"landscape":"portrait",type:e.height>=992?"laptop":e.height>=768?"tablet":e.height>=480?"phone":"watch"}})),Qe=Be.map((function(e){return e.width<=768})),Ke={store:{screenSize:Be,screen:_e,hoveredMenu:Qe},event:{setSize:Ue}},Je=function e(t){var n=t.item;return"menuItems"in n?Object(Se.jsx)(Ee.a.SubMenu,{icon:n.icon,title:n.title||n.menuId,children:n.menuItems.map((function(t){return e({item:t})}))},n.menuId):Object(Se.jsx)(Ee.a.Item,{icon:n.icon,title:n.title||n.menuId,children:n.content||n.menuId},n.menuId)};function He(e){var t,n=Object(ee.a)(Z.store.menu),i=Object(ee.a)(Z.store.currentMenuItem),r=Object(ee.a)(Ke.store.hoveredMenu);return Object(Se.jsx)(Ee.a,Object(d.a)(Object(d.a)({onClick:function(e){r&&Z.event.setCollapse(!0),D.event.setCurrentRouteByMenuId(e.key.toString())},style:{userSelect:"none"}},e),{},{selectedKeys:[(null===i||void 0===i?void 0:i.menuId)||""],children:null===n||void 0===n||null===(t=n.menuItems)||void 0===t?void 0:t.map((function(e){return Je({item:e})}))}))}var Ge=Ce.a.Header,qe=Ce.a.Sider,Ye=Ce.a.Content,$e={viewType:"layout",viewId:"AntLayout",view:function(e){var t=Object(ee.a)(Z.store.collapsed);return Object(Se.jsx)(Fe.a,{locale:{locale:"en"},children:Object(Se.jsxs)(Ce.a,{children:[Object(Se.jsxs)(qe,{trigger:null,collapsible:!0,collapsed:t,children:[Object(Se.jsx)("div",{className:"logo"}),Object(Se.jsx)(He,{theme:"dark",mode:"inline"})]}),Object(Se.jsxs)(Ce.a,{className:"site-layout",children:[Object(Se.jsx)(Ge,{className:"site-layout-background",style:{padding:0},children:r.a.createElement(t?Ne.a:ze.a,{className:"trigger",onClick:function(){return Z.event.collapseToggle()}})}),Object(Se.jsx)(Ye,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:280},children:e.children})]})]})})}},Xe={viewType:"layout",viewId:"AntEmptyConfigProviderLayout",view:function(e){return Object(Se.jsx)(Fe.a,{locale:{locale:"en"},children:e.children})}},Ze=n(259);function et(){var e=Object(ee.a)(Z.store.collapsed),t=Object(ee.a)(Ke.store.hoveredMenu);return Object(Se.jsx)(Ze.a,{placement:"left",mask:t,closable:!1,onClose:function(){return Z.event.setCollapse(!0)},visible:!e,getContainer:!1,bodyStyle:{padding:"8px 0px 0px 0px",backgroundColor:"#001529"},width:"256px",children:Object(Se.jsx)(He,{theme:"dark",mode:"inline"})})}function tt(){var e=Object(ee.a)(Z.store.collapsed),t=Object(ee.a)(Ke.store.hoveredMenu),n=Object(i.useState)(!0),a=Object(A.a)(n,2),o=a[0],c=a[1];return Object(i.useEffect)((function(){var e=!1,t=0,n=function(){var n=document.body.scrollTop+document.documentElement.scrollTop;e||(e=!0,requestAnimationFrame((function(){t>n?c(!0):n>300&&o?c(!1):n<300&&!o&&c(!0),t=n,e=!1})))};return document.addEventListener("scroll",n,{passive:!0}),function(){document.removeEventListener("scroll",n)}}),[]),o?Object(Se.jsx)(Ce.a.Header,{className:"site-layout-background",style:{padding:0,paddingLeft:e||t?"0px":"256px",background:"#fff",position:"fixed",top:"0",right:"0",width:"100%",zIndex:9,transition:"width 0.2s"},children:r.a.createElement(e?Ne.a:ze.a,{className:"trigger",onClick:function(){return Z.event.collapseToggle()}})}):null}var nt=function(e){var t=Object(ee.a)(Z.store.collapsed),n=Object(ee.a)(Ke.store.hoveredMenu);return Object(Se.jsx)("div",{style:{paddingLeft:t||n?"0px":"256px",paddingTop:"56px"},children:Object(Se.jsx)("div",{style:{padding:"16px"},children:e.children})})},it=(n(178),{viewType:"layout",viewId:"SideMenuLayout",view:function(e){return Object(Se.jsxs)(Fe.a,{locale:{locale:"en"},children:[Object(Se.jsx)(et,{}),Object(Se.jsx)(tt,{}),Object(Se.jsx)(nt,{children:e.children})]})}}),rt=n(144),at=n.n(rt);var ot={viewType:"page",viewId:"DemoPageView",view:function(){return document.body.style.setProperty("--color-test","green"),Object(Se.jsx)("div",{className:at.a.test4655,children:"DemoPageView456"})}},ct=n(50),st=n(265),ut=n(61),dt=n(264),lt=n(266),pt=n(267);var vt={viewType:"page",viewId:"AboutPageView",view:function(){var e,t,n,r,a,o,c=Object(ee.a)(O.store.buildInfo),d=Object(ee.a)(O.store.preBuildInfo),l=Object(ee.a)(O.store.serviceWorkerStatus),p=Object(ee.a)(O.effect.readFromServer.pending),v=Object(i.useState)(!0),f=Object(A.a)(v,2),m=f[0],j=f[1],b=Object(i.useState)(!0),g=Object(A.a)(b,2),h=g[0],I=g[1],x=function(){var e=Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!1),e.next=3,navigator.serviceWorker.getRegistration();case 3:null===(n=e.sent)||void 0===n||null===(t=n.waiting)||void 0===t||t.postMessage({type:"SKIP_WAITING"}),j(!1),window.location.reload();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){O.effect.readFromServer("")}),[]),Object(Se.jsx)("div",{style:{maxWidth:"50em",textAlign:"center"},children:Object(Se.jsxs)("div",{style:{display:"inline-block",maxWidth:"30em",textAlign:"center",width:"100%"},children:["packageVersion: ",Object(Se.jsx)("b",{children:null===d||void 0===d?void 0:d.packageVersion}),Object(Se.jsx)("br",{}),"buildDate: ",Object(Se.jsx)("b",{children:null===d||void 0===d?void 0:d.buildDate.slice(0,19)}),Object(Se.jsx)("br",{}),Object(Se.jsx)("br",{}),Object(Se.jsx)(ct.a,{size:"large",icon:p?Object(Se.jsx)(ut.a,{}):Object(Se.jsx)(dt.a,{}),style:{width:"100%"},type:"link",onClick:O.effect.readFromServer,children:"Check new version"}),Object(Se.jsx)("br",{}),c&&(null===c||void 0===c?void 0:c.buildDate)!==(null===d||void 0===d?void 0:d.buildDate)?Object(Se.jsx)(st.a,{message:"New version available",description:Object(Se.jsxs)(Se.Fragment,{children:["packageVersion: ",Object(Se.jsx)("b",{children:null===c||void 0===c?void 0:c.packageVersion.slice(0,19)}),Object(Se.jsx)("br",{}),"buildDate: ",Object(Se.jsx)("b",{children:null===c||void 0===c?void 0:c.buildDate.slice(0,19)}),Object(Se.jsx)("br",{}),"files number: ",Object(Se.jsx)("b",{children:null===c||void 0===c||null===(e=c.totalFiles)||void 0===e?void 0:e.num}),Object(Se.jsx)("br",{}),"files size:",Object(Se.jsx)("b",{children:(o=(null===c||void 0===c||null===(t=c.totalFiles)||void 0===t?void 0:t.size)||0,o>=1073741824?(o/1073741824).toFixed(2)+" GB":o>=1048576?(o/1048576).toFixed(2)+" MB":o>=1024?(o/1024).toFixed(2)+" KB":o>1?o+" bytes":1==o?o+" byte":"0 bytes")}),Object(Se.jsx)("br",{})]}),type:"warning"}):Object(Se.jsx)(st.a,{message:"You use last available version",type:"success",showIcon:!0}),c&&!m&&(null===c||void 0===c?void 0:c.buildDate)!==(null===d||void 0===d?void 0:d.buildDate)&&!(null===(n=l.registrationStatus)||void 0===n?void 0:n.waiting)&&Object(Se.jsxs)(Se.Fragment,{children:[Object(Se.jsx)("br",{}),Object(Se.jsx)(ct.a,{size:"large",icon:(null===(r=l.registrationStatus)||void 0===r?void 0:r.installing)?Object(Se.jsx)(ut.a,{}):Object(Se.jsx)(lt.a,{}),disabled:!h,style:{width:"100%"},type:"primary",onClick:y,children:"Download"})]}),(null===(a=l.registrationStatus)||void 0===a?void 0:a.waiting)&&Object(Se.jsxs)(Se.Fragment,{children:[Object(Se.jsx)("br",{}),Object(Se.jsx)(ct.a,{size:"large",style:{width:"100%"},type:"primary",onClick:x,children:"Update"})]}),Object(Se.jsx)("br",{}),Object(Se.jsx)("br",{}),Object(Se.jsx)(ct.a,{disabled:!m,icon:Object(Se.jsx)(pt.a,{}),style:{width:"100%"},type:"default",onClick:function(){j(!1),window.location.reload()},size:"large",children:"Reload"})]})})}},ft=n(104),mt=n(268),jt=n(260);var bt=[$e,Xe,it,ot,vt,{viewType:"page",viewId:"AntdDemoPage",view:function(){var e="middle";return Object(Se.jsxs)("div",{children:[Object(Se.jsxs)(Se.Fragment,{children:[Object(Se.jsxs)(ft.a.Group,{value:e,onChange:function(){},children:[Object(Se.jsx)(ft.a.Button,{value:"large",children:"Large"}),Object(Se.jsx)(ft.a.Button,{value:"default",children:"Default"}),Object(Se.jsx)(ft.a.Button,{value:"small",children:"Small"})]}),Object(Se.jsx)("br",{}),Object(Se.jsx)("br",{}),Object(Se.jsx)(ct.a,{type:"primary",size:e,children:"Primary"}),Object(Se.jsx)(ct.a,{size:e,children:"Default"}),Object(Se.jsx)(ct.a,{type:"dashed",size:e,children:"Dashed"}),Object(Se.jsx)("br",{}),Object(Se.jsx)(ct.a,{type:"link",size:e,children:"Link"}),Object(Se.jsx)("br",{}),Object(Se.jsxs)(mt.b,{children:[Object(Se.jsx)(ct.a,{type:"primary",icon:Object(Se.jsx)(lt.a,{}),size:e}),Object(Se.jsx)(ct.a,{type:"primary",shape:"circle",icon:Object(Se.jsx)(lt.a,{}),size:e}),Object(Se.jsx)(ct.a,{type:"primary",shape:"round",icon:Object(Se.jsx)(lt.a,{}),size:e}),Object(Se.jsx)(ct.a,{type:"primary",shape:"round",icon:Object(Se.jsx)(lt.a,{}),size:e,children:"Download"}),Object(Se.jsx)(ct.a,{type:"primary",icon:Object(Se.jsx)(lt.a,{}),size:e,children:"Download"})]}),Object(Se.jsx)("br",{}),Object(Se.jsx)("br",{}),Object(Se.jsxs)(mt.b,{children:[Object(Se.jsx)(ct.a,{type:"primary",danger:!0,children:"Primary"}),Object(Se.jsx)(ct.a,{danger:!0,children:"Default"}),Object(Se.jsx)(ct.a,{type:"dashed",danger:!0,children:"Dashed"}),Object(Se.jsx)(ct.a,{type:"text",danger:!0,children:"Text"}),Object(Se.jsx)(ct.a,{type:"link",danger:!0,children:"Link"})]})]}),Object(Se.jsx)(jt.a,{gutter:[16,16],children:Object(Se.jsxs)(mt.b,{children:[Object(Se.jsx)(st.a,{message:"Success Tips",type:"success",showIcon:!0}),Object(Se.jsx)(st.a,{message:"Informational Notes",type:"info",showIcon:!0}),Object(Se.jsx)(st.a,{message:"Warning",type:"warning",showIcon:!0,closable:!0}),Object(Se.jsx)(st.a,{message:"Error",type:"error",showIcon:!0}),Object(Se.jsx)(st.a,{message:"Success Tips",description:"Detailed description and advice about successful copywriting.",type:"success",showIcon:!0}),Object(Se.jsx)(st.a,{message:"Informational Notes",description:"Additional description and information about copywriting.",type:"info",showIcon:!0}),Object(Se.jsx)(st.a,{message:"Warning",description:"This is a warning notice about copywriting.",type:"warning",showIcon:!0,closable:!0}),Object(Se.jsx)(st.a,{message:"Error",description:"This is an error message about copywriting.",type:"error",showIcon:!0})]})})]})}}],gt={ru:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}},en:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}}};ye({module:{moduleId:"defaultAntd",description:"Use for provide base layouts from Ant Design. with some demo page",manifest:n(145)},views:bt,menu:[{defaultMenuId:"DemoPageView",defaultLayoutId:"SideMenuLayout",menuItems:[{menuId:"defaultAntd",menuItems:[{menuId:"defaultAntd.Pages",menuItems:[{menuId:"defaultAntd.Layouts.DemoPageView",pageViewId:"DemoPageView"},{menuId:"defaultAntd.Layouts.AntdDemoPage",pageViewId:"AntdDemoPage"},{menuId:"defaultAntd.Layouts.AboutPageView",pageViewId:"AboutPageView"}]}]},{menuId:"DemoPageView",pageViewId:"DemoPageView"},{menuId:"AboutPageView",pageViewId:"AboutPageView"}]}],authorities:[{authorityId:"debug1",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"},{authorityId:"debug2",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"}],locales:gt});var Ot=n(82),ht=n(157),wt=n(258),It=n(256),xt=(n(257),0);var yt=n(56),St=n(114),kt=["templateRecord","dataSource","columns","pagination"],Vt=function(e){var t=e.templateRecord,n=e.dataSource,r=e.columns,a=e.pagination,o=Object(ht.a)(e,kt),c=Object(i.useState)(""),s=Object(A.a)(c,2),u=s[0],l=s[1];if(!(null===n||void 0===n?void 0:n.length))return null;var p=n.map((function(e){var t=Object.entries(e).reduce((function(e,t){var n=Object(A.a)(t,2),i=n[0],r=n[1],a=JSON.stringify(r,null," ");return e[i]=null===a||void 0===a?void 0:a.substr(1,a.length-2),e}),{});return t.key||(t.key=function(){var e=Date.now();xt=e>(xt=xt||e)?e:xt+1;var t="000"+Math.trunc(999*Math.random());return xt.toString()+t.substr(t.length-3)}()),t})),v=t||p[0],f=r||Object.keys(v).map((function(e){return{title:e,dataIndex:e}})),m=u.trim().split(" ").map((function(e){return e.trim()})),j=p.filter((function(e){var t,n=f.reduce((function(t,n){return t+" "+e[n.dataIndex]}),"").toLowerCase(),i=Object(Ot.a)(m);try{for(i.s();!(t=i.n()).done;){var r=t.value;if(!n.includes(r.toLowerCase()))return!1}}catch(a){i.e(a)}finally{i.f()}return!0}));return Object(Se.jsxs)(Se.Fragment,{children:[Object(Se.jsx)(wt.a,{prefix:u?Object(Se.jsx)(yt.a,{onClick:function(){return l("")}}):Object(Se.jsx)(St.a,{}),placeholder:"Input words for search",value:u,onChange:function(e){return l(e.target.value)},style:{maxWidth:"50em"}}),"\xa0\xa0","length: "+j.length,Object(Se.jsx)("br",{}),Object(Se.jsx)("br",{}),Object(Se.jsx)(It.a,Object(d.a)({size:"small",dataSource:j,columns:f,pagination:a||!1},o))]})};var Lt={viewType:"page",viewId:"AuthoritiesList",view:function(){var e=Object(ee.a)(se.store.authorities);return Object(Se.jsx)("div",{children:Object(Se.jsx)(Vt,{dataSource:e,templateRecord:{authorityId:"",descriptionForUser:"",descriptionForAdmin:""}})})}};var Mt={viewType:"page",viewId:"MenuList",view:function(){var e=Object(ee.a)(Z.store.menu),t=N(null===e||void 0===e?void 0:e.menuItems,"");return Object(Se.jsx)("div",{children:Object(Se.jsx)(Vt,{dataSource:t,templateRecord:{modulesId:[],parentMenuId:"",menuId:"",authority:[],pageViewId:"",pageViewVariantId:"",layoutId:"",layoutVariantId:"",content:"",title:"",documentTitle:""},onRow:function(e,t){return{onDoubleClick:function(t){D.event.setCurrentRoute({params:{menu:e.menuId}})}}}})})}};var Dt={viewType:"page",viewId:"ModulesList",view:function(){var e=Object(ee.a)(fe.store.modules);return Object(Se.jsx)("div",{children:Object(Se.jsx)(Vt,{dataSource:e,templateRecord:{moduleId:"",description:""}})})}};var At={viewType:"page",viewId:"ViewList",view:function(){var e=Object(ee.a)(K.store.views);return Object(Se.jsx)("div",{children:Object(Se.jsx)(Vt,{dataSource:e,templateRecord:{moduleId:[],viewType:"over",viewId:"",variantId:"",authorities:[],priority:{laptop:0,phone:0,tablet:0,watch:0}},onRow:function(e,t){return{onDoubleClick:function(t){D.event.setCurrentRoute({params:{pageViewId:e.viewId,pageViewVariantId:e.variantId}})}}}})})}},Tt=n(269);function Rt(e){var t=[];return Object.entries(e).forEach((function(e){var n=Object(A.a)(e,2),i=n[0],r=n[1];Object.entries(r).forEach((function(e){var n=Object(A.a)(e,2),r=n[0],a=n[1];Object.entries(a).forEach((function(e){var n=Object(A.a)(e,2),a=n[0],o=n[1];t.push({localeId:i,nameSpace:r,stringKey:a,stringValue:o})}))}))})),t}var Pt=[Lt,Mt,Dt,At,{viewType:"page",viewId:"ServicesList",view:function(){var e=Object(ee.a)(xe.store.services),t=Object(ee.a)(xe.effects.updateServicesInfoFx.pending);Object(i.useEffect)((function(){xe.effects.updateServicesInfoFx(void 0)}),[]);var n={modulesId:"",serviceId:"",originUrl:"",resultQuickTest:void 0,remoteServiceInfo:void 0,description:"",servicePageViewId:""};return Object(Se.jsxs)("div",{children:[Object(Se.jsx)(ct.a,{type:"primary",icon:t?Object(Se.jsx)(ut.a,{}):Object(Se.jsx)(Tt.a,{}),disabled:t,onClick:function(){return xe.effects.updateServicesInfoFx(void 0)},children:"Update"}),Object(Se.jsx)("br",{}),Object(Se.jsx)("br",{}),Object(Se.jsx)(Vt,{dataSource:e,templateRecord:n,onRow:function(e,t){return{onDoubleClick:function(t){D.event.setCurrentRoute({params:{pageViewId:e.servicePageViewId}})}}}})]})}},{viewType:"page",viewId:"LocalesList",view:function(){var e=Rt(Object(ee.a)(le.store.locales));return Object(Se.jsx)("div",{children:Object(Se.jsx)(Vt,{dataSource:e,templateRecord:{localeId:"",nameSpace:"",stringKey:"",stringValue:""}})})}},{viewType:"page",viewId:"SettingsList",view:function(){var e=Rt(Object(ee.a)(le.store.locales));return Object(Se.jsx)("div",{children:Object(Se.jsx)(Vt,{dataSource:e,templateRecord:{localeId:"",nameSpace:"",stringKey:"",stringValue:""}})})}},{viewType:"page",viewId:"ThemeSettingsList",view:function(){var e=Rt(Object(ee.a)(le.store.locales));return Object(Se.jsx)("div",{children:Object(Se.jsx)(Vt,{dataSource:e,templateRecord:{localeId:"",nameSpace:"",stringKey:"",stringValue:""}})})}},{viewType:"page",viewId:"NotificationsList",view:function(){var e=Rt(Object(ee.a)(le.store.locales));return Object(Se.jsx)("div",{children:Object(Se.jsx)(Vt,{dataSource:e,templateRecord:{localeId:"",nameSpace:"",stringKey:"",stringValue:""}})})}}],Ct={ru:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}},en:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}}};ye({module:{moduleId:"debug",description:"Use for debug page, with register module with register data",manifest:n(150)},views:Pt,menu:[{defaultLayoutId:"SideMenuLayout",menuItems:[{menuId:"debug",menuItems:[{menuId:"ModulesList",content:"Modules",pageViewId:"ModulesList"},{menuId:"ViewList",content:"Views",pageViewId:"ViewList"},{menuId:"ServicesList",content:"Services",pageViewId:"ServicesList"},{menuId:"AuthoritiesList",content:"Authorities",pageViewId:"AuthoritiesList"},{menuId:"MenuList",content:"Menu",pageViewId:"MenuList"},{menuId:"LocalesList",content:"Locales",pageViewId:"LocalesList"},{menuId:"SettingsList",content:"Settings",pageViewId:"SettingsList"},{menuId:"ThemeSettingsList",content:"ThemeSettings",pageViewId:"ThemeSettingsList"},{menuId:"NotificationsList",content:"Notifications",pageViewId:"NotificationsList"}]}]}],authorities:[{authorityId:"debug1",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"},{authorityId:"debug2",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"}],locales:Ct}),O.event.setPreBuildInfo(te),D.event.updateCurrentRoute();var Ft=function(){var e=Object(ee.a)(Z.store.currentLayoutPage),t=e.layout,n=e.page,i=(null===n||void 0===n?void 0:n.view)||function(){return Object(Se.jsx)("div",{children:"error 404"})},r=null===t||void 0===t?void 0:t.view;return r?Object(Se.jsx)(r,{children:Object(Se.jsx)(i,{})}):Object(Se.jsx)(i,{})};o.a.render(Object(Se.jsx)(r.a.StrictMode,{children:Object(Se.jsx)(Ft,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");h?(y(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):I(t,e)}))}}(),S(console.log)}},[[251,1,2]]]);