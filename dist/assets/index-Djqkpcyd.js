(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function i0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zp={exports:{}},vl={},Qp={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),r0=Symbol.for("react.portal"),s0=Symbol.for("react.fragment"),a0=Symbol.for("react.strict_mode"),o0=Symbol.for("react.profiler"),l0=Symbol.for("react.provider"),c0=Symbol.for("react.context"),u0=Symbol.for("react.forward_ref"),d0=Symbol.for("react.suspense"),f0=Symbol.for("react.memo"),h0=Symbol.for("react.lazy"),mf=Symbol.iterator;function p0(t){return t===null||typeof t!="object"?null:(t=mf&&t[mf]||t["@@iterator"],typeof t=="function"?t:null)}var Jp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},em=Object.assign,tm={};function ws(t,e,n){this.props=t,this.context=e,this.refs=tm,this.updater=n||Jp}ws.prototype.isReactComponent={};ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function nm(){}nm.prototype=ws.prototype;function id(t,e,n){this.props=t,this.context=e,this.refs=tm,this.updater=n||Jp}var rd=id.prototype=new nm;rd.constructor=id;em(rd,ws.prototype);rd.isPureReactComponent=!0;var gf=Array.isArray,im=Object.prototype.hasOwnProperty,sd={current:null},rm={key:!0,ref:!0,__self:!0,__source:!0};function sm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)im.call(e,i)&&!rm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ea,type:t,key:s,ref:a,props:r,_owner:sd.current}}function m0(t,e){return{$$typeof:Ea,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ea}function g0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xf=/\/+/g;function Vl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?g0(""+t.key):e.toString(36)}function wo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ea:case r0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Vl(a,0):i,gf(r)?(n="",t!=null&&(n=t.replace(xf,"$&/")+"/"),wo(r,e,n,"",function(c){return c})):r!=null&&(ad(r)&&(r=m0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(xf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",gf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Vl(s,o);a+=wo(s,e,n,l,r)}else if(l=p0(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Vl(s,o++),a+=wo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ua(t,e,n){if(t==null)return t;var i=[],r=0;return wo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function x0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},bo={transition:null},v0={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:bo,ReactCurrentOwner:sd};function am(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:Ua,forEach:function(t,e,n){Ua(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ua(t,function(){e++}),e},toArray:function(t){return Ua(t,function(e){return e})||[]},only:function(t){if(!ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=ws;Ve.Fragment=s0;Ve.Profiler=o0;Ve.PureComponent=id;Ve.StrictMode=a0;Ve.Suspense=d0;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v0;Ve.act=am;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=em({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=sd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)im.call(e,l)&&!rm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ea,type:t.type,key:r,ref:s,props:i,_owner:a}};Ve.createContext=function(t){return t={$$typeof:c0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:l0,_context:t},t.Consumer=t};Ve.createElement=sm;Ve.createFactory=function(t){var e=sm.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:u0,render:t}};Ve.isValidElement=ad;Ve.lazy=function(t){return{$$typeof:h0,_payload:{_status:-1,_result:t},_init:x0}};Ve.memo=function(t,e){return{$$typeof:f0,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=bo.transition;bo.transition={};try{t()}finally{bo.transition=e}};Ve.unstable_act=am;Ve.useCallback=function(t,e){return $t.current.useCallback(t,e)};Ve.useContext=function(t){return $t.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return $t.current.useEffect(t,e)};Ve.useId=function(){return $t.current.useId()};Ve.useImperativeHandle=function(t,e,n){return $t.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return $t.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return $t.current.useReducer(t,e,n)};Ve.useRef=function(t){return $t.current.useRef(t)};Ve.useState=function(t){return $t.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return $t.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return $t.current.useTransition()};Ve.version="18.3.1";Qp.exports=Ve;var _e=Qp.exports;const _0=i0(_e);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0=_e,S0=Symbol.for("react.element"),M0=Symbol.for("react.fragment"),E0=Object.prototype.hasOwnProperty,w0=y0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b0={key:!0,ref:!0,__self:!0,__source:!0};function om(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)E0.call(e,i)&&!b0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:S0,type:t,key:s,ref:a,props:r,_owner:w0.current}}vl.Fragment=M0;vl.jsx=om;vl.jsxs=om;Zp.exports=vl;var u=Zp.exports,Yc={},lm={exports:{}},mn={},cm={exports:{}},um={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,O){var U=L.length;L.push(O);e:for(;0<U;){var Y=U-1>>>1,ne=L[Y];if(0<r(ne,O))L[Y]=O,L[U]=ne,U=Y;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var O=L[0],U=L.pop();if(U!==O){L[0]=U;e:for(var Y=0,ne=L.length,me=ne>>>1;Y<me;){var G=2*(Y+1)-1,J=L[G],ce=G+1,we=L[ce];if(0>r(J,U))ce<ne&&0>r(we,J)?(L[Y]=we,L[ce]=U,Y=ce):(L[Y]=J,L[G]=U,Y=G);else if(ce<ne&&0>r(we,U))L[Y]=we,L[ce]=U,Y=ce;else break e}}return O}function r(L,O){var U=L.sortIndex-O.sortIndex;return U!==0?U:L.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,f=null,p=3,g=!1,_=!1,S=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=L)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function y(L){if(S=!1,x(L),!_)if(n(l)!==null)_=!0,X(w);else{var O=n(c);O!==null&&Q(y,O.startTime-L)}}function w(L,O){_=!1,S&&(S=!1,d(N),N=-1),g=!0;var U=p;try{for(x(O),f=n(l);f!==null&&(!(f.expirationTime>O)||L&&!C());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,p=f.priorityLevel;var ne=Y(f.expirationTime<=O);O=t.unstable_now(),typeof ne=="function"?f.callback=ne:f===n(l)&&i(l),x(O)}else i(l);f=n(l)}if(f!==null)var me=!0;else{var G=n(c);G!==null&&Q(y,G.startTime-O),me=!1}return me}finally{f=null,p=U,g=!1}}var A=!1,b=null,N=-1,V=5,M=-1;function C(){return!(t.unstable_now()-M<V)}function $(){if(b!==null){var L=t.unstable_now();M=L;var O=!0;try{O=b(!0,L)}finally{O?Z():(A=!1,b=null)}}else A=!1}var Z;if(typeof v=="function")Z=function(){v($)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,q=P.port2;P.port1.onmessage=$,Z=function(){q.postMessage(null)}}else Z=function(){m($,0)};function X(L){b=L,A||(A=!0,Z())}function Q(L,O){N=m(function(){L(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,X(w))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(p){case 1:case 2:case 3:var O=3;break;default:O=p}var U=p;p=O;try{return L()}finally{p=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,O){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var U=p;p=L;try{return O()}finally{p=U}},t.unstable_scheduleCallback=function(L,O,U){var Y=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?Y+U:Y):U=Y,L){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=U+ne,L={id:h++,callback:O,priorityLevel:L,startTime:U,expirationTime:ne,sortIndex:-1},U>Y?(L.sortIndex=U,e(c,L),n(l)===null&&L===n(c)&&(S?(d(N),N=-1):S=!0,Q(y,U-Y))):(L.sortIndex=ne,e(l,L),_||g||(_=!0,X(w))),L},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(L){var O=p;return function(){var U=p;p=O;try{return L.apply(this,arguments)}finally{p=U}}}})(um);cm.exports=um;var T0=cm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0=_e,pn=T0;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dm=new Set,sa={};function Tr(t,e){hs(t,e),hs(t+"Capture",e)}function hs(t,e){for(sa[t]=e,t=0;t<e.length;t++)dm.add(e[t])}var fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=Object.prototype.hasOwnProperty,C0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vf={},_f={};function R0(t){return Kc.call(_f,t)?!0:Kc.call(vf,t)?!1:C0.test(t)?_f[t]=!0:(vf[t]=!0,!1)}function N0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function P0(t,e,n,i){if(e===null||typeof e>"u"||N0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var od=/[\-:]([a-z])/g;function ld(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(od,ld);It[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(od,ld);It[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(od,ld);It[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function cd(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(P0(e,n,r,i)&&(n=null),i||r===null?R0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var xi=A0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ka=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),ud=Symbol.for("react.strict_mode"),Zc=Symbol.for("react.profiler"),fm=Symbol.for("react.provider"),hm=Symbol.for("react.context"),dd=Symbol.for("react.forward_ref"),Qc=Symbol.for("react.suspense"),Jc=Symbol.for("react.suspense_list"),fd=Symbol.for("react.memo"),bi=Symbol.for("react.lazy"),pm=Symbol.for("react.offscreen"),yf=Symbol.iterator;function Ns(t){return t===null||typeof t!="object"?null:(t=yf&&t[yf]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,Wl;function Vs(t){if(Wl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wl=e&&e[1]||""}return`
`+Wl+t}var Xl=!1;function $l(t,e){if(!t||Xl)return"";Xl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Xl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vs(t):""}function L0(t){switch(t.tag){case 5:return Vs(t.type);case 16:return Vs("Lazy");case 13:return Vs("Suspense");case 19:return Vs("SuspenseList");case 0:case 2:case 15:return t=$l(t.type,!1),t;case 11:return t=$l(t.type.render,!1),t;case 1:return t=$l(t.type,!0),t;default:return""}}function eu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xr:return"Fragment";case Wr:return"Portal";case Zc:return"Profiler";case ud:return"StrictMode";case Qc:return"Suspense";case Jc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case hm:return(t.displayName||"Context")+".Consumer";case fm:return(t._context.displayName||"Context")+".Provider";case dd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fd:return e=t.displayName||null,e!==null?e:eu(t.type)||"Memo";case bi:e=t._payload,t=t._init;try{return eu(t(e))}catch{}}return null}function D0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return eu(e);case 8:return e===ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function I0(t){var e=mm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fa(t){t._valueTracker||(t._valueTracker=I0(t))}function gm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=mm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Fo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function tu(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Vi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xm(t,e){e=e.checked,e!=null&&cd(t,"checked",e,!1)}function nu(t,e){xm(t,e);var n=Vi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?iu(t,e.type,n):e.hasOwnProperty("defaultValue")&&iu(t,e.type,Vi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function iu(t,e,n){(e!=="number"||Fo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ws=Array.isArray;function ss(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Vi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ru(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ef(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Ws(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vi(n)}}function vm(t,e){var n=Vi(e.value),i=Vi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function wf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _m(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function su(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_m(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Oa,ym=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Oa=Oa||document.createElement("div"),Oa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Oa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function aa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},U0=["Webkit","ms","Moz","O"];Object.keys(qs).forEach(function(t){U0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qs[e]=qs[t]})});function Sm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qs.hasOwnProperty(t)&&qs[t]?(""+e).trim():e+"px"}function Mm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Sm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var k0=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function au(t,e){if(e){if(k0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function ou(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lu=null;function hd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cu=null,as=null,os=null;function bf(t){if(t=Ta(t)){if(typeof cu!="function")throw Error(te(280));var e=t.stateNode;e&&(e=El(e),cu(t.stateNode,t.type,e))}}function Em(t){as?os?os.push(t):os=[t]:as=t}function wm(){if(as){var t=as,e=os;if(os=as=null,bf(t),e)for(t=0;t<e.length;t++)bf(e[t])}}function bm(t,e){return t(e)}function Tm(){}var ql=!1;function Am(t,e,n){if(ql)return t(e,n);ql=!0;try{return bm(t,e,n)}finally{ql=!1,(as!==null||os!==null)&&(Tm(),wm())}}function oa(t,e){var n=t.stateNode;if(n===null)return null;var i=El(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var uu=!1;if(fi)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){uu=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{uu=!1}function F0(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Ys=!1,Oo=null,zo=!1,du=null,O0={onError:function(t){Ys=!0,Oo=t}};function z0(t,e,n,i,r,s,a,o,l){Ys=!1,Oo=null,F0.apply(O0,arguments)}function B0(t,e,n,i,r,s,a,o,l){if(z0.apply(this,arguments),Ys){if(Ys){var c=Oo;Ys=!1,Oo=null}else throw Error(te(198));zo||(zo=!0,du=c)}}function Ar(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Cm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tf(t){if(Ar(t)!==t)throw Error(te(188))}function H0(t){var e=t.alternate;if(!e){if(e=Ar(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Tf(r),t;if(s===i)return Tf(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function Rm(t){return t=H0(t),t!==null?Nm(t):null}function Nm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Nm(t);if(e!==null)return e;t=t.sibling}return null}var Pm=pn.unstable_scheduleCallback,Af=pn.unstable_cancelCallback,G0=pn.unstable_shouldYield,j0=pn.unstable_requestPaint,gt=pn.unstable_now,V0=pn.unstable_getCurrentPriorityLevel,pd=pn.unstable_ImmediatePriority,Lm=pn.unstable_UserBlockingPriority,Bo=pn.unstable_NormalPriority,W0=pn.unstable_LowPriority,Dm=pn.unstable_IdlePriority,_l=null,Yn=null;function X0(t){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(_l,t,void 0,(t.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:Y0,$0=Math.log,q0=Math.LN2;function Y0(t){return t>>>=0,t===0?32:31-($0(t)/q0|0)|0}var za=64,Ba=4194304;function Xs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ho(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Xs(o):(s&=a,s!==0&&(i=Xs(s)))}else a=n&~r,a!==0?i=Xs(a):s!==0&&(i=Xs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Fn(e),r=1<<n,i|=t[n],e&=~r;return i}function K0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Fn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=K0(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function fu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Im(){var t=za;return za<<=1,!(za&4194240)&&(za=64),t}function Yl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Fn(e),t[e]=n}function Q0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Fn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function md(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Fn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function Um(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var km,gd,Fm,Om,zm,hu=!1,Ha=[],Di=null,Ii=null,Ui=null,la=new Map,ca=new Map,Ai=[],J0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cf(t,e){switch(t){case"focusin":case"focusout":Di=null;break;case"dragenter":case"dragleave":Ii=null;break;case"mouseover":case"mouseout":Ui=null;break;case"pointerover":case"pointerout":la.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ca.delete(e.pointerId)}}function Ls(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ta(e),e!==null&&gd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ev(t,e,n,i,r){switch(e){case"focusin":return Di=Ls(Di,t,e,n,i,r),!0;case"dragenter":return Ii=Ls(Ii,t,e,n,i,r),!0;case"mouseover":return Ui=Ls(Ui,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return la.set(s,Ls(la.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ca.set(s,Ls(ca.get(s)||null,t,e,n,i,r)),!0}return!1}function Bm(t){var e=fr(t.target);if(e!==null){var n=Ar(e);if(n!==null){if(e=n.tag,e===13){if(e=Cm(n),e!==null){t.blockedOn=e,zm(t.priority,function(){Fm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function To(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=pu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);lu=i,n.target.dispatchEvent(i),lu=null}else return e=Ta(n),e!==null&&gd(e),t.blockedOn=n,!1;e.shift()}return!0}function Rf(t,e,n){To(t)&&n.delete(e)}function tv(){hu=!1,Di!==null&&To(Di)&&(Di=null),Ii!==null&&To(Ii)&&(Ii=null),Ui!==null&&To(Ui)&&(Ui=null),la.forEach(Rf),ca.forEach(Rf)}function Ds(t,e){t.blockedOn===e&&(t.blockedOn=null,hu||(hu=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,tv)))}function ua(t){function e(r){return Ds(r,t)}if(0<Ha.length){Ds(Ha[0],t);for(var n=1;n<Ha.length;n++){var i=Ha[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Di!==null&&Ds(Di,t),Ii!==null&&Ds(Ii,t),Ui!==null&&Ds(Ui,t),la.forEach(e),ca.forEach(e),n=0;n<Ai.length;n++)i=Ai[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ai.length&&(n=Ai[0],n.blockedOn===null);)Bm(n),n.blockedOn===null&&Ai.shift()}var ls=xi.ReactCurrentBatchConfig,Go=!0;function nv(t,e,n,i){var r=Qe,s=ls.transition;ls.transition=null;try{Qe=1,xd(t,e,n,i)}finally{Qe=r,ls.transition=s}}function iv(t,e,n,i){var r=Qe,s=ls.transition;ls.transition=null;try{Qe=4,xd(t,e,n,i)}finally{Qe=r,ls.transition=s}}function xd(t,e,n,i){if(Go){var r=pu(t,e,n,i);if(r===null)sc(t,e,i,jo,n),Cf(t,i);else if(ev(r,t,e,n,i))i.stopPropagation();else if(Cf(t,i),e&4&&-1<J0.indexOf(t)){for(;r!==null;){var s=Ta(r);if(s!==null&&km(s),s=pu(t,e,n,i),s===null&&sc(t,e,i,jo,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else sc(t,e,i,null,n)}}var jo=null;function pu(t,e,n,i){if(jo=null,t=hd(i),t=fr(t),t!==null)if(e=Ar(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Cm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return jo=t,null}function Hm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(V0()){case pd:return 1;case Lm:return 4;case Bo:case W0:return 16;case Dm:return 536870912;default:return 16}default:return 16}}var Ni=null,vd=null,Ao=null;function Gm(){if(Ao)return Ao;var t,e=vd,n=e.length,i,r="value"in Ni?Ni.value:Ni.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Ao=r.slice(t,1<i?1-i:void 0)}function Co(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ga(){return!0}function Nf(){return!1}function gn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ga:Nf,this.isPropagationStopped=Nf,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ga)},persist:function(){},isPersistent:Ga}),e}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_d=gn(bs),ba=ft({},bs,{view:0,detail:0}),rv=gn(ba),Kl,Zl,Is,yl=ft({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(Kl=t.screenX-Is.screenX,Zl=t.screenY-Is.screenY):Zl=Kl=0,Is=t),Kl)},movementY:function(t){return"movementY"in t?t.movementY:Zl}}),Pf=gn(yl),sv=ft({},yl,{dataTransfer:0}),av=gn(sv),ov=ft({},ba,{relatedTarget:0}),Ql=gn(ov),lv=ft({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),cv=gn(lv),uv=ft({},bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dv=gn(uv),fv=ft({},bs,{data:0}),Lf=gn(fv),hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=mv[t])?!!e[t]:!1}function yd(){return gv}var xv=ft({},ba,{key:function(t){if(t.key){var e=hv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Co(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yd,charCode:function(t){return t.type==="keypress"?Co(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Co(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vv=gn(xv),_v=ft({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Df=gn(_v),yv=ft({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yd}),Sv=gn(yv),Mv=ft({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ev=gn(Mv),wv=ft({},yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bv=gn(wv),Tv=[9,13,27,32],Sd=fi&&"CompositionEvent"in window,Ks=null;fi&&"documentMode"in document&&(Ks=document.documentMode);var Av=fi&&"TextEvent"in window&&!Ks,jm=fi&&(!Sd||Ks&&8<Ks&&11>=Ks),If=" ",Uf=!1;function Vm(t,e){switch(t){case"keyup":return Tv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function Cv(t,e){switch(t){case"compositionend":return Wm(e);case"keypress":return e.which!==32?null:(Uf=!0,If);case"textInput":return t=e.data,t===If&&Uf?null:t;default:return null}}function Rv(t,e){if($r)return t==="compositionend"||!Sd&&Vm(t,e)?(t=Gm(),Ao=vd=Ni=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jm&&e.locale!=="ko"?null:e.data;default:return null}}var Nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Nv[t.type]:e==="textarea"}function Xm(t,e,n,i){Em(i),e=Vo(e,"onChange"),0<e.length&&(n=new _d("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Zs=null,da=null;function Pv(t){ig(t,0)}function Sl(t){var e=Kr(t);if(gm(e))return t}function Lv(t,e){if(t==="change")return e}var $m=!1;if(fi){var Jl;if(fi){var ec="oninput"in document;if(!ec){var Ff=document.createElement("div");Ff.setAttribute("oninput","return;"),ec=typeof Ff.oninput=="function"}Jl=ec}else Jl=!1;$m=Jl&&(!document.documentMode||9<document.documentMode)}function Of(){Zs&&(Zs.detachEvent("onpropertychange",qm),da=Zs=null)}function qm(t){if(t.propertyName==="value"&&Sl(da)){var e=[];Xm(e,da,t,hd(t)),Am(Pv,e)}}function Dv(t,e,n){t==="focusin"?(Of(),Zs=e,da=n,Zs.attachEvent("onpropertychange",qm)):t==="focusout"&&Of()}function Iv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(da)}function Uv(t,e){if(t==="click")return Sl(e)}function kv(t,e){if(t==="input"||t==="change")return Sl(e)}function Fv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:Fv;function fa(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Kc.call(e,r)||!Bn(t[r],e[r]))return!1}return!0}function zf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bf(t,e){var n=zf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zf(n)}}function Ym(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ym(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Km(){for(var t=window,e=Fo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fo(t.document)}return e}function Md(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ov(t){var e=Km(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ym(n.ownerDocument.documentElement,n)){if(i!==null&&Md(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Bf(n,s);var a=Bf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zv=fi&&"documentMode"in document&&11>=document.documentMode,qr=null,mu=null,Qs=null,gu=!1;function Hf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gu||qr==null||qr!==Fo(i)||(i=qr,"selectionStart"in i&&Md(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qs&&fa(Qs,i)||(Qs=i,i=Vo(mu,"onSelect"),0<i.length&&(e=new _d("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=qr)))}function ja(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Yr={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionend:ja("Transition","TransitionEnd")},tc={},Zm={};fi&&(Zm=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function Ml(t){if(tc[t])return tc[t];if(!Yr[t])return t;var e=Yr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Zm)return tc[t]=e[n];return t}var Qm=Ml("animationend"),Jm=Ml("animationiteration"),eg=Ml("animationstart"),tg=Ml("transitionend"),ng=new Map,Gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(t,e){ng.set(t,e),Tr(e,[t])}for(var nc=0;nc<Gf.length;nc++){var ic=Gf[nc],Bv=ic.toLowerCase(),Hv=ic[0].toUpperCase()+ic.slice(1);qi(Bv,"on"+Hv)}qi(Qm,"onAnimationEnd");qi(Jm,"onAnimationIteration");qi(eg,"onAnimationStart");qi("dblclick","onDoubleClick");qi("focusin","onFocus");qi("focusout","onBlur");qi(tg,"onTransitionEnd");hs("onMouseEnter",["mouseout","mouseover"]);hs("onMouseLeave",["mouseout","mouseover"]);hs("onPointerEnter",["pointerout","pointerover"]);hs("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gv=new Set("cancel close invalid load scroll toggle".split(" ").concat($s));function jf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,B0(i,e,void 0,t),t.currentTarget=null}function ig(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;jf(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;jf(r,o,c),s=l}}}if(zo)throw t=du,zo=!1,du=null,t}function it(t,e){var n=e[Su];n===void 0&&(n=e[Su]=new Set);var i=t+"__bubble";n.has(i)||(rg(e,t,2,!1),n.add(i))}function rc(t,e,n){var i=0;e&&(i|=4),rg(n,t,i,e)}var Va="_reactListening"+Math.random().toString(36).slice(2);function ha(t){if(!t[Va]){t[Va]=!0,dm.forEach(function(n){n!=="selectionchange"&&(Gv.has(n)||rc(n,!1,t),rc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Va]||(e[Va]=!0,rc("selectionchange",!1,e))}}function rg(t,e,n,i){switch(Hm(e)){case 1:var r=nv;break;case 4:r=iv;break;default:r=xd}n=r.bind(null,e,n,t),r=void 0,!uu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function sc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=fr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Am(function(){var c=s,h=hd(n),f=[];e:{var p=ng.get(t);if(p!==void 0){var g=_d,_=t;switch(t){case"keypress":if(Co(n)===0)break e;case"keydown":case"keyup":g=vv;break;case"focusin":_="focus",g=Ql;break;case"focusout":_="blur",g=Ql;break;case"beforeblur":case"afterblur":g=Ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Pf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Sv;break;case Qm:case Jm:case eg:g=cv;break;case tg:g=Ev;break;case"scroll":g=rv;break;case"wheel":g=bv;break;case"copy":case"cut":case"paste":g=dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Df}var S=(e&4)!==0,m=!S&&t==="scroll",d=S?p!==null?p+"Capture":null:p;S=[];for(var v=c,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,d!==null&&(y=oa(v,d),y!=null&&S.push(pa(v,y,x)))),m)break;v=v.return}0<S.length&&(p=new g(p,_,null,n,h),f.push({event:p,listeners:S}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==lu&&(_=n.relatedTarget||n.fromElement)&&(fr(_)||_[hi]))break e;if((g||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=c,_=_?fr(_):null,_!==null&&(m=Ar(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=c),g!==_)){if(S=Pf,y="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=Df,y="onPointerLeave",d="onPointerEnter",v="pointer"),m=g==null?p:Kr(g),x=_==null?p:Kr(_),p=new S(y,v+"leave",g,n,h),p.target=m,p.relatedTarget=x,y=null,fr(h)===c&&(S=new S(d,v+"enter",_,n,h),S.target=x,S.relatedTarget=m,y=S),m=y,g&&_)t:{for(S=g,d=_,v=0,x=S;x;x=Cr(x))v++;for(x=0,y=d;y;y=Cr(y))x++;for(;0<v-x;)S=Cr(S),v--;for(;0<x-v;)d=Cr(d),x--;for(;v--;){if(S===d||d!==null&&S===d.alternate)break t;S=Cr(S),d=Cr(d)}S=null}else S=null;g!==null&&Vf(f,p,g,S,!1),_!==null&&m!==null&&Vf(f,m,_,S,!0)}}e:{if(p=c?Kr(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var w=Lv;else if(kf(p))if($m)w=kv;else{w=Iv;var A=Dv}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(w=Uv);if(w&&(w=w(t,c))){Xm(f,w,n,h);break e}A&&A(t,p,c),t==="focusout"&&(A=p._wrapperState)&&A.controlled&&p.type==="number"&&iu(p,"number",p.value)}switch(A=c?Kr(c):window,t){case"focusin":(kf(A)||A.contentEditable==="true")&&(qr=A,mu=c,Qs=null);break;case"focusout":Qs=mu=qr=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,Hf(f,n,h);break;case"selectionchange":if(zv)break;case"keydown":case"keyup":Hf(f,n,h)}var b;if(Sd)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else $r?Vm(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(jm&&n.locale!=="ko"&&($r||N!=="onCompositionStart"?N==="onCompositionEnd"&&$r&&(b=Gm()):(Ni=h,vd="value"in Ni?Ni.value:Ni.textContent,$r=!0)),A=Vo(c,N),0<A.length&&(N=new Lf(N,t,null,n,h),f.push({event:N,listeners:A}),b?N.data=b:(b=Wm(n),b!==null&&(N.data=b)))),(b=Av?Cv(t,n):Rv(t,n))&&(c=Vo(c,"onBeforeInput"),0<c.length&&(h=new Lf("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=b))}ig(f,e)})}function pa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vo(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=oa(t,n),s!=null&&i.unshift(pa(t,s,r)),s=oa(t,e),s!=null&&i.push(pa(t,s,r))),t=t.return}return i}function Cr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vf(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=oa(n,s),l!=null&&a.unshift(pa(n,l,o))):r||(l=oa(n,s),l!=null&&a.push(pa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var jv=/\r\n?/g,Vv=/\u0000|\uFFFD/g;function Wf(t){return(typeof t=="string"?t:""+t).replace(jv,`
`).replace(Vv,"")}function Wa(t,e,n){if(e=Wf(e),Wf(t)!==e&&n)throw Error(te(425))}function Wo(){}var xu=null,vu=null;function _u(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yu=typeof setTimeout=="function"?setTimeout:void 0,Wv=typeof clearTimeout=="function"?clearTimeout:void 0,Xf=typeof Promise=="function"?Promise:void 0,Xv=typeof queueMicrotask=="function"?queueMicrotask:typeof Xf<"u"?function(t){return Xf.resolve(null).then(t).catch($v)}:yu;function $v(t){setTimeout(function(){throw t})}function ac(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ua(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ua(e)}function ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $f(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ts=Math.random().toString(36).slice(2),$n="__reactFiber$"+Ts,ma="__reactProps$"+Ts,hi="__reactContainer$"+Ts,Su="__reactEvents$"+Ts,qv="__reactListeners$"+Ts,Yv="__reactHandles$"+Ts;function fr(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hi]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$f(t);t!==null;){if(n=t[$n])return n;t=$f(t)}return e}t=n,n=t.parentNode}return null}function Ta(t){return t=t[$n]||t[hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function El(t){return t[ma]||null}var Mu=[],Zr=-1;function Yi(t){return{current:t}}function st(t){0>Zr||(t.current=Mu[Zr],Mu[Zr]=null,Zr--)}function nt(t,e){Zr++,Mu[Zr]=t.current,t.current=e}var Wi={},Ht=Yi(Wi),en=Yi(!1),yr=Wi;function ps(t,e){var n=t.type.contextTypes;if(!n)return Wi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function Xo(){st(en),st(Ht)}function qf(t,e,n){if(Ht.current!==Wi)throw Error(te(168));nt(Ht,e),nt(en,n)}function sg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,D0(t)||"Unknown",r));return ft({},n,i)}function $o(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wi,yr=Ht.current,nt(Ht,t),nt(en,en.current),!0}function Yf(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=sg(t,e,yr),i.__reactInternalMemoizedMergedChildContext=t,st(en),st(Ht),nt(Ht,t)):st(en),nt(en,n)}var si=null,wl=!1,oc=!1;function ag(t){si===null?si=[t]:si.push(t)}function Kv(t){wl=!0,ag(t)}function Ki(){if(!oc&&si!==null){oc=!0;var t=0,e=Qe;try{var n=si;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}si=null,wl=!1}catch(r){throw si!==null&&(si=si.slice(t+1)),Pm(pd,Ki),r}finally{Qe=e,oc=!1}}return null}var Qr=[],Jr=0,qo=null,Yo=0,yn=[],Sn=0,Sr=null,li=1,ci="";function ar(t,e){Qr[Jr++]=Yo,Qr[Jr++]=qo,qo=t,Yo=e}function og(t,e,n){yn[Sn++]=li,yn[Sn++]=ci,yn[Sn++]=Sr,Sr=t;var i=li;t=ci;var r=32-Fn(i)-1;i&=~(1<<r),n+=1;var s=32-Fn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,li=1<<32-Fn(e)+r|n<<r|i,ci=s+t}else li=1<<s|n<<r|i,ci=t}function Ed(t){t.return!==null&&(ar(t,1),og(t,1,0))}function wd(t){for(;t===qo;)qo=Qr[--Jr],Qr[Jr]=null,Yo=Qr[--Jr],Qr[Jr]=null;for(;t===Sr;)Sr=yn[--Sn],yn[Sn]=null,ci=yn[--Sn],yn[Sn]=null,li=yn[--Sn],yn[Sn]=null}var fn=null,dn=null,lt=!1,In=null;function lg(t,e){var n=En(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Kf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fn=t,dn=ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fn=t,dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Sr!==null?{id:li,overflow:ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=En(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fn=t,dn=null,!0):!1;default:return!1}}function Eu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wu(t){if(lt){var e=dn;if(e){var n=e;if(!Kf(t,e)){if(Eu(t))throw Error(te(418));e=ki(n.nextSibling);var i=fn;e&&Kf(t,e)?lg(i,n):(t.flags=t.flags&-4097|2,lt=!1,fn=t)}}else{if(Eu(t))throw Error(te(418));t.flags=t.flags&-4097|2,lt=!1,fn=t}}}function Zf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function Xa(t){if(t!==fn)return!1;if(!lt)return Zf(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_u(t.type,t.memoizedProps)),e&&(e=dn)){if(Eu(t))throw cg(),Error(te(418));for(;e;)lg(t,e),e=ki(e.nextSibling)}if(Zf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dn=ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dn=null}}else dn=fn?ki(t.stateNode.nextSibling):null;return!0}function cg(){for(var t=dn;t;)t=ki(t.nextSibling)}function ms(){dn=fn=null,lt=!1}function bd(t){In===null?In=[t]:In.push(t)}var Zv=xi.ReactCurrentBatchConfig;function Us(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function $a(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qf(t){var e=t._init;return e(t._payload)}function ug(t){function e(d,v){if(t){var x=d.deletions;x===null?(d.deletions=[v],d.flags|=16):x.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Bi(d,v),d.index=0,d.sibling=null,d}function s(d,v,x){return d.index=x,t?(x=d.alternate,x!==null?(x=x.index,x<v?(d.flags|=2,v):x):(d.flags|=2,v)):(d.flags|=1048576,v)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,v,x,y){return v===null||v.tag!==6?(v=pc(x,d.mode,y),v.return=d,v):(v=r(v,x),v.return=d,v)}function l(d,v,x,y){var w=x.type;return w===Xr?h(d,v,x.props.children,y,x.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===bi&&Qf(w)===v.type)?(y=r(v,x.props),y.ref=Us(d,v,x),y.return=d,y):(y=Uo(x.type,x.key,x.props,null,d.mode,y),y.ref=Us(d,v,x),y.return=d,y)}function c(d,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=mc(x,d.mode,y),v.return=d,v):(v=r(v,x.children||[]),v.return=d,v)}function h(d,v,x,y,w){return v===null||v.tag!==7?(v=xr(x,d.mode,y,w),v.return=d,v):(v=r(v,x),v.return=d,v)}function f(d,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=pc(""+v,d.mode,x),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ka:return x=Uo(v.type,v.key,v.props,null,d.mode,x),x.ref=Us(d,null,v),x.return=d,x;case Wr:return v=mc(v,d.mode,x),v.return=d,v;case bi:var y=v._init;return f(d,y(v._payload),x)}if(Ws(v)||Ns(v))return v=xr(v,d.mode,x,null),v.return=d,v;$a(d,v)}return null}function p(d,v,x,y){var w=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:o(d,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ka:return x.key===w?l(d,v,x,y):null;case Wr:return x.key===w?c(d,v,x,y):null;case bi:return w=x._init,p(d,v,w(x._payload),y)}if(Ws(x)||Ns(x))return w!==null?null:h(d,v,x,y,null);$a(d,x)}return null}function g(d,v,x,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(x)||null,o(v,d,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ka:return d=d.get(y.key===null?x:y.key)||null,l(v,d,y,w);case Wr:return d=d.get(y.key===null?x:y.key)||null,c(v,d,y,w);case bi:var A=y._init;return g(d,v,x,A(y._payload),w)}if(Ws(y)||Ns(y))return d=d.get(x)||null,h(v,d,y,w,null);$a(v,y)}return null}function _(d,v,x,y){for(var w=null,A=null,b=v,N=v=0,V=null;b!==null&&N<x.length;N++){b.index>N?(V=b,b=null):V=b.sibling;var M=p(d,b,x[N],y);if(M===null){b===null&&(b=V);break}t&&b&&M.alternate===null&&e(d,b),v=s(M,v,N),A===null?w=M:A.sibling=M,A=M,b=V}if(N===x.length)return n(d,b),lt&&ar(d,N),w;if(b===null){for(;N<x.length;N++)b=f(d,x[N],y),b!==null&&(v=s(b,v,N),A===null?w=b:A.sibling=b,A=b);return lt&&ar(d,N),w}for(b=i(d,b);N<x.length;N++)V=g(b,d,N,x[N],y),V!==null&&(t&&V.alternate!==null&&b.delete(V.key===null?N:V.key),v=s(V,v,N),A===null?w=V:A.sibling=V,A=V);return t&&b.forEach(function(C){return e(d,C)}),lt&&ar(d,N),w}function S(d,v,x,y){var w=Ns(x);if(typeof w!="function")throw Error(te(150));if(x=w.call(x),x==null)throw Error(te(151));for(var A=w=null,b=v,N=v=0,V=null,M=x.next();b!==null&&!M.done;N++,M=x.next()){b.index>N?(V=b,b=null):V=b.sibling;var C=p(d,b,M.value,y);if(C===null){b===null&&(b=V);break}t&&b&&C.alternate===null&&e(d,b),v=s(C,v,N),A===null?w=C:A.sibling=C,A=C,b=V}if(M.done)return n(d,b),lt&&ar(d,N),w;if(b===null){for(;!M.done;N++,M=x.next())M=f(d,M.value,y),M!==null&&(v=s(M,v,N),A===null?w=M:A.sibling=M,A=M);return lt&&ar(d,N),w}for(b=i(d,b);!M.done;N++,M=x.next())M=g(b,d,N,M.value,y),M!==null&&(t&&M.alternate!==null&&b.delete(M.key===null?N:M.key),v=s(M,v,N),A===null?w=M:A.sibling=M,A=M);return t&&b.forEach(function($){return e(d,$)}),lt&&ar(d,N),w}function m(d,v,x,y){if(typeof x=="object"&&x!==null&&x.type===Xr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ka:e:{for(var w=x.key,A=v;A!==null;){if(A.key===w){if(w=x.type,w===Xr){if(A.tag===7){n(d,A.sibling),v=r(A,x.props.children),v.return=d,d=v;break e}}else if(A.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===bi&&Qf(w)===A.type){n(d,A.sibling),v=r(A,x.props),v.ref=Us(d,A,x),v.return=d,d=v;break e}n(d,A);break}else e(d,A);A=A.sibling}x.type===Xr?(v=xr(x.props.children,d.mode,y,x.key),v.return=d,d=v):(y=Uo(x.type,x.key,x.props,null,d.mode,y),y.ref=Us(d,v,x),y.return=d,d=y)}return a(d);case Wr:e:{for(A=x.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(d,v.sibling),v=r(v,x.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=mc(x,d.mode,y),v.return=d,d=v}return a(d);case bi:return A=x._init,m(d,v,A(x._payload),y)}if(Ws(x))return _(d,v,x,y);if(Ns(x))return S(d,v,x,y);$a(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,x),v.return=d,d=v):(n(d,v),v=pc(x,d.mode,y),v.return=d,d=v),a(d)):n(d,v)}return m}var gs=ug(!0),dg=ug(!1),Ko=Yi(null),Zo=null,es=null,Td=null;function Ad(){Td=es=Zo=null}function Cd(t){var e=Ko.current;st(Ko),t._currentValue=e}function bu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function cs(t,e){Zo=t,Td=es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function Tn(t){var e=t._currentValue;if(Td!==t)if(t={context:t,memoizedValue:e,next:null},es===null){if(Zo===null)throw Error(te(308));es=t,Zo.dependencies={lanes:0,firstContext:t}}else es=es.next=t;return e}var hr=null;function Rd(t){hr===null?hr=[t]:hr.push(t)}function fg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Rd(e)):(n.next=r.next,r.next=n),e.interleaved=n,pi(t,i)}function pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ti=!1;function Nd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,pi(t,n)}return r=i.interleaved,r===null?(e.next=e,Rd(i)):(e.next=r.next,r.next=e),i.interleaved=e,pi(t,n)}function Ro(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,md(t,n)}}function Jf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qo(t,e,n,i){var r=t.updateQueue;Ti=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,h=c=l=null,o=s;do{var p=o.lane,g=o.eventTime;if((i&p)===p){h!==null&&(h=h.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,S=o;switch(p=e,g=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){f=_.call(g,f,p);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,p=typeof _=="function"?_.call(g,f,p):_,p==null)break e;f=ft({},f,p);break e;case 2:Ti=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else g={eventTime:g,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=g,l=f):h=h.next=g,a|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Er|=a,t.lanes=a,t.memoizedState=f}}function eh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Aa={},Kn=Yi(Aa),ga=Yi(Aa),xa=Yi(Aa);function pr(t){if(t===Aa)throw Error(te(174));return t}function Pd(t,e){switch(nt(xa,e),nt(ga,t),nt(Kn,Aa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:su(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=su(e,t)}st(Kn),nt(Kn,e)}function xs(){st(Kn),st(ga),st(xa)}function pg(t){pr(xa.current);var e=pr(Kn.current),n=su(e,t.type);e!==n&&(nt(ga,t),nt(Kn,n))}function Ld(t){ga.current===t&&(st(Kn),st(ga))}var ut=Yi(0);function Jo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var lc=[];function Dd(){for(var t=0;t<lc.length;t++)lc[t]._workInProgressVersionPrimary=null;lc.length=0}var No=xi.ReactCurrentDispatcher,cc=xi.ReactCurrentBatchConfig,Mr=0,dt=null,St=null,At=null,el=!1,Js=!1,va=0,Qv=0;function kt(){throw Error(te(321))}function Id(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function Ud(t,e,n,i,r,s){if(Mr=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,No.current=t===null||t.memoizedState===null?n_:i_,t=n(i,r),Js){s=0;do{if(Js=!1,va=0,25<=s)throw Error(te(301));s+=1,At=St=null,e.updateQueue=null,No.current=r_,t=n(i,r)}while(Js)}if(No.current=tl,e=St!==null&&St.next!==null,Mr=0,At=St=dt=null,el=!1,e)throw Error(te(300));return t}function kd(){var t=va!==0;return va=0,t}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?dt.memoizedState=At=t:At=At.next=t,At}function An(){if(St===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=At===null?dt.memoizedState:At.next;if(e!==null)At=e,St=t;else{if(t===null)throw Error(te(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},At===null?dt.memoizedState=At=t:At=At.next=t}return At}function _a(t,e){return typeof e=="function"?e(t):e}function uc(t){var e=An(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=St,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((Mr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,dt.lanes|=h,Er|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Bn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,Er|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function dc(t){var e=An(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Bn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function mg(){}function gg(t,e){var n=dt,i=An(),r=e(),s=!Bn(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,Fd(_g.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||At!==null&&At.memoizedState.tag&1){if(n.flags|=2048,ya(9,vg.bind(null,n,i,r,e),void 0,null),Ct===null)throw Error(te(349));Mr&30||xg(n,e,r)}return r}function xg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vg(t,e,n,i){e.value=n,e.getSnapshot=i,yg(e)&&Sg(t)}function _g(t,e,n){return n(function(){yg(e)&&Sg(t)})}function yg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function Sg(t){var e=pi(t,1);e!==null&&On(e,t,1,-1)}function th(t){var e=Vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:t},e.queue=t,t=t.dispatch=t_.bind(null,dt,t),[e.memoizedState,t]}function ya(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Mg(){return An().memoizedState}function Po(t,e,n,i){var r=Vn();dt.flags|=t,r.memoizedState=ya(1|e,n,void 0,i===void 0?null:i)}function bl(t,e,n,i){var r=An();i=i===void 0?null:i;var s=void 0;if(St!==null){var a=St.memoizedState;if(s=a.destroy,i!==null&&Id(i,a.deps)){r.memoizedState=ya(e,n,s,i);return}}dt.flags|=t,r.memoizedState=ya(1|e,n,s,i)}function nh(t,e){return Po(8390656,8,t,e)}function Fd(t,e){return bl(2048,8,t,e)}function Eg(t,e){return bl(4,2,t,e)}function wg(t,e){return bl(4,4,t,e)}function bg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Tg(t,e,n){return n=n!=null?n.concat([t]):null,bl(4,4,bg.bind(null,e,t),n)}function Od(){}function Ag(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Id(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Cg(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Id(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Rg(t,e,n){return Mr&21?(Bn(n,e)||(n=Im(),dt.lanes|=n,Er|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function Jv(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=cc.transition;cc.transition={};try{t(!1),e()}finally{Qe=n,cc.transition=i}}function Ng(){return An().memoizedState}function e_(t,e,n){var i=zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Pg(t))Lg(e,n);else if(n=fg(t,e,n,i),n!==null){var r=Xt();On(n,t,i,r),Dg(n,e,i)}}function t_(t,e,n){var i=zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pg(t))Lg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Bn(o,a)){var l=e.interleaved;l===null?(r.next=r,Rd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=fg(t,e,r,i),n!==null&&(r=Xt(),On(n,t,i,r),Dg(n,e,i))}}function Pg(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function Lg(t,e){Js=el=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,md(t,n)}}var tl={readContext:Tn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},n_={readContext:Tn,useCallback:function(t,e){return Vn().memoizedState=[t,e===void 0?null:e],t},useContext:Tn,useEffect:nh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Po(4194308,4,bg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Po(4194308,4,t,e)},useInsertionEffect:function(t,e){return Po(4,2,t,e)},useMemo:function(t,e){var n=Vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Vn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=e_.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=Vn();return t={current:t},e.memoizedState=t},useState:th,useDebugValue:Od,useDeferredValue:function(t){return Vn().memoizedState=t},useTransition:function(){var t=th(!1),e=t[0];return t=Jv.bind(null,t[1]),Vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=Vn();if(lt){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Ct===null)throw Error(te(349));Mr&30||xg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,nh(_g.bind(null,i,s,t),[t]),i.flags|=2048,ya(9,vg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Vn(),e=Ct.identifierPrefix;if(lt){var n=ci,i=li;n=(i&~(1<<32-Fn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=va++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Qv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},i_={readContext:Tn,useCallback:Ag,useContext:Tn,useEffect:Fd,useImperativeHandle:Tg,useInsertionEffect:Eg,useLayoutEffect:wg,useMemo:Cg,useReducer:uc,useRef:Mg,useState:function(){return uc(_a)},useDebugValue:Od,useDeferredValue:function(t){var e=An();return Rg(e,St.memoizedState,t)},useTransition:function(){var t=uc(_a)[0],e=An().memoizedState;return[t,e]},useMutableSource:mg,useSyncExternalStore:gg,useId:Ng,unstable_isNewReconciler:!1},r_={readContext:Tn,useCallback:Ag,useContext:Tn,useEffect:Fd,useImperativeHandle:Tg,useInsertionEffect:Eg,useLayoutEffect:wg,useMemo:Cg,useReducer:dc,useRef:Mg,useState:function(){return dc(_a)},useDebugValue:Od,useDeferredValue:function(t){var e=An();return St===null?e.memoizedState=t:Rg(e,St.memoizedState,t)},useTransition:function(){var t=dc(_a)[0],e=An().memoizedState;return[t,e]},useMutableSource:mg,useSyncExternalStore:gg,useId:Ng,unstable_isNewReconciler:!1};function Ln(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Tu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tl={isMounted:function(t){return(t=t._reactInternals)?Ar(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=zi(t),s=di(i,r);s.payload=e,n!=null&&(s.callback=n),e=Fi(t,s,r),e!==null&&(On(e,t,r,i),Ro(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=zi(t),s=di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Fi(t,s,r),e!==null&&(On(e,t,r,i),Ro(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=zi(t),r=di(n,i);r.tag=2,e!=null&&(r.callback=e),e=Fi(t,r,i),e!==null&&(On(e,t,i,n),Ro(e,t,i))}};function ih(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!fa(n,i)||!fa(r,s):!0}function Ig(t,e,n){var i=!1,r=Wi,s=e.contextType;return typeof s=="object"&&s!==null?s=Tn(s):(r=tn(e)?yr:Ht.current,i=e.contextTypes,s=(i=i!=null)?ps(t,r):Wi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function rh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Tl.enqueueReplaceState(e,e.state,null)}function Au(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Nd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Tn(s):(s=tn(e)?yr:Ht.current,r.context=ps(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Tu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Tl.enqueueReplaceState(r,r.state,null),Qo(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function vs(t,e){try{var n="",i=e;do n+=L0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function fc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Cu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var s_=typeof WeakMap=="function"?WeakMap:Map;function Ug(t,e,n){n=di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){il||(il=!0,Ou=i),Cu(t,e)},n}function kg(t,e,n){n=di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Cu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Cu(t,e),typeof i!="function"&&(Oi===null?Oi=new Set([this]):Oi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function sh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new s_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=__.bind(null,t,e,n),e.then(t,t))}function ah(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function oh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=di(-1,1),e.tag=2,Fi(n,e,1))),n.lanes|=1),t)}var a_=xi.ReactCurrentOwner,Jt=!1;function Vt(t,e,n,i){e.child=t===null?dg(e,null,n,i):gs(e,t.child,n,i)}function lh(t,e,n,i,r){n=n.render;var s=e.ref;return cs(e,r),i=Ud(t,e,n,i,s,r),n=kd(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(lt&&n&&Ed(e),e.flags|=1,Vt(t,e,i,r),e.child)}function ch(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Xd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Fg(t,e,s,i,r)):(t=Uo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:fa,n(a,i)&&t.ref===e.ref)return mi(t,e,r)}return e.flags|=1,t=Bi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Fg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(fa(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,mi(t,e,r)}return Ru(t,e,n,i,r)}function Og(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(ns,un),un|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(ns,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(ns,un),un|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(ns,un),un|=i;return Vt(t,e,r,n),e.child}function zg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ru(t,e,n,i,r){var s=tn(n)?yr:Ht.current;return s=ps(e,s),cs(e,r),n=Ud(t,e,n,i,s,r),i=kd(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(lt&&i&&Ed(e),e.flags|=1,Vt(t,e,n,r),e.child)}function uh(t,e,n,i,r){if(tn(n)){var s=!0;$o(e)}else s=!1;if(cs(e,r),e.stateNode===null)Lo(t,e),Ig(e,n,i),Au(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Tn(c):(c=tn(n)?yr:Ht.current,c=ps(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&rh(e,a,i,c),Ti=!1;var p=e.memoizedState;a.state=p,Qo(e,i,a,r),l=e.memoizedState,o!==i||p!==l||en.current||Ti?(typeof h=="function"&&(Tu(e,n,h,i),l=e.memoizedState),(o=Ti||ih(e,n,o,i,p,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,hg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Ln(e.type,o),a.props=c,f=e.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Tn(l):(l=tn(n)?yr:Ht.current,l=ps(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||p!==l)&&rh(e,a,i,l),Ti=!1,p=e.memoizedState,a.state=p,Qo(e,i,a,r);var _=e.memoizedState;o!==f||p!==_||en.current||Ti?(typeof g=="function"&&(Tu(e,n,g,i),_=e.memoizedState),(c=Ti||ih(e,n,c,i,p,_,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return Nu(t,e,n,i,s,r)}function Nu(t,e,n,i,r,s){zg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Yf(e,n,!1),mi(t,e,s);i=e.stateNode,a_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=gs(e,t.child,null,s),e.child=gs(e,null,o,s)):Vt(t,e,o,s),e.memoizedState=i.state,r&&Yf(e,n,!0),e.child}function Bg(t){var e=t.stateNode;e.pendingContext?qf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qf(t,e.context,!1),Pd(t,e.containerInfo)}function dh(t,e,n,i,r){return ms(),bd(r),e.flags|=256,Vt(t,e,n,i),e.child}var Pu={dehydrated:null,treeContext:null,retryLane:0};function Lu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hg(t,e,n){var i=e.pendingProps,r=ut.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(ut,r&1),t===null)return wu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Rl(a,i,0,null),t=xr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Lu(n),e.memoizedState=Pu,t):zd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return o_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Bi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Bi(o,s):(s=xr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Lu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Pu,i}return s=t.child,t=s.sibling,i=Bi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function zd(t,e){return e=Rl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function qa(t,e,n,i){return i!==null&&bd(i),gs(e,t.child,null,n),t=zd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function o_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=fc(Error(te(422))),qa(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Rl({mode:"visible",children:i.children},r,0,null),s=xr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&gs(e,t.child,null,a),e.child.memoizedState=Lu(a),e.memoizedState=Pu,s);if(!(e.mode&1))return qa(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(te(419)),i=fc(s,i,void 0),qa(t,e,a,i)}if(o=(a&t.childLanes)!==0,Jt||o){if(i=Ct,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,pi(t,r),On(i,t,r,-1))}return Wd(),i=fc(Error(te(421))),qa(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=y_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,dn=ki(r.nextSibling),fn=e,lt=!0,In=null,t!==null&&(yn[Sn++]=li,yn[Sn++]=ci,yn[Sn++]=Sr,li=t.id,ci=t.overflow,Sr=e),e=zd(e,i.children),e.flags|=4096,e)}function fh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),bu(t.return,e,n)}function hc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Gg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vt(t,e,i.children,n),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fh(t,n,e);else if(t.tag===19)fh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Jo(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),hc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Jo(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}hc(e,!0,n,null,s);break;case"together":hc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Lo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Er|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Bi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Bi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function l_(t,e,n){switch(e.tag){case 3:Bg(e),ms();break;case 5:pg(e);break;case 1:tn(e.type)&&$o(e);break;case 4:Pd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(Ko,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?Hg(t,e,n):(nt(ut,ut.current&1),t=mi(t,e,n),t!==null?t.sibling:null);nt(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Gg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,Og(t,e,n)}return mi(t,e,n)}var jg,Du,Vg,Wg;jg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Du=function(){};Vg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,pr(Kn.current);var s=null;switch(n){case"input":r=tu(t,r),i=tu(t,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=ru(t,r),i=ru(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Wo)}au(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(sa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(sa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&it("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Wg=function(t,e,n,i){n!==i&&(e.flags|=4)};function ks(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function c_(t,e,n){var i=e.pendingProps;switch(wd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return tn(e.type)&&Xo(),Ft(e),null;case 3:return i=e.stateNode,xs(),st(en),st(Ht),Dd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Xa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(Hu(In),In=null))),Du(t,e),Ft(e),null;case 5:Ld(e);var r=pr(xa.current);if(n=e.type,t!==null&&e.stateNode!=null)Vg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Ft(e),null}if(t=pr(Kn.current),Xa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[$n]=e,i[ma]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<$s.length;r++)it($s[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":Sf(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":Ef(i,s),it("invalid",i)}au(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Wa(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Wa(i.textContent,o,t),r=["children",""+o]):sa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&it("scroll",i)}switch(n){case"input":Fa(i),Mf(i,s,!0);break;case"textarea":Fa(i),wf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Wo)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_m(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[$n]=e,t[ma]=i,jg(t,e,!1,!1),e.stateNode=t;e:{switch(a=ou(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<$s.length;r++)it($s[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":Sf(t,i),r=tu(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),it("invalid",t);break;case"textarea":Ef(t,i),r=ru(t,i),it("invalid",t);break;default:r=i}au(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Mm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ym(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&aa(t,l):typeof l=="number"&&aa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(sa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&cd(t,s,l,a))}switch(n){case"input":Fa(t),Mf(t,i,!1);break;case"textarea":Fa(t),wf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Vi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ss(t,!!i.multiple,s,!1):i.defaultValue!=null&&ss(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Wo)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)Wg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=pr(xa.current),pr(Kn.current),Xa(e)){if(i=e.stateNode,n=e.memoizedProps,i[$n]=e,(s=i.nodeValue!==n)&&(t=fn,t!==null))switch(t.tag){case 3:Wa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return Ft(e),null;case 13:if(st(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&dn!==null&&e.mode&1&&!(e.flags&128))cg(),ms(),e.flags|=98560,s=!1;else if(s=Xa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[$n]=e}else ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else In!==null&&(Hu(In),In=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?Mt===0&&(Mt=3):Wd())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return xs(),Du(t,e),t===null&&ha(e.stateNode.containerInfo),Ft(e),null;case 10:return Cd(e.type._context),Ft(e),null;case 17:return tn(e.type)&&Xo(),Ft(e),null;case 19:if(st(ut),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ks(s,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Jo(t),a!==null){for(e.flags|=128,ks(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(ut,ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&gt()>_s&&(e.flags|=128,i=!0,ks(s,!1),e.lanes=4194304)}else{if(!i)if(t=Jo(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!lt)return Ft(e),null}else 2*gt()-s.renderingStartTime>_s&&n!==1073741824&&(e.flags|=128,i=!0,ks(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=gt(),e.sibling=null,n=ut.current,nt(ut,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return Vd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?un&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function u_(t,e){switch(wd(e),e.tag){case 1:return tn(e.type)&&Xo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xs(),st(en),st(Ht),Dd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ld(e),null;case 13:if(st(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(ut),null;case 4:return xs(),null;case 10:return Cd(e.type._context),null;case 22:case 23:return Vd(),null;case 24:return null;default:return null}}var Ya=!1,Bt=!1,d_=typeof WeakSet=="function"?WeakSet:Set,he=null;function ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ht(t,e,i)}else n.current=null}function Iu(t,e,n){try{n()}catch(i){ht(t,e,i)}}var hh=!1;function f_(t,e){if(xu=Go,t=Km(),Md(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,f=t,p=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===t)break t;if(p===n&&++c===r&&(o=a),p===s&&++h===i&&(l=a),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vu={focusedElem:t,selectionRange:n},Go=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,m=_.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?S:Ln(e.type,S),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(y){ht(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return _=hh,hh=!1,_}function ea(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Iu(e,n,s)}r=r.next}while(r!==i)}}function Al(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Uu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Xg(t){var e=t.alternate;e!==null&&(t.alternate=null,Xg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[ma],delete e[Su],delete e[qv],delete e[Yv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $g(t){return t.tag===5||t.tag===3||t.tag===4}function ph(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$g(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ku(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wo));else if(i!==4&&(t=t.child,t!==null))for(ku(t,e,n),t=t.sibling;t!==null;)ku(t,e,n),t=t.sibling}function Fu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Fu(t,e,n),t=t.sibling;t!==null;)Fu(t,e,n),t=t.sibling}var Pt=null,Dn=!1;function vi(t,e,n){for(n=n.child;n!==null;)qg(t,e,n),n=n.sibling}function qg(t,e,n){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(_l,n)}catch{}switch(n.tag){case 5:Bt||ts(n,e);case 6:var i=Pt,r=Dn;Pt=null,vi(t,e,n),Pt=i,Dn=r,Pt!==null&&(Dn?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(Dn?(t=Pt,n=n.stateNode,t.nodeType===8?ac(t.parentNode,n):t.nodeType===1&&ac(t,n),ua(t)):ac(Pt,n.stateNode));break;case 4:i=Pt,r=Dn,Pt=n.stateNode.containerInfo,Dn=!0,vi(t,e,n),Pt=i,Dn=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Iu(n,e,a),r=r.next}while(r!==i)}vi(t,e,n);break;case 1:if(!Bt&&(ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){ht(n,e,o)}vi(t,e,n);break;case 21:vi(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,vi(t,e,n),Bt=i):vi(t,e,n);break;default:vi(t,e,n)}}function mh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new d_),e.forEach(function(i){var r=S_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Pt=o.stateNode,Dn=!1;break e;case 3:Pt=o.stateNode.containerInfo,Dn=!0;break e;case 4:Pt=o.stateNode.containerInfo,Dn=!0;break e}o=o.return}if(Pt===null)throw Error(te(160));qg(s,a,r),Pt=null,Dn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){ht(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yg(e,t),e=e.sibling}function Yg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),jn(t),i&4){try{ea(3,t,t.return),Al(3,t)}catch(S){ht(t,t.return,S)}try{ea(5,t,t.return)}catch(S){ht(t,t.return,S)}}break;case 1:Cn(e,t),jn(t),i&512&&n!==null&&ts(n,n.return);break;case 5:if(Cn(e,t),jn(t),i&512&&n!==null&&ts(n,n.return),t.flags&32){var r=t.stateNode;try{aa(r,"")}catch(S){ht(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&xm(r,s),ou(o,a);var c=ou(o,s);for(a=0;a<l.length;a+=2){var h=l[a],f=l[a+1];h==="style"?Mm(r,f):h==="dangerouslySetInnerHTML"?ym(r,f):h==="children"?aa(r,f):cd(r,h,f,c)}switch(o){case"input":nu(r,s);break;case"textarea":vm(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ss(r,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?ss(r,!!s.multiple,s.defaultValue,!0):ss(r,!!s.multiple,s.multiple?[]:"",!1))}r[ma]=s}catch(S){ht(t,t.return,S)}}break;case 6:if(Cn(e,t),jn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){ht(t,t.return,S)}}break;case 3:if(Cn(e,t),jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ua(e.containerInfo)}catch(S){ht(t,t.return,S)}break;case 4:Cn(e,t),jn(t);break;case 13:Cn(e,t),jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Gd=gt())),i&4&&mh(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(c=Bt)||h,Cn(e,t),Bt=c):Cn(e,t),jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(he=t,h=t.child;h!==null;){for(f=he=h;he!==null;){switch(p=he,g=p.child,p.tag){case 0:case 11:case 14:case 15:ea(4,p,p.return);break;case 1:ts(p,p.return);var _=p.stateNode;if(typeof _.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(S){ht(i,n,S)}}break;case 5:ts(p,p.return);break;case 22:if(p.memoizedState!==null){xh(f);continue}}g!==null?(g.return=p,he=g):xh(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Sm("display",a))}catch(S){ht(t,t.return,S)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){ht(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Cn(e,t),jn(t),i&4&&mh(t);break;case 21:break;default:Cn(e,t),jn(t)}}function jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($g(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(aa(r,""),i.flags&=-33);var s=ph(t);Fu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=ph(t);ku(t,o,a);break;default:throw Error(te(161))}}catch(l){ht(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function h_(t,e,n){he=t,Kg(t)}function Kg(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Ya;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Bt;o=Ya;var c=Bt;if(Ya=a,(Bt=l)&&!c)for(he=r;he!==null;)a=he,l=a.child,a.tag===22&&a.memoizedState!==null?vh(r):l!==null?(l.return=a,he=l):vh(r);for(;s!==null;)he=s,Kg(s),s=s.sibling;he=r,Ya=o,Bt=c}gh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):gh(t)}}function gh(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||Al(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&eh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}eh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ua(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Bt||e.flags&512&&Uu(e)}catch(p){ht(e,e.return,p)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function xh(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function vh(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Al(4,e)}catch(l){ht(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ht(e,r,l)}}var s=e.return;try{Uu(e)}catch(l){ht(e,s,l)}break;case 5:var a=e.return;try{Uu(e)}catch(l){ht(e,a,l)}}}catch(l){ht(e,e.return,l)}if(e===t){he=null;break}var o=e.sibling;if(o!==null){o.return=e.return,he=o;break}he=e.return}}var p_=Math.ceil,nl=xi.ReactCurrentDispatcher,Bd=xi.ReactCurrentOwner,bn=xi.ReactCurrentBatchConfig,Ye=0,Ct=null,_t=null,Dt=0,un=0,ns=Yi(0),Mt=0,Sa=null,Er=0,Cl=0,Hd=0,ta=null,Zt=null,Gd=0,_s=1/0,ri=null,il=!1,Ou=null,Oi=null,Ka=!1,Pi=null,rl=0,na=0,zu=null,Do=-1,Io=0;function Xt(){return Ye&6?gt():Do!==-1?Do:Do=gt()}function zi(t){return t.mode&1?Ye&2&&Dt!==0?Dt&-Dt:Zv.transition!==null?(Io===0&&(Io=Im()),Io):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:Hm(t.type)),t):1}function On(t,e,n,i){if(50<na)throw na=0,zu=null,Error(te(185));wa(t,n,i),(!(Ye&2)||t!==Ct)&&(t===Ct&&(!(Ye&2)&&(Cl|=n),Mt===4&&Ci(t,Dt)),nn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(_s=gt()+500,wl&&Ki()))}function nn(t,e){var n=t.callbackNode;Z0(t,e);var i=Ho(t,t===Ct?Dt:0);if(i===0)n!==null&&Af(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Af(n),e===1)t.tag===0?Kv(_h.bind(null,t)):ag(_h.bind(null,t)),Xv(function(){!(Ye&6)&&Ki()}),n=null;else{switch(Um(i)){case 1:n=pd;break;case 4:n=Lm;break;case 16:n=Bo;break;case 536870912:n=Dm;break;default:n=Bo}n=rx(n,Zg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Zg(t,e){if(Do=-1,Io=0,Ye&6)throw Error(te(327));var n=t.callbackNode;if(us()&&t.callbackNode!==n)return null;var i=Ho(t,t===Ct?Dt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=sl(t,i);else{e=i;var r=Ye;Ye|=2;var s=Jg();(Ct!==t||Dt!==e)&&(ri=null,_s=gt()+500,gr(t,e));do try{x_();break}catch(o){Qg(t,o)}while(!0);Ad(),nl.current=s,Ye=r,_t!==null?e=0:(Ct=null,Dt=0,e=Mt)}if(e!==0){if(e===2&&(r=fu(t),r!==0&&(i=r,e=Bu(t,r))),e===1)throw n=Sa,gr(t,0),Ci(t,i),nn(t,gt()),n;if(e===6)Ci(t,i);else{if(r=t.current.alternate,!(i&30)&&!m_(r)&&(e=sl(t,i),e===2&&(s=fu(t),s!==0&&(i=s,e=Bu(t,s))),e===1))throw n=Sa,gr(t,0),Ci(t,i),nn(t,gt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:or(t,Zt,ri);break;case 3:if(Ci(t,i),(i&130023424)===i&&(e=Gd+500-gt(),10<e)){if(Ho(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=yu(or.bind(null,t,Zt,ri),e);break}or(t,Zt,ri);break;case 4:if(Ci(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Fn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=gt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*p_(i/1960))-i,10<i){t.timeoutHandle=yu(or.bind(null,t,Zt,ri),i);break}or(t,Zt,ri);break;case 5:or(t,Zt,ri);break;default:throw Error(te(329))}}}return nn(t,gt()),t.callbackNode===n?Zg.bind(null,t):null}function Bu(t,e){var n=ta;return t.current.memoizedState.isDehydrated&&(gr(t,e).flags|=256),t=sl(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&Hu(e)),t}function Hu(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function m_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Bn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ci(t,e){for(e&=~Hd,e&=~Cl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Fn(e),i=1<<n;t[n]=-1,e&=~i}}function _h(t){if(Ye&6)throw Error(te(327));us();var e=Ho(t,0);if(!(e&1))return nn(t,gt()),null;var n=sl(t,e);if(t.tag!==0&&n===2){var i=fu(t);i!==0&&(e=i,n=Bu(t,i))}if(n===1)throw n=Sa,gr(t,0),Ci(t,e),nn(t,gt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,or(t,Zt,ri),nn(t,gt()),null}function jd(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(_s=gt()+500,wl&&Ki())}}function wr(t){Pi!==null&&Pi.tag===0&&!(Ye&6)&&us();var e=Ye;Ye|=1;var n=bn.transition,i=Qe;try{if(bn.transition=null,Qe=1,t)return t()}finally{Qe=i,bn.transition=n,Ye=e,!(Ye&6)&&Ki()}}function Vd(){un=ns.current,st(ns)}function gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Wv(n)),_t!==null)for(n=_t.return;n!==null;){var i=n;switch(wd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Xo();break;case 3:xs(),st(en),st(Ht),Dd();break;case 5:Ld(i);break;case 4:xs();break;case 13:st(ut);break;case 19:st(ut);break;case 10:Cd(i.type._context);break;case 22:case 23:Vd()}n=n.return}if(Ct=t,_t=t=Bi(t.current,null),Dt=un=e,Mt=0,Sa=null,Hd=Cl=Er=0,Zt=ta=null,hr!==null){for(e=0;e<hr.length;e++)if(n=hr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}hr=null}return t}function Qg(t,e){do{var n=_t;try{if(Ad(),No.current=tl,el){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}el=!1}if(Mr=0,At=St=dt=null,Js=!1,va=0,Bd.current=null,n===null||n.return===null){Mt=1,Sa=e,_t=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Dt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=ah(a);if(g!==null){g.flags&=-257,oh(g,a,o,s,e),g.mode&1&&sh(s,c,e),e=g,l=c;var _=e.updateQueue;if(_===null){var S=new Set;S.add(l),e.updateQueue=S}else _.add(l);break e}else{if(!(e&1)){sh(s,c,e),Wd();break e}l=Error(te(426))}}else if(lt&&o.mode&1){var m=ah(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),oh(m,a,o,s,e),bd(vs(l,o));break e}}s=l=vs(l,o),Mt!==4&&(Mt=2),ta===null?ta=[s]:ta.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Ug(s,l,e);Jf(s,d);break e;case 1:o=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Oi===null||!Oi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=kg(s,o,e);Jf(s,y);break e}}s=s.return}while(s!==null)}tx(n)}catch(w){e=w,_t===n&&n!==null&&(_t=n=n.return);continue}break}while(!0)}function Jg(){var t=nl.current;return nl.current=tl,t===null?tl:t}function Wd(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),Ct===null||!(Er&268435455)&&!(Cl&268435455)||Ci(Ct,Dt)}function sl(t,e){var n=Ye;Ye|=2;var i=Jg();(Ct!==t||Dt!==e)&&(ri=null,gr(t,e));do try{g_();break}catch(r){Qg(t,r)}while(!0);if(Ad(),Ye=n,nl.current=i,_t!==null)throw Error(te(261));return Ct=null,Dt=0,Mt}function g_(){for(;_t!==null;)ex(_t)}function x_(){for(;_t!==null&&!G0();)ex(_t)}function ex(t){var e=ix(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?tx(t):_t=e,Bd.current=null}function tx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=u_(n,e),n!==null){n.flags&=32767,_t=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,_t=null;return}}else if(n=c_(n,e,un),n!==null){_t=n;return}if(e=e.sibling,e!==null){_t=e;return}_t=e=t}while(e!==null);Mt===0&&(Mt=5)}function or(t,e,n){var i=Qe,r=bn.transition;try{bn.transition=null,Qe=1,v_(t,e,n,i)}finally{bn.transition=r,Qe=i}return null}function v_(t,e,n,i){do us();while(Pi!==null);if(Ye&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Q0(t,s),t===Ct&&(_t=Ct=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ka||(Ka=!0,rx(Bo,function(){return us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bn.transition,bn.transition=null;var a=Qe;Qe=1;var o=Ye;Ye|=4,Bd.current=null,f_(t,n),Yg(n,t),Ov(vu),Go=!!xu,vu=xu=null,t.current=n,h_(n),j0(),Ye=o,Qe=a,bn.transition=s}else t.current=n;if(Ka&&(Ka=!1,Pi=t,rl=r),s=t.pendingLanes,s===0&&(Oi=null),X0(n.stateNode),nn(t,gt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(il)throw il=!1,t=Ou,Ou=null,t;return rl&1&&t.tag!==0&&us(),s=t.pendingLanes,s&1?t===zu?na++:(na=0,zu=t):na=0,Ki(),null}function us(){if(Pi!==null){var t=Um(rl),e=bn.transition,n=Qe;try{if(bn.transition=null,Qe=16>t?16:t,Pi===null)var i=!1;else{if(t=Pi,Pi=null,rl=0,Ye&6)throw Error(te(331));var r=Ye;for(Ye|=4,he=t.current;he!==null;){var s=he,a=s.child;if(he.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(he=c;he!==null;){var h=he;switch(h.tag){case 0:case 11:case 15:ea(8,h,s)}var f=h.child;if(f!==null)f.return=h,he=f;else for(;he!==null;){h=he;var p=h.sibling,g=h.return;if(Xg(h),h===c){he=null;break}if(p!==null){p.return=g,he=p;break}he=g}}}var _=s.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var m=S.sibling;S.sibling=null,S=m}while(S!==null)}}he=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,he=a;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ea(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,he=d;break e}he=s.return}}var v=t.current;for(he=v;he!==null;){a=he;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,he=x;else e:for(a=v;he!==null;){if(o=he,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Al(9,o)}}catch(w){ht(o,o.return,w)}if(o===a){he=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,he=y;break e}he=o.return}}if(Ye=r,Ki(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(_l,t)}catch{}i=!0}return i}finally{Qe=n,bn.transition=e}}return!1}function yh(t,e,n){e=vs(n,e),e=Ug(t,e,1),t=Fi(t,e,1),e=Xt(),t!==null&&(wa(t,1,e),nn(t,e))}function ht(t,e,n){if(t.tag===3)yh(t,t,n);else for(;e!==null;){if(e.tag===3){yh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Oi===null||!Oi.has(i))){t=vs(n,t),t=kg(e,t,1),e=Fi(e,t,1),t=Xt(),e!==null&&(wa(e,1,t),nn(e,t));break}}e=e.return}}function __(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,Ct===t&&(Dt&n)===n&&(Mt===4||Mt===3&&(Dt&130023424)===Dt&&500>gt()-Gd?gr(t,0):Hd|=n),nn(t,e)}function nx(t,e){e===0&&(t.mode&1?(e=Ba,Ba<<=1,!(Ba&130023424)&&(Ba=4194304)):e=1);var n=Xt();t=pi(t,e),t!==null&&(wa(t,e,n),nn(t,n))}function y_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),nx(t,n)}function S_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),nx(t,n)}var ix;ix=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,l_(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,lt&&e.flags&1048576&&og(e,Yo,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Lo(t,e),t=e.pendingProps;var r=ps(e,Ht.current);cs(e,n),r=Ud(null,e,i,t,r,n);var s=kd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,$o(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Nd(e),r.updater=Tl,e.stateNode=r,r._reactInternals=e,Au(e,i,t,n),e=Nu(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&Ed(e),Vt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Lo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=E_(i),t=Ln(i,t),r){case 0:e=Ru(null,e,i,t,n);break e;case 1:e=uh(null,e,i,t,n);break e;case 11:e=lh(null,e,i,t,n);break e;case 14:e=ch(null,e,i,Ln(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Ru(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),uh(t,e,i,r,n);case 3:e:{if(Bg(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,hg(t,e),Qo(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=vs(Error(te(423)),e),e=dh(t,e,i,n,r);break e}else if(i!==r){r=vs(Error(te(424)),e),e=dh(t,e,i,n,r);break e}else for(dn=ki(e.stateNode.containerInfo.firstChild),fn=e,lt=!0,In=null,n=dg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ms(),i===r){e=mi(t,e,n);break e}Vt(t,e,i,n)}e=e.child}return e;case 5:return pg(e),t===null&&wu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,_u(i,r)?a=null:s!==null&&_u(i,s)&&(e.flags|=32),zg(t,e),Vt(t,e,a,n),e.child;case 6:return t===null&&wu(e),null;case 13:return Hg(t,e,n);case 4:return Pd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=gs(e,null,i,n):Vt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),lh(t,e,i,r,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,nt(Ko,i._currentValue),i._currentValue=a,s!==null)if(Bn(s.value,a)){if(s.children===r.children&&!en.current){e=mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=di(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),bu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(te(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),bu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Vt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,cs(e,n),r=Tn(r),i=i(r),e.flags|=1,Vt(t,e,i,n),e.child;case 14:return i=e.type,r=Ln(i,e.pendingProps),r=Ln(i.type,r),ch(t,e,i,r,n);case 15:return Fg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Lo(t,e),e.tag=1,tn(i)?(t=!0,$o(e)):t=!1,cs(e,n),Ig(e,i,r),Au(e,i,r,n),Nu(null,e,i,!0,t,n);case 19:return Gg(t,e,n);case 22:return Og(t,e,n)}throw Error(te(156,e.tag))};function rx(t,e){return Pm(t,e)}function M_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,e,n,i){return new M_(t,e,n,i)}function Xd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function E_(t){if(typeof t=="function")return Xd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dd)return 11;if(t===fd)return 14}return 2}function Bi(t,e){var n=t.alternate;return n===null?(n=En(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Uo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Xd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Xr:return xr(n.children,r,s,e);case ud:a=8,r|=8;break;case Zc:return t=En(12,n,e,r|2),t.elementType=Zc,t.lanes=s,t;case Qc:return t=En(13,n,e,r),t.elementType=Qc,t.lanes=s,t;case Jc:return t=En(19,n,e,r),t.elementType=Jc,t.lanes=s,t;case pm:return Rl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fm:a=10;break e;case hm:a=9;break e;case dd:a=11;break e;case fd:a=14;break e;case bi:a=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=En(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function xr(t,e,n,i){return t=En(7,t,i,e),t.lanes=n,t}function Rl(t,e,n,i){return t=En(22,t,i,e),t.elementType=pm,t.lanes=n,t.stateNode={isHidden:!1},t}function pc(t,e,n){return t=En(6,t,null,e),t.lanes=n,t}function mc(t,e,n){return e=En(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function w_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function $d(t,e,n,i,r,s,a,o,l){return t=new w_(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=En(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nd(s),t}function b_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function sx(t){if(!t)return Wi;t=t._reactInternals;e:{if(Ar(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(tn(n))return sg(t,n,e)}return e}function ax(t,e,n,i,r,s,a,o,l){return t=$d(n,i,!0,t,r,s,a,o,l),t.context=sx(null),n=t.current,i=Xt(),r=zi(n),s=di(i,r),s.callback=e??null,Fi(n,s,r),t.current.lanes=r,wa(t,r,i),nn(t,i),t}function Nl(t,e,n,i){var r=e.current,s=Xt(),a=zi(r);return n=sx(n),e.context===null?e.context=n:e.pendingContext=n,e=di(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Fi(r,e,a),t!==null&&(On(t,r,a,s),Ro(t,r,a)),a}function al(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qd(t,e){Sh(t,e),(t=t.alternate)&&Sh(t,e)}function T_(){return null}var ox=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yd(t){this._internalRoot=t}Pl.prototype.render=Yd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Nl(t,e,null,null)};Pl.prototype.unmount=Yd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wr(function(){Nl(null,t,null,null)}),e[hi]=null}};function Pl(t){this._internalRoot=t}Pl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Om();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ai.length&&e!==0&&e<Ai[n].priority;n++);Ai.splice(n,0,t),n===0&&Bm(t)}};function Kd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mh(){}function A_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=al(a);s.call(c)}}var a=ax(e,i,t,0,null,!1,!1,"",Mh);return t._reactRootContainer=a,t[hi]=a.current,ha(t.nodeType===8?t.parentNode:t),wr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=al(l);o.call(c)}}var l=$d(t,0,!1,null,null,!1,!1,"",Mh);return t._reactRootContainer=l,t[hi]=l.current,ha(t.nodeType===8?t.parentNode:t),wr(function(){Nl(e,l,n,i)}),l}function Dl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=al(a);o.call(l)}}Nl(e,a,t,r)}else a=A_(n,e,t,r,i);return al(a)}km=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xs(e.pendingLanes);n!==0&&(md(e,n|1),nn(e,gt()),!(Ye&6)&&(_s=gt()+500,Ki()))}break;case 13:wr(function(){var i=pi(t,1);if(i!==null){var r=Xt();On(i,t,1,r)}}),qd(t,1)}};gd=function(t){if(t.tag===13){var e=pi(t,134217728);if(e!==null){var n=Xt();On(e,t,134217728,n)}qd(t,134217728)}};Fm=function(t){if(t.tag===13){var e=zi(t),n=pi(t,e);if(n!==null){var i=Xt();On(n,t,e,i)}qd(t,e)}};Om=function(){return Qe};zm=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};cu=function(t,e,n){switch(e){case"input":if(nu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=El(i);if(!r)throw Error(te(90));gm(i),nu(i,r)}}}break;case"textarea":vm(t,n);break;case"select":e=n.value,e!=null&&ss(t,!!n.multiple,e,!1)}};bm=jd;Tm=wr;var C_={usingClientEntryPoint:!1,Events:[Ta,Kr,El,Em,wm,jd]},Fs={findFiberByHostInstance:fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},R_={bundleType:Fs.bundleType,version:Fs.version,rendererPackageName:Fs.rendererPackageName,rendererConfig:Fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rm(t),t===null?null:t.stateNode},findFiberByHostInstance:Fs.findFiberByHostInstance||T_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Za.isDisabled&&Za.supportsFiber)try{_l=Za.inject(R_),Yn=Za}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C_;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kd(e))throw Error(te(200));return b_(t,e,null,n)};mn.createRoot=function(t,e){if(!Kd(t))throw Error(te(299));var n=!1,i="",r=ox;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=$d(t,1,!1,null,null,n,!1,i,r),t[hi]=e.current,ha(t.nodeType===8?t.parentNode:t),new Yd(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=Rm(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return wr(t)};mn.hydrate=function(t,e,n){if(!Ll(e))throw Error(te(200));return Dl(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!Kd(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=ox;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=ax(e,null,t,1,n??null,r,!1,s,a),t[hi]=e.current,ha(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Pl(e)};mn.render=function(t,e,n){if(!Ll(e))throw Error(te(200));return Dl(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!Ll(t))throw Error(te(40));return t._reactRootContainer?(wr(function(){Dl(null,null,t,!1,function(){t._reactRootContainer=null,t[hi]=null})}),!0):!1};mn.unstable_batchedUpdates=jd;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ll(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Dl(t,e,n,!1,i)};mn.version="18.3.1-next-f1338f8080-20240426";function lx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lx)}catch(t){console.error(t)}}lx(),lm.exports=mn;var N_=lm.exports,Eh=N_;Yc.createRoot=Eh.createRoot,Yc.hydrateRoot=Eh.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var P_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ae=(t,e)=>{const n=_e.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...c},h)=>_e.createElement("svg",{ref:h,...P_,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${L_(t)}`,o].join(" "),...c},[...e.map(([f,p])=>_e.createElement(f,p)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=Ae("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=Ae("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=Ae("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=Ae("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=Ae("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=Ae("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=Ae("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=Ae("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=Ae("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=Ae("Command",[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=Ae("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=Ae("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=Ae("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=Ae("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=Ae("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=Ae("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=Ae("FolderGit2",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=Ae("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=Ae("GitCommitHorizontal",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=Ae("GitPullRequest",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=Ae("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=Ae("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=Ae("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=Ae("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=Ae("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=Ae("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=Ae("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=Ae("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=Ae("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=Ae("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=Ae("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=Ae("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=Ae("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=Ae("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=Ae("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=Ae("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=Ae("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=Ae("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=Ae("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=Ae("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=Ae("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=Ae("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=Ae("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=Ae("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=Ae("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=Ae("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=Ae("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);class ty{constructor(){this.ctx=null,this.enabled=!0}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleSound(){return this.enabled=!this.enabled,this.enabled&&(this.init(),this.playPop()),this.enabled}playClick(){if(this.enabled)try{if(this.init(),!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.currentTime;e.type="sine",e.frequency.setValueAtTime(600,i),e.frequency.exponentialRampToValueAtTime(120,i+.035),n.gain.setValueAtTime(.08,i),n.gain.exponentialRampToValueAtTime(.001,i+.035),e.connect(n),n.connect(this.ctx.destination),e.start(i),e.stop(i+.04)}catch{}}playPop(){if(this.enabled)try{if(this.init(),!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.currentTime;e.type="triangle",e.frequency.setValueAtTime(540,i),e.frequency.exponentialRampToValueAtTime(880,i+.04),n.gain.setValueAtTime(.06,i),n.gain.exponentialRampToValueAtTime(.001,i+.06),e.connect(n),n.connect(this.ctx.destination),e.start(i),e.stop(i+.07)}catch{}}playSwitch(){if(this.enabled)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(450,e),i.gain.setValueAtTime(.05,e),i.gain.exponentialRampToValueAtTime(.001,e+.02),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.025);const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(900,e+.03),s.gain.setValueAtTime(.05,e+.03),s.gain.exponentialRampToValueAtTime(.001,e+.06),r.connect(s),s.connect(this.ctx.destination),r.start(e+.03),r.stop(e+.07)}catch{}}playSuccess(){if(this.enabled)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime;[523.25,659.25,783.99].forEach((i,r)=>{const s=this.ctx.createOscillator(),a=this.ctx.createGain(),o=e+r*.04;s.type="sine",s.frequency.setValueAtTime(i,o),a.gain.setValueAtTime(.05,o),a.gain.exponentialRampToValueAtTime(.001,o+.12),s.connect(a),a.connect(this.ctx.destination),s.start(o),s.stop(o+.14)})}catch{}}playModalOpen(){if(this.enabled)try{if(this.init(),!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.currentTime;e.type="sine",e.frequency.setValueAtTime(280,i),e.frequency.exponentialRampToValueAtTime(560,i+.08),n.gain.setValueAtTime(.05,i),n.gain.exponentialRampToValueAtTime(.001,i+.1),e.connect(n),n.connect(this.ctx.destination),e.start(i),e.stop(i+.11)}catch{}}}const Me=new ty;function ny({onOpenCommandPalette:t,soundEnabled:e,onToggleSound:n,accentColor:i,onSelectAccent:r,onShowToast:s}){const[a,o]=_e.useState(""),[l,c]=_e.useState(!1),[h,f]=_e.useState(!1),p=[{name:"Cyan",hex:"#00F0FF"},{name:"Violet",hex:"#8B5CF6"},{name:"Emerald",hex:"#10B981"},{name:"Amber",hex:"#F59E0B"}];_e.useEffect(()=>{const S=()=>{o(new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})+" UTC+5:30")};S();const m=setInterval(S,1e3);return()=>clearInterval(m)},[]);const g=[{label:"About",href:"#about"},{label:"Works",href:"#works"},{label:"Bento Lab",href:"#lab"},{label:"Stack Radar",href:"#radar"},{label:"Scope Estimator",href:"#estimator"},{label:"Live GitHub",href:"#github-activity"}],_=(S,m)=>{S.preventDefault(),Me.playClick(),c(!1);const d=document.querySelector(m);d&&d.scrollIntoView({behavior:"smooth"})};return u.jsxs("header",{className:"sticky top-0 z-40 w-full px-4 lg:px-8 py-3.5 backdrop-blur-xl bg-obsidian-950/75 border-b border-white/10 transition-all",children:[u.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[u.jsxs("a",{href:"#",onClick:S=>{S.preventDefault(),Me.playPop(),window.scrollTo({top:0,behavior:"smooth"})},className:"flex items-center gap-3 group",children:[u.jsxs("div",{className:"relative flex items-center justify-center w-8 h-8 rounded-lg bg-obsidian-850 border border-white/15 text-slate-100 font-mono font-bold text-xs shadow-inner group-hover:border-brand-cyan/60 transition-colors",children:[u.jsx("span",{className:"text-brand-cyan",children:"S"}),u.jsxs("span",{className:"absolute -top-1 -right-1 flex h-2 w-2",children:[u.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),u.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]})]}),u.jsx("div",{className:"flex flex-col",children:u.jsxs("span",{className:"font-display font-semibold text-sm tracking-tight text-slate-100 group-hover:text-white transition-colors flex items-center gap-1.5",children:["Sumit",u.jsx("span",{className:"text-[10px] font-mono font-normal px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-brand-cyan",children:"Full-Stack & AI"})]})})]}),u.jsx("nav",{className:"hidden md:flex items-center gap-1 px-3 py-1 rounded-full bg-obsidian-900/90 border border-white/10 text-xs text-slate-400 shadow-inner",children:g.map(S=>u.jsx("a",{href:S.href,onClick:m=>_(m,S.href),className:"px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all font-medium",children:S.label},S.label))}),u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsxs("div",{className:"hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-obsidian-900/60 border border-white/5 text-[11px] font-mono text-slate-400",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500"}),u.jsx("span",{children:a||"19:20 UTC+5:30"})]}),u.jsx("button",{onClick:()=>{n(),Me.playSwitch()},title:e?"Mute micro-interaction sound effects":"Enable tactile micro-interaction sounds",className:`p-2 rounded-lg border transition-all text-xs flex items-center gap-1.5 ${e?"bg-brand-cyan/10 border-brand-cyan/30 text-brand-cyan shadow-glow-sm":"bg-obsidian-900 border-white/10 text-slate-400 hover:text-white"}`,children:e?u.jsxs(u.Fragment,{children:[u.jsx(xx,{className:"w-3.5 h-3.5"}),u.jsxs("div",{className:"flex items-end gap-0.5 h-3",children:[u.jsx("span",{className:"w-0.5 h-1.5 bg-brand-cyan animate-pulse"}),u.jsx("span",{className:"w-0.5 h-3 bg-brand-cyan animate-pulse delay-75"}),u.jsx("span",{className:"w-0.5 h-2 bg-brand-cyan animate-pulse delay-150"})]})]}):u.jsx(vx,{className:"w-3.5 h-3.5"})}),u.jsxs("div",{className:"relative",children:[u.jsx("button",{onClick:()=>{f(!h),Me.playClick()},title:"Change Ambient Glow Accent",className:"p-2 rounded-lg bg-obsidian-900 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all flex items-center",children:u.jsx(px,{className:"w-3.5 h-3.5"})}),h&&u.jsxs("div",{className:"absolute right-0 mt-2 w-36 bg-obsidian-900 border border-white/15 rounded-xl shadow-2xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150",onClick:()=>f(!1),children:[u.jsx("div",{className:"text-[10px] font-mono text-slate-400 px-2 py-1 uppercase tracking-wider",children:"Glow Accent"}),p.map(S=>u.jsxs("button",{onClick:()=>{r(S.hex),Me.playPop(),s(`Accent switched to ${S.name}`)},className:`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${i===S.hex?"bg-white/15 text-white":"text-slate-300 hover:bg-white/5"}`,children:[u.jsx("span",{children:S.name}),u.jsx("span",{className:"w-2.5 h-2.5 rounded-full",style:{backgroundColor:S.hex}})]},S.hex))]})]}),u.jsxs("button",{onClick:()=>{Me.playClick(),t()},className:"flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-obsidian-900 border border-white/15 text-xs text-slate-300 hover:border-white/30 hover:text-white transition-all shadow-sm group",children:[u.jsx(mx,{className:"w-3.5 h-3.5 text-slate-400 group-hover:text-brand-cyan transition-colors"}),u.jsx("span",{className:"hidden sm:inline text-[11px] font-sans text-slate-400",children:"Search"}),u.jsxs("kbd",{className:"flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono bg-white/5 border border-white/10 rounded text-slate-400 group-hover:text-slate-200",children:[u.jsx(ux,{className:"w-2.5 h-2.5"}),"K"]})]}),u.jsxs("a",{href:"#contact",onClick:S=>_(S,"#contact"),className:"hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-medium text-white transition-all shadow-inner hover:shadow-glow-sm",children:[u.jsx("span",{children:"Let's Talk"}),u.jsx(Zd,{className:"w-3 h-3 text-slate-300"})]}),u.jsx("button",{onClick:()=>c(!l),className:"md:hidden p-2 rounded-lg bg-obsidian-900 border border-white/10 text-slate-300 hover:text-white",children:l?u.jsx(tf,{className:"w-4 h-4"}):u.jsx(W_,{className:"w-4 h-4"})})]})]}),l&&u.jsxs("div",{className:"md:hidden mt-3 pt-3 border-t border-white/10 space-y-2 pb-2",children:[g.map(S=>u.jsx("a",{href:S.href,onClick:m=>_(m,S.href),className:"block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/5 hover:text-white font-medium",children:S.label},S.label)),u.jsx("a",{href:"#contact",onClick:S=>_(S,"#contact"),className:"block w-full text-center px-4 py-2 mt-2 rounded-lg bg-white/10 text-white font-medium text-sm",children:"Let's Talk"})]})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nf="162",iy=0,Th=1,ry=2,_x=1,sy=2,ii=3,Xi=0,rn=1,ai=2,Hi=0,ds=1,Vu=2,Ah=3,Ch=4,ay=5,ur=100,oy=101,ly=102,Rh=103,Nh=104,cy=200,uy=201,dy=202,fy=203,Wu=204,Xu=205,hy=206,py=207,my=208,gy=209,xy=210,vy=211,_y=212,yy=213,Sy=214,My=0,Ey=1,wy=2,dl=3,by=4,Ty=5,Ay=6,Cy=7,yx=0,Ry=1,Ny=2,Gi=0,Py=1,Ly=2,Dy=3,Iy=4,Uy=5,ky=6,Fy=7,Sx=300,ys=301,Ss=302,$u=303,qu=304,Ul=306,Yu=1e3,Un=1001,Ku=1002,Wt=1003,Ph=1004,Os=1005,Kt=1006,gc=1007,mr=1008,ji=1009,Oy=1010,zy=1011,rf=1012,Mx=1013,Li=1014,oi=1015,Ma=1016,Ex=1017,wx=1018,vr=1020,By=1021,kn=1023,Hy=1024,Gy=1025,_r=1026,Ms=1027,jy=1028,bx=1029,Vy=1030,Tx=1031,Ax=1033,xc=33776,vc=33777,_c=33778,yc=33779,Lh=35840,Dh=35841,Ih=35842,Uh=35843,Cx=36196,kh=37492,Fh=37496,Oh=37808,zh=37809,Bh=37810,Hh=37811,Gh=37812,jh=37813,Vh=37814,Wh=37815,Xh=37816,$h=37817,qh=37818,Yh=37819,Kh=37820,Zh=37821,Sc=36492,Qh=36494,Jh=36495,Wy=36283,ep=36284,tp=36285,np=36286,Xy=3200,$y=3201,qy=0,Yy=1,Ri="",Wn="srgb",Zi="srgb-linear",sf="display-p3",kl="display-p3-linear",fl="linear",rt="srgb",hl="rec709",pl="p3",Rr=7680,ip=519,Ky=512,Zy=513,Qy=514,Rx=515,Jy=516,eS=517,tS=518,nS=519,rp=35044,sp="300 es",Zu=1035,ui=2e3,ml=2001;class As{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mc=Math.PI/180,Qu=180/Math.PI;function Ca(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Qt(t,e,n){return Math.max(e,Math.min(n,t))}function iS(t,e){return(t%e+e)%e}function Ec(t,e,n){return(1-n)*t+n*e}function ap(t){return(t&t-1)===0&&t!==0}function Ju(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function zs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,n,i,r,s,a,o,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],p=i[2],g=i[5],_=i[8],S=r[0],m=r[3],d=r[6],v=r[1],x=r[4],y=r[7],w=r[2],A=r[5],b=r[8];return s[0]=a*S+o*v+l*w,s[3]=a*m+o*x+l*A,s[6]=a*d+o*y+l*b,s[1]=c*S+h*v+f*w,s[4]=c*m+h*x+f*A,s[7]=c*d+h*y+f*b,s[2]=p*S+g*v+_*w,s[5]=p*m+g*x+_*A,s[8]=p*d+g*y+_*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,p=o*l-h*s,g=c*s-a*l,_=n*f+i*p+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=f*S,e[1]=(r*c-h*i)*S,e[2]=(o*i-r*a)*S,e[3]=p*S,e[4]=(h*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=g*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(wc.makeScale(e,n)),this}rotate(e){return this.premultiply(wc.makeRotation(-e)),this}translate(e,n){return this.premultiply(wc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wc=new Oe;function Nx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function gl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function rS(){const t=gl("canvas");return t.style.display="block",t}const op={};function sS(t){t in op||(op[t]=!0,console.warn(t))}const lp=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cp=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qa={[Zi]:{transfer:fl,primaries:hl,toReference:t=>t,fromReference:t=>t},[Wn]:{transfer:rt,primaries:hl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[kl]:{transfer:fl,primaries:pl,toReference:t=>t.applyMatrix3(cp),fromReference:t=>t.applyMatrix3(lp)},[sf]:{transfer:rt,primaries:pl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(cp),fromReference:t=>t.applyMatrix3(lp).convertLinearToSRGB()}},aS=new Set([Zi,kl]),Je={enabled:!0,_workingColorSpace:Zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!aS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Qa[e].toReference,r=Qa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Qa[t].primaries},getTransfer:function(t){return t===Ri?fl:Qa[t].transfer}};function fs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function bc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Nr;class Px{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Nr===void 0&&(Nr=gl("canvas")),Nr.width=e.width,Nr.height=e.height;const i=Nr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Nr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=gl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=fs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(fs(n[i]/255)*255):n[i]=fs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oS=0;class Lx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=Ca(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Tc(r[a].image)):s.push(Tc(r[a]))}else s=Tc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Tc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Px.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lS=0;class sn extends As{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=Un,r=Un,s=Kt,a=mr,o=kn,l=ji,c=sn.DEFAULT_ANISOTROPY,h=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=Ca(),this.name="",this.source=new Lx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yu:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case Ku:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yu:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case Ku:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Sx;sn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],p=l[1],g=l[5],_=l[9],S=l[2],m=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(f-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,y=(g+1)/2,w=(d+1)/2,A=(h+p)/4,b=(f+S)/4,N=(_+m)/4;return x>y&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=b/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=N/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=b/s,r=N/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-_)*(m-_)+(f-S)*(f-S)+(p-h)*(p-h));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-S)/v,this.z=(p-h)/v,this.w=Math.acos((c+g+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cS extends As{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Lx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends cS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Dx extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uS extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ra{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3];const p=s[a+0],g=s[a+1],_=s[a+2],S=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f;return}if(o===1){e[n+0]=p,e[n+1]=g,e[n+2]=_,e[n+3]=S;return}if(f!==S||l!==p||c!==g||h!==_){let m=1-o;const d=l*p+c*g+h*_+f*S,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const w=Math.sqrt(x),A=Math.atan2(w,d*v);m=Math.sin(m*A)/w,o=Math.sin(o*A)/w}const y=o*v;if(l=l*m+p*y,c=c*m+g*y,h=h*m+_*y,f=f*m+S*y,m===1-o){const w=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=w,c*=w,h*=w,f*=w}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[a],p=s[a+1],g=s[a+2],_=s[a+3];return e[n]=o*_+h*f+l*g-c*p,e[n+1]=l*_+h*p+c*f-o*g,e[n+2]=c*_+h*g+o*p-l*f,e[n+3]=h*_-o*f-l*p-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),f=o(s/2),p=l(i/2),g=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=p*h*f+c*g*_,this._y=c*g*f-p*h*_,this._z=c*h*_+p*g*f,this._w=c*h*f-p*g*_;break;case"YXZ":this._x=p*h*f+c*g*_,this._y=c*g*f-p*h*_,this._z=c*h*_-p*g*f,this._w=c*h*f+p*g*_;break;case"ZXY":this._x=p*h*f-c*g*_,this._y=c*g*f+p*h*_,this._z=c*h*_+p*g*f,this._w=c*h*f-p*g*_;break;case"ZYX":this._x=p*h*f-c*g*_,this._y=c*g*f+p*h*_,this._z=c*h*_-p*g*f,this._w=c*h*f+p*g*_;break;case"YZX":this._x=p*h*f+c*g*_,this._y=c*g*f+p*h*_,this._z=c*h*_-p*g*f,this._w=c*h*f-p*g*_;break;case"XZY":this._x=p*h*f-c*g*_,this._y=c*g*f-p*h*_,this._z=c*h*_+p*g*f,this._w=c*h*f+p*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],f=n[10],p=i+o+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>f){const g=2*Math.sqrt(1+i-o-f);this._w=(h-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>f){const g=2*Math.sqrt(1+o-i-f);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+f-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-n)*h)/c,p=Math.sin(n*h)/c;return this._w=a*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(up.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(up.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*h,this.y=i+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ac.copy(this).projectOnVector(e),this.sub(Ac)}reflect(e){return this.sub(Ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ac=new F,up=new Ra;class Na{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Rn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Rn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Rn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(s,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ja.copy(i.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),eo.subVectors(this.max,Bs),Pr.subVectors(e.a,Bs),Lr.subVectors(e.b,Bs),Dr.subVectors(e.c,Bs),_i.subVectors(Lr,Pr),yi.subVectors(Dr,Lr),er.subVectors(Pr,Dr);let n=[0,-_i.z,_i.y,0,-yi.z,yi.y,0,-er.z,er.y,_i.z,0,-_i.x,yi.z,0,-yi.x,er.z,0,-er.x,-_i.y,_i.x,0,-yi.y,yi.x,0,-er.y,er.x,0];return!Cc(n,Pr,Lr,Dr,eo)||(n=[1,0,0,0,1,0,0,0,1],!Cc(n,Pr,Lr,Dr,eo))?!1:(to.crossVectors(_i,yi),n=[to.x,to.y,to.z],Cc(n,Pr,Lr,Dr,eo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new F,new F,new F,new F,new F,new F,new F,new F],Rn=new F,Ja=new Na,Pr=new F,Lr=new F,Dr=new F,_i=new F,yi=new F,er=new F,Bs=new F,eo=new F,to=new F,tr=new F;function Cc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){tr.fromArray(t,s);const o=r.x*Math.abs(tr.x)+r.y*Math.abs(tr.y)+r.z*Math.abs(tr.z),l=e.dot(tr),c=n.dot(tr),h=i.dot(tr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const dS=new Na,Hs=new F,Rc=new F;class Fl{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):dS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);const n=Hs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Hs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(Rc)),this.expandByPoint(Hs.copy(e.center).sub(Rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new F,Nc=new F,no=new F,Si=new F,Pc=new F,io=new F,Lc=new F;class Ix{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,n),Jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Nc.copy(e).add(n).multiplyScalar(.5),no.copy(n).sub(e).normalize(),Si.copy(this.origin).sub(Nc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(no),o=Si.dot(this.direction),l=-Si.dot(no),c=Si.lengthSq(),h=Math.abs(1-a*a);let f,p,g,_;if(h>0)if(f=a*l-o,p=a*o-l,_=s*h,f>=0)if(p>=-_)if(p<=_){const S=1/h;f*=S,p*=S,g=f*(f+a*p+2*o)+p*(a*f+p+2*l)+c}else p=s,f=Math.max(0,-(a*p+o)),g=-f*f+p*(p+2*l)+c;else p=-s,f=Math.max(0,-(a*p+o)),g=-f*f+p*(p+2*l)+c;else p<=-_?(f=Math.max(0,-(-a*s+o)),p=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+p*(p+2*l)+c):p<=_?(f=0,p=Math.min(Math.max(-s,-l),s),g=p*(p+2*l)+c):(f=Math.max(0,-(a*s+o)),p=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+p*(p+2*l)+c);else p=a>0?-s:s,f=Math.max(0,-(a*p+o)),g=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Nc).addScaledVector(no,p),g}intersectSphere(e,n){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,n,i,r,s){Pc.subVectors(n,e),io.subVectors(i,e),Lc.crossVectors(Pc,io);let a=this.direction.dot(Lc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Si.subVectors(this.origin,e);const l=o*this.direction.dot(io.crossVectors(Si,io));if(l<0)return null;const c=o*this.direction.dot(Pc.cross(Si));if(c<0||l+c>a)return null;const h=-o*Si.dot(Lc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,n,i,r,s,a,o,l,c,h,f,p,g,_,S,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,f,p,g,_,S,m)}set(e,n,i,r,s,a,o,l,c,h,f,p,g,_,S,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=p,d[3]=g,d[7]=_,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ir.setFromMatrixColumn(e,0).length(),s=1/Ir.setFromMatrixColumn(e,1).length(),a=1/Ir.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const p=a*h,g=a*f,_=o*h,S=o*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=g+_*c,n[5]=p-S*c,n[9]=-o*l,n[2]=S-p*c,n[6]=_+g*c,n[10]=a*l}else if(e.order==="YXZ"){const p=l*h,g=l*f,_=c*h,S=c*f;n[0]=p+S*o,n[4]=_*o-g,n[8]=a*c,n[1]=a*f,n[5]=a*h,n[9]=-o,n[2]=g*o-_,n[6]=S+p*o,n[10]=a*l}else if(e.order==="ZXY"){const p=l*h,g=l*f,_=c*h,S=c*f;n[0]=p-S*o,n[4]=-a*f,n[8]=_+g*o,n[1]=g+_*o,n[5]=a*h,n[9]=S-p*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const p=a*h,g=a*f,_=o*h,S=o*f;n[0]=l*h,n[4]=_*c-g,n[8]=p*c+S,n[1]=l*f,n[5]=S*c+p,n[9]=g*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const p=a*l,g=a*c,_=o*l,S=o*c;n[0]=l*h,n[4]=S-p*f,n[8]=_*f+g,n[1]=f,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=g*f+_,n[10]=p-S*f}else if(e.order==="XZY"){const p=a*l,g=a*c,_=o*l,S=o*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=p*f+S,n[5]=a*h,n[9]=g*f-_,n[2]=_*f-g,n[6]=o*h,n[10]=S*f+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fS,e,hS)}lookAt(e,n,i){const r=this.elements;return ln.subVectors(e,n),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Mi.crossVectors(i,ln),Mi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Mi.crossVectors(i,ln)),Mi.normalize(),ro.crossVectors(ln,Mi),r[0]=Mi.x,r[4]=ro.x,r[8]=ln.x,r[1]=Mi.y,r[5]=ro.y,r[9]=ln.y,r[2]=Mi.z,r[6]=ro.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],p=i[9],g=i[13],_=i[2],S=i[6],m=i[10],d=i[14],v=i[3],x=i[7],y=i[11],w=i[15],A=r[0],b=r[4],N=r[8],V=r[12],M=r[1],C=r[5],$=r[9],Z=r[13],P=r[2],q=r[6],X=r[10],Q=r[14],L=r[3],O=r[7],U=r[11],Y=r[15];return s[0]=a*A+o*M+l*P+c*L,s[4]=a*b+o*C+l*q+c*O,s[8]=a*N+o*$+l*X+c*U,s[12]=a*V+o*Z+l*Q+c*Y,s[1]=h*A+f*M+p*P+g*L,s[5]=h*b+f*C+p*q+g*O,s[9]=h*N+f*$+p*X+g*U,s[13]=h*V+f*Z+p*Q+g*Y,s[2]=_*A+S*M+m*P+d*L,s[6]=_*b+S*C+m*q+d*O,s[10]=_*N+S*$+m*X+d*U,s[14]=_*V+S*Z+m*Q+d*Y,s[3]=v*A+x*M+y*P+w*L,s[7]=v*b+x*C+y*q+w*O,s[11]=v*N+x*$+y*X+w*U,s[15]=v*V+x*Z+y*Q+w*Y,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],p=e[10],g=e[14],_=e[3],S=e[7],m=e[11],d=e[15];return _*(+s*l*f-r*c*f-s*o*p+i*c*p+r*o*g-i*l*g)+S*(+n*l*g-n*c*p+s*a*p-r*a*g+r*c*h-s*l*h)+m*(+n*c*f-n*o*g-s*a*f+i*a*g+s*o*h-i*c*h)+d*(-r*o*h-n*l*f+n*o*p+r*a*f-i*a*p+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],p=e[10],g=e[11],_=e[12],S=e[13],m=e[14],d=e[15],v=f*m*c-S*p*c+S*l*g-o*m*g-f*l*d+o*p*d,x=_*p*c-h*m*c-_*l*g+a*m*g+h*l*d-a*p*d,y=h*S*c-_*f*c+_*o*g-a*S*g-h*o*d+a*f*d,w=_*f*l-h*S*l-_*o*p+a*S*p+h*o*m-a*f*m,A=n*v+i*x+r*y+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=v*b,e[1]=(S*p*s-f*m*s-S*r*g+i*m*g+f*r*d-i*p*d)*b,e[2]=(o*m*s-S*l*s+S*r*c-i*m*c-o*r*d+i*l*d)*b,e[3]=(f*l*s-o*p*s-f*r*c+i*p*c+o*r*g-i*l*g)*b,e[4]=x*b,e[5]=(h*m*s-_*p*s+_*r*g-n*m*g-h*r*d+n*p*d)*b,e[6]=(_*l*s-a*m*s-_*r*c+n*m*c+a*r*d-n*l*d)*b,e[7]=(a*p*s-h*l*s+h*r*c-n*p*c-a*r*g+n*l*g)*b,e[8]=y*b,e[9]=(_*f*s-h*S*s-_*i*g+n*S*g+h*i*d-n*f*d)*b,e[10]=(a*S*s-_*o*s+_*i*c-n*S*c-a*i*d+n*o*d)*b,e[11]=(h*o*s-a*f*s-h*i*c+n*f*c+a*i*g-n*o*g)*b,e[12]=w*b,e[13]=(h*S*r-_*f*r+_*i*p-n*S*p-h*i*m+n*f*m)*b,e[14]=(_*o*r-a*S*r-_*i*l+n*S*l+a*i*m-n*o*m)*b,e[15]=(a*f*r-h*o*r+h*i*l-n*f*l-a*i*p+n*o*p)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,f=o+o,p=s*c,g=s*h,_=s*f,S=a*h,m=a*f,d=o*f,v=l*c,x=l*h,y=l*f,w=i.x,A=i.y,b=i.z;return r[0]=(1-(S+d))*w,r[1]=(g+y)*w,r[2]=(_-x)*w,r[3]=0,r[4]=(g-y)*A,r[5]=(1-(p+d))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(_+x)*b,r[9]=(m-v)*b,r[10]=(1-(p+S))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ir.set(r[0],r[1],r[2]).length();const a=Ir.set(r[4],r[5],r[6]).length(),o=Ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const c=1/s,h=1/a,f=1/o;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=f,Nn.elements[9]*=f,Nn.elements[10]*=f,n.setFromRotationMatrix(Nn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=ui){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let g,_;if(o===ui)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ml)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ui){const l=this.elements,c=1/(n-e),h=1/(i-r),f=1/(a-s),p=(n+e)*c,g=(i+r)*h;let _,S;if(o===ui)_=(a+s)*f,S=-2*f;else if(o===ml)_=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=S,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ir=new F,Nn=new yt,fS=new F(0,0,0),hS=new F(1,1,1),Mi=new F,ro=new F,ln=new F,dp=new yt,fp=new Ra;class gi{constructor(e=0,n=0,i=0,r=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],p=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return dp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fp.setFromEuler(this),this.setFromQuaternion(fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class Ux{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pS=0;const hp=new F,Ur=new Ra,ei=new yt,so=new F,Gs=new F,mS=new F,gS=new Ra,pp=new F(1,0,0),mp=new F(0,1,0),gp=new F(0,0,1),xS={type:"added"},vS={type:"removed"},Dc={type:"childadded",child:null},Ic={type:"childremoved",child:null};class an extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new F,n=new gi,i=new Ra,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Oe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ux,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ur.setFromAxisAngle(e,n),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,n){return Ur.setFromAxisAngle(e,n),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(pp,e)}rotateY(e){return this.rotateOnAxis(mp,e)}rotateZ(e){return this.rotateOnAxis(gp,e)}translateOnAxis(e,n){return hp.copy(e).applyQuaternion(this.quaternion),this.position.add(hp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(pp,e)}translateY(e){return this.translateOnAxis(mp,e)}translateZ(e){return this.translateOnAxis(gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?so.copy(e):so.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Gs,so,this.up):ei.lookAt(so,Gs,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(ei),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xS),Dc.child=e,this.dispatchEvent(Dc),Dc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(vS),Ic.child=e,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,mS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,gS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),p=a(e.skeletons),g=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}an.DEFAULT_UP=new F(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new F,ti=new F,Uc=new F,ni=new F,kr=new F,Fr=new F,xp=new F,kc=new F,Fc=new F,Oc=new F;class qn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pn.subVectors(e,n),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pn.subVectors(r,n),ti.subVectors(i,n),Uc.subVectors(e,n);const a=Pn.dot(Pn),o=Pn.dot(ti),l=Pn.dot(Uc),c=ti.dot(ti),h=ti.dot(Uc),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const p=1/f,g=(c*l-o*h)*p,_=(a*h-o*l)*p;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l)}static isFrontFacing(e,n,i,r){return Pn.subVectors(i,n),ti.subVectors(e,n),Pn.cross(ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Pn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;kr.subVectors(r,i),Fr.subVectors(s,i),kc.subVectors(e,i);const l=kr.dot(kc),c=Fr.dot(kc);if(l<=0&&c<=0)return n.copy(i);Fc.subVectors(e,r);const h=kr.dot(Fc),f=Fr.dot(Fc);if(h>=0&&f<=h)return n.copy(r);const p=l*f-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(kr,a);Oc.subVectors(e,s);const g=kr.dot(Oc),_=Fr.dot(Oc);if(_>=0&&g<=_)return n.copy(s);const S=g*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Fr,o);const m=h*_-g*f;if(m<=0&&f-h>=0&&g-_>=0)return xp.subVectors(s,r),o=(f-h)/(f-h+(g-_)),n.copy(r).addScaledVector(xp,o);const d=1/(m+S+p);return a=S*d,o=p*d,n.copy(i).addScaledVector(kr,a).addScaledVector(Fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},ao={h:0,s:0,l:0};function zc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=iS(e,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=zc(a,s,e+1/3),this.g=zc(a,s,e),this.b=zc(a,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wn){const i=kx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}copyLinearToSRGB(e){return this.r=bc(e.r),this.g=bc(e.g),this.b=bc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return Je.fromWorkingColorSpace(zt.copy(this),e),Math.round(Qt(zt.r*255,0,255))*65536+Math.round(Qt(zt.g*255,0,255))*256+Math.round(Qt(zt.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Wn){Je.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==Wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+n,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ei),e.getHSL(ao);const i=Ec(Ei.h,ao.h,n),r=Ec(Ei.s,ao.s,n),s=Ec(Ei.l,ao.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Ke;Ke.NAMES=kx;let _S=0;class Pa extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=Ca(),this.name="",this.type="Material",this.blending=ds,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wu,this.blendDst=Xu,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=dl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ip,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wu&&(i.blendSrc=this.blendSrc),this.blendDst!==Xu&&(i.blendDst=this.blendDst),this.blendEquation!==ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==dl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ip&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ra extends Pa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=yx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new F,oo=new qe;class zn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=rp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return sS("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)oo.fromBufferAttribute(this,n),oo.applyMatrix3(e),this.setXY(n,oo.x,oo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix3(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix4(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyNormalMatrix(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.transformDirection(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=zs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=zs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=zs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=zs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=zs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rp&&(e.usage=this.usage),e}}class Fx extends zn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ox extends zn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class hn extends zn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let yS=0;const _n=new yt,Bc=new an,Or=new F,cn=new Na,js=new Na,Tt=new F;class Hn extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=Ca(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nx(e)?Ox:Fx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,n,i){return _n.makeTranslation(e,n,i),this.applyMatrix4(_n),this}scale(e,n,i){return _n.makeScale(e,n,i),this.applyMatrix4(_n),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new hn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Na);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];js.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(cn.min,js.min),cn.expandByPoint(Tt),Tt.addVectors(cn.max,js.max),cn.expandByPoint(Tt)):(cn.expandByPoint(js.min),cn.expandByPoint(js.max))}cn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Tt.fromBufferAttribute(o,c),l&&(Or.fromBufferAttribute(e,c),Tt.add(Or)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new F,l[N]=new F;const c=new F,h=new F,f=new F,p=new qe,g=new qe,_=new qe,S=new F,m=new F;function d(N,V,M){c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,V),f.fromBufferAttribute(i,M),p.fromBufferAttribute(s,N),g.fromBufferAttribute(s,V),_.fromBufferAttribute(s,M),h.sub(c),f.sub(c),g.sub(p),_.sub(p);const C=1/(g.x*_.y-_.x*g.y);isFinite(C)&&(S.copy(h).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(C),m.copy(f).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(C),o[N].add(S),o[V].add(S),o[M].add(S),l[N].add(m),l[V].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let N=0,V=v.length;N<V;++N){const M=v[N],C=M.start,$=M.count;for(let Z=C,P=C+$;Z<P;Z+=3)d(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const x=new F,y=new F,w=new F,A=new F;function b(N){w.fromBufferAttribute(r,N),A.copy(w);const V=o[N];x.copy(V),x.sub(w.multiplyScalar(w.dot(V))).normalize(),y.crossVectors(A,V);const C=y.dot(l[N])<0?-1:1;a.setXYZW(N,x.x,x.y,x.z,C)}for(let N=0,V=v.length;N<V;++N){const M=v[N],C=M.start,$=M.count;for(let Z=C,P=C+$;Z<P;Z+=3)b(e.getX(Z+0)),b(e.getX(Z+1)),b(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new F,s=new F,a=new F,o=new F,l=new F,c=new F,h=new F,f=new F;if(e)for(let p=0,g=e.count;p<g;p+=3){const _=e.getX(p+0),S=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,m),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,g=n.count;p<g;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),a.fromBufferAttribute(n,p+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Tt.fromBufferAttribute(e,n),Tt.normalize(),e.setXYZ(n,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,p=new c.constructor(l.length*h);let g=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?g=l[S]*o.data.stride+o.offset:g=l[S]*h;for(let d=0;d<h;d++)p[_++]=c[g++]}return new zn(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Hn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const p=c[h],g=e(p,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,p=c.length;f<p;f++){const g=c[f];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let p=0,g=f.length;p<g;p++)h.push(f[p].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vp=new yt,nr=new Ix,lo=new Fl,_p=new F,zr=new F,Br=new F,Hr=new F,Hc=new F,co=new F,uo=new qe,fo=new qe,ho=new qe,yp=new F,Sp=new F,Mp=new F,po=new F,mo=new F;class wn extends an{constructor(e=new Hn,n=new ra){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){co.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(Hc.fromBufferAttribute(f,e),a?co.addScaledVector(Hc,h):co.addScaledVector(Hc.sub(n),h))}n.add(co)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(s),nr.copy(e.ray).recast(e.near),!(lo.containsPoint(nr.origin)===!1&&(nr.intersectSphere(lo,_p)===null||nr.origin.distanceToSquared(_p)>(e.far-e.near)**2))&&(vp.copy(s).invert(),nr.copy(e.ray).applyMatrix4(vp),!(i.boundingBox!==null&&nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,nr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,p=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=p.length;_<S;_++){const m=p[_],d=a[m.materialIndex],v=Math.max(m.start,g.start),x=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let y=v,w=x;y<w;y+=3){const A=o.getX(y),b=o.getX(y+1),N=o.getX(y+2);r=go(this,d,e,i,c,h,f,A,b,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),S=Math.min(o.count,g.start+g.count);for(let m=_,d=S;m<d;m+=3){const v=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);r=go(this,a,e,i,c,h,f,v,x,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=p.length;_<S;_++){const m=p[_],d=a[m.materialIndex],v=Math.max(m.start,g.start),x=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let y=v,w=x;y<w;y+=3){const A=y,b=y+1,N=y+2;r=go(this,d,e,i,c,h,f,A,b,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let m=_,d=S;m<d;m+=3){const v=m,x=m+1,y=m+2;r=go(this,a,e,i,c,h,f,v,x,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function SS(t,e,n,i,r,s,a,o){let l;if(e.side===rn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Xi,o),l===null)return null;mo.copy(o),mo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(mo);return c<n.near||c>n.far?null:{distance:c,point:mo.clone(),object:t}}function go(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,zr),t.getVertexPosition(l,Br),t.getVertexPosition(c,Hr);const h=SS(t,e,n,i,zr,Br,Hr,po);if(h){r&&(uo.fromBufferAttribute(r,o),fo.fromBufferAttribute(r,l),ho.fromBufferAttribute(r,c),h.uv=qn.getInterpolation(po,zr,Br,Hr,uo,fo,ho,new qe)),s&&(uo.fromBufferAttribute(s,o),fo.fromBufferAttribute(s,l),ho.fromBufferAttribute(s,c),h.uv1=qn.getInterpolation(po,zr,Br,Hr,uo,fo,ho,new qe)),a&&(yp.fromBufferAttribute(a,o),Sp.fromBufferAttribute(a,l),Mp.fromBufferAttribute(a,c),h.normal=qn.getInterpolation(po,zr,Br,Hr,yp,Sp,Mp,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new F,materialIndex:0};qn.getNormal(zr,Br,Hr,f.normal),h.face=f}return h}class La extends Hn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let p=0,g=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new hn(c,3)),this.setAttribute("normal",new hn(h,3)),this.setAttribute("uv",new hn(f,2));function _(S,m,d,v,x,y,w,A,b,N,V){const M=y/b,C=w/N,$=y/2,Z=w/2,P=A/2,q=b+1,X=N+1;let Q=0,L=0;const O=new F;for(let U=0;U<X;U++){const Y=U*C-Z;for(let ne=0;ne<q;ne++){const me=ne*M-$;O[S]=me*v,O[m]=Y*x,O[d]=P,c.push(O.x,O.y,O.z),O[S]=0,O[m]=0,O[d]=A>0?1:-1,h.push(O.x,O.y,O.z),f.push(ne/b),f.push(1-U/N),Q+=1}}for(let U=0;U<N;U++)for(let Y=0;Y<b;Y++){const ne=p+Y+q*U,me=p+Y+q*(U+1),G=p+(Y+1)+q*(U+1),J=p+(Y+1)+q*U;l.push(ne,me,J),l.push(me,G,J),L+=6}o.addGroup(g,L,V),g+=L,p+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Es(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function jt(t){const e={};for(let n=0;n<t.length;n++){const i=Es(t[n]);for(const r in i)e[r]=i[r]}return e}function MS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function zx(t){return t.getRenderTarget()===null?t.outputColorSpace:Je.workingColorSpace}const ES={clone:Es,merge:jt};var wS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Pa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wS,this.fragmentShader=bS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=MS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Bx extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new F,Ep=new qe,wp=new qe;class Mn extends Bx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Qu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qu*2*Math.atan(Math.tan(Mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,n){return this.getViewBounds(e,Ep,wp),n.subVectors(wp,Ep)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Mc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Gr=-90,jr=1;class TS extends an{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(Gr,jr,e,n);r.layers=this.layers,this.add(r);const s=new Mn(Gr,jr,e,n);s.layers=this.layers,this.add(s);const a=new Mn(Gr,jr,e,n);a.layers=this.layers,this.add(a);const o=new Mn(Gr,jr,e,n);o.layers=this.layers,this.add(o);const l=new Mn(Gr,jr,e,n);l.layers=this.layers,this.add(l);const c=new Mn(Gr,jr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ml)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(f,p,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Hx extends sn{constructor(e,n,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:ys,super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class AS extends br{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Hx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Kt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new La(5,5,5),s=new $i({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Hi});s.uniforms.tEquirect.value=n;const a=new wn(r,s),o=n.minFilter;return n.minFilter===mr&&(n.minFilter=Kt),new TS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Gc=new F,CS=new F,RS=new Oe;class lr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Gc.subVectors(i,n).cross(CS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Gc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||RS.getNormalMatrix(e),r=this.coplanarPoint(Gc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new Fl,xo=new F;class Gx{constructor(e=new lr,n=new lr,i=new lr,r=new lr,s=new lr,a=new lr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],f=r[6],p=r[7],g=r[8],_=r[9],S=r[10],m=r[11],d=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,p-c,m-g,y-d).normalize(),i[1].setComponents(l+s,p+c,m+g,y+d).normalize(),i[2].setComponents(l+a,p+h,m+_,y+v).normalize(),i[3].setComponents(l-a,p-h,m-_,y-v).normalize(),i[4].setComponents(l-o,p-f,m-S,y-x).normalize(),n===ui)i[5].setComponents(l+o,p+f,m+S,y+x).normalize();else if(n===ml)i[5].setComponents(o,f,S,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){return ir.center.set(0,0,0),ir.radius=.7071067811865476,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(xo.x=r.normal.x>0?e.max.x:e.min.x,xo.y=r.normal.y>0?e.max.y:e.min.y,xo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function NS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,h){const f=c.array,p=c.usage,g=f.byteLength,_=t.createBuffer();t.bindBuffer(h,_),t.bufferData(h,f,p),c.onUploadCallback();let S;if(f instanceof Float32Array)S=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)S=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)S=t.SHORT;else if(f instanceof Uint32Array)S=t.UNSIGNED_INT;else if(f instanceof Int32Array)S=t.INT;else if(f instanceof Int8Array)S=t.BYTE;else if(f instanceof Uint8Array)S=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)S=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:S,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,h,f){const p=h.array,g=h._updateRange,_=h.updateRanges;if(t.bindBuffer(f,c),g.count===-1&&_.length===0&&t.bufferSubData(f,0,p),_.length!==0){for(let S=0,m=_.length;S<m;S++){const d=_[S];n?t.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):t.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):t.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(t.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,h),f.version=c.version}}return{get:a,remove:o,update:l}}class Ol extends Hn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,f=e/o,p=n/l,g=[],_=[],S=[],m=[];for(let d=0;d<h;d++){const v=d*p-a;for(let x=0;x<c;x++){const y=x*f-s;_.push(y,-v,0),S.push(0,0,1),m.push(x/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){const x=v+c*d,y=v+c*(d+1),w=v+1+c*(d+1),A=v+1+c*d;g.push(x,y,A),g.push(y,w,A)}this.setIndex(g),this.setAttribute("position",new hn(_,3)),this.setAttribute("normal",new hn(S,3)),this.setAttribute("uv",new hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.width,e.height,e.widthSegments,e.heightSegments)}}var PS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,DS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,US=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,OS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,HS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,VS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,WS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,XS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$S=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,JS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,e1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,t1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,n1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,i1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o1="gl_FragColor = linearToOutputTexel( gl_FragColor );",l1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,c1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,u1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,d1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,f1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,p1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,y1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,w1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,b1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,N1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,P1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,L1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,D1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,F1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,O1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,z1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,H1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,q1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Y1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,K1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,oM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,pM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_M=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,SM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,NM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,OM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,zM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,HM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$M=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,KM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,QM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:PS,alphahash_pars_fragment:LS,alphamap_fragment:DS,alphamap_pars_fragment:IS,alphatest_fragment:US,alphatest_pars_fragment:kS,aomap_fragment:FS,aomap_pars_fragment:OS,batching_pars_vertex:zS,batching_vertex:BS,begin_vertex:HS,beginnormal_vertex:GS,bsdfs:jS,iridescence_fragment:VS,bumpmap_pars_fragment:WS,clipping_planes_fragment:XS,clipping_planes_pars_fragment:$S,clipping_planes_pars_vertex:qS,clipping_planes_vertex:YS,color_fragment:KS,color_pars_fragment:ZS,color_pars_vertex:QS,color_vertex:JS,common:e1,cube_uv_reflection_fragment:t1,defaultnormal_vertex:n1,displacementmap_pars_vertex:i1,displacementmap_vertex:r1,emissivemap_fragment:s1,emissivemap_pars_fragment:a1,colorspace_fragment:o1,colorspace_pars_fragment:l1,envmap_fragment:c1,envmap_common_pars_fragment:u1,envmap_pars_fragment:d1,envmap_pars_vertex:f1,envmap_physical_pars_fragment:w1,envmap_vertex:h1,fog_vertex:p1,fog_pars_vertex:m1,fog_fragment:g1,fog_pars_fragment:x1,gradientmap_pars_fragment:v1,lightmap_fragment:_1,lightmap_pars_fragment:y1,lights_lambert_fragment:S1,lights_lambert_pars_fragment:M1,lights_pars_begin:E1,lights_toon_fragment:b1,lights_toon_pars_fragment:T1,lights_phong_fragment:A1,lights_phong_pars_fragment:C1,lights_physical_fragment:R1,lights_physical_pars_fragment:N1,lights_fragment_begin:P1,lights_fragment_maps:L1,lights_fragment_end:D1,logdepthbuf_fragment:I1,logdepthbuf_pars_fragment:U1,logdepthbuf_pars_vertex:k1,logdepthbuf_vertex:F1,map_fragment:O1,map_pars_fragment:z1,map_particle_fragment:B1,map_particle_pars_fragment:H1,metalnessmap_fragment:G1,metalnessmap_pars_fragment:j1,morphinstance_vertex:V1,morphcolor_vertex:W1,morphnormal_vertex:X1,morphtarget_pars_vertex:$1,morphtarget_vertex:q1,normal_fragment_begin:Y1,normal_fragment_maps:K1,normal_pars_fragment:Z1,normal_pars_vertex:Q1,normal_vertex:J1,normalmap_pars_fragment:eM,clearcoat_normal_fragment_begin:tM,clearcoat_normal_fragment_maps:nM,clearcoat_pars_fragment:iM,iridescence_pars_fragment:rM,opaque_fragment:sM,packing:aM,premultiplied_alpha_fragment:oM,project_vertex:lM,dithering_fragment:cM,dithering_pars_fragment:uM,roughnessmap_fragment:dM,roughnessmap_pars_fragment:fM,shadowmap_pars_fragment:hM,shadowmap_pars_vertex:pM,shadowmap_vertex:mM,shadowmask_pars_fragment:gM,skinbase_vertex:xM,skinning_pars_vertex:vM,skinning_vertex:_M,skinnormal_vertex:yM,specularmap_fragment:SM,specularmap_pars_fragment:MM,tonemapping_fragment:EM,tonemapping_pars_fragment:wM,transmission_fragment:bM,transmission_pars_fragment:TM,uv_pars_fragment:AM,uv_pars_vertex:CM,uv_vertex:RM,worldpos_vertex:NM,background_vert:PM,background_frag:LM,backgroundCube_vert:DM,backgroundCube_frag:IM,cube_vert:UM,cube_frag:kM,depth_vert:FM,depth_frag:OM,distanceRGBA_vert:zM,distanceRGBA_frag:BM,equirect_vert:HM,equirect_frag:GM,linedashed_vert:jM,linedashed_frag:VM,meshbasic_vert:WM,meshbasic_frag:XM,meshlambert_vert:$M,meshlambert_frag:qM,meshmatcap_vert:YM,meshmatcap_frag:KM,meshnormal_vert:ZM,meshnormal_frag:QM,meshphong_vert:JM,meshphong_frag:eE,meshphysical_vert:tE,meshphysical_frag:nE,meshtoon_vert:iE,meshtoon_frag:rE,points_vert:sE,points_frag:aE,shadow_vert:oE,shadow_frag:lE,sprite_vert:cE,sprite_frag:uE},ae={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Xn={basic:{uniforms:jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:jt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:jt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:jt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:jt([ae.points,ae.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:jt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:jt([ae.common,ae.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:jt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:jt([ae.sprite,ae.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:jt([ae.common,ae.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:jt([ae.lights,ae.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Xn.physical={uniforms:jt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const vo={r:0,b:0,g:0},rr=new gi,dE=new yt;function fE(t,e,n,i,r,s,a){const o=new Ke(0);let l=s===!0?0:1,c,h,f=null,p=0,g=null;function _(m,d){let v=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?n:e).get(x)),x===null?S(o,l):x&&x.isColor&&(S(x,1),v=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ul)?(h===void 0&&(h=new wn(new La(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Es(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),rr.copy(d.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dE.makeRotationFromEuler(rr)),h.material.toneMapped=Je.getTransfer(x.colorSpace)!==rt,(f!==x||p!==x.version||g!==t.toneMapping)&&(h.material.needsUpdate=!0,f=x,p=x.version,g=t.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new wn(new Ol(2,2),new $i({name:"BackgroundMaterial",uniforms:Es(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Je.getTransfer(x.colorSpace)!==rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||p!==x.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,p=x.version,g=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function S(m,d){m.getRGB(vo,zx(t)),i.buffers.color.setClear(vo.r,vo.g,vo.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,S(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,S(o,l)},render:_}}function hE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,h=!1;function f(P,q,X,Q,L){let O=!1;if(a){const U=S(Q,X,q);c!==U&&(c=U,g(c.object)),O=d(P,Q,X,L),O&&v(P,Q,X,L)}else{const U=q.wireframe===!0;(c.geometry!==Q.id||c.program!==X.id||c.wireframe!==U)&&(c.geometry=Q.id,c.program=X.id,c.wireframe=U,O=!0)}L!==null&&n.update(L,t.ELEMENT_ARRAY_BUFFER),(O||h)&&(h=!1,N(P,q,X,Q),L!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(L).buffer))}function p(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(P){return i.isWebGL2?t.bindVertexArray(P):s.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?t.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function S(P,q,X){const Q=X.wireframe===!0;let L=o[P.id];L===void 0&&(L={},o[P.id]=L);let O=L[q.id];O===void 0&&(O={},L[q.id]=O);let U=O[Q];return U===void 0&&(U=m(p()),O[Q]=U),U}function m(P){const q=[],X=[],Q=[];for(let L=0;L<r;L++)q[L]=0,X[L]=0,Q[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:X,attributeDivisors:Q,object:P,attributes:{},index:null}}function d(P,q,X,Q){const L=c.attributes,O=q.attributes;let U=0;const Y=X.getAttributes();for(const ne in Y)if(Y[ne].location>=0){const G=L[ne];let J=O[ne];if(J===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),G===void 0||G.attribute!==J||J&&G.data!==J.data)return!0;U++}return c.attributesNum!==U||c.index!==Q}function v(P,q,X,Q){const L={},O=q.attributes;let U=0;const Y=X.getAttributes();for(const ne in Y)if(Y[ne].location>=0){let G=O[ne];G===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(G=P.instanceColor));const J={};J.attribute=G,G&&G.data&&(J.data=G.data),L[ne]=J,U++}c.attributes=L,c.attributesNum=U,c.index=Q}function x(){const P=c.newAttributes;for(let q=0,X=P.length;q<X;q++)P[q]=0}function y(P){w(P,0)}function w(P,q){const X=c.newAttributes,Q=c.enabledAttributes,L=c.attributeDivisors;X[P]=1,Q[P]===0&&(t.enableVertexAttribArray(P),Q[P]=1),L[P]!==q&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,q),L[P]=q)}function A(){const P=c.newAttributes,q=c.enabledAttributes;for(let X=0,Q=q.length;X<Q;X++)q[X]!==P[X]&&(t.disableVertexAttribArray(X),q[X]=0)}function b(P,q,X,Q,L,O,U){U===!0?t.vertexAttribIPointer(P,q,X,L,O):t.vertexAttribPointer(P,q,X,Q,L,O)}function N(P,q,X,Q){if(i.isWebGL2===!1&&(P.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const L=Q.attributes,O=X.getAttributes(),U=q.defaultAttributeValues;for(const Y in O){const ne=O[Y];if(ne.location>=0){let me=L[Y];if(me===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(me=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(me=P.instanceColor)),me!==void 0){const G=me.normalized,J=me.itemSize,ce=n.get(me);if(ce===void 0)continue;const we=ce.buffer,ye=ce.type,pe=ce.bytesPerElement,Ze=i.isWebGL2===!0&&(ye===t.INT||ye===t.UNSIGNED_INT||me.gpuType===Mx);if(me.isInterleavedBufferAttribute){const Ne=me.data,k=Ne.stride,Rt=me.offset;if(Ne.isInstancedInterleavedBuffer){for(let Ee=0;Ee<ne.locationSize;Ee++)w(ne.location+Ee,Ne.meshPerAttribute);P.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let Ee=0;Ee<ne.locationSize;Ee++)y(ne.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,we);for(let Ee=0;Ee<ne.locationSize;Ee++)b(ne.location+Ee,J/ne.locationSize,ye,G,k*pe,(Rt+J/ne.locationSize*Ee)*pe,Ze)}else{if(me.isInstancedBufferAttribute){for(let Ne=0;Ne<ne.locationSize;Ne++)w(ne.location+Ne,me.meshPerAttribute);P.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ne=0;Ne<ne.locationSize;Ne++)y(ne.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,we);for(let Ne=0;Ne<ne.locationSize;Ne++)b(ne.location+Ne,J/ne.locationSize,ye,G,J*pe,J/ne.locationSize*Ne*pe,Ze)}}else if(U!==void 0){const G=U[Y];if(G!==void 0)switch(G.length){case 2:t.vertexAttrib2fv(ne.location,G);break;case 3:t.vertexAttrib3fv(ne.location,G);break;case 4:t.vertexAttrib4fv(ne.location,G);break;default:t.vertexAttrib1fv(ne.location,G)}}}}A()}function V(){$();for(const P in o){const q=o[P];for(const X in q){const Q=q[X];for(const L in Q)_(Q[L].object),delete Q[L];delete q[X]}delete o[P]}}function M(P){if(o[P.id]===void 0)return;const q=o[P.id];for(const X in q){const Q=q[X];for(const L in Q)_(Q[L].object),delete Q[L];delete q[X]}delete o[P.id]}function C(P){for(const q in o){const X=o[q];if(X[P.id]===void 0)continue;const Q=X[P.id];for(const L in Q)_(Q[L].object),delete Q[L];delete X[P.id]}}function $(){Z(),h=!0,c!==l&&(c=l,g(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:$,resetDefaultState:Z,dispose:V,releaseStatesOfGeometry:M,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:y,disableUnusedAttributes:A}}function pE(t,e,n,i){const r=i.isWebGL2;let s;function a(h){s=h}function o(h,f){t.drawArrays(s,h,f),n.update(f,s,1)}function l(h,f,p){if(p===0)return;let g,_;if(r)g=t,_="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](s,h,f,p),n.update(f,s,p)}function c(h,f,p){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<p;_++)this.render(h[_],f[_]);else{g.multiDrawArraysWEBGL(s,h,0,f,0,p);let _=0;for(let S=0;S<p;S++)_+=f[S];n.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function mE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),S=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,y=a||e.has("OES_texture_float"),w=x&&y,A=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:S,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:A}}function gE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new lr,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||i!==0||r;return r=p,i=f.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){n=h(f,p,0)},this.setState=function(f,p,g){const _=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?h(null):c();else{const v=s?0:i,x=v*4;let y=d.clippingState||null;l.value=y,y=h(_,p,x,g);for(let w=0;w!==x;++w)y[w]=n[w];d.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,p,g,_){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const d=g+S*4,v=p.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,y=g;x!==S;++x,y+=4)a.copy(f[x]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function xE(t){let e=new WeakMap;function n(a,o){return o===$u?a.mapping=ys:o===qu&&(a.mapping=Ss),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===$u||o===qu)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new AS(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class vE extends Bx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const is=4,bp=[.125,.215,.35,.446,.526,.582],dr=20,jc=new vE,Tp=new Ke;let Vc=null,Wc=0,Xc=0;const cr=(1+Math.sqrt(5))/2,Vr=1/cr,Ap=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,cr,Vr),new F(0,cr,-Vr),new F(Vr,0,cr),new F(-Vr,0,cr),new F(cr,Vr,0),new F(-cr,Vr,0)];class Cp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Vc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vc,Wc,Xc),e.scissorTest=!1,_o(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ys||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Ma,format:kn,colorSpace:Zi,depthBuffer:!1},r=Rp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_E(s)),this._blurMaterial=yE(s,e,n)}return r}_compileMaterial(e){const n=new wn(this._lodPlanes[0],e);this._renderer.compile(n,jc)}_sceneToCubeUV(e,n,i,r){const o=new Mn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Tp),h.toneMapping=Gi,h.autoClear=!1;const g=new ra({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),_=new wn(new La,g);let S=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,S=!0):(g.color.copy(Tp),S=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):v===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const x=this._cubeSize;_o(r,v*x,d>2?x:0,x,x),h.setRenderTarget(r),S&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ys||e.mapping===Ss;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Np());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new wn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;_o(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,jc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ap[(r-1)%Ap.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new wn(this._lodPlanes[r],c),p=c.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*dr-1),S=s/_,m=isFinite(s)?1+Math.floor(h*S):dr;m>dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dr}`);const d=[];let v=0;for(let b=0;b<dr;++b){const N=b/S,V=Math.exp(-N*N/2);d.push(V),b===0?v+=V:b<m&&(v+=2*V)}for(let b=0;b<d.length;b++)d[b]=d[b]/v;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:x}=this;p.dTheta.value=_,p.mipInt.value=x-i;const y=this._sizeLods[r],w=3*y*(r>x-is?r-x+is:0),A=4*(this._cubeSize-y);_o(n,w,A,3*y,2*y),l.setRenderTarget(n),l.render(f,jc)}}function _E(t){const e=[],n=[],i=[];let r=t;const s=t-is+1+bp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-is?l=bp[a-t+is-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,f=1+c,p=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,_=6,S=3,m=2,d=1,v=new Float32Array(S*_*g),x=new Float32Array(m*_*g),y=new Float32Array(d*_*g);for(let A=0;A<g;A++){const b=A%3*2/3-1,N=A>2?0:-1,V=[b,N,0,b+2/3,N,0,b+2/3,N+1,0,b,N,0,b+2/3,N+1,0,b,N+1,0];v.set(V,S*_*A),x.set(p,m*_*A);const M=[A,A,A,A,A,A];y.set(M,d*_*A)}const w=new Hn;w.setAttribute("position",new zn(v,S)),w.setAttribute("uv",new zn(x,m)),w.setAttribute("faceIndex",new zn(y,d)),e.push(w),r>is&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Rp(t,e,n){const i=new br(t,e,n);return i.texture.mapping=Ul,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _o(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function yE(t,e,n){const i=new Float32Array(dr),r=new F(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Np(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Pp(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function af(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function SE(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===$u||l===qu,h=l===ys||l===Ss;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return n===null&&(n=new Cp(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||h&&f&&r(f)){n===null&&(n=new Cp(t));const p=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",s),p.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function ME(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function EE(t,e,n,i){const r={},s=new WeakMap;function a(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const S=p.morphAttributes[_];for(let m=0,d=S.length;m<d;m++)e.remove(S[m])}p.removeEventListener("dispose",a),delete r[p.id];const g=s.get(p);g&&(e.remove(g),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(f,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,n.memory.geometries++),p}function l(f){const p=f.attributes;for(const _ in p)e.update(p[_],t.ARRAY_BUFFER);const g=f.morphAttributes;for(const _ in g){const S=g[_];for(let m=0,d=S.length;m<d;m++)e.update(S[m],t.ARRAY_BUFFER)}}function c(f){const p=[],g=f.index,_=f.attributes.position;let S=0;if(g!==null){const v=g.array;S=g.version;for(let x=0,y=v.length;x<y;x+=3){const w=v[x+0],A=v[x+1],b=v[x+2];p.push(w,A,A,b,b,w)}}else if(_!==void 0){const v=_.array;S=_.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const w=x+0,A=x+1,b=x+2;p.push(w,A,A,b,b,w)}}else return;const m=new(Nx(p)?Ox:Fx)(p,1);m.version=S;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function h(f){const p=s.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function wE(t,e,n,i){const r=i.isWebGL2;let s;function a(g){s=g}let o,l;function c(g){o=g.type,l=g.bytesPerElement}function h(g,_){t.drawElements(s,_,o,g*l),n.update(_,s,1)}function f(g,_,S){if(S===0)return;let m,d;if(r)m=t,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,_,o,g*l,S),n.update(_,s,S)}function p(g,_,S){if(S===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<S;d++)this.render(g[d]/l,_[d]);else{m.multiDrawElementsWEBGL(s,_,0,o,g,0,S);let d=0;for(let v=0;v<S;v++)d+=_[v];n.update(d,s,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=p}function bE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function TE(t,e){return t[0]-e[0]}function AE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function CE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new Lt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,S=_!==void 0?_.length:0;let m=s.get(h);if(m===void 0||m.count!==S){let Z=function(){C.dispose(),s.delete(h),h.removeEventListener("dispose",Z)};var g=Z;m!==void 0&&m.texture.dispose();const d=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let b=0;d===!0&&(b=1),v===!0&&(b=2),x===!0&&(b=3);let N=h.attributes.position.count*b,V=1;N>e.maxTextureSize&&(V=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const M=new Float32Array(N*V*4*S),C=new Dx(M,N,V,S);C.type=oi,C.needsUpdate=!0;const $=b*4;for(let P=0;P<S;P++){const q=y[P],X=w[P],Q=A[P],L=N*V*4*P;for(let O=0;O<q.count;O++){const U=O*$;d===!0&&(a.fromBufferAttribute(q,O),M[L+U+0]=a.x,M[L+U+1]=a.y,M[L+U+2]=a.z,M[L+U+3]=0),v===!0&&(a.fromBufferAttribute(X,O),M[L+U+4]=a.x,M[L+U+5]=a.y,M[L+U+6]=a.z,M[L+U+7]=0),x===!0&&(a.fromBufferAttribute(Q,O),M[L+U+8]=a.x,M[L+U+9]=a.y,M[L+U+10]=a.z,M[L+U+11]=Q.itemSize===4?a.w:1)}}m={count:S,texture:C,size:new qe(N,V)},s.set(h,m),h.addEventListener("dispose",Z)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(t,"morphTexture",c.morphTexture,n);else{let d=0;for(let x=0;x<p.length;x++)d+=p[x];const v=h.morphTargetsRelative?1:1-d;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",p)}f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=p===void 0?0:p.length;let S=i[h.id];if(S===void 0||S.length!==_){S=[];for(let y=0;y<_;y++)S[y]=[y,0];i[h.id]=S}for(let y=0;y<_;y++){const w=S[y];w[0]=y,w[1]=p[y]}S.sort(AE);for(let y=0;y<8;y++)y<_&&S[y][1]?(o[y][0]=S[y][0],o[y][1]=S[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(TE);const m=h.morphAttributes.position,d=h.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const w=o[y],A=w[0],b=w[1];A!==Number.MAX_SAFE_INTEGER&&b?(m&&h.getAttribute("morphTarget"+y)!==m[A]&&h.setAttribute("morphTarget"+y,m[A]),d&&h.getAttribute("morphNormal"+y)!==d[A]&&h.setAttribute("morphNormal"+y,d[A]),r[y]=b,v+=b):(m&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),d&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),r[y]=0)}const x=h.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",x),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function RE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class Vx extends sn{constructor(e,n,i,r,s,a,o,l,c,h){if(h=h!==void 0?h:_r,h!==_r&&h!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===_r&&(i=Li),i===void 0&&h===Ms&&(i=vr),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Wx=new sn,Xx=new Vx(1,1);Xx.compareFunction=Rx;const $x=new Dx,qx=new uS,Yx=new Hx,Lp=[],Dp=[],Ip=new Float32Array(16),Up=new Float32Array(9),kp=new Float32Array(4);function Cs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Lp[r];if(s===void 0&&(s=new Float32Array(r),Lp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function zl(t,e){let n=Dp[e];n===void 0&&(n=new Int32Array(e),Dp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function NE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function PE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),wt(n,e)}}function LE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),wt(n,e)}}function DE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),wt(n,e)}}function IE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;kp.set(i),t.uniformMatrix2fv(this.addr,!1,kp),wt(n,i)}}function UE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;Up.set(i),t.uniformMatrix3fv(this.addr,!1,Up),wt(n,i)}}function kE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;Ip.set(i),t.uniformMatrix4fv(this.addr,!1,Ip),wt(n,i)}}function FE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function OE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2iv(this.addr,e),wt(n,e)}}function zE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3iv(this.addr,e),wt(n,e)}}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4iv(this.addr,e),wt(n,e)}}function HE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function GE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2uiv(this.addr,e),wt(n,e)}}function jE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3uiv(this.addr,e),wt(n,e)}}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4uiv(this.addr,e),wt(n,e)}}function WE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Xx:Wx;n.setTexture2D(e||s,r)}function XE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||qx,r)}function $E(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Yx,r)}function qE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||$x,r)}function YE(t){switch(t){case 5126:return NE;case 35664:return PE;case 35665:return LE;case 35666:return DE;case 35674:return IE;case 35675:return UE;case 35676:return kE;case 5124:case 35670:return FE;case 35667:case 35671:return OE;case 35668:case 35672:return zE;case 35669:case 35673:return BE;case 5125:return HE;case 36294:return GE;case 36295:return jE;case 36296:return VE;case 35678:case 36198:case 36298:case 36306:case 35682:return WE;case 35679:case 36299:case 36307:return XE;case 35680:case 36300:case 36308:case 36293:return $E;case 36289:case 36303:case 36311:case 36292:return qE}}function KE(t,e){t.uniform1fv(this.addr,e)}function ZE(t,e){const n=Cs(e,this.size,2);t.uniform2fv(this.addr,n)}function QE(t,e){const n=Cs(e,this.size,3);t.uniform3fv(this.addr,n)}function JE(t,e){const n=Cs(e,this.size,4);t.uniform4fv(this.addr,n)}function ew(t,e){const n=Cs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function tw(t,e){const n=Cs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function nw(t,e){const n=Cs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function iw(t,e){t.uniform1iv(this.addr,e)}function rw(t,e){t.uniform2iv(this.addr,e)}function sw(t,e){t.uniform3iv(this.addr,e)}function aw(t,e){t.uniform4iv(this.addr,e)}function ow(t,e){t.uniform1uiv(this.addr,e)}function lw(t,e){t.uniform2uiv(this.addr,e)}function cw(t,e){t.uniform3uiv(this.addr,e)}function uw(t,e){t.uniform4uiv(this.addr,e)}function dw(t,e,n){const i=this.cache,r=e.length,s=zl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Wx,s[a])}function fw(t,e,n){const i=this.cache,r=e.length,s=zl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||qx,s[a])}function hw(t,e,n){const i=this.cache,r=e.length,s=zl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Yx,s[a])}function pw(t,e,n){const i=this.cache,r=e.length,s=zl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||$x,s[a])}function mw(t){switch(t){case 5126:return KE;case 35664:return ZE;case 35665:return QE;case 35666:return JE;case 35674:return ew;case 35675:return tw;case 35676:return nw;case 5124:case 35670:return iw;case 35667:case 35671:return rw;case 35668:case 35672:return sw;case 35669:case 35673:return aw;case 5125:return ow;case 36294:return lw;case 36295:return cw;case 36296:return uw;case 35678:case 36198:case 36298:case 36306:case 35682:return dw;case 35679:case 36299:case 36307:return fw;case 35680:case 36300:case 36308:case 36293:return hw;case 36289:case 36303:case 36311:case 36292:return pw}}class gw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=YE(n.type)}}class xw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mw(n.type)}}class vw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const $c=/(\w+)(\])?(\[|\.)?/g;function Fp(t,e){t.seq.push(e),t.map[e.id]=e}function _w(t,e,n){const i=t.name,r=i.length;for($c.lastIndex=0;;){const s=$c.exec(i),a=$c.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Fp(n,c===void 0?new gw(o,t,e):new xw(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new vw(o),Fp(n,f)),n=f}}}class ko{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);_w(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Op(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const yw=37297;let Sw=0;function Mw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function Ew(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===pl&&n===hl?i="LinearDisplayP3ToLinearSRGB":e===hl&&n===pl&&(i="LinearSRGBToLinearDisplayP3"),t){case Zi:case kl:return[i,"LinearTransferOETF"];case Wn:case sf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function zp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Mw(t.getShaderSource(e),a)}else return r}function ww(t,e){const n=Ew(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function bw(t,e){let n;switch(e){case Py:n="Linear";break;case Ly:n="Reinhard";break;case Dy:n="OptimizedCineon";break;case Iy:n="ACESFilmic";break;case ky:n="AgX";break;case Fy:n="Neutral";break;case Uy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Tw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rs).join(`
`)}function Aw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function Cw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Rw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function rs(t){return t!==""}function Bp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ed(t){return t.replace(Nw,Lw)}const Pw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Lw(t,e){let n=Fe[e];if(n===void 0){const i=Pw.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ed(n)}const Dw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gp(t){return t.replace(Dw,Iw)}function Iw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Uw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===_x?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===sy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function kw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ys:case Ss:e="ENVMAP_TYPE_CUBE";break;case Ul:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ss:e="ENVMAP_MODE_REFRACTION";break}return e}function Ow(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case yx:e="ENVMAP_BLENDING_MULTIPLY";break;case Ry:e="ENVMAP_BLENDING_MIX";break;case Ny:e="ENVMAP_BLENDING_ADD";break}return e}function zw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Bw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Uw(n),c=kw(n),h=Fw(n),f=Ow(n),p=zw(n),g=n.isWebGL2?"":Tw(n),_=Aw(n),S=Cw(s),m=r.createProgram();let d,v,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(rs).join(`
`),d.length>0&&(d+=`
`),v=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(rs).join(`
`),v.length>0&&(v+=`
`)):(d=[jp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),v=[g,jp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?Fe.tonemapping_pars_fragment:"",n.toneMapping!==Gi?bw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,ww("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(rs).join(`
`)),a=ed(a),a=Bp(a,n),a=Hp(a,n),o=ed(o),o=Bp(o,n),o=Hp(o,n),a=Gp(a),o=Gp(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===sp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===sp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=x+d+a,w=x+v+o,A=Op(r,r.VERTEX_SHADER,y),b=Op(r,r.FRAGMENT_SHADER,w);r.attachShader(m,A),r.attachShader(m,b),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function N($){if(t.debug.checkShaderErrors){const Z=r.getProgramInfoLog(m).trim(),P=r.getShaderInfoLog(A).trim(),q=r.getShaderInfoLog(b).trim();let X=!0,Q=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,A,b);else{const L=zp(r,A,"vertex"),O=zp(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+Z+`
`+L+`
`+O)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(P===""||q==="")&&(Q=!1);Q&&($.diagnostics={runnable:X,programLog:Z,vertexShader:{log:P,prefix:d},fragmentShader:{log:q,prefix:v}})}r.deleteShader(A),r.deleteShader(b),V=new ko(r,m),M=Rw(r,m)}let V;this.getUniforms=function(){return V===void 0&&N(this),V};let M;this.getAttributes=function(){return M===void 0&&N(this),M};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(m,yw)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Sw++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=b,this}let Hw=0;class Gw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new jw(e),n.set(e,i)),i}}class jw{constructor(e){this.id=Hw++,this.code=e,this.usedTimes=0}}function Vw(t,e,n,i,r,s,a){const o=new Ux,l=new Gw,c=new Set,h=[],f=r.isWebGL2,p=r.logarithmicDepthBuffer,g=r.vertexTextures;let _=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return c.add(M),M===0?"uv":`uv${M}`}function d(M,C,$,Z,P){const q=Z.fog,X=P.geometry,Q=M.isMeshStandardMaterial?Z.environment:null,L=(M.isMeshStandardMaterial?n:e).get(M.envMap||Q),O=L&&L.mapping===Ul?L.image.height:null,U=S[M.type];M.precision!==null&&(_=r.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const Y=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ne=Y!==void 0?Y.length:0;let me=0;X.morphAttributes.position!==void 0&&(me=1),X.morphAttributes.normal!==void 0&&(me=2),X.morphAttributes.color!==void 0&&(me=3);let G,J,ce,we;if(U){const et=Xn[U];G=et.vertexShader,J=et.fragmentShader}else G=M.vertexShader,J=M.fragmentShader,l.update(M),ce=l.getVertexShaderID(M),we=l.getFragmentShaderID(M);const ye=t.getRenderTarget(),pe=P.isInstancedMesh===!0,Ze=P.isBatchedMesh===!0,Ne=!!M.map,k=!!M.matcap,Rt=!!L,Ee=!!M.aoMap,He=!!M.lightMap,Te=!!M.bumpMap,Xe=!!M.normalMap,ze=!!M.displacementMap,Ge=!!M.emissiveMap,pt=!!M.metalnessMap,R=!!M.roughnessMap,E=M.anisotropy>0,W=M.clearcoat>0,K=M.iridescence>0,ie=M.sheen>0,ee=M.transmission>0,Ie=E&&!!M.anisotropyMap,Ce=W&&!!M.clearcoatMap,oe=W&&!!M.clearcoatNormalMap,ue=W&&!!M.clearcoatRoughnessMap,Ue=K&&!!M.iridescenceMap,re=K&&!!M.iridescenceThicknessMap,xt=ie&&!!M.sheenColorMap,je=ie&&!!M.sheenRoughnessMap,Se=!!M.specularMap,ge=!!M.specularColorMap,xe=!!M.specularIntensityMap,$e=ee&&!!M.transmissionMap,Le=ee&&!!M.thicknessMap,at=!!M.gradientMap,D=!!M.alphaMap,le=M.alphaTest>0,B=!!M.alphaHash,se=!!M.extensions;let de=Gi;M.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(de=t.toneMapping);const We={isWebGL2:f,shaderID:U,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:J,defines:M.defines,customVertexShaderID:ce,customFragmentShaderID:we,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:Ze,instancing:pe,instancingColor:pe&&P.instanceColor!==null,instancingMorph:pe&&P.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ye===null?t.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Zi,alphaToCoverage:!!M.alphaToCoverage,map:Ne,matcap:k,envMap:Rt,envMapMode:Rt&&L.mapping,envMapCubeUVHeight:O,aoMap:Ee,lightMap:He,bumpMap:Te,normalMap:Xe,displacementMap:g&&ze,emissiveMap:Ge,normalMapObjectSpace:Xe&&M.normalMapType===Yy,normalMapTangentSpace:Xe&&M.normalMapType===qy,metalnessMap:pt,roughnessMap:R,anisotropy:E,anisotropyMap:Ie,clearcoat:W,clearcoatMap:Ce,clearcoatNormalMap:oe,clearcoatRoughnessMap:ue,iridescence:K,iridescenceMap:Ue,iridescenceThicknessMap:re,sheen:ie,sheenColorMap:xt,sheenRoughnessMap:je,specularMap:Se,specularColorMap:ge,specularIntensityMap:xe,transmission:ee,transmissionMap:$e,thicknessMap:Le,gradientMap:at,opaque:M.transparent===!1&&M.blending===ds&&M.alphaToCoverage===!1,alphaMap:D,alphaTest:le,alphaHash:B,combine:M.combine,mapUv:Ne&&m(M.map.channel),aoMapUv:Ee&&m(M.aoMap.channel),lightMapUv:He&&m(M.lightMap.channel),bumpMapUv:Te&&m(M.bumpMap.channel),normalMapUv:Xe&&m(M.normalMap.channel),displacementMapUv:ze&&m(M.displacementMap.channel),emissiveMapUv:Ge&&m(M.emissiveMap.channel),metalnessMapUv:pt&&m(M.metalnessMap.channel),roughnessMapUv:R&&m(M.roughnessMap.channel),anisotropyMapUv:Ie&&m(M.anisotropyMap.channel),clearcoatMapUv:Ce&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:re&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:je&&m(M.sheenRoughnessMap.channel),specularMapUv:Se&&m(M.specularMap.channel),specularColorMapUv:ge&&m(M.specularColorMap.channel),specularIntensityMapUv:xe&&m(M.specularIntensityMap.channel),transmissionMapUv:$e&&m(M.transmissionMap.channel),thicknessMapUv:Le&&m(M.thicknessMap.channel),alphaMapUv:D&&m(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Xe||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!X.attributes.uv&&(Ne||D),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:P.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:me,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&$.length>0,shadowMapType:t.shadowMap.type,toneMapping:de,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ne&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ai,flipSided:M.side===rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:se&&M.extensions.derivatives===!0,extensionFragDepth:se&&M.extensions.fragDepth===!0,extensionDrawBuffers:se&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:se&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function v(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const $ in M.defines)C.push($),C.push(M.defines[$]);return M.isRawShaderMaterial===!1&&(x(C,M),y(C,M),C.push(t.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function x(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function y(M,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.instancingMorph&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.normalMapObjectSpace&&o.enable(7),C.normalMapTangentSpace&&o.enable(8),C.clearcoat&&o.enable(9),C.iridescence&&o.enable(10),C.alphaTest&&o.enable(11),C.vertexColors&&o.enable(12),C.vertexAlphas&&o.enable(13),C.vertexUv1s&&o.enable(14),C.vertexUv2s&&o.enable(15),C.vertexUv3s&&o.enable(16),C.vertexTangents&&o.enable(17),C.anisotropy&&o.enable(18),C.alphaHash&&o.enable(19),C.batching&&o.enable(20),M.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.alphaToCoverage&&o.enable(20),M.push(o.mask)}function w(M){const C=S[M.type];let $;if(C){const Z=Xn[C];$=ES.clone(Z.uniforms)}else $=M.uniforms;return $}function A(M,C){let $;for(let Z=0,P=h.length;Z<P;Z++){const q=h[Z];if(q.cacheKey===C){$=q,++$.usedTimes;break}}return $===void 0&&($=new Bw(t,C,M,s),h.push($)),$}function b(M){if(--M.usedTimes===0){const C=h.indexOf(M);h[C]=h[h.length-1],h.pop(),M.destroy()}}function N(M){l.remove(M)}function V(){l.dispose()}return{getParameters:d,getProgramCacheKey:v,getUniforms:w,acquireProgram:A,releaseProgram:b,releaseShaderCache:N,programs:h,dispose:V}}function Ww(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Xw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Vp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Wp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,p,g,_,S,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:p,material:g,groupOrder:_,renderOrder:f.renderOrder,z:S,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=g,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=S,d.group=m),e++,d}function o(f,p,g,_,S,m){const d=a(f,p,g,_,S,m);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):n.push(d)}function l(f,p,g,_,S,m){const d=a(f,p,g,_,S,m);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,p){n.length>1&&n.sort(f||Xw),i.length>1&&i.sort(p||Vp),r.length>1&&r.sort(p||Vp)}function h(){for(let f=e,p=t.length;f<p;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function $w(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Wp,t.set(i,[a])):r>=s.length?(a=new Wp,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function qw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Ke};break;case"SpotLight":n={position:new F,direction:new F,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function Yw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Kw=0;function Zw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Qw(t,e){const n=new qw,i=Yw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new F);const s=new F,a=new yt,o=new yt;function l(h,f){let p=0,g=0,_=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let S=0,m=0,d=0,v=0,x=0,y=0,w=0,A=0,b=0,N=0,V=0;h.sort(Zw);const M=f===!0?Math.PI:1;for(let $=0,Z=h.length;$<Z;$++){const P=h[$],q=P.color,X=P.intensity,Q=P.distance,L=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)p+=q.r*X*M,g+=q.g*X*M,_+=q.b*X*M;else if(P.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(P.sh.coefficients[O],X);V++}else if(P.isDirectionalLight){const O=n.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity*M),P.castShadow){const U=P.shadow,Y=i.get(P);Y.shadowBias=U.bias,Y.shadowNormalBias=U.normalBias,Y.shadowRadius=U.radius,Y.shadowMapSize=U.mapSize,r.directionalShadow[S]=Y,r.directionalShadowMap[S]=L,r.directionalShadowMatrix[S]=P.shadow.matrix,y++}r.directional[S]=O,S++}else if(P.isSpotLight){const O=n.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(q).multiplyScalar(X*M),O.distance=Q,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,r.spot[d]=O;const U=P.shadow;if(P.map&&(r.spotLightMap[b]=P.map,b++,U.updateMatrices(P),P.castShadow&&N++),r.spotLightMatrix[d]=U.matrix,P.castShadow){const Y=i.get(P);Y.shadowBias=U.bias,Y.shadowNormalBias=U.normalBias,Y.shadowRadius=U.radius,Y.shadowMapSize=U.mapSize,r.spotShadow[d]=Y,r.spotShadowMap[d]=L,A++}d++}else if(P.isRectAreaLight){const O=n.get(P);O.color.copy(q).multiplyScalar(X),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),r.rectArea[v]=O,v++}else if(P.isPointLight){const O=n.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity*M),O.distance=P.distance,O.decay=P.decay,P.castShadow){const U=P.shadow,Y=i.get(P);Y.shadowBias=U.bias,Y.shadowNormalBias=U.normalBias,Y.shadowRadius=U.radius,Y.shadowMapSize=U.mapSize,Y.shadowCameraNear=U.camera.near,Y.shadowCameraFar=U.camera.far,r.pointShadow[m]=Y,r.pointShadowMap[m]=L,r.pointShadowMatrix[m]=P.shadow.matrix,w++}r.point[m]=O,m++}else if(P.isHemisphereLight){const O=n.get(P);O.skyColor.copy(P.color).multiplyScalar(X*M),O.groundColor.copy(P.groundColor).multiplyScalar(X*M),r.hemi[x]=O,x++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=g,r.ambient[2]=_;const C=r.hash;(C.directionalLength!==S||C.pointLength!==m||C.spotLength!==d||C.rectAreaLength!==v||C.hemiLength!==x||C.numDirectionalShadows!==y||C.numPointShadows!==w||C.numSpotShadows!==A||C.numSpotMaps!==b||C.numLightProbes!==V)&&(r.directional.length=S,r.spot.length=d,r.rectArea.length=v,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=A+b-N,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=V,C.directionalLength=S,C.pointLength=m,C.spotLength=d,C.rectAreaLength=v,C.hemiLength=x,C.numDirectionalShadows=y,C.numPointShadows=w,C.numSpotShadows=A,C.numSpotMaps=b,C.numLightProbes=V,r.version=Kw++)}function c(h,f){let p=0,g=0,_=0,S=0,m=0;const d=f.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const y=h[v];if(y.isDirectionalLight){const w=r.directional[p];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),p++}else if(y.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),_++}else if(y.isRectAreaLight){const w=r.rectArea[S];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),o.identity(),a.copy(y.matrixWorld),a.premultiply(d),o.extractRotation(a),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),S++}else if(y.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),g++}else if(y.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function Xp(t,e){const n=new Qw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Jw(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new Xp(t,e),n.set(s,[l])):a>=o.length?(l=new Xp(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class eb extends Pa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tb extends Pa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ib=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rb(t,e,n){let i=new Gx;const r=new qe,s=new qe,a=new Lt,o=new eb({depthPacking:$y}),l=new tb,c={},h=n.maxTextureSize,f={[Xi]:rn,[rn]:Xi,[ai]:ai},p=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:nb,fragmentShader:ib}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const _=new Hn;_.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new wn(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_x;let d=this.type;this.render=function(A,b,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const V=t.getRenderTarget(),M=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),$=t.state;$.setBlending(Hi),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const Z=d!==ii&&this.type===ii,P=d===ii&&this.type!==ii;for(let q=0,X=A.length;q<X;q++){const Q=A[q],L=Q.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const O=L.getFrameExtents();if(r.multiply(O),s.copy(L.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/O.x),r.x=s.x*O.x,L.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/O.y),r.y=s.y*O.y,L.mapSize.y=s.y)),L.map===null||Z===!0||P===!0){const Y=this.type!==ii?{minFilter:Wt,magFilter:Wt}:{};L.map!==null&&L.map.dispose(),L.map=new br(r.x,r.y,Y),L.map.texture.name=Q.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const U=L.getViewportCount();for(let Y=0;Y<U;Y++){const ne=L.getViewport(Y);a.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),$.viewport(a),L.updateMatrices(Q,Y),i=L.getFrustum(),y(b,N,L.camera,Q,this.type)}L.isPointLightShadow!==!0&&this.type===ii&&v(L,N),L.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(V,M,C)};function v(A,b){const N=e.update(S);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new br(r.x,r.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(b,null,N,p,S,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(b,null,N,g,S,null)}function x(A,b,N,V){let M=null;const C=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)M=C;else if(M=N.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const $=M.uuid,Z=b.uuid;let P=c[$];P===void 0&&(P={},c[$]=P);let q=P[Z];q===void 0&&(q=M.clone(),P[Z]=q,b.addEventListener("dispose",w)),M=q}if(M.visible=b.visible,M.wireframe=b.wireframe,V===ii?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:f[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const $=t.properties.get(M);$.light=N}return M}function y(A,b,N,V,M){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===ii)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const Z=e.update(A),P=A.material;if(Array.isArray(P)){const q=Z.groups;for(let X=0,Q=q.length;X<Q;X++){const L=q[X],O=P[L.materialIndex];if(O&&O.visible){const U=x(A,O,V,M);A.onBeforeShadow(t,A,b,N,Z,U,L),t.renderBufferDirect(N,null,Z,U,A,L),A.onAfterShadow(t,A,b,N,Z,U,L)}}}else if(P.visible){const q=x(A,P,V,M);A.onBeforeShadow(t,A,b,N,Z,q,null),t.renderBufferDirect(N,null,Z,q,A,null),A.onAfterShadow(t,A,b,N,Z,q,null)}}const $=A.children;for(let Z=0,P=$.length;Z<P;Z++)y($[Z],b,N,V,M)}function w(A){A.target.removeEventListener("dispose",w);for(const N in c){const V=c[N],M=A.target.uuid;M in V&&(V[M].dispose(),delete V[M])}}}function sb(t,e,n){const i=n.isWebGL2;function r(){let D=!1;const le=new Lt;let B=null;const se=new Lt(0,0,0,0);return{setMask:function(de){B!==de&&!D&&(t.colorMask(de,de,de,de),B=de)},setLocked:function(de){D=de},setClear:function(de,We,et,Nt,xn){xn===!0&&(de*=Nt,We*=Nt,et*=Nt),le.set(de,We,et,Nt),se.equals(le)===!1&&(t.clearColor(de,We,et,Nt),se.copy(le))},reset:function(){D=!1,B=null,se.set(-1,0,0,0)}}}function s(){let D=!1,le=null,B=null,se=null;return{setTest:function(de){de?pe(t.DEPTH_TEST):Ze(t.DEPTH_TEST)},setMask:function(de){le!==de&&!D&&(t.depthMask(de),le=de)},setFunc:function(de){if(B!==de){switch(de){case My:t.depthFunc(t.NEVER);break;case Ey:t.depthFunc(t.ALWAYS);break;case wy:t.depthFunc(t.LESS);break;case dl:t.depthFunc(t.LEQUAL);break;case by:t.depthFunc(t.EQUAL);break;case Ty:t.depthFunc(t.GEQUAL);break;case Ay:t.depthFunc(t.GREATER);break;case Cy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}B=de}},setLocked:function(de){D=de},setClear:function(de){se!==de&&(t.clearDepth(de),se=de)},reset:function(){D=!1,le=null,B=null,se=null}}}function a(){let D=!1,le=null,B=null,se=null,de=null,We=null,et=null,Nt=null,xn=null;return{setTest:function(tt){D||(tt?pe(t.STENCIL_TEST):Ze(t.STENCIL_TEST))},setMask:function(tt){le!==tt&&!D&&(t.stencilMask(tt),le=tt)},setFunc:function(tt,Gt,Gn){(B!==tt||se!==Gt||de!==Gn)&&(t.stencilFunc(tt,Gt,Gn),B=tt,se=Gt,de=Gn)},setOp:function(tt,Gt,Gn){(We!==tt||et!==Gt||Nt!==Gn)&&(t.stencilOp(tt,Gt,Gn),We=tt,et=Gt,Nt=Gn)},setLocked:function(tt){D=tt},setClear:function(tt){xn!==tt&&(t.clearStencil(tt),xn=tt)},reset:function(){D=!1,le=null,B=null,se=null,de=null,We=null,et=null,Nt=null,xn=null}}}const o=new r,l=new s,c=new a,h=new WeakMap,f=new WeakMap;let p={},g={},_=new WeakMap,S=[],m=null,d=!1,v=null,x=null,y=null,w=null,A=null,b=null,N=null,V=new Ke(0,0,0),M=0,C=!1,$=null,Z=null,P=null,q=null,X=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,O=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(U)[1]),L=O>=1):U.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),L=O>=2);let Y=null,ne={};const me=t.getParameter(t.SCISSOR_BOX),G=t.getParameter(t.VIEWPORT),J=new Lt().fromArray(me),ce=new Lt().fromArray(G);function we(D,le,B,se){const de=new Uint8Array(4),We=t.createTexture();t.bindTexture(D,We),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<B;et++)i&&(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)?t.texImage3D(le,0,t.RGBA,1,1,se,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(le+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return We}const ye={};ye[t.TEXTURE_2D]=we(t.TEXTURE_2D,t.TEXTURE_2D,1),ye[t.TEXTURE_CUBE_MAP]=we(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ye[t.TEXTURE_2D_ARRAY]=we(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ye[t.TEXTURE_3D]=we(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pe(t.DEPTH_TEST),l.setFunc(dl),ze(!1),Ge(Th),pe(t.CULL_FACE),Te(Hi);function pe(D){p[D]!==!0&&(t.enable(D),p[D]=!0)}function Ze(D){p[D]!==!1&&(t.disable(D),p[D]=!1)}function Ne(D,le){return g[D]!==le?(t.bindFramebuffer(D,le),g[D]=le,i&&(D===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=le),D===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=le)),!0):!1}function k(D,le){let B=S,se=!1;if(D){B=_.get(le),B===void 0&&(B=[],_.set(le,B));const de=D.textures;if(B.length!==de.length||B[0]!==t.COLOR_ATTACHMENT0){for(let We=0,et=de.length;We<et;We++)B[We]=t.COLOR_ATTACHMENT0+We;B.length=de.length,se=!0}}else B[0]!==t.BACK&&(B[0]=t.BACK,se=!0);if(se)if(n.isWebGL2)t.drawBuffers(B);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(B);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Rt(D){return m!==D?(t.useProgram(D),m=D,!0):!1}const Ee={[ur]:t.FUNC_ADD,[oy]:t.FUNC_SUBTRACT,[ly]:t.FUNC_REVERSE_SUBTRACT};if(i)Ee[Rh]=t.MIN,Ee[Nh]=t.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ee[Rh]=D.MIN_EXT,Ee[Nh]=D.MAX_EXT)}const He={[cy]:t.ZERO,[uy]:t.ONE,[dy]:t.SRC_COLOR,[Wu]:t.SRC_ALPHA,[xy]:t.SRC_ALPHA_SATURATE,[my]:t.DST_COLOR,[hy]:t.DST_ALPHA,[fy]:t.ONE_MINUS_SRC_COLOR,[Xu]:t.ONE_MINUS_SRC_ALPHA,[gy]:t.ONE_MINUS_DST_COLOR,[py]:t.ONE_MINUS_DST_ALPHA,[vy]:t.CONSTANT_COLOR,[_y]:t.ONE_MINUS_CONSTANT_COLOR,[yy]:t.CONSTANT_ALPHA,[Sy]:t.ONE_MINUS_CONSTANT_ALPHA};function Te(D,le,B,se,de,We,et,Nt,xn,tt){if(D===Hi){d===!0&&(Ze(t.BLEND),d=!1);return}if(d===!1&&(pe(t.BLEND),d=!0),D!==ay){if(D!==v||tt!==C){if((x!==ur||A!==ur)&&(t.blendEquation(t.FUNC_ADD),x=ur,A=ur),tt)switch(D){case ds:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vu:t.blendFunc(t.ONE,t.ONE);break;case Ah:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ch:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ds:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vu:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ah:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ch:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,w=null,b=null,N=null,V.set(0,0,0),M=0,v=D,C=tt}return}de=de||le,We=We||B,et=et||se,(le!==x||de!==A)&&(t.blendEquationSeparate(Ee[le],Ee[de]),x=le,A=de),(B!==y||se!==w||We!==b||et!==N)&&(t.blendFuncSeparate(He[B],He[se],He[We],He[et]),y=B,w=se,b=We,N=et),(Nt.equals(V)===!1||xn!==M)&&(t.blendColor(Nt.r,Nt.g,Nt.b,xn),V.copy(Nt),M=xn),v=D,C=!1}function Xe(D,le){D.side===ai?Ze(t.CULL_FACE):pe(t.CULL_FACE);let B=D.side===rn;le&&(B=!B),ze(B),D.blending===ds&&D.transparent===!1?Te(Hi):Te(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const se=D.stencilWrite;c.setTest(se),se&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),R(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):Ze(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(D){$!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),$=D)}function Ge(D){D!==iy?(pe(t.CULL_FACE),D!==Z&&(D===Th?t.cullFace(t.BACK):D===ry?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ze(t.CULL_FACE),Z=D}function pt(D){D!==P&&(L&&t.lineWidth(D),P=D)}function R(D,le,B){D?(pe(t.POLYGON_OFFSET_FILL),(q!==le||X!==B)&&(t.polygonOffset(le,B),q=le,X=B)):Ze(t.POLYGON_OFFSET_FILL)}function E(D){D?pe(t.SCISSOR_TEST):Ze(t.SCISSOR_TEST)}function W(D){D===void 0&&(D=t.TEXTURE0+Q-1),Y!==D&&(t.activeTexture(D),Y=D)}function K(D,le,B){B===void 0&&(Y===null?B=t.TEXTURE0+Q-1:B=Y);let se=ne[B];se===void 0&&(se={type:void 0,texture:void 0},ne[B]=se),(se.type!==D||se.texture!==le)&&(Y!==B&&(t.activeTexture(B),Y=B),t.bindTexture(D,le||ye[D]),se.type=D,se.texture=le)}function ie(){const D=ne[Y];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function je(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(D){J.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),J.copy(D))}function xe(D){ce.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ce.copy(D))}function $e(D,le){let B=f.get(le);B===void 0&&(B=new WeakMap,f.set(le,B));let se=B.get(D);se===void 0&&(se=t.getUniformBlockIndex(le,D.name),B.set(D,se))}function Le(D,le){const se=f.get(le).get(D);h.get(le)!==se&&(t.uniformBlockBinding(le,se,D.__bindingPointIndex),h.set(le,se))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),p={},Y=null,ne={},g={},_=new WeakMap,S=[],m=null,d=!1,v=null,x=null,y=null,w=null,A=null,b=null,N=null,V=new Ke(0,0,0),M=0,C=!1,$=null,Z=null,P=null,q=null,X=null,J.set(0,0,t.canvas.width,t.canvas.height),ce.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:pe,disable:Ze,bindFramebuffer:Ne,drawBuffers:k,useProgram:Rt,setBlending:Te,setMaterial:Xe,setFlipSided:ze,setCullFace:Ge,setLineWidth:pt,setPolygonOffset:R,setScissorTest:E,activeTexture:W,bindTexture:K,unbindTexture:ie,compressedTexImage2D:ee,compressedTexImage3D:Ie,texImage2D:je,texImage3D:Se,updateUBOMapping:$e,uniformBlockBinding:Le,texStorage2D:re,texStorage3D:xt,texSubImage2D:Ce,texSubImage3D:oe,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ue,scissor:ge,viewport:xe,reset:at}}function ab(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new qe,f=new WeakMap;let p;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,E){return _?new OffscreenCanvas(R,E):gl("canvas")}function m(R,E,W,K){let ie=1;const ee=pt(R);if((ee.width>K||ee.height>K)&&(ie=K/Math.max(ee.width,ee.height)),ie<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Ie=E?Ju:Math.floor,Ce=Ie(ie*ee.width),oe=Ie(ie*ee.height);p===void 0&&(p=S(Ce,oe));const ue=W?S(Ce,oe):p;return ue.width=Ce,ue.height=oe,ue.getContext("2d").drawImage(R,0,0,Ce,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Ce+"x"+oe+")."),ue}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function d(R){const E=pt(R);return ap(E.width)&&ap(E.height)}function v(R){return o?!1:R.wrapS!==Un||R.wrapT!==Un||R.minFilter!==Wt&&R.minFilter!==Kt}function x(R,E){return R.generateMipmaps&&E&&R.minFilter!==Wt&&R.minFilter!==Kt}function y(R){t.generateMipmap(R)}function w(R,E,W,K,ie=!1){if(o===!1)return E;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=E;if(E===t.RED&&(W===t.FLOAT&&(ee=t.R32F),W===t.HALF_FLOAT&&(ee=t.R16F),W===t.UNSIGNED_BYTE&&(ee=t.R8)),E===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(ee=t.R8UI),W===t.UNSIGNED_SHORT&&(ee=t.R16UI),W===t.UNSIGNED_INT&&(ee=t.R32UI),W===t.BYTE&&(ee=t.R8I),W===t.SHORT&&(ee=t.R16I),W===t.INT&&(ee=t.R32I)),E===t.RG&&(W===t.FLOAT&&(ee=t.RG32F),W===t.HALF_FLOAT&&(ee=t.RG16F),W===t.UNSIGNED_BYTE&&(ee=t.RG8)),E===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(ee=t.RG8UI),W===t.UNSIGNED_SHORT&&(ee=t.RG16UI),W===t.UNSIGNED_INT&&(ee=t.RG32UI),W===t.BYTE&&(ee=t.RG8I),W===t.SHORT&&(ee=t.RG16I),W===t.INT&&(ee=t.RG32I)),E===t.RGBA){const Ie=ie?fl:Je.getTransfer(K);W===t.FLOAT&&(ee=t.RGBA32F),W===t.HALF_FLOAT&&(ee=t.RGBA16F),W===t.UNSIGNED_BYTE&&(ee=Ie===rt?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function A(R,E,W){return x(R,W)===!0||R.isFramebufferTexture&&R.minFilter!==Wt&&R.minFilter!==Kt?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function b(R){return R===Wt||R===Ph||R===Os?t.NEAREST:t.LINEAR}function N(R){const E=R.target;E.removeEventListener("dispose",N),M(E),E.isVideoTexture&&f.delete(E)}function V(R){const E=R.target;E.removeEventListener("dispose",V),$(E)}function M(R){const E=i.get(R);if(E.__webglInit===void 0)return;const W=R.source,K=g.get(W);if(K){const ie=K[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&C(R),Object.keys(K).length===0&&g.delete(W)}i.remove(R)}function C(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const W=R.source,K=g.get(W);delete K[E.__cacheKey],a.memory.textures--}function $(R){const E=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let ie=0;ie<E.__webglFramebuffer[K].length;ie++)t.deleteFramebuffer(E.__webglFramebuffer[K][ie]);else t.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)t.deleteFramebuffer(E.__webglFramebuffer[K]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=R.textures;for(let K=0,ie=W.length;K<ie;K++){const ee=i.get(W[K]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(W[K])}i.remove(R)}let Z=0;function P(){Z=0}function q(){const R=Z;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),Z+=1,R}function X(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function Q(R,E){const W=i.get(R);if(R.isVideoTexture&&ze(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(W,R,E);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+E)}function L(R,E){const W=i.get(R);if(R.version>0&&W.__version!==R.version){ce(W,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+E)}function O(R,E){const W=i.get(R);if(R.version>0&&W.__version!==R.version){ce(W,R,E);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+E)}function U(R,E){const W=i.get(R);if(R.version>0&&W.__version!==R.version){we(W,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+E)}const Y={[Yu]:t.REPEAT,[Un]:t.CLAMP_TO_EDGE,[Ku]:t.MIRRORED_REPEAT},ne={[Wt]:t.NEAREST,[Ph]:t.NEAREST_MIPMAP_NEAREST,[Os]:t.NEAREST_MIPMAP_LINEAR,[Kt]:t.LINEAR,[gc]:t.LINEAR_MIPMAP_NEAREST,[mr]:t.LINEAR_MIPMAP_LINEAR},me={[Ky]:t.NEVER,[nS]:t.ALWAYS,[Zy]:t.LESS,[Rx]:t.LEQUAL,[Qy]:t.EQUAL,[tS]:t.GEQUAL,[Jy]:t.GREATER,[eS]:t.NOTEQUAL};function G(R,E,W){if(E.type===oi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Kt||E.magFilter===gc||E.magFilter===Os||E.magFilter===mr||E.minFilter===Kt||E.minFilter===gc||E.minFilter===Os||E.minFilter===mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),W?(t.texParameteri(R,t.TEXTURE_WRAP_S,Y[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,Y[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,Y[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ne[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ne[E.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==Un||E.wrapT!==Un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,b(E.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,b(E.minFilter)),E.minFilter!==Wt&&E.minFilter!==Kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,me[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Wt||E.minFilter!==Os&&E.minFilter!==mr||E.type===oi&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Ma&&e.has("OES_texture_half_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function J(R,E){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",N));const K=E.source;let ie=g.get(K);ie===void 0&&(ie={},g.set(K,ie));const ee=X(E);if(ee!==R.__cacheKey){ie[ee]===void 0&&(ie[ee]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ie[ee].usedTimes++;const Ie=ie[R.__cacheKey];Ie!==void 0&&(ie[R.__cacheKey].usedTimes--,Ie.usedTimes===0&&C(E)),R.__cacheKey=ee,R.__webglTexture=ie[ee].texture}return W}function ce(R,E,W){let K=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=t.TEXTURE_3D);const ie=J(R,E),ee=E.source;n.bindTexture(K,R.__webglTexture,t.TEXTURE0+W);const Ie=i.get(ee);if(ee.version!==Ie.__version||ie===!0){n.activeTexture(t.TEXTURE0+W);const Ce=Je.getPrimaries(Je.workingColorSpace),oe=E.colorSpace===Ri?null:Je.getPrimaries(E.colorSpace),ue=E.colorSpace===Ri||Ce===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ue=v(E)&&d(E.image)===!1;let re=m(E.image,Ue,!1,r.maxTextureSize);re=Ge(E,re);const xt=d(re)||o,je=s.convert(E.format,E.colorSpace);let Se=s.convert(E.type),ge=w(E.internalFormat,je,Se,E.colorSpace,E.isVideoTexture);G(K,E,xt);let xe;const $e=E.mipmaps,Le=o&&E.isVideoTexture!==!0&&ge!==Cx,at=Ie.__version===void 0||ie===!0,D=ee.dataReady,le=A(E,re,xt);if(E.isDepthTexture)ge=t.DEPTH_COMPONENT,o?E.type===oi?ge=t.DEPTH_COMPONENT32F:E.type===Li?ge=t.DEPTH_COMPONENT24:E.type===vr?ge=t.DEPTH24_STENCIL8:ge=t.DEPTH_COMPONENT16:E.type===oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===_r&&ge===t.DEPTH_COMPONENT&&E.type!==rf&&E.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Li,Se=s.convert(E.type)),E.format===Ms&&ge===t.DEPTH_COMPONENT&&(ge=t.DEPTH_STENCIL,E.type!==vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=vr,Se=s.convert(E.type))),at&&(Le?n.texStorage2D(t.TEXTURE_2D,1,ge,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,ge,re.width,re.height,0,je,Se,null));else if(E.isDataTexture)if($e.length>0&&xt){Le&&at&&n.texStorage2D(t.TEXTURE_2D,le,ge,$e[0].width,$e[0].height);for(let B=0,se=$e.length;B<se;B++)xe=$e[B],Le?D&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,xe.width,xe.height,je,Se,xe.data):n.texImage2D(t.TEXTURE_2D,B,ge,xe.width,xe.height,0,je,Se,xe.data);E.generateMipmaps=!1}else Le?(at&&n.texStorage2D(t.TEXTURE_2D,le,ge,re.width,re.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,je,Se,re.data)):n.texImage2D(t.TEXTURE_2D,0,ge,re.width,re.height,0,je,Se,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Le&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,ge,$e[0].width,$e[0].height,re.depth);for(let B=0,se=$e.length;B<se;B++)xe=$e[B],E.format!==kn?je!==null?Le?D&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,xe.width,xe.height,re.depth,je,xe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,B,ge,xe.width,xe.height,re.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,xe.width,xe.height,re.depth,je,Se,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,B,ge,xe.width,xe.height,re.depth,0,je,Se,xe.data)}else{Le&&at&&n.texStorage2D(t.TEXTURE_2D,le,ge,$e[0].width,$e[0].height);for(let B=0,se=$e.length;B<se;B++)xe=$e[B],E.format!==kn?je!==null?Le?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,B,0,0,xe.width,xe.height,je,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,B,ge,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?D&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,xe.width,xe.height,je,Se,xe.data):n.texImage2D(t.TEXTURE_2D,B,ge,xe.width,xe.height,0,je,Se,xe.data)}else if(E.isDataArrayTexture)Le?(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,ge,re.width,re.height,re.depth),D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,je,Se,re.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,re.width,re.height,re.depth,0,je,Se,re.data);else if(E.isData3DTexture)Le?(at&&n.texStorage3D(t.TEXTURE_3D,le,ge,re.width,re.height,re.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,je,Se,re.data)):n.texImage3D(t.TEXTURE_3D,0,ge,re.width,re.height,re.depth,0,je,Se,re.data);else if(E.isFramebufferTexture){if(at)if(Le)n.texStorage2D(t.TEXTURE_2D,le,ge,re.width,re.height);else{let B=re.width,se=re.height;for(let de=0;de<le;de++)n.texImage2D(t.TEXTURE_2D,de,ge,B,se,0,je,Se,null),B>>=1,se>>=1}}else if($e.length>0&&xt){if(Le&&at){const B=pt($e[0]);n.texStorage2D(t.TEXTURE_2D,le,ge,B.width,B.height)}for(let B=0,se=$e.length;B<se;B++)xe=$e[B],Le?D&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,je,Se,xe):n.texImage2D(t.TEXTURE_2D,B,ge,je,Se,xe);E.generateMipmaps=!1}else if(Le){if(at){const B=pt(re);n.texStorage2D(t.TEXTURE_2D,le,ge,B.width,B.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,je,Se,re)}else n.texImage2D(t.TEXTURE_2D,0,ge,je,Se,re);x(E,xt)&&y(K),Ie.__version=ee.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function we(R,E,W){if(E.image.length!==6)return;const K=J(R,E),ie=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+W);const ee=i.get(ie);if(ie.version!==ee.__version||K===!0){n.activeTexture(t.TEXTURE0+W);const Ie=Je.getPrimaries(Je.workingColorSpace),Ce=E.colorSpace===Ri?null:Je.getPrimaries(E.colorSpace),oe=E.colorSpace===Ri||Ie===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const ue=E.isCompressedTexture||E.image[0].isCompressedTexture,Ue=E.image[0]&&E.image[0].isDataTexture,re=[];for(let B=0;B<6;B++)!ue&&!Ue?re[B]=m(E.image[B],!1,!0,r.maxCubemapSize):re[B]=Ue?E.image[B].image:E.image[B],re[B]=Ge(E,re[B]);const xt=re[0],je=d(xt)||o,Se=s.convert(E.format,E.colorSpace),ge=s.convert(E.type),xe=w(E.internalFormat,Se,ge,E.colorSpace),$e=o&&E.isVideoTexture!==!0,Le=ee.__version===void 0||K===!0,at=ie.dataReady;let D=A(E,xt,je);G(t.TEXTURE_CUBE_MAP,E,je);let le;if(ue){$e&&Le&&n.texStorage2D(t.TEXTURE_CUBE_MAP,D,xe,xt.width,xt.height);for(let B=0;B<6;B++){le=re[B].mipmaps;for(let se=0;se<le.length;se++){const de=le[se];E.format!==kn?Se!==null?$e?at&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,se,0,0,de.width,de.height,Se,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,se,xe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,se,0,0,de.width,de.height,Se,ge,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,se,xe,de.width,de.height,0,Se,ge,de.data)}}}else{if(le=E.mipmaps,$e&&Le){le.length>0&&D++;const B=pt(re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,D,xe,B.width,B.height)}for(let B=0;B<6;B++)if(Ue){$e?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,re[B].width,re[B].height,Se,ge,re[B].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,xe,re[B].width,re[B].height,0,Se,ge,re[B].data);for(let se=0;se<le.length;se++){const We=le[se].image[B].image;$e?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,se+1,0,0,We.width,We.height,Se,ge,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,se+1,xe,We.width,We.height,0,Se,ge,We.data)}}else{$e?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Se,ge,re[B]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,xe,Se,ge,re[B]);for(let se=0;se<le.length;se++){const de=le[se];$e?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,se+1,0,0,Se,ge,de.image[B]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,se+1,xe,Se,ge,de.image[B])}}}x(E,je)&&y(t.TEXTURE_CUBE_MAP),ee.__version=ie.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ye(R,E,W,K,ie,ee){const Ie=s.convert(W.format,W.colorSpace),Ce=s.convert(W.type),oe=w(W.internalFormat,Ie,Ce,W.colorSpace);if(!i.get(E).__hasExternalTextures){const Ue=Math.max(1,E.width>>ee),re=Math.max(1,E.height>>ee);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,ee,oe,Ue,re,E.depth,0,Ie,Ce,null):n.texImage2D(ie,ee,oe,Ue,re,0,Ie,Ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Xe(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,ie,i.get(W).__webglTexture,0,Te(E)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,ie,i.get(W).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(R,E,W){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let K=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(W||Xe(E)){const ie=E.depthTexture;ie&&ie.isDepthTexture&&(ie.type===oi?K=t.DEPTH_COMPONENT32F:ie.type===Li&&(K=t.DEPTH_COMPONENT24));const ee=Te(E);Xe(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,K,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,K,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,K,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const K=Te(E);W&&Xe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,K,t.DEPTH24_STENCIL8,E.width,E.height):Xe(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,K,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const K=E.textures;for(let ie=0;ie<K.length;ie++){const ee=K[ie],Ie=s.convert(ee.format,ee.colorSpace),Ce=s.convert(ee.type),oe=w(ee.internalFormat,Ie,Ce,ee.colorSpace),ue=Te(E);W&&Xe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,oe,E.width,E.height):Xe(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,oe,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,oe,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ze(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q(E.depthTexture,0);const K=i.get(E.depthTexture).__webglTexture,ie=Te(E);if(E.depthTexture.format===_r)Xe(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(E.depthTexture.format===Ms)Xe(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ne(R){const E=i.get(R),W=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ze(E.__webglFramebuffer,R)}else if(W){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]=t.createRenderbuffer(),pe(E.__webglDepthbuffer[K],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),pe(E.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function k(R,E,W){const K=i.get(R);E!==void 0&&ye(K.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&Ne(R)}function Rt(R){const E=R.texture,W=i.get(R),K=i.get(E);R.addEventListener("dispose",V);const ie=R.textures,ee=R.isWebGLCubeRenderTarget===!0,Ie=ie.length>1,Ce=d(R)||o;if(Ie||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=E.version,a.memory.textures++),ee){W.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(o&&E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[oe]=[];for(let ue=0;ue<E.mipmaps.length;ue++)W.__webglFramebuffer[oe][ue]=t.createFramebuffer()}else W.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let oe=0;oe<E.mipmaps.length;oe++)W.__webglFramebuffer[oe]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(Ie)if(r.drawBuffers)for(let oe=0,ue=ie.length;oe<ue;oe++){const Ue=i.get(ie[oe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Xe(R)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let oe=0;oe<ie.length;oe++){const ue=ie[oe];W.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[oe]);const Ue=s.convert(ue.format,ue.colorSpace),re=s.convert(ue.type),xt=w(ue.internalFormat,Ue,re,ue.colorSpace,R.isXRRenderTarget===!0),je=Te(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,je,xt,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,W.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),pe(W.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),G(t.TEXTURE_CUBE_MAP,E,Ce);for(let oe=0;oe<6;oe++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)ye(W.__webglFramebuffer[oe][ue],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else ye(W.__webglFramebuffer[oe],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);x(E,Ce)&&y(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ie){for(let oe=0,ue=ie.length;oe<ue;oe++){const Ue=ie[oe],re=i.get(Ue);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),G(t.TEXTURE_2D,Ue,Ce),ye(W.__webglFramebuffer,R,Ue,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,0),x(Ue,Ce)&&y(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?oe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(oe,K.__webglTexture),G(oe,E,Ce),o&&E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)ye(W.__webglFramebuffer[ue],R,E,t.COLOR_ATTACHMENT0,oe,ue);else ye(W.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,oe,0);x(E,Ce)&&y(oe),n.unbindTexture()}R.depthBuffer&&Ne(R)}function Ee(R){const E=d(R)||o,W=R.textures;for(let K=0,ie=W.length;K<ie;K++){const ee=W[K];if(x(ee,E)){const Ie=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ce=i.get(ee).__webglTexture;n.bindTexture(Ie,Ce),y(Ie),n.unbindTexture()}}}function He(R){if(o&&R.samples>0&&Xe(R)===!1){const E=R.textures,W=R.width,K=R.height;let ie=t.COLOR_BUFFER_BIT;const ee=[],Ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(R),oe=E.length>1;if(oe)for(let ue=0;ue<E.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let ue=0;ue<E.length;ue++){ee.push(t.COLOR_ATTACHMENT0+ue),R.depthBuffer&&ee.push(Ie);const Ue=Ce.__ignoreDepthValues!==void 0?Ce.__ignoreDepthValues:!1;if(Ue===!1&&(R.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),oe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[ue]),Ue===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ie]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ie])),oe){const re=i.get(E[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,re,0)}t.blitFramebuffer(0,0,W,K,0,0,W,K,ie,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ee)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),oe)for(let ue=0;ue<E.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[ue]);const Ue=i.get(E[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,Ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}}function Te(R){return Math.min(r.maxSamples,R.samples)}function Xe(R){const E=i.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ze(R){const E=a.render.frame;f.get(R)!==E&&(f.set(R,E),R.update())}function Ge(R,E){const W=R.colorSpace,K=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Zu||W!==Zi&&W!==Ri&&(Je.getTransfer(W)===rt?o===!1?e.has("EXT_sRGB")===!0&&K===kn?(R.format=Zu,R.minFilter=Kt,R.generateMipmaps=!1):E=Px.sRGBToLinear(E):(K!==kn||ie!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function pt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=q,this.resetTextureUnits=P,this.setTexture2D=Q,this.setTexture2DArray=L,this.setTexture3D=O,this.setTextureCube=U,this.rebindTextures=k,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Xe}function ob(t,e,n){const i=n.isWebGL2;function r(s,a=Ri){let o;const l=Je.getTransfer(a);if(s===ji)return t.UNSIGNED_BYTE;if(s===Ex)return t.UNSIGNED_SHORT_4_4_4_4;if(s===wx)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Oy)return t.BYTE;if(s===zy)return t.SHORT;if(s===rf)return t.UNSIGNED_SHORT;if(s===Mx)return t.INT;if(s===Li)return t.UNSIGNED_INT;if(s===oi)return t.FLOAT;if(s===Ma)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===By)return t.ALPHA;if(s===kn)return t.RGBA;if(s===Hy)return t.LUMINANCE;if(s===Gy)return t.LUMINANCE_ALPHA;if(s===_r)return t.DEPTH_COMPONENT;if(s===Ms)return t.DEPTH_STENCIL;if(s===Zu)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===jy)return t.RED;if(s===bx)return t.RED_INTEGER;if(s===Vy)return t.RG;if(s===Tx)return t.RG_INTEGER;if(s===Ax)return t.RGBA_INTEGER;if(s===xc||s===vc||s===_c||s===yc)if(l===rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===xc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===vc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===_c)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===yc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===xc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===vc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===_c)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===yc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Lh||s===Dh||s===Ih||s===Uh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Lh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Dh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ih)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Uh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Cx)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===kh||s===Fh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===kh)return l===rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Fh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Oh||s===zh||s===Bh||s===Hh||s===Gh||s===jh||s===Vh||s===Wh||s===Xh||s===$h||s===qh||s===Yh||s===Kh||s===Zh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Oh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===zh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Bh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Hh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Gh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Wh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Xh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$h)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===qh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Kh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Zh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Sc||s===Qh||s===Jh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Sc)return l===rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Qh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Jh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Wy||s===ep||s===tp||s===np)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Sc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===ep)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===tp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===np)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===vr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class lb extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yo extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cb={type:"move"};class qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const m=n.getJointPose(S,i),d=this._getHandJoint(c,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=h.position.distanceTo(f.position),g=.02,_=.005;c.inputState.pinching&&p>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new yo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const ub=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,db=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new sn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new $i({extensions:{fragDepth:!0},vertexShader:ub,fragmentShader:db,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new wn(new Ol(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class hb extends As{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,p=null,g=null,_=null;const S=new fb,m=n.getContextAttributes();let d=null,v=null;const x=[],y=[],w=new qe;let A=null;const b=new Mn;b.layers.enable(1),b.viewport=new Lt;const N=new Mn;N.layers.enable(2),N.viewport=new Lt;const V=[b,N],M=new lb;M.layers.enable(1),M.layers.enable(2);let C=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=x[G];return J===void 0&&(J=new qc,x[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=x[G];return J===void 0&&(J=new qc,x[G]=J),J.getGripSpace()},this.getHand=function(G){let J=x[G];return J===void 0&&(J=new qc,x[G]=J),J.getHandSpace()};function Z(G){const J=y.indexOf(G.inputSource);if(J===-1)return;const ce=x[J];ce!==void 0&&(ce.update(G.inputSource,G.frame,c||a),ce.dispatchEvent({type:G.type,data:G.inputSource}))}function P(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",q);for(let G=0;G<x.length;G++){const J=y[G];J!==null&&(y[G]=null,x[G].disconnect(J))}C=null,$=null,S.reset(),e.setRenderTarget(d),g=null,p=null,f=null,r=null,v=null,me.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",P),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),v=new br(g.framebufferWidth,g.framebufferHeight,{format:kn,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,ce=null,we=null;m.depth&&(we=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=m.stencil?Ms:_r,ce=m.stencil?vr:Li);const ye={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:s};f=new XRWebGLBinding(r,n),p=f.createProjectionLayer(ye),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new br(p.textureWidth,p.textureHeight,{format:kn,type:ji,depthTexture:new Vx(p.textureWidth,p.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const pe=e.properties.get(v);pe.__ignoreDepthValues=p.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(G){for(let J=0;J<G.removed.length;J++){const ce=G.removed[J],we=y.indexOf(ce);we>=0&&(y[we]=null,x[we].disconnect(ce))}for(let J=0;J<G.added.length;J++){const ce=G.added[J];let we=y.indexOf(ce);if(we===-1){for(let pe=0;pe<x.length;pe++)if(pe>=y.length){y.push(ce),we=pe;break}else if(y[pe]===null){y[pe]=ce,we=pe;break}if(we===-1)break}const ye=x[we];ye&&ye.connect(ce)}}const X=new F,Q=new F;function L(G,J,ce){X.setFromMatrixPosition(J.matrixWorld),Q.setFromMatrixPosition(ce.matrixWorld);const we=X.distanceTo(Q),ye=J.projectionMatrix.elements,pe=ce.projectionMatrix.elements,Ze=ye[14]/(ye[10]-1),Ne=ye[14]/(ye[10]+1),k=(ye[9]+1)/ye[5],Rt=(ye[9]-1)/ye[5],Ee=(ye[8]-1)/ye[0],He=(pe[8]+1)/pe[0],Te=Ze*Ee,Xe=Ze*He,ze=we/(-Ee+He),Ge=ze*-Ee;J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ge),G.translateZ(ze),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const pt=Ze+ze,R=Ne+ze,E=Te-Ge,W=Xe+(we-Ge),K=k*Ne/R*pt,ie=Rt*Ne/R*pt;G.projectionMatrix.makePerspective(E,W,K,ie,pt,R),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function O(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;S.texture!==null&&(G.near=S.depthNear,G.far=S.depthFar),M.near=N.near=b.near=G.near,M.far=N.far=b.far=G.far,(C!==M.near||$!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,$=M.far,b.near=C,b.far=$,N.near=C,N.far=$,b.updateProjectionMatrix(),N.updateProjectionMatrix(),G.updateProjectionMatrix());const J=G.parent,ce=M.cameras;O(M,J);for(let we=0;we<ce.length;we++)O(ce[we],J);ce.length===2?L(M,b,N):M.projectionMatrix.copy(b.projectionMatrix),U(G,M,J)};function U(G,J,ce){ce===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(ce.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Qu*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(G){l=G,p!==null&&(p.fixedFoveation=G),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=G)},this.hasDepthSensing=function(){return S.texture!==null};let Y=null;function ne(G,J){if(h=J.getViewerPose(c||a),_=J,h!==null){const ce=h.views;g!==null&&(e.setRenderTargetFramebuffer(v,g.framebuffer),e.setRenderTarget(v));let we=!1;ce.length!==M.cameras.length&&(M.cameras.length=0,we=!0);for(let pe=0;pe<ce.length;pe++){const Ze=ce[pe];let Ne=null;if(g!==null)Ne=g.getViewport(Ze);else{const Rt=f.getViewSubImage(p,Ze);Ne=Rt.viewport,pe===0&&(e.setRenderTargetTextures(v,Rt.colorTexture,p.ignoreDepthValues?void 0:Rt.depthStencilTexture),e.setRenderTarget(v))}let k=V[pe];k===void 0&&(k=new Mn,k.layers.enable(pe),k.viewport=new Lt,V[pe]=k),k.matrix.fromArray(Ze.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(Ze.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),pe===0&&(M.matrix.copy(k.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),we===!0&&M.cameras.push(k)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const pe=f.getDepthInformation(ce[0]);pe&&pe.isValid&&pe.texture&&S.init(e,pe,r.renderState)}}for(let ce=0;ce<x.length;ce++){const we=y[ce],ye=x[ce];we!==null&&ye!==void 0&&ye.update(we,J,c||a)}S.render(e,M),Y&&Y(G,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),_=null}const me=new jx;me.setAnimationLoop(ne),this.setAnimationLoop=function(G){Y=G},this.dispose=function(){}}}const sr=new gi,pb=new yt;function mb(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,zx(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),p(m,d),d.isMeshPhysicalMaterial&&g(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),S(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,v,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===rn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===rn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),x=v.envMap,y=v.envMapRotation;if(x&&(m.envMap.value=x,sr.copy(y),sr.x*=-1,sr.y*=-1,sr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),m.envMapRotation.value.setFromMatrix4(pb.makeRotationFromEuler(sr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const w=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*w,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=x*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===rn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gb(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function c(v,x){let y=r[v.id];y===void 0&&(_(v),y=h(v),r[v.id]=y,v.addEventListener("dispose",m));const w=x.program;i.updateUBOMapping(v,w);const A=e.render.frame;s[v.id]!==A&&(p(v),s[v.id]=A)}function h(v){const x=f();v.__bindingPointIndex=x;const y=t.createBuffer(),w=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,w,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){const x=r[v.id],y=v.uniforms,w=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,b=y.length;A<b;A++){const N=Array.isArray(y[A])?y[A]:[y[A]];for(let V=0,M=N.length;V<M;V++){const C=N[V];if(g(C,A,V,w)===!0){const $=C.__offset,Z=Array.isArray(C.value)?C.value:[C.value];let P=0;for(let q=0;q<Z.length;q++){const X=Z[q],Q=S(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,$+P,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,P),P+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,$,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,x,y,w){const A=v.value,b=x+"_"+y;if(w[b]===void 0)return typeof A=="number"||typeof A=="boolean"?w[b]=A:w[b]=A.clone(),!0;{const N=w[b];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return w[b]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function _(v){const x=v.uniforms;let y=0;const w=16;for(let b=0,N=x.length;b<N;b++){const V=Array.isArray(x[b])?x[b]:[x[b]];for(let M=0,C=V.length;M<C;M++){const $=V[M],Z=Array.isArray($.value)?$.value:[$.value];for(let P=0,q=Z.length;P<q;P++){const X=Z[P],Q=S(X),L=y%w;L!==0&&w-L<Q.boundary&&(y+=w-L),$.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=y,y+=Q.storage}}}const A=y%w;return A>0&&(y+=w-A),v.__size=y,v.__cache={},this}function S(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Kx{constructor(e={}){const{canvas:n=rS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=a;const g=new Uint32Array(4),_=new Int32Array(4);let S=null,m=null;const d=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wn,this._useLegacyLights=!1,this.toneMapping=Gi,this.toneMappingExposure=1;const x=this;let y=!1,w=0,A=0,b=null,N=-1,V=null;const M=new Lt,C=new Lt;let $=null;const Z=new Ke(0);let P=0,q=n.width,X=n.height,Q=1,L=null,O=null;const U=new Lt(0,0,q,X),Y=new Lt(0,0,q,X);let ne=!1;const me=new Gx;let G=!1,J=!1,ce=null;const we=new yt,ye=new qe,pe=new F,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return b===null?Q:1}let k=i;function Rt(T,I){for(let H=0;H<T.length;H++){const j=T[H],z=n.getContext(j,I);if(z!==null)return z}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${nf}`),n.addEventListener("webglcontextlost",at,!1),n.addEventListener("webglcontextrestored",D,!1),n.addEventListener("webglcontextcreationerror",le,!1),k===null){const I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),k=Rt(I,T),k===null)throw Rt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ee,He,Te,Xe,ze,Ge,pt,R,E,W,K,ie,ee,Ie,Ce,oe,ue,Ue,re,xt,je,Se,ge,xe;function $e(){Ee=new ME(k),He=new mE(k,Ee,e),Ee.init(He),Se=new ob(k,Ee,He),Te=new sb(k,Ee,He),Xe=new bE(k),ze=new Ww,Ge=new ab(k,Ee,Te,ze,He,Se,Xe),pt=new xE(x),R=new SE(x),E=new NS(k,He),ge=new hE(k,Ee,E,He),W=new EE(k,E,Xe,ge),K=new RE(k,W,E,Xe),re=new CE(k,He,Ge),oe=new gE(ze),ie=new Vw(x,pt,R,Ee,He,ge,oe),ee=new mb(x,ze),Ie=new $w,Ce=new Jw(Ee,He),Ue=new fE(x,pt,R,Te,K,p,l),ue=new rb(x,K,He),xe=new gb(k,Xe,He,Te),xt=new pE(k,Ee,Xe,He),je=new wE(k,Ee,Xe,He),Xe.programs=ie.programs,x.capabilities=He,x.extensions=Ee,x.properties=ze,x.renderLists=Ie,x.shadowMap=ue,x.state=Te,x.info=Xe}$e();const Le=new hb(x,k);this.xr=Le,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=Ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(q,X,!1))},this.getSize=function(T){return T.set(q,X)},this.setSize=function(T,I,H=!0){if(Le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,X=I,n.width=Math.floor(T*Q),n.height=Math.floor(I*Q),H===!0&&(n.style.width=T+"px",n.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(q*Q,X*Q).floor()},this.setDrawingBufferSize=function(T,I,H){q=T,X=I,Q=H,n.width=Math.floor(T*H),n.height=Math.floor(I*H),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(U)},this.setViewport=function(T,I,H,j){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,I,H,j),Te.viewport(M.copy(U).multiplyScalar(Q).round())},this.getScissor=function(T){return T.copy(Y)},this.setScissor=function(T,I,H,j){T.isVector4?Y.set(T.x,T.y,T.z,T.w):Y.set(T,I,H,j),Te.scissor(C.copy(Y).multiplyScalar(Q).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(T){Te.setScissorTest(ne=T)},this.setOpaqueSort=function(T){L=T},this.setTransparentSort=function(T){O=T},this.getClearColor=function(T){return T.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(T=!0,I=!0,H=!0){let j=0;if(T){let z=!1;if(b!==null){const fe=b.texture.format;z=fe===Ax||fe===Tx||fe===bx}if(z){const fe=b.texture.type,ve=fe===ji||fe===Li||fe===rf||fe===vr||fe===Ex||fe===wx,be=Ue.getClearColor(),Re=Ue.getClearAlpha(),Be=be.r,Pe=be.g,De=be.b;ve?(g[0]=Be,g[1]=Pe,g[2]=De,g[3]=Re,k.clearBufferuiv(k.COLOR,0,g)):(_[0]=Be,_[1]=Pe,_[2]=De,_[3]=Re,k.clearBufferiv(k.COLOR,0,_))}else j|=k.COLOR_BUFFER_BIT}I&&(j|=k.DEPTH_BUFFER_BIT),H&&(j|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",at,!1),n.removeEventListener("webglcontextrestored",D,!1),n.removeEventListener("webglcontextcreationerror",le,!1),Ie.dispose(),Ce.dispose(),ze.dispose(),pt.dispose(),R.dispose(),K.dispose(),ge.dispose(),xe.dispose(),ie.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",xn),Le.removeEventListener("sessionend",tt),ce&&(ce.dispose(),ce=null),Gt.stop()};function at(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=Xe.autoReset,I=ue.enabled,H=ue.autoUpdate,j=ue.needsUpdate,z=ue.type;$e(),Xe.autoReset=T,ue.enabled=I,ue.autoUpdate=H,ue.needsUpdate=j,ue.type=z}function le(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function B(T){const I=T.target;I.removeEventListener("dispose",B),se(I)}function se(T){de(T),ze.remove(T)}function de(T){const I=ze.get(T).programs;I!==void 0&&(I.forEach(function(H){ie.releaseProgram(H)}),T.isShaderMaterial&&ie.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,H,j,z,fe){I===null&&(I=Ze);const ve=z.isMesh&&z.matrixWorld.determinant()<0,be=Jx(T,I,H,j,z);Te.setMaterial(j,ve);let Re=H.index,Be=1;if(j.wireframe===!0){if(Re=W.getWireframeAttribute(H),Re===void 0)return;Be=2}const Pe=H.drawRange,De=H.attributes.position;let mt=Pe.start*Be,on=(Pe.start+Pe.count)*Be;fe!==null&&(mt=Math.max(mt,fe.start*Be),on=Math.min(on,(fe.start+fe.count)*Be)),Re!==null?(mt=Math.max(mt,0),on=Math.min(on,Re.count)):De!=null&&(mt=Math.max(mt,0),on=Math.min(on,De.count));const bt=on-mt;if(bt<0||bt===1/0)return;ge.setup(z,j,be,H,Re);let Zn,ct=xt;if(Re!==null&&(Zn=E.get(Re),ct=je,ct.setIndex(Zn)),z.isMesh)j.wireframe===!0?(Te.setLineWidth(j.wireframeLinewidth*Ne()),ct.setMode(k.LINES)):ct.setMode(k.TRIANGLES);else if(z.isLine){let ke=j.linewidth;ke===void 0&&(ke=1),Te.setLineWidth(ke*Ne()),z.isLineSegments?ct.setMode(k.LINES):z.isLineLoop?ct.setMode(k.LINE_LOOP):ct.setMode(k.LINE_STRIP)}else z.isPoints?ct.setMode(k.POINTS):z.isSprite&&ct.setMode(k.TRIANGLES);if(z.isBatchedMesh)ct.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)ct.renderInstances(mt,bt,z.count);else if(H.isInstancedBufferGeometry){const ke=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Bl=Math.min(H.instanceCount,ke);ct.renderInstances(mt,bt,Bl)}else ct.render(mt,bt)};function We(T,I,H){T.transparent===!0&&T.side===ai&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,Ia(T,I,H),T.side=Xi,T.needsUpdate=!0,Ia(T,I,H),T.side=ai):Ia(T,I,H)}this.compile=function(T,I,H=null){H===null&&(H=T),m=Ce.get(H),m.init(),v.push(m),H.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),T!==H&&T.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(x._useLegacyLights);const j=new Set;return T.traverse(function(z){const fe=z.material;if(fe)if(Array.isArray(fe))for(let ve=0;ve<fe.length;ve++){const be=fe[ve];We(be,H,z),j.add(be)}else We(fe,H,z),j.add(fe)}),v.pop(),m=null,j},this.compileAsync=function(T,I,H=null){const j=this.compile(T,I,H);return new Promise(z=>{function fe(){if(j.forEach(function(ve){ze.get(ve).currentProgram.isReady()&&j.delete(ve)}),j.size===0){z(T);return}setTimeout(fe,10)}Ee.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let et=null;function Nt(T){et&&et(T)}function xn(){Gt.stop()}function tt(){Gt.start()}const Gt=new jx;Gt.setAnimationLoop(Nt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(T){et=T,Le.setAnimationLoop(T),T===null?Gt.stop():Gt.start()},Le.addEventListener("sessionstart",xn),Le.addEventListener("sessionend",tt),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(I),I=Le.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,I,b),m=Ce.get(T,v.length),m.init(),v.push(m),we.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),me.setFromProjectionMatrix(we),J=this.localClippingEnabled,G=oe.init(this.clippingPlanes,J),S=Ie.get(T,d.length),S.init(),d.push(S),Gn(T,I,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort(L,O),this.info.render.frame++,G===!0&&oe.beginShadows();const H=m.state.shadowsArray;if(ue.render(H,T,I),G===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1)&&Ue.render(S,T),m.setupLights(x._useLegacyLights),I.isArrayCamera){const j=I.cameras;for(let z=0,fe=j.length;z<fe;z++){const ve=j[z];cf(S,T,ve,ve.viewport)}}else cf(S,T,I);b!==null&&(Ge.updateMultisampleRenderTarget(b),Ge.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(x,T,I),ge.resetDefaultState(),N=-1,V=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,d.pop(),d.length>0?S=d[d.length-1]:S=null};function Gn(T,I,H,j){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||me.intersectsSprite(T)){j&&pe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(we);const ve=K.update(T),be=T.material;be.visible&&S.push(T,ve,be,H,pe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||me.intersectsObject(T))){const ve=K.update(T),be=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),pe.copy(T.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),pe.copy(ve.boundingSphere.center)),pe.applyMatrix4(T.matrixWorld).applyMatrix4(we)),Array.isArray(be)){const Re=ve.groups;for(let Be=0,Pe=Re.length;Be<Pe;Be++){const De=Re[Be],mt=be[De.materialIndex];mt&&mt.visible&&S.push(T,ve,mt,H,pe.z,De)}}else be.visible&&S.push(T,ve,be,H,pe.z,null)}}const fe=T.children;for(let ve=0,be=fe.length;ve<be;ve++)Gn(fe[ve],I,H,j)}function cf(T,I,H,j){const z=T.opaque,fe=T.transmissive,ve=T.transparent;m.setupLightsView(H),G===!0&&oe.setGlobalState(x.clippingPlanes,H),fe.length>0&&Qx(z,fe,I,H),j&&Te.viewport(M.copy(j)),z.length>0&&Da(z,I,H),fe.length>0&&Da(fe,I,H),ve.length>0&&Da(ve,I,H),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Qx(T,I,H,j){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const fe=He.isWebGL2;ce===null&&(ce=new br(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Ma:ji,minFilter:mr,samples:fe?4:0})),x.getDrawingBufferSize(ye),fe?ce.setSize(ye.x,ye.y):ce.setSize(Ju(ye.x),Ju(ye.y));const ve=x.getRenderTarget();x.setRenderTarget(ce),x.getClearColor(Z),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const be=x.toneMapping;x.toneMapping=Gi,Da(T,H,j),Ge.updateMultisampleRenderTarget(ce),Ge.updateRenderTargetMipmap(ce);let Re=!1;for(let Be=0,Pe=I.length;Be<Pe;Be++){const De=I[Be],mt=De.object,on=De.geometry,bt=De.material,Zn=De.group;if(bt.side===ai&&mt.layers.test(j.layers)){const ct=bt.side;bt.side=rn,bt.needsUpdate=!0,uf(mt,H,j,on,bt,Zn),bt.side=ct,bt.needsUpdate=!0,Re=!0}}Re===!0&&(Ge.updateMultisampleRenderTarget(ce),Ge.updateRenderTargetMipmap(ce)),x.setRenderTarget(ve),x.setClearColor(Z,P),x.toneMapping=be}function Da(T,I,H){const j=I.isScene===!0?I.overrideMaterial:null;for(let z=0,fe=T.length;z<fe;z++){const ve=T[z],be=ve.object,Re=ve.geometry,Be=j===null?ve.material:j,Pe=ve.group;be.layers.test(H.layers)&&uf(be,I,H,Re,Be,Pe)}}function uf(T,I,H,j,z,fe){T.onBeforeRender(x,I,H,j,z,fe),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(x,I,H,j,T,fe),z.transparent===!0&&z.side===ai&&z.forceSinglePass===!1?(z.side=rn,z.needsUpdate=!0,x.renderBufferDirect(H,I,j,z,T,fe),z.side=Xi,z.needsUpdate=!0,x.renderBufferDirect(H,I,j,z,T,fe),z.side=ai):x.renderBufferDirect(H,I,j,z,T,fe),T.onAfterRender(x,I,H,j,z,fe)}function Ia(T,I,H){I.isScene!==!0&&(I=Ze);const j=ze.get(T),z=m.state.lights,fe=m.state.shadowsArray,ve=z.state.version,be=ie.getParameters(T,z.state,fe,I,H),Re=ie.getProgramCacheKey(be);let Be=j.programs;j.environment=T.isMeshStandardMaterial?I.environment:null,j.fog=I.fog,j.envMap=(T.isMeshStandardMaterial?R:pt).get(T.envMap||j.environment),j.envMapRotation=j.environment!==null&&T.envMap===null?I.environmentRotation:T.envMapRotation,Be===void 0&&(T.addEventListener("dispose",B),Be=new Map,j.programs=Be);let Pe=Be.get(Re);if(Pe!==void 0){if(j.currentProgram===Pe&&j.lightsStateVersion===ve)return ff(T,be),Pe}else be.uniforms=ie.getUniforms(T),T.onBuild(H,be,x),T.onBeforeCompile(be,x),Pe=ie.acquireProgram(be,Re),Be.set(Re,Pe),j.uniforms=be.uniforms;const De=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=oe.uniform),ff(T,be),j.needsLights=t0(T),j.lightsStateVersion=ve,j.needsLights&&(De.ambientLightColor.value=z.state.ambient,De.lightProbe.value=z.state.probe,De.directionalLights.value=z.state.directional,De.directionalLightShadows.value=z.state.directionalShadow,De.spotLights.value=z.state.spot,De.spotLightShadows.value=z.state.spotShadow,De.rectAreaLights.value=z.state.rectArea,De.ltc_1.value=z.state.rectAreaLTC1,De.ltc_2.value=z.state.rectAreaLTC2,De.pointLights.value=z.state.point,De.pointLightShadows.value=z.state.pointShadow,De.hemisphereLights.value=z.state.hemi,De.directionalShadowMap.value=z.state.directionalShadowMap,De.directionalShadowMatrix.value=z.state.directionalShadowMatrix,De.spotShadowMap.value=z.state.spotShadowMap,De.spotLightMatrix.value=z.state.spotLightMatrix,De.spotLightMap.value=z.state.spotLightMap,De.pointShadowMap.value=z.state.pointShadowMap,De.pointShadowMatrix.value=z.state.pointShadowMatrix),j.currentProgram=Pe,j.uniformsList=null,Pe}function df(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=ko.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function ff(T,I){const H=ze.get(T);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function Jx(T,I,H,j,z){I.isScene!==!0&&(I=Ze),Ge.resetTextureUnits();const fe=I.fog,ve=j.isMeshStandardMaterial?I.environment:null,be=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Zi,Re=(j.isMeshStandardMaterial?R:pt).get(j.envMap||ve),Be=j.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Pe=!!H.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),De=!!H.morphAttributes.position,mt=!!H.morphAttributes.normal,on=!!H.morphAttributes.color;let bt=Gi;j.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(bt=x.toneMapping);const Zn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ct=Zn!==void 0?Zn.length:0,ke=ze.get(j),Bl=m.state.lights;if(G===!0&&(J===!0||T!==V)){const vn=T===V&&j.id===N;oe.setState(j,T,vn)}let ot=!1;j.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Bl.state.version||ke.outputColorSpace!==be||z.isBatchedMesh&&ke.batching===!1||!z.isBatchedMesh&&ke.batching===!0||z.isInstancedMesh&&ke.instancing===!1||!z.isInstancedMesh&&ke.instancing===!0||z.isSkinnedMesh&&ke.skinning===!1||!z.isSkinnedMesh&&ke.skinning===!0||z.isInstancedMesh&&ke.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ke.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ke.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ke.instancingMorph===!1&&z.morphTexture!==null||ke.envMap!==Re||j.fog===!0&&ke.fog!==fe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==oe.numPlanes||ke.numIntersection!==oe.numIntersection)||ke.vertexAlphas!==Be||ke.vertexTangents!==Pe||ke.morphTargets!==De||ke.morphNormals!==mt||ke.morphColors!==on||ke.toneMapping!==bt||He.isWebGL2===!0&&ke.morphTargetsCount!==ct)&&(ot=!0):(ot=!0,ke.__version=j.version);let Qi=ke.currentProgram;ot===!0&&(Qi=Ia(j,I,z));let hf=!1,Rs=!1,Hl=!1;const Ut=Qi.getUniforms(),Ji=ke.uniforms;if(Te.useProgram(Qi.program)&&(hf=!0,Rs=!0,Hl=!0),j.id!==N&&(N=j.id,Rs=!0),hf||V!==T){Ut.setValue(k,"projectionMatrix",T.projectionMatrix),Ut.setValue(k,"viewMatrix",T.matrixWorldInverse);const vn=Ut.map.cameraPosition;vn!==void 0&&vn.setValue(k,pe.setFromMatrixPosition(T.matrixWorld)),He.logarithmicDepthBuffer&&Ut.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ut.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),V!==T&&(V=T,Rs=!0,Hl=!0)}if(z.isSkinnedMesh){Ut.setOptional(k,z,"bindMatrix"),Ut.setOptional(k,z,"bindMatrixInverse");const vn=z.skeleton;vn&&(He.floatVertexTextures?(vn.boneTexture===null&&vn.computeBoneTexture(),Ut.setValue(k,"boneTexture",vn.boneTexture,Ge)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Ut.setOptional(k,z,"batchingTexture"),Ut.setValue(k,"batchingTexture",z._matricesTexture,Ge));const Gl=H.morphAttributes;if((Gl.position!==void 0||Gl.normal!==void 0||Gl.color!==void 0&&He.isWebGL2===!0)&&re.update(z,H,Qi),(Rs||ke.receiveShadow!==z.receiveShadow)&&(ke.receiveShadow=z.receiveShadow,Ut.setValue(k,"receiveShadow",z.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Ji.envMap.value=Re,Ji.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Rs&&(Ut.setValue(k,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&e0(Ji,Hl),fe&&j.fog===!0&&ee.refreshFogUniforms(Ji,fe),ee.refreshMaterialUniforms(Ji,j,Q,X,ce),ko.upload(k,df(ke),Ji,Ge)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ko.upload(k,df(ke),Ji,Ge),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ut.setValue(k,"center",z.center),Ut.setValue(k,"modelViewMatrix",z.modelViewMatrix),Ut.setValue(k,"normalMatrix",z.normalMatrix),Ut.setValue(k,"modelMatrix",z.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const vn=j.uniformsGroups;for(let jl=0,n0=vn.length;jl<n0;jl++)if(He.isWebGL2){const pf=vn[jl];xe.update(pf,Qi),xe.bind(pf,Qi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qi}function e0(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function t0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,I,H){ze.get(T.texture).__webglTexture=I,ze.get(T.depthTexture).__webglTexture=H;const j=ze.get(T);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=H===void 0,j.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,I){const H=ze.get(T);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,H=0){b=T,w=I,A=H;let j=!0,z=null,fe=!1,ve=!1;if(T){const Re=ze.get(T);Re.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(k.FRAMEBUFFER,null),j=!1):Re.__webglFramebuffer===void 0?Ge.setupRenderTarget(T):Re.__hasExternalTextures&&Ge.rebindTextures(T,ze.get(T.texture).__webglTexture,ze.get(T.depthTexture).__webglTexture);const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ve=!0);const Pe=ze.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Pe[I])?z=Pe[I][H]:z=Pe[I],fe=!0):He.isWebGL2&&T.samples>0&&Ge.useMultisampledRTT(T)===!1?z=ze.get(T).__webglMultisampledFramebuffer:Array.isArray(Pe)?z=Pe[H]:z=Pe,M.copy(T.viewport),C.copy(T.scissor),$=T.scissorTest}else M.copy(U).multiplyScalar(Q).floor(),C.copy(Y).multiplyScalar(Q).floor(),$=ne;if(Te.bindFramebuffer(k.FRAMEBUFFER,z)&&He.drawBuffers&&j&&Te.drawBuffers(T,z),Te.viewport(M),Te.scissor(C),Te.setScissorTest($),fe){const Re=ze.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+I,Re.__webglTexture,H)}else if(ve){const Re=ze.get(T.texture),Be=I||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Re.__webglTexture,H||0,Be)}N=-1},this.readRenderTargetPixels=function(T,I,H,j,z,fe,ve){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be){Te.bindFramebuffer(k.FRAMEBUFFER,be);try{const Re=T.texture,Be=Re.format,Pe=Re.type;if(Be!==kn&&Se.convert(Be)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Pe===Ma&&(Ee.has("EXT_color_buffer_half_float")||He.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Pe!==ji&&Se.convert(Pe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===oi&&(He.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-j&&H>=0&&H<=T.height-z&&k.readPixels(I,H,j,z,Se.convert(Be),Se.convert(Pe),fe)}finally{const Re=b!==null?ze.get(b).__webglFramebuffer:null;Te.bindFramebuffer(k.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(T,I,H=0){const j=Math.pow(2,-H),z=Math.floor(I.image.width*j),fe=Math.floor(I.image.height*j);Ge.setTexture2D(I,0),k.copyTexSubImage2D(k.TEXTURE_2D,H,0,0,T.x,T.y,z,fe),Te.unbindTexture()},this.copyTextureToTexture=function(T,I,H,j=0){const z=I.image.width,fe=I.image.height,ve=Se.convert(H.format),be=Se.convert(H.type);Ge.setTexture2D(H,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,H.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,H.unpackAlignment),I.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,j,T.x,T.y,z,fe,ve,be,I.image.data):I.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,j,T.x,T.y,I.mipmaps[0].width,I.mipmaps[0].height,ve,I.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,j,T.x,T.y,ve,be,I.image),j===0&&H.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(T,I,H,j,z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=Math.round(T.max.x-T.min.x),ve=Math.round(T.max.y-T.min.y),be=T.max.z-T.min.z+1,Re=Se.convert(j.format),Be=Se.convert(j.type);let Pe;if(j.isData3DTexture)Ge.setTexture3D(j,0),Pe=k.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)Ge.setTexture2DArray(j,0),Pe=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment);const De=k.getParameter(k.UNPACK_ROW_LENGTH),mt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),on=k.getParameter(k.UNPACK_SKIP_PIXELS),bt=k.getParameter(k.UNPACK_SKIP_ROWS),Zn=k.getParameter(k.UNPACK_SKIP_IMAGES),ct=H.isCompressedTexture?H.mipmaps[z]:H.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ct.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ct.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,T.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,T.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,T.min.z),H.isDataTexture||H.isData3DTexture?k.texSubImage3D(Pe,z,I.x,I.y,I.z,fe,ve,be,Re,Be,ct.data):j.isCompressedArrayTexture?k.compressedTexSubImage3D(Pe,z,I.x,I.y,I.z,fe,ve,be,Re,ct.data):k.texSubImage3D(Pe,z,I.x,I.y,I.z,fe,ve,be,Re,Be,ct),k.pixelStorei(k.UNPACK_ROW_LENGTH,De),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,mt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,on),k.pixelStorei(k.UNPACK_SKIP_ROWS,bt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Zn),z===0&&j.generateMipmaps&&k.generateMipmap(Pe),Te.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ge.setTextureCube(T,0):T.isData3DTexture?Ge.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ge.setTexture2DArray(T,0):Ge.setTexture2D(T,0),Te.unbindTexture()},this.resetState=function(){w=0,A=0,b=null,Te.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===sf?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===kl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class xb extends Kx{}xb.prototype.isWebGL1Renderer=!0;class vb extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Zx extends Pa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $p=new yt,td=new Ix,So=new Fl,Mo=new F;class _b extends an{constructor(e=new Hn,n=new Zx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(r),So.radius+=s,e.ray.intersectsSphere(So)===!1)return;$p.copy(r).invert(),td.copy(e.ray).applyMatrix4($p);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const p=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let _=p,S=g;_<S;_++){const m=c.getX(_);Mo.fromBufferAttribute(f,m),qp(Mo,m,l,r,e,n,this)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=p,S=g;_<S;_++)Mo.fromBufferAttribute(f,_),qp(Mo,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function qp(t,e,n,i,r,s,a){const o=td.distanceSqToPoint(t);if(o<n){const l=new F;td.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class of extends Hn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),h(),this.setAttribute("position",new hn(s,3)),this.setAttribute("normal",new hn(s.slice(),3)),this.setAttribute("uv",new hn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const x=new F,y=new F,w=new F;for(let A=0;A<n.length;A+=3)g(n[A+0],x),g(n[A+1],y),g(n[A+2],w),l(x,y,w,v)}function l(v,x,y,w){const A=w+1,b=[];for(let N=0;N<=A;N++){b[N]=[];const V=v.clone().lerp(y,N/A),M=x.clone().lerp(y,N/A),C=A-N;for(let $=0;$<=C;$++)$===0&&N===A?b[N][$]=V:b[N][$]=V.clone().lerp(M,$/C)}for(let N=0;N<A;N++)for(let V=0;V<2*(A-N)-1;V++){const M=Math.floor(V/2);V%2===0?(p(b[N][M+1]),p(b[N+1][M]),p(b[N][M])):(p(b[N][M+1]),p(b[N+1][M+1]),p(b[N+1][M]))}}function c(v){const x=new F;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(v),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function h(){const v=new F;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const y=m(v)/2/Math.PI+.5,w=d(v)/Math.PI+.5;a.push(y,1-w)}_(),f()}function f(){for(let v=0;v<a.length;v+=6){const x=a[v+0],y=a[v+2],w=a[v+4],A=Math.max(x,y,w),b=Math.min(x,y,w);A>.9&&b<.1&&(x<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),w<.2&&(a[v+4]+=1))}}function p(v){s.push(v.x,v.y,v.z)}function g(v,x){const y=v*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function _(){const v=new F,x=new F,y=new F,w=new F,A=new qe,b=new qe,N=new qe;for(let V=0,M=0;V<s.length;V+=9,M+=6){v.set(s[V+0],s[V+1],s[V+2]),x.set(s[V+3],s[V+4],s[V+5]),y.set(s[V+6],s[V+7],s[V+8]),A.set(a[M+0],a[M+1]),b.set(a[M+2],a[M+3]),N.set(a[M+4],a[M+5]),w.copy(v).add(x).add(y).divideScalar(3);const C=m(w);S(A,M+0,v,C),S(b,M+2,x,C),S(N,M+4,y,C)}}function S(v,x,y,w){w<0&&v.x===1&&(a[x]=v.x-1),y.x===0&&y.z===0&&(a[x]=w/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new of(e.vertices,e.indices,e.radius,e.details)}}class xl extends of{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new xl(e.radius,e.detail)}}class lf extends Hn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],h=new F,f=new F,p=new F;for(let g=0;g<=i;g++)for(let _=0;_<=r;_++){const S=_/r*s,m=g/i*Math.PI*2;f.x=(e+n*Math.cos(m))*Math.cos(S),f.y=(e+n*Math.cos(m))*Math.sin(S),f.z=n*Math.sin(m),o.push(f.x,f.y,f.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),p.subVectors(f,h).normalize(),l.push(p.x,p.y,p.z),c.push(_/r),c.push(g/i)}for(let g=1;g<=i;g++)for(let _=1;_<=r;_++){const S=(r+1)*g+_-1,m=(r+1)*(g-1)+_-1,d=(r+1)*(g-1)+_,v=(r+1)*g+_;a.push(S,m,v),a.push(m,d,v)}this.setIndex(a),this.setAttribute("position",new hn(o,3)),this.setAttribute("normal",new hn(l,3)),this.setAttribute("uv",new hn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class yb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Yp();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Yp(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nf);function Sb({accentColor:t="#00F0FF"}){const e=_e.useRef(null),n=_e.useRef(null),i=_e.useRef(null),r=_e.useRef(null),s=_e.useRef(null),a=_e.useRef([]),o=_e.useRef({x:0,y:0,targetX:0,targetY:0});return _e.useEffect(()=>{const l=e.current;if(!l)return;const c=new vb;n.current=c;const h=l.clientWidth,f=l.clientHeight,p=new Mn(45,h/f,.1,1e3);p.position.z=5.5;const g=new Kx({antialias:!0,alpha:!0,powerPreference:"high-performance"});g.setSize(h,f),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.appendChild(g.domElement),i.current=g;const _=new Ke(t),S=new Ke("#6366F1"),m=new xl(1.6,2),d=new ra({color:_,wireframe:!0,transparent:!0,opacity:.35}),v=new wn(m,d);c.add(v),r.current=v;const x=new xl(.9,1),y=new ra({color:S,wireframe:!0,transparent:!0,opacity:.25}),w=new wn(x,y);v.add(w);const A=280,b=new Hn,N=new Float32Array(A*3),V=new Float32Array(A);for(let U=0;U<A;U++){const Y=Math.random()*Math.PI*2,ne=Math.acos(Math.random()*2-1),me=2+Math.random()*1.5;N[U*3]=me*Math.sin(ne)*Math.cos(Y),N[U*3+1]=me*Math.sin(ne)*Math.sin(Y),N[U*3+2]=me*Math.cos(ne),V[U]=Math.random()*.05+.02}b.setAttribute("position",new zn(N,3));const M=new Zx({color:_,size:.04,transparent:!0,opacity:.65,blending:Vu}),C=new _b(b,M);c.add(C),s.current=C;const $=[];for(let U=0;U<2;U++){const Y=new lf(2.4+U*.5,.012,16,100),ne=new ra({color:U===0?_:S,transparent:!0,opacity:.2}),me=new wn(Y,ne);me.rotation.x=Math.PI/(2+U),me.rotation.y=Math.PI/4*U,c.add(me),$.push(me)}a.current=$;const Z=U=>{const Y=l.getBoundingClientRect(),ne=(U.clientX-Y.left)/Y.width*2-1,me=-((U.clientY-Y.top)/Y.height*2-1);o.current.targetX=ne*.8,o.current.targetY=me*.8};window.addEventListener("mousemove",Z);let P=1;const q=()=>{P=1.35};l.addEventListener("pointerdown",q);const X=()=>{if(!l||!g||!p)return;const U=l.clientWidth,Y=l.clientHeight;p.aspect=U/Y,p.updateProjectionMatrix(),g.setSize(U,Y)};window.addEventListener("resize",X);let Q,L=new yb;const O=()=>{Q=requestAnimationFrame(O);const U=L.getElapsedTime();o.current.x+=(o.current.targetX-o.current.x)*.05,o.current.y+=(o.current.targetY-o.current.y)*.05,r.current&&(r.current.rotation.x=U*.15+o.current.y*.6,r.current.rotation.y=U*.2+o.current.x*.6,P+=(1-P)*.08,r.current.scale.set(P,P,P)),s.current&&(s.current.rotation.y=-U*.08,s.current.rotation.x=U*.05),a.current.forEach((Y,ne)=>{Y.rotation.z+=(ne+1)*.003,Y.rotation.y+=(ne+1)*.002}),g.render(c,p)};return O(),()=>{window.removeEventListener("mousemove",Z),window.removeEventListener("resize",X),l.removeEventListener("pointerdown",q),cancelAnimationFrame(Q),g.domElement&&l.contains(g.domElement)&&l.removeChild(g.domElement),g.dispose()}},[]),_e.useEffect(()=>{r.current&&r.current.material.color.set(t),s.current&&s.current.material.color.set(t),a.current[0]&&a.current[0].material.color.set(t)},[t]),u.jsx("div",{ref:e,className:"relative w-full h-full min-h-[380px] lg:min-h-[520px] flex items-center justify-center cursor-grab active:cursor-grabbing",title:"Click or drag to interact with the 3D physics mesh",children:u.jsxs("div",{className:"absolute top-4 right-4 z-10 px-2.5 py-1 rounded-md bg-obsidian-900/80 border border-white/10 text-[10px] font-mono text-slate-400 flex items-center gap-1.5 backdrop-blur-md pointer-events-none",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping"}),u.jsx("span",{children:"Interactive 3D WebGL"})]})})}function Mb({onOpenCommandPalette:t,accentColor:e}){return u.jsxs("section",{className:"relative min-h-[90vh] flex flex-col justify-center pt-8 pb-16 px-4 lg:px-8 overflow-hidden",children:[u.jsx("div",{className:"absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none opacity-20 transition-all duration-700",style:{background:e}}),u.jsxs("div",{className:"max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10",children:[u.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[u.jsxs("div",{className:"inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-obsidian-900/90 border border-white/15 text-xs font-mono backdrop-blur-md shadow-inner",children:[u.jsxs("span",{className:"relative flex h-2 w-2",children:[u.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),u.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),u.jsx("span",{className:"text-slate-300",children:"Open for Full-Stack & AI Roles / Collaborations"}),u.jsx("span",{className:"text-slate-600",children:"/"}),u.jsx("span",{className:"text-brand-cyan text-[11px]",children:"Bangalore • UTC+5:30"})]}),u.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.12]",children:["Turning ideas into scalable products with"," ",u.jsx("span",{className:"gradient-text-accent",children:"Full-Stack & AI."})]}),u.jsxs("p",{className:"text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed",children:["Hey, I’m ",u.jsx("strong",{className:"text-white font-semibold",children:"Sumit"})," — a Full-Stack Developer & AI enthusiast. I build responsive web interfaces, robust backend architectures, and intelligent AI-powered solutions that solve real problems."]}),u.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-obsidian-900 border border-white/10 text-xs font-mono text-slate-400",children:[u.jsx("span",{className:"text-brand-cyan",children:"“"}),u.jsx("span",{children:"Code is my tool. Curiosity is my advantage. Building is what I enjoy."}),u.jsx("span",{className:"text-brand-cyan",children:"”"})]}),u.jsxs("div",{className:"flex flex-wrap items-center gap-3 pt-2",children:[u.jsxs("a",{href:"#about",onClick:n=>{var i;n.preventDefault(),Me.playClick(),(i=document.getElementById("about"))==null||i.scrollIntoView({behavior:"smooth"})},className:"flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-obsidian-950 font-semibold text-xs tracking-wide hover:bg-slate-200 transition-all shadow-glow-sm hover:scale-[1.02] active:scale-[0.98]",children:[u.jsx("span",{children:"Explore My Story & Stack"}),u.jsx(I_,{className:"w-3.5 h-3.5"})]}),u.jsxs("a",{href:"#github-activity",onClick:n=>{var i;n.preventDefault(),Me.playClick(),(i=document.getElementById("github-activity"))==null||i.scrollIntoView({behavior:"smooth"})},className:"flex items-center gap-2 px-4 py-3 rounded-xl bg-obsidian-900 hover:bg-obsidian-850 border border-white/15 text-slate-200 font-medium text-xs tracking-wide hover:border-white/30 transition-all hover:scale-[1.02]",children:[u.jsx(Jd,{className:"w-3.5 h-3.5 text-brand-cyan"}),u.jsx("span",{children:"Live GitHub Stream"})]}),u.jsxs("button",{onClick:()=>{Me.playClick(),t()},className:"flex items-center gap-2 px-3.5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white font-mono text-xs transition-all",children:[u.jsx(ux,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"⌘K"})]})]}),u.jsxs("div",{className:"pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(ju,{className:"w-4 h-4 text-amber-400"}),u.jsx("span",{children:"Smart India Hackathon"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Il,{className:"w-4 h-4 text-brand-cyan"}),u.jsx("span",{children:"MERN & Modern Backend"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(k_,{className:"w-4 h-4 text-indigo-400"}),u.jsx("span",{children:"AI & LLM Integration"})]})]})]}),u.jsx("div",{className:"lg:col-span-5 relative flex items-center justify-center",children:u.jsxs("div",{className:"relative w-full aspect-square max-w-[480px] rounded-3xl bg-obsidian-900/60 border border-white/10 p-2 shadow-2xl backdrop-blur-xl group overflow-hidden",children:[u.jsxs("div",{className:"absolute top-3 left-4 z-20 flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-rose-500/80"}),u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-500/80"}),u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500/80"}),u.jsx("span",{className:"ml-2 text-[10px] font-mono text-slate-500",children:"canvas://interactive-physics.glsl"})]}),u.jsx(Sb,{accentColor:e}),u.jsxs("div",{className:"absolute bottom-3 inset-x-4 z-20 flex items-center justify-between px-3 py-1.5 rounded-lg bg-obsidian-950/80 border border-white/10 text-[11px] font-mono text-slate-400",children:[u.jsxs("span",{className:"flex items-center gap-1.5",children:[u.jsx(hx,{className:"w-3 h-3 text-brand-cyan"}),"Mouse Parallax & Impulse Physics"]}),u.jsx("span",{className:"text-slate-500",children:"60 FPS"})]})]})})]}),u.jsxs("div",{className:"max-w-7xl mx-auto w-full mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4",children:[u.jsxs("div",{className:"p-4 rounded-xl bg-obsidian-900/50 border border-white/5 space-y-1",children:[u.jsx("div",{className:"text-[11px] font-mono text-slate-400 uppercase tracking-wider",children:"Hackathon Experience"}),u.jsxs("div",{className:"text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-2",children:[u.jsx("span",{children:"SIH Builder"}),u.jsx("span",{className:"text-[10px] font-mono font-normal text-amber-400 px-1.5 py-0.5 rounded bg-amber-500/10",children:"36h Sprint"})]}),u.jsx("div",{className:"text-[11px] text-slate-400",children:"Rapid High-Pressure Delivery"})]}),u.jsxs("div",{className:"p-4 rounded-xl bg-obsidian-900/50 border border-white/5 space-y-1",children:[u.jsx("div",{className:"text-[11px] font-mono text-slate-400 uppercase tracking-wider",children:"Full-Stack Core"}),u.jsxs("div",{className:"text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-2",children:[u.jsx("span",{children:"MERN & Node"}),u.jsx("span",{className:"text-[10px] font-mono font-normal text-brand-cyan px-1.5 py-0.5 rounded bg-cyan-500/10",children:"React"})]}),u.jsx("div",{className:"text-[11px] text-slate-400",children:"Full-Cycle Web Architecture"})]}),u.jsxs("div",{className:"p-4 rounded-xl bg-obsidian-900/50 border border-white/5 space-y-1",children:[u.jsx("div",{className:"text-[11px] font-mono text-slate-400 uppercase tracking-wider",children:"AI & Intelligence"}),u.jsxs("div",{className:"text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-2",children:[u.jsx("span",{children:"AI / LLMs"}),u.jsx("span",{className:"text-[10px] font-mono font-normal text-indigo-400 px-1.5 py-0.5 rounded bg-indigo-500/10",children:"ML"})]}),u.jsx("div",{className:"text-[11px] text-slate-400",children:"Intelligent Data Pipelines"})]}),u.jsxs("div",{className:"p-4 rounded-xl bg-obsidian-900/50 border border-white/5 space-y-1",children:[u.jsx("div",{className:"text-[11px] font-mono text-slate-400 uppercase tracking-wider",children:"Problem Solving"}),u.jsxs("div",{className:"text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-2",children:[u.jsx("span",{children:"DSA Rigor"}),u.jsx("span",{className:"text-[10px] font-mono font-normal text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-500/10",children:"Optimized"})]}),u.jsx("div",{className:"text-[11px] text-slate-400",children:"Algorithmic Efficiency"})]})]})]})}function Eb(){return u.jsxs("section",{id:"about",className:"py-20 px-4 lg:px-8 max-w-7xl mx-auto space-y-12",children:[u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan",children:[u.jsx(O_,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"The Philosophy & Background"})]}),u.jsx("h2",{className:"text-3xl sm:text-4xl font-display font-bold text-white tracking-tight",children:"Beyond Just Writing Code"}),u.jsx("p",{className:"text-slate-400 max-w-2xl text-sm sm:text-base font-normal",children:"Turning ideas into products that people can actually use, with rapid execution and continuous curiosity."})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch",children:[u.jsxs("div",{className:"lg:col-span-7 rounded-3xl bg-obsidian-900/80 border border-white/10 p-6 sm:p-8 flex flex-col justify-between space-y-6 backdrop-blur-xl shadow-2xl relative overflow-hidden group",children:[u.jsxs("div",{className:"space-y-4 relative z-10",children:[u.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-brand-cyan",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-cyan"}),u.jsx("span",{children:"HEY, I'M SUMIT"})]}),u.jsx("h3",{className:"text-2xl sm:text-3xl font-display font-bold text-white leading-snug",children:"Full-Stack Developer & AI enthusiast who enjoys turning ideas into products that people can actually use."}),u.jsxs("div",{className:"space-y-3 text-sm text-slate-300 font-sans leading-relaxed",children:[u.jsxs("p",{children:["I started with web development, building interfaces and applications with ",u.jsx("strong",{className:"text-white font-medium",children:"React, JavaScript, Node.js, and modern backend technologies"}),"."]}),u.jsxs("p",{children:["Over time, I became more interested in what happens ",u.jsx("span",{className:"text-brand-cyan font-medium",children:"beyond the UI"})," — how products are architected, how data flows through systems, and how AI can make software more intelligent and useful."]}),u.jsxs("p",{className:"text-slate-400",children:["Today, I’m actively exploring the intersection of ",u.jsx("strong",{className:"text-slate-200",children:"Full-Stack Development and AI/ML"}),", while continuously improving my problem-solving skills through ",u.jsx("strong",{className:"text-slate-200",children:"Data Structures & Algorithms (DSA)"})," and real-world projects."]})]})]}),u.jsx("div",{className:"p-4 rounded-2xl bg-obsidian-950 border border-white/10 flex items-center justify-between gap-4",children:u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"p-2 rounded-xl bg-brand-cyan/10 text-brand-cyan shrink-0",children:u.jsx(j_,{className:"w-4 h-4"})}),u.jsx("p",{className:"text-xs font-mono text-slate-200 italic",children:'"Code is my tool. Curiosity is my advantage. Building is what I enjoy."'})]})})]}),u.jsxs("div",{className:"lg:col-span-5 space-y-4 flex flex-col justify-between",children:[u.jsxs("div",{className:"rounded-3xl bg-gradient-to-br from-amber-500/10 via-obsidian-900/90 to-obsidian-950 border border-amber-500/20 p-6 space-y-4 shadow-xl backdrop-blur-xl",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-mono font-semibold",children:[u.jsx(ju,{className:"w-3.5 h-3.5"}),"Hackathon Tested"]}),u.jsx("span",{className:"text-[10px] font-mono text-slate-400",children:"High-Pressure Execution"})]}),u.jsxs("div",{className:"p-3 rounded-2xl bg-obsidian-950/80 border border-white/5 space-y-1",children:[u.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[u.jsxs("span",{className:"text-white font-bold flex items-center gap-1.5",children:[u.jsx(B_,{className:"w-3.5 h-3.5 text-amber-400"}),"Smart India Hackathon"]}),u.jsx("span",{className:"text-amber-400",children:"36h National Sprint"})]}),u.jsx("p",{className:"text-[11px] text-slate-400 font-sans",children:"Turned complex problem statements into functional, pitched software under extreme timeline pressure."})]}),u.jsxs("div",{className:"p-3 rounded-2xl bg-obsidian-950/80 border border-white/5 space-y-1",children:[u.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[u.jsxs("span",{className:"text-white font-bold flex items-center gap-1.5",children:[u.jsx(ju,{className:"w-3.5 h-3.5 text-brand-cyan"}),"Hack-2-Win @ CGC"]}),u.jsx("span",{className:"text-brand-cyan",children:"24h Hackathon"})]}),u.jsx("p",{className:"text-[11px] text-slate-400 font-sans",children:"24-hour sprint at Chandigarh Group of Colleges (CGC) shipping rapid 0-to-1 full-stack solutions."})]}),u.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed font-sans italic border-t border-white/10 pt-2",children:['"Building under pressure taught me something college never could: ',u.jsx("strong",{className:"text-amber-200 font-medium not-italic",children:"a good idea means very little until you turn it into a working product."}),'"']})]}),u.jsxs("div",{className:"rounded-3xl bg-obsidian-900/80 border border-white/10 p-5 space-y-3 shadow-xl backdrop-blur-xl",children:[u.jsxs("div",{className:"text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2",children:[u.jsx(J_,{className:"w-3.5 h-3.5 text-brand-cyan"}),"What Drives My Building"]}),u.jsxs("div",{className:"space-y-2 text-xs font-mono",children:[u.jsxs("div",{className:"flex items-center gap-2.5 p-2 rounded-xl bg-obsidian-950 border border-white/5 text-slate-200",children:[u.jsx(ia,{className:"w-3.5 h-3.5 text-emerald-400 shrink-0"}),u.jsx("span",{children:"End-to-End MERN & Full-Stack Systems"})]}),u.jsxs("div",{className:"flex items-center gap-2.5 p-2 rounded-xl bg-obsidian-950 border border-white/5 text-slate-200",children:[u.jsx(ia,{className:"w-3.5 h-3.5 text-brand-cyan shrink-0"}),u.jsx("span",{children:"AI Integration & Intelligent Data Flows"})]}),u.jsxs("div",{className:"flex items-center gap-2.5 p-2 rounded-xl bg-obsidian-950 border border-white/5 text-slate-200",children:[u.jsx(ia,{className:"w-3.5 h-3.5 text-indigo-400 shrink-0"}),u.jsx("span",{children:"DSA Rigor & Algorithmic Problem Solving"})]})]})]})]})]})]})}const Eo={categories:[{id:"fullstack",name:"Full-Stack & MERN",skills:[{name:"React & Next.js",level:95,experience:"Core Stack",highlight:"Component hierarchy, hooks, state management, SPA/SSR architecture"},{name:"JavaScript & TypeScript",level:94,experience:"Core Language",highlight:"ES6+, Async/Await, Closures, DOM manipulation, Typed codebases"},{name:"Node.js & Express",level:90,experience:"Backend Engine",highlight:"RESTful API design, middleware pipelines, JWT auth, routing"},{name:"MongoDB & SQL",level:88,experience:"Data Tier",highlight:"Mongoose schema modeling, aggregations, indexing, relational design"},{name:"Tailwind CSS & UI Craft",level:96,experience:"Frontend Styling",highlight:"Responsive layouts, micro-interactions, dark mode aesthetics"},{name:"HTML5 & Web Standards",level:98,experience:"Core Foundation",highlight:"Semantic markup, accessibility, SEO, fast load times"}]},{id:"ai-systems",name:"AI & Intelligent Tech",skills:[{name:"AI / LLM Integrations",level:88,experience:"Applied AI",highlight:"OpenAI/Anthropic/Gemini APIs, function calling, prompt pipelines"},{name:"Python for AI/ML",level:82,experience:"ML Tooling",highlight:"Data preprocessing, scripting, model inference, embeddings"},{name:"Intelligent Data Flows",level:86,experience:"Architecture",highlight:"Augmenting web apps with smart contextual assistants and automation"},{name:"Vector & Search",level:80,experience:"RAG / Context",highlight:"Similarity search, vector embeddings, context window management"}]},{id:"dsa-architecture",name:"DSA & Problem Solving",skills:[{name:"Data Structures & Algorithms",level:88,experience:"Problem Solving",highlight:"Arrays, Trees, Graphs, Dynamic Programming, Complexity optimization"},{name:"System Design & REST APIs",level:86,experience:"Architecture",highlight:"Modular decoupled backends, clean error handling, data consistency"},{name:"Hackathon Rapid Delivery",level:98,experience:"Smart India Hackathon",highlight:"36-hour end-to-end prototyping, high-pressure execution"},{name:"Git & Version Control",level:92,experience:"DevOps / Flow",highlight:"Branching workflows, PR reviews, CI/CD integrations"}]}]};function wb({onShowToast:t,accentColor:e}){const[n,i]=_e.useState("glow"),[r,s]=_e.useState("rounded-xl"),[a,o]=_e.useState("md"),[l,c]=_e.useState(!1),[h,f]=_e.useState("frontend"),[p,g]=_e.useState(Eo.categories[0].skills[0]),[_,S]=_e.useState("mumbai"),m=[{id:"mumbai",name:"Mumbai (BOM)",ping:"4.2ms",status:"Optimal",x:"68%",y:"52%",traffic:"340k req/s"},{id:"frankfurt",name:"Frankfurt (FRA)",ping:"21.8ms",status:"Active",x:"49%",y:"34%",traffic:"520k req/s"},{id:"tokyo",name:"Tokyo (NRT)",ping:"18.4ms",status:"Active",x:"84%",y:"38%",traffic:"410k req/s"},{id:"sf",name:"San Francisco (SFO)",ping:"14.1ms",status:"Optimal",x:"20%",y:"36%",traffic:"680k req/s"},{id:"singapore",name:"Singapore (SIN)",ping:"11.5ms",status:"Optimal",x:"74%",y:"60%",traffic:"290k req/s"}],d=()=>{let w="inline-flex items-center gap-2 font-medium transition-all ";return a==="sm"&&(w+="px-3 py-1.5 text-xs "),a==="md"&&(w+="px-5 py-2.5 text-sm "),a==="lg"&&(w+="px-6 py-3.5 text-base "),w+=`${r} `,n==="glow"&&(w+="bg-cyan-400 text-black shadow-glow-cyan hover:scale-[1.02]"),n==="glass"&&(w+="bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/15"),n==="neon"&&(w+="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 shadow-[0_0_15px_rgba(0,240,255,0.4)]"),`<Button
  variant="${n}"
  radius="${r.replace("rounded-","")}"
  className="${w.trim()}"
>
  <span>Deploy to Edge</span>
  <Zap className="w-4 h-4" />
</Button>`},v=()=>{navigator.clipboard.writeText(d()),Me.playSuccess(),c(!0),t("Component JSX copied to clipboard!"),setTimeout(()=>c(!1),2e3)},x=Eo.categories.find(w=>w.id===h)||Eo.categories[0],y=m.find(w=>w.id===_)||m[0];return u.jsxs("section",{id:"lab",className:"py-20 px-4 lg:px-8 max-w-7xl mx-auto space-y-12",children:[u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan",children:[u.jsx(cl,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Interactive Engineering Sandbox"})]}),u.jsx("h2",{className:"text-3xl sm:text-4xl font-display font-bold text-white tracking-tight",children:"The Craft Lab & Telemetry Matrix"}),u.jsx("p",{className:"text-slate-400 max-w-2xl text-sm sm:text-base",children:"Test live design system primitives, inspect distributed infrastructure telemetry, and explore deep stack proficiencies in real time."})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[u.jsxs("div",{className:"lg:col-span-7 rounded-3xl bg-obsidian-900/80 border border-white/10 p-6 sm:p-8 flex flex-col justify-between space-y-6 backdrop-blur-xl relative overflow-hidden group shadow-2xl",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("div",{className:"p-2 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan",children:u.jsx(cx,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-display font-semibold text-white text-base",children:"Synthetix Component Sandbox"}),u.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Real-time reactive props & JSX output"})]})]}),u.jsxs("button",{onClick:v,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 transition-all",children:[l?u.jsx(ol,{className:"w-3.5 h-3.5 text-emerald-400"}):u.jsx(Qd,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:l?"Copied":"Copy JSX"})]})]}),u.jsxs("div",{className:"relative h-44 rounded-2xl bg-obsidian-950/80 border border-white/5 flex items-center justify-center p-6 overflow-hidden grid-lines",children:[u.jsx("div",{className:"absolute top-2 left-3 text-[10px] font-mono text-slate-500",children:"LIVE RENDER VIEWPORT"}),u.jsxs("button",{onClick:()=>{Me.playPop(),t("Simulated microsecond deployment triggered!")},className:`inline-flex items-center gap-2 font-medium transition-all transform active:scale-95 ${a==="sm"?"px-3 py-1.5 text-xs":a==="md"?"px-5 py-2.5 text-sm":"px-7 py-3.5 text-base"} ${r} ${n==="glow"?"bg-brand-cyan text-obsidian-950 font-bold shadow-glow-cyan hover:brightness-110":n==="glass"?"bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/15 shadow-inner":"border border-brand-cyan text-brand-cyan hover:bg-brand-cyan/10 shadow-[0_0_20px_rgba(0,240,255,0.3)]"}`,children:[u.jsx("span",{children:"Deploy to Edge"}),u.jsx(ey,{className:"w-4 h-4"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-white/10 text-xs",children:[u.jsxs("div",{className:"space-y-1.5",children:[u.jsx("label",{className:"text-slate-400 font-mono text-[11px]",children:"Variant"}),u.jsx("div",{className:"flex gap-1.5 p-1 rounded-lg bg-obsidian-950 border border-white/5",children:["glow","glass","neon"].map(w=>u.jsx("button",{onClick:()=>{i(w),Me.playClick()},className:`flex-1 py-1 rounded text-center capitalize font-mono text-[11px] transition-all ${n===w?"bg-white/15 text-white shadow-sm":"text-slate-500 hover:text-slate-300"}`,children:w},w))})]}),u.jsxs("div",{className:"space-y-1.5",children:[u.jsx("label",{className:"text-slate-400 font-mono text-[11px]",children:"Border Radius"}),u.jsx("div",{className:"flex gap-1.5 p-1 rounded-lg bg-obsidian-950 border border-white/5",children:[{label:"Sharp",val:"rounded-none"},{label:"Curved",val:"rounded-xl"},{label:"Pill",val:"rounded-full"}].map(w=>u.jsx("button",{onClick:()=>{s(w.val),Me.playClick()},className:`flex-1 py-1 rounded text-center font-mono text-[11px] transition-all ${r===w.val?"bg-white/15 text-white shadow-sm":"text-slate-500 hover:text-slate-300"}`,children:w.label},w.val))})]}),u.jsxs("div",{className:"space-y-1.5",children:[u.jsx("label",{className:"text-slate-400 font-mono text-[11px]",children:"Scale"}),u.jsx("div",{className:"flex gap-1.5 p-1 rounded-lg bg-obsidian-950 border border-white/5",children:["sm","md","lg"].map(w=>u.jsx("button",{onClick:()=>{o(w),Me.playClick()},className:`flex-1 py-1 rounded text-center uppercase font-mono text-[11px] transition-all ${a===w?"bg-white/15 text-white shadow-sm":"text-slate-500 hover:text-slate-300"}`,children:w},w))})]})]})]}),u.jsxs("div",{className:"lg:col-span-5 rounded-3xl bg-obsidian-900/80 border border-white/10 p-6 sm:p-8 flex flex-col justify-between space-y-6 backdrop-blur-xl shadow-2xl",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("div",{className:"p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400",children:u.jsx(Y_,{className:"w-4 h-4 animate-pulse"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-display font-semibold text-white text-base",children:"Studio Live Stream"}),u.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Current telemetry & active focus"})]})]}),u.jsxs("span",{className:"flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"}),"ONLINE"]})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"p-3.5 rounded-2xl bg-obsidian-950 border border-white/5 space-y-1",children:[u.jsxs("div",{className:"text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5",children:[u.jsx(ul,{className:"w-3 h-3 text-brand-cyan"}),"Active Engineering Focus"]}),u.jsx("p",{className:"text-xs font-mono text-slate-200",children:"Building Zero-Copy WebAssembly SIMD pipeline for edge KV consensus."})]}),u.jsxs("div",{className:"p-3.5 rounded-2xl bg-obsidian-950 border border-white/5 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-9 h-9 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400",children:u.jsx($_,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("div",{className:"text-[10px] font-mono text-slate-400",children:"SPOTIFY SIMULATOR"}),u.jsx("div",{className:"text-xs font-semibold text-white",children:"Max Richter — Path 5 (delta)"})]})]}),u.jsxs("div",{className:"flex items-end gap-1 h-5",children:[u.jsx("span",{className:"w-1 bg-brand-cyan rounded-full animate-[pulse_1s_ease-in-out_infinite] h-3"}),u.jsx("span",{className:"w-1 bg-brand-cyan rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-5"}),u.jsx("span",{className:"w-1 bg-brand-cyan rounded-full animate-[pulse_1.2s_ease-in-out_infinite] h-2"}),u.jsx("span",{className:"w-1 bg-brand-cyan rounded-full animate-[pulse_0.9s_ease-in-out_infinite] h-4"})]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3 text-xs font-mono",children:[u.jsxs("div",{className:"p-3 rounded-xl bg-obsidian-950/60 border border-white/5 space-y-1",children:[u.jsx("span",{className:"text-[10px] text-slate-400",children:"V8 HEAP LOAD"}),u.jsx("div",{className:"text-slate-200 font-bold",children:"28.4 MB / 1.4 GB"})]}),u.jsxs("div",{className:"p-3 rounded-xl bg-obsidian-950/60 border border-white/5 space-y-1",children:[u.jsx("span",{className:"text-[10px] text-slate-400",children:"LOCAL CLOCK"}),u.jsx("div",{className:"text-slate-200 font-bold",children:"GMT+5:30 (Bangalore)"})]})]})]}),u.jsxs("div",{className:"text-[11px] font-mono text-slate-400 border-t border-white/10 pt-3 flex items-center justify-between",children:[u.jsx("span",{children:"Terminal Shell: zsh / tmux"}),u.jsx("span",{className:"text-emerald-400",children:"All Nodes Green"})]})]}),u.jsxs("div",{id:"radar",className:"lg:col-span-7 rounded-3xl bg-obsidian-900/80 border border-white/10 p-6 sm:p-8 flex flex-col justify-between space-y-6 backdrop-blur-xl shadow-2xl",children:[u.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("div",{className:"p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400",children:u.jsx(dx,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-display font-semibold text-white text-base",children:"Full-Stack Tech Radar"}),u.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Verified proficiencies & architecture standards"})]})]}),u.jsx("div",{className:"flex p-1 rounded-xl bg-obsidian-950 border border-white/5",children:Eo.categories.map(w=>u.jsx("button",{onClick:()=>{f(w.id),g(w.skills[0]),Me.playClick()},className:`px-3 py-1 rounded-lg text-xs font-mono transition-all ${h===w.id?"bg-white/15 text-white shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:w.name.split(" ")[0]},w.id))})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:x.skills.map(w=>{const A=p.name===w.name;return u.jsxs("div",{onClick:()=>{g(w),Me.playClick()},className:`p-3 rounded-2xl border cursor-pointer transition-all ${A?"bg-white/10 border-brand-cyan/50 shadow-glow-sm":"bg-obsidian-950/60 border-white/5 hover:border-white/15 hover:bg-obsidian-950"}`,children:[u.jsxs("div",{className:"flex items-center justify-between text-xs mb-1.5",children:[u.jsx("span",{className:"font-medium text-slate-200",children:w.name}),u.jsx("span",{className:"text-[10px] font-mono text-slate-400",children:w.experience})]}),u.jsx("div",{className:"w-full h-1.5 bg-white/5 rounded-full overflow-hidden",children:u.jsx("div",{className:"h-full bg-gradient-to-r from-brand-cyan to-indigo-500 rounded-full transition-all duration-500",style:{width:`${w.level}%`}})}),u.jsx("p",{className:"text-[10px] font-mono text-slate-400 mt-2 truncate",children:w.highlight})]},w.name)})}),u.jsxs("div",{className:"p-3.5 rounded-2xl bg-obsidian-950 border border-white/10 flex items-center justify-between text-xs font-mono",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-brand-cyan",children:"Selected:"}),u.jsx("strong",{className:"text-white font-semibold",children:p.name}),u.jsx("span",{className:"text-slate-500",children:"—"}),u.jsx("span",{className:"text-slate-300",children:p.highlight})]}),u.jsxs("span",{className:"text-emerald-400 font-bold shrink-0",children:[p.level,"%"]})]})]}),u.jsxs("div",{className:"lg:col-span-5 rounded-3xl bg-obsidian-900/80 border border-white/10 p-6 sm:p-8 flex flex-col justify-between space-y-6 backdrop-blur-xl shadow-2xl",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("div",{className:"p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-brand-cyan",children:u.jsx(hx,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-display font-semibold text-white text-base",children:"Global Edge Anycast"}),u.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Interactive distributed node telemetry"})]})]}),u.jsx("span",{className:"text-[11px] font-mono text-slate-400",children:"48 PoPs"})]}),u.jsxs("div",{className:"relative h-44 rounded-2xl bg-obsidian-950 border border-white/5 overflow-hidden flex items-center justify-center",children:[u.jsx("div",{className:"absolute inset-0 grid-lines opacity-40"}),m.map(w=>u.jsxs("button",{onClick:()=>{S(w.id),Me.playPop()},style:{top:w.y,left:w.x},className:"absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none",children:[u.jsxs("span",{className:"relative flex h-3.5 w-3.5 items-center justify-center",children:[u.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${_===w.id?"bg-brand-cyan":"bg-white/40"}`}),u.jsx("span",{className:`relative inline-flex rounded-full h-2 w-2 ${_===w.id?"bg-brand-cyan":"bg-slate-400"}`})]}),u.jsx("span",{className:"hidden group-hover:block absolute top-4 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-obsidian-900 border border-white/10 text-[9px] font-mono text-slate-200 whitespace-nowrap z-20 shadow-lg",children:w.name})]},w.id)),u.jsx("div",{className:"absolute bottom-2 left-3 text-[10px] font-mono text-slate-500",children:"Click any node pin to inspect metrics"})]}),u.jsxs("div",{className:"p-3.5 rounded-2xl bg-obsidian-950 border border-white/10 space-y-2 text-xs font-mono",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("span",{className:"text-white font-semibold flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),y.name]}),u.jsxs("span",{className:"text-brand-cyan font-bold",children:[y.ping," RTT"]})]}),u.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-white/5",children:[u.jsxs("span",{children:["Traffic Ingress: ",y.traffic]}),u.jsx("span",{className:"text-emerald-400",children:y.status})]})]})]})]})]})}const nd=[{id:"krypton-kv",title:"Krypton Edge KV",tagline:"Sub-5ms global distributed key-value storage engine",category:"Distributed Systems",status:"Production",featured:!0,year:"2026",stars:"2.4k",metrics:[{label:"p99 Read Latency",value:"3.8ms",change:"-42%"},{label:"Peak QPS",value:"1.2M req/s",change:"+180%"},{label:"Global Edge Nodes",value:"48 PoPs",change:"Multi-region"},{label:"Zero-Downtime Replication",value:"99.999%",change:"Raft Consensus"}],tech:["Rust","Wasm","Cloudflare Workers","Raft","TypeScript","gRPC"],description:"Architected a globally distributed, low-latency key-value engine with automatic peer-to-peer partition tolerance and CRDT conflict resolution. Built for edge-native microservices requiring instantaneous consensus.",architecture:{diagram:[{stage:"Edge Ingress",desc:"Anycast routing with geo-affinity handshake"},{stage:"Consensus Tier",desc:"Multi-Raft state machine with zero-copy serialization"},{stage:"Storage Engine",desc:"LSM-Tree with memory-mapped bloom filters"},{stage:"Sync Layer",desc:"Delta-state CRDTs over multiplexed QUIC streams"}],highlights:["Eliminated cold start latency using V8 isolates and custom WASM runtime bindings.","Implemented custom SIMD-accelerated checksum verification for sub-millisecond block integrity.","Engineered automatic failover routing across 48 worldwide edge points-of-presence."]},liveUrl:"https://krypton-kv.dev",githubUrl:"https://github.com/sumit/krypton-kv",accent:"from-cyan-500/20 to-blue-500/10"},{id:"aura-canvas",title:"Aura Spatial Canvas",tagline:"60 FPS WebGL infinite collaboration whiteboard engine",category:"WebGL & 3D",status:"Production",featured:!0,year:"2025",stars:"4.1k",metrics:[{label:"Rendering Performance",value:"60 FPS",change:"100k+ elements"},{label:"WebSocket Sync Latency",value:"12ms",change:"Multiplayer"},{label:"Memory Footprint",value:"34 MB",change:"-65% vs DOM"},{label:"Spatial Tree Queries",value:"< 0.4ms",change:"Quadtree R-Tree"}],tech:["TypeScript","WebGL","Three.js","WebSockets","Web Workers","Tailwind CSS"],description:"Engineered a high-performance spatial infinite whiteboard that bypasses the DOM entirely, rendering complex vectors, infinite zoom planes, and multi-cursor real-time physics on a custom WebGL pipeline.",architecture:{diagram:[{stage:"Client Viewport",desc:"Orthographic spatial camera with quadtree culling"},{stage:"Render Pipeline",desc:"Instanced mesh batching with custom fragment shaders"},{stage:"Worker Thread",desc:"Off-thread bezier curve tessellation and hit-testing"},{stage:"Sync Protocol",desc:"Binary messagepack diffs over persistent WebSockets"}],highlights:["GPU-instanced vector rendering handling over 100,000 interactive nodes at smooth 60fps.","Spatial quadtree indexing allowing instant viewport bounding-box queries under 0.5ms.","Conflict-free multiplayer cursor interpolation with predictive physics smoothing."]},liveUrl:"https://aura-canvas.io",githubUrl:"https://github.com/sumit/aura-canvas",accent:"from-purple-500/20 to-indigo-500/10"},{id:"apex-telemetry",title:"Apex Micro-Telemetry",tagline:"High-cardinality observability & anomaly detection dashboard",category:"Design Engineering",status:"Production",featured:!0,year:"2025",stars:"1.8k",metrics:[{label:"Log Ingestion Rate",value:"500k/sec",change:"Real-time"},{label:"Query Execution",value:"18ms",change:"ClickHouse"},{label:"Interface Responsiveness",value:"100/100",change:"Lighthouse"},{label:"Anomaly Detection",value:"99.4%",change:"Adaptive Threshold"}],tech:["React","ClickHouse","Go","Tailwind CSS","D3.js","Web Audio API"],description:"A dark-mode first, keyboard-navigable time-series monitoring UI engineered for DevOps teams. Features smooth interactive brush charts, real-time alert heatmaps, and zero-latency filtering across billions of log lines.",architecture:{diagram:[{stage:"Ingestion Buffer",desc:"High-throughput Kafka streaming pipeline"},{stage:"Columnar Storage",desc:"ClickHouse partitions with materialized aggregations"},{stage:"Frontend Cache",desc:"Virtualized windowing with Web Worker downsampling"},{stage:"UI Render Layer",desc:"Canvas-accelerated time series charts with tactile audio alerts"}],highlights:["Dynamic canvas-based time-series chart rendering 1,000,000 data points with smooth pinch-to-zoom.","Comprehensive keyboard shortcut system (Cmd+K, J/K jump navigation, / query focus).","Integrated Web Audio synth triggers for audible threshold breach warnings."]},liveUrl:"https://apex-metrics.dev",githubUrl:"https://github.com/sumit/apex-telemetry",accent:"from-emerald-500/20 to-teal-500/10"},{id:"synthetix-ui",title:"Synthetix Design System",tagline:"Accessible, headless craft UI library with dynamic physics",category:"Design Engineering",status:"Open Source",featured:!1,year:"2024",stars:"3.5k",metrics:[{label:"Components",value:"42 Primitives",change:"WCAG AAA"},{label:"Bundle Size",value:"< 4.2 kB",change:"Tree-shakable"},{label:"Weekly Downloads",value:"85k+",change:"NPM registry"},{label:"Test Coverage",value:"99.2%",change:"Unit & Visual"}],tech:["TypeScript","Radix UI","CSS Modules","Framer Motion","Storybook"],description:"An opinionated design system crafted for developer tools and high-velocity SaaS products. Features sub-pixel borders, spring-physics motion curves, sound feedback integrations, and full keyboard accessibility.",architecture:{diagram:[{stage:"Token Engine",desc:"Three-tier semantic token architecture with CSS variables"},{stage:"Component Core",desc:"Headless primitives with ARIA 1.2 compliance"},{stage:"Motion Driver",desc:"Spring-physics layout animations with reduced-motion support"},{stage:"Telemetry Hooks",desc:"Interaction analytics and micro-sound synthesis triggers"}],highlights:["Zero-runtime CSS variables with automated contrast ratio verification.","Built-in tactile micro-interaction sounds via lightweight audio hooks.","Sub-pixel glassmorphism components with graceful fallback for low-power hardware."]},liveUrl:"https://synthetix-ui.org",githubUrl:"https://github.com/sumit/synthetix-ui",accent:"from-amber-500/20 to-orange-500/10"}];function bb({onSelectProject:t}){const[e,n]=_e.useState("All"),i=["All","Distributed Systems","WebGL & 3D","Design Engineering"],r=e==="All"?nd:nd.filter(a=>a.category===e),s=(a,o)=>{const l=document.getElementById(`proj-card-${o}`);if(!l)return;const c=l.getBoundingClientRect(),h=a.clientX-c.left,f=a.clientY-c.top;l.style.setProperty("--mouse-x",`${h}px`),l.style.setProperty("--mouse-y",`${f}px`)};return u.jsxs("section",{id:"works",className:"py-20 px-4 lg:px-8 max-w-7xl mx-auto space-y-12",children:[u.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6",children:[u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan",children:[u.jsx(Il,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Selected Production Systems"})]}),u.jsx("h2",{className:"text-3xl sm:text-4xl font-display font-bold text-white tracking-tight",children:"Flagship Engineering Works"}),u.jsx("p",{className:"text-slate-400 max-w-xl text-sm sm:text-base",children:"Engineered from ground zero for maximum throughput, sub-millisecond responsiveness, and architectural clarity."})]}),u.jsx("div",{className:"flex flex-wrap gap-1.5 p-1 rounded-2xl bg-obsidian-900 border border-white/10",children:i.map(a=>u.jsx("button",{onClick:()=>{n(a),Me.playClick()},className:`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${e===a?"bg-white/15 text-white shadow-sm font-semibold":"text-slate-400 hover:text-slate-200"}`,children:a},a))})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:r.map(a=>u.jsxs("div",{id:`proj-card-${a.id}`,onMouseMove:o=>s(o,a.id),onClick:()=>{Me.playClick(),t(a)},className:"spotlight-card rounded-3xl bg-obsidian-900/80 border border-white/10 p-6 sm:p-8 flex flex-col justify-between space-y-6 backdrop-blur-xl hover:border-white/20 transition-all duration-300 cursor-pointer group shadow-2xl hover:scale-[1.01]",children:[u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-slate-400",children:[u.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-brand-cyan",children:a.category}),u.jsx("span",{children:a.year})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("span",{className:"flex items-center gap-1 text-[11px] font-mono text-amber-300 px-2 py-0.5 rounded-md bg-amber-500/10",children:[u.jsx(Z_,{className:"w-3 h-3 fill-amber-300"}),a.stars]}),u.jsx("span",{className:"text-[11px] font-mono text-emerald-400 px-2 py-0.5 rounded-md bg-emerald-500/10",children:a.status})]})]}),u.jsxs("h3",{className:"text-2xl font-display font-bold text-white group-hover:text-brand-cyan transition-colors flex items-center justify-between",children:[u.jsx("span",{children:a.title}),u.jsx(Zd,{className:"w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"})]}),u.jsx("p",{className:"text-sm text-slate-300 line-clamp-2",children:a.tagline})]}),u.jsx("div",{className:"grid grid-cols-2 gap-3 p-4 rounded-2xl bg-obsidian-950/80 border border-white/5",children:a.metrics.slice(0,2).map((o,l)=>u.jsxs("div",{className:"space-y-0.5",children:[u.jsx("div",{className:"text-[10px] font-mono text-slate-400 uppercase tracking-wider",children:o.label}),u.jsxs("div",{className:"text-base font-display font-bold text-white flex items-center gap-1.5",children:[u.jsx("span",{children:o.value}),u.jsx("span",{className:"text-[10px] font-mono font-normal text-emerald-400",children:o.change})]})]},l))}),u.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono",children:[u.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[a.tech.slice(0,3).map(o=>u.jsx("span",{className:"px-2 py-0.5 rounded bg-white/5 text-slate-400 text-[11px]",children:o},o)),a.tech.length>3&&u.jsxs("span",{className:"px-1.5 py-0.5 rounded bg-white/5 text-slate-500 text-[11px]",children:["+",a.tech.length-3]})]}),u.jsxs("span",{className:"flex items-center gap-1 text-slate-400 group-hover:text-white transition-colors",children:[u.jsx(z_,{className:"w-3.5 h-3.5 text-brand-cyan"}),u.jsx("span",{children:"Deep Dive"})]})]})]},a.id))})]})}function Tb({project:t,onClose:e,onShowToast:n}){const[i,r]=_e.useState("overview");if(!t)return null;const s=[{id:"overview",label:"Overview & Problem",icon:Il},{id:"architecture",label:"System Architecture",icon:dx},{id:"metrics",label:"Benchmark Telemetry",icon:Q_}];return u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200",onClick:e,children:u.jsxs("div",{className:"w-full max-w-3xl bg-obsidian-900 border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-slate-200 animate-in zoom-in-95 duration-200",onClick:a=>a.stopPropagation(),children:[u.jsxs("div",{className:"p-6 sm:p-8 border-b border-white/10 bg-obsidian-850/60 relative",children:[u.jsx("button",{onClick:()=>{Me.playClick(),e()},className:"absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all",children:u.jsx(tf,{className:"w-4 h-4"})}),u.jsxs("div",{className:"space-y-2 pr-12",children:[u.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-brand-cyan",children:[u.jsx("span",{children:t.category}),u.jsx("span",{children:"•"}),u.jsx("span",{className:"text-emerald-400 font-bold",children:t.status}),u.jsx("span",{children:"•"}),u.jsx("span",{className:"text-slate-500",children:t.year})]}),u.jsx("h3",{className:"text-2xl sm:text-3xl font-display font-bold text-white tracking-tight",children:t.title}),u.jsx("p",{className:"text-sm text-slate-300 font-normal",children:t.tagline})]}),u.jsx("div",{className:"flex gap-2 mt-6 p-1 rounded-xl bg-obsidian-950 border border-white/10",children:s.map(a=>{const o=a.icon,l=i===a.id;return u.jsxs("button",{onClick:()=>{r(a.id),Me.playClick()},className:`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-mono transition-all ${l?"bg-white/15 text-white shadow-sm border border-white/10":"text-slate-400 hover:text-slate-200"}`,children:[u.jsx(o,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:a.label})]},a.id)})})]}),u.jsxs("div",{className:"p-6 sm:p-8 overflow-y-auto space-y-6",children:[i==="overview"&&u.jsxs("div",{className:"space-y-6 animate-in fade-in duration-150",children:[u.jsxs("div",{className:"space-y-3",children:[u.jsx("h4",{className:"text-xs font-mono text-slate-400 uppercase tracking-wider",children:"The Architectural Challenge"}),u.jsx("p",{className:"text-sm text-slate-300 leading-relaxed font-sans",children:t.description})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("h4",{className:"text-xs font-mono text-slate-400 uppercase tracking-wider",children:"Engineering Feats"}),u.jsx("div",{className:"space-y-2.5",children:t.architecture.highlights.map((a,o)=>u.jsxs("div",{className:"flex items-start gap-3 p-3 rounded-xl bg-obsidian-950/80 border border-white/5 text-xs text-slate-300",children:[u.jsx(ia,{className:"w-4 h-4 text-brand-cyan shrink-0 mt-0.5"}),u.jsx("span",{children:a})]},o))})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsx("h4",{className:"text-xs font-mono text-slate-400 uppercase tracking-wider",children:"Tech Ecosystem"}),u.jsx("div",{className:"flex flex-wrap gap-2",children:t.tech.map(a=>u.jsx("span",{className:"px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200",children:a},a))})]})]}),i==="architecture"&&u.jsxs("div",{className:"space-y-6 animate-in fade-in duration-150",children:[u.jsxs("div",{className:"space-y-2",children:[u.jsx("h4",{className:"text-xs font-mono text-slate-400 uppercase tracking-wider",children:"Distributed Data Flow Pipeline"}),u.jsx("p",{className:"text-xs text-slate-400",children:"Sequential event lifecycle from client ingress to edge consensus."})]}),u.jsx("div",{className:"space-y-3",children:t.architecture.diagram.map((a,o)=>u.jsxs("div",{className:"p-4 rounded-2xl bg-obsidian-950 border border-white/10 flex items-start gap-4 relative overflow-hidden",children:[u.jsxs("div",{className:"w-7 h-7 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-xs font-mono text-brand-cyan font-bold shrink-0",children:["0",o+1]}),u.jsxs("div",{className:"space-y-1",children:[u.jsxs("div",{className:"text-xs font-mono text-white font-semibold flex items-center gap-2",children:[a.stage,o<t.architecture.diagram.length-1&&u.jsx(U_,{className:"w-3 h-3 text-slate-500"})]}),u.jsx("p",{className:"text-xs text-slate-300",children:a.desc})]})]},o))})]}),i==="metrics"&&u.jsxs("div",{className:"space-y-6 animate-in fade-in duration-150",children:[u.jsxs("div",{className:"space-y-2",children:[u.jsx("h4",{className:"text-xs font-mono text-slate-400 uppercase tracking-wider",children:"Verified Production Metrics"}),u.jsx("p",{className:"text-xs text-slate-400",children:"Real-world load testing telemetry and SLA verifications."})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:t.metrics.map((a,o)=>u.jsxs("div",{className:"p-4 rounded-2xl bg-obsidian-950 border border-white/10 space-y-1",children:[u.jsx("span",{className:"text-[11px] font-mono text-slate-400 uppercase tracking-wider",children:a.label}),u.jsx("div",{className:"text-2xl font-display font-bold text-white flex items-center gap-2",children:u.jsx("span",{children:a.value})}),u.jsxs("div",{className:"text-xs font-mono text-emerald-400 flex items-center gap-1",children:[u.jsx("span",{children:"Verified:"}),u.jsx("strong",{children:a.change})]})]},o))})]})]}),u.jsxs("div",{className:"p-6 border-t border-white/10 bg-obsidian-950 flex flex-wrap items-center justify-between gap-4",children:[u.jsxs("div",{className:"flex items-center gap-3 font-mono text-xs text-slate-400",children:[u.jsx(fx,{className:"w-4 h-4 text-brand-cyan"}),u.jsx("span",{children:"Clean Architecture • Fully Documented"})]}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("button",{onClick:()=>{Me.playSuccess(),navigator.clipboard.writeText(t.githubUrl),n("Repository link copied!")},className:"flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 transition-all",children:[u.jsx(ll,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Copy Repo"})]}),u.jsxs("a",{href:t.liveUrl,target:"_blank",rel:"noreferrer",onClick:()=>Me.playPop(),className:"flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-obsidian-950 font-semibold text-xs tracking-wide hover:bg-slate-200 transition-all",children:[u.jsx("span",{children:"Live Instance"}),u.jsx(Gu,{className:"w-3.5 h-3.5"})]})]})]})]})})}function Ab({onShowToast:t}){const[e,n]=_e.useState("mvp"),[i,r]=_e.useState("4-sprints"),[s,a]=_e.useState(["vitals","audio"]),o=[{id:"mern",name:"Full-Stack MERN Web App",desc:"Complete full-cycle web application with React, Node.js, Express, MongoDB, and modern auth.",baseSprints:3,deliverables:["React/Next.js Frontend","Node/Express REST API","MongoDB Data Tier","Responsive UI & Auth"]},{id:"ai-app",name:"AI-Powered Intelligent Platform",desc:"Smart web platform with AI/LLM integrations, data pipelines, and contextual user assistants.",baseSprints:3,deliverables:["AI/LLM Integration","Streaming UI Responses","Full-Stack Backend","Prompt Engineering"]},{id:"hackathon-mvp",name:"Rapid MVP / Hackathon-Velocity",desc:"High-speed 0-to-1 prototype built with relentless focus on what actually works.",baseSprints:1,deliverables:["Working Interactive MVP","Core User Flow","Live Cloud Deployment","Pitch Deck & Demo"]},{id:"react-ui",name:"Modern React Frontend & API Architecture",desc:"Clean modular UI, state management, fast REST integrations, and crisp user micro-interactions.",baseSprints:2,deliverables:["React Components & Hooks","Tailwind CSS Layouts","REST API Integration","Mobile Optimization"]}],l=[{id:"vitals",name:"100/100 Core Web Vitals Guarantee",desc:"Sub-50ms FID & Zero Layout Shift"},{id:"audio",name:"Procedural Web Audio Micro-Synth",desc:"Self-contained tactile UI sounds"},{id:"offline",name:"Offline-First CRDT Sync",desc:"Local IndexedDB + conflict-free sync"},{id:"sec",name:"Pen-Test & Zero-Trust Auth",desc:"OWASP Top 10 compliance & encryption"}],c=_=>{Me.playClick(),s.includes(_)?a(s.filter(S=>S!==_)):a([...s,_])},h=o.find(_=>_.id===e)||o[0];let f=h.baseSprints*2;i==="express"&&(f=Math.max(2,Math.round(f*.7))),s.length>2&&(f+=1);const p=()=>{const _=encodeURIComponent(`Project Inquiry: ${h.name}`),S=encodeURIComponent(`Hi Sumit,

I'm interested in collaborating on a project:

• Project Type: ${h.name}
• Estimated Duration: ~${f} Weeks (${i})
• Selected Add-ons: ${s.map(m=>{var d;return(d=l.find(v=>v.id===m))==null?void 0:d.name}).join(", ")}

Let's schedule a call to discuss the engineering architecture and timeline.

Best regards,`);return`mailto:amitk839170@gmail.com?subject=${_}&body=${S}`},g=()=>{const _=`Project Scope Estimate:
Type: ${h.name}
Estimated Duration: ~${f} Weeks
Deliverables:
- ${h.deliverables.join(`
- `)}
Add-ons: ${s.map(S=>{var m;return(m=l.find(d=>d.id===S))==null?void 0:m.name}).join(", ")}`;navigator.clipboard.writeText(_),Me.playSuccess(),t("Project scope summary copied!")};return u.jsxs("section",{id:"estimator",className:"py-20 px-4 lg:px-8 max-w-7xl mx-auto space-y-12",children:[u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan",children:[u.jsx(gx,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Scope & Timeline Calculator"})]}),u.jsx("h2",{className:"text-3xl sm:text-4xl font-display font-bold text-white tracking-tight",children:"Estimate Your Project Architecture"}),u.jsx("p",{className:"text-slate-400 max-w-2xl text-sm sm:text-base",children:"Configure scope deliverables, choose engineering priorities, and generate an actionable sprint blueprint instantly."})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[u.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[u.jsxs("div",{className:"space-y-3",children:[u.jsxs("label",{className:"text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2",children:[u.jsx("span",{children:"01."})," Select Architecture Focus"]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:o.map(_=>{const S=e===_.id;return u.jsxs("div",{onClick:()=>{n(_.id),Me.playClick()},className:`p-4 rounded-2xl border cursor-pointer transition-all ${S?"bg-white/10 border-brand-cyan/60 shadow-glow-sm":"bg-obsidian-900/80 border-white/10 hover:border-white/20"}`,children:[u.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[u.jsx("h4",{className:"font-display font-semibold text-white text-sm",children:_.name}),S&&u.jsx(ol,{className:"w-4 h-4 text-brand-cyan"})]}),u.jsx("p",{className:"text-xs text-slate-400",children:_.desc})]},_.id)})})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("label",{className:"text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2",children:[u.jsx("span",{children:"02."})," Delivery Pace"]}),u.jsx("div",{className:"grid grid-cols-3 gap-3",children:[{id:"express",label:"High Velocity",desc:"Accelerated 2x"},{id:"standard",label:"Standard Pace",desc:"Bi-weekly sprints"},{id:"lead",label:"Advisory / Lead",desc:"Architecture review"}].map(_=>u.jsxs("button",{onClick:()=>{r(_.id),Me.playClick()},className:`p-3 rounded-2xl border text-left font-mono transition-all ${i===_.id?"bg-white/10 border-brand-cyan/60 text-white shadow-sm":"bg-obsidian-900/60 border-white/10 text-slate-400 hover:text-slate-200"}`,children:[u.jsx("div",{className:"text-xs font-semibold",children:_.label}),u.jsx("div",{className:"text-[10px] text-slate-500",children:_.desc})]},_.id))})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("label",{className:"text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2",children:[u.jsx("span",{children:"03."})," Performance & Accessibility Add-ons"]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:l.map(_=>{const S=s.includes(_.id);return u.jsxs("div",{onClick:()=>c(_.id),className:`p-3 rounded-xl border cursor-pointer flex items-center justify-between gap-3 transition-all ${S?"bg-white/10 border-white/30 text-white":"bg-obsidian-900/40 border-white/5 text-slate-400 hover:text-slate-300"}`,children:[u.jsxs("div",{className:"space-y-0.5 min-w-0",children:[u.jsx("div",{className:"text-xs font-mono text-slate-200 font-medium truncate",children:_.name}),u.jsx("div",{className:"text-[10px] text-slate-500 truncate",children:_.desc})]}),u.jsx("div",{className:`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${S?"bg-brand-cyan border-brand-cyan text-obsidian-950":"border-white/20"}`,children:S&&u.jsx(ol,{className:"w-3 h-3 stroke-[3]"})})]},_.id)})})]})]}),u.jsxs("div",{className:"lg:col-span-5 rounded-3xl bg-obsidian-900/90 border border-white/15 p-6 sm:p-8 space-y-6 backdrop-blur-2xl shadow-2xl relative sticky top-24",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4",children:[u.jsxs("div",{className:"space-y-0.5",children:[u.jsx("span",{className:"text-[10px] font-mono text-brand-cyan uppercase tracking-wider",children:"ESTIMATED ARCHITECTURE"}),u.jsx("h3",{className:"text-xl font-display font-bold text-white",children:h.name})]}),u.jsxs("div",{className:"text-right",children:[u.jsxs("span",{className:"text-2xl font-display font-extrabold text-white",children:["~",f]}),u.jsx("span",{className:"text-xs font-mono text-slate-400 ml-1",children:"Weeks"})]})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5",children:[u.jsx(cl,{className:"w-3.5 h-3.5 text-brand-cyan"}),"Core Deliverables"]}),u.jsx("div",{className:"space-y-2",children:h.deliverables.map((_,S)=>u.jsxs("div",{className:"flex items-center gap-2.5 text-xs text-slate-300 font-sans",children:[u.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-brand-cyan"}),u.jsx("span",{children:_})]},S))})]}),s.length>0&&u.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[u.jsx("div",{className:"text-[11px] font-mono text-slate-400",children:"Included Modules:"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:s.map(_=>{const S=l.find(m=>m.id===_);return u.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300",children:S==null?void 0:S.name.split(" ")[0]},_)})})]}),u.jsxs("div",{className:"pt-4 space-y-2.5",children:[u.jsxs("a",{href:p(),onClick:()=>Me.playPop(),className:"w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-obsidian-950 font-semibold text-xs tracking-wide hover:bg-slate-200 transition-all shadow-glow-sm",children:[u.jsx(ef,{className:"w-4 h-4"}),u.jsx("span",{children:"Draft Scope Inquiry Email"})]}),u.jsxs("button",{onClick:g,className:"w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-obsidian-950 hover:bg-obsidian-850 border border-white/10 text-xs font-mono text-slate-300 transition-all",children:[u.jsx(Qd,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Copy Scope Summary"})]})]}),u.jsx("div",{className:"text-[11px] font-mono text-slate-500 text-center",children:"Zero commitment • Direct reply within 24 hours"})]})]})]})}const Cb=[{version:"v4.2.0",date:"Current Focus",tag:"AI & ML",title:"Exploring Full-Stack + AI/ML Intersections",description:"Architecting intelligent full-stack applications with dynamic AI integrations, vector embeddings, and real-time streaming interfaces.",hash:"ai-flow"},{version:"v3.8.0",date:"Hackathon",tag:"Hack-2-Win @ CGC",title:"Hack-2-Win 24-Hour Hackathon at CGC",description:"Delivered rapid 0-to-1 prototype within 24 intense hours at Chandigarh Group of Colleges (CGC), turning ideas into deployed software.",hash:"cgc-24h"},{version:"v3.2.0",date:"National Stage",tag:"Smart India Hackathon",title:"Smart India Hackathon Solution Delivery",description:"Built and pitched end-to-end working software under 36-hour high-pressure sprint. Proved that a good idea means very little until it becomes a working product.",hash:"sih-36h"},{version:"v2.5.0",date:"Full-Stack Core",tag:"MERN Stack",title:"End-to-End MERN Applications & APIs",description:"Built modular React applications with Node.js/Express backends, MongoDB schemas, JWT authentication, and responsive Tailwind interfaces.",hash:"mern-core"},{version:"v1.8.0",date:"Continuous Growth",tag:"DSA & Rigor",title:"DSA & Algorithmic Problem Solving",description:"Continuously mastering fundamental computer science concepts, algorithmic complexity, data structures, and clean coding paradigms.",hash:"dsa-rigor"}],Rb=[{id:1,name:"Hackathon Mentor & Evaluator",role:"SIH Jury Member",company:"Smart India Hackathon",avatar:"JM",text:"Sumit demonstrated exceptional ability to take a complex problem statement and turn it into a working, deployed product within an intense 36-hour sprint. Outstanding execution velocity.",accent:"border-amber-500/40"},{id:2,name:"Collaborator & Team Lead",role:"Senior Developer",company:"Engineering Peer",avatar:"SL",text:"Sumit's curiosity and drive to understand what happens beyond the frontend makes him a formidable full-stack builder. He cares deeply about data flow and user experience.",accent:"border-cyan-500/40"},{id:3,name:"Project Collaborator",role:"Product Teammate",company:"Hackathon Cohort",avatar:"PT",text:"Working with Sumit is a breeze because he focuses on what actually works. He doesn't just write code — he builds things that solve real user problems with zero fluff.",accent:"border-emerald-500/40"}];function Nb(){return u.jsxs("section",{id:"changelog",className:"py-20 px-4 lg:px-8 max-w-7xl mx-auto space-y-12",children:[u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan",children:[u.jsx(ul,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Engineering Milestones & Releases"})]}),u.jsx("h2",{className:"text-3xl sm:text-4xl font-display font-bold text-white tracking-tight",children:"Career Git Log & Releases"}),u.jsx("p",{className:"text-slate-400 max-w-xl text-sm sm:text-base",children:"A continuous timeline of architectural deployments, open-source primitives, and performance breakthroughs."})]}),u.jsx("div",{className:"relative pl-6 sm:pl-8 border-l border-white/10 space-y-8",children:Cb.map((t,e)=>u.jsxs("div",{className:"relative group",children:[u.jsx("div",{className:"absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-obsidian-950 border border-white/20 text-brand-cyan shadow-md group-hover:border-brand-cyan transition-colors",children:u.jsx(Jd,{className:"w-3.5 h-3.5"})}),u.jsxs("div",{className:"p-6 rounded-2xl bg-obsidian-900/60 border border-white/10 hover:border-white/20 transition-all space-y-3 backdrop-blur-md",children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("span",{className:"text-xs font-mono font-bold text-white px-2 py-0.5 rounded bg-white/10",children:t.version}),u.jsx("span",{className:"text-xs font-mono text-brand-cyan px-2 py-0.5 rounded bg-brand-cyan/10",children:t.tag})]}),u.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono text-slate-500",children:[u.jsxs("span",{children:["commit ",u.jsx("code",{className:"text-slate-400",children:t.hash})]}),u.jsx("span",{children:"•"}),u.jsx("span",{children:t.date})]})]}),u.jsx("h3",{className:"text-lg font-display font-bold text-white",children:t.title}),u.jsx("p",{className:"text-sm text-slate-300 font-sans leading-relaxed",children:t.description})]})]},e))})]})}const Pb="github_activity_cache_v2_",Lb=3*60*1e3;async function Db(t="sumitkumar112006"){if(!t)return{events:[],repos:[]};const e=`${Pb}${t.toLowerCase()}`;try{const n=localStorage.getItem(e);if(n){const{timestamp:i,data:r}=JSON.parse(n);if(Date.now()-i<Lb&&r&&r.events)return{source:"cache",...r,username:t}}}catch{}try{const n=fetch(`https://api.github.com/users/${encodeURIComponent(t)}/events?per_page=30`,{headers:{Accept:"application/vnd.github.v3+json"}}),i=fetch(`https://api.github.com/users/${encodeURIComponent(t)}/repos?sort=pushed&per_page=10`,{headers:{Accept:"application/vnd.github.v3+json"}}),[r,s]=await Promise.all([n,i]);if(!r.ok)throw r.status===404?new Error(`GitHub user "${t}" not found.`):r.status===403?new Error("GitHub API rate limit reached. Please wait a moment."):new Error(`GitHub API returned status ${r.status}`);const a=await r.json(),o=s.ok?await s.json():[],l=[];a.forEach(f=>{var m,d,v,x,y,w,A,b,N,V,M,C;const p=((m=f.repo)==null?void 0:m.name)||"unknown/repo",g=p.split("/")[1]||p,_=new Date(f.created_at),S=Kp(_);if(f.type==="PushEvent"){const $=(d=f.payload)!=null&&d.ref?f.payload.ref.replace("refs/heads/",""):"main",Z=((v=f.payload)==null?void 0:v.head)||f.id,P=Z?Z.substring(0,7):"head";(x=f.payload)!=null&&x.commits&&f.payload.commits.length>0?f.payload.commits.forEach(q=>{l.push({id:`${f.id}-${q.sha}`,type:"push",badge:"Push",badgeColor:"emerald",message:q.message.split(`
`)[0]||`Pushed to ${$}`,sha:q.sha?q.sha.substring(0,7):P,repoFullName:p,repoName:g,repoUrl:`https://github.com/${p}`,url:`https://github.com/${p}/commit/${q.sha||Z}`,branch:$,date:_,relativeTime:S})}):l.push({id:f.id,type:"push",badge:"Push",badgeColor:"emerald",message:`Pushed code changes to branch ${$}`,sha:P,repoFullName:p,repoName:g,repoUrl:`https://github.com/${p}`,url:`https://github.com/${p}/commit/${Z}`,branch:$,date:_,relativeTime:S})}else if(f.type==="PullRequestEvent"){const $=(y=f.payload)==null?void 0:y.pull_request,Z=((w=f.payload)==null?void 0:w.action)||"opened";l.push({id:f.id,type:"pr",badge:`PR ${Z}`,badgeColor:"purple",message:$!=null&&$.title?`${$.title} (#${$.number})`:`${Z.toUpperCase()} pull request #${((A=f.payload)==null?void 0:A.number)||""}`,sha:(b=$==null?void 0:$.head)!=null&&b.sha?$.head.sha.substring(0,7):"PR",repoFullName:p,repoName:g,repoUrl:`https://github.com/${p}`,url:($==null?void 0:$.html_url)||`https://github.com/${p}/pulls`,branch:((N=$==null?void 0:$.head)==null?void 0:N.ref)||"main",date:_,relativeTime:S})}else if(f.type==="CreateEvent"){const $=((V=f.payload)==null?void 0:V.ref_type)||"repository";l.push({id:f.id,type:"create",badge:`Created ${$}`,badgeColor:"cyan",message:`Created ${$} ${(M=f.payload)!=null&&M.ref?`"${f.payload.ref}"`:`in ${g}`}`,sha:"init",repoFullName:p,repoName:g,repoUrl:`https://github.com/${p}`,url:`https://github.com/${p}`,branch:((C=f.payload)==null?void 0:C.ref)||"main",date:_,relativeTime:S})}else f.type==="WatchEvent"&&l.push({id:f.id,type:"star",badge:"Starred",badgeColor:"amber",message:`Starred repository ${p}`,sha:"★",repoFullName:p,repoName:g,repoUrl:`https://github.com/${p}`,url:`https://github.com/${p}`,branch:"repo",date:_,relativeTime:S})});const c=Array.isArray(o)?o.map(f=>({id:f.id,name:f.name,fullName:f.full_name,description:f.description||"Full-stack application repository",url:f.html_url,language:f.language||"JavaScript",stars:f.stargazers_count||0,forks:f.forks_count||0,updatedAt:Kp(new Date(f.pushed_at||f.updated_at)),isFork:f.fork})):[],h={events:l.slice(0,20),repos:c};try{localStorage.setItem(e,JSON.stringify({timestamp:Date.now(),data:h}))}catch{}return{source:"api",...h,username:t}}catch(n){throw console.error("Error in fetchGitHubActivity:",n),n}}function Kp(t){const e=Math.floor((Date.now()-t.getTime())/1e3);if(e<60)return"just now";const n=Math.floor(e/60);if(n<60)return`${n}m ago`;const i=Math.floor(n/60);if(i<24)return`${i}h ago`;const r=Math.floor(i/24);return r<30?`${r}d ago`:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})}function Ib({initialUsername:t="sumitkumar112006",onShowToast:e}){const[n,i]=_e.useState(t),[r,s]=_e.useState(t),[a,o]=_e.useState("events"),[l,c]=_e.useState([]),[h,f]=_e.useState([]),[p,g]=_e.useState(!0),[_,S]=_e.useState(null),[m,d]=_e.useState(""),v=async y=>{var w,A;g(!0),S(null);try{const b=await Db(y);c(b.events||[]),f(b.repos||[]),d(b.source),(((w=b.events)==null?void 0:w.length)||0)===0&&(((A=b.repos)==null?void 0:A.length)||0)===0&&S(`No recent public activity found for @${y}.`)}catch(b){S(b.message||"Failed to connect to GitHub API."),c([]),f([])}finally{g(!1)}};_e.useEffect(()=>{v(n)},[n]);const x=()=>{Me.playSwitch();try{localStorage.removeItem(`github_activity_cache_v2_${n.toLowerCase()}`)}catch{}v(n),e&&e("Refreshed live GitHub stream!")};return u.jsxs("section",{id:"github-activity",className:"py-20 px-4 lg:px-8 max-w-7xl mx-auto space-y-8",children:[u.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6",children:[u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"}),u.jsxs("span",{children:["Verified GitHub Ingress • @",n]})]}),u.jsxs("h2",{className:"text-3xl sm:text-4xl font-display font-bold text-white tracking-tight flex items-center gap-3",children:[u.jsx(ll,{className:"w-8 h-8 text-white"}),u.jsx("span",{children:"Actual GitHub Commits & Repositories"})]}),u.jsx("p",{className:"text-slate-400 max-w-xl text-sm sm:text-base",children:"Live stream of your real code pushes, pull requests, and public repositories directly from GitHub's REST API."})]}),u.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[u.jsxs("div",{className:"flex p-1 rounded-xl bg-obsidian-900 border border-white/10 text-xs font-mono",children:[u.jsxs("button",{onClick:()=>{o("events"),Me.playClick()},className:`px-3 py-1.5 rounded-lg transition-all ${a==="events"?"bg-white/15 text-white font-bold":"text-slate-400 hover:text-white"}`,children:["Activity Stream (",l.length,")"]}),u.jsxs("button",{onClick:()=>{o("repos"),Me.playClick()},className:`px-3 py-1.5 rounded-lg transition-all ${a==="repos"?"bg-white/15 text-white font-bold":"text-slate-400 hover:text-white"}`,children:["Repositories (",h.length,")"]})]}),u.jsx("button",{onClick:x,title:"Force refresh GitHub data",className:"p-2 rounded-xl bg-obsidian-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all",children:u.jsx(bh,{className:`w-4 h-4 ${p?"animate-spin text-brand-cyan":""}`})})]})]}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono",children:[u.jsxs("div",{className:"p-3.5 rounded-2xl bg-obsidian-900/60 border border-white/5 space-y-1",children:[u.jsx("span",{className:"text-[10px] text-slate-500 uppercase tracking-wider",children:"TARGET USER"}),u.jsxs("div",{className:"text-white font-bold flex items-center gap-1.5",children:[u.jsx(ll,{className:"w-3.5 h-3.5 text-brand-cyan"}),u.jsxs("a",{href:`https://github.com/${n}`,target:"_blank",rel:"noreferrer",className:"hover:underline hover:text-brand-cyan",children:["@",n]})]})]}),u.jsxs("div",{className:"p-3.5 rounded-2xl bg-obsidian-900/60 border border-white/5 space-y-1",children:[u.jsx("span",{className:"text-[10px] text-slate-500 uppercase tracking-wider",children:"LATEST ACTIVITY"}),u.jsxs("div",{className:"text-emerald-400 font-bold",children:[l.length," Live Events"]})]}),u.jsxs("div",{className:"p-3.5 rounded-2xl bg-obsidian-900/60 border border-white/5 space-y-1",children:[u.jsx("span",{className:"text-[10px] text-slate-500 uppercase tracking-wider",children:"PUBLIC REPOSITORIES"}),u.jsxs("div",{className:"text-indigo-400 font-bold",children:[h.length," Repositories"]})]}),u.jsxs("div",{className:"p-3.5 rounded-2xl bg-obsidian-900/60 border border-white/5 space-y-1",children:[u.jsx("span",{className:"text-[10px] text-slate-500 uppercase tracking-wider",children:"API STREAM"}),u.jsxs("div",{className:"text-brand-cyan font-bold flex items-center gap-1.5",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),u.jsxs("span",{children:["200 OK ",m?`(${m})`:""]})]})]})]}),u.jsxs("div",{className:"rounded-3xl bg-obsidian-900/80 border border-white/10 p-6 backdrop-blur-xl shadow-2xl",children:[p&&u.jsxs("div",{className:"py-16 text-center space-y-3",children:[u.jsx(bh,{className:"w-6 h-6 text-brand-cyan animate-spin mx-auto"}),u.jsxs("p",{className:"text-xs font-mono text-slate-400",children:["Connecting to GitHub API for @",n,"..."]})]}),!p&&_&&u.jsxs("div",{className:"p-6 rounded-2xl bg-obsidian-950 border border-rose-500/20 text-center space-y-2",children:[u.jsx(D_,{className:"w-6 h-6 text-rose-400 mx-auto"}),u.jsx("p",{className:"text-sm font-mono text-rose-300",children:_})]}),!p&&!_&&a==="events"&&u.jsx("div",{className:"divide-y divide-white/5",children:l.length===0?u.jsx("div",{className:"py-12 text-center text-slate-500 font-mono text-xs",children:"No recent activity events found on GitHub."}):l.map((y,w)=>u.jsxs("div",{className:"py-4 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-center justify-between gap-3 group hover:bg-white/[0.02] -mx-4 px-4 rounded-xl transition-all",children:[u.jsxs("div",{className:"flex items-start gap-3 min-w-0",children:[u.jsx("div",{className:"p-2 rounded-lg bg-white/5 border border-white/10 text-brand-cyan shrink-0 mt-0.5 group-hover:border-brand-cyan/40 transition-colors",children:y.type==="pr"?u.jsx(H_,{className:"w-4 h-4 text-purple-400"}):u.jsx(Jd,{className:"w-4 h-4 text-emerald-400"})}),u.jsxs("div",{className:"space-y-1 min-w-0",children:[u.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[u.jsx("span",{className:`text-[10px] font-mono px-2 py-0.5 rounded uppercase font-bold ${y.badgeColor==="purple"?"bg-purple-500/10 text-purple-300 border border-purple-500/20":y.badgeColor==="amber"?"bg-amber-500/10 text-amber-300 border border-amber-500/20":y.badgeColor==="cyan"?"bg-cyan-500/10 text-cyan-300 border border-cyan-500/20":"bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"}`,children:y.badge}),u.jsxs("a",{href:y.repoUrl,target:"_blank",rel:"noreferrer",onClick:()=>Me.playClick(),className:"inline-flex items-center gap-1 text-xs font-mono font-semibold text-white hover:text-brand-cyan transition-colors",children:[u.jsx(wh,{className:"w-3.5 h-3.5 text-slate-400"}),u.jsx("span",{children:y.repoName})]}),u.jsxs("span",{className:"inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-400",children:[u.jsx(fx,{className:"w-2.5 h-2.5"}),u.jsx("span",{children:y.branch})]}),u.jsxs("span",{className:"text-[11px] font-mono text-slate-500 flex items-center gap-1",children:[u.jsx(F_,{className:"w-3 h-3"}),u.jsx("span",{children:y.relativeTime})]})]}),u.jsx("p",{className:"text-sm font-sans text-slate-300 group-hover:text-white transition-colors truncate",children:y.message})]})]}),u.jsx("div",{className:"flex items-center gap-2 shrink-0 self-end md:self-center",children:u.jsxs("a",{href:y.url,target:"_blank",rel:"noreferrer",onClick:()=>Me.playPop(),className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-950 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all group-hover:border-brand-cyan/30",children:[u.jsx("code",{className:"text-brand-cyan",children:y.sha}),u.jsx(Gu,{className:"w-3 h-3 text-slate-500 group-hover:text-slate-300"})]})})]},`${y.id}-${w}`))}),!p&&!_&&a==="repos"&&u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:h.map(y=>u.jsxs("a",{href:y.url,target:"_blank",rel:"noreferrer",onClick:()=>Me.playPop(),className:"p-4 rounded-2xl bg-obsidian-950/80 border border-white/10 hover:border-brand-cyan/40 p-4 transition-all group space-y-3",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-2 text-sm font-mono font-bold text-white group-hover:text-brand-cyan transition-colors",children:[u.jsx(wh,{className:"w-4 h-4 text-slate-400 group-hover:text-brand-cyan"}),u.jsx("span",{children:y.name})]}),u.jsx(Gu,{className:"w-3.5 h-3.5 text-slate-500 group-hover:text-white"})]}),u.jsx("p",{className:"text-xs text-slate-400 line-clamp-2",children:y.description}),u.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-white/5 text-[11px] font-mono text-slate-500",children:[u.jsxs("span",{className:"flex items-center gap-1.5 text-slate-300",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-cyan"}),y.language]}),u.jsxs("span",{children:["Updated ",y.updatedAt]})]})]},y.id))})]})]})}function Ub(){return u.jsxs("section",{className:"py-20 px-4 lg:px-8 max-w-7xl mx-auto space-y-12",children:[u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan",children:[u.jsx(X_,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Peer & Leadership Endorsements"})]}),u.jsx("h2",{className:"text-3xl sm:text-4xl font-display font-bold text-white tracking-tight",children:"What Engineering Leaders Say"})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:Rb.map(t=>u.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-obsidian-900/70 border border-white/10 flex flex-col justify-between space-y-6 backdrop-blur-xl hover:border-white/20 transition-all shadow-xl",children:[u.jsxs("div",{className:"space-y-4",children:[u.jsx(q_,{className:"w-6 h-6 text-slate-600"}),u.jsxs("p",{className:"text-sm text-slate-300 font-sans leading-relaxed italic",children:['"',t.text,'"']})]}),u.jsxs("div",{className:"flex items-center gap-3 pt-4 border-t border-white/10",children:[u.jsx("div",{className:"w-10 h-10 rounded-full bg-obsidian-950 border border-white/15 flex items-center justify-center font-mono font-bold text-xs text-brand-cyan shrink-0",children:t.avatar}),u.jsxs("div",{className:"min-w-0",children:[u.jsxs("div",{className:"text-sm font-semibold text-white flex items-center gap-1.5 truncate",children:[u.jsx("span",{children:t.name}),u.jsx(K_,{className:"w-3.5 h-3.5 text-emerald-400 shrink-0"})]}),u.jsxs("div",{className:"text-xs text-slate-400 truncate",children:[t.role," • ",u.jsx("span",{className:"text-slate-300",children:t.company})]})]})]})]},t.id))})]})}function kb({onShowToast:t,onOpenCommandPalette:e}){const[n,i]=_e.useState(!1),r="amitk839170@gmail.com",s="https://github.com/sumitkumar112006",a="https://www.linkedin.com/in/sumit-kumar-48998b345/",o=()=>{navigator.clipboard.writeText(r),Me.playSuccess(),i(!0),t("Copied email to clipboard!"),setTimeout(()=>i(!1),2500)};return u.jsxs("footer",{id:"contact",className:"pt-20 pb-12 px-4 lg:px-8 max-w-7xl mx-auto space-y-16",children:[u.jsxs("div",{className:"rounded-3xl bg-gradient-to-b from-obsidian-900 to-obsidian-950 border border-white/15 p-8 sm:p-12 relative overflow-hidden shadow-2xl backdrop-blur-2xl",children:[u.jsx("div",{className:"absolute top-0 right-0 p-32 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"}),u.jsxs("div",{className:"max-w-3xl space-y-6 relative z-10",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"}),u.jsx("span",{children:"Initiate Direct Connection"})]}),u.jsx("h2",{className:"text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight",children:"Ready to build high-scale, AI & full-stack software together?"}),u.jsx("p",{className:"text-slate-300 text-sm sm:text-base font-normal max-w-xl",children:"Currently open for Full-Stack, AI integration, and Software Engineering roles, freelance builds, and collaborative projects."}),u.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4",children:[u.jsxs("div",{className:"flex items-center justify-between px-4 py-3 rounded-2xl bg-obsidian-950 border border-white/15 text-xs sm:text-sm font-mono text-slate-200",children:[u.jsx("span",{className:"truncate mr-3",children:r}),u.jsx("button",{onClick:o,className:"p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors",title:"Copy to clipboard",children:n?u.jsx(ol,{className:"w-4 h-4 text-emerald-400"}):u.jsx(Qd,{className:"w-4 h-4"})})]}),u.jsxs("a",{href:`mailto:${r}?subject=Collaboration%20Inquiry%20with%20Sumit`,onClick:()=>Me.playPop(),className:"flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white text-obsidian-950 font-semibold text-xs tracking-wide hover:bg-slate-200 transition-all shadow-glow-sm",children:[u.jsx("span",{children:"Send Direct Email"}),u.jsx(Zd,{className:"w-4 h-4"})]})]})]})]}),u.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10 text-xs font-mono text-slate-500",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{children:"© 2026 Sumit"}),u.jsx("span",{children:"•"}),u.jsx("span",{children:"Full-Stack & AI Developer"})]}),u.jsxs("div",{className:"flex items-center gap-4 text-slate-400",children:[u.jsxs("a",{href:s,target:"_blank",rel:"noreferrer",onClick:()=>Me.playClick(),className:"hover:text-white transition-colors p-1 flex items-center gap-1.5 text-xs font-mono",title:"GitHub Profile",children:[u.jsx(ll,{className:"w-4 h-4"}),u.jsx("span",{children:"sumitkumar112006"})]}),u.jsxs("a",{href:a,target:"_blank",rel:"noreferrer",onClick:()=>Me.playClick(),className:"hover:text-white transition-colors p-1 flex items-center gap-1.5 text-xs font-mono",title:"LinkedIn Profile",children:[u.jsx(V_,{className:"w-4 h-4"}),u.jsx("span",{children:"LinkedIn"})]}),u.jsxs("a",{href:`mailto:${r}`,onClick:()=>Me.playClick(),className:"hover:text-white transition-colors p-1 flex items-center gap-1.5 text-xs font-mono",title:"Email",children:[u.jsx(ef,{className:"w-4 h-4"}),u.jsx("span",{children:"Email"})]}),u.jsx("button",{onClick:()=>{Me.playClick(),e()},className:"px-2 py-0.5 rounded bg-white/5 border border-white/10 hover:border-white/20 text-slate-300 text-[10px]",children:"⌘K Menu"})]})]})]})}function Fb({isOpen:t,onClose:e,onSelectProject:n,projects:i,soundEnabled:r,onToggleSound:s,accentColor:a,onSelectAccent:o,onShowToast:l}){const[c,h]=_e.useState(""),[f,p]=_e.useState(0),g=_e.useRef(null),_=[{name:"Cyan Glow",hex:"#00F0FF"},{name:"Electric Violet",hex:"#8B5CF6"},{name:"Emerald Edge",hex:"#10B981"},{name:"Solar Amber",hex:"#F59E0B"}],S=[{id:"sec-about",title:"About Sumit & Engineering Philosophy",category:"Navigation",icon:cl,action:()=>{var y;(y=document.getElementById("about"))==null||y.scrollIntoView({behavior:"smooth"}),e()}},{id:"sec-works",title:"Navigate to Selected Works",category:"Navigation",icon:Il,action:()=>{var y;(y=document.getElementById("works"))==null||y.scrollIntoView({behavior:"smooth"}),e()}},{id:"sec-lab",title:"Navigate to Interactive Bento Lab",category:"Navigation",icon:cl,action:()=>{var y;(y=document.getElementById("lab"))==null||y.scrollIntoView({behavior:"smooth"}),e()}},{id:"sec-estimator",title:"Open Project Scope & Timeline Calculator",category:"Navigation",icon:gx,action:()=>{var y;(y=document.getElementById("estimator"))==null||y.scrollIntoView({behavior:"smooth"}),e()}},{id:"sec-github",title:"View Live GitHub Commits Stream",category:"Navigation",icon:ul,action:()=>{var y;(y=document.getElementById("github-activity"))==null||y.scrollIntoView({behavior:"smooth"}),e()}},{id:"sec-changelog",title:"View Engineering Changelog",category:"Navigation",icon:ul,action:()=>{var y;(y=document.getElementById("changelog"))==null||y.scrollIntoView({behavior:"smooth"}),e()}},{id:"act-copy-email",title:"Copy Direct Email Address",category:"Actions",icon:ef,shortcut:"amitk839170@gmail.com",action:()=>{navigator.clipboard.writeText("amitk839170@gmail.com"),Me.playSuccess(),l("Copied amitk839170@gmail.com to clipboard!"),e()}},{id:"act-toggle-audio",title:r?"Mute Interface Sound FX":"Enable Tactile Sound FX",category:"Preferences",icon:r?vx:xx,action:()=>{s(),Me.playSwitch(),e()}}],m=i.map(y=>({id:`proj-${y.id}`,title:`Case Study: ${y.title}`,subtitle:y.tagline,category:"Case Studies",icon:cx,action:()=>{n(y),e()}})),v=[...S,...m].filter(y=>(y.title+" "+(y.subtitle||"")+" "+y.category).toLowerCase().includes(c.toLowerCase()));_e.useEffect(()=>{t&&(h(""),p(0),Me.playModalOpen(),setTimeout(()=>{var y;return(y=g.current)==null?void 0:y.focus()},50))},[t]),_e.useEffect(()=>{p(0)},[c]);const x=y=>{y.key==="ArrowDown"?(y.preventDefault(),Me.playClick(),p(w=>(w+1)%Math.max(1,v.length))):y.key==="ArrowUp"?(y.preventDefault(),Me.playClick(),p(w=>(w-1+v.length)%Math.max(1,v.length))):y.key==="Enter"?(y.preventDefault(),v[f]&&(Me.playClick(),v[f].action())):y.key==="Escape"&&e()};return t?u.jsx("div",{className:"fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200",onClick:e,children:u.jsxs("div",{className:"w-full max-w-2xl bg-obsidian-900 border border-white/15 rounded-2xl shadow-2xl overflow-hidden text-slate-200 transition-all transform scale-100",onClick:y=>y.stopPropagation(),onKeyDown:x,children:[u.jsxs("div",{className:"flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-obsidian-850/50",children:[u.jsx(mx,{className:"w-5 h-5 text-slate-400 shrink-0"}),u.jsx("input",{ref:g,type:"text",value:c,onChange:y=>h(y.target.value),placeholder:"Type a command, search case studies, or jump to section...",className:"w-full bg-transparent border-none outline-none text-sm text-slate-100 placeholder:text-slate-500 font-sans"}),c&&u.jsx("button",{onClick:()=>h(""),className:"p-1 text-slate-400 hover:text-white",children:u.jsx(tf,{className:"w-4 h-4"})}),u.jsx("kbd",{className:"hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono bg-white/5 border border-white/10 rounded text-slate-400",children:"ESC to close"})]}),u.jsxs("div",{className:"px-4 py-2 bg-obsidian-950/60 border-b border-white/5 flex items-center justify-between text-xs text-slate-400",children:[u.jsxs("span",{className:"flex items-center gap-1.5 font-mono text-[11px]",children:[u.jsx(px,{className:"w-3.5 h-3.5 text-slate-400"}),"Accent Glow:"]}),u.jsx("div",{className:"flex items-center gap-2",children:_.map(y=>u.jsxs("button",{onClick:()=>{o(y.hex),Me.playPop()},className:`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono transition-colors ${a===y.hex?"bg-white/15 text-white border border-white/20":"text-slate-400 hover:bg-white/5"}`,children:[u.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:y.hex}}),u.jsx("span",{children:y.name.split(" ")[0]})]},y.hex))})]}),u.jsx("div",{className:"max-h-[360px] overflow-y-auto p-2 space-y-1",children:v.length===0?u.jsx("div",{className:"py-12 text-center text-slate-500 text-sm font-mono",children:"No matching commands or case studies found."}):v.map((y,w)=>{const A=y.icon,b=w===f;return u.jsxs("div",{onClick:()=>{Me.playClick(),y.action()},onMouseEnter:()=>p(w),className:`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all ${b?"bg-brand-cyan/10 border border-brand-cyan/30 text-white pl-4":"text-slate-300 hover:bg-white/5 border border-transparent"}`,children:[u.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[u.jsx("div",{className:`p-1.5 rounded-lg ${b?"bg-brand-cyan/20 text-brand-cyan":"bg-white/5 text-slate-400"}`,children:u.jsx(A,{className:"w-4 h-4"})}),u.jsxs("div",{className:"truncate",children:[u.jsx("p",{className:"text-xs font-medium truncate",children:y.title}),y.subtitle&&u.jsx("p",{className:"text-[11px] text-slate-400 truncate",children:y.subtitle})]})]}),u.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[u.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5",children:y.category}),b&&u.jsx("kbd",{className:"text-[10px] font-mono text-brand-cyan",children:"↵"})]})]},y.id)})}),u.jsxs("div",{className:"px-4 py-2.5 bg-obsidian-950 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("span",{children:[u.jsx("kbd",{className:"px-1 py-0.5 bg-white/5 rounded border border-white/10",children:"↑"})," ",u.jsx("kbd",{className:"px-1 py-0.5 bg-white/5 rounded border border-white/10",children:"↓"})," to navigate"]}),u.jsxs("span",{children:[u.jsx("kbd",{className:"px-1 py-0.5 bg-white/5 rounded border border-white/10",children:"↵"})," to select"]})]}),u.jsx("span",{children:"Crafted with Raycast precision"})]})]})}):null}function Ob({message:t,visible:e,type:n="success"}){return e?u.jsx("div",{className:"fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300 pointer-events-none",children:u.jsxs("div",{className:"flex items-center gap-3 px-4 py-3 rounded-xl bg-obsidian-900/95 border border-white/15 text-slate-100 shadow-2xl backdrop-blur-xl",children:[n==="success"?u.jsx(ia,{className:"w-4 h-4 text-emerald-400 shrink-0"}):u.jsx(G_,{className:"w-4 h-4 text-brand-cyan shrink-0"}),u.jsx("span",{className:"text-xs font-mono tracking-tight",children:t})]})}):null}function zb(){const[t,e]=_e.useState(!1),[n,i]=_e.useState(null),[r,s]=_e.useState(!0),[a,o]=_e.useState("#00F0FF"),[l,c]=_e.useState({message:"",visible:!1,type:"success"});_e.useEffect(()=>{document.documentElement.style.setProperty("--accent-color",a);const p=a.replace("#",""),g=parseInt(p.substring(0,2),16),_=parseInt(p.substring(2,4),16),S=parseInt(p.substring(4,6),16);document.documentElement.style.setProperty("--accent-glow",`${g}, ${_}, ${S}`)},[a]),_e.useEffect(()=>{const p=g=>{(g.metaKey||g.ctrlKey)&&g.key.toLowerCase()==="k"?(g.preventDefault(),e(_=>!_)):g.key==="Escape"&&(e(!1),i(null))};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[]);const h=(p,g="success")=>{c({message:p,visible:!0,type:g}),setTimeout(()=>{c(_=>({..._,visible:!1}))},2800)},f=()=>{const p=Me.toggleSound();s(p),h(p?"Tactile sound FX enabled":"Interface audio muted","info")};return u.jsxs("div",{className:"relative min-h-screen bg-obsidian-950 text-slate-100 font-sans selection:bg-brand-cyan/20 selection:text-brand-cyan",children:[u.jsx("div",{className:"fixed inset-0 grid-lines pointer-events-none opacity-60 z-0"}),u.jsx("div",{className:"fixed inset-0 bg-noise pointer-events-none opacity-40 z-0"}),u.jsxs("div",{className:"relative z-10 flex flex-col min-h-screen",children:[u.jsx(ny,{onOpenCommandPalette:()=>e(!0),soundEnabled:r,onToggleSound:f,accentColor:a,onSelectAccent:o,onShowToast:h}),u.jsxs("main",{className:"flex-1 space-y-8",children:[u.jsx(Mb,{onOpenCommandPalette:()=>e(!0),accentColor:a}),u.jsx(Eb,{}),u.jsx(bb,{onSelectProject:p=>{i(p),Me.playModalOpen()}}),u.jsx(wb,{onShowToast:h,accentColor:a}),u.jsx(Ab,{onShowToast:h}),u.jsx(Ib,{onShowToast:h}),u.jsx(Nb,{}),u.jsx(Ub,{})]}),u.jsx(kb,{onShowToast:h,onOpenCommandPalette:()=>e(!0)})]}),u.jsx(Tb,{project:n,onClose:()=>i(null),onShowToast:h}),u.jsx(Fb,{isOpen:t,onClose:()=>e(!1),onSelectProject:p=>{i(p),Me.playModalOpen()},projects:nd,soundEnabled:r,onToggleSound:f,accentColor:a,onSelectAccent:o,onShowToast:h}),u.jsx(Ob,{message:l.message,visible:l.visible,type:l.type})]})}Yc.createRoot(document.getElementById("root")).render(u.jsx(_0.StrictMode,{children:u.jsx(zb,{})}));
