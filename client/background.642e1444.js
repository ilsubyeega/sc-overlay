import{S as s,i as t,s as a,e as n,a as e,c as o,g as l,b as c,f as r,h as i,B as u,j as d,n as h,y as m,z as g,C as p}from"./client.1a658475.js";import{r as f}from"./reconnecting-websocket.eb9bdc76.js";function b(s){let t,a,m;return{c(){t=n("img"),a=e(),m=n("div"),this.h()},l(s){t=o(s,"IMG",{class:!0,style:!0,alt:!0}),a=l(s),m=o(s,"DIV",{class:!0}),c(m).forEach(r),this.h()},h(){i(t,"class","dummyimage"),u(t,"width","0"),u(t,"height","0"),u(t,"display","none"),i(t,"alt","Background"),i(m,"class","background svelte-d1g6be")},m(n,e){d(n,t,e),s[2](t),d(n,a,e),d(n,m,e),s[3](m)},p:h,i:h,o:h,d(n){n&&r(t),s[2](null),n&&r(a),n&&r(m),s[3](null)}}}function y(s,t,a){let n,e,o,l,c,r=20727;return m((()=>{var s=window.location.hash.split("#");2==s.length&&"number"==typeof parseInt(s[1])&&(r=parseInt(s[1])),n=new f("ws://localhost:"+r+"/tokens",null,{debug:!0,reconnectInterval:3e3});let t=["md5"];n.onopen=s=>{console.log("Connected to Websocket."),n.send(JSON.stringify(t))},n.onmessage=s=>{e={...e,...JSON.parse(s.data)},null!=e&&o!=e.md5&&null!=l&&(o=e.md5,a(0,l.src=`http://localhost:${r}/backgroundImage?width=1920&height=1080&dummyData=${e.md5}&crop=1`,l),a(0,l.onload=function(){a(1,c.style.backgroundImage=`url("${l.src}")`,c)},l))}})),g((()=>{void 0!==n&&n.close()})),[l,c,function(s){p[s?"unshift":"push"]((()=>{l=s,a(0,l)}))},function(s){p[s?"unshift":"push"]((()=>{c=s,a(1,c)}))}]}class k extends s{constructor(s){super(),t(this,s,y,b,a,{})}}export{k as default};