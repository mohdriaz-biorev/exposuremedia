(function(){function a(a){function b(b,c,d,e,f,g){for(;f>=0&&f<g;f+=a){var h=e?e[f]:f;d=c(d,b[h],h,b)}return d}return function(c,d,e,f){d=t(d,f,4);var g=!A(c)&&s.keys(c),h=(g||c).length,i=a>0?0:h-1;return arguments.length<3&&(e=c[g?g[i]:i],i+=a),b(c,d,e,g,i,h)}}function b(a){return function(b,c,d){c=u(c,d);for(var e=z(b),f=a>0?0:e-1;f>=0&&f<e;f+=a)if(c(b[f],f,b))return f;return-1}}function c(a,b,c){return function(d,e,f){var g=0,h=z(d);if("number"==typeof f)a>0?g=f>=0?f:Math.max(f+h,g):h=f>=0?Math.min(f+1,h):f+h+1;else if(c&&f&&h)return f=c(d,e),d[f]===e?f:-1;if(e!==e)return f=b(k.call(d,g,h),s.isNaN),f>=0?f+g:-1;for(f=a>0?g:h-1;f>=0&&f<h;f+=a)if(d[f]===e)return f;return-1}}function d(a,b){var c=F.length,d=a.constructor,e=s.isFunction(d)&&d.prototype||h,f="constructor";for(s.has(a,f)&&!s.contains(b,f)&&b.push(f);c--;)f=F[c],f in a&&a[f]!==e[f]&&!s.contains(b,f)&&b.push(f)}var e=this,f=e._,g=Array.prototype,h=Object.prototype,i=Function.prototype,j=g.push,k=g.slice,l=h.toString,m=h.hasOwnProperty,n=Array.isArray,o=Object.keys,p=i.bind,q=Object.create,r=function(){},s=function(a){return a instanceof s?a:this instanceof s?void(this._wrapped=a):new s(a)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=s),exports._=s):e._=s,s.VERSION="1.8.3";var t=function(a,b,c){if(void 0===b)return a;switch(null==c?3:c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)};case 4:return function(c,d,e,f){return a.call(b,c,d,e,f)}}return function(){return a.apply(b,arguments)}},u=function(a,b,c){return null==a?s.identity:s.isFunction(a)?t(a,b,c):s.isObject(a)?s.matcher(a):s.property(a)};s.iteratee=function(a,b){return u(a,b,1/0)};var v=function(a,b){return function(c){var d=arguments.length;if(d<2||null==c)return c;for(var e=1;e<d;e++)for(var f=arguments[e],g=a(f),h=g.length,i=0;i<h;i++){var j=g[i];b&&void 0!==c[j]||(c[j]=f[j])}return c}},w=function(a){if(!s.isObject(a))return{};if(q)return q(a);r.prototype=a;var b=new r;return r.prototype=null,b},x=function(a){return function(b){return null==b?void 0:b[a]}},y=Math.pow(2,53)-1,z=x("length"),A=function(a){var b=z(a);return"number"==typeof b&&b>=0&&b<=y};s.each=s.forEach=function(a,b,c){b=t(b,c);var d,e;if(A(a))for(d=0,e=a.length;d<e;d++)b(a[d],d,a);else{var f=s.keys(a);for(d=0,e=f.length;d<e;d++)b(a[f[d]],f[d],a)}return a},s.map=s.collect=function(a,b,c){b=u(b,c);for(var d=!A(a)&&s.keys(a),e=(d||a).length,f=Array(e),g=0;g<e;g++){var h=d?d[g]:g;f[g]=b(a[h],h,a)}return f},s.reduce=s.foldl=s.inject=a(1),s.reduceRight=s.foldr=a(-1),s.find=s.detect=function(a,b,c){var d;if(d=A(a)?s.findIndex(a,b,c):s.findKey(a,b,c),void 0!==d&&d!==-1)return a[d]},s.filter=s.select=function(a,b,c){var d=[];return b=u(b,c),s.each(a,function(a,c,e){b(a,c,e)&&d.push(a)}),d},s.reject=function(a,b,c){return s.filter(a,s.negate(u(b)),c)},s.every=s.all=function(a,b,c){b=u(b,c);for(var d=!A(a)&&s.keys(a),e=(d||a).length,f=0;f<e;f++){var g=d?d[f]:f;if(!b(a[g],g,a))return!1}return!0},s.some=s.any=function(a,b,c){b=u(b,c);for(var d=!A(a)&&s.keys(a),e=(d||a).length,f=0;f<e;f++){var g=d?d[f]:f;if(b(a[g],g,a))return!0}return!1},s.contains=s.includes=s.include=function(a,b,c,d){return A(a)||(a=s.values(a)),("number"!=typeof c||d)&&(c=0),s.indexOf(a,b,c)>=0},s.invoke=function(a,b){var c=k.call(arguments,2),d=s.isFunction(b);return s.map(a,function(a){var e=d?b:a[b];return null==e?e:e.apply(a,c)})},s.pluck=function(a,b){return s.map(a,s.property(b))},s.where=function(a,b){return s.filter(a,s.matcher(b))},s.findWhere=function(a,b){return s.find(a,s.matcher(b))},s.max=function(a,b,c){var d,e,f=-(1/0),g=-(1/0);if(null==b&&null!=a){a=A(a)?a:s.values(a);for(var h=0,i=a.length;h<i;h++)d=a[h],d>f&&(f=d)}else b=u(b,c),s.each(a,function(a,c,d){e=b(a,c,d),(e>g||e===-(1/0)&&f===-(1/0))&&(f=a,g=e)});return f},s.min=function(a,b,c){var d,e,f=1/0,g=1/0;if(null==b&&null!=a){a=A(a)?a:s.values(a);for(var h=0,i=a.length;h<i;h++)d=a[h],d<f&&(f=d)}else b=u(b,c),s.each(a,function(a,c,d){e=b(a,c,d),(e<g||e===1/0&&f===1/0)&&(f=a,g=e)});return f},s.shuffle=function(a){for(var b,c=A(a)?a:s.values(a),d=c.length,e=Array(d),f=0;f<d;f++)b=s.random(0,f),b!==f&&(e[f]=e[b]),e[b]=c[f];return e},s.sample=function(a,b,c){return null==b||c?(A(a)||(a=s.values(a)),a[s.random(a.length-1)]):s.shuffle(a).slice(0,Math.max(0,b))},s.sortBy=function(a,b,c){return b=u(b,c),s.pluck(s.map(a,function(a,c,d){return{value:a,index:c,criteria:b(a,c,d)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;if(c!==d){if(c>d||void 0===c)return 1;if(c<d||void 0===d)return-1}return a.index-b.index}),"value")};var B=function(a){return function(b,c,d){var e={};return c=u(c,d),s.each(b,function(d,f){var g=c(d,f,b);a(e,d,g)}),e}};s.groupBy=B(function(a,b,c){s.has(a,c)?a[c].push(b):a[c]=[b]}),s.indexBy=B(function(a,b,c){a[c]=b}),s.countBy=B(function(a,b,c){s.has(a,c)?a[c]++:a[c]=1}),s.toArray=function(a){return a?s.isArray(a)?k.call(a):A(a)?s.map(a,s.identity):s.values(a):[]},s.size=function(a){return null==a?0:A(a)?a.length:s.keys(a).length},s.partition=function(a,b,c){b=u(b,c);var d=[],e=[];return s.each(a,function(a,c,f){(b(a,c,f)?d:e).push(a)}),[d,e]},s.first=s.head=s.take=function(a,b,c){if(null!=a)return null==b||c?a[0]:s.initial(a,a.length-b)},s.initial=function(a,b,c){return k.call(a,0,Math.max(0,a.length-(null==b||c?1:b)))},s.last=function(a,b,c){if(null!=a)return null==b||c?a[a.length-1]:s.rest(a,Math.max(0,a.length-b))},s.rest=s.tail=s.drop=function(a,b,c){return k.call(a,null==b||c?1:b)},s.compact=function(a){return s.filter(a,s.identity)};var C=function(a,b,c,d){for(var e=[],f=0,g=d||0,h=z(a);g<h;g++){var i=a[g];if(A(i)&&(s.isArray(i)||s.isArguments(i))){b||(i=C(i,b,c));var j=0,k=i.length;for(e.length+=k;j<k;)e[f++]=i[j++]}else c||(e[f++]=i)}return e};s.flatten=function(a,b){return C(a,b,!1)},s.without=function(a){return s.difference(a,k.call(arguments,1))},s.uniq=s.unique=function(a,b,c,d){s.isBoolean(b)||(d=c,c=b,b=!1),null!=c&&(c=u(c,d));for(var e=[],f=[],g=0,h=z(a);g<h;g++){var i=a[g],j=c?c(i,g,a):i;b?(g&&f===j||e.push(i),f=j):c?s.contains(f,j)||(f.push(j),e.push(i)):s.contains(e,i)||e.push(i)}return e},s.union=function(){return s.uniq(C(arguments,!0,!0))},s.intersection=function(a){for(var b=[],c=arguments.length,d=0,e=z(a);d<e;d++){var f=a[d];if(!s.contains(b,f)){for(var g=1;g<c&&s.contains(arguments[g],f);g++);g===c&&b.push(f)}}return b},s.difference=function(a){var b=C(arguments,!0,!0,1);return s.filter(a,function(a){return!s.contains(b,a)})},s.zip=function(){return s.unzip(arguments)},s.unzip=function(a){for(var b=a&&s.max(a,z).length||0,c=Array(b),d=0;d<b;d++)c[d]=s.pluck(a,d);return c},s.object=function(a,b){for(var c={},d=0,e=z(a);d<e;d++)b?c[a[d]]=b[d]:c[a[d][0]]=a[d][1];return c},s.findIndex=b(1),s.findLastIndex=b(-1),s.sortedIndex=function(a,b,c,d){c=u(c,d,1);for(var e=c(b),f=0,g=z(a);f<g;){var h=Math.floor((f+g)/2);c(a[h])<e?f=h+1:g=h}return f},s.indexOf=c(1,s.findIndex,s.sortedIndex),s.lastIndexOf=c(-1,s.findLastIndex),s.range=function(a,b,c){null==b&&(b=a||0,a=0),c=c||1;for(var d=Math.max(Math.ceil((b-a)/c),0),e=Array(d),f=0;f<d;f++,a+=c)e[f]=a;return e};var D=function(a,b,c,d,e){if(!(d instanceof b))return a.apply(c,e);var f=w(a.prototype),g=a.apply(f,e);return s.isObject(g)?g:f};s.bind=function(a,b){if(p&&a.bind===p)return p.apply(a,k.call(arguments,1));if(!s.isFunction(a))throw new TypeError("Bind must be called on a function");var c=k.call(arguments,2),d=function(){return D(a,d,b,this,c.concat(k.call(arguments)))};return d},s.partial=function(a){var b=k.call(arguments,1),c=function(){for(var d=0,e=b.length,f=Array(e),g=0;g<e;g++)f[g]=b[g]===s?arguments[d++]:b[g];for(;d<arguments.length;)f.push(arguments[d++]);return D(a,c,this,this,f)};return c},s.bindAll=function(a){var b,c,d=arguments.length;if(d<=1)throw new Error("bindAll must be passed function names");for(b=1;b<d;b++)c=arguments[b],a[c]=s.bind(a[c],a);return a},s.memoize=function(a,b){var c=function(d){var e=c.cache,f=""+(b?b.apply(this,arguments):d);return s.has(e,f)||(e[f]=a.apply(this,arguments)),e[f]};return c.cache={},c},s.delay=function(a,b){var c=k.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)},s.defer=s.partial(s.delay,s,1),s.throttle=function(a,b,c){var d,e,f,g=null,h=0;c||(c={});var i=function(){h=c.leading===!1?0:s.now(),g=null,f=a.apply(d,e),g||(d=e=null)};return function(){var j=s.now();h||c.leading!==!1||(h=j);var k=b-(j-h);return d=this,e=arguments,k<=0||k>b?(g&&(clearTimeout(g),g=null),h=j,f=a.apply(d,e),g||(d=e=null)):g||c.trailing===!1||(g=setTimeout(i,k)),f}},s.debounce=function(a,b,c){var d,e,f,g,h,i=function(){var j=s.now()-g;j<b&&j>=0?d=setTimeout(i,b-j):(d=null,c||(h=a.apply(f,e),d||(f=e=null)))};return function(){f=this,e=arguments,g=s.now();var j=c&&!d;return d||(d=setTimeout(i,b)),j&&(h=a.apply(f,e),f=e=null),h}},s.wrap=function(a,b){return s.partial(b,a)},s.negate=function(a){return function(){return!a.apply(this,arguments)}},s.compose=function(){var a=arguments,b=a.length-1;return function(){for(var c=b,d=a[b].apply(this,arguments);c--;)d=a[c].call(this,d);return d}},s.after=function(a,b){return function(){if(--a<1)return b.apply(this,arguments)}},s.before=function(a,b){var c;return function(){return--a>0&&(c=b.apply(this,arguments)),a<=1&&(b=null),c}},s.once=s.partial(s.before,2);var E=!{toString:null}.propertyIsEnumerable("toString"),F=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];s.keys=function(a){if(!s.isObject(a))return[];if(o)return o(a);var b=[];for(var c in a)s.has(a,c)&&b.push(c);return E&&d(a,b),b},s.allKeys=function(a){if(!s.isObject(a))return[];var b=[];for(var c in a)b.push(c);return E&&d(a,b),b},s.values=function(a){for(var b=s.keys(a),c=b.length,d=Array(c),e=0;e<c;e++)d[e]=a[b[e]];return d},s.mapObject=function(a,b,c){b=u(b,c);for(var d,e=s.keys(a),f=e.length,g={},h=0;h<f;h++)d=e[h],g[d]=b(a[d],d,a);return g},s.pairs=function(a){for(var b=s.keys(a),c=b.length,d=Array(c),e=0;e<c;e++)d[e]=[b[e],a[b[e]]];return d},s.invert=function(a){for(var b={},c=s.keys(a),d=0,e=c.length;d<e;d++)b[a[c[d]]]=c[d];return b},s.functions=s.methods=function(a){var b=[];for(var c in a)s.isFunction(a[c])&&b.push(c);return b.sort()},s.extend=v(s.allKeys),s.extendOwn=s.assign=v(s.keys),s.findKey=function(a,b,c){b=u(b,c);for(var d,e=s.keys(a),f=0,g=e.length;f<g;f++)if(d=e[f],b(a[d],d,a))return d},s.pick=function(a,b,c){var d,e,f={},g=a;if(null==g)return f;s.isFunction(b)?(e=s.allKeys(g),d=t(b,c)):(e=C(arguments,!1,!1,1),d=function(a,b,c){return b in c},g=Object(g));for(var h=0,i=e.length;h<i;h++){var j=e[h],k=g[j];d(k,j,g)&&(f[j]=k)}return f},s.omit=function(a,b,c){if(s.isFunction(b))b=s.negate(b);else{var d=s.map(C(arguments,!1,!1,1),String);b=function(a,b){return!s.contains(d,b)}}return s.pick(a,b,c)},s.defaults=v(s.allKeys,!0),s.create=function(a,b){var c=w(a);return b&&s.extendOwn(c,b),c},s.clone=function(a){return s.isObject(a)?s.isArray(a)?a.slice():s.extend({},a):a},s.tap=function(a,b){return b(a),a},s.isMatch=function(a,b){var c=s.keys(b),d=c.length;if(null==a)return!d;for(var e=Object(a),f=0;f<d;f++){var g=c[f];if(b[g]!==e[g]||!(g in e))return!1}return!0};var G=function(a,b,c,d){if(a===b)return 0!==a||1/a===1/b;if(null==a||null==b)return a===b;a instanceof s&&(a=a._wrapped),b instanceof s&&(b=b._wrapped);var e=l.call(a);if(e!==l.call(b))return!1;switch(e){case"[object RegExp]":case"[object String]":return""+a==""+b;case"[object Number]":return+a!==+a?+b!==+b:0===+a?1/+a===1/b:+a===+b;case"[object Date]":case"[object Boolean]":return+a===+b}var f="[object Array]"===e;if(!f){if("object"!=typeof a||"object"!=typeof b)return!1;var g=a.constructor,h=b.constructor;if(g!==h&&!(s.isFunction(g)&&g instanceof g&&s.isFunction(h)&&h instanceof h)&&"constructor"in a&&"constructor"in b)return!1}c=c||[],d=d||[];for(var i=c.length;i--;)if(c[i]===a)return d[i]===b;if(c.push(a),d.push(b),f){if(i=a.length,i!==b.length)return!1;for(;i--;)if(!G(a[i],b[i],c,d))return!1}else{var j,k=s.keys(a);if(i=k.length,s.keys(b).length!==i)return!1;for(;i--;)if(j=k[i],!s.has(b,j)||!G(a[j],b[j],c,d))return!1}return c.pop(),d.pop(),!0};s.isEqual=function(a,b){return G(a,b)},s.isEmpty=function(a){return null==a||(A(a)&&(s.isArray(a)||s.isString(a)||s.isArguments(a))?0===a.length:0===s.keys(a).length)},s.isElement=function(a){return!(!a||1!==a.nodeType)},s.isArray=n||function(a){return"[object Array]"===l.call(a)},s.isObject=function(a){var b=typeof a;return"function"===b||"object"===b&&!!a},s.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(a){s["is"+a]=function(b){return l.call(b)==="[object "+a+"]"}}),s.isArguments(arguments)||(s.isArguments=function(a){return s.has(a,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(s.isFunction=function(a){return"function"==typeof a||!1}),s.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))},s.isNaN=function(a){return s.isNumber(a)&&a!==+a},s.isBoolean=function(a){return a===!0||a===!1||"[object Boolean]"===l.call(a)},s.isNull=function(a){return null===a},s.isUndefined=function(a){return void 0===a},s.has=function(a,b){return null!=a&&m.call(a,b)},s.noConflict=function(){return e._=f,this},s.identity=function(a){return a},s.constant=function(a){return function(){return a}},s.noop=function(){},s.property=x,s.propertyOf=function(a){return null==a?function(){}:function(b){return a[b]}},s.matcher=s.matches=function(a){return a=s.extendOwn({},a),function(b){return s.isMatch(b,a)}},s.times=function(a,b,c){var d=Array(Math.max(0,a));b=t(b,c,1);for(var e=0;e<a;e++)d[e]=b(e);return d},s.random=function(a,b){return null==b&&(b=a,a=0),a+Math.floor(Math.random()*(b-a+1))},s.now=Date.now||function(){return(new Date).getTime()};var H={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},I=s.invert(H),J=function(a){var b=function(b){return a[b]},c="(?:"+s.keys(a).join("|")+")",d=RegExp(c),e=RegExp(c,"g");return function(a){return a=null==a?"":""+a,d.test(a)?a.replace(e,b):a}};s.escape=J(H),s.unescape=J(I),s.result=function(a,b,c){var d=null==a?void 0:a[b];return void 0===d&&(d=c),s.isFunction(d)?d.call(a):d};var K=0;s.uniqueId=function(a){var b=++K+"";return a?a+b:b},s.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var L=/(.)^/,M={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},N=/\\|'|\r|\n|\u2028|\u2029/g,O=function(a){return"\\"+M[a]};s.template=function(a,b,c){!b&&c&&(b=c),b=s.defaults({},b,s.templateSettings);var d=RegExp([(b.escape||L).source,(b.interpolate||L).source,(b.evaluate||L).source].join("|")+"|$","g"),e=0,f="__p+='";a.replace(d,function(b,c,d,g,h){return f+=a.slice(e,h).replace(N,O),e=h+b.length,c?f+="'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'":d?f+="'+\n((__t=("+d+"))==null?'':__t)+\n'":g&&(f+="';\n"+g+"\n__p+='"),b}),f+="';\n",b.variable||(f="with(obj||{}){\n"+f+"}\n"),f="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+f+"return __p;\n";try{var g=new Function(b.variable||"obj","_",f)}catch(h){throw h.source=f,h}var i=function(a){return g.call(this,a,s)},j=b.variable||"obj";return i.source="function("+j+"){\n"+f+"}",i},s.chain=function(a){var b=s(a);return b._chain=!0,b};var P=function(a,b){return a._chain?s(b).chain():b};s.mixin=function(a){s.each(s.functions(a),function(b){var c=s[b]=a[b];s.prototype[b]=function(){var a=[this._wrapped];return j.apply(a,arguments),P(this,c.apply(s,a))}})},s.mixin(s),s.each(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=g[a];s.prototype[a]=function(){var c=this._wrapped;return b.apply(c,arguments),"shift"!==a&&"splice"!==a||0!==c.length||delete c[0],P(this,c)}}),s.each(["concat","join","slice"],function(a){var b=g[a];s.prototype[a]=function(){return P(this,b.apply(this._wrapped,arguments))}}),s.prototype.value=function(){return this._wrapped},s.prototype.valueOf=s.prototype.toJSON=s.prototype.value,s.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return s})}).call(this);;/*!
* jQuery UI Core 1.11.4
* http://jqueryui.com
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license.
* http://jquery.org/license
*
* http://api.jqueryui.com/category/ui-core/
*/!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(b,d){var e,f,g,h=b.nodeName.toLowerCase();return"area"===h?(e=b.parentNode,f=e.name,!(!b.href||!f||"map"!==e.nodeName.toLowerCase())&&(g=a("img[usemap='#"+f+"']")[0],!!g&&c(g))):(/^(input|select|textarea|button|object)$/.test(h)?!b.disabled:"a"===h?b.href||d:d)&&c(b)}function c(b){return a.expr.filters.visible(b)&&!a(b).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}a.ui=a.ui||{},a.extend(a.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({scrollParent:function(b){var c=this.css("position"),d="absolute"===c,e=b?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var b=a(this);return(!d||"static"!==b.css("position"))&&e.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==c&&f.length?f:a(this[0].ownerDocument||document)},uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(c){return b(c,!isNaN(a.attr(c,"tabindex")))},tabbable:function(c){var d=a.attr(c,"tabindex"),e=isNaN(d);return(e||d>=0)&&b(c,!e)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(b,c){function d(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(b){return void 0===b?g["inner"+c].call(this):this.each(function(){a(this).css(f,d(this,b)+"px")})},a.fn["outer"+c]=function(b,e){return"number"!=typeof b?g["outer"+c].call(this,b):this.each(function(){a(this).css(f,d(this,b,!0,e)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=function(b){return function(c){return arguments.length?b.call(this,a.camelCase(c)):b.call(this)}}(a.fn.removeData)),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.fn.extend({focus:function(b){return function(c,d){return"number"==typeof c?this.each(function(){var b=this;setTimeout(function(){a(b).focus(),d&&d.call(b)},c)}):b.apply(this,arguments)}}(a.fn.focus),disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(b){if(void 0!==b)return this.css("zIndex",b);if(this.length)for(var c,d,e=a(this[0]);e.length&&e[0]!==document;){if(c=e.css("position"),("absolute"===c||"relative"===c||"fixed"===c)&&(d=parseInt(e.css("zIndex"),10),!isNaN(d)&&0!==d))return d;e=e.parent()}return 0}}),a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}}});;/*!
* jQuery UI Widget 1.11.4
* http://jqueryui.com
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license.
* http://jquery.org/license
*
* http://api.jqueryui.com/jQuery.widget/
*/!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){var b=0,c=Array.prototype.slice;return a.cleanData=function(b){return function(c){var d,e,f;for(f=0;null!=(e=c[f]);f++)try{d=a._data(e,"events"),d&&d.remove&&a(e).triggerHandler("remove")}catch(g){}b(c)}}(a.cleanData),a.widget=function(b,c,d){var e,f,g,h,i={},j=b.split(".")[0];return b=b.split(".")[1],e=j+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][e.toLowerCase()]=function(b){return!!a.data(b,e)},a[j]=a[j]||{},f=a[j][b],g=a[j][b]=function(a,b){return this._createWidget?void(arguments.length&&this._createWidget(a,b)):new g(a,b)},a.extend(g,f,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),h=new c,h.options=a.widget.extend({},h.options),a.each(d,function(b,d){return a.isFunction(d)?void(i[b]=function(){var a=function(){return c.prototype[b].apply(this,arguments)},e=function(a){return c.prototype[b].apply(this,a)};return function(){var b,c=this._super,f=this._superApply;return this._super=a,this._superApply=e,b=d.apply(this,arguments),this._super=c,this._superApply=f,b}}()):void(i[b]=d)}),g.prototype=a.widget.extend(h,{widgetEventPrefix:f?h.widgetEventPrefix||b:b},i,{constructor:g,namespace:j,widgetName:b,widgetFullName:e}),f?(a.each(f._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,g,c._proto)}),delete f._childConstructors):c._childConstructors.push(g),a.widget.bridge(b,g),g},a.widget.extend=function(b){for(var d,e,f=c.call(arguments,1),g=0,h=f.length;g<h;g++)for(d in f[g])e=f[g][d],f[g].hasOwnProperty(d)&&void 0!==e&&(a.isPlainObject(e)?b[d]=a.isPlainObject(b[d])?a.widget.extend({},b[d],e):a.widget.extend({},e):b[d]=e);return b},a.widget.bridge=function(b,d){var e=d.prototype.widgetFullName||b;a.fn[b]=function(f){var g="string"==typeof f,h=c.call(arguments,1),i=this;return g?this.each(function(){var c,d=a.data(this,e);return"instance"===f?(i=d,!1):d?a.isFunction(d[f])&&"_"!==f.charAt(0)?(c=d[f].apply(d,h),c!==d&&void 0!==c?(i=c&&c.jquery?i.pushStack(c.get()):c,!1):void 0):a.error("no such method '"+f+"' for "+b+" widget instance"):a.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+f+"'")}):(h.length&&(f=a.widget.extend.apply(null,[f].concat(h))),this.each(function(){var b=a.data(this,e);b?(b.option(f||{}),b._init&&b._init()):a.data(this,e,new d(f,this))})),i}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(c,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=b++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=a(),this.hoverable=a(),this.focusable=a(),d!==this&&(a.data(d,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===d&&this.destroy()}}),this.document=a(d.style?d.ownerDocument:d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this.options=a.widget.extend({},this.options,this._getCreateOptions(),c),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:a.noop,_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:a.noop,widget:function(){return this.element},option:function(b,c){var d,e,f,g=b;if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof b)if(g={},d=b.split("."),b=d.shift(),d.length){for(e=g[b]=a.widget.extend({},this.options[b]),f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];if(b=d.pop(),1===arguments.length)return void 0===e[b]?null:e[b];e[b]=c}else{if(1===arguments.length)return void 0===this.options[b]?null:this.options[b];g[b]=c}return this._setOptions(g),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return this.options[a]=b,"disabled"===a&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!b),b&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(b,c,d){var e,f=this;"boolean"!=typeof b&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){if(b||f.options.disabled!==!0&&!a(this).hasClass("ui-state-disabled"))return("string"==typeof g?f[g]:g).apply(f,arguments)}"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^([\w:-]*)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.delegate(k,j,h):c.bind(j,h)})},_off:function(b,c){c=(c||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,b.unbind(c).undelegate(c),this.bindings=a(this.bindings.not(b).get()),this.focusable=a(this.focusable.not(b).get()),this.hoverable=a(this.hoverable.not(b).get())},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){a(b.currentTarget).addClass("ui-state-hover")},mouseleave:function(b){a(b.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){a(b.currentTarget).addClass("ui-state-focus")},focusout:function(b){a(b.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?e===!0||"number"==typeof e?c:e.effect||c:b;e=e||{},"number"==typeof e&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}}),a.widget});;/*!
* jQuery UI Tabs 1.11.4
* http://jqueryui.com
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license.
* http://jquery.org/license
*
* http://api.jqueryui.com/tabs/
*/!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./widget"],a):a(jQuery)}(function(a){return a.widget("ui.tabs",{version:"1.11.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var a=/#.*$/;return function(b){var c,d;b=b.cloneNode(!1),c=b.href.replace(a,""),d=location.href.replace(a,"");try{c=decodeURIComponent(c)}catch(e){}try{d=decodeURIComponent(d)}catch(e){}return b.hash.length>1&&c===d}}(),_create:function(){var b=this,c=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",c.collapsible),this._processTabs(),c.active=this._initialActive(),a.isArray(c.disabled)&&(c.disabled=a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"),function(a){return b.tabs.index(a)}))).sort()),this.options.active!==!1&&this.anchors.length?this.active=this._findActive(c.active):this.active=a(),this._refresh(),this.active.length&&this.load(c.active)},_initialActive:function(){var b=this.options.active,c=this.options.collapsible,d=location.hash.substring(1);return null===b&&(d&&this.tabs.each(function(c,e){if(a(e).attr("aria-controls")===d)return b=c,!1}),null===b&&(b=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),null!==b&&b!==-1||(b=!!this.tabs.length&&0)),b!==!1&&(b=this.tabs.index(this.tabs.eq(b)),b===-1&&(b=!c&&0)),!c&&b===!1&&this.anchors.length&&(b=0),b},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):a()}},_tabKeydown:function(b){var c=a(this.document[0].activeElement).closest("li"),d=this.tabs.index(c),e=!0;if(!this._handlePageNav(b)){switch(b.keyCode){case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:d++;break;case a.ui.keyCode.UP:case a.ui.keyCode.LEFT:e=!1,d--;break;case a.ui.keyCode.END:d=this.anchors.length-1;break;case a.ui.keyCode.HOME:d=0;break;case a.ui.keyCode.SPACE:return b.preventDefault(),clearTimeout(this.activating),void this._activate(d);case a.ui.keyCode.ENTER:return b.preventDefault(),clearTimeout(this.activating),void this._activate(d!==this.options.active&&d);default:return}b.preventDefault(),clearTimeout(this.activating),d=this._focusNextTab(d,e),b.ctrlKey||b.metaKey||(c.attr("aria-selected","false"),this.tabs.eq(d).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",d)},this.delay))}},_panelKeydown:function(b){this._handlePageNav(b)||b.ctrlKey&&b.keyCode===a.ui.keyCode.UP&&(b.preventDefault(),this.active.focus())},_handlePageNav:function(b){return b.altKey&&b.keyCode===a.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):b.altKey&&b.keyCode===a.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(b,c){function d(){return b>e&&(b=0),b<0&&(b=e),b}for(var e=this.tabs.length-1;a.inArray(d(),this.options.disabled)!==-1;)b=c?b+1:b-1;return b},_focusNextTab:function(a,b){return a=this._findNextTab(a,b),this.tabs.eq(a).focus(),a},_setOption:function(a,b){return"active"===a?void this._activate(b):"disabled"===a?void this._setupDisabled(b):(this._super(a,b),"collapsible"===a&&(this.element.toggleClass("ui-tabs-collapsible",b),b||this.options.active!==!1||this._activate(0)),"event"===a&&this._setupEvents(b),void("heightStyle"===a&&this._setupHeightStyle(b)))},_sanitizeSelector:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var b=this.options,c=this.tablist.children(":has(a[href])");b.disabled=a.map(c.filter(".ui-state-disabled"),function(a){return c.index(a)}),this._processTabs(),b.active!==!1&&this.anchors.length?this.active.length&&!a.contains(this.tablist[0],this.active[0])?this.tabs.length===b.disabled.length?(b.active=!1,this.active=a()):this._activate(this._findNextTab(Math.max(0,b.active-1),!1)):b.active=this.tabs.index(this.active):(b.active=!1,this.active=a()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var b=this,c=this.tabs,d=this.anchors,e=this.panels;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(b){a(this).is(".ui-state-disabled")&&b.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){a(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return a("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=a(),this.anchors.each(function(c,d){var e,f,g,h=a(d).uniqueId().attr("id"),i=a(d).closest("li"),j=i.attr("aria-controls");b._isLocal(d)?(e=d.hash,g=e.substring(1),f=b.element.find(b._sanitizeSelector(e))):(g=i.attr("aria-controls")||a({}).uniqueId()[0].id,e="#"+g,f=b.element.find(e),f.length||(f=b._createPanel(g),f.insertAfter(b.panels[c-1]||b.tablist)),f.attr("aria-live","polite")),f.length&&(b.panels=b.panels.add(f)),j&&i.data("ui-tabs-aria-controls",j),i.attr({"aria-controls":g,"aria-labelledby":h}),f.attr("aria-labelledby",h)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel"),c&&(this._off(c.not(this.tabs)),this._off(d.not(this.anchors)),this._off(e.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(b){return a("<div>").attr("id",b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(b){a.isArray(b)&&(b.length?b.length===this.anchors.length&&(b=!0):b=!1);for(var c,d=0;c=this.tabs[d];d++)b===!0||a.inArray(d,b)!==-1?a(c).addClass("ui-state-disabled").attr("aria-disabled","true"):a(c).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=b},_setupEvents:function(b){var c={};b&&a.each(b.split(" "),function(a,b){c[b]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(a){a.preventDefault()}}),this._on(this.anchors,c),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(b){var c,d=this.element.parent();"fill"===b?(c=d.height(),c-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var b=a(this),d=b.css("position");"absolute"!==d&&"fixed"!==d&&(c-=b.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){c-=a(this).outerHeight(!0)}),this.panels.each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")):"auto"===b&&(c=0,this.panels.each(function(){c=Math.max(c,a(this).height("").height())}).height(c))},_eventHandler:function(b){var c=this.options,d=this.active,e=a(b.currentTarget),f=e.closest("li"),g=f[0]===d[0],h=g&&c.collapsible,i=h?a():this._getPanelForTab(f),j=d.length?this._getPanelForTab(d):a(),k={oldTab:d,oldPanel:j,newTab:h?a():f,newPanel:i};b.preventDefault(),f.hasClass("ui-state-disabled")||f.hasClass("ui-tabs-loading")||this.running||g&&!c.collapsible||this._trigger("beforeActivate",b,k)===!1||(c.active=!h&&this.tabs.index(f),this.active=g?a():f,this.xhr&&this.xhr.abort(),j.length||i.length||a.error("jQuery UI Tabs: Mismatching fragment identifier."),i.length&&this.load(this.tabs.index(f),b),this._toggle(b,k))},_toggle:function(b,c){function d(){f.running=!1,f._trigger("activate",b,c)}function e(){c.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),g.length&&f.options.show?f._show(g,f.options.show,d):(g.show(),d())}var f=this,g=c.newPanel,h=c.oldPanel;this.running=!0,h.length&&this.options.hide?this._hide(h,this.options.hide,function(){c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),e()}):(c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),h.hide(),e()),h.attr("aria-hidden","true"),c.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),g.length&&h.length?c.oldTab.attr("tabIndex",-1):g.length&&this.tabs.filter(function(){return 0===a(this).attr("tabIndex")}).attr("tabIndex",-1),g.attr("aria-hidden","false"),c.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(b){var c,d=this._findActive(b);d[0]!==this.active[0]&&(d.length||(d=this.active),c=d.find(".ui-tabs-anchor")[0],this._eventHandler({target:c,currentTarget:c,preventDefault:a.noop}))},_findActive:function(b){return b===!1?a():this.tabs.eq(b)},_getIndex:function(a){return"string"==typeof a&&(a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))),a},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each(function(){a.data(this,"ui-tabs-destroy")?a(this).remove():a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var b=a(this),c=b.data("ui-tabs-aria-controls");c?b.attr("aria-controls",c).removeData("ui-tabs-aria-controls"):b.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(b){var c=this.options.disabled;c!==!1&&(void 0===b?c=!1:(b=this._getIndex(b),c=a.isArray(c)?a.map(c,function(a){return a!==b?a:null}):a.map(this.tabs,function(a,c){return c!==b?c:null})),this._setupDisabled(c))},disable:function(b){var c=this.options.disabled;if(c!==!0){if(void 0===b)c=!0;else{if(b=this._getIndex(b),a.inArray(b,c)!==-1)return;c=a.isArray(c)?a.merge([b],c).sort():[b]}this._setupDisabled(c)}},load:function(b,c){b=this._getIndex(b);var d=this,e=this.tabs.eq(b),f=e.find(".ui-tabs-anchor"),g=this._getPanelForTab(e),h={tab:e,panel:g},i=function(a,b){"abort"===b&&d.panels.stop(!1,!0),e.removeClass("ui-tabs-loading"),g.removeAttr("aria-busy"),a===d.xhr&&delete d.xhr};this._isLocal(f[0])||(this.xhr=a.ajax(this._ajaxSettings(f,c,h)),this.xhr&&"canceled"!==this.xhr.statusText&&(e.addClass("ui-tabs-loading"),g.attr("aria-busy","true"),this.xhr.done(function(a,b,e){setTimeout(function(){g.html(a),d._trigger("load",c,h),i(e,b)},1)}).fail(function(a,b){setTimeout(function(){i(a,b)},1)})))},_ajaxSettings:function(b,c,d){var e=this;return{url:b.attr("href"),beforeSend:function(b,f){return e._trigger("beforeLoad",c,a.extend({jqXHR:b,ajaxSettings:f},d))}}},_getPanelForTab:function(b){var c=a(b).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+c))}})});