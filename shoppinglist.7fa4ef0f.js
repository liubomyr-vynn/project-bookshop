!function(){function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},o=n.parcelRequire2d84;null==o&&((o=function(t){if(t in i)return i[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},n.parcelRequire2d84=o),o.register("iE7OH",(function(e,n){var i,r;t(e.exports,"register",(function(){return i}),(function(t){return i=t})),t(e.exports,"resolve",(function(){return r}),(function(t){return r=t}));var o={};i=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)o[e[n]]=t[e[n]]},r=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o.register("aNJCr",(function(e,n){var i;t(e.exports,"getBundleURL",(function(){return i}),(function(t){return i=t}));var r={};function o(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(t){var e=r[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return o(t[2])}return"/"}(),r[t]=e),e}})),o("iE7OH").register(JSON.parse('{"lmrm9":"shoppinglist.7fa4ef0f.js","kFa2i":"amazon.99ff1432.jpg","dZRhD":"bookstore.1c5b9883.jpg","hB25g":"applebooks.d7160da7.jpg","8eakY":"dump.09fecfe2.png","958Gc":"emptypage.9d82d098.png","flyHP":"index.d9ff9b64.js"}')),o("i8Q71"),o("5xh86"),o("7ghbD"),o("6mUVg"),o("iNWLi");var a=o("bpxeT"),s=o("2TvXO");o("c01wF");var c,u={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,c=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,i,r,o,a=Object.prototype.hasOwnProperty;for(r=1,o=arguments.length;r<o;r+=1)for(i in n=arguments[r])a.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var i=n(2),r=n(17),o=n(6);t.exports=function(t,e,n){i(t)?r(t,e,n):o(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){"use strict";var i=n(18),r=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(r(n,e.static),delete e.static),r(n.prototype,e),n}},function(t,e,n){"use strict";var i=n(2);t.exports=function(t,e,n){var r,o;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(o=e.length,r=n;n>=0&&r<o;r+=1)if(e[r]===t)return r;return-1}},function(t,e,n){"use strict";var i=n(29),r=n(30),o=n(5),a={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),r=o(t)?t(e):i(t,e);return n.innerHTML=r,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){r("pagination","UA-129987462-1")}};t.exports=a},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var i=n(13),r=n(7),o=n(0),a=n(1),s=n(20),c=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=r({init:function(t,e){this._options=o({},u,e),this._currentPage=0,this._view=new s(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),r=this._getPageIndex(n),o=this._getEdge(t);return e.leftPageNumber=o.left,e.rightPageNumber=o.right,e.prevMore=i>1,e.nextMore=i<r,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,r=this._getLastPage(),o=this._options.visiblePages,a=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(o/2),(n=(e=Math.max(t-i,1))+o-1)>r&&(e=Math.max(r-o+1,1),n=r)):(e=(a-1)*o+1,n=a*o,n=Math.min(n,r)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){a(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(l),t.exports=l},function(t,e,n){"use strict";var i=n(0),r=n(14),o=n(4),a=n(16),s=n(2),c=n(5),u=n(3),l=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){i(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(t){var e,n;r(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;r(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var i=this;o(t)?(t=t.split(l),u(t,(function(t){i._bindEvent(t,e,n)}))):a(t)&&(n=e,u(t,(function(t,e){i.on(e,t,n)})))},p.prototype.once=function(t,e,n){var i=this;if(a(t))return n=e,void u(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function r(){e.apply(n,arguments),i.off(t,r,n)}),n)},p.prototype._spliceMatches=function(t,e){var n,i=0;if(s(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var r=t===i.handler,o=e===i.context,a=r&&o;return a&&n._forgetContext(i.context),a}},p.prototype._offByEventName=function(t,e){var n=this,i=c(e),r=n._matchHandler(e);t=t.split(l),u(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,r):(u(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},p.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?u(t,(function(t,e){i.off(e,t)})):o(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),u(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},p.prototype.off=function(t,e){o(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):a(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,i,r;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(r=e[i]).handler.apply(r.context,n))return!1;i+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){"use strict";var i=n(1),r=n(15);t.exports=function(t){return!i(t)&&!r(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i=0,r=t.length;for(n=n||null;i<r&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){"use strict";var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var i=n(3),r=n(7),o=n(21),a=n(22),s=n(24),c=n(25),u=n(0),l=n(4),p=n(28),f=n(9),h={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},g=["first","prev","next","last"],d=["prev","next"],m=r({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},h,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(g,(function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(g,(function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(d,(function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,r=t.rightPageNumber;for(n=i;n<=r;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||c(e,this._firstItemClassName),n!==r||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();a(e,"click",(function(e){var n,i,r=o(e);s(e),(i=this._getButtonType(r))||(n=this._getPageNumber(r)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!f.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=m},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var i=n(4),r=n(3),o=n(23);function a(t,e,n,i){function a(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,a):"attachEvent"in t&&t.attachEvent("on"+e,a),function(t,e,n,i){var a=o(t,e),s=!1;r(a,(function(t){return t.handler!==n||(s=!0,!1)})),s||a.push({handler:n,wrappedHandler:i})}(t,e,n,a)}t.exports=function(t,e,n,o){i(e)?r(e.split(/\s+/g),(function(e){a(t,e,n,o)})):r(e,(function(e,i){a(t,i,e,n)}))}},function(t,e,n){"use strict";var i="_feEventKey";t.exports=function(t,e){var n,r=t[i];return r||(r=t[i]={}),(n=r[e])||(n=r[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var i=n(3),r=n(8),o=n(26),a=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),s=t.classList,c=[];s?i(n,(function(e){t.classList.add(e)})):((e=o(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){r(t,c)<0&&c.push(t)})),a(t,c))}},function(t,e,n){"use strict";var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var i=n(2),r=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),r(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var i=n(8),r=n(3),o=n(2),a=n(4),s=n(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,h=/^["']\w+["']$/,g=/"|'/g,d=/^-?\d+\.?\d*$/,m={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],o=0,a=0;return r(e,(function(t,r){0===t.indexOf("if")?o+=1:"/if"===t?o-=1:o||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(a,r)),a=r+1)})),i.push(e.slice(a)),{exps:n,sourcesInsideIf:i}}(t,e),o=!1,a="";return r(i.exps,(function(t,e){return(o=x(t,n))&&(a=y(i.sourcesInsideIf[e],n)),!o})),a},each:function(t,e,n){var i=x(t,n),a=o(i)?"@index":"@key",c={},u="";return r(i,(function(t,i){c[a]=i,c["@this"]=t,s(n,c),u+=y(e.slice(),n)})),u},with:function(t,e,n){var r=i("as",t),o=t[r+1],a=x(t.slice(0,r),n),c={};return c[o]=a,y(e,s(n,c))||""}},_=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,r=[],o=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,r.push(t.slice(o,i)),o=i+n[0].length,n=e.exec(t);return r.push(t.slice(o)),r};function v(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:h.test(t)?i=t.replace(g,""):u.test(t)?i=v((n=t.split(l))[0],e)[v(n[1],e)]:p.test(t)?i=v((n=t.split(f))[0],e)[n[1]]:d.test(t)&&(i=parseFloat(t)),i}function b(t,e,n){for(var i,r,o,s,c=m[t],u=1,l=2,p=e[l];u&&a(p);)0===p.indexOf(t)?u+=1:0===p.indexOf("/"+t)&&(u-=1,i=l),p=e[l+=2];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(r=0,o=i,(s=e.splice(r+1,o-r)).pop(),s),n),e}function x(t,e){var n=v(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return r(e,(function(t){i.push(v(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function y(t,e){for(var n,i,r,o=1,s=t[o];a(s);)i=(n=s.split(" "))[0],m[i]?(r=b(i,t.splice(o,t.length-o),e),t=t.concat(r)):t[o]=x(n,e),s=t[o+=2];return t.join("")}t.exports=function(t,e){return y(_(t,c),e)}},function(t,e,n){"use strict";var i=n(1),r=n(31);t.exports=function(t,e){var n=location.hostname,o="TOAST UI "+t+" for "+n+": Statistics",a=window.localStorage.getItem(o);(i(window.tui)||!1!==window.tui.usageStatistics)&&(a&&!function(t){return(new Date).getTime()-t>6048e5}(a)||(window.localStorage.setItem(o,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||r("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){"use strict";var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),r="";return i(e,(function(t,e){r+="&"+e+"="+t})),r=r.substring(1),n.src=t+"?"+r,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},u=c();var l;l=o("aNJCr").getBundleURL("lmrm9")+o("iE7OH").resolve("kFa2i");var p;p=o("aNJCr").getBundleURL("lmrm9")+o("iE7OH").resolve("dZRhD");var f;f=o("aNJCr").getBundleURL("lmrm9")+o("iE7OH").resolve("hB25g");var h;h=o("aNJCr").getBundleURL("lmrm9")+o("iE7OH").resolve("8eakY");var g;g=o("aNJCr").getBundleURL("lmrm9")+o("iE7OH").resolve("958Gc");var d={amazon:new URL(l),bookshop:new URL(p),openbook:new URL(f),dump:new URL(h),emptypage:new URL(g)},m=(document.querySelector(".shopping-carg-book-description-block"),document.querySelector(".shopping-carg-book-description"),document.querySelector("#tui-pagination-container")),_=document.querySelector("#info-block"),v=JSON.parse(localStorage.getItem("User-name"));null===v&&M();var b=v.listId,x={totalItems:b.length,itemsPerPage:3,visiblePages:2,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}" style="background-color: #111111"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},y=new(e(u))(m,x);function P(t){if(0===t.length)m.style.display="none",M();else if(t.length>0){t.length<=3&&(m.style.display="none"),y.hasListener("afterMove")||y.on("afterMove",(i=e(a)(e(s).mark((function t(n){var i;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i=n.page,localStorage.setItem("currentPage",i),t.next=5,E(i);case 5:k(t.sent),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),function(t){return i.apply(this,arguments)}));var n=localStorage.getItem("currentPage");n?y.movePageTo(Number(n)):y.movePageTo(1)}var i}function E(){return C.apply(this,arguments)}function C(){return C=e(a)(e(s).mark((function t(){var n,i,r,o,c,u,l=arguments;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=l.length>0&&void 0!==l[0]?l[0]:1,i=(n-1)*x.itemsPerPage+1,r=i+x.itemsPerPage-1,o=b.slice(i-1,r),c=o.map(function(){var t=e(a)(e(s).mark((function t(n){var i;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://books-backend.p.goit.global/books/".concat(n));case 2:return i=t.sent,t.abrupt("return",i.json());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=7,Promise.all(c);case 7:return u=t.sent,t.abrupt("return",u);case 9:case"end":return t.stop()}}),t)}))),C.apply(this,arguments)}function k(t){var n=function(e){for(var n=t[e],s=n.buy_links,c=0;c<s.length;c++)"Amazon"===s[c].name&&(i=s[c].url),"Apple Books"===s[c].name&&(r=s[c].url),"Bookshop"===s[c].name&&(o=s[c].url);a.push('<li class="shopping-carg '.concat(n._id,'" >\n    <ul class="card-container">\n    <li class="card-container__image">\n      <ul>\n      <div class="card-container__image-conteiner">\n        <li><img src="').concat(n.book_image,'" alt="').concat(n.title,'" /></li>\n      </div>\n        <li class="card-container__author">').concat(n.author,'</li>\n      </ul>\n    </li>\n    <li class="card-container__book-data">\n      <ul class="card-container__meta">\n        <li class="meta__title">').concat(n.title,'</li>\n        <li class="meta__category">').concat(n.list_name,'</li>\n      </ul>\n      <ul class="card-container__icons">\n        <li>\n          <a\n            class="shopping-carg-shop"\n            href="').concat(i,'"\n            target="_blank"\n            rel="noopener noreferrer"\n            aria-label="Іконка Amazon"\n          >\n            <img src="').concat(d.amazon,'" alt="Іконка Amazon" />\n          </a>\n        </li>\n        <li>\n          <a\n            class="book-shop"\n            href="').concat(r,'"\n            target="_blank"\n            rel="noopener noreferrer"\n            aria-label="Іконка Apple Books"\n          >\n            <img src="').concat(d.openbook,'" alt="Іконка Apple Books" />\n          </a>\n        </li>\n        <li>\n          <a\n            class="book-shop"\n            href="').concat(o,'"\n            target="_blank"\n            rel="noopener noreferrer"\n            aria-label="Іконка Bookshop"\n          >\n            <img src="').concat(d.bookshop,'" alt="Іконка Bookshop" />\n          </a>\n        </li>\n      </ul>\n    </li>\n\n    <li class="card-container__desc">').concat(n.description,'</li>\n  </ul>\n  <ul class="card-container-nm">\n  \n    <li class="card-container__image-nm">\n    <div class="card-container__div_image-nm">\n      <img class="margin-img" src="').concat(n.book_image,'" alt="').concat(n.title,'"  height="165"/></li>\n    </div>\n    </li>\n    <li class="card-container__book-data-nm">\n      <ul class="card-container__meta-nm">\n        <li class="meta__title-nm">').concat(n.title,'</li>\n        <li class="meta__category-nm">').concat(n.list_name,'</li>\n        <li class="card-container__desc-nm">').concat(n.description,'</li>\n        <div class="card-container__futer-nm">\n          <p class="card-container__author-nm">').concat(n.author,'</class=>\n          <ul class="card-container__icons-nm">\n            <li>\n              <a\n                class="shopping-carg-shop-nm"\n                href="').concat(i,'"\n                target="_blank"\n                rel="noopener noreferrer"\n                aria-label="Іконка Amazon"\n              >\n                <img src="').concat(d.amazon,'" alt="Іконка Amazon" />\n              </a>\n            </li>\n            <li>\n              <a\n                class="book-shop"\n                href="').concat(r,'"\n                target="_blank"\n                rel="noopener noreferrer"\n                aria-label="Іконка Apple Books"\n              >\n                <img src="').concat(d.openbook,'" alt="Іконка Apple Books" />\n              </a>\n            </li>\n            <li>\n              <a\n                class="book-shop"\n                href="').concat(o,'"\n                target="_blank"\n                rel="noopener noreferrer"\n                aria-label="Іконка Bookshop"\n              >\n                <img src="').concat(d.bookshop,'" alt="Іконка Bookshop" />\n              </a>\n            </li>\n          </ul>\n        </div>\n      </ul>\n    </li>\n  </ul>\n          <button class="button shopbtn card-delete" data-index="').concat(n._id,'">\n            <img src="').concat(d.dump,'" alt="" width=26px/>\n          </button>\n        </li>'))};w();for(var i="",r="",o="",a=[],s=0;s<t.length;s++)n(s);_.insertAdjacentHTML("afterbegin",a.join("")),document.querySelectorAll(".shopbtn").forEach((function(t){t.addEventListener("click",(function(){var n=t.dataset.index,i=b.indexOf(n);-1!==n&&b.splice(i,1),v.listId=b,localStorage.setItem("User-name",JSON.stringify(v)),y.reset(),x.totalItems=b.length,x.visiblePages=Math.ceil(b.length/3-1),y=new(e(u))(m,x),P(b)}))}))}function w(){_.innerHTML=""}function M(){w();var t='<div class="shopping-emptypage-list">\n  <li class="shopping-list-emptypage">\n  <p>"This page is empty, add some books and proceed to order."</p>\n  <img src="'.concat(d.emptypage,'" alt="dump button">\n  </li>\n  </div>');_.insertAdjacentHTML("afterbegin",t)}P(b),o("c01wF")}();
//# sourceMappingURL=shoppinglist.7fa4ef0f.js.map