import{S as e,i as t,s as a,e as s,t as n,a as o,c as r,b as l,d as c,g as i,f as d,h as f,j as u,k as h,l as p,n as m,m as g,o as b,p as y,q as $,r as v,u as w,v as S,w as B,x as P,y as x,z as C,A as N}from"./client.e59787d2.js";import"./odometer.7b90e3ba.js";import{r as j}from"./reconnecting-websocket.eb9bdc76.js";function k(e){let t,a,g,b,y,$,v,w,S,B=e[0].Position+"",P=e[0].Username+"",x=e[0].Score+"";return{c(){t=s("div"),a=n("#"),g=n(B),b=o(),y=n(P),$=n(" (ACC)\r\n    "),v=s("br"),w=o(),S=n(x),this.h()},l(e){t=r(e,"DIV",{class:!0});var s=l(t);a=c(s,"#"),g=c(s,B),b=i(s),y=c(s,P),$=c(s," (ACC)\r\n    "),v=r(s,"BR",{}),w=i(s),S=c(s,x),s.forEach(d),this.h()},h(){f(t,"class","box svelte-3cocnm")},m(e,s){u(e,t,s),h(t,a),h(t,g),h(t,b),h(t,y),h(t,$),h(t,v),h(t,w),h(t,S)},p(e,[t]){1&t&&B!==(B=e[0].Position+"")&&p(g,B),1&t&&P!==(P=e[0].Username+"")&&p(y,P),1&t&&x!==(x=e[0].Score+"")&&p(S,x)},i:m,o:m,d(e){e&&d(t)}}}function I(e,t,a){let{data:s=[]}=t,{you:n=!1}=t;return e.$$set=e=>{"data"in e&&a(0,s=e.data),"you"in e&&a(1,n=e.you)},[s,n]}class J extends e{constructor(e){super(),t(this,e,I,k,a,{data:0,you:1})}}function O(e,t,a){const s=e.slice();return s[5]=t[a],s[7]=a,s}function A(e){let t,a;return t=new J({props:{data:e[5]}}),{c(){g(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,s){y(t,e,s),a=!0},p(e,a){const s={};1&a&&(s.data=e[5]),t.$set(s)},i(e){a||($(t.$$.fragment,e),a=!0)},o(e){v(t.$$.fragment,e),a=!1},d(e){w(t,e)}}}function M(e){let t,a,s=e[0],n=[];for(let t=0;t<s.length;t+=1)n[t]=A(O(e,s,t));const o=e=>v(n[e],1,1,(()=>{n[e]=null}));return{c(){for(let e=0;e<n.length;e+=1)n[e].c();t=S()},l(e){for(let t=0;t<n.length;t+=1)n[t].l(e);t=S()},m(e,s){for(let t=0;t<n.length;t+=1)n[t].m(e,s);u(e,t,s),a=!0},p(e,[a]){if(1&a){let r;for(s=e[0],r=0;r<s.length;r+=1){const o=O(e,s,r);n[r]?(n[r].p(o,a),$(n[r],1)):(n[r]=A(o),n[r].c(),$(n[r],1),n[r].m(t.parentNode,t))}for(N(),r=s.length;r<n.length;r+=1)o(r);B()}},i(e){if(!a){for(let e=0;e<s.length;e+=1)$(n[e]);a=!0}},o(e){n=n.filter(Boolean);for(let e=0;e<n.length;e+=1)v(n[e]);a=!1},d(e){P(n,e),e&&d(t)}}}function U(e,t,a){let s,n,o=20727,r=[];return x((()=>{var e=window.location.hash.split("#");2==e.length&&"number"==typeof parseInt(e[1])&&(o=parseInt(e[1])),s=new j("ws://localhost:"+o+"/tokens",null,{debug:!0,reconnectInterval:3e3});let t=["leaderBoardPlayers","leaderBoardMainPlayer"];s.onopen=e=>{console.log("Connected to Websocket."),s.send(JSON.stringify(t))},s.onmessage=e=>{n={...n,...JSON.parse(e.data)},a(0,r=JSON.parse(n.leaderBoardPlayers)),JSON.parse(n.leaderBoardMainPlayer)}})),C((()=>{void 0!==s&&s.close()})),[r]}class q extends e{constructor(e){super(),t(this,e,U,M,a,{})}}export{q as default};