import{E as t,F as e}from"./client.ae6f0e10.js";var n=t((function(t,n){(function(){var e,i,o,r,s,a,u,l,d,h,p,c,m,f,g,v,w,M,y,b=[].slice;e=/^\(?([^)]*)\)?(?:(.)(d+))?$/,c=document.createElement("div").style,r=null!=c.transition||null!=c.webkitTransition||null!=c.mozTransition||null!=c.oTransition,h=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,i=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,a=function(t){var e;return(e=document.createElement("div")).innerHTML=t,e.children[0]},d=function(t,e){return t.className=t.className.replace(new RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi")," ")},s=function(t,e){return d(t,e),t.className+=" "+e},m=function(t,e){var n;if(null!=document.createEvent)return(n=document.createEvent("HTMLEvents")).initEvent(e,!0,!0),t.dispatchEvent(n)},l=function(){var t,e;return null!=(t=null!=(e=window.performance)&&"function"==typeof e.now?e.now():void 0)?t:+new Date},p=function(t,e){return null==e&&(e=0),e?(t*=Math.pow(10,e),t+=.5,(t=Math.floor(t))/Math.pow(10,e)):Math.round(t)},f=function(t){return t<0?Math.ceil(t):Math.floor(t)},u=function(t){return t-p(t)},v=!1,(g=function(){var t,e,n,i,o;if(!v&&null!=window.jQuery){for(v=!0,o=[],e=0,n=(i=["html","text"]).length;e<n;e++)t=i[e],o.push(function(t){var e;return e=window.jQuery.fn[t],window.jQuery.fn[t]=function(t){var n;return null==t||null==(null!=(n=this[0])?n.odometer:void 0)?e.apply(this,arguments):this[0].odometer.update(t)}}(t));return o}})(),setTimeout(g,0),(o=function(){function t(e){var n,i,o,r,s,a,u,l,d,h=this;if(this.options=e,this.el=this.options.el,null!=this.el.odometer)return this.el.odometer;for(n in this.el.odometer=this,u=t.options)o=u[n],null==this.options[n]&&(this.options[n]=o);null==(r=this.options).duration&&(r.duration=2e3),this.MAX_VALUES=this.options.duration/33.333333333333336/2|0,this.resetFormat(),this.value=this.cleanValue(null!=(l=this.options.value)?l:""),this.renderInside(),this.render();try{for(s=0,a=(d=["innerHTML","innerText","textContent"]).length;s<a;s++)i=d[s],null!=this.el[i]&&function(t){Object.defineProperty(h.el,t,{get:function(){var e;return"innerHTML"===t?h.inside.outerHTML:null!=(e=h.inside.innerText)?e:h.inside.textContent},set:function(t){return h.update(t)}})}(i)}catch(t){this.watchForMutations()}}return t.prototype.renderInside=function(){return this.inside=document.createElement("div"),this.inside.className="odometer-inside",this.el.innerHTML="",this.el.appendChild(this.inside)},t.prototype.watchForMutations=function(){var t=this;if(null!=i)try{return null==this.observer&&(this.observer=new i((function(e){var n;return n=t.el.innerText,t.renderInside(),t.render(t.value),t.update(n)}))),this.watchMutations=!0,this.startWatchingMutations()}catch(t){}},t.prototype.startWatchingMutations=function(){if(this.watchMutations)return this.observer.observe(this.el,{childList:!0})},t.prototype.stopWatchingMutations=function(){var t;return null!=(t=this.observer)?t.disconnect():void 0},t.prototype.cleanValue=function(t){var e;return"string"==typeof t&&(t=(t=(t=t.replace(null!=(e=this.format.radix)?e:".","<radix>")).replace(/[.,]/g,"")).replace("<radix>","."),t=parseFloat(t,10)||0),p(t,this.format.precision)},t.prototype.bindTransitionEnd=function(){var t,e,n,i,o,r,s=this;if(!this.transitionEndBound){for(this.transitionEndBound=!0,e=!1,r=[],n=0,i=(o="transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd".split(" ")).length;n<i;n++)t=o[n],r.push(this.el.addEventListener(t,(function(){return e||(e=!0,setTimeout((function(){return s.render(),e=!1,m(s.el,"odometerdone")}),0)),!0}),!1));return r}},t.prototype.resetFormat=function(){var t,n,i,o,r,s,a,u;if((t=null!=(a=this.options.format)?a:"(,ddd).dd")||(t="d"),!(i=e.exec(t)))throw new Error("Odometer: Unparsable digit format");return s=(u=i.slice(1,4))[0],r=u[1],o=(null!=(n=u[2])?n.length:void 0)||0,this.format={repeating:s,radix:r,precision:o}},t.prototype.render=function(t){var e,n,i,o,s,a,u;for(null==t&&(t=this.value),this.stopWatchingMutations(),this.resetFormat(),this.inside.innerHTML="",s=this.options.theme,o=[],a=0,u=(e=this.el.className.split(" ")).length;a<u;a++)(n=e[a]).length&&((i=/^odometer-theme-(.+)$/.exec(n))?s=i[1]:/^odometer(-|$)/.test(n)||o.push(n));return o.push("odometer"),r||o.push("odometer-no-transitions"),s?o.push("odometer-theme-"+s):o.push("odometer-auto-theme"),this.el.className=o.join(" "),this.ribbons={},this.formatDigits(t),this.startWatchingMutations()},t.prototype.formatDigits=function(t){var e,n,i,o,r,s,a,l,d;if(this.digits=[],this.options.formatFunction)for(o=0,s=(l=this.options.formatFunction(t).split("").reverse()).length;o<s;o++)(n=l[o]).match(/0-9/)?((e=this.renderDigit()).querySelector(".odometer-value").innerHTML=n,this.digits.push(e),this.insertDigit(e)):this.addSpacer(n);else for(i=!this.format.precision||!u(t)||!1,r=0,a=(d=t.toString().split("").reverse()).length;r<a;r++)"."===(e=d[r])&&(i=!0),this.addDigit(e,i)},t.prototype.update=function(t){var e,n=this;if(e=(t=this.cleanValue(t))-this.value)return d(this.el,"odometer-animating-up odometer-animating-down odometer-animating"),s(this.el,e>0?"odometer-animating-up":"odometer-animating-down"),this.stopWatchingMutations(),this.animate(t),this.startWatchingMutations(),setTimeout((function(){return n.el.offsetHeight,s(n.el,"odometer-animating")}),0),this.value=t},t.prototype.renderDigit=function(){return a('<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value"></span></span></span></span></span>')},t.prototype.insertDigit=function(t,e){return null!=e?this.inside.insertBefore(t,e):this.inside.children.length?this.inside.insertBefore(t,this.inside.children[0]):this.inside.appendChild(t)},t.prototype.addSpacer=function(t,e,n){var i;return(i=a('<span class="odometer-formatting-mark"></span>')).innerHTML=t,n&&s(i,n),this.insertDigit(i,e)},t.prototype.addDigit=function(t,e){var n,i,o,r;if(null==e&&(e=!0),"-"===t)return this.addSpacer(t,null,"odometer-negation-mark");if("."===t)return this.addSpacer(null!=(r=this.format.radix)?r:".",null,"odometer-radix-mark");if(e)for(o=!1;;){if(!this.format.repeating.length){if(o)throw new Error("Bad odometer format without digits");this.resetFormat(),o=!0}if(n=this.format.repeating[this.format.repeating.length-1],this.format.repeating=this.format.repeating.substring(0,this.format.repeating.length-1),"d"===n)break;this.addSpacer(n)}return(i=this.renderDigit()).querySelector(".odometer-value").innerHTML=t,this.digits.push(i),this.insertDigit(i)},t.prototype.animate=function(t){return r&&"count"!==this.options.animation?this.animateSlide(t):this.animateCount(t)},t.prototype.animateCount=function(t){var e,n,i,o,r,s=this;if(n=+t-this.value)return o=i=l(),e=this.value,(r=function(){var a,u;return l()-o>s.options.duration?(s.value=t,s.render(),void m(s.el,"odometerdone")):((a=l()-i)>50&&(i=l(),u=a/s.options.duration,e+=n*u,s.render(Math.round(e))),null!=h?h(r):setTimeout(r,50))})()},t.prototype.getDigitCount=function(){var t,e,n,i,o,r;for(t=o=0,r=(i=1<=arguments.length?b.call(arguments,0):[]).length;o<r;t=++o)n=i[t],i[t]=Math.abs(n);return e=Math.max.apply(Math,i),Math.ceil(Math.log(e+1)/Math.log(10))},t.prototype.getFractionalDigitCount=function(){var t,e,n,i,o,r,s;for(e=/^\-?\d*\.(\d*?)0*$/,t=r=0,s=(o=1<=arguments.length?b.call(arguments,0):[]).length;r<s;t=++r)i=o[t],o[t]=i.toString(),n=e.exec(o[t]),o[t]=null==n?0:n[1].length;return Math.max.apply(Math,o)},t.prototype.resetDigits=function(){return this.digits=[],this.ribbons=[],this.inside.innerHTML="",this.resetFormat()},t.prototype.animateSlide=function(t){var e,n,i,o,r,a,u,l,d,h,p,c,m,g,v,w,M,y,b,T,E,x,S,D,L,F,A;if(w=this.value,(l=this.getFractionalDigitCount(w,t))&&(t*=Math.pow(10,l),w*=Math.pow(10,l)),i=t-w){for(this.bindTransitionEnd(),o=this.getDigitCount(w,t),r=[],e=0,p=b=0;0<=o?b<o:b>o;p=0<=o?++b:--b){if(M=f(w/Math.pow(10,o-p-1)),a=(u=f(t/Math.pow(10,o-p-1)))-M,Math.abs(a)>this.MAX_VALUES){for(h=[],c=a/(this.MAX_VALUES+this.MAX_VALUES*e*.5),n=M;a>0&&n<u||a<0&&n>u;)h.push(Math.round(n)),n+=c;h[h.length-1]!==u&&h.push(u),e++}else h=function(){A=[];for(var t=M;M<=u?t<=u:t>=u;M<=u?t++:t--)A.push(t);return A}.apply(this);for(p=T=0,x=h.length;T<x;p=++T)d=h[p],h[p]=Math.abs(d%10);r.push(h)}for(this.resetDigits(),p=E=0,S=(F=r.reverse()).length;E<S;p=++E)for(h=F[p],this.digits[p]||this.addDigit(" ",p>=l),null==(y=this.ribbons)[p]&&(y[p]=this.digits[p].querySelector(".odometer-ribbon-inner")),this.ribbons[p].innerHTML="",i<0&&(h=h.reverse()),m=L=0,D=h.length;L<D;m=++L)d=h[m],(v=document.createElement("div")).className="odometer-value",v.innerHTML=d,this.ribbons[p].appendChild(v),m===h.length-1&&s(v,"odometer-last-value"),0===m&&s(v,"odometer-first-value");return M<0&&this.addDigit("-"),null!=(g=this.inside.querySelector(".odometer-radix-mark"))&&g.parent.removeChild(g),l?this.addSpacer(this.format.radix,this.digits[l-1],"odometer-radix-mark"):void 0}},t}()).options=null!=(M=window.odometerOptions)?M:{},setTimeout((function(){var t,e,n,i,r;if(window.odometerOptions){for(t in r=[],i=window.odometerOptions)e=i[t],r.push(null!=(n=o.options)[t]?(n=o.options)[t]:n[t]=e);return r}}),0),o.init=function(){var t,e,n,i,r,s;if(null!=document.querySelectorAll){for(s=[],n=0,i=(e=document.querySelectorAll(o.options.selector||".odometer")).length;n<i;n++)t=e[n],s.push(t.odometer=new o({el:t,value:null!=(r=t.innerText)?r:t.textContent}));return s}},null!=(null!=(y=document.documentElement)?y.doScroll:void 0)&&null!=document.createEventObject?(w=document.onreadystatechange,document.onreadystatechange=function(){return"complete"===document.readyState&&!1!==o.options.auto&&o.init(),null!=w?w.apply(this,arguments):void 0}):document.addEventListener("DOMContentLoaded",(function(){if(!1!==o.options.auto)return o.init()}),!1),null!==n?t.exports=o:window.Odometer=o}).call(e)})),i=Object.freeze(Object.assign(Object.create(null),n,{default:n,__moduleExports:n}));export{i as o};
