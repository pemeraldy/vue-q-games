(function(t){function a(a){for(var e,i,l=a[0],c=a[1],o=a[2],d=0,u=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);p&&p(a);while(u.length)u.shift()();return r.push.apply(r,o||[]),s()}function s(){for(var t,a=0;a<r.length;a++){for(var s=r[a],e=!0,i=1;i<s.length;i++){var l=s[i];0!==n[l]&&(e=!1)}e&&(r.splice(a--,1),t=c(c.s=s[0]))}return t}var e={},i={app:0},n={app:0},r=[];function l(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d9cf9bba"}[t]+".js"}function c(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var a=[],s={about:1};i[t]?a.push(i[t]):0!==i[t]&&s[t]&&a.push(i[t]=new Promise((function(a,s){for(var e="css/"+({about:"about"}[t]||t)+"."+{about:"3ed8cfe6"}[t]+".css",n=c.p+e,r=document.getElementsByTagName("link"),l=0;l<r.length;l++){var o=r[l],d=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(d===e||d===n))return a()}var u=document.getElementsByTagName("style");for(l=0;l<u.length;l++){o=u[l],d=o.getAttribute("data-href");if(d===e||d===n)return a()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=a,p.onerror=function(a){var e=a&&a.target&&a.target.src||n,r=new Error("Loading CSS chunk "+t+" failed.\n("+e+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=e,delete i[t],p.parentNode.removeChild(p),s(r)},p.href=n;var v=document.getElementsByTagName("head")[0];v.appendChild(p)})).then((function(){i[t]=0})));var e=n[t];if(0!==e)if(e)a.push(e[2]);else{var r=new Promise((function(a,s){e=n[t]=[a,s]}));a.push(e[2]=r);var o,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=l(t);var u=new Error;o=function(a){d.onerror=d.onload=null,clearTimeout(p);var s=n[t];if(0!==s){if(s){var e=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+t+" failed.\n("+e+": "+i+")",u.name="ChunkLoadError",u.type=e,u.request=i,s[1](u)}n[t]=void 0}};var p=setTimeout((function(){o({type:"timeout",target:d})}),12e4);d.onerror=d.onload=o,document.head.appendChild(d)}return Promise.all(a)},c.m=t,c.c=e,c.d=function(t,a,s){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)c.d(s,e,function(a){return t[a]}.bind(null,e));return s},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=a,o=o.slice();for(var u=0;u<o.length;u++)a(o[u]);var p=d;r.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"48b7":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal fade",attrs:{id:"staticBackdrop","data-backdrop":"static","data-keyboard":"false",tabindex:"-1",role:"dialog","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"staticBackdropLabel"}},[t._v("Add Student")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[s("form",{attrs:{role:"form"}},[s("div",{staticClass:"form-group mb-3"},[s("div",{staticClass:"input-group input-group-merge input-group-alternative"},[s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[s("i",{staticClass:"fas fa-user"})])]),s("input",{staticClass:"form-control",attrs:{placeholder:"Name",type:"text"}})])]),s("div",{staticClass:"form-group mb-3"},[s("div",{staticClass:"input-group input-group-merge input-group-alternative"},[s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[s("i",{staticClass:"fas fa-user"})])]),s("input",{staticClass:"form-control",attrs:{placeholder:"IDP N0",type:"text"}})])]),s("div",{staticClass:"form-group"},[s("div",{staticClass:"input-group input-group-merge input-group-alternative"},[s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[s("i",{staticClass:"ni ni-lock-circle-open"})])]),s("input",{staticClass:"form-control",attrs:{placeholder:"Password",type:"password"}})])])])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancel")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Create")])])])])])}],n={},r=n,l=s("2877"),c=Object(l["a"])(r,e,i,!1,null,null,null);a["a"]=c.exports},"4d68":function(t,a,s){"use strict";var e=s("d967"),i=s.n(e);i.a},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("transition",[s("router-view")],1)],1)},n=[],r=s("2877"),l={},c=Object(r["a"])(l,i,n,!1,null,null,null),o=c.exports,d=(s("d3b7"),s("8c4f")),u=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"login"},[s("LoginNav"),s("div",{staticClass:"main-content"},[t._m(0),s("div",{staticClass:"container mt--8 pb-5"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-5 col-md-7"},[s("div",{staticClass:"card bg-secondary border-0 mb-0"},[t._m(1),s("div",{staticClass:"card-body px-lg-5 py-lg-5"},[s("form",{attrs:{role:"form"}},[t._m(2),t._m(3),t._m(4),s("div",{staticClass:"text-center"},[s("button",{staticClass:"btn btn-primary my-4",attrs:{type:"button"}},[s("router-link",{staticClass:"text-white",attrs:{to:"/contents"}},[t._v("Sign in")])],1)])])])]),t._m(5)])])])])],1)},p=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header mb-3 py-7 py-lg-4 pt-lg-5"},[s("div",{staticClass:"container"},[s("div",{staticClass:"header-body text-center mb-7"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-xl-5 col-lg-6 col-md-8 px-5"},[s("h1",{staticClass:"text-white"},[t._v("Welcome")])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-header bg-transparent pb-2"},[s("div",{staticClass:"text-muted text-center"},[s("h3",[t._v("Sign in with to start learning")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"form-group mb-3"},[s("div",{staticClass:"input-group input-group-merge input-group-alternative"},[s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[s("i",{staticClass:"fas fa-user"})])]),s("input",{staticClass:"form-control",attrs:{placeholder:"Name",type:"text"}})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"form-group mb-3"},[s("div",{staticClass:"input-group input-group-merge input-group-alternative"},[s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[s("i",{staticClass:"fas fa-user"})])]),s("input",{staticClass:"form-control",attrs:{placeholder:"IDP N0",type:"text"}})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"form-group"},[s("div",{staticClass:"input-group input-group-merge input-group-alternative"},[s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[s("i",{staticClass:"ni ni-lock-circle-open"})])]),s("input",{staticClass:"form-control",attrs:{placeholder:"Password",type:"password"}})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-12 text-center"},[s("a",{staticClass:"text-light",attrs:{href:"#"}},[s("small",[t._v("Forgot password?")])])])])}],v=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light",attrs:{id:"navbar-main"}},[s("div",{staticClass:"container"},[s("nav-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v(" GCC ")]),t._m(0),s("div",{staticClass:"navbar-collapse navbar-custom-collapse collapse",attrs:{id:"navbar-collapse"}},[s("div",{staticClass:"navbar-collapse-header"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6 collapse-brand"},[s("router-link",{attrs:{to:"/"}},[t._v(" GCC ")])],1),t._m(1)])]),s("ul",{staticClass:"navbar-nav mr-auto"}),s("hr",{staticClass:"d-lg-none"}),s("ul",{staticClass:"navbar-nav align-items-lg-center ml-lg-auto"},[s("li",{staticClass:"nav-item d-none d-lg-block ml-lg-4"},[s("router-link",{staticClass:"btn btn-neutral btn-icon",attrs:{to:"/admin"}},[s("span",{staticClass:"btn-inner--icon"},[s("i",{staticClass:"fas fa-user mr-2"})]),s("span",{staticClass:"nav-link-inner--text"},[t._v("Admin")])])],1)])])],1)])},m=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar-collapse","aria-controls":"navbar-collapse","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-6 collapse-close"},[s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar-collapse","aria-controls":"navbar-collapse","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span"),s("span")])])}],C={},b=C,g=Object(r["a"])(b,v,m,!1,null,null,null),f=g.exports,h={components:{LoginNav:f}},_=h,y=(s("82a2"),Object(r["a"])(_,u,p,!1,null,"173c4976",null)),x=y.exports,w=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"admin"},[s("Sidebar"),s("div",{staticClass:"main-content",attrs:{id:"panel"}},[s("AdminNav"),t._m(0),t._m(1)],1),s("AddStudentModal")],1)},k=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header pb-6"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"header-body"},[s("div",{staticClass:"row align-items-center py-4"})])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container-fluid mt--6"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-8"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header border-0"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col"},[s("h3",{staticClass:"mb-0"},[t._v("Subjects")])]),s("div",{staticClass:"col text-right"},[s("a",{staticClass:"btn btn-sm btn-primary",attrs:{href:"#!"}},[t._v("..")])])]),s("div",{staticClass:"card-body d-flex"},[s("div",{staticClass:"card subject-card"},[s("div",{staticClass:"card-body"},[s("h2",{staticClass:"card-title"},[t._v("English")]),s("p",{staticClass:"card-text"},[t._v("Take this lesson to speak english fluently with confidence")]),s("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Learn")])])]),s("div",{staticClass:"card subject-card"},[s("div",{staticClass:"card-body"},[s("h2",{staticClass:"card-title"},[t._v("Mathematics")]),s("p",{staticClass:"card-text"},[t._v("Take this lesson to get good knowledge of mathematics")]),s("a",{staticClass:"btn bth-sm btn-primary",attrs:{href:"#"}},[t._v("Learn")]),s("a",{staticClass:"btn bth-sm btn-primary",attrs:{href:"#"}},[t._v("Quiz")])])])]),s("div",{staticClass:"card-body d-flex"},[s("div",{staticClass:"card subject-card"},[s("div",{staticClass:"card-body"},[s("h2",{staticClass:"card-title"},[t._v("English")]),s("p",{staticClass:"card-text"},[t._v("Take this lesson to speak english fluently with confidence")]),s("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Learn")])])]),s("div",{staticClass:"card subject-card"},[s("div",{staticClass:"card-body"},[s("h2",{staticClass:"card-title"},[t._v("Mathematics")]),s("p",{staticClass:"card-text"},[t._v("Take this lesson to get good knowledge of mathematics")]),s("a",{staticClass:"btn bth-sm btn-primary",attrs:{href:"#"}},[t._v("Learn")]),s("a",{staticClass:"btn bth-sm btn-primary",attrs:{href:"#"}},[t._v("Quiz")])])])])])])]),s("div",{staticClass:"col-xl-4"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header border-0"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col"},[s("h3",{staticClass:"mb-0"},[t._v("Topics")])]),s("div",{staticClass:"col text-right"},[s("a",{staticClass:"btn btn-sm btn-primary",attrs:{href:"#!"}},[t._v("%")])])])]),s("div",{staticClass:"btn-group-vertical"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"}},[t._v("1")]),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"}},[t._v("1")])])])])])])}],E=s("e04c"),j=s("48b7"),$=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white",attrs:{id:"sidenav-main"}},[s("div",{staticClass:"scrollbar-inner"},[s("div",{staticClass:"sidenav-header align-items-center"},[s("a",{staticClass:"navbar-brand"},[t._v(" GCC ")])]),s("div",{staticClass:"navbar-inner"},[s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"sidenav-collapse-main"}},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{href:"#"}},[s("i",{staticClass:"ni ni-tv-2 text-primary"}),s("span",{staticClass:"nav-link-text"},[t._v("Dashboard")])])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[s("i",{staticClass:"ni ni-planet text-orange"}),s("span",{staticClass:"nav-link-text"},[t._v("Subjects")])])])]),s("hr",{staticClass:"my-3"}),s("h6",{staticClass:"navbar-heading p-0 text-muted"},[s("span",{staticClass:"docs-normal"},[t._v("Onboarding")])]),s("ul",{staticClass:"navbar-nav mb-md-3"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link"},[s("i",{staticClass:"ni ni-spaceship text-yellow"}),s("span",{staticClass:"nav-link-text"},[t._v("Getting started")])])])])])])])])}],S={},A=S,L=Object(r["a"])(A,$,O,!1,null,null,null),T=L.exports,P={name:"Admin",components:{AdminNav:E["a"],AddStudentModal:j["a"],Sidebar:T}},N=P,M=(s("4d68"),Object(r["a"])(N,w,k,!1,null,"c25bc586",null)),B=M.exports;e["a"].use(d["a"]);var D=[{path:"/",name:"Login",component:x},{path:"/contents",name:"contents",component:B},{path:"/Admin",name:"Admin",component:function(){return s.e("about").then(s.bind(null,"3530"))}}],G=new d["a"]({mode:"history",base:"/",routes:D}),z=G;e["a"].config.productionTip=!1,new e["a"]({router:z,render:function(t){return t(o)}}).$mount("#app")},"82a2":function(t,a,s){"use strict";var e=s("88a7"),i=s.n(e);i.a},"88a7":function(t,a,s){},d967:function(t,a,s){},e04c:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("h4",{staticClass:"text-white"},[t._v("GCC")]),s("ul",{staticClass:"navbar-nav align-items-center ml-md-auto"},[s("li",{staticClass:"nav-item d-xl-none"},[s("div",{staticClass:"pr-3 sidenav-toggler sidenav-toggler-dark",attrs:{"data-action":"sidenav-pin","data-target":"#sidenav-main"}},[s("div",{staticClass:"sidenav-toggler-inner"},[s("i",{staticClass:"sidenav-toggler-line"}),s("i",{staticClass:"sidenav-toggler-line"}),s("i",{staticClass:"sidenav-toggler-line"})])])]),s("li",{staticClass:"nav-item d-sm-none"},[s("a",{staticClass:"nav-link",attrs:{href:"#","data-action":"search-show","data-target":"#navbar-search-main"}},[s("i",{staticClass:"ni ni-zoom-split-in"})])]),s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link",attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"ni ni-bell-55"})]),s("div",{staticClass:"dropdown-menu dropdown-menu-xl dropdown-menu-right py-0 overflow-hidden"},[s("div",{staticClass:"px-3 py-3"},[s("h6",{staticClass:"text-sm text-muted m-0"},[t._v(" ... "),s("strong",{staticClass:"text-primary"},[t._v("13")]),t._v(" ... ")])]),s("div",{staticClass:"list-group list-group-flush"},[s("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"#!"}},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-auto"}),s("div",{staticClass:"col ml--2"},[s("div",{staticClass:"d-flex justify-content-between align-items-center"},[s("div",[s("h4",{staticClass:"mb-0 text-sm"},[t._v("...")])]),s("div",{staticClass:"text-right text-muted"},[s("small",[t._v("...")])])]),s("p",{staticClass:"text-sm mb-0"},[t._v("...")])])])])])])]),s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link",attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"ni ni-ungroup"})]),s("div",{staticClass:"dropdown-menu dropdown-menu-lg dropdown-menu-dark bg-default dropdown-menu-right"},[s("div",{staticClass:"row shortcuts px-4"},[s("a",{staticClass:"col-4 shortcut-item",attrs:{href:"#!"}},[s("span",{staticClass:"shortcut-media avatar rounded-circle bg-gradient-red"},[s("i",{staticClass:"ni ni-calendar-grid-58"})]),s("small",[t._v("Calendar")])])])])])]),s("ul",{staticClass:"navbar-nav align-items-center ml-auto ml-md-0"},[s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link pr-0",attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("div",{staticClass:"media align-items-center"},[s("span",{staticClass:"avatar avatar-sm rounded-circle"}),s("div",{staticClass:"media-body ml-2 d-none d-lg-block"},[s("span",{staticClass:"mb-0 text-sm font-weight-bold"},[t._v("Muhammad Isah")])])])]),s("div",{staticClass:"dropdown-menu dropdown-menu-right"},[s("a",{staticClass:"dropdown-item",attrs:{href:"#!"}},[s("i",{staticClass:"ni ni-user-run"}),s("span",[t._v("Logout")])])])])])])])])}],n={},r=n,l=s("2877"),c=Object(l["a"])(r,e,i,!1,null,null,null);a["a"]=c.exports}});
//# sourceMappingURL=app.59b6083b.js.map