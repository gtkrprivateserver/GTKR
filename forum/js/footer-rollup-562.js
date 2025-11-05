/*
 =======================================================================*\
|| ###################################################################### ||
|| # vBulletin 5.6.2 Patch Level 2
|| # ------------------------------------------------------------------ # ||
|| # Copyright 2000-2021 MH Sub I, LLC dba vBulletin. All Rights Reserved.  # ||
|| # This file may not be redistributed in whole or significant part.   # ||
|| # ----------------- VBULLETIN IS NOT FREE SOFTWARE ----------------- # ||
|| # http://www.vbulletin.com | http://www.vbulletin.com/license.html   # ||
|| ###################################################################### ||
\*========================================================================*/
// ***************************
// js.compressed/jquery/jquery-migrate-3.1.0.min.js
// ***************************
/*! jQuery Migrate v3.1.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],i=1;i<=3;i++){if(+n[i]>+o[i])return 1;if(+n[i]<+o[i])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.1.0",n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var r={};function u(e){var t=n.console;r[e]||(r[e]=!0,s.migrateWarnings.push(e),t&&t.warn&&!s.migrateMute&&(t.warn("JQMIGRATE: "+e),s.migrateTrace&&t.trace&&t.trace()))}function t(e,t,r,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n),r},set:function(e){u(n),r=e}})}function o(e,t,r,n){e[t]=function(){return u(n),r.apply(this,arguments)}}s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){r={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("jQuery is not compatible with Quirks Mode");var i,a=s.fn.init,c=s.isNumeric,d=s.find,l=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,p=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;for(i in s.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(u("jQuery( '#' ) is not a valid selector"),t[0]=[]),a.apply(this,t)},s.fn.init.prototype=s.fn,s.find=function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&l.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(p,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("Attribute selector with '#' was not fixed: "+r[0])}}return d.apply(this,r)},d)Object.prototype.hasOwnProperty.call(d,i)&&(s.find[i]=d[i]);s.fn.size=function(){return u("jQuery.fn.size() is deprecated and removed; use the .length property"),this.length},s.parseJSON=function(){return u("jQuery.parseJSON is deprecated; use JSON.parse"),JSON.parse.apply(null,arguments)},s.isNumeric=function(e){var t,r,n=c(e),o=(r=(t=e)&&t.toString(),!s.isArray(t)&&0<=r-parseFloat(r)+1);return n!==o&&u("jQuery.isNumeric() should not be called on constructed objects"),o},e("3.3.0")&&o(s,"isWindow",function(e){return null!=e&&e===e.window},"jQuery.isWindow() is deprecated"),o(s,"holdReady",s.holdReady,"jQuery.holdReady is deprecated"),o(s,"unique",s.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),t(s.expr,"filters",s.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),t(s.expr,":",s.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.2.0")&&o(s,"nodeName",s.nodeName,"jQuery.nodeName is deprecated");var f=s.ajax;s.ajax=function(){var e=f.apply(this,arguments);return e.promise&&(o(e,"success",e.done,"jQXHR.success is deprecated and removed"),o(e,"error",e.fail,"jQXHR.error is deprecated and removed"),o(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e};var y=s.fn.removeAttr,m=s.fn.toggleClass,h=/\S+/g;s.fn.removeAttr=function(e){var r=this;return s.each(e.match(h),function(e,t){s.expr.match.bool.test(t)&&(u("jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),y.apply(this,arguments)};var g=!(s.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?m.apply(this,arguments):(u("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===t?"":s.data(this,"__className__")||"")}))});s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return g=!0,e=r.apply(this,arguments),g=!1,e})}),s.swap=function(e,t,r,n){var o,i,a={};for(i in g||u("jQuery.swap() is undocumented and deprecated"),t)a[i]=e.style[i],e.style[i]=t[i];for(i in o=r.apply(e,n||[]),t)e.style[i]=a[i];return o};var v=s.data;s.data=function(e,t,r){var n;if(t&&"object"==typeof t&&2===arguments.length){n=s.hasData(e)&&v.call(this,e);var o={};for(var i in t)i!==s.camelCase(i)?(u("jQuery.data() always sets/gets camelCased names: "+i),n[i]=t[i]):o[i]=t[i];return v.call(this,e,o),t}return t&&"string"==typeof t&&t!==s.camelCase(t)&&(n=s.hasData(e)&&v.call(this,e))&&t in n?(u("jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):v.apply(this,arguments)};function j(e){return e}var Q=s.Tween.prototype.run;s.Tween.prototype.run=function(){1<s.easing[this.easing].length&&(u("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=j),Q.apply(this,arguments)};var w=s.fx.interval||13,b="jQuery.fx.interval is deprecated";n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u(b),w},set:function(e){u(b),w=e}});var x=s.fn.load,k=s.event.add,A=s.event.fix;s.event.props=[],s.event.fixHooks={},t(s.event.props,"concat",s.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),s.event.fix=function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=A.call(this,e),n&&n.filter?n.filter(t,e):t},s.event.add=function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("jQuery(window).on('load'...) called after load event occurred"),k.apply(this,arguments)},s.each(["load","unload","error"],function(e,t){s.fn[t]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?x.apply(this,e):(u("jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){s.fn[r]=function(e,t){return u("jQuery.fn."+r+"() event shorthand is deprecated"),0<arguments.length?this.on(r,null,e,t):this.trigger(r)}}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("'ready' event is deprecated")}},s.fn.extend({bind:function(e,t,r){return u("jQuery.fn.bind() is deprecated"),this.on(e,null,t,r)},unbind:function(e,t){return u("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,r,n){return u("jQuery.fn.delegate() is deprecated"),this.on(t,e,r,n)},undelegate:function(e,t,r){return u("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return u("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}});var S=s.fn.offset;s.fn.offset=function(){var e,t=this[0],r={top:0,left:0};return t&&t.nodeType?(e=(t.ownerDocument||n.document).documentElement,s.contains(e,t)?S.apply(this,arguments):(u("jQuery.fn.offset() requires an element connected to a document"),r)):(u("jQuery.fn.offset() requires a valid DOM element"),r)};var q=s.param;s.param=function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),q.call(this,e,t)};var C=s.fn.andSelf||s.fn.addBack;s.fn.andSelf=function(){return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),C.apply(this,arguments)};var M=s.Deferred,R=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]];return s.Deferred=function(e){var i=M(),a=i.promise();return i.pipe=a.pipe=function(){var o=arguments;return u("deferred.pipe() is deprecated"),s.Deferred(function(n){s.each(R,function(e,t){var r=s.isFunction(o[e])&&o[e];i[t[1]](function(){var e=r&&r.apply(this,arguments);e&&s.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===a?n.promise():this,r?[e]:arguments)})}),o=null}).promise()},e&&e.call(i,i),i},s.Deferred.exceptionHook=M.exceptionHook,s});
;

// ***************************
// js.compressed/jquery/jquery-ui-1.11.4.custom.min.js
// ***************************
/*
 jQuery UI - v1.11.4 - 2016-01-06
 http://jqueryui.com
 Includes: core.js, widget.js, mouse.js, position.js, draggable.js, droppable.js, resizable.js, sortable.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, menu.js, slider.js, tabs.js, effect.js, effect-highlight.js
 Copyright jQuery Foundation and other contributors; Licensed MIT  jQuery UI Core 1.11.4
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/category/ui-core/
 jQuery UI Widget 1.11.4
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/jQuery.widget/
 jQuery UI Mouse 1.11.4
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/mouse/
 jQuery UI Position 1.11.4
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/position/
 jQuery UI Draggable 1.11.4
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/draggable/
 jQuery UI Droppable 1.11.4
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/droppable/
 jQuery UI Resizable 1.11.4
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/resizable/
 jQuery UI Sortable 1.11.4
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/sortable/
 jQuery UI Accordion 1.11.4
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/accordion/
 jQuery UI Menu 1.11.4
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/menu/
 jQuery UI Autocomplete 1.11.4
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/autocomplete/
 jQuery UI Button 1.11.4
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/button/
 jQuery UI Datepicker 1.11.4
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/datepicker/
 jQuery UI Dialog 1.11.4
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/dialog/
 jQuery UI Slider 1.11.4
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/slider/
 jQuery UI Tabs 1.11.4
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/tabs/
 jQuery UI Effects 1.11.4
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/category/effects-core/
 jQuery Color Animations v2.1.2
 https://github.com/jquery/jquery-color

 Copyright 2014 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 Date: Wed Jan 16 08:47:09 2013 -0600
 jQuery UI Effects Highlight 1.11.4
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/highlight-effect/
*/
(function(d){"function"===typeof define&&define.amd?define(["jquery"],d):d(jQuery)})(function(d){function O(a,b){var c=a.nodeName.toLowerCase();if("area"===c){b=a.parentNode;c=b.name;if(!a.href||!c||"map"!==b.nodeName.toLowerCase())return!1;a=d("img[usemap='#"+c+"']")[0];return!!a&&P(a)}return(/^(input|select|textarea|button|object)$/.test(c)?!a.disabled:"a"===c?a.href||b:b)&&P(a)}function P(a){return d.expr.filters.visible(a)&&!d(a).parents().addBack().filter(function(){return"hidden"===
d.css(this,"visibility")}).length}function W(a){for(var b;a.length&&a[0]!==document;){b=a.css("position");if("absolute"===b||"relative"===b||"fixed"===b)if(b=parseInt(a.css("zIndex"),10),!isNaN(b)&&0!==b)return b;a=a.parent()}return 0}function Q(){this._curInst=null;this._keyEvent=!1;this._disabledInputs=[];this._inDialog=this._datepickerShowing=!1;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";
this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:"January February March April May June July August September October November December".split(" "),monthNamesShort:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
dayNames:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),dayNamesShort:"Sun Mon Tue Wed Thu Fri Sat".split(" "),dayNamesMin:"Su Mo Tu We Th Fr Sa".split(" "),weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,
yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1};d.extend(this._defaults,this.regional[""]);this.regional.en=d.extend(!0,{},this.regional[""]);
this.regional["en-US"]=d.extend(!0,{},this.regional.en);this.dpDiv=R(d("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function R(a){return a.delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a","mouseout",function(){d(this).removeClass("ui-state-hover");-1!==this.className.indexOf("ui-datepicker-prev")&&d(this).removeClass("ui-datepicker-prev-hover");-1!==this.className.indexOf("ui-datepicker-next")&&
d(this).removeClass("ui-datepicker-next-hover")}).delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a","mouseover",S)}function S(){d.datepicker._isDisabledDatepicker(E.inline?E.dpDiv.parent()[0]:E.input[0])||(d(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),d(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&d(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&
d(this).addClass("ui-datepicker-next-hover"))}function I(a,b){d.extend(a,b);for(var c in b)null==b[c]&&(a[c]=b[c]);return a}d.ui=d.ui||{};if(!d.ui.version){d.extend(d.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});d.fn.extend({scrollParent:function(a){var b=this.css("position"),c="absolute"===b,e=a?/(auto|scroll|hidden)/:/(auto|scroll)/;a=this.parents().filter(function(){var a=
d(this);return c&&"static"===a.css("position")?!1:e.test(a.css("overflow")+a.css("overflow-y")+a.css("overflow-x"))}).eq(0);return"fixed"!==b&&a.length?a:d(this[0].ownerDocument||document)},uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&d(this).removeAttr("id")})}});d.extend(d.expr[":"],{data:d.expr.createPseudo?d.expr.createPseudo(function(a){return function(b){return!!d.data(b,
a)}}):function(a,b,c){return!!d.data(a,c[3])},focusable:function(a){return O(a,!isNaN(d.attr(a,"tabindex")))},tabbable:function(a){var b=d.attr(a,"tabindex"),c=isNaN(b);return(c||0<=b)&&O(a,!c)}});d("<a>").outerWidth(1).jquery||d.each(["Width","Height"],function(a,b){function c(a,b,c,f){d.each(e,function(){b-=parseFloat(d.css(a,"padding"+this))||0;c&&(b-=parseFloat(d.css(a,"border"+this+"Width"))||0);f&&(b-=parseFloat(d.css(a,"margin"+this))||0)});return b}var e="Width"===b?["Left","Right"]:["Top",
"Bottom"],f=b.toLowerCase(),g={innerWidth:d.fn.innerWidth,innerHeight:d.fn.innerHeight,outerWidth:d.fn.outerWidth,outerHeight:d.fn.outerHeight};d.fn["inner"+b]=function(a){return void 0===a?g["inner"+b].call(this):this.each(function(){d(this).css(f,c(this,a)+"px")})};d.fn["outer"+b]=function(a,e){return"number"!==typeof a?g["outer"+b].call(this,a):this.each(function(){d(this).css(f,c(this,a,!0,e)+"px")})}});d.fn.addBack||(d.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))});
d("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(d.fn.removeData=function(a){return function(b){return arguments.length?a.call(this,d.camelCase(b)):a.call(this)}}(d.fn.removeData));d.ui.ie=!!/msie [\w.]+/.exec(navigator.use
