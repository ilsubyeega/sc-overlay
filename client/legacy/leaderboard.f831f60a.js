import{_ as t,a as n,b as r,c as e,i as o,s as a,d as c,e as i,S as s,f,t as u,g as l,h as p,j as v,k as h,m as d,l as y,n as g,o as m,p as b,q as O,r as P,u as j,v as w,w as B,x as R,y as $,z as S,A as C,B as D,C as k,D as x,E as N,F as E,G as I}from"./client.8b456712.js";import{r as J,_ as A}from"./reconnecting-websocket.c4dfa189.js";import"./odometer.7b90e3ba.js";function M(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,a=n(t);if(e){var c=n(this).constructor;o=Reflect.construct(a,arguments,c)}else o=a.apply(this,arguments);return r(this,o)}}function U(t){var n,r,e,o,a,c,i,s,w,B=t[0].Position+"",R=t[0].Username+"",$=t[0].Score+"";return{c:function(){n=f("div"),r=u("#"),e=u(B),o=l(),a=u(R),c=u(" (ACC)\r\n    "),i=f("br"),s=l(),w=u($),this.h()},l:function(t){n=p(t,"DIV",{class:!0});var f=v(n);r=h(f,"#"),e=h(f,B),o=d(f),a=h(f,R),c=h(f," (ACC)\r\n    "),i=p(f,"BR",{}),s=d(f),w=h(f,$),f.forEach(y),this.h()},h:function(){g(n,"class","box svelte-3cocnm")},m:function(t,f){m(t,n,f),b(n,r),b(n,e),b(n,o),b(n,a),b(n,c),b(n,i),b(n,s),b(n,w)},p:function(t,n){var r=O(n,1)[0];1&r&&B!==(B=t[0].Position+"")&&P(e,B),1&r&&R!==(R=t[0].Username+"")&&P(a,R),1&r&&$!==($=t[0].Score+"")&&P(w,$)},i:j,o:j,d:function(t){t&&y(n)}}}function _(t,n,r){var e=n.data,o=void 0===e?[]:e,a=n.you,c=void 0!==a&&a;return t.$$set=function(t){"data"in t&&r(0,o=t.data),"you"in t&&r(1,c=t.you)},[o,c]}var q=function(n){t(f,s);var r=M(f);function f(t){var n;return e(this,f),n=r.call(this),o(c(n),t,_,U,a,{data:0,you:1}),n}return i(f)}();function z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,a=n(t);if(e){var c=n(this).constructor;o=Reflect.construct(a,arguments,c)}else o=a.apply(this,arguments);return r(this,o)}}function F(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function G(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?F(Object(r),!0).forEach((function(n){A(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}function V(t,n,r){var e=t.slice();return e[5]=n[r],e[7]=r,e}function W(t){var n,r;return n=new q({props:{data:t[5]}}),{c:function(){w(n.$$.fragment)},l:function(t){B(n.$$.fragment,t)},m:function(t,e){R(n,t,e),r=!0},p:function(t,r){var e={};1&r&&(e.data=t[5]),n.$set(e)},i:function(t){r||($(n.$$.fragment,t),r=!0)},o:function(t){S(n.$$.fragment,t),r=!1},d:function(t){C(n,t)}}}function H(t){for(var n,r,e=t[0],o=[],a=0;a<e.length;a+=1)o[a]=W(V(t,e,a));var c=function(t){return S(o[t],1,1,(function(){o[t]=null}))};return{c:function(){for(var t=0;t<o.length;t+=1)o[t].c();n=D()},l:function(t){for(var r=0;r<o.length;r+=1)o[r].l(t);n=D()},m:function(t,e){for(var a=0;a<o.length;a+=1)o[a].m(t,e);m(t,n,e),r=!0},p:function(t,r){var a=O(r,1)[0];if(1&a){var i;for(e=t[0],i=0;i<e.length;i+=1){var s=V(t,e,i);o[i]?(o[i].p(s,a),$(o[i],1)):(o[i]=W(s),o[i].c(),$(o[i],1),o[i].m(n.parentNode,n))}for(I(),i=e.length;i<o.length;i+=1)c(i);k()}},i:function(t){if(!r){for(var n=0;n<e.length;n+=1)$(o[n]);r=!0}},o:function(t){o=o.filter(Boolean);for(var n=0;n<o.length;n+=1)S(o[n]);r=!1},d:function(t){x(o,t),t&&y(n)}}}function K(t,n,r){var e,o,a=20727,c=[];return N((function(){var t=window.location.hash.split("#");2==t.length&&"number"==typeof parseInt(t[1])&&(a=parseInt(t[1])),e=new J("ws://localhost:"+a+"/tokens",null,{debug:!0,reconnectInterval:3e3});var n=["leaderBoardPlayers","leaderBoardMainPlayer"];e.onopen=function(t){console.log("Connected to Websocket."),e.send(JSON.stringify(n))},e.onmessage=function(t){o=G(G({},o),JSON.parse(t.data)),r(0,c=JSON.parse(o.leaderBoardPlayers)),JSON.parse(o.leaderBoardMainPlayer)}})),E((function(){void 0!==e&&e.close()})),[c]}var L=function(n){t(f,s);var r=z(f);function f(t){var n;return e(this,f),n=r.call(this),o(c(n),t,K,H,a,{}),n}return i(f)}();export{L as default};
