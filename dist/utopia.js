/*! jQuery v2.0.1 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],f="2.0.1",p=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=f.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return p.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,f,p,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=at(),k=at(),N=at(),E=!1,S=function(){return 0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],H=L.pop,q=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){q.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,p,g,m,x,w;if((t?t.ownerDocument||t:b)!==f&&c(t),t=t||f,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){p=vt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=p.length;while(l--)p[l]=m+xt(p[l]);x=U.test(e)&&t.parentNode||t,w=p.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return St(e.replace(z,"$1"),t,r,i)}function st(e){return Q.test(e+"")}function at(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function ut(e){return e[v]=!0,e}function lt(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t,n){e=e.split("|");var r,o=e.length,s=n?null:t;while(o--)(r=i.attrHandle[e[o]])&&r!==t||(i.attrHandle[e[o]]=s)}function ft(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:e[t]===!0?t.toLowerCase():null}function pt(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function ht(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:undefined}function dt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function gt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function mt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function yt(e){return ut(function(t){return t=+t,ut(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b;return t!==f&&9===t.nodeType&&t.documentElement?(f=t,p=t.documentElement,h=!s(t),n.attributes=lt(function(e){return e.innerHTML="<a href='#'></a>",ct("type|href|height|width",pt,"#"===e.firstChild.getAttribute("href")),ct(R,ft,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")}),n.input=lt(function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}),ct("value",ht,n.attributes&&n.input),n.getElementsByTagName=lt(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=lt(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=lt(function(e){return p.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=st(t.querySelectorAll))&&(lt(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),lt(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=st(m=p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector))&&lt(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=st(p.contains)||p.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},n.sortDetached=lt(function(e){return 1&e.compareDocumentPosition(t.createElement("div"))}),S=p.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return dt(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?dt(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):f},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,f,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==f&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==f&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:ut,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=vt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){f=t;while(f=f[g])if(a?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],p=l[0]===w&&l[2],f=h&&m.childNodes[h];while(f=++h&&f&&f[g]||(p=h=0)||d.pop())if(1===f.nodeType&&++p&&f===t){c[e]=[w,h,p];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)p=l[1];else while(f=++h&&f&&f[g]||(p=h=0)||d.pop())if((a?f.nodeName.toLowerCase()===y:1===f.nodeType)&&++p&&(x&&((f[v]||(f[v]={}))[e]=[w,p]),f===t))break;return p-=i,p===r||0===p%r&&p/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ut(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?ut(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ut(function(e){return function(t){return ot(e,t).length>0}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ut(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:yt(function(){return[0]}),last:yt(function(e,t){return[t-1]}),eq:yt(function(e,t,n){return[0>n?n+t:n]}),even:yt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:yt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:yt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:yt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=gt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=mt(t);function vt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function xt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function bt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,f=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===f){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[f],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function wt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Tt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function Ct(e,t,n,r,i,o){return r&&!r[v]&&(r=Ct(r)),i&&!i[v]&&(i=Ct(i,o)),ut(function(o,s,a,u){var l,c,f,p=[],h=[],d=s.length,g=o||Et(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:Tt(g,p,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=Tt(y,h),r(l,[],a,u),c=l.length;while(c--)(f=l[c])&&(y[h[c]]=!(m[h[c]]=f))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(f=y[c])&&l.push(m[c]=f);i(null,y=[],l,u)}c=y.length;while(c--)(f=y[c])&&(l=i?P.call(o,f):p[c])>-1&&(o[l]=!(s[l]=f))}}else y=Tt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function kt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=bt(function(e){return e===t},a,!0),f=bt(function(e){return P.call(t,e)>-1},a,!0),p=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):f(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])p=[bt(wt(p),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return Ct(l>1&&wt(p),l>1&&xt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&kt(e.slice(l,r)),o>r&&kt(e=e.slice(r)),o>r&&xt(e))}p.push(n)}return wt(p)}function Nt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,p,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==f&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){p.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=H.call(p));y=Tt(y)}O.apply(p,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(p)}return T&&(w=N,u=C),b};return o?ut(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=vt(e)),n=t.length;while(n--)o=kt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Nt(i,r))}return o};function Et(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function St(e,t,r,o){var s,u,l,c,f,p=vt(e);if(!o&&1===p.length){if(u=p[0]=p[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((f=i.find[c])&&(o=f(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&xt(u),!e)return O.apply(r,o),r;break}}}return a(e,p)(o,t,!h,r,U.test(e)),r}i.pseudos.nth=i.pseudos.eq;function jt(){}jt.prototype=i.filters=i.pseudos,i.setFilters=new jt,n.sortStable=v.split("").sort(S).join("")===v,c(),[0,0].sort(S),n.detectDuplicates=E,x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(f){for(t=e.memory&&f,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(f[0],f[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!a||n&&!u||(r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,H,q=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){return t===undefined||t&&"string"==typeof t&&n===undefined?this.get(e,t):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,H=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||H.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return H.access(e,t,n)},_removeData:function(e,t){H.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!H.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));H.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:q.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=H.get(e,t),n&&(!r||x.isArray(n)?r=H.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()
},_queueHooks:function(e,t){var n=t+"queueHooks";return H.get(e,n)||H.access(e,n,{empty:x.Callbacks("once memory").add(function(){H.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=H.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,i="boolean"==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,s=0,a=x(this),u=t,l=e.match(w)||[];while(o=l[s++])u=i?u:!a.hasClass(o),a[u?"addClass":"removeClass"](o)}else(n===r||"boolean"===n)&&(this.className&&H.set(this,"__className__",this.className),this.className=this.className||e===!1?"":H.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,f,p,h,d,g,m,y=H.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(p=x.event.special[d]||{},d=(o?p.delegateType:p.bindType)||d,p=x.event.special[d]||{},f=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,p.setup&&p.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),p.add&&(p.add.call(e,f),f.handler.guid||(f.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,f):h.push(f),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,h,d,g,m=H.hasData(e)&&H.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){f=x.event.special[h]||{},h=(r?f.delegateType:f.bindType)||h,p=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));s&&!p.length&&(f.teardown&&f.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,H.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,f,p,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),p=x.event.special[d]||{},i||!p.trigger||p.trigger.apply(r,n)!==!1)){if(!i&&!p.noBubble&&!x.isWindow(r)){for(l=p.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:p.bindType||d,f=(H.get(a,"events")||{})[t.type]&&H.get(a,"handle"),f&&f.apply(a,n),f=c&&a[c],f&&x.acceptData(a)&&f.apply&&f.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||p._default&&p._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(H.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=ft(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=ft(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=p.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,f=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=f.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),pt),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!H.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,f=e.length,p=t.createDocumentFragment(),h=[];for(;f>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||p.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.firstChild;x.merge(h,o.childNodes),o=p.firstChild,o.textContent=""}else h.push(t.createTextNode(i));p.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(p.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return p},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[H.expando],o&&(t=H.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);H.cache[o]&&delete H.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function ft(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function pt(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)H.set(e[r],"globalEval",!t||H.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(H.hasData(e)&&(o=H.access(e),s=H.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function Ht(t){return e.getComputedStyle(t,null)}function qt(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=H.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=H.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&H.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=Ht(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return qt(this,!0)},hide:function(){return qt(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:Lt(this))?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||Ht(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Ht(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&Ht(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)
}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),f=c.context||c,p=c.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(f,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&p.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=fn(c,T,o)),b=pn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(f,[m,C,T]):h.rejectWith(f,[T,C,y]),T.statusCode(g),g=undefined,u&&p.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(f,[T,C]),u&&(p.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function fn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function pn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(f){return{state:"parsererror",error:s?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(n.unit=o,n.start=+s||+r||0,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},f=e.style,p=e.nodeType&&Lt(e),h=H.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(f.display="inline-block")),n.overflow&&(f.overflow="hidden",l.always(function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(p?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;p=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(p=h.hidden):h=H.access(e,"fxshow",{}),o&&(h.hidden=!p),p?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;H.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(p?h[r]:0,r,l),r in h||(h[r]=s.start,p&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(Hn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);s.finish=function(){t.stop(!0)},(i||H.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=H.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=H.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function Hn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:Hn("show"),slideUp:Hn("hide"),slideToggle:Hn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=qn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),f=x(e),p={};"static"===c&&(e.style.position="relative"),a=f.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=f.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+i),"using"in t?t.using.call(e,p):f.css(p)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=qn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function qn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);
/*! jQuery UI - v1.10.3 - 2013-05-27
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,a,n=e(this[0]);n.length&&n[0]!==document;){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a))return a;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i){var s,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;a.length>s;s++)e.options[a[s][0]]&&a[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)}})})(jQuery);(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(a!==e)return a;var i,s,n=t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(e){var i=e.isWindow?"":e.element.css("overflow-x"),s=e.isWindow?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]);return{element:i,isWindow:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var a,p,m,g,v,b,_=t(e.of),y=t.position.getWithinInfo(e.within),w=t.position.getScrollInfo(y),x=(e.collision||"flip").split(" "),k={};return b=n(_),_[0].preventDefault&&(e.at="left top"),p=b.width,m=b.height,g=b.offset,v=t.extend({},g),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),k[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=m:"center"===e.at[1]&&(v.top+=m/2),a=i(k.at,p,m),v.left+=a[0],v.top+=a[1],this.each(function(){var n,l,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),b=s(this,"marginTop"),D=u+f+s(this,"marginRight")+w.width,T=d+b+s(this,"marginBottom")+w.height,C=t.extend({},v),M=i(k.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?C.left-=u:"center"===e.my[0]&&(C.left-=u/2),"bottom"===e.my[1]?C.top-=d:"center"===e.my[1]&&(C.top-=d/2),C.left+=M[0],C.top+=M[1],t.support.offsetFractions||(C.left=h(C.left),C.top=h(C.top)),n={marginLeft:f,marginTop:b},t.each(["left","top"],function(i,s){t.ui.position[x[i]]&&t.ui.position[x[i]][s](C,{targetWidth:p,targetHeight:m,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:D,collisionHeight:T,offset:[a[0]+M[0],a[1]+M[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(l=function(t){var i=g.left-C.left,s=i+p-u,n=g.top-C.top,a=n+m-d,h={target:{element:_,left:g.left,top:g.top,width:p,height:m},element:{element:c,left:C.left,top:C.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(h.horizontal="center"),d>m&&m>r(n+a)&&(h.vertical="middle"),h.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,h)}),c.offset(t.extend(C,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-o-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-o-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];0>c?(s=t.top+p+f+m+e.collisionHeight-o-a,t.top+p+f+m>c&&(0>s||r(c)>s)&&(t.top+=p+f+m)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+m-h,t.top+p+f+m>u&&(i>0||u>r(i))&&(t.top+=p+f+m))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);(function(e){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var i=this.options;return this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,i){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"original"!==this.options.helper||e.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1):!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;return n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===n.containment?(this.containment=[0,0,e(document).width()-this.helperProportions.width-this.margins.left,(e(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):n.containment.constructor===Array?(this.containment=n.containment,undefined):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i),undefined):(this.containment=null,undefined)},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:n.scrollTop(),left:n.scrollLeft()}),{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*s}},_generatePosition:function(t){var i,s,n,a,o=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=t.pageX,l=t.pageY;return this.offset.scroll||(this.offset.scroll={top:r.scrollTop(),left:r.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s]),"drag"===t&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i){var s=e(this).data("ui-draggable"),n=s.options,a=e.extend({},i,{item:s.element});s.sortables=[],e(n.connectToSortable).each(function(){var i=e.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",t,a))})},stop:function(t,i){var s=e(this).data("ui-draggable"),n=e.extend({},i,{item:s.element});e.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,n))})},drag:function(t,i){var s=e(this).data("ui-draggable"),n=this;e.each(s.sortables,function(){var a=!1,o=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(a=!0,e.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(o.instance.element[0],this.instance.element[0])&&(a=!1),a})),a?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",t),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",t),s.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),i=e(this).data("ui-draggable").options;t.css("cursor")&&(i._cursor=t.css("cursor")),t.css("cursor",i.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._opacity&&e(i.helper).css("opacity",s._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&"HTML"!==t.scrollParent[0].tagName&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var i=e(this).data("ui-draggable"),s=i.options,n=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-t.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:t.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-t.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:t.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(t.pageY-e(document).scrollTop()<s.scrollSensitivity?n=e(document).scrollTop(e(document).scrollTop()-s.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<s.scrollSensitivity&&(n=e(document).scrollTop(e(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(t.pageX-e(document).scrollLeft()<s.scrollSensitivity?n=e(document).scrollLeft(e(document).scrollLeft()-s.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<s.scrollSensitivity&&(n=e(document).scrollLeft(e(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&e.ui.ddmanager&&!s.dropBehaviour&&e.ui.ddmanager.prepareOffsets(i,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),i=t.options;t.snapElements=[],e(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=e(this),s=i.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(t,i){var s,n,a,o,r,h,l,u,c,d,p=e(this).data("ui-draggable"),f=p.options,m=f.snapTolerance,g=i.offset.left,v=g+p.helperProportions.width,b=i.offset.top,y=b+p.helperProportions.height;for(c=p.snapElements.length-1;c>=0;c--)r=p.snapElements[c].left,h=r+p.snapElements[c].width,l=p.snapElements[c].top,u=l+p.snapElements[c].height,r-m>v||g>h+m||l-m>y||b>u+m||!e.contains(p.snapElements[c].item.ownerDocument,p.snapElements[c].item)?(p.snapElements[c].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(s=m>=Math.abs(l-y),n=m>=Math.abs(u-b),a=m>=Math.abs(r-v),o=m>=Math.abs(h-g),s&&(i.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h}).left-p.margins.left)),d=s||n||a||o,"outer"!==f.snapMode&&(s=m>=Math.abs(l-b),n=m>=Math.abs(u-y),a=m>=Math.abs(r-g),o=m>=Math.abs(h-v),s&&(i.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u-p.helperProportions.height,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[c].snapping&&(s||n||a||o||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=s||n||a||o||d)}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,i=this.data("ui-draggable").options,s=e.makeArray(e(i.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});s.length&&(t=parseInt(e(s[0]).css("zIndex"),10)||0,e(s).each(function(i){e(this).css("zIndex",t+i)}),this.css("zIndex",t+s.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._zIndex&&e(i.helper).css("zIndex",s._zIndex)}})})(jQuery);(function(e){function t(e,t,i){return e>t&&t+i>e}e.widget("ui.droppable",{version:"1.10.3",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t=this.options,i=t.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(i)?i:function(e){return e.is(i)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables[t.scope]||[],e.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var t=0,i=e.ui.ddmanager.droppables[this.options.scope];i.length>t;t++)i[t]===this&&i.splice(t,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){"accept"===t&&(this.accept=e.isFunction(i)?i:function(e){return e.is(i)}),e.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var s=i||e.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"ui-droppable");return t.options.greedy&&!t.options.disabled&&t.options.scope===s.options.scope&&t.accept.call(t.element[0],s.currentItem||s.element)&&e.ui.intersect(s,e.extend(t,{offset:t.element.offset()}),t.options.tolerance)?(n=!0,!1):undefined}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(s)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(e,i,s){if(!i.offset)return!1;var n,a,o=(e.positionAbs||e.position.absolute).left,r=o+e.helperProportions.width,h=(e.positionAbs||e.position.absolute).top,l=h+e.helperProportions.height,u=i.offset.left,c=u+i.proportions.width,d=i.offset.top,p=d+i.proportions.height;switch(s){case"fit":return o>=u&&c>=r&&h>=d&&p>=l;case"intersect":return o+e.helperProportions.width/2>u&&c>r-e.helperProportions.width/2&&h+e.helperProportions.height/2>d&&p>l-e.helperProportions.height/2;case"pointer":return n=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left,a=(e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top,t(a,d,i.proportions.height)&&t(n,u,i.proportions.width);case"touch":return(h>=d&&p>=h||l>=d&&p>=l||d>h&&l>p)&&(o>=u&&c>=o||r>=u&&c>=r||u>o&&r>c);default:return!1}},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var s,n,a=e.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,r=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||t&&!a[s].accept.call(a[s].element[0],t.currentItem||t.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions.height=0;continue e}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions={width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight})}},drop:function(t,i){var s=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=e.ui.intersect(t,this,this.options.tolerance),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return e.data(this,"ui-droppable").options.scope===n}),a.length&&(s=e.data(a[0],"ui-droppable"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}}})(jQuery);(function(e){function t(e){return parseInt(e,10)||0}function i(e){return!isNaN(parseInt(e,10))}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=e(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),e(this.handles[i]).length},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(i){var s,n,a,o=this.options,r=this.element.position(),h=this.element;return this.resizing=!0,/absolute/.test(h.css("position"))?h.css({position:"absolute",top:h.css("top"),left:h.css("left")}):h.is(".ui-draggable")&&h.css({position:"absolute",top:r.top,left:r.left}),this._renderProxy(),s=t(this.helper.css("left")),n=t(this.helper.css("top")),o.containment&&(s+=e(o.containment).scrollLeft()||0,n+=e(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:s,top:n},this.size=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalSize=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalPosition={left:s,top:n},this.sizeDiff={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,a=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===a?this.axis+"-resize":a),h.addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(t){var i,s=this.helper,n={},a=this.originalMousePosition,o=this.axis,r=this.position.top,h=this.position.left,l=this.size.width,u=this.size.height,c=t.pageX-a.left||0,d=t.pageY-a.top||0,p=this._change[o];return p?(i=p.apply(this,[t,c,d]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),this.position.top!==r&&(n.top=this.position.top+"px"),this.position.left!==h&&(n.left=this.position.left+"px"),this.size.width!==l&&(n.width=this.size.width+"px"),this.size.height!==u&&(n.height=this.size.height+"px"),s.css(n),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(n)||this._trigger("resize",t,this.ui()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&e.ui.hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t,s,n,a,o,r=this.options;o={minWidth:i(r.minWidth)?r.minWidth:0,maxWidth:i(r.maxWidth)?r.maxWidth:1/0,minHeight:i(r.minHeight)?r.minHeight:0,maxHeight:i(r.maxHeight)?r.maxHeight:1/0},(this._aspectRatio||e)&&(t=o.minHeight*this.aspectRatio,n=o.minWidth/this.aspectRatio,s=o.maxHeight*this.aspectRatio,a=o.maxWidth/this.aspectRatio,t>o.minWidth&&(o.minWidth=t),n>o.minHeight&&(o.minHeight=n),o.maxWidth>s&&(o.maxWidth=s),o.maxHeight>a&&(o.maxHeight=a)),this._vBoundaries=o},_updateCache:function(e){this.offset=this.helper.offset(),i(e.left)&&(this.position.left=e.left),i(e.top)&&(this.position.top=e.top),i(e.height)&&(this.size.height=e.height),i(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,s=this.size,n=this.axis;return i(e.height)?e.width=e.height*this.aspectRatio:i(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===n&&(e.left=t.left+(s.width-e.width),e.top=null),"nw"===n&&(e.top=t.top+(s.height-e.height),e.left=t.left+(s.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,s=this.axis,n=i(e.width)&&t.maxWidth&&t.maxWidth<e.width,a=i(e.height)&&t.maxHeight&&t.maxHeight<e.height,o=i(e.width)&&t.minWidth&&t.minWidth>e.width,r=i(e.height)&&t.minHeight&&t.minHeight>e.height,h=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,u=/sw|nw|w/.test(s),c=/nw|ne|n/.test(s);return o&&(e.width=t.minWidth),r&&(e.height=t.minHeight),n&&(e.width=t.maxWidth),a&&(e.height=t.maxHeight),o&&u&&(e.left=h-t.minWidth),n&&u&&(e.left=h-t.maxWidth),r&&c&&(e.top=l-t.minHeight),a&&c&&(e.top=l-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var e,t,i,s,n,a=this.helper||this.element;for(e=0;this._proportionallyResizeElements.length>e;e++){if(n=this._proportionallyResizeElements[e],!this.borderDif)for(this.borderDif=[],i=[n.css("borderTopWidth"),n.css("borderRightWidth"),n.css("borderBottomWidth"),n.css("borderLeftWidth")],s=[n.css("paddingTop"),n.css("paddingRight"),n.css("paddingBottom"),n.css("paddingLeft")],t=0;i.length>t;t++)this.borderDif[t]=(parseInt(i[t],10)||0)+(parseInt(s[t],10)||0);n.css({height:a.height()-this.borderDif[0]-this.borderDif[2]||0,width:a.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).data("ui-resizable"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&e.ui.hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var i,s,n,a,o,r,h,l=e(this).data("ui-resizable"),u=l.options,c=l.element,d=u.containment,p=d instanceof e?d.get(0):/parent/.test(d)?c.parent().get(0):d;p&&(l.containerElement=e(p),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(i=e(p),s=[],e(["Top","Right","Left","Bottom"]).each(function(e,n){s[e]=t(i.css("padding"+n))}),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},n=l.containerOffset,a=l.containerSize.height,o=l.containerSize.width,r=e.ui.hasScroll(p,"left")?p.scrollWidth:o,h=e.ui.hasScroll(p)?p.scrollHeight:a,l.parentData={element:p,left:n.left,top:n.top,width:r,height:h}))},resize:function(t){var i,s,n,a,o=e(this).data("ui-resizable"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,c={top:0,left:0},d=o.containerElement;d[0]!==document&&/static/.test(d.css("position"))&&(c=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-c.left),u&&(o.size.height=o.size.width/o.aspectRatio),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio),o.position.top=o._helper?h.top:0),o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top,i=Math.abs((o._helper?o.offset.left-c.left:o.offset.left-c.left)+o.sizeDiff.width),s=Math.abs((o._helper?o.offset.top-c.top:o.offset.top-h.top)+o.sizeDiff.height),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a&&(i-=o.parentData.left),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio))},stop:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,function(e){s(e)})},resize:function(t,i){var s=e(this).data("ui-resizable"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0},h=function(t,s){e(t).each(function(){var t=e(this),n=e(this).data("ui-resizable-alsoresize"),a={},o=s&&s.length?s:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var i=(n[t]||0)+(r[t]||0);i&&i>=0&&(a[t]=i||null)}),t.css(a)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):e.each(n.alsoResize,function(e,t){h(e,t)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).data("ui-resizable");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).data("ui-resizable");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size,n=t.originalSize,a=t.originalPosition,o=t.axis,r="number"==typeof i.grid?[i.grid,i.grid]:i.grid,h=r[0]||1,l=r[1]||1,u=Math.round((s.width-n.width)/h)*h,c=Math.round((s.height-n.height)/l)*l,d=n.width+u,p=n.height+c,f=i.maxWidth&&d>i.maxWidth,m=i.maxHeight&&p>i.maxHeight,g=i.minWidth&&i.minWidth>d,v=i.minHeight&&i.minHeight>p;i.grid=r,g&&(d+=h),v&&(p+=l),f&&(d-=h),m&&(p-=l),/^(se|s|e)$/.test(o)?(t.size.width=d,t.size.height=p):/^(ne)$/.test(o)?(t.size.width=d,t.size.height=p,t.position.top=a.top-c):/^(sw)$/.test(o)?(t.size.width=d,t.size.height=p,t.position.left=a.left-u):(t.size.width=d,t.size.height=p,t.position.top=a.top-c,t.position.left=a.left-u)}})})(jQuery);(function(e){e.widget("ui.selectable",e.ui.mouse,{version:"1.10.3",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t=e(i.options.filter,i.element[0]),t.addClass("ui-selectee"),t.each(function(){var t=e(this),i=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:i.left,top:i.top,right:i.left+t.outerWidth(),bottom:i.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var i=this,s=this.options;this.opos=[t.pageX,t.pageY],this.options.disabled||(this.selectees=e(s.filter,this.element[0]),this._trigger("start",t),e(s.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=e.data(this,"selectable-item");s.startselected=!0,t.metaKey||t.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",t,{unselecting:s.element}))}),e(t.target).parents().addBack().each(function(){var s,n=e.data(this,"selectable-item");return n?(s=!t.metaKey&&!t.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",t,{selecting:n.element}):i._trigger("unselecting",t,{unselecting:n.element}),!1):undefined}))},_mouseDrag:function(t){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,a=this.opos[0],o=this.opos[1],r=t.pageX,h=t.pageY;return a>r&&(i=r,r=a,a=i),o>h&&(i=h,h=o,o=i),this.helper.css({left:a,top:o,width:r-a,height:h-o}),this.selectees.each(function(){var i=e.data(this,"selectable-item"),l=!1;i&&i.element!==s.element[0]&&("touch"===n.tolerance?l=!(i.left>r||a>i.right||i.top>h||o>i.bottom):"fit"===n.tolerance&&(l=i.left>a&&r>i.right&&i.top>o&&h>i.bottom),l?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",t,{selecting:i.element}))):(i.selecting&&((t.metaKey||t.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",t,{unselecting:i.element}))),i.selected&&(t.metaKey||t.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",t,{unselecting:i.element})))))}),!1}},_mouseStop:function(t){var i=this;return this.dragged=!1,e(".ui-unselecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",t,{unselected:s.element})}),e(".ui-selecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",t,{selected:s.element})}),this._trigger("stop",t),this.helper.remove(),!1}})})(jQuery);(function(t){function e(t,e,i){return t>e&&e+i>t}function i(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))}t.widget("ui.sortable",t.ui.mouse,{version:"1.10.3",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var t=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===t.axis||i(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_setOption:function(e,i){"disabled"===e?(this.options[e]=i,this.widget().toggleClass("ui-sortable-disabled",!!i)):t.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(e,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,a.widgetName+"-item")===a?(s=t(this),!1):undefined}),t.data(e.target,a.widgetName+"-item")===a&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=t("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:e.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:e.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(e.pageY-t(document).scrollTop()<o.scrollSensitivity?r=t(document).scrollTop(t(document).scrollTop()-o.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<o.scrollSensitivity&&(r=t(document).scrollTop(t(document).scrollTop()+o.scrollSpeed)),e.pageX-t(document).scrollLeft()<o.scrollSensitivity?r=t(document).scrollLeft(t(document).scrollLeft()-o.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<o.scrollSensitivity&&(r=t(document).scrollLeft(t(document).scrollLeft()+o.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=t.left,o=a+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||s+l>r&&h>s+l,d="y"===this.options.axis||e+c>a&&o>e+c,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var i="x"===this.options.axis||e(this.positionAbs.top+this.offset.click.top,t.top,t.height),s="y"===this.options.axis||e(this.positionAbs.left+this.offset.click.left,t.left,t.width),n=i&&s,a=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return n?this.floating?o&&"right"===o||"down"===a?2:1:a&&("down"===a?2:1):!1},_intersectsWithSides:function(t){var i=e(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),s=e(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return this.floating&&a?"right"===a&&s||"left"===a&&!s:n&&("down"===n&&i||"up"===n&&!i)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){var i,s,n,a,o=[],r=[],h=this._connectWith();if(h&&e)for(i=h.length-1;i>=0;i--)for(n=t(h[i]),s=n.length-1;s>=0;s--)a=t.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&r.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(r.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),i=r.length-1;i>=0;i--)r[i][0].each(function(){o.push(this)});return t(o)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,a,o,r,h,l,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i]),s=n.length-1;s>=0;s--)a=t.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(u.push([t.isFunction(a.options.items)?a.options.items.call(a.element[0],e,{item:this.currentItem}):t(a.options.items,a.element),a]),this.containers.push(a));for(i=u.length-1;i>=0;i--)for(o=u[i][1],r=u[i][0],s=0,l=r.length;l>s;s++)h=t(r[s]),h.data(this.widgetName+"-item",o),c.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]).addClass(i||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?e.currentItem.children().each(function(){t("<td>&#160;</td>",e.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(n)}):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_contactContainers:function(s){var n,a,o,r,h,l,c,u,d,p,f=null,m=null;for(n=this.containers.length-1;n>=0;n--)if(!t.contains(this.currentItem[0],this.containers[n].element[0]))if(this._intersectsWith(this.containers[n].containerCache)){if(f&&t.contains(this.containers[n].element[0],f.element[0]))continue;f=this.containers[n],m=n}else this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",s,this._uiHash(this)),this.containers[n].containerCache.over=0);if(f)if(1===this.containers.length)this.containers[m].containerCache.over||(this.containers[m]._trigger("over",s,this._uiHash(this)),this.containers[m].containerCache.over=1);else{for(o=1e4,r=null,p=f.floating||i(this.currentItem),h=p?"left":"top",l=p?"width":"height",c=this.positionAbs[h]+this.offset.click[h],a=this.items.length-1;a>=0;a--)t.contains(this.containers[m].element[0],this.items[a].item[0])&&this.items[a].item[0]!==this.currentItem[0]&&(!p||e(this.positionAbs.top+this.offset.click.top,this.items[a].top,this.items[a].height))&&(u=this.items[a].item.offset()[h],d=!1,Math.abs(u-c)>Math.abs(u+this.items[a][l]-c)&&(d=!0,u+=this.items[a][l]),o>Math.abs(u-c)&&(o=Math.abs(u-c),r=this.items[a],this.direction=d?"up":"down"));if(!r&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[m])return;r?this._rearrange(s,r,null,!0):this._rearrange(s,null,this.containers[m].element,!0),this._trigger("change",s,this._uiHash()),this.containers[m]._trigger("change",s,this._uiHash(this)),this.currentContainer=this.containers[m],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[m]._trigger("over",s,this._uiHash(this)),this.containers[m].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,t("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,(t("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,a=e.pageX,o=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0],a=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){this.reverting=!1;var i,s=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(i in this._storedCSS)("auto"===this._storedCSS[i]||"static"===this._storedCSS[i])&&(this._storedCSS[i]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&s.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||s.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(s.push(function(t){this._trigger("remove",t,this._uiHash())}),s.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),s.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),i=this.containers.length-1;i>=0;i--)e||s.push(function(t){return function(e){t._trigger("deactivate",e,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over&&(s.push(function(t){return function(e){t._trigger("out",e,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!e){for(this._trigger("beforeStop",t,this._uiHash()),i=0;s.length>i;i++)s[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}if(e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!e){for(i=0;s.length>i;i++)s[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}})})(jQuery);
// moment.js
// version : 2.0.0
// author : Tim Wood
// license : MIT
// momentjs.com
(function(e){function O(e,t){return function(n){return j(e.call(this,n),t)}}function M(e){return function(t){return this.lang().ordinal(e.call(this,t))}}function _(){}function D(e){H(this,e)}function P(e){var t=this._data={},n=e.years||e.year||e.y||0,r=e.months||e.month||e.M||0,i=e.weeks||e.week||e.w||0,s=e.days||e.day||e.d||0,o=e.hours||e.hour||e.h||0,u=e.minutes||e.minute||e.m||0,a=e.seconds||e.second||e.s||0,f=e.milliseconds||e.millisecond||e.ms||0;this._milliseconds=f+a*1e3+u*6e4+o*36e5,this._days=s+i*7,this._months=r+n*12,t.milliseconds=f%1e3,a+=B(f/1e3),t.seconds=a%60,u+=B(a/60),t.minutes=u%60,o+=B(u/60),t.hours=o%24,s+=B(o/24),s+=i*7,t.days=s%30,r+=B(s/30),t.months=r%12,n+=B(r/12),t.years=n}function H(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function B(e){return e<0?Math.ceil(e):Math.floor(e)}function j(e,t){var n=e+"";while(n.length<t)n="0"+n;return n}function F(e,t,n){var r=t._milliseconds,i=t._days,s=t._months,o;r&&e._d.setTime(+e+r*n),i&&e.date(e.date()+i*n),s&&(o=e.date(),e.date(1).month(e.month()+s*n).date(Math.min(o,e.daysInMonth())))}function I(e){return Object.prototype.toString.call(e)==="[object Array]"}function q(e,t){var n=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),i=0,s;for(s=0;s<n;s++)~~e[s]!==~~t[s]&&i++;return i+r}function R(e,t){return t.abbr=e,s[e]||(s[e]=new _),s[e].set(t),s[e]}function U(e){return e?(!s[e]&&o&&require("./lang/"+e),s[e]):t.fn._lang}function z(e){return e.match(/\[.*\]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function W(e){var t=e.match(a),n,r;for(n=0,r=t.length;n<r;n++)A[t[n]]?t[n]=A[t[n]]:t[n]=z(t[n]);return function(i){var s="";for(n=0;n<r;n++)s+=typeof t[n].call=="function"?t[n].call(i,e):t[n];return s}}function X(e,t){function r(t){return e.lang().longDateFormat(t)||t}var n=5;while(n--&&f.test(t))t=t.replace(f,r);return C[t]||(C[t]=W(t)),C[t](e)}function V(e){switch(e){case"DDDD":return p;case"YYYY":return d;case"YYYYY":return v;case"S":case"SS":case"SSS":case"DDD":return h;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return m;case"X":return b;case"Z":case"ZZ":return g;case"T":return y;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return c;default:return new RegExp(e.replace("\\",""))}}function $(e,t,n){var r,i,s=n._a;switch(e){case"M":case"MM":s[1]=t==null?0:~~t-1;break;case"MMM":case"MMMM":r=U(n._l).monthsParse(t),r!=null?s[1]=r:n._isValid=!1;break;case"D":case"DD":case"DDD":case"DDDD":t!=null&&(s[2]=~~t);break;case"YY":s[0]=~~t+(~~t>68?1900:2e3);break;case"YYYY":case"YYYYY":s[0]=~~t;break;case"a":case"A":n._isPm=(t+"").toLowerCase()==="pm";break;case"H":case"HH":case"h":case"hh":s[3]=~~t;break;case"m":case"mm":s[4]=~~t;break;case"s":case"ss":s[5]=~~t;break;case"S":case"SS":case"SSS":s[6]=~~(("0."+t)*1e3);break;case"X":n._d=new Date(parseFloat(t)*1e3);break;case"Z":case"ZZ":n._useUTC=!0,r=(t+"").match(x),r&&r[1]&&(n._tzh=~~r[1]),r&&r[2]&&(n._tzm=~~r[2]),r&&r[0]==="+"&&(n._tzh=-n._tzh,n._tzm=-n._tzm)}t==null&&(n._isValid=!1)}function J(e){var t,n,r=[];if(e._d)return;for(t=0;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];r[3]+=e._tzh||0,r[4]+=e._tzm||0,n=new Date(0),e._useUTC?(n.setUTCFullYear(r[0],r[1],r[2]),n.setUTCHours(r[3],r[4],r[5],r[6])):(n.setFullYear(r[0],r[1],r[2]),n.setHours(r[3],r[4],r[5],r[6])),e._d=n}function K(e){var t=e._f.match(a),n=e._i,r,i;e._a=[];for(r=0;r<t.length;r++)i=(V(t[r]).exec(n)||[])[0],i&&(n=n.slice(n.indexOf(i)+i.length)),A[t[r]]&&$(t[r],i,e);e._isPm&&e._a[3]<12&&(e._a[3]+=12),e._isPm===!1&&e._a[3]===12&&(e._a[3]=0),J(e)}function Q(e){var t,n,r,i=99,s,o,u;while(e._f.length){t=H({},e),t._f=e._f.pop(),K(t),n=new D(t);if(n.isValid()){r=n;break}u=q(t._a,n.toArray()),u<i&&(i=u,r=n)}H(e,r)}function G(e){var t,n=e._i;if(w.exec(n)){e._f="YYYY-MM-DDT";for(t=0;t<4;t++)if(S[t][1].exec(n)){e._f+=S[t][0];break}g.exec(n)&&(e._f+=" Z"),K(e)}else e._d=new Date(n)}function Y(t){var n=t._i,r=u.exec(n);n===e?t._d=new Date:r?t._d=new Date(+r[1]):typeof n=="string"?G(t):I(n)?(t._a=n.slice(0),J(t)):t._d=n instanceof Date?new Date(+n):new Date(n)}function Z(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function et(e,t,n){var i=r(Math.abs(e)/1e3),s=r(i/60),o=r(s/60),u=r(o/24),a=r(u/365),f=i<45&&["s",i]||s===1&&["m"]||s<45&&["mm",s]||o===1&&["h"]||o<22&&["hh",o]||u===1&&["d"]||u<=25&&["dd",u]||u<=45&&["M"]||u<345&&["MM",r(u/30)]||a===1&&["y"]||["yy",a];return f[2]=t,f[3]=e>0,f[4]=n,Z.apply({},f)}function tt(e,n,r){var i=r-n,s=r-e.day();return s>i&&(s-=7),s<i-7&&(s+=7),Math.ceil(t(e).add("d",s).dayOfYear()/7)}function nt(e){var n=e._i,r=e._f;return n===null||n===""?null:(typeof n=="string"&&(e._i=n=U().preparse(n)),t.isMoment(n)?(e=H({},n),e._d=new Date(+n._d)):r?I(r)?Q(e):K(e):Y(e),new D(e))}function rt(e,n){t.fn[e]=t.fn[e+"s"]=function(e){var t=this._isUTC?"UTC":"";return e!=null?(this._d["set"+t+n](e),this):this._d["get"+t+n]()}}function it(e){t.duration.fn[e]=function(){return this._data[e]}}function st(e,n){t.duration.fn["as"+e]=function(){return+this/n}}var t,n="2.0.0",r=Math.round,i,s={},o=typeof module!="undefined"&&module.exports,u=/^\/?Date\((\-?\d+)/i,a=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,f=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,l=/([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,c=/\d\d?/,h=/\d{1,3}/,p=/\d{3}/,d=/\d{1,4}/,v=/[+\-]?\d{1,6}/,m=/[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i,g=/Z|[\+\-]\d\d:?\d\d/i,y=/T/i,b=/[\+\-]?\d+(\.\d{1,3})?/,w=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,E="YYYY-MM-DDTHH:mm:ssZ",S=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],x=/([\+\-]|\d\d)/gi,T="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),N={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},C={},k="DDD w W M D d".split(" "),L="M D H h m s w W".split(" "),A={M:function(){return this.month()+1},MMM:function(e){return this.lang().monthsShort(this,e)},MMMM:function(e){return this.lang().months(this,e)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(e){return this.lang().weekdaysMin(this,e)},ddd:function(e){return this.lang().weekdaysShort(this,e)},dddd:function(e){return this.lang().weekdays(this,e)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return j(this.year()%100,2)},YYYY:function(){return j(this.year(),4)},YYYYY:function(){return j(this.year(),5)},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return j(~~(this.milliseconds()/10),2)},SSS:function(){return j(this.milliseconds(),3)},Z:function(){var e=-this.zone(),t="+";return e<0&&(e=-e,t="-"),t+j(~~(e/60),2)+":"+j(~~e%60,2)},ZZ:function(){var e=-this.zone(),t="+";return e<0&&(e=-e,t="-"),t+j(~~(10*e/6),4)},X:function(){return this.unix()}};while(k.length)i=k.pop(),A[i+"o"]=M(A[i]);while(L.length)i=L.pop(),A[i+i]=O(A[i],2);A.DDDD=O(A.DDD,3),_.prototype={set:function(e){var t,n;for(n in e)t=e[n],typeof t=="function"?this[n]=t:this["_"+n]=t},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(e){return this._months[e.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(e){return this._monthsShort[e.month()]},monthsParse:function(e){var n,r,i,s;this._monthsParse||(this._monthsParse=[]);for(n=0;n<12;n++){this._monthsParse[n]||(r=t([2e3,n]),i="^"+this.months(r,"")+"|^"+this.monthsShort(r,""),this._monthsParse[n]=new RegExp(i.replace(".",""),"i"));if(this._monthsParse[n].test(e))return n}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(e){return this._weekdays[e.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(e){return this._weekdaysShort[e.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(e){return this._weekdaysMin[e.day()]},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(e){var t=this._longDateFormat[e];return!t&&this._longDateFormat[e.toUpperCase()]&&(t=this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e]=t),t},meridiem:function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},calendar:function(e,t){var n=this._calendar[e];return typeof n=="function"?n.apply(t):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(e,t,n,r){var i=this._relativeTime[n];return typeof i=="function"?i(e,t,n,r):i.replace(/%d/i,e)},pastFuture:function(e,t){var n=this._relativeTime[e>0?"future":"past"];return typeof n=="function"?n(t):n.replace(/%s/i,t)},ordinal:function(e){return this._ordinal.replace("%d",e)},_ordinal:"%d",preparse:function(e){return e},postformat:function(e){return e},week:function(e){return tt(e,this._week.dow,this._week.doy)},_week:{dow:0,doy:6}},t=function(e,t,n){return nt({_i:e,_f:t,_l:n,_isUTC:!1})},t.utc=function(e,t,n){return nt({_useUTC:!0,_isUTC:!0,_l:n,_i:e,_f:t})},t.unix=function(e){return t(e*1e3)},t.duration=function(e,n){var r=t.isDuration(e),i=typeof e=="number",s=r?e._data:i?{}:e,o;return i&&(n?s[n]=e:s.milliseconds=e),o=new P(s),r&&e.hasOwnProperty("_lang")&&(o._lang=e._lang),o},t.version=n,t.defaultFormat=E,t.lang=function(e,n){var r;if(!e)return t.fn._lang._abbr;n?R(e,n):s[e]||U(e),t.duration.fn._lang=t.fn._lang=U(e)},t.langData=function(e){return e&&e._lang&&e._lang._abbr&&(e=e._lang._abbr),U(e)},t.isMoment=function(e){return e instanceof D},t.isDuration=function(e){return e instanceof P},t.fn=D.prototype={clone:function(){return t(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._d},toJSON:function(){return t.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var e=this;return[e.year(),e.month(),e.date(),e.hours(),e.minutes(),e.seconds(),e.milliseconds()]},isValid:function(){return this._isValid==null&&(this._a?this._isValid=!q(this._a,(this._isUTC?t.utc(this._a):t(this._a)).toArray()):this._isValid=!isNaN(this._d.getTime())),!!this._isValid},utc:function(){return this._isUTC=!0,this},local:function(){return this._isUTC=!1,this},format:function(e){var n=X(this,e||t.defaultFormat);return this.lang().postformat(n)},add:function(e,n){var r;return typeof e=="string"?r=t.duration(+n,e):r=t.duration(e,n),F(this,r,1),this},subtract:function(e,n){var r;return typeof e=="string"?r=t.duration(+n,e):r=t.duration(e,n),F(this,r,-1),this},diff:function(e,n,r){var i=this._isUTC?t(e).utc():t(e).local(),s=(this.zone()-i.zone())*6e4,o,u;return n&&(n=n.replace(/s$/,"")),n==="year"||n==="month"?(o=(this.daysInMonth()+i.daysInMonth())*432e5,u=(this.year()-i.year())*12+(this.month()-i.month()),u+=(this-t(this).startOf("month")-(i-t(i).startOf("month")))/o,n==="year"&&(u/=12)):(o=this-i-s,u=n==="second"?o/1e3:n==="minute"?o/6e4:n==="hour"?o/36e5:n==="day"?o/864e5:n==="week"?o/6048e5:o),r?u:B(u)},from:function(e,n){return t.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!n)},fromNow:function(e){return this.from(t(),e)},calendar:function(){var e=this.diff(t().startOf("day"),"days",!0),n=e<-6?"sameElse":e<-1?"lastWeek":e<0?"lastDay":e<1?"sameDay":e<2?"nextDay":e<7?"nextWeek":"sameElse";return this.format(this.lang().calendar(n,this))},isLeapYear:function(){var e=this.year();return e%4===0&&e%100!==0||e%400===0},isDST:function(){return this.zone()<t([this.year()]).zone()||this.zone()<t([this.year(),5]).zone()},day:function(e){var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e==null?t:this.add({d:e-t})},startOf:function(e){e=e.replace(/s$/,"");switch(e){case"year":this.month(0);case"month":this.date(1);case"week":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return e==="week"&&this.day(0),this},endOf:function(e){return this.startOf(e).add(e.replace(/s?$/,"s"),1).subtract("ms",1)},isAfter:function(e,n){return n=typeof n!="undefined"?n:"millisecond",+this.clone().startOf(n)>+t(e).startOf(n)},isBefore:function(e,n){return n=typeof n!="undefined"?n:"millisecond",+this.clone().startOf(n)<+t(e).startOf(n)},isSame:function(e,n){return n=typeof n!="undefined"?n:"millisecond",+this.clone().startOf(n)===+t(e).startOf(n)},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return t.utc([this.year(),this.month()+1,0]).date()},dayOfYear:function(e){var n=r((t(this).startOf("day")-t(this).startOf("year"))/864e5)+1;return e==null?n:this.add("d",e-n)},isoWeek:function(e){var t=tt(this,1,4);return e==null?t:this.add("d",(e-t)*7)},week:function(e){var t=this.lang().week(this);return e==null?t:this.add("d",(e-t)*7)},lang:function(t){return t===e?this._lang:(this._lang=U(t),this)}};for(i=0;i<T.length;i++)rt(T[i].toLowerCase().replace(/s$/,""),T[i]);rt("year","FullYear"),t.fn.days=t.fn.day,t.fn.weeks=t.fn.week,t.fn.isoWeeks=t.fn.isoWeek,t.duration.fn=P.prototype={weeks:function(){return B(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*864e5+this._months*2592e6},humanize:function(e){var t=+this,n=et(t,!e,this.lang());return e&&(n=this.lang().pastFuture(t,n)),this.lang().postformat(n)},lang:t.fn.lang};for(i in N)N.hasOwnProperty(i)&&(st(i,N[i]),it(i.toLowerCase()));st("Weeks",6048e5),t.lang("en",{ordinal:function(e){var t=e%10,n=~~(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}}),o&&(module.exports=t),typeof ender=="undefined"&&(this.moment=t),typeof define=="function"&&define.amd&&define("moment",[],function(){return t})}).call(this);
//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);

;(function(factory) {

  if (typeof module === 'function') {
    module.exports = factory(this.jQuery || require('jquery'));
  } else if (typeof define === 'function' && define.amd) {
    define(['jquery'], function($) {
      return factory($);
    });
  } else {
    this.NProgress = factory(this.jQuery);
  }

})(function($) {
  var NProgress = {};

  NProgress.version = '0.1.2';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    $.extend(Settings, options);
    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var $progress = NProgress.render(!started),
        $bar      = $progress.find('[role="bar"]'),
        speed     = Settings.speed,
        ease      = Settings.easing;

    $progress[0].offsetWidth; /* Repaint */

    $progress.queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      $bar.css(barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        $progress.css({ transition: 'none', opacity: 1 });
        $progress[0].offsetWidth; /* Repaint */

        setTimeout(function() {
          $progress.css({ transition: 'all '+speed+'ms linear', opacity: 0 });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   * 
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;
    
    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() == "resolved") {
        return this;
      }
      
      if (current == 0) {
        NProgress.start();
      }
      
      initial++;
      current++;
      
      $promise.always(function() {
        current--;
        if (current == 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });
      
      return this;
    };
    
  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return $("#nprogress");
    $('html').addClass('nprogress-busy');

    var $el = $("<div id='nprogress'>")
      .html(Settings.template);

    var perc = fromStart ? '-100' : toBarPerc(NProgress.status || 0);

    $el.find('[role="bar"]').css({
      transition: 'all 0 linear',
      transform: 'translate3d('+perc+'%,0,0)'
    });

    if (!Settings.showSpinner)
      $el.find('[role="spinner"]').remove();

    $el.appendTo(document.body);

    return $el;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    $('html').removeClass('nprogress-busy');
    $('#nprogress').remove();
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return ($("#nprogress").length > 0);
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  return NProgress;
});

/*
 AngularJS v1.1.5
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(M,T,p){'use strict';function lc(){var b=M.angular;M.angular=mc;return b}function Xa(b){return!b||typeof b.length!=="number"?!1:typeof b.hasOwnProperty!="function"&&typeof b.constructor!="function"?!0:b instanceof R||ga&&b instanceof ga||Ea.call(b)!=="[object Object]"||typeof b.callee==="function"}function n(b,a,c){var d;if(b)if(H(b))for(d in b)d!="prototype"&&d!="length"&&d!="name"&&b.hasOwnProperty(d)&&a.call(c,b[d],d);else if(b.forEach&&b.forEach!==n)b.forEach(a,c);else if(Xa(b))for(d=
0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function qb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function nc(b,a,c){for(var d=qb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function rb(b){return function(a,c){b(c,a)}}function Fa(){for(var b=ba.length,a;b;){b--;a=ba[b].charCodeAt(0);if(a==57)return ba[b]="A",ba.join("");if(a==90)ba[b]="0";else return ba[b]=String.fromCharCode(a+1),ba.join("")}ba.unshift("0");
return ba.join("")}function sb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function t(b){var a=b.$$hashKey;n(arguments,function(a){a!==b&&n(a,function(a,c){b[c]=a})});sb(b,a);return b}function N(b){return parseInt(b,10)}function tb(b,a){return t(new (t(function(){},{prototype:b})),a)}function q(){}function qa(b){return b}function S(b){return function(){return b}}function C(b){return typeof b=="undefined"}function B(b){return typeof b!="undefined"}function L(b){return b!=null&&typeof b=="object"}function E(b){return typeof b==
"string"}function Ya(b){return typeof b=="number"}function ra(b){return Ea.apply(b)=="[object Date]"}function F(b){return Ea.apply(b)=="[object Array]"}function H(b){return typeof b=="function"}function sa(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function U(b){return E(b)?b.replace(/^\s*/,"").replace(/\s*$/,""):b}function oc(b){return b&&(b.nodeName||b.bind&&b.find)}function Za(b,a,c){var d=[];n(b,function(b,g,i){d.push(a.call(c,b,g,i))});return d}function Ga(b,a){if(b.indexOf)return b.indexOf(a);
for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function ta(b,a){var c=Ga(b,a);c>=0&&b.splice(c,1);return a}function V(b,a){if(sa(b)||b&&b.$evalAsync&&b.$watch)throw Error("Can't copy Window or Scope");if(a){if(b===a)throw Error("Can't copy equivalent objects or arrays");if(F(b))for(var c=a.length=0;c<b.length;c++)a.push(V(b[c]));else{c=a.$$hashKey;n(a,function(b,c){delete a[c]});for(var d in b)a[d]=V(b[d]);sb(a,c)}}else(a=b)&&(F(b)?a=V(b,[]):ra(b)?a=new Date(b.getTime()):L(b)&&(a=V(b,{})));
return a}function pc(b,a){var a=a||{},c;for(c in b)b.hasOwnProperty(c)&&c.substr(0,2)!=="$$"&&(a[c]=b[c]);return a}function ia(b,a){if(b===a)return!0;if(b===null||a===null)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&c=="object")if(F(b)){if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ia(b[d],a[d]))return!1;return!0}}else if(ra(b))return ra(a)&&b.getTime()==a.getTime();else{if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||sa(b)||sa(a))return!1;c={};for(d in b)if(!(d.charAt(0)===
"$"||H(b[d]))){if(!ia(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c[d]&&d.charAt(0)!=="$"&&a[d]!==p&&!H(a[d]))return!1;return!0}return!1}function $a(b,a){var c=arguments.length>2?ka.call(arguments,2):[];return H(a)&&!(a instanceof RegExp)?c.length?function(){return arguments.length?a.apply(b,c.concat(ka.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}:a}function qc(b,a){var c=a;/^\$+/.test(b)?c=p:sa(a)?c="$WINDOW":a&&T===a?c="$DOCUMENT":a&&a.$evalAsync&&
a.$watch&&(c="$SCOPE");return c}function ha(b,a){return JSON.stringify(b,qc,a?"  ":null)}function ub(b){return E(b)?JSON.parse(b):b}function ua(b){b&&b.length!==0?(b=I(""+b),b=!(b=="f"||b=="0"||b=="false"||b=="no"||b=="n"||b=="[]")):b=!1;return b}function va(b){b=w(b).clone();try{b.html("")}catch(a){}var c=w("<div>").append(b).html();try{return b[0].nodeType===3?I(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+I(b)})}catch(d){return I(c)}}function vb(b){var a={},c,d;n((b||
"").split("&"),function(b){b&&(c=b.split("="),d=decodeURIComponent(c[0]),a[d]=B(c[1])?decodeURIComponent(c[1]):!0)});return a}function wb(b){var a=[];n(b,function(b,d){a.push(wa(d,!0)+(b===!0?"":"="+wa(b,!0)))});return a.length?a.join("&"):""}function ab(b){return wa(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function wa(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function rc(b,
a){function c(a){a&&d.push(a)}var d=[b],e,g,i=["ng:app","ng-app","x-ng-app","data-ng-app"],f=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;n(i,function(a){i[a]=!0;c(T.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(n(b.querySelectorAll("."+a),c),n(b.querySelectorAll("."+a+"\\:"),c),n(b.querySelectorAll("["+a+"]"),c))});n(d,function(a){if(!e){var b=f.exec(" "+a.className+" ");b?(e=a,g=(b[2]||"").replace(/\s+/g,",")):n(a.attributes,function(b){if(!e&&i[b.name])e=a,g=b.value})}});e&&a(e,g?[g]:[])}
function xb(b,a){var c=function(){b=w(b);a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");var c=yb(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animator",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)});e.enabled(!0)}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(M&&!d.test(M.name))return c();M.name=M.name.replace(d,"");Ha.resumeBootstrap=function(b){n(b,function(b){a.push(b)});c()}}function bb(b,a){a=a||"_";return b.replace(sc,
function(b,d){return(d?a:"")+b.toLowerCase()})}function cb(b,a,c){if(!b)throw Error("Argument '"+(a||"?")+"' is "+(c||"required"));return b}function xa(b,a,c){c&&F(b)&&(b=b[b.length-1]);cb(H(b),a,"not a function, got "+(b&&typeof b=="object"?b.constructor.name||"Object":typeof b));return b}function tc(b){function a(a,b,e){return a[b]||(a[b]=e())}return a(a(b,"angular",Object),"module",function(){var b={};return function(d,e,g){e&&b.hasOwnProperty(d)&&(b[d]=null);return a(b,d,function(){function a(c,
d,e){return function(){b[e||"push"]([c,d,arguments]);return m}}if(!e)throw Error("No module: "+d);var b=[],c=[],j=a("$injector","invoke"),m={_invokeQueue:b,_runBlocks:c,requires:e,name:d,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animationProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider",
"directive"),config:j,run:function(a){c.push(a);return this}};g&&j(g);return m})}})}function Ia(b){return b.replace(uc,function(a,b,d,e){return e?d.toUpperCase():d}).replace(vc,"Moz$1")}function db(b,a){function c(){var e;for(var b=[this],c=a,i,f,h,j,m,k;b.length;){i=b.shift();f=0;for(h=i.length;f<h;f++){j=w(i[f]);c?j.triggerHandler("$destroy"):c=!c;m=0;for(e=(k=j.children()).length,j=e;m<j;m++)b.push(ga(k[m]))}}return d.apply(this,arguments)}var d=ga.fn[b],d=d.$original||d;c.$original=d;ga.fn[b]=
c}function R(b){if(b instanceof R)return b;if(!(this instanceof R)){if(E(b)&&b.charAt(0)!="<")throw Error("selectors not implemented");return new R(b)}if(E(b)){var a=T.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);eb(this,a.childNodes);this.remove()}else eb(this,b)}function fb(b){return b.cloneNode(!0)}function ya(b){zb(b);for(var a=0,b=b.childNodes||[];a<b.length;a++)ya(b[a])}function Ab(b,a,c){var d=ca(b,"events");ca(b,"handle")&&(C(a)?n(d,function(a,c){gb(b,
c,a);delete d[c]}):C(c)?(gb(b,a,d[a]),delete d[a]):ta(d[a],c))}function zb(b){var a=b[Ja],c=Ka[a];c&&(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Ab(b)),delete Ka[a],b[Ja]=p)}function ca(b,a,c){var d=b[Ja],d=Ka[d||-1];if(B(c))d||(b[Ja]=d=++wc,d=Ka[d]={}),d[a]=c;else return d&&d[a]}function Bb(b,a,c){var d=ca(b,"data"),e=B(c),g=!e&&B(a),i=g&&!L(a);!d&&!i&&ca(b,"data",d={});if(e)d[a]=c;else if(g)if(i)return d&&d[a];else t(d,a);else return d}function La(b,a){return(" "+b.className+" ").replace(/[\n\t]/g,
" ").indexOf(" "+a+" ")>-1}function Cb(b,a){a&&n(a.split(" "),function(a){b.className=U((" "+b.className+" ").replace(/[\n\t]/g," ").replace(" "+U(a)+" "," "))})}function Db(b,a){a&&n(a.split(" "),function(a){if(!La(b,a))b.className=U(b.className+" "+U(a))})}function eb(b,a){if(a)for(var a=!a.nodeName&&B(a.length)&&!sa(a)?a:[a],c=0;c<a.length;c++)b.push(a[c])}function Eb(b,a){return Ma(b,"$"+(a||"ngController")+"Controller")}function Ma(b,a,c){b=w(b);for(b[0].nodeType==9&&(b=b.find("html"));b.length;){if(c=
b.data(a))return c;b=b.parent()}}function Fb(b,a){var c=Na[a.toLowerCase()];return c&&Gb[b.nodeName]&&c}function xc(b,a){var c=function(c,e){if(!c.preventDefault)c.preventDefault=function(){c.returnValue=!1};if(!c.stopPropagation)c.stopPropagation=function(){c.cancelBubble=!0};if(!c.target)c.target=c.srcElement||T;if(C(c.defaultPrevented)){var g=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||
c.returnValue==!1};n(a[e||c.type],function(a){a.call(b,c)});Z<=8?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function la(b){var a=typeof b,c;if(a=="object"&&b!==null)if(typeof(c=b.$$hashKey)=="function")c=b.$$hashKey();else{if(c===p)c=b.$$hashKey=Fa()}else c=b;return a+":"+c}function za(b){n(b,this.put,this)}function Hb(b){var a,c;if(typeof b=="function"){if(!(a=b.$inject))a=
[],c=b.toString().replace(yc,""),c=c.match(zc),n(c[1].split(Ac),function(b){b.replace(Bc,function(b,c,d){a.push(d)})}),b.$inject=a}else F(b)?(c=b.length-1,xa(b[c],"fn"),a=b.slice(0,c)):xa(b,"fn",!0);return a}function yb(b){function a(a){return function(b,c){if(L(b))n(b,rb(a));else return a(b,c)}}function c(a,b){if(H(b)||F(b))b=k.instantiate(b);if(!b.$get)throw Error("Provider "+a+" must define $get factory method.");return m[a+f]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[];n(a,function(a){if(!j.get(a))if(j.put(a,
!0),E(a)){var c=Aa(a);b=b.concat(e(c.requires)).concat(c._runBlocks);try{for(var d=c._invokeQueue,c=0,f=d.length;c<f;c++){var g=d[c],o=k.get(g[0]);o[g[1]].apply(o,g[2])}}catch(h){throw h.message&&(h.message+=" from "+a),h;}}else if(H(a))try{b.push(k.invoke(a))}catch(l){throw l.message&&(l.message+=" from "+a),l;}else if(F(a))try{b.push(k.invoke(a))}catch(i){throw i.message&&(i.message+=" from "+String(a[a.length-1])),i;}else xa(a,"module")});return b}function g(a,b){function c(d){if(typeof d!=="string")throw Error("Service name expected");
if(a.hasOwnProperty(d)){if(a[d]===i)throw Error("Circular dependency: "+h.join(" <- "));return a[d]}else try{return h.unshift(d),a[d]=i,a[d]=b(d)}finally{h.shift()}}function d(a,b,e){var f=[],j=Hb(a),g,o,h;o=0;for(g=j.length;o<g;o++)h=j[o],f.push(e&&e.hasOwnProperty(h)?e[h]:c(h));a.$inject||(a=a[g]);switch(b?-1:f.length){case 0:return a();case 1:return a(f[0]);case 2:return a(f[0],f[1]);case 3:return a(f[0],f[1],f[2]);case 4:return a(f[0],f[1],f[2],f[3]);case 5:return a(f[0],f[1],f[2],f[3],f[4]);
case 6:return a(f[0],f[1],f[2],f[3],f[4],f[5]);case 7:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6]);case 8:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7]);case 9:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8]);case 10:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9]);default:return a.apply(b,f)}}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(F(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return L(e)?e:c},get:c,annotate:Hb,has:function(b){return m.hasOwnProperty(b+
f)||a.hasOwnProperty(b)}}}var i={},f="Provider",h=[],j=new za,m={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,S(b))}),constant:a(function(a,b){m[a]=b;l[a]=b}),decorator:function(a,b){var c=k.get(a+f),d=c.$get;c.$get=function(){var a=u.invoke(d,c);return u.invoke(b,null,{$delegate:a})}}}},k=m.$injector=g(m,function(){throw Error("Unknown provider: "+h.join(" <- "));}),l={},u=l.$injector=
g(l,function(a){a=k.get(a+f);return u.invoke(a.$get,a)});n(e(b),function(a){u.invoke(a||q)});return u}function Cc(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;n(a,function(a){!b&&I(a.nodeName)==="a"&&(b=a)});return b}function g(){var b=c.hash(),d;b?(d=i.getElementById(b))?d.scrollIntoView():(d=e(i.getElementsByName(b)))?d.scrollIntoView():b==="top"&&a.scrollTo(0,0):a.scrollTo(0,0)}var i=a.document;b&&d.$watch(function(){return c.hash()},
function(){d.$evalAsync(g)});return g}]}function Ib(b){this.register=function(a,c){b.factory(Ia(a)+"Animation",c)};this.$get=["$injector",function(a){return function(b){if(b&&(b=Ia(b)+"Animation",a.has(b)))return a.get(b)}}]}function Dc(b,a,c,d){function e(a){try{a.apply(null,ka.call(arguments,1))}finally{if(o--,o===0)for(;z.length;)try{z.pop()()}catch(b){c.error(b)}}}function g(a,b){(function s(){n(r,function(a){a()});y=b(s,a)})()}function i(){x!=f.url()&&(x=f.url(),n(v,function(a){a(f.url())}))}
var f=this,h=a[0],j=b.location,m=b.history,k=b.setTimeout,l=b.clearTimeout,u={};f.isMock=!1;var o=0,z=[];f.$$completeOutstandingRequest=e;f.$$incOutstandingRequestCount=function(){o++};f.notifyWhenNoOutstandingRequests=function(a){n(r,function(a){a()});o===0?a():z.push(a)};var r=[],y;f.addPollFn=function(a){C(y)&&g(100,k);r.push(a);return a};var x=j.href,W=a.find("base");f.url=function(a,b){if(a){if(x!=a)return x=a,d.history?b?m.replaceState(null,"",a):(m.pushState(null,"",a),W.attr("href",W.attr("href"))):
b?j.replace(a):j.href=a,f}else return j.href.replace(/%27/g,"'")};var v=[],A=!1;f.onUrlChange=function(a){A||(d.history&&w(b).bind("popstate",i),d.hashchange?w(b).bind("hashchange",i):f.addPollFn(i),A=!0);v.push(a);return a};f.baseHref=function(){var a=W.attr("href");return a?a.replace(/^https?\:\/\/[^\/]*/,""):""};var G={},D="",$=f.baseHref();f.cookies=function(a,b){var d,e,f,j;if(a)if(b===p)h.cookie=escape(a)+"=;path="+$+";expires=Thu, 01 Jan 1970 00:00:00 GMT";else{if(E(b))d=(h.cookie=escape(a)+
"="+escape(b)+";path="+$).length+1,d>4096&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!")}else{if(h.cookie!==D){D=h.cookie;d=D.split("; ");G={};for(f=0;f<d.length;f++)e=d[f],j=e.indexOf("="),j>0&&(a=unescape(e.substring(0,j)),G[a]===p&&(G[a]=unescape(e.substring(j+1))))}return G}};f.defer=function(a,b){var c;o++;c=k(function(){delete u[c];e(a)},b||0);u[c]=!0;return c};f.defer.cancel=function(a){return u[a]?(delete u[a],l(a),e(q),!0):!1}}function Ec(){this.$get=
["$window","$log","$sniffer","$document",function(b,a,c,d){return new Dc(b,d,a,c)}]}function Fc(){this.$get=function(){function b(b,d){function e(a){if(a!=k){if(l){if(l==a)l=a.n}else l=a;g(a.n,a.p);g(a,k);k=a;k.n=null}}function g(a,b){if(a!=b){if(a)a.p=b;if(b)b.n=a}}if(b in a)throw Error("cacheId "+b+" taken");var i=0,f=t({},d,{id:b}),h={},j=d&&d.capacity||Number.MAX_VALUE,m={},k=null,l=null;return a[b]={put:function(a,b){var c=m[a]||(m[a]={key:a});e(c);if(!C(b))return a in h||i++,h[a]=b,i>j&&this.remove(l.key),
b},get:function(a){var b=m[a];if(b)return e(b),h[a]},remove:function(a){var b=m[a];if(b){if(b==k)k=b.p;if(b==l)l=b.n;g(b.n,b.p);delete m[a];delete h[a];i--}},removeAll:function(){h={};i=0;m={};k=l=null},destroy:function(){m=f=h=null;delete a[b]},info:function(){return t({},f,{size:i})}}}var a={};b.info=function(){var b={};n(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Gc(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function Jb(b){var a=
{},c="Directive",d=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,e=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,g="Template must have exactly one root element. was: ",i=/^\s*(https?|ftp|mailto|file):/;this.directive=function h(d,e){E(d)?(cb(e,"directive"),a.hasOwnProperty(d)||(a[d]=[],b.factory(d+c,["$injector","$exceptionHandler",function(b,c){var e=[];n(a[d],function(a){try{var g=b.invoke(a);if(H(g))g={compile:S(g)};else if(!g.compile&&g.link)g.compile=S(g.link);g.priority=g.priority||0;g.name=g.name||d;g.require=
g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(h){c(h)}});return e}])),a[d].push(e)):n(d,rb(h));return this};this.urlSanitizationWhitelist=function(a){return B(a)?(i=a,this):i};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document",function(b,j,m,k,l,u,o,z,r){function y(a,b,c){a instanceof w||(a=w(a));n(a,function(b,c){b.nodeType==3&&b.nodeValue.match(/\S+/)&&(a[c]=w(b).wrap("<span></span>").parent()[0])});
var d=W(a,b,a,c);return function(b,c){cb(b,"scope");for(var e=c?Ba.clone.call(a):a,j=0,g=e.length;j<g;j++){var h=e[j];(h.nodeType==1||h.nodeType==9)&&e.eq(j).data("$scope",b)}x(e,"ng-scope");c&&c(e,b);d&&d(b,e,e);return e}}function x(a,b){try{a.addClass(b)}catch(c){}}function W(a,b,c,d){function e(a,c,d,g){var h,i,k,l,o,m,u,z=[];o=0;for(m=c.length;o<m;o++)z.push(c[o]);u=o=0;for(m=j.length;o<m;u++)i=z[u],c=j[o++],h=j[o++],c?(c.scope?(k=a.$new(L(c.scope)),w(i).data("$scope",k)):k=a,(l=c.transclude)||
!g&&b?c(h,k,i,d,function(b){return function(c){var d=a.$new();d.$$transcluded=!0;return b(d,c).bind("$destroy",$a(d,d.$destroy))}}(l||b)):c(h,k,i,p,g)):h&&h(a,i.childNodes,p,g)}for(var j=[],g,h,k,i=0;i<a.length;i++)h=new ma,g=v(a[i],[],h,d),h=(g=g.length?A(g,a[i],h,b,c):null)&&g.terminal||!a[i].childNodes||!a[i].childNodes.length?null:W(a[i].childNodes,g?g.transclude:b),j.push(g),j.push(h),k=k||g||h;return k?e:null}function v(a,b,c,j){var g=c.$attr,h;switch(a.nodeType){case 1:G(b,da(hb(a).toLowerCase()),
"E",j);var i,k,l;h=a.attributes;for(var o=0,m=h&&h.length;o<m;o++)if(i=h[o],i.specified)k=i.name,l=da(k),Y.test(l)&&(k=l.substr(6).toLowerCase()),l=da(k.toLowerCase()),g[l]=k,c[l]=i=U(Z&&k=="href"?decodeURIComponent(a.getAttribute(k,2)):i.value),Fb(a,l)&&(c[l]=!0),s(a,b,i,l),G(b,l,"A",j);a=a.className;if(E(a)&&a!=="")for(;h=e.exec(a);)l=da(h[2]),G(b,l,"C",j)&&(c[l]=U(h[3])),a=a.substr(h.index+h[0].length);break;case 3:P(b,a.nodeValue);break;case 8:try{if(h=d.exec(a.nodeValue))l=da(h[1]),G(b,l,"M",
j)&&(c[l]=U(h[2]))}catch(u){}}b.sort(K);return b}function A(a,b,c,d,e){function h(a,b){if(a)a.require=s.require,z.push(a);if(b)b.require=s.require,ea.push(b)}function i(a,b){var c,d="data",e=!1;if(E(a)){for(;(c=a.charAt(0))=="^"||c=="?";)a=a.substr(1),c=="^"&&(d="inheritedData"),e=e||c=="?";c=b[d]("$"+a+"Controller");if(!c&&!e)throw Error("No controller: "+a);}else F(a)&&(c=[],n(a,function(a){c.push(i(a,b))}));return c}function k(a,d,e,g,h){var l,v,r,D,x;l=b===e?c:pc(c,new ma(w(e),c.$attr));v=l.$$element;
if(K){var y=/^\s*([@=&])(\??)\s*(\w*)\s*$/,s=d.$parent||d;n(K.scope,function(a,b){var c=a.match(y)||[],e=c[3]||b,g=c[2]=="?",c=c[1],h,k,i;d.$$isolateBindings[b]=c+e;switch(c){case "@":l.$observe(e,function(a){d[b]=a});l.$$observers[e].$$scope=s;l[e]&&(d[b]=j(l[e])(s));break;case "=":if(g&&!l[e])break;k=u(l[e]);i=k.assign||function(){h=d[b]=k(s);throw Error(Kb+l[e]+" (directive: "+K.name+")");};h=d[b]=k(s);d.$watch(function(){var a=k(s);a!==d[b]&&(a!==h?h=d[b]=a:i(s,a=h=d[b]));return a});break;case "&":k=
u(l[e]);d[b]=function(a){return k(s,a)};break;default:throw Error("Invalid isolate scope definition for directive "+K.name+": "+a);}})}q&&n(q,function(a){var b={$scope:d,$element:v,$attrs:l,$transclude:h};x=a.controller;x=="@"&&(x=l[a.name]);v.data("$"+a.name+"Controller",o(x,b))});g=0;for(r=z.length;g<r;g++)try{D=z[g],D(d,v,l,D.require&&i(D.require,v))}catch(Hc){m(Hc,va(v))}a&&a(d,e.childNodes,p,h);g=0;for(r=ea.length;g<r;g++)try{D=ea[g],D(d,v,l,D.require&&i(D.require,v))}catch(J){m(J,va(v))}}for(var l=
-Number.MAX_VALUE,z=[],ea=[],r=null,K=null,W=null,J=c.$$element=w(b),s,A,Y,G,P=d,q,na,t,B=0,C=a.length;B<C;B++){s=a[B];Y=p;if(l>s.priority)break;if(t=s.scope)O("isolated scope",K,s,J),L(t)&&(x(J,"ng-isolate-scope"),K=s),x(J,"ng-scope"),r=r||s;A=s.name;if(t=s.controller)q=q||{},O("'"+A+"' controller",q[A],s,J),q[A]=s;if(t=s.transclude)O("transclusion",G,s,J),G=s,l=s.priority,t=="element"?(Y=w(b),J=c.$$element=w(T.createComment(" "+A+": "+c[A]+" ")),b=J[0],ja(e,w(Y[0]),b),P=y(Y,d,l)):(Y=w(fb(b)).contents(),
J.html(""),P=y(Y,d));if(s.template)if(O("template",W,s,J),W=s,t=H(s.template)?s.template(J,c):s.template,t=Lb(t),s.replace){Y=w("<div>"+U(t)+"</div>").contents();b=Y[0];if(Y.length!=1||b.nodeType!==1)throw Error(g+t);ja(e,J,b);A={$attr:{}};a=a.concat(v(b,a.splice(B+1,a.length-(B+1)),A));D(c,A);C=a.length}else J.html(t);if(s.templateUrl)O("template",W,s,J),W=s,k=$(a.splice(B,a.length-B),k,J,c,e,s.replace,P),C=a.length;else if(s.compile)try{na=s.compile(J,c,P),H(na)?h(null,na):na&&h(na.pre,na.post)}catch(I){m(I,
va(J))}if(s.terminal)k.terminal=!0,l=Math.max(l,s.priority)}k.scope=r&&r.scope;k.transclude=G&&P;return k}function G(d,e,j,g){var l=!1;if(a.hasOwnProperty(e))for(var k,e=b.get(e+c),i=0,o=e.length;i<o;i++)try{if(k=e[i],(g===p||g>k.priority)&&k.restrict.indexOf(j)!=-1)d.push(k),l=!0}catch(u){m(u)}return l}function D(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;n(a,function(d,e){e.charAt(0)!="$"&&(b[e]&&(d+=(e==="style"?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});n(b,function(b,j){j=="class"?(x(e,b),a["class"]=
(a["class"]?a["class"]+" ":"")+b):j=="style"?e.attr("style",e.attr("style")+";"+b):j.charAt(0)!="$"&&!a.hasOwnProperty(j)&&(a[j]=b,d[j]=c[j])})}function $(a,b,c,d,e,j,h){var i=[],o,m,u=c[0],z=a.shift(),r=t({},z,{controller:null,templateUrl:null,transclude:null,scope:null}),z=H(z.templateUrl)?z.templateUrl(c,d):z.templateUrl;c.html("");k.get(z,{cache:l}).success(function(l){var k,z,l=Lb(l);if(j){z=w("<div>"+U(l)+"</div>").contents();k=z[0];if(z.length!=1||k.nodeType!==1)throw Error(g+l);l={$attr:{}};
ja(e,c,k);v(k,a,l);D(d,l)}else k=u,c.html(l);a.unshift(r);o=A(a,k,d,h);for(m=W(c[0].childNodes,h);i.length;){var ea=i.shift(),l=i.shift();z=i.shift();var x=i.shift(),y=k;l!==u&&(y=fb(k),ja(z,w(l),y));o(function(){b(m,ea,y,e,x)},ea,y,e,x)}i=null}).error(function(a,b,c,d){throw Error("Failed to load template: "+d.url);});return function(a,c,d,e,j){i?(i.push(c),i.push(d),i.push(e),i.push(j)):o(function(){b(m,c,d,e,j)},c,d,e,j)}}function K(a,b){return b.priority-a.priority}function O(a,b,c,d){if(b)throw Error("Multiple directives ["+
b.name+", "+c.name+"] asking for "+a+" on: "+va(d));}function P(a,b){var c=j(b,!0);c&&a.push({priority:0,compile:S(function(a,b){var d=b.parent(),e=d.data("$binding")||[];e.push(c);x(d.data("$binding",e),"ng-binding");a.$watch(c,function(a){b[0].nodeValue=a})})})}function s(a,b,c,d){var e=j(c,!0);e&&b.push({priority:100,compile:S(function(a,b,c){b=c.$$observers||(c.$$observers={});if(e=j(c[d],!0))c[d]=e(a),(b[d]||(b[d]=[])).$$inter=!0,(c.$$observers&&c.$$observers[d].$$scope||a).$watch(e,function(a){c.$set(d,
a)})})})}function ja(a,b,c){var d=b[0],e=d.parentNode,j,g;if(a){j=0;for(g=a.length;j<g;j++)if(a[j]==d){a[j]=c;break}}e&&e.replaceChild(c,d);c[w.expando]=d[w.expando];b[0]=c}var ma=function(a,b){this.$$element=a;this.$attr=b||{}};ma.prototype={$normalize:da,$set:function(a,b,c,d){var e=Fb(this.$$element[0],a),j=this.$$observers;e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=bb(a,"-"));if(hb(this.$$element[0])==="A"&&a==="href")q.setAttribute("href",
b),e=q.href,e.match(i)||(this[a]=b="unsafe:"+e);c!==!1&&(b===null||b===p?this.$$element.removeAttr(d):this.$$element.attr(d,b));j&&n(j[a],function(a){try{a(b)}catch(c){m(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);z.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var q=r[0].createElement("a"),ea=j.startSymbol(),J=j.endSymbol(),Lb=ea=="{{"||J=="}}"?qa:function(a){return a.replace(/\{\{/g,ea).replace(/}}/g,J)},Y=/^ngAttr[A-Z]/;return y}]}
function da(b){return Ia(b.replace(Ic,""))}function Jc(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){L(a)?t(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,g){var i,f;E(e)&&(f=e.match(a),i=f[1],f=f[3],e=b.hasOwnProperty(i)?b[i]:ib(g.$scope,i,!0)||ib(d,i,!0),xa(e,i,!0));i=c.instantiate(e,g);if(f){if(typeof g.$scope!=="object")throw Error('Can not export controller as "'+f+'". No scope object provided!');g.$scope[f]=i}return i}}]}function Kc(){this.$get=
["$window",function(b){return w(b.document)}]}function Lc(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Mc(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler",function(c,d){function e(e,h){for(var j,m,k=0,l=[],u=e.length,o=!1,z=[];k<u;)(j=e.indexOf(b,k))!=-1&&(m=e.indexOf(a,j+g))!=-1?(k!=j&&l.push(e.substring(k,j)),l.push(k=c(o=e.substring(j+g,
m))),k.exp=o,k=m+i,o=!0):(k!=u&&l.push(e.substring(k)),k=u);if(!(u=l.length))l.push(""),u=1;if(!h||o)return z.length=u,k=function(a){try{for(var b=0,c=u,j;b<c;b++){if(typeof(j=l[b])=="function")j=j(a),j==null||j==p?j="":typeof j!="string"&&(j=ha(j));z[b]=j}return z.join("")}catch(g){d(Error("Error while interpolating: "+e+"\n"+g.toString()))}},k.exp=e,k.parts=l,k}var g=b.length,i=a.length;e.startSymbol=function(){return b};e.endSymbol=function(){return a};return e}]}function Mb(b){for(var b=b.split("/"),
a=b.length;a--;)b[a]=ab(b[a]);return b.join("/")}function Nb(b,a){var c=jb.exec(b);a.$$protocol=c[1];a.$$host=c[3];a.$$port=N(c[5])||Oa[c[1]]||null}function Ob(b,a){var c=Pb.exec(b);a.$$path=decodeURIComponent(c[1]);a.$$search=vb(c[3]);a.$$hash=decodeURIComponent(c[5]||"");if(a.$$path&&a.$$path.charAt(0)!="/")a.$$path="/"+a.$$path}function fa(b,a,c){return a.indexOf(b)==0?a.substr(b.length):c}function Ca(b){var a=b.indexOf("#");return a==-1?b:b.substr(0,a)}function kb(b){return b.substr(0,Ca(b).lastIndexOf("/")+
1)}function Qb(b,a){var a=a||"",c=kb(b);this.$$parse=function(a){var b={};Nb(a,b);var g=fa(c,a);if(!E(g))throw Error('Invalid url "'+a+'", missing path prefix "'+c+'".');Ob(g,b);t(this,b);if(!this.$$path)this.$$path="/";this.$$compose()};this.$$compose=function(){var a=wb(this.$$search),b=this.$$hash?"#"+ab(this.$$hash):"";this.$$url=Mb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=fa(b,d))!==p)return d=e,(e=fa(a,e))!==p?c+(fa("/",e)||e):
b+d;else if((e=fa(c,d))!==p)return c+e;else if(c==d+"/")return c}}function lb(b,a){var c=kb(b);this.$$parse=function(d){Nb(d,this);var e=fa(b,d)||fa(c,d);if(!E(e))throw Error('Invalid url "'+d+'", does not start with "'+b+'".');e=e.charAt(0)=="#"?fa(a,e):e;if(!E(e))throw Error('Invalid url "'+d+'", missing hash prefix "'+a+'".');Ob(e,this);this.$$compose()};this.$$compose=function(){var c=wb(this.$$search),e=this.$$hash?"#"+ab(this.$$hash):"";this.$$url=Mb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=
b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Ca(b)==Ca(a))return a}}function Rb(b,a){lb.apply(this,arguments);var c=kb(b);this.$$rewrite=function(d){var e;if(b==Ca(d))return d;else if(e=fa(c,d))return b+a+e;else if(c===d+"/")return c}}function Pa(b){return function(){return this[b]}}function Sb(b,a){return function(c){if(C(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Nc(){var b="",a=!1;this.hashPrefix=function(a){return B(a)?(b=a,this):b};this.html5Mode=function(b){return B(b)?
(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,g){function i(a){c.$broadcast("$locationChangeSuccess",f.absUrl(),a)}var f,h=d.baseHref(),j=d.url();a?(h=h?j.substring(0,j.indexOf("/",j.indexOf("//")+2))+h:j,e=e.history?Qb:Rb):(h=Ca(j),e=lb);f=new e(h,"#"+b);f.$$parse(f.$$rewrite(j));g.bind("click",function(a){if(!a.ctrlKey&&!(a.metaKey||a.which==2)){for(var b=w(a.target);I(b[0].nodeName)!=="a";)if(b[0]===g[0]||!(b=b.parent())[0])return;var e=b.prop("href"),
j=f.$$rewrite(e);e&&!b.attr("target")&&j&&!a.isDefaultPrevented()&&(a.preventDefault(),j!=d.url()&&(f.$$parse(j),c.$apply(),M.angular["ff-684208-preventDefault"]=!0))}});f.absUrl()!=j&&d.url(f.absUrl(),!0);d.onUrlChange(function(a){f.absUrl()!=a&&(c.$broadcast("$locationChangeStart",a,f.absUrl()).defaultPrevented?d.url(f.absUrl()):(c.$evalAsync(function(){var b=f.absUrl();f.$$parse(a);i(b)}),c.$$phase||c.$digest()))});var m=0;c.$watch(function(){var a=d.url(),b=f.$$replace;if(!m||a!=f.absUrl())m++,
c.$evalAsync(function(){c.$broadcast("$locationChangeStart",f.absUrl(),a).defaultPrevented?f.$$parse(a):(d.url(f.absUrl(),b),i(a))});f.$$replace=!1;return m});return f}]}function Oc(){var b=!0,a=this;this.debugEnabled=function(a){return B(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&a.stack.indexOf(a.message)===-1?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=
c.console||{},e=b[a]||b.log||q;return e.apply?function(){var a=[];n(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,b)}}return{log:e("log"),warn:e("warn"),info:e("info"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function Pc(b,a){function c(a){return a.indexOf(r)!=-1}function d(a){a=a||1;return o+a<b.length?b.charAt(o+a):!1}function e(a){return"0"<=a&&a<="9"}function g(a){return a==" "||a=="\r"||a=="\t"||a=="\n"||
a=="\u000b"||a=="\u00a0"}function i(a){return"a"<=a&&a<="z"||"A"<=a&&a<="Z"||"_"==a||a=="$"}function f(a){return a=="-"||a=="+"||e(a)}function h(a,c,d){d=d||o;throw Error("Lexer Error: "+a+" at column"+(B(c)?"s "+c+"-"+o+" ["+b.substring(c,d)+"]":" "+d)+" in expression ["+b+"].");}function j(){for(var a="",c=o;o<b.length;){var j=I(b.charAt(o));if(j=="."||e(j))a+=j;else{var g=d();if(j=="e"&&f(g))a+=j;else if(f(j)&&g&&e(g)&&a.charAt(a.length-1)=="e")a+=j;else if(f(j)&&(!g||!e(g))&&a.charAt(a.length-
1)=="e")h("Invalid exponent");else break}o++}a*=1;l.push({index:c,text:a,json:!0,fn:function(){return a}})}function m(){for(var c="",d=o,f,j,h,k;o<b.length;){k=b.charAt(o);if(k=="."||i(k)||e(k))k=="."&&(f=o),c+=k;else break;o++}if(f)for(j=o;j<b.length;){k=b.charAt(j);if(k=="("){h=c.substr(f-d+1);c=c.substr(0,f-d);o=j;break}if(g(k))j++;else break}d={index:d,text:c};if(Da.hasOwnProperty(c))d.fn=d.json=Da[c];else{var m=Tb(c,a);d.fn=t(function(a,b){return m(a,b)},{assign:function(a,b){return Ub(a,c,b)}})}l.push(d);
h&&(l.push({index:f,text:".",json:!1}),l.push({index:f+1,text:h,json:!1}))}function k(a){var c=o;o++;for(var d="",e=a,f=!1;o<b.length;){var j=b.charAt(o);e+=j;if(f)j=="u"?(j=b.substring(o+1,o+5),j.match(/[\da-f]{4}/i)||h("Invalid unicode escape [\\u"+j+"]"),o+=4,d+=String.fromCharCode(parseInt(j,16))):(f=Qc[j],d+=f?f:j),f=!1;else if(j=="\\")f=!0;else if(j==a){o++;l.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}else d+=j;o++}h("Unterminated quote",c)}for(var l=[],u,o=0,z=[],
r,y=":";o<b.length;){r=b.charAt(o);if(c("\"'"))k(r);else if(e(r)||c(".")&&e(d()))j();else if(i(r)){if(m(),"{,".indexOf(y)!=-1&&z[0]=="{"&&(u=l[l.length-1]))u.json=u.text.indexOf(".")==-1}else if(c("(){}[].,;:?"))l.push({index:o,text:r,json:":[,".indexOf(y)!=-1&&c("{[")||c("}]:,")}),c("{[")&&z.unshift(r),c("}]")&&z.shift(),o++;else if(g(r)){o++;continue}else{var x=r+d(),n=x+d(2),v=Da[r],A=Da[x],G=Da[n];G?(l.push({index:o,text:n,fn:G}),o+=3):A?(l.push({index:o,text:x,fn:A}),o+=2):v?(l.push({index:o,
text:r,fn:v,json:"[,:".indexOf(y)!=-1&&c("+-")}),o+=1):h("Unexpected next character ",o,o+1)}y=r}return l}function Rc(b,a,c,d){function e(a,c){throw Error("Syntax Error: Token '"+c.text+"' "+a+" at column "+(c.index+1)+" of the expression ["+b+"] starting at ["+b.substring(c.index)+"].");}function g(){if(O.length===0)throw Error("Unexpected end of expression: "+b);return O[0]}function i(a,b,c,d){if(O.length>0){var e=O[0],f=e.text;if(f==a||f==b||f==c||f==d||!a&&!b&&!c&&!d)return e}return!1}function f(b,
c,d,f){return(b=i(b,c,d,f))?(a&&!b.json&&e("is not valid json",b),O.shift(),b):!1}function h(a){f(a)||e("is unexpected, expecting ["+a+"]",i())}function j(a,b){return t(function(c,d){return a(c,d,b)},{constant:b.constant})}function m(a,b,c){return t(function(d,e){return a(d,e)?b(d,e):c(d,e)},{constant:a.constant&&b.constant&&c.constant})}function k(a,b,c){return t(function(d,e){return b(d,e,a,c)},{constant:a.constant&&c.constant})}function l(){for(var a=[];;)if(O.length>0&&!i("}",")",";","]")&&a.push(w()),
!f(";"))return a.length==1?a[0]:function(b,c){for(var d,e=0;e<a.length;e++){var f=a[e];f&&(d=f(b,c))}return d}}function u(){for(var a=f(),b=c(a.text),d=[];;)if(a=f(":"))d.push(P());else{var e=function(a,c,e){for(var e=[e],f=0;f<d.length;f++)e.push(d[f](a,c));return b.apply(a,e)};return function(){return e}}}function o(){var a=z(),b,c;if(f("?"))if(b=o(),c=f(":"))return m(a,b,o());else e("expected :",c);else return a}function z(){for(var a=r(),b;;)if(b=f("||"))a=k(a,b.fn,r());else return a}function r(){var a=
y(),b;if(b=f("&&"))a=k(a,b.fn,r());return a}function y(){var a=x(),b;if(b=f("==","!=","===","!=="))a=k(a,b.fn,y());return a}function x(){var a;a=n();for(var b;b=f("+","-");)a=k(a,b.fn,n());if(b=f("<",">","<=",">="))a=k(a,b.fn,x());return a}function n(){for(var a=v(),b;b=f("*","/","%");)a=k(a,b.fn,v());return a}function v(){var a;return f("+")?A():(a=f("-"))?k($,a.fn,v()):(a=f("!"))?j(a.fn,v()):A()}function A(){var a;if(f("("))a=w(),h(")");else if(f("["))a=G();else if(f("{"))a=D();else{var b=f();(a=
b.fn)||e("not a primary expression",b);if(b.json)a.constant=a.literal=!0}for(var c;b=f("(","[",".");)b.text==="("?(a=s(a,c),c=null):b.text==="["?(c=a,a=ma(a)):b.text==="."?(c=a,a=ja(a)):e("IMPOSSIBLE");return a}function G(){var a=[],b=!0;if(g().text!="]"){do{var c=P();a.push(c);c.constant||(b=!1)}while(f(","))}h("]");return t(function(b,c){for(var d=[],e=0;e<a.length;e++)d.push(a[e](b,c));return d},{literal:!0,constant:b})}function D(){var a=[],b=!0;if(g().text!="}"){do{var c=f(),c=c.string||c.text;
h(":");var d=P();a.push({key:c,value:d});d.constant||(b=!1)}while(f(","))}h("}");return t(function(b,c){for(var d={},e=0;e<a.length;e++){var f=a[e];d[f.key]=f.value(b,c)}return d},{literal:!0,constant:b})}var $=S(0),K,O=Pc(b,d),P=function(){var a=o(),c,d;return(d=f("="))?(a.assign||e("implies assignment but ["+b.substring(0,d.index)+"] can not be assigned to",d),c=o(),function(b,d){return a.assign(b,c(b,d),d)}):a},s=function(a,b){var c=[];if(g().text!=")"){do c.push(P());while(f(","))}h(")");return function(d,
e){for(var f=[],j=b?b(d,e):d,g=0;g<c.length;g++)f.push(c[g](d,e));g=a(d,e,j)||q;return g.apply?g.apply(j,f):g(f[0],f[1],f[2],f[3],f[4])}},ja=function(a){var b=f().text,c=Tb(b,d);return t(function(b,d,e){return c(e||a(b,d),d)},{assign:function(c,d,e){return Ub(a(c,e),b,d)}})},ma=function(a){var b=P();h("]");return t(function(c,d){var e=a(c,d),f=b(c,d),j;if(!e)return p;if((e=e[f])&&e.then){j=e;if(!("$$v"in e))j.$$v=p,j.then(function(a){j.$$v=a});e=e.$$v}return e},{assign:function(c,d,e){return a(c,
e)[b(c,e)]=d}})},w=function(){for(var a=P(),b;;)if(b=f("|"))a=k(a,b.fn,u());else return a};a?(P=z,s=ja=ma=w=function(){e("is not valid json",{text:b,index:0})},K=A()):K=l();O.length!==0&&e("is an unexpected token",O[0]);K.literal=!!K.literal;K.constant=!!K.constant;return K}function Ub(b,a,c){for(var a=a.split("."),d=0;a.length>1;d++){var e=a.shift(),g=b[e];g||(g={},b[e]=g);b=g}return b[a.shift()]=c}function ib(b,a,c){if(!a)return b;for(var a=a.split("."),d,e=b,g=a.length,i=0;i<g;i++)d=a[i],b&&(b=
(e=b)[d]);return!c&&H(b)?$a(e,b):b}function Vb(b,a,c,d,e){return function(g,i){var f=i&&i.hasOwnProperty(b)?i:g,h;if(f===null||f===p)return f;if((f=f[b])&&f.then){if(!("$$v"in f))h=f,h.$$v=p,h.then(function(a){h.$$v=a});f=f.$$v}if(!a||f===null||f===p)return f;if((f=f[a])&&f.then){if(!("$$v"in f))h=f,h.$$v=p,h.then(function(a){h.$$v=a});f=f.$$v}if(!c||f===null||f===p)return f;if((f=f[c])&&f.then){if(!("$$v"in f))h=f,h.$$v=p,h.then(function(a){h.$$v=a});f=f.$$v}if(!d||f===null||f===p)return f;if((f=
f[d])&&f.then){if(!("$$v"in f))h=f,h.$$v=p,h.then(function(a){h.$$v=a});f=f.$$v}if(!e||f===null||f===p)return f;if((f=f[e])&&f.then){if(!("$$v"in f))h=f,h.$$v=p,h.then(function(a){h.$$v=a});f=f.$$v}return f}}function Tb(b,a){if(mb.hasOwnProperty(b))return mb[b];var c=b.split("."),d=c.length,e;if(a)e=d<6?Vb(c[0],c[1],c[2],c[3],c[4]):function(a,b){var e=0,j;do j=Vb(c[e++],c[e++],c[e++],c[e++],c[e++])(a,b),b=p,a=j;while(e<d);return j};else{var g="var l, fn, p;\n";n(c,function(a,b){g+="if(s === null || s === undefined) return s;\nl=s;\ns="+
(b?"s":'((k&&k.hasOwnProperty("'+a+'"))?k:s)')+'["'+a+'"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'});g+="return s;";e=Function("s","k",g);e.toString=function(){return g}}return mb[b]=e}function Sc(){var b={};this.$get=["$filter","$sniffer",function(a,c){return function(d){switch(typeof d){case "string":return b.hasOwnProperty(d)?b[d]:b[d]=Rc(d,!1,a,c.csp);case "function":return d;default:return q}}}]}function Tc(){this.$get=
["$rootScope","$exceptionHandler",function(b,a){return Uc(function(a){b.$evalAsync(a)},a)}]}function Uc(b,a){function c(a){return a}function d(a){return i(a)}var e=function(){var f=[],h,j;return j={resolve:function(a){if(f){var c=f;f=p;h=g(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],h.then(a[0],a[1])})}},reject:function(a){j.resolve(i(a))},promise:{then:function(b,j){var g=e(),i=function(d){try{g.resolve((b||c)(d))}catch(e){a(e),g.reject(e)}},o=function(b){try{g.resolve((j||
d)(b))}catch(c){a(c),g.reject(c)}};f?f.push([i,o]):h.then(i,o);return g.promise},always:function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var j=null;try{j=(a||c)()}catch(g){return b(g,!1)}return j&&j.then?j.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},g=function(a){return a&&a.then?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},
i=function(a){return{then:function(c,j){var g=e();b(function(){g.resolve((j||d)(a))});return g.promise}}};return{defer:e,reject:i,when:function(f,h,j){var m=e(),k,l=function(b){try{return(h||c)(b)}catch(d){return a(d),i(d)}},u=function(b){try{return(j||d)(b)}catch(c){return a(c),i(c)}};b(function(){g(f).then(function(a){k||(k=!0,m.resolve(g(a).then(l,u)))},function(a){k||(k=!0,m.resolve(u(a)))})});return m.promise},all:function(a){var b=e(),c=0,d=F(a)?[]:{};n(a,function(a,e){c++;g(a).then(function(a){d.hasOwnProperty(e)||
(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});c===0&&b.resolve(d);return b.promise}}}function Vc(){var b={};this.when=function(a,c){b[a]=t({reloadOnSearch:!0,caseInsensitiveMatch:!1},c);if(a){var d=a[a.length-1]=="/"?a.substr(0,a.length-1):a+"/";b[d]={redirectTo:a}}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache",function(a,c,d,e,g,i,f){function h(a,b,c){for(var b=
"^"+b.replace(/[-\/\\^$:*+?.()|[\]{}]/g,"\\$&")+"$",d="",e=[],f={},j=/\\([:*])(\w+)/g,g,i=0;(g=j.exec(b))!==null;){d+=b.slice(i,g.index);switch(g[1]){case ":":d+="([^\\/]*)";break;case "*":d+="(.*)"}e.push(g[2]);i=j.lastIndex}d+=b.substr(i);var h=a.match(RegExp(d,c.caseInsensitiveMatch?"i":""));h&&n(e,function(a,b){f[a]=h[b+1]});return h?f:null}function j(){var b=m(),j=u.current;if(b&&j&&b.$$route===j.$$route&&ia(b.pathParams,j.pathParams)&&!b.reloadOnSearch&&!l)j.params=b.params,V(j.params,d),a.$broadcast("$routeUpdate",
j);else if(b||j)l=!1,a.$broadcast("$routeChangeStart",b,j),(u.current=b)&&b.redirectTo&&(E(b.redirectTo)?c.path(k(b.redirectTo,b.params)).search(b.params).replace():c.url(b.redirectTo(b.pathParams,c.path(),c.search())).replace()),e.when(b).then(function(){if(b){var a=t({},b.resolve),c;n(a,function(b,c){a[c]=E(b)?g.get(b):g.invoke(b)});if(B(c=b.template))H(c)&&(c=c(b.params));else if(B(c=b.templateUrl))if(H(c)&&(c=c(b.params)),B(c))b.loadedTemplateUrl=c,c=i.get(c,{cache:f}).then(function(a){return a.data});
B(c)&&(a.$template=c);return e.all(a)}}).then(function(c){if(b==u.current){if(b)b.locals=c,V(b.params,d);a.$broadcast("$routeChangeSuccess",b,j)}},function(c){b==u.current&&a.$broadcast("$routeChangeError",b,j,c)})}function m(){var a,d;n(b,function(b,e){if(!d&&(a=h(c.path(),e,b)))d=tb(b,{params:t({},c.search(),a),pathParams:a}),d.$$route=b});return d||b[null]&&tb(b[null],{params:{},pathParams:{}})}function k(a,b){var c=[];n((a||"").split(":"),function(a,d){if(d==0)c.push(a);else{var e=a.match(/(\w+)(.*)/),
f=e[1];c.push(b[f]);c.push(e[2]||"");delete b[f]}});return c.join("")}var l=!1,u={routes:b,reload:function(){l=!0;a.$evalAsync(j)}};a.$on("$locationChangeSuccess",j);return u}]}function Wc(){this.$get=S({})}function Xc(){var b=10;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse",function(a,c,d){function e(){this.$id=Fa();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;
this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$listeners={};this.$$isolateBindings={}}function g(a){if(h.$$phase)throw Error(h.$$phase+" already in progress");h.$$phase=a}function i(a,b){var c=d(a);xa(c,b);return c}function f(){}e.prototype={$new:function(a){if(H(a))throw Error("API-CHANGE: Use $controller to instantiate controllers.");a?(a=new e,a.$root=this.$root):(a=function(){},a.prototype=this,a=new a,a.$id=Fa());a["this"]=a;a.$$listeners={};a.$parent=this;a.$$watchers=
a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,c){var d=i(a,"watch"),e=this.$$watchers,g={fn:b,last:f,get:d,exp:a,eq:!!c};if(!H(b)){var h=i(b||q,"listener");g.fn=function(a,b,c){h(c)}}if(typeof a=="string"&&d.constant){var r=g.fn;g.fn=function(a,b,c){r.call(this,a,b,c);ta(e,g)}}if(!e)e=this.$$watchers=[];e.unshift(g);return function(){ta(e,
g)}},$watchCollection:function(a,b){var c=this,e,f,g=0,i=d(a),h=[],n={},x=0;return this.$watch(function(){f=i(c);var a,b;if(L(f))if(Xa(f)){if(e!==h)e=h,x=e.length=0,g++;a=f.length;if(x!==a)g++,e.length=x=a;for(b=0;b<a;b++)e[b]!==f[b]&&(g++,e[b]=f[b])}else{e!==n&&(e=n={},x=0,g++);a=0;for(b in f)f.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?e[b]!==f[b]&&(g++,e[b]=f[b]):(x++,e[b]=f[b],g++));if(x>a)for(b in g++,e)e.hasOwnProperty(b)&&!f.hasOwnProperty(b)&&(x--,delete e[b])}else e!==f&&(e=f,g++);return g},
function(){b(f,e,c)})},$digest:function(){var a,d,e,i,u=this.$$asyncQueue,o,z,r=b,n,x=[],p,v;g("$digest");do{z=!1;for(n=this;u.length;)try{n.$eval(u.shift())}catch(A){c(A)}do{if(i=n.$$watchers)for(o=i.length;o--;)try{if(a=i[o],(d=a.get(n))!==(e=a.last)&&!(a.eq?ia(d,e):typeof d=="number"&&typeof e=="number"&&isNaN(d)&&isNaN(e)))z=!0,a.last=a.eq?V(d):d,a.fn(d,e===f?d:e,n),r<5&&(p=4-r,x[p]||(x[p]=[]),v=H(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,v+="; newVal: "+ha(d)+"; oldVal: "+ha(e),x[p].push(v))}catch(G){c(G)}if(!(i=
n.$$childHead||n!==this&&n.$$nextSibling))for(;n!==this&&!(i=n.$$nextSibling);)n=n.$parent}while(n=i);if(z&&!r--)throw h.$$phase=null,Error(b+" $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: "+ha(x));}while(z||u.length);h.$$phase=null},$destroy:function(){if(!(h==this||this.$$destroyed)){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(a.$$childHead==this)a.$$childHead=this.$$nextSibling;if(a.$$childTail==this)a.$$childTail=this.$$prevSibling;
if(this.$$prevSibling)this.$$prevSibling.$$nextSibling=this.$$nextSibling;if(this.$$nextSibling)this.$$nextSibling.$$prevSibling=this.$$prevSibling;this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null}},$eval:function(a,b){return d(a)(this,b)},$evalAsync:function(a){this.$$asyncQueue.push(a)},$apply:function(a){try{return g("$apply"),this.$eval(a)}catch(b){c(b)}finally{h.$$phase=null;try{h.$digest()}catch(d){throw c(d),d;}}},$on:function(a,b){var c=this.$$listeners[a];
c||(this.$$listeners[a]=c=[]);c.push(b);return function(){c[Ga(c,b)]=null}},$emit:function(a,b){var d=[],e,f=this,g=!1,i={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){i.defaultPrevented=!0},defaultPrevented:!1},h=[i].concat(ka.call(arguments,1)),n,x;do{e=f.$$listeners[a]||d;i.currentScope=f;n=0;for(x=e.length;n<x;n++)if(e[n])try{if(e[n].apply(null,h),g)return i}catch(p){c(p)}else e.splice(n,1),n--,x--;f=f.$parent}while(f);return i},$broadcast:function(a,b){var d=
this,e=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(ka.call(arguments,1)),i,h;do{d=e;f.currentScope=d;e=d.$$listeners[a]||[];i=0;for(h=e.length;i<h;i++)if(e[i])try{e[i].apply(null,g)}catch(n){c(n)}else e.splice(i,1),i--,h--;if(!(e=d.$$childHead||d!==this&&d.$$nextSibling))for(;d!==this&&!(e=d.$$nextSibling);)d=d.$parent}while(d=e);return f}};var h=new e;return h}]}function Yc(){this.$get=["$window","$document",function(b,a){var c=
{},d=N((/android (\d+)/.exec(I((b.navigator||{}).userAgent))||[])[1]),e=a[0]||{},g,i=/^(Moz|webkit|O|ms)(?=[A-Z])/,f=e.body&&e.body.style,h=!1,j=!1;if(f){for(var m in f)if(h=i.exec(m)){g=h[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}h=!!("transition"in f||g+"Transition"in f);j=!!("animation"in f||g+"Animation"in f)}return{history:!(!b.history||!b.history.pushState||d<4),hashchange:"onhashchange"in b&&(!e.documentMode||e.documentMode>7),hasEvent:function(a){if(a=="input"&&Z==9)return!1;if(C(c[a])){var b=
e.createElement("div");c[a]="on"+a in b}return c[a]},csp:e.securityPolicy?e.securityPolicy.isActive:!1,vendorPrefix:g,transitions:h,animations:j}}]}function Zc(){this.$get=S(M)}function Wb(b){var a={},c,d,e;if(!b)return a;n(b.split("\n"),function(b){e=b.indexOf(":");c=I(U(b.substr(0,e)));d=U(b.substr(e+1));c&&(a[c]?a[c]+=", "+d:a[c]=d)});return a}function $c(b,a){var c=ad.exec(b);if(c==null)return!0;var d={protocol:c[2],host:c[4],port:N(c[6])||Oa[c[2]]||null,relativeProtocol:c[2]===p||c[2]===""},
c=jb.exec(a),c={protocol:c[1],host:c[3],port:N(c[5])||Oa[c[1]]||null};return(d.protocol==c.protocol||d.relativeProtocol)&&d.host==c.host&&(d.port==c.port||d.relativeProtocol&&c.port==Oa[c.protocol])}function Xb(b){var a=L(b)?b:p;return function(c){a||(a=Wb(b));return c?a[I(c)]||null:a}}function Yb(b,a,c){if(H(c))return c(b,a);n(c,function(c){b=c(b,a)});return b}function bd(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults=
{transformResponse:[function(d){E(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=ub(d,!0)));return d}],transformRequest:[function(a){return L(a)&&Ea.apply(a)!=="[object File]"?ha(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:d,put:d,patch:d},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},g=this.interceptors=[],i=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,k,l){function u(a){function c(a){var b=
t({},a,{data:Yb(a.data,a.headers,d.transformResponse)});return 200<=a.status&&a.status<300?b:k.reject(b)}var d={transformRequest:e.transformRequest,transformResponse:e.transformResponse},f={};t(d,a);d.headers=f;d.method=oa(d.method);t(f,e.headers.common,e.headers[I(d.method)],a.headers);(a=$c(d.url,b.url())?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:p)&&(f[d.xsrfHeaderName||e.xsrfHeaderName]=a);var g=[function(a){var b=Yb(a.data,Xb(f),a.transformRequest);C(a.data)&&delete f["Content-Type"];if(C(a.withCredentials)&&
!C(e.withCredentials))a.withCredentials=e.withCredentials;return o(a,b,f).then(c,c)},p],j=k.when(d);for(n(y,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;)var a=g.shift(),i=g.shift(),j=j.then(a,i);j.success=function(a){j.then(function(b){a(b.data,b.status,b.headers,d)});return j};j.error=function(a){j.then(null,function(b){a(b.data,b.status,b.headers,d)});return j};return j}function o(b,c,g){function j(a,
b,c){n&&(200<=a&&a<300?n.put(s,[a,b,Wb(c)]):n.remove(s));i(b,a,c);d.$$phase||d.$apply()}function i(a,c,d){c=Math.max(c,0);(200<=c&&c<300?l.resolve:l.reject)({data:a,status:c,headers:Xb(d),config:b})}function h(){var a=Ga(u.pendingRequests,b);a!==-1&&u.pendingRequests.splice(a,1)}var l=k.defer(),o=l.promise,n,p,s=z(b.url,b.params);u.pendingRequests.push(b);o.then(h,h);if((b.cache||e.cache)&&b.cache!==!1&&b.method=="GET")n=L(b.cache)?b.cache:L(e.cache)?e.cache:r;if(n)if(p=n.get(s))if(p.then)return p.then(h,
h),p;else F(p)?i(p[1],p[0],V(p[2])):i(p,200,{});else n.put(s,o);p||a(b.method,s,c,j,g,b.timeout,b.withCredentials,b.responseType);return o}function z(a,b){if(!b)return a;var c=[];nc(b,function(a,b){a==null||a==p||(F(a)||(a=[a]),n(a,function(a){L(a)&&(a=ha(a));c.push(wa(b)+"="+wa(a))}))});return a+(a.indexOf("?")==-1?"?":"&")+c.join("&")}var r=c("$http"),y=[];n(g,function(a){y.unshift(E(a)?l.get(a):l.invoke(a))});n(i,function(a,b){var c=E(a)?l.get(a):l.invoke(a);y.splice(b,0,{response:function(a){return c(k.when(a))},
responseError:function(a){return c(k.reject(a))}})});u.pendingRequests=[];(function(a){n(arguments,function(a){u[a]=function(b,c){return u(t(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){n(arguments,function(a){u[a]=function(b,c,d){return u(t(d||{},{method:a,url:b,data:c}))}})})("post","put");u.defaults=e;return u}]}function cd(){this.$get=["$browser","$window","$document",function(b,a,c){return dd(b,ed,b.defer,a.angular.callbacks,c[0],a.location.protocol.replace(":",""))}]}
function dd(b,a,c,d,e,g){function i(a,b){var c=e.createElement("script"),d=function(){e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;Z?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=d;e.body.appendChild(c);return d}return function(e,h,j,m,k,l,u,o){function z(){p=-1;t&&t();v&&v.abort()}function r(a,d,e,f){var j=(h.match(jb)||["",g])[1];A&&c.cancel(A);t=v=null;d=j=="file"?e?200:404:d;a(d==1223?204:d,e,f);b.$$completeOutstandingRequest(q)}
var p;b.$$incOutstandingRequestCount();h=h||b.url();if(I(e)=="jsonp"){var x="_"+(d.counter++).toString(36);d[x]=function(a){d[x].data=a};var t=i(h.replace("JSON_CALLBACK","angular.callbacks."+x),function(){d[x].data?r(m,200,d[x].data):r(m,p||-2);delete d[x]})}else{var v=new a;v.open(e,h,!0);n(k,function(a,b){a&&v.setRequestHeader(b,a)});v.onreadystatechange=function(){if(v.readyState==4){var a=v.getAllResponseHeaders(),b=["Cache-Control","Content-Language","Content-Type","Expires","Last-Modified",
"Pragma"];a||(a="",n(b,function(b){var c=v.getResponseHeader(b);c&&(a+=b+": "+c+"\n")}));r(m,p||v.status,v.responseType?v.response:v.responseText,a)}};if(u)v.withCredentials=!0;if(o)v.responseType=o;v.send(j||"")}if(l>0)var A=c(z,l);else l&&l.then&&l.then(z)}}function fd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",
posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",
mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return b===1?"one":"other"}}}}function gd(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,f,h){var j=c.defer(),m=j.promise,k=B(h)&&!h,f=a.defer(function(){try{j.resolve(e())}catch(a){j.reject(a),d(a)}k||b.$apply()},f),h=function(){delete g[m.$$timeoutId]};m.$$timeoutId=f;g[f]=j;m.then(h,h);return m}var g={};e.cancel=function(b){return b&&b.$$timeoutId in
g?(g[b.$$timeoutId].reject("canceled"),a.defer.cancel(b.$$timeoutId)):!1};return e}]}function Zb(b){function a(a,e){return b.factory(a+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",$b);a("date",ac);a("filter",hd);a("json",id);a("limitTo",jd);a("lowercase",kd);a("number",bc);a("orderBy",cc);a("uppercase",ld)}function hd(){return function(b,a,c){if(!F(b))return b;var d=[];d.check=function(a){for(var b=0;b<d.length;b++)if(!d[b](a))return!1;
return!0};switch(typeof c){case "function":break;case "boolean":if(c==!0){c=function(a,b){return Ha.equals(a,b)};break}default:c=function(a,b){b=(""+b).toLowerCase();return(""+a).toLowerCase().indexOf(b)>-1}}var e=function(a,b){if(typeof b=="string"&&b.charAt(0)==="!")return!e(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if(d.charAt(0)!=="$"&&e(a[d],b))return!0}return!1;case "array":for(d=
0;d<a.length;d++)if(e(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)g=="$"?function(){if(a[g]){var b=g;d.push(function(c){return e(c,a[b])})}}():function(){if(a[g]){var b=g;d.push(function(c){return e(ib(c,b),a[b])})}}();break;case "function":d.push(a);break;default:return b}for(var i=[],f=0;f<b.length;f++){var h=b[f];d.check(h)&&i.push(h)}return i}}function $b(b){var a=b.NUMBER_FORMATS;return function(b,
d){if(C(d))d=a.CURRENCY_SYM;return dc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function bc(b){var a=b.NUMBER_FORMATS;return function(b,d){return dc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function dc(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var g=b<0,b=Math.abs(b),i=b+"",f="",h=[],j=!1;if(i.indexOf("e")!==-1){var m=i.match(/([\d\.]+)e(-?)(\d+)/);m&&m[2]=="-"&&m[3]>e+1?i="0":(f=i,j=!0)}if(!j){i=(i.split(ec)[1]||"").length;C(e)&&(e=Math.min(Math.max(a.minFrac,i),
a.maxFrac));var i=Math.pow(10,e),b=Math.round(b*i)/i,b=(""+b).split(ec),i=b[0],b=b[1]||"",j=0,m=a.lgSize,k=a.gSize;if(i.length>=m+k)for(var j=i.length-m,l=0;l<j;l++)(j-l)%k===0&&l!==0&&(f+=c),f+=i.charAt(l);for(l=j;l<i.length;l++)(i.length-l)%m===0&&l!==0&&(f+=c),f+=i.charAt(l);for(;b.length<e;)b+="0";e&&e!=="0"&&(f+=d+b.substr(0,e))}h.push(g?a.negPre:a.posPre);h.push(f);h.push(g?a.negSuf:a.posSuf);return h.join("")}function nb(b,a,c){var d="";b<0&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=
b.substr(b.length-a));return d+b}function Q(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(c>0||e>-c)e+=c;e===0&&c==-12&&(e=12);return nb(e,a,d)}}function Qa(b,a){return function(c,d){var e=c["get"+b](),g=oa(a?"SHORT"+b:b);return d[g][e]}}function ac(b){function a(a){var b;if(b=a.match(c)){var a=new Date(0),g=0,i=0,f=b[8]?a.setUTCFullYear:a.setFullYear,h=b[8]?a.setUTCHours:a.setHours;b[9]&&(g=N(b[9]+b[10]),i=N(b[9]+b[11]));f.call(a,N(b[1]),N(b[2])-1,N(b[3]));g=N(b[4]||0)-g;i=N(b[5]||0)-i;f=
N(b[6]||0);b=Math.round(parseFloat("0."+(b[7]||0))*1E3);h.call(a,g,i,f,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var g="",i=[],f,h,e=e||"mediumDate",e=b.DATETIME_FORMATS[e]||e;E(c)&&(c=md.test(c)?N(c):a(c));Ya(c)&&(c=new Date(c));if(!ra(c))return c;for(;e;)(h=nd.exec(e))?(i=i.concat(ka.call(h,1)),e=i.pop()):(i.push(e),e=null);n(i,function(a){f=od[a];g+=f?f(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,
"").replace(/''/g,"'")});return g}}function id(){return function(b){return ha(b,!0)}}function jd(){return function(b,a){if(!F(b)&&!E(b))return b;a=N(a);if(E(b))return a?a>=0?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);a>0?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function cc(b){return function(a,c,d){function e(a,b){return ua(b)?function(b,c){return a(c,b)}:a}if(!F(a))return a;if(!c)return a;for(var c=F(c)?c:[c],c=
Za(c,function(a){var c=!1,d=a||qa;if(E(a)){if(a.charAt(0)=="+"||a.charAt(0)=="-")c=a.charAt(0)=="-",a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),f=typeof c,g=typeof e;f==g?(f=="string"&&(c=c.toLowerCase()),f=="string"&&(e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<g?-1:1;return c},c)}),g=[],i=0;i<a.length;i++)g.push(a[i]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(e!==0)return e}return 0},d))}}function aa(b){H(b)&&(b={link:b});b.restrict=b.restrict||
"AC";return S(b)}function fc(b,a){function c(a,c){c=c?"-"+bb(c,"-"):"";b.removeClass((a?Ra:Sa)+c).addClass((a?Sa:Ra)+c)}var d=this,e=b.parent().controller("form")||Ta,g=0,i=d.$error={},f=[];d.$name=a.name;d.$dirty=!1;d.$pristine=!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(pa);c(!0);d.$addControl=function(a){f.push(a);a.$name&&!d.hasOwnProperty(a.$name)&&(d[a.$name]=a)};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];n(i,function(b,c){d.$setValidity(c,!0,a)});ta(f,
a)};d.$setValidity=function(a,b,f){var k=i[a];if(b){if(k&&(ta(k,f),!k.length)){g--;if(!g)c(b),d.$valid=!0,d.$invalid=!1;i[a]=!1;c(!0,a);e.$setValidity(a,!0,d)}}else{g||c(b);if(k){if(Ga(k,f)!=-1)return}else i[a]=k=[],g++,c(!1,a),e.$setValidity(a,!1,d);k.push(f);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(pa).addClass(Ua);d.$dirty=!0;d.$pristine=!1;e.$setDirty()};d.$setPristine=function(){b.removeClass(Ua).addClass(pa);d.$dirty=!1;d.$pristine=!0;n(f,function(a){a.$setPristine()})}}
function X(b){return C(b)||b===""||b===null||b!==b}function Va(b,a,c,d,e,g){var i=function(){var e=a.val();if(ua(c.ngTrim||"T"))e=U(e);d.$viewValue!==e&&b.$apply(function(){d.$setViewValue(e)})};if(e.hasEvent("input"))a.bind("input",i);else{var f,h=function(){f||(f=g.defer(function(){i();f=null}))};a.bind("keydown",function(a){a=a.keyCode;a===91||15<a&&a<19||37<=a&&a<=40||h()});a.bind("change",i);e.hasEvent("paste")&&a.bind("paste cut",h)}d.$render=function(){a.val(X(d.$viewValue)?"":d.$viewValue)};
var j=c.ngPattern,m=function(a,b){return X(b)||a.test(b)?(d.$setValidity("pattern",!0),b):(d.$setValidity("pattern",!1),p)};j&&((e=j.match(/^\/(.*)\/([gim]*)$/))?(j=RegExp(e[1],e[2]),e=function(a){return m(j,a)}):e=function(a){var c=b.$eval(j);if(!c||!c.test)throw Error("Expected "+j+" to be a RegExp but was "+c);return m(c,a)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var k=N(c.ngMinlength),e=function(a){return!X(a)&&a.length<k?(d.$setValidity("minlength",!1),p):(d.$setValidity("minlength",
!0),a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var l=N(c.ngMaxlength),e=function(a){return!X(a)&&a.length>l?(d.$setValidity("maxlength",!1),p):(d.$setValidity("maxlength",!0),a)};d.$parsers.push(e);d.$formatters.push(e)}}function ob(b,a){b="ngClass"+b;return aa(function(c,d,e){function g(b){if(a===!0||c.$index%2===a)h&&!ia(b,h)&&i(h),f(b);h=V(b)}function i(a){L(a)&&!F(a)&&(a=Za(a,function(a,b){if(a)return b}));d.removeClass(F(a)?a.join(" "):a)}function f(a){L(a)&&!F(a)&&(a=Za(a,
function(a,b){if(a)return b}));a&&d.addClass(F(a)?a.join(" "):a)}var h=p;c.$watch(e[b],g,!0);e.$observe("class",function(){var a=c.$eval(e[b]);g(a,a)});b!=="ngClass"&&c.$watch("$index",function(d,g){var h=d&1;h!==g&1&&(h===a?f(c.$eval(e[b])):i(c.$eval(e[b])))})})}var I=function(b){return E(b)?b.toLowerCase():b},oa=function(b){return E(b)?b.toUpperCase():b},Z=N((/msie (\d+)/.exec(I(navigator.userAgent))||[])[1]),w,ga,ka=[].slice,Wa=[].push,Ea=Object.prototype.toString,mc=M.angular,Ha=M.angular||(M.angular=
{}),Aa,hb,ba=["0","0","0"];q.$inject=[];qa.$inject=[];hb=Z<9?function(b){b=b.nodeName?b:b[0];return b.scopeName&&b.scopeName!="HTML"?oa(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var sc=/[A-Z]/g,pd={full:"1.1.5",major:1,minor:1,dot:5,codeName:"triangle-squarification"},Ka=R.cache={},Ja=R.expando="ng-"+(new Date).getTime(),wc=1,gc=M.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},gb=
M.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)},uc=/([\:\-\_]+(.))/g,vc=/^moz([A-Z])/,Ba=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;T.readyState==="complete"?setTimeout(a):(this.bind("DOMContentLoaded",a),R(M).bind("load",a))},toString:function(){var b=[];n(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return b>=0?w(this[b]):w(this[this.length+b])},length:0,push:Wa,sort:[].sort,
splice:[].splice},Na={};n("multiple,selected,checked,disabled,readOnly,required,open".split(","),function(b){Na[I(b)]=b});var Gb={};n("input,select,option,textarea,button,form,details".split(","),function(b){Gb[oa(b)]=!0});n({data:Bb,inheritedData:Ma,scope:function(b){return Ma(b,"$scope")},controller:Eb,injector:function(b){return Ma(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:La,css:function(b,a,c){a=Ia(a);if(B(c))b.style[a]=c;else{var d;Z<=8&&(d=b.currentStyle&&b.currentStyle[a],
d===""&&(d="auto"));d=d||b.style[a];Z<=8&&(d=d===""?p:d);return d}},attr:function(b,a,c){var d=I(a);if(Na[d])if(B(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||q).specified?d:p;else if(B(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),b===null?p:b},prop:function(b,a,c){if(B(c))b[a]=c;else return b[a]},text:t(Z<9?function(b,a){if(b.nodeType==1){if(C(a))return b.innerText;b.innerText=a}else{if(C(a))return b.nodeValue;
b.nodeValue=a}}:function(b,a){if(C(a))return b.textContent;b.textContent=a},{$dv:""}),val:function(b,a){if(C(a))return b.value;b.value=a},html:function(b,a){if(C(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)ya(d[c]);b.innerHTML=a}},function(b,a){R.prototype[a]=function(a,d){var e,g;if((b.length==2&&b!==La&&b!==Eb?a:d)===p)if(L(a)){for(e=0;e<this.length;e++)if(b===Bb)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}else{if(this.length)return b(this[0],a,d)}else{for(e=0;e<
this.length;e++)b(this[e],a,d);return this}return b.$dv}});n({removeData:zb,dealoc:ya,bind:function a(c,d,e){var g=ca(c,"events"),i=ca(c,"handle");g||ca(c,"events",g={});i||ca(c,"handle",i=xc(c,g));n(d.split(" "),function(d){var h=g[d];if(!h){if(d=="mouseenter"||d=="mouseleave"){var j=T.body.contains||T.body.compareDocumentPosition?function(a,c){var d=a.nodeType===9?a.documentElement:a,e=c&&c.parentNode;return a===e||!(!e||!(e.nodeType===1&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&
16)))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;(!c||c!==this&&!j(this,c))&&i(a,d)})}else gc(c,d,i),g[d]=[];h=g[d]}h.push(e)})},unbind:Ab,replaceWith:function(a,c){var d,e=a.parentNode;ya(a);n(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];n(a.childNodes,function(a){a.nodeType===1&&c.push(a)});return c},contents:function(a){return a.childNodes||
[]},append:function(a,c){n(new R(c),function(c){(a.nodeType===1||a.nodeType===11)&&a.appendChild(c)})},prepend:function(a,c){if(a.nodeType===1){var d=a.firstChild;n(new R(c),function(c){d?a.insertBefore(c,d):(a.appendChild(c),d=c)})}},wrap:function(a,c){var c=w(c)[0],d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){ya(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;n(new R(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:Db,
removeClass:Cb,toggleClass:function(a,c,d){C(d)&&(d=!La(a,c));(d?Db:Cb)(a,c)},parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;a!=null&&a.nodeType!==1;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName(c)},clone:fb,triggerHandler:function(a,c){var d=(ca(a,"events")||{})[c];n(d,function(c){c.call(a,{preventDefault:q})})}},function(a,c){R.prototype[c]=function(c,e){for(var g,
i=0;i<this.length;i++)g==p?(g=a(this[i],c,e),g!==p&&(g=w(g))):eb(g,a(this[i],c,e));return g==p?this:g}});za.prototype={put:function(a,c){this[la(a)]=c},get:function(a){return this[la(a)]},remove:function(a){var c=this[a=la(a)];delete this[a];return c}};var zc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Ac=/,/,Bc=/^\s*(_?)(\S+?)\1\s*$/,yc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;Ib.$inject=["$provide"];var qd=function(){var a="$ngAnimateController",c={running:!0};this.$get=["$animation","$window","$sniffer","$rootElement",
"$rootScope",function(d,e,g,i){i.data(a,c);i=function(c,i){function j(j,k,o){return function(m,r,p){function x(a){var c=0,a=E(a)?a.split(/\s*,\s*/):[];n(a,function(a){c=Math.max(parseFloat(a)||0,c)});return c}function t(){m.addClass(K);if($)$(m,v,P);else if(H(e.getComputedStyle)){var a=g.vendorPrefix+"Animation",c=g.vendorPrefix+"Transition",d=0;n(m,function(f){if(f.nodeType==1){var g="transition",i=c,j=1,h=e.getComputedStyle(f)||{};if(parseFloat(h.animationDuration)>0||parseFloat(h[a+"Duration"])>
0)g="animation",i=a,j=Math.max(parseInt(h[g+"IterationCount"])||0,parseInt(h[i+"IterationCount"])||0,j);f=Math.max(x(h[g+"Delay"]),x(h[i+"Delay"]));g=Math.max(x(h[g+"Duration"]),x(h[i+"Duration"]));d=Math.max(f+j*g,d)}});e.setTimeout(v,d*1E3)}else v()}function v(){if(!v.run)v.run=!0,o(m,r,p),m.removeClass(w),m.removeClass(K),m.removeData(a)}var A=c.$eval(i.ngAnimate),w=A?L(A)?A[j]:A+"-"+j:"",D=d(w),A=D&&D.setup,$=D&&D.start,D=D&&D.cancel;if(w){var K=w+"-active";r||(r=p?p.parent():m.parent());if(!g.transitions&&
!A&&!$||(r.inheritedData(a)||q).running)k(m,r,p),o(m,r,p);else{var O=m.data(a)||{};O.running&&((D||q)(m),O.done());m.data(a,{running:!0,done:v});m.addClass(w);k(m,r,p);if(m.length==0)return v();var P=(A||q)(m);e.setTimeout(t,1)}}else k(m,r,p),o(m,r,p)}}function m(a,c,d){d?d.after(a):c.append(a)}var k={};k.enter=j("enter",m,q);k.leave=j("leave",q,function(a){a.remove()});k.move=j("move",function(a,c,d){m(a,c,d)},q);k.show=j("show",function(a){a.css("display","")},q);k.hide=j("hide",q,function(a){a.css("display",
"none")});k.animate=function(a,c){j(a,q,q)(c)};return k};i.enabled=function(a){if(arguments.length)c.running=!a;return!c.running};return i}]},Kb="Non-assignable model expression: ";Jb.$inject=["$provide"];var Ic=/^(x[\:\-_]|data[\:\-_])/i,jb=/^([^:]+):\/\/(\w+:{0,1}\w*@)?(\{?[\w\.-]*\}?)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,Pb=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Oa={http:80,https:443,ftp:21};Rb.prototype=lb.prototype=Qb.prototype={$$replace:!1,absUrl:Pa("$$absUrl"),url:function(a,c){if(C(a))return this.$$url;
var d=Pb.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));if(d[2]||d[1])this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:Pa("$$protocol"),host:Pa("$$host"),port:Pa("$$port"),path:Sb("$$path",function(a){return a.charAt(0)=="/"?a:"/"+a}),search:function(a,c){if(C(a))return this.$$search;B(c)?c===null?delete this.$$search[a]:this.$$search[a]=c:this.$$search=E(a)?vb(a):a;this.$$compose();return this},hash:Sb("$$hash",qa),replace:function(){this.$$replace=!0;return this}};var Da={"null":function(){return null},
"true":function(){return!0},"false":function(){return!1},undefined:q,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return B(d)?B(e)?d+e:d:B(e)?e:p},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(B(d)?d:0)-(B(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":q,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,
c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Qc={n:"\n",f:"\u000c",r:"\r",
t:"\t",v:"\u000b","'":"'",'"':'"'},mb={},ad=/^(([^:]+):)?\/\/(\w+:{0,1}\w*@)?([\w\.-]*)?(:([0-9]+))?(.*)$/,ed=M.XMLHttpRequest||function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw Error("This browser does not support XMLHttpRequest.");};Zb.$inject=["$provide"];$b.$inject=["$locale"];bc.$inject=["$locale"];var ec=".",od={yyyy:Q("FullYear",4),yy:Q("FullYear",
2,0,!0),y:Q("FullYear",1),MMMM:Qa("Month"),MMM:Qa("Month",!0),MM:Q("Month",2,1),M:Q("Month",1,1),dd:Q("Date",2),d:Q("Date",1),HH:Q("Hours",2),H:Q("Hours",1),hh:Q("Hours",2,-12),h:Q("Hours",1,-12),mm:Q("Minutes",2),m:Q("Minutes",1),ss:Q("Seconds",2),s:Q("Seconds",1),sss:Q("Milliseconds",3),EEEE:Qa("Day"),EEE:Qa("Day",!0),a:function(a,c){return a.getHours()<12?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){var a=-1*a.getTimezoneOffset(),c=a>=0?"+":"";c+=nb(Math[a>0?"floor":"ceil"](a/60),2)+nb(Math.abs(a%60),
2);return c}},nd=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,md=/^\d+$/;ac.$inject=["$locale"];var kd=S(I),ld=S(oa);cc.$inject=["$parse"];var rd=S({restrict:"E",compile:function(a,c){Z<=8&&(!c.href&&!c.name&&c.$set("href",""),a.append(T.createComment("IE fix")));return function(a,c){c.bind("click",function(a){c.attr("href")||a.preventDefault()})}}}),pb={};n(Na,function(a,c){var d=da("ng-"+c);pb[d]=function(){return{priority:100,compile:function(){return function(a,
g,i){a.$watch(i[d],function(a){i.$set(c,!!a)})}}}}});n(["src","srcset","href"],function(a){var c=da("ng-"+a);pb[c]=function(){return{priority:99,link:function(d,e,g){g.$observe(c,function(c){c&&(g.$set(a,c),Z&&e.prop(a,g[a]))})}}}});var Ta={$addControl:q,$removeControl:q,$setValidity:q,$setDirty:q,$setPristine:q};fc.$inject=["$element","$attrs","$scope"];var Wa=function(a){return["$timeout",function(c){var d={name:"form",restrict:"E",controller:fc,compile:function(){return{pre:function(a,d,i,f){if(!i.action){var h=
function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};gc(d[0],"submit",h);d.bind("$destroy",function(){c(function(){gb(d[0],"submit",h)},0,!1)})}var j=d.parent().controller("form"),m=i.name||i.ngForm;m&&(a[m]=f);j&&d.bind("$destroy",function(){j.$removeControl(f);m&&(a[m]=p);t(f,Ta)})}}}};return a?t(V(d),{restrict:"EAC"}):d}]},sd=Wa(),td=Wa(!0),ud=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,vd=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
wd=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,hc={text:Va,number:function(a,c,d,e,g,i){Va(a,c,d,e,g,i);e.$parsers.push(function(a){var c=X(a);return c||wd.test(a)?(e.$setValidity("number",!0),a===""?null:c?a:parseFloat(a)):(e.$setValidity("number",!1),p)});e.$formatters.push(function(a){return X(a)?"":""+a});if(d.min){var f=parseFloat(d.min),a=function(a){return!X(a)&&a<f?(e.$setValidity("min",!1),p):(e.$setValidity("min",!0),a)};e.$parsers.push(a);e.$formatters.push(a)}if(d.max){var h=parseFloat(d.max),
d=function(a){return!X(a)&&a>h?(e.$setValidity("max",!1),p):(e.$setValidity("max",!0),a)};e.$parsers.push(d);e.$formatters.push(d)}e.$formatters.push(function(a){return X(a)||Ya(a)?(e.$setValidity("number",!0),a):(e.$setValidity("number",!1),p)})},url:function(a,c,d,e,g,i){Va(a,c,d,e,g,i);a=function(a){return X(a)||ud.test(a)?(e.$setValidity("url",!0),a):(e.$setValidity("url",!1),p)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,g,i){Va(a,c,d,e,g,i);a=function(a){return X(a)||vd.test(a)?
(e.$setValidity("email",!0),a):(e.$setValidity("email",!1),p)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){C(d.name)&&c.attr("name",Fa());c.bind("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var g=d.ngTrueValue,i=d.ngFalseValue;E(g)||(g=!0);E(i)||(i=!1);c.bind("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});
e.$render=function(){c[0].checked=e.$viewValue};e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:i})},hidden:q,button:q,submit:q,reset:q},ic=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,g,i){i&&(hc[I(g.type)]||hc.text)(d,e,g,i,c,a)}}}],Sa="ng-valid",Ra="ng-invalid",pa="ng-pristine",Ua="ng-dirty",xd=["$scope","$exceptionHandler","$attrs","$element","$parse",function(a,c,d,e,g){function i(a,c){c=c?"-"+bb(c,"-"):"";
e.removeClass((a?Ra:Sa)+c).addClass((a?Sa:Ra)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var f=g(d.ngModel),h=f.assign;if(!h)throw Error(Kb+d.ngModel+" ("+va(e)+")");this.$render=q;var j=e.inheritedData("$formController")||Ta,m=0,k=this.$error={};e.addClass(pa);i(!0);this.$setValidity=function(a,c){if(k[a]!==!c){if(c){if(k[a]&&m--,!m)i(!0),this.$valid=
!0,this.$invalid=!1}else i(!1),this.$invalid=!0,this.$valid=!1,m++;k[a]=!c;i(c,a);j.$setValidity(a,c,this)}};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;e.removeClass(Ua).addClass(pa)};this.$setViewValue=function(d){this.$viewValue=d;if(this.$pristine)this.$dirty=!0,this.$pristine=!1,e.removeClass(pa).addClass(Ua),j.$setDirty();n(this.$parsers,function(a){d=a(d)});if(this.$modelValue!==d)this.$modelValue=d,h(a,d),n(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};
var l=this;a.$watch(function(){var c=f(a);if(l.$modelValue!==c){var d=l.$formatters,e=d.length;for(l.$modelValue=c;e--;)c=d[e](c);if(l.$viewValue!==c)l.$viewValue=c,l.$render()}})}],yd=function(){return{require:["ngModel","^?form"],controller:xd,link:function(a,c,d,e){var g=e[0],i=e[1]||Ta;i.$addControl(g);c.bind("$destroy",function(){i.$removeControl(g)})}}},zd=S({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),jc=function(){return{require:"?ngModel",
link:function(a,c,d,e){if(e){d.required=!0;var g=function(a){if(d.required&&(X(a)||a===!1))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},Ad=function(){return{require:"ngModel",link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){var c=[];a&&n(a.split(g),function(a){a&&c.push(U(a))});return c});e.$formatters.push(function(a){return F(a)?
a.join(", "):p})}}},Bd=/^(true|false|\d+)$/,Cd=function(){return{priority:100,compile:function(a,c){return Bd.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,c,g){a.$watch(g.ngValue,function(a){g.$set("value",a,!1)})}}}},Dd=aa(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==p?"":a)})}),Ed=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",
c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],Fd=[function(){return function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBindHtmlUnsafe);a.$watch(d.ngBindHtmlUnsafe,function(a){c.html(a||"")})}}],Gd=ob("",!0),Hd=ob("Odd",0),Id=ob("Even",1),Jd=aa({compile:function(a,c){c.$set("ngCloak",p);a.removeClass("ng-cloak")}}),Kd=[function(){return{scope:!0,controller:"@"}}],Ld=["$sniffer",function(a){return{priority:1E3,compile:function(){a.csp=!0}}}],kc={};n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress".split(" "),
function(a){var c=da("ng-"+a);kc[c]=["$parse",function(d){return function(e,g,i){var f=d(i[c]);g.bind(I(a),function(a){e.$apply(function(){f(e,{$event:a})})})}}]});var Md=aa(function(a,c,d){c.bind("submit",function(){a.$apply(d.ngSubmit)})}),Nd=["$animator",function(a){return{transclude:"element",priority:1E3,terminal:!0,restrict:"A",compile:function(c,d,e){return function(c,d,f){var h=a(c,f),j,m;c.$watch(f.ngIf,function(a){j&&(h.leave(j),j=p);m&&(m.$destroy(),m=p);ua(a)&&(m=c.$new(),e(m,function(a){j=
a;h.enter(a,d.parent(),d)}))})}}}}],Od=["$http","$templateCache","$anchorScroll","$compile","$animator",function(a,c,d,e,g){return{restrict:"ECA",terminal:!0,compile:function(i,f){var h=f.ngInclude||f.src,j=f.onload||"",m=f.autoscroll;return function(f,i,n){var o=g(f,n),p=0,r,t=function(){r&&(r.$destroy(),r=null);o.leave(i.contents(),i)};f.$watch(h,function(g){var h=++p;g?(a.get(g,{cache:c}).success(function(a){h===p&&(r&&r.$destroy(),r=f.$new(),o.leave(i.contents(),i),a=w("<div/>").html(a).contents(),
o.enter(a,i),e(a)(r),B(m)&&(!m||f.$eval(m))&&d(),r.$emit("$includeContentLoaded"),f.$eval(j))}).error(function(){h===p&&t()}),f.$emit("$includeContentRequested")):t()})}}}}],Pd=aa({compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Qd=aa({terminal:!0,priority:1E3}),Rd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,i){var f=i.count,h=g.attr(i.$attr.when),j=i.offset||0,m=e.$eval(h),k={},l=c.startSymbol(),p=c.endSymbol();n(m,function(a,e){k[e]=
c(a.replace(d,l+f+"-"+j+p))});e.$watch(function(){var c=parseFloat(e.$eval(f));return isNaN(c)?"":(c in m||(c=a.pluralCat(c-j)),k[c](e,g,!0))},function(a){g.text(a)})}}}],Sd=["$parse","$animator",function(a,c){return{transclude:"element",priority:1E3,terminal:!0,compile:function(d,e,g){return function(d,e,h){var j=c(d,h),m=h.ngRepeat,k=m.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/),l,p,o,z,r,t={$id:la};if(!k)throw Error("Expected ngRepeat in form of '_item_ in _collection_[ track by _id_]' but got '"+
m+"'.");h=k[1];o=k[2];(k=k[4])?(l=a(k),p=function(a,c,e){r&&(t[r]=a);t[z]=c;t.$index=e;return l(d,t)}):p=function(a,c){return la(c)};k=h.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!k)throw Error("'item' in 'item in collection' should be identifier or (key, value) but got '"+h+"'.");z=k[3]||k[1];r=k[2];var x={};d.$watchCollection(o,function(a){var c,h,k=e,l,o={},t,q,w,s,B,y,C=[];if(Xa(a))B=a;else{B=[];for(w in a)a.hasOwnProperty(w)&&w.charAt(0)!="$"&&B.push(w);B.sort()}t=B.length;h=
C.length=B.length;for(c=0;c<h;c++)if(w=a===B?c:B[c],s=a[w],l=p(w,s,c),x.hasOwnProperty(l))y=x[l],delete x[l],o[l]=y,C[c]=y;else if(o.hasOwnProperty(l))throw n(C,function(a){a&&a.element&&(x[a.id]=a)}),Error("Duplicates in a repeater are not allowed. Repeater: "+m+" key: "+l);else C[c]={id:l},o[l]=!1;for(w in x)if(x.hasOwnProperty(w))y=x[w],j.leave(y.element),y.element[0].$$NG_REMOVED=!0,y.scope.$destroy();c=0;for(h=B.length;c<h;c++){w=a===B?c:B[c];s=a[w];y=C[c];if(y.element){q=y.scope;l=k[0];do l=
l.nextSibling;while(l&&l.$$NG_REMOVED);y.element[0]!=l&&j.move(y.element,null,k);k=y.element}else q=d.$new();q[z]=s;r&&(q[r]=w);q.$index=c;q.$first=c===0;q.$last=c===t-1;q.$middle=!(q.$first||q.$last);y.element||g(q,function(a){j.enter(a,null,k);k=a;y.scope=q;y.element=a;o[y.id]=y})}x=o})}}}}],Td=["$animator",function(a){return function(c,d,e){var g=a(c,e);c.$watch(e.ngShow,function(a){g[ua(a)?"show":"hide"](d)})}}],Ud=["$animator",function(a){return function(c,d,e){var g=a(c,e);c.$watch(e.ngHide,
function(a){g[ua(a)?"hide":"show"](d)})}}],Vd=aa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&n(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Wd=["$animator",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,g){var i=a(c,e),f,h,j=[];c.$watch(e.ngSwitch||e.on,function(a){for(var d=0,l=j.length;d<l;d++)j[d].$destroy(),i.leave(h[d]);h=[];j=[];if(f=g.cases["!"+a]||g.cases["?"])c.$eval(e.change),n(f,function(a){var d=
c.$new();j.push(d);a.transclude(d,function(c){var d=a.element;h.push(c);i.enter(c,d.parent(),d)})})})}}}],Xd=aa({transclude:"element",priority:500,require:"^ngSwitch",compile:function(a,c,d){return function(a,g,i,f){f.cases["!"+c.ngSwitchWhen]=f.cases["!"+c.ngSwitchWhen]||[];f.cases["!"+c.ngSwitchWhen].push({transclude:d,element:g})}}}),Yd=aa({transclude:"element",priority:500,require:"^ngSwitch",compile:function(a,c,d){return function(a,c,i,f){f.cases["?"]=f.cases["?"]||[];f.cases["?"].push({transclude:d,
element:c})}}}),Zd=aa({controller:["$transclude","$element",function(a,c){a(function(a){c.append(a)})}]}),$d=["$http","$templateCache","$route","$anchorScroll","$compile","$controller","$animator",function(a,c,d,e,g,i,f){return{restrict:"ECA",terminal:!0,link:function(a,c,m){function k(){var f=d.current&&d.current.locals,k=f&&f.$template;if(k){o.leave(c.contents(),c);l&&(l.$destroy(),l=null);k=w("<div></div>").html(k).contents();o.enter(k,c);var k=g(k),m=d.current;l=m.scope=a.$new();if(m.controller)f.$scope=
l,f=i(m.controller,f),m.controllerAs&&(l[m.controllerAs]=f),c.children().data("$ngControllerController",f);k(l);l.$emit("$viewContentLoaded");l.$eval(n);e()}else o.leave(c.contents(),c),l&&(l.$destroy(),l=null)}var l,n=m.onload||"",o=f(a,m);a.$on("$routeChangeSuccess",k);k()}}}],ae=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){d.type=="text/ng-template"&&a.put(d.id,c[0].text)}}}],be=S({terminal:!0}),ce=["$compile","$parse",function(a,c){var d=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/,
e={$setViewValue:q};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var h=this,j={},m=e,k;h.databound=d.ngModel;h.init=function(a,c,d){m=a;k=d};h.addOption=function(c){j[c]=!0;m.$viewValue==c&&(a.val(c),k.parent()&&k.remove())};h.removeOption=function(a){this.hasOption(a)&&(delete j[a],m.$viewValue==a&&this.renderUnknownOption(a))};h.renderUnknownOption=function(c){c="? "+la(c)+" ?";k.val(c);a.prepend(k);a.val(c);k.prop("selected",!0)};h.hasOption=
function(a){return j.hasOwnProperty(a)};c.$on("$destroy",function(){h.renderUnknownOption=q})}],link:function(e,i,f,h){function j(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(v.parent()&&v.remove(),c.val(a),a===""&&t.prop("selected",!0)):C(a)&&t?c.val(""):e.renderUnknownOption(a)};c.bind("change",function(){a.$apply(function(){v.parent()&&v.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new za(d.$viewValue);n(c.find("option"),function(c){c.selected=
B(a.get(c.value))})};a.$watch(function(){ia(e,d.$viewValue)||(e=V(d.$viewValue),d.$render())});c.bind("change",function(){a.$apply(function(){var a=[];n(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function k(e,f,g){function i(){var a={"":[]},c=[""],d,h,q,v,s;q=g.$modelValue;v=u(e)||[];var z=l?qb(v):v,B,y,A;y={};s=!1;var C,D;if(o)if(t&&F(q)){s=new za([]);for(h=0;h<q.length;h++)y[k]=q[h],s.put(t(e,y),q[h])}else s=new za(q);for(A=0;B=z.length,A<B;A++){y[k]=v[l?y[l]=
z[A]:A];d=m(e,y)||"";if(!(h=a[d]))h=a[d]=[],c.push(d);o?d=s.remove(t?t(e,y):n(e,y))!=p:(t?(d={},d[k]=q,d=t(e,d)===t(e,y)):d=q===n(e,y),s=s||d);C=j(e,y);C=C===p?"":C;h.push({id:t?t(e,y):l?z[A]:A,label:C,selected:d})}o||(r||q===null?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));y=0;for(z=c.length;y<z;y++){d=c[y];h=a[d];if(w.length<=y)q={element:E.clone().attr("label",d),label:h.label},v=[q],w.push(v),f.append(q.element);else if(v=w[y],q=v[0],q.label!=d)q.element.attr("label",
q.label=d);C=null;A=0;for(B=h.length;A<B;A++)if(d=h[A],s=v[A+1]){C=s.element;if(s.label!==d.label)C.text(s.label=d.label);if(s.id!==d.id)C.val(s.id=d.id);if(C[0].selected!==d.selected)C.prop("selected",s.selected=d.selected)}else d.id===""&&r?D=r:(D=x.clone()).val(d.id).attr("selected",d.selected).text(d.label),v.push({element:D,label:d.label,id:d.id,selected:d.selected}),C?C.after(D):q.element.append(D),C=D;for(A++;v.length>A;)v.pop().element.remove()}for(;w.length>y;)w.pop()[0].element.remove()}
var h;if(!(h=q.match(d)))throw Error("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_ (track by _expr_)?' but got '"+q+"'.");var j=c(h[2]||h[1]),k=h[4]||h[6],l=h[5],m=c(h[3]||""),n=c(h[2]?h[1]:k),u=c(h[7]),t=h[8]?c(h[8]):null,w=[[{element:f,label:""}]];r&&(a(r)(e),r.removeClass("ng-scope"),r.remove());f.html("");f.bind("change",function(){e.$apply(function(){var a,c=u(e)||[],d={},h,i,j,m,q,r;if(o){i=[];m=0;for(r=w.length;m<r;m++){a=w[m];j=1;for(q=a.length;j<
q;j++)if((h=a[j].element)[0].selected){h=h.val();l&&(d[l]=h);if(t)for(var s=0;s<c.length;s++){if(d[k]=c[s],t(e,d)==h)break}else d[k]=c[h];i.push(n(e,d))}}}else if(h=f.val(),h=="?")i=p;else if(h=="")i=null;else if(t)for(s=0;s<c.length;s++){if(d[k]=c[s],t(e,d)==h){i=n(e,d);break}}else d[k]=c[h],l&&(d[l]=h),i=n(e,d);g.$setViewValue(i)})});g.$render=i;e.$watch(i)}if(h[1]){for(var l=h[0],u=h[1],o=f.multiple,q=f.ngOptions,r=!1,t,x=w(T.createElement("option")),E=w(T.createElement("optgroup")),v=x.clone(),
h=0,A=i.children(),G=A.length;h<G;h++)if(A[h].value==""){t=r=A.eq(h);break}l.init(u,r,v);if(o&&(f.required||f.ngRequired)){var D=function(a){u.$setValidity("required",!f.required||a&&a.length);return a};u.$parsers.push(D);u.$formatters.unshift(D);f.$observe("required",function(){D(u.$viewValue)})}q?k(e,i,u):o?m(e,i,u):j(e,i,u,l)}}}}],de=["$interpolate",function(a){var c={addOption:q,removeOption:q};return{restrict:"E",priority:100,compile:function(d,e){if(C(e.value)){var g=a(d.text(),!0);g||e.$set("value",
d.text())}return function(a,d,e){var j=d.parent(),m=j.data("$selectController")||j.parent().data("$selectController");m&&m.databound?d.prop("selected",!1):m=c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&m.removeOption(c);m.addOption(a)}):m.addOption(e.value);d.bind("$destroy",function(){m.removeOption(e.value)})}}}}],ee=S({restrict:"E",terminal:!0});(ga=M.jQuery)?(w=ga,t(ga.fn,{scope:Ba.scope,controller:Ba.controller,injector:Ba.injector,inheritedData:Ba.inheritedData}),db("remove",!0),db("empty"),
db("html")):w=R;Ha.element=w;(function(a){t(a,{bootstrap:xb,copy:V,extend:t,equals:ia,element:w,forEach:n,injector:yb,noop:q,bind:$a,toJson:ha,fromJson:ub,identity:qa,isUndefined:C,isDefined:B,isString:E,isFunction:H,isObject:L,isNumber:Ya,isElement:oc,isArray:F,version:pd,isDate:ra,lowercase:I,uppercase:oa,callbacks:{counter:0},noConflict:lc});Aa=tc(M);try{Aa("ngLocale")}catch(c){Aa("ngLocale",[]).provider("$locale",fd)}Aa("ng",["ngLocale"],["$provide",function(a){a.provider("$compile",Jb).directive({a:rd,
input:ic,textarea:ic,form:sd,script:ae,select:ce,style:ee,option:de,ngBind:Dd,ngBindHtmlUnsafe:Fd,ngBindTemplate:Ed,ngClass:Gd,ngClassEven:Id,ngClassOdd:Hd,ngCsp:Ld,ngCloak:Jd,ngController:Kd,ngForm:td,ngHide:Ud,ngIf:Nd,ngInclude:Od,ngInit:Pd,ngNonBindable:Qd,ngPluralize:Rd,ngRepeat:Sd,ngShow:Td,ngSubmit:Md,ngStyle:Vd,ngSwitch:Wd,ngSwitchWhen:Xd,ngSwitchDefault:Yd,ngOptions:be,ngView:$d,ngTransclude:Zd,ngModel:yd,ngList:Ad,ngChange:zd,required:jc,ngRequired:jc,ngValue:Cd}).directive(pb).directive(kc);
a.provider({$anchorScroll:Cc,$animation:Ib,$animator:qd,$browser:Ec,$cacheFactory:Fc,$controller:Jc,$document:Kc,$exceptionHandler:Lc,$filter:Zb,$interpolate:Mc,$http:bd,$httpBackend:cd,$location:Nc,$log:Oc,$parse:Sc,$route:Vc,$routeParams:Wc,$rootScope:Xc,$q:Tc,$sniffer:Yc,$templateCache:Gc,$timeout:gd,$window:Zc})}])})(Ha);w(T).ready(function(){rc(T,xb)})})(window,document);angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>');
/**
* Bootstrap.js v2.3.2 by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(e){"use strict";e(function(){e.support.transition=function(){var e=function(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n;for(n in t)if(e.style[n]!==undefined)return t[n]}();return e&&{end:e}}()})}(window.jQuery),!function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function s(){i.trigger("closed").remove()}var n=e(this),r=n.attr("data-target"),i;r||(r=n.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i=e(r),t&&t.preventDefault(),i.length||(i=n.hasClass("alert")?n:n.parent()),i.trigger(t=e.Event("close"));if(t.isDefaultPrevented())return;i.removeClass("in"),e.support.transition&&i.hasClass("fade")?i.on(e.support.transition.end,s):s()};var r=e.fn.alert;e.fn.alert=function(t){return this.each(function(){var r=e(this),i=r.data("alert");i||r.data("alert",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=r,this},e(document).on("click.alert.data-api",t,n.prototype.close)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,n)};t.prototype.setState=function(e){var t="disabled",n=this.$element,r=n.data(),i=n.is("input")?"val":"html";e+="Text",r.resetText||n.data("resetText",n[i]()),n[i](r[e]||this.options[e]),setTimeout(function(){e=="loadingText"?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=e.fn.button;e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("button"),s=typeof n=="object"&&n;i||r.data("button",i=new t(this,s)),n=="toggle"?i.toggle():n&&i.setState(n)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e.fn.button.noConflict=function(){return e.fn.button=n,this},e(document).on("click.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.options.pause=="hover"&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))};t.prototype={cycle:function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(t){var n=this.getActiveIndex(),r=this;if(t>this.$items.length-1||t<0)return;return this.sliding?this.$element.one("slid",function(){r.to(t)}):n==t?this.pause().cycle():this.slide(t>n?"next":"prev",e(this.$items[t]))},pause:function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition.end&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(t,n){var r=this.$element.find(".item.active"),i=n||r[t](),s=this.interval,o=t=="next"?"left":"right",u=t=="next"?"first":"last",a=this,f;this.sliding=!0,s&&this.pause(),i=i.length?i:this.$element.find(".item")[u](),f=e.Event("slide",{relatedTarget:i[0],direction:o});if(i.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var t=e(a.$indicators.children()[a.getActiveIndex()]);t&&t.addClass("active")}));if(e.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(f);if(f.isDefaultPrevented())return;i.addClass(t),i[0].offsetWidth,r.addClass(o),i.addClass(o),this.$element.one(e.support.transition.end,function(){i.removeClass([t,o].join(" ")).addClass("active"),r.removeClass(["active",o].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger("slid")},0)})}else{this.$element.trigger(f);if(f.isDefaultPrevented())return;r.removeClass("active"),i.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}};var n=e.fn.carousel;e.fn.carousel=function(n){return this.each(function(){var r=e(this),i=r.data("carousel"),s=e.extend({},e.fn.carousel.defaults,typeof n=="object"&&n),o=typeof n=="string"?n:s.slide;i||r.data("carousel",i=new t(this,s)),typeof n=="number"?i.to(n):o?i[o]():s.interval&&i.pause().cycle()})},e.fn.carousel.defaults={interval:5e3,pause:"hover"},e.fn.carousel.Constructor=t,e.fn.carousel.noConflict=function(){return e.fn.carousel=n,this},e(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(t){var n=e(this),r,i=e(n.attr("data-target")||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")),s=e.extend({},i.data(),n.data()),o;i.carousel(s),(o=n.attr("data-slide-to"))&&i.data("carousel").pause().to(o).cycle(),t.preventDefault()})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.collapse.defaults,n),this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,n,r,i;if(this.transitioning||this.$element.hasClass("in"))return;t=this.dimension(),n=e.camelCase(["scroll",t].join("-")),r=this.$parent&&this.$parent.find("> .accordion-group > .in");if(r&&r.length){i=r.data("collapse");if(i&&i.transitioning)return;r.collapse("hide"),i||r.data("collapse",null)}this.$element[t](0),this.transition("addClass",e.Event("show"),"shown"),e.support.transition&&this.$element[t](this.$element[0][n])},hide:function(){var t;if(this.transitioning||!this.$element.hasClass("in"))return;t=this.dimension(),this.reset(this.$element[t]()),this.transition("removeClass",e.Event("hide"),"hidden"),this.$element[t](0)},reset:function(e){var t=this.dimension();return this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth,this.$element[e!==null?"addClass":"removeClass"]("collapse"),this},transition:function(t,n,r){var i=this,s=function(){n.type=="show"&&i.reset(),i.transitioning=0,i.$element.trigger(r)};this.$element.trigger(n);if(n.isDefaultPrevented())return;this.transitioning=1,this.$element[t]("in"),e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,s):s()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("collapse"),s=e.extend({},e.fn.collapse.defaults,r.data(),typeof n=="object"&&n);i||r.data("collapse",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.collapse.defaults={toggle:!0},e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=n,this},e(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r,i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""),s=e(i).data("collapse")?"toggle":n.data();n[e(i).hasClass("in")?"addClass":"removeClass"]("collapsed"),e(i).collapse(s)})}(window.jQuery),!function(e){"use strict";function r(){e(".dropdown-backdrop").remove(),e(t).each(function(){i(e(this)).removeClass("open")})}function i(t){var n=t.attr("data-target"),r;n||(n=t.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")),r=n&&e(n);if(!r||!r.length)r=t.parent();return r}var t="[data-toggle=dropdown]",n=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};n.prototype={constructor:n,toggle:function(t){var n=e(this),s,o;if(n.is(".disabled, :disabled"))return;return s=i(n),o=s.hasClass("open"),r(),o||("ontouchstart"in document.documentElement&&e('<div class="dropdown-backdrop"/>').insertBefore(e(this)).on("click",r),s.toggleClass("open")),n.focus(),!1},keydown:function(n){var r,s,o,u,a,f;if(!/(38|40|27)/.test(n.keyCode))return;r=e(this),n.preventDefault(),n.stopPropagation();if(r.is(".disabled, :disabled"))return;u=i(r),a=u.hasClass("open");if(!a||a&&n.keyCode==27)return n.which==27&&u.find(t).focus(),r.click();s=e("[role=menu] li:not(.divider):visible a",u);if(!s.length)return;f=s.index(s.filter(":focus")),n.keyCode==38&&f>0&&f--,n.keyCode==40&&f<s.length-1&&f++,~f||(f=0),s.eq(f).focus()}};var s=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var r=e(this),i=r.data("dropdown");i||r.data("dropdown",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.dropdown.Constructor=n,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=s,this},e(document).on("click.dropdown.data-api",r).on("click.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown.data-api",t,n.prototype.toggle).on("keydown.dropdown.data-api",t+", [role=menu]",n.prototype.keydown)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=this,n=e.Event("show");this.$element.trigger(n);if(this.isShown||n.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var n=e.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),n&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1),t.enforceFocus(),n?t.$element.one(e.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})},hide:function(t){t&&t.preventDefault();var n=this;t=e.Event("hide"),this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=!1,this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var t=this;e(document).on("focusin.modal",function(e){t.$element[0]!==e.target&&!t.$element.has(e.target).length&&t.$element.focus()})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){t.which==27&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,n=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(n),t.hideModal()})},hideModal:function(){var e=this;this.$element.hide(),this.backdrop(function(){e.removeBackdrop(),e.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(t){var n=this,r=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=e.support.transition&&r;this.$backdrop=e('<div class="modal-backdrop '+r+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?e.proxy(this.$element[0].focus,this.$element[0]):e.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!t)return;i?this.$backdrop.one(e.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,t):t()):t&&t()}};var n=e.fn.modal;e.fn.modal=function(n){return this.each(function(){var r=e(this),i=r.data("modal"),s=e.extend({},e.fn.modal.defaults,r.data(),typeof n=="object"&&n);i||r.data("modal",i=new t(this,s)),typeof n=="string"?i[n]():s.show&&i.show()})},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=t,e.fn.modal.noConflict=function(){return e.fn.modal=n,this},e(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());t.preventDefault(),i.modal(s).one("hide",function(){n.focus()})})}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,r){var i,s,o,u,a;this.type=t,this.$element=e(n),this.options=this.getOptions(r),this.enabled=!0,o=this.options.trigger.split(" ");for(a=o.length;a--;)u=o[a],u=="click"?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):u!="manual"&&(i=u=="hover"?"mouseenter":"focus",s=u=="hover"?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,e.proxy(this.leave,this)));this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,this.$element.data(),t),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var n=e.fn[this.type].defaults,r={},i;this._options&&e.each(this._options,function(e,t){n[e]!=t&&(r[e]=t)},this),i=e(t.currentTarget)[this.type](r).data(this.type);if(!i.options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout(function(){i.hoverState=="in"&&i.show()},i.options.delay.show)},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!n.options.delay||!n.options.delay.hide)return n.hide();n.hoverState="out",this.timeout=setTimeout(function(){n.hoverState=="out"&&n.hide()},n.options.delay.hide)},show:function(){var t,n,r,i,s,o,u=e.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(u);if(u.isDefaultPrevented())return;t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),s=typeof this.options.placement=="function"?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),n=this.getPosition(),r=t[0].offsetWidth,i=t[0].offsetHeight;switch(s){case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-r/2};break;case"top":o={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-r};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width}}this.applyPlacement(o,s),this.$element.trigger("shown")}},applyPlacement:function(e,t){var n=this.tip(),r=n[0].offsetWidth,i=n[0].offsetHeight,s,o,u,a;n.offset(e).addClass(t).addClass("in"),s=n[0].offsetWidth,o=n[0].offsetHeight,t=="top"&&o!=i&&(e.top=e.top+i-o,a=!0),t=="bottom"||t=="top"?(u=0,e.left<0&&(u=e.left*-2,e.left=0,n.offset(e),s=n[0].offsetWidth,o=n[0].offsetHeight),this.replaceArrow(u-r+s,s,"left")):this.replaceArrow(o-i,o,"top"),a&&n.offset(e)},replaceArrow:function(e,t,n){this.arrow().css(n,e?50*(1-e/t)+"%":"")},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){function i(){var t=setTimeout(function(){n.off(e.support.transition.end).detach()},500);n.one(e.support.transition.end,function(){clearTimeout(t),n.detach()})}var t=this,n=this.tip(),r=e.Event("hide");this.$element.trigger(r);if(r.isDefaultPrevented())return;return n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?i():n.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return e.extend({},typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title),e},tip:function(){return this.$tip=this.$tip||e(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var n=t?e(t.currentTarget)[this.type](this._options).data(this.type):this;n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var n=e.fn.tooltip;e.fn.tooltip=function(n){return this.each(function(){var r=e(this),i=r.data("tooltip"),s=typeof n=="object"&&n;i||r.data("tooltip",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=n,this}}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("popover",e,t)};t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content")[this.options.html?"html":"text"](n),e.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var e,t=this.$element,n=this.options;return e=(typeof n.content=="function"?n.content.call(t[0]):n.content)||t.attr("data-content"),e},tip:function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var n=e.fn.popover;e.fn.popover=function(n){return this.each(function(){var r=e(this),i=r.data("popover"),s=typeof n=="object"&&n;i||r.data("popover",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.popover.Constructor=t,e.fn.popover.defaults=e.extend({},e.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.fn.popover.noConflict=function(){return e.fn.popover=n,this}}(window.jQuery),!function(e){"use strict";function t(t,n){var r=e.proxy(this.process,this),i=e(t).is("body")?e(window):e(t),s;this.options=e.extend({},e.fn.scrollspy.defaults,n),this.$scrollElement=i.on("scroll.scroll-spy.data-api",r),this.selector=(this.options.target||(s=e(t).attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t=this,n;this.offsets=e([]),this.targets=e([]),n=this.$body.find(this.selector).map(function(){var n=e(this),r=n.data("target")||n.attr("href"),i=/^#\w/.test(r)&&e(r);return i&&i.length&&[[i.position().top+(!e.isWindow(t.$scrollElement.get(0))&&t.$scrollElement.scrollTop()),r]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},process:function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;if(e>=n)return s!=(o=i.last()[0])&&this.activate(o);for(o=r.length;o--;)s!=i[o]&&e>=r[o]&&(!r[o+1]||e<=r[o+1])&&this.activate(i[o])},activate:function(t){var n,r;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',n=e(r).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}};var n=e.fn.scrollspy;e.fn.scrollspy=function(n){return this.each(function(){var r=e(this),i=r.data("scrollspy"),s=typeof n=="object"&&n;i||r.data("scrollspy",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=n,this},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery),!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.attr("data-target"),i,s,o;r||(r=t.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));if(t.parent("li").hasClass("active"))return;i=n.find(".active:last a")[0],o=e.Event("show",{relatedTarget:i}),t.trigger(o);if(o.isDefaultPrevented())return;s=e(r),this.activate(t.parent("li"),n),this.activate(s,s.parent(),function(){t.trigger({type:"shown",relatedTarget:i})})},activate:function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),r&&r()}var i=n.find("> .active"),s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o):o(),i.removeClass("in")}};var n=e.fn.tab;e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("tab");i||r.data("tab",i=new t(this)),typeof n=="string"&&i[n]()})},e.fn.tab.Constructor=t,e.fn.tab.noConflict=function(){return e.fn.tab=n,this},e(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=e(this.options.menu),this.shown=!1,this.listen()};t.prototype={constructor:t,select:function(){var e=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(e)).change(),this.hide()},updater:function(e){return e},show:function(){var t=e.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:t.top+t.height,left:t.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(t){var n;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(n=e.isFunction(this.source)?this.source(this.query,e.proxy(this.process,this)):this.source,n?this.process(n):this)},process:function(t){var n=this;return t=e.grep(t,function(e){return n.matcher(e)}),t=this.sorter(t),t.length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(e){return~e.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){var t=[],n=[],r=[],i;while(i=e.shift())i.toLowerCase().indexOf(this.query.toLowerCase())?~i.indexOf(this.query)?n.push(i):r.push(i):t.push(i);return t.concat(n,r)},highlighter:function(e){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return e.replace(new RegExp("("+t+")","ig"),function(e,t){return"<strong>"+t+"</strong>"})},render:function(t){var n=this;return t=e(t).map(function(t,r){return t=e(n.options.item).attr("data-value",r),t.find("a").html(n.highlighter(r)),t[0]}),t.first().addClass("active"),this.$menu.html(t),this},next:function(t){var n=this.$menu.find(".active").removeClass("active"),r=n.next();r.length||(r=e(this.$menu.find("li")[0])),r.addClass("active")},prev:function(e){var t=this.$menu.find(".active").removeClass("active"),n=t.prev();n.length||(n=this.$menu.find("li").last()),n.addClass("active")},listen:function(){this.$element.on("focus",e.proxy(this.focus,this)).on("blur",e.proxy(this.blur,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",e.proxy(this.keydown,this)),this.$menu.on("click",e.proxy(this.click,this)).on("mouseenter","li",e.proxy(this.mouseenter,this)).on("mouseleave","li",e.proxy(this.mouseleave,this))},eventSupported:function(e){var t=e in this.$element;return t||(this.$element.setAttribute(e,"return;"),t=typeof this.$element[e]=="function"),t},move:function(e){if(!this.shown)return;switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:e.preventDefault(),this.prev();break;case 40:e.preventDefault(),this.next()}e.stopPropagation()},keydown:function(t){this.suppressKeyPressRepeat=~e.inArray(t.keyCode,[40,38,9,13,27]),this.move(t)},keypress:function(e){if(this.suppressKeyPressRepeat)return;this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}e.stopPropagation(),e.preventDefault()},focus:function(e){this.focused=!0},blur:function(e){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(e){e.stopPropagation(),e.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(t){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),e(t.currentTarget).addClass("active")},mouseleave:function(e){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var n=e.fn.typeahead;e.fn.typeahead=function(n){return this.each(function(){var r=e(this),i=r.data("typeahead"),s=typeof n=="object"&&n;i||r.data("typeahead",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},e.fn.typeahead.Constructor=t,e.fn.typeahead.noConflict=function(){return e.fn.typeahead=n,this},e(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var n=e(this);if(n.data("typeahead"))return;n.typeahead(n.data())})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=e.extend({},e.fn.affix.defaults,n),this.$window=e(window).on("scroll.affix.data-api",e.proxy(this.checkPosition,this)).on("click.affix.data-api",e.proxy(function(){setTimeout(e.proxy(this.checkPosition,this),1)},this)),this.$element=e(t),this.checkPosition()};t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var t=e(document).height(),n=this.$window.scrollTop(),r=this.$element.offset(),i=this.options.offset,s=i.bottom,o=i.top,u="affix affix-top affix-bottom",a;typeof i!="object"&&(s=o=i),typeof o=="function"&&(o=i.top()),typeof s=="function"&&(s=i.bottom()),a=this.unpin!=null&&n+this.unpin<=r.top?!1:s!=null&&r.top+this.$element.height()>=t-s?"bottom":o!=null&&n<=o?"top":!1;if(this.affixed===a)return;this.affixed=a,this.unpin=a=="bottom"?r.top-n:null,this.$element.removeClass(u).addClass("affix"+(a?"-"+a:""))};var n=e.fn.affix;e.fn.affix=function(n){return this.each(function(){var r=e(this),i=r.data("affix"),s=typeof n=="object"&&n;i||r.data("affix",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.affix.Constructor=t,e.fn.affix.defaults={offset:0},e.fn.affix.noConflict=function(){return e.fn.affix=n,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)})})}(window.jQuery);
// Chosen, a Select Box Enhancer for jQuery and Protoype
// by Patrick Filler for Harvest, http://getharvest.com
//
// Version 0.9.12
// Full source at https://github.com/harvesthq/chosen
// Copyright (c) 2011 Harvest http://getharvest.com

// MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
// This file is generated by `cake build`, do not edit it by hand.
(function() {
  var SelectParser;

  SelectParser = (function() {

    function SelectParser() {
      this.options_index = 0;
      this.parsed = [];
    }

    SelectParser.prototype.add_node = function(child) {
      if (child.nodeName.toUpperCase() === "OPTGROUP") {
        return this.add_group(child);
      } else {
        return this.add_option(child);
      }
    };

    SelectParser.prototype.add_group = function(group) {
      var group_position, option, _i, _len, _ref, _results;
      group_position = this.parsed.length;
      this.parsed.push({
        array_index: group_position,
        group: true,
        label: group.label,
        children: 0,
        disabled: group.disabled
      });
      _ref = group.childNodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        _results.push(this.add_option(option, group_position, group.disabled));
      }
      return _results;
    };

    SelectParser.prototype.add_option = function(option, group_position, group_disabled) {
      if (option.nodeName.toUpperCase() === "OPTION") {
        if (option.text !== "") {
          if (group_position != null) {
            this.parsed[group_position].children += 1;
          }
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            value: option.value,
            text: option.text,
            html: option.innerHTML,
            selected: option.selected,
            disabled: group_disabled === true ? group_disabled : option.disabled,
            group_array_index: group_position,
            classes: option.className,
            style: option.style.cssText
          });
        } else {
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            empty: true
          });
        }
        return this.options_index += 1;
      }
    };

    return SelectParser;

  })();

  SelectParser.select_to_array = function(select) {
    var child, parser, _i, _len, _ref;
    parser = new SelectParser();
    _ref = select.childNodes;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      parser.add_node(child);
    }
    return parser.parsed;
  };

  this.SelectParser = SelectParser;

}).call(this);

/*
Chosen source: generate output using 'cake build'
Copyright (c) 2011 by Harvest
*/


(function() {
  var AbstractChosen, root;

  root = this;

  AbstractChosen = (function() {

    function AbstractChosen(form_field, options) {
      this.form_field = form_field;
      this.options = options != null ? options : {};
      this.is_multiple = this.form_field.multiple;
      this.set_default_text();
      this.set_default_values();
      this.setup();
      this.set_up_html();
      this.register_observers();
      this.finish_setup();
    }

    AbstractChosen.prototype.set_default_values = function() {
      var _this = this;
      this.click_test_action = function(evt) {
        return _this.test_active_click(evt);
      };
      this.activate_action = function(evt) {
        return _this.activate_field(evt);
      };
      this.active_field = false;
      this.mouse_on_container = false;
      this.results_showing = false;
      this.result_highlighted = null;
      this.result_single_selected = null;
      this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
      this.disable_search_threshold = this.options.disable_search_threshold || 0;
      this.disable_search = this.options.disable_search || false;
      this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
      this.search_contains = this.options.search_contains || false;
      this.choices = 0;
      this.single_backstroke_delete = this.options.single_backstroke_delete || false;
      this.max_selected_options = this.options.max_selected_options || Infinity;
      return this.inherit_select_classes = this.options.inherit_select_classes || false;
    };

    AbstractChosen.prototype.set_default_text = function() {
      if (this.form_field.getAttribute("data-placeholder")) {
        this.default_text = this.form_field.getAttribute("data-placeholder");
      } else if (this.is_multiple) {
        this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || "Select Some Options";
      } else {
        this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || "Select an Option";
      }
      return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || "No results match";
    };

    AbstractChosen.prototype.mouse_enter = function() {
      return this.mouse_on_container = true;
    };

    AbstractChosen.prototype.mouse_leave = function() {
      return this.mouse_on_container = false;
    };

    AbstractChosen.prototype.input_focus = function(evt) {
      var _this = this;
      if (this.is_multiple) {
        if (!this.active_field) {
          return setTimeout((function() {
            return _this.container_mousedown();
          }), 50);
        }
      } else {
        if (!this.active_field) {
          return this.activate_field();
        }
      }
    };

    AbstractChosen.prototype.input_blur = function(evt) {
      var _this = this;
      if (!this.mouse_on_container) {
        this.active_field = false;
        return setTimeout((function() {
          return _this.blur_test();
        }), 100);
      }
    };

    AbstractChosen.prototype.result_add_option = function(option) {
      var classes, style;
      if (!option.disabled) {
        option.dom_id = this.container_id + "_o_" + option.array_index;
        classes = option.selected && this.is_multiple ? [] : ["active-result"];
        if (option.selected) {
          classes.push("result-selected");
        }
        if (option.group_array_index != null) {
          classes.push("group-option");
        }
        if (option.classes !== "") {
          classes.push(option.classes);
        }
        style = option.style.cssText !== "" ? " style=\"" + option.style + "\"" : "";
        return '<li id="' + option.dom_id + '" class="' + classes.join(' ') + '"' + style + '>' + option.html + '</li>';
      } else {
        return "";
      }
    };

    AbstractChosen.prototype.results_update_field = function() {
      this.set_default_text();
      if (!this.is_multiple) {
        this.results_reset_cleanup();
      }
      this.result_clear_highlight();
      this.result_single_selected = null;
      return this.results_build();
    };

    AbstractChosen.prototype.results_toggle = function() {
      if (this.results_showing) {
        return this.results_hide();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.results_search = function(evt) {
      if (this.results_showing) {
        return this.winnow_results();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.keyup_checker = function(evt) {
      var stroke, _ref;
      stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
      this.search_field_scale();
      switch (stroke) {
        case 8:
          if (this.is_multiple && this.backstroke_length < 1 && this.choices > 0) {
            return this.keydown_backstroke();
          } else if (!this.pending_backstroke) {
            this.result_clear_highlight();
            return this.results_search();
          }
          break;
        case 13:
          evt.preventDefault();
          if (this.results_showing) {
            return this.result_select(evt);
          }
          break;
        case 27:
          if (this.results_showing) {
            this.results_hide();
          }
          return true;
        case 9:
        case 38:
        case 40:
        case 16:
        case 91:
        case 17:
          break;
        default:
          return this.results_search();
      }
    };

    AbstractChosen.prototype.generate_field_id = function() {
      var new_id;
      new_id = this.generate_random_id();
      this.form_field.id = new_id;
      return new_id;
    };

    AbstractChosen.prototype.generate_random_char = function() {
      var chars, newchar, rand;
      chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      rand = Math.floor(Math.random() * chars.length);
      return newchar = chars.substring(rand, rand + 1);
    };

    return AbstractChosen;

  })();

  root.AbstractChosen = AbstractChosen;

}).call(this);

/*
Chosen source: generate output using 'cake build'
Copyright (c) 2011 by Harvest
*/


(function() {
  var $, Chosen, get_side_border_padding, root,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  root = this;

  $ = jQuery;

  $.fn.extend({
    chosen: function(options) {
      var browser, match, ua;
      ua = navigator.userAgent.toLowerCase();
      match = /(msie) ([\w.]+)/.exec(ua) || [];
      browser = {
        name: match[1] || "",
        version: match[2] || "0"
      };
      if (browser.name === "msie" && (browser.version === "6.0" || (browser.version === "7.0" && document.documentMode === 7))) {
        return this;
      }
      return this.each(function(input_field) {
        var $this;
        $this = $(this);
        if (!$this.hasClass("chzn-done")) {
          return $this.data('chosen', new Chosen(this, options));
        }
      });
    }
  });

  Chosen = (function(_super) {

    __extends(Chosen, _super);

    function Chosen() {
      return Chosen.__super__.constructor.apply(this, arguments);
    }

    Chosen.prototype.setup = function() {
      this.form_field_jq = $(this.form_field);
      this.current_value = this.form_field_jq.val();
      return this.is_rtl = this.form_field_jq.hasClass("chzn-rtl");
    };

    Chosen.prototype.finish_setup = function() {
      return this.form_field_jq.addClass("chzn-done");
    };

    Chosen.prototype.set_up_html = function() {
      var container_classes, container_div, container_props, dd_top, dd_width, sf_width;
      this.container_id = this.form_field.id.length ? this.form_field.id.replace(/[^\w]/g, '_') : this.generate_field_id();
      this.container_id += "_chzn";
      container_classes = ["chzn-container"];
      container_classes.push("chzn-container-" + (this.is_multiple ? "multi" : "single"));
      if (this.inherit_select_classes && this.form_field.className) {
        container_classes.push(this.form_field.className);
      }
      if (this.is_rtl) {
        container_classes.push("chzn-rtl");
      }
      this.f_width = this.form_field_jq.outerWidth();
      container_props = {
        id: this.container_id,
        "class": container_classes.join(' '),
        style: 'width: ' + this.f_width + 'px;',
        title: this.form_field.title
      };
      container_div = $("<div />", container_props);
      if (this.is_multiple) {
        container_div.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop" style="left:-9000px;"><ul class="chzn-results"></ul></div>');
      } else {
        container_div.html('<a href="javascript:void(0)" class="chzn-single chzn-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chzn-drop" style="left:-9000px;"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>');
      }
      this.form_field_jq.hide().after(container_div);
      this.container = $('#' + this.container_id);
      this.dropdown = this.container.find('div.chzn-drop').first();
      dd_top = this.container.height();
      dd_width = this.f_width - get_side_border_padding(this.dropdown);
      this.dropdown.css({
        "width": dd_width + "px",
        "top": dd_top + "px"
      });
      this.search_field = this.container.find('input').first();
      this.search_results = this.container.find('ul.chzn-results').first();
      this.search_field_scale();
      this.search_no_results = this.container.find('li.no-results').first();
      if (this.is_multiple) {
        this.search_choices = this.container.find('ul.chzn-choices').first();
        this.search_container = this.container.find('li.search-field').first();
      } else {
        this.search_container = this.container.find('div.chzn-search').first();
        this.selected_item = this.container.find('.chzn-single').first();
        sf_width = dd_width - get_side_border_padding(this.search_container) - get_side_border_padding(this.search_field);
        this.search_field.css({
          "width": sf_width + "px"
        });
      }
      this.results_build();
      this.set_tab_index();
      return this.form_field_jq.trigger("liszt:ready", {
        chosen: this
      });
    };

    Chosen.prototype.register_observers = function() {
      var _this = this;
      this.container.mousedown(function(evt) {
        _this.container_mousedown(evt);
      });
      this.container.mouseup(function(evt) {
        _this.container_mouseup(evt);
      });
      this.container.mouseenter(function(evt) {
        _this.mouse_enter(evt);
      });
      this.container.mouseleave(function(evt) {
        _this.mouse_leave(evt);
      });
      this.search_results.mouseup(function(evt) {
        _this.search_results_mouseup(evt);
      });
      this.search_results.mouseover(function(evt) {
        _this.search_results_mouseover(evt);
      });
      this.search_results.mouseout(function(evt) {
        _this.search_results_mouseout(evt);
      });
      this.form_field_jq.bind("liszt:updated", function(evt) {
        _this.results_update_field(evt);
      });
      this.form_field_jq.bind("liszt:activate", function(evt) {
        _this.activate_field(evt);
      });
      this.form_field_jq.bind("liszt:open", function(evt) {
        _this.container_mousedown(evt);
      });
      this.search_field.blur(function(evt) {
        _this.input_blur(evt);
      });
      this.search_field.keyup(function(evt) {
        _this.keyup_checker(evt);
      });
      this.search_field.keydown(function(evt) {
        _this.keydown_checker(evt);
      });
      this.search_field.focus(function(evt) {
        _this.input_focus(evt);
      });
      if (this.is_multiple) {
        return this.search_choices.click(function(evt) {
          _this.choices_click(evt);
        });
      } else {
        return this.container.click(function(evt) {
          evt.preventDefault();
        });
      }
    };

    Chosen.prototype.search_field_disabled = function() {
      this.is_disabled = this.form_field_jq[0].disabled;
      if (this.is_disabled) {
        this.container.addClass('chzn-disabled');
        this.search_field[0].disabled = true;
        if (!this.is_multiple) {
          this.selected_item.unbind("focus", this.activate_action);
        }
        return this.close_field();
      } else {
        this.container.removeClass('chzn-disabled');
        this.search_field[0].disabled = false;
        if (!this.is_multiple) {
          return this.selected_item.bind("focus", this.activate_action);
        }
      }
    };

    Chosen.prototype.container_mousedown = function(evt) {
      var target_closelink;
      if (!this.is_disabled) {
        target_closelink = evt != null ? ($(evt.target)).hasClass("search-choice-close") : false;
        if (evt && evt.type === "mousedown" && !this.results_showing) {
          evt.preventDefault();
        }
        if (!this.pending_destroy_click && !target_closelink) {
          if (!this.active_field) {
            if (this.is_multiple) {
              this.search_field.val("");
            }
            $(document).click(this.click_test_action);
            this.results_show();
          } else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents("a.chzn-single").length)) {
            evt.preventDefault();
            this.results_toggle();
          }
          return this.activate_field();
        } else {
          return this.pending_destroy_click = false;
        }
      }
    };

    Chosen.prototype.container_mouseup = function(evt) {
      if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
        return this.results_reset(evt);
      }
    };

    Chosen.prototype.blur_test = function(evt) {
      if (!this.active_field && this.container.hasClass("chzn-container-active")) {
        return this.close_field();
      }
    };

    Chosen.prototype.close_field = function() {
      $(document).unbind("click", this.click_test_action);
      this.active_field = false;
      this.results_hide();
      this.container.removeClass("chzn-container-active");
      this.winnow_results_clear();
      this.clear_backstroke();
      this.show_search_field_default();
      return this.search_field_scale();
    };

    Chosen.prototype.activate_field = function() {
      this.container.addClass("chzn-container-active");
      this.active_field = true;
      this.search_field.val(this.search_field.val());
      return this.search_field.focus();
    };

    Chosen.prototype.test_active_click = function(evt) {
      if ($(evt.target).parents('#' + this.container_id).length) {
        return this.active_field = true;
      } else {
        return this.close_field();
      }
    };

    Chosen.prototype.results_build = function() {
      var content, data, _i, _len, _ref;
      this.parsing = true;
      this.results_data = root.SelectParser.select_to_array(this.form_field);
      if (this.is_multiple && this.choices > 0) {
        this.search_choices.find("li.search-choice").remove();
        this.choices = 0;
      } else if (!this.is_multiple) {
        this.selected_item.addClass("chzn-default").find("span").text(this.default_text);
        if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
          this.container.addClass("chzn-container-single-nosearch");
        } else {
          this.container.removeClass("chzn-container-single-nosearch");
        }
      }
      content = '';
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        data = _ref[_i];
        if (data.group) {
          content += this.result_add_group(data);
        } else if (!data.empty) {
          content += this.result_add_option(data);
          if (data.selected && this.is_multiple) {
            this.choice_build(data);
          } else if (data.selected && !this.is_multiple) {
            this.selected_item.removeClass("chzn-default").find("span").text(data.text);
            if (this.allow_single_deselect) {
              this.single_deselect_control_build();
            }
          }
        }
      }
      this.search_field_disabled();
      this.show_search_field_default();
      this.search_field_scale();
      this.search_results.html(content);
      return this.parsing = false;
    };

    Chosen.prototype.result_add_group = function(group) {
      if (!group.disabled) {
        group.dom_id = this.container_id + "_g_" + group.array_index;
        return '<li id="' + group.dom_id + '" class="group-result">' + $("<div />").text(group.label).html() + '</li>';
      } else {
        return "";
      }
    };

    Chosen.prototype.result_do_highlight = function(el) {
      var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
      if (el.length) {
        this.result_clear_highlight();
        this.result_highlight = el;
        this.result_highlight.addClass("highlighted");
        maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
        visible_top = this.search_results.scrollTop();
        visible_bottom = maxHeight + visible_top;
        high_top = this.result_highlight.position().top + this.search_results.scrollTop();
        high_bottom = high_top + this.result_highlight.outerHeight();
        if (high_bottom >= visible_bottom) {
          return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
        } else if (high_top < visible_top) {
          return this.search_results.scrollTop(high_top);
        }
      }
    };

    Chosen.prototype.result_clear_highlight = function() {
      if (this.result_highlight) {
        this.result_highlight.removeClass("highlighted");
      }
      return this.result_highlight = null;
    };

    Chosen.prototype.results_show = function() {
      var dd_top;
      if (!this.is_multiple) {
        this.selected_item.addClass("chzn-single-with-drop");
        if (this.result_single_selected) {
          this.result_do_highlight(this.result_single_selected);
        }
      } else if (this.max_selected_options <= this.choices) {
        this.form_field_jq.trigger("liszt:maxselected", {
          chosen: this
        });
        return false;
      }
      dd_top = this.is_multiple ? this.container.height() : this.container.height() - 1;
      this.form_field_jq.trigger("liszt:showing_dropdown", {
        chosen: this
      });
      this.dropdown.css({
        "top": dd_top + "px",
        "left": 0
      });
      this.results_showing = true;
      this.search_field.focus();
      this.search_field.val(this.search_field.val());
      return this.winnow_results();
    };

    Chosen.prototype.results_hide = function() {
      if (!this.is_multiple) {
        this.selected_item.removeClass("chzn-single-with-drop");
      }
      this.result_clear_highlight();
      this.form_field_jq.trigger("liszt:hiding_dropdown", {
        chosen: this
      });
      this.dropdown.css({
        "left": "-9000px"
      });
      return this.results_showing = false;
    };

    Chosen.prototype.set_tab_index = function(el) {
      var ti;
      if (this.form_field_jq.attr("tabindex")) {
        ti = this.form_field_jq.attr("tabindex");
        this.form_field_jq.attr("tabindex", -1);
        return this.search_field.attr("tabindex", ti);
      }
    };

    Chosen.prototype.show_search_field_default = function() {
      if (this.is_multiple && this.choices < 1 && !this.active_field) {
        this.search_field.val(this.default_text);
        return this.search_field.addClass("default");
      } else {
        this.search_field.val("");
        return this.search_field.removeClass("default");
      }
    };

    Chosen.prototype.search_results_mouseup = function(evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target.length) {
        this.result_highlight = target;
        this.result_select(evt);
        return this.search_field.focus();
      }
    };

    Chosen.prototype.search_results_mouseover = function(evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target) {
        return this.result_do_highlight(target);
      }
    };

    Chosen.prototype.search_results_mouseout = function(evt) {
      if ($(evt.target).hasClass("active-result" || $(evt.target).parents('.active-result').first())) {
        return this.result_clear_highlight();
      }
    };

    Chosen.prototype.choices_click = function(evt) {
      evt.preventDefault();
      if (this.active_field && !($(evt.target).hasClass("search-choice" || $(evt.target).parents('.search-choice').first)) && !this.results_showing) {
        return this.results_show();
      }
    };

    Chosen.prototype.choice_build = function(item) {
      var choice_id, html, link,
        _this = this;
      if (this.is_multiple && this.max_selected_options <= this.choices) {
        this.form_field_jq.trigger("liszt:maxselected", {
          chosen: this
        });
        return false;
      }
      choice_id = this.container_id + "_c_" + item.array_index;
      this.choices += 1;
      if (item.disabled) {
        html = '<li class="search-choice search-choice-disabled" id="' + choice_id + '"><span>' + item.html + '</span></li>';
      } else {
        html = '<li class="search-choice" id="' + choice_id + '"><span>' + item.html + '</span><a href="javascript:void(0)" class="search-choice-close" rel="' + item.array_index + '"></a></li>';
      }
      this.search_container.before(html);
      link = $('#' + choice_id).find("a").first();
      return link.click(function(evt) {
        return _this.choice_destroy_link_click(evt);
      });
    };

    Chosen.prototype.choice_destroy_link_click = function(evt) {
      evt.preventDefault();
      if (!this.is_disabled) {
        this.pending_destroy_click = true;
        return this.choice_destroy($(evt.target));
      } else {
        return evt.stopPropagation;
      }
    };

    Chosen.prototype.choice_destroy = function(link) {
      if (this.result_deselect(link.attr("rel"))) {
        this.choices -= 1;
        this.show_search_field_default();
        if (this.is_multiple && this.choices > 0 && this.search_field.val().length < 1) {
          this.results_hide();
        }
        link.parents('li').first().remove();
        return this.search_field_scale();
      }
    };

    Chosen.prototype.results_reset = function() {
      this.form_field.options[0].selected = true;
      this.selected_item.find("span").text(this.default_text);
      if (!this.is_multiple) {
        this.selected_item.addClass("chzn-default");
      }
      this.show_search_field_default();
      this.results_reset_cleanup();
      this.form_field_jq.trigger("change");
      if (this.active_field) {
        return this.results_hide();
      }
    };

    Chosen.prototype.results_reset_cleanup = function() {
      this.current_value = this.form_field_jq.val();
      return this.selected_item.find("abbr").remove();
    };

    Chosen.prototype.result_select = function(evt) {
      var high, high_id, item, position;
      if (this.result_highlight) {
        high = this.result_highlight;
        high_id = high.attr("id");
        this.result_clear_highlight();
        if (this.is_multiple) {
          this.result_deactivate(high);
        } else {
          this.search_results.find(".result-selected").removeClass("result-selected");
          this.result_single_selected = high;
          this.selected_item.removeClass("chzn-default");
        }
        high.addClass("result-selected");
        position = high_id.substr(high_id.lastIndexOf("_") + 1);
        item = this.results_data[position];
        item.selected = true;
        this.form_field.options[item.options_index].selected = true;
        if (this.is_multiple) {
          this.choice_build(item);
        } else {
          this.selected_item.find("span").first().text(item.text);
          if (this.allow_single_deselect) {
            this.single_deselect_control_build();
          }
        }
        if (!((evt.metaKey || evt.ctrlKey) && this.is_multiple)) {
          this.results_hide();
        }
        this.search_field.val("");
        if (this.is_multiple || this.form_field_jq.val() !== this.current_value) {
          this.form_field_jq.trigger("change", {
            'selected': this.form_field.options[item.options_index].value
          });
        }
        this.current_value = this.form_field_jq.val();
        return this.search_field_scale();
      }
    };

    Chosen.prototype.result_activate = function(el) {
      return el.addClass("active-result");
    };

    Chosen.prototype.result_deactivate = function(el) {
      return el.removeClass("active-result");
    };

    Chosen.prototype.result_deselect = function(pos) {
      var result, result_data;
      result_data = this.results_data[pos];
      if (!this.form_field.options[result_data.options_index].disabled) {
        result_data.selected = false;
        this.form_field.options[result_data.options_index].selected = false;
        result = $("#" + this.container_id + "_o_" + pos);
        result.removeClass("result-selected").addClass("active-result").show();
        this.result_clear_highlight();
        this.winnow_results();
        this.form_field_jq.trigger("change", {
          deselected: this.form_field.options[result_data.options_index].value
        });
        this.search_field_scale();
        return true;
      } else {
        return false;
      }
    };

    Chosen.prototype.single_deselect_control_build = function() {
      if (this.allow_single_deselect && this.selected_item.find("abbr").length < 1) {
        return this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
      }
    };

    Chosen.prototype.winnow_results = function() {
      var found, option, part, parts, regex, regexAnchor, result, result_id, results, searchText, startpos, text, zregex, _i, _j, _len, _len1, _ref;
      this.no_results_clear();
      results = 0;
      searchText = this.search_field.val() === this.default_text ? "" : $('<div/>').text($.trim(this.search_field.val())).html();
      regexAnchor = this.search_contains ? "" : "^";
      regex = new RegExp(regexAnchor + searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), 'i');
      zregex = new RegExp(searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), 'i');
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        if (!option.disabled && !option.empty) {
          if (option.group) {
            $('#' + option.dom_id).css('display', 'none');
          } else if (!(this.is_multiple && option.selected)) {
            found = false;
            result_id = option.dom_id;
            result = $("#" + result_id);
            if (regex.test(option.html)) {
              found = true;
              results += 1;
            } else if (this.enable_split_word_search && (option.html.indexOf(" ") >= 0 || option.html.indexOf("[") === 0)) {
              parts = option.html.replace(/\[|\]/g, "").split(" ");
              if (parts.length) {
                for (_j = 0, _len1 = parts.length; _j < _len1; _j++) {
                  part = parts[_j];
                  if (regex.test(part)) {
                    found = true;
                    results += 1;
                  }
                }
              }
            }
            if (found) {
              if (searchText.length) {
                startpos = option.html.search(zregex);
                text = option.html.substr(0, startpos + searchText.length) + '</em>' + option.html.substr(startpos + searchText.length);
                text = text.substr(0, startpos) + '<em>' + text.substr(startpos);
              } else {
                text = option.html;
              }
              result.html(text);
              this.result_activate(result);
              if (option.group_array_index != null) {
                $("#" + this.results_data[option.group_array_index].dom_id).css('display', 'list-item');
              }
            } else {
              if (this.result_highlight && result_id === this.result_highlight.attr('id')) {
                this.result_clear_highlight();
              }
              this.result_deactivate(result);
            }
          }
        }
      }
      if (results < 1 && searchText.length) {
        return this.no_results(searchText);
      } else {
        return this.winnow_results_set_highlight();
      }
    };

    Chosen.prototype.winnow_results_clear = function() {
      var li, lis, _i, _len, _results;
      this.search_field.val("");
      lis = this.search_results.find("li");
      _results = [];
      for (_i = 0, _len = lis.length; _i < _len; _i++) {
        li = lis[_i];
        li = $(li);
        if (li.hasClass("group-result")) {
          _results.push(li.css('display', 'auto'));
        } else if (!this.is_multiple || !li.hasClass("result-selected")) {
          _results.push(this.result_activate(li));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Chosen.prototype.winnow_results_set_highlight = function() {
      var do_high, selected_results;
      if (!this.result_highlight) {
        selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
        do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();
        if (do_high != null) {
          return this.result_do_highlight(do_high);
        }
      }
    };

    Chosen.prototype.no_results = function(terms) {
      var no_results_html;
      no_results_html = $('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
      no_results_html.find("span").first().html(terms);
      return this.search_results.append(no_results_html);
    };

    Chosen.prototype.no_results_clear = function() {
      return this.search_results.find(".no-results").remove();
    };

    Chosen.prototype.keydown_arrow = function() {
      var first_active, next_sib;
      if (!this.result_highlight) {
        first_active = this.search_results.find("li.active-result").first();
        if (first_active) {
          this.result_do_highlight($(first_active));
        }
      } else if (this.results_showing) {
        next_sib = this.result_highlight.nextAll("li.active-result").first();
        if (next_sib) {
          this.result_do_highlight(next_sib);
        }
      }
      if (!this.results_showing) {
        return this.results_show();
      }
    };

    Chosen.prototype.keyup_arrow = function() {
      var prev_sibs;
      if (!this.results_showing && !this.is_multiple) {
        return this.results_show();
      } else if (this.result_highlight) {
        prev_sibs = this.result_highlight.prevAll("li.active-result");
        if (prev_sibs.length) {
          return this.result_do_highlight(prev_sibs.first());
        } else {
          if (this.choices > 0) {
            this.results_hide();
          }
          return this.result_clear_highlight();
        }
      }
    };

    Chosen.prototype.keydown_backstroke = function() {
      var next_available_destroy;
      if (this.pending_backstroke) {
        this.choice_destroy(this.pending_backstroke.find("a").first());
        return this.clear_backstroke();
      } else {
        next_available_destroy = this.search_container.siblings("li.search-choice").last();
        if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
          this.pending_backstroke = next_available_destroy;
          if (this.single_backstroke_delete) {
            return this.keydown_backstroke();
          } else {
            return this.pending_backstroke.addClass("search-choice-focus");
          }
        }
      }
    };

    Chosen.prototype.clear_backstroke = function() {
      if (this.pending_backstroke) {
        this.pending_backstroke.removeClass("search-choice-focus");
      }
      return this.pending_backstroke = null;
    };

    Chosen.prototype.keydown_checker = function(evt) {
      var stroke, _ref;
      stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
      this.search_field_scale();
      if (stroke !== 8 && this.pending_backstroke) {
        this.clear_backstroke();
      }
      switch (stroke) {
        case 8:
          this.backstroke_length = this.search_field.val().length;
          break;
        case 9:
          if (this.results_showing && !this.is_multiple) {
            this.result_select(evt);
          }
          this.mouse_on_container = false;
          break;
        case 13:
          evt.preventDefault();
          break;
        case 38:
          evt.preventDefault();
          this.keyup_arrow();
          break;
        case 40:
          this.keydown_arrow();
          break;
      }
    };

    Chosen.prototype.search_field_scale = function() {
      var dd_top, div, h, style, style_block, styles, w, _i, _len;
      if (this.is_multiple) {
        h = 0;
        w = 0;
        style_block = "position:absolute; left: -1000px; top: -1000px; display:none;";
        styles = ['font-size', 'font-style', 'font-weight', 'font-family', 'line-height', 'text-transform', 'letter-spacing'];
        for (_i = 0, _len = styles.length; _i < _len; _i++) {
          style = styles[_i];
          style_block += style + ":" + this.search_field.css(style) + ";";
        }
        div = $('<div />', {
          'style': style_block
        });
        div.text(this.search_field.val());
        $('body').append(div);
        w = div.width() + 25;
        div.remove();
        if (w > this.f_width - 10) {
          w = this.f_width - 10;
        }
        this.search_field.css({
          'width': w + 'px'
        });
        dd_top = this.container.height();
        return this.dropdown.css({
          "top": dd_top + "px"
        });
      }
    };

    Chosen.prototype.generate_random_id = function() {
      var string;
      string = "sel" + this.generate_random_char() + this.generate_random_char() + this.generate_random_char();
      while ($("#" + string).length > 0) {
        string += this.generate_random_char();
      }
      return string;
    };

    return Chosen;

  })(AbstractChosen);

  root.Chosen = Chosen;

  get_side_border_padding = function(elmt) {
    var side_border_padding;
    return side_border_padding = elmt.outerWidth() - elmt.width();
  };

  root.get_side_border_padding = get_side_border_padding;

}).call(this);


/**
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/**
 * Implementing Drag and Drop functionality in AngularJS is easier than ever.
 * Demo: http://codef0rmer.github.com/angular-dragdrop/
 *
 * @version 1.0.4
 *
 * (c) 2013 Amit Gharat a.k.a codef0rmer <amit.2006.it@gmail.com> - amitgharat.wordpress.com
 */

(function (window, angular, undefined) {
'use strict';

var jqyoui = angular.module('ngDragDrop', []).service('ngDragDropService', ['$timeout', '$parse', function($timeout, $parse) {
    this.callEventCallback = function (scope, callbackName, event, ui) {
      if (!callbackName) {
        return;
      }
      var args = [event, ui];
      var match = callbackName.match(/^(.+)\((.+)\)$/);
      if (match !== null) {
        callbackName = match[1];
        var values = eval('[' + match[0].replace(/^(.+)\(/, '').replace(/\)/, '') + ']');
        args.push.apply(args, values);
      }
      scope.$apply(scope[callbackName].apply(scope, args));
    };

    this.invokeDrop = function ($draggable, $droppable, event, ui) {
      var dragModel = '',
        dropModel = '',
        dragSettings = {},
        dropSettings = {},
        jqyoui_pos = null,
        dragItem = {},
        dropItem = {},
        dragModelValue,
        dropModelValue,
        $droppableDraggable = null,
        droppableScope = $droppable.scope(),
        draggableScope = $draggable.scope();

      dragModel = $draggable.ngattr('ng-model');
      dropModel = $droppable.ngattr('ng-model');
      dragModelValue = draggableScope.$eval(dragModel);
      dropModelValue = droppableScope.$eval(dropModel);

      $droppableDraggable = $droppable.find('[jqyoui-draggable]:last');
      dropSettings = droppableScope.$eval($droppable.attr('jqyoui-droppable')) || [];
      dragSettings = draggableScope.$eval($draggable.attr('jqyoui-draggable')) || [];

      // Helps pick up the right item
      dragSettings.index = this.fixIndex(draggableScope, dragSettings, dragModelValue);
      dropSettings.index = this.fixIndex(droppableScope, dropSettings, dropModelValue);

      jqyoui_pos = angular.isArray(dragModelValue) ? dragSettings.index : null;
      dragItem = angular.isArray(dragModelValue) ? dragModelValue[jqyoui_pos] : dragModelValue;

      if (angular.isArray(dropModelValue) && dropSettings && dropSettings.index !== undefined) {
        dropItem = dropModelValue[dropSettings.index];
      } else if (!angular.isArray(dropModelValue)) {
        dropItem = dropModelValue;
      } else {
        dropItem = {};
      }

      if (dragSettings.animate === true) {
        this.move($draggable, $droppableDraggable.length > 0 ? $droppableDraggable : $droppable, null, 'fast', dropSettings, null);
        this.move($droppableDraggable.length > 0 && !dropSettings.multiple ? $droppableDraggable : [], $draggable.parent('[jqyoui-droppable]'), jqyoui.startXY, 'fast', dropSettings, function() {
          $timeout(function() {
            // Do not move this into move() to avoid flickering issue
            $draggable.css({'position': 'relative', 'left': '', 'top': ''});
            $droppableDraggable.css({'position': 'relative', 'left': '', 'top': ''});

            this.mutateDraggable(draggableScope, dropSettings, dragSettings, dragModel, dropModel, dropItem, $draggable);
            this.mutateDroppable(droppableScope, dropSettings, dragSettings, dropModel, dragItem, jqyoui_pos);
            this.callEventCallback(droppableScope, dropSettings.onDrop, event, ui);
          }.bind(this));
        }.bind(this));
      } else {
        $timeout(function() {
          this.mutateDraggable(draggableScope, dropSettings, dragSettings, dragModel, dropModel, dropItem, $draggable);
          this.mutateDroppable(droppableScope, dropSettings, dragSettings, dropModel, dragItem, jqyoui_pos);
          this.callEventCallback(droppableScope, dropSettings.onDrop, event, ui);
        }.bind(this));
      }
    };

    this.move = function($fromEl, $toEl, toPos, duration, dropSettings, callback) {
      if ($fromEl.length === 0) {
        if (callback) {
          window.setTimeout(function() {
            callback();
          }, 300);
        }
        return false;
      }

      var zIndex = 9999,
        fromPos = $fromEl.offset(),
        wasVisible = $toEl && $toEl.is(':visible');

      if (toPos === null && $toEl.length > 0) {
        if ($toEl.attr('jqyoui-draggable') !== undefined && $toEl.ngattr('ng-model') !== undefined && $toEl.is(':visible') && dropSettings && dropSettings.multiple) {
          toPos = $toEl.offset();
          if (dropSettings.stack === false) {
            toPos.left+= $toEl.outerWidth(true);
          } else {
            toPos.top+= $toEl.outerHeight(true);
          }
        } else {
          toPos = $toEl.css({'visibility': 'hidden', 'display': 'block'}).offset();
          $toEl.css({'visibility': '','display': wasVisible ? '' : 'none'});
        }
      }

      $fromEl.css({'position': 'absolute', 'z-index': zIndex})
        .css(fromPos)
        .animate(toPos, duration, function() {
          if (callback) callback();
        });
    };

    this.mutateDroppable = function(scope, dropSettings, dragSettings, dropModel, dragItem, jqyoui_pos) {
      var dropModelValue = scope.$eval(dropModel);

      scope.__dragItem = dragItem;

      if (angular.isArray(dropModelValue)) {
        if (dropSettings && dropSettings.index >= 0) {
          dropModelValue[dropSettings.index] = dragItem;
        } else {
          dropModelValue.push(dragItem);
        }
        if (dragSettings && dragSettings.placeholder === true) {
          dropModelValue[dropModelValue.length - 1]['jqyoui_pos'] = jqyoui_pos;
        }
      } else {
        $parse(dropModel + ' = __dragItem')(scope);
        if (dragSettings && dragSettings.placeholder === true) {
          dropModelValue['jqyoui_pos'] = jqyoui_pos;
        }
      }
    };

    this.mutateDraggable = function(scope, dropSettings, dragSettings, dragModel, dropModel, dropItem, $draggable) {
      var isEmpty = angular.equals(angular.copy(dropItem), {}),
        dragModelValue = scope.$eval(dragModel);

      scope.__dropItem = dropItem;

      if (dragSettings && dragSettings.placeholder) {
        if (dragSettings.placeholder != 'keep'){
          if (angular.isArray(dragModelValue) && dragSettings.index !== undefined) {
            dragModelValue[dragSettings.index] = dropItem;
          } else {
            $parse(dragModel + ' = __dropItem')(scope);
          }
        }
      } else {
        if (angular.isArray(dragModelValue)) {
          if (isEmpty) {
            if (dragSettings && ( dragSettings.placeholder !== true && dragSettings.placeholder !== 'keep' )) {
              dragModelValue.splice(dragSettings.index, 1);
            }
          } else {
            dragModelValue[dragSettings.index] = dropItem;
          }
        } else {
          // Fix: LIST(object) to LIST(array) - model does not get updated using just scope[dragModel] = {...}
          // P.S.: Could not figure out why it happened
          $parse(dragModel + ' = __dropItem')(scope);
          if (scope.$parent) {
            $parse(dragModel + ' = __dropItem')(scope.$parent);
          }
        }
      }

      $draggable.css({'z-index': '', 'left': '', 'top': ''});
    };

    this.fixIndex = function(scope, settings, modelValue) {
      if (settings.applyFilter && angular.isArray(modelValue) && modelValue.length > 0) {
        var dragModelValueFiltered = scope[settings.applyFilter](),
            lookup = dragModelValueFiltered[settings.index],
            actualIndex = undefined;

        modelValue.forEach(function(item, i) {
           if (angular.equals(item, lookup)) {
             actualIndex = i;
           }
        });

        return actualIndex;
      }

      return settings.index;
    };
  }]).directive('jqyouiDraggable', ['ngDragDropService', function(ngDragDropService) {
    return {
      require: '?jqyouiDroppable',
      restrict: 'A',
      link: function(scope, element, attrs) {
        var dragSettings, zIndex;
        var updateDraggable = function(newValue, oldValue) {
          if (newValue) {
            dragSettings = scope.$eval(element.attr('jqyoui-draggable')) || [];
            element
              .draggable({disabled: false})
              .draggable(scope.$eval(attrs.jqyouiOptions) || {})
              .draggable({
                start: function(event, ui) {
                  zIndex = angular.element(this).css('z-index');
                  angular.element(this).css('z-index', 99999);
                  jqyoui.startXY = angular.element(this).offset();
                  ngDragDropService.callEventCallback(scope, dragSettings.onStart, event, ui);
                },
                stop: function(event, ui) {
                  angular.element(this).css('z-index', zIndex);
                  ngDragDropService.callEventCallback(scope, dragSettings.onStop, event, ui);
                },
                drag: function(event, ui) {
                  ngDragDropService.callEventCallback(scope, dragSettings.onDrag, event, ui);
                }
              });
          } else {
            element.draggable({disabled: true});
          }
        };
        scope.$watch(function() { return scope.$eval(attrs.drag); }, updateDraggable);
        updateDraggable();
      }
    };
  }]).directive('jqyouiDroppable', ['ngDragDropService', function(ngDragDropService) {
    return {
      restrict: 'A',
      priority: 1,
      link: function(scope, element, attrs) {
        var updateDroppable = function(newValue, oldValue) {
          if (newValue) {
            element
              .droppable({disabled: false})
              .droppable(scope.$eval(attrs.jqyouiOptions) || {})
              .droppable({
                over: function(event, ui) {
                  var dropSettings = scope.$eval(angular.element(this).attr('jqyoui-droppable')) || [];
                  ngDragDropService.callEventCallback(scope, dropSettings.onOver, event, ui);
                },
                out: function(event, ui) {
                  var dropSettings = scope.$eval(angular.element(this).attr('jqyoui-droppable')) || [];
                  ngDragDropService.callEventCallback(scope, dropSettings.onOut, event, ui);
                },
                drop: function(event, ui) {
                  if (angular.element(ui.draggable).ngattr('ng-model') && attrs.ngModel) {
                    ngDragDropService.invokeDrop(angular.element(ui.draggable), angular.element(this), event, ui);
                  } else {
                    ngDragDropService.callEventCallback(scope, (scope.$eval(angular.element(this).attr('jqyoui-droppable')) || []).onDrop, event, ui);                    
                  }
                }
              });
          } else {
            element.droppable({disabled: true});
          }
        };

        scope.$watch(function() { return scope.$eval(attrs.drop); }, updateDroppable);
        updateDroppable();
      }
    };
  }]);

  $.fn.ngattr = function(name, value) {
    var element = angular.element(this).get(0);

    return element.getAttribute(name) || element.getAttribute('data-' + name);
  };
})(window, window.angular);

/*! offline 0.4.6 */
(function(){var a,b,c,d,e,f,g;d=function(a,b){var c,d,e,f;f=[];for(d in b.prototype)try{e=b.prototype[d],null==a[d]&&"function"!=typeof e?f.push(a[d]=e):f.push(void 0)}catch(g){c=g}return f},a={},null==a.options&&(a.options={}),c={checks:{xhr:{url:function(){return"/offline-test-request/"+Math.floor(1e9*Math.random())}},image:{url:function(){return"http://dqakt69vkj09v.cloudfront.net/are-we-online.gif?_="+Math.floor(1e9*Math.random())}},active:"image"},checkOnLoad:!1,interceptRequests:!0,reconnect:!0},e=function(a,b){var c,d,e,f,g,h;for(c=a,f=b.split("."),d=g=0,h=f.length;h>g&&(e=f[d],c=c[e],"object"==typeof c);d=++g);return d===f.length-1?c:void 0},a.getOption=function(b){var d,f;return d=null!=(f=e(a.options,b))?f:e(c,b),"function"==typeof d?d():d},"function"==typeof window.addEventListener&&window.addEventListener("online",function(){return setTimeout(a.confirmUp,100)},!1),"function"==typeof window.addEventListener&&window.addEventListener("offline",function(){return a.confirmDown()},!1),a.state="up",a.markUp=function(){return a.trigger("confirmed-up"),"up"!==a.state?(a.state="up",a.trigger("up")):void 0},a.markDown=function(){return a.trigger("confirmed-down"),"down"!==a.state?(a.state="down",a.trigger("down")):void 0},f={},a.on=function(b,c,d){var e,g,h,i,j;if(g=b.split(" "),g.length>1){for(j=[],h=0,i=g.length;i>h;h++)e=g[h],j.push(a.on(e,c,d));return j}return null==f[b]&&(f[b]=[]),f[b].push([d,c])},a.off=function(a,b){var c,d,e,g,h;if(null!=f[a]){if(b){for(d=0,h=[];d<f[a].length;)g=f[a][d],c=g[0],e=g[1],e===b?h.push(f[a].splice(d,1)):h.push(d++);return h}return f[a]=[]}},a.trigger=function(a){var b,c,d,e,g,h,i;if(null!=f[a]){for(g=f[a],i=[],d=0,e=g.length;e>d;d++)h=g[d],b=h[0],c=h[1],i.push(c.call(b));return i}},b=function(a,b,c){var d,e;return d=function(){return a.status&&a.status<12e3?b():c()},null===a.onprogress?(a.addEventListener("error",c,!1),a.addEventListener("timeout",c,!1),a.addEventListener("load",d,!1)):(e=a.onreadystatechange,a.onreadystatechange=function(){return 4===a.readyState?d():0===a.readyState&&c(),"function"==typeof e?e.apply(null,arguments):void 0})},a.checks={},a.checks.xhr=function(){var c,d;d=new XMLHttpRequest,d.offline=!1,d.open("HEAD",a.getOption("checks.xhr.url"),!0),b(d,a.markUp,a.markDown);try{d.send()}catch(e){c=e,a.markDown()}return d},a.checks.image=function(){var b;return b=document.createElement("img"),b.onerror=a.markDown,b.onload=a.markUp,b.src=a.getOption("checks.image.url"),void 0},a.check=function(){return a.trigger("checking"),a.checks[a.getOption("checks.active")]()},a.confirmUp=a.confirmDown=a.check,a.onXHR=function(a){var b,c,e;return b=function(b,c){var d;return d=b.open,b.open=function(e,f,g,h,i){return a({type:e,url:f,async:g,flags:c,user:h,password:i,xhr:b}),d.apply(b,arguments)}},e=window.XMLHttpRequest,window.XMLHttpRequest=function(a){var c,d,f;return c=new e(a),b(c,a),f=c.setRequestHeader,c.headers={},c.setRequestHeader=function(a,b){return c.headers[a]=b,f.call(c,a,b)},d=c.overrideMimeType,c.overrideMimeType=function(a){return c.mimeType=a,d.call(c,a)},c},d(window.XMLHttpRequest,e),null!=window.XDomainRequest?(c=window.XDomainRequest,window.XDomainRequest=function(){var a;return a=new c,b(a),a},d(window.XDomainRequest,c)):void 0},g=function(){return a.getOption("interceptRequests")&&a.onXHR(function(c){var d;return d=c.xhr,d.offline!==!1?b(d,a.confirmUp,a.confirmDown):void 0}),a.getOption("checkOnLoad")?a.check():void 0},setTimeout(g,0),window.Offline=a}).call(this),function(){var a,b,c,d,e,f,g,h,i;if(!window.Offline)throw new Error("Offline Reconnect brought in without offline.js");d=Offline.reconnect={},f=null,e=function(){var a;return null!=d.state&&"inactive"!==d.state&&Offline.trigger("reconnect:stopped"),d.state="inactive",d.remaining=d.delay=null!=(a=Offline.getOption("reconnect.initialDelay"))?a:3},b=function(){var a,b;return a=null!=(b=Offline.getOption("reconnect.delay"))?b:Math.min(Math.ceil(1.5*d.delay),3600),d.remaining=d.delay=a},g=function(){return"connecting"!==d.state?(d.remaining-=1,Offline.trigger("reconnect:tick"),0===d.remaining?h():void 0):void 0},h=function(){return"waiting"===d.state?(Offline.trigger("reconnect:connecting"),d.state="connecting",Offline.check()):void 0},a=function(){return Offline.getOption("reconnect")?(e(),d.state="waiting",Offline.trigger("reconnect:started"),f=setInterval(g,1e3)):void 0},i=function(){return null!=f&&clearInterval(f),e()},c=function(){return Offline.getOption("reconnect")?"connecting"===d.state?(Offline.trigger("reconnect:failure"),d.state="waiting",b()):void 0:void 0},d.tryNow=h,e(),Offline.on("down",a),Offline.on("confirmed-down",c),Offline.on("up",i)}.call(this),function(){var a,b,c,d,e,f;if(!window.Offline)throw new Error("Requests module brought in without offline.js");c=[],f=!1,d=function(a){return Offline.trigger("requests:capture"),"down"!==Offline.state&&(f=!0),c.push(a)},e=function(a){var b,c,d,e,f,g,h,i,j;i=a.xhr,f=a.url,e=a.type,g=a.user,d=a.password,b=a.body,i.abort(),i.open(e,f,!0,g,d),j=i.headers;for(c in j)h=j[c],i.setRequestHeader(c,h);return i.mimeType&&i.overrideMimeType(i.mimeType),i.send(b)},a=function(){return c=[]},b=function(){var b,d,f,g,h,i;for(Offline.trigger("requests:flush"),f={},h=0,i=c.length;i>h;h++)d=c[h],g=d.url.replace(/(\?|&)_=[0-9]+/,function(a,b){return"?"===b?b:""}),f[""+d.type.toUpperCase()+" - "+g]=d;for(b in f)d=f[b],e(d);return a()},setTimeout(function(){return Offline.getOption("requests")!==!1?(Offline.on("confirmed-up",function(){return f?(f=!1,a()):void 0}),Offline.on("up",b),Offline.on("down",function(){return f=!1}),Offline.onXHR(function(a){var b,c,e,f,g;return e=a.xhr,b=a.async,e.offline!==!1&&(c=function(){return d(a)},g=e.send,e.send=function(b){return a.body=b,g.apply(e,arguments)},b)?null===e.onprogress?(e.addEventListener("error",c,!1),e.addEventListener("timeout",c,!1)):(f=e.onreadystatechange,e.onreadystatechange=function(){return 0===e.readyState?c():4===e.readyState&&(0===e.status||e.status>=12e3)&&c(),"function"==typeof f?f.apply(null,arguments):void 0}):void 0}),Offline.requests={flush:b,clear:a}):void 0},0)}.call(this),function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n;if(!window.Offline)throw new Error("Offline UI brought in without offline.js");b='<div class="offline-ui"><div class="offline-ui-content"></div></div>',a='<a href class="offline-ui-retry"></a>',e=function(a){var b;return b=document.createElement("div"),b.innerHTML=a,b.children[0]},f=d=null,c=function(a){return k(a),f.className+=" "+a},k=function(a){return f.className=f.className.replace(new RegExp("(^| )"+a.split(" ").join("|")+"( |$)","gi")," ")},h={},g=function(a,b){return c(a),null!=h[a]&&clearTimeout(h[a]),h[a]=setTimeout(function(){return k(a),delete h[a]},1e3*b)},i=function(a,b){var c,d,e,f,g,h;if(null==b&&(b=!1),0===a)return"now";c={d:86400,h:3600,m:60,s:1},d={s:"second",m:"minute",h:"hour",d:"day"},f="";for(g in c)if(e=c[g],a>=e)return h=Math.floor(a/e),b&&(g=" "+d[g],1!==h&&(g+="s")),""+h+g},l=function(){var g,h;return f=e(b),document.body.appendChild(f),null!=Offline.reconnect&&Offline.getOption("reconnect")&&(f.appendChild(e(a)),g=f.querySelector(".offline-ui-retry"),h=function(a){return a.preventDefault(),Offline.reconnect.tryNow()},null!=g.addEventListener?g.addEventListener("click",h,!1):g.attachEvent("click",h)),c("offline-ui-"+Offline.state),d=f.querySelector(".offline-ui-content")},j=function(){return l(),Offline.on("up",function(){return k("offline-ui-down"),c("offline-ui-up"),g("offline-ui-up-2s",2),g("offline-ui-up-5s",5)}),Offline.on("down",function(){return k("offline-ui-up"),c("offline-ui-down"),g("offline-ui-down-2s",2),g("offline-ui-down-5s",5)}),Offline.on("reconnect:connecting",function(){return c("offline-ui-connecting"),k("offline-ui-waiting")}),Offline.on("reconnect:tick",function(){return c("offline-ui-waiting"),k("offline-ui-connecting"),d.setAttribute("data-retry-in-seconds",Offline.reconnect.remaining),d.setAttribute("data-retry-in-abbr",i(Offline.reconnect.remaining)),d.setAttribute("data-retry-in",i(Offline.reconnect.remaining,!0))}),Offline.on("reconnect:stopped",function(){return k("offline-ui-connecting offline-ui-waiting"),d.setAttribute("data-retry-in-seconds",null),d.setAttribute("data-retry-in-abbr",null),d.setAttribute("data-retry-in",null)}),Offline.on("reconnect:failure",function(){return g("offline-ui-reconnect-failed-2s",2),g("offline-ui-reconnect-failed-5s",5)}),Offline.on("reconnect:success",function(){return g("offline-ui-reconnect-succeeded-2s",2),g("offline-ui-reconnect-succeeded-5s",5)})},"interactive"===(n=document.readyState)||"complete"===n?j():null!=document.addEventListener?document.addEventListener("DOMContentLoaded",j,!1):(m=document.onreadystatechange,document.onreadystatechange=function(){return"complete"===document.readyState&&j(),"function"==typeof m?m.apply(null,arguments):void 0})}.call(this);
/**
 * Restful Resources service for AngularJS apps
 * @version v1.1.6 - 2013-10-24
 * @link https://github.com/mgonto/restangular
 * @author Martin Gontovnikas <martin@gonto.com.ar>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
!function(){var a=angular.module("restangular",[]);a.provider("Restangular",function(){var a={};a.init=function(a,b){function c(a,b,c,d){var e={};return _.each(_.keys(d),function(f){var g=d[f];g.params=_.extend({},g.params,a.defaultRequestParams[g.method.toLowerCase()]),_.isEmpty(g.params)&&delete g.params,e[f]=a.isSafe(g.method)?function(){return b(_.extend(g,{url:c}))}:function(a){return b(_.extend(g,{url:c,data:a}))}}),e}var d=["get","head","options","trace"];b.isSafe=function(a){return _.contains(d,a.toLowerCase())};var e=/^https?:\/\//i;b.isAbsoluteUrl=function(a){return a&&e.test(a)},b.baseUrl=_.isUndefined(b.baseUrl)?"":b.baseUrl,a.setBaseUrl=function(a){return b.baseUrl=/\/$/.test(a)?a.substring(0,a.length-1):a,this},b.extraFields=b.extraFields||[],a.setExtraFields=function(a){return b.extraFields=a,this},b.defaultHttpFields=b.defaultHttpFields||{},a.setDefaultHttpFields=function(a){return b.defaultHttpFields=a,this},b.withHttpDefaults=function(a){return _.defaults(a,b.defaultHttpFields)},b.encodeIds=_.isUndefined(b.encodeIds)?!0:b.encodeIds,a.setEncodeIds=function(a){b.encodeIds=a},b.defaultRequestParams=b.defaultRequestParams||{get:{},post:{},put:{},remove:{},common:{}},a.setDefaultRequestParams=function(a,c){var d=[],e=c||a;return _.isUndefined(c)?d.push("common"):_.isArray(a)?d=a:d.push(a),_.each(d,function(a){b.defaultRequestParams[a]=e}),this},a.requestParams=b.defaultRequestParams,b.defaultHeaders=b.defaultHeaders||{},a.setDefaultHeaders=function(c){return b.defaultHeaders=c,a.defaultHeaders=b.defaultHeaders,this},a.defaultHeaders=b.defaultHeaders,b.methodOverriders=b.methodOverriders||[],a.setMethodOverriders=function(a){var c=_.extend([],a);return b.isOverridenMethod("delete",c)&&c.push("remove"),b.methodOverriders=c,this},b.isOverridenMethod=function(a,c){var d=c||b.methodOverriders;return!_.isUndefined(_.find(d,function(b){return b.toLowerCase()===a.toLowerCase()}))},b.urlCreator=b.urlCreator||"path",a.setUrlCreator=function(a){if(!_.has(b.urlCreatorFactory,a))throw new Error("URL Path selected isn't valid");return b.urlCreator=a,this},b.restangularFields=b.restangularFields||{id:"id",route:"route",parentResource:"parentResource",restangularCollection:"restangularCollection",cannonicalId:"__cannonicalId",etag:"restangularEtag",selfLink:"href",get:"get",getList:"getList",put:"put",post:"post",remove:"remove",head:"head",trace:"trace",options:"options",patch:"patch",getRestangularUrl:"getRestangularUrl",putElement:"putElement",addRestangularMethod:"addRestangularMethod",getParentList:"getParentList",clone:"clone",ids:"ids"},a.setRestangularFields=function(a){return b.restangularFields=_.extend(b.restangularFields,a),this},b.setFieldToElem=function(a,b,c){var d=a.split("."),e=b;return _.each(_.initial(d),function(a){e[a]={},e=e[a]}),e[_.last(d)]=c,this},b.getFieldFromElem=function(a,b){var c=a.split("."),d=angular.copy(b);return _.each(c,function(a){d&&(d=d[a])}),d},b.setIdToElem=function(a,c){return b.setFieldToElem(b.restangularFields.id,a,c),this},b.getIdFromElem=function(a){return b.getFieldFromElem(b.restangularFields.id,a)},b.isValidId=function(a){return""!==a&&!_.isUndefined(a)&&!_.isNull(a)},b.setUrlToElem=function(a,c){return b.setFieldToElem(b.restangularFields.selfLink,a,c),this},b.getUrlFromElem=function(a){return b.getFieldFromElem(b.restangularFields.selfLink,a)},b.useCannonicalId=_.isUndefined(b.useCannonicalId)?!1:b.useCannonicalId,a.setUseCannonicalId=function(a){return b.useCannonicalId=a,this},b.getCannonicalIdFromElem=function(a){var c=a[b.restangularFields.cannonicalId],d=b.isValidId(c)?c:b.getIdFromElem(a);return d},b.responseExtractor=b.responseExtractor||function(a){return a},a.setResponseExtractor=function(a){return b.responseExtractor=a,this},a.setResponseInterceptor=a.setResponseExtractor,b.fullRequestInterceptor=b.fullRequestInterceptor||function(a,b,c,d,e,f){return{element:a,headers:e,params:f}},a.setRequestInterceptor=function(a){return b.fullRequestInterceptor=function(b,c,d,e,f,g){return{headers:f,params:g,element:a(b,c,d,e)}},this},a.setFullRequestInterceptor=function(a){return b.fullRequestInterceptor=a,this},b.errorInterceptor=b.errorInterceptor||function(){},a.setErrorInterceptor=function(a){return b.errorInterceptor=a,this},b.onBeforeElemRestangularized=b.onBeforeElemRestangularized||function(a){return a},a.setOnBeforeElemRestangularized=function(a){return b.onBeforeElemRestangularized=a,this},b.onElemRestangularized=b.onElemRestangularized||function(a){return a},a.setOnElemRestangularized=function(a){return b.onElemRestangularized=a,this},a.setListTypeIsArray=function(){},b.shouldSaveParent=b.shouldSaveParent||function(){return!0},a.setParentless=function(a){return _.isArray(a)?b.shouldSaveParent=function(b){return!_.contains(a,b)}:_.isBoolean(a)&&(b.shouldSaveParent=function(){return!a}),this},b.suffix=_.isUndefined(b.suffix)?null:b.suffix,a.setRequestSuffix=function(a){return b.suffix=a,this},b.transformers=b.transformers||{},a.addElementTransformer=function(a,c,d){var e=null,f=null;2===arguments.length?f=c:(f=d,e=c);var g=b.transformers[a];g||(g=b.transformers[a]=[]),g.push(function(a,b){return _.isNull(e)||a==e?f(b):b})},a.extendCollection=function(b,c){return a.addElementTransformer(b,!0,c)},a.extendModel=function(b,c){return a.addElementTransformer(b,!1,c)},b.transformElem=function(a,c,d,e){var f=b.transformers[d],g=a;return f&&_.each(f,function(a){g=a(c,g)}),b.onElemRestangularized(g,c,d,e)},b.fullResponse=_.isUndefined(b.fullResponse)?!1:b.fullResponse,a.setFullResponse=function(a){return b.fullResponse=a,this},b.urlCreatorFactory={};var f=function(){};f.prototype.setConfig=function(a){return this.config=a,this},f.prototype.parentsArray=function(a){for(var b=[];a;)b.push(a),a=a[this.config.restangularFields.parentResource];return b.reverse()},f.prototype.resource=function(a,d,e,f,g,h,i){var j=_.defaults(f||{},this.config.defaultRequestParams.common),k=_.defaults(e||{},this.config.defaultHeaders);h&&(b.isSafe(i)?k["If-None-Match"]=h:k["If-Match"]=h);var l=this.base(a);return l+=g?"/"+g:"",l+=this.config.suffix||"",c(this.config,d,l,{getList:this.config.withHttpDefaults({method:"GET",params:j,headers:k}),get:this.config.withHttpDefaults({method:"GET",params:j,headers:k}),put:this.config.withHttpDefaults({method:"PUT",params:j,headers:k}),post:this.config.withHttpDefaults({method:"POST",params:j,headers:k}),remove:this.config.withHttpDefaults({method:"DELETE",params:j,headers:k}),head:this.config.withHttpDefaults({method:"HEAD",params:j,headers:k}),trace:this.config.withHttpDefaults({method:"TRACE",params:j,headers:k}),options:this.config.withHttpDefaults({method:"OPTIONS",params:j,headers:k}),patch:this.config.withHttpDefaults({method:"PATCH",params:j,headers:k})})};var g=function(){};g.prototype=new f,g.prototype.base=function(a){var c=this;return _.reduce(this.parentsArray(a),function(a,d){var e,f=c.config.getUrlFromElem(d);if(f){if(c.config.isAbsoluteUrl(f))return f;e=f}else if(e=d[c.config.restangularFields.route],d[c.config.restangularFields.restangularCollection]){var g=d[c.config.restangularFields.ids];g&&(e+="/"+g.join(","))}else{var h;h=c.config.useCannonicalId?c.config.getCannonicalIdFromElem(d):c.config.getIdFromElem(d),b.isValidId(h)&&(e+="/"+(c.config.encodeIds?encodeURIComponent(h):h))}return a+"/"+e},this.config.baseUrl)},g.prototype.fetchUrl=function(a,b){var c=this.base(a);return b&&(c+="/"+b),c},b.urlCreatorFactory.path=g};var b={};a.init(this,b),this.$get=["$http","$q",function(c,d){function e(f){function g(a,b,c){if(b[f.restangularFields.route]=c,b[f.restangularFields.getRestangularUrl]=_.bind(M.fetchUrl,M,b),b[f.restangularFields.addRestangularMethod]=_.bind(J,b),b[f.restangularFields.clone]=_.bind(s,b,b),b.one=_.bind(h,b,b),b.all=_.bind(i,b,b),b.several=_.bind(j,b,b),b.oneUrl=_.bind(k,b,b),b.allUrl=_.bind(l,b,b),a&&f.shouldSaveParent(c)){var d=f.getIdFromElem(a),e=f.getUrlFromElem(a),g=_.union(_.values(_.pick(f.restangularFields,["route","parentResource"])),f.extraFields),m=_.pick(a,g);f.isValidId(d)&&f.setIdToElem(m,d),f.isValidId(e)&&f.setUrlToElem(m,e),b[f.restangularFields.parentResource]=m}else b[f.restangularFields.parentResource]=null;return b}function h(a,b,c){var d={};return f.setIdToElem(d,c),t(a,d,b)}function i(a,b){return u(a,[],b,!0)}function j(a,b){var c=[];return c[f.restangularFields.ids]=Array.prototype.splice.call(arguments,2),u(a,c,b,!0)}function k(a,b,c){var d={};return f.setUrlToElem(d,c),t(a,d,b)}function l(a,b,c){var d={};return f.setUrlToElem(d,c),u(a,d,b,!0)}function m(a,b){return a.call=_.bind(n,a),a.get=_.bind(o,a),a[f.restangularFields.restangularCollection]=b,b&&(a.push=_.bind(n,a,"push")),a}function n(a){var b=d.defer(),c=arguments;return this.then(function(d){var e=Array.prototype.slice.call(c,1),f=d[a];f.apply(d,e),b.resolve(d)}),m(b.promise,this[f.restangularFields.restangularCollection])}function o(a){var b=d.defer();return this.then(function(c){b.resolve(c[a])}),m(b.promise,this[f.restangularFields.restangularCollection])}function p(a,b,c){return f.fullResponse?a.resolve(_.extend(b,{data:c})):(a.resolve(c),void 0)}function q(a){return _.omit(a,_.values(_.omit(f.restangularFields,"id")))}function r(a){a.customOperation=_.bind(I,a),_.each(["put","post","get","delete"],function(b){_.each(["do","custom"],function(c){var d,e="delete"===b?"remove":b,f=c+b.toUpperCase();d="put"!==e&&"post"!==e?I:function(a,b,c,d,e){return _.bind(I,this)(a,c,d,e,b)},a[f]=_.bind(d,a,e)})}),a.customGETLIST=_.bind(y,a),a.doGETLIST=a.customGETLIST}function s(a){var b=angular.copy(a);return t(b[f.restangularFields.parentResource],b,b[f.restangularFields.route])}function t(a,b,c,d){var e=f.onBeforeElemRestangularized(b,!1,c),h=g(a,e,c);return f.useCannonicalId&&(h[f.restangularFields.cannonicalId]=f.getIdFromElem(h)),d&&(h[f.restangularFields.getParentList]=function(){return d}),h[f.restangularFields.restangularCollection]=!1,h[f.restangularFields.get]=_.bind(A,h),h[f.restangularFields.getList]=_.bind(y,h),h[f.restangularFields.put]=_.bind(C,h),h[f.restangularFields.post]=_.bind(D,h),h[f.restangularFields.remove]=_.bind(B,h),h[f.restangularFields.head]=_.bind(E,h),h[f.restangularFields.trace]=_.bind(F,h),h[f.restangularFields.options]=_.bind(G,h),h[f.restangularFields.patch]=_.bind(H,h),r(h),f.transformElem(h,!1,c,L)}function u(a,b,c){var d=f.onBeforeElemRestangularized(b,!0,c),e=g(a,d,c);return e[f.restangularFields.restangularCollection]=!0,e[f.restangularFields.post]=_.bind(D,e,null),e[f.restangularFields.head]=_.bind(E,e),e[f.restangularFields.trace]=_.bind(F,e),e[f.restangularFields.putElement]=_.bind(w,e),e[f.restangularFields.options]=_.bind(G,e),e[f.restangularFields.patch]=_.bind(H,e),e[f.restangularFields.get]=_.bind(v,e),e[f.restangularFields.getList]=_.bind(y,e,null),r(e),f.transformElem(e,!0,c,L)}function v(a,b,c){return this.customGET(a.toString(),b,c)}function w(a,b,c){var e=this,f=this[a],g=d.defer();return f.put(b,c).then(function(b){var c=s(e);c[a]=b,g.resolve(c)},function(a){g.reject(a)}),m(g.promise,!0)}function x(a,b,c,d,e,g){var h=f.responseExtractor(a,b,c,d,e,g),i=e.headers("ETag");return h&&i&&(h[f.restangularFields.etag]=i),h}function y(a,b,e){var g=this,h=d.defer(),i="getList",j=M.fetchUrl(this,a),k=a||g[f.restangularFields.route],l=f.fullRequestInterceptor(null,i,k,j,e||{},b||{});return M.resource(this,c,l.headers,l.params,a,this[f.restangularFields.etag],i).getList().then(function(b){var c=b.data,d=x(c,i,k,j,b,h),e=_.map(d,function(b){return g[f.restangularFields.restangularCollection]?t(g[f.restangularFields.parentResource],b,g[f.restangularFields.route],d):t(g,b,a,d)});e=_.extend(d,e),g[f.restangularFields.restangularCollection]?p(h,b,u(g[f.restangularFields.parentResource],e,g[f.restangularFields.route])):p(h,b,u(g,e,a))},function(a){f.errorInterceptor(a)!==!1&&h.reject(a)}),m(h.promise,!0)}function z(a,b,e,g,h){var i=this,j=d.defer(),k=e||{},l=b||this[f.restangularFields.route],n=M.fetchUrl(this,b),o=g||this,r=o[f.restangularFields.etag];_.isObject(o)&&(o=q(o));var s=f.fullRequestInterceptor(o,a,l,n,h||{},k||{}),u=function(c){var d=c.data,e=x(d,a,l,n,c,j);e?"post"!==a||i[f.restangularFields.restangularCollection]?p(j,c,t(i[f.restangularFields.parentResource],e,i[f.restangularFields.route])):p(j,c,t(i,e,b)):p(j,c,void 0)},v=function(a){f.errorInterceptor(a)!==!1&&j.reject(a)},w=a,y=_.extend({},s.headers),z=f.isOverridenMethod(a);return z&&(w="post",y=_.extend(y,{"X-HTTP-Method-Override":"remove"===a?"DELETE":a})),f.isSafe(a)?z?M.resource(this,c,y,s.params,b,r,w)[w]({}).then(u,v):M.resource(this,c,y,s.params,b,r,w)[w]().then(u,v):M.resource(this,c,y,s.params,b,r,w)[w](s.element).then(u,v),m(j.promise)}function A(a,b){return _.bind(z,this)("get",void 0,a,void 0,b)}function B(a,b){return _.bind(z,this)("remove",void 0,a,void 0,b)}function C(a,b){return _.bind(z,this)("put",void 0,a,void 0,b)}function D(a,b,c,d){return _.bind(z,this)("post",a,c,b,d)}function E(a,b){return _.bind(z,this)("head",void 0,a,void 0,b)}function F(a,b){return _.bind(z,this)("trace",void 0,a,void 0,b)}function G(a,b){return _.bind(z,this)("options",void 0,a,void 0,b)}function H(a,b,c){return _.bind(z,this)("patch",void 0,b,a,c)}function I(a,b,c,d,e){return _.bind(z,this)(a,b,c,e,d)}function J(a,b,c,d,e,g){var h;h="getList"===b?_.bind(y,this,c):_.bind(I,this,b,c);var i=function(a,b,c){var f=_.defaults({params:a,headers:b,elem:c},{params:d,headers:e,elem:g});return h(f.params,f.headers,f.elem)};this[a]=f.isSafe(b)?i:function(a,b,c){return i(b,c,a)}}function K(c){var d=angular.copy(b);return a.init(d,d),c(d),e(d)}var L={},M=new f.urlCreatorFactory[f.urlCreator];return M.setConfig(f),a.init(L,f),L.copy=_.bind(s,L),L.withConfig=_.bind(K,L),L.one=_.bind(h,L,null),L.all=_.bind(i,L,null),L.several=_.bind(j,L,null),L.oneUrl=_.bind(k,L,null),L.allUrl=_.bind(l,L,null),L.restangularizeElement=_.bind(t,L),L.restangularizeCollection=_.bind(u,L),L}return e(b)}]})}();

(function() {
  var canvas, dot, fill, hide, keyHandler, move, randDot, render, score, show, snake, speed, stop;

  canvas = dot = score = speed = stop = snake = randDot = fill = null;

  render = function() {
    canvas = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    canvas.setAttribute('style', 'width: 100%; height: 100%; margin: -8px; position: absolute; top: 0; left: 0; z-index: 1000');
    canvas.setAttribute('viewBox', '0 0 1000 1000');
    document.body.appendChild(canvas);
    dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dot.setAttribute('r', 20);
    (randDot = function() {
      dot.setAttribute('cx', (Math.random() * 960) | 0 + 20);
      return dot.setAttribute('cy', (Math.random() * 960) | 0 + 20);
    })();
    canvas.appendChild(dot);
    snake = {
      direction: 0,
      nodes: []
    };
    score = 0;
    speed = 10;
    stop = false;
    return move();
  };

  move = function() {
    var dotX, dotY, lastNode, lastX, lastY, nX, nY, node, old;
    if (stop) {
      return;
    }
    lastNode = snake.nodes[snake.nodes.length - 1];
    if (lastNode) {
      lastX = +lastNode.getAttribute('cx');
      lastY = +lastNode.getAttribute('cy');
    } else {
      lastX = 500;
      lastY = 500;
    }
    if (snake.nodes.length > score) {
      old = snake.nodes.shift();
      canvas.removeChild(old);
    }
    nX = lastX + Math.cos(snake.direction) * speed;
    nY = lastY + Math.sin(snake.direction) * speed;
    node = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    node.setAttribute('r', 20);
    node.setAttribute('cx', nX);
    node.setAttribute('cy', nY);
    if (fill) {
      node.style.fill = fill;
    }
    dotX = +dot.getAttribute('cx');
    dotY = +dot.getAttribute('cy');
    if ((dotX - 20 < nX && nX < dotX + 20) && (dotY - 20 < nY && nY < dotY + 20)) {
      score++;
      speed++;
      randDot();
    }
    canvas.appendChild(node);
    snake.nodes.push(node);
    return requestAnimationFrame(move);
  };

  keyHandler = function(e) {
    var _ref;
    if ((37 <= (_ref = e.keyCode) && _ref <= 40)) {
      snake.direction = Math.PI / 2 * ((e.keyCode - 35) % 4);
      return false;
    }
  };

  show = function() {
    document.addEventListener('keydown', keyHandler);
    return render();
  };

  hide = function() {
    document.removeEventListener('keydown', keyHandler);
    stop = true;
    return document.removeChild(canvas);
  };

  setTimeout(function() {
    if (Offline.getOption('game') && (document.addEventListener != null)) {
      Offline.on('down', show);
      Offline.on('up', hide);
      return Offline.on('reconnect:failure', function() {
        fill = '#ec8787';
        return setTimeout(function() {
          return fill = 'black';
        }, 2000);
      });
    }
  }, 0);

}).call(this);

/**
 * AngularStrap - Twitter Bootstrap directives for AngularJS
 * @version v0.7.5 - 2013-07-21
 * @link http://mgcrea.github.com/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
angular.module('$strap.config', []).value('$strapConfig', {});
angular.module('$strap.filters', ['$strap.config']);
angular.module('$strap.directives', ['$strap.config']);
angular.module('$strap', [
  '$strap.filters',
  '$strap.directives',
  '$strap.config'
]);
'use strict';
angular.module('$strap.directives').directive('bsAlert', [
  '$parse',
  '$timeout',
  '$compile',
  function ($parse, $timeout, $compile) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var getter = $parse(attrs.bsAlert), setter = getter.assign, value = getter(scope);
        var closeAlert = function closeAlertFn(delay) {
          $timeout(function () {
            element.alert('close');
          }, delay * 1);
        };
        if (!attrs.bsAlert) {
          if (angular.isUndefined(attrs.closeButton) || attrs.closeButton !== '0' && attrs.closeButton !== 'false') {
            element.prepend('<button type="button" class="close" data-dismiss="alert">&times;</button>');
          }
          if (attrs.closeAfter)
            closeAlert(attrs.closeAfter);
        } else {
          scope.$watch(attrs.bsAlert, function (newValue, oldValue) {
            value = newValue;
            element.html((newValue.title ? '<strong>' + newValue.title + '</strong>&nbsp;' : '') + newValue.content || '');
            if (!!newValue.closed) {
              element.hide();
            }
            $compile(element.contents())(scope);
            if (newValue.type || oldValue.type) {
              oldValue.type && element.removeClass('alert-' + oldValue.type);
              newValue.type && element.addClass('alert-' + newValue.type);
            }
            if (angular.isDefined(newValue.closeAfter))
              closeAlert(newValue.closeAfter);
            else if (attrs.closeAfter)
              closeAlert(attrs.closeAfter);
            if (angular.isUndefined(attrs.closeButton) || attrs.closeButton !== '0' && attrs.closeButton !== 'false') {
              element.prepend('<button type="button" class="close" data-dismiss="alert">&times;</button>');
            }
          }, true);
        }
        element.addClass('alert').alert();
        if (element.hasClass('fade')) {
          element.removeClass('in');
          setTimeout(function () {
            element.addClass('in');
          });
        }
        var parentArray = attrs.ngRepeat && attrs.ngRepeat.split(' in ').pop();
        element.on('close', function (ev) {
          var removeElement;
          if (parentArray) {
            ev.preventDefault();
            element.removeClass('in');
            removeElement = function () {
              element.trigger('closed');
              if (scope.$parent) {
                scope.$parent.$apply(function () {
                  var path = parentArray.split('.');
                  var curr = scope.$parent;
                  for (var i = 0; i < path.length; ++i) {
                    if (curr) {
                      curr = curr[path[i]];
                    }
                  }
                  if (curr) {
                    curr.splice(scope.$index, 1);
                  }
                });
              }
            };
            $.support.transition && element.hasClass('fade') ? element.on($.support.transition.end, removeElement) : removeElement();
          } else if (value) {
            ev.preventDefault();
            element.removeClass('in');
            removeElement = function () {
              element.trigger('closed');
              scope.$apply(function () {
                value.closed = true;
              });
            };
            $.support.transition && element.hasClass('fade') ? element.on($.support.transition.end, removeElement) : removeElement();
          } else {
          }
        });
      }
    };
  }
]);
'use strict';
angular.module('$strap.directives').directive('bsButton', [
  '$parse',
  '$timeout',
  function ($parse, $timeout) {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function postLink(scope, element, attrs, controller) {
        if (controller) {
          if (!element.parent('[data-toggle="buttons-checkbox"], [data-toggle="buttons-radio"]').length) {
            element.attr('data-toggle', 'button');
          }
          var startValue = !!scope.$eval(attrs.ngModel);
          if (startValue) {
            element.addClass('active');
          }
          scope.$watch(attrs.ngModel, function (newValue, oldValue) {
            var bNew = !!newValue, bOld = !!oldValue;
            if (bNew !== bOld) {
              $.fn.button.Constructor.prototype.toggle.call(button);
            } else if (bNew && !startValue) {
              element.addClass('active');
            }
          });
        }
        if (!element.hasClass('btn')) {
          element.on('click.button.data-api', function (ev) {
            element.button('toggle');
          });
        }
        element.button();
        var button = element.data('button');
        button.toggle = function () {
          if (!controller) {
            return $.fn.button.Constructor.prototype.toggle.call(this);
          }
          var $parent = element.parent('[data-toggle="buttons-radio"]');
          if ($parent.length) {
            element.siblings('[ng-model]').each(function (k, v) {
              $parse($(v).attr('ng-model')).assign(scope, false);
            });
            scope.$digest();
            if (!controller.$modelValue) {
              controller.$setViewValue(!controller.$modelValue);
              scope.$digest();
            }
          } else {
            scope.$apply(function () {
              controller.$setViewValue(!controller.$modelValue);
            });
          }
        };
      }
    };
  }
]).directive('bsButtonsCheckbox', [
  '$parse',
  function ($parse) {
    return {
      restrict: 'A',
      require: '?ngModel',
      compile: function compile(tElement, tAttrs, transclude) {
        tElement.attr('data-toggle', 'buttons-checkbox').find('a, button').each(function (k, v) {
          $(v).attr('bs-button', '');
        });
      }
    };
  }
]).directive('bsButtonsRadio', [
  '$timeout',
  function ($timeout) {
    return {
      restrict: 'A',
      require: '?ngModel',
      compile: function compile(tElement, tAttrs, transclude) {
        tElement.attr('data-toggle', 'buttons-radio');
        if (!tAttrs.ngModel) {
          tElement.find('a, button').each(function (k, v) {
            $(v).attr('bs-button', '');
          });
        }
        return function postLink(scope, iElement, iAttrs, controller) {
          if (controller) {
            $timeout(function () {
              iElement.find('[value]').button().filter('[value="' + controller.$viewValue + '"]').addClass('active');
            });
            iElement.on('click.button.data-api', function (ev) {
              scope.$apply(function () {
                controller.$setViewValue($(ev.target).closest('button').attr('value'));
              });
            });
            scope.$watch(iAttrs.ngModel, function (newValue, oldValue) {
              if (newValue !== oldValue) {
                var $btn = iElement.find('[value="' + scope.$eval(iAttrs.ngModel) + '"]');
                if ($btn.length) {
                  $btn.button('toggle');
                }
              }
            });
          }
        };
      }
    };
  }
]);
'use strict';
angular.module('$strap.directives').directive('bsButtonSelect', [
  '$parse',
  '$timeout',
  function ($parse, $timeout) {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function postLink(scope, element, attrs, ctrl) {
        var getter = $parse(attrs.bsButtonSelect), setter = getter.assign;
        if (ctrl) {
          element.text(scope.$eval(attrs.ngModel));
          scope.$watch(attrs.ngModel, function (newValue, oldValue) {
            element.text(newValue);
          });
        }
        var values, value, index, newValue;
        element.bind('click', function (ev) {
          values = getter(scope);
          value = ctrl ? scope.$eval(attrs.ngModel) : element.text();
          index = values.indexOf(value);
          newValue = index > values.length - 2 ? values[0] : values[index + 1];
          scope.$apply(function () {
            element.text(newValue);
            if (ctrl) {
              ctrl.$setViewValue(newValue);
            }
          });
        });
      }
    };
  }
]);
'use strict';
angular.module('$strap.directives').directive('bsDatepicker', [
  '$timeout',
  '$strapConfig',
  function ($timeout, $strapConfig) {
    var isAppleTouch = /(iP(a|o)d|iPhone)/g.test(navigator.userAgent);
    var regexpMap = function regexpMap(language) {
      language = language || 'en';
      return {
        '/': '[\\/]',
        '-': '[-]',
        '.': '[.]',
        ' ': '[\\s]',
        'dd': '(?:(?:[0-2]?[0-9]{1})|(?:[3][01]{1}))',
        'd': '(?:(?:[0-2]?[0-9]{1})|(?:[3][01]{1}))',
        'mm': '(?:[0]?[1-9]|[1][012])',
        'm': '(?:[0]?[1-9]|[1][012])',
        'DD': '(?:' + $.fn.datepicker.dates[language].days.join('|') + ')',
        'D': '(?:' + $.fn.datepicker.dates[language].daysShort.join('|') + ')',
        'MM': '(?:' + $.fn.datepicker.dates[language].months.join('|') + ')',
        'M': '(?:' + $.fn.datepicker.dates[language].monthsShort.join('|') + ')',
        'yyyy': '(?:(?:[1]{1}[0-9]{1}[0-9]{1}[0-9]{1})|(?:[2]{1}[0-9]{3}))(?![[0-9]])',
        'yy': '(?:(?:[0-9]{1}[0-9]{1}))(?![[0-9]])'
      };
    };
    var regexpForDateFormat = function regexpForDateFormat(format, language) {
      var re = format, map = regexpMap(language), i;
      i = 0;
      angular.forEach(map, function (v, k) {
        re = re.split(k).join('${' + i + '}');
        i++;
      });
      i = 0;
      angular.forEach(map, function (v, k) {
        re = re.split('${' + i + '}').join(v);
        i++;
      });
      return new RegExp('^' + re + '$', ['i']);
    };
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function postLink(scope, element, attrs, controller) {
        var options = angular.extend({ autoclose: true }, $strapConfig.datepicker || {}), type = attrs.dateType || options.type || 'date';
        angular.forEach([
          'format',
          'weekStart',
          'calendarWeeks',
          'startDate',
          'endDate',
          'daysOfWeekDisabled',
          'autoclose',
          'startView',
          'minViewMode',
          'todayBtn',
          'todayHighlight',
          'keyboardNavigation',
          'language',
          'forceParse'
        ], function (key) {
          if (angular.isDefined(attrs[key]))
            options[key] = attrs[key];
        });
        var language = options.language || 'en', readFormat = attrs.dateFormat || options.format || $.fn.datepicker.dates[language] && $.fn.datepicker.dates[language].format || 'mm/dd/yyyy', format = isAppleTouch ? 'yyyy-mm-dd' : readFormat, dateFormatRegexp = regexpForDateFormat(format, language);
        if (controller) {
          controller.$formatters.unshift(function (modelValue) {
            return type === 'date' && angular.isString(modelValue) && modelValue ? $.fn.datepicker.DPGlobal.parseDate(modelValue, $.fn.datepicker.DPGlobal.parseFormat(readFormat), language) : modelValue;
          });
          controller.$parsers.unshift(function (viewValue) {
            if (!viewValue) {
              controller.$setValidity('date', true);
              return null;
            } else if (type === 'date' && angular.isDate(viewValue)) {
              controller.$setValidity('date', true);
              return viewValue;
            } else if (angular.isString(viewValue) && dateFormatRegexp.test(viewValue)) {
              controller.$setValidity('date', true);
              if (isAppleTouch)
                return new Date(viewValue);
              return type === 'string' ? viewValue : $.fn.datepicker.DPGlobal.parseDate(viewValue, $.fn.datepicker.DPGlobal.parseFormat(format), language);
            } else {
              controller.$setValidity('date', false);
              return undefined;
            }
          });
          controller.$render = function ngModelRender() {
            if (isAppleTouch) {
              var date = controller.$viewValue ? $.fn.datepicker.DPGlobal.formatDate(controller.$viewValue, $.fn.datepicker.DPGlobal.parseFormat(format), language) : '';
              element.val(date);
              return date;
            }
            if (!controller.$viewValue)
              element.val('');
            return element.datepicker('update', controller.$viewValue);
          };
        }
        if (isAppleTouch) {
          element.prop('type', 'date').css('-webkit-appearance', 'textfield');
        } else {
          if (controller) {
            element.on('changeDate', function (ev) {
              scope.$apply(function () {
                controller.$setViewValue(type === 'string' ? element.val() : ev.date);
              });
            });
          }
          element.datepicker(angular.extend(options, {
            format: format,
            language: language
          }));
          scope.$on('$destroy', function () {
            var datepicker = element.data('datepicker');
            if (datepicker) {
              datepicker.picker.remove();
              element.data('datepicker', null);
            }
          });
          attrs.$observe('startDate', function (value) {
            element.datepicker('setStartDate', value);
          });
          attrs.$observe('endDate', function (value) {
            element.datepicker('setEndDate', value);
          });
        }
        var component = element.siblings('[data-toggle="datepicker"]');
        if (component.length) {
          component.on('click', function () {
            if (!element.prop('disabled')) {
              element.trigger('focus');
            }
          });
        }
      }
    };
  }
]);
'use strict';
angular.module('$strap.directives').directive('bsDropdown', [
  '$parse',
  '$compile',
  '$timeout',
  function ($parse, $compile, $timeout) {
    var buildTemplate = function (items, ul) {
      if (!ul)
        ul = [
          '<ul class="dropdown-menu" role="menu" aria-labelledby="drop1">',
          '</ul>'
        ];
      angular.forEach(items, function (item, index) {
        if (item.divider)
          return ul.splice(index + 1, 0, '<li class="divider"></li>');
        var li = '<li' + (item.submenu && item.submenu.length ? ' class="dropdown-submenu"' : '') + '>' + '<a tabindex="-1"' + (item.click ? '" ng-click="' + item.click + '"' : '') + (item.target ? '" target="' + item.target + '"' : '') + (item.method ? '" data-method="' + item.method + '"' : '') + '>' + (item.text || '') + '</a>';
        if (item.submenu && item.submenu.length)
          li += buildTemplate(item.submenu).join('\n');
        li += '</li>';
        ul.splice(index + 1, 0, li);
      });
      return ul;
    };
    return {
      restrict: 'EA',
      scope: true,
      link: function postLink(scope, iElement, iAttrs) {
        var getter = $parse(iAttrs.bsDropdown), items = getter(scope);
        $timeout(function () {
          if (!angular.isArray(items)) {
          }
          var dropdown = angular.element(buildTemplate(items).join(''));
          dropdown.insertAfter(iElement);
          $compile(iElement.next('ul.dropdown-menu'))(scope);
        });
        iElement.addClass('dropdown-toggle').attr('data-toggle', 'dropdown');
      }
    };
  }
]);
'use strict';
angular.module('$strap.directives').factory('$modal', [
  '$rootScope',
  '$compile',
  '$http',
  '$timeout',
  '$q',
  '$templateCache',
  '$strapConfig',
  function ($rootScope, $compile, $http, $timeout, $q, $templateCache, $strapConfig) {
    var ModalFactory = function ModalFactory(config) {
      function Modal(config) {
        var options = angular.extend({ show: true }, $strapConfig.modal, config), scope = options.scope ? options.scope : $rootScope.$new(), templateUrl = options.template;
        return $q.when($templateCache.get(templateUrl) || $http.get(templateUrl, { cache: true }).then(function (res) {
          return res.data;
        })).then(function onSuccess(template) {
          var id = templateUrl.replace('.html', '').replace(/[\/|\.|:]/g, '-') + '-' + scope.$id;
          var $modal = $('<div class="modal hide" tabindex="-1"></div>').attr('id', id).addClass('fade').html(template);
          if (options.modalClass)
            $modal.addClass(options.modalClass);
          $('body').append($modal);
          $timeout(function () {
            $compile($modal)(scope);
          });
          scope.$modal = function (name) {
            $modal.modal(name);
          };
          angular.forEach([
            'show',
            'hide'
          ], function (name) {
            scope[name] = function () {
              $modal.modal(name);
            };
          });
          scope.dismiss = scope.hide;
          angular.forEach([
            'show',
            'shown',
            'hide',
            'hidden'
          ], function (name) {
            $modal.on(name, function (ev) {
              scope.$emit('modal-' + name, ev);
            });
          });
          $modal.on('shown', function (ev) {
            $('input[autofocus], textarea[autofocus]', $modal).first().trigger('focus');
          });
          $modal.on('hidden', function (ev) {
            if (!options.persist)
              scope.$destroy();
          });
          scope.$on('$destroy', function () {
            $modal.remove();
          });
          $modal.modal(options);
          return $modal;
        });
      }
      return new Modal(config);
    };
    return ModalFactory;
  }
]).directive('bsModal', [
  '$q',
  '$modal',
  function ($q, $modal) {
    return {
      restrict: 'A',
      scope: true,
      link: function postLink(scope, iElement, iAttrs, controller) {
        var options = {
            template: scope.$eval(iAttrs.bsModal),
            persist: true,
            show: false,
            scope: scope
          };
        angular.forEach([
          'modalClass',
          'backdrop',
          'keyboard'
        ], function (key) {
          if (angular.isDefined(iAttrs[key]))
            options[key] = iAttrs[key];
        });
        $q.when($modal(options)).then(function onSuccess(modal) {
          iElement.attr('data-target', '#' + modal.attr('id')).attr('data-toggle', 'modal');
        });
      }
    };
  }
]);
'use strict';
angular.module('$strap.directives').directive('bsNavbar', [
  '$location',
  function ($location) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs, controller) {
        scope.$watch(function () {
          return $location.path();
        }, function (newValue, oldValue) {
          $('li[data-match-route]', element).each(function (k, li) {
            var $li = angular.element(li), pattern = $li.attr('data-match-route'), regexp = new RegExp('^' + pattern + '$', ['i']);
            if (regexp.test(newValue)) {
              $li.addClass('active').find('.collapse.in').collapse('hide');
            } else {
              $li.removeClass('active');
            }
          });
        });
      }
    };
  }
]);
'use strict';
angular.module('$strap.directives').directive('bsPopover', [
  '$parse',
  '$compile',
  '$http',
  '$timeout',
  '$q',
  '$templateCache',
  function ($parse, $compile, $http, $timeout, $q, $templateCache) {
    $('body').on('keyup', function (ev) {
      if (ev.keyCode === 27) {
        $('.popover.in').each(function () {
          $(this).popover('hide');
        });
      }
    });
    return {
      restrict: 'A',
      scope: true,
      link: function postLink(scope, element, attr, ctrl) {
        var getter = $parse(attr.bsPopover), setter = getter.assign, value = getter(scope), options = {};
        if (angular.isObject(value)) {
          options = value;
        }
        $q.when(options.content || $templateCache.get(value) || $http.get(value, { cache: true })).then(function onSuccess(template) {
          if (angular.isObject(template)) {
            template = template.data;
          }
          if (!!attr.unique) {
            element.on('show', function (ev) {
              $('.popover.in').each(function () {
                var $this = $(this), popover = $this.data('popover');
                if (popover && !popover.$element.is(element)) {
                  $this.popover('hide');
                }
              });
            });
          }
          if (!!attr.hide) {
            scope.$watch(attr.hide, function (newValue, oldValue) {
              if (!!newValue) {
                popover.hide();
              } else if (newValue !== oldValue) {
                popover.show();
              }
            });
          }
          if (!!attr.show) {
            scope.$watch(attr.show, function (newValue, oldValue) {
              if (!!newValue) {
                $timeout(function () {
                  popover.show();
                });
              } else if (newValue !== oldValue) {
                popover.hide();
              }
            });
          }
          element.popover(angular.extend({}, options, {
            content: template,
            container : 'body',
            html: true
          }));
          var popover = element.data('popover');
          popover.hasContent = function () {
            return this.getTitle() || template;
          };
          popover.getPosition = function () {
            var r = $.fn.popover.Constructor.prototype.getPosition.apply(this, arguments);
            $compile(this.$tip)(scope);
            scope.$digest();
            this.$tip.data('popover', this);
            return r;
          };
          scope.$popover = function (name) {
            popover(name);
          };
          angular.forEach([
            'show',
            'hide'
          ], function (name) {
            scope[name] = function () {
              popover[name]();
            };
          });
          scope.dismiss = scope.hide;
          angular.forEach([
            'show',
            'shown',
            'hide',
            'hidden'
          ], function (name) {
            element.on(name, function (ev) {
              scope.$emit('popover-' + name, ev);
            });
          });
        });
      }
    };
  }
]);
'use strict';
angular.module('$strap.directives').directive('bsSelect', [
  '$timeout',
  function ($timeout) {
    var NG_OPTIONS_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/;
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function postLink(scope, element, attrs, controller) {
        var options = scope.$eval(attrs.bsSelect) || {};
        $timeout(function () {
          element.selectpicker(options);
          element.next().removeClass('ng-scope');
        });
        if (controller) {
          scope.$watch(attrs.ngModel, function (newValue, oldValue) {
            if (!angular.equals(newValue, oldValue)) {
              element.selectpicker('refresh');
            }
          });
        }
      }
    };
  }
]);
'use strict';
angular.module('$strap.directives').directive('bsTabs', [
  '$parse',
  '$compile',
  '$timeout',
  function ($parse, $compile, $timeout) {
    var template = '<div class="tabs">' + '<ul class="nav nav-tabs">' + '<li ng-repeat="pane in panes" ng-class="{active:pane.active}">' + '<a data-target="#{{pane.id}}" data-index="{{$index}}" data-toggle="tab">{{pane.title}}</a>' + '</li>' + '</ul>' + '<div class="tab-content" ng-transclude>' + '</div>';
    return {
      restrict: 'A',
      require: '?ngModel',
      priority: 0,
      scope: true,
      template: template,
      replace: true,
      transclude: true,
      compile: function compile(tElement, tAttrs, transclude) {
        return function postLink(scope, iElement, iAttrs, controller) {
          var getter = $parse(iAttrs.bsTabs), setter = getter.assign, value = getter(scope);
          scope.panes = [];
          var $tabs = iElement.find('ul.nav-tabs');
          var $panes = iElement.find('div.tab-content');
          var activeTab = 0, id, title, active;
          $timeout(function () {
            $panes.find('[data-title], [data-tab]').each(function (index) {
              var $this = angular.element(this);
              id = 'tab-' + scope.$id + '-' + index;
              title = $this.data('title') || $this.data('tab');
              active = !active && $this.hasClass('active');
              $this.attr('id', id).addClass('tab-pane');
              if (iAttrs.fade)
                $this.addClass('fade');
              scope.panes.push({
                id: id,
                title: title,
                content: this.innerHTML,
                active: active
              });
            });
            if (scope.panes.length && !active) {
              $panes.find('.tab-pane:first-child').addClass('active' + (iAttrs.fade ? ' in' : ''));
              scope.panes[0].active = true;
            }
          });
          if (controller) {
            iElement.on('show', function (ev) {
              var $target = $(ev.target);
              scope.$apply(function () {
                controller.$setViewValue($target.data('index'));
              });
            });
            scope.$watch(iAttrs.ngModel, function (newValue, oldValue) {
              if (angular.isUndefined(newValue))
                return;
              activeTab = newValue;
              setTimeout(function () {
                var $next = $($tabs[0].querySelectorAll('li')[newValue * 1]);
                if (!$next.hasClass('active')) {
                  $next.children('a').tab('show');
                }
              });
            });
          }
        };
      }
    };
  }
]);
'use strict';
angular.module('$strap.directives').directive('bsTimepicker', [
  '$timeout',
  '$strapConfig',
  function ($timeout, $strapConfig) {
    var TIME_REGEXP = '((?:(?:[0-1][0-9])|(?:[2][0-3])|(?:[0-9])):(?:[0-5][0-9])(?::[0-5][0-9])?(?:\\s?(?:am|AM|pm|PM))?)';
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function postLink(scope, element, attrs, controller) {
        if (controller) {
          element.on('changeTime.timepicker', function (ev) {
            $timeout(function () {
              controller.$setViewValue(element.val());
            });
          });
          var timeRegExp = new RegExp('^' + TIME_REGEXP + '$', ['i']);
          controller.$parsers.unshift(function (viewValue) {
            if (!viewValue || timeRegExp.test(viewValue)) {
              controller.$setValidity('time', true);
              return viewValue;
            } else {
              controller.$setValidity('time', false);
              return;
            }
          });
        }
        element.attr('data-toggle', 'timepicker');
        element.parent().addClass('bootstrap-timepicker');
        element.timepicker($strapConfig.timepicker || {});
        var timepicker = element.data('timepicker');
        var component = element.siblings('[data-toggle="timepicker"]');
        if (component.length) {
          component.on('click', $.proxy(timepicker.showWidget, timepicker));
        }
      }
    };
  }
]);
'use strict';
angular.module('$strap.directives').directive('bsTooltip', [
  '$parse',
  '$compile',
  function ($parse, $compile) {
    return {
      restrict: 'A',
      scope: true,
      link: function postLink(scope, element, attrs, ctrl) {
        var getter = $parse(attrs.bsTooltip), setter = getter.assign, value = getter(scope);
        scope.$watch(attrs.bsTooltip, function (newValue, oldValue) {
          if (newValue !== oldValue) {
            value = newValue;
          }
        });
        if (!!attrs.unique) {
          element.on('show', function (ev) {
            $('.tooltip.in').each(function () {
              var $this = $(this), tooltip = $this.data('tooltip');
              if (tooltip && !tooltip.$element.is(element)) {
                $this.tooltip('hide');
              }
            });
          });
        }
        element.tooltip({
          title: function () {
            return angular.isFunction(value) ? value.apply(null, arguments) : value;
          },
          html: true
        });
        var tooltip = element.data('tooltip');
        tooltip.show = function () {
          var r = $.fn.tooltip.Constructor.prototype.show.apply(this, arguments);
          this.tip().data('tooltip', this);
          return r;
        };
        scope._tooltip = function (event) {
          element.tooltip(event);
        };
        scope.hide = function () {
          element.tooltip('hide');
        };
        scope.show = function () {
          element.tooltip('show');
        };
        scope.dismiss = scope.hide;
      }
    };
  }
]);
'use strict';
angular.module('$strap.directives').directive('bsTypeahead', [
  '$parse',
  function ($parse) {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function postLink(scope, element, attrs, controller) {
        var getter = $parse(attrs.bsTypeahead), setter = getter.assign, value = getter(scope);
        scope.$watch(attrs.bsTypeahead, function (newValue, oldValue) {
          if (newValue !== oldValue) {
            value = newValue;
          }
        });
        element.attr('data-provide', 'typeahead');
        element.typeahead({
          source: function (query) {
            return angular.isFunction(value) ? value.apply(null, arguments) : value;
          },
          minLength: attrs.minLength || 1,
          items: attrs.items,
          updater: function (value) {
            if (controller) {
              scope.$apply(function () {
                controller.$setViewValue(value);
              });
            }
            scope.$emit('typeahead-updated', value);
            return value;
          }
        });
        var typeahead = element.data('typeahead');
        typeahead.lookup = function (ev) {
          var items;
          this.query = this.$element.val() || '';
          if (this.query.length < this.options.minLength) {
            return this.shown ? this.hide() : this;
          }
          items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source;
          return items ? this.process(items) : this;
        };
        if (!!attrs.matchAll) {
          typeahead.matcher = function (item) {
            return true;
          };
        }
        if (attrs.minLength === '0') {
          setTimeout(function () {
            element.on('focus', function () {
              element.val().length === 0 && setTimeout(element.typeahead.bind(element, 'lookup'), 200);
            });
          });
        }
      }
    };
  }
]);
/*
         ^                       ^
         |\   \        /        /|
        /  \  |\__  __/|       /  \
       / /\ \ \ _ \/ _ /      /    \
      / / /\ \ {*}\/{*}      /  / \ \
      | | | \ \( (00) )     /  // |\ \
      | | | |\ \(V""V)\    /  / | || \| 
      | | | | \ |^--^| \  /  / || || || 
     / / /  | |( WWWW__ \/  /| || || ||
    | | | | | |  \______\  / / || || || 
    | | | / | | )|______\ ) | / | || ||
    / / /  / /  /______/   /| \ \ || ||
   / / /  / /  /\_____/  |/ /__\ \ \ \ \
   | | | / /  /\______/    \   \__| \ \ \
   | | | | | |\______ __    \_    \__|_| \
   | | ,___ /\______ _  _     \_       \  |
   | |/    /\_____  /    \      \__     \ |    /\
   |/ |   |\______ |      |        \___  \ |__/  \
   v  |   |\______ |      |            \___/     |
      |   |\______ |      |                    __/
       \   \________\_    _\               ____/
     __/   /\_____ __/   /   )\_,      _____/
    /  ___/  \uuuu/  ___/___)    \______/
    VVV  V        VVV  V 
*/
// this ASCII dragon is really important, do not remove

/**
 * Main module
 * @type {[type]}
 */
var ut = angular.module('utopia', ['restangular', '$strap.directives', 'ngDragDrop', 'utopia-templates']);

/**
 * Constants
 * @type {String}
 */
ut.host = "http://PS7026/utopia/";
angular.module('utopia').constant("route", {
	resolve : function(route) {
		return {
			templateUrl : route,
			controller : this.capitalise(route) + 'Controller',
			reloadOnSearch: false
		} 
	},
	capitalise : function (string) {
	    return string.charAt(0).toUpperCase() + string.slice(1);
	}
})

/**
 * Configuring route provider
 * @param  {[type]} $routeProvider
 * @param  {[type]} $locationProvider
 * @param  {[type]} route
 * @return {[type]}
 */
angular.module('utopia').config(function($routeProvider, $locationProvider, route) {
	$routeProvider.when('/', { redirectTo : 'projects' });
	$routeProvider.when('/login', route.resolve('login'));
	$routeProvider.when('/projects', route.resolve('projects'));
	$routeProvider.when('/logout', route.resolve('logout'));
	$routeProvider.when('/projects/:project_id/whiteboard', route.resolve('whiteboard'));
	$routeProvider.when('/projects/:project_id/whiteboard/:workitem_id', route.resolve('whiteboard'));
	$routeProvider.when('/projects/:project_id/timeline', route.resolve('timeline'));
	$routeProvider.when('/projects/:project_id/planning', route.resolve('planning'));
	$routeProvider.when('/projects/:project_id/dashboard', route.resolve('dashboard'));
	$routeProvider.otherwise({
		templateUrl : 'under-construction',
		controller : nothing
	});
});

/**
 * Setup $http interceptor and NProgress plugin
 * @param  {[type]} $httpProvider
 * @param  {[type]} $routeProvider
 * @param  {[type]} RestangularProvider
 * @return {[type]}
 */
angular.module('utopia').config(function($httpProvider, $routeProvider, RestangularProvider) {
	//global error handlers
	var interceptor = function ($rootScope, $q) {
		function success(response) {
			NProgress.done();
			return response;
		}
		function error(response) {
			NProgress.done();
			var status = response.status;
			console.log('are error ala ki', response);
			if (status != 200) {
				$routeProvider.location = "#/login";
				return;
			}
			return $q.reject(response);
		}
		return function (promise) {
			NProgress.start();
			return promise.then(success, error);
		}
	};
	$httpProvider.responseInterceptors.push(interceptor);

	RestangularProvider.setBaseUrl(ut.host);
	RestangularProvider.setRequestInterceptor(function(elem, operation) {
	   if (operation === "remove" || operation === 'customDELETE') {
	      return undefined;
	   } 
	   return elem;
	});
});

/**
 * Setup global authentication check and header settings
 * @param  {[type]} $rootScope
 * @param  {[type]} $location
 * @param  {[type]} $http
 * @param  {[type]} db
 * @param  {[type]} $timeout
 * @return {[type]}
 */
angular.module('utopia').run(function($rootScope, $location, $http, db, $timeout) {
	//global authentication
	$rootScope.$on("$routeChangeStart", function(event, next, current) {
		NProgress.start();
		var api = db.get('api-key');
		if (!api) {
			$location.path( "/login" );
		}
	});

	//navigation check
	$rootScope.$on("$routeChangeSuccess",  function(event, next, current) {
		NProgress.done();
		var api = db.get('api-key');
		if(!api) {
			$rootScope.menues = ut.notLoggedInNav;
		} else {
			$rootScope.menues = ut.loggedInNav;
		}
	});
	//global header settings
	$http.defaults.headers.common['utopia-server-version'] = db.get('api-key');
});

var nothing = function() {}
/**
 * Defines utility methods for $scope hierarchy
 * @param  {[type]} $rootScope [description]
 * @param  {[type]} $location  [description]
 * @param  {[type]} $http      [description]
 * @param  {[type]} db         [description]
 * @param  {[type]} $timeout   [description]
 * @return {[type]}            [description]
 */
angular.module('utopia').run(function($rootScope, $location, $http, db, $timeout, Restangular) {
	/**
	 * Returns workitem type 
	 * @param  WorkitemType id 
	 * @return WorkitemType
	 */
	$rootScope.getType = function(id) {
		var type = _.find(db.get('types'), function(d) { return d.id == id; });
		return type ? type.title : '';
	}

	/**
	 * Returns state based on WorkitemState id
	 * @param  {[type]} id [description]
	 * @return {[type]}    [description]
	 */
	$rootScope.getState = (function() {
		var states = db.get('states');
		return function(id) {
			var state = _.find(states, function(d) { return d.id == id; });
			return state ? state.title : '';
		}
	})();

	/**
	 * Retrieves the data for workitem
	 * @param  {[type]} id [description]
	 * @return {[type]}    [description]
	 */
	$rootScope.fetchDetails = function(id) {
		$rootScope.swkitm = null;
		Restangular.one('workitem', id).get().then(function(d){
			$rootScope.swkitm = d;
			$rootScope.$emit('popover-shown');
		})
	}

	/**
	 * Returns Sprint of project based on SprintID 
	 * @param  {[type]} id [description]
	 * @return {[type]}    [description]
	 */
	$rootScope.getSprint = function(id) {
		if(!id) {
			return '';
		}   
		var sprint = _.find(db.get('sprints'), function(d) { return d.id == id });
		return sprint ? sprint.title : '';
	};

	/**
	 * Converts regular date into momentjs ago
	 * @param  {[type]} date [description]
	 * @return {[type]}      [description]
	 */
	$rootScope.ago = function(date) {
		if(!date) {
			return '';
		}
		//var d = new Date(date);
		return moment(date).fromNow();
	};

	/**
	 * Returns a user from id
	 * @param  {[type]} id [description]
	 * @return {[type]}    [description]
	 */
	$rootScope.getUser = function(id) {
		if(!id) {
			return
		}
		var users = db.get('users');
		var a = _.find(users, function(d) { return d.id == id; });
		return a ? a.display_name : '';
	};

	/**
	 * Multipurpose function
	 * used in timeline. handles conversion from 
	 * type_id = type
	 * state_id = state
	 * user_id = user
	 * @param  {[type]} value  [description]
	 * @param  {[type]} action [description]
	 * @return {[type]}        [description]
	 */
	$rootScope.getValue = function(value, action) {
		var actionObject = {
			state : function(value) {
				return $rootScope.getState(value);
			},
			type : function(value) {
				return $rootScope.getType(value);
			},
			assigned_to : function(value) {
				return $rootScope.getUser(value);
			},
			created_by : function(value) {
				return $rootScope.getUser(value);
			},
			planned_for : function(value) {
				console.log(value);
				return $rootScope.getSprint(value);
			}
		}
		return actionObject[action] ? actionObject[action](value) : value;
	}

	/**
	 * used to show a flash message to use
	 * NOTE: Yet to add an HTML elemnt for it
	 * @param  {[type]} message [description]
	 * @param  {[type]} cls     [description]
	 * @return {[type]}         [description]
	 */
	$rootScope.flash = function(message, cls) {
		$rootScope.flashMessage = message;
		$rootScope.flashClass = cls || 'alert-block';
		$rootScope.flashShow = true;
		$timeout(function(){
			$rootScope.flashShow = false;
		},500)
	}

	/**
	 * Formats date into a readable format
	 * @param  {[type]} date   [description]
	 * @param  {[type]} noTime [description]
	 * @return {[type]}        [description]
	 */
	$rootScope.formatDate = function(date, noTime) {
		var expression = noTime ? "Do MMM YYYY" : "Do MMM YYYY, h:mm a";
		return moment(date).format(expression);
	}


	/**
	 * Get the popover inside if
	 * @return {[type]} [description]
	 */
	$rootScope.$on('popover-shown', function($event){
		$popover = $(".popover");
		$popover.find(".arrow").hide();
		
		/**
		 * 50ms delay to let it paint, 
		 * TODO : need to repeat this process till popover is properly adjusted
		 * @return {[type]} [description]
		 */
		$timeout(function() {
			/**
		 	* If going below the screen, bring it up
		 	*/
			if(($popover.height() + $popover.offset().top) > $(window).height()) {
				$popover.css({top : $(window).height() - $popover.height() - 30});
			}
			/**
			 * If its going above the top line, bring it down.
			 */
			if($popover.offset().top < 0) {
				$popover.css({top : 30});
			}
		}, 0)
		event.stopPropagation();
	});

	/**
	 * Retrieves project details from server
	 * @param  {[type]} id [description]
	 * @return {[type]}    [description]
	 */
	$rootScope.getProjectDetails = function(project_id) {
		var projects = Restangular.all('project');
		db.set('current_project', project_id);
		projects.one(project_id).getList('types').then(function(response) {
			db.set('types', response);
		});
		projects.one(project_id).getList('states').then(function(response) {
			db.set('states', response);
		});
		projects.one(project_id).getList('sprints').then(function(response) {
			db.set('sprints', response);
		});
		projects.one(project_id).getList('users').then(function(response) {
			db.set('users', response);
		});
	}

	/**
	 * Immediately hides the popover
	 * @return {[type]} [description]
	 */
	$rootScope.$on("popover-hide",function() {
		$popover = $(".popover");
		$popover.hide();
	});
});
/**
 * A localstorage wrapper for utopia
 * @param  {[type]} $rootScope [description]
 * @return {[type]}            [description]
 */
angular.module('utopia').service('db', function($rootScope) {
	var dataset = localStorage || {};
	
	var returnObject = {
		/**
		 * Gets a data value
		 * @param  {[type]} key [description]
		 * @return {[type]}     [description]
		 */
		get : function(key) {
			return dataset[key] ? JSON.parse(dataset[key]) : undefined;
		},

		/**
		 * Sets a data value in localstorage
		 * @param {[type]} key   [description]
		 * @param {[type]} value [description]
		 */
		set : function(key, value) {
			dataset[key] = (typeof value == "string") ? value : JSON.stringify(value);
		},

		/**
		 * If key given, clears the data for key 
		 * else
		 * entire database
		 * @param  {[type]} key [description]
		 * @return {[type]}     [description]
		 */
		clear : function(key) {
			if(key) {
				delete dataset[key];
			} else {
				for (var a in dataset) {
					delete dataset[a];
				};
			}
		},
		print : function() {
			console.log(dataset);
		}
	};
	return returnObject;
})

//Constants
ut.loggedInNav = [{text : "About", href: "#/about"}, {text : "Logout", href: "#/logout"}];
ut.notLoggedInNav = [{text : "Get started", href: "#/get-started"}];

//TODO : get all apis in here as constants jsut call the variable names after this.

// utility methods
ut.flashMessage = function (message) {
  console.log('flash-message', message);
}

jQuery.fn.exists = function() {
	return this.length > 0;
}

Offline.options = {
  // Should we check the connection status immediatly on page load.
  checkOnLoad: true,

  // Should we monitor AJAX requests to help decide if we have a connection.
  interceptRequests: false,

  // Should we automatically retest periodically when the connection is down (set to false to disable).
  reconnect: {
    // How many seconds should we wait before rechecking.
    initialDelay: 0,

    // How long should we wait between retries.
    delay: (3)
  },

  checks : {
  	active : 'xhr',
  	xhr : {
  		url : ut.host
  	}
  },

  // Should we store and attempt to remake requests which fail while the connection is down.
  requests: true,

  // Should we show a snake game while the connection is down to keep the user entertained?
  // It's not included in the normal build, you should bring in js/snake.js in addition to
  // offline.min.js.
  game: false
};

var timeout = setInterval(function(){
	Offline.check();
},2000)
angular.module('utopia').controller('DashboardController', [
  '$scope',
  '$routeParams',
  function ($scope, $routeParams) {
    $scope.project_id = $routeParams.project_id;
  }
]);angular.module('utopia').controller('LoginController', [
  '$scope',
  '$http',
  '$location',
  'db',
  function ($scope, $http, $location, db) {
    $scope.submit = function () {
      var data = {
          username: $scope.username,
          password: $scope.password
        };
      $http.post(ut.host + 'key', data).success(function (d) {
        $location.path('/');
        db.set('api-key', d);
        $http.defaults.headers.common['utopia-server-version'] = db.get('api-key');
      });
    };
  }
]);
angular.module('utopia').controller('LogoutController', [
  '$scope',
  'db',
  'Restangular',
  function ($scope, db, Restangular) {
    var key = db.get('api-key');
    NProgress.start();
    Restangular.one('key/' + key).remove().then(function (data) {
      NProgress.done();
      db.clear();
    });
  }
]);angular.module('utopia').controller('PlanningController', [
  '$scope',
  'db',
  '$routeParams',
  'Restangular',
  '$timeout',
  '$modal',
  function ($scope, db, $routeParams, Restangular, $timeout, $modal) {
    if (db.get('current_project') == $scope.project_id) {
      $scope.getProjectDetails();
    }
    $scope.sprints = db.get('sprints');
    $scope.project_id = $routeParams.project_id;
    var sprint = Restangular.all('sprint');
    var selectedSprint = 0;
    angular.forEach($scope.sprints, function (d) {
      (function (d) {
        sprint.one(d.id).getList('workitems').then(function (workitems) {
          d.workitems = workitems;
        });
      }(d));
    });
    $scope.setWorkitemDrop = function (event, ui, id) {
      $scope.draggedWk = id;
    };
    $scope.setSprintDrop = function (event, ui, id) {
      var sprint = _.find($scope.sprints, function (d) {
          return d.id === id;
        });
      var wk = _.find(sprint.workitems, function (d) {
          return d.id === $scope.draggedWk;
        });
      if (wk.planned_for !== id) {
        Restangular.one('workitem', wk.id).get().then(function (d) {
          d.planned_for = id;
          d.put();
        });
      }
    };
    $scope.createSprint = function (newsprint) {
      sprint.one($scope.project_id).post('', newsprint).then(function (d) {
        $scope.sprints.push(d);
      });
    };
    $scope.sprintModal = function (value, id) {
      var modal = $modal({
          template: value + '-sprint',
          show: true,
          backdrop: 'static',
          scope: $scope,
          persist: true
        });
      $scope.selectedSprint = _.find($scope.sprints, function (d) {
        return d.id === id;
      });
      $scope.allowedSprints = _.filter($scope.sprints, function (d) {
        return d.id !== id;
      });
      $scope.shiftedSprint = _.first($scope.sprints).id;
    };
    $scope.deleteSprint = function (shiftedSprint) {
      sprint.customDELETE($scope.selectedSprint.id + '/' + shiftedSprint).then(function (d) {
        $scope.sprints = _.filter($scope.sprints, function (d) {
          return d.id !== $scope.selectedSprint.id;
        });
      });
      $scope.selectedSprint.id = null;
    };
    $scope.editSprint = function () {
      var currentSprint = angular.copy($scope.selectedSprint);
      delete currentSprint.workitems;
      sprint.customPUT(currentSprint, $scope.selectedSprint.id).then(nothing);
    };
  }
]);angular.module('utopia').controller('ProjectsController', [
  '$scope',
  '$location',
  'db',
  'Restangular',
  function ($scope, $location, db, Restangular) {
    var projects = Restangular.all('project');
    projects.getList().then(function (pData) {
      $scope.projects = pData;
    });
    $scope.load_project = function () {
      var project_id = this.project.id;
      $scope.getProjectDetails(project_id);
      $location.path('/projects/' + project_id + '/whiteboard');
    };
  }
]);angular.module('utopia').controller('TimelineController', [
  '$scope',
  '$routeParams',
  'db',
  'Restangular',
  '$timeout',
  function ($scope, $routeParams, db, Restangular, $timeout) {
    if (db.get('current_project') == $scope.project_id) {
      $scope.getProjectDetails();
    }
    $scope.project_id = $routeParams.project_id;
    $scope.users = db.get('users');
    $scope.logs = [];
    var timeline = Restangular.one('timeline', $scope.project_id);
    timeline.getList('comments').then(function (comments) {
      normalizeAndPush(comments, 'comments');
    });
    timeline.getList('tasks').then(function (tasks) {
      normalizeAndPush(tasks, 'task_log');
    });
    timeline.getList('logs').then(function (logs) {
      normalizeAndPush(logs, 'workitem_log');
    });
    function normalizeAndPush(data, type) {
      data.forEach(function (d) {
        d.log_type = type;
        if (d.done_date)
          d.last_updated = d.done_date;
        if (d.created_at)
          d.last_updated = d.created_at;
        if (d.timestamp)
          d.last_updated = d.timestamp;
        $scope.logs.push(d);
      });
    }
    $scope.filterTimeline = function (filterObj) {
      filterObj.project_id = $scope.project_id;
      filter = angular.copy(filterObj);
      filter.users = filterObj.users.join(',');
      $scope.logs = [];
      timeline.getList('comments', filter).then(function (comments) {
        normalizeAndPush(comments, 'comments');
      });
      timeline.getList('tasks', filter).then(function (tasks) {
        normalizeAndPush(tasks, 'task_log');
      });
      timeline.getList('logs', filter).then(function (logs) {
        normalizeAndPush(logs, 'workitem_log');
      });
    };
  }
]);angular.module('utopia').controller('WhiteboardController', [
  '$scope',
  '$routeParams',
  '$window',
  'db',
  'Restangular',
  '$location',
  function ($scope, $routeParams, $window, db, Restangular, $location) {
    if (db.get('current_project') == $scope.project_id) {
      $scope.getProjectDetails();
    }
    var project = Restangular.all('project');
    var workitem = Restangular.all('workitem');
    $scope.users = db.get('users');
    $scope.types = db.get('types');
    $scope.states = db.get('states');
    $scope.project_id = $routeParams.project_id;
    $scope.swkitm = null;
    project.one($scope.project_id).getList('workitems').then(function (workitems) {
      $scope.workitems = workitems;
      if ($location.search().id) {
        $scope.select($location.search().id);
      }
    });
    $scope.$on('$routeUpdate', function () {
      $scope.select($location.search().id);
    });
    $scope.select = function (id) {
      if (!id) {
        $scope.swkitm = this.wk;
        id = $scope.swkitm.id;
      } else {
        $scope.swkitm = _.find($scope.workitems, function (d) {
          return d.id == $location.search().id;
        });
      }
      if (!$scope.swkitm) {
        var index = 0;
        Restangular.one('workitem', id).get().then(function (d) {
          $scope.workitems.unshift(d);
          $scope.swkitm = d;
        });
      }
      $scope.selectedIndex = this.$index || index;
      $scope.newComment = '';
      $scope.task = '';
      $scope.updateStates();
      workitem.one(id).getList('comments').then(function (data) {
        $scope.comments = data;
      });
      workitem.one(id).getList('tasks').then(function (data) {
        $scope.tasks = data;
      });
    };
    $scope.search = function () {
      console.log('send a server call', $scope.query);
    };
    $scope.getBreakDown = function () {
      var s = '';
      if ($scope.workitems) {
        var p0 = $scope.workitems.filter(function (d) {
            return d.importance == 0;
          }).length;
        var p1 = $scope.workitems.filter(function (d) {
            return d.importance == 1;
          }).length;
        var p2 = $scope.workitems.filter(function (d) {
            return d.importance == 2;
          }).length;
        s = 'P0 - ' + p0 + ', P1 - ' + p1 + ', P2 - ' + p2 + '';
      }
      return s;
    };
    $scope.updateStates = function () {
      var types = db.get('states');
      $scope.states = types.filter(function (d) {
        return d.workitem_type_id == $scope.swkitm.type;
      });
    };
    $scope.setImportance = function (d) {
      $scope.swkitm.importance = d;
    };
    $scope.setStoryPoints = function (d) {
      $scope.swkitm.story_points = d;
    };
    $scope.addComment = function () {
      workitem.one($scope.swkitm.id).post('comments', { comment_body: $scope.newComment }).then(function (data) {
        $scope.newComment = '';
        $scope.comments.push(data);
      });
    };
    $scope.deleteComment = function (index) {
      workitem.customDELETE('comments/' + this.comment.id).then(function (comment) {
        $scope.comments = _.filter($scope.comments, function (d) {
          return d.id != comment.id;
        });
      });
    };
    $scope.saveWorkitem = function () {
      $scope.swkitm.last_updated = new Date().toUTCString();
      workitem.customPUT($scope.swkitm).then(nothing);
    };
    $scope.deleteWorkitem = function () {
      var index = $scope.workitems.indexOf($scope.swkitm);
      workitem.one($scope.swkitm.id).remove().then(function () {
        $scope.workitems.splice(index, 1);
        $scope.swkitm = null;
      });
    };
    $scope.addTask = function () {
      workitem.one($scope.swkitm.id).post('tasks', { task: $scope.newTask }).then(function (task) {
        $scope.newTask = '';
        $scope.tasks.push(task);
      });
    };
    $scope.toggleTask = function () {
      $scope.swkitm.last_updated = new Date().toUTCString();
      workitem.customPUT(this.task, 'tasks').then(nothing);
    };
    $scope.deleteTask = function () {
      workitem.customDELETE('tasks/' + this.task.id).then(function (task) {
        $scope.tasks = _.filter($scope.tasks, function (d) {
          return d.id != task.id;
        });
      });
    };
    $scope.$on('event', function (event, data) {
    });
  }
]);
angular.module('utopia').directive('chosen', [
  '$timeout',
  function ($timeout) {
    var returnObj = {
        restrict: 'A',
        link: function (scope, element, attr) {
          var model = attr['ngModel'];
          var options = attr['ngOptions'];
          var optionsModel = options.split(' ');
          optionsModel = optionsModel[optionsModel.length - 1];
          element.chosen();
          scope.$watch(optionsModel, function () {
            element.trigger('liszt:updated');
          });
          scope.$watch(model, function () {
            element.trigger('liszt:updated');
          });
          return scope.$watch(model, function (newVal, oldVal) {
            element.trigger('liszt:updated');
          });
        }
      };
    return returnObj;
  }
]);angular.module('utopia').directive('bnDocumentClick', [
  '$document',
  '$rootScope',
  '$timeout',
  function ($document, $rootScope, $timeout) {
    return {
      restrict: 'EA',
      link: function (scope, element, attrs) {
        $document.on('click', function (ev) {
          $('.popover').hide();
        });
      }
    };
  }
]);angular.module('utopia').directive('utFilterPane', [
  'db',
  function (db) {
    return {
      templateUrl: 'filter-pane',
      controller: [
        '$scope',
        function ($scope) {
          $scope.selectedUsers = [];
          $scope.from;
          $scope.to;
          $scope.applyFilter = function () {
            var filterObj = {};
            var filterObj = {
                from: $scope.from,
                to: $scope.to,
                workitem_id: $scope.workitem_ids,
                users: $scope.selectedUsers
              };
            for (a in filterObj) {
              if (!filterObj[a]) {
                delete filterObj[a];
              }
            }
            $scope.filterTimeline(filterObj);
          };
          $scope.changed = function () {
            console.log('message');
          };
        }
      ],
      link: function (scope, element, attr) {
      }
    };
  }
]);angular.module('utopia').constant('amTimeAgoConfig', { withoutSuffix: false }).directive('amTimeAgo', [
  '$window',
  'amTimeAgoConfig',
  function ($window, amTimeAgoConfig) {
    'use strict';
    return function (scope, element, attr) {
      var activeTimeout = null;
      var currentValue;
      var currentFormat;
      function cancelTimer() {
        if (activeTimeout) {
          $window.clearTimeout(activeTimeout);
          activeTimeout = null;
        }
      }
      function updateTime(momentInstance) {
        element.text(momentInstance.fromNow(amTimeAgoConfig.withoutSuffix));
        var howOld = $window.moment().diff(momentInstance, 'minute');
        var secondsUntilUpdate = 3600;
        if (howOld < 1) {
          secondsUntilUpdate = 1;
        } else if (howOld < 60) {
          secondsUntilUpdate = 30;
        } else if (howOld < 180) {
          secondsUntilUpdate = 300;
        }
        activeTimeout = $window.setTimeout(function () {
          updateTime(momentInstance);
        }, secondsUntilUpdate * 1000);
      }
      function updateMoment() {
        cancelTimer();
        updateTime($window.moment(currentValue, currentFormat));
      }
      scope.$watch(attr.amTimeAgo, function (value) {
        if (typeof value === 'undefined' || value === null || value === '') {
          cancelTimer();
          if (currentValue) {
            element.text('');
            currentValue = null;
          }
          return;
        }
        if (angular.isNumber(value)) {
          value = new Date(value);
        }
        currentValue = value;
        updateMoment();
      });
      attr.$observe('amFormat', function (format) {
        currentFormat = format;
        if (currentValue) {
          updateMoment();
        }
      });
      scope.$on('$destroy', function () {
        cancelTimer();
      });
    };
  }
]).filter('amCalendar', [
  '$window',
  function ($window) {
    'use strict';
    return function (value) {
      if (typeof value === 'undefined' || value === null) {
        return '';
      }
      if (!isNaN(parseFloat(value)) && isFinite(value)) {
        value = new Date(parseInt(value, 10));
      }
      return $window.moment(value).calendar();
    };
  }
]).filter('amDateFormat', [
  '$window',
  function ($window) {
    'use strict';
    return function (value, format) {
      if (typeof value === 'undefined' || value === null) {
        return '';
      }
      if (!isNaN(parseFloat(value)) && isFinite(value)) {
        value = new Date(parseInt(value, 10));
      }
      return $window.moment(value).format(format);
    };
  }
]).filter('amDurationFormat', [
  '$window',
  function ($window) {
    'use strict';
    return function (value, format, suffix) {
      if (typeof value === 'undefined' || value === null) {
        return '';
      }
      return $window.moment.duration(value, format).humanize(suffix);
    };
  }
]).filter('amTimeAgo', [
  '$window',
  function ($window) {
    return function (value) {
      if (typeof value === 'undefined' || value === null) {
        return '';
      }
      var localDate = new Date(value);
      return $window.moment(localDate).fromNow();
    };
  }
]);angular.module('utopia').directive('resize', [
  '$window',
  function ($window) {
    return function (scope, element) {
      var w = angular.element($window);
      scope.getWindowDimensions = function () {
        return {
          'h': w.height(),
          'w': w.width()
        };
      };
      scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
        scope.windowHeight = newValue.h;
        scope.windowWidth = newValue.w;
        scope.style = function () {
          return { 'height': Math.floor(newValue.h - angular.element(element).offset().top - 42) + 'px' };
        };
      }, true);
      w.bind('resize', function () {
        scope.$apply();
      });
    };
  }
]);
angular.module('utopia-templates', ['dashboard', 'delete-sprint', 'edit-sprint', 'filter-pane', 'login', 'logout', 'new-sprint', 'new-workitem', 'planning', 'projects', 'timeline', 'under-construction', 'whiteboard-filter', 'whiteboard', 'workitem-details']);

angular.module("dashboard", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard",
    "<!-- dashboard -->\n" +
    "<div class='row-fluid'>\n" +
    "  <ul class=\"nav nav-pills\">\n" +
    "      <li class='active'><a href='#/projects/{{project_id}}/dashboard'>Dashboard</a></li>\n" +
    "      <li><a href='#/projects/{{project_id}}/whiteboard'>Whiteboard</a></li>\n" +
    "      <li><a href='#/projects/{{project_id}}/timeline'>Timeline</a></li>\n" +
    "      <li><a href='#/projects/{{project_id}}/planning'>Planning</a></li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "<h1>Hello dashboard!</h1>");
}]);

angular.module("delete-sprint", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("delete-sprint",
    "<!-- delete sprint -->\n" +
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">x</button>\n" +
    "  <h3>Delete sprint: {{selectedSprint.title}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <p>Move the existing workitems from this sprint to</p>\n" +
    "  <select class='input-medium'\n" +
    "    chosen ng-model=\"shiftedSprint\"\n" +
    "    ng-options=\"sprint.id as sprint.title for sprint in allowedSprints\">\n" +
    "  </select>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button type=\"button\" class=\"btn\" ng-click=\"hide()\">Close</button>\n" +
    "  <button class=\"btn btn-primary\" ng-click=\"hide();deleteSprint(shiftedSprint);\">Save changes</button>\n" +
    "</div>");
}]);

angular.module("edit-sprint", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("edit-sprint",
    "<!-- edit a sprint -->\n" +
    "<div class=\"modal-header\">\n" +
    "    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">x</button>\n" +
    "    <h3>Edit sprint: {{selectedSprint.title}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "<form class=\"form-horizontal\">\n" +
    "  <div class=\"control-group\">\n" +
    "    <label class=\"control-label\" for=\"title\">Title</label>\n" +
    "    <div class=\"controls\">\n" +
    "      <input type=\"text\" placeholder=\"Title\" ng-model='selectedSprint.title' />\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"control-group\">\n" +
    "    <label class=\"control-label\" for=\"inputPassword\">Goals</label>\n" +
    "    <div class=\"controls\">\n" +
    "      <textarea placeholder=\"Set some goals\" ng-model='selectedSprint.goals' />\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button type=\"button\" class=\"btn\" ng-click=\"hide()\">Close</button>\n" +
    "    <button class=\"btn btn-primary\" ng-click=\"hide();editSprint();\">Save changes</button>\n" +
    "</div>");
}]);

angular.module("filter-pane", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("filter-pane",
    "<!-- filter pane -->\n" +
    "<div class=\"well text-left side-nav affix\">\n" +
    "    <legend>Filter</legend>\n" +
    "    <strong>By workitem ID</strong>\n" +
    "    <label>\n" +
    "        <input type=\"text\" ng-model='workitem_ids'/>\n" +
    "    </label>\n" +
    "    <div><strong>By users</strong></div>\n" +
    "    <select\n" +
    "        chosen\n" +
    "        multiple='true'\n" +
    "        ng-model='selectedUsers'\n" +
    "        ng-options='t.id as t.display_name for t in users'/>\n" +
    "    <div>\n" +
    "        <strong>By date</strong>\n" +
    "    </div>\n" +
    "    <label>\n" +
    "        <div>Start</div>\n" +
    "        <input type=\"date\" ng-model='from' />\n" +
    "    </label>\n" +
    "    <label>\n" +
    "        <div>End</div>\n" +
    "        <input type=\"date\" ng-model='to' />\n" +
    "    </label>\n" +
    "    <!-- <div><strong>Group by</strong></div>\n" +
    "    <label class=\"radio inline\">\n" +
    "      <input type=\"radio\" name=\"group-radios\" value=\"User\" checked>\n" +
    "      User\n" +
    "    </label>\n" +
    "    <label class=\"radio inline\">\n" +
    "      <input type=\"radio\" name=\"group-radios\" value=\"Workitem\">\n" +
    "      Workitem\n" +
    "    </label> -->            \n" +
    "    <div>\n" +
    "        <input type='button' class=\"btn btn-medium pull-right\" ng-click='applyFilter()' value='Apply' />\n" +
    "    </div>\n" +
    "    </form>\n" +
    "</div>");
}]);

angular.module("login", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login",
    "<!-- Login View -->\n" +
    "<div class='row-fluid'>\n" +
    "    <div class='span9'>\n" +
    "    <!-- Login Carousel -->\n" +
    "    <div id=\"myCarousel\" class=\"carousel slide\">\n" +
    "      <ol class=\"carousel-indicators\">\n" +
    "        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n" +
    "        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n" +
    "        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n" +
    "        <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n" +
    "        <li data-target=\"#myCarousel\" data-slide-to=\"4\"></li>\n" +
    "      </ol>\n" +
    "      <!-- Carousel items -->\n" +
    "      <div class=\"carousel-inner\">\n" +
    "        <div class=\"active item\">\n" +
    "            <h1>Agile project management</h1>\n" +
    "            <span>Simple yet powerful</span>\n" +
    "        </div>\n" +
    "        <div class=\"item\">\n" +
    "            <h1>Interactive dashboards</h1>\n" +
    "            <span>Know the current state of your project</span>\n" +
    "        </div>\n" +
    "        <div class=\"item\">\n" +
    "            <h1>Beautiful timeline view</h1>\n" +
    "            <span>Get to know who's working on what</span>\n" +
    "        </div>\n" +
    "        <div class=\"item\">\n" +
    "            <h1>Emphasis on planning and testing</h1>\n" +
    "            <span>It's important</span>\n" +
    "        </div>\n" +
    "         <div class=\"item\">\n" +
    "            <h1>Customizable whiteboards</h1>\n" +
    "            <span>Make Utopia your own!</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <!-- Carousel nav -->\n" +
    "      <a class=\"carousel-control left\" href=\"#myCarousel\" data-slide=\"prev\">&lsaquo;</a>\n" +
    "      <a class=\"carousel-control right\" href=\"#myCarousel\" data-slide=\"next\">&rsaquo;</a>\n" +
    "    </div>\n" +
    "    </div>\n" +
    "    <!-- Login form -->\n" +
    "    <form class=\"span3 login-form\">\n" +
    "      <div class=\"control-group\">\n" +
    "        <label class=\"control-label\" for=\"inputEmail\">Email</label>\n" +
    "        <div class=\"controls\">\n" +
    "          <input type=\"email\" id=\"username\" placeholder=\"Email\" ng-model='username' required>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"control-group\">\n" +
    "        <label class=\"control-label\" for=\"inputPassword\">Password</label>\n" +
    "        <div class=\"controls\">\n" +
    "          <input type=\"password\" id=\"password\" placeholder=\"Password\" ng-model='password' required>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"control-group\">\n" +
    "        <div class=\"controls\">\n" +
    "          <label class=\"checkbox\">\n" +
    "            <input type=\"checkbox\"> Remember me\n" +
    "          </label>\n" +
    "          <input type=\"submit\" class=\"btn\" ng-click='submit()'></input>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "</div>");
}]);

angular.module("logout", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("logout",
    "<!-- Logout View -->\n" +
    "<div class='row-fluid'>\n" +
    "    <h1>You have successfully logged out.</h1>\n" +
    "    <span>Click <a href='#/login'>here</a> to login.</span>\n" +
    "</div>");
}]);

angular.module("new-sprint", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("new-sprint",
    "<!-- new-sprint -->\n" +
    "<form ng-submit=\"createSprint(newsprint)\">\n" +
    "	<input type='text' placeholder='Title' ng-model='newsprint.title' required/>\n" +
    "	<textarea placeholder='Set some goals for this sprint !' ng-model='newsprint.goals' />\n" +
    "	<button class='btn btn-primary' type=\"submit\">Create</button>\n" +
    "</form>");
}]);

angular.module("new-workitem", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("new-workitem",
    "<!-- new workitem -->\n" +
    "<h1>Here you shall add a new workitem</h1>");
}]);

angular.module("planning", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("planning",
    "<!-- planning view -->  \n" +
    "<div class='row-fluid'>\n" +
    "  <ul class=\"nav nav-pills\">\n" +
    "    <li><a href='#/projects/{{project_id}}/dashboard'>Dashboard</a></li>\n" +
    "    <li><a href='#/projects/{{project_id}}/whiteboard'>Whiteboard</a></li>\n" +
    "    <li><a href='#/projects/{{project_id}}/timeline'>Timeline</a></li>\n" +
    "    <li class='active'><a href='#/projects/{{project_id}}/planning'>Planning</a></li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "<div style='padding:5px;margin-top:-20px;'>\n" +
    "  <button class='btn' type=\"button\" data-title=\"Create a new sprint\" bs-popover=\"'new-sprint'\"><i class='icon-plus'></i>Sprint</button>\n" +
    "</div>\n" +
    "<div style='overflow:scroll'>\n" +
    "  <table class='sprint-table' resize ng-style=\"style()\" id=\"internal-view\">\n" +
    "    <tr>\n" +
    "      <td class='sprint-panel'  \n" +
    "      ng-repeat=\"sprint in sprints\" \n" +
    "      data-drop=\"true\" \n" +
    "      ng-model=\"sprint.workitems\" \n" +
    "      ng-animate=\" 'animate' \"\n" +
    "      jqyoui-droppable=\"{multiple:true , onDrop: 'setSprintDrop({{sprint.id}})'}\"\n" +
    "      data-jqyoui-options=\"{index: {{$index}}}\" >\n" +
    "\n" +
    "      <div class='sprint-panel-header'>\n" +
    "        {{sprint.title}}\n" +
    "        <span class=\"btn-group pull-right\">\n" +
    "         <i class='icon-plus' \n" +
    "         title='New workitem' bs-popover=\"'new-workitem'\"></i>\n" +
    "         <i class=\"icon-cog\" bs-dropdown=\"[{text: 'Edit', click:'sprintModal(\\'edit\\',sprint.id)', href:''}, {text: 'Delete', click:'sprintModal(\\'delete\\',sprint.id)'}]\" persist=\"true\"></i>\n" +
    "       </span>  \n" +
    "     </div>\n" +
    "     <div resize ng-style=\"style()\" id='internal-view'>\n" +
    "      <div class='sprint-workitems hover-hand' \n" +
    "      ng-repeat='wk in sprint.workitems' \n" +
    "      data-drag=\"true\" \n" +
    "      ng-show=\"wk.id\" \n" +
    "      ng-model=\"sprint.workitems\" \n" +
    "      ng-animate=\" 'animate' \"\n" +
    "      data-jqyoui-options=\"{index: {{$index}}, revert: 'invalid', appendTo: 'body', helper: 'clone' }\" \n" +
    "      jqyoui-draggable=\"{index: {{$index}}, animate:true, onDrag: 'setWorkitemDrop({{wk.id}})'}\">\n" +
    "\n" +
    "      <span class=\"badge pull-right\" \n" +
    "      ng-class=\"{0:'badge-important', 1: 'badge-success', 2: 'badge-warning'}[wk.importance]\" \n" +
    "      title='Priority'>\n" +
    "      {{wk.importance}}\n" +
    "    </span>\n" +
    "    <button class='btn btn-mini' type=\"button\" data-placement=\"right\" data-title=\"Workitem details\" data-unique=\"1\" bs-popover=\"'workitem-details'\" ng-click=\"fetchDetails(wk.id)\">#{{wk.id}}</button></span>\n" +
    "    <span><b>{{wk.title}}</b></span>\n" +
    "    <p>\n" +
    "      <span class='text-info'>{{getType(wk.type)}}</span>\n" +
    "      <span class='muted capitalize'>{{getState(wk.state)}}</span>\n" +
    "      <small class='pull-right'><i>Last updated: {{wk.last_updated | amTimeAgo}}</i></small>\n" +
    "    </p>\n" +
    "  </div>\n" +
    "</div>\n" +
    "</td>\n" +
    "</tr>\n" +
    "</table>\n" +
    "</div>");
}]);

angular.module("projects", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects",
    "<!-- Landing View -->\n" +
    "<div class='row-fluid'>\n" +
    "    <h1>My projects</h1>\n" +
    "    <div class='project' ng-repeat=\"project in projects\" ng-click='load_project()'>\n" +
    "        <h3>{{project.title}}</h3>\n" +
    "        <p>{{project.description}}</p>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("timeline", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("timeline",
    "<!-- timeline View -->\n" +
    "<div class='row-fluid'>\n" +
    "    <ul class=\"nav nav-pills\">\n" +
    "        <li><a href='#/projects/{{project_id}}/dashboard'>Dashboard</a></li>\n" +
    "        <li><a href='#/projects/{{project_id}}/whiteboard'>Whiteboard</a></li>\n" +
    "        <li class='active'><a href='#/projects/{{project_id}}/timeline'>Timeline</a></li>\n" +
    "        <li><a href='#/projects/{{project_id}}/planning'>Planning</a></li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "<div class=\"row-fluid\" resize ng-style='style()' id='internal-view'>\n" +
    "    <div class='span3'>\n" +
    "        <div ut-filter-pane></div>\n" +
    "    </div>\n" +
    "    <div class=\"span9\">\n" +
    "        <div class='align-right'>\n" +
    "        <label class=\"radio inline\"><b>Sort by</b></label>\n" +
    "        <label class=\"radio inline\">\n" +
    "          <input type=\"radio\" name=\"grouping\" id=\"optionsRadios1\" ng-click=\"sortPredicate = 'user_id'; reverse=false\">\n" +
    "          User\n" +
    "        </label>\n" +
    "        <label class=\"radio inline\">\n" +
    "          <input type=\"radio\" name=\"grouping\" id=\"optionsRadios2\" ng-click=\"sortPredicate = 'workitem_id'; reverse=false\">\n" +
    "          Workitem\n" +
    "        </label>\n" +
    "        <label class=\"radio inline\">\n" +
    "          <input type=\"radio\" name=\"grouping\" id=\"optionsRadios2\" ng-click=\"sortPredicate = 'last_updated'; reverse=true\">\n" +
    "          Time\n" +
    "        </label>\n" +
    "        </div>\n" +
    "        <ul class=\"timeline unstyled\">\n" +
    "        <li ng-repeat='l in logs | orderBy:sortPredicate:reverse' ng-switch='l.log_type' ng-animate=\" 'animate' \">\n" +
    "            <span ng-switch-when=\"workitem_log\">\n" +
    "                <span>\n" +
    "                    <i class=\"icon-edit\"></i> {{getUser(l.user_id)}}\n" +
    "                    <small title='{{l.last_updated | date:\"medium\"}}' class='pull-right'>{{l.last_updated | amTimeAgo}}</small>\n" +
    "                </span>\n" +
    "                <span class=\"muted\">changed </span>{{l.action}} \n" +
    "                <span class=\"muted\">from </span>{{getValue(l.old_value, l.action)}}\n" +
    "                <span class=\"muted\">to </span>{{getValue(l.new_value, l.action)}} \n" +
    "                    for\n" +
    "            </span>\n" +
    "            <span ng-switch-when=\"task_log\">\n" +
    "                <span>\n" +
    "                    <i class=\"icon-ok\"></i> {{getUser(l.user_id)}}\n" +
    "                    <small title='{{l.last_updated | date:\"medium\"}}' class='pull-right'>{{l.last_updated | amTimeAgo}}</small>\n" +
    "                </span>\n" +
    "                <span class=\"muted\">completed task</span> {{l.task}}\n" +
    "            </span>\n" +
    "            <span ng-switch-when=\"comments\">\n" +
    "                <span>\n" +
    "                    <i class=\"icon-comment\"></i> {{getUser(l.user_id)}}\n" +
    "                    <small title='{{l.last_updated | date:\"medium\"}}' class='pull-right'>{{l.last_updated | amTimeAgo}}</small>\n" +
    "                </span>\n" +
    "                <span class=\"muted\">commented</span> {{l.comment_body}}\n" +
    "                <span>\n" +
    "                    on \n" +
    "                </span>\n" +
    "            </span>\n" +
    "            <span> workitem <button class='btn btn-small' type=\"button\" data-placement=\"right\" data-title=\"Workitem details\" data-unique=\"1\" bs-popover=\"'workitem-details'\" ng-click=\"fetchDetails(l.workitem_id)\">#{{l.workitem_id}}</button></span>\n" +
    "        </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("under-construction", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("under-construction",
    " <!-- under-contruction View -->\n" +
    "<div class='row-fluid'>\n" +
    "    <h1>This page is under construction</h1>\n" +
    "</div>");
}]);

angular.module("whiteboard-filter", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("whiteboard-filter",
    "<!-- whiteboard-filter -->\n" +
    "<div class=\"modal-header\">\n" +
    "    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">x</button>\n" +
    "    <h3>Set filters for whiteboard</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  \n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button type=\"button\" class=\"btn\" ng-click=\"hide()\">Close</button>\n" +
    "    <button class=\"btn btn-primary\" ng-click=\"hide();\">Save changes</button>\n" +
    "</div>");
}]);

angular.module("whiteboard", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("whiteboard",
    "<!-- whiteboard View -->\n" +
    "<div class='row-fluid'>\n" +
    "    <ul class=\"nav nav-pills\">\n" +
    "        <li><a href='#/projects/{{project_id}}/dashboard'>Dashboard</a></li>\n" +
    "        <li class='active'><a href='#/projects/{{project_id}}/whiteboard'>Whiteboard</a></li>\n" +
    "        <li><a href='#/projects/{{project_id}}/timeline'>Timeline</a></li>\n" +
    "        <li><a href='#/projects/{{project_id}}/planning'>Planning</a></li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "<div class=\"row-fluid\" >\n" +
    "    <div class=\"span4\" id='side-pane'>\n" +
    "        <legend class='input-prepend no-margin'>\n" +
    "             <span class=\"add-on\">My workitems</span>\n" +
    "             <input type=\"text\" ng-model='query' placeholder='Search...'>\n" +
    "             <span class=\"add-on\">\n" +
    "                <i class=\"icon-search hover-hand\" ng-click='search()'></i>\n" +
    "             </span>\n" +
    "             <span class=\"add-on\" ng-click=\"predicate = 'importance'; reverse=!reverse\">\n" +
    "                <i class=\"hover-hand icon-signal\" title='Sort by priority'></i>\n" +
    "             </span>\n" +
    "        </legend>\n" +
    "        <ul class='unstyled workitems' resize ng-style='style()'>\n" +
    "          <li class='padding'>\n" +
    "            <a class='workitem-anchor workitem' ng-repeat='wk in workitems' ng-class=\"{true : 'selected', false : ''}[wk.id==swkitm.id]\" ng-animate=\"'animate'\" href=\"#projects/{{project_id}}/whiteboard?id={{wk.id}}\">\n" +
    "            <span class=\"badge pull-right\" ng-class=\"{0:'badge-important', 1: 'badge-success', 2: 'badge-warning'}[wk.importance]\" title='Priority'>{{wk.importance}}</span>\n" +
    "            <span><b>{{wk.title}}</b></span>\n" +
    "            <p>\n" +
    "                <span class='text-info '>{{getType(wk.type)}}</span>\n" +
    "                <span class='muted capitalize'>{{getState(wk.state)}}</span>\n" +
    "                <small class='pull-right'><i>Last updated: {{ago(wk.last_updated)}}</i></small>\n" +
    "            </p>\n" +
    "            </a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "        </div>\n" +
    "    <div class=\"span8\" id='details-pane'>\n" +
    "        <legend class='input-prepend'>\n" +
    "            <h4>Details- <small>\n" +
    "                <abbr title='{{getBreakDown()}}'><b>{{workitems.length}}</b></abbr> to go !\n" +
    "            </small>\n" +
    "            <ul class=\"pull-right\">\n" +
    "                <li class=\"btn btn-small no-decoration\"  bs-modal=\"'whiteboard-filter'\">\n" +
    "                    <i class=\"icon-cog\"></i>\n" +
    "                </li>\n" +
    "                <li class=\"btn btn-small no-decoration\" ng-show='swkitm' ng-click='deleteWorkitem()'>Delete</li>\n" +
    "                <li class=\"btn btn-primary btn-small no-decoration\" ng-show='swkitm' ng-click='saveWorkitem()'>Save</li>\n" +
    "            </ul>\n" +
    "            </h4>\n" +
    "        </legend>\n" +
    "        <div class='row-fluid' ng-show='swkitm'>\n" +
    "            <table class='table-condensed span6' resize ng-style='style()'>\n" +
    "                <tr class='hover-hand'>\n" +
    "                    <td><small>ID</small></td>\n" +
    "                    <td><code><span ng-bind=\"swkitm.id\"></span></code></td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>Title</td>\n" +
    "                    <td><input type='text' ng-model='swkitm.title'/></td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>Description</td>\n" +
    "                    <td><textarea type='text' ng-model='swkitm.description'></textarea></td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>Importance</td>\n" +
    "                    <td>\n" +
    "                        <span class='badge hover-hand' ng-class=\"{true:'badge-important', false:''}[0==swkitm.importance]\" ng-click='setImportance(0)'>0</span>\n" +
    "                        <span class='badge hover-hand' ng-class=\"{true:'badge-success', false:''}[1==swkitm.importance]\" ng-click='setImportance(1)'>1</span>\n" +
    "                        <span class='badge hover-hand' ng-class=\"{true:'badge-warning', false:''}[2==swkitm.importance]\" ng-click='setImportance(2)'>2</span>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>Story points</td>\n" +
    "                    <td>\n" +
    "                        <span class='badge hover-hand' ng-class=\"{true:'badge-info', false:''}[0==swkitm.story_points]\" ng-click='setStoryPoints(0)'>!</span>\n" +
    "                        <span class='badge hover-hand' ng-class=\"{true:'badge-info', false:''}[1==swkitm.story_points]\" ng-click='setStoryPoints(1)'>!!</span>\n" +
    "                        <span class='badge hover-hand' ng-class=\"{true:'badge-info', false:''}[2==swkitm.story_points]\" ng-click='setStoryPoints(2)'>!!!</span>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>Type</td>\n" +
    "                    <td>\n" +
    "                        <select class='input-medium'\n" +
    "                           chosen ng-model=\"swkitm.type\"\n" +
    "                           ng-options=\"t.id as t.title for t in types\"\n" +
    "                           ng-change='updateStates()'>\n" +
    "                        </select>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>State</td>\n" +
    "                    <td>\n" +
    "                        <select class='input-medium'\n" +
    "                           chosen ng-model=\"swkitm.state\"\n" +
    "                           ng-options=\"t.id as t.title for t in states\">\n" +
    "                        </select>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>Assigned to</td>\n" +
    "                    <td>\n" +
    "                        <select class='input-medium'\n" +
    "                           chosen ng-model=\"swkitm.assigned_to\"\n" +
    "                           ng-options=\"t.id as t.display_name for t in users\">\n" +
    "                        </select>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>Created by</td>\n" +
    "                    <td>\n" +
    "                        <select class='input-medium'\n" +
    "                           chosen ng-model=\"swkitm.created_by\"\n" +
    "                           ng-options=\"t.id as t.display_name for t in users\">\n" +
    "                        </select>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>Planned for</td>\n" +
    "                    <td><a ng-model='swkitm.planned_for'>{{getSprint(swkitm.planned_for)}}</a></td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>Created</td>\n" +
    "                    <td><span type='text'>{{swkitm.created_date | date: 'medium'}}</span></td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>Last updated</td>\n" +
    "                    <td><span ng-model='swkitm.last_updated'>{{swkitm.last_updated | amTimeAgo}}</span></td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "            <div class=\"span6\" resize ng-style='style()'>\n" +
    "                <h6 class='hover-hand' ng-click='tasksCollapse = !tasksCollapse'>Todos</h6>\n" +
    "                <ul class=\"unstyled\" collapse='tasksCollapse'>\n" +
    "                    <li class='hover-parent' ng-repeat=\"task in tasks\" ng-animate=\"'animate'\">\n" +
    "                        <button class=\"close hover-child\" ng-click='deleteTask()'>x</button>\n" +
    "                        <label class='checkbox' >\n" +
    "                          <input type=\"checkbox\" ng-click='toggleTask()' ng-model=\"task.done\" ng-checked=\"task.done==1\">\n" +
    "                          <span class=\"done-{{task.done}}\" ng-click='toggleTask()'>{{task.task}}</span>\n" +
    "                        </label>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                    <form ng-submit=\"addTask()\">    \n" +
    "                        <input type=\"text\" ng-model=\"newTask\"  size=\"30\"\n" +
    "                               placeholder=\"add some tasks!\">\n" +
    "                        <input class=\"btn input-append btn-mini\" type=\"submit\" value=\"Add\">\n" +
    "                    </form>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "                \n" +
    "                <h6 class='hover-hand' ng-click='activityCollapse = !activityCollapse'>Activity</h6>\n" +
    "                <ul class='unstyled' collapse='activityCollapse'>\n" +
    "                <li>\n" +
    "                <blockquote class=\"comments hover-parent\" ng-repeat='comment in comments' ng-animate=\" 'animate' \">\n" +
    "                    <button class='close pull-right hover-hand hover-child' type='button' ng-show='comment.created_by == currentUser' ng-click='deleteComment($index)'>x</button>\n" +
    "                    <p><pre>{{comment.comment_body}}</pre></p> \n" +
    "                    <small>by {{getUser(comment.user_id)}}, {{ago(comment.created_at)}}</small> \n" +
    "                </blockquote>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                <form ng-submit='addComment()'>\n" +
    "                    <textarea ng-model='newComment'></textarea>\n" +
    "                    <input type='submit' class=\"btn btn-mini\" value='Add'></input>\n" +
    "                </form>\n" +
    "                </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div ng-show='!swkitm'>\n" +
    "            <blockquote class='text-center'>\n" +
    "            <h2><small>Select a workitem from pane</small></h2>\n" +
    "            </blockquote>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("workitem-details", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("workitem-details",
    "<!-- workitem details -->\n" +
    " <a href='#projects/{{project_id}}/whiteboard/?id={{swkitm.id}}' class='icon-share-alt hover-hand pull-right' title='Open in whiteboard'></a>\n" +
    " <table class='table-condensed workitem-details' ng-show='swkitm'>\n" +
    "    <tr class='hover-hand'>\n" +
    "        <td><small>ID</small></td>\n" +
    "        <td><code><span ng-bind=\"swkitm.id\"></span></code></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Title</td>\n" +
    "        <td><span type='text' ng-bind='swkitm.title'></span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Description</td>\n" +
    "        <td><span type='text' ng-bind='swkitm.description'></span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Importance</td>\n" +
    "        <td>\n" +
    "            <span class='badge'>{{swkitm.importance}}</span>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Points</td>\n" +
    "        <td>\n" +
    "            <span class='badge hover-hand'>{{swkitm.story_points}}</span>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Type</td>\n" +
    "        <td>\n" +
    "            {{getType(swkitm.type)}}\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>State</td>\n" +
    "        <td>\n" +
    "           {{getState(swkitm.state)}}\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Assigned</td>\n" +
    "        <td>\n" +
    "           {{getUser(swkitm.assigned_to)}}\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Created</td>\n" +
    "        <td>\n" +
    "           {{getUser(swkitm.created_by)}}\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Sprint</td>\n" +
    "        <td>{{getSprint(swkitm.planned_for)}}</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Created</td>\n" +
    "        <td><span type='text'>{{swkitm.created_date | date:'medium'}}</span></td>\n" +
    "    </tr>\n" +
    "</table>\n" +
    "<table ng-show='!swkitm'>\n" +
    "<tr>\n" +
    "    <td>Just a sec!</td>\n" +
    "    <td><div class='spinner-icon spinner-inverse'></td>\n" +
    "</tr>\n" +
    "</table>");
}]);
