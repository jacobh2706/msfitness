"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1609],{1609:function(t,o,e){e.r(o),e.d(o,{ion_accordion:function(){return d},ion_accordion_group:function(){return s}});var n=e(3431),i=e(4039),r=e(323),a=e(4960),d=function(){function t(t){var o=this;(0,i.r)(this,t),this.updateListener=function(){return o.updateState(!1)},this.state=1,this.isNext=!1,this.isPrevious=!1,this.value="ion-accordion-"+c++,this.disabled=!1,this.readonly=!1,this.toggleIcon="chevron-down",this.toggleIconSlot="end",this.setItemDefaults=function(){var t=o.getSlottedHeaderIonItem();t&&(t.button=!0,t.detail=!1,void 0===t.lines&&(t.lines="full"))},this.getSlottedHeaderIonItem=function(){var t=o.headerEl;if(t){var e=t.querySelector("slot");if(e){var n=e.assignedElements&&e.assignedElements().find((function(t){return"ION-ITEM"===t.tagName}));return n}}},this.setAria=function(t){void 0===t&&(t=!1);var e=o.getSlottedHeaderIonItem();if(e){var n=(0,a.g)(e).querySelector("button");n&&n.setAttribute("aria-expanded",""+t)}},this.slotToggleIcon=function(){var t=o.getSlottedHeaderIonItem();if(t){var e=o,n=e.toggleIconSlot,i=e.toggleIcon;if(!t.querySelector(".ion-accordion-toggle-icon")){var r=document.createElement("ion-icon");r.slot=n,r.lazy=!1,r.classList.add("ion-accordion-toggle-icon"),r.icon=i,r.setAttribute("aria-hidden","true"),t.appendChild(r)}}},this.expandAccordion=function(t){if(void 0===t&&(t=!1),t)o.state=4;else if(4!==o.state){var e=o,i=e.contentEl,r=e.contentElWrapper;void 0!==i&&void 0!==r&&(void 0!==o.currentRaf&&cancelAnimationFrame(o.currentRaf),o.shouldAnimate()?(0,a.r)((function(){o.state=8,o.currentRaf=(0,a.r)((function(){return(0,n.mG)(o,void 0,void 0,(function(){var t,o;return(0,n.Jh)(this,(function(e){switch(e.label){case 0:return t=r.offsetHeight,o=(0,a.t)(i,2e3),i.style.setProperty("max-height",t+"px"),[4,o];case 1:return e.sent(),this.state=4,i.style.removeProperty("max-height"),[2]}}))}))}))})):o.state=4)}},this.collapseAccordion=function(t){if(void 0===t&&(t=!1),t)o.state=1;else if(1!==o.state){var e=o.contentEl;void 0!==e&&(void 0!==o.currentRaf&&cancelAnimationFrame(o.currentRaf),o.shouldAnimate()?o.currentRaf=(0,a.r)((function(){return(0,n.mG)(o,void 0,void 0,(function(){var t,o=this;return(0,n.Jh)(this,(function(i){return t=e.offsetHeight,e.style.setProperty("max-height",t+"px"),(0,a.r)((function(){return(0,n.mG)(o,void 0,void 0,(function(){var t;return(0,n.Jh)(this,(function(o){switch(o.label){case 0:return t=(0,a.t)(e,2e3),this.state=2,[4,t];case 1:return o.sent(),this.state=1,e.style.removeProperty("max-height"),[2]}}))}))})),[2]}))}))})):o.state=1)}},this.shouldAnimate=function(){return"undefined"!==typeof window&&(!matchMedia("(prefers-reduced-motion: reduce)").matches&&(!!r.c.get("animated",!0)&&!(o.accordionGroupEl&&!o.accordionGroupEl.animated)))},this.updateState=function(t){return void 0===t&&(t=!1),(0,n.mG)(o,void 0,void 0,(function(){var o,e,i,r,a,d,c;return(0,n.Jh)(this,(function(n){return o=this.accordionGroupEl,e=this.value,o?(i=o.value,(Array.isArray(i)?i.includes(e):i===e)?(this.expandAccordion(t),this.isNext=this.isPrevious=!1):(this.collapseAccordion(t),r=this.getNextSibling(),void 0!==(a=r&&r.value)&&(this.isPrevious=Array.isArray(i)?i.includes(a):i===a),d=this.getPreviousSibling(),void 0!==(c=d&&d.value)&&(this.isNext=Array.isArray(i)?i.includes(c):i===c)),[2]):[2]}))}))},this.getNextSibling=function(){if(o.el){var t=o.el.nextElementSibling;if("ION-ACCORDION"===(null===t||void 0===t?void 0:t.tagName))return t}},this.getPreviousSibling=function(){if(o.el){var t=o.el.previousElementSibling;if("ION-ACCORDION"===(null===t||void 0===t?void 0:t.tagName))return t}}}return t.prototype.connectedCallback=function(){var t=this.accordionGroupEl=this.el&&this.el.closest("ion-accordion-group");t&&(this.updateState(!0),(0,a.a)(t,"ionChange",this.updateListener))},t.prototype.disconnectedCallback=function(){var t=this.accordionGroupEl;t&&(0,a.b)(t,"ionChange",this.updateListener)},t.prototype.componentDidLoad=function(){var t=this;this.setItemDefaults(),this.slotToggleIcon(),(0,a.r)((function(){var o=4===t.state||8===t.state;t.setAria(o)}))},t.prototype.toggleExpanded=function(){var t=this,o=t.accordionGroupEl,e=t.value,n=t.state;if(o){var i=1===n||2===n;o.requestAccordionToggle(e,i)}},t.prototype.render=function(){var t,o=this,e=this.disabled,n=this.readonly,a=(0,r.b)(this),d=4===this.state||8===this.state,c=d?"header expanded":"header",s=d?"content expanded":"content";return this.setAria(d),(0,i.h)(i.H,{class:(t={},t[a]=!0,t["accordion-expanding"]=8===this.state,t["accordion-expanded"]=4===this.state,t["accordion-collapsing"]=2===this.state,t["accordion-collapsed"]=1===this.state,t["accordion-next"]=this.isNext,t["accordion-previous"]=this.isPrevious,t["accordion-disabled"]=e,t["accordion-readonly"]=n,t["accordion-animated"]=r.c.getBoolean("animated",!0),t)},(0,i.h)("div",{onClick:function(){return o.toggleExpanded()},id:"header",part:c,"aria-controls":"content",ref:function(t){return o.headerEl=t}},(0,i.h)("slot",{name:"header"})),(0,i.h)("div",{id:"content",part:s,role:"region","aria-labelledby":"header",ref:function(t){return o.contentEl=t}},(0,i.h)("div",{id:"content-wrapper",ref:function(t){return o.contentElWrapper=t}},(0,i.h)("slot",{name:"content"}))))},Object.defineProperty(t,"delegatesFocus",{get:function(){return!0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"el",{get:function(){return(0,i.i)(this)},enumerable:!1,configurable:!0}),t}(),c=0;d.style={ios:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}:host(.accordion-next) ::slotted(ion-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}",md:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}"};var s=function(){function t(t){(0,i.r)(this,t),this.ionChange=(0,i.e)(this,"ionChange",7),this.animated=!0,this.disabled=!1,this.readonly=!1,this.expand="compact"}return t.prototype.valueChanged=function(){var t=this.value;!this.multiple&&Array.isArray(t)?this.value=t[0]:this.ionChange.emit({value:this.value})},t.prototype.disabledChanged=function(){return(0,n.mG)(this,void 0,void 0,(function(){var t,o,e,i;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return t=this.disabled,[4,this.getAccordions()];case 1:for(o=n.sent(),e=0,i=o;e<i.length;e++)i[e].disabled=t;return[2]}}))}))},t.prototype.readonlyChanged=function(){return(0,n.mG)(this,void 0,void 0,(function(){var t,o,e,i;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return t=this.readonly,[4,this.getAccordions()];case 1:for(o=n.sent(),e=0,i=o;e<i.length;e++)i[e].readonly=t;return[2]}}))}))},t.prototype.onKeydown=function(t){return(0,n.mG)(this,void 0,void 0,(function(){var o,e,i,r,a;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return(o=document.activeElement)&&(e="ION-ACCORDION"===o.tagName?o:o.closest("ion-accordion"))?e.closest("ion-accordion-group")!==this.el?[2]:[4,this.getAccordions()]:[2];case 1:return i=n.sent(),r=i.findIndex((function(t){return t===e})),-1===r?[2]:("ArrowDown"===t.key?a=this.findNextAccordion(i,r):"ArrowUp"===t.key?a=this.findPreviousAccordion(i,r):"Home"===t.key?a=i[0]:"End"===t.key&&(a=i[i.length-1]),void 0!==a&&a!==o&&a.focus(),[2])}}))}))},t.prototype.componentDidLoad=function(){return(0,n.mG)(this,void 0,void 0,(function(){return(0,n.Jh)(this,(function(t){return this.disabled&&this.disabledChanged(),this.readonly&&this.readonlyChanged(),[2]}))}))},t.prototype.requestAccordionToggle=function(t,o){return(0,n.mG)(this,void 0,void 0,(function(){var e,i,r,a,d,c,s,l;return(0,n.Jh)(this,(function(h){return i=(e=this).multiple,r=e.value,a=e.readonly,d=e.disabled,a||d||(o?i?(s=r||[],l=Array.isArray(s)?s:[s],c=l.find((function(o){return o===t})),void 0===c&&void 0!==t&&(this.value=(0,n.ev)((0,n.ev)([],l),[t]))):this.value=t:i?(s=r||[],l=Array.isArray(s)?s:[s],this.value=l.filter((function(o){return o!==t}))):this.value=void 0),[2]}))}))},t.prototype.findNextAccordion=function(t,o){var e=t[o+1];return void 0===e?t[0]:e},t.prototype.findPreviousAccordion=function(t,o){var e=t[o-1];return void 0===e?t[t.length-1]:e},t.prototype.getAccordions=function(){return(0,n.mG)(this,void 0,void 0,(function(){return(0,n.Jh)(this,(function(t){return[2,Array.from(this.el.querySelectorAll(":scope > ion-accordion"))]}))}))},t.prototype.render=function(){var t,o=this,e=o.disabled,n=o.readonly,a=o.expand,d=(0,r.b)(this);return(0,i.h)(i.H,{class:(t={},t[d]=!0,t["accordion-group-disabled"]=e,t["accordion-group-readonly"]=n,t["accordion-group-expand-"+a]=!0,t),role:"presentation"},(0,i.h)("slot",null))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,i.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{value:["valueChanged"],disabled:["disabledChanged"],readonly:["readonlyChanged"]}},enumerable:!1,configurable:!0}),t}();s.style={ios:":host{display:block}:host(.accordion-group-expand-inset){margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.accordion-group-expand-inset){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}",md:":host{display:block}:host(.accordion-group-expand-inset){margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.accordion-group-expand-inset){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"}}}]);
//# sourceMappingURL=1609.0c89d540.chunk.js.map