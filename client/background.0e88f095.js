import{S as s,i as t,s as n,e as a,a as e,c as o,g as l,b as c,f as i,h as r,v as u,j as d,n as h,w as m,x as g,y as p}from"./client.661a6cc4.js";import{r as f}from"./reconnecting-websocket.560dd723.js";function b(s){let t,n,m;return{c(){t=a("img"),n=e(),m=a("div"),this.h()},l(s){t=o(s,"IMG",{class:!0,style:!0,alt:!0}),n=l(s),m=o(s,"DIV",{class:!0}),c(m).forEach(i),this.h()},h(){r(t,"class","dummyimage"),u(t,"width","0"),u(t,"height","0"),u(t,"display","none"),r(t,"alt","Background"),r(m,"class","background svelte-d1g6be")},m(a,e){d(a,t,e),s[2](t),d(a,n,e),d(a,m,e),s[3](m)},p:h,i:h,o:h,d(a){a&&i(t),s[2](null),a&&i(n),a&&i(m),s[3](null)}}}function w(s,t,n){let a,e,o,l,c,i=20727;return m((()=>{var s=window.location.hash.split("#");2==s.length&&"number"==typeof parseInt(s[1])&&(i=parseInt(s[1])),a=new f("ws://localhost:"+i+"/tokens",null,{debug:!0,reconnectInterval:3e3});let t=["md5"];a.onopen=s=>{console.log("Connected to Websocket."),a.send(JSON.stringify(t))},a.onmessage=s=>{e={...e,...JSON.parse(s.data)},null!=e&&o!=e.md5&&null!=l&&(o=e.md5,n(0,l.src=`http://localhost:${i}/backgroundImage?width=1920&height=1080dummyData=${e.md5}`,l),n(0,l.onload=function(){n(1,c.style.backgroundImage=`url("${l.src}")`,c)},l))}})),g((()=>{void 0!==a&&a.close()})),[l,c,function(s){p[s?"unshift":"push"]((()=>{l=s,n(0,l)}))},function(s){p[s?"unshift":"push"]((()=>{c=s,n(1,c)}))}]}export default class extends s{constructor(s){super(),t(this,s,w,b,n,{})}}
