import{_ as t,a as n,b as e,c as r,i as o,d as c,S as s,s as a,e as i,f as u,g as f,l,h as p,k as h,m as d,I as g,n as b,r as m,D as y,E as O,J as v}from"./client.3675f3bf.js";import{r as j,_ as w}from"./reconnecting-websocket.476f668a.js";function k(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,c=n(t);if(r){var s=n(this).constructor;o=Reflect.construct(c,arguments,s)}else o=c.apply(this,arguments);return e(this,o)}}function P(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function I(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?P(Object(e),!0).forEach((function(n){w(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):P(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function D(t){var n,e,r;return{c:function(){n=i("img"),e=u(),r=i("div"),this.h()},l:function(t){n=f(t,"IMG",{class:!0,style:!0,alt:!0}),e=l(t),r=f(t,"DIV",{class:!0}),p(r).forEach(h),this.h()},h:function(){d(n,"class","dummyimage"),g(n,"width","0"),g(n,"height","0"),g(n,"display","none"),d(n,"alt","Background"),d(r,"class","background svelte-d1g6be")},m:function(o,c){b(o,n,c),t[2](n),b(o,e,c),b(o,r,c),t[3](r)},p:m,i:m,o:m,d:function(o){o&&h(n),t[2](null),o&&h(e),o&&h(r),t[3](null)}}}function R(t,n,e){var r,o,c,s,a,i=20727;return y((function(){var t=window.location.hash.split("#");2==t.length&&"number"==typeof parseInt(t[1])&&(i=parseInt(t[1])),r=new j("ws://localhost:"+i+"/tokens",null,{debug:!0,reconnectInterval:3e3});var n=["md5"];r.onopen=function(t){console.log("Connected to Websocket."),r.send(JSON.stringify(n))},r.onmessage=function(t){null!=(o=I(I({},o),JSON.parse(t.data)))&&c!=o.md5&&null!=s&&(c=o.md5,e(0,s.src="http://localhost:".concat(i,"/backgroundImage?width=1920&height=1080&dummyData=").concat(o.md5,"&crop=1"),s),e(0,s.onload=function(){e(1,a.style.backgroundImage='url("'.concat(s.src,'")'),a)},s))}})),O((function(){void 0!==r&&r.close()})),[s,a,function(t){v[t?"unshift":"push"]((function(){e(0,s=t)}))},function(t){v[t?"unshift":"push"]((function(){e(1,a=t)}))}]}var S=function(n){t(i,s);var e=k(i);function i(t){var n;return r(this,i),n=e.call(this),o(c(n),t,R,D,a,{}),n}return i}();export default S;
