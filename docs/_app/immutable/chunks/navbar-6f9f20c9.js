import{S as K,i as L,s as V,e as p,t as A,c as g,a as m,h as j,d as h,b as i,O as N,g as q,F as n,j as B,E as k,k as I,m as T}from"./index-520be29f.js";import{c as w}from"./singletons-d1fb5791.js";function C(u){let e,a=u[3].substring(0,u[0])+"",c,l;return{c(){e=p("span"),c=A(a),l=p("span"),this.h()},l(t){e=g(t,"SPAN",{class:!0});var s=m(e);c=j(s,a),l=g(s,"SPAN",{id:!0,class:!0}),m(l).forEach(h),s.forEach(h),this.h()},h(){i(l,"id","carret"),i(l,"class","svelte-1ol93xj"),N(l,"show",u[1]),i(e,"class","svelte-1ol93xj"),N(e,"select",u[2])},m(t,s){q(t,e,s),n(e,c),n(e,l)},p(t,[s]){s&9&&a!==(a=t[3].substring(0,t[0])+"")&&B(c,a),s&2&&N(l,"show",t[1]),s&4&&N(e,"select",t[2])},i:k,o:k,d(t){t&&h(e)}}}function D(u,e,a){let{texts:c}=e,l=0,t=!1,s=!1,d=0,x=f(!0);function f(r){++d>=c.length&&(d=0);let o=c[d];return a(0,l=r?o.length:0),o}function b(r){a(1,t=!0);const o=setInterval(function(){a(0,++l)>=x.length&&(clearInterval(o),r())},100)}function E(r,o){let y=0;const _=setInterval(function(){a(1,t=!t),y++>=r&&(clearInterval(_),o())},300)}function v(r){a(2,s=!0),setTimeout(function(){a(2,s=!1),r()},200)}function S(){v(()=>{a(3,x=f(!1)),b(()=>E(20,S))})}return E(20,S),u.$$set=r=>{"texts"in r&&a(4,c=r.texts)},[l,t,s,x,c]}class J extends K{constructor(e){super(),L(this,e,D,C,V,{texts:4})}}w.disable_scroll_handling;const M=w.goto;w.invalidate;w.prefetch;w.prefetch_routes;w.before_navigate;const Q=w.after_navigate;function F(u){let e,a,c,l,t,s,d,x,f,b,E,v,S;return{c(){e=p("nav"),a=p("h1"),c=A("KotwOSS"),l=I(),t=p("div"),s=p("a"),d=A("Home"),x=I(),f=p("a"),b=A("Projects"),E=I(),v=p("a"),S=A("Licenses"),this.h()},l(r){e=g(r,"NAV",{class:!0});var o=m(e);a=g(o,"H1",{});var y=m(a);c=j(y,"KotwOSS"),y.forEach(h),l=T(o),t=g(o,"DIV",{class:!0});var _=m(t);s=g(_,"A",{class:!0,href:!0});var P=m(s);d=j(P,"Home"),P.forEach(h),x=T(_),f=g(_,"A",{class:!0,href:!0});var H=m(f);b=j(H,"Projects"),H.forEach(h),E=T(_),v=g(_,"A",{class:!0,href:!0});var O=m(v);S=j(O,"Licenses"),O.forEach(h),_.forEach(h),o.forEach(h),this.h()},h(){i(s,"class","link svelte-12vw05i"),i(s,"href","/"),i(f,"class","link svelte-12vw05i"),i(f,"href","/projects"),i(v,"class","link svelte-12vw05i"),i(v,"href","/licenses"),i(t,"class","links svelte-12vw05i"),i(e,"class","svelte-12vw05i")},m(r,o){q(r,e,o),n(e,a),n(a,c),n(e,l),n(e,t),n(t,s),n(s,d),n(t,x),n(t,f),n(f,b),n(t,E),n(t,v),n(v,S)},p:k,i:k,o:k,d(r){r&&h(e)}}}class R extends K{constructor(e){super(),L(this,e,null,F,V,{})}}export{R as N,J as T,Q as a,M as g};