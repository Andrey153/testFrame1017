(this["webpackJsonp@frame1059/demo-app"]=this["webpackJsonp@frame1059/demo-app"]||[]).push([[0],{119:function(e,t,n){},139:function(e){e.exports=JSON.parse('{"packageVersion":"1.0.0","buildDate":"2021-08-06 16:00:10 +03","buildKey":9868,"buildsId":{"deviceId":4166,"devFolderName":"dev-4166","developerName":"Andrey Vyalkov"}}')},141:function(e){e.exports=JSON.parse('{"short_name":"Demo App","name":"Demo App Sample","icons":[{"src":"favicon.ico","sizes":"64x64 32x32 24x24 16x16","type":"image/x-icon"},{"src":"logo192.png","type":"image/png","sizes":"192x192"},{"src":"logo512.png","type":"image/png","sizes":"512x512"}],"start_url":".","display":"standalone","theme_color":"#000000","background_color":"#ffffff"}')},144:function(e,t,n){e.exports={test4655:"demo_test4655__1nmsv"}},147:function(e){e.exports=JSON.parse('{"short_name":"React App","name":"Create React App Sample","icons":[{"src":"favicon.ico","sizes":"64x64 32x32 24x24 16x16","type":"image/x-icon"},{"src":"logo192.png","type":"image/png","sizes":"192x192"},{"src":"logo512.png","type":"image/png","sizes":"512x512"}],"start_url":".","display":"standalone","theme_color":"#000000","background_color":"#ffffff"}')},151:function(e){e.exports=JSON.parse('{"short_name":"React App","name":"Create React App Sample","icons":[{"src":"favicon.ico","sizes":"64x64 32x32 24x24 16x16","type":"image/x-icon"},{"src":"logo192.png","type":"image/png","sizes":"192x192"},{"src":"logo512.png","type":"image/png","sizes":"512x512"}],"start_url":".","display":"standalone","theme_color":"#000000","background_color":"#ffffff"}')},164:function(e,t,n){},177:function(e,t,n){},179:function(e,t,n){},252:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(33),o=n.n(r),c=(n(164),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function s(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,269)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),r(e),o(e)}))},d=n(17),l=n(9),p=Object(l.f)({appId:"",version:"",params:{}}),m=Object(l.e)();p.on(m,(function(e){var t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries()),i=window.location.pathname.split("/");return i.length<1?{appId:"",version:"",params:{}}:{appId:i[0],version:i[1],params:n}})),window.addEventListener("popstate",(function(){m()}));var f=Object(l.e)();f.watch((function(e){var t=Object.keys(e.params).filter((function(t){return!!e.params[t]})).map((function(t){return"".concat(t,"=").concat(encodeURIComponent(e.params[t]||""))})).join("&");window.history.pushState(null,"","?"+t),e.params.pageViewId&&(document.title=e.params.pageViewId)})),p.on(f,(function(e,t){return Object(d.a)(Object(d.a)({},e),t)}));var v=Object(l.e)();v.watch((function(e){window.history.pushState(null,"","?menu="+e)})),p.on(v,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{params:{menu:t}})}));var j={store:{currentRoute:p},event:{updateCurrentRoute:m,setCurrentRoute:f,setCurrentRouteByMenuId:v}},b=n(26),g=n(21);function I(e,t){return O(e,t.menuItems,t.defaultLayoutId,t.defaultLayoutVariantId)}function O(e,t){var n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return t.find((function(t){if("menuItems"in t){if(n=O(e,t.menuItems,t.layoutId||i,t.layoutId?t.layoutVariantId||"":a))return!0}else if(t.menuId===e)return n=Object(d.a)(Object(d.a)({},t),{},{layoutId:t.layoutId||i,layoutVariantId:t.layoutId?t.layoutVariantId||"":a}),!0;return!1})),n}function h(e,t){return e.map((function(e){return"menuItems"in e?Object(d.a)(Object(d.a)({},e),{},{menuItems:h(e.menuItems,t),modulesId:[t]}):Object(d.a)(Object(d.a)({},e),{},{modulesId:[t]})}))}function w(e,t,n){var i=h(t,n);if(!e)return i;var a=Object(g.a)(e);return i.forEach((function(e){var t=a.findIndex((function(t){return t.menuId===e.menuId}));if(-1===t)a.push(e);else{var r=i[t];"menuItems"in e&&"menuItems"in r?w(r.menuItems,e.menuItems,n):a[t]=Object(d.a)(Object(d.a)({},e),{},{modulesId:[].concat(Object(g.a)(a[t].modulesId),Object(g.a)(e.modulesId))})}})),a}function y(e,t){var n=[];return e?(e.forEach((function(e){if("menuItems"in e){n.push(Object(d.a)({parentMenuId:t},e));var i=y(e.menuItems,e.menuId);null===i||void 0===i||i.forEach((function(e){return n.push(e)}))}else n.push(Object(d.a)({parentMenuId:t},e))})),n):n}function x(e,t,n){return n.reduce((function(n,i){return i.viewId===e&&(!n||S(n,t)<=S(i,t))?i:n}),void 0)}function S(e,t){if(!e.priority)return 0;switch(t){case"laptop":return e.priority.laptop||0;case"tablet":return e.priority.tablet||0;case"phone":return e.priority.phone||0;case"watch":return e.priority.watch||0;default:return 0}}function k(e,t,n,i,a,r){var o;return e&&t&&(o=i.find((function(n){return n.viewId===e&&n.variantId===t}))),o||(e&&(o=x(e,n,i)),o||(a&&r&&(o=i.find((function(e){return e.viewId===a&&e.variantId===r}))),o||(a&&(o=x(a,n,i)),o||i[0])))}var V=Object(l.f)([]),L=Object(l.f)("laptop"),M=Object(l.e)();L.on(M,(function(e,t){return t}));var A=Object(l.e)();V.on(A,(function(e,t){var n=t.viewRegisterData,i=t.module;if(n){var a=Object(g.a)(e);return n.forEach((function(e){var t=a.findIndex((function(t){return t.viewId===e.viewId&&t.variantId===e.variantId}));-1!==t?a[t]=Object(d.a)(Object(d.a)({},e),{},{moduleId:[].concat(Object(g.a)(a[t].moduleId),[i.moduleId])}):a.push(Object(d.a)(Object(d.a)({},e),{},{moduleId:[i.moduleId]}))})),a}}));var T={store:{views:V,deviceType:L},event:{add:A,setDeviceType:M}},D=Object(l.f)(null),P=Object(l.f)(!1),R=Object(l.e)();P.on(R,(function(e){return!e}));var N=Object(l.e)();P.on(N,(function(e,t){return t}));var C=Object(l.c)([D,j.store.currentRoute]).map((function(e){var t=Object(b.a)(e,2),n=t[0],i=t[1];if(i.params.menu&&n)return I(i.params.menu,n)}));C.watch((function(e){document.title=e&&(e.documentTitle||e.menuId)||"todo default title app name"}));var F=Object(l.e)();D.on(F,(function(e,t){var n=t.appMenu,i=t.module;if(n){var a=w(null===e||void 0===e?void 0:e.menuItems,n.menuItems,i.moduleId);return Object(d.a)(Object(d.a)(Object(d.a)({},e),n),{},{menuItems:a})}}));var E=Object(l.e)();D.on(E,(function(e,t){return t}));var B={store:{menu:D,currentMenuItem:C,collapsed:P,currentLayoutPage:Object(l.c)([j.store.currentRoute,T.store.deviceType,T.store.views,D]).map((function(e){var t,n,i,a,r,o,c=Object(b.a)(e,4),s=c[0],u=c[1],d=c[2],l=c[3];if(s.params.pageViewId){var p=k(s.params.pageViewId,s.params.pageViewVariantId,u,d,null===l||void 0===l?void 0:l.defaultPageViewId,null===l||void 0===l?void 0:l.defaultPageViewVariantId);return{layout:k(s.params.layoutId||(null===l||void 0===l?void 0:l.defaultLayoutId),s.params.layoutVariantId||(null===l||void 0===l?void 0:l.defaultLayoutVariantId),u,d,null===l||void 0===l?void 0:l.defaultLayoutId,null===l||void 0===l?void 0:l.defaultLayoutVariantId),page:p}}return s.params.menu&&l&&(r=I(s.params.menu,l)),o=k(null===(t=r)||void 0===t?void 0:t.pageViewId,null===(n=r)||void 0===n?void 0:n.pageViewVariantId,u,d,null===l||void 0===l?void 0:l.defaultPageViewId,null===l||void 0===l?void 0:l.defaultPageViewVariantId),{layout:k(null===(i=r)||void 0===i?void 0:i.layoutId,null===(a=r)||void 0===a?void 0:a.layoutVariantId,u,d,null===l||void 0===l?void 0:l.defaultLayoutId,null===l||void 0===l?void 0:l.defaultLayoutVariantId),page:o}}))},event:{add:F,set:E,collapseToggle:R,setCollapse:N}},z=n(35),U=n.n(z),_=n(47),W=Object(l.f)(null),Q=Object(l.e)(),J=Object(l.j)(Q,null),K=Object(l.d)(Object(_.a)(U.a.mark((function e(){var t,n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="./buildInfo.json?p="+(new Date).getTime(),e.next=4,fetch(t);case 4:return n=e.sent,e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)}))));W.on(K.doneData,(function(e,t){return t}));var H={store:{buildInfo:W,preBuildInfo:J},event:{setPreBuildInfo:Q},effect:{readFromServer:K}},G=n(19),q=n(139),$=Object(l.f)([]),X=Object(l.f)([]),Y=Object(l.f)([]),Z=Object(l.e)();$.on(Z,(function(e,t){if(t){var n=Object(g.a)(e);return t.forEach((function(e){var t=n.findIndex((function(t){return t.authorityId===e.authorityId}));-1!==t?n[t]=e:n.push(e)})),n}}));var ee=Object(l.e)();X.on(Z,(function(e,t){var n=Object(g.a)(e);if(t)return t.forEach((function(e){var t=n.findIndex((function(t){return t.authorityId===e.authorityId}));-1!==t?n[t]=e:n.push(e)})),n}));var te=Object(l.e)();Y.on(te,(function(e,t){var n=Object(g.a)(e);return t.forEach((function(e){var t=n.findIndex((function(t){return t.authorityId===e.authorityId}));-1!==t?n[t]=e:n.push(e)})),n}));var ne={store:{authorities:$,currentAuthorities:X,debugAuthorities:Y},event:{addAuthorities:Z,addCurrentAuthorities:ee,addDebugAuthorities:te}},ie=Object(l.f)({}),ae=Object(l.e)();ie.on(ae,(function(e,t){if(t)return Object.assign({},e,t)}));var re={store:{locales:ie},event:{add:ae}},oe=Object(l.f)([]),ce=Object(l.e)();oe.on(ce,(function(e,t){return[].concat(Object(g.a)(e),[t])}));var se={store:{modules:oe},event:{add:ce}},ue=Object(l.f)([]),de=Object(l.e)();ue.on(de,(function(e,t){return[].concat(Object(g.a)(e),Object(g.a)(t))}));var le=Object(l.e)();ue.on(le,(function(e){return e.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{timeResultQuickTest:void 0,resultQuickTest:void 0,timeRemoteServiceInfo:void 0,remoteServiceInfo:void 0})}))}));var pe=Object(l.e)();ue.on(pe,(function(e,t){var n=t.module,i=t.services;if(i){var a=null===i||void 0===i?void 0:i.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{modulesId:n.moduleId})}));return[].concat(Object(g.a)(e),Object(g.a)(a))}}));var me=Object(l.d)(function(){var e=Object(_.a)(U.a.mark((function e(t){var n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.runQuickTest){e.next=2;break}throw new Error("service.runQuickTest is undefined");case 2:return e.next=4,t.runQuickTest();case 4:return n=e.sent,e.abrupt("return",{serviceId:t.serviceId,resultQuickTest:n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());ue.on(me.doneData,(function(e,t){var n=Object(g.a)(e),i=n.findIndex((function(e){return e.serviceId===t.serviceId}));if(-1!==i)return n[i]=Object(d.a)(Object(d.a)({},n[i]),{},{timeResultQuickTest:(new Date).toISOString(),resultQuickTest:t.resultQuickTest}),n}));var fe=Object(l.d)(function(){var e=Object(_.a)(U.a.mark((function e(t){var n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.getRemoteServiceInfo){e.next=2;break}throw new Error("service.getRemoteServiceInfo is undefined");case 2:return e.next=4,t.getRemoteServiceInfo();case 4:return n=e.sent,e.abrupt("return",{serviceId:t.serviceId,remoteServiceInfo:n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());ue.on(fe.doneData,(function(e,t){var n=Object(g.a)(e),i=n.findIndex((function(e){return e.serviceId===t.serviceId}));if(-1!==i)return n[i]=Object(d.a)(Object(d.a)({},n[i]),{},{timeRemoteServiceInfo:(new Date).toISOString(),remoteServiceInfo:t.remoteServiceInfo}),n}));var ve=Object(l.d)(function(){var e=Object(_.a)(U.a.mark((function e(t){var n,i;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return me(e)})),i=t.map((function(e){return fe(e)})),e.next=4,Promise.all(n);case 4:return e.next=6,Promise.all(i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),je=Object(l.a)({effect:ve,source:ue,mapParams:function(e,t){return t}});Object(l.g)({from:je,to:le});var be={store:{services:ue},event:{add:de,initModule:pe},effects:{runAllQuickTestFx:ve,updateServicesInfoFx:je}};function ge(e){var t,n;if(!se.store.modules.getState().find((function(t){return t.moduleId===e.module.moduleId}))){se.event.add(e.module);var i=null===e||void 0===e||null===(t=e.menu)||void 0===t?void 0:t.filter((function(t){return t.moduleId===e.module.moduleId}))[0];i||(i=null===e||void 0===e||null===(n=e.menu)||void 0===n?void 0:n.filter((function(e){return void 0===e.moduleId}))[0]),B.event.add({appMenu:i,module:e.module}),T.event.add({viewRegisterData:e.views,module:e.module}),ne.event.addAuthorities(e.authorities),re.event.add(e.locales),be.event.initModule(e)}}var Ie=n(6);var Oe={viewType:"page",viewId:"DemoPageView",view:function(){return Object(Ie.jsx)("div",{children:"DemoPageViewFromDemoApp"})}},he=n(140),we=Array.from(Array(32),(function(e,t){return Object(he.loremIpsum)({units:"paragraph"})}));var ye=[Oe,{viewType:"page",viewId:"LoremIpsum",view:function(){return Object(Ie.jsxs)("div",{children:[Object(Ie.jsx)("h1",{children:"Lorem Ipsum"}),we.map((function(e){return Object(Ie.jsx)("div",{style:{padding:"8px 0px 8px 0px"},children:e})}))]})}}],xe=n(262),Se=[{defaultMenuId:"DemoPageView",defaultLayoutId:"SideMenuLayout",menuItems:[{menuId:"DemoPageView",icon:Object(Ie.jsx)(xe.a,{}),pageViewId:"DemoPageView"},{menuId:"LoremIpsum",pageViewId:"LoremIpsum"}]}],ke={ru:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}},en:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}}};function Ve(e){return new Promise((function(t){setTimeout(t,e)}))}var Le=[{originUrl:"mock",serviceId:"demoService",description:"mock service for demo",servicePageViewId:"DemoServiceTestPageView",runQuickTest:function(){var e=Object(_.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ve(1e3);case 2:return e.abrupt("return",{status:"work"});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getRemoteServiceInfo:function(){var e=Object(_.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{name:"demoMockService",version:"1.0.0",buildDate:(new Date).toISOString(),restartDate:(new Date).toISOString(),description:"description from mock service"});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}];ge({module:{moduleId:"demoApp",description:"Simplest demo App with one demo page.",manifest:n(141)},views:ye,menu:Se,authorities:[{authorityId:"debug1",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"},{authorityId:"debug2",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"}],locales:ke,services:Le});n(119),n(177);var Me=n(256),Ae=n(22),Te=n(263),De=n(264),Pe=n(64);function Re(){return{width:window.innerWidth,height:window.innerHeight}}window.addEventListener("resize",(function(){Ce(Re())}));var Ne=Object(l.f)(Re()),Ce=Object(l.e)();Ne.on(Ce,(function(e,t){return t}));var Fe=Ne.map((function(e){return{orientation:e.height<e.width?"landscape":"portrait",type:e.height>=992?"laptop":e.height>=768?"tablet":e.height>=480?"phone":"watch"}})),Ee=Ne.map((function(e){return e.width<=768})),Be={store:{screenSize:Ne,screen:Fe,hoveredMenu:Ee},event:{setSize:Ce}},ze=function e(t){var n=t.item;return"menuItems"in n?Object(Ie.jsx)(Pe.a.SubMenu,{icon:n.icon,title:n.title||n.menuId,children:n.menuItems.map((function(t){return e({item:t})}))},n.menuId):Object(Ie.jsx)(Pe.a.Item,{icon:n.icon,title:n.title||n.menuId,children:n.content||n.menuId},n.menuId)};function Ue(e){var t,n=Object(G.a)(B.store.menu),i=Object(G.a)(B.store.currentMenuItem),a=Object(G.a)(Be.store.hoveredMenu);return Object(Ie.jsx)(Pe.a,Object(d.a)(Object(d.a)({onClick:function(e){a&&B.event.setCollapse(!0),j.event.setCurrentRouteByMenuId(e.key.toString())},style:{userSelect:"none"}},e),{},{selectedKeys:[(null===i||void 0===i?void 0:i.menuId)||""],children:null===n||void 0===n||null===(t=n.menuItems)||void 0===t?void 0:t.map((function(e){return ze({item:e})}))}))}var _e=Me.a.Header,We=Me.a.Sider,Qe=Me.a.Content,Je={viewType:"layout",viewId:"AntLayout",view:function(e){var t=Object(G.a)(B.store.collapsed);return Object(Ie.jsx)(Ae.a,{locale:{locale:"en"},children:Object(Ie.jsxs)(Me.a,{children:[Object(Ie.jsxs)(We,{trigger:null,collapsible:!0,collapsed:t,children:[Object(Ie.jsx)("div",{className:"logo"}),Object(Ie.jsx)(Ue,{theme:"dark",mode:"inline"})]}),Object(Ie.jsxs)(Me.a,{className:"site-layout",children:[Object(Ie.jsx)(_e,{className:"site-layout-background",style:{padding:0},children:a.a.createElement(t?Te.a:De.a,{className:"trigger",onClick:function(){return B.event.collapseToggle()}})}),Object(Ie.jsx)(Qe,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:280},children:e.children})]})]})})}},Ke={viewType:"layout",viewId:"AntEmptyConfigProviderLayout",view:function(e){return Object(Ie.jsx)(Ae.a,{locale:{locale:"en"},children:e.children})}},He=n(260);function Ge(){var e=Object(G.a)(B.store.collapsed),t=Object(G.a)(Be.store.hoveredMenu);return Object(Ie.jsx)(He.a,{placement:"left",mask:t,closable:!1,onClose:function(){return B.event.setCollapse(!0)},visible:!e,getContainer:!1,bodyStyle:{padding:"8px 0px 0px 0px",backgroundColor:"#001529"},width:"256px",children:Object(Ie.jsx)(Ue,{theme:"dark",mode:"inline"})})}function qe(){var e=Object(G.a)(B.store.collapsed),t=Object(G.a)(Be.store.hoveredMenu),n=Object(i.useState)(!0),r=Object(b.a)(n,2),o=r[0],c=r[1];return Object(i.useEffect)((function(){var e=!1,t=0,n=function(){var n=document.body.scrollTop+document.documentElement.scrollTop;e||(e=!0,requestAnimationFrame((function(){t>n?c(!0):n>300&&o?c(!1):n<300&&!o&&c(!0),t=n,e=!1})))};return document.addEventListener("scroll",n,{passive:!0}),function(){document.removeEventListener("scroll",n)}}),[]),o?Object(Ie.jsx)(Me.a.Header,{className:"site-layout-background",style:{padding:0,paddingLeft:e||t?"0px":"256px",background:"#fff",position:"fixed",top:"0",right:"0",width:"100%",zIndex:9,transition:"width 0.2s"},children:a.a.createElement(e?Te.a:De.a,{className:"trigger",onClick:function(){return B.event.collapseToggle()}})}):null}var $e=function(e){var t=Object(G.a)(B.store.collapsed),n=Object(G.a)(Be.store.hoveredMenu);return Object(Ie.jsx)("div",{style:{paddingLeft:t||n?"0px":"256px",paddingTop:"56px"},children:Object(Ie.jsx)("div",{style:{padding:"16px"},children:e.children})})},Xe=(n(179),{viewType:"layout",viewId:"SideMenuLayout",view:function(e){return Object(Ie.jsxs)(Ae.a,{locale:{locale:"en"},children:[Object(Ie.jsx)(Ge,{}),Object(Ie.jsx)(qe,{}),Object(Ie.jsx)($e,{children:e.children})]})}}),Ye=n(144),Ze=n.n(Ye);var et={viewType:"page",viewId:"DemoPageView",view:function(){return document.body.style.setProperty("--color-test","green"),Object(Ie.jsx)("div",{className:Ze.a.test4655,children:"DemoPageView456"})}},tt=n(145),nt=n(50);var it={viewType:"page",viewId:"AboutPageView",view:function(){var e=Object(G.a)(H.store.buildInfo),t=Object(G.a)(H.store.preBuildInfo),n=Object(i.useState)(!1),a=Object(b.a)(n,2),r=a[0],o=a[1],c=Object(i.useState)(null),s=Object(b.a)(c,2),u=s[0];s[1],Object(i.useEffect)((function(){H.effect.readFromServer()}),[]);var l=Object(d.a)({},e);return delete l.filesList,Object(Ie.jsxs)("div",{children:[Object(Ie.jsx)(tt.a,{spinning:r}),Object(Ie.jsx)("br",{}),Object(Ie.jsx)(nt.a,{onClick:function(){null===u||void 0===u||u.postMessage({type:"SKIP_WAITING"}),o(!1),window.location.reload()},children:"Reload"}),Object(Ie.jsx)("br",{}),"preBuild:",Object(Ie.jsx)("pre",{children:JSON.stringify(t,null,2)}),"fromServer:",Object(Ie.jsx)("pre",{children:JSON.stringify(l,null,2)}),'\u043a\u043d\u043e\u043f\u043a\u0430 "\u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"']})}},at=n(104),rt=n(265),ot=n(261),ct=n(267),st=n(266);var ut=[Je,Ke,Xe,et,it,{viewType:"page",viewId:"AntdDemoPage",view:function(){var e="middle";return Object(Ie.jsxs)("div",{children:[Object(Ie.jsxs)(Ie.Fragment,{children:[Object(Ie.jsxs)(at.a.Group,{value:e,onChange:function(){},children:[Object(Ie.jsx)(at.a.Button,{value:"large",children:"Large"}),Object(Ie.jsx)(at.a.Button,{value:"default",children:"Default"}),Object(Ie.jsx)(at.a.Button,{value:"small",children:"Small"})]}),Object(Ie.jsx)("br",{}),Object(Ie.jsx)("br",{}),Object(Ie.jsx)(nt.a,{type:"primary",size:e,children:"Primary"}),Object(Ie.jsx)(nt.a,{size:e,children:"Default"}),Object(Ie.jsx)(nt.a,{type:"dashed",size:e,children:"Dashed"}),Object(Ie.jsx)("br",{}),Object(Ie.jsx)(nt.a,{type:"link",size:e,children:"Link"}),Object(Ie.jsx)("br",{}),Object(Ie.jsxs)(rt.b,{children:[Object(Ie.jsx)(nt.a,{type:"primary",icon:Object(Ie.jsx)(st.a,{}),size:e}),Object(Ie.jsx)(nt.a,{type:"primary",shape:"circle",icon:Object(Ie.jsx)(st.a,{}),size:e}),Object(Ie.jsx)(nt.a,{type:"primary",shape:"round",icon:Object(Ie.jsx)(st.a,{}),size:e}),Object(Ie.jsx)(nt.a,{type:"primary",shape:"round",icon:Object(Ie.jsx)(st.a,{}),size:e,children:"Download"}),Object(Ie.jsx)(nt.a,{type:"primary",icon:Object(Ie.jsx)(st.a,{}),size:e,children:"Download"})]}),Object(Ie.jsx)("br",{}),Object(Ie.jsx)("br",{}),Object(Ie.jsxs)(rt.b,{children:[Object(Ie.jsx)(nt.a,{type:"primary",danger:!0,children:"Primary"}),Object(Ie.jsx)(nt.a,{danger:!0,children:"Default"}),Object(Ie.jsx)(nt.a,{type:"dashed",danger:!0,children:"Dashed"}),Object(Ie.jsx)(nt.a,{type:"text",danger:!0,children:"Text"}),Object(Ie.jsx)(nt.a,{type:"link",danger:!0,children:"Link"})]})]}),Object(Ie.jsx)(ot.a,{gutter:[16,16],children:Object(Ie.jsxs)(rt.b,{children:[Object(Ie.jsx)(ct.a,{message:"Success Tips",type:"success",showIcon:!0}),Object(Ie.jsx)(ct.a,{message:"Informational Notes",type:"info",showIcon:!0}),Object(Ie.jsx)(ct.a,{message:"Warning",type:"warning",showIcon:!0,closable:!0}),Object(Ie.jsx)(ct.a,{message:"Error",type:"error",showIcon:!0}),Object(Ie.jsx)(ct.a,{message:"Success Tips",description:"Detailed description and advice about successful copywriting.",type:"success",showIcon:!0}),Object(Ie.jsx)(ct.a,{message:"Informational Notes",description:"Additional description and information about copywriting.",type:"info",showIcon:!0}),Object(Ie.jsx)(ct.a,{message:"Warning",description:"This is a warning notice about copywriting.",type:"warning",showIcon:!0,closable:!0}),Object(Ie.jsx)(ct.a,{message:"Error",description:"This is an error message about copywriting.",type:"error",showIcon:!0})]})})]})}}],dt={ru:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}},en:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}}};ge({module:{moduleId:"defaultAntd",description:"Use for provide base layouts from Ant Design. with some demo page",manifest:n(147)},views:ut,menu:[{defaultMenuId:"DemoPageView",defaultLayoutId:"SideMenuLayout",menuItems:[{menuId:"defaultAntd",menuItems:[{menuId:"defaultAntd.Pages",menuItems:[{menuId:"defaultAntd.Layouts.DemoPageView",pageViewId:"DemoPageView"},{menuId:"defaultAntd.Layouts.AntdDemoPage",pageViewId:"AntdDemoPage"},{menuId:"defaultAntd.Layouts.AboutPageView",pageViewId:"AboutPageView"}]}]},{menuId:"DemoPageView",pageViewId:"DemoPageView"},{menuId:"AboutPageView",pageViewId:"AboutPageView"}]}],authorities:[{authorityId:"debug1",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"},{authorityId:"debug2",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"}],locales:dt});var lt=n(82),pt=n(158),mt=n(259),ft=n(257),vt=(n(258),0);var jt=n(56),bt=n(114),gt=["templateRecord","dataSource","columns","pagination"],It=function(e){var t=e.templateRecord,n=e.dataSource,a=e.columns,r=e.pagination,o=Object(pt.a)(e,gt),c=Object(i.useState)(""),s=Object(b.a)(c,2),u=s[0],l=s[1];if(!(null===n||void 0===n?void 0:n.length))return null;var p=n.map((function(e){var t=Object.entries(e).reduce((function(e,t){var n=Object(b.a)(t,2),i=n[0],a=n[1],r=JSON.stringify(a,null," ");return e[i]=null===r||void 0===r?void 0:r.substr(1,r.length-2),e}),{});return t.key||(t.key=function(){var e=Date.now();vt=e>(vt=vt||e)?e:vt+1;var t="000"+Math.trunc(999*Math.random());return vt.toString()+t.substr(t.length-3)}()),t})),m=t||p[0],f=a||Object.keys(m).map((function(e){return{title:e,dataIndex:e}})),v=u.trim().split(" ").map((function(e){return e.trim()})),j=p.filter((function(e){var t,n=f.reduce((function(t,n){return t+" "+e[n.dataIndex]}),"").toLowerCase(),i=Object(lt.a)(v);try{for(i.s();!(t=i.n()).done;){var a=t.value;if(!n.includes(a.toLowerCase()))return!1}}catch(r){i.e(r)}finally{i.f()}return!0}));return Object(Ie.jsxs)(Ie.Fragment,{children:[Object(Ie.jsx)(mt.a,{prefix:u?Object(Ie.jsx)(jt.a,{onClick:function(){return l("")}}):Object(Ie.jsx)(bt.a,{}),placeholder:"Input words for search",value:u,onChange:function(e){return l(e.target.value)},style:{maxWidth:"50em"}}),"\xa0\xa0","length: "+j.length,Object(Ie.jsx)("br",{}),Object(Ie.jsx)("br",{}),Object(Ie.jsx)(ft.a,Object(d.a)({size:"small",dataSource:j,columns:f,pagination:r||!1},o))]})};var Ot={viewType:"page",viewId:"AuthoritiesList",view:function(){var e=Object(G.a)(ne.store.authorities);return Object(Ie.jsx)("div",{children:Object(Ie.jsx)(It,{dataSource:e,templateRecord:{authorityId:"",descriptionForUser:"",descriptionForAdmin:""}})})}};var ht={viewType:"page",viewId:"MenuList",view:function(){var e=Object(G.a)(B.store.menu),t=y(null===e||void 0===e?void 0:e.menuItems,"");return Object(Ie.jsx)("div",{children:Object(Ie.jsx)(It,{dataSource:t,templateRecord:{modulesId:[],parentMenuId:"",menuId:"",authority:[],pageViewId:"",pageViewVariantId:"",layoutId:"",layoutVariantId:"",content:"",title:"",documentTitle:""},onRow:function(e,t){return{onDoubleClick:function(t){j.event.setCurrentRoute({params:{menu:e.menuId}})}}}})})}};var wt={viewType:"page",viewId:"ModulesList",view:function(){var e=Object(G.a)(se.store.modules);return Object(Ie.jsx)("div",{children:Object(Ie.jsx)(It,{dataSource:e,templateRecord:{moduleId:"",description:""}})})}};var yt={viewType:"page",viewId:"ViewList",view:function(){var e=Object(G.a)(T.store.views);return Object(Ie.jsx)("div",{children:Object(Ie.jsx)(It,{dataSource:e,templateRecord:{moduleId:[],viewType:"over",viewId:"",variantId:"",authorities:[],priority:{laptop:0,phone:0,tablet:0,watch:0}},onRow:function(e,t){return{onDoubleClick:function(t){j.event.setCurrentRoute({params:{pageViewId:e.viewId,pageViewVariantId:e.variantId}})}}}})})}},xt=n(61),St=n(268);function kt(e){var t=[];return Object.entries(e).forEach((function(e){var n=Object(b.a)(e,2),i=n[0],a=n[1];Object.entries(a).forEach((function(e){var n=Object(b.a)(e,2),a=n[0],r=n[1];Object.entries(r).forEach((function(e){var n=Object(b.a)(e,2),r=n[0],o=n[1];t.push({localeId:i,nameSpace:a,stringKey:r,stringValue:o})}))}))})),t}var Vt=[Ot,ht,wt,yt,{viewType:"page",viewId:"ServicesList",view:function(){var e=Object(G.a)(be.store.services),t=Object(G.a)(be.effects.updateServicesInfoFx.pending);Object(i.useEffect)((function(){be.effects.updateServicesInfoFx(void 0)}),[]);var n={modulesId:"",serviceId:"",originUrl:"",resultQuickTest:void 0,remoteServiceInfo:void 0,description:"",servicePageViewId:""};return Object(Ie.jsxs)("div",{children:[Object(Ie.jsx)(nt.a,{type:"primary",icon:t?Object(Ie.jsx)(xt.a,{}):Object(Ie.jsx)(St.a,{}),disabled:t,onClick:function(){return be.effects.updateServicesInfoFx(void 0)},children:"Update"}),Object(Ie.jsx)("br",{}),Object(Ie.jsx)("br",{}),Object(Ie.jsx)(It,{dataSource:e,templateRecord:n,onRow:function(e,t){return{onDoubleClick:function(t){j.event.setCurrentRoute({params:{pageViewId:e.servicePageViewId}})}}}})]})}},{viewType:"page",viewId:"LocalesList",view:function(){var e=kt(Object(G.a)(re.store.locales));return Object(Ie.jsx)("div",{children:Object(Ie.jsx)(It,{dataSource:e,templateRecord:{localeId:"",nameSpace:"",stringKey:"",stringValue:""}})})}},{viewType:"page",viewId:"SettingsList",view:function(){var e=kt(Object(G.a)(re.store.locales));return Object(Ie.jsx)("div",{children:Object(Ie.jsx)(It,{dataSource:e,templateRecord:{localeId:"",nameSpace:"",stringKey:"",stringValue:""}})})}},{viewType:"page",viewId:"ThemeSettingsList",view:function(){var e=kt(Object(G.a)(re.store.locales));return Object(Ie.jsx)("div",{children:Object(Ie.jsx)(It,{dataSource:e,templateRecord:{localeId:"",nameSpace:"",stringKey:"",stringValue:""}})})}},{viewType:"page",viewId:"NotificationsList",view:function(){var e=kt(Object(G.a)(re.store.locales));return Object(Ie.jsx)("div",{children:Object(Ie.jsx)(It,{dataSource:e,templateRecord:{localeId:"",nameSpace:"",stringKey:"",stringValue:""}})})}}],Lt={ru:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}},en:{default:{"app.settings.menuMap.basic":"Basic Settings","app.settings.menuMap.security":"Security Settings","app.settings.menuMap.binding":"Account Binding","app.settings.menuMap.notification":"New Message Notification"}}};ge({module:{moduleId:"debug",description:"Use for debug page, with register module with register data",manifest:n(151)},views:Vt,menu:[{defaultLayoutId:"SideMenuLayout",menuItems:[{menuId:"debug",menuItems:[{menuId:"ModulesList",content:"Modules",pageViewId:"ModulesList"},{menuId:"ViewList",content:"Views",pageViewId:"ViewList"},{menuId:"ServicesList",content:"Services",pageViewId:"ServicesList"},{menuId:"AuthoritiesList",content:"Authorities",pageViewId:"AuthoritiesList"},{menuId:"MenuList",content:"Menu",pageViewId:"MenuList"},{menuId:"LocalesList",content:"Locales",pageViewId:"LocalesList"},{menuId:"SettingsList",content:"Settings",pageViewId:"SettingsList"},{menuId:"ThemeSettingsList",content:"ThemeSettings",pageViewId:"ThemeSettingsList"},{menuId:"NotificationsList",content:"Notifications",pageViewId:"NotificationsList"}]}]}],authorities:[{authorityId:"debug1",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"},{authorityId:"debug2",descriptionForUser:"optional can be taken from locale",descriptionForAdmin:"optional can be taken from locale"}],locales:Lt}),H.event.setPreBuildInfo(q),j.event.updateCurrentRoute();var Mt=function(){var e=Object(G.a)(B.store.currentLayoutPage),t=e.layout,n=e.page,i=(null===n||void 0===n?void 0:n.view)||function(){return Object(Ie.jsx)("div",{children:"error 404"})},a=null===t||void 0===t?void 0:t.view;return a?Object(Ie.jsx)(a,{children:Object(Ie.jsx)(i,{})}):Object(Ie.jsx)(i,{})};o.a.render(Object(Ie.jsx)(a.a.StrictMode,{children:Object(Ie.jsx)(Mt,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");c?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):s(t,e)}))}}(),u(console.log)}},[[252,1,2]]]);