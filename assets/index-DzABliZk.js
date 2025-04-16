(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function eT(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var _p={exports:{}},Bl={},yp={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uv;function MA(){if(Uv)return Ne;Uv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function I(M){return M===null||typeof M!="object"?null:(M=w&&M[w]||M["@@iterator"],typeof M=="function"?M:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,W={};function B(M,H,fe){this.props=M,this.context=H,this.refs=W,this.updater=fe||O}B.prototype.isReactComponent={},B.prototype.setState=function(M,H){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,H,"setState")},B.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function se(){}se.prototype=B.prototype;function ne(M,H,fe){this.props=M,this.context=H,this.refs=W,this.updater=fe||O}var oe=ne.prototype=new se;oe.constructor=ne,U(oe,B.prototype),oe.isPureReactComponent=!0;var me=Array.isArray,ke=Object.prototype.hasOwnProperty,Ce={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function S(M,H,fe){var Ae,Pe={},Ve=null,We=null;if(H!=null)for(Ae in H.ref!==void 0&&(We=H.ref),H.key!==void 0&&(Ve=""+H.key),H)ke.call(H,Ae)&&!N.hasOwnProperty(Ae)&&(Pe[Ae]=H[Ae]);var $e=arguments.length-2;if($e===1)Pe.children=fe;else if(1<$e){for(var Xe=Array($e),Nt=0;Nt<$e;Nt++)Xe[Nt]=arguments[Nt+2];Pe.children=Xe}if(M&&M.defaultProps)for(Ae in $e=M.defaultProps,$e)Pe[Ae]===void 0&&(Pe[Ae]=$e[Ae]);return{$$typeof:n,type:M,key:Ve,ref:We,props:Pe,_owner:Ce.current}}function A(M,H){return{$$typeof:n,type:M.type,key:H,ref:M.ref,props:M.props,_owner:M._owner}}function P(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function x(M){var H={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(fe){return H[fe]})}var D=/\/+/g;function R(M,H){return typeof M=="object"&&M!==null&&M.key!=null?x(""+M.key):H.toString(36)}function ft(M,H,fe,Ae,Pe){var Ve=typeof M;(Ve==="undefined"||Ve==="boolean")&&(M=null);var We=!1;if(M===null)We=!0;else switch(Ve){case"string":case"number":We=!0;break;case"object":switch(M.$$typeof){case n:case e:We=!0}}if(We)return We=M,Pe=Pe(We),M=Ae===""?"."+R(We,0):Ae,me(Pe)?(fe="",M!=null&&(fe=M.replace(D,"$&/")+"/"),ft(Pe,H,fe,"",function(Nt){return Nt})):Pe!=null&&(P(Pe)&&(Pe=A(Pe,fe+(!Pe.key||We&&We.key===Pe.key?"":(""+Pe.key).replace(D,"$&/")+"/")+M)),H.push(Pe)),1;if(We=0,Ae=Ae===""?".":Ae+":",me(M))for(var $e=0;$e<M.length;$e++){Ve=M[$e];var Xe=Ae+R(Ve,$e);We+=ft(Ve,H,fe,Xe,Pe)}else if(Xe=I(M),typeof Xe=="function")for(M=Xe.call(M),$e=0;!(Ve=M.next()).done;)Ve=Ve.value,Xe=Ae+R(Ve,$e++),We+=ft(Ve,H,fe,Xe,Pe);else if(Ve==="object")throw H=String(M),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return We}function qt(M,H,fe){if(M==null)return M;var Ae=[],Pe=0;return ft(M,Ae,"","",function(Ve){return H.call(fe,Ve,Pe++)}),Ae}function Gt(M){if(M._status===-1){var H=M._result;H=H(),H.then(function(fe){(M._status===0||M._status===-1)&&(M._status=1,M._result=fe)},function(fe){(M._status===0||M._status===-1)&&(M._status=2,M._result=fe)}),M._status===-1&&(M._status=0,M._result=H)}if(M._status===1)return M._result.default;throw M._result}var Ke={current:null},Z={transition:null},ge={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Ce};function re(){throw Error("act(...) is not supported in production builds of React.")}return Ne.Children={map:qt,forEach:function(M,H,fe){qt(M,function(){H.apply(this,arguments)},fe)},count:function(M){var H=0;return qt(M,function(){H++}),H},toArray:function(M){return qt(M,function(H){return H})||[]},only:function(M){if(!P(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Ne.Component=B,Ne.Fragment=t,Ne.Profiler=s,Ne.PureComponent=ne,Ne.StrictMode=r,Ne.Suspense=f,Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,Ne.act=re,Ne.cloneElement=function(M,H,fe){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var Ae=U({},M.props),Pe=M.key,Ve=M.ref,We=M._owner;if(H!=null){if(H.ref!==void 0&&(Ve=H.ref,We=Ce.current),H.key!==void 0&&(Pe=""+H.key),M.type&&M.type.defaultProps)var $e=M.type.defaultProps;for(Xe in H)ke.call(H,Xe)&&!N.hasOwnProperty(Xe)&&(Ae[Xe]=H[Xe]===void 0&&$e!==void 0?$e[Xe]:H[Xe])}var Xe=arguments.length-2;if(Xe===1)Ae.children=fe;else if(1<Xe){$e=Array(Xe);for(var Nt=0;Nt<Xe;Nt++)$e[Nt]=arguments[Nt+2];Ae.children=$e}return{$$typeof:n,type:M.type,key:Pe,ref:Ve,props:Ae,_owner:We}},Ne.createContext=function(M){return M={$$typeof:u,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:a,_context:M},M.Consumer=M},Ne.createElement=S,Ne.createFactory=function(M){var H=S.bind(null,M);return H.type=M,H},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(M){return{$$typeof:d,render:M}},Ne.isValidElement=P,Ne.lazy=function(M){return{$$typeof:v,_payload:{_status:-1,_result:M},_init:Gt}},Ne.memo=function(M,H){return{$$typeof:g,type:M,compare:H===void 0?null:H}},Ne.startTransition=function(M){var H=Z.transition;Z.transition={};try{M()}finally{Z.transition=H}},Ne.unstable_act=re,Ne.useCallback=function(M,H){return Ke.current.useCallback(M,H)},Ne.useContext=function(M){return Ke.current.useContext(M)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(M){return Ke.current.useDeferredValue(M)},Ne.useEffect=function(M,H){return Ke.current.useEffect(M,H)},Ne.useId=function(){return Ke.current.useId()},Ne.useImperativeHandle=function(M,H,fe){return Ke.current.useImperativeHandle(M,H,fe)},Ne.useInsertionEffect=function(M,H){return Ke.current.useInsertionEffect(M,H)},Ne.useLayoutEffect=function(M,H){return Ke.current.useLayoutEffect(M,H)},Ne.useMemo=function(M,H){return Ke.current.useMemo(M,H)},Ne.useReducer=function(M,H,fe){return Ke.current.useReducer(M,H,fe)},Ne.useRef=function(M){return Ke.current.useRef(M)},Ne.useState=function(M){return Ke.current.useState(M)},Ne.useSyncExternalStore=function(M,H,fe){return Ke.current.useSyncExternalStore(M,H,fe)},Ne.useTransition=function(){return Ke.current.useTransition()},Ne.version="18.3.1",Ne}var jv;function eg(){return jv||(jv=1,yp.exports=MA()),yp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv;function LA(){if(zv)return Bl;zv=1;var n=eg(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,g){var v,w={},I=null,O=null;g!==void 0&&(I=""+g),f.key!==void 0&&(I=""+f.key),f.ref!==void 0&&(O=f.ref);for(v in f)r.call(f,v)&&!a.hasOwnProperty(v)&&(w[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)w[v]===void 0&&(w[v]=f[v]);return{$$typeof:e,type:d,key:I,ref:O,props:w,_owner:s.current}}return Bl.Fragment=t,Bl.jsx=u,Bl.jsxs=u,Bl}var Bv;function VA(){return Bv||(Bv=1,_p.exports=LA()),_p.exports}var Ie=VA(),Pn=eg();const si=eT(Pn);var nh={},vp={exports:{}},_n={},Ep={exports:{}},wp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv;function FA(){return Wv||(Wv=1,function(n){function e(Z,ge){var re=Z.length;Z.push(ge);e:for(;0<re;){var M=re-1>>>1,H=Z[M];if(0<s(H,ge))Z[M]=ge,Z[re]=H,re=M;else break e}}function t(Z){return Z.length===0?null:Z[0]}function r(Z){if(Z.length===0)return null;var ge=Z[0],re=Z.pop();if(re!==ge){Z[0]=re;e:for(var M=0,H=Z.length,fe=H>>>1;M<fe;){var Ae=2*(M+1)-1,Pe=Z[Ae],Ve=Ae+1,We=Z[Ve];if(0>s(Pe,re))Ve<H&&0>s(We,Pe)?(Z[M]=We,Z[Ve]=re,M=Ve):(Z[M]=Pe,Z[Ae]=re,M=Ae);else if(Ve<H&&0>s(We,re))Z[M]=We,Z[Ve]=re,M=Ve;else break e}}return ge}function s(Z,ge){var re=Z.sortIndex-ge.sortIndex;return re!==0?re:Z.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],g=[],v=1,w=null,I=3,O=!1,U=!1,W=!1,B=typeof setTimeout=="function"?setTimeout:null,se=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function oe(Z){for(var ge=t(g);ge!==null;){if(ge.callback===null)r(g);else if(ge.startTime<=Z)r(g),ge.sortIndex=ge.expirationTime,e(f,ge);else break;ge=t(g)}}function me(Z){if(W=!1,oe(Z),!U)if(t(f)!==null)U=!0,Gt(ke);else{var ge=t(g);ge!==null&&Ke(me,ge.startTime-Z)}}function ke(Z,ge){U=!1,W&&(W=!1,se(S),S=-1),O=!0;var re=I;try{for(oe(ge),w=t(f);w!==null&&(!(w.expirationTime>ge)||Z&&!x());){var M=w.callback;if(typeof M=="function"){w.callback=null,I=w.priorityLevel;var H=M(w.expirationTime<=ge);ge=n.unstable_now(),typeof H=="function"?w.callback=H:w===t(f)&&r(f),oe(ge)}else r(f);w=t(f)}if(w!==null)var fe=!0;else{var Ae=t(g);Ae!==null&&Ke(me,Ae.startTime-ge),fe=!1}return fe}finally{w=null,I=re,O=!1}}var Ce=!1,N=null,S=-1,A=5,P=-1;function x(){return!(n.unstable_now()-P<A)}function D(){if(N!==null){var Z=n.unstable_now();P=Z;var ge=!0;try{ge=N(!0,Z)}finally{ge?R():(Ce=!1,N=null)}}else Ce=!1}var R;if(typeof ne=="function")R=function(){ne(D)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,qt=ft.port2;ft.port1.onmessage=D,R=function(){qt.postMessage(null)}}else R=function(){B(D,0)};function Gt(Z){N=Z,Ce||(Ce=!0,R())}function Ke(Z,ge){S=B(function(){Z(n.unstable_now())},ge)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Z){Z.callback=null},n.unstable_continueExecution=function(){U||O||(U=!0,Gt(ke))},n.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<Z?Math.floor(1e3/Z):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(Z){switch(I){case 1:case 2:case 3:var ge=3;break;default:ge=I}var re=I;I=ge;try{return Z()}finally{I=re}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(Z,ge){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var re=I;I=Z;try{return ge()}finally{I=re}},n.unstable_scheduleCallback=function(Z,ge,re){var M=n.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?M+re:M):re=M,Z){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=re+H,Z={id:v++,callback:ge,priorityLevel:Z,startTime:re,expirationTime:H,sortIndex:-1},re>M?(Z.sortIndex=re,e(g,Z),t(f)===null&&Z===t(g)&&(W?(se(S),S=-1):W=!0,Ke(me,re-M))):(Z.sortIndex=H,e(f,Z),U||O||(U=!0,Gt(ke))),Z},n.unstable_shouldYield=x,n.unstable_wrapCallback=function(Z){var ge=I;return function(){var re=I;I=ge;try{return Z.apply(this,arguments)}finally{I=re}}}}(wp)),wp}var $v;function UA(){return $v||($v=1,Ep.exports=FA()),Ep.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv;function jA(){if(Hv)return _n;Hv=1;var n=eg(),e=UA();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},w={};function I(i){return f.call(w,i)?!0:f.call(v,i)?!1:g.test(i)?w[i]=!0:(v[i]=!0,!1)}function O(i,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function U(i,o,l,h){if(o===null||typeof o>"u"||O(i,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function W(i,o,l,h,p,_,E){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=_,this.removeEmptyString=E}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){B[i]=new W(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];B[o]=new W(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){B[i]=new W(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){B[i]=new W(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){B[i]=new W(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){B[i]=new W(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){B[i]=new W(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){B[i]=new W(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){B[i]=new W(i,5,!1,i.toLowerCase(),null,!1,!1)});var se=/[\-:]([a-z])/g;function ne(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(se,ne);B[o]=new W(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(se,ne);B[o]=new W(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(se,ne);B[o]=new W(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){B[i]=new W(i,1,!1,i.toLowerCase(),null,!1,!1)}),B.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){B[i]=new W(i,1,!1,i.toLowerCase(),null,!0,!0)});function oe(i,o,l,h){var p=B.hasOwnProperty(o)?B[o]:null;(p!==null?p.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(U(o,l,p,h)&&(l=null),h||p===null?I(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,o,l):i.setAttribute(o,l))))}var me=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ke=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),x=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),ft=Symbol.for("react.suspense_list"),qt=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),Ke=Symbol.for("react.offscreen"),Z=Symbol.iterator;function ge(i){return i===null||typeof i!="object"?null:(i=Z&&i[Z]||i["@@iterator"],typeof i=="function"?i:null)}var re=Object.assign,M;function H(i){if(M===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);M=o&&o[1]||""}return`
`+M+i}var fe=!1;function Ae(i,o){if(!i||fe)return"";fe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(j){var h=j}Reflect.construct(i,[],o)}else{try{o.call()}catch(j){h=j}i.call(o.prototype)}else{try{throw Error()}catch(j){h=j}i()}}catch(j){if(j&&h&&typeof j.stack=="string"){for(var p=j.stack.split(`
`),_=h.stack.split(`
`),E=p.length-1,C=_.length-1;1<=E&&0<=C&&p[E]!==_[C];)C--;for(;1<=E&&0<=C;E--,C--)if(p[E]!==_[C]){if(E!==1||C!==1)do if(E--,C--,0>C||p[E]!==_[C]){var k=`
`+p[E].replace(" at new "," at ");return i.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",i.displayName)),k}while(1<=E&&0<=C);break}}}finally{fe=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?H(i):""}function Pe(i){switch(i.tag){case 5:return H(i.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return i=Ae(i.type,!1),i;case 11:return i=Ae(i.type.render,!1),i;case 1:return i=Ae(i.type,!0),i;default:return""}}function Ve(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case N:return"Fragment";case Ce:return"Portal";case A:return"Profiler";case S:return"StrictMode";case R:return"Suspense";case ft:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case x:return(i.displayName||"Context")+".Consumer";case P:return(i._context.displayName||"Context")+".Provider";case D:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case qt:return o=i.displayName||null,o!==null?o:Ve(i.type)||"Memo";case Gt:o=i._payload,i=i._init;try{return Ve(i(o))}catch{}}return null}function We(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ve(o);case 8:return o===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function $e(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Xe(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Nt(i){var o=Xe(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(E){h=""+E,_.call(this,E)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(E){h=""+E},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function Vr(i){i._valueTracker||(i._valueTracker=Nt(i))}function go(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return i&&(h=Xe(i)?i.checked?"true":"false":i.value),i=h,i!==l?(o.setValue(i),!0):!1}function vi(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function gs(i,o){var l=o.checked;return re({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function _o(i,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=$e(o.value!=null?o.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function Ka(i,o){o=o.checked,o!=null&&oe(i,"checked",o,!1)}function Qa(i,o){Ka(i,o);var l=$e(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?yo(i,o.type,l):o.hasOwnProperty("defaultValue")&&yo(i,o.type,$e(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function zu(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function yo(i,o,l){(o!=="number"||vi(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Fr=Array.isArray;function Ur(i,o,l,h){if(i=i.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=o.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+$e(l),o=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function Ya(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function vo(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(Fr(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:$e(l)}}function Eo(i,o){var l=$e(o.value),h=$e(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function Xa(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function wt(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tt(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?wt(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var jr,Ja=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(o,l,h,p)})}:i}(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(jr=jr||document.createElement("div"),jr.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=jr.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function Ei(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var _s={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ys=["Webkit","ms","Moz","O"];Object.keys(_s).forEach(function(i){ys.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),_s[o]=_s[i]})});function Za(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||_s.hasOwnProperty(i)&&_s[i]?(""+o).trim():o+"px"}function el(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=Za(l,o[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var tl=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nl(i,o){if(o){if(tl[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function rl(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vs=null;function wo(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var To=null,bn=null,pr=null;function Io(i){if(i=Rl(i)){if(typeof To!="function")throw Error(t(280));var o=i.stateNode;o&&(o=_c(o),To(i.stateNode,i.type,o))}}function mr(i){bn?pr?pr.push(i):pr=[i]:bn=i}function il(){if(bn){var i=bn,o=pr;if(pr=bn=null,Io(i),o)for(i=0;i<o.length;i++)Io(o[i])}}function Es(i,o){return i(o)}function sl(){}var zr=!1;function ol(i,o,l){if(zr)return i(o,l);zr=!0;try{return Es(i,o,l)}finally{zr=!1,(bn!==null||pr!==null)&&(sl(),il())}}function pt(i,o){var l=i.stateNode;if(l===null)return null;var h=_c(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var So=!1;if(d)try{var qn={};Object.defineProperty(qn,"passive",{get:function(){So=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{So=!1}function ws(i,o,l,h,p,_,E,C,k){var j=Array.prototype.slice.call(arguments,3);try{o.apply(l,j)}catch(K){this.onError(K)}}var Ts=!1,Co=null,Gn=!1,al=null,$d={onError:function(i){Ts=!0,Co=i}};function Ao(i,o,l,h,p,_,E,C,k){Ts=!1,Co=null,ws.apply($d,arguments)}function Bu(i,o,l,h,p,_,E,C,k){if(Ao.apply(this,arguments),Ts){if(Ts){var j=Co;Ts=!1,Co=null}else throw Error(t(198));Gn||(Gn=!0,al=j)}}function Kn(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,o.flags&4098&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function Is(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function Qn(i){if(Kn(i)!==i)throw Error(t(188))}function Wu(i){var o=i.alternate;if(!o){if(o=Kn(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,h=o;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return Qn(p),i;if(_===h)return Qn(p),o;_=_.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=_;else{for(var E=!1,C=p.child;C;){if(C===l){E=!0,l=p,h=_;break}if(C===h){E=!0,h=p,l=_;break}C=C.sibling}if(!E){for(C=_.child;C;){if(C===l){E=!0,l=_,h=p;break}if(C===h){E=!0,h=_,l=p;break}C=C.sibling}if(!E)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function ll(i){return i=Wu(i),i!==null?Ro(i):null}function Ro(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=Ro(i);if(o!==null)return o;i=i.sibling}return null}var ko=e.unstable_scheduleCallback,ul=e.unstable_cancelCallback,$u=e.unstable_shouldYield,Hd=e.unstable_requestPaint,Je=e.unstable_now,Hu=e.unstable_getCurrentPriorityLevel,Ss=e.unstable_ImmediatePriority,wi=e.unstable_UserBlockingPriority,On=e.unstable_NormalPriority,cl=e.unstable_LowPriority,qu=e.unstable_IdlePriority,Cs=null,wn=null;function Gu(i){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(Cs,i,void 0,(i.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:Qu,hl=Math.log,Ku=Math.LN2;function Qu(i){return i>>>=0,i===0?32:31-(hl(i)/Ku|0)|0}var Po=64,No=4194304;function Ti(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function As(i,o){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,_=i.pingedLanes,E=l&268435455;if(E!==0){var C=E&~p;C!==0?h=Ti(C):(_&=E,_!==0&&(h=Ti(_)))}else E=l&~p,E!==0?h=Ti(E):_!==0&&(h=Ti(_));if(h===0)return 0;if(o!==0&&o!==h&&!(o&p)&&(p=h&-h,_=o&-o,p>=_||p===16&&(_&4194240)!==0))return o;if(h&4&&(h|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)l=31-on(o),p=1<<l,h|=i[l],o&=~p;return h}function qd(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Br(i,o){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var E=31-on(_),C=1<<E,k=p[E];k===-1?(!(C&l)||C&h)&&(p[E]=qd(C,o)):k<=o&&(i.expiredLanes|=C),_&=~C}}function Tn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Rs(){var i=Po;return Po<<=1,!(Po&4194240)&&(Po=64),i}function Ii(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function Si(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-on(o),i[o]=l}function Ye(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-on(l),_=1<<p;o[p]=0,h[p]=-1,i[p]=-1,l&=~_}}function Ci(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var h=31-on(l),p=1<<h;p&o|i[h]&o&&(i[h]|=o),l&=~p}}var Me=0;function Ai(i){return i&=-i,1<i?4<i?i&268435455?16:536870912:4:1}var Yu,bo,Xu,Ju,Zu,dl=!1,gr=[],Vt=null,Yn=null,Xn=null,Ri=new Map,xn=new Map,_r=[],Gd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ec(i,o){switch(i){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Xn=null;break;case"pointerover":case"pointerout":Ri.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":xn.delete(o.pointerId)}}function cn(i,o,l,h,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:_,targetContainers:[p]},o!==null&&(o=Rl(o),o!==null&&bo(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function Kd(i,o,l,h,p){switch(o){case"focusin":return Vt=cn(Vt,i,o,l,h,p),!0;case"dragenter":return Yn=cn(Yn,i,o,l,h,p),!0;case"mouseover":return Xn=cn(Xn,i,o,l,h,p),!0;case"pointerover":var _=p.pointerId;return Ri.set(_,cn(Ri.get(_)||null,i,o,l,h,p)),!0;case"gotpointercapture":return _=p.pointerId,xn.set(_,cn(xn.get(_)||null,i,o,l,h,p)),!0}return!1}function tc(i){var o=Os(i.target);if(o!==null){var l=Kn(o);if(l!==null){if(o=l.tag,o===13){if(o=Is(l),o!==null){i.blockedOn=o,Zu(i.priority,function(){Xu(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Wr(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=Oo(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);vs=h,l.target.dispatchEvent(h),vs=null}else return o=Rl(l),o!==null&&bo(o),i.blockedOn=l,!1;o.shift()}return!0}function ks(i,o,l){Wr(i)&&l.delete(o)}function nc(){dl=!1,Vt!==null&&Wr(Vt)&&(Vt=null),Yn!==null&&Wr(Yn)&&(Yn=null),Xn!==null&&Wr(Xn)&&(Xn=null),Ri.forEach(ks),xn.forEach(ks)}function Jn(i,o){i.blockedOn===o&&(i.blockedOn=null,dl||(dl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,nc)))}function Zn(i){function o(p){return Jn(p,i)}if(0<gr.length){Jn(gr[0],i);for(var l=1;l<gr.length;l++){var h=gr[l];h.blockedOn===i&&(h.blockedOn=null)}}for(Vt!==null&&Jn(Vt,i),Yn!==null&&Jn(Yn,i),Xn!==null&&Jn(Xn,i),Ri.forEach(o),xn.forEach(o),l=0;l<_r.length;l++)h=_r[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<_r.length&&(l=_r[0],l.blockedOn===null);)tc(l),l.blockedOn===null&&_r.shift()}var $r=me.ReactCurrentBatchConfig,ki=!0;function at(i,o,l,h){var p=Me,_=$r.transition;$r.transition=null;try{Me=1,fl(i,o,l,h)}finally{Me=p,$r.transition=_}}function Qd(i,o,l,h){var p=Me,_=$r.transition;$r.transition=null;try{Me=4,fl(i,o,l,h)}finally{Me=p,$r.transition=_}}function fl(i,o,l,h){if(ki){var p=Oo(i,o,l,h);if(p===null)af(i,o,h,Ps,l),ec(i,h);else if(Kd(p,i,o,l,h))h.stopPropagation();else if(ec(i,h),o&4&&-1<Gd.indexOf(i)){for(;p!==null;){var _=Rl(p);if(_!==null&&Yu(_),_=Oo(i,o,l,h),_===null&&af(i,o,h,Ps,l),_===p)break;p=_}p!==null&&h.stopPropagation()}else af(i,o,h,null,l)}}var Ps=null;function Oo(i,o,l,h){if(Ps=null,i=wo(h),i=Os(i),i!==null)if(o=Kn(i),o===null)i=null;else if(l=o.tag,l===13){if(i=Is(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return Ps=i,null}function pl(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hu()){case Ss:return 1;case wi:return 4;case On:case cl:return 16;case qu:return 536870912;default:return 16}default:return 16}}var In=null,xo=null,hn=null;function ml(){if(hn)return hn;var i,o=xo,l=o.length,h,p="value"in In?In.value:In.textContent,_=p.length;for(i=0;i<l&&o[i]===p[i];i++);var E=l-i;for(h=1;h<=E&&o[l-h]===p[_-h];h++);return hn=p.slice(i,1<h?1-h:void 0)}function Do(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function yr(){return!0}function gl(){return!1}function Ft(i){function o(l,h,p,_,E){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=_,this.target=E,this.currentTarget=null;for(var C in i)i.hasOwnProperty(C)&&(l=i[C],this[C]=l?l(_):_[C]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?yr:gl,this.isPropagationStopped=gl,this}return re(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=yr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=yr)},persist:function(){},isPersistent:yr}),o}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mo=Ft(er),vr=re({},er,{view:0,detail:0}),Yd=Ft(vr),Lo,Hr,Pi,Ns=re({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Er,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Pi&&(Pi&&i.type==="mousemove"?(Lo=i.screenX-Pi.screenX,Hr=i.screenY-Pi.screenY):Hr=Lo=0,Pi=i),Lo)},movementY:function(i){return"movementY"in i?i.movementY:Hr}}),Vo=Ft(Ns),_l=re({},Ns,{dataTransfer:0}),rc=Ft(_l),Fo=re({},vr,{relatedTarget:0}),Uo=Ft(Fo),ic=re({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),qr=Ft(ic),sc=re({},er,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),oc=Ft(sc),ac=re({},er,{data:0}),yl=Ft(ac),jo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},an={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uc(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=lc[i])?!!o[i]:!1}function Er(){return uc}var c=re({},vr,{key:function(i){if(i.key){var o=jo[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=Do(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?an[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Er,charCode:function(i){return i.type==="keypress"?Do(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Do(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),m=Ft(c),y=re({},Ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=Ft(y),L=re({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Er}),z=Ft(L),J=re({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ge=Ft(J),It=re({},Ns,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Fe=Ft(It),bt=[9,13,27,32],_t=d&&"CompositionEvent"in window,Dn=null;d&&"documentMode"in document&&(Dn=document.documentMode);var Sn=d&&"TextEvent"in window&&!Dn,bs=d&&(!_t||Dn&&8<Dn&&11>=Dn),zo=" ",x_=!1;function D_(i,o){switch(i){case"keyup":return bt.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function M_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Bo=!1;function OC(i,o){switch(i){case"compositionend":return M_(o);case"keypress":return o.which!==32?null:(x_=!0,zo);case"textInput":return i=o.data,i===zo&&x_?null:i;default:return null}}function xC(i,o){if(Bo)return i==="compositionend"||!_t&&D_(i,o)?(i=ml(),hn=xo=In=null,Bo=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return bs&&o.locale!=="ko"?null:o.data;default:return null}}var DC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function L_(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!DC[i.type]:o==="textarea"}function V_(i,o,l,h){mr(h),o=pc(o,"onChange"),0<o.length&&(l=new Mo("onChange","change",null,l,h),i.push({event:l,listeners:o}))}var vl=null,El=null;function MC(i){ty(i,0)}function cc(i){var o=Go(i);if(go(o))return i}function LC(i,o){if(i==="change")return o}var F_=!1;if(d){var Xd;if(d){var Jd="oninput"in document;if(!Jd){var U_=document.createElement("div");U_.setAttribute("oninput","return;"),Jd=typeof U_.oninput=="function"}Xd=Jd}else Xd=!1;F_=Xd&&(!document.documentMode||9<document.documentMode)}function j_(){vl&&(vl.detachEvent("onpropertychange",z_),El=vl=null)}function z_(i){if(i.propertyName==="value"&&cc(El)){var o=[];V_(o,El,i,wo(i)),ol(MC,o)}}function VC(i,o,l){i==="focusin"?(j_(),vl=o,El=l,vl.attachEvent("onpropertychange",z_)):i==="focusout"&&j_()}function FC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return cc(El)}function UC(i,o){if(i==="click")return cc(o)}function jC(i,o){if(i==="input"||i==="change")return cc(o)}function zC(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var tr=typeof Object.is=="function"?Object.is:zC;function wl(i,o){if(tr(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(o,p)||!tr(i[p],o[p]))return!1}return!0}function B_(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function W_(i,o){var l=B_(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=o&&h>=o)return{node:l,offset:o-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=B_(l)}}function $_(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?$_(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function H_(){for(var i=window,o=vi();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=vi(i.document)}return o}function Zd(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function BC(i){var o=H_(),l=i.focusedElem,h=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&$_(l.ownerDocument.documentElement,l)){if(h!==null&&Zd(l)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(h.start,p);h=h.end===void 0?_:Math.min(h.end,p),!i.extend&&_>h&&(p=h,h=_,_=p),p=W_(l,_);var E=W_(l,h);p&&E&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==E.node||i.focusOffset!==E.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),_>h?(i.addRange(o),i.extend(E.node,E.offset)):(o.setEnd(E.node,E.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var WC=d&&"documentMode"in document&&11>=document.documentMode,Wo=null,ef=null,Tl=null,tf=!1;function q_(i,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;tf||Wo==null||Wo!==vi(h)||(h=Wo,"selectionStart"in h&&Zd(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Tl&&wl(Tl,h)||(Tl=h,h=pc(ef,"onSelect"),0<h.length&&(o=new Mo("onSelect","select",null,o,l),i.push({event:o,listeners:h}),o.target=Wo)))}function hc(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var $o={animationend:hc("Animation","AnimationEnd"),animationiteration:hc("Animation","AnimationIteration"),animationstart:hc("Animation","AnimationStart"),transitionend:hc("Transition","TransitionEnd")},nf={},G_={};d&&(G_=document.createElement("div").style,"AnimationEvent"in window||(delete $o.animationend.animation,delete $o.animationiteration.animation,delete $o.animationstart.animation),"TransitionEvent"in window||delete $o.transitionend.transition);function dc(i){if(nf[i])return nf[i];if(!$o[i])return i;var o=$o[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in G_)return nf[i]=o[l];return i}var K_=dc("animationend"),Q_=dc("animationiteration"),Y_=dc("animationstart"),X_=dc("transitionend"),J_=new Map,Z_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ni(i,o){J_.set(i,o),a(o,[i])}for(var rf=0;rf<Z_.length;rf++){var sf=Z_[rf],$C=sf.toLowerCase(),HC=sf[0].toUpperCase()+sf.slice(1);Ni($C,"on"+HC)}Ni(K_,"onAnimationEnd"),Ni(Q_,"onAnimationIteration"),Ni(Y_,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(X_,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Il));function ey(i,o,l){var h=i.type||"unknown-event";i.currentTarget=l,Bu(h,o,void 0,i),i.currentTarget=null}function ty(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var _=void 0;if(o)for(var E=h.length-1;0<=E;E--){var C=h[E],k=C.instance,j=C.currentTarget;if(C=C.listener,k!==_&&p.isPropagationStopped())break e;ey(p,C,j),_=k}else for(E=0;E<h.length;E++){if(C=h[E],k=C.instance,j=C.currentTarget,C=C.listener,k!==_&&p.isPropagationStopped())break e;ey(p,C,j),_=k}}}if(Gn)throw i=al,Gn=!1,al=null,i}function et(i,o){var l=o[ff];l===void 0&&(l=o[ff]=new Set);var h=i+"__bubble";l.has(h)||(ny(o,i,2,!1),l.add(h))}function of(i,o,l){var h=0;o&&(h|=4),ny(l,i,h,o)}var fc="_reactListening"+Math.random().toString(36).slice(2);function Sl(i){if(!i[fc]){i[fc]=!0,r.forEach(function(l){l!=="selectionchange"&&(qC.has(l)||of(l,!1,i),of(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[fc]||(o[fc]=!0,of("selectionchange",!1,o))}}function ny(i,o,l,h){switch(pl(o)){case 1:var p=at;break;case 4:p=Qd;break;default:p=fl}l=p.bind(null,o,l,i),p=void 0,!So||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(o,l,{capture:!0,passive:p}):i.addEventListener(o,l,!0):p!==void 0?i.addEventListener(o,l,{passive:p}):i.addEventListener(o,l,!1)}function af(i,o,l,h,p){var _=h;if(!(o&1)&&!(o&2)&&h!==null)e:for(;;){if(h===null)return;var E=h.tag;if(E===3||E===4){var C=h.stateNode.containerInfo;if(C===p||C.nodeType===8&&C.parentNode===p)break;if(E===4)for(E=h.return;E!==null;){var k=E.tag;if((k===3||k===4)&&(k=E.stateNode.containerInfo,k===p||k.nodeType===8&&k.parentNode===p))return;E=E.return}for(;C!==null;){if(E=Os(C),E===null)return;if(k=E.tag,k===5||k===6){h=_=E;continue e}C=C.parentNode}}h=h.return}ol(function(){var j=_,K=wo(l),Q=[];e:{var G=J_.get(i);if(G!==void 0){var te=Mo,le=i;switch(i){case"keypress":if(Do(l)===0)break e;case"keydown":case"keyup":te=m;break;case"focusin":le="focus",te=Uo;break;case"focusout":le="blur",te=Uo;break;case"beforeblur":case"afterblur":te=Uo;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Vo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=rc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=z;break;case K_:case Q_:case Y_:te=qr;break;case X_:te=Ge;break;case"scroll":te=Yd;break;case"wheel":te=Fe;break;case"copy":case"cut":case"paste":te=oc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=T}var ce=(o&4)!==0,mt=!ce&&i==="scroll",V=ce?G!==null?G+"Capture":null:G;ce=[];for(var b=j,F;b!==null;){F=b;var X=F.stateNode;if(F.tag===5&&X!==null&&(F=X,V!==null&&(X=pt(b,V),X!=null&&ce.push(Cl(b,X,F)))),mt)break;b=b.return}0<ce.length&&(G=new te(G,le,null,l,K),Q.push({event:G,listeners:ce}))}}if(!(o&7)){e:{if(G=i==="mouseover"||i==="pointerover",te=i==="mouseout"||i==="pointerout",G&&l!==vs&&(le=l.relatedTarget||l.fromElement)&&(Os(le)||le[Gr]))break e;if((te||G)&&(G=K.window===K?K:(G=K.ownerDocument)?G.defaultView||G.parentWindow:window,te?(le=l.relatedTarget||l.toElement,te=j,le=le?Os(le):null,le!==null&&(mt=Kn(le),le!==mt||le.tag!==5&&le.tag!==6)&&(le=null)):(te=null,le=j),te!==le)){if(ce=Vo,X="onMouseLeave",V="onMouseEnter",b="mouse",(i==="pointerout"||i==="pointerover")&&(ce=T,X="onPointerLeave",V="onPointerEnter",b="pointer"),mt=te==null?G:Go(te),F=le==null?G:Go(le),G=new ce(X,b+"leave",te,l,K),G.target=mt,G.relatedTarget=F,X=null,Os(K)===j&&(ce=new ce(V,b+"enter",le,l,K),ce.target=F,ce.relatedTarget=mt,X=ce),mt=X,te&&le)t:{for(ce=te,V=le,b=0,F=ce;F;F=Ho(F))b++;for(F=0,X=V;X;X=Ho(X))F++;for(;0<b-F;)ce=Ho(ce),b--;for(;0<F-b;)V=Ho(V),F--;for(;b--;){if(ce===V||V!==null&&ce===V.alternate)break t;ce=Ho(ce),V=Ho(V)}ce=null}else ce=null;te!==null&&ry(Q,G,te,ce,!1),le!==null&&mt!==null&&ry(Q,mt,le,ce,!0)}}e:{if(G=j?Go(j):window,te=G.nodeName&&G.nodeName.toLowerCase(),te==="select"||te==="input"&&G.type==="file")var he=LC;else if(L_(G))if(F_)he=jC;else{he=FC;var _e=VC}else(te=G.nodeName)&&te.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(he=UC);if(he&&(he=he(i,j))){V_(Q,he,l,K);break e}_e&&_e(i,G,j),i==="focusout"&&(_e=G._wrapperState)&&_e.controlled&&G.type==="number"&&yo(G,"number",G.value)}switch(_e=j?Go(j):window,i){case"focusin":(L_(_e)||_e.contentEditable==="true")&&(Wo=_e,ef=j,Tl=null);break;case"focusout":Tl=ef=Wo=null;break;case"mousedown":tf=!0;break;case"contextmenu":case"mouseup":case"dragend":tf=!1,q_(Q,l,K);break;case"selectionchange":if(WC)break;case"keydown":case"keyup":q_(Q,l,K)}var ye;if(_t)e:{switch(i){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Bo?D_(i,l)&&(Ee="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Ee="onCompositionStart");Ee&&(bs&&l.locale!=="ko"&&(Bo||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Bo&&(ye=ml()):(In=K,xo="value"in In?In.value:In.textContent,Bo=!0)),_e=pc(j,Ee),0<_e.length&&(Ee=new yl(Ee,i,null,l,K),Q.push({event:Ee,listeners:_e}),ye?Ee.data=ye:(ye=M_(l),ye!==null&&(Ee.data=ye)))),(ye=Sn?OC(i,l):xC(i,l))&&(j=pc(j,"onBeforeInput"),0<j.length&&(K=new yl("onBeforeInput","beforeinput",null,l,K),Q.push({event:K,listeners:j}),K.data=ye))}ty(Q,o)})}function Cl(i,o,l){return{instance:i,listener:o,currentTarget:l}}function pc(i,o){for(var l=o+"Capture",h=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=pt(i,l),_!=null&&h.unshift(Cl(i,_,p)),_=pt(i,o),_!=null&&h.push(Cl(i,_,p))),i=i.return}return h}function Ho(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function ry(i,o,l,h,p){for(var _=o._reactName,E=[];l!==null&&l!==h;){var C=l,k=C.alternate,j=C.stateNode;if(k!==null&&k===h)break;C.tag===5&&j!==null&&(C=j,p?(k=pt(l,_),k!=null&&E.unshift(Cl(l,k,C))):p||(k=pt(l,_),k!=null&&E.push(Cl(l,k,C)))),l=l.return}E.length!==0&&i.push({event:o,listeners:E})}var GC=/\r\n?/g,KC=/\u0000|\uFFFD/g;function iy(i){return(typeof i=="string"?i:""+i).replace(GC,`
`).replace(KC,"")}function mc(i,o,l){if(o=iy(o),iy(i)!==o&&l)throw Error(t(425))}function gc(){}var lf=null,uf=null;function cf(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var hf=typeof setTimeout=="function"?setTimeout:void 0,QC=typeof clearTimeout=="function"?clearTimeout:void 0,sy=typeof Promise=="function"?Promise:void 0,YC=typeof queueMicrotask=="function"?queueMicrotask:typeof sy<"u"?function(i){return sy.resolve(null).then(i).catch(XC)}:hf;function XC(i){setTimeout(function(){throw i})}function df(i,o){var l=o,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),Zn(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);Zn(o)}function bi(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function oy(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var qo=Math.random().toString(36).slice(2),wr="__reactFiber$"+qo,Al="__reactProps$"+qo,Gr="__reactContainer$"+qo,ff="__reactEvents$"+qo,JC="__reactListeners$"+qo,ZC="__reactHandles$"+qo;function Os(i){var o=i[wr];if(o)return o;for(var l=i.parentNode;l;){if(o=l[Gr]||l[wr]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=oy(i);i!==null;){if(l=i[wr])return l;i=oy(i)}return o}i=l,l=i.parentNode}return null}function Rl(i){return i=i[wr]||i[Gr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Go(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function _c(i){return i[Al]||null}var pf=[],Ko=-1;function Oi(i){return{current:i}}function tt(i){0>Ko||(i.current=pf[Ko],pf[Ko]=null,Ko--)}function Ze(i,o){Ko++,pf[Ko]=i.current,i.current=o}var xi={},Kt=Oi(xi),dn=Oi(!1),xs=xi;function Qo(i,o){var l=i.type.contextTypes;if(!l)return xi;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=o[_];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function fn(i){return i=i.childContextTypes,i!=null}function yc(){tt(dn),tt(Kt)}function ay(i,o,l){if(Kt.current!==xi)throw Error(t(168));Ze(Kt,o),Ze(dn,l)}function ly(i,o,l){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in o))throw Error(t(108,We(i)||"Unknown",p));return re({},l,h)}function vc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||xi,xs=Kt.current,Ze(Kt,i),Ze(dn,dn.current),!0}function uy(i,o,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=ly(i,o,xs),h.__reactInternalMemoizedMergedChildContext=i,tt(dn),tt(Kt),Ze(Kt,i)):tt(dn),Ze(dn,l)}var Kr=null,Ec=!1,mf=!1;function cy(i){Kr===null?Kr=[i]:Kr.push(i)}function eA(i){Ec=!0,cy(i)}function Di(){if(!mf&&Kr!==null){mf=!0;var i=0,o=Me;try{var l=Kr;for(Me=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}Kr=null,Ec=!1}catch(p){throw Kr!==null&&(Kr=Kr.slice(i+1)),ko(Ss,Di),p}finally{Me=o,mf=!1}}return null}var Yo=[],Xo=0,wc=null,Tc=0,Mn=[],Ln=0,Ds=null,Qr=1,Yr="";function Ms(i,o){Yo[Xo++]=Tc,Yo[Xo++]=wc,wc=i,Tc=o}function hy(i,o,l){Mn[Ln++]=Qr,Mn[Ln++]=Yr,Mn[Ln++]=Ds,Ds=i;var h=Qr;i=Yr;var p=32-on(h)-1;h&=~(1<<p),l+=1;var _=32-on(o)+p;if(30<_){var E=p-p%5;_=(h&(1<<E)-1).toString(32),h>>=E,p-=E,Qr=1<<32-on(o)+p|l<<p|h,Yr=_+i}else Qr=1<<_|l<<p|h,Yr=i}function gf(i){i.return!==null&&(Ms(i,1),hy(i,1,0))}function _f(i){for(;i===wc;)wc=Yo[--Xo],Yo[Xo]=null,Tc=Yo[--Xo],Yo[Xo]=null;for(;i===Ds;)Ds=Mn[--Ln],Mn[Ln]=null,Yr=Mn[--Ln],Mn[Ln]=null,Qr=Mn[--Ln],Mn[Ln]=null}var Cn=null,An=null,lt=!1,nr=null;function dy(i,o){var l=jn(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function fy(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,Cn=i,An=bi(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,Cn=i,An=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=Ds!==null?{id:Qr,overflow:Yr}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=jn(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,Cn=i,An=null,!0):!1;default:return!1}}function yf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function vf(i){if(lt){var o=An;if(o){var l=o;if(!fy(i,o)){if(yf(i))throw Error(t(418));o=bi(l.nextSibling);var h=Cn;o&&fy(i,o)?dy(h,l):(i.flags=i.flags&-4097|2,lt=!1,Cn=i)}}else{if(yf(i))throw Error(t(418));i.flags=i.flags&-4097|2,lt=!1,Cn=i}}}function py(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Cn=i}function Ic(i){if(i!==Cn)return!1;if(!lt)return py(i),lt=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!cf(i.type,i.memoizedProps)),o&&(o=An)){if(yf(i))throw my(),Error(t(418));for(;o;)dy(i,o),o=bi(o.nextSibling)}if(py(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){An=bi(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}An=null}}else An=Cn?bi(i.stateNode.nextSibling):null;return!0}function my(){for(var i=An;i;)i=bi(i.nextSibling)}function Jo(){An=Cn=null,lt=!1}function Ef(i){nr===null?nr=[i]:nr.push(i)}var tA=me.ReactCurrentBatchConfig;function kl(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var p=h,_=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(E){var C=p.refs;E===null?delete C[_]:C[_]=E},o._stringRef=_,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Sc(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function gy(i){var o=i._init;return o(i._payload)}function _y(i){function o(V,b){if(i){var F=V.deletions;F===null?(V.deletions=[b],V.flags|=16):F.push(b)}}function l(V,b){if(!i)return null;for(;b!==null;)o(V,b),b=b.sibling;return null}function h(V,b){for(V=new Map;b!==null;)b.key!==null?V.set(b.key,b):V.set(b.index,b),b=b.sibling;return V}function p(V,b){return V=Bi(V,b),V.index=0,V.sibling=null,V}function _(V,b,F){return V.index=F,i?(F=V.alternate,F!==null?(F=F.index,F<b?(V.flags|=2,b):F):(V.flags|=2,b)):(V.flags|=1048576,b)}function E(V){return i&&V.alternate===null&&(V.flags|=2),V}function C(V,b,F,X){return b===null||b.tag!==6?(b=hp(F,V.mode,X),b.return=V,b):(b=p(b,F),b.return=V,b)}function k(V,b,F,X){var he=F.type;return he===N?K(V,b,F.props.children,X,F.key):b!==null&&(b.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Gt&&gy(he)===b.type)?(X=p(b,F.props),X.ref=kl(V,b,F),X.return=V,X):(X=Kc(F.type,F.key,F.props,null,V.mode,X),X.ref=kl(V,b,F),X.return=V,X)}function j(V,b,F,X){return b===null||b.tag!==4||b.stateNode.containerInfo!==F.containerInfo||b.stateNode.implementation!==F.implementation?(b=dp(F,V.mode,X),b.return=V,b):(b=p(b,F.children||[]),b.return=V,b)}function K(V,b,F,X,he){return b===null||b.tag!==7?(b=Ws(F,V.mode,X,he),b.return=V,b):(b=p(b,F),b.return=V,b)}function Q(V,b,F){if(typeof b=="string"&&b!==""||typeof b=="number")return b=hp(""+b,V.mode,F),b.return=V,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ke:return F=Kc(b.type,b.key,b.props,null,V.mode,F),F.ref=kl(V,null,b),F.return=V,F;case Ce:return b=dp(b,V.mode,F),b.return=V,b;case Gt:var X=b._init;return Q(V,X(b._payload),F)}if(Fr(b)||ge(b))return b=Ws(b,V.mode,F,null),b.return=V,b;Sc(V,b)}return null}function G(V,b,F,X){var he=b!==null?b.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return he!==null?null:C(V,b,""+F,X);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case ke:return F.key===he?k(V,b,F,X):null;case Ce:return F.key===he?j(V,b,F,X):null;case Gt:return he=F._init,G(V,b,he(F._payload),X)}if(Fr(F)||ge(F))return he!==null?null:K(V,b,F,X,null);Sc(V,F)}return null}function te(V,b,F,X,he){if(typeof X=="string"&&X!==""||typeof X=="number")return V=V.get(F)||null,C(b,V,""+X,he);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case ke:return V=V.get(X.key===null?F:X.key)||null,k(b,V,X,he);case Ce:return V=V.get(X.key===null?F:X.key)||null,j(b,V,X,he);case Gt:var _e=X._init;return te(V,b,F,_e(X._payload),he)}if(Fr(X)||ge(X))return V=V.get(F)||null,K(b,V,X,he,null);Sc(b,X)}return null}function le(V,b,F,X){for(var he=null,_e=null,ye=b,Ee=b=0,Dt=null;ye!==null&&Ee<F.length;Ee++){ye.index>Ee?(Dt=ye,ye=null):Dt=ye.sibling;var Be=G(V,ye,F[Ee],X);if(Be===null){ye===null&&(ye=Dt);break}i&&ye&&Be.alternate===null&&o(V,ye),b=_(Be,b,Ee),_e===null?he=Be:_e.sibling=Be,_e=Be,ye=Dt}if(Ee===F.length)return l(V,ye),lt&&Ms(V,Ee),he;if(ye===null){for(;Ee<F.length;Ee++)ye=Q(V,F[Ee],X),ye!==null&&(b=_(ye,b,Ee),_e===null?he=ye:_e.sibling=ye,_e=ye);return lt&&Ms(V,Ee),he}for(ye=h(V,ye);Ee<F.length;Ee++)Dt=te(ye,V,Ee,F[Ee],X),Dt!==null&&(i&&Dt.alternate!==null&&ye.delete(Dt.key===null?Ee:Dt.key),b=_(Dt,b,Ee),_e===null?he=Dt:_e.sibling=Dt,_e=Dt);return i&&ye.forEach(function(Wi){return o(V,Wi)}),lt&&Ms(V,Ee),he}function ce(V,b,F,X){var he=ge(F);if(typeof he!="function")throw Error(t(150));if(F=he.call(F),F==null)throw Error(t(151));for(var _e=he=null,ye=b,Ee=b=0,Dt=null,Be=F.next();ye!==null&&!Be.done;Ee++,Be=F.next()){ye.index>Ee?(Dt=ye,ye=null):Dt=ye.sibling;var Wi=G(V,ye,Be.value,X);if(Wi===null){ye===null&&(ye=Dt);break}i&&ye&&Wi.alternate===null&&o(V,ye),b=_(Wi,b,Ee),_e===null?he=Wi:_e.sibling=Wi,_e=Wi,ye=Dt}if(Be.done)return l(V,ye),lt&&Ms(V,Ee),he;if(ye===null){for(;!Be.done;Ee++,Be=F.next())Be=Q(V,Be.value,X),Be!==null&&(b=_(Be,b,Ee),_e===null?he=Be:_e.sibling=Be,_e=Be);return lt&&Ms(V,Ee),he}for(ye=h(V,ye);!Be.done;Ee++,Be=F.next())Be=te(ye,V,Ee,Be.value,X),Be!==null&&(i&&Be.alternate!==null&&ye.delete(Be.key===null?Ee:Be.key),b=_(Be,b,Ee),_e===null?he=Be:_e.sibling=Be,_e=Be);return i&&ye.forEach(function(DA){return o(V,DA)}),lt&&Ms(V,Ee),he}function mt(V,b,F,X){if(typeof F=="object"&&F!==null&&F.type===N&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case ke:e:{for(var he=F.key,_e=b;_e!==null;){if(_e.key===he){if(he=F.type,he===N){if(_e.tag===7){l(V,_e.sibling),b=p(_e,F.props.children),b.return=V,V=b;break e}}else if(_e.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Gt&&gy(he)===_e.type){l(V,_e.sibling),b=p(_e,F.props),b.ref=kl(V,_e,F),b.return=V,V=b;break e}l(V,_e);break}else o(V,_e);_e=_e.sibling}F.type===N?(b=Ws(F.props.children,V.mode,X,F.key),b.return=V,V=b):(X=Kc(F.type,F.key,F.props,null,V.mode,X),X.ref=kl(V,b,F),X.return=V,V=X)}return E(V);case Ce:e:{for(_e=F.key;b!==null;){if(b.key===_e)if(b.tag===4&&b.stateNode.containerInfo===F.containerInfo&&b.stateNode.implementation===F.implementation){l(V,b.sibling),b=p(b,F.children||[]),b.return=V,V=b;break e}else{l(V,b);break}else o(V,b);b=b.sibling}b=dp(F,V.mode,X),b.return=V,V=b}return E(V);case Gt:return _e=F._init,mt(V,b,_e(F._payload),X)}if(Fr(F))return le(V,b,F,X);if(ge(F))return ce(V,b,F,X);Sc(V,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,b!==null&&b.tag===6?(l(V,b.sibling),b=p(b,F),b.return=V,V=b):(l(V,b),b=hp(F,V.mode,X),b.return=V,V=b),E(V)):l(V,b)}return mt}var Zo=_y(!0),yy=_y(!1),Cc=Oi(null),Ac=null,ea=null,wf=null;function Tf(){wf=ea=Ac=null}function If(i){var o=Cc.current;tt(Cc),i._currentValue=o}function Sf(i,o,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===l)break;i=i.return}}function ta(i,o){Ac=i,wf=ea=null,i=i.dependencies,i!==null&&i.firstContext!==null&&(i.lanes&o&&(pn=!0),i.firstContext=null)}function Vn(i){var o=i._currentValue;if(wf!==i)if(i={context:i,memoizedValue:o,next:null},ea===null){if(Ac===null)throw Error(t(308));ea=i,Ac.dependencies={lanes:0,firstContext:i}}else ea=ea.next=i;return o}var Ls=null;function Cf(i){Ls===null?Ls=[i]:Ls.push(i)}function vy(i,o,l,h){var p=o.interleaved;return p===null?(l.next=l,Cf(o)):(l.next=p.next,p.next=l),o.interleaved=l,Xr(i,h)}function Xr(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Mi=!1;function Af(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ey(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Jr(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function Li(i,o,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,ze&2){var p=h.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),h.pending=o,Xr(i,l)}return p=h.interleaved,p===null?(o.next=o,Cf(h)):(o.next=p.next,p.next=o),h.interleaved=o,Xr(i,l)}function Rc(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Ci(i,l)}}function wy(i,o){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=E:_=_.next=E,l=l.next}while(l!==null);_===null?p=_=o:_=_.next=o}else p=_=o;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function kc(i,o,l,h){var p=i.updateQueue;Mi=!1;var _=p.firstBaseUpdate,E=p.lastBaseUpdate,C=p.shared.pending;if(C!==null){p.shared.pending=null;var k=C,j=k.next;k.next=null,E===null?_=j:E.next=j,E=k;var K=i.alternate;K!==null&&(K=K.updateQueue,C=K.lastBaseUpdate,C!==E&&(C===null?K.firstBaseUpdate=j:C.next=j,K.lastBaseUpdate=k))}if(_!==null){var Q=p.baseState;E=0,K=j=k=null,C=_;do{var G=C.lane,te=C.eventTime;if((h&G)===G){K!==null&&(K=K.next={eventTime:te,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var le=i,ce=C;switch(G=o,te=l,ce.tag){case 1:if(le=ce.payload,typeof le=="function"){Q=le.call(te,Q,G);break e}Q=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ce.payload,G=typeof le=="function"?le.call(te,Q,G):le,G==null)break e;Q=re({},Q,G);break e;case 2:Mi=!0}}C.callback!==null&&C.lane!==0&&(i.flags|=64,G=p.effects,G===null?p.effects=[C]:G.push(C))}else te={eventTime:te,lane:G,tag:C.tag,payload:C.payload,callback:C.callback,next:null},K===null?(j=K=te,k=Q):K=K.next=te,E|=G;if(C=C.next,C===null){if(C=p.shared.pending,C===null)break;G=C,C=G.next,G.next=null,p.lastBaseUpdate=G,p.shared.pending=null}}while(!0);if(K===null&&(k=Q),p.baseState=k,p.firstBaseUpdate=j,p.lastBaseUpdate=K,o=p.shared.interleaved,o!==null){p=o;do E|=p.lane,p=p.next;while(p!==o)}else _===null&&(p.shared.lanes=0);Us|=E,i.lanes=E,i.memoizedState=Q}}function Ty(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var Pl={},Tr=Oi(Pl),Nl=Oi(Pl),bl=Oi(Pl);function Vs(i){if(i===Pl)throw Error(t(174));return i}function Rf(i,o){switch(Ze(bl,o),Ze(Nl,i),Ze(Tr,Pl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Tt(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=Tt(o,i)}tt(Tr),Ze(Tr,o)}function na(){tt(Tr),tt(Nl),tt(bl)}function Iy(i){Vs(bl.current);var o=Vs(Tr.current),l=Tt(o,i.type);o!==l&&(Ze(Nl,i),Ze(Tr,l))}function kf(i){Nl.current===i&&(tt(Tr),tt(Nl))}var ut=Oi(0);function Pc(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if(o.flags&128)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Pf=[];function Nf(){for(var i=0;i<Pf.length;i++)Pf[i]._workInProgressVersionPrimary=null;Pf.length=0}var Nc=me.ReactCurrentDispatcher,bf=me.ReactCurrentBatchConfig,Fs=0,ct=null,St=null,Ot=null,bc=!1,Ol=!1,xl=0,nA=0;function Qt(){throw Error(t(321))}function Of(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!tr(i[l],o[l]))return!1;return!0}function xf(i,o,l,h,p,_){if(Fs=_,ct=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Nc.current=i===null||i.memoizedState===null?oA:aA,i=l(h,p),Ol){_=0;do{if(Ol=!1,xl=0,25<=_)throw Error(t(301));_+=1,Ot=St=null,o.updateQueue=null,Nc.current=lA,i=l(h,p)}while(Ol)}if(Nc.current=Dc,o=St!==null&&St.next!==null,Fs=0,Ot=St=ct=null,bc=!1,o)throw Error(t(300));return i}function Df(){var i=xl!==0;return xl=0,i}function Ir(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?ct.memoizedState=Ot=i:Ot=Ot.next=i,Ot}function Fn(){if(St===null){var i=ct.alternate;i=i!==null?i.memoizedState:null}else i=St.next;var o=Ot===null?ct.memoizedState:Ot.next;if(o!==null)Ot=o,St=i;else{if(i===null)throw Error(t(310));St=i,i={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Ot===null?ct.memoizedState=Ot=i:Ot=Ot.next=i}return Ot}function Dl(i,o){return typeof o=="function"?o(i):o}function Mf(i){var o=Fn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=St,p=h.baseQueue,_=l.pending;if(_!==null){if(p!==null){var E=p.next;p.next=_.next,_.next=E}h.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,h=h.baseState;var C=E=null,k=null,j=_;do{var K=j.lane;if((Fs&K)===K)k!==null&&(k=k.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),h=j.hasEagerState?j.eagerState:i(h,j.action);else{var Q={lane:K,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};k===null?(C=k=Q,E=h):k=k.next=Q,ct.lanes|=K,Us|=K}j=j.next}while(j!==null&&j!==_);k===null?E=h:k.next=C,tr(h,o.memoizedState)||(pn=!0),o.memoizedState=h,o.baseState=E,o.baseQueue=k,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do _=p.lane,ct.lanes|=_,Us|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function Lf(i){var o=Fn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,_=o.memoizedState;if(p!==null){l.pending=null;var E=p=p.next;do _=i(_,E.action),E=E.next;while(E!==p);tr(_,o.memoizedState)||(pn=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),l.lastRenderedState=_}return[_,h]}function Sy(){}function Cy(i,o){var l=ct,h=Fn(),p=o(),_=!tr(h.memoizedState,p);if(_&&(h.memoizedState=p,pn=!0),h=h.queue,Vf(ky.bind(null,l,h,i),[i]),h.getSnapshot!==o||_||Ot!==null&&Ot.memoizedState.tag&1){if(l.flags|=2048,Ml(9,Ry.bind(null,l,h,p,o),void 0,null),xt===null)throw Error(t(349));Fs&30||Ay(l,o,p)}return p}function Ay(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=ct.updateQueue,o===null?(o={lastEffect:null,stores:null},ct.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function Ry(i,o,l,h){o.value=l,o.getSnapshot=h,Py(o)&&Ny(i)}function ky(i,o,l){return l(function(){Py(o)&&Ny(i)})}function Py(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!tr(i,l)}catch{return!0}}function Ny(i){var o=Xr(i,1);o!==null&&or(o,i,1,-1)}function by(i){var o=Ir();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dl,lastRenderedState:i},o.queue=i,i=i.dispatch=sA.bind(null,ct,i),[o.memoizedState,i]}function Ml(i,o,l,h){return i={tag:i,create:o,destroy:l,deps:h,next:null},o=ct.updateQueue,o===null?(o={lastEffect:null,stores:null},ct.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,o.lastEffect=i)),i}function Oy(){return Fn().memoizedState}function Oc(i,o,l,h){var p=Ir();ct.flags|=i,p.memoizedState=Ml(1|o,l,void 0,h===void 0?null:h)}function xc(i,o,l,h){var p=Fn();h=h===void 0?null:h;var _=void 0;if(St!==null){var E=St.memoizedState;if(_=E.destroy,h!==null&&Of(h,E.deps)){p.memoizedState=Ml(o,l,_,h);return}}ct.flags|=i,p.memoizedState=Ml(1|o,l,_,h)}function xy(i,o){return Oc(8390656,8,i,o)}function Vf(i,o){return xc(2048,8,i,o)}function Dy(i,o){return xc(4,2,i,o)}function My(i,o){return xc(4,4,i,o)}function Ly(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function Vy(i,o,l){return l=l!=null?l.concat([i]):null,xc(4,4,Ly.bind(null,o,i),l)}function Ff(){}function Fy(i,o){var l=Fn();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Of(o,h[1])?h[0]:(l.memoizedState=[i,o],i)}function Uy(i,o){var l=Fn();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Of(o,h[1])?h[0]:(i=i(),l.memoizedState=[i,o],i)}function jy(i,o,l){return Fs&21?(tr(l,o)||(l=Rs(),ct.lanes|=l,Us|=l,i.baseState=!0),o):(i.baseState&&(i.baseState=!1,pn=!0),i.memoizedState=l)}function rA(i,o){var l=Me;Me=l!==0&&4>l?l:4,i(!0);var h=bf.transition;bf.transition={};try{i(!1),o()}finally{Me=l,bf.transition=h}}function zy(){return Fn().memoizedState}function iA(i,o,l){var h=ji(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},By(i))Wy(o,l);else if(l=vy(i,o,l,h),l!==null){var p=un();or(l,i,h,p),$y(l,o,h)}}function sA(i,o,l){var h=ji(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(By(i))Wy(o,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var E=o.lastRenderedState,C=_(E,l);if(p.hasEagerState=!0,p.eagerState=C,tr(C,E)){var k=o.interleaved;k===null?(p.next=p,Cf(o)):(p.next=k.next,k.next=p),o.interleaved=p;return}}catch{}finally{}l=vy(i,o,p,h),l!==null&&(p=un(),or(l,i,h,p),$y(l,o,h))}}function By(i){var o=i.alternate;return i===ct||o!==null&&o===ct}function Wy(i,o){Ol=bc=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function $y(i,o,l){if(l&4194240){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Ci(i,l)}}var Dc={readContext:Vn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},oA={readContext:Vn,useCallback:function(i,o){return Ir().memoizedState=[i,o===void 0?null:o],i},useContext:Vn,useEffect:xy,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,Oc(4194308,4,Ly.bind(null,o,i),l)},useLayoutEffect:function(i,o){return Oc(4194308,4,i,o)},useInsertionEffect:function(i,o){return Oc(4,2,i,o)},useMemo:function(i,o){var l=Ir();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var h=Ir();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=iA.bind(null,ct,i),[h.memoizedState,i]},useRef:function(i){var o=Ir();return i={current:i},o.memoizedState=i},useState:by,useDebugValue:Ff,useDeferredValue:function(i){return Ir().memoizedState=i},useTransition:function(){var i=by(!1),o=i[0];return i=rA.bind(null,i[1]),Ir().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var h=ct,p=Ir();if(lt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),xt===null)throw Error(t(349));Fs&30||Ay(h,o,l)}p.memoizedState=l;var _={value:l,getSnapshot:o};return p.queue=_,xy(ky.bind(null,h,_,i),[i]),h.flags|=2048,Ml(9,Ry.bind(null,h,_,l,o),void 0,null),l},useId:function(){var i=Ir(),o=xt.identifierPrefix;if(lt){var l=Yr,h=Qr;l=(h&~(1<<32-on(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=xl++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=nA++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},aA={readContext:Vn,useCallback:Fy,useContext:Vn,useEffect:Vf,useImperativeHandle:Vy,useInsertionEffect:Dy,useLayoutEffect:My,useMemo:Uy,useReducer:Mf,useRef:Oy,useState:function(){return Mf(Dl)},useDebugValue:Ff,useDeferredValue:function(i){var o=Fn();return jy(o,St.memoizedState,i)},useTransition:function(){var i=Mf(Dl)[0],o=Fn().memoizedState;return[i,o]},useMutableSource:Sy,useSyncExternalStore:Cy,useId:zy,unstable_isNewReconciler:!1},lA={readContext:Vn,useCallback:Fy,useContext:Vn,useEffect:Vf,useImperativeHandle:Vy,useInsertionEffect:Dy,useLayoutEffect:My,useMemo:Uy,useReducer:Lf,useRef:Oy,useState:function(){return Lf(Dl)},useDebugValue:Ff,useDeferredValue:function(i){var o=Fn();return St===null?o.memoizedState=i:jy(o,St.memoizedState,i)},useTransition:function(){var i=Lf(Dl)[0],o=Fn().memoizedState;return[i,o]},useMutableSource:Sy,useSyncExternalStore:Cy,useId:zy,unstable_isNewReconciler:!1};function rr(i,o){if(i&&i.defaultProps){o=re({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function Uf(i,o,l,h){o=i.memoizedState,l=l(h,o),l=l==null?o:re({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Mc={isMounted:function(i){return(i=i._reactInternals)?Kn(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var h=un(),p=ji(i),_=Jr(h,p);_.payload=o,l!=null&&(_.callback=l),o=Li(i,_,p),o!==null&&(or(o,i,p,h),Rc(o,i,p))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var h=un(),p=ji(i),_=Jr(h,p);_.tag=1,_.payload=o,l!=null&&(_.callback=l),o=Li(i,_,p),o!==null&&(or(o,i,p,h),Rc(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=un(),h=ji(i),p=Jr(l,h);p.tag=2,o!=null&&(p.callback=o),o=Li(i,p,h),o!==null&&(or(o,i,h,l),Rc(o,i,h))}};function Hy(i,o,l,h,p,_,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,_,E):o.prototype&&o.prototype.isPureReactComponent?!wl(l,h)||!wl(p,_):!0}function qy(i,o,l){var h=!1,p=xi,_=o.contextType;return typeof _=="object"&&_!==null?_=Vn(_):(p=fn(o)?xs:Kt.current,h=o.contextTypes,_=(h=h!=null)?Qo(i,p):xi),o=new o(l,_),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Mc,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),o}function Gy(i,o,l,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==i&&Mc.enqueueReplaceState(o,o.state,null)}function jf(i,o,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},Af(i);var _=o.contextType;typeof _=="object"&&_!==null?p.context=Vn(_):(_=fn(o)?xs:Kt.current,p.context=Qo(i,_)),p.state=i.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(Uf(i,o,_,l),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&Mc.enqueueReplaceState(p,p.state,null),kc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function ra(i,o){try{var l="",h=o;do l+=Pe(h),h=h.return;while(h);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:o,stack:p,digest:null}}function zf(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function Bf(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var uA=typeof WeakMap=="function"?WeakMap:Map;function Ky(i,o,l){l=Jr(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){Bc||(Bc=!0,rp=h),Bf(i,o)},l}function Qy(i,o,l){l=Jr(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=o.value;l.payload=function(){return h(p)},l.callback=function(){Bf(i,o)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){Bf(i,o),typeof h!="function"&&(Fi===null?Fi=new Set([this]):Fi.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})}),l}function Yy(i,o,l){var h=i.pingCache;if(h===null){h=i.pingCache=new uA;var p=new Set;h.set(o,p)}else p=h.get(o),p===void 0&&(p=new Set,h.set(o,p));p.has(l)||(p.add(l),i=IA.bind(null,i,o,l),o.then(i,i))}function Xy(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function Jy(i,o,l,h,p){return i.mode&1?(i.flags|=65536,i.lanes=p,i):(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=Jr(-1,1),o.tag=2,Li(l,o,1))),l.lanes|=1),i)}var cA=me.ReactCurrentOwner,pn=!1;function ln(i,o,l,h){o.child=i===null?yy(o,null,l,h):Zo(o,i.child,l,h)}function Zy(i,o,l,h,p){l=l.render;var _=o.ref;return ta(o,p),h=xf(i,o,l,h,_,p),l=Df(),i!==null&&!pn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Zr(i,o,p)):(lt&&l&&gf(o),o.flags|=1,ln(i,o,h,p),o.child)}function ev(i,o,l,h,p){if(i===null){var _=l.type;return typeof _=="function"&&!cp(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=_,tv(i,o,_,h,p)):(i=Kc(l.type,null,h,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(_=i.child,!(i.lanes&p)){var E=_.memoizedProps;if(l=l.compare,l=l!==null?l:wl,l(E,h)&&i.ref===o.ref)return Zr(i,o,p)}return o.flags|=1,i=Bi(_,h),i.ref=o.ref,i.return=o,o.child=i}function tv(i,o,l,h,p){if(i!==null){var _=i.memoizedProps;if(wl(_,h)&&i.ref===o.ref)if(pn=!1,o.pendingProps=h=_,(i.lanes&p)!==0)i.flags&131072&&(pn=!0);else return o.lanes=i.lanes,Zr(i,o,p)}return Wf(i,o,l,h,p)}function nv(i,o,l){var h=o.pendingProps,p=h.children,_=i!==null?i.memoizedState:null;if(h.mode==="hidden")if(!(o.mode&1))o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ze(sa,Rn),Rn|=l;else{if(!(l&1073741824))return i=_!==null?_.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,Ze(sa,Rn),Rn|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=_!==null?_.baseLanes:l,Ze(sa,Rn),Rn|=h}else _!==null?(h=_.baseLanes|l,o.memoizedState=null):h=l,Ze(sa,Rn),Rn|=h;return ln(i,o,p,l),o.child}function rv(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function Wf(i,o,l,h,p){var _=fn(l)?xs:Kt.current;return _=Qo(o,_),ta(o,p),l=xf(i,o,l,h,_,p),h=Df(),i!==null&&!pn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Zr(i,o,p)):(lt&&h&&gf(o),o.flags|=1,ln(i,o,l,p),o.child)}function iv(i,o,l,h,p){if(fn(l)){var _=!0;vc(o)}else _=!1;if(ta(o,p),o.stateNode===null)Vc(i,o),qy(o,l,h),jf(o,l,h,p),h=!0;else if(i===null){var E=o.stateNode,C=o.memoizedProps;E.props=C;var k=E.context,j=l.contextType;typeof j=="object"&&j!==null?j=Vn(j):(j=fn(l)?xs:Kt.current,j=Qo(o,j));var K=l.getDerivedStateFromProps,Q=typeof K=="function"||typeof E.getSnapshotBeforeUpdate=="function";Q||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(C!==h||k!==j)&&Gy(o,E,h,j),Mi=!1;var G=o.memoizedState;E.state=G,kc(o,h,E,p),k=o.memoizedState,C!==h||G!==k||dn.current||Mi?(typeof K=="function"&&(Uf(o,l,K,h),k=o.memoizedState),(C=Mi||Hy(o,l,C,h,G,k,j))?(Q||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(o.flags|=4194308)):(typeof E.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=k),E.props=h,E.state=k,E.context=j,h=C):(typeof E.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{E=o.stateNode,Ey(i,o),C=o.memoizedProps,j=o.type===o.elementType?C:rr(o.type,C),E.props=j,Q=o.pendingProps,G=E.context,k=l.contextType,typeof k=="object"&&k!==null?k=Vn(k):(k=fn(l)?xs:Kt.current,k=Qo(o,k));var te=l.getDerivedStateFromProps;(K=typeof te=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(C!==Q||G!==k)&&Gy(o,E,h,k),Mi=!1,G=o.memoizedState,E.state=G,kc(o,h,E,p);var le=o.memoizedState;C!==Q||G!==le||dn.current||Mi?(typeof te=="function"&&(Uf(o,l,te,h),le=o.memoizedState),(j=Mi||Hy(o,l,j,h,G,le,k)||!1)?(K||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(h,le,k),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(h,le,k)),typeof E.componentDidUpdate=="function"&&(o.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof E.componentDidUpdate!="function"||C===i.memoizedProps&&G===i.memoizedState||(o.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||C===i.memoizedProps&&G===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=le),E.props=h,E.state=le,E.context=k,h=j):(typeof E.componentDidUpdate!="function"||C===i.memoizedProps&&G===i.memoizedState||(o.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||C===i.memoizedProps&&G===i.memoizedState||(o.flags|=1024),h=!1)}return $f(i,o,l,h,_,p)}function $f(i,o,l,h,p,_){rv(i,o);var E=(o.flags&128)!==0;if(!h&&!E)return p&&uy(o,l,!1),Zr(i,o,_);h=o.stateNode,cA.current=o;var C=E&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&E?(o.child=Zo(o,i.child,null,_),o.child=Zo(o,null,C,_)):ln(i,o,C,_),o.memoizedState=h.state,p&&uy(o,l,!0),o.child}function sv(i){var o=i.stateNode;o.pendingContext?ay(i,o.pendingContext,o.pendingContext!==o.context):o.context&&ay(i,o.context,!1),Rf(i,o.containerInfo)}function ov(i,o,l,h,p){return Jo(),Ef(p),o.flags|=256,ln(i,o,l,h),o.child}var Hf={dehydrated:null,treeContext:null,retryLane:0};function qf(i){return{baseLanes:i,cachePool:null,transitions:null}}function av(i,o,l){var h=o.pendingProps,p=ut.current,_=!1,E=(o.flags&128)!==0,C;if((C=E)||(C=i!==null&&i.memoizedState===null?!1:(p&2)!==0),C?(_=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Ze(ut,p&1),i===null)return vf(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?(o.mode&1?i.data==="$!"?o.lanes=8:o.lanes=1073741824:o.lanes=1,null):(E=h.children,i=h.fallback,_?(h=o.mode,_=o.child,E={mode:"hidden",children:E},!(h&1)&&_!==null?(_.childLanes=0,_.pendingProps=E):_=Qc(E,h,0,null),i=Ws(i,h,l,null),_.return=o,i.return=o,_.sibling=i,o.child=_,o.child.memoizedState=qf(l),o.memoizedState=Hf,i):Gf(o,E));if(p=i.memoizedState,p!==null&&(C=p.dehydrated,C!==null))return hA(i,o,E,h,C,p,l);if(_){_=h.fallback,E=o.mode,p=i.child,C=p.sibling;var k={mode:"hidden",children:h.children};return!(E&1)&&o.child!==p?(h=o.child,h.childLanes=0,h.pendingProps=k,o.deletions=null):(h=Bi(p,k),h.subtreeFlags=p.subtreeFlags&14680064),C!==null?_=Bi(C,_):(_=Ws(_,E,l,null),_.flags|=2),_.return=o,h.return=o,h.sibling=_,o.child=h,h=_,_=o.child,E=i.child.memoizedState,E=E===null?qf(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},_.memoizedState=E,_.childLanes=i.childLanes&~l,o.memoizedState=Hf,h}return _=i.child,i=_.sibling,h=Bi(_,{mode:"visible",children:h.children}),!(o.mode&1)&&(h.lanes=l),h.return=o,h.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=h,o.memoizedState=null,h}function Gf(i,o){return o=Qc({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function Lc(i,o,l,h){return h!==null&&Ef(h),Zo(o,i.child,null,l),i=Gf(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function hA(i,o,l,h,p,_,E){if(l)return o.flags&256?(o.flags&=-257,h=zf(Error(t(422))),Lc(i,o,E,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(_=h.fallback,p=o.mode,h=Qc({mode:"visible",children:h.children},p,0,null),_=Ws(_,p,E,null),_.flags|=2,h.return=o,_.return=o,h.sibling=_,o.child=h,o.mode&1&&Zo(o,i.child,null,E),o.child.memoizedState=qf(E),o.memoizedState=Hf,_);if(!(o.mode&1))return Lc(i,o,E,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var C=h.dgst;return h=C,_=Error(t(419)),h=zf(_,h,void 0),Lc(i,o,E,h)}if(C=(E&i.childLanes)!==0,pn||C){if(h=xt,h!==null){switch(E&-E){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(h.suspendedLanes|E)?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Xr(i,p),or(h,i,p,-1))}return up(),h=zf(Error(t(421))),Lc(i,o,E,h)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=SA.bind(null,i),p._reactRetry=o,null):(i=_.treeContext,An=bi(p.nextSibling),Cn=o,lt=!0,nr=null,i!==null&&(Mn[Ln++]=Qr,Mn[Ln++]=Yr,Mn[Ln++]=Ds,Qr=i.id,Yr=i.overflow,Ds=o),o=Gf(o,h.children),o.flags|=4096,o)}function lv(i,o,l){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),Sf(i.return,o,l)}function Kf(i,o,l,h,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=h,_.tail=l,_.tailMode=p)}function uv(i,o,l){var h=o.pendingProps,p=h.revealOrder,_=h.tail;if(ln(i,o,h.children,l),h=ut.current,h&2)h=h&1|2,o.flags|=128;else{if(i!==null&&i.flags&128)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&lv(i,l,o);else if(i.tag===19)lv(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(Ze(ut,h),!(o.mode&1))o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)i=l.alternate,i!==null&&Pc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),Kf(o,!1,p,l,_);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&Pc(i)===null){o.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Kf(o,!0,l,null,_);break;case"together":Kf(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Vc(i,o){!(o.mode&1)&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function Zr(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),Us|=o.lanes,!(l&o.childLanes))return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=Bi(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=Bi(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function dA(i,o,l){switch(o.tag){case 3:sv(o),Jo();break;case 5:Iy(o);break;case 1:fn(o.type)&&vc(o);break;case 4:Rf(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,p=o.memoizedProps.value;Ze(Cc,h._currentValue),h._currentValue=p;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(Ze(ut,ut.current&1),o.flags|=128,null):l&o.child.childLanes?av(i,o,l):(Ze(ut,ut.current&1),i=Zr(i,o,l),i!==null?i.sibling:null);Ze(ut,ut.current&1);break;case 19:if(h=(l&o.childLanes)!==0,i.flags&128){if(h)return uv(i,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ze(ut,ut.current),h)break;return null;case 22:case 23:return o.lanes=0,nv(i,o,l)}return Zr(i,o,l)}var cv,Qf,hv,dv;cv=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Qf=function(){},hv=function(i,o,l,h){var p=i.memoizedProps;if(p!==h){i=o.stateNode,Vs(Tr.current);var _=null;switch(l){case"input":p=gs(i,p),h=gs(i,h),_=[];break;case"select":p=re({},p,{value:void 0}),h=re({},h,{value:void 0}),_=[];break;case"textarea":p=Ya(i,p),h=Ya(i,h),_=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=gc)}nl(l,h);var E;l=null;for(j in p)if(!h.hasOwnProperty(j)&&p.hasOwnProperty(j)&&p[j]!=null)if(j==="style"){var C=p[j];for(E in C)C.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(s.hasOwnProperty(j)?_||(_=[]):(_=_||[]).push(j,null));for(j in h){var k=h[j];if(C=p!=null?p[j]:void 0,h.hasOwnProperty(j)&&k!==C&&(k!=null||C!=null))if(j==="style")if(C){for(E in C)!C.hasOwnProperty(E)||k&&k.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in k)k.hasOwnProperty(E)&&C[E]!==k[E]&&(l||(l={}),l[E]=k[E])}else l||(_||(_=[]),_.push(j,l)),l=k;else j==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,C=C?C.__html:void 0,k!=null&&C!==k&&(_=_||[]).push(j,k)):j==="children"?typeof k!="string"&&typeof k!="number"||(_=_||[]).push(j,""+k):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(s.hasOwnProperty(j)?(k!=null&&j==="onScroll"&&et("scroll",i),_||C===k||(_=[])):(_=_||[]).push(j,k))}l&&(_=_||[]).push("style",l);var j=_;(o.updateQueue=j)&&(o.flags|=4)}},dv=function(i,o,l,h){l!==h&&(o.flags|=4)};function Ll(i,o){if(!lt)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function Yt(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(o)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,o}function fA(i,o,l){var h=o.pendingProps;switch(_f(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(o),null;case 1:return fn(o.type)&&yc(),Yt(o),null;case 3:return h=o.stateNode,na(),tt(dn),tt(Kt),Nf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(Ic(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&!(o.flags&256)||(o.flags|=1024,nr!==null&&(op(nr),nr=null))),Qf(i,o),Yt(o),null;case 5:kf(o);var p=Vs(bl.current);if(l=o.type,i!==null&&o.stateNode!=null)hv(i,o,l,h,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return Yt(o),null}if(i=Vs(Tr.current),Ic(o)){h=o.stateNode,l=o.type;var _=o.memoizedProps;switch(h[wr]=o,h[Al]=_,i=(o.mode&1)!==0,l){case"dialog":et("cancel",h),et("close",h);break;case"iframe":case"object":case"embed":et("load",h);break;case"video":case"audio":for(p=0;p<Il.length;p++)et(Il[p],h);break;case"source":et("error",h);break;case"img":case"image":case"link":et("error",h),et("load",h);break;case"details":et("toggle",h);break;case"input":_o(h,_),et("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!_.multiple},et("invalid",h);break;case"textarea":vo(h,_),et("invalid",h)}nl(l,_),p=null;for(var E in _)if(_.hasOwnProperty(E)){var C=_[E];E==="children"?typeof C=="string"?h.textContent!==C&&(_.suppressHydrationWarning!==!0&&mc(h.textContent,C,i),p=["children",C]):typeof C=="number"&&h.textContent!==""+C&&(_.suppressHydrationWarning!==!0&&mc(h.textContent,C,i),p=["children",""+C]):s.hasOwnProperty(E)&&C!=null&&E==="onScroll"&&et("scroll",h)}switch(l){case"input":Vr(h),zu(h,_,!0);break;case"textarea":Vr(h),Xa(h);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(h.onclick=gc)}h=p,o.updateQueue=h,h!==null&&(o.flags|=4)}else{E=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=wt(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=E.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=E.createElement(l,{is:h.is}):(i=E.createElement(l),l==="select"&&(E=i,h.multiple?E.multiple=!0:h.size&&(E.size=h.size))):i=E.createElementNS(i,l),i[wr]=o,i[Al]=h,cv(i,o,!1,!1),o.stateNode=i;e:{switch(E=rl(l,h),l){case"dialog":et("cancel",i),et("close",i),p=h;break;case"iframe":case"object":case"embed":et("load",i),p=h;break;case"video":case"audio":for(p=0;p<Il.length;p++)et(Il[p],i);p=h;break;case"source":et("error",i),p=h;break;case"img":case"image":case"link":et("error",i),et("load",i),p=h;break;case"details":et("toggle",i),p=h;break;case"input":_o(i,h),p=gs(i,h),et("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=re({},h,{value:void 0}),et("invalid",i);break;case"textarea":vo(i,h),p=Ya(i,h),et("invalid",i);break;default:p=h}nl(l,p),C=p;for(_ in C)if(C.hasOwnProperty(_)){var k=C[_];_==="style"?el(i,k):_==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Ja(i,k)):_==="children"?typeof k=="string"?(l!=="textarea"||k!=="")&&Ei(i,k):typeof k=="number"&&Ei(i,""+k):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?k!=null&&_==="onScroll"&&et("scroll",i):k!=null&&oe(i,_,k,E))}switch(l){case"input":Vr(i),zu(i,h,!1);break;case"textarea":Vr(i),Xa(i);break;case"option":h.value!=null&&i.setAttribute("value",""+$e(h.value));break;case"select":i.multiple=!!h.multiple,_=h.value,_!=null?Ur(i,!!h.multiple,_,!1):h.defaultValue!=null&&Ur(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=gc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Yt(o),null;case 6:if(i&&o.stateNode!=null)dv(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(l=Vs(bl.current),Vs(Tr.current),Ic(o)){if(h=o.stateNode,l=o.memoizedProps,h[wr]=o,(_=h.nodeValue!==l)&&(i=Cn,i!==null))switch(i.tag){case 3:mc(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&mc(h.nodeValue,l,(i.mode&1)!==0)}_&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[wr]=o,o.stateNode=h}return Yt(o),null;case 13:if(tt(ut),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(lt&&An!==null&&o.mode&1&&!(o.flags&128))my(),Jo(),o.flags|=98560,_=!1;else if(_=Ic(o),h!==null&&h.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[wr]=o}else Jo(),!(o.flags&128)&&(o.memoizedState=null),o.flags|=4;Yt(o),_=!1}else nr!==null&&(op(nr),nr=null),_=!0;if(!_)return o.flags&65536?o:null}return o.flags&128?(o.lanes=l,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,o.mode&1&&(i===null||ut.current&1?Ct===0&&(Ct=3):up())),o.updateQueue!==null&&(o.flags|=4),Yt(o),null);case 4:return na(),Qf(i,o),i===null&&Sl(o.stateNode.containerInfo),Yt(o),null;case 10:return If(o.type._context),Yt(o),null;case 17:return fn(o.type)&&yc(),Yt(o),null;case 19:if(tt(ut),_=o.memoizedState,_===null)return Yt(o),null;if(h=(o.flags&128)!==0,E=_.rendering,E===null)if(h)Ll(_,!1);else{if(Ct!==0||i!==null&&i.flags&128)for(i=o.child;i!==null;){if(E=Pc(i),E!==null){for(o.flags|=128,Ll(_,!1),h=E.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)_=l,i=h,_.flags&=14680066,E=_.alternate,E===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=E.childLanes,_.lanes=E.lanes,_.child=E.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=E.memoizedProps,_.memoizedState=E.memoizedState,_.updateQueue=E.updateQueue,_.type=E.type,i=E.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Ze(ut,ut.current&1|2),o.child}i=i.sibling}_.tail!==null&&Je()>oa&&(o.flags|=128,h=!0,Ll(_,!1),o.lanes=4194304)}else{if(!h)if(i=Pc(E),i!==null){if(o.flags|=128,h=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),Ll(_,!0),_.tail===null&&_.tailMode==="hidden"&&!E.alternate&&!lt)return Yt(o),null}else 2*Je()-_.renderingStartTime>oa&&l!==1073741824&&(o.flags|=128,h=!0,Ll(_,!1),o.lanes=4194304);_.isBackwards?(E.sibling=o.child,o.child=E):(l=_.last,l!==null?l.sibling=E:o.child=E,_.last=E)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=Je(),o.sibling=null,l=ut.current,Ze(ut,h?l&1|2:l&1),o):(Yt(o),null);case 22:case 23:return lp(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&o.mode&1?Rn&1073741824&&(Yt(o),o.subtreeFlags&6&&(o.flags|=8192)):Yt(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function pA(i,o){switch(_f(o),o.tag){case 1:return fn(o.type)&&yc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return na(),tt(dn),tt(Kt),Nf(),i=o.flags,i&65536&&!(i&128)?(o.flags=i&-65537|128,o):null;case 5:return kf(o),null;case 13:if(tt(ut),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Jo()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return tt(ut),null;case 4:return na(),null;case 10:return If(o.type._context),null;case 22:case 23:return lp(),null;case 24:return null;default:return null}}var Fc=!1,Xt=!1,mA=typeof WeakSet=="function"?WeakSet:Set,ae=null;function ia(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){dt(i,o,h)}else l.current=null}function Yf(i,o,l){try{l()}catch(h){dt(i,o,h)}}var fv=!1;function gA(i,o){if(lf=ki,i=H_(),Zd(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,_=h.focusNode;h=h.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var E=0,C=-1,k=-1,j=0,K=0,Q=i,G=null;t:for(;;){for(var te;Q!==l||p!==0&&Q.nodeType!==3||(C=E+p),Q!==_||h!==0&&Q.nodeType!==3||(k=E+h),Q.nodeType===3&&(E+=Q.nodeValue.length),(te=Q.firstChild)!==null;)G=Q,Q=te;for(;;){if(Q===i)break t;if(G===l&&++j===p&&(C=E),G===_&&++K===h&&(k=E),(te=Q.nextSibling)!==null)break;Q=G,G=Q.parentNode}Q=te}l=C===-1||k===-1?null:{start:C,end:k}}else l=null}l=l||{start:0,end:0}}else l=null;for(uf={focusedElem:i,selectionRange:l},ki=!1,ae=o;ae!==null;)if(o=ae,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,ae=i;else for(;ae!==null;){o=ae;try{var le=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var ce=le.memoizedProps,mt=le.memoizedState,V=o.stateNode,b=V.getSnapshotBeforeUpdate(o.elementType===o.type?ce:rr(o.type,ce),mt);V.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var F=o.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){dt(o,o.return,X)}if(i=o.sibling,i!==null){i.return=o.return,ae=i;break}ae=o.return}return le=fv,fv=!1,le}function Vl(i,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Yf(o,l,_)}p=p.next}while(p!==h)}}function Uc(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function Xf(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function pv(i){var o=i.alternate;o!==null&&(i.alternate=null,pv(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[wr],delete o[Al],delete o[ff],delete o[JC],delete o[ZC])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function mv(i){return i.tag===5||i.tag===3||i.tag===4}function gv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||mv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Jf(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=gc));else if(h!==4&&(i=i.child,i!==null))for(Jf(i,o,l),i=i.sibling;i!==null;)Jf(i,o,l),i=i.sibling}function Zf(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(Zf(i,o,l),i=i.sibling;i!==null;)Zf(i,o,l),i=i.sibling}var Ut=null,ir=!1;function Vi(i,o,l){for(l=l.child;l!==null;)_v(i,o,l),l=l.sibling}function _v(i,o,l){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(Cs,l)}catch{}switch(l.tag){case 5:Xt||ia(l,o);case 6:var h=Ut,p=ir;Ut=null,Vi(i,o,l),Ut=h,ir=p,Ut!==null&&(ir?(i=Ut,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Ut.removeChild(l.stateNode));break;case 18:Ut!==null&&(ir?(i=Ut,l=l.stateNode,i.nodeType===8?df(i.parentNode,l):i.nodeType===1&&df(i,l),Zn(i)):df(Ut,l.stateNode));break;case 4:h=Ut,p=ir,Ut=l.stateNode.containerInfo,ir=!0,Vi(i,o,l),Ut=h,ir=p;break;case 0:case 11:case 14:case 15:if(!Xt&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var _=p,E=_.destroy;_=_.tag,E!==void 0&&(_&2||_&4)&&Yf(l,o,E),p=p.next}while(p!==h)}Vi(i,o,l);break;case 1:if(!Xt&&(ia(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(C){dt(l,o,C)}Vi(i,o,l);break;case 21:Vi(i,o,l);break;case 22:l.mode&1?(Xt=(h=Xt)||l.memoizedState!==null,Vi(i,o,l),Xt=h):Vi(i,o,l);break;default:Vi(i,o,l)}}function yv(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new mA),o.forEach(function(h){var p=CA.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function sr(i,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var _=i,E=o,C=E;e:for(;C!==null;){switch(C.tag){case 5:Ut=C.stateNode,ir=!1;break e;case 3:Ut=C.stateNode.containerInfo,ir=!0;break e;case 4:Ut=C.stateNode.containerInfo,ir=!0;break e}C=C.return}if(Ut===null)throw Error(t(160));_v(_,E,p),Ut=null,ir=!1;var k=p.alternate;k!==null&&(k.return=null),p.return=null}catch(j){dt(p,o,j)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)vv(o,i),o=o.sibling}function vv(i,o){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(sr(o,i),Sr(i),h&4){try{Vl(3,i,i.return),Uc(3,i)}catch(ce){dt(i,i.return,ce)}try{Vl(5,i,i.return)}catch(ce){dt(i,i.return,ce)}}break;case 1:sr(o,i),Sr(i),h&512&&l!==null&&ia(l,l.return);break;case 5:if(sr(o,i),Sr(i),h&512&&l!==null&&ia(l,l.return),i.flags&32){var p=i.stateNode;try{Ei(p,"")}catch(ce){dt(i,i.return,ce)}}if(h&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,E=l!==null?l.memoizedProps:_,C=i.type,k=i.updateQueue;if(i.updateQueue=null,k!==null)try{C==="input"&&_.type==="radio"&&_.name!=null&&Ka(p,_),rl(C,E);var j=rl(C,_);for(E=0;E<k.length;E+=2){var K=k[E],Q=k[E+1];K==="style"?el(p,Q):K==="dangerouslySetInnerHTML"?Ja(p,Q):K==="children"?Ei(p,Q):oe(p,K,Q,j)}switch(C){case"input":Qa(p,_);break;case"textarea":Eo(p,_);break;case"select":var G=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var te=_.value;te!=null?Ur(p,!!_.multiple,te,!1):G!==!!_.multiple&&(_.defaultValue!=null?Ur(p,!!_.multiple,_.defaultValue,!0):Ur(p,!!_.multiple,_.multiple?[]:"",!1))}p[Al]=_}catch(ce){dt(i,i.return,ce)}}break;case 6:if(sr(o,i),Sr(i),h&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(ce){dt(i,i.return,ce)}}break;case 3:if(sr(o,i),Sr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Zn(o.containerInfo)}catch(ce){dt(i,i.return,ce)}break;case 4:sr(o,i),Sr(i);break;case 13:sr(o,i),Sr(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(np=Je())),h&4&&yv(i);break;case 22:if(K=l!==null&&l.memoizedState!==null,i.mode&1?(Xt=(j=Xt)||K,sr(o,i),Xt=j):sr(o,i),Sr(i),h&8192){if(j=i.memoizedState!==null,(i.stateNode.isHidden=j)&&!K&&i.mode&1)for(ae=i,K=i.child;K!==null;){for(Q=ae=K;ae!==null;){switch(G=ae,te=G.child,G.tag){case 0:case 11:case 14:case 15:Vl(4,G,G.return);break;case 1:ia(G,G.return);var le=G.stateNode;if(typeof le.componentWillUnmount=="function"){h=G,l=G.return;try{o=h,le.props=o.memoizedProps,le.state=o.memoizedState,le.componentWillUnmount()}catch(ce){dt(h,l,ce)}}break;case 5:ia(G,G.return);break;case 22:if(G.memoizedState!==null){Tv(Q);continue}}te!==null?(te.return=G,ae=te):Tv(Q)}K=K.sibling}e:for(K=null,Q=i;;){if(Q.tag===5){if(K===null){K=Q;try{p=Q.stateNode,j?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(C=Q.stateNode,k=Q.memoizedProps.style,E=k!=null&&k.hasOwnProperty("display")?k.display:null,C.style.display=Za("display",E))}catch(ce){dt(i,i.return,ce)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=j?"":Q.memoizedProps}catch(ce){dt(i,i.return,ce)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===i)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===i)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===i)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:sr(o,i),Sr(i),h&4&&yv(i);break;case 21:break;default:sr(o,i),Sr(i)}}function Sr(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(mv(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(Ei(p,""),h.flags&=-33);var _=gv(i);Zf(i,_,p);break;case 3:case 4:var E=h.stateNode.containerInfo,C=gv(i);Jf(i,C,E);break;default:throw Error(t(161))}}catch(k){dt(i,i.return,k)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function _A(i,o,l){ae=i,Ev(i)}function Ev(i,o,l){for(var h=(i.mode&1)!==0;ae!==null;){var p=ae,_=p.child;if(p.tag===22&&h){var E=p.memoizedState!==null||Fc;if(!E){var C=p.alternate,k=C!==null&&C.memoizedState!==null||Xt;C=Fc;var j=Xt;if(Fc=E,(Xt=k)&&!j)for(ae=p;ae!==null;)E=ae,k=E.child,E.tag===22&&E.memoizedState!==null?Iv(p):k!==null?(k.return=E,ae=k):Iv(p);for(;_!==null;)ae=_,Ev(_),_=_.sibling;ae=p,Fc=C,Xt=j}wv(i)}else p.subtreeFlags&8772&&_!==null?(_.return=p,ae=_):wv(i)}}function wv(i){for(;ae!==null;){var o=ae;if(o.flags&8772){var l=o.alternate;try{if(o.flags&8772)switch(o.tag){case 0:case 11:case 15:Xt||Uc(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!Xt)if(l===null)h.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:rr(o.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&Ty(o,_,h);break;case 3:var E=o.updateQueue;if(E!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}Ty(o,E,l)}break;case 5:var C=o.stateNode;if(l===null&&o.flags&4){l=C;var k=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&l.focus();break;case"img":k.src&&(l.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var j=o.alternate;if(j!==null){var K=j.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&Zn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Xt||o.flags&512&&Xf(o)}catch(G){dt(o,o.return,G)}}if(o===i){ae=null;break}if(l=o.sibling,l!==null){l.return=o.return,ae=l;break}ae=o.return}}function Tv(i){for(;ae!==null;){var o=ae;if(o===i){ae=null;break}var l=o.sibling;if(l!==null){l.return=o.return,ae=l;break}ae=o.return}}function Iv(i){for(;ae!==null;){var o=ae;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{Uc(4,o)}catch(k){dt(o,l,k)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var p=o.return;try{h.componentDidMount()}catch(k){dt(o,p,k)}}var _=o.return;try{Xf(o)}catch(k){dt(o,_,k)}break;case 5:var E=o.return;try{Xf(o)}catch(k){dt(o,E,k)}}}catch(k){dt(o,o.return,k)}if(o===i){ae=null;break}var C=o.sibling;if(C!==null){C.return=o.return,ae=C;break}ae=o.return}}var yA=Math.ceil,jc=me.ReactCurrentDispatcher,ep=me.ReactCurrentOwner,Un=me.ReactCurrentBatchConfig,ze=0,xt=null,yt=null,jt=0,Rn=0,sa=Oi(0),Ct=0,Fl=null,Us=0,zc=0,tp=0,Ul=null,mn=null,np=0,oa=1/0,ei=null,Bc=!1,rp=null,Fi=null,Wc=!1,Ui=null,$c=0,jl=0,ip=null,Hc=-1,qc=0;function un(){return ze&6?Je():Hc!==-1?Hc:Hc=Je()}function ji(i){return i.mode&1?ze&2&&jt!==0?jt&-jt:tA.transition!==null?(qc===0&&(qc=Rs()),qc):(i=Me,i!==0||(i=window.event,i=i===void 0?16:pl(i.type)),i):1}function or(i,o,l,h){if(50<jl)throw jl=0,ip=null,Error(t(185));Si(i,l,h),(!(ze&2)||i!==xt)&&(i===xt&&(!(ze&2)&&(zc|=l),Ct===4&&zi(i,jt)),gn(i,h),l===1&&ze===0&&!(o.mode&1)&&(oa=Je()+500,Ec&&Di()))}function gn(i,o){var l=i.callbackNode;Br(i,o);var h=As(i,i===xt?jt:0);if(h===0)l!==null&&ul(l),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(l!=null&&ul(l),o===1)i.tag===0?eA(Cv.bind(null,i)):cy(Cv.bind(null,i)),YC(function(){!(ze&6)&&Di()}),l=null;else{switch(Ai(h)){case 1:l=Ss;break;case 4:l=wi;break;case 16:l=On;break;case 536870912:l=qu;break;default:l=On}l=xv(l,Sv.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function Sv(i,o){if(Hc=-1,qc=0,ze&6)throw Error(t(327));var l=i.callbackNode;if(aa()&&i.callbackNode!==l)return null;var h=As(i,i===xt?jt:0);if(h===0)return null;if(h&30||h&i.expiredLanes||o)o=Gc(i,h);else{o=h;var p=ze;ze|=2;var _=Rv();(xt!==i||jt!==o)&&(ei=null,oa=Je()+500,zs(i,o));do try{wA();break}catch(C){Av(i,C)}while(!0);Tf(),jc.current=_,ze=p,yt!==null?o=0:(xt=null,jt=0,o=Ct)}if(o!==0){if(o===2&&(p=Tn(i),p!==0&&(h=p,o=sp(i,p))),o===1)throw l=Fl,zs(i,0),zi(i,h),gn(i,Je()),l;if(o===6)zi(i,h);else{if(p=i.current.alternate,!(h&30)&&!vA(p)&&(o=Gc(i,h),o===2&&(_=Tn(i),_!==0&&(h=_,o=sp(i,_))),o===1))throw l=Fl,zs(i,0),zi(i,h),gn(i,Je()),l;switch(i.finishedWork=p,i.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:Bs(i,mn,ei);break;case 3:if(zi(i,h),(h&130023424)===h&&(o=np+500-Je(),10<o)){if(As(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){un(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=hf(Bs.bind(null,i,mn,ei),o);break}Bs(i,mn,ei);break;case 4:if(zi(i,h),(h&4194240)===h)break;for(o=i.eventTimes,p=-1;0<h;){var E=31-on(h);_=1<<E,E=o[E],E>p&&(p=E),h&=~_}if(h=p,h=Je()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*yA(h/1960))-h,10<h){i.timeoutHandle=hf(Bs.bind(null,i,mn,ei),h);break}Bs(i,mn,ei);break;case 5:Bs(i,mn,ei);break;default:throw Error(t(329))}}}return gn(i,Je()),i.callbackNode===l?Sv.bind(null,i):null}function sp(i,o){var l=Ul;return i.current.memoizedState.isDehydrated&&(zs(i,o).flags|=256),i=Gc(i,o),i!==2&&(o=mn,mn=l,o!==null&&op(o)),i}function op(i){mn===null?mn=i:mn.push.apply(mn,i)}function vA(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],_=p.getSnapshot;p=p.value;try{if(!tr(_(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function zi(i,o){for(o&=~tp,o&=~zc,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-on(o),h=1<<l;i[l]=-1,o&=~h}}function Cv(i){if(ze&6)throw Error(t(327));aa();var o=As(i,0);if(!(o&1))return gn(i,Je()),null;var l=Gc(i,o);if(i.tag!==0&&l===2){var h=Tn(i);h!==0&&(o=h,l=sp(i,h))}if(l===1)throw l=Fl,zs(i,0),zi(i,o),gn(i,Je()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,Bs(i,mn,ei),gn(i,Je()),null}function ap(i,o){var l=ze;ze|=1;try{return i(o)}finally{ze=l,ze===0&&(oa=Je()+500,Ec&&Di())}}function js(i){Ui!==null&&Ui.tag===0&&!(ze&6)&&aa();var o=ze;ze|=1;var l=Un.transition,h=Me;try{if(Un.transition=null,Me=1,i)return i()}finally{Me=h,Un.transition=l,ze=o,!(ze&6)&&Di()}}function lp(){Rn=sa.current,tt(sa)}function zs(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,QC(l)),yt!==null)for(l=yt.return;l!==null;){var h=l;switch(_f(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&yc();break;case 3:na(),tt(dn),tt(Kt),Nf();break;case 5:kf(h);break;case 4:na();break;case 13:tt(ut);break;case 19:tt(ut);break;case 10:If(h.type._context);break;case 22:case 23:lp()}l=l.return}if(xt=i,yt=i=Bi(i.current,null),jt=Rn=o,Ct=0,Fl=null,tp=zc=Us=0,mn=Ul=null,Ls!==null){for(o=0;o<Ls.length;o++)if(l=Ls[o],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,_=l.pending;if(_!==null){var E=_.next;_.next=p,h.next=E}l.pending=h}Ls=null}return i}function Av(i,o){do{var l=yt;try{if(Tf(),Nc.current=Dc,bc){for(var h=ct.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}bc=!1}if(Fs=0,Ot=St=ct=null,Ol=!1,xl=0,ep.current=null,l===null||l.return===null){Ct=1,Fl=o,yt=null;break}e:{var _=i,E=l.return,C=l,k=o;if(o=jt,C.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var j=k,K=C,Q=K.tag;if(!(K.mode&1)&&(Q===0||Q===11||Q===15)){var G=K.alternate;G?(K.updateQueue=G.updateQueue,K.memoizedState=G.memoizedState,K.lanes=G.lanes):(K.updateQueue=null,K.memoizedState=null)}var te=Xy(E);if(te!==null){te.flags&=-257,Jy(te,E,C,_,o),te.mode&1&&Yy(_,j,o),o=te,k=j;var le=o.updateQueue;if(le===null){var ce=new Set;ce.add(k),o.updateQueue=ce}else le.add(k);break e}else{if(!(o&1)){Yy(_,j,o),up();break e}k=Error(t(426))}}else if(lt&&C.mode&1){var mt=Xy(E);if(mt!==null){!(mt.flags&65536)&&(mt.flags|=256),Jy(mt,E,C,_,o),Ef(ra(k,C));break e}}_=k=ra(k,C),Ct!==4&&(Ct=2),Ul===null?Ul=[_]:Ul.push(_),_=E;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var V=Ky(_,k,o);wy(_,V);break e;case 1:C=k;var b=_.type,F=_.stateNode;if(!(_.flags&128)&&(typeof b.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Fi===null||!Fi.has(F)))){_.flags|=65536,o&=-o,_.lanes|=o;var X=Qy(_,C,o);wy(_,X);break e}}_=_.return}while(_!==null)}Pv(l)}catch(he){o=he,yt===l&&l!==null&&(yt=l=l.return);continue}break}while(!0)}function Rv(){var i=jc.current;return jc.current=Dc,i===null?Dc:i}function up(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),xt===null||!(Us&268435455)&&!(zc&268435455)||zi(xt,jt)}function Gc(i,o){var l=ze;ze|=2;var h=Rv();(xt!==i||jt!==o)&&(ei=null,zs(i,o));do try{EA();break}catch(p){Av(i,p)}while(!0);if(Tf(),ze=l,jc.current=h,yt!==null)throw Error(t(261));return xt=null,jt=0,Ct}function EA(){for(;yt!==null;)kv(yt)}function wA(){for(;yt!==null&&!$u();)kv(yt)}function kv(i){var o=Ov(i.alternate,i,Rn);i.memoizedProps=i.pendingProps,o===null?Pv(i):yt=o,ep.current=null}function Pv(i){var o=i;do{var l=o.alternate;if(i=o.return,o.flags&32768){if(l=pA(l,o),l!==null){l.flags&=32767,yt=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Ct=6,yt=null;return}}else if(l=fA(l,o,Rn),l!==null){yt=l;return}if(o=o.sibling,o!==null){yt=o;return}yt=o=i}while(o!==null);Ct===0&&(Ct=5)}function Bs(i,o,l){var h=Me,p=Un.transition;try{Un.transition=null,Me=1,TA(i,o,l,h)}finally{Un.transition=p,Me=h}return null}function TA(i,o,l,h){do aa();while(Ui!==null);if(ze&6)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(Ye(i,_),i===xt&&(yt=xt=null,jt=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||Wc||(Wc=!0,xv(On,function(){return aa(),null})),_=(l.flags&15990)!==0,l.subtreeFlags&15990||_){_=Un.transition,Un.transition=null;var E=Me;Me=1;var C=ze;ze|=4,ep.current=null,gA(i,l),vv(l,i),BC(uf),ki=!!lf,uf=lf=null,i.current=l,_A(l),Hd(),ze=C,Me=E,Un.transition=_}else i.current=l;if(Wc&&(Wc=!1,Ui=i,$c=p),_=i.pendingLanes,_===0&&(Fi=null),Gu(l.stateNode),gn(i,Je()),o!==null)for(h=i.onRecoverableError,l=0;l<o.length;l++)p=o[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(Bc)throw Bc=!1,i=rp,rp=null,i;return $c&1&&i.tag!==0&&aa(),_=i.pendingLanes,_&1?i===ip?jl++:(jl=0,ip=i):jl=0,Di(),null}function aa(){if(Ui!==null){var i=Ai($c),o=Un.transition,l=Me;try{if(Un.transition=null,Me=16>i?16:i,Ui===null)var h=!1;else{if(i=Ui,Ui=null,$c=0,ze&6)throw Error(t(331));var p=ze;for(ze|=4,ae=i.current;ae!==null;){var _=ae,E=_.child;if(ae.flags&16){var C=_.deletions;if(C!==null){for(var k=0;k<C.length;k++){var j=C[k];for(ae=j;ae!==null;){var K=ae;switch(K.tag){case 0:case 11:case 15:Vl(8,K,_)}var Q=K.child;if(Q!==null)Q.return=K,ae=Q;else for(;ae!==null;){K=ae;var G=K.sibling,te=K.return;if(pv(K),K===j){ae=null;break}if(G!==null){G.return=te,ae=G;break}ae=te}}}var le=_.alternate;if(le!==null){var ce=le.child;if(ce!==null){le.child=null;do{var mt=ce.sibling;ce.sibling=null,ce=mt}while(ce!==null)}}ae=_}}if(_.subtreeFlags&2064&&E!==null)E.return=_,ae=E;else e:for(;ae!==null;){if(_=ae,_.flags&2048)switch(_.tag){case 0:case 11:case 15:Vl(9,_,_.return)}var V=_.sibling;if(V!==null){V.return=_.return,ae=V;break e}ae=_.return}}var b=i.current;for(ae=b;ae!==null;){E=ae;var F=E.child;if(E.subtreeFlags&2064&&F!==null)F.return=E,ae=F;else e:for(E=b;ae!==null;){if(C=ae,C.flags&2048)try{switch(C.tag){case 0:case 11:case 15:Uc(9,C)}}catch(he){dt(C,C.return,he)}if(C===E){ae=null;break e}var X=C.sibling;if(X!==null){X.return=C.return,ae=X;break e}ae=C.return}}if(ze=p,Di(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(Cs,i)}catch{}h=!0}return h}finally{Me=l,Un.transition=o}}return!1}function Nv(i,o,l){o=ra(l,o),o=Ky(i,o,1),i=Li(i,o,1),o=un(),i!==null&&(Si(i,1,o),gn(i,o))}function dt(i,o,l){if(i.tag===3)Nv(i,i,l);else for(;o!==null;){if(o.tag===3){Nv(o,i,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Fi===null||!Fi.has(h))){i=ra(l,i),i=Qy(o,i,1),o=Li(o,i,1),i=un(),o!==null&&(Si(o,1,i),gn(o,i));break}}o=o.return}}function IA(i,o,l){var h=i.pingCache;h!==null&&h.delete(o),o=un(),i.pingedLanes|=i.suspendedLanes&l,xt===i&&(jt&l)===l&&(Ct===4||Ct===3&&(jt&130023424)===jt&&500>Je()-np?zs(i,0):tp|=l),gn(i,o)}function bv(i,o){o===0&&(i.mode&1?(o=No,No<<=1,!(No&130023424)&&(No=4194304)):o=1);var l=un();i=Xr(i,o),i!==null&&(Si(i,o,l),gn(i,l))}function SA(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),bv(i,l)}function CA(i,o){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),bv(i,l)}var Ov;Ov=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||dn.current)pn=!0;else{if(!(i.lanes&l)&&!(o.flags&128))return pn=!1,dA(i,o,l);pn=!!(i.flags&131072)}else pn=!1,lt&&o.flags&1048576&&hy(o,Tc,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;Vc(i,o),i=o.pendingProps;var p=Qo(o,Kt.current);ta(o,l),p=xf(null,o,h,i,p,l);var _=Df();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,fn(h)?(_=!0,vc(o)):_=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Af(o),p.updater=Mc,o.stateNode=p,p._reactInternals=o,jf(o,h,i,l),o=$f(null,o,h,!0,_,l)):(o.tag=0,lt&&_&&gf(o),ln(null,o,p,l),o=o.child),o;case 16:h=o.elementType;e:{switch(Vc(i,o),i=o.pendingProps,p=h._init,h=p(h._payload),o.type=h,p=o.tag=RA(h),i=rr(h,i),p){case 0:o=Wf(null,o,h,i,l);break e;case 1:o=iv(null,o,h,i,l);break e;case 11:o=Zy(null,o,h,i,l);break e;case 14:o=ev(null,o,h,rr(h.type,i),l);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:rr(h,p),Wf(i,o,h,p,l);case 1:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:rr(h,p),iv(i,o,h,p,l);case 3:e:{if(sv(o),i===null)throw Error(t(387));h=o.pendingProps,_=o.memoizedState,p=_.element,Ey(i,o),kc(o,h,null,l);var E=o.memoizedState;if(h=E.element,_.isDehydrated)if(_={element:h,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){p=ra(Error(t(423)),o),o=ov(i,o,h,l,p);break e}else if(h!==p){p=ra(Error(t(424)),o),o=ov(i,o,h,l,p);break e}else for(An=bi(o.stateNode.containerInfo.firstChild),Cn=o,lt=!0,nr=null,l=yy(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Jo(),h===p){o=Zr(i,o,l);break e}ln(i,o,h,l)}o=o.child}return o;case 5:return Iy(o),i===null&&vf(o),h=o.type,p=o.pendingProps,_=i!==null?i.memoizedProps:null,E=p.children,cf(h,p)?E=null:_!==null&&cf(h,_)&&(o.flags|=32),rv(i,o),ln(i,o,E,l),o.child;case 6:return i===null&&vf(o),null;case 13:return av(i,o,l);case 4:return Rf(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=Zo(o,null,h,l):ln(i,o,h,l),o.child;case 11:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:rr(h,p),Zy(i,o,h,p,l);case 7:return ln(i,o,o.pendingProps,l),o.child;case 8:return ln(i,o,o.pendingProps.children,l),o.child;case 12:return ln(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,p=o.pendingProps,_=o.memoizedProps,E=p.value,Ze(Cc,h._currentValue),h._currentValue=E,_!==null)if(tr(_.value,E)){if(_.children===p.children&&!dn.current){o=Zr(i,o,l);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var C=_.dependencies;if(C!==null){E=_.child;for(var k=C.firstContext;k!==null;){if(k.context===h){if(_.tag===1){k=Jr(-1,l&-l),k.tag=2;var j=_.updateQueue;if(j!==null){j=j.shared;var K=j.pending;K===null?k.next=k:(k.next=K.next,K.next=k),j.pending=k}}_.lanes|=l,k=_.alternate,k!==null&&(k.lanes|=l),Sf(_.return,l,o),C.lanes|=l;break}k=k.next}}else if(_.tag===10)E=_.type===o.type?null:_.child;else if(_.tag===18){if(E=_.return,E===null)throw Error(t(341));E.lanes|=l,C=E.alternate,C!==null&&(C.lanes|=l),Sf(E,l,o),E=_.sibling}else E=_.child;if(E!==null)E.return=_;else for(E=_;E!==null;){if(E===o){E=null;break}if(_=E.sibling,_!==null){_.return=E.return,E=_;break}E=E.return}_=E}ln(i,o,p.children,l),o=o.child}return o;case 9:return p=o.type,h=o.pendingProps.children,ta(o,l),p=Vn(p),h=h(p),o.flags|=1,ln(i,o,h,l),o.child;case 14:return h=o.type,p=rr(h,o.pendingProps),p=rr(h.type,p),ev(i,o,h,p,l);case 15:return tv(i,o,o.type,o.pendingProps,l);case 17:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:rr(h,p),Vc(i,o),o.tag=1,fn(h)?(i=!0,vc(o)):i=!1,ta(o,l),qy(o,h,p),jf(o,h,p,l),$f(null,o,h,!0,i,l);case 19:return uv(i,o,l);case 22:return nv(i,o,l)}throw Error(t(156,o.tag))};function xv(i,o){return ko(i,o)}function AA(i,o,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(i,o,l,h){return new AA(i,o,l,h)}function cp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function RA(i){if(typeof i=="function")return cp(i)?1:0;if(i!=null){if(i=i.$$typeof,i===D)return 11;if(i===qt)return 14}return 2}function Bi(i,o){var l=i.alternate;return l===null?(l=jn(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Kc(i,o,l,h,p,_){var E=2;if(h=i,typeof i=="function")cp(i)&&(E=1);else if(typeof i=="string")E=5;else e:switch(i){case N:return Ws(l.children,p,_,o);case S:E=8,p|=8;break;case A:return i=jn(12,l,o,p|2),i.elementType=A,i.lanes=_,i;case R:return i=jn(13,l,o,p),i.elementType=R,i.lanes=_,i;case ft:return i=jn(19,l,o,p),i.elementType=ft,i.lanes=_,i;case Ke:return Qc(l,p,_,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case P:E=10;break e;case x:E=9;break e;case D:E=11;break e;case qt:E=14;break e;case Gt:E=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=jn(E,l,o,p),o.elementType=i,o.type=h,o.lanes=_,o}function Ws(i,o,l,h){return i=jn(7,i,h,o),i.lanes=l,i}function Qc(i,o,l,h){return i=jn(22,i,h,o),i.elementType=Ke,i.lanes=l,i.stateNode={isHidden:!1},i}function hp(i,o,l){return i=jn(6,i,null,o),i.lanes=l,i}function dp(i,o,l){return o=jn(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function kA(i,o,l,h,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ii(0),this.expirationTimes=Ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ii(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function fp(i,o,l,h,p,_,E,C,k){return i=new kA(i,o,l,C,k),o===1?(o=1,_===!0&&(o|=8)):o=0,_=jn(3,null,null,o),i.current=_,_.stateNode=i,_.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Af(_),i}function PA(i,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:h==null?null:""+h,children:i,containerInfo:o,implementation:l}}function Dv(i){if(!i)return xi;i=i._reactInternals;e:{if(Kn(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(fn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(fn(l))return ly(i,l,o)}return o}function Mv(i,o,l,h,p,_,E,C,k){return i=fp(l,h,!0,i,p,_,E,C,k),i.context=Dv(null),l=i.current,h=un(),p=ji(l),_=Jr(h,p),_.callback=o??null,Li(l,_,p),i.current.lanes=p,Si(i,p,h),gn(i,h),i}function Yc(i,o,l,h){var p=o.current,_=un(),E=ji(p);return l=Dv(l),o.context===null?o.context=l:o.pendingContext=l,o=Jr(_,E),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=Li(p,o,E),i!==null&&(or(i,p,E,_),Rc(i,p,E)),E}function Xc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Lv(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function pp(i,o){Lv(i,o),(i=i.alternate)&&Lv(i,o)}function NA(){return null}var Vv=typeof reportError=="function"?reportError:function(i){console.error(i)};function mp(i){this._internalRoot=i}Jc.prototype.render=mp.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));Yc(i,o,null,null)},Jc.prototype.unmount=mp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;js(function(){Yc(null,i,null,null)}),o[Gr]=null}};function Jc(i){this._internalRoot=i}Jc.prototype.unstable_scheduleHydration=function(i){if(i){var o=Ju();i={blockedOn:null,target:i,priority:o};for(var l=0;l<_r.length&&o!==0&&o<_r[l].priority;l++);_r.splice(l,0,i),l===0&&tc(i)}};function gp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Zc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Fv(){}function bA(i,o,l,h,p){if(p){if(typeof h=="function"){var _=h;h=function(){var j=Xc(E);_.call(j)}}var E=Mv(o,h,i,0,null,!1,!1,"",Fv);return i._reactRootContainer=E,i[Gr]=E.current,Sl(i.nodeType===8?i.parentNode:i),js(),E}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var C=h;h=function(){var j=Xc(k);C.call(j)}}var k=fp(i,0,!1,null,null,!1,!1,"",Fv);return i._reactRootContainer=k,i[Gr]=k.current,Sl(i.nodeType===8?i.parentNode:i),js(function(){Yc(o,k,l,h)}),k}function eh(i,o,l,h,p){var _=l._reactRootContainer;if(_){var E=_;if(typeof p=="function"){var C=p;p=function(){var k=Xc(E);C.call(k)}}Yc(o,E,i,p)}else E=bA(l,o,i,p,h);return Xc(E)}Yu=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=Ti(o.pendingLanes);l!==0&&(Ci(o,l|1),gn(o,Je()),!(ze&6)&&(oa=Je()+500,Di()))}break;case 13:js(function(){var h=Xr(i,1);if(h!==null){var p=un();or(h,i,1,p)}}),pp(i,1)}},bo=function(i){if(i.tag===13){var o=Xr(i,134217728);if(o!==null){var l=un();or(o,i,134217728,l)}pp(i,134217728)}},Xu=function(i){if(i.tag===13){var o=ji(i),l=Xr(i,o);if(l!==null){var h=un();or(l,i,o,h)}pp(i,o)}},Ju=function(){return Me},Zu=function(i,o){var l=Me;try{return Me=i,o()}finally{Me=l}},To=function(i,o,l){switch(o){case"input":if(Qa(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==i&&h.form===i.form){var p=_c(h);if(!p)throw Error(t(90));go(h),Qa(h,p)}}}break;case"textarea":Eo(i,l);break;case"select":o=l.value,o!=null&&Ur(i,!!l.multiple,o,!1)}},Es=ap,sl=js;var OA={usingClientEntryPoint:!1,Events:[Rl,Go,_c,mr,il,ap]},zl={findFiberByHostInstance:Os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xA={bundleType:zl.bundleType,version:zl.version,rendererPackageName:zl.rendererPackageName,rendererConfig:zl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:me.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ll(i),i===null?null:i.stateNode},findFiberByHostInstance:zl.findFiberByHostInstance||NA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var th=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!th.isDisabled&&th.supportsFiber)try{Cs=th.inject(xA),wn=th}catch{}}return _n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OA,_n.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gp(o))throw Error(t(200));return PA(i,o,null,l)},_n.createRoot=function(i,o){if(!gp(i))throw Error(t(299));var l=!1,h="",p=Vv;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=fp(i,1,!1,null,null,l,!1,h,p),i[Gr]=o.current,Sl(i.nodeType===8?i.parentNode:i),new mp(o)},_n.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=ll(o),i=i===null?null:i.stateNode,i},_n.flushSync=function(i){return js(i)},_n.hydrate=function(i,o,l){if(!Zc(o))throw Error(t(200));return eh(null,i,o,!0,l)},_n.hydrateRoot=function(i,o,l){if(!gp(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,_="",E=Vv;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),o=Mv(o,null,i,1,l??null,p,!1,_,E),i[Gr]=o.current,Sl(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new Jc(o)},_n.render=function(i,o,l){if(!Zc(o))throw Error(t(200));return eh(null,i,o,!1,l)},_n.unmountComponentAtNode=function(i){if(!Zc(i))throw Error(t(40));return i._reactRootContainer?(js(function(){eh(null,null,i,!1,function(){i._reactRootContainer=null,i[Gr]=null})}),!0):!1},_n.unstable_batchedUpdates=ap,_n.unstable_renderSubtreeIntoContainer=function(i,o,l,h){if(!Zc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return eh(i,o,l,!1,h)},_n.version="18.3.1-next-f1338f8080-20240426",_n}var qv;function zA(){if(qv)return vp.exports;qv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),vp.exports=jA(),vp.exports}var Gv;function BA(){if(Gv)return nh;Gv=1;var n=zA();return nh.createRoot=n.createRoot,nh.hydrateRoot=n.hydrateRoot,nh}var WA=BA();const $A="/assets/ai-CXB51GVD.png";var tT={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Kv=si.createContext&&si.createContext(tT),HA=["attr","size","title"];function qA(n,e){if(n==null)return{};var t=GA(n,e),r,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(s=0;s<a.length;s++)r=a[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function GA(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function Ph(){return Ph=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Ph.apply(this,arguments)}function Qv(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,r)}return t}function Nh(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Qv(Object(t),!0).forEach(function(r){KA(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Qv(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function KA(n,e,t){return e=QA(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function QA(n){var e=YA(n,"string");return typeof e=="symbol"?e:e+""}function YA(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function nT(n){return n&&n.map((e,t)=>si.createElement(e.tag,Nh({key:t},e.attr),nT(e.child)))}function XA(n){return e=>si.createElement(JA,Ph({attr:Nh({},n.attr)},e),nT(n.child))}function JA(n){var e=t=>{var{attr:r,size:s,title:a}=n,u=qA(n,HA),d=s||t.size||"1em",f;return t.className&&(f=t.className),n.className&&(f=(f?f+" ":"")+n.className),si.createElement("svg",Ph({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,u,{className:f,style:Nh(Nh({color:n.color||t.color},t.style),n.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),a&&si.createElement("title",null,a),n.children)};return Kv!==void 0?si.createElement(Kv.Consumer,null,t=>e(t)):e(tT)}function ZA(n){return XA({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Microphone_On"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M11.989,2.065a4.507,4.507,0,0,0-4.5,4.5v5.76a4.5,4.5,0,0,0,9,0V6.565A4.507,4.507,0,0,0,11.989,2.065Zm0,13.76a3.5,3.5,0,0,1-3.5-3.5V6.565a3.5,3.5,0,0,1,6.94-.62h-1.87a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h1.93v2h-1.93a.5.5,0,0,0-.5.5.508.508,0,0,0,.5.5h1.93v2h-1.94a.508.508,0,0,0-.5.5.515.515,0,0,0,.5.5h1.88A3.492,3.492,0,0,1,11.989,15.825Z"},child:[]},{tag:"path",attr:{d:"M12.489,18.925v2.01h3.5a.5.5,0,0,1,0,1h-8a.5.5,0,0,1,0-1h3.5v-1.99a6.055,6.055,0,0,1-2.74-.88,6.291,6.291,0,0,1-2.97-5.14c-.03-1.04,0-2.09,0-3.13a.5.5,0,0,1,1,0c0,1.04-.03,2.09,0,3.13A5.212,5.212,0,0,0,17.2,12.7c.01-.96,0-1.93,0-2.9a.5.5,0,0,1,1,0,26.322,26.322,0,0,1-.08,3.97A6.235,6.235,0,0,1,12.489,18.925Z"},child:[]}]}]}]})(n)}const eR=()=>{};var Yv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=function(n,e){if(!n)throw La(e)},La=function(n){return new Error("Firebase Database ("+rT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},tR=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],d=n[t++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},tg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,d=u?n[s+1]:0,f=s+2<n.length,g=f?n[s+2]:0,v=a>>2,w=(a&3)<<4|d>>4;let I=(d&15)<<2|g>>6,O=g&63;f||(O=64,u||(I=64)),r.push(t[v],t[w],t[I],t[O])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(iT(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):tR(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],d=s<n.length?t[n.charAt(s)]:0;++s;const g=s<n.length?t[n.charAt(s)]:64;++s;const w=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||d==null||g==null||w==null)throw new nR;const I=a<<2|d>>4;if(r.push(I),g!==64){const O=d<<4&240|g>>2;if(r.push(O),w!==64){const U=g<<6&192|w;r.push(U)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class nR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sT=function(n){const e=iT(n);return tg.encodeByteArray(e,!0)},bh=function(n){return sT(n).replace(/\./g,"")},Oh=function(n){try{return tg.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR(n){return oT(void 0,n)}function oT(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!iR(t)||(n[t]=oT(n[t],e[t]));return n}function iR(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=()=>sR().__FIREBASE_DEFAULTS__,aR=()=>{if(typeof process>"u"||typeof Yv>"u")return;const n=Yv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Oh(n[1]);return e&&JSON.parse(e)},hd=()=>{try{return eR()||oR()||aR()||lR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},aT=n=>{var e,t;return(t=(e=hd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},lT=n=>{const e=aT(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},uT=()=>{var n;return(n=hd())===null||n===void 0?void 0:n.config},cT=n=>{var e;return(e=hd())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[bh(JSON.stringify(t)),bh(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ng(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rn())}function uR(){var n;const e=(n=hd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function dT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dR(){const n=rn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function fT(){return rT.NODE_ADMIN===!0}function fR(){return!uR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pR(){try{return typeof indexedDB=="object"}catch{return!1}}function mR(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR="FirebaseError";class gi extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=gR,Object.setPrototypeOf(this,gi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cu.prototype.create)}}class Cu{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?_R(a,r):"Error",d=`${this.serviceName}: ${u} (${s}).`;return new gi(s,d,r)}}function _R(n,e){return n.replace(yR,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const yR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(n){return JSON.parse(n)}function Wt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=function(n){let e={},t={},r={},s="";try{const a=n.split(".");e=cu(Oh(a[0])||""),t=cu(Oh(a[1])||""),s=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},vR=function(n){const e=pT(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ER=function(n){const e=pT(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Sa(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Yp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function xh(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function is(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],u=e[s];if(Xv(a)&&Xv(u)){if(!is(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Xv(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let w=0;w<16;w++)r[w]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let w=0;w<16;w++)r[w]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let w=16;w<80;w++){const I=r[w-3]^r[w-8]^r[w-14]^r[w-16];r[w]=(I<<1|I>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],u=this.chain_[2],d=this.chain_[3],f=this.chain_[4],g,v;for(let w=0;w<80;w++){w<40?w<20?(g=d^a&(u^d),v=1518500249):(g=a^u^d,v=1859775393):w<60?(g=a&u|d&(a|u),v=2400959708):(g=a^u^d,v=3395469782);const I=(s<<5|s>>>27)+g+f+v+r[w]&4294967295;f=d,d=u,u=(a<<30|a>>>2)&4294967295,a=s,s=I}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const a=this.buf_;let u=this.inbuf_;for(;s<t;){if(u===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(a[u]=e.charCodeAt(s),++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}else for(;s<t;)if(a[u]=e[s],++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[s]>>a&255,++r;return e}}function TR(n,e){const t=new IR(n,e);return t.subscribe.bind(t)}class IR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");SR(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Tp),s.error===void 0&&(s.error=Tp),s.complete===void 0&&(s.complete=Tp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SR(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Tp(){}function rg(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const a=s-55296;r++,ee(r<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(r)-56320;s=65536+(a<<10)+u}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},fd=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(n){return n&&n._delegate?n._delegate:n}class ss{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new dd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kR(e))try{this.getOrInitializeService({instanceIdentifier:$s})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=$s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$s){return this.instances.has(e)}getOptions(e=$s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RR(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$s){return this.component?this.component.multipleInstances?e:$s:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RR(n){return n===$s?void 0:n}function kR(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new AR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Oe||(Oe={}));const NR={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},bR=Oe.INFO,OR={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},xR=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=OR[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pd{constructor(e){this.name=e,this._logLevel=bR,this._logHandler=xR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const DR=(n,e)=>e.some(t=>n instanceof t);let Jv,Zv;function MR(){return Jv||(Jv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LR(){return Zv||(Zv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mT=new WeakMap,Xp=new WeakMap,gT=new WeakMap,Ip=new WeakMap,ig=new WeakMap;function VR(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Xi(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&mT.set(t,n)}).catch(()=>{}),ig.set(e,n),e}function FR(n){if(Xp.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});Xp.set(n,e)}let Jp={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||gT.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Xi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function UR(n){Jp=n(Jp)}function jR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Sp(this),e,...t);return gT.set(r,e.sort?e.sort():[e]),Xi(r)}:LR().includes(n)?function(...e){return n.apply(Sp(this),e),Xi(mT.get(this))}:function(...e){return Xi(n.apply(Sp(this),e))}}function zR(n){return typeof n=="function"?jR(n):(n instanceof IDBTransaction&&FR(n),DR(n,MR())?new Proxy(n,Jp):n)}function Xi(n){if(n instanceof IDBRequest)return VR(n);if(Ip.has(n))return Ip.get(n);const e=zR(n);return e!==n&&(Ip.set(n,e),ig.set(e,n)),e}const Sp=n=>ig.get(n);function BR(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),d=Xi(u);return r&&u.addEventListener("upgradeneeded",f=>{r(Xi(u.result),f.oldVersion,f.newVersion,Xi(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const WR=["get","getKey","getAll","getAllKeys","count"],$R=["put","add","delete","clear"],Cp=new Map;function e0(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Cp.get(e))return Cp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=$R.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||WR.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,s?"readwrite":"readonly");let g=f.store;return r&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),s&&f.done]))[0]};return Cp.set(e,a),a}UR(n=>({...n,get:(e,t,r)=>e0(e,t)||n.get(e,t,r),has:(e,t)=>!!e0(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(qR(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function qR(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zp="@firebase/app",t0="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new pd("@firebase/app"),GR="@firebase/app-compat",KR="@firebase/analytics-compat",QR="@firebase/analytics",YR="@firebase/app-check-compat",XR="@firebase/app-check",JR="@firebase/auth",ZR="@firebase/auth-compat",ek="@firebase/database",tk="@firebase/data-connect",nk="@firebase/database-compat",rk="@firebase/functions",ik="@firebase/functions-compat",sk="@firebase/installations",ok="@firebase/installations-compat",ak="@firebase/messaging",lk="@firebase/messaging-compat",uk="@firebase/performance",ck="@firebase/performance-compat",hk="@firebase/remote-config",dk="@firebase/remote-config-compat",fk="@firebase/storage",pk="@firebase/storage-compat",mk="@firebase/firestore",gk="@firebase/vertexai",_k="@firebase/firestore-compat",yk="firebase",vk="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="[DEFAULT]",Ek={[Zp]:"fire-core",[GR]:"fire-core-compat",[QR]:"fire-analytics",[KR]:"fire-analytics-compat",[XR]:"fire-app-check",[YR]:"fire-app-check-compat",[JR]:"fire-auth",[ZR]:"fire-auth-compat",[ek]:"fire-rtdb",[tk]:"fire-data-connect",[nk]:"fire-rtdb-compat",[rk]:"fire-fn",[ik]:"fire-fn-compat",[sk]:"fire-iid",[ok]:"fire-iid-compat",[ak]:"fire-fcm",[lk]:"fire-fcm-compat",[uk]:"fire-perf",[ck]:"fire-perf-compat",[hk]:"fire-rc",[dk]:"fire-rc-compat",[fk]:"fire-gcs",[pk]:"fire-gcs-compat",[mk]:"fire-fst",[_k]:"fire-fst-compat",[gk]:"fire-vertex","fire-js":"fire-js",[yk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=new Map,wk=new Map,tm=new Map;function n0(n,e){try{n.container.addComponent(e)}catch(t){li.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Js(n){const e=n.name;if(tm.has(e))return li.debug(`There were multiple attempts to register component ${e}.`),!1;tm.set(e,n);for(const t of Dh.values())n0(t,n);for(const t of wk.values())n0(t,n);return!0}function md(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function zn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ji=new Cu("app","Firebase",Tk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ji.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=vk;function sg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:em,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ji.create("bad-app-name",{appName:String(s)});if(t||(t=uT()),!t)throw Ji.create("no-options");const a=Dh.get(s);if(a){if(is(t,a.options)&&is(r,a.config))return a;throw Ji.create("duplicate-app",{appName:s})}const u=new PR(s);for(const f of tm.values())u.addComponent(f);const d=new Ik(t,r,u);return Dh.set(s,d),d}function og(n=em){const e=Dh.get(n);if(!e&&n===em&&uT())return sg();if(!e)throw Ji.create("no-app",{appName:n});return e}function br(n,e,t){var r;let s=(r=Ek[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),li.warn(d.join(" "));return}Js(new ss(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk="firebase-heartbeat-database",Ck=1,hu="firebase-heartbeat-store";let Ap=null;function _T(){return Ap||(Ap=BR(Sk,Ck,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(hu)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ji.create("idb-open",{originalErrorMessage:n.message})})),Ap}async function Ak(n){try{const t=(await _T()).transaction(hu),r=await t.objectStore(hu).get(yT(n));return await t.done,r}catch(e){if(e instanceof gi)li.warn(e.message);else{const t=Ji.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});li.warn(t.message)}}}async function r0(n,e){try{const r=(await _T()).transaction(hu,"readwrite");await r.objectStore(hu).put(e,yT(n)),await r.done}catch(t){if(t instanceof gi)li.warn(t.message);else{const r=Ji.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});li.warn(r.message)}}}function yT(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=1024,kk=30;class Pk{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bk(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=i0();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>kk){const u=Ok(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){li.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=i0(),{heartbeatsToSend:r,unsentEntries:s}=Nk(this._heartbeatsCache.heartbeats),a=bh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return li.warn(t),""}}}function i0(){return new Date().toISOString().substring(0,10)}function Nk(n,e=Rk){const t=[];let r=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),s0(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),s0(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class bk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pR()?mR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ak(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return r0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return r0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function s0(n){return bh(JSON.stringify({version:2,heartbeats:n})).length}function Ok(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(n){Js(new ss("platform-logger",e=>new HR(e),"PRIVATE")),Js(new ss("heartbeat",e=>new Pk(e),"PRIVATE")),br(Zp,t0,n),br(Zp,t0,"esm2017"),br("fire-js","")}xk("");var o0={};const a0="@firebase/database",l0="1.0.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vT="";function Dk(n){vT=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Wt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:cu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return _i(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Mk(e)}}catch{}return new Lk},qs=ET("localStorage"),Vk=ET("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=new pd("@firebase/database"),Fk=function(){let n=1;return function(){return n++}}(),wT=function(n){const e=CR(n),t=new wR;t.update(e);const r=t.digest();return tg.encodeByteArray(r)},Au=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Au.apply(null,r):typeof r=="object"?e+=Wt(r):e+=r,e+=" "}return e};let Jl=null,u0=!0;const Uk=function(n,e){ee(!e,"Can't turn on custom loggers persistently."),_a.logLevel=Oe.VERBOSE,Jl=_a.log.bind(_a)},en=function(...n){if(u0===!0&&(u0=!1,Jl===null&&Vk.get("logging_enabled")===!0&&Uk()),Jl){const e=Au.apply(null,n);Jl(e)}},Ru=function(n){return function(...e){en(n,...e)}},nm=function(...n){const e="FIREBASE INTERNAL ERROR: "+Au(...n);_a.error(e)},ui=function(...n){const e=`FIREBASE FATAL ERROR: ${Au(...n)}`;throw _a.error(e),new Error(e)},En=function(...n){const e="FIREBASE WARNING: "+Au(...n);_a.warn(e)},jk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&En("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},TT=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},zk=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ca="[MIN_NAME]",Zs="[MAX_NAME]",Fa=function(n,e){if(n===e)return 0;if(n===Ca||e===Zs)return-1;if(e===Ca||n===Zs)return 1;{const t=c0(n),r=c0(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},Bk=function(n,e){return n===e?0:n<e?-1:1},Wl=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Wt(e))},ag=function(n){if(typeof n!="object"||n===null)return Wt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Wt(e[r]),t+=":",t+=ag(n[e[r]]);return t+="}",t},IT=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function Hn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ST=function(n){ee(!TT(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,a,u,d,f;n===0?(a=0,u=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=d+r,u=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-r-t))));const g=[];for(f=t;f;f-=1)g.push(u%2?1:0),u=Math.floor(u/2);for(f=e;f;f-=1)g.push(a%2?1:0),a=Math.floor(a/2);g.push(s?1:0),g.reverse();const v=g.join("");let w="";for(f=0;f<64;f+=8){let I=parseInt(v.substr(f,8),2).toString(16);I.length===1&&(I="0"+I),w=w+I}return w.toLowerCase()},Wk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$k=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Hk=new RegExp("^-?(0*)\\d{1,10}$"),qk=-2147483648,Gk=2147483647,c0=function(n){if(Hk.test(n)){const e=Number(n);if(e>=qk&&e<=Gk)return e}return null},Ua=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw En("Exception was thrown by user callback.",t),e},Math.floor(0))}},Kk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Zl=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,zn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){En(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(en("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',En(e)}}class ph{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ph.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg="5",CT="v",AT="s",RT="r",kT="f",PT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,NT="ls",bT="p",rm="ac",OT="websocket",xT="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,t,r,s,a=!1,u="",d=!1,f=!1,g=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=f,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Xk(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function MT(n,e,t){ee(typeof e=="string","typeof type must == string"),ee(typeof t=="object","typeof params must == object");let r;if(e===OT)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===xT)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Xk(n)&&(t.ns=n.namespace);const s=[];return Hn(t,(a,u)=>{s.push(a+"="+u)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(){this.counters_={}}incrementCounter(e,t=1){_i(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return rR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp={},kp={};function ug(n){const e=n.toString();return Rp[e]||(Rp[e]=new Jk),Rp[e]}function Zk(n,e){const t=n.toString();return kp[t]||(kp[t]=e()),kp[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Ua(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0="start",tP="close",nP="pLPCommand",rP="pRTLPCB",LT="id",VT="pw",FT="ser",iP="cb",sP="seg",oP="ts",aP="d",lP="dframe",UT=1870,jT=30,uP=UT-jT,cP=25e3,hP=3e4;class pa{constructor(e,t,r,s,a,u,d){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.transportSessionId=u,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ru(e),this.stats_=ug(t),this.urlFn=f=>(this.appCheckToken&&(f[rm]=this.appCheckToken),MT(t,xT,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new eP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(hP)),zk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new cg((...a)=>{const[u,d,f,g,v]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===h0)this.id=d,this.password=f;else if(u===tP)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,d]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[h0]="t",r[FT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[iP]=this.scriptTagHolder.uniqueCallbackIdentifier),r[CT]=lg,this.transportSessionId&&(r[AT]=this.transportSessionId),this.lastSessionId&&(r[NT]=this.lastSessionId),this.applicationId&&(r[bT]=this.applicationId),this.appCheckToken&&(r[rm]=this.appCheckToken),typeof location<"u"&&location.hostname&&PT.test(location.hostname)&&(r[RT]=kT);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){pa.forceAllow_=!0}static forceDisallow(){pa.forceDisallow_=!0}static isAvailable(){return pa.forceAllow_?!0:!pa.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Wk()&&!$k()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Wt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=sT(t),s=IT(r,uP);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[lP]="t",r[LT]=e,r[VT]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Wt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class cg{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Fk(),window[nP+this.uniqueCallbackIdentifier]=e,window[rP+this.uniqueCallbackIdentifier]=t,this.myIFrame=cg.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(d){en("frame writing exception"),d.stack&&en(d.stack),en(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||en("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[LT]=this.myID,e[VT]=this.myPW,e[FT]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+jT+r.length<=UT;){const u=this.pendingSegs.shift();r=r+"&"+sP+s+"="+u.seg+"&"+oP+s+"="+u.ts+"&"+aP+s+"="+u.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(cP)),a=()=>{clearTimeout(s),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{en("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=16384,fP=45e3;let Mh=null;typeof MozWebSocket<"u"?Mh=MozWebSocket:typeof WebSocket<"u"&&(Mh=WebSocket);class ar{constructor(e,t,r,s,a,u,d){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ru(this.connId),this.stats_=ug(t),this.connURL=ar.connectionURL_(t,u,d,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,a){const u={};return u[CT]=lg,typeof location<"u"&&location.hostname&&PT.test(location.hostname)&&(u[RT]=kT),t&&(u[AT]=t),r&&(u[NT]=r),s&&(u[rm]=s),a&&(u[bT]=a),MT(e,OT,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qs.set("previous_websocket_failure",!0);try{let r;fT(),this.mySock=new Mh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ar.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Mh!==null&&!ar.forceDisallow_}static previouslyFailed(){return qs.isInMemoryStorage||qs.get("previous_websocket_failure")===!0}markConnectionHealthy(){qs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=cu(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ee(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Wt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=IT(t,dP);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(fP))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ar.responsesRequiredToBeHealthy=2;ar.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{static get ALL_TRANSPORTS(){return[pa,ar]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ar&&ar.isAvailable();let r=t&&!ar.previouslyFailed();if(e.webSocketOnly&&(t||En("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ar];else{const s=this.transports_=[];for(const a of du.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);du.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}du.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=6e4,mP=5e3,gP=10*1024,_P=100*1024,Pp="t",d0="d",yP="s",f0="r",vP="e",p0="o",m0="a",g0="n",_0="p",EP="h";class wP{constructor(e,t,r,s,a,u,d,f,g,v){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=u,this.onReady_=d,this.onDisconnect_=f,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ru("c:"+this.id+":"),this.transportManager_=new du(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Zl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>_P?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>gP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pp in e){const t=e[Pp];t===m0?this.upgradeIfSecondaryHealthy_():t===f0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===p0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Wl("t",e),r=Wl("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:_0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:m0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:g0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Wl("t",e),r=Wl("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Wl(Pp,e);if(d0 in e){const r=e[d0];if(t===EP){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===g0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===yP?this.onConnectionShutdown_(r):t===f0?this.onReset_(r):t===vP?nm("Server Error: "+r):t===p0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):nm("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),lg!==r&&En("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Zl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(pP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Zl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(mP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:_0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e){this.allowedEvents_=e,this.listeners_={},ee(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===t&&(!r||r===s[a].context)){s.splice(a,1);return}}validateEventType_(e){ee(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh extends BT{static getInstance(){return new Lh}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ng()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ee(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=32,v0=768;class ot{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Qe(){return new ot("")}function xe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function os(n){return n.pieces_.length-n.pieceNum_}function rt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ot(n.pieces_,e)}function WT(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function TP(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function $T(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function HT(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ot(e,0)}function At(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof ot)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new ot(t,0)}function Le(n){return n.pieceNum_>=n.pieces_.length}function Wn(n,e){const t=xe(n),r=xe(e);if(t===null)return e;if(t===r)return Wn(rt(n),rt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function qT(n,e){if(os(n)!==os(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function lr(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(os(n)>os(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class IP{constructor(e,t){this.errorPrefix_=t,this.parts_=$T(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=fd(this.parts_[r]);GT(this)}}function SP(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=fd(e),GT(n)}function CP(n){const e=n.parts_.pop();n.byteLength_-=fd(e),n.parts_.length>0&&(n.byteLength_-=1)}function GT(n){if(n.byteLength_>v0)throw new Error(n.errorPrefix_+"has a key path longer than "+v0+" bytes ("+n.byteLength_+").");if(n.parts_.length>y0)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+y0+") or object contains a cycle "+Hs(n))}function Hs(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg extends BT{static getInstance(){return new hg}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return ee(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=1e3,AP=60*5*1e3,E0=30*1e3,RP=1.3,kP=3e4,PP="server_kill",w0=3;class oi extends zT{constructor(e,t,r,s,a,u,d,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=d,this.authOverride_=f,this.id=oi.nextPersistentConnectionId_++,this.log_=Ru("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$l,this.maxReconnectDelay_=AP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f&&!fT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");hg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Lh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,a={r:s,a:e,b:t};this.log_(Wt(a)),ee(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new dd,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,s){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),ee(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ee(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const d={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(u).set(a,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const a={p:r},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,d=>{const f=d.d,g=d.s;oi.warnOnListenWarnings_(f,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(g,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&_i(e,"w")){const r=Sa(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();En(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ER(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=E0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=vR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const a=s.s,u=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),ee(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";s&&(a.q=r,a.t=s),this.sendRequest(u,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{s&&setTimeout(()=>{s(u.s,u.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,a){this.initConnection_();const u={p:t,d:r};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:s}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Wt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):nm("Unrecognized action received from server: "+Wt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ee(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$l,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=$l,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>kP&&(this.reconnectDelay_=$l),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*RP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+oi.nextConnectionId_++,a=this.lastSessionId;let u=!1,d=null;const f=function(){d?d.close():(u=!0,r())},g=function(w){ee(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(w)};this.realtime_={close:f,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[w,I]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);u?en("getToken() completed but was canceled"):(en("getToken() completed. Creating connection."),this.authToken_=w&&w.accessToken,this.appCheckToken_=I&&I.token,d=new wP(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,O=>{En(O+" ("+this.repoInfo_.toString()+")"),this.interrupt(PP)},a))}catch(w){this.log_("Failed to get token: "+w),u||(this.repoInfo_.nodeAdmin&&En(w),f())}}}interrupt(e){en("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){en("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yp(this.interruptReasons_)&&(this.reconnectDelay_=$l,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>ag(a)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new ot(e).toString();let s;if(this.listens.has(r)){const a=this.listens.get(r);s=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){en("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=w0&&(this.reconnectDelay_=E0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){en("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=w0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+vT.replace(/\./g,"-")]=1,ng()?e["framework.cordova"]=1:dT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Lh.getInstance().currentlyOnline();return Yp(this.interruptReasons_)&&e}}oi.nextPersistentConnectionId_=0;oi.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new je(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new je(Ca,e),s=new je(Ca,t);return this.compare(r,s)!==0}minPost(){return je.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rh;class KT extends gd{static get __EMPTY_NODE(){return rh}static set __EMPTY_NODE(e){rh=e}compare(e,t){return Fa(e.name,t.name)}isDefinedOn(e){throw La("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return je.MIN}maxPost(){return new je(Zs,rh)}makePost(e,t){return ee(typeof e=="string","KeyIndex indexValue must always be a string."),new je(e,rh)}toString(){return".key"}}const ya=new KT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ih=class{constructor(e,t,r,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?r(e.key,t):1,s&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},kn=class Gl{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??Gl.RED,this.left=s??Rr.EMPTY_NODE,this.right=a??Rr.EMPTY_NODE}copy(e,t,r,s,a){return new Gl(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Rr.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Rr.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Gl.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Gl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};kn.RED=!0;kn.BLACK=!1;class NP{copy(e,t,r,s,a){return this}insert(e,t,r){return new kn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Rr=class mh{constructor(e,t=mh.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new mh(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,kn.BLACK,null,null))}remove(e){return new mh(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,kn.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ih(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ih(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ih(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ih(this.root_,null,this.comparator_,!0,e)}};Rr.EMPTY_NODE=new NP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bP(n,e){return Fa(n.name,e.name)}function dg(n,e){return Fa(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let im;function OP(n){im=n}const QT=function(n){return typeof n=="number"?"number:"+ST(n):"string:"+n},YT=function(n){if(n.isLeafNode()){const e=n.val();ee(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_i(e,".sv"),"Priority must be a string or number.")}else ee(n===im||n.isEmpty(),"priority of unexpected type.");ee(n===im||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let T0;class Mt{static set __childrenNodeConstructor(e){T0=e}static get __childrenNodeConstructor(){return T0}constructor(e,t=Mt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ee(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),YT(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Mt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Mt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Le(e)?this:xe(e)===".priority"?this.priorityNode_:Mt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Mt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=xe(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(ee(r!==".priority"||os(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Mt.__childrenNodeConstructor.EMPTY_NODE.updateChild(rt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+QT(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ST(this.value_):e+=this.value_,this.lazyHash_=wT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Mt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Mt.__childrenNodeConstructor?-1:(ee(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=Mt.VALUE_TYPE_ORDER.indexOf(t),a=Mt.VALUE_TYPE_ORDER.indexOf(r);return ee(s>=0,"Unknown leaf type: "+t),ee(a>=0,"Unknown leaf type: "+r),s===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Mt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let XT,JT;function xP(n){XT=n}function DP(n){JT=n}class MP extends gd{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),a=r.compareTo(s);return a===0?Fa(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return je.MIN}maxPost(){return new je(Zs,new Mt("[PRIORITY-POST]",JT))}makePost(e,t){const r=XT(e);return new je(t,new Mt("[PRIORITY-POST]",r))}toString(){return".priority"}}const nn=new MP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=Math.log(2);class VP{constructor(e){const t=a=>parseInt(Math.log(a)/LP,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vh=function(n,e,t,r){n.sort(e);const s=function(f,g){const v=g-f;let w,I;if(v===0)return null;if(v===1)return w=n[f],I=t?t(w):w,new kn(I,w.node,kn.BLACK,null,null);{const O=parseInt(v/2,10)+f,U=s(f,O),W=s(O+1,g);return w=n[O],I=t?t(w):w,new kn(I,w.node,kn.BLACK,U,W)}},a=function(f){let g=null,v=null,w=n.length;const I=function(U,W){const B=w-U,se=w;w-=U;const ne=s(B+1,se),oe=n[B],me=t?t(oe):oe;O(new kn(me,oe.node,W,null,ne))},O=function(U){g?(g.left=U,g=U):(v=U,g=U)};for(let U=0;U<f.count;++U){const W=f.nextBitIsOne(),B=Math.pow(2,f.count-(U+1));W?I(B,kn.BLACK):(I(B,kn.BLACK),I(B,kn.RED))}return v},u=new VP(n.length),d=a(u);return new Rr(r||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Np;const la={};class ni{static get Default(){return ee(la&&nn,"ChildrenNode.ts has not been loaded"),Np=Np||new ni({".priority":la},{".priority":nn}),Np}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Sa(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Rr?t:null}hasIndex(e){return _i(this.indexSet_,e.toString())}addIndex(e,t){ee(e!==ya,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const a=t.getIterator(je.Wrap);let u=a.getNext();for(;u;)s=s||e.isDefinedOn(u.node),r.push(u),u=a.getNext();let d;s?d=Vh(r,e.getCompare()):d=la;const f=e.toString(),g=Object.assign({},this.indexSet_);g[f]=e;const v=Object.assign({},this.indexes_);return v[f]=d,new ni(v,g)}addToIndexes(e,t){const r=xh(this.indexes_,(s,a)=>{const u=Sa(this.indexSet_,a);if(ee(u,"Missing index implementation for "+a),s===la)if(u.isDefinedOn(e.node)){const d=[],f=t.getIterator(je.Wrap);let g=f.getNext();for(;g;)g.name!==e.name&&d.push(g),g=f.getNext();return d.push(e),Vh(d,u.getCompare())}else return la;else{const d=t.get(e.name);let f=s;return d&&(f=f.remove(new je(e.name,d))),f.insert(e,e.node)}});return new ni(r,this.indexSet_)}removeFromIndexes(e,t){const r=xh(this.indexes_,s=>{if(s===la)return s;{const a=t.get(e.name);return a?s.remove(new je(e.name,a)):s}});return new ni(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hl;class He{static get EMPTY_NODE(){return Hl||(Hl=new He(new Rr(dg),null,ni.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&YT(this.priorityNode_),this.children_.isEmpty()&&ee(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Hl}updatePriority(e){return this.children_.isEmpty()?this:new He(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Hl:t}}getChild(e){const t=xe(e);return t===null?this:this.getImmediateChild(t).getChild(rt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ee(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new je(e,t);let s,a;t.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const u=s.isEmpty()?Hl:this.priorityNode_;return new He(s,u,a)}}updateChild(e,t){const r=xe(e);if(r===null)return t;{ee(xe(e)!==".priority"||os(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(rt(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,a=!0;if(this.forEachChild(nn,(u,d)=>{t[u]=d.val(e),r++,a&&He.INTEGER_REGEXP_.test(u)?s=Math.max(s,Number(u)):a=!1}),!e&&a&&s<2*r){const u=[];for(const d in t)u[d]=t[d];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+QT(this.getPriority().val())+":"),this.forEachChild(nn,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":wT(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const a=s.getPredecessorKey(new je(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new je(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new je(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,je.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,je.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ku?-1:0}withIndex(e){if(e===ya||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new He(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ya||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(nn),s=t.getIterator(nn);let a=r.getNext(),u=s.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=r.getNext(),u=s.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===ya?null:this.indexMap_.get(e.toString())}}He.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class FP extends He{constructor(){super(new Rr(dg),He.EMPTY_NODE,ni.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return He.EMPTY_NODE}isEmpty(){return!1}}const ku=new FP;Object.defineProperties(je,{MIN:{value:new je(Ca,He.EMPTY_NODE)},MAX:{value:new je(Zs,ku)}});KT.__EMPTY_NODE=He.EMPTY_NODE;Mt.__childrenNodeConstructor=He;OP(ku);DP(ku);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP=!0;function Bt(n,e=null){if(n===null)return He.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ee(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Mt(t,Bt(e))}if(!(n instanceof Array)&&UP){const t=[];let r=!1;if(Hn(n,(u,d)=>{if(u.substring(0,1)!=="."){const f=Bt(d);f.isEmpty()||(r=r||!f.getPriority().isEmpty(),t.push(new je(u,f)))}}),t.length===0)return He.EMPTY_NODE;const a=Vh(t,bP,u=>u.name,dg);if(r){const u=Vh(t,nn.getCompare());return new He(a,Bt(e),new ni({".priority":u},{".priority":nn}))}else return new He(a,Bt(e),ni.Default)}else{let t=He.EMPTY_NODE;return Hn(n,(r,s)=>{if(_i(n,r)&&r.substring(0,1)!=="."){const a=Bt(s);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(Bt(e))}}xP(Bt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP extends gd{constructor(e){super(),this.indexPath_=e,ee(!Le(e)&&xe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),a=r.compareTo(s);return a===0?Fa(e.name,t.name):a}makePost(e,t){const r=Bt(e),s=He.EMPTY_NODE.updateChild(this.indexPath_,r);return new je(t,s)}maxPost(){const e=He.EMPTY_NODE.updateChild(this.indexPath_,ku);return new je(Zs,e)}toString(){return $T(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP extends gd{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Fa(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return je.MIN}maxPost(){return je.MAX}makePost(e,t){const r=Bt(e);return new je(t,r)}toString(){return".value"}}const BP=new zP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(n){return{type:"value",snapshotNode:n}}function $P(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function HP(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function I0(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function qP(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=nn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ee(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ee(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ca}hasEnd(){return this.endSet_}getIndexEndValue(){return ee(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ee(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ee(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===nn}copy(){const e=new fg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function S0(n){const e={};if(n.isDefault())return e;let t;if(n.index_===nn?t="$priority":n.index_===BP?t="$value":n.index_===ya?t="$key":(ee(n.index_ instanceof jP,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Wt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Wt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Wt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Wt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Wt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function C0(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==nn&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh extends zT{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ee(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Ru("p:rest:"),this.listens_={}}listen(e,t,r,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=Fh.getListenId_(e,r),d={};this.listens_[u]=d;const f=S0(e._queryParams);this.restRequest_(a+".json",f,(g,v)=>{let w=v;if(g===404&&(w=null,g=null),g===null&&this.onDataUpdate_(a,w,!1,r),Sa(this.listens_,u)===d){let I;g?g===401?I="permission_denied":I="rest_error:"+g:I="ok",s(I,null)}})}unlisten(e,t){const r=Fh.getListenId_(e,t);delete this.listens_[r]}get(e){const t=S0(e._queryParams),r=e._path.toString(),s=new dd;return this.restRequest_(r+".json",t,(a,u)=>{let d=u;a===404&&(d=null,a=null),a===null?(this.onDataUpdate_(r,d,!1,null),s.resolve(d)):s.reject(new Error(d))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(t.auth=s.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Va(t);this.log_("Sending REST request for "+u);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+u+" received. status:",d.status,"response:",d.responseText);let f=null;if(d.status>=200&&d.status<300){try{f=cu(d.responseText)}catch{En("Failed to parse JSON response for "+u+": "+d.responseText)}r(null,f)}else d.status!==401&&d.status!==404&&En("Got unsuccessful REST response for "+u+" Status: "+d.status),r(d.status);r=null}},d.open("GET",u,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(){this.rootNode_=He.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(){return{value:null,children:new Map}}function ZT(n,e,t){if(Le(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=xe(e);n.children.has(r)||n.children.set(r,Uh());const s=n.children.get(r);e=rt(e),ZT(s,e,t)}}function sm(n,e,t){n.value!==null?t(e,n.value):KP(n,(r,s)=>{const a=new ot(e.toString()+"/"+r);sm(s,a,t)})}function KP(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Hn(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=10*1e3,YP=30*1e3,XP=5*60*1e3;class JP{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new QP(e);const r=A0+(YP-A0)*Math.random();Zl(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;Hn(e,(s,a)=>{a>0&&_i(this.statsToReport_,s)&&(t[s]=a,r=!0)}),r&&this.server_.reportStats(t),Zl(this.reportStats_.bind(this),Math.floor(Math.random()*2*XP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kr;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(kr||(kr={}));function eI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function tI(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function nI(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=kr.ACK_USER_WRITE,this.source=eI()}operationForChild(e){if(Le(this.path)){if(this.affectedTree.value!=null)return ee(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ot(e));return new jh(Qe(),t,this.revert)}}else return ee(xe(this.path)===e,"operationForChild called for unrelated child."),new jh(rt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=kr.OVERWRITE}operationForChild(e){return Le(this.path)?new eo(this.source,Qe(),this.snap.getImmediateChild(e)):new eo(this.source,rt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=kr.MERGE}operationForChild(e){if(Le(this.path)){const t=this.children.subtree(new ot(e));return t.isEmpty()?null:t.value?new eo(this.source,Qe(),t.value):new fu(this.source,Qe(),t)}else return ee(xe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fu(this.source,rt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Le(e))return this.isFullyInitialized()&&!this.filtered_;const t=xe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function ZP(n,e,t,r){const s=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(qP(u.childName,u.snapshotNode))}),ql(n,s,"child_removed",e,r,t),ql(n,s,"child_added",e,r,t),ql(n,s,"child_moved",a,r,t),ql(n,s,"child_changed",e,r,t),ql(n,s,"value",e,r,t),s}function ql(n,e,t,r,s,a){const u=r.filter(d=>d.type===t);u.sort((d,f)=>tN(n,d,f)),u.forEach(d=>{const f=eN(n,d,a);s.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(f,n.query_))})})}function eN(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function tN(n,e,t){if(e.childName==null||t.childName==null)throw La("Should only compare child_ events.");const r=new je(e.childName,e.snapshotNode),s=new je(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(n,e){return{eventCache:n,serverCache:e}}function eu(n,e,t,r){return rI(new pg(e,t,r),n.serverCache)}function iI(n,e,t,r){return rI(n.eventCache,new pg(e,t,r))}function om(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function to(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bp;const nN=()=>(bp||(bp=new Rr(Bk)),bp);class nt{static fromObject(e){let t=new nt(null);return Hn(e,(r,s)=>{t=t.set(new ot(r),s)}),t}constructor(e,t=nN()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Qe(),value:this.value};if(Le(e))return null;{const r=xe(e),s=this.children.get(r);if(s!==null){const a=s.findRootMostMatchingPathAndValue(rt(e),t);return a!=null?{path:At(new ot(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Le(e))return this;{const t=xe(e),r=this.children.get(t);return r!==null?r.subtree(rt(e)):new nt(null)}}set(e,t){if(Le(e))return new nt(t,this.children);{const r=xe(e),a=(this.children.get(r)||new nt(null)).set(rt(e),t),u=this.children.insert(r,a);return new nt(this.value,u)}}remove(e){if(Le(e))return this.children.isEmpty()?new nt(null):new nt(null,this.children);{const t=xe(e),r=this.children.get(t);if(r){const s=r.remove(rt(e));let a;return s.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,s),this.value===null&&a.isEmpty()?new nt(null):new nt(this.value,a)}else return this}}get(e){if(Le(e))return this.value;{const t=xe(e),r=this.children.get(t);return r?r.get(rt(e)):null}}setTree(e,t){if(Le(e))return t;{const r=xe(e),a=(this.children.get(r)||new nt(null)).setTree(rt(e),t);let u;return a.isEmpty()?u=this.children.remove(r):u=this.children.insert(r,a),new nt(this.value,u)}}fold(e){return this.fold_(Qe(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,a)=>{r[s]=a.fold_(At(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,Qe(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(Le(e))return null;{const a=xe(e),u=this.children.get(a);return u?u.findOnPath_(rt(e),At(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Qe(),t)}foreachOnPath_(e,t,r){if(Le(e))return this;{this.value&&r(t,this.value);const s=xe(e),a=this.children.get(s);return a?a.foreachOnPath_(rt(e),At(t,s),r):new nt(null)}}foreach(e){this.foreach_(Qe(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(At(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.writeTree_=e}static empty(){return new hr(new nt(null))}}function tu(n,e,t){if(Le(e))return new hr(new nt(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let a=r.value;const u=Wn(s,e);return a=a.updateChild(u,t),new hr(n.writeTree_.set(s,a))}else{const s=new nt(t),a=n.writeTree_.setTree(e,s);return new hr(a)}}}function R0(n,e,t){let r=n;return Hn(t,(s,a)=>{r=tu(r,At(e,s),a)}),r}function k0(n,e){if(Le(e))return hr.empty();{const t=n.writeTree_.setTree(e,new nt(null));return new hr(t)}}function am(n,e){return uo(n,e)!=null}function uo(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Wn(t.path,e)):null}function P0(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(nn,(r,s)=>{e.push(new je(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new je(r,s.value))}),e}function Zi(n,e){if(Le(e))return n;{const t=uo(n,e);return t!=null?new hr(new nt(t)):new hr(n.writeTree_.subtree(e))}}function lm(n){return n.writeTree_.isEmpty()}function Aa(n,e){return sI(Qe(),n.writeTree_,e)}function sI(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(ee(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=sI(At(n,s),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(At(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(n,e){return hI(e,n)}function rN(n,e,t,r,s){ee(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=tu(n.visibleWrites,e,t)),n.lastWriteId=r}function iN(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function sN(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);ee(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,a=!1,u=n.allWrites.length-1;for(;s&&u>=0;){const d=n.allWrites[u];d.visible&&(u>=t&&oN(d,r.path)?s=!1:lr(r.path,d.path)&&(a=!0)),u--}if(s){if(a)return aN(n),!0;if(r.snap)n.visibleWrites=k0(n.visibleWrites,r.path);else{const d=r.children;Hn(d,f=>{n.visibleWrites=k0(n.visibleWrites,At(r.path,f))})}return!0}else return!1}function oN(n,e){if(n.snap)return lr(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&lr(At(n.path,t),e))return!0;return!1}function aN(n){n.visibleWrites=aI(n.allWrites,lN,Qe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function lN(n){return n.visible}function aI(n,e,t){let r=hr.empty();for(let s=0;s<n.length;++s){const a=n[s];if(e(a)){const u=a.path;let d;if(a.snap)lr(t,u)?(d=Wn(t,u),r=tu(r,d,a.snap)):lr(u,t)&&(d=Wn(u,t),r=tu(r,Qe(),a.snap.getChild(d)));else if(a.children){if(lr(t,u))d=Wn(t,u),r=R0(r,d,a.children);else if(lr(u,t))if(d=Wn(u,t),Le(d))r=R0(r,Qe(),a.children);else{const f=Sa(a.children,xe(d));if(f){const g=f.getChild(rt(d));r=tu(r,Qe(),g)}}}else throw La("WriteRecord should have .snap or .children")}}return r}function lI(n,e,t,r,s){if(!r&&!s){const a=uo(n.visibleWrites,e);if(a!=null)return a;{const u=Zi(n.visibleWrites,e);if(lm(u))return t;if(t==null&&!am(u,Qe()))return null;{const d=t||He.EMPTY_NODE;return Aa(u,d)}}}else{const a=Zi(n.visibleWrites,e);if(!s&&lm(a))return t;if(!s&&t==null&&!am(a,Qe()))return null;{const u=function(g){return(g.visible||s)&&(!r||!~r.indexOf(g.writeId))&&(lr(g.path,e)||lr(e,g.path))},d=aI(n.allWrites,u,e),f=t||He.EMPTY_NODE;return Aa(d,f)}}}function uN(n,e,t){let r=He.EMPTY_NODE;const s=uo(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(nn,(a,u)=>{r=r.updateImmediateChild(a,u)}),r;if(t){const a=Zi(n.visibleWrites,e);return t.forEachChild(nn,(u,d)=>{const f=Aa(Zi(a,new ot(u)),d);r=r.updateImmediateChild(u,f)}),P0(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}else{const a=Zi(n.visibleWrites,e);return P0(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}}function cN(n,e,t,r,s){ee(r||s,"Either existingEventSnap or existingServerSnap must exist");const a=At(e,t);if(am(n.visibleWrites,a))return null;{const u=Zi(n.visibleWrites,a);return lm(u)?s.getChild(t):Aa(u,s.getChild(t))}}function hN(n,e,t,r){const s=At(e,t),a=uo(n.visibleWrites,s);if(a!=null)return a;if(r.isCompleteForChild(t)){const u=Zi(n.visibleWrites,s);return Aa(u,r.getNode().getImmediateChild(t))}else return null}function dN(n,e){return uo(n.visibleWrites,e)}function fN(n,e,t,r,s,a,u){let d;const f=Zi(n.visibleWrites,e),g=uo(f,Qe());if(g!=null)d=g;else if(t!=null)d=Aa(f,t);else return[];if(d=d.withIndex(u),!d.isEmpty()&&!d.isLeafNode()){const v=[],w=u.getCompare(),I=a?d.getReverseIteratorFrom(r,u):d.getIteratorFrom(r,u);let O=I.getNext();for(;O&&v.length<s;)w(O,r)!==0&&v.push(O),O=I.getNext();return v}else return[]}function pN(){return{visibleWrites:hr.empty(),allWrites:[],lastWriteId:-1}}function um(n,e,t,r){return lI(n.writeTree,n.treePath,e,t,r)}function uI(n,e){return uN(n.writeTree,n.treePath,e)}function N0(n,e,t,r){return cN(n.writeTree,n.treePath,e,t,r)}function zh(n,e){return dN(n.writeTree,At(n.treePath,e))}function mN(n,e,t,r,s,a){return fN(n.writeTree,n.treePath,e,t,r,s,a)}function mg(n,e,t){return hN(n.writeTree,n.treePath,e,t)}function cI(n,e){return hI(At(n.treePath,e),n.writeTree)}function hI(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;ee(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ee(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const a=s.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,I0(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,HP(r,s.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,$P(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,I0(r,e.snapshotNode,s.oldSnap));else throw La("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const dI=new _N;class gg{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new pg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return mg(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:to(this.viewCache_),a=mN(this.writes_,s,t,1,r,e);return a.length===0?null:a[0]}}function yN(n,e){ee(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ee(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function vN(n,e,t,r,s){const a=new gN;let u,d;if(t.type===kr.OVERWRITE){const g=t;g.source.fromUser?u=cm(n,e,g.path,g.snap,r,s,a):(ee(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!Le(g.path),u=Bh(n,e,g.path,g.snap,r,s,d,a))}else if(t.type===kr.MERGE){const g=t;g.source.fromUser?u=wN(n,e,g.path,g.children,r,s,a):(ee(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),u=hm(n,e,g.path,g.children,r,s,d,a))}else if(t.type===kr.ACK_USER_WRITE){const g=t;g.revert?u=SN(n,e,g.path,r,s,a):u=TN(n,e,g.path,g.affectedTree,r,s,a)}else if(t.type===kr.LISTEN_COMPLETE)u=IN(n,e,t.path,r,a);else throw La("Unknown operation type: "+t.type);const f=a.getChanges();return EN(e,u,f),{viewCache:u,changes:f}}function EN(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=om(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(WP(om(e)))}}function fI(n,e,t,r,s,a){const u=e.eventCache;if(zh(r,t)!=null)return e;{let d,f;if(Le(t))if(ee(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=to(e),v=g instanceof He?g:He.EMPTY_NODE,w=uI(r,v);d=n.filter.updateFullNode(e.eventCache.getNode(),w,a)}else{const g=um(r,to(e));d=n.filter.updateFullNode(e.eventCache.getNode(),g,a)}else{const g=xe(t);if(g===".priority"){ee(os(t)===1,"Can't have a priority with additional path components");const v=u.getNode();f=e.serverCache.getNode();const w=N0(r,t,v,f);w!=null?d=n.filter.updatePriority(v,w):d=u.getNode()}else{const v=rt(t);let w;if(u.isCompleteForChild(g)){f=e.serverCache.getNode();const I=N0(r,t,u.getNode(),f);I!=null?w=u.getNode().getImmediateChild(g).updateChild(v,I):w=u.getNode().getImmediateChild(g)}else w=mg(r,g,e.serverCache);w!=null?d=n.filter.updateChild(u.getNode(),g,w,v,s,a):d=u.getNode()}}return eu(e,d,u.isFullyInitialized()||Le(t),n.filter.filtersNodes())}}function Bh(n,e,t,r,s,a,u,d){const f=e.serverCache;let g;const v=u?n.filter:n.filter.getIndexedFilter();if(Le(t))g=v.updateFullNode(f.getNode(),r,null);else if(v.filtersNodes()&&!f.isFiltered()){const O=f.getNode().updateChild(t,r);g=v.updateFullNode(f.getNode(),O,null)}else{const O=xe(t);if(!f.isCompleteForPath(t)&&os(t)>1)return e;const U=rt(t),B=f.getNode().getImmediateChild(O).updateChild(U,r);O===".priority"?g=v.updatePriority(f.getNode(),B):g=v.updateChild(f.getNode(),O,B,U,dI,null)}const w=iI(e,g,f.isFullyInitialized()||Le(t),v.filtersNodes()),I=new gg(s,w,a);return fI(n,w,t,s,I,d)}function cm(n,e,t,r,s,a,u){const d=e.eventCache;let f,g;const v=new gg(s,e,a);if(Le(t))g=n.filter.updateFullNode(e.eventCache.getNode(),r,u),f=eu(e,g,!0,n.filter.filtersNodes());else{const w=xe(t);if(w===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),r),f=eu(e,g,d.isFullyInitialized(),d.isFiltered());else{const I=rt(t),O=d.getNode().getImmediateChild(w);let U;if(Le(I))U=r;else{const W=v.getCompleteChild(w);W!=null?WT(I)===".priority"&&W.getChild(HT(I)).isEmpty()?U=W:U=W.updateChild(I,r):U=He.EMPTY_NODE}if(O.equals(U))f=e;else{const W=n.filter.updateChild(d.getNode(),w,U,I,v,u);f=eu(e,W,d.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function b0(n,e){return n.eventCache.isCompleteForChild(e)}function wN(n,e,t,r,s,a,u){let d=e;return r.foreach((f,g)=>{const v=At(t,f);b0(e,xe(v))&&(d=cm(n,d,v,g,s,a,u))}),r.foreach((f,g)=>{const v=At(t,f);b0(e,xe(v))||(d=cm(n,d,v,g,s,a,u))}),d}function O0(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function hm(n,e,t,r,s,a,u,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,g;Le(t)?g=r:g=new nt(null).setTree(t,r);const v=e.serverCache.getNode();return g.children.inorderTraversal((w,I)=>{if(v.hasChild(w)){const O=e.serverCache.getNode().getImmediateChild(w),U=O0(n,O,I);f=Bh(n,f,new ot(w),U,s,a,u,d)}}),g.children.inorderTraversal((w,I)=>{const O=!e.serverCache.isCompleteForChild(w)&&I.value===null;if(!v.hasChild(w)&&!O){const U=e.serverCache.getNode().getImmediateChild(w),W=O0(n,U,I);f=Bh(n,f,new ot(w),W,s,a,u,d)}}),f}function TN(n,e,t,r,s,a,u){if(zh(s,t)!=null)return e;const d=e.serverCache.isFiltered(),f=e.serverCache;if(r.value!=null){if(Le(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return Bh(n,e,t,f.getNode().getChild(t),s,a,d,u);if(Le(t)){let g=new nt(null);return f.getNode().forEachChild(ya,(v,w)=>{g=g.set(new ot(v),w)}),hm(n,e,t,g,s,a,d,u)}else return e}else{let g=new nt(null);return r.foreach((v,w)=>{const I=At(t,v);f.isCompleteForPath(I)&&(g=g.set(v,f.getNode().getChild(I)))}),hm(n,e,t,g,s,a,d,u)}}function IN(n,e,t,r,s){const a=e.serverCache,u=iI(e,a.getNode(),a.isFullyInitialized()||Le(t),a.isFiltered());return fI(n,u,t,r,dI,s)}function SN(n,e,t,r,s,a){let u;if(zh(r,t)!=null)return e;{const d=new gg(r,e,s),f=e.eventCache.getNode();let g;if(Le(t)||xe(t)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=um(r,to(e));else{const w=e.serverCache.getNode();ee(w instanceof He,"serverChildren would be complete if leaf node"),v=uI(r,w)}v=v,g=n.filter.updateFullNode(f,v,a)}else{const v=xe(t);let w=mg(r,v,e.serverCache);w==null&&e.serverCache.isCompleteForChild(v)&&(w=f.getImmediateChild(v)),w!=null?g=n.filter.updateChild(f,v,w,rt(t),d,a):e.eventCache.getNode().hasChild(v)?g=n.filter.updateChild(f,v,He.EMPTY_NODE,rt(t),d,a):g=f,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=um(r,to(e)),u.isLeafNode()&&(g=n.filter.updateFullNode(g,u,a)))}return u=e.serverCache.isFullyInitialized()||zh(r,Qe())!=null,eu(e,g,u,n.filter.filtersNodes())}}function CN(n,e){const t=to(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Le(e)&&!t.getImmediateChild(xe(e)).isEmpty())?t.getChild(e):null}function x0(n,e,t,r){e.type===kr.MERGE&&e.source.queryId!==null&&(ee(to(n.viewCache_),"We should always have a full cache before handling merges"),ee(om(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,a=vN(n.processor_,s,e,t,r);return yN(n.processor_,a.viewCache),ee(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,AN(n,a.changes,a.viewCache.eventCache.getNode())}function AN(n,e,t,r){const s=n.eventRegistrations_;return ZP(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let D0;function RN(n){ee(!D0,"__referenceConstructor has already been defined"),D0=n}function _g(n,e,t,r){const s=e.source.queryId;if(s!==null){const a=n.views.get(s);return ee(a!=null,"SyncTree gave us an op for an invalid query."),x0(a,e,t,r)}else{let a=[];for(const u of n.views.values())a=a.concat(x0(u,e,t,r));return a}}function yg(n,e){let t=null;for(const r of n.views.values())t=t||CN(r,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let M0;function kN(n){ee(!M0,"__referenceConstructor has already been defined"),M0=n}class L0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new nt(null),this.pendingWriteTree_=pN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function pI(n,e,t,r,s){return rN(n.pendingWriteTree_,e,t,r,s),s?yd(n,new eo(eI(),e,t)):[]}function Gs(n,e,t=!1){const r=iN(n.pendingWriteTree_,e);if(sN(n.pendingWriteTree_,e)){let a=new nt(null);return r.snap!=null?a=a.set(Qe(),!0):Hn(r.children,u=>{a=a.set(new ot(u),!0)}),yd(n,new jh(r.path,a,t))}else return[]}function _d(n,e,t){return yd(n,new eo(tI(),e,t))}function PN(n,e,t){const r=nt.fromObject(t);return yd(n,new fu(tI(),e,r))}function NN(n,e,t,r){const s=_I(n,r);if(s!=null){const a=yI(s),u=a.path,d=a.queryId,f=Wn(u,e),g=new eo(nI(d),f,t);return vI(n,u,g)}else return[]}function bN(n,e,t,r){const s=_I(n,r);if(s){const a=yI(s),u=a.path,d=a.queryId,f=Wn(u,e),g=nt.fromObject(t),v=new fu(nI(d),f,g);return vI(n,u,v)}else return[]}function vg(n,e,t){const s=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,d)=>{const f=Wn(u,e),g=yg(d,f);if(g)return g});return lI(s,e,a,t,!0)}function yd(n,e){return mI(e,n.syncPointTree_,null,oI(n.pendingWriteTree_,Qe()))}function mI(n,e,t,r){if(Le(n.path))return gI(n,e,t,r);{const s=e.get(Qe());t==null&&s!=null&&(t=yg(s,Qe()));let a=[];const u=xe(n.path),d=n.operationForChild(u),f=e.children.get(u);if(f&&d){const g=t?t.getImmediateChild(u):null,v=cI(r,u);a=a.concat(mI(d,f,g,v))}return s&&(a=a.concat(_g(s,n,r,t))),a}}function gI(n,e,t,r){const s=e.get(Qe());t==null&&s!=null&&(t=yg(s,Qe()));let a=[];return e.children.inorderTraversal((u,d)=>{const f=t?t.getImmediateChild(u):null,g=cI(r,u),v=n.operationForChild(u);v&&(a=a.concat(gI(v,d,f,g)))}),s&&(a=a.concat(_g(s,n,r,t))),a}function _I(n,e){return n.tagToQueryMap.get(e)}function yI(n){const e=n.indexOf("$");return ee(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ot(n.substr(0,e))}}function vI(n,e,t){const r=n.syncPointTree_.get(e);ee(r,"Missing sync point for query tag that we're tracking");const s=oI(n.pendingWriteTree_,e);return _g(r,t,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Eg(t)}node(){return this.node_}}class wg{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=At(this.path_,e);return new wg(this.syncTree_,t)}node(){return vg(this.syncTree_,this.path_)}}const ON=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},V0=function(n,e,t){if(!n||typeof n!="object")return n;if(ee(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return xN(n[".sv"],e,t);if(typeof n[".sv"]=="object")return DN(n[".sv"],e);ee(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},xN=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ee(!1,"Unexpected server value: "+n)}},DN=function(n,e,t){n.hasOwnProperty("increment")||ee(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&ee(!1,"Unexpected increment value: "+r);const s=e.node();if(ee(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const u=s.getValue();return typeof u!="number"?r:u+r},MN=function(n,e,t,r){return Tg(e,new wg(t,n),r)},EI=function(n,e,t){return Tg(n,new Eg(e),t)};function Tg(n,e,t){const r=n.getPriority().val(),s=V0(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,d=V0(u.getValue(),e,t);return d!==u.getValue()||s!==u.getPriority().val()?new Mt(d,Bt(s)):n}else{const u=n;return a=u,s!==u.getPriority().val()&&(a=a.updatePriority(new Mt(s))),u.forEachChild(nn,(d,f)=>{const g=Tg(f,e.getImmediateChild(d),t);g!==f&&(a=a.updateImmediateChild(d,g))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function Sg(n,e){let t=e instanceof ot?e:new ot(e),r=n,s=xe(t);for(;s!==null;){const a=Sa(r.node.children,s)||{children:{},childCount:0};r=new Ig(s,r,a),t=rt(t),s=xe(t)}return r}function ja(n){return n.node.value}function wI(n,e){n.node.value=e,dm(n)}function TI(n){return n.node.childCount>0}function LN(n){return ja(n)===void 0&&!TI(n)}function vd(n,e){Hn(n.node.children,(t,r)=>{e(new Ig(t,n,r))})}function II(n,e,t,r){t&&!r&&e(n),vd(n,s=>{II(s,e,!0,r)}),t&&r&&e(n)}function VN(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Pu(n){return new ot(n.parent===null?n.name:Pu(n.parent)+"/"+n.name)}function dm(n){n.parent!==null&&FN(n.parent,n.name,n)}function FN(n,e,t){const r=LN(t),s=_i(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,dm(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,dm(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN=/[\[\].#$\/\u0000-\u001F\u007F]/,jN=/[\[\].#$\u0000-\u001F\u007F]/,Op=10*1024*1024,SI=function(n){return typeof n=="string"&&n.length!==0&&!UN.test(n)},CI=function(n){return typeof n=="string"&&n.length!==0&&!jN.test(n)},zN=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),CI(n)},AI=function(n,e,t,r){r&&e===void 0||Cg(rg(n,"value"),e,t)},Cg=function(n,e,t){const r=t instanceof ot?new IP(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Hs(r));if(typeof e=="function")throw new Error(n+"contains a function "+Hs(r)+" with contents = "+e.toString());if(TT(e))throw new Error(n+"contains "+e.toString()+" "+Hs(r));if(typeof e=="string"&&e.length>Op/3&&fd(e)>Op)throw new Error(n+"contains a string greater than "+Op+" utf8 bytes "+Hs(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if(Hn(e,(u,d)=>{if(u===".value")s=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!SI(u)))throw new Error(n+" contains an invalid key ("+u+") "+Hs(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);SP(r,u),Cg(n,d,r),CP(r)}),s&&a)throw new Error(n+' contains ".value" child '+Hs(r)+" in addition to actual children.")}},RI=function(n,e,t,r){if(!CI(t))throw new Error(rg(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},BN=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),RI(n,e,t)},kI=function(n,e){if(xe(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},WN=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!SI(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!zN(t))throw new Error(rg(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function PI(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],a=s.getPath();t!==null&&!qT(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(s)}t&&n.eventLists_.push(t)}function ci(n,e,t){PI(n,t),HN(n,r=>lr(r,e)||lr(e,r))}function HN(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const a=s.path;e(a)?(qN(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function qN(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Jl&&en("event: "+t.toString()),Ua(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN="repo_interrupt",KN=25;class QN{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $N,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Uh(),this.transactionQueueTree_=new Ig,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function YN(n,e,t){if(n.stats_=ug(n.repoInfo_),n.forceRestClient_||Kk())n.server_=new Fh(n.repoInfo_,(r,s,a,u)=>{F0(n,r,s,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>U0(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Wt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new oi(n.repoInfo_,e,(r,s,a,u)=>{F0(n,r,s,a,u)},r=>{U0(n,r)},r=>{XN(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=Zk(n.repoInfo_,()=>new JP(n.stats_,n.server_)),n.infoData_=new GP,n.infoSyncTree_=new L0({startListening:(r,s,a,u)=>{let d=[];const f=n.infoData_.getNode(r._path);return f.isEmpty()||(d=_d(n.infoSyncTree_,r._path,f),setTimeout(()=>{u("ok")},0)),d},stopListening:()=>{}}),Rg(n,"connected",!1),n.serverSyncTree_=new L0({startListening:(r,s,a,u)=>(n.server_.listen(r,a,s,(d,f)=>{const g=u(d,f);ci(n.eventQueue_,r._path,g)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function NI(n){const t=n.infoData_.getNode(new ot(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ag(n){return ON({timestamp:NI(n)})}function F0(n,e,t,r,s){n.dataUpdateCount++;const a=new ot(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(s)if(r){const f=xh(t,g=>Bt(g));u=bN(n.serverSyncTree_,a,f,s)}else{const f=Bt(t);u=NN(n.serverSyncTree_,a,f,s)}else if(r){const f=xh(t,g=>Bt(g));u=PN(n.serverSyncTree_,a,f)}else{const f=Bt(t);u=_d(n.serverSyncTree_,a,f)}let d=a;u.length>0&&(d=Ed(n,a)),ci(n.eventQueue_,d,u)}function U0(n,e){Rg(n,"connected",e),e===!1&&ZN(n)}function XN(n,e){Hn(e,(t,r)=>{Rg(n,t,r)})}function Rg(n,e,t){const r=new ot("/.info/"+e),s=Bt(t);n.infoData_.updateSnapshot(r,s);const a=_d(n.infoSyncTree_,r,s);ci(n.eventQueue_,r,a)}function bI(n){return n.nextWriteId_++}function JN(n,e,t,r,s){kg(n,"set",{path:e.toString(),value:t,priority:r});const a=Ag(n),u=Bt(t,r),d=vg(n.serverSyncTree_,e),f=EI(u,d,a),g=bI(n),v=pI(n.serverSyncTree_,e,f,g,!0);PI(n.eventQueue_,v),n.server_.put(e.toString(),u.val(!0),(I,O)=>{const U=I==="ok";U||En("set at "+e+" failed: "+I);const W=Gs(n.serverSyncTree_,g,!U);ci(n.eventQueue_,e,W),tb(n,s,I,O)});const w=LI(n,e);Ed(n,w),ci(n.eventQueue_,w,[])}function ZN(n){kg(n,"onDisconnectEvents");const e=Ag(n),t=Uh();sm(n.onDisconnect_,Qe(),(s,a)=>{const u=MN(s,a,n.serverSyncTree_,e);ZT(t,s,u)});let r=[];sm(t,Qe(),(s,a)=>{r=r.concat(_d(n.serverSyncTree_,s,a));const u=LI(n,s);Ed(n,u)}),n.onDisconnect_=Uh(),ci(n.eventQueue_,Qe(),r)}function eb(n){n.persistentConnection_&&n.persistentConnection_.interrupt(GN)}function kg(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),en(t,...e)}function tb(n,e,t,r){e&&Ua(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let a=s;r&&(a+=": "+r);const u=new Error(a);u.code=s,e(u)}})}function OI(n,e,t){return vg(n.serverSyncTree_,e,t)||He.EMPTY_NODE}function Pg(n,e=n.transactionQueueTree_){if(e||wd(n,e),ja(e)){const t=DI(n,e);ee(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&nb(n,Pu(e),t)}else TI(e)&&vd(e,t=>{Pg(n,t)})}function nb(n,e,t){const r=t.map(g=>g.currentWriteId),s=OI(n,e,r);let a=s;const u=s.hash();for(let g=0;g<t.length;g++){const v=t[g];ee(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const w=Wn(e,v.path);a=a.updateChild(w,v.currentOutputSnapshotRaw)}const d=a.val(!0),f=e;n.server_.put(f.toString(),d,g=>{kg(n,"transaction put response",{path:f.toString(),status:g});let v=[];if(g==="ok"){const w=[];for(let I=0;I<t.length;I++)t[I].status=2,v=v.concat(Gs(n.serverSyncTree_,t[I].currentWriteId)),t[I].onComplete&&w.push(()=>t[I].onComplete(null,!0,t[I].currentOutputSnapshotResolved)),t[I].unwatcher();wd(n,Sg(n.transactionQueueTree_,e)),Pg(n,n.transactionQueueTree_),ci(n.eventQueue_,e,v);for(let I=0;I<w.length;I++)Ua(w[I])}else{if(g==="datastale")for(let w=0;w<t.length;w++)t[w].status===3?t[w].status=4:t[w].status=0;else{En("transaction at "+f.toString()+" failed: "+g);for(let w=0;w<t.length;w++)t[w].status=4,t[w].abortReason=g}Ed(n,e)}},u)}function Ed(n,e){const t=xI(n,e),r=Pu(t),s=DI(n,t);return rb(n,s,r),r}function rb(n,e,t){if(e.length===0)return;const r=[];let s=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const f=e[d],g=Wn(t,f.path);let v=!1,w;if(ee(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)v=!0,w=f.abortReason,s=s.concat(Gs(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=KN)v=!0,w="maxretry",s=s.concat(Gs(n.serverSyncTree_,f.currentWriteId,!0));else{const I=OI(n,f.path,u);f.currentInputSnapshot=I;const O=e[d].update(I.val());if(O!==void 0){Cg("transaction failed: Data returned ",O,f.path);let U=Bt(O);typeof O=="object"&&O!=null&&_i(O,".priority")||(U=U.updatePriority(I.getPriority()));const B=f.currentWriteId,se=Ag(n),ne=EI(U,I,se);f.currentOutputSnapshotRaw=U,f.currentOutputSnapshotResolved=ne,f.currentWriteId=bI(n),u.splice(u.indexOf(B),1),s=s.concat(pI(n.serverSyncTree_,f.path,ne,f.currentWriteId,f.applyLocally)),s=s.concat(Gs(n.serverSyncTree_,B,!0))}else v=!0,w="nodata",s=s.concat(Gs(n.serverSyncTree_,f.currentWriteId,!0))}ci(n.eventQueue_,t,s),s=[],v&&(e[d].status=2,function(I){setTimeout(I,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(w==="nodata"?r.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):r.push(()=>e[d].onComplete(new Error(w),!1,null))))}wd(n,n.transactionQueueTree_);for(let d=0;d<r.length;d++)Ua(r[d]);Pg(n,n.transactionQueueTree_)}function xI(n,e){let t,r=n.transactionQueueTree_;for(t=xe(e);t!==null&&ja(r)===void 0;)r=Sg(r,t),e=rt(e),t=xe(e);return r}function DI(n,e){const t=[];return MI(n,e,t),t.sort((r,s)=>r.order-s.order),t}function MI(n,e,t){const r=ja(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);vd(e,s=>{MI(n,s,t)})}function wd(n,e){const t=ja(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,wI(e,t.length>0?t:void 0)}vd(e,r=>{wd(n,r)})}function LI(n,e){const t=Pu(xI(n,e)),r=Sg(n.transactionQueueTree_,e);return VN(r,s=>{xp(n,s)}),xp(n,r),II(r,s=>{xp(n,s)}),t}function xp(n,e){const t=ja(e);if(t){const r=[];let s=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(ee(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(ee(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),s=s.concat(Gs(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&r.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?wI(e,void 0):t.length=a+1,ci(n.eventQueue_,Pu(e),s);for(let u=0;u<r.length;u++)Ua(r[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function sb(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):En(`Invalid query segment '${t}' in query '${n}'`)}return e}const j0=function(n,e){const t=ob(n),r=t.namespace;t.domain==="firebase.com"&&ui(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&ui("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||jk();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new DT(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new ot(t.pathString)}},ob=function(n){let e="",t="",r="",s="",a="",u=!0,d="https",f=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(d=n.substring(0,g-1),n=n.substring(g+2));let v=n.indexOf("/");v===-1&&(v=n.length);let w=n.indexOf("?");w===-1&&(w=n.length),e=n.substring(0,Math.min(v,w)),v<w&&(s=ib(n.substring(v,w)));const I=sb(n.substring(Math.min(n.length,w)));g=e.indexOf(":"),g>=0?(u=d==="https"||d==="wss",f=parseInt(e.substring(g+1),10)):g=e.length;const O=e.slice(0,g);if(O.toLowerCase()==="localhost")t="localhost";else if(O.split(".").length<=2)t=O;else{const U=e.indexOf(".");r=e.substring(0,U).toLowerCase(),t=e.substring(U+1),a=r}"ns"in I&&(a=I.ns)}return{host:e,port:f,domain:t,subdomain:r,secure:u,scheme:d,pathString:s,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",ab=function(){let n=0;const e=[];return function(t){const r=t===n;n=t;let s;const a=new Array(8);for(s=7;s>=0;s--)a[s]=z0.charAt(t%64),t=Math.floor(t/64);ee(t===0,"Cannot push at time == 0");let u=a.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)u+=z0.charAt(e[s]);return ee(u.length===20,"nextPushId: Length should be 20."),u}}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return Le(this._path)?null:WT(this._path)}get ref(){return new co(this._repo,this._path)}get _queryIdentifier(){const e=C0(this._queryParams),t=ag(e);return t==="{}"?"default":t}get _queryObject(){return C0(this._queryParams)}isEqual(e){if(e=Pt(e),!(e instanceof Ng))return!1;const t=this._repo===e._repo,r=qT(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+TP(this._path)}}class co extends Ng{constructor(e,t){super(e,t,new fg,!1)}get parent(){const e=HT(this._path);return e===null?null:new co(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function lb(n,e){return n=Pt(n),n._checkNotDeleted("ref"),fm(n._root,e)}function fm(n,e){return n=Pt(n),xe(n._path)===null?BN("child","path",e):RI("child","path",e),new co(n._repo,At(n._path,e))}function ub(n,e){n=Pt(n),kI("push",n._path),AI("push",e,n._path,!0);const t=NI(n._repo),r=ab(t),s=fm(n,r),a=fm(n,r);let u;return e!=null?u=cb(a,e).then(()=>a):u=Promise.resolve(a),s.then=u.then.bind(u),s.catch=u.then.bind(u,void 0),s}function cb(n,e){n=Pt(n),kI("set",n._path),AI("set",e,n._path,!1);const t=new dd;return JN(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}RN(co);kN(co);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb="FIREBASE_DATABASE_EMULATOR_HOST",pm={};let db=!1;function fb(n,e,t,r){n.repoInfo_=new DT(e,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function pb(n,e,t,r,s){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||ui("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),en("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=j0(a,s),d=u.repoInfo,f;typeof process<"u"&&o0&&(f=o0[hb]),f?(a=`http://${f}?ns=${d.namespace}`,u=j0(a,s),d=u.repoInfo):u.repoInfo.secure;const g=new Yk(n.name,n.options,e);WN("Invalid Firebase Database URL",u),Le(u.path)||ui("Database URL must point to the root of a Firebase Database (not including a child path).");const v=gb(d,n,g,new Qk(n,t));return new _b(v,n)}function mb(n,e){const t=pm[e];(!t||t[n.key]!==n)&&ui(`Database ${e}(${n.repoInfo_}) has already been deleted.`),eb(n),delete t[n.key]}function gb(n,e,t,r){let s=pm[e.name];s||(s={},pm[e.name]=s);let a=s[n.toURLString()];return a&&ui("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new QN(n,db,t,r),s[n.toURLString()]=a,a}class _b{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(YN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new co(this._repo,Qe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(mb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ui("Cannot call "+e+" on a deleted database.")}}function yb(n=og(),e){const t=md(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=lT("database");r&&vb(t,...r)}return t}function vb(n,e,t,r={}){n=Pt(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&is(r,a.repoInfo_.emulatorOptions))return;ui("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&ui('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new ph(ph.OWNER);else if(r.mockUserToken){const d=typeof r.mockUserToken=="string"?r.mockUserToken:hT(r.mockUserToken,n.app.options.projectId);u=new ph(d)}fb(a,s,r,u)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(n){Dk(lo),Js(new ss("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return pb(r,s,a,t)},"PUBLIC").setMultipleInstances(!0)),br(a0,l0,n),br(a0,l0,"esm2017")}oi.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};oi.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Eb();var wb="firebase",Tb="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */br(wb,Tb,"app");const Ib={apiKey:"AIzaSyAPviym6GlHi7y7wfXQxOD2J9u0C5syUNk",authDomain:"moodmate-42cc6.firebaseapp.com",projectId:"moodmate-42cc6",storageBucket:"moodmate-42cc6.firebasestorage.app",messagingSenderId:"632502462277",appId:"1:632502462277:web:8bced5f25946d84bd6002c",measurementId:"G-ZTYMMBSLY8"},Sb=sg(Ib),Cb=yb(Sb);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Ab(n,e,t){return(e=kb(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function B0(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,r)}return t}function Y(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?B0(Object(t),!0).forEach(function(r){Ab(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):B0(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Rb(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function kb(n){var e=Rb(n,"string");return typeof e=="symbol"?e:e+""}const W0=()=>{};let bg={},VI={},FI=null,UI={mark:W0,measure:W0};try{typeof window<"u"&&(bg=window),typeof document<"u"&&(VI=document),typeof MutationObserver<"u"&&(FI=MutationObserver),typeof performance<"u"&&(UI=performance)}catch{}const{userAgent:$0=""}=bg.navigator||{},as=bg,st=VI,H0=FI,sh=UI;as.document;const yi=!!st.documentElement&&!!st.head&&typeof st.addEventListener=="function"&&typeof st.createElement=="function",jI=~$0.indexOf("MSIE")||~$0.indexOf("Trident/");var Pb=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Nb=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,zI={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},bb={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},BI=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],sn="classic",Td="duotone",Ob="sharp",xb="sharp-duotone",WI=[sn,Td,Ob,xb],Db={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Mb={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Lb=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Vb={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Fb=["fak","fa-kit","fakd","fa-kit-duotone"],q0={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ub=["kit"],jb={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},zb=["fak","fakd"],Bb={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},G0={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},oh={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Wb=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],$b=["fak","fa-kit","fakd","fa-kit-duotone"],Hb={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},qb={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Gb={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},mm={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Kb=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],gm=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Wb,...Kb],Qb=["solid","regular","light","thin","duotone","brands"],$I=[1,2,3,4,5,6,7,8,9,10],Yb=$I.concat([11,12,13,14,15,16,17,18,19,20]),Xb=[...Object.keys(Gb),...Qb,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",oh.GROUP,oh.SWAP_OPACITY,oh.PRIMARY,oh.SECONDARY].concat($I.map(n=>"".concat(n,"x"))).concat(Yb.map(n=>"w-".concat(n))),Jb={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const hi="___FONT_AWESOME___",_m=16,HI="fa",qI="svg-inline--fa",no="data-fa-i2svg",ym="data-fa-pseudo-element",Zb="data-fa-pseudo-element-pending",Og="data-prefix",xg="data-icon",K0="fontawesome-i2svg",eO="async",tO=["HTML","HEAD","STYLE","SCRIPT"],GI=(()=>{try{return!0}catch{return!1}})();function Nu(n){return new Proxy(n,{get(e,t){return t in e?e[t]:e[sn]}})}const KI=Y({},zI);KI[sn]=Y(Y(Y(Y({},{"fa-duotone":"duotone"}),zI[sn]),q0.kit),q0["kit-duotone"]);const nO=Nu(KI),vm=Y({},Vb);vm[sn]=Y(Y(Y(Y({},{duotone:"fad"}),vm[sn]),G0.kit),G0["kit-duotone"]);const Q0=Nu(vm),Em=Y({},mm);Em[sn]=Y(Y({},Em[sn]),Bb.kit);const Dg=Nu(Em),wm=Y({},qb);wm[sn]=Y(Y({},wm[sn]),jb.kit);Nu(wm);const rO=Pb,QI="fa-layers-text",iO=Nb,sO=Y({},Db);Nu(sO);const oO=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Dp=bb,aO=[...Ub,...Xb],nu=as.FontAwesomeConfig||{};function lO(n){var e=st.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function uO(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}st&&typeof st.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,r]=e;const s=uO(lO(t));s!=null&&(nu[r]=s)});const YI={styleDefault:"solid",familyDefault:sn,cssPrefix:HI,replacementClass:qI,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};nu.familyPrefix&&(nu.cssPrefix=nu.familyPrefix);const Ra=Y(Y({},YI),nu);Ra.autoReplaceSvg||(Ra.observeMutations=!1);const de={};Object.keys(YI).forEach(n=>{Object.defineProperty(de,n,{enumerable:!0,set:function(e){Ra[n]=e,ru.forEach(t=>t(de))},get:function(){return Ra[n]}})});Object.defineProperty(de,"familyPrefix",{enumerable:!0,set:function(n){Ra.cssPrefix=n,ru.forEach(e=>e(de))},get:function(){return Ra.cssPrefix}});as.FontAwesomeConfig=de;const ru=[];function cO(n){return ru.push(n),()=>{ru.splice(ru.indexOf(n),1)}}const $i=_m,Pr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function hO(n){if(!n||!yi)return;const e=st.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;const t=st.head.childNodes;let r=null;for(let s=t.length-1;s>-1;s--){const a=t[s],u=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(u)>-1&&(r=a)}return st.head.insertBefore(e,r),n}const dO="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pu(){let n=12,e="";for(;n-- >0;)e+=dO[Math.random()*62|0];return e}function za(n){const e=[];for(let t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function Mg(n){return n.classList?za(n.classList):(n.getAttribute("class")||"").split(" ").filter(e=>e)}function XI(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fO(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,'="').concat(XI(n[t]),'" '),"").trim()}function Id(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,": ").concat(n[t].trim(),";"),"")}function Lg(n){return n.size!==Pr.size||n.x!==Pr.x||n.y!==Pr.y||n.rotate!==Pr.rotate||n.flipX||n.flipY}function pO(n){let{transform:e,containerWidth:t,iconWidth:r}=n;const s={transform:"translate(".concat(t/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),u="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),d="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(a," ").concat(u," ").concat(d)},g={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:f,path:g}}function mO(n){let{transform:e,width:t=_m,height:r=_m,startCentered:s=!1}=n,a="";return s&&jI?a+="translate(".concat(e.x/$i-t/2,"em, ").concat(e.y/$i-r/2,"em) "):s?a+="translate(calc(-50% + ".concat(e.x/$i,"em), calc(-50% + ").concat(e.y/$i,"em)) "):a+="translate(".concat(e.x/$i,"em, ").concat(e.y/$i,"em) "),a+="scale(".concat(e.size/$i*(e.flipX?-1:1),", ").concat(e.size/$i*(e.flipY?-1:1),") "),a+="rotate(".concat(e.rotate,"deg) "),a}var gO=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function JI(){const n=HI,e=qI,t=de.cssPrefix,r=de.replacementClass;let s=gO;if(t!==n||r!==e){const a=new RegExp("\\.".concat(n,"\\-"),"g"),u=new RegExp("\\--".concat(n,"\\-"),"g"),d=new RegExp("\\.".concat(e),"g");s=s.replace(a,".".concat(t,"-")).replace(u,"--".concat(t,"-")).replace(d,".".concat(r))}return s}let Y0=!1;function Mp(){de.autoAddCss&&!Y0&&(hO(JI()),Y0=!0)}var _O={mixout(){return{dom:{css:JI,insertCss:Mp}}},hooks(){return{beforeDOMElementCreation(){Mp()},beforeI2svg(){Mp()}}}};const di=as||{};di[hi]||(di[hi]={});di[hi].styles||(di[hi].styles={});di[hi].hooks||(di[hi].hooks={});di[hi].shims||(di[hi].shims=[]);var Nr=di[hi];const ZI=[],eS=function(){st.removeEventListener("DOMContentLoaded",eS),Wh=1,ZI.map(n=>n())};let Wh=!1;yi&&(Wh=(st.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(st.readyState),Wh||st.addEventListener("DOMContentLoaded",eS));function yO(n){yi&&(Wh?setTimeout(n,0):ZI.push(n))}function bu(n){const{tag:e,attributes:t={},children:r=[]}=n;return typeof n=="string"?XI(n):"<".concat(e," ").concat(fO(t),">").concat(r.map(bu).join(""),"</").concat(e,">")}function X0(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var Lp=function(e,t,r,s){var a=Object.keys(e),u=a.length,d=t,f,g,v;for(r===void 0?(f=1,v=e[a[0]]):(f=0,v=r);f<u;f++)g=a[f],v=d(v,e[g],g,e);return v};function vO(n){const e=[];let t=0;const r=n.length;for(;t<r;){const s=n.charCodeAt(t++);if(s>=55296&&s<=56319&&t<r){const a=n.charCodeAt(t++);(a&64512)==56320?e.push(((s&1023)<<10)+(a&1023)+65536):(e.push(s),t--)}else e.push(s)}return e}function Tm(n){const e=vO(n);return e.length===1?e[0].toString(16):null}function EO(n,e){const t=n.length;let r=n.charCodeAt(e),s;return r>=55296&&r<=56319&&t>e+1&&(s=n.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function J0(n){return Object.keys(n).reduce((e,t)=>{const r=n[t];return!!r.icon?e[r.iconName]=r.icon:e[t]=r,e},{})}function Im(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=t,s=J0(e);typeof Nr.hooks.addPack=="function"&&!r?Nr.hooks.addPack(n,J0(e)):Nr.styles[n]=Y(Y({},Nr.styles[n]||{}),s),n==="fas"&&Im("fa",e)}const{styles:mu,shims:wO}=Nr,tS=Object.keys(Dg),TO=tS.reduce((n,e)=>(n[e]=Object.keys(Dg[e]),n),{});let Vg=null,nS={},rS={},iS={},sS={},oS={};function IO(n){return~aO.indexOf(n)}function SO(n,e){const t=e.split("-"),r=t[0],s=t.slice(1).join("-");return r===n&&s!==""&&!IO(s)?s:null}const aS=()=>{const n=r=>Lp(mu,(s,a,u)=>(s[u]=Lp(a,r,{}),s),{});nS=n((r,s,a)=>(s[3]&&(r[s[3]]=a),s[2]&&s[2].filter(d=>typeof d=="number").forEach(d=>{r[d.toString(16)]=a}),r)),rS=n((r,s,a)=>(r[a]=a,s[2]&&s[2].filter(d=>typeof d=="string").forEach(d=>{r[d]=a}),r)),oS=n((r,s,a)=>{const u=s[2];return r[a]=a,u.forEach(d=>{r[d]=a}),r});const e="far"in mu||de.autoFetchSvg,t=Lp(wO,(r,s)=>{const a=s[0];let u=s[1];const d=s[2];return u==="far"&&!e&&(u="fas"),typeof a=="string"&&(r.names[a]={prefix:u,iconName:d}),typeof a=="number"&&(r.unicodes[a.toString(16)]={prefix:u,iconName:d}),r},{names:{},unicodes:{}});iS=t.names,sS=t.unicodes,Vg=Sd(de.styleDefault,{family:de.familyDefault})};cO(n=>{Vg=Sd(n.styleDefault,{family:de.familyDefault})});aS();function Fg(n,e){return(nS[n]||{})[e]}function CO(n,e){return(rS[n]||{})[e]}function Ks(n,e){return(oS[n]||{})[e]}function lS(n){return iS[n]||{prefix:null,iconName:null}}function AO(n){const e=sS[n],t=Fg("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function ls(){return Vg}const uS=()=>({prefix:null,iconName:null,rest:[]});function RO(n){let e=sn;const t=tS.reduce((r,s)=>(r[s]="".concat(de.cssPrefix,"-").concat(s),r),{});return WI.forEach(r=>{(n.includes(t[r])||n.some(s=>TO[r].includes(s)))&&(e=r)}),e}function Sd(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=sn}=e,r=nO[t][n];if(t===Td&&!n)return"fad";const s=Q0[t][n]||Q0[t][r],a=n in Nr.styles?n:null;return s||a||null}function kO(n){let e=[],t=null;return n.forEach(r=>{const s=SO(de.cssPrefix,r);s?t=s:r&&e.push(r)}),{iconName:t,rest:e}}function Z0(n){return n.sort().filter((e,t,r)=>r.indexOf(e)===t)}function Cd(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e;let r=null;const s=gm.concat($b),a=Z0(n.filter(w=>s.includes(w))),u=Z0(n.filter(w=>!gm.includes(w))),d=a.filter(w=>(r=w,!BI.includes(w))),[f=null]=d,g=RO(a),v=Y(Y({},kO(u)),{},{prefix:Sd(f,{family:g})});return Y(Y(Y({},v),OO({values:n,family:g,styles:mu,config:de,canonical:v,givenPrefix:r})),PO(t,r,v))}function PO(n,e,t){let{prefix:r,iconName:s}=t;if(n||!r||!s)return{prefix:r,iconName:s};const a=e==="fa"?lS(s):{},u=Ks(r,s);return s=a.iconName||u||s,r=a.prefix||r,r==="far"&&!mu.far&&mu.fas&&!de.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const NO=WI.filter(n=>n!==sn||n!==Td),bO=Object.keys(mm).filter(n=>n!==sn).map(n=>Object.keys(mm[n])).flat();function OO(n){const{values:e,family:t,canonical:r,givenPrefix:s="",styles:a={},config:u={}}=n,d=t===Td,f=e.includes("fa-duotone")||e.includes("fad"),g=u.familyDefault==="duotone",v=r.prefix==="fad"||r.prefix==="fa-duotone";if(!d&&(f||g||v)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&NO.includes(t)&&(Object.keys(a).find(I=>bO.includes(I))||u.autoFetchSvg)){const I=Lb.get(t).defaultShortPrefixId;r.prefix=I,r.iconName=Ks(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=ls()||"fas"),r}class xO{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];const s=t.reduce(this._pullDefinitions,{});Object.keys(s).forEach(a=>{this.definitions[a]=Y(Y({},this.definitions[a]||{}),s[a]),Im(a,s[a]);const u=Dg[sn][a];u&&Im(u,s[a]),aS()})}reset(){this.definitions={}}_pullDefinitions(e,t){const r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(s=>{const{prefix:a,iconName:u,icon:d}=r[s],f=d[2];e[a]||(e[a]={}),f.length>0&&f.forEach(g=>{typeof g=="string"&&(e[a][g]=d)}),e[a][u]=d}),e}}let eE=[],ma={};const va={},DO=Object.keys(va);function MO(n,e){let{mixoutsTo:t}=e;return eE=n,ma={},Object.keys(va).forEach(r=>{DO.indexOf(r)===-1&&delete va[r]}),eE.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(a=>{typeof s[a]=="function"&&(t[a]=s[a]),typeof s[a]=="object"&&Object.keys(s[a]).forEach(u=>{t[a]||(t[a]={}),t[a][u]=s[a][u]})}),r.hooks){const a=r.hooks();Object.keys(a).forEach(u=>{ma[u]||(ma[u]=[]),ma[u].push(a[u])})}r.provides&&r.provides(va)}),t}function Sm(n,e){for(var t=arguments.length,r=new Array(t>2?t-2:0),s=2;s<t;s++)r[s-2]=arguments[s];return(ma[n]||[]).forEach(u=>{e=u.apply(null,[e,...r])}),e}function ro(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];(ma[n]||[]).forEach(a=>{a.apply(null,t)})}function us(){const n=arguments[0],e=Array.prototype.slice.call(arguments,1);return va[n]?va[n].apply(null,e):void 0}function Cm(n){n.prefix==="fa"&&(n.prefix="fas");let{iconName:e}=n;const t=n.prefix||ls();if(e)return e=Ks(t,e)||e,X0(cS.definitions,t,e)||X0(Nr.styles,t,e)}const cS=new xO,LO=()=>{de.autoReplaceSvg=!1,de.observeMutations=!1,ro("noAuto")},VO={i2svg:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return yi?(ro("beforeI2svg",n),us("pseudoElements2svg",n),us("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=n;de.autoReplaceSvg===!1&&(de.autoReplaceSvg=!0),de.observeMutations=!0,yO(()=>{UO({autoReplaceSvgRoot:e}),ro("watch",n)})}},FO={icon:n=>{if(n===null)return null;if(typeof n=="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:Ks(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){const e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],t=Sd(n[0]);return{prefix:t,iconName:Ks(t,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(de.cssPrefix,"-"))>-1||n.match(rO))){const e=Cd(n.split(" "),{skipLookups:!0});return{prefix:e.prefix||ls(),iconName:Ks(e.prefix,e.iconName)||e.iconName}}if(typeof n=="string"){const e=ls();return{prefix:e,iconName:Ks(e,n)||n}}}},Nn={noAuto:LO,config:de,dom:VO,parse:FO,library:cS,findIconDefinition:Cm,toHtml:bu},UO=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=st}=n;(Object.keys(Nr.styles).length>0||de.autoFetchSvg)&&yi&&de.autoReplaceSvg&&Nn.dom.i2svg({node:e})};function Ad(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(t=>bu(t))}}),Object.defineProperty(n,"node",{get:function(){if(!yi)return;const t=st.createElement("div");return t.innerHTML=n.html,t.children}}),n}function jO(n){let{children:e,main:t,mask:r,attributes:s,styles:a,transform:u}=n;if(Lg(u)&&t.found&&!r.found){const{width:d,height:f}=t,g={x:d/f/2,y:.5};s.style=Id(Y(Y({},a),{},{"transform-origin":"".concat(g.x+u.x/16,"em ").concat(g.y+u.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function zO(n){let{prefix:e,iconName:t,children:r,attributes:s,symbol:a}=n;const u=a===!0?"".concat(e,"-").concat(de.cssPrefix,"-").concat(t):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Y(Y({},s),{},{id:u}),children:r}]}]}function Ug(n){const{icons:{main:e,mask:t},prefix:r,iconName:s,transform:a,symbol:u,title:d,maskId:f,titleId:g,extra:v,watchable:w=!1}=n,{width:I,height:O}=t.found?t:e,U=zb.includes(r),W=[de.replacementClass,s?"".concat(de.cssPrefix,"-").concat(s):""].filter(ke=>v.classes.indexOf(ke)===-1).filter(ke=>ke!==""||!!ke).concat(v.classes).join(" ");let B={children:[],attributes:Y(Y({},v.attributes),{},{"data-prefix":r,"data-icon":s,class:W,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(O)})};const se=U&&!~v.classes.indexOf("fa-fw")?{width:"".concat(I/O*16*.0625,"em")}:{};w&&(B.attributes[no]=""),d&&(B.children.push({tag:"title",attributes:{id:B.attributes["aria-labelledby"]||"title-".concat(g||pu())},children:[d]}),delete B.attributes.title);const ne=Y(Y({},B),{},{prefix:r,iconName:s,main:e,mask:t,maskId:f,transform:a,symbol:u,styles:Y(Y({},se),v.styles)}),{children:oe,attributes:me}=t.found&&e.found?us("generateAbstractMask",ne)||{children:[],attributes:{}}:us("generateAbstractIcon",ne)||{children:[],attributes:{}};return ne.children=oe,ne.attributes=me,u?zO(ne):jO(ne)}function tE(n){const{content:e,width:t,height:r,transform:s,title:a,extra:u,watchable:d=!1}=n,f=Y(Y(Y({},u.attributes),a?{title:a}:{}),{},{class:u.classes.join(" ")});d&&(f[no]="");const g=Y({},u.styles);Lg(s)&&(g.transform=mO({transform:s,startCentered:!0,width:t,height:r}),g["-webkit-transform"]=g.transform);const v=Id(g);v.length>0&&(f.style=v);const w=[];return w.push({tag:"span",attributes:f,children:[e]}),a&&w.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),w}function BO(n){const{content:e,title:t,extra:r}=n,s=Y(Y(Y({},r.attributes),t?{title:t}:{}),{},{class:r.classes.join(" ")}),a=Id(r.styles);a.length>0&&(s.style=a);const u=[];return u.push({tag:"span",attributes:s,children:[e]}),t&&u.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),u}const{styles:Vp}=Nr;function Am(n){const e=n[0],t=n[1],[r]=n.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(de.cssPrefix,"-").concat(Dp.GROUP)},children:[{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(Dp.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(Dp.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:t,icon:s}}const WO={found:!1,width:512,height:512};function $O(n,e){!GI&&!de.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function Rm(n,e){let t=e;return e==="fa"&&de.styleDefault!==null&&(e=ls()),new Promise((r,s)=>{if(t==="fa"){const a=lS(n)||{};n=a.iconName||n,e=a.prefix||e}if(n&&e&&Vp[e]&&Vp[e][n]){const a=Vp[e][n];return r(Am(a))}$O(n,e),r(Y(Y({},WO),{},{icon:de.showMissingIcons&&n?us("missingIconAbstract")||{}:{}}))})}const nE=()=>{},km=de.measurePerformance&&sh&&sh.mark&&sh.measure?sh:{mark:nE,measure:nE},Kl='FA "6.7.2"',HO=n=>(km.mark("".concat(Kl," ").concat(n," begins")),()=>hS(n)),hS=n=>{km.mark("".concat(Kl," ").concat(n," ends")),km.measure("".concat(Kl," ").concat(n),"".concat(Kl," ").concat(n," begins"),"".concat(Kl," ").concat(n," ends"))};var jg={begin:HO,end:hS};const gh=()=>{};function rE(n){return typeof(n.getAttribute?n.getAttribute(no):null)=="string"}function qO(n){const e=n.getAttribute?n.getAttribute(Og):null,t=n.getAttribute?n.getAttribute(xg):null;return e&&t}function GO(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(de.replacementClass)}function KO(){return de.autoReplaceSvg===!0?_h.replace:_h[de.autoReplaceSvg]||_h.replace}function QO(n){return st.createElementNS("http://www.w3.org/2000/svg",n)}function YO(n){return st.createElement(n)}function dS(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=n.tag==="svg"?QO:YO}=e;if(typeof n=="string")return st.createTextNode(n);const r=t(n.tag);return Object.keys(n.attributes||[]).forEach(function(a){r.setAttribute(a,n.attributes[a])}),(n.children||[]).forEach(function(a){r.appendChild(dS(a,{ceFn:t}))}),r}function XO(n){let e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const _h={replace:function(n){const e=n[0];if(e.parentNode)if(n[1].forEach(t=>{e.parentNode.insertBefore(dS(t),e)}),e.getAttribute(no)===null&&de.keepOriginalSource){let t=st.createComment(XO(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(n){const e=n[0],t=n[1];if(~Mg(e).indexOf(de.replacementClass))return _h.replace(n);const r=new RegExp("".concat(de.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const a=t[0].attributes.class.split(" ").reduce((u,d)=>(d===de.replacementClass||d.match(r)?u.toSvg.push(d):u.toNode.push(d),u),{toNode:[],toSvg:[]});t[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",a.toNode.join(" "))}const s=t.map(a=>bu(a)).join(`
`);e.setAttribute(no,""),e.innerHTML=s}};function iE(n){n()}function fS(n,e){const t=typeof e=="function"?e:gh;if(n.length===0)t();else{let r=iE;de.mutateApproach===eO&&(r=as.requestAnimationFrame||iE),r(()=>{const s=KO(),a=jg.begin("mutate");n.map(s),a(),t()})}}let zg=!1;function pS(){zg=!0}function Pm(){zg=!1}let $h=null;function sE(n){if(!H0||!de.observeMutations)return;const{treeCallback:e=gh,nodeCallback:t=gh,pseudoElementsCallback:r=gh,observeMutationsRoot:s=st}=n;$h=new H0(a=>{if(zg)return;const u=ls();za(a).forEach(d=>{if(d.type==="childList"&&d.addedNodes.length>0&&!rE(d.addedNodes[0])&&(de.searchPseudoElements&&r(d.target),e(d.target)),d.type==="attributes"&&d.target.parentNode&&de.searchPseudoElements&&r(d.target.parentNode),d.type==="attributes"&&rE(d.target)&&~oO.indexOf(d.attributeName))if(d.attributeName==="class"&&qO(d.target)){const{prefix:f,iconName:g}=Cd(Mg(d.target));d.target.setAttribute(Og,f||u),g&&d.target.setAttribute(xg,g)}else GO(d.target)&&t(d.target)})}),yi&&$h.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function JO(){$h&&$h.disconnect()}function ZO(n){const e=n.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((r,s)=>{const a=s.split(":"),u=a[0],d=a.slice(1);return u&&d.length>0&&(r[u]=d.join(":").trim()),r},{})),t}function ex(n){const e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),r=n.innerText!==void 0?n.innerText.trim():"";let s=Cd(Mg(n));return s.prefix||(s.prefix=ls()),e&&t&&(s.prefix=e,s.iconName=t),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=CO(s.prefix,n.innerText)||Fg(s.prefix,Tm(n.innerText))),!s.iconName&&de.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=n.firstChild.data)),s}function tx(n){const e=za(n.attributes).reduce((s,a)=>(s.name!=="class"&&s.name!=="style"&&(s[a.name]=a.value),s),{}),t=n.getAttribute("title"),r=n.getAttribute("data-fa-title-id");return de.autoA11y&&(t?e["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(r||pu()):(e["aria-hidden"]="true",e.focusable="false")),e}function nx(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Pr,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function oE(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:r,rest:s}=ex(n),a=tx(n),u=Sm("parseNodeAttributes",{},n);let d=e.styleParser?ZO(n):[];return Y({iconName:t,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:r,transform:Pr,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:d,attributes:a}},u)}const{styles:rx}=Nr;function mS(n){const e=de.autoReplaceSvg==="nest"?oE(n,{styleParser:!1}):oE(n);return~e.extra.classes.indexOf(QI)?us("generateLayersText",n,e):us("generateSvgReplacementMutation",n,e)}function ix(){return[...Fb,...gm]}function aE(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!yi)return Promise.resolve();const t=st.documentElement.classList,r=v=>t.add("".concat(K0,"-").concat(v)),s=v=>t.remove("".concat(K0,"-").concat(v)),a=de.autoFetchSvg?ix():BI.concat(Object.keys(rx));a.includes("fa")||a.push("fa");const u=[".".concat(QI,":not([").concat(no,"])")].concat(a.map(v=>".".concat(v,":not([").concat(no,"])"))).join(", ");if(u.length===0)return Promise.resolve();let d=[];try{d=za(n.querySelectorAll(u))}catch{}if(d.length>0)r("pending"),s("complete");else return Promise.resolve();const f=jg.begin("onTree"),g=d.reduce((v,w)=>{try{const I=mS(w);I&&v.push(I)}catch(I){GI||I.name==="MissingIcon"&&console.error(I)}return v},[]);return new Promise((v,w)=>{Promise.all(g).then(I=>{fS(I,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),f(),v()})}).catch(I=>{f(),w(I)})})}function sx(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;mS(n).then(t=>{t&&fS([t],e)})}function ox(n){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Cm(e||{});let{mask:s}=t;return s&&(s=(s||{}).icon?s:Cm(s||{})),n(r,Y(Y({},t),{},{mask:s}))}}const ax=function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=Pr,symbol:r=!1,mask:s=null,maskId:a=null,title:u=null,titleId:d=null,classes:f=[],attributes:g={},styles:v={}}=e;if(!n)return;const{prefix:w,iconName:I,icon:O}=n;return Ad(Y({type:"icon"},n),()=>(ro("beforeDOMElementCreation",{iconDefinition:n,params:e}),de.autoA11y&&(u?g["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(d||pu()):(g["aria-hidden"]="true",g.focusable="false")),Ug({icons:{main:Am(O),mask:s?Am(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:I,transform:Y(Y({},Pr),t),symbol:r,title:u,maskId:a,titleId:d,extra:{attributes:g,styles:v,classes:f}})))};var lx={mixout(){return{icon:ox(ax)}},hooks(){return{mutationObserverCallbacks(n){return n.treeCallback=aE,n.nodeCallback=sx,n}}},provides(n){n.i2svg=function(e){const{node:t=st,callback:r=()=>{}}=e;return aE(t,r)},n.generateSvgReplacementMutation=function(e,t){const{iconName:r,title:s,titleId:a,prefix:u,transform:d,symbol:f,mask:g,maskId:v,extra:w}=t;return new Promise((I,O)=>{Promise.all([Rm(r,u),g.iconName?Rm(g.iconName,g.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(U=>{let[W,B]=U;I([e,Ug({icons:{main:W,mask:B},prefix:u,iconName:r,transform:d,symbol:f,maskId:v,title:s,titleId:a,extra:w,watchable:!0})])}).catch(O)})},n.generateAbstractIcon=function(e){let{children:t,attributes:r,main:s,transform:a,styles:u}=e;const d=Id(u);d.length>0&&(r.style=d);let f;return Lg(a)&&(f=us("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),t.push(f||s.icon),{children:t,attributes:r}}}},ux={mixout(){return{layer(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return Ad({type:"layer"},()=>{ro("beforeDOMElementCreation",{assembler:n,params:e});let r=[];return n(s=>{Array.isArray(s)?s.map(a=>{r=r.concat(a.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(de.cssPrefix,"-layers"),...t].join(" ")},children:r}]})}}}},cx={mixout(){return{counter(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:r=[],attributes:s={},styles:a={}}=e;return Ad({type:"counter",content:n},()=>(ro("beforeDOMElementCreation",{content:n,params:e}),BO({content:n.toString(),title:t,extra:{attributes:s,styles:a,classes:["".concat(de.cssPrefix,"-layers-counter"),...r]}})))}}}},hx={mixout(){return{text(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=Pr,title:r=null,classes:s=[],attributes:a={},styles:u={}}=e;return Ad({type:"text",content:n},()=>(ro("beforeDOMElementCreation",{content:n,params:e}),tE({content:n,transform:Y(Y({},Pr),t),title:r,extra:{attributes:a,styles:u,classes:["".concat(de.cssPrefix,"-layers-text"),...s]}})))}}},provides(n){n.generateLayersText=function(e,t){const{title:r,transform:s,extra:a}=t;let u=null,d=null;if(jI){const f=parseInt(getComputedStyle(e).fontSize,10),g=e.getBoundingClientRect();u=g.width/f,d=g.height/f}return de.autoA11y&&!r&&(a.attributes["aria-hidden"]="true"),Promise.resolve([e,tE({content:e.innerHTML,width:u,height:d,transform:s,title:r,extra:a,watchable:!0})])}}};const dx=new RegExp('"',"ug"),lE=[1105920,1112319],uE=Y(Y(Y(Y({},{FontAwesome:{normal:"fas",400:"fas"}}),Mb),Jb),Hb),Nm=Object.keys(uE).reduce((n,e)=>(n[e.toLowerCase()]=uE[e],n),{}),fx=Object.keys(Nm).reduce((n,e)=>{const t=Nm[e];return n[e]=t[900]||[...Object.entries(t)][0][1],n},{});function px(n){const e=n.replace(dx,""),t=EO(e,0),r=t>=lE[0]&&t<=lE[1],s=e.length===2?e[0]===e[1]:!1;return{value:Tm(s?e[0]:e),isSecondary:r||s}}function mx(n,e){const t=n.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Nm[t]||{})[s]||fx[t]}function cE(n,e){const t="".concat(Zb).concat(e.replace(":","-"));return new Promise((r,s)=>{if(n.getAttribute(t)!==null)return r();const u=za(n.children).filter(I=>I.getAttribute(ym)===e)[0],d=as.getComputedStyle(n,e),f=d.getPropertyValue("font-family"),g=f.match(iO),v=d.getPropertyValue("font-weight"),w=d.getPropertyValue("content");if(u&&!g)return n.removeChild(u),r();if(g&&w!=="none"&&w!==""){const I=d.getPropertyValue("content");let O=mx(f,v);const{value:U,isSecondary:W}=px(I),B=g[0].startsWith("FontAwesome");let se=Fg(O,U),ne=se;if(B){const oe=AO(U);oe.iconName&&oe.prefix&&(se=oe.iconName,O=oe.prefix)}if(se&&!W&&(!u||u.getAttribute(Og)!==O||u.getAttribute(xg)!==ne)){n.setAttribute(t,ne),u&&n.removeChild(u);const oe=nx(),{extra:me}=oe;me.attributes[ym]=e,Rm(se,O).then(ke=>{const Ce=Ug(Y(Y({},oe),{},{icons:{main:ke,mask:uS()},prefix:O,iconName:ne,extra:me,watchable:!0})),N=st.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(N,n.firstChild):n.appendChild(N),N.outerHTML=Ce.map(S=>bu(S)).join(`
`),n.removeAttribute(t),r()}).catch(s)}else r()}else r()})}function gx(n){return Promise.all([cE(n,"::before"),cE(n,"::after")])}function _x(n){return n.parentNode!==document.head&&!~tO.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(ym)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function hE(n){if(yi)return new Promise((e,t)=>{const r=za(n.querySelectorAll("*")).filter(_x).map(gx),s=jg.begin("searchPseudoElements");pS(),Promise.all(r).then(()=>{s(),Pm(),e()}).catch(()=>{s(),Pm(),t()})})}var yx={hooks(){return{mutationObserverCallbacks(n){return n.pseudoElementsCallback=hE,n}}},provides(n){n.pseudoElements2svg=function(e){const{node:t=st}=e;de.searchPseudoElements&&hE(t)}}};let dE=!1;var vx={mixout(){return{dom:{unwatch(){pS(),dE=!0}}}},hooks(){return{bootstrap(){sE(Sm("mutationObserverCallbacks",{}))},noAuto(){JO()},watch(n){const{observeMutationsRoot:e}=n;dE?Pm():sE(Sm("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const fE=n=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce((t,r)=>{const s=r.toLowerCase().split("-"),a=s[0];let u=s.slice(1).join("-");if(a&&u==="h")return t.flipX=!0,t;if(a&&u==="v")return t.flipY=!0,t;if(u=parseFloat(u),isNaN(u))return t;switch(a){case"grow":t.size=t.size+u;break;case"shrink":t.size=t.size-u;break;case"left":t.x=t.x-u;break;case"right":t.x=t.x+u;break;case"up":t.y=t.y-u;break;case"down":t.y=t.y+u;break;case"rotate":t.rotate=t.rotate+u;break}return t},e)};var Ex={mixout(){return{parse:{transform:n=>fE(n)}}},hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-transform");return t&&(n.transform=fE(t)),n}}},provides(n){n.generateAbstractTransformGrouping=function(e){let{main:t,transform:r,containerWidth:s,iconWidth:a}=e;const u={transform:"translate(".concat(s/2," 256)")},d="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),g="rotate(".concat(r.rotate," 0 0)"),v={transform:"".concat(d," ").concat(f," ").concat(g)},w={transform:"translate(".concat(a/2*-1," -256)")},I={outer:u,inner:v,path:w};return{tag:"g",attributes:Y({},I.outer),children:[{tag:"g",attributes:Y({},I.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:Y(Y({},t.icon.attributes),I.path)}]}]}}}};const Fp={x:0,y:0,width:"100%",height:"100%"};function pE(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function wx(n){return n.tag==="g"?n.children:[n]}var Tx={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-mask"),r=t?Cd(t.split(" ").map(s=>s.trim())):uS();return r.prefix||(r.prefix=ls()),n.mask=r,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides(n){n.generateAbstractMask=function(e){let{children:t,attributes:r,main:s,mask:a,maskId:u,transform:d}=e;const{width:f,icon:g}=s,{width:v,icon:w}=a,I=pO({transform:d,containerWidth:v,iconWidth:f}),O={tag:"rect",attributes:Y(Y({},Fp),{},{fill:"white"})},U=g.children?{children:g.children.map(pE)}:{},W={tag:"g",attributes:Y({},I.inner),children:[pE(Y({tag:g.tag,attributes:Y(Y({},g.attributes),I.path)},U))]},B={tag:"g",attributes:Y({},I.outer),children:[W]},se="mask-".concat(u||pu()),ne="clip-".concat(u||pu()),oe={tag:"mask",attributes:Y(Y({},Fp),{},{id:se,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[O,B]},me={tag:"defs",children:[{tag:"clipPath",attributes:{id:ne},children:wx(w)},oe]};return t.push(me,{tag:"rect",attributes:Y({fill:"currentColor","clip-path":"url(#".concat(ne,")"),mask:"url(#".concat(se,")")},Fp)}),{children:t,attributes:r}}}},Ix={provides(n){let e=!1;as.matchMedia&&(e=as.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){const t=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:Y(Y({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const a=Y(Y({},s),{},{attributeName:"opacity"}),u={tag:"circle",attributes:Y(Y({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||u.children.push({tag:"animate",attributes:Y(Y({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Y(Y({},a),{},{values:"1;0;1;1;0;1;"})}),t.push(u),t.push({tag:"path",attributes:Y(Y({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:Y(Y({},a),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:Y(Y({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Y(Y({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},Sx={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-symbol"),r=t===null?!1:t===""?!0:t;return n.symbol=r,n}}}},Cx=[_O,lx,ux,cx,hx,yx,vx,Ex,Tx,Ix,Sx];MO(Cx,{mixoutsTo:Nn});Nn.noAuto;Nn.config;Nn.library;Nn.dom;const bm=Nn.parse;Nn.findIconDefinition;Nn.toHtml;const Ax=Nn.icon;Nn.layer;Nn.text;Nn.counter;var Up={exports:{}},jp,mE;function Rx(){if(mE)return jp;mE=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return jp=n,jp}var zp,gE;function kx(){if(gE)return zp;gE=1;var n=Rx();function e(){}function t(){}return t.resetWarningCache=e,zp=function(){function r(u,d,f,g,v,w){if(w!==n){var I=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw I.name="Invariant Violation",I}}r.isRequired=r;function s(){return r}var a={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:s,element:r,elementType:r,instanceOf:s,node:r,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:t,resetWarningCache:e};return a.PropTypes=a,a},zp}var _E;function Px(){return _E||(_E=1,Up.exports=kx()()),Up.exports}var Nx=Px();const be=eT(Nx);function yE(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,r)}return t}function Ar(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?yE(Object(t),!0).forEach(function(r){ga(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):yE(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Hh(n){"@babel/helpers - typeof";return Hh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Hh(n)}function ga(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function bx(n,e){if(n==null)return{};var t={},r=Object.keys(n),s,a;for(a=0;a<r.length;a++)s=r[a],!(e.indexOf(s)>=0)&&(t[s]=n[s]);return t}function Ox(n,e){if(n==null)return{};var t=bx(n,e),r,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(s=0;s<a.length;s++)r=a[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function Om(n){return xx(n)||Dx(n)||Mx(n)||Lx()}function xx(n){if(Array.isArray(n))return xm(n)}function Dx(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Mx(n,e){if(n){if(typeof n=="string")return xm(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return xm(n,e)}}function xm(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function Lx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vx(n){var e,t=n.beat,r=n.fade,s=n.beatFade,a=n.bounce,u=n.shake,d=n.flash,f=n.spin,g=n.spinPulse,v=n.spinReverse,w=n.pulse,I=n.fixedWidth,O=n.inverse,U=n.border,W=n.listItem,B=n.flip,se=n.size,ne=n.rotation,oe=n.pull,me=(e={"fa-beat":t,"fa-fade":r,"fa-beat-fade":s,"fa-bounce":a,"fa-shake":u,"fa-flash":d,"fa-spin":f,"fa-spin-reverse":v,"fa-spin-pulse":g,"fa-pulse":w,"fa-fw":I,"fa-inverse":O,"fa-border":U,"fa-li":W,"fa-flip":B===!0,"fa-flip-horizontal":B==="horizontal"||B==="both","fa-flip-vertical":B==="vertical"||B==="both"},ga(e,"fa-".concat(se),typeof se<"u"&&se!==null),ga(e,"fa-rotate-".concat(ne),typeof ne<"u"&&ne!==null&&ne!==0),ga(e,"fa-pull-".concat(oe),typeof oe<"u"&&oe!==null),ga(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(me).map(function(ke){return me[ke]?ke:null}).filter(function(ke){return ke})}function Fx(n){return n=n-0,n===n}function gS(n){return Fx(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var Ux=["style"];function jx(n){return n.charAt(0).toUpperCase()+n.slice(1)}function zx(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r=t.indexOf(":"),s=gS(t.slice(0,r)),a=t.slice(r+1).trim();return s.startsWith("webkit")?e[jx(s)]=a:e[s]=a,e},{})}function _S(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(f){return _S(n,f)}),s=Object.keys(e.attributes||{}).reduce(function(f,g){var v=e.attributes[g];switch(g){case"class":f.attrs.className=v,delete e.attributes.class;break;case"style":f.attrs.style=zx(v);break;default:g.indexOf("aria-")===0||g.indexOf("data-")===0?f.attrs[g.toLowerCase()]=v:f.attrs[gS(g)]=v}return f},{attrs:{}}),a=t.style,u=a===void 0?{}:a,d=Ox(t,Ux);return s.attrs.style=Ar(Ar({},s.attrs.style),u),n.apply(void 0,[e.tag,Ar(Ar({},s.attrs),d)].concat(Om(r)))}var yS=!1;try{yS=!0}catch{}function Bx(){if(!yS&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function vE(n){if(n&&Hh(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(bm.icon)return bm.icon(n);if(n===null)return null;if(n&&Hh(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function Bp(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ga({},n,e):{}}var EE={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Bg=si.forwardRef(function(n,e){var t=Ar(Ar({},EE),n),r=t.icon,s=t.mask,a=t.symbol,u=t.className,d=t.title,f=t.titleId,g=t.maskId,v=vE(r),w=Bp("classes",[].concat(Om(Vx(t)),Om((u||"").split(" ")))),I=Bp("transform",typeof t.transform=="string"?bm.transform(t.transform):t.transform),O=Bp("mask",vE(s)),U=Ax(v,Ar(Ar(Ar(Ar({},w),I),O),{},{symbol:a,title:d,titleId:f,maskId:g}));if(!U)return Bx("Could not find icon",v),null;var W=U.abstract,B={ref:e};return Object.keys(t).forEach(function(se){EE.hasOwnProperty(se)||(B[se]=t[se])}),Wx(W[0],B)});Bg.displayName="FontAwesomeIcon";Bg.propTypes={beat:be.bool,border:be.bool,beatFade:be.bool,bounce:be.bool,className:be.string,fade:be.bool,flash:be.bool,mask:be.oneOfType([be.object,be.array,be.string]),maskId:be.string,fixedWidth:be.bool,inverse:be.bool,flip:be.oneOf([!0,!1,"horizontal","vertical","both"]),icon:be.oneOfType([be.object,be.array,be.string]),listItem:be.bool,pull:be.oneOf(["right","left"]),pulse:be.bool,rotation:be.oneOf([0,90,180,270]),shake:be.bool,size:be.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:be.bool,spinPulse:be.bool,spinReverse:be.bool,symbol:be.oneOfType([be.bool,be.string]),title:be.string,titleId:be.string,transform:be.oneOfType([be.string,be.object]),swapOpacity:be.bool};var Wx=_S.bind(null,si.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const $x={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]};var wE;(function(n){n.STRING="string",n.NUMBER="number",n.INTEGER="integer",n.BOOLEAN="boolean",n.ARRAY="array",n.OBJECT="object"})(wE||(wE={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var TE;(function(n){n.LANGUAGE_UNSPECIFIED="language_unspecified",n.PYTHON="python"})(TE||(TE={}));var IE;(function(n){n.OUTCOME_UNSPECIFIED="outcome_unspecified",n.OUTCOME_OK="outcome_ok",n.OUTCOME_FAILED="outcome_failed",n.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(IE||(IE={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=["user","model","function","system"];var CE;(function(n){n.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",n.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",n.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",n.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",n.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(CE||(CE={}));var AE;(function(n){n.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",n.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",n.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",n.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",n.BLOCK_NONE="BLOCK_NONE"})(AE||(AE={}));var RE;(function(n){n.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",n.NEGLIGIBLE="NEGLIGIBLE",n.LOW="LOW",n.MEDIUM="MEDIUM",n.HIGH="HIGH"})(RE||(RE={}));var kE;(function(n){n.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",n.SAFETY="SAFETY",n.OTHER="OTHER"})(kE||(kE={}));var iu;(function(n){n.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",n.STOP="STOP",n.MAX_TOKENS="MAX_TOKENS",n.SAFETY="SAFETY",n.RECITATION="RECITATION",n.LANGUAGE="LANGUAGE",n.OTHER="OTHER"})(iu||(iu={}));var PE;(function(n){n.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",n.RETRIEVAL_QUERY="RETRIEVAL_QUERY",n.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",n.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",n.CLASSIFICATION="CLASSIFICATION",n.CLUSTERING="CLUSTERING"})(PE||(PE={}));var NE;(function(n){n.MODE_UNSPECIFIED="MODE_UNSPECIFIED",n.AUTO="AUTO",n.ANY="ANY",n.NONE="NONE"})(NE||(NE={}));var bE;(function(n){n.MODE_UNSPECIFIED="MODE_UNSPECIFIED",n.MODE_DYNAMIC="MODE_DYNAMIC"})(bE||(bE={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class ua extends vn{constructor(e,t){super(e),this.response=t}}class vS extends vn{constructor(e,t,r,s){super(e),this.status=t,this.statusText=r,this.errorDetails=s}}class es extends vn{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx="https://generativelanguage.googleapis.com",qx="v1beta",Gx="0.21.0",Kx="genai-js";var io;(function(n){n.GENERATE_CONTENT="generateContent",n.STREAM_GENERATE_CONTENT="streamGenerateContent",n.COUNT_TOKENS="countTokens",n.EMBED_CONTENT="embedContent",n.BATCH_EMBED_CONTENTS="batchEmbedContents"})(io||(io={}));class Qx{constructor(e,t,r,s,a){this.model=e,this.task=t,this.apiKey=r,this.stream=s,this.requestOptions=a}toString(){var e,t;const r=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||qx;let a=`${((t=this.requestOptions)===null||t===void 0?void 0:t.baseUrl)||Hx}/${r}/${this.model}:${this.task}`;return this.stream&&(a+="?alt=sse"),a}}function Yx(n){const e=[];return n!=null&&n.apiClient&&e.push(n.apiClient),e.push(`${Kx}/${Gx}`),e.join(" ")}async function Xx(n){var e;const t=new Headers;t.append("Content-Type","application/json"),t.append("x-goog-api-client",Yx(n.requestOptions)),t.append("x-goog-api-key",n.apiKey);let r=(e=n.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(s){throw new es(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${s.message}`)}for(const[s,a]of r.entries()){if(s==="x-goog-api-key")throw new es(`Cannot set reserved header name ${s}`);if(s==="x-goog-api-client")throw new es(`Header name ${s} can only be set using the apiClient field`);t.append(s,a)}}return t}async function Jx(n,e,t,r,s,a){const u=new Qx(n,e,t,r,a);return{url:u.toString(),fetchOptions:Object.assign(Object.assign({},nD(a)),{method:"POST",headers:await Xx(u),body:s})}}async function Ou(n,e,t,r,s,a={},u=fetch){const{url:d,fetchOptions:f}=await Jx(n,e,t,r,s,a);return Zx(d,f,u)}async function Zx(n,e,t=fetch){let r;try{r=await t(n,e)}catch(s){eD(s,n)}return r.ok||await tD(r,n),r}function eD(n,e){let t=n;throw n instanceof vS||n instanceof es||(t=new vn(`Error fetching from ${e.toString()}: ${n.message}`),t.stack=n.stack),t}async function tD(n,e){let t="",r;try{const s=await n.json();t=s.error.message,s.error.details&&(t+=` ${JSON.stringify(s.error.details)}`,r=s.error.details)}catch{}throw new vS(`Error fetching from ${e.toString()}: [${n.status} ${n.statusText}] ${t}`,n.status,n.statusText,r)}function nD(n){const e={};if((n==null?void 0:n.signal)!==void 0||(n==null?void 0:n.timeout)>=0){const t=new AbortController;(n==null?void 0:n.timeout)>=0&&setTimeout(()=>t.abort(),n.timeout),n!=null&&n.signal&&n.signal.addEventListener("abort",()=>{t.abort()}),e.signal=t.signal}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(n){return n.text=()=>{if(n.candidates&&n.candidates.length>0){if(n.candidates.length>1&&console.warn(`This response had ${n.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),yh(n.candidates[0]))throw new ua(`${qi(n)}`,n);return rD(n)}else if(n.promptFeedback)throw new ua(`Text not available. ${qi(n)}`,n);return""},n.functionCall=()=>{if(n.candidates&&n.candidates.length>0){if(n.candidates.length>1&&console.warn(`This response had ${n.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),yh(n.candidates[0]))throw new ua(`${qi(n)}`,n);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),OE(n)[0]}else if(n.promptFeedback)throw new ua(`Function call not available. ${qi(n)}`,n)},n.functionCalls=()=>{if(n.candidates&&n.candidates.length>0){if(n.candidates.length>1&&console.warn(`This response had ${n.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),yh(n.candidates[0]))throw new ua(`${qi(n)}`,n);return OE(n)}else if(n.promptFeedback)throw new ua(`Function call not available. ${qi(n)}`,n)},n}function rD(n){var e,t,r,s;const a=[];if(!((t=(e=n.candidates)===null||e===void 0?void 0:e[0].content)===null||t===void 0)&&t.parts)for(const u of(s=(r=n.candidates)===null||r===void 0?void 0:r[0].content)===null||s===void 0?void 0:s.parts)u.text&&a.push(u.text),u.executableCode&&a.push("\n```"+u.executableCode.language+`
`+u.executableCode.code+"\n```\n"),u.codeExecutionResult&&a.push("\n```\n"+u.codeExecutionResult.output+"\n```\n");return a.length>0?a.join(""):""}function OE(n){var e,t,r,s;const a=[];if(!((t=(e=n.candidates)===null||e===void 0?void 0:e[0].content)===null||t===void 0)&&t.parts)for(const u of(s=(r=n.candidates)===null||r===void 0?void 0:r[0].content)===null||s===void 0?void 0:s.parts)u.functionCall&&a.push(u.functionCall);if(a.length>0)return a}const iD=[iu.RECITATION,iu.SAFETY,iu.LANGUAGE];function yh(n){return!!n.finishReason&&iD.includes(n.finishReason)}function qi(n){var e,t,r;let s="";if((!n.candidates||n.candidates.length===0)&&n.promptFeedback)s+="Response was blocked",!((e=n.promptFeedback)===null||e===void 0)&&e.blockReason&&(s+=` due to ${n.promptFeedback.blockReason}`),!((t=n.promptFeedback)===null||t===void 0)&&t.blockReasonMessage&&(s+=`: ${n.promptFeedback.blockReasonMessage}`);else if(!((r=n.candidates)===null||r===void 0)&&r[0]){const a=n.candidates[0];yh(a)&&(s+=`Candidate was blocked due to ${a.finishReason}`,a.finishMessage&&(s+=`: ${a.finishMessage}`))}return s}function gu(n){return this instanceof gu?(this.v=n,this):new gu(n)}function sD(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t.apply(n,e||[]),s,a=[];return s={},u("next"),u("throw"),u("return"),s[Symbol.asyncIterator]=function(){return this},s;function u(I){r[I]&&(s[I]=function(O){return new Promise(function(U,W){a.push([I,O,U,W])>1||d(I,O)})})}function d(I,O){try{f(r[I](O))}catch(U){w(a[0][3],U)}}function f(I){I.value instanceof gu?Promise.resolve(I.value.v).then(g,v):w(a[0][2],I)}function g(I){d("next",I)}function v(I){d("throw",I)}function w(I,O){I(O),a.shift(),a.length&&d(a[0][0],a[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function oD(n){const e=n.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),t=uD(e),[r,s]=t.tee();return{stream:lD(r),response:aD(s)}}async function aD(n){const e=[],t=n.getReader();for(;;){const{done:r,value:s}=await t.read();if(r)return Wg(cD(e));e.push(s)}}function lD(n){return sD(this,arguments,function*(){const t=n.getReader();for(;;){const{value:r,done:s}=yield gu(t.read());if(s)break;yield yield gu(Wg(r))}})}function uD(n){const e=n.getReader();return new ReadableStream({start(r){let s="";return a();function a(){return e.read().then(({value:u,done:d})=>{if(d){if(s.trim()){r.error(new vn("Failed to parse stream"));return}r.close();return}s+=u;let f=s.match(xE),g;for(;f;){try{g=JSON.parse(f[1])}catch{r.error(new vn(`Error parsing JSON response: "${f[1]}"`));return}r.enqueue(g),s=s.substring(f[0].length),f=s.match(xE)}return a()})}}})}function cD(n){const e=n[n.length-1],t={promptFeedback:e==null?void 0:e.promptFeedback};for(const r of n){if(r.candidates)for(const s of r.candidates){const a=s.index;if(t.candidates||(t.candidates=[]),t.candidates[a]||(t.candidates[a]={index:s.index}),t.candidates[a].citationMetadata=s.citationMetadata,t.candidates[a].groundingMetadata=s.groundingMetadata,t.candidates[a].finishReason=s.finishReason,t.candidates[a].finishMessage=s.finishMessage,t.candidates[a].safetyRatings=s.safetyRatings,s.content&&s.content.parts){t.candidates[a].content||(t.candidates[a].content={role:s.content.role||"user",parts:[]});const u={};for(const d of s.content.parts)d.text&&(u.text=d.text),d.functionCall&&(u.functionCall=d.functionCall),d.executableCode&&(u.executableCode=d.executableCode),d.codeExecutionResult&&(u.codeExecutionResult=d.codeExecutionResult),Object.keys(u).length===0&&(u.text=""),t.candidates[a].content.parts.push(u)}}r.usageMetadata&&(t.usageMetadata=r.usageMetadata)}return t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(n,e,t,r){const s=await Ou(e,io.STREAM_GENERATE_CONTENT,n,!0,JSON.stringify(t),r);return oD(s)}async function wS(n,e,t,r){const a=await(await Ou(e,io.GENERATE_CONTENT,n,!1,JSON.stringify(t),r)).json();return{response:Wg(a)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(n){if(n!=null){if(typeof n=="string")return{role:"system",parts:[{text:n}]};if(n.text)return{role:"system",parts:[n]};if(n.parts)return n.role?n:{role:"system",parts:n.parts}}}function _u(n){let e=[];if(typeof n=="string")e=[{text:n}];else for(const t of n)typeof t=="string"?e.push({text:t}):e.push(t);return hD(e)}function hD(n){const e={role:"user",parts:[]},t={role:"function",parts:[]};let r=!1,s=!1;for(const a of n)"functionResponse"in a?(t.parts.push(a),s=!0):(e.parts.push(a),r=!0);if(r&&s)throw new vn("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!s)throw new vn("No content is provided for sending chat message.");return r?e:t}function dD(n,e){var t;let r={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(t=e==null?void 0:e.cachedContent)===null||t===void 0?void 0:t.name,contents:[]};const s=n.generateContentRequest!=null;if(n.contents){if(s)throw new es("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=n.contents}else if(s)r=Object.assign(Object.assign({},r),n.generateContentRequest);else{const a=_u(n);r.contents=[a]}return{generateContentRequest:r}}function DE(n){let e;return n.contents?e=n:e={contents:[_u(n)]},n.systemInstruction&&(e.systemInstruction=TS(n.systemInstruction)),e}function fD(n){return typeof n=="string"||Array.isArray(n)?{content:_u(n)}:n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],pD={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function mD(n){let e=!1;for(const t of n){const{role:r,parts:s}=t;if(!e&&r!=="user")throw new vn(`First content should be with role 'user', got ${r}`);if(!SE.includes(r))throw new vn(`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(SE)}`);if(!Array.isArray(s))throw new vn("Content should have 'parts' property with an array of Parts");if(s.length===0)throw new vn("Each Content should have at least one part");const a={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const d of s)for(const f of ME)f in d&&(a[f]+=1);const u=pD[r];for(const d of ME)if(!u.includes(d)&&a[d]>0)throw new vn(`Content with role '${r}' can't contain '${d}' part`);e=!0}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE="SILENT_ERROR";class gD{constructor(e,t,r,s={}){this.model=t,this.params=r,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,r!=null&&r.history&&(mD(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var r,s,a,u,d,f;await this._sendPromise;const g=_u(e),v={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(a=this.params)===null||a===void 0?void 0:a.tools,toolConfig:(u=this.params)===null||u===void 0?void 0:u.toolConfig,systemInstruction:(d=this.params)===null||d===void 0?void 0:d.systemInstruction,cachedContent:(f=this.params)===null||f===void 0?void 0:f.cachedContent,contents:[...this._history,g]},w=Object.assign(Object.assign({},this._requestOptions),t);let I;return this._sendPromise=this._sendPromise.then(()=>wS(this._apiKey,this.model,v,w)).then(O=>{var U;if(O.response.candidates&&O.response.candidates.length>0){this._history.push(g);const W=Object.assign({parts:[],role:"model"},(U=O.response.candidates)===null||U===void 0?void 0:U[0].content);this._history.push(W)}else{const W=qi(O.response);W&&console.warn(`sendMessage() was unsuccessful. ${W}. Inspect response object for details.`)}I=O}),await this._sendPromise,I}async sendMessageStream(e,t={}){var r,s,a,u,d,f;await this._sendPromise;const g=_u(e),v={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(a=this.params)===null||a===void 0?void 0:a.tools,toolConfig:(u=this.params)===null||u===void 0?void 0:u.toolConfig,systemInstruction:(d=this.params)===null||d===void 0?void 0:d.systemInstruction,cachedContent:(f=this.params)===null||f===void 0?void 0:f.cachedContent,contents:[...this._history,g]},w=Object.assign(Object.assign({},this._requestOptions),t),I=ES(this._apiKey,this.model,v,w);return this._sendPromise=this._sendPromise.then(()=>I).catch(O=>{throw new Error(LE)}).then(O=>O.response).then(O=>{if(O.candidates&&O.candidates.length>0){this._history.push(g);const U=Object.assign({},O.candidates[0].content);U.role||(U.role="model"),this._history.push(U)}else{const U=qi(O);U&&console.warn(`sendMessageStream() was unsuccessful. ${U}. Inspect response object for details.`)}}).catch(O=>{O.message!==LE&&console.error(O)}),I}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _D(n,e,t,r){return(await Ou(e,io.COUNT_TOKENS,n,!1,JSON.stringify(t),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yD(n,e,t,r){return(await Ou(e,io.EMBED_CONTENT,n,!1,JSON.stringify(t),r)).json()}async function vD(n,e,t,r){const s=t.requests.map(u=>Object.assign(Object.assign({},u),{model:e}));return(await Ou(e,io.BATCH_EMBED_CONTENTS,n,!1,JSON.stringify({requests:s}),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,t,r={}){this.apiKey=e,this._requestOptions=r,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=TS(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var r;const s=DE(e),a=Object.assign(Object.assign({},this._requestOptions),t);return wS(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},s),a)}async generateContentStream(e,t={}){var r;const s=DE(e),a=Object.assign(Object.assign({},this._requestOptions),t);return ES(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},s),a)}startChat(e){var t;return new gD(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(t=this.cachedContent)===null||t===void 0?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){const r=dD(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),t);return _D(this.apiKey,this.model,r,s)}async embedContent(e,t={}){const r=fD(e),s=Object.assign(Object.assign({},this._requestOptions),t);return yD(this.apiKey,this.model,r,s)}async batchEmbedContents(e,t={}){const r=Object.assign(Object.assign({},this._requestOptions),t);return vD(this.apiKey,this.model,e,r)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new vn("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new VE(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,r){if(!e.name)throw new es("Cached content must contain a `name` field.");if(!e.model)throw new es("Cached content must contain a `model` field.");const s=["model","systemInstruction"];for(const u of s)if(t!=null&&t[u]&&e[u]&&(t==null?void 0:t[u])!==e[u]){if(u==="model"){const d=t.model.startsWith("models/")?t.model.replace("models/",""):t.model,f=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(d===f)continue}throw new es(`Different value for "${u}" specified in modelParams (${t[u]}) and cachedContent (${e[u]})`)}const a=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new VE(this.apiKey,a,r)}}let wD="AIzaSyDIALwlrXUVUZIgQmXoKmx1Bt02_XVWTIo";const TD=new ED(wD),ID=TD.getGenerativeModel({model:"gemini-1.5-flash-8b"}),SD={temperature:1,topP:.95,topK:40,maxOutputTokens:25,responseMimeType:"text/plain"};async function CD(n){return(await ID.startChat({generationConfig:SD,history:[]}).sendMessage(n)).response.text()}const IS=Pn.createContext();function AD({children:n}){let[e,t]=Pn.useState(!1),[r,s]=Pn.useState("listening..."),[a,u]=Pn.useState(!1),[d,f]=Pn.useState([]),[g,v]=Pn.useState(!1);function w(S){let A=new SpeechSynthesisUtterance(S);A.volume=1,A.rate=1,A.pitch=1,A.lang="hi-GB",window.speechSynthesis.speak(A)}async function I(S){let A=await CD(S),P=A.split("**")&&A.split("*")&&A.replace("google","Team Junior")&&A.replace("Google","Team Junior");s(P),w(P),u(!0);const x=lb(Cb,"chats");ub(x,{user:S,ai:P,timestamp:new Date().toISOString()}),f(D=>[...D,{user:S,ai:P}]),setTimeout(()=>{t(!1)},6e3)}function O(){window.location.reload()}let[U,W]=Pn.useState(!1),[B,se]=Pn.useState("");function ne(S){S.preventDefault(),B.trim()&&(I(B),se(""))}let oe=window.SpeechRecognition||window.webkitSpeechRecognition,me=new oe;me.onresult=S=>{let A=S.resultIndex,P=S.results[A][0].transcript;s(P),ke(P.toLowerCase())};function ke(S){if(S.includes("open")&&S.includes("youtube"))window.open("https://www.youtube.com/","_blank"),w("opening Youtube"),u(!0),s("opening Youtube..."),setTimeout(()=>{t(!1)},5e3);else if(S.includes("open")&&S.includes("google"))window.open("https://www.google.com/","_blank"),w("opening google"),u(!0),s("opening google..."),setTimeout(()=>{t(!1)},5e3);else if(S.includes("open")&&S.includes("instagram"))window.open("https://www.instagram.com/","_blank"),w("opening instagram"),u(!0),s("opening instagram..."),setTimeout(()=>{t(!1)},5e3);else if(S.includes("time")){let A=new Date().toLocaleString(void 0,{hour:"numeric",minute:"numeric"});w(A),u(!0),s(A),setTimeout(()=>{t(!1)},5e3)}else if(S.includes("date")){let A=new Date().toLocaleString(void 0,{day:"numeric",month:"short"});w(A),u(!0),s(A),setTimeout(()=>{t(!1)},5e3)}else I(S)}function Ce({history:S,showHistory:A,toggleHistory:P}){return Ie.jsxs(Ie.Fragment,{children:[Ie.jsx("button",{onClick:P,style:{position:"fixed",bottom:"20px",right:"20px",backgroundColor:"transparent",border:"none",cursor:"pointer",fontSize:"24px"},children:"🕒"}),A&&Ie.jsxs("div",{style:{position:"fixed",bottom:"80px",right:"20px",width:"300px",maxHeight:"400px",overflowY:"auto",backgroundColor:"white",border:"1px solid #ccc",borderRadius:"10px",padding:"10px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)"},children:[Ie.jsx("h4",{children:"History"}),Ie.jsx("ul",{style:{listStyle:"none",padding:0},children:S.map((x,D)=>Ie.jsxs("li",{style:{marginBottom:"10px"},children:[Ie.jsx("strong",{children:"User:"})," ",x.user,Ie.jsx("br",{}),Ie.jsx("strong",{children:"AI:"})," ",x.ai]},D))})]})]})}let N={recognition:me,speaking:e,setSpeaking:t,prompt:r,setPrompt:s,response:a,setResponse:u,history:d,showHistory:g,setShowHistory:v};return Ie.jsx("div",{children:Ie.jsxs(IS.Provider,{value:N,children:[Ie.jsx("button",{onClick:O,style:{position:"absolute",top:"20px",left:"20px",background:"transparent",border:"none",cursor:"pointer",color:"white"},children:Ie.jsx(Bg,{icon:$x,size:"2x",color:"white"})}),Ie.jsx("button",{onClick:()=>W(!U),style:{position:"fixed",bottom:"20px",left:"20px",background:"transparent",border:"none",borderRadius:"50%",width:"50px",height:"50px",color:"black",fontSize:"18px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:"💬"}),U&&Ie.jsxs("div",{style:{position:"fixed",bottom:"80px",left:"20px",width:"300px",background:"white",borderRadius:"10px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",padding:"10px",zIndex:1e3},children:[Ie.jsx("div",{style:{maxHeight:"200px",overflowY:"auto",marginBottom:"10px"},children:d.map((S,A)=>Ie.jsxs("div",{children:[Ie.jsxs("p",{style:{color:"black"},children:[Ie.jsx("strong",{children:"You:"})," ",S.user]}),Ie.jsxs("p",{style:{color:"black"},children:[Ie.jsx("strong",{children:"AI:"})," ",S.ai]})]},A))}),Ie.jsxs("form",{onSubmit:ne,children:[Ie.jsx("input",{type:"text",value:B,onChange:S=>se(S.target.value),placeholder:"Type your message...",style:{width:"calc(100% - 50px)",padding:"5px",borderRadius:"5px",border:"1px solid #ccc",marginRight:"5px"}}),Ie.jsx("button",{type:"submit",style:{background:"#007bff",color:"black",border:"none",borderRadius:"5px",padding:"5px 10px",cursor:"pointer"},children:"Send"})]})]}),n,Ie.jsx(Ce,{history:d,showHistory:g,toggleHistory:()=>v(!g)})]})})}const RD="/assets/speak-BfsJWT46.gif",kD="/assets/aiVoice-Cx2KurwI.gif";function $g(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function SS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PD=SS,CS=new Cu("auth","Firebase",SS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=new pd("@firebase/auth");function ND(n,...e){qh.logLevel<=Oe.WARN&&qh.warn(`Auth (${lo}): ${n}`,...e)}function vh(n,...e){qh.logLevel<=Oe.ERROR&&qh.error(`Auth (${lo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(n,...e){throw qg(n,...e)}function dr(n,...e){return qg(n,...e)}function Hg(n,e,t){const r=Object.assign(Object.assign({},PD()),{[e]:t});return new Cu("auth","Firebase",r).create(e,{appName:n.name})}function Xs(n){return Hg(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bD(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Mr(n,"argument-error"),Hg(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qg(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return CS.create(n,...e)}function we(n,e,...t){if(!n)throw qg(e,...t)}function ri(n){const e="INTERNAL ASSERTION FAILED: "+n;throw vh(e),new Error(e)}function fi(n,e){n||ri(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function OD(){return FE()==="http:"||FE()==="https:"}function FE(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OD()||hR()||"connection"in navigator)?navigator.onLine:!0}function DD(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,t){this.shortDelay=e,this.longDelay=t,fi(t>e,"Short delay should be less than long delay!"),this.isMobile=ng()||dT()}get(){return xD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(n,e){fi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ri("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ri("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ri("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],VD=new xu(3e4,6e4);function Kg(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ba(n,e,t,r,s={}){return RS(n,s,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=Va(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:f},a);return cR()||(g.referrerPolicy="no-referrer"),AS.fetch()(await kS(n,n.config.apiHost,t,d),g)})}async function RS(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},MD),e);try{const s=new UD(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw ah(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,g]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw ah(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw ah(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw ah(n,"user-disabled",u);const v=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Hg(n,v,g);Mr(n,v)}}catch(s){if(s instanceof gi)throw s;Mr(n,"network-request-failed",{message:String(s)})}}async function FD(n,e,t,r,s={}){const a=await Ba(n,e,t,r,s);return"mfaPendingCredential"in a&&Mr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function kS(n,e,t,r){const s=`${e}${t}?${r}`,a=n,u=a.config.emulator?Gg(n.config,s):`${n.config.apiScheme}://${s}`;return LD.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}class UD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(dr(this.auth,"network-request-failed")),VD.get())})}}function ah(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=dr(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jD(n,e){return Ba(n,"POST","/v1/accounts:delete",e)}async function Gh(n,e){return Ba(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zD(n,e=!1){const t=Pt(n),r=await t.getIdToken(e),s=Qg(r);we(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:su(Wp(s.auth_time)),issuedAtTime:su(Wp(s.iat)),expirationTime:su(Wp(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Wp(n){return Number(n)*1e3}function Qg(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return vh("JWT malformed, contained fewer than 3 sections"),null;try{const s=Oh(t);return s?JSON.parse(s):(vh("Failed to decode base64 JWT payload"),null)}catch(s){return vh("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function UE(n){const e=Qg(n);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yu(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof gi&&BD(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function BD({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=su(this.lastLoginAt),this.creationTime=su(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kh(n){var e;const t=n.auth,r=await n.getIdToken(),s=await yu(n,Gh(t,{idToken:r}));we(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?PS(a.providerUserInfo):[],d=HD(n.providerData,u),f=n.isAnonymous,g=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),v=f?g:!1,w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Mm(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,w)}async function $D(n){const e=Pt(n);await Kh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HD(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function PS(n){return n.map(e=>{var{providerId:t}=e,r=$g(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qD(n,e){const t=await RS(n,{},async()=>{const r=Va({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=await kS(n,s,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",AS.fetch()(u,{method:"POST",headers:d,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function GD(n,e){return Ba(n,"POST","/v2/accounts:revokeToken",Kg(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):UE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=UE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await qD(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,u=new Ea;return r&&(we(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),s&&(we(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(we(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ea,this.toJSON())}_performRefresh(){return ri("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(n,e){we(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ur{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,a=$g(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new WD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Mm(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await yu(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return zD(this,e)}reload(){return $D(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ur(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Kh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zn(this.auth.app))return Promise.reject(Xs(this.auth));const e=await this.getIdToken();return await yu(this,jD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,a,u,d,f,g,v;const w=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(s=t.email)!==null&&s!==void 0?s:void 0,O=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,U=(u=t.photoURL)!==null&&u!==void 0?u:void 0,W=(d=t.tenantId)!==null&&d!==void 0?d:void 0,B=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,se=(g=t.createdAt)!==null&&g!==void 0?g:void 0,ne=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:oe,emailVerified:me,isAnonymous:ke,providerData:Ce,stsTokenManager:N}=t;we(oe&&N,e,"internal-error");const S=Ea.fromJSON(this.name,N);we(typeof oe=="string",e,"internal-error"),Hi(w,e.name),Hi(I,e.name),we(typeof me=="boolean",e,"internal-error"),we(typeof ke=="boolean",e,"internal-error"),Hi(O,e.name),Hi(U,e.name),Hi(W,e.name),Hi(B,e.name),Hi(se,e.name),Hi(ne,e.name);const A=new ur({uid:oe,auth:e,email:I,emailVerified:me,displayName:w,isAnonymous:ke,photoURL:U,phoneNumber:O,tenantId:W,stsTokenManager:S,createdAt:se,lastLoginAt:ne});return Ce&&Array.isArray(Ce)&&(A.providerData=Ce.map(P=>Object.assign({},P))),B&&(A._redirectEventId=B),A}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ea;s.updateFromServerResponse(t);const a=new ur({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Kh(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];we(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?PS(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),d=new Ea;d.updateFromIdToken(r);const f=new ur({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:u}),g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Mm(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,g),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=new Map;function ii(n){fi(n instanceof Function,"Expected a class definition");let e=jE.get(n);return e?(fi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,jE.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}NS.type="NONE";const zE=NS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(n,e,t){return`firebase:${n}:${e}:${t}`}class wa{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=Eh(this.userKey,s.apiKey,a),this.fullPersistenceKey=Eh("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Gh(this.auth,{idToken:e}).catch(()=>{});return t?ur._fromGetAccountInfoResponse(this.auth,t,e):null}return ur._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new wa(ii(zE),e,r);const s=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let a=s[0]||ii(zE);const u=Eh(r,e.config.apiKey,e.name);let d=null;for(const g of t)try{const v=await g._get(u);if(v){let w;if(typeof v=="string"){const I=await Gh(e,{idToken:v}).catch(()=>{});if(!I)break;w=await ur._fromGetAccountInfoResponse(e,I,v)}else w=ur._fromJSON(e,v);g!==a&&(d=w),a=g;break}}catch{}const f=s.filter(g=>g._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new wa(a,e,r):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==a)try{await g._remove(u)}catch{}})),new wa(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(DS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(LS(e))return"Blackberry";if(VS(e))return"Webos";if(OS(e))return"Safari";if((e.includes("chrome/")||xS(e))&&!e.includes("edge/"))return"Chrome";if(MS(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bS(n=rn()){return/firefox\//i.test(n)}function OS(n=rn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xS(n=rn()){return/crios\//i.test(n)}function DS(n=rn()){return/iemobile/i.test(n)}function MS(n=rn()){return/android/i.test(n)}function LS(n=rn()){return/blackberry/i.test(n)}function VS(n=rn()){return/webos/i.test(n)}function Yg(n=rn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function KD(n=rn()){var e;return Yg(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QD(){return dR()&&document.documentMode===10}function FS(n=rn()){return Yg(n)||MS(n)||VS(n)||LS(n)||/windows phone/i.test(n)||DS(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(n,e=[]){let t;switch(n){case"Browser":t=BE(rn());break;case"Worker":t=`${BE(rn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${lo}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XD(n,e={}){return Ba(n,"GET","/v2/passwordPolicy",Kg(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD=6;class ZD{constructor(e){var t,r,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:JD,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new WE(this),this.idTokenSubscription=new WE(this),this.beforeStateQueue=new YD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=CS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ii(t)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await wa.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Gh(this,{idToken:e}),r=await ur._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(zn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Kh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zn(this.app))return Promise.reject(Xs(this));const t=e?Pt(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zn(this.app)?Promise.reject(Xs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zn(this.app)?Promise.reject(Xs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ii(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await XD(this),t=new ZD(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Cu("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await GD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ii(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await wa.create(this,[ii(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,s);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=US(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(zn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&ND(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Rd(n){return Pt(n)}class WE{constructor(e){this.auth=e,this.observer=null,this.addObserver=TR(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xg={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function t2(n){Xg=n}function n2(n){return Xg.loadJS(n)}function r2(){return Xg.gapiScript}function i2(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s2(n,e){const t=md(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(is(a,e??{}))return s;Mr(s,"already-initialized")}return t.initialize({options:e})}function o2(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ii);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function a2(n,e,t){const r=Rd(n);we(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=jS(e),{host:u,port:d}=l2(e),f=d===null?"":`:${d}`,g={url:`${a}//${u}${f}/`},v=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){we(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),we(is(g,r.config.emulator)&&is(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,u2()}function jS(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function l2(n){const e=jS(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:$E(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:$E(u)}}}function $E(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function u2(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ri("not implemented")}_getIdTokenResponse(e){return ri("not implemented")}_linkToIdToken(e,t){return ri("not implemented")}_getReauthenticationResolver(e){return ri("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ta(n,e){return FD(n,"POST","/v1/accounts:signInWithIdp",Kg(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2="http://localhost";class so extends zS{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new so(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Mr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,a=$g(t,["providerId","signInMethod"]);if(!r||!s)return null;const u=new so(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Ta(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ta(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ta(e,t)}buildRequest(){const e={requestUri:c2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Va(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du extends Jg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends Du{constructor(){super("facebook.com")}static credential(e){return so._fromParams({providerId:Gi.PROVIDER_ID,signInMethod:Gi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gi.credentialFromTaggedObject(e)}static credentialFromError(e){return Gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gi.credential(e.oauthAccessToken)}catch{return null}}}Gi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Du{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return so._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ti.credential(t,r)}catch{return null}}}ti.GOOGLE_SIGN_IN_METHOD="google.com";ti.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends Du{constructor(){super("github.com")}static credential(e){return so._fromParams({providerId:Ki.PROVIDER_ID,signInMethod:Ki.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ki.credentialFromTaggedObject(e)}static credentialFromError(e){return Ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ki.credential(e.oauthAccessToken)}catch{return null}}}Ki.GITHUB_SIGN_IN_METHOD="github.com";Ki.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends Du{constructor(){super("twitter.com")}static credential(e,t){return so._fromParams({providerId:Qi.PROVIDER_ID,signInMethod:Qi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qi.credentialFromTaggedObject(e)}static credentialFromError(e){return Qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Qi.credential(t,r)}catch{return null}}}Qi.TWITTER_SIGN_IN_METHOD="twitter.com";Qi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await ur._fromIdTokenResponse(e,r,s),u=HE(r);return new ka({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=HE(r);return new ka({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function HE(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh extends gi{constructor(e,t,r,s){var a;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Qh.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Qh(e,t,r,s)}}function BS(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Qh._fromErrorAndOperation(n,a,e,r):a})}async function h2(n,e,t=!1){const r=await yu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ka._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d2(n,e,t=!1){const{auth:r}=n;if(zn(r.app))return Promise.reject(Xs(r));const s="reauthenticate";try{const a=await yu(n,BS(r,s,e,n),t);we(a.idToken,r,"internal-error");const u=Qg(a.idToken);we(u,r,"internal-error");const{sub:d}=u;return we(n.uid===d,r,"user-mismatch"),ka._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Mr(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f2(n,e,t=!1){if(zn(n.app))return Promise.reject(Xs(n));const r="signIn",s=await BS(n,r,e),a=await ka._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}function p2(n,e,t,r){return Pt(n).onIdTokenChanged(e,t,r)}function m2(n,e,t){return Pt(n).beforeAuthStateChanged(e,t)}function g2(n){return Pt(n).signOut()}const Yh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Yh,"1"),this.storage.removeItem(Yh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2=1e3,y2=10;class $S extends WS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=FS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);QD()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,y2):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},_2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$S.type="LOCAL";const v2=$S;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS extends WS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}HS.type="SESSION";const qS=HS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E2(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new kd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const d=Array.from(u).map(async g=>g(t.origin,a)),f=await E2(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const g=Zg("",20);s.port1.start();const v=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(w){const I=w;if(I.data.eventId===g)switch(I.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(I.data.response);break;default:clearTimeout(v),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(){return window}function T2(n){Or().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(){return typeof Or().WorkerGlobalScope<"u"&&typeof Or().importScripts=="function"}async function I2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function S2(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function C2(){return GS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS="firebaseLocalStorageDb",A2=1,Xh="firebaseLocalStorage",QS="fbase_key";class Mu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Pd(n,e){return n.transaction([Xh],e?"readwrite":"readonly").objectStore(Xh)}function R2(){const n=indexedDB.deleteDatabase(KS);return new Mu(n).toPromise()}function Lm(){const n=indexedDB.open(KS,A2);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Xh,{keyPath:QS})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Xh)?e(r):(r.close(),await R2(),e(await Lm()))})})}async function qE(n,e,t){const r=Pd(n,!0).put({[QS]:e,value:t});return new Mu(r).toPromise()}async function k2(n,e){const t=Pd(n,!1).get(e),r=await new Mu(t).toPromise();return r===void 0?null:r.value}function GE(n,e){const t=Pd(n,!0).delete(e);return new Mu(t).toPromise()}const P2=800,N2=3;class YS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>N2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return GS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kd._getInstance(C2()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await I2(),!this.activeServiceWorker)return;this.sender=new w2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||S2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lm();return await qE(e,Yh,"1"),await GE(e,Yh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>qE(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>k2(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>GE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=Pd(s,!1).getAll();return new Mu(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),P2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}YS.type="LOCAL";const b2=YS;new xu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(n,e){return e?ii(e):(we(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_ extends zS{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ta(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ta(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ta(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function O2(n){return f2(n.auth,new e_(n),n.bypassAuthState)}function x2(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),d2(t,new e_(n),n.bypassAuthState)}async function D2(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),h2(t,new e_(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return O2;case"linkViaPopup":case"linkViaRedirect":return D2;case"reauthViaPopup":case"reauthViaRedirect":return x2;default:Mr(this.auth,"internal-error")}}resolve(e){fi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2=new xu(2e3,1e4);async function L2(n,e,t){if(zn(n.app))return Promise.reject(dr(n,"operation-not-supported-in-this-environment"));const r=Rd(n);bD(n,e,Jg);const s=XS(r,t);return new Qs(r,"signInViaPopup",e,s).executeNotNull()}class Qs extends JS{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,Qs.currentPopupAction&&Qs.currentPopupAction.cancel(),Qs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){fi(this.filter.length===1,"Popup operations only handle one event");const e=Zg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(dr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,M2.get())};e()}}Qs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V2="pendingRedirect",wh=new Map;class F2 extends JS{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=wh.get(this.auth._key());if(!e){try{const r=await U2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}wh.set(this.auth._key(),e)}return this.bypassAuthState||wh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function U2(n,e){const t=B2(e),r=z2(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function j2(n,e){wh.set(n._key(),e)}function z2(n){return ii(n._redirectPersistence)}function B2(n){return Eh(V2,n.config.apiKey,n.name)}async function W2(n,e,t=!1){if(zn(n.app))return Promise.reject(Xs(n));const r=Rd(n),s=XS(r,e),u=await new F2(r,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2=10*60*1e3;class H2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!q2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ZS(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(dr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$2&&this.cachedEventUids.clear(),this.cachedEventUids.has(KE(e))}saveEventToCache(e){this.cachedEventUids.add(KE(e)),this.lastProcessedEventTime=Date.now()}}function KE(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ZS({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function q2(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ZS(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G2(n,e={}){return Ba(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Q2=/^https?/;async function Y2(n){if(n.config.emulator)return;const{authorizedDomains:e}=await G2(n);for(const t of e)try{if(X2(t))return}catch{}Mr(n,"unauthorized-domain")}function X2(n){const e=Dm(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!Q2.test(t))return!1;if(K2.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=new xu(3e4,6e4);function QE(){const n=Or().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Z2(n){return new Promise((e,t)=>{var r,s,a;function u(){QE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{QE(),t(dr(n,"network-request-failed"))},timeout:J2.get()})}if(!((s=(r=Or().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=Or().gapi)===null||a===void 0)&&a.load)u();else{const d=i2("iframefcb");return Or()[d]=()=>{gapi.load?u():t(dr(n,"network-request-failed"))},n2(`${r2()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw Th=null,e})}let Th=null;function eM(n){return Th=Th||Z2(n),Th}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tM=new xu(5e3,15e3),nM="__/auth/iframe",rM="emulator/auth/iframe",iM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oM(n){const e=n.config;we(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Gg(e,rM):`https://${n.config.authDomain}/${nM}`,r={apiKey:e.apiKey,appName:n.name,v:lo},s=sM.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${Va(r).slice(1)}`}async function aM(n){const e=await eM(n),t=Or().gapi;return we(t,n,"internal-error"),e.open({where:document.body,url:oM(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iM,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=dr(n,"network-request-failed"),d=Or().setTimeout(()=>{a(u)},tM.get());function f(){Or().clearTimeout(d),s(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uM=500,cM=600,hM="_blank",dM="http://localhost";class YE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fM(n,e,t,r=uM,s=cM){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},lM),{width:r.toString(),height:s.toString(),top:a,left:u}),g=rn().toLowerCase();t&&(d=xS(g)?hM:t),bS(g)&&(e=e||dM,f.scrollbars="yes");const v=Object.entries(f).reduce((I,[O,U])=>`${I}${O}=${U},`,"");if(KD(g)&&d!=="_self")return pM(e||"",d),new YE(null);const w=window.open(e||"",d,v);we(w,n,"popup-blocked");try{w.focus()}catch{}return new YE(w)}function pM(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mM="__/auth/handler",gM="emulator/auth/handler",_M=encodeURIComponent("fac");async function XE(n,e,t,r,s,a){we(n.config.authDomain,n,"auth-domain-config-required"),we(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:lo,eventId:s};if(e instanceof Jg){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Yp(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,w]of Object.entries({}))u[v]=w}if(e instanceof Du){const v=e.getScopes().filter(w=>w!=="");v.length>0&&(u.scopes=v.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const f=await n._getAppCheckToken(),g=f?`#${_M}=${encodeURIComponent(f)}`:"";return`${yM(n)}?${Va(d).slice(1)}${g}`}function yM({config:n}){return n.emulator?Gg(n,gM):`https://${n.authDomain}/${mM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p="webStorageSupport";class vM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qS,this._completeRedirectFn=W2,this._overrideRedirectResult=j2}async _openPopup(e,t,r,s){var a;fi((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await XE(e,t,r,Dm(),s);return fM(e,u,Zg())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await XE(e,t,r,Dm(),s);return T2(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(fi(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await aM(e),r=new H2(e);return t.register("authEvent",s=>(we(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send($p,{type:$p},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[$p];u!==void 0&&t(!!u),Mr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Y2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return FS()||OS()||Yg()}}const EM=vM;var JE="@firebase/auth",ZE="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TM(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IM(n){Js(new ss("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;we(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:US(n)},g=new e2(r,s,a,f);return o2(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Js(new ss("auth-internal",e=>{const t=Rd(e.getProvider("auth").getImmediate());return(r=>new wM(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),br(JE,ZE,TM(n)),br(JE,ZE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SM=5*60,CM=cT("authIdTokenMaxAge")||SM;let ew=null;const AM=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>CM)return;const s=t==null?void 0:t.token;ew!==s&&(ew=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function RM(n=og()){const e=md(n,"auth");if(e.isInitialized())return e.getImmediate();const t=s2(n,{popupRedirectResolver:EM,persistence:[b2,v2,qS]}),r=cT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=AM(a.toString());m2(t,u,()=>u(t.currentUser)),p2(t,d=>u(d))}}const s=aT("auth");return s&&a2(t,`http://${s}`),t}function kM(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}t2({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=dr("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",kM().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IM("Browser");var tw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ts,e1;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,S){function A(){}A.prototype=S.prototype,N.D=S.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(P,x,D){for(var R=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)R[ft-2]=arguments[ft];return S.prototype[x].apply(P,R)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(N,S,A){A||(A=0);var P=Array(16);if(typeof S=="string")for(var x=0;16>x;++x)P[x]=S.charCodeAt(A++)|S.charCodeAt(A++)<<8|S.charCodeAt(A++)<<16|S.charCodeAt(A++)<<24;else for(x=0;16>x;++x)P[x]=S[A++]|S[A++]<<8|S[A++]<<16|S[A++]<<24;S=N.g[0],A=N.g[1],x=N.g[2];var D=N.g[3],R=S+(D^A&(x^D))+P[0]+3614090360&4294967295;S=A+(R<<7&4294967295|R>>>25),R=D+(x^S&(A^x))+P[1]+3905402710&4294967295,D=S+(R<<12&4294967295|R>>>20),R=x+(A^D&(S^A))+P[2]+606105819&4294967295,x=D+(R<<17&4294967295|R>>>15),R=A+(S^x&(D^S))+P[3]+3250441966&4294967295,A=x+(R<<22&4294967295|R>>>10),R=S+(D^A&(x^D))+P[4]+4118548399&4294967295,S=A+(R<<7&4294967295|R>>>25),R=D+(x^S&(A^x))+P[5]+1200080426&4294967295,D=S+(R<<12&4294967295|R>>>20),R=x+(A^D&(S^A))+P[6]+2821735955&4294967295,x=D+(R<<17&4294967295|R>>>15),R=A+(S^x&(D^S))+P[7]+4249261313&4294967295,A=x+(R<<22&4294967295|R>>>10),R=S+(D^A&(x^D))+P[8]+1770035416&4294967295,S=A+(R<<7&4294967295|R>>>25),R=D+(x^S&(A^x))+P[9]+2336552879&4294967295,D=S+(R<<12&4294967295|R>>>20),R=x+(A^D&(S^A))+P[10]+4294925233&4294967295,x=D+(R<<17&4294967295|R>>>15),R=A+(S^x&(D^S))+P[11]+2304563134&4294967295,A=x+(R<<22&4294967295|R>>>10),R=S+(D^A&(x^D))+P[12]+1804603682&4294967295,S=A+(R<<7&4294967295|R>>>25),R=D+(x^S&(A^x))+P[13]+4254626195&4294967295,D=S+(R<<12&4294967295|R>>>20),R=x+(A^D&(S^A))+P[14]+2792965006&4294967295,x=D+(R<<17&4294967295|R>>>15),R=A+(S^x&(D^S))+P[15]+1236535329&4294967295,A=x+(R<<22&4294967295|R>>>10),R=S+(x^D&(A^x))+P[1]+4129170786&4294967295,S=A+(R<<5&4294967295|R>>>27),R=D+(A^x&(S^A))+P[6]+3225465664&4294967295,D=S+(R<<9&4294967295|R>>>23),R=x+(S^A&(D^S))+P[11]+643717713&4294967295,x=D+(R<<14&4294967295|R>>>18),R=A+(D^S&(x^D))+P[0]+3921069994&4294967295,A=x+(R<<20&4294967295|R>>>12),R=S+(x^D&(A^x))+P[5]+3593408605&4294967295,S=A+(R<<5&4294967295|R>>>27),R=D+(A^x&(S^A))+P[10]+38016083&4294967295,D=S+(R<<9&4294967295|R>>>23),R=x+(S^A&(D^S))+P[15]+3634488961&4294967295,x=D+(R<<14&4294967295|R>>>18),R=A+(D^S&(x^D))+P[4]+3889429448&4294967295,A=x+(R<<20&4294967295|R>>>12),R=S+(x^D&(A^x))+P[9]+568446438&4294967295,S=A+(R<<5&4294967295|R>>>27),R=D+(A^x&(S^A))+P[14]+3275163606&4294967295,D=S+(R<<9&4294967295|R>>>23),R=x+(S^A&(D^S))+P[3]+4107603335&4294967295,x=D+(R<<14&4294967295|R>>>18),R=A+(D^S&(x^D))+P[8]+1163531501&4294967295,A=x+(R<<20&4294967295|R>>>12),R=S+(x^D&(A^x))+P[13]+2850285829&4294967295,S=A+(R<<5&4294967295|R>>>27),R=D+(A^x&(S^A))+P[2]+4243563512&4294967295,D=S+(R<<9&4294967295|R>>>23),R=x+(S^A&(D^S))+P[7]+1735328473&4294967295,x=D+(R<<14&4294967295|R>>>18),R=A+(D^S&(x^D))+P[12]+2368359562&4294967295,A=x+(R<<20&4294967295|R>>>12),R=S+(A^x^D)+P[5]+4294588738&4294967295,S=A+(R<<4&4294967295|R>>>28),R=D+(S^A^x)+P[8]+2272392833&4294967295,D=S+(R<<11&4294967295|R>>>21),R=x+(D^S^A)+P[11]+1839030562&4294967295,x=D+(R<<16&4294967295|R>>>16),R=A+(x^D^S)+P[14]+4259657740&4294967295,A=x+(R<<23&4294967295|R>>>9),R=S+(A^x^D)+P[1]+2763975236&4294967295,S=A+(R<<4&4294967295|R>>>28),R=D+(S^A^x)+P[4]+1272893353&4294967295,D=S+(R<<11&4294967295|R>>>21),R=x+(D^S^A)+P[7]+4139469664&4294967295,x=D+(R<<16&4294967295|R>>>16),R=A+(x^D^S)+P[10]+3200236656&4294967295,A=x+(R<<23&4294967295|R>>>9),R=S+(A^x^D)+P[13]+681279174&4294967295,S=A+(R<<4&4294967295|R>>>28),R=D+(S^A^x)+P[0]+3936430074&4294967295,D=S+(R<<11&4294967295|R>>>21),R=x+(D^S^A)+P[3]+3572445317&4294967295,x=D+(R<<16&4294967295|R>>>16),R=A+(x^D^S)+P[6]+76029189&4294967295,A=x+(R<<23&4294967295|R>>>9),R=S+(A^x^D)+P[9]+3654602809&4294967295,S=A+(R<<4&4294967295|R>>>28),R=D+(S^A^x)+P[12]+3873151461&4294967295,D=S+(R<<11&4294967295|R>>>21),R=x+(D^S^A)+P[15]+530742520&4294967295,x=D+(R<<16&4294967295|R>>>16),R=A+(x^D^S)+P[2]+3299628645&4294967295,A=x+(R<<23&4294967295|R>>>9),R=S+(x^(A|~D))+P[0]+4096336452&4294967295,S=A+(R<<6&4294967295|R>>>26),R=D+(A^(S|~x))+P[7]+1126891415&4294967295,D=S+(R<<10&4294967295|R>>>22),R=x+(S^(D|~A))+P[14]+2878612391&4294967295,x=D+(R<<15&4294967295|R>>>17),R=A+(D^(x|~S))+P[5]+4237533241&4294967295,A=x+(R<<21&4294967295|R>>>11),R=S+(x^(A|~D))+P[12]+1700485571&4294967295,S=A+(R<<6&4294967295|R>>>26),R=D+(A^(S|~x))+P[3]+2399980690&4294967295,D=S+(R<<10&4294967295|R>>>22),R=x+(S^(D|~A))+P[10]+4293915773&4294967295,x=D+(R<<15&4294967295|R>>>17),R=A+(D^(x|~S))+P[1]+2240044497&4294967295,A=x+(R<<21&4294967295|R>>>11),R=S+(x^(A|~D))+P[8]+1873313359&4294967295,S=A+(R<<6&4294967295|R>>>26),R=D+(A^(S|~x))+P[15]+4264355552&4294967295,D=S+(R<<10&4294967295|R>>>22),R=x+(S^(D|~A))+P[6]+2734768916&4294967295,x=D+(R<<15&4294967295|R>>>17),R=A+(D^(x|~S))+P[13]+1309151649&4294967295,A=x+(R<<21&4294967295|R>>>11),R=S+(x^(A|~D))+P[4]+4149444226&4294967295,S=A+(R<<6&4294967295|R>>>26),R=D+(A^(S|~x))+P[11]+3174756917&4294967295,D=S+(R<<10&4294967295|R>>>22),R=x+(S^(D|~A))+P[2]+718787259&4294967295,x=D+(R<<15&4294967295|R>>>17),R=A+(D^(x|~S))+P[9]+3951481745&4294967295,N.g[0]=N.g[0]+S&4294967295,N.g[1]=N.g[1]+(x+(R<<21&4294967295|R>>>11))&4294967295,N.g[2]=N.g[2]+x&4294967295,N.g[3]=N.g[3]+D&4294967295}r.prototype.u=function(N,S){S===void 0&&(S=N.length);for(var A=S-this.blockSize,P=this.B,x=this.h,D=0;D<S;){if(x==0)for(;D<=A;)s(this,N,D),D+=this.blockSize;if(typeof N=="string"){for(;D<S;)if(P[x++]=N.charCodeAt(D++),x==this.blockSize){s(this,P),x=0;break}}else for(;D<S;)if(P[x++]=N[D++],x==this.blockSize){s(this,P),x=0;break}}this.h=x,this.o+=S},r.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var S=1;S<N.length-8;++S)N[S]=0;var A=8*this.o;for(S=N.length-8;S<N.length;++S)N[S]=A&255,A/=256;for(this.u(N),N=Array(16),S=A=0;4>S;++S)for(var P=0;32>P;P+=8)N[A++]=this.g[S]>>>P&255;return N};function a(N,S){var A=d;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=S(N)}function u(N,S){this.h=S;for(var A=[],P=!0,x=N.length-1;0<=x;x--){var D=N[x]|0;P&&D==S||(A[x]=D,P=!1)}this.g=A}var d={};function f(N){return-128<=N&&128>N?a(N,function(S){return new u([S|0],0>S?-1:0)}):new u([N|0],0>N?-1:0)}function g(N){if(isNaN(N)||!isFinite(N))return w;if(0>N)return B(g(-N));for(var S=[],A=1,P=0;N>=A;P++)S[P]=N/A|0,A*=4294967296;return new u(S,0)}function v(N,S){if(N.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(N.charAt(0)=="-")return B(v(N.substring(1),S));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=g(Math.pow(S,8)),P=w,x=0;x<N.length;x+=8){var D=Math.min(8,N.length-x),R=parseInt(N.substring(x,x+D),S);8>D?(D=g(Math.pow(S,D)),P=P.j(D).add(g(R))):(P=P.j(A),P=P.add(g(R)))}return P}var w=f(0),I=f(1),O=f(16777216);n=u.prototype,n.m=function(){if(W(this))return-B(this).m();for(var N=0,S=1,A=0;A<this.g.length;A++){var P=this.i(A);N+=(0<=P?P:4294967296+P)*S,S*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(U(this))return"0";if(W(this))return"-"+B(this).toString(N);for(var S=g(Math.pow(N,6)),A=this,P="";;){var x=me(A,S).g;A=se(A,x.j(S));var D=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=x,U(A))return D+P;for(;6>D.length;)D="0"+D;P=D+P}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function U(N){if(N.h!=0)return!1;for(var S=0;S<N.g.length;S++)if(N.g[S]!=0)return!1;return!0}function W(N){return N.h==-1}n.l=function(N){return N=se(this,N),W(N)?-1:U(N)?0:1};function B(N){for(var S=N.g.length,A=[],P=0;P<S;P++)A[P]=~N.g[P];return new u(A,~N.h).add(I)}n.abs=function(){return W(this)?B(this):this},n.add=function(N){for(var S=Math.max(this.g.length,N.g.length),A=[],P=0,x=0;x<=S;x++){var D=P+(this.i(x)&65535)+(N.i(x)&65535),R=(D>>>16)+(this.i(x)>>>16)+(N.i(x)>>>16);P=R>>>16,D&=65535,R&=65535,A[x]=R<<16|D}return new u(A,A[A.length-1]&-2147483648?-1:0)};function se(N,S){return N.add(B(S))}n.j=function(N){if(U(this)||U(N))return w;if(W(this))return W(N)?B(this).j(B(N)):B(B(this).j(N));if(W(N))return B(this.j(B(N)));if(0>this.l(O)&&0>N.l(O))return g(this.m()*N.m());for(var S=this.g.length+N.g.length,A=[],P=0;P<2*S;P++)A[P]=0;for(P=0;P<this.g.length;P++)for(var x=0;x<N.g.length;x++){var D=this.i(P)>>>16,R=this.i(P)&65535,ft=N.i(x)>>>16,qt=N.i(x)&65535;A[2*P+2*x]+=R*qt,ne(A,2*P+2*x),A[2*P+2*x+1]+=D*qt,ne(A,2*P+2*x+1),A[2*P+2*x+1]+=R*ft,ne(A,2*P+2*x+1),A[2*P+2*x+2]+=D*ft,ne(A,2*P+2*x+2)}for(P=0;P<S;P++)A[P]=A[2*P+1]<<16|A[2*P];for(P=S;P<2*S;P++)A[P]=0;return new u(A,0)};function ne(N,S){for(;(N[S]&65535)!=N[S];)N[S+1]+=N[S]>>>16,N[S]&=65535,S++}function oe(N,S){this.g=N,this.h=S}function me(N,S){if(U(S))throw Error("division by zero");if(U(N))return new oe(w,w);if(W(N))return S=me(B(N),S),new oe(B(S.g),B(S.h));if(W(S))return S=me(N,B(S)),new oe(B(S.g),S.h);if(30<N.g.length){if(W(N)||W(S))throw Error("slowDivide_ only works with positive integers.");for(var A=I,P=S;0>=P.l(N);)A=ke(A),P=ke(P);var x=Ce(A,1),D=Ce(P,1);for(P=Ce(P,2),A=Ce(A,2);!U(P);){var R=D.add(P);0>=R.l(N)&&(x=x.add(A),D=R),P=Ce(P,1),A=Ce(A,1)}return S=se(N,x.j(S)),new oe(x,S)}for(x=w;0<=N.l(S);){for(A=Math.max(1,Math.floor(N.m()/S.m())),P=Math.ceil(Math.log(A)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),D=g(A),R=D.j(S);W(R)||0<R.l(N);)A-=P,D=g(A),R=D.j(S);U(D)&&(D=I),x=x.add(D),N=se(N,R)}return new oe(x,N)}n.A=function(N){return me(this,N).h},n.and=function(N){for(var S=Math.max(this.g.length,N.g.length),A=[],P=0;P<S;P++)A[P]=this.i(P)&N.i(P);return new u(A,this.h&N.h)},n.or=function(N){for(var S=Math.max(this.g.length,N.g.length),A=[],P=0;P<S;P++)A[P]=this.i(P)|N.i(P);return new u(A,this.h|N.h)},n.xor=function(N){for(var S=Math.max(this.g.length,N.g.length),A=[],P=0;P<S;P++)A[P]=this.i(P)^N.i(P);return new u(A,this.h^N.h)};function ke(N){for(var S=N.g.length+1,A=[],P=0;P<S;P++)A[P]=N.i(P)<<1|N.i(P-1)>>>31;return new u(A,N.h)}function Ce(N,S){var A=S>>5;S%=32;for(var P=N.g.length-A,x=[],D=0;D<P;D++)x[D]=0<S?N.i(D+A)>>>S|N.i(D+A+1)<<32-S:N.i(D+A);return new u(x,N.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,e1=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=v,ts=u}).apply(typeof tw<"u"?tw:typeof self<"u"?self:typeof window<"u"?window:{});var lh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var t1,Ql,n1,Ih,Vm,r1,i1,s1;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,m,y){return c==Array.prototype||c==Object.prototype||(c[m]=y.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof lh=="object"&&lh];for(var m=0;m<c.length;++m){var y=c[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=t(this);function s(c,m){if(m)e:{var y=r;c=c.split(".");for(var T=0;T<c.length-1;T++){var L=c[T];if(!(L in y))break e;y=y[L]}c=c[c.length-1],T=y[c],m=m(T),m!=T&&m!=null&&e(y,c,{configurable:!0,writable:!0,value:m})}}function a(c,m){c instanceof String&&(c+="");var y=0,T=!1,L={next:function(){if(!T&&y<c.length){var z=y++;return{value:m(z,c[z]),done:!1}}return T=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(c){return c||function(){return a(this,function(m,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var m=typeof c;return m=m!="object"?m:c?Array.isArray(c)?"array":m:"null",m=="array"||m=="object"&&typeof c.length=="number"}function g(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function v(c,m,y){return c.call.apply(c.bind,arguments)}function w(c,m,y){if(!c)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,T),c.apply(m,L)}}return function(){return c.apply(m,arguments)}}function I(c,m,y){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:w,I.apply(null,arguments)}function O(c,m){var y=Array.prototype.slice.call(arguments,1);return function(){var T=y.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function U(c,m){function y(){}y.prototype=m.prototype,c.aa=m.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(T,L,z){for(var J=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)J[Ge-2]=arguments[Ge];return m.prototype[L].apply(T,J)}}function W(c){const m=c.length;if(0<m){const y=Array(m);for(let T=0;T<m;T++)y[T]=c[T];return y}return[]}function B(c,m){for(let y=1;y<arguments.length;y++){const T=arguments[y];if(f(T)){const L=c.length||0,z=T.length||0;c.length=L+z;for(let J=0;J<z;J++)c[L+J]=T[J]}else c.push(T)}}class se{constructor(m,y){this.i=m,this.j=y,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function ne(c){return/^[\s\xa0]*$/.test(c)}function oe(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function me(c){return me[" "](c),c}me[" "]=function(){};var ke=oe().indexOf("Gecko")!=-1&&!(oe().toLowerCase().indexOf("webkit")!=-1&&oe().indexOf("Edge")==-1)&&!(oe().indexOf("Trident")!=-1||oe().indexOf("MSIE")!=-1)&&oe().indexOf("Edge")==-1;function Ce(c,m,y){for(const T in c)m.call(y,c[T],T,c)}function N(c,m){for(const y in c)m.call(void 0,c[y],y,c)}function S(c){const m={};for(const y in c)m[y]=c[y];return m}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(c,m){let y,T;for(let L=1;L<arguments.length;L++){T=arguments[L];for(y in T)c[y]=T[y];for(let z=0;z<A.length;z++)y=A[z],Object.prototype.hasOwnProperty.call(T,y)&&(c[y]=T[y])}}function x(c){var m=1;c=c.split(":");const y=[];for(;0<m&&c.length;)y.push(c.shift()),m--;return c.length&&y.push(c.join(":")),y}function D(c){d.setTimeout(()=>{throw c},0)}function R(){var c=ge;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class ft{constructor(){this.h=this.g=null}add(m,y){const T=qt.get();T.set(m,y),this.h?this.h.next=T:this.g=T,this.h=T}}var qt=new se(()=>new Gt,c=>c.reset());class Gt{constructor(){this.next=this.g=this.h=null}set(m,y){this.h=m,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ke,Z=!1,ge=new ft,re=()=>{const c=d.Promise.resolve(void 0);Ke=()=>{c.then(M)}};var M=()=>{for(var c;c=R();){try{c.h.call(c.g)}catch(y){D(y)}var m=qt;m.j(c),100>m.h&&(m.h++,c.next=m.g,m.g=c)}Z=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Ae=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};d.addEventListener("test",y,m),d.removeEventListener("test",y,m)}catch{}return c}();function Pe(c,m){if(fe.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget){if(ke){e:{try{me(m.nodeName);var L=!0;break e}catch{}L=!1}L||(m=null)}}else y=="mouseover"?m=c.fromElement:y=="mouseout"&&(m=c.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ve[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Pe.aa.h.call(this)}}U(Pe,fe);var Ve={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var We="closure_listenable_"+(1e6*Math.random()|0),$e=0;function Xe(c,m,y,T,L){this.listener=c,this.proxy=null,this.src=m,this.type=y,this.capture=!!T,this.ha=L,this.key=++$e,this.da=this.fa=!1}function Nt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Vr(c){this.src=c,this.g={},this.h=0}Vr.prototype.add=function(c,m,y,T,L){var z=c.toString();c=this.g[z],c||(c=this.g[z]=[],this.h++);var J=vi(c,m,T,L);return-1<J?(m=c[J],y||(m.fa=!1)):(m=new Xe(m,this.src,z,!!T,L),m.fa=y,c.push(m)),m};function go(c,m){var y=m.type;if(y in c.g){var T=c.g[y],L=Array.prototype.indexOf.call(T,m,void 0),z;(z=0<=L)&&Array.prototype.splice.call(T,L,1),z&&(Nt(m),c.g[y].length==0&&(delete c.g[y],c.h--))}}function vi(c,m,y,T){for(var L=0;L<c.length;++L){var z=c[L];if(!z.da&&z.listener==m&&z.capture==!!y&&z.ha==T)return L}return-1}var gs="closure_lm_"+(1e6*Math.random()|0),_o={};function Ka(c,m,y,T,L){if(Array.isArray(m)){for(var z=0;z<m.length;z++)Ka(c,m[z],y,T,L);return null}return y=Xa(y),c&&c[We]?c.K(m,y,g(T)?!!T.capture:!!T,L):Qa(c,m,y,!1,T,L)}function Qa(c,m,y,T,L,z){if(!m)throw Error("Invalid event type");var J=g(L)?!!L.capture:!!L,Ge=vo(c);if(Ge||(c[gs]=Ge=new Vr(c)),y=Ge.add(m,y,T,J,z),y.proxy)return y;if(T=zu(),y.proxy=T,T.src=c,T.listener=y,c.addEventListener)Ae||(L=J),L===void 0&&(L=!1),c.addEventListener(m.toString(),T,L);else if(c.attachEvent)c.attachEvent(Ur(m.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return y}function zu(){function c(y){return m.call(c.src,c.listener,y)}const m=Ya;return c}function yo(c,m,y,T,L){if(Array.isArray(m))for(var z=0;z<m.length;z++)yo(c,m[z],y,T,L);else T=g(T)?!!T.capture:!!T,y=Xa(y),c&&c[We]?(c=c.i,m=String(m).toString(),m in c.g&&(z=c.g[m],y=vi(z,y,T,L),-1<y&&(Nt(z[y]),Array.prototype.splice.call(z,y,1),z.length==0&&(delete c.g[m],c.h--)))):c&&(c=vo(c))&&(m=c.g[m.toString()],c=-1,m&&(c=vi(m,y,T,L)),(y=-1<c?m[c]:null)&&Fr(y))}function Fr(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[We])go(m.i,c);else{var y=c.type,T=c.proxy;m.removeEventListener?m.removeEventListener(y,T,c.capture):m.detachEvent?m.detachEvent(Ur(y),T):m.addListener&&m.removeListener&&m.removeListener(T),(y=vo(m))?(go(y,c),y.h==0&&(y.src=null,m[gs]=null)):Nt(c)}}}function Ur(c){return c in _o?_o[c]:_o[c]="on"+c}function Ya(c,m){if(c.da)c=!0;else{m=new Pe(m,this);var y=c.listener,T=c.ha||c.src;c.fa&&Fr(c),c=y.call(T,m)}return c}function vo(c){return c=c[gs],c instanceof Vr?c:null}var Eo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xa(c){return typeof c=="function"?c:(c[Eo]||(c[Eo]=function(m){return c.handleEvent(m)}),c[Eo])}function wt(){H.call(this),this.i=new Vr(this),this.M=this,this.F=null}U(wt,H),wt.prototype[We]=!0,wt.prototype.removeEventListener=function(c,m,y,T){yo(this,c,m,y,T)};function Tt(c,m){var y,T=c.F;if(T)for(y=[];T;T=T.F)y.push(T);if(c=c.M,T=m.type||m,typeof m=="string")m=new fe(m,c);else if(m instanceof fe)m.target=m.target||c;else{var L=m;m=new fe(T,c),P(m,L)}if(L=!0,y)for(var z=y.length-1;0<=z;z--){var J=m.g=y[z];L=jr(J,T,!0,m)&&L}if(J=m.g=c,L=jr(J,T,!0,m)&&L,L=jr(J,T,!1,m)&&L,y)for(z=0;z<y.length;z++)J=m.g=y[z],L=jr(J,T,!1,m)&&L}wt.prototype.N=function(){if(wt.aa.N.call(this),this.i){var c=this.i,m;for(m in c.g){for(var y=c.g[m],T=0;T<y.length;T++)Nt(y[T]);delete c.g[m],c.h--}}this.F=null},wt.prototype.K=function(c,m,y,T){return this.i.add(String(c),m,!1,y,T)},wt.prototype.L=function(c,m,y,T){return this.i.add(String(c),m,!0,y,T)};function jr(c,m,y,T){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();for(var L=!0,z=0;z<m.length;++z){var J=m[z];if(J&&!J.da&&J.capture==y){var Ge=J.listener,It=J.ha||J.src;J.fa&&go(c.i,J),L=Ge.call(It,T)!==!1&&L}}return L&&!T.defaultPrevented}function Ja(c,m,y){if(typeof c=="function")y&&(c=I(c,y));else if(c&&typeof c.handleEvent=="function")c=I(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(c,m||0)}function Ei(c){c.g=Ja(()=>{c.g=null,c.i&&(c.i=!1,Ei(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class _s extends H{constructor(m,y){super(),this.m=m,this.l=y,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Ei(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ys(c){H.call(this),this.h=c,this.g={}}U(ys,H);var Za=[];function el(c){Ce(c.g,function(m,y){this.g.hasOwnProperty(y)&&Fr(m)},c),c.g={}}ys.prototype.N=function(){ys.aa.N.call(this),el(this)},ys.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tl=d.JSON.stringify,nl=d.JSON.parse,rl=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function vs(){}vs.prototype.h=null;function wo(c){return c.h||(c.h=c.i())}function To(){}var bn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pr(){fe.call(this,"d")}U(pr,fe);function Io(){fe.call(this,"c")}U(Io,fe);var mr={},il=null;function Es(){return il=il||new wt}mr.La="serverreachability";function sl(c){fe.call(this,mr.La,c)}U(sl,fe);function zr(c){const m=Es();Tt(m,new sl(m))}mr.STAT_EVENT="statevent";function ol(c,m){fe.call(this,mr.STAT_EVENT,c),this.stat=m}U(ol,fe);function pt(c){const m=Es();Tt(m,new ol(m,c))}mr.Ma="timingevent";function So(c,m){fe.call(this,mr.Ma,c),this.size=m}U(So,fe);function qn(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},m)}function ws(){this.g=!0}ws.prototype.xa=function(){this.g=!1};function Ts(c,m,y,T,L,z){c.info(function(){if(c.g)if(z)for(var J="",Ge=z.split("&"),It=0;It<Ge.length;It++){var Fe=Ge[It].split("=");if(1<Fe.length){var bt=Fe[0];Fe=Fe[1];var _t=bt.split("_");J=2<=_t.length&&_t[1]=="type"?J+(bt+"="+Fe+"&"):J+(bt+"=redacted&")}}else J=null;else J=z;return"XMLHTTP REQ ("+T+") [attempt "+L+"]: "+m+`
`+y+`
`+J})}function Co(c,m,y,T,L,z,J){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+L+"]: "+m+`
`+y+`
`+z+" "+J})}function Gn(c,m,y,T){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+$d(c,y)+(T?" "+T:"")})}function al(c,m){c.info(function(){return"TIMEOUT: "+m})}ws.prototype.info=function(){};function $d(c,m){if(!c.g)return m;if(!m)return null;try{var y=JSON.parse(m);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var T=y[c];if(!(2>T.length)){var L=T[1];if(Array.isArray(L)&&!(1>L.length)){var z=L[0];if(z!="noop"&&z!="stop"&&z!="close")for(var J=1;J<L.length;J++)L[J]=""}}}}return tl(y)}catch{return m}}var Ao={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Kn;function Is(){}U(Is,vs),Is.prototype.g=function(){return new XMLHttpRequest},Is.prototype.i=function(){return{}},Kn=new Is;function Qn(c,m,y,T){this.j=c,this.i=m,this.l=y,this.R=T||1,this.U=new ys(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wu}function Wu(){this.i=null,this.g="",this.h=!1}var ll={},Ro={};function ko(c,m,y){c.L=1,c.v=Ci(Tn(m)),c.m=y,c.P=!0,ul(c,null)}function ul(c,m){c.F=Date.now(),Je(c),c.A=Tn(c.v);var y=c.A,T=c.R;Array.isArray(T)||(T=[String(T)]),Ri(y.i,"t",T),c.C=0,y=c.j.J,c.h=new Wu,c.g=ac(c.j,y?m:null,!c.m),0<c.O&&(c.M=new _s(I(c.Y,c,c.g),c.O)),m=c.U,y=c.g,T=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(Za[0]=L.toString()),L=Za);for(var z=0;z<L.length;z++){var J=Ka(y,L[z],T||m.handleEvent,!1,m.h||m);if(!J)break;m.g[J.key]=J}m=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,m)):(c.u="GET",c.g.ea(c.A,c.u,null,m)),zr(),Ts(c.i,c.u,c.A,c.l,c.R,c.m)}Qn.prototype.ca=function(c){c=c.target;const m=this.M;m&&hn(c)==3?m.j():this.Y(c)},Qn.prototype.Y=function(c){try{if(c==this.g)e:{const _t=hn(this.g);var m=this.g.Ba();const Dn=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||ml(this.g)))){this.J||_t!=4||m==7||(m==8||0>=Dn?zr(3):zr(2)),Ss(this);var y=this.g.Z();this.X=y;t:if($u(this)){var T=ml(this.g);c="";var L=T.length,z=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){On(this),wi(this);var J="";break t}this.h.i=new d.TextDecoder}for(m=0;m<L;m++)this.h.h=!0,c+=this.h.i.decode(T[m],{stream:!(z&&m==L-1)});T.length=0,this.h.g+=c,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=y==200,Co(this.i,this.u,this.A,this.l,this.R,_t,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Ge,It=this.g;if((Ge=It.g?It.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ne(Ge)){var Fe=Ge;break t}}Fe=null}if(y=Fe)Gn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cl(this,y);else{this.o=!1,this.s=3,pt(12),On(this),wi(this);break e}}if(this.P){y=!0;let Sn;for(;!this.J&&this.C<J.length;)if(Sn=Hd(this,J),Sn==Ro){_t==4&&(this.s=4,pt(14),y=!1),Gn(this.i,this.l,null,"[Incomplete Response]");break}else if(Sn==ll){this.s=4,pt(15),Gn(this.i,this.l,J,"[Invalid Chunk]"),y=!1;break}else Gn(this.i,this.l,Sn,null),cl(this,Sn);if($u(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||J.length!=0||this.h.h||(this.s=1,pt(16),y=!1),this.o=this.o&&y,!y)Gn(this.i,this.l,J,"[Invalid Chunked Response]"),On(this),wi(this);else if(0<J.length&&!this.W){this.W=!0;var bt=this.j;bt.g==this&&bt.ba&&!bt.M&&(bt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),_l(bt),bt.M=!0,pt(11))}}else Gn(this.i,this.l,J,null),cl(this,J);_t==4&&On(this),this.o&&!this.J&&(_t==4?Uo(this.j,this):(this.o=!1,Je(this)))}else Do(this.g),y==400&&0<J.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),On(this),wi(this)}}}catch{}finally{}};function $u(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Hd(c,m){var y=c.C,T=m.indexOf(`
`,y);return T==-1?Ro:(y=Number(m.substring(y,T)),isNaN(y)?ll:(T+=1,T+y>m.length?Ro:(m=m.slice(T,T+y),c.C=T+y,m)))}Qn.prototype.cancel=function(){this.J=!0,On(this)};function Je(c){c.S=Date.now()+c.I,Hu(c,c.I)}function Hu(c,m){if(c.B!=null)throw Error("WatchDog timer not null");c.B=qn(I(c.ba,c),m)}function Ss(c){c.B&&(d.clearTimeout(c.B),c.B=null)}Qn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(al(this.i,this.A),this.L!=2&&(zr(),pt(17)),On(this),this.s=2,wi(this)):Hu(this,this.S-c)};function wi(c){c.j.G==0||c.J||Uo(c.j,c)}function On(c){Ss(c);var m=c.M;m&&typeof m.ma=="function"&&m.ma(),c.M=null,el(c.U),c.g&&(m=c.g,c.g=null,m.abort(),m.ma())}function cl(c,m){try{var y=c.j;if(y.G!=0&&(y.g==c||on(y.h,c))){if(!c.K&&on(y.h,c)&&y.G==3){try{var T=y.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var L=T;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)Fo(y),er(y);else break e;Vo(y),pt(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=qn(I(y.Za,y),6e3));if(1>=Gu(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else qr(y,11)}else if((c.K||y.g==c)&&Fo(y),!ne(m))for(L=y.Da.g.parse(m),m=0;m<L.length;m++){let Fe=L[m];if(y.T=Fe[0],Fe=Fe[1],y.G==2)if(Fe[0]=="c"){y.K=Fe[1],y.ia=Fe[2];const bt=Fe[3];bt!=null&&(y.la=bt,y.j.info("VER="+y.la));const _t=Fe[4];_t!=null&&(y.Aa=_t,y.j.info("SVER="+y.Aa));const Dn=Fe[5];Dn!=null&&typeof Dn=="number"&&0<Dn&&(T=1.5*Dn,y.L=T,y.j.info("backChannelRequestTimeoutMs_="+T)),T=y;const Sn=c.g;if(Sn){const bs=Sn.g?Sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bs){var z=T.h;z.g||bs.indexOf("spdy")==-1&&bs.indexOf("quic")==-1&&bs.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(hl(z,z.h),z.h=null))}if(T.D){const zo=Sn.g?Sn.g.getResponseHeader("X-HTTP-Session-Id"):null;zo&&(T.ya=zo,Ye(T.I,T.D,zo))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),T=y;var J=c;if(T.qa=oc(T,T.J?T.ia:null,T.W),J.K){Ku(T.h,J);var Ge=J,It=T.L;It&&(Ge.I=It),Ge.B&&(Ss(Ge),Je(Ge)),T.g=J}else Ns(T);0<y.i.length&&vr(y)}else Fe[0]!="stop"&&Fe[0]!="close"||qr(y,7);else y.G==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?qr(y,7):Ft(y):Fe[0]!="noop"&&y.l&&y.l.ta(Fe),y.v=0)}}zr(4)}catch{}}var qu=class{constructor(c,m){this.g=c,this.map=m}};function Cs(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Gu(c){return c.h?1:c.g?c.g.size:0}function on(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function hl(c,m){c.g?c.g.add(m):c.h=m}function Ku(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}Cs.prototype.cancel=function(){if(this.i=Qu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Qu(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const y of c.g.values())m=m.concat(y.D);return m}return W(c.i)}function Po(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var m=[],y=c.length,T=0;T<y;T++)m.push(c[T]);return m}m=[],y=0;for(T in c)m[y++]=c[T];return m}function No(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var m=[];c=c.length;for(var y=0;y<c;y++)m.push(y);return m}m=[],y=0;for(const T in c)m[y++]=T;return m}}}function Ti(c,m){if(c.forEach&&typeof c.forEach=="function")c.forEach(m,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,m,void 0);else for(var y=No(c),T=Po(c),L=T.length,z=0;z<L;z++)m.call(void 0,T[z],y&&y[z],c)}var As=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qd(c,m){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var T=c[y].indexOf("="),L=null;if(0<=T){var z=c[y].substring(0,T);L=c[y].substring(T+1)}else z=c[y];m(z,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Br(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Br){this.h=c.h,Rs(this,c.j),this.o=c.o,this.g=c.g,Ii(this,c.s),this.l=c.l;var m=c.i,y=new gr;y.i=m.i,m.g&&(y.g=new Map(m.g),y.h=m.h),Si(this,y),this.m=c.m}else c&&(m=String(c).match(As))?(this.h=!1,Rs(this,m[1]||"",!0),this.o=Me(m[2]||""),this.g=Me(m[3]||"",!0),Ii(this,m[4]),this.l=Me(m[5]||"",!0),Si(this,m[6]||"",!0),this.m=Me(m[7]||"")):(this.h=!1,this.i=new gr(null,this.h))}Br.prototype.toString=function(){var c=[],m=this.j;m&&c.push(Ai(m,bo,!0),":");var y=this.g;return(y||m=="file")&&(c.push("//"),(m=this.o)&&c.push(Ai(m,bo,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(Ai(y,y.charAt(0)=="/"?Ju:Xu,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",Ai(y,dl)),c.join("")};function Tn(c){return new Br(c)}function Rs(c,m,y){c.j=y?Me(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function Ii(c,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);c.s=m}else c.s=null}function Si(c,m,y){m instanceof gr?(c.i=m,_r(c.i,c.h)):(y||(m=Ai(m,Zu)),c.i=new gr(m,c.h))}function Ye(c,m,y){c.i.set(m,y)}function Ci(c){return Ye(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Me(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ai(c,m,y){return typeof c=="string"?(c=encodeURI(c).replace(m,Yu),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Yu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var bo=/[#\/\?@]/g,Xu=/[#\?:]/g,Ju=/[#\?]/g,Zu=/[#\?@]/g,dl=/#/g;function gr(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function Vt(c){c.g||(c.g=new Map,c.h=0,c.i&&qd(c.i,function(m,y){c.add(decodeURIComponent(m.replace(/\+/g," ")),y)}))}n=gr.prototype,n.add=function(c,m){Vt(this),this.i=null,c=xn(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(m),this.h+=1,this};function Yn(c,m){Vt(c),m=xn(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function Xn(c,m){return Vt(c),m=xn(c,m),c.g.has(m)}n.forEach=function(c,m){Vt(this),this.g.forEach(function(y,T){y.forEach(function(L){c.call(m,L,T,this)},this)},this)},n.na=function(){Vt(this);const c=Array.from(this.g.values()),m=Array.from(this.g.keys()),y=[];for(let T=0;T<m.length;T++){const L=c[T];for(let z=0;z<L.length;z++)y.push(m[T])}return y},n.V=function(c){Vt(this);let m=[];if(typeof c=="string")Xn(this,c)&&(m=m.concat(this.g.get(xn(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)m=m.concat(c[y])}return m},n.set=function(c,m){return Vt(this),this.i=null,c=xn(this,c),Xn(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},n.get=function(c,m){return c?(c=this.V(c),0<c.length?String(c[0]):m):m};function Ri(c,m,y){Yn(c,m),0<y.length&&(c.i=null,c.g.set(xn(c,m),W(y)),c.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(var y=0;y<m.length;y++){var T=m[y];const z=encodeURIComponent(String(T)),J=this.V(T);for(T=0;T<J.length;T++){var L=z;J[T]!==""&&(L+="="+encodeURIComponent(String(J[T]))),c.push(L)}}return this.i=c.join("&")};function xn(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function _r(c,m){m&&!c.j&&(Vt(c),c.i=null,c.g.forEach(function(y,T){var L=T.toLowerCase();T!=L&&(Yn(this,T),Ri(this,L,y))},c)),c.j=m}function Gd(c,m){const y=new ws;if(d.Image){const T=new Image;T.onload=O(cn,y,"TestLoadImage: loaded",!0,m,T),T.onerror=O(cn,y,"TestLoadImage: error",!1,m,T),T.onabort=O(cn,y,"TestLoadImage: abort",!1,m,T),T.ontimeout=O(cn,y,"TestLoadImage: timeout",!1,m,T),d.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else m(!1)}function ec(c,m){const y=new ws,T=new AbortController,L=setTimeout(()=>{T.abort(),cn(y,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:T.signal}).then(z=>{clearTimeout(L),z.ok?cn(y,"TestPingServer: ok",!0,m):cn(y,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(L),cn(y,"TestPingServer: error",!1,m)})}function cn(c,m,y,T,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),T(y)}catch{}}function Kd(){this.g=new rl}function tc(c,m,y){const T=y||"";try{Ti(c,function(L,z){let J=L;g(L)&&(J=tl(L)),m.push(T+z+"="+encodeURIComponent(J))})}catch(L){throw m.push(T+"type="+encodeURIComponent("_badmap")),L}}function Wr(c){this.l=c.Ub||null,this.j=c.eb||!1}U(Wr,vs),Wr.prototype.g=function(){return new ks(this.l,this.j)},Wr.prototype.i=function(c){return function(){return c}}({});function ks(c,m){wt.call(this),this.D=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(ks,wt),n=ks.prototype,n.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=m,this.readyState=1,Zn(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(m.body=c),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jn(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Zn(this)),this.g&&(this.readyState=3,Zn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nc(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function nc(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?Jn(this):Zn(this),this.readyState==3&&nc(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,Jn(this))},n.Qa=function(c){this.g&&(this.response=c,Jn(this))},n.ga=function(){this.g&&Jn(this)};function Jn(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Zn(c)}n.setRequestHeader=function(c,m){this.u.append(c,m)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var y=m.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=m.next();return c.join(`\r
`)};function Zn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(ks.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function $r(c){let m="";return Ce(c,function(y,T){m+=T,m+=":",m+=y,m+=`\r
`}),m}function ki(c,m,y){e:{for(T in y){var T=!1;break e}T=!0}T||(y=$r(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):Ye(c,m,y))}function at(c){wt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(at,wt);var Qd=/^https?$/i,fl=["POST","PUT"];n=at.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,m,y,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Kn.g(),this.v=this.o?wo(this.o):wo(Kn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(z){Ps(this,z);return}if(c=y||"",y=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var L in T)y.set(L,T[L]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const z of T.keys())y.set(z,T.get(z));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(y.keys()).find(z=>z.toLowerCase()=="content-type"),L=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(fl,m,void 0))||T||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,J]of y)this.g.setRequestHeader(z,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xo(this),this.u=!0,this.g.send(c),this.u=!1}catch(z){Ps(this,z)}};function Ps(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.m=5,Oo(c),In(c)}function Oo(c){c.A||(c.A=!0,Tt(c,"complete"),Tt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Tt(this,"complete"),Tt(this,"abort"),In(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),In(this,!0)),at.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?pl(this):this.bb())},n.bb=function(){pl(this)};function pl(c){if(c.h&&typeof u<"u"&&(!c.v[1]||hn(c)!=4||c.Z()!=2)){if(c.u&&hn(c)==4)Ja(c.Ea,0,c);else if(Tt(c,"readystatechange"),hn(c)==4){c.h=!1;try{const J=c.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var y;if(!(y=m)){var T;if(T=J===0){var L=String(c.D).match(As)[1]||null;!L&&d.self&&d.self.location&&(L=d.self.location.protocol.slice(0,-1)),T=!Qd.test(L?L.toLowerCase():"")}y=T}if(y)Tt(c,"complete"),Tt(c,"success");else{c.m=6;try{var z=2<hn(c)?c.g.statusText:""}catch{z=""}c.l=z+" ["+c.Z()+"]",Oo(c)}}finally{In(c)}}}}function In(c,m){if(c.g){xo(c);const y=c.g,T=c.v[0]?()=>{}:null;c.g=null,c.v=null,m||Tt(c,"ready");try{y.onreadystatechange=T}catch{}}}function xo(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function hn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),nl(m)}};function ml(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Do(c){const m={};c=(c.g&&2<=hn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(ne(c[T]))continue;var y=x(c[T]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const z=m[L]||[];m[L]=z,z.push(y)}N(m,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yr(c,m,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||m}function gl(c){this.Aa=0,this.i=[],this.j=new ws,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yr("baseRetryDelayMs",5e3,c),this.cb=yr("retryDelaySeedMs",1e4,c),this.Wa=yr("forwardChannelMaxRetries",2,c),this.wa=yr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Cs(c&&c.concurrentRequestLimit),this.Da=new Kd,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=gl.prototype,n.la=8,n.G=1,n.connect=function(c,m,y,T){pt(0),this.W=c,this.H=m||{},y&&T!==void 0&&(this.H.OSID=y,this.H.OAID=T),this.F=this.X,this.I=oc(this,null,this.W),vr(this)};function Ft(c){if(Mo(c),c.G==3){var m=c.U++,y=Tn(c.I);if(Ye(y,"SID",c.K),Ye(y,"RID",m),Ye(y,"TYPE","terminate"),Hr(c,y),m=new Qn(c,c.j,m),m.L=2,m.v=Ci(Tn(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=m.v,y=!0),y||(m.g=ac(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Je(m)}sc(c)}function er(c){c.g&&(_l(c),c.g.cancel(),c.g=null)}function Mo(c){er(c),c.u&&(d.clearTimeout(c.u),c.u=null),Fo(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function vr(c){if(!wn(c.h)&&!c.s){c.s=!0;var m=c.Ga;Ke||re(),Z||(Ke(),Z=!0),ge.add(m,c),c.B=0}}function Yd(c,m){return Gu(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=m.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=qn(I(c.Ga,c,m),ic(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new Qn(this,this.j,c);let z=this.o;if(this.S&&(z?(z=S(z),P(z,this.S)):z=this.S),this.m!==null||this.O||(L.H=z,z=null),this.P)e:{for(var m=0,y=0;y<this.i.length;y++){t:{var T=this.i[y];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=y;break e}if(m===4096||y===this.i.length-1){m=y+1;break e}}m=1e3}else m=1e3;m=Pi(this,L,m),y=Tn(this.I),Ye(y,"RID",c),Ye(y,"CVER",22),this.D&&Ye(y,"X-HTTP-Session-Id",this.D),Hr(this,y),z&&(this.O?m="headers="+encodeURIComponent(String($r(z)))+"&"+m:this.m&&ki(y,this.m,z)),hl(this.h,L),this.Ua&&Ye(y,"TYPE","init"),this.P?(Ye(y,"$req",m),Ye(y,"SID","null"),L.T=!0,ko(L,y,null)):ko(L,y,m),this.G=2}}else this.G==3&&(c?Lo(this,c):this.i.length==0||wn(this.h)||Lo(this))};function Lo(c,m){var y;m?y=m.l:y=c.U++;const T=Tn(c.I);Ye(T,"SID",c.K),Ye(T,"RID",y),Ye(T,"AID",c.T),Hr(c,T),c.m&&c.o&&ki(T,c.m,c.o),y=new Qn(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),m&&(c.i=m.D.concat(c.i)),m=Pi(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),hl(c.h,y),ko(y,T,m)}function Hr(c,m){c.H&&Ce(c.H,function(y,T){Ye(m,T,y)}),c.l&&Ti({},function(y,T){Ye(m,T,y)})}function Pi(c,m,y){y=Math.min(c.i.length,y);var T=c.l?I(c.l.Na,c.l,c):null;e:{var L=c.i;let z=-1;for(;;){const J=["count="+y];z==-1?0<y?(z=L[0].g,J.push("ofs="+z)):z=0:J.push("ofs="+z);let Ge=!0;for(let It=0;It<y;It++){let Fe=L[It].g;const bt=L[It].map;if(Fe-=z,0>Fe)z=Math.max(0,L[It].g-100),Ge=!1;else try{tc(bt,J,"req"+Fe+"_")}catch{T&&T(bt)}}if(Ge){T=J.join("&");break e}}}return c=c.i.splice(0,y),m.D=c,T}function Ns(c){if(!c.g&&!c.u){c.Y=1;var m=c.Fa;Ke||re(),Z||(Ke(),Z=!0),ge.add(m,c),c.v=0}}function Vo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=qn(I(c.Fa,c),ic(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,rc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=qn(I(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),er(this),rc(this))};function _l(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function rc(c){c.g=new Qn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var m=Tn(c.qa);Ye(m,"RID","rpc"),Ye(m,"SID",c.K),Ye(m,"AID",c.T),Ye(m,"CI",c.F?"0":"1"),!c.F&&c.ja&&Ye(m,"TO",c.ja),Ye(m,"TYPE","xmlhttp"),Hr(c,m),c.m&&c.o&&ki(m,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=Ci(Tn(m)),y.m=null,y.P=!0,ul(y,c)}n.Za=function(){this.C!=null&&(this.C=null,er(this),Vo(this),pt(19))};function Fo(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function Uo(c,m){var y=null;if(c.g==m){Fo(c),_l(c),c.g=null;var T=2}else if(on(c.h,m))y=m.D,Ku(c.h,m),T=1;else return;if(c.G!=0){if(m.o)if(T==1){y=m.m?m.m.length:0,m=Date.now()-m.F;var L=c.B;T=Es(),Tt(T,new So(T,y)),vr(c)}else Ns(c);else if(L=m.s,L==3||L==0&&0<m.X||!(T==1&&Yd(c,m)||T==2&&Vo(c)))switch(y&&0<y.length&&(m=c.h,m.i=m.i.concat(y)),L){case 1:qr(c,5);break;case 4:qr(c,10);break;case 3:qr(c,6);break;default:qr(c,2)}}}function ic(c,m){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*m}function qr(c,m){if(c.j.info("Error code "+m),m==2){var y=I(c.fb,c),T=c.Xa;const L=!T;T=new Br(T||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Rs(T,"https"),Ci(T),L?Gd(T.toString(),y):ec(T.toString(),y)}else pt(2);c.G=0,c.l&&c.l.sa(m),sc(c),Mo(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function sc(c){if(c.G=0,c.ka=[],c.l){const m=Qu(c.h);(m.length!=0||c.i.length!=0)&&(B(c.ka,m),B(c.ka,c.i),c.h.i.length=0,W(c.i),c.i.length=0),c.l.ra()}}function oc(c,m,y){var T=y instanceof Br?Tn(y):new Br(y);if(T.g!="")m&&(T.g=m+"."+T.g),Ii(T,T.s);else{var L=d.location;T=L.protocol,m=m?m+"."+L.hostname:L.hostname,L=+L.port;var z=new Br(null);T&&Rs(z,T),m&&(z.g=m),L&&Ii(z,L),y&&(z.l=y),T=z}return y=c.D,m=c.ya,y&&m&&Ye(T,y,m),Ye(T,"VER",c.la),Hr(c,T),T}function ac(c,m,y){if(m&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Ca&&!c.pa?new at(new Wr({eb:y})):new at(c.pa),m.Ha(c.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function yl(){}n=yl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function jo(){}jo.prototype.g=function(c,m){return new an(c,m)};function an(c,m){wt.call(this),this.g=new gl(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(c?c["X-WebChannel-Client-Profile"]=m.va:c={"X-WebChannel-Client-Profile":m.va}),this.g.S=c,(c=m&&m.Sb)&&!ne(c)&&(this.g.m=c),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!ne(m)&&(this.g.D=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new Er(this)}U(an,wt),an.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},an.prototype.close=function(){Ft(this.g)},an.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=tl(c),c=y);m.i.push(new qu(m.Ya++,c)),m.G==3&&vr(m)},an.prototype.N=function(){this.g.l=null,delete this.j,Ft(this.g),delete this.g,an.aa.N.call(this)};function lc(c){pr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){e:{for(const y in m){c=y;break e}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}U(lc,pr);function uc(){Io.call(this),this.status=1}U(uc,Io);function Er(c){this.g=c}U(Er,yl),Er.prototype.ua=function(){Tt(this.g,"a")},Er.prototype.ta=function(c){Tt(this.g,new lc(c))},Er.prototype.sa=function(c){Tt(this.g,new uc)},Er.prototype.ra=function(){Tt(this.g,"b")},jo.prototype.createWebChannel=jo.prototype.g,an.prototype.send=an.prototype.o,an.prototype.open=an.prototype.m,an.prototype.close=an.prototype.close,s1=function(){return new jo},i1=function(){return Es()},r1=mr,Vm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ao.NO_ERROR=0,Ao.TIMEOUT=8,Ao.HTTP_ERROR=6,Ih=Ao,Bu.COMPLETE="complete",n1=Bu,To.EventType=bn,bn.OPEN="a",bn.CLOSE="b",bn.ERROR="c",bn.MESSAGE="d",wt.prototype.listen=wt.prototype.K,Ql=To,at.prototype.listenOnce=at.prototype.L,at.prototype.getLastError=at.prototype.Ka,at.prototype.getLastErrorCode=at.prototype.Ba,at.prototype.getStatus=at.prototype.Z,at.prototype.getResponseJson=at.prototype.Oa,at.prototype.getResponseText=at.prototype.oa,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Ha,t1=at}).apply(typeof lh<"u"?lh:typeof self<"u"?self:typeof window<"u"?window:{});const nw="@firebase/firestore",rw="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Zt.UNAUTHENTICATED=new Zt(null),Zt.GOOGLE_CREDENTIALS=new Zt("google-credentials-uid"),Zt.FIRST_PARTY=new Zt("first-party-uid"),Zt.MOCK_USER=new Zt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wa="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=new pd("@firebase/firestore");function ca(){return oo.logLevel}function ie(n,...e){if(oo.logLevel<=Oe.DEBUG){const t=e.map(t_);oo.debug(`Firestore (${Wa}): ${n}`,...t)}}function pi(n,...e){if(oo.logLevel<=Oe.ERROR){const t=e.map(t_);oo.error(`Firestore (${Wa}): ${n}`,...t)}}function Pa(n,...e){if(oo.logLevel<=Oe.WARN){const t=e.map(t_);oo.warn(`Firestore (${Wa}): ${n}`,...t)}}function t_(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(n="Unexpected state"){const e=`FIRESTORE (${Wa}) INTERNAL ASSERTION FAILED: `+n;throw pi(e),new Error(e)}function qe(n,e){n||ve()}function Se(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends gi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Zt.UNAUTHENTICATED))}shutdown(){}}class NM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class bM{constructor(e){this.t=e,this.currentUser=Zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){qe(this.o===void 0);let r=this.i;const s=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new ns;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new ns,e.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const f=a;e.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},d=f=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>d(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new ns)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(qe(typeof r.accessToken=="string"),new o1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return qe(e===null||typeof e=="string"),new Zt(e)}}class OM{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Zt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class xM{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new OM(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Zt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class iw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DM{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,zn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){qe(this.o===void 0);const r=a=>{a.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.R;return this.R=a.token,ie("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>r(a))};const s=a=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?s(a):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new iw(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(qe(typeof t.token=="string"),this.R=t.token,new iw(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MM(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=MM(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<t&&(r+=e.charAt(s[a]%62))}return r}}function Re(n,e){return n<e?-1:n>e?1:0}function Fm(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return Re(r,s);{const a=a1(),u=LM(a.encode(sw(n,t)),a.encode(sw(e,t)));return u!==0?u:Re(r,s)}}t+=r>65535?2:1}return Re(n.length,e.length)}function sw(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function LM(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Re(n[t],e[t]);return Re(n.length,e.length)}function Na(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=-62135596800,aw=1e6;class Rt{static now(){return Rt.fromMillis(Date.now())}static fromDate(e){return Rt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*aw);return new Rt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ow)throw new ue(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/aw}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-ow;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new Rt(0,0))}static max(){return new Te(new Rt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw="__name__";class Cr{constructor(e,t,r){t===void 0?t=0:t>e.length&&ve(),r===void 0?r=e.length-t:r>e.length-t&&ve(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Cr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Cr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const a=Cr.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return Re(e.length,t.length)}static compareSegments(e,t){const r=Cr.isNumericId(e),s=Cr.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Cr.extractNumericId(e).compare(Cr.extractNumericId(t)):Fm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ts.fromString(e.substring(4,e.length-2))}}class it extends Cr{construct(e,t,r){return new it(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ue(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new it(t)}static emptyPath(){return new it([])}}const VM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $t extends Cr{construct(e,t,r){return new $t(e,t,r)}static isValidIdentifier(e){return VM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===lw}static keyField(){return new $t([lw])}static fromServerFormat(e){const t=[];let r="",s=0;const a=()=>{if(r.length===0)throw new ue(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new ue(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new ue(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else d==="`"?(u=!u,s++):d!=="."||u?(r+=d,s++):(a(),s++)}if(a(),u)throw new ue(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $t(t)}static emptyPath(){return new $t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(it.fromString(e))}static fromName(e){return new pe(it.fromString(e).popFirst(5))}static empty(){return new pe(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&it.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return it.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new it(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=-1;function FM(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Te.fromTimestamp(r===1e9?new Rt(t+1,0):new Rt(t,r));return new cs(s,pe.empty(),e)}function UM(n){return new cs(n.readTime,n.key,vu)}class cs{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new cs(Te.min(),pe.empty(),vu)}static max(){return new cs(Te.max(),pe.empty(),vu)}}function jM(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(n.documentKey,e.documentKey),t!==0?t:Re(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class BM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(n){if(n.code!==q.FAILED_PRECONDITION||n.message!==zM)throw n;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):$.reject(t)}static resolve(e){return new $((t,r)=>{t(e)})}static reject(e){return new $((t,r)=>{r(e)})}static waitFor(e){return new $((t,r)=>{let s=0,a=0,u=!1;e.forEach(d=>{++s,d.next(()=>{++a,u&&a===s&&t()},f=>r(f))}),u=!0,a===s&&t()})}static or(e){let t=$.resolve(!1);for(const r of e)t=t.next(s=>s?$.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,a)=>{r.push(t.call(this,s,a))}),this.waitFor(r)}static mapArray(e,t){return new $((r,s)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const g=f;t(e[g]).next(v=>{u[g]=v,++d,d===a&&r(u)},v=>s(v))}})}static doWhile(e,t){return new $((r,s)=>{const a=()=>{e()===!0?t().next(()=>{a()},s):r()};a()})}}function WM(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ha(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Nd.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=-1;function bd(n){return n==null}function Jh(n){return n===0&&1/n==-1/0}function $M(n){return typeof n=="number"&&Number.isInteger(n)&&!Jh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="";function HM(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=uw(e)),e=qM(n.get(t),e);return uw(e)}function qM(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const a=n.charAt(s);switch(a){case"\0":t+="";break;case u1:t+="";break;default:t+=a}}return t}function uw(n){return n+u1+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ho(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function c1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t){this.comparator=e,this.root=t||zt.EMPTY}insert(e,t){return new ht(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,zt.BLACK,null,null))}remove(e){return new ht(this.comparator,this.root.remove(e,this.comparator).copy(null,null,zt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uh(this.root,e,this.comparator,!1)}getReverseIterator(){return new uh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uh(this.root,e,this.comparator,!0)}}class uh{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class zt{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??zt.RED,this.left=s??zt.EMPTY,this.right=a??zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,a){return new zt(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return zt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return zt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ve();const e=this.left.check();if(e!==this.right.check())throw ve();return e+(this.isRed()?0:1)}}zt.EMPTY=null,zt.RED=!0,zt.BLACK=!1;zt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve()}get value(){throw ve()}get color(){throw ve()}get left(){throw ve()}get right(){throw ve()}copy(e,t,r,s,a){return this}insert(e,t,r){return new zt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.comparator=e,this.data=new ht(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new hw(this.data.getIterator())}getIteratorFrom(e){return new hw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new kt(this.comparator);return t.data=e,t}}class hw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.fields=e,e.sort($t.comparator)}static empty(){return new cr([])}unionWith(e){let t=new kt($t.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new cr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Na(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new h1("Invalid base64 string: "+a):a}}(e);return new Ht(t)}static fromUint8Array(e){const t=function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a}(e);return new Ht(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ht.EMPTY_BYTE_STRING=new Ht("");const GM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hs(n){if(qe(!!n),typeof n=="string"){let e=0;const t=GM.exec(n);if(qe(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:gt(n.seconds),nanos:gt(n.nanos)}}function gt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ds(n){return typeof n=="string"?Ht.fromBase64String(n):Ht.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1="server_timestamp",f1="__type__",p1="__previous_value__",m1="__local_write_time__";function r_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[f1])===null||t===void 0?void 0:t.stringValue)===d1}function Od(n){const e=n.mapValue.fields[p1];return r_(e)?Od(e):e}function Eu(n){const e=hs(n.mapValue.fields[m1].timestampValue);return new Rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(e,t,r,s,a,u,d,f,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=g}}const Zh="(default)";class wu{constructor(e,t){this.projectId=e,this.database=t||Zh}static empty(){return new wu("","")}get isDefaultDatabase(){return this.database===Zh}isEqual(e){return e instanceof wu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1="__type__",_1="__max__",ch={mapValue:{fields:{__type__:{stringValue:_1}}}},y1="__vector__",ed="value";function fs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?r_(n)?4:YM(n)?9007199254740991:QM(n)?10:11:ve()}function Lr(n,e){if(n===e)return!0;const t=fs(n);if(t!==fs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Eu(n).isEqual(Eu(e));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=hs(s.timestampValue),d=hs(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,a){return ds(s.bytesValue).isEqual(ds(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,a){return gt(s.geoPointValue.latitude)===gt(a.geoPointValue.latitude)&&gt(s.geoPointValue.longitude)===gt(a.geoPointValue.longitude)}(n,e);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return gt(s.integerValue)===gt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=gt(s.doubleValue),d=gt(a.doubleValue);return u===d?Jh(u)===Jh(d):isNaN(u)&&isNaN(d)}return!1}(n,e);case 9:return Na(n.arrayValue.values||[],e.arrayValue.values||[],Lr);case 10:case 11:return function(s,a){const u=s.mapValue.fields||{},d=a.mapValue.fields||{};if(cw(u)!==cw(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!Lr(u[f],d[f])))return!1;return!0}(n,e);default:return ve()}}function Tu(n,e){return(n.values||[]).find(t=>Lr(t,e))!==void 0}function ba(n,e){if(n===e)return 0;const t=fs(n),r=fs(e);if(t!==r)return Re(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(n.booleanValue,e.booleanValue);case 2:return function(a,u){const d=gt(a.integerValue||a.doubleValue),f=gt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1}(n,e);case 3:return dw(n.timestampValue,e.timestampValue);case 4:return dw(Eu(n),Eu(e));case 5:return Fm(n.stringValue,e.stringValue);case 6:return function(a,u){const d=ds(a),f=ds(u);return d.compareTo(f)}(n.bytesValue,e.bytesValue);case 7:return function(a,u){const d=a.split("/"),f=u.split("/");for(let g=0;g<d.length&&g<f.length;g++){const v=Re(d[g],f[g]);if(v!==0)return v}return Re(d.length,f.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,u){const d=Re(gt(a.latitude),gt(u.latitude));return d!==0?d:Re(gt(a.longitude),gt(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return fw(n.arrayValue,e.arrayValue);case 10:return function(a,u){var d,f,g,v;const w=a.fields||{},I=u.fields||{},O=(d=w[ed])===null||d===void 0?void 0:d.arrayValue,U=(f=I[ed])===null||f===void 0?void 0:f.arrayValue,W=Re(((g=O==null?void 0:O.values)===null||g===void 0?void 0:g.length)||0,((v=U==null?void 0:U.values)===null||v===void 0?void 0:v.length)||0);return W!==0?W:fw(O,U)}(n.mapValue,e.mapValue);case 11:return function(a,u){if(a===ch.mapValue&&u===ch.mapValue)return 0;if(a===ch.mapValue)return 1;if(u===ch.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),g=u.fields||{},v=Object.keys(g);f.sort(),v.sort();for(let w=0;w<f.length&&w<v.length;++w){const I=Fm(f[w],v[w]);if(I!==0)return I;const O=ba(d[f[w]],g[v[w]]);if(O!==0)return O}return Re(f.length,v.length)}(n.mapValue,e.mapValue);default:throw ve()}}function dw(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Re(n,e);const t=hs(n),r=hs(e),s=Re(t.seconds,r.seconds);return s!==0?s:Re(t.nanos,r.nanos)}function fw(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const a=ba(t[s],r[s]);if(a)return a}return Re(t.length,r.length)}function Oa(n){return Um(n)}function Um(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=hs(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ds(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return pe.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const a of t.values||[])s?s=!1:r+=",",r+=Um(a);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${Um(t.fields[u])}`;return s+"}"}(n.mapValue):ve()}function Sh(n){switch(fs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Od(n);return e?16+Sh(e):16;case 5:return 2*n.stringValue.length;case 6:return ds(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,a)=>s+Sh(a),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return ho(r.fields,(a,u)=>{s+=a.length+Sh(u)}),s}(n.mapValue);default:throw ve()}}function pw(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function jm(n){return!!n&&"integerValue"in n}function i_(n){return!!n&&"arrayValue"in n}function mw(n){return!!n&&"nullValue"in n}function gw(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ch(n){return!!n&&"mapValue"in n}function QM(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[g1])===null||t===void 0?void 0:t.stringValue)===y1}function ou(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ho(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ou(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ou(n.arrayValue.values[t]);return e}return Object.assign({},n)}function YM(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===_1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.value=e}static empty(){return new Bn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ch(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ou(t)}setAll(e){let t=$t.emptyPath(),r={},s=[];e.forEach((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,r,s),r={},s=[],t=d.popLast()}u?r[d.lastSegment()]=ou(u):s.push(d.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,r,s)}delete(e){const t=this.field(e.popLast());Ch(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Lr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ch(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){ho(t,(s,a)=>e[s]=a);for(const s of r)delete e[s]}clone(){return new Bn(ou(this.value))}}function v1(n){const e=[];return ho(n.fields,(t,r)=>{const s=new $t([t]);if(Ch(r)){const a=v1(r.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)}),new cr(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t,r,s,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new tn(e,0,Te.min(),Te.min(),Te.min(),Bn.empty(),0)}static newFoundDocument(e,t,r,s){return new tn(e,1,t,Te.min(),r,s,0)}static newNoDocument(e,t){return new tn(e,2,t,Te.min(),Te.min(),Bn.empty(),0)}static newUnknownDocument(e,t){return new tn(e,3,t,Te.min(),Te.min(),Bn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,t){this.position=e,this.inclusive=t}}function _w(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const a=e[s],u=n.position[s];if(a.field.isKeyField()?r=pe.comparator(pe.fromName(u.referenceValue),t.key):r=ba(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function yw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Lr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t="asc"){this.field=e,this.dir=t}}function XM(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{}class Et extends E1{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new ZM(e,t,r):t==="array-contains"?new nL(e,r):t==="in"?new rL(e,r):t==="not-in"?new iL(e,r):t==="array-contains-any"?new sL(e,r):new Et(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new eL(e,r):new tL(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ba(t,this.value)):t!==null&&fs(this.value)===fs(t)&&this.matchesComparison(ba(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fr extends E1{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new fr(e,t)}matches(e){return w1(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function w1(n){return n.op==="and"}function T1(n){return JM(n)&&w1(n)}function JM(n){for(const e of n.filters)if(e instanceof fr)return!1;return!0}function zm(n){if(n instanceof Et)return n.field.canonicalString()+n.op.toString()+Oa(n.value);if(T1(n))return n.filters.map(e=>zm(e)).join(",");{const e=n.filters.map(t=>zm(t)).join(",");return`${n.op}(${e})`}}function I1(n,e){return n instanceof Et?function(r,s){return s instanceof Et&&r.op===s.op&&r.field.isEqual(s.field)&&Lr(r.value,s.value)}(n,e):n instanceof fr?function(r,s){return s instanceof fr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((a,u,d)=>a&&I1(u,s.filters[d]),!0):!1}(n,e):void ve()}function S1(n){return n instanceof Et?function(t){return`${t.field.canonicalString()} ${t.op} ${Oa(t.value)}`}(n):n instanceof fr?function(t){return t.op.toString()+" {"+t.getFilters().map(S1).join(" ,")+"}"}(n):"Filter"}class ZM extends Et{constructor(e,t,r){super(e,t,r),this.key=pe.fromName(r.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class eL extends Et{constructor(e,t){super(e,"in",t),this.keys=C1("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class tL extends Et{constructor(e,t){super(e,"not-in",t),this.keys=C1("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function C1(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>pe.fromName(r.referenceValue))}class nL extends Et{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return i_(t)&&Tu(t.arrayValue,this.value)}}class rL extends Et{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Tu(this.value.arrayValue,t)}}class iL extends Et{constructor(e,t){super(e,"not-in",t)}matches(e){if(Tu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Tu(this.value.arrayValue,t)}}class sL extends Et{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!i_(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Tu(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oL{constructor(e,t=null,r=[],s=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=d,this.le=null}}function vw(n,e=null,t=[],r=[],s=null,a=null,u=null){return new oL(n,e,t,r,s,a,u)}function s_(n){const e=Se(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>zm(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),bd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Oa(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Oa(r)).join(",")),e.le=t}return e.le}function o_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!XM(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!I1(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!yw(n.startAt,e.startAt)&&yw(n.endAt,e.endAt)}function Bm(n){return pe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,t=null,r=[],s=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function aL(n,e,t,r,s,a,u,d){return new Lu(n,e,t,r,s,a,u,d)}function A1(n){return new Lu(n)}function Ew(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function R1(n){return n.collectionGroup!==null}function au(n){const e=Se(n);if(e.he===null){e.he=[];const t=new Set;for(const a of e.explicitOrderBy)e.he.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new kt($t.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.he.push(new nd(a,r))}),t.has($t.keyField().canonicalString())||e.he.push(new nd($t.keyField(),r))}return e.he}function xr(n){const e=Se(n);return e.Pe||(e.Pe=lL(e,au(n))),e.Pe}function lL(n,e){if(n.limitType==="F")return vw(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new nd(s.field,a)});const t=n.endAt?new td(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new td(n.startAt.position,n.startAt.inclusive):null;return vw(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Wm(n,e){const t=n.filters.concat([e]);return new Lu(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function $m(n,e,t){return new Lu(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function xd(n,e){return o_(xr(n),xr(e))&&n.limitType===e.limitType}function k1(n){return`${s_(xr(n))}|lt:${n.limitType}`}function ha(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>S1(s)).join(", ")}]`),bd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Oa(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Oa(s)).join(",")),`Target(${r})`}(xr(n))}; limitType=${n.limitType})`}function Dd(n,e){return e.isFoundDocument()&&function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):pe.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(n,e)&&function(r,s){for(const a of au(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(u,d,f){const g=_w(u,d,f);return u.inclusive?g<=0:g<0}(r.startAt,au(r),s)||r.endAt&&!function(u,d,f){const g=_w(u,d,f);return u.inclusive?g>=0:g>0}(r.endAt,au(r),s))}(n,e)}function uL(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function P1(n){return(e,t)=>{let r=!1;for(const s of au(n)){const a=cL(s,e,t);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function cL(n,e,t){const r=n.field.isKeyField()?pe.comparator(e.key,t.key):function(a,u,d){const f=u.data.field(a),g=d.data.field(a);return f!==null&&g!==null?ba(f,g):ve()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ho(this.inner,(t,r)=>{for(const[s,a]of r)e(s,a)})}isEmpty(){return c1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL=new ht(pe.comparator);function mi(){return hL}const N1=new ht(pe.comparator);function Yl(...n){let e=N1;for(const t of n)e=e.insert(t.key,t);return e}function b1(n){let e=N1;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ys(){return lu()}function O1(){return lu()}function lu(){return new fo(n=>n.toString(),(n,e)=>n.isEqual(e))}const dL=new ht(pe.comparator),fL=new kt(pe.comparator);function De(...n){let e=fL;for(const t of n)e=e.add(t);return e}const pL=new kt(Re);function mL(){return pL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jh(e)?"-0":e}}function x1(n){return{integerValue:""+n}}function gL(n,e){return $M(e)?x1(e):a_(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this._=void 0}}function _L(n,e,t){return n instanceof rd?function(s,a){const u={fields:{[f1]:{stringValue:d1},[m1]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&r_(a)&&(a=Od(a)),a&&(u.fields[p1]=a),{mapValue:u}}(t,e):n instanceof Iu?M1(n,e):n instanceof Su?L1(n,e):function(s,a){const u=D1(s,a),d=ww(u)+ww(s.Ie);return jm(u)&&jm(s.Ie)?x1(d):a_(s.serializer,d)}(n,e)}function yL(n,e,t){return n instanceof Iu?M1(n,e):n instanceof Su?L1(n,e):t}function D1(n,e){return n instanceof id?function(r){return jm(r)||function(a){return!!a&&"doubleValue"in a}(r)}(e)?e:{integerValue:0}:null}class rd extends Md{}class Iu extends Md{constructor(e){super(),this.elements=e}}function M1(n,e){const t=V1(e);for(const r of n.elements)t.some(s=>Lr(s,r))||t.push(r);return{arrayValue:{values:t}}}class Su extends Md{constructor(e){super(),this.elements=e}}function L1(n,e){let t=V1(e);for(const r of n.elements)t=t.filter(s=>!Lr(s,r));return{arrayValue:{values:t}}}class id extends Md{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function ww(n){return gt(n.integerValue||n.doubleValue)}function V1(n){return i_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function vL(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Iu&&s instanceof Iu||r instanceof Su&&s instanceof Su?Na(r.elements,s.elements,Lr):r instanceof id&&s instanceof id?Lr(r.Ie,s.Ie):r instanceof rd&&s instanceof rd}(n.transform,e.transform)}class EL{constructor(e,t){this.version=e,this.transformResults=t}}class ai{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ai}static exists(e){return new ai(void 0,e)}static updateTime(e){return new ai(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ah(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ld{}function F1(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new j1(n.key,ai.none()):new Vu(n.key,n.data,ai.none());{const t=n.data,r=Bn.empty();let s=new kt($t.comparator);for(let a of e.fields)if(!s.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new po(n.key,r,new cr(s.toArray()),ai.none())}}function wL(n,e,t){n instanceof Vu?function(s,a,u){const d=s.value.clone(),f=Iw(s.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,e,t):n instanceof po?function(s,a,u){if(!Ah(s.precondition,a))return void a.convertToUnknownDocument(u.version);const d=Iw(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(U1(s)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(n,e,t):function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function uu(n,e,t,r){return n instanceof Vu?function(a,u,d,f){if(!Ah(a.precondition,u))return d;const g=a.value.clone(),v=Sw(a.fieldTransforms,f,u);return g.setAll(v),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null}(n,e,t,r):n instanceof po?function(a,u,d,f){if(!Ah(a.precondition,u))return d;const g=Sw(a.fieldTransforms,f,u),v=u.data;return v.setAll(U1(a)),v.setAll(g),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(w=>w.field))}(n,e,t,r):function(a,u,d){return Ah(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(n,e,t)}function TL(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),a=D1(r.transform,s||null);a!=null&&(t===null&&(t=Bn.empty()),t.set(r.field,a))}return t||null}function Tw(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Na(r,s,(a,u)=>vL(a,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Vu extends Ld{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class po extends Ld{constructor(e,t,r,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function U1(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Iw(n,e,t){const r=new Map;qe(n.length===t.length);for(let s=0;s<t.length;s++){const a=n[s],u=a.transform,d=e.data.field(a.field);r.set(a.field,yL(u,d,t[s]))}return r}function Sw(n,e,t){const r=new Map;for(const s of n){const a=s.transform,u=t.data.field(s.field);r.set(s.field,_L(a,u,e))}return r}class j1 extends Ld{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class IL extends Ld{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&wL(a,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=uu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=uu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=O1();return this.mutations.forEach(s=>{const a=e.get(s.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(s.key)?null:d;const f=F1(u,d);f!==null&&r.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(Te.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),De())}isEqual(e){return this.batchId===e.batchId&&Na(this.mutations,e.mutations,(t,r)=>Tw(t,r))&&Na(this.baseMutations,e.baseMutations,(t,r)=>Tw(t,r))}}class l_{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){qe(e.mutations.length===r.length);let s=function(){return dL}();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new l_(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vt,Ue;function RL(n){switch(n){case q.OK:return ve();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return ve()}}function z1(n){if(n===void 0)return pi("GRPC error has no .code"),q.UNKNOWN;switch(n){case vt.OK:return q.OK;case vt.CANCELLED:return q.CANCELLED;case vt.UNKNOWN:return q.UNKNOWN;case vt.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case vt.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case vt.INTERNAL:return q.INTERNAL;case vt.UNAVAILABLE:return q.UNAVAILABLE;case vt.UNAUTHENTICATED:return q.UNAUTHENTICATED;case vt.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case vt.NOT_FOUND:return q.NOT_FOUND;case vt.ALREADY_EXISTS:return q.ALREADY_EXISTS;case vt.PERMISSION_DENIED:return q.PERMISSION_DENIED;case vt.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case vt.ABORTED:return q.ABORTED;case vt.OUT_OF_RANGE:return q.OUT_OF_RANGE;case vt.UNIMPLEMENTED:return q.UNIMPLEMENTED;case vt.DATA_LOSS:return q.DATA_LOSS;default:return ve()}}(Ue=vt||(vt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kL=new ts([4294967295,4294967295],0);function Cw(n){const e=a1().encode(n),t=new e1;return t.update(e),new Uint8Array(t.digest())}function Aw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new ts([t,r],0),new ts([s,a],0)]}class u_{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Xl(`Invalid padding: ${t}`);if(r<0)throw new Xl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Xl(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Xl(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=ts.fromNumber(this.Ee)}Ae(e,t,r){let s=e.add(t.multiply(ts.fromNumber(r)));return s.compare(kL)===1&&(s=new ts([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=Cw(e),[r,s]=Aw(t);for(let a=0;a<this.hashCount;a++){const u=this.Ae(r,s,a);if(!this.Re(u))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new u_(a,s,t);return r.forEach(d=>u.insert(d)),u}insert(e){if(this.Ee===0)return;const t=Cw(e),[r,s]=Aw(t);for(let a=0;a<this.hashCount;a++){const u=this.Ae(r,s,a);this.Ve(u)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Xl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,t,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Fu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Vd(Te.min(),s,new ht(Re),mi(),De())}}class Fu{constructor(e,t,r,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Fu(r,t,De(),De(),De())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,t,r,s){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=s}}class B1{constructor(e,t){this.targetId=e,this.ge=t}}class W1{constructor(e,t,r=Ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Rw{constructor(){this.pe=0,this.ye=kw(),this.we=Ht.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=De(),t=De(),r=De();return this.ye.forEach((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ve()}}),new Fu(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=kw()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,qe(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class PL{constructor(e){this.ke=e,this.qe=new Map,this.Qe=mi(),this.$e=hh(),this.Ue=hh(),this.Ke=new ht(Re)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:ve()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,s)=>{this.Je(s)&&t(s)})}Ze(e){const t=e.targetId,r=e.ge.count,s=this.Xe(t);if(s){const a=s.target;if(Bm(a))if(r===0){const u=new pe(a.path);this.ze(t,u,tn.newNoDocument(u,Te.min()))}else qe(r===1);else{const u=this.et(t);if(u!==r){const d=this.tt(e),f=d?this.nt(d,e,u):1;if(f!==0){this.Ye(t);const g=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,g)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=t;let u,d;try{u=ds(r).toUint8Array()}catch(f){if(f instanceof h1)return Pa("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new u_(u,s,a)}catch(f){return Pa(f instanceof Xl?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.Ee===0?null:d}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let s=0;return r.forEach(a=>{const u=this.ke.it(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.ze(t,a,null),s++)}),s}ot(e){const t=new Map;this.qe.forEach((a,u)=>{const d=this.Xe(u);if(d){if(a.current&&Bm(d.target)){const f=new pe(d.target.path);this._t(f).has(u)||this.ut(u,f)||this.ze(u,f,tn.newNoDocument(f,e))}a.ve&&(t.set(u,a.Fe()),a.Me())}});let r=De();this.Ue.forEach((a,u)=>{let d=!0;u.forEachWhile(f=>{const g=this.Xe(f);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(r=r.add(a))}),this.Qe.forEach((a,u)=>u.setReadTime(e));const s=new Vd(e,t,this.Ke,this.Qe,r);return this.Qe=mi(),this.$e=hh(),this.Ue=hh(),this.Ke=new ht(Re),s}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,t)?s.xe(t,1):s.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new Rw,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new kt(Re),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new kt(Re),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Rw),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function hh(){return new ht(pe.comparator)}function kw(){return new ht(pe.comparator)}const NL={asc:"ASCENDING",desc:"DESCENDING"},bL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},OL={and:"AND",or:"OR"};class xL{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Hm(n,e){return n.useProto3Json||bd(e)?e:{value:e}}function sd(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $1(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function DL(n,e){return sd(n,e.toTimestamp())}function Dr(n){return qe(!!n),Te.fromTimestamp(function(t){const r=hs(t);return new Rt(r.seconds,r.nanos)}(n))}function c_(n,e){return qm(n,e).canonicalString()}function qm(n,e){const t=function(s){return new it(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function H1(n){const e=it.fromString(n);return qe(Y1(e)),e}function Gm(n,e){return c_(n.databaseId,e.path)}function Hp(n,e){const t=H1(e);if(t.get(1)!==n.databaseId.projectId)throw new ue(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ue(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new pe(G1(t))}function q1(n,e){return c_(n.databaseId,e)}function ML(n){const e=H1(n);return e.length===4?it.emptyPath():G1(e)}function Km(n){return new it(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function G1(n){return qe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Pw(n,e,t){return{name:Gm(n,e),fields:t.value.mapValue.fields}}function LL(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:ve()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=function(g,v){return g.useProto3Json?(qe(v===void 0||typeof v=="string"),Ht.fromBase64String(v||"")):(qe(v===void 0||v instanceof Buffer||v instanceof Uint8Array),Ht.fromUint8Array(v||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&function(g){const v=g.code===void 0?q.UNKNOWN:z1(g.code);return new ue(v,g.message||"")}(u);t=new W1(r,s,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Hp(n,r.document.name),a=Dr(r.document.updateTime),u=r.document.createTime?Dr(r.document.createTime):Te.min(),d=new Bn({mapValue:{fields:r.document.fields}}),f=tn.newFoundDocument(s,a,u,d),g=r.targetIds||[],v=r.removedTargetIds||[];t=new Rh(g,v,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Hp(n,r.document),a=r.readTime?Dr(r.readTime):Te.min(),u=tn.newNoDocument(s,a),d=r.removedTargetIds||[];t=new Rh([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Hp(n,r.document),a=r.removedTargetIds||[];t=new Rh([],a,s,null)}else{if(!("filter"in e))return ve();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new AL(s,a),d=r.targetId;t=new B1(d,u)}}return t}function VL(n,e){let t;if(e instanceof Vu)t={update:Pw(n,e.key,e.value)};else if(e instanceof j1)t={delete:Gm(n,e.key)};else if(e instanceof po)t={update:Pw(n,e.key,e.data),updateMask:qL(e.fieldMask)};else{if(!(e instanceof IL))return ve();t={verify:Gm(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(a,u){const d=u.transform;if(d instanceof rd)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Iu)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Su)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof id)return{fieldPath:u.field.canonicalString(),increment:d.Ie};throw ve()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:DL(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:ve()}(n,e.precondition)),t}function FL(n,e){return n&&n.length>0?(qe(e!==void 0),n.map(t=>function(s,a){let u=s.updateTime?Dr(s.updateTime):Dr(a);return u.isEqual(Te.min())&&(u=Dr(a)),new EL(u,s.transformResults||[])}(t,e))):[]}function UL(n,e){return{documents:[q1(n,e.path)]}}function jL(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=q1(n,s);const a=function(g){if(g.length!==0)return Q1(fr.create(g,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const u=function(g){if(g.length!==0)return g.map(v=>function(I){return{field:da(I.field),direction:WL(I.dir)}}(v))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Hm(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ht:t,parent:s}}function zL(n){let e=ML(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){qe(r===1);const v=t.from[0];v.allDescendants?s=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=function(w){const I=K1(w);return I instanceof fr&&T1(I)?I.getFilters():[I]}(t.where));let u=[];t.orderBy&&(u=function(w){return w.map(I=>function(U){return new nd(fa(U.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(U.direction))}(I))}(t.orderBy));let d=null;t.limit&&(d=function(w){let I;return I=typeof w=="object"?w.value:w,bd(I)?null:I}(t.limit));let f=null;t.startAt&&(f=function(w){const I=!!w.before,O=w.values||[];return new td(O,I)}(t.startAt));let g=null;return t.endAt&&(g=function(w){const I=!w.before,O=w.values||[];return new td(O,I)}(t.endAt)),aL(e,s,u,a,d,"F",f,g)}function BL(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function K1(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=fa(t.unaryFilter.field);return Et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=fa(t.unaryFilter.field);return Et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=fa(t.unaryFilter.field);return Et.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=fa(t.unaryFilter.field);return Et.create(u,"!=",{nullValue:"NULL_VALUE"});default:return ve()}}(n):n.fieldFilter!==void 0?function(t){return Et.create(fa(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ve()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return fr.create(t.compositeFilter.filters.map(r=>K1(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ve()}}(t.compositeFilter.op))}(n):ve()}function WL(n){return NL[n]}function $L(n){return bL[n]}function HL(n){return OL[n]}function da(n){return{fieldPath:n.canonicalString()}}function fa(n){return $t.fromServerFormat(n.fieldPath)}function Q1(n){return n instanceof Et?function(t){if(t.op==="=="){if(gw(t.value))return{unaryFilter:{field:da(t.field),op:"IS_NAN"}};if(mw(t.value))return{unaryFilter:{field:da(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(gw(t.value))return{unaryFilter:{field:da(t.field),op:"IS_NOT_NAN"}};if(mw(t.value))return{unaryFilter:{field:da(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:da(t.field),op:$L(t.op),value:t.value}}}(n):n instanceof fr?function(t){const r=t.getFilters().map(s=>Q1(s));return r.length===1?r[0]:{compositeFilter:{op:HL(t.op),filters:r}}}(n):ve()}function qL(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Y1(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t,r,s,a=Te.min(),u=Te.min(),d=Ht.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new Yi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Yi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(e){this.Tt=e}}function KL(n){const e=zL({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?$m(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(){this.Tn=new YL}addToCollectionParentIndex(e,t){return this.Tn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(cs.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(cs.min())}updateCollectionGroup(e,t,r){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class YL{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new kt(it.comparator),a=!s.has(r);return this.index[t]=s.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new kt(it.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},X1=41943040;class yn{static withCacheSize(e){return new yn(e,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn.DEFAULT_COLLECTION_PERCENTILE=10,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yn.DEFAULT=new yn(X1,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yn.DISABLED=new yn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new xa(0)}static Kn(){return new xa(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw="LruGarbageCollector",XL=1048576;function Ow([n,e],[t,r]){const s=Re(n,t);return s===0?Re(e,r):s}class JL{constructor(e){this.Hn=e,this.buffer=new kt(Ow),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Ow(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ZL{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ie(bw,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ha(t)?ie(bw,"Ignoring IndexedDB error during garbage collection: ",t):await $a(t)}await this.er(3e5)})}}class eV{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return $.resolve(Nd.ae);const r=new JL(t);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Nw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Nw):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,s,a,u,d,f,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,u=Date.now(),this.nthSequenceNumber(e,s))).next(w=>(r=w,d=Date.now(),this.removeTargets(e,r,t))).next(w=>(a=w,f=Date.now(),this.removeOrphanedDocuments(e,r))).next(w=>(g=Date.now(),ca()<=Oe.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-v}ms
	Determined least recently used ${s} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${w} documents in `+(g-f)+`ms
Total Duration: ${g-v}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:w})))}}function tV(n,e){return new eV(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(){this.changes=new fo(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?$.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&uu(r.mutation,s,cr.empty(),Rt.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,De()).next(()=>r))}getLocalViewOfDocuments(e,t,r=De()){const s=Ys();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(a=>{let u=Yl();return a.forEach((d,f)=>{u=u.insert(d,f.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const r=Ys();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,De()))}populateOverlays(e,t,r){const s=[];return r.forEach(a=>{t.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(e,s).next(a=>{a.forEach((u,d)=>{t.set(u,d)})})}computeViews(e,t,r,s){let a=mi();const u=lu(),d=function(){return lu()}();return t.forEach((f,g)=>{const v=r.get(g.key);s.has(g.key)&&(v===void 0||v.mutation instanceof po)?a=a.insert(g.key,g):v!==void 0?(u.set(g.key,v.mutation.getFieldMask()),uu(v.mutation,g,v.mutation.getFieldMask(),Rt.now())):u.set(g.key,cr.empty())}),this.recalculateAndSaveOverlays(e,a).next(f=>(f.forEach((g,v)=>u.set(g,v)),t.forEach((g,v)=>{var w;return d.set(g,new rV(v,(w=u.get(g))!==null&&w!==void 0?w:null))}),d))}recalculateAndSaveOverlays(e,t){const r=lu();let s=new ht((u,d)=>u-d),a=De();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const d of u)d.keys().forEach(f=>{const g=t.get(f);if(g===null)return;let v=r.get(f)||cr.empty();v=d.applyToLocalView(g,v),r.set(f,v);const w=(s.get(d.batchId)||De()).add(f);s=s.insert(d.batchId,w)})}).next(()=>{const u=[],d=s.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),g=f.key,v=f.value,w=O1();v.forEach(I=>{if(!a.has(I)){const O=F1(t.get(I),r.get(I));O!==null&&w.set(I,O),a=a.add(I)}}),u.push(this.documentOverlayCache.saveOverlays(e,g,w))}return $.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(u){return pe.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):R1(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-a.size):$.resolve(Ys());let d=vu,f=a;return u.next(g=>$.forEach(g,(v,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),a.get(v)?$.resolve():this.remoteDocumentCache.getEntry(e,v).next(I=>{f=f.insert(v,I)}))).next(()=>this.populateOverlays(e,g,a)).next(()=>this.computeViews(e,f,g,De())).next(v=>({batchId:d,changes:b1(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next(r=>{let s=Yl();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const a=t.collectionGroup;let u=Yl();return this.indexManager.getCollectionParents(e,a).next(d=>$.forEach(d,f=>{const g=function(w,I){return new Lu(I,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,g,r,s).next(v=>{v.forEach((w,I)=>{u=u.insert(w,I)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,s))).next(u=>{a.forEach((f,g)=>{const v=g.getKey();u.get(v)===null&&(u=u.insert(v,tn.newInvalidDocument(v)))});let d=Yl();return u.forEach((f,g)=>{const v=a.get(f);v!==void 0&&uu(v.mutation,g,cr.empty(),Rt.now()),Dd(t,g)&&(d=d.insert(f,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return $.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Dr(s.createTime)}}(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(s){return{name:s.name,query:KL(s.bundledQuery),readTime:Dr(s.readTime)}}(t)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(){this.overlays=new ht(pe.comparator),this.Rr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ys();return $.forEach(t,s=>this.getOverlay(e,s).next(a=>{a!==null&&r.set(s,a)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,a)=>{this.Et(e,t,a)}),$.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.Rr.delete(r)),$.resolve()}getOverlaysForCollection(e,t,r){const s=Ys(),a=t.length+1,u=new pe(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,g=f.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===a&&f.largestBatchId>r&&s.set(f.getKey(),f)}return $.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let a=new ht((g,v)=>g-v);const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>r){let v=a.get(g.largestBatchId);v===null&&(v=Ys(),a=a.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const d=Ys(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((g,v)=>d.set(g,v)),!(d.size()>=s)););return $.resolve(d)}Et(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new CL(t,r));let a=this.Rr.get(t);a===void 0&&(a=De(),this.Rr.set(t,a)),this.Rr.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(){this.sessionToken=Ht.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(){this.Vr=new kt(Lt.mr),this.gr=new kt(Lt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new Lt(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new Lt(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new pe(new it([])),r=new Lt(t,e),s=new Lt(t,e+1),a=[];return this.gr.forEachInRange([r,s],u=>{this.wr(u),a.push(u.key)}),a}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new pe(new it([])),r=new Lt(t,e),s=new Lt(t,e+1);let a=De();return this.gr.forEachInRange([r,s],u=>{a=a.add(u.key)}),a}containsKey(e){const t=new Lt(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Lt{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return pe.comparator(e.key,t.key)||Re(e.Cr,t.Cr)}static pr(e,t){return Re(e.Cr,t.Cr)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new kt(Lt.mr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const a=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new SL(a,t,r,s);this.mutationQueue.push(u);for(const d of s)this.Mr=this.Mr.add(new Lt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return $.resolve(u)}lookupMutationBatch(e,t){return $.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Nr(r),a=s<0?0:s;return $.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?n_:this.Fr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Lt(t,0),s=new Lt(t,Number.POSITIVE_INFINITY),a=[];return this.Mr.forEachInRange([r,s],u=>{const d=this.Or(u.Cr);a.push(d)}),$.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new kt(Re);return t.forEach(s=>{const a=new Lt(s,0),u=new Lt(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([a,u],d=>{r=r.add(d.Cr)})}),$.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let a=r;pe.isDocumentKey(a)||(a=a.child(""));const u=new Lt(new pe(a),0);let d=new kt(Re);return this.Mr.forEachWhile(f=>{const g=f.key.path;return!!r.isPrefixOf(g)&&(g.length===s&&(d=d.add(f.Cr)),!0)},u),$.resolve(this.Br(d))}Br(e){const t=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){qe(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return $.forEach(t.mutations,s=>{const a=new Lt(s.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new Lt(t,0),s=this.Mr.firstAfterOrEqual(r);return $.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(e){this.kr=e,this.docs=function(){return new ht(pe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),a=s?s.size:0,u=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return $.resolve(r?r.document.mutableCopy():tn.newInvalidDocument(t))}getEntries(e,t){let r=mi();return t.forEach(s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():tn.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let a=mi();const u=t.path,d=new pe(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:g,value:{document:v}}=f.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||jM(UM(v),r)<=0||(s.has(v.key)||Dd(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return $.resolve(a)}getAllFromCollectionGroup(e,t,r,s){ve()}qr(e,t){return $.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new cV(this)}getSize(e){return $.resolve(this.size)}}class cV extends nV{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),$.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hV{constructor(e){this.persistence=e,this.Qr=new fo(t=>s_(t),o_),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.$r=0,this.Ur=new h_,this.targetCount=0,this.Kr=xa.Un()}forEachTarget(e,t){return this.Qr.forEach((r,s)=>t(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),$.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new xa(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.zn(t),$.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,r){let s=0;const a=[];return this.Qr.forEach((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.Qr.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)}),$.waitFor(a).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return $.resolve(r)}addMatchingKeys(e,t,r){return this.Ur.yr(t,r),$.resolve()}removeMatchingKeys(e,t,r){this.Ur.Sr(t,r);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach(u=>{a.push(s.markPotentiallyOrphaned(e,u))}),$.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),$.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ur.vr(t);return $.resolve(r)}containsKey(e,t){return $.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Nd(0),this.zr=!1,this.zr=!0,this.jr=new aV,this.referenceDelegate=e(this),this.Hr=new hV(this),this.indexManager=new QL,this.remoteDocumentCache=function(s){return new uV(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new GL(t),this.Yr=new sV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new oV,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new lV(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){ie("MemoryPersistence","Starting transaction:",e);const s=new dV(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(a=>this.referenceDelegate.Xr(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}ei(e,t){return $.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class dV extends BM{constructor(e){super(),this.currentSequenceNumber=e}}class d_{constructor(e){this.persistence=e,this.ti=new h_,this.ni=null}static ri(e){return new d_(e)}get ii(){if(this.ni)return this.ni;throw ve()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),$.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),$.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(a=>this.ii.add(a.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.ii,r=>{const s=pe.fromPath(r);return this.si(e,s).next(a=>{a||t.removeEntry(s,Te.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return $.or([()=>$.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class od{constructor(e,t){this.persistence=e,this.oi=new fo(r=>HM(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=tV(this,t)}static ri(e,t){return new od(e,t)}Zr(){}Xr(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return $.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(a=>a?$.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.qr(e,u=>this.ar(e,u,t).next(d=>{d||(r++,a.removeEntry(u,Te.min()))})).next(()=>a.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),$.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Sh(e.data.value)),t}ar(e,t,r){return $.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.oi.get(t);return $.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=s}static Yi(e,t){let r=De(),s=De();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new f_(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pV{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return fR()?8:WM(rn())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,s){const a={result:null};return this.rs(e,t).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.ss(e,t,s,r).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new fV;return this._s(e,t,u).next(d=>{if(a.result=d,this.Xi)return this.us(e,t,u,d.size)})}).next(()=>a.result)}us(e,t,r,s){return r.documentReadCount<this.es?(ca()<=Oe.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",ha(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),$.resolve()):(ca()<=Oe.DEBUG&&ie("QueryEngine","Query:",ha(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(ca()<=Oe.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",ha(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xr(t))):$.resolve())}rs(e,t){if(Ew(t))return $.resolve(null);let r=xr(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=$m(t,null,"F"),r=xr(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(a=>{const u=De(...a);return this.ns.getDocuments(e,u).next(d=>this.indexManager.getMinOffset(e,r).next(f=>{const g=this.cs(t,d);return this.ls(t,g,u,f.readTime)?this.rs(e,$m(t,null,"F")):this.hs(e,g,t,f)}))})))}ss(e,t,r,s){return Ew(t)||s.isEqual(Te.min())?$.resolve(null):this.ns.getDocuments(e,r).next(a=>{const u=this.cs(t,a);return this.ls(t,u,r,s)?$.resolve(null):(ca()<=Oe.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ha(t)),this.hs(e,u,t,FM(s,vu)).next(d=>d))})}cs(e,t){let r=new kt(P1(e));return t.forEach((s,a)=>{Dd(e,a)&&(r=r.add(a))}),r}ls(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}_s(e,t,r){return ca()<=Oe.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",ha(t)),this.ns.getDocumentsMatchingQuery(e,t,cs.min(),r)}hs(e,t,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(a=>(t.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_="LocalStore",mV=3e8;class gV{constructor(e,t,r,s){this.persistence=e,this.Ps=t,this.serializer=s,this.Ts=new ht(Re),this.Is=new fo(a=>s_(a),o_),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iV(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function _V(n,e,t,r){return new gV(n,e,t,r)}async function Z1(n,e){const t=Se(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(a=>(s=a,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(a=>{const u=[],d=[];let f=De();for(const g of s){u.push(g.batchId);for(const v of g.mutations)f=f.add(v.key)}for(const g of a){d.push(g.batchId);for(const v of g.mutations)f=f.add(v.key)}return t.localDocuments.getDocuments(r,f).next(g=>({Rs:g,removedBatchIds:u,addedBatchIds:d}))})})}function yV(n,e){const t=Se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),a=t.ds.newChangeBuffer({trackRemovals:!0});return function(d,f,g,v){const w=g.batch,I=w.keys();let O=$.resolve();return I.forEach(U=>{O=O.next(()=>v.getEntry(f,U)).next(W=>{const B=g.docVersions.get(U);qe(B!==null),W.version.compareTo(B)<0&&(w.applyToRemoteDocument(W,g),W.isValidDocument()&&(W.setReadTime(g.commitVersion),v.addEntry(W)))})}),O.next(()=>d.mutationQueue.removeMutationBatch(f,w))}(t,r,e,a).next(()=>a.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(d){let f=De();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(f=f.add(d.batch.mutations[g].key));return f}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function eC(n){const e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function vV(n,e){const t=Se(n),r=e.snapshotVersion;let s=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const u=t.ds.newChangeBuffer({trackRemovals:!0});s=t.Ts;const d=[];e.targetChanges.forEach((v,w)=>{const I=s.get(w);if(!I)return;d.push(t.Hr.removeMatchingKeys(a,v.removedDocuments,w).next(()=>t.Hr.addMatchingKeys(a,v.addedDocuments,w)));let O=I.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(w)!==null?O=O.withResumeToken(Ht.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):v.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(v.resumeToken,r)),s=s.insert(w,O),function(W,B,se){return W.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-W.snapshotVersion.toMicroseconds()>=mV?!0:se.addedDocuments.size+se.modifiedDocuments.size+se.removedDocuments.size>0}(I,O,v)&&d.push(t.Hr.updateTargetData(a,O))});let f=mi(),g=De();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))}),d.push(EV(a,u,e.documentUpdates).next(v=>{f=v.Vs,g=v.fs})),!r.isEqual(Te.min())){const v=t.Hr.getLastRemoteSnapshotVersion(a).next(w=>t.Hr.setTargetsMetadata(a,a.currentSequenceNumber,r));d.push(v)}return $.waitFor(d).next(()=>u.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,f,g)).next(()=>f)}).then(a=>(t.Ts=s,a))}function EV(n,e,t){let r=De(),s=De();return t.forEach(a=>r=r.add(a)),e.getEntries(n,r).next(a=>{let u=mi();return t.forEach((d,f)=>{const g=a.get(d);f.isFoundDocument()!==g.isFoundDocument()&&(s=s.add(d)),f.isNoDocument()&&f.version.isEqual(Te.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!g.isValidDocument()||f.version.compareTo(g.version)>0||f.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):ie(p_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",f.version)}),{Vs:u,fs:s}})}function wV(n,e){const t=Se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=n_),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function TV(n,e){const t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Hr.getTargetData(r,e).next(a=>a?(s=a,$.resolve(s)):t.Hr.allocateTargetId(r).next(u=>(s=new Yi(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function Qm(n,e,t){const r=Se(n),s=r.Ts.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,u=>r.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!Ha(u))throw u;ie(p_,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function xw(n,e,t){const r=Se(n);let s=Te.min(),a=De();return r.persistence.runTransaction("Execute query","readwrite",u=>function(f,g,v){const w=Se(f),I=w.Is.get(v);return I!==void 0?$.resolve(w.Ts.get(I)):w.Hr.getTargetData(g,v)}(r,u,xr(e)).next(d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(u,d.targetId).next(f=>{a=f})}).next(()=>r.Ps.getDocumentsMatchingQuery(u,e,t?s:Te.min(),t?a:De())).next(d=>(IV(r,uL(e),d),{documents:d,gs:a})))}function IV(n,e,t){let r=n.Es.get(e)||Te.min();t.forEach((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),n.Es.set(e,r)}class Dw{constructor(){this.activeTargetIds=mL()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class SV{constructor(){this.ho=new Dw,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Dw,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CV{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw="ConnectivityMonitor";class Lw{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ie(Mw,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ie(Mw,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dh=null;function Ym(){return dh===null?dh=function(){return 268435456+Math.round(2147483648*Math.random())}():dh++,"0x"+dh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="RestConnection",AV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class RV{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Zh?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(e,t,r,s,a){const u=Ym(),d=this.bo(e,t.toUriEncodedString());ie(qp,`Sending RPC '${e}' ${u}:`,d,r);const f={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(f,s,a),this.vo(e,d,f,r).then(g=>(ie(qp,`Received RPC '${e}' ${u}: `,g),g),g=>{throw Pa(qp,`RPC '${e}' ${u} failed with error: `,g,"url: ",d,"request:",r),g})}Co(e,t,r,s,a,u){return this.So(e,t,r,s,a)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wa}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,a)=>e[a]=s),r&&r.headers.forEach((s,a)=>e[a]=s)}bo(e,t){const r=AV[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kV{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="WebChannelConnection";class PV extends RV{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,s){const a=Ym();return new Promise((u,d)=>{const f=new t1;f.setWithCredentials(!0),f.listenOnce(n1.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Ih.NO_ERROR:const v=f.getResponseJson();ie(Jt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(v)),u(v);break;case Ih.TIMEOUT:ie(Jt,`RPC '${e}' ${a} timed out`),d(new ue(q.DEADLINE_EXCEEDED,"Request time out"));break;case Ih.HTTP_ERROR:const w=f.getStatus();if(ie(Jt,`RPC '${e}' ${a} failed with status:`,w,"response text:",f.getResponseText()),w>0){let I=f.getResponseJson();Array.isArray(I)&&(I=I[0]);const O=I==null?void 0:I.error;if(O&&O.status&&O.message){const U=function(B){const se=B.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(se)>=0?se:q.UNKNOWN}(O.status);d(new ue(U,O.message))}else d(new ue(q.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new ue(q.UNAVAILABLE,"Connection failed."));break;default:ve()}}finally{ie(Jt,`RPC '${e}' ${a} completed.`)}});const g=JSON.stringify(s);ie(Jt,`RPC '${e}' ${a} sending request:`,s),f.send(t,"POST",g,r,15)})}Wo(e,t,r){const s=Ym(),a=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=s1(),d=i1(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Do(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const v=a.join("");ie(Jt,`Creating RPC '${e}' stream ${s}: ${v}`,f);const w=u.createWebChannel(v,f);let I=!1,O=!1;const U=new kV({Fo:B=>{O?ie(Jt,`Not sending because RPC '${e}' stream ${s} is closed:`,B):(I||(ie(Jt,`Opening RPC '${e}' stream ${s} transport.`),w.open(),I=!0),ie(Jt,`RPC '${e}' stream ${s} sending:`,B),w.send(B))},Mo:()=>w.close()}),W=(B,se,ne)=>{B.listen(se,oe=>{try{ne(oe)}catch(me){setTimeout(()=>{throw me},0)}})};return W(w,Ql.EventType.OPEN,()=>{O||(ie(Jt,`RPC '${e}' stream ${s} transport opened.`),U.Qo())}),W(w,Ql.EventType.CLOSE,()=>{O||(O=!0,ie(Jt,`RPC '${e}' stream ${s} transport closed`),U.Uo())}),W(w,Ql.EventType.ERROR,B=>{O||(O=!0,Pa(Jt,`RPC '${e}' stream ${s} transport errored:`,B),U.Uo(new ue(q.UNAVAILABLE,"The operation could not be completed")))}),W(w,Ql.EventType.MESSAGE,B=>{var se;if(!O){const ne=B.data[0];qe(!!ne);const oe=ne,me=(oe==null?void 0:oe.error)||((se=oe[0])===null||se===void 0?void 0:se.error);if(me){ie(Jt,`RPC '${e}' stream ${s} received error:`,me);const ke=me.status;let Ce=function(A){const P=vt[A];if(P!==void 0)return z1(P)}(ke),N=me.message;Ce===void 0&&(Ce=q.INTERNAL,N="Unknown error status: "+ke+" with message "+me.message),O=!0,U.Uo(new ue(Ce,N)),w.close()}else ie(Jt,`RPC '${e}' stream ${s} received:`,ne),U.Ko(ne)}}),W(d,r1.STAT_EVENT,B=>{B.stat===Vm.PROXY?ie(Jt,`RPC '${e}' stream ${s} detected buffering proxy`):B.stat===Vm.NOPROXY&&ie(Jt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{U.$o()},0),U}}function Gp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(n){return new xL(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e,t,r=1e3,s=1.5,a=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=s,this.jo=a,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,t-r);s>0&&ie("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="PersistentStream";class nC{constructor(e,t,r,s,a,u,d,f){this.Ti=e,this.n_=r,this.r_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new tC(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?(pi(t.toString()),pi("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===t&&this.V_(r,s)},r=>{e(()=>{const s=new ue(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ie(Vw,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(ie(Vw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NV extends nC{constructor(e,t,r,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=LL(this.serializer,e),r=function(a){if(!("targetChange"in a))return Te.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Te.min():u.readTime?Dr(u.readTime):Te.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=Km(this.serializer),t.addTarget=function(a,u){let d;const f=u.target;if(d=Bm(f)?{documents:UL(a,f)}:{query:jL(a,f).ht},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=$1(a,u.resumeToken);const g=Hm(a,u.expectedCount);g!==null&&(d.expectedCount=g)}else if(u.snapshotVersion.compareTo(Te.min())>0){d.readTime=sd(a,u.snapshotVersion.toTimestamp());const g=Hm(a,u.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const r=BL(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=Km(this.serializer),t.removeTarget=e,this.I_(t)}}class bV extends nC{constructor(e,t,r,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return qe(!!e.streamToken),this.lastStreamToken=e.streamToken,qe(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){qe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=FL(e.writeResults,e.commitTime),r=Dr(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=Km(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>VL(this.serializer,r))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OV{}class xV extends OV{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new ue(q.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.So(e,qm(t,r),s,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ue(q.UNKNOWN,a.toString())})}Co(e,t,r,s,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.Co(e,qm(t,r),s,u,d,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ue(q.UNKNOWN,u.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class DV{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(pi(t),this.N_=!1):ie("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="RemoteStore";class MV{constructor(e,t,r,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=a,this.z_.To(u=>{r.enqueueAndForget(async()=>{mo(this)&&(ie(ao,"Restarting streams for network reachability change."),await async function(f){const g=Se(f);g.W_.add(4),await Uu(g),g.j_.set("Unknown"),g.W_.delete(4),await Ud(g)}(this))})}),this.j_=new DV(r,s)}}async function Ud(n){if(mo(n))for(const e of n.G_)await e(!0)}async function Uu(n){for(const e of n.G_)await e(!1)}function rC(n,e){const t=Se(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),y_(t)?__(t):qa(t).c_()&&g_(t,e))}function m_(n,e){const t=Se(n),r=qa(t);t.K_.delete(e),r.c_()&&iC(t,e),t.K_.size===0&&(r.c_()?r.P_():mo(t)&&t.j_.set("Unknown"))}function g_(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}qa(n).y_(e)}function iC(n,e){n.H_.Ne(e),qa(n).w_(e)}function __(n){n.H_=new PL({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),qa(n).start(),n.j_.B_()}function y_(n){return mo(n)&&!qa(n).u_()&&n.K_.size>0}function mo(n){return Se(n).W_.size===0}function sC(n){n.H_=void 0}async function LV(n){n.j_.set("Online")}async function VV(n){n.K_.forEach((e,t)=>{g_(n,e)})}async function FV(n,e){sC(n),y_(n)?(n.j_.q_(e),__(n)):n.j_.set("Unknown")}async function UV(n,e,t){if(n.j_.set("Online"),e instanceof W1&&e.state===2&&e.cause)try{await async function(s,a){const u=a.cause;for(const d of a.targetIds)s.K_.has(d)&&(await s.remoteSyncer.rejectListen(d,u),s.K_.delete(d),s.H_.removeTarget(d))}(n,e)}catch(r){ie(ao,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ad(n,r)}else if(e instanceof Rh?n.H_.We(e):e instanceof B1?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Te.min()))try{const r=await eC(n.localStore);t.compareTo(r)>=0&&await function(a,u){const d=a.H_.ot(u);return d.targetChanges.forEach((f,g)=>{if(f.resumeToken.approximateByteSize()>0){const v=a.K_.get(g);v&&a.K_.set(g,v.withResumeToken(f.resumeToken,u))}}),d.targetMismatches.forEach((f,g)=>{const v=a.K_.get(f);if(!v)return;a.K_.set(f,v.withResumeToken(Ht.EMPTY_BYTE_STRING,v.snapshotVersion)),iC(a,f);const w=new Yi(v.target,f,g,v.sequenceNumber);g_(a,w)}),a.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(r){ie(ao,"Failed to raise snapshot:",r),await ad(n,r)}}async function ad(n,e,t){if(!Ha(e))throw e;n.W_.add(1),await Uu(n),n.j_.set("Offline"),t||(t=()=>eC(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ie(ao,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await Ud(n)})}function oC(n,e){return e().catch(t=>ad(n,t,e))}async function jd(n){const e=Se(n),t=ps(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:n_;for(;jV(e);)try{const s=await wV(e.localStore,r);if(s===null){e.U_.length===0&&t.P_();break}r=s.batchId,zV(e,s)}catch(s){await ad(e,s)}aC(e)&&lC(e)}function jV(n){return mo(n)&&n.U_.length<10}function zV(n,e){n.U_.push(e);const t=ps(n);t.c_()&&t.S_&&t.b_(e.mutations)}function aC(n){return mo(n)&&!ps(n).u_()&&n.U_.length>0}function lC(n){ps(n).start()}async function BV(n){ps(n).C_()}async function WV(n){const e=ps(n);for(const t of n.U_)e.b_(t.mutations)}async function $V(n,e,t){const r=n.U_.shift(),s=l_.from(r,e,t);await oC(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await jd(n)}async function HV(n,e){e&&ps(n).S_&&await async function(r,s){if(function(u){return RL(u)&&u!==q.ABORTED}(s.code)){const a=r.U_.shift();ps(r).h_(),await oC(r,()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s)),await jd(r)}}(n,e),aC(n)&&lC(n)}async function Fw(n,e){const t=Se(n);t.asyncQueue.verifyOperationInProgress(),ie(ao,"RemoteStore received new credentials");const r=mo(t);t.W_.add(3),await Uu(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Ud(t)}async function qV(n,e){const t=Se(n);e?(t.W_.delete(2),await Ud(t)):e||(t.W_.add(2),await Uu(t),t.j_.set("Unknown"))}function qa(n){return n.J_||(n.J_=function(t,r,s){const a=Se(t);return a.M_(),new NV(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(n.datastore,n.asyncQueue,{xo:LV.bind(null,n),No:VV.bind(null,n),Lo:FV.bind(null,n),p_:UV.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),y_(n)?__(n):n.j_.set("Unknown")):(await n.J_.stop(),sC(n))})),n.J_}function ps(n){return n.Y_||(n.Y_=function(t,r,s){const a=Se(t);return a.M_(),new bV(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:BV.bind(null,n),Lo:HV.bind(null,n),D_:WV.bind(null,n),v_:$V.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await jd(n)):(await n.Y_.stop(),n.U_.length>0&&(ie(ao,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,t,r,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new ns,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,a){const u=Date.now()+r,d=new v_(e,t,u,s,a);return d.start(r),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function E_(n,e){if(pi("AsyncQueue",`${e}: ${n}`),Ha(n))return new ue(q.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{static emptySet(e){return new Ia(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||pe.comparator(t.key,r.key):(t,r)=>pe.comparator(t.key,r.key),this.keyedMap=Yl(),this.sortedSet=new ht(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ia)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ia;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(){this.Z_=new ht(pe.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):ve():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Da{constructor(e,t,r,s,a,u,d,f,g){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=g}static fromInitialDocuments(e,t,r,s,a){const u=[];return t.forEach(d=>{u.push({type:0,doc:d})}),new Da(e,t,Ia.emptySet(t),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GV{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class KV{constructor(){this.queries=jw(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const s=Se(t),a=s.queries;s.queries=jw(),a.forEach((u,d)=>{for(const f of d.ta)f.onError(r)})})(this,new ue(q.ABORTED,"Firestore shutting down"))}}function jw(){return new fo(n=>k1(n),xd)}async function QV(n,e){const t=Se(n);let r=3;const s=e.query;let a=t.queries.get(s);a?!a.na()&&e.ra()&&(r=2):(a=new GV,r=e.ra()?0:1);try{switch(r){case 0:a.ea=await t.onListen(s,!0);break;case 1:a.ea=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const d=E_(u,`Initialization of query '${ha(e.query)}' failed`);return void e.onError(d)}t.queries.set(s,a),a.ta.push(e),e.sa(t.onlineState),a.ea&&e.oa(a.ea)&&w_(t)}async function YV(n,e){const t=Se(n),r=e.query;let s=3;const a=t.queries.get(r);if(a){const u=a.ta.indexOf(e);u>=0&&(a.ta.splice(u,1),a.ta.length===0?s=e.ra()?0:1:!a.na()&&e.ra()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function XV(n,e){const t=Se(n);let r=!1;for(const s of e){const a=s.query,u=t.queries.get(a);if(u){for(const d of u.ta)d.oa(s)&&(r=!0);u.ea=s}}r&&w_(t)}function JV(n,e,t){const r=Se(n),s=r.queries.get(e);if(s)for(const a of s.ta)a.onError(t);r.queries.delete(e)}function w_(n){n.ia.forEach(e=>{e.next()})}var Xm,zw;(zw=Xm||(Xm={}))._a="default",zw.Cache="cache";class ZV{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Da(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Da.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Xm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e){this.key=e}}class cC{constructor(e){this.key=e}}class eF{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=De(),this.mutatedKeys=De(),this.ya=P1(e),this.wa=new Ia(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new Uw,s=t?t.wa:this.wa;let a=t?t.mutatedKeys:this.mutatedKeys,u=s,d=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,g=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((v,w)=>{const I=s.get(v),O=Dd(this.query,w)?w:null,U=!!I&&this.mutatedKeys.has(I.key),W=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let B=!1;I&&O?I.data.isEqual(O.data)?U!==W&&(r.track({type:3,doc:O}),B=!0):this.va(I,O)||(r.track({type:2,doc:O}),B=!0,(f&&this.ya(O,f)>0||g&&this.ya(O,g)<0)&&(d=!0)):!I&&O?(r.track({type:0,doc:O}),B=!0):I&&!O&&(r.track({type:1,doc:I}),B=!0,(f||g)&&(d=!0)),B&&(O?(u=u.add(O),a=W?a.add(v):a.delete(v)):(u=u.delete(v),a=a.delete(v)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const v=this.query.limitType==="F"?u.last():u.first();u=u.delete(v.key),a=a.delete(v.key),r.track({type:1,doc:v})}return{wa:u,Da:r,ls:d,mutatedKeys:a}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const a=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const u=e.Da.X_();u.sort((v,w)=>function(O,U){const W=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve()}};return W(O)-W(U)}(v.type,w.type)||this.ya(v.doc,w.doc)),this.Ca(r),s=s!=null&&s;const d=t&&!s?this.Fa():[],f=this.pa.size===0&&this.current&&!s?1:0,g=f!==this.ga;return this.ga=f,u.length!==0||g?{snapshot:new Da(this.query,e.wa,a,u,e.mutatedKeys,f===0,g,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:d}:{Ma:d}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Uw,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=De(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new cC(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new uC(r))}),t}Oa(e){this.fa=e.gs,this.pa=De();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Da.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const T_="SyncEngine";class tF{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class nF{constructor(e){this.key=e,this.Ba=!1}}class rF{constructor(e,t,r,s,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.La={},this.ka=new fo(d=>k1(d),xd),this.qa=new Map,this.Qa=new Set,this.$a=new ht(pe.comparator),this.Ua=new Map,this.Ka=new h_,this.Wa={},this.Ga=new Map,this.za=xa.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function iF(n,e,t=!0){const r=gC(n);let s;const a=r.ka.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.Na()):s=await hC(r,e,t,!0),s}async function sF(n,e){const t=gC(n);await hC(t,e,!0,!1)}async function hC(n,e,t,r){const s=await TV(n.localStore,xr(e)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await oF(n,e,a,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&rC(n.remoteStore,s),d}async function oF(n,e,t,r,s){n.Ha=(w,I,O)=>async function(W,B,se,ne){let oe=B.view.ba(se);oe.ls&&(oe=await xw(W.localStore,B.query,!1).then(({documents:N})=>B.view.ba(N,oe)));const me=ne&&ne.targetChanges.get(B.targetId),ke=ne&&ne.targetMismatches.get(B.targetId)!=null,Ce=B.view.applyChanges(oe,W.isPrimaryClient,me,ke);return Ww(W,B.targetId,Ce.Ma),Ce.snapshot}(n,w,I,O);const a=await xw(n.localStore,e,!0),u=new eF(e,a.gs),d=u.ba(a.documents),f=Fu.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),g=u.applyChanges(d,n.isPrimaryClient,f);Ww(n,t,g.Ma);const v=new tF(e,t,u);return n.ka.set(e,v),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),g.snapshot}async function aF(n,e,t){const r=Se(n),s=r.ka.get(e),a=r.qa.get(s.targetId);if(a.length>1)return r.qa.set(s.targetId,a.filter(u=>!xd(u,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Qm(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&m_(r.remoteStore,s.targetId),Jm(r,s.targetId)}).catch($a)):(Jm(r,s.targetId),await Qm(r.localStore,s.targetId,!0))}async function lF(n,e){const t=Se(n),r=t.ka.get(e),s=t.qa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),m_(t.remoteStore,r.targetId))}async function uF(n,e,t){const r=gF(n);try{const s=await function(u,d){const f=Se(u),g=Rt.now(),v=d.reduce((O,U)=>O.add(U.key),De());let w,I;return f.persistence.runTransaction("Locally write mutations","readwrite",O=>{let U=mi(),W=De();return f.ds.getEntries(O,v).next(B=>{U=B,U.forEach((se,ne)=>{ne.isValidDocument()||(W=W.add(se))})}).next(()=>f.localDocuments.getOverlayedDocuments(O,U)).next(B=>{w=B;const se=[];for(const ne of d){const oe=TL(ne,w.get(ne.key).overlayedDocument);oe!=null&&se.push(new po(ne.key,oe,v1(oe.value.mapValue),ai.exists(!0)))}return f.mutationQueue.addMutationBatch(O,g,se,d)}).next(B=>{I=B;const se=B.applyToLocalDocumentSet(w,W);return f.documentOverlayCache.saveOverlays(O,B.batchId,se)})}).then(()=>({batchId:I.batchId,changes:b1(w)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(u,d,f){let g=u.Wa[u.currentUser.toKey()];g||(g=new ht(Re)),g=g.insert(d,f),u.Wa[u.currentUser.toKey()]=g}(r,s.batchId,t),await ju(r,s.changes),await jd(r.remoteStore)}catch(s){const a=E_(s,"Failed to persist write");t.reject(a)}}async function dC(n,e){const t=Se(n);try{const r=await vV(t.localStore,e);e.targetChanges.forEach((s,a)=>{const u=t.Ua.get(a);u&&(qe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.Ba=!0:s.modifiedDocuments.size>0?qe(u.Ba):s.removedDocuments.size>0&&(qe(u.Ba),u.Ba=!1))}),await ju(t,r,e)}catch(r){await $a(r)}}function Bw(n,e,t){const r=Se(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ka.forEach((a,u)=>{const d=u.view.sa(e);d.snapshot&&s.push(d.snapshot)}),function(u,d){const f=Se(u);f.onlineState=d;let g=!1;f.queries.forEach((v,w)=>{for(const I of w.ta)I.sa(d)&&(g=!0)}),g&&w_(f)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cF(n,e,t){const r=Se(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ua.get(e),a=s&&s.key;if(a){let u=new ht(pe.comparator);u=u.insert(a,tn.newNoDocument(a,Te.min()));const d=De().add(a),f=new Vd(Te.min(),new Map,new ht(Re),u,d);await dC(r,f),r.$a=r.$a.remove(a),r.Ua.delete(e),I_(r)}else await Qm(r.localStore,e,!1).then(()=>Jm(r,e,t)).catch($a)}async function hF(n,e){const t=Se(n),r=e.batch.batchId;try{const s=await yV(t.localStore,e);pC(t,r,null),fC(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ju(t,s)}catch(s){await $a(s)}}async function dF(n,e,t){const r=Se(n);try{const s=await function(u,d){const f=Se(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let v;return f.mutationQueue.lookupMutationBatch(g,d).next(w=>(qe(w!==null),v=w.keys(),f.mutationQueue.removeMutationBatch(g,w))).next(()=>f.mutationQueue.performConsistencyCheck(g)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(g,v,d)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v)).next(()=>f.localDocuments.getDocuments(g,v))})}(r.localStore,e);pC(r,e,t),fC(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ju(r,s)}catch(s){await $a(s)}}function fC(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function pC(n,e,t){const r=Se(n);let s=r.Wa[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function Jm(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(r=>{n.Ka.containsKey(r)||mC(n,r)})}function mC(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(m_(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),I_(n))}function Ww(n,e,t){for(const r of t)r instanceof uC?(n.Ka.addReference(r.key,e),fF(n,r)):r instanceof cC?(ie(T_,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,e),n.Ka.containsKey(r.key)||mC(n,r.key)):ve()}function fF(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(ie(T_,"New document in limbo: "+t),n.Qa.add(r),I_(n))}function I_(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new pe(it.fromString(e)),r=n.za.next();n.Ua.set(r,new nF(t)),n.$a=n.$a.insert(t,r),rC(n.remoteStore,new Yi(xr(A1(t.path)),r,"TargetPurposeLimboResolution",Nd.ae))}}async function ju(n,e,t){const r=Se(n),s=[],a=[],u=[];r.ka.isEmpty()||(r.ka.forEach((d,f)=>{u.push(r.Ha(f,e,t).then(g=>{var v;if((g||t)&&r.isPrimaryClient){const w=g?!g.fromCache:(v=t==null?void 0:t.targetChanges.get(f.targetId))===null||v===void 0?void 0:v.current;r.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(g){s.push(g);const w=f_.Yi(f.targetId,g);a.push(w)}}))}),await Promise.all(u),r.La.p_(s),await async function(f,g){const v=Se(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>$.forEach(g,I=>$.forEach(I.Hi,O=>v.persistence.referenceDelegate.addReference(w,I.targetId,O)).next(()=>$.forEach(I.Ji,O=>v.persistence.referenceDelegate.removeReference(w,I.targetId,O)))))}catch(w){if(!Ha(w))throw w;ie(p_,"Failed to update sequence numbers: "+w)}for(const w of g){const I=w.targetId;if(!w.fromCache){const O=v.Ts.get(I),U=O.snapshotVersion,W=O.withLastLimboFreeSnapshotVersion(U);v.Ts=v.Ts.insert(I,W)}}}(r.localStore,a))}async function pF(n,e){const t=Se(n);if(!t.currentUser.isEqual(e)){ie(T_,"User change. New user:",e.toKey());const r=await Z1(t.localStore,e);t.currentUser=e,function(a,u){a.Ga.forEach(d=>{d.forEach(f=>{f.reject(new ue(q.CANCELLED,u))})}),a.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ju(t,r.Rs)}}function mF(n,e){const t=Se(n),r=t.Ua.get(e);if(r&&r.Ba)return De().add(r.key);{let s=De();const a=t.qa.get(e);if(!a)return s;for(const u of a){const d=t.ka.get(u);s=s.unionWith(d.view.Sa)}return s}}function gC(n){const e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=dC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cF.bind(null,e),e.La.p_=XV.bind(null,e.eventManager),e.La.Ja=JV.bind(null,e.eventManager),e}function gF(n){const e=Se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dF.bind(null,e),e}class ld{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Fd(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return _V(this.persistence,new pV,e.initialUser,this.serializer)}Xa(e){return new J1(d_.ri,this.serializer)}Za(e){return new SV}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ld.provider={build:()=>new ld};class _F extends ld{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){qe(this.persistence.referenceDelegate instanceof od);const r=this.persistence.referenceDelegate.garbageCollector;return new ZL(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?yn.withCacheSize(this.cacheSizeBytes):yn.DEFAULT;return new J1(r=>od.ri(r,t),this.serializer)}}class Zm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pF.bind(null,this.syncEngine),await qV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new KV}()}createDatastore(e){const t=Fd(e.databaseInfo.databaseId),r=function(a){return new PV(a)}(e.databaseInfo);return function(a,u,d,f){return new xV(a,u,d,f)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,a,u,d){return new MV(r,s,a,u,d)}(this.localStore,this.datastore,e.asyncQueue,t=>Bw(this.syncEngine,t,0),function(){return Lw.D()?new Lw:new CV}())}createSyncEngine(e,t){return function(s,a,u,d,f,g,v){const w=new rF(s,a,u,d,f,g);return v&&(w.ja=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const a=Se(s);ie(ao,"RemoteStore shutting down."),a.W_.add(5),await Uu(a),a.z_.shutdown(),a.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Zm.provider={build:()=>new Zm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yF{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):pi("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="FirestoreClient";class vF{constructor(e,t,r,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Zt.UNAUTHENTICATED,this.clientId=l1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,async u=>{ie(ms,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(ie(ms,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ns;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=E_(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kp(n,e){n.asyncQueue.verifyOperationInProgress(),ie(ms,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Z1(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function $w(n,e){n.asyncQueue.verifyOperationInProgress();const t=await EF(n);ie(ms,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Fw(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Fw(e.remoteStore,s)),n._onlineComponents=e}async function EF(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ie(ms,"Using user provided OfflineComponentProvider");try{await Kp(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===q.FAILED_PRECONDITION||s.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Pa("Error using user provided cache. Falling back to memory cache: "+t),await Kp(n,new ld)}}else ie(ms,"Using default OfflineComponentProvider"),await Kp(n,new _F(void 0));return n._offlineComponents}async function _C(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ie(ms,"Using user provided OnlineComponentProvider"),await $w(n,n._uninitializedComponentsProvider._online)):(ie(ms,"Using default OnlineComponentProvider"),await $w(n,new Zm))),n._onlineComponents}function wF(n){return _C(n).then(e=>e.syncEngine)}async function TF(n){const e=await _C(n),t=e.eventManager;return t.onListen=iF.bind(null,e.syncEngine),t.onUnlisten=aF.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=sF.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=lF.bind(null,e.syncEngine),t}function IF(n,e,t={}){const r=new ns;return n.asyncQueue.enqueueAndForget(async()=>function(a,u,d,f,g){const v=new yF({next:I=>{v.su(),u.enqueueAndForget(()=>YV(a,w)),I.fromCache&&f.source==="server"?g.reject(new ue(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(I)},error:I=>g.reject(I)}),w=new ZV(d,v,{includeMetadataChanges:!0,Ta:!0});return QV(a,w)}(await TF(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(n,e,t){if(!t)throw new ue(q.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function SF(n,e,t,r){if(e===!0&&r===!0)throw new ue(q.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function qw(n){if(!pe.isDocumentKey(n))throw new ue(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Gw(n){if(pe.isDocumentKey(n))throw new ue(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function zd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ve()}function ud(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ue(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=zd(n);throw new ue(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC="firestore.googleapis.com",Kw=!0;class Qw{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=EC,this.ssl=Kw}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Kw;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=X1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<XL)throw new ue(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}SF("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ue(q.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ue(q.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ue(q.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bd{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new PM;switch(r.type){case"firstParty":return new xM(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ue(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Hw.get(t);r&&(ie("ComponentProvider","Removing Datastore"),Hw.delete(t),r.terminate())}(this),Promise.resolve()}}function CF(n,e,t,r={}){var s;const a=(n=ud(n,Bd))._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),d=`${e}:${t}`;a.host!==EC&&a.host!==d&&Pa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},a),{host:d,ssl:!1,emulatorOptions:r});if(!is(f,u)&&(n._setSettings(f),r.mockUserToken)){let g,v;if(typeof r.mockUserToken=="string")g=r.mockUserToken,v=Zt.MOCK_USER;else{g=hT(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new ue(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new Zt(w)}n._authCredentials=new NM(new o1(g,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ga(this.firestore,e,this._query)}}class $n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $n(this.firestore,e,this._key)}}class rs extends Ga{constructor(e,t,r){super(e,t,A1(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $n(this.firestore,null,new pe(e))}withConverter(e){return new rs(this.firestore,e,this._path)}}function AF(n,e,...t){if(n=Pt(n),vC("collection","path",e),n instanceof Bd){const r=it.fromString(e,...t);return Gw(r),new rs(n,null,r)}{if(!(n instanceof $n||n instanceof rs))throw new ue(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(it.fromString(e,...t));return Gw(r),new rs(n.firestore,null,r)}}function RF(n,e,...t){if(n=Pt(n),arguments.length===1&&(e=l1.newId()),vC("doc","path",e),n instanceof Bd){const r=it.fromString(e,...t);return qw(r),new $n(n,null,new pe(r))}{if(!(n instanceof $n||n instanceof rs))throw new ue(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(it.fromString(e,...t));return qw(r),new $n(n.firestore,n instanceof rs?n.converter:null,new pe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="AsyncQueue";class Xw{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new tC(this,"async_queue_retry"),this.Su=()=>{const r=Gp();r&&ie(Yw,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=Gp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Gp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new ns;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Ha(e))throw e;ie(Yw,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(u){let d=u.message||"";return u.stack&&(d=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),d}(r);throw pi("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const s=v_.createAndSchedule(this,e,t,r,a=>this.Fu(a));return this.fu.push(s),s}Du(){this.gu&&ve()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class S_ extends Bd{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Xw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xw(e),this._firestoreClient=void 0,await e}}}function kF(n,e){const t=typeof n=="object"?n:og(),r=typeof n=="string"?n:Zh,s=md(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=lT("firestore");a&&CF(s,...a)}return s}function wC(n){if(n._terminated)throw new ue(q.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||PF(n),n._firestoreClient}function PF(n){var e,t,r;const s=n._freezeSettings(),a=function(d,f,g,v){return new KM(d,f,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,yC(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new vF(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ma(Ht.fromBase64String(e))}catch(t){throw new ue(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ma(Ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NF=/^__.*__$/;class bF{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new po(e,this.data,this.fieldMask,t,this.fieldTransforms):new Vu(e,this.data,t,this.fieldTransforms)}}function IC(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve()}}class k_{constructor(e,t,r,s,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.Bu(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new k_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Uu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return cd(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(IC(this.Lu)&&NF.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class OF{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Fd(e)}ju(e,t,r,s=!1){return new k_({Lu:e,methodName:t,zu:r,path:$t.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function SC(n){const e=n._freezeSettings(),t=Fd(n._databaseId);return new OF(n._databaseId,!!e.ignoreUndefinedProperties,t)}function xF(n,e,t,r,s,a={}){const u=n.ju(a.merge||a.mergeFields?2:0,e,t,s);RC("Data must be an object, but it was:",u,r);const d=CC(r,u);let f,g;if(a.merge)f=new cr(u.fieldMask),g=u.fieldTransforms;else if(a.mergeFields){const v=[];for(const w of a.mergeFields){const I=MF(e,w,t);if(!u.contains(I))throw new ue(q.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);VF(v,I)||v.push(I)}f=new cr(v),g=u.fieldTransforms.filter(w=>f.covers(w.field))}else f=null,g=u.fieldTransforms;return new bF(new Bn(d),f,g)}function DF(n,e,t,r=!1){return P_(t,n.ju(r?4:3,e))}function P_(n,e){if(AC(n=Pt(n)))return RC("Unsupported field value:",e,n),CC(n,e);if(n instanceof TC)return function(r,s){if(!IC(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const a=[];let u=0;for(const d of r){let f=P_(d,s.Ku(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}}(n,e)}return function(r,s){if((r=Pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gL(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=Rt.fromDate(r);return{timestampValue:sd(s.serializer,a)}}if(r instanceof Rt){const a=new Rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:sd(s.serializer,a)}}if(r instanceof A_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ma)return{bytesValue:$1(s.serializer,r._byteString)};if(r instanceof $n){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.Wu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:c_(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof R_)return function(u,d){return{mapValue:{fields:{[g1]:{stringValue:y1},[ed]:{arrayValue:{values:u.toArray().map(g=>{if(typeof g!="number")throw d.Wu("VectorValues must only contain numeric values.");return a_(d.serializer,g)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${zd(r)}`)}(n,e)}function CC(n,e){const t={};return c1(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ho(n,(r,s)=>{const a=P_(s,e.qu(r));a!=null&&(t[r]=a)}),{mapValue:{fields:t}}}function AC(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Rt||n instanceof A_||n instanceof Ma||n instanceof $n||n instanceof TC||n instanceof R_)}function RC(n,e,t){if(!AC(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=zd(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function MF(n,e,t){if((e=Pt(e))instanceof C_)return e._internalPath;if(typeof e=="string")return kC(n,e);throw cd("Field path arguments must be of type string or ",n,!1,void 0,t)}const LF=new RegExp("[~\\*/\\[\\]]");function kC(n,e,t){if(e.search(LF)>=0)throw cd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new C_(...e.split("."))._internalPath}catch{throw cd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function cd(n,e,t,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${s}`),f+=")"),new ue(q.INVALID_ARGUMENT,d+n+f)}function VF(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,t,r,s,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new $n(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(N_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class FF extends PC{data(){return super.data()}}function N_(n,e){return typeof e=="string"?kC(n,e):e instanceof C_?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UF(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ue(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class b_{}class jF extends b_{}function zF(n,e,...t){let r=[];e instanceof b_&&r.push(e),r=r.concat(t),function(a){const u=a.filter(f=>f instanceof O_).length,d=a.filter(f=>f instanceof Wd).length;if(u>1||u>0&&d>0)throw new ue(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Wd extends jF{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Wd(e,t,r)}_apply(e){const t=this._parse(e);return NC(e._query,t),new Ga(e.firestore,e.converter,Wm(e._query,t))}_parse(e){const t=SC(e.firestore);return function(a,u,d,f,g,v,w){let I;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ue(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){Zw(w,v);const U=[];for(const W of w)U.push(Jw(f,a,W));I={arrayValue:{values:U}}}else I=Jw(f,a,w)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||Zw(w,v),I=DF(d,u,w,v==="in"||v==="not-in");return Et.create(g,v,I)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function BF(n,e,t){const r=e,s=N_("where",n);return Wd._create(s,r,t)}class O_ extends b_{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new O_(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:fr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,a){let u=s;const d=a.getFlattenedFilters();for(const f of d)NC(u,f),u=Wm(u,f)}(e._query,t),new Ga(e.firestore,e.converter,Wm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Jw(n,e,t){if(typeof(t=Pt(t))=="string"){if(t==="")throw new ue(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!R1(e)&&t.indexOf("/")!==-1)throw new ue(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(it.fromString(t));if(!pe.isDocumentKey(r))throw new ue(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return pw(n,new pe(r))}if(t instanceof $n)return pw(n,t._key);throw new ue(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zd(t)}.`)}function Zw(n,e){if(!Array.isArray(n)||n.length===0)throw new ue(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function NC(n,e){const t=function(s,a){for(const u of s)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ue(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class WF{convertValue(e,t="none"){switch(fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return gt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ho(e,(s,a)=>{r[s]=this.convertValue(a,t)}),r}convertVectorValue(e){var t,r,s;const a=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[ed].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(u=>gt(u.doubleValue));return new R_(a)}convertGeoPoint(e){return new A_(gt(e.latitude),gt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Od(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Eu(e));default:return null}}convertTimestamp(e){const t=hs(e);return new Rt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=it.fromString(e);qe(Y1(r));const s=new wu(r.get(1),r.get(3)),a=new pe(r.popFirst(5));return s.isEqual(t)||pi(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $F(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class HF extends PC{constructor(e,t,r,s,a,u){super(e,t,r,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new kh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(N_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class kh extends HF{data(e={}){return super.data(e)}}class qF{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new fh(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new kh(this._firestore,this._userDataWriter,r.key,r,new fh(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(d=>{const f=new kh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new fh(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(d=>a||d.type!==3).map(d=>{const f=new kh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new fh(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let g=-1,v=-1;return d.type!==0&&(g=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),v=u.indexOf(d.doc.key)),{type:GF(d.type),doc:f,oldIndex:g,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function GF(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve()}}class KF extends WF{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ma(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $n(this.firestore,null,t)}}function QF(n){n=ud(n,Ga);const e=ud(n.firestore,S_),t=wC(e),r=new KF(e);return UF(n._query),IF(t,n._query).then(s=>new qF(e,r,n,s))}function YF(n,e){const t=ud(n.firestore,S_),r=RF(n),s=$F(n.converter,e);return XF(t,[xF(SC(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,ai.exists(!1))]).then(()=>r)}function XF(n,e){return function(r,s){const a=new ns;return r.asyncQueue.enqueueAndForget(async()=>uF(await wF(r),s,a)),a.promise}(wC(n),e)}(function(e,t=!0){(function(s){Wa=s})(lo),Js(new ss("firestore",(r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new S_(new bM(r.getProvider("auth-internal")),new DM(u,r.getProvider("app-check-internal")),function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ue(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wu(g.options.projectId,v)}(u,s),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d},"PUBLIC").setMultipleInstances(!0)),br(nw,rw,e),br(nw,rw,"esm2017")})();const JF={apiKey:"AIzaSyAPviym6GlHi7y7wfXQxOD2J9u0C5syUNk",authDomain:"moodmate-42cc6.firebaseapp.com",projectId:"moodmate-42cc6",storageBucket:"moodmate-42cc6.firebasestorage.app",messagingSenderId:"632502462277",appId:"1:632502462277:web:8bced5f25946d84bd6002c",measurementId:"G-ZTYMMBSLY8"},bC=sg(JF),Qp=RM(bC),ZF=kF(bC),e4=({onUserChange:n})=>{const[e,t]=Pn.useState(null);Pn.useEffect(()=>{const a=Qp.onAuthStateChanged(u=>{u?(t(u),n(u)):(t(null),n(null))});return()=>a()},[n]);const r=async()=>{const a=new ti;try{const d=(await L2(Qp,a)).user,f=AF(ZF,"users"),g=zF(f,BF("uid","==",d.uid));if((await QF(g)).empty){const w={uid:d.uid||"",name:d.displayName||"",email:d.email||"",photoURL:d.photoURL||"",createdAt:new Date().toISOString()};await YF(f,w)}t(d),n(d)}catch(u){console.error("Error during login:",u)}},s=async()=>{try{await g2(Qp),t(null),n(null)}catch(a){console.error("Error during logout:",a)}};return Ie.jsx("div",{className:"login-container",children:e?Ie.jsxs("div",{className:"user-info",children:[Ie.jsx("span",{className:"user-name",children:e.displayName}),Ie.jsx("button",{onClick:s,className:"logout-button",children:"Logout"})]}):Ie.jsx("button",{onClick:r,className:"login-button",children:"Login with Google"})})};function t4(){const{recognition:n,speaking:e,setSpeaking:t,prompt:r,response:s,setPrompt:a,setResponse:u}=Pn.useContext(IS),[d,f]=Pn.useState(null);return Ie.jsxs("div",{className:"main",children:[Ie.jsx("div",{className:"header",children:Ie.jsx(e4,{onUserChange:f})}),Ie.jsx("img",{src:$A,alt:"",id:"galaxy"}),Ie.jsx("span",{children:"I'm Galaxy, Your Personal Chatbot"}),e?Ie.jsxs("div",{className:"response",children:[s?Ie.jsx("img",{src:kD,alt:"",id:"ai"}):Ie.jsx("img",{src:RD,alt:"",id:"speak"}),Ie.jsx("p",{children:r})]}):Ie.jsxs("button",{id:"button",onClick:()=>{a("listening..."),t(!0),u(!1),n.start()},children:["Ask ",Ie.jsx(ZA,{})]})]})}WA.createRoot(document.getElementById("root")).render(Ie.jsx(AD,{children:Ie.jsx(t4,{})}));
