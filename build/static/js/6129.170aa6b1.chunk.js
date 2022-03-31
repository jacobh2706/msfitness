"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6129],{6129:function(t,e,n){n.r(e),n.d(e,{ion_route:function(){return u},ion_route_redirect:function(){return h},ion_router:function(){return N},ion_router_link:function(){return J}});var r=n(3431),o=n(4039),i=n(4960),a=n(323),s=n(8855),u=function(){function t(t){(0,o.r)(this,t),this.ionRouteDataChanged=(0,o.e)(this,"ionRouteDataChanged",7),this.url=""}return t.prototype.onUpdate=function(t){this.ionRouteDataChanged.emit(t)},t.prototype.onComponentProps=function(t,e){if(t!==e){var n=t?Object.keys(t):[],r=e?Object.keys(e):[];if(n.length===r.length)for(var o=0,i=n;o<i.length;o++){var a=i[o];if(t[a]!==e[a])return void this.onUpdate(t)}else this.onUpdate(t)}},t.prototype.connectedCallback=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(t,"watchers",{get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}},enumerable:!1,configurable:!0}),t}(),h=function(){function t(t){(0,o.r)(this,t),this.ionRouteRedirectChanged=(0,o.e)(this,"ionRouteRedirectChanged",7)}return t.prototype.propDidChange=function(){this.ionRouteRedirectChanged.emit()},t.prototype.connectedCallback=function(){this.ionRouteRedirectChanged.emit()},Object.defineProperty(t,"watchers",{get:function(){return{from:["propDidChange"],to:["propDidChange"]}},enumerable:!1,configurable:!0}),t}(),c="root",l="forward",f=function(t){return"/"+t.filter((function(t){return t.length>0})).join("/")},d=function(t,e,n,o,i,a,s){var u=function(t,e,n){var r=f(t);return e&&(r="#"+r),void 0!==n&&(r+="?"+n),r}((0,r.ev)((0,r.ev)([],p(e).segments),o),n,s);i===l?t.pushState(a,"",u):t.replaceState(a,"",u)},p=function(t){var e,n=[""];if(null!=t){var r=t.indexOf("?");r>-1&&(e=t.substr(r+1),t=t.substr(0,r)),n=t.split("/").map((function(t){return t.trim()})).filter((function(t){return t.length>0})),0===n.length&&(n=[""])}return{segments:n,queryString:e}},v=function t(e,n,o,a,s,u){return void 0===s&&(s=!1),(0,r.mG)(void 0,void 0,void 0,(function(){var h,l,f,d;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,6,,7]),h=b(e),a>=n.length||!h?[2,s]:[4,new Promise((function(t){return(0,i.c)(h,t)}))];case 1:return r.sent(),l=n[a],[4,h.setRouteId(l.id,l.params,o,u)];case 2:return(f=r.sent()).changed&&(o=c,s=!0),[4,t(f.element,n,o,a+1,s,u)];case 3:return s=r.sent(),f.markVisible?[4,f.markVisible()]:[3,5];case 4:r.sent(),r.label=5;case 5:return[2,s];case 6:return d=r.sent(),console.error(d),[2,!1];case 7:return[2]}}))}))},g=function(t){return(0,r.mG)(void 0,void 0,void 0,(function(){var e,n,o,i;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:e=[],o=t,r.label=1;case 1:return(n=b(o))?[4,n.getRouteId()]:[3,3];case 2:return(i=r.sent())?(o=i.element,i.element=void 0,e.push(i),[3,4]):[3,5];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:e,outlet:n}]}}))}))},m=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",b=function(t){if(t){if(t.matches(m))return t;var e=t.querySelector(m);return null!==e&&void 0!==e?e:void 0}},y=function(t,e){return e.find((function(e){return function(t,e){var n=e.from;if(void 0===e.to)return!1;if(n.length>t.length)return!1;for(var r=0;r<n.length;r++){var o=n[r];if("*"===o)return!0;if(o!==t[r])return!1}return n.length===t.length}(t,e)}))},w=function(t,e){for(var n=Math.min(t.length,e.length),r=0,o=0;o<n;o++){var i=t[o],a=e[o];if(i.id.toLowerCase()!==a.id)break;if(i.params){var s=Object.keys(i.params);if(s.length===a.path.length)for(var u=s.map((function(t){return":"+t})),h=0;h<u.length&&u[h].toLowerCase()===a.path[h];h++)r++}r++}return r},R=function(t,e){for(var n,r=new S(t),o=!1,i=0;i<e.length;i++){var a=e[i].path;if(""===a[0])o=!0;else{for(var s=0,u=a;s<u.length;s++){var h=u[s],c=r.next();if(":"===h[0]){if(""===c)return null;((n=n||[])[i]||(n[i]={}))[h.slice(1)]=c}else if(c!==h)return null}o=!1}}return!o||o===(""===r.next())?n?e.map((function(t,e){return{id:t.id,path:t.path,params:C(t.params,n[e]),beforeEnter:t.beforeEnter,beforeLeave:t.beforeLeave}})):e:null},C=function(t,e){return t||e?Object.assign(Object.assign({},t),e):void 0},P=function(t,e){for(var n=null,r=0,o=0,i=e;o<i.length;o++){var a=i[o],s=R(t,a);if(null!==s){var u=k(s);u>r&&(r=u,n=s)}}return n},k=function(t){for(var e=1,n=1,r=0,o=t;r<o.length;r++)for(var i=0,a=o[r].path;i<a.length;i++){var s=a[i];":"===s[0]?e+=Math.pow(1,n):""!==s&&(e+=Math.pow(2,n)),n++}return e},S=function(){function t(t){this.path=t.slice()}return t.prototype.next=function(){return this.path.length>0?this.path.shift():""},t}(),E=function(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null},D=function(t){return Array.from(t.children).filter((function(t){return"ION-ROUTE-REDIRECT"===t.tagName})).map((function(t){var e=E(t,"to");return{from:p(E(t,"from")).segments,to:null==e?void 0:p(e)}}))},L=function(t){return O(G(t))},G=function t(e){return Array.from(e.children).filter((function(t){return"ION-ROUTE"===t.tagName&&t.component})).map((function(e){var n=E(e,"component");return{path:p(E(e,"url")).segments,id:n.toLowerCase(),params:e.componentProps,beforeLeave:e.beforeLeave,beforeEnter:e.beforeEnter,children:t(e)}}))},O=function(t){for(var e=[],n=0,r=t;n<r.length;n++){var o=r[n];j([],e,o)}return e},j=function t(e,n,r){if((e=e.slice()).push({id:r.id,path:r.path,params:r.params,beforeLeave:r.beforeLeave,beforeEnter:r.beforeEnter}),0!==r.children.length)for(var o=0,i=r.children;o<i.length;o++){t(e,n,i[o])}else n.push(e)},N=function(){function t(t){(0,o.r)(this,t),this.ionRouteWillChange=(0,o.e)(this,"ionRouteWillChange",7),this.ionRouteDidChange=(0,o.e)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return t.prototype.componentWillLoad=function(){return(0,r.mG)(this,void 0,void 0,(function(){var t,e,n;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return[4,b(document.body)?Promise.resolve():new Promise((function(t){window.addEventListener("ionNavWillLoad",t,{once:!0})}))];case 1:return r.sent(),[4,this.runGuards(this.getPath())];case 2:return!0===(t=r.sent())?[3,5]:"object"!==typeof t?[3,4]:(e=t.redirect,n=p(e),this.setPath(n.segments,c,n.queryString),[4,this.writeNavStateRoot(n.segments,c)]);case 3:r.sent(),r.label=4;case 4:return[3,7];case 5:return[4,this.onRoutesChanged()];case 6:r.sent(),r.label=7;case 7:return[2]}}))}))},t.prototype.componentDidLoad=function(){window.addEventListener("ionRouteRedirectChanged",(0,i.o)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",(0,i.o)(this.onRoutesChanged.bind(this),100))},t.prototype.onPopState=function(){return(0,r.mG)(this,void 0,void 0,(function(){var t,e,n;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return t=this.historyDirection(),e=this.getPath(),[4,this.runGuards(e)];case 1:if(!0!==(n=r.sent())){if("object"!==typeof n)return[2,!1];e=p(n.redirect).segments}return[2,this.writeNavStateRoot(e,t)]}}))}))},t.prototype.onBackButton=function(t){var e=this;t.detail.register(0,(function(t){e.back(),t()}))},t.prototype.canTransition=function(){return(0,r.mG)(this,void 0,void 0,(function(){var t;return(0,r.Jh)(this,(function(e){switch(e.label){case 0:return[4,this.runGuards()];case 1:return!0!==(t=e.sent())?"object"===typeof t?[2,t.redirect]:[2,!1]:[2,!0]}}))}))},t.prototype.push=function(t,e,n){return void 0===e&&(e="forward"),(0,r.mG)(this,void 0,void 0,(function(){var o,i;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),o=p(t),[4,this.runGuards(o.segments)];case 1:if(!0!==(i=r.sent())){if("object"!==typeof i)return[2,!1];o=p(i.redirect)}return this.setPath(o.segments,e,o.queryString),[2,this.writeNavStateRoot(o.segments,e,n)]}}))}))},t.prototype.back=function(){return window.history.back(),Promise.resolve(this.waitPromise)},t.prototype.printDebug=function(){return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(t){return function(t){console.group("[ion-core] ROUTES["+t.length+"]");for(var e=function(t){var e=[];t.forEach((function(t){return e.push.apply(e,t.path)}));var n=t.map((function(t){return t.id}));console.debug("%c "+f(e),"font-weight: bold; padding-left: 20px","=>\t","("+n.join(", ")+")")},n=0,r=t;n<r.length;n++)e(r[n]);console.groupEnd()}(L(this.el)),function(t){console.group("[ion-core] REDIRECTS["+t.length+"]");for(var e=0,n=t;e<n.length;e++){var r=n[e];r.to&&console.debug("FROM: ","$c "+f(r.from),"font-weight: bold"," TO: ","$c "+f(r.to.segments),"font-weight: bold")}console.groupEnd()}(D(this.el)),[2]}))}))},t.prototype.navChanged=function(t){return(0,r.mG)(this,void 0,void 0,(function(){var e,n,o,i,a,s;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, navChanged was cancelled"),[2,!1]):[4,g(window.document.body)];case 1:return e=r.sent(),n=e.ids,o=e.outlet,i=L(this.el),a=function(t,e){for(var n=null,r=0,o=0,i=e;o<i.length;o++){var a=i[o],s=w(t,a);s>r&&(n=a,r=s)}return n?n.map((function(e,n){return{id:e.id,path:e.path,params:C(e.params,t[n]&&t[n].params)}})):null}(n,i),a?(s=function(t){for(var e=[],n=0,r=t;n<r.length;n++)for(var o=r[n],i=0,a=o.path;i<a.length;i++){var s=a[i];if(":"===s[0]){var u=o.params&&o.params[s.slice(1)];if(!u)return null;e.push(u)}else""!==s&&e.push(s)}return e}(a),s?(this.setPath(s,t),[4,this.safeWriteNavState(o,a,c,s,null,n.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1])):(console.warn("[ion-router] no matching URL for ",n.map((function(t){return t.id}))),[2,!1]);case 2:return r.sent(),[2,!0]}}))}))},t.prototype.onRedirectChanged=function(){var t=this.getPath();t&&y(t,D(this.el))&&this.writeNavStateRoot(t,c)},t.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),c)},t.prototype.historyDirection=function(){var t,e=window;null===e.history.state&&(this.state++,e.history.replaceState(this.state,e.document.title,null===(t=e.document.location)||void 0===t?void 0:t.href));var n=e.history.state,r=this.lastState;return this.lastState=n,n>r||n>=r&&r>0?l:n<r?"back":c},t.prototype.writeNavStateRoot=function(t,e,n){return(0,r.mG)(this,void 0,void 0,(function(){var o,i,a,s,u,h,c,l;return(0,r.Jh)(this,(function(r){return t?(o=D(this.el),i=y(t,o),a=null,i&&(s=i.to,u=s.segments,h=s.queryString,this.setPath(u,e,h),a=i.from,t=u),c=L(this.el),(l=P(t,c))?[2,this.safeWriteNavState(document.body,l,e,t,a,0,n)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])}))}))},t.prototype.safeWriteNavState=function(t,e,n,o,i,a,s){return void 0===a&&(a=0),(0,r.mG)(this,void 0,void 0,(function(){var u,h,c;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return[4,this.lock()];case 1:u=r.sent(),h=!1,r.label=2;case 2:return r.trys.push([2,4,,5]),[4,this.writeNavState(t,e,n,o,i,a,s)];case 3:return h=r.sent(),[3,5];case 4:return c=r.sent(),console.error(c),[3,5];case 5:return u(),[2,h]}}))}))},t.prototype.lock=function(){return(0,r.mG)(this,void 0,void 0,(function(){var t,e;return(0,r.Jh)(this,(function(n){switch(n.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise((function(t){return e=t})),void 0===t?[3,2]:[4,t];case 1:n.sent(),n.label=2;case 2:return[2,e]}}))}))},t.prototype.runGuards=function(t,e){return void 0===t&&(t=this.getPath()),(0,r.mG)(this,void 0,void 0,(function(){var n,o,i,a,s,u,h;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return void 0===e&&(e=p(this.previousPath).segments),t&&e?(n=L(this.el),o=P(e,n),(i=o&&o[o.length-1].beforeLeave)?[4,i()]:[3,2]):[2,!0];case 1:return s=r.sent(),[3,3];case 2:s=!0,r.label=3;case 3:return!1===(a=s)||"object"===typeof a?[2,a]:(u=P(t,n),[2,!(h=u&&u[u.length-1].beforeEnter)||h()])}}))}))},t.prototype.writeNavState=function(t,e,n,o,i,a,s){return void 0===a&&(a=0),(0,r.mG)(this,void 0,void 0,(function(){var u,h;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, transition was cancelled"),[2,!1]):(this.busy=!0,(u=this.routeChangeEvent(o,i))&&this.ionRouteWillChange.emit(u),[4,v(t,e,n,a,!1,s)]);case 1:return h=r.sent(),this.busy=!1,u&&this.ionRouteDidChange.emit(u),[2,h]}}))}))},t.prototype.setPath=function(t,e,n){this.state++,d(window.history,this.root,this.useHash,t,e,this.state,n)},t.prototype.getPath=function(){return function(t,e,n){var r=p(e).segments,o=n?t.hash.slice(1):t.pathname;return function(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)}(r,p(o).segments)}(window.location,this.root,this.useHash)},t.prototype.routeChangeEvent=function(t,e){var n=this.previousPath,r=f(t);return this.previousPath=r,r===n?null:{from:n,redirectedFrom:e?f(e):null,to:r}},Object.defineProperty(t.prototype,"el",{get:function(){return(0,o.i)(this)},enumerable:!1,configurable:!0}),t}(),J=function(){function t(t){var e=this;(0,o.r)(this,t),this.routerDirection="forward",this.onClick=function(t){(0,s.o)(e.href,t,e.routerDirection,e.routerAnimation)}}return t.prototype.render=function(){var t,e=(0,a.b)(this),n={href:this.href,rel:this.rel,target:this.target};return(0,o.h)(o.H,{onClick:this.onClick,class:(0,s.c)(this.color,(t={},t[e]=!0,t["ion-activatable"]=!0,t))},(0,o.h)("a",Object.assign({},n),(0,o.h)("slot",null)))},t}();J.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}]);
//# sourceMappingURL=6129.170aa6b1.chunk.js.map