import{S as ue,i as _e,s as he,e as v,t as D,k as T,c as m,a as g,h as V,d as _,m as A,b as $,g as B,F as f,j as x,E as Ee,w as q,x as O,y as R,U as st,q as y,o as P,B as F,n as ae,p as ie,H as be,V as nt,W as rt,G as Ne,I as ot,J as at,K as it,L as ct,P as pt,X as Je}from"../chunks/index-520be29f.js";import{N as vt,a as mt,T as gt}from"../chunks/navbar-6f9f20c9.js";import{H as $t,l as ft}from"../chunks/licenses-7fc289b1.js";import{l as bt}from"../chunks/config-9b914339.js";import"../chunks/singletons-d1fb5791.js";function Et(o){let e,s,l,t=o[0].name+"",n,r,a,i=o[0].short+"",L,d,b,k=o[0].description+"",C;return{c(){e=v("a"),s=v("div"),l=v("h2"),n=D(t),r=T(),a=v("h3"),L=D(i),d=T(),b=v("p"),this.h()},l(p){e=m(p,"A",{class:!0,href:!0});var E=g(e);s=m(E,"DIV",{class:!0});var N=g(s);l=m(N,"H2",{class:!0});var M=g(l);n=V(M,t),M.forEach(_),r=A(N),a=m(N,"H3",{class:!0});var W=g(a);L=V(W,i),W.forEach(_),N.forEach(_),d=A(E),b=m(E,"P",{class:!0});var ce=g(b);ce.forEach(_),E.forEach(_),this.h()},h(){$(l,"class","svelte-1eb02xj"),$(a,"class","svelte-1eb02xj"),$(s,"class","title svelte-1eb02xj"),$(b,"class","short"),$(e,"class","license svelte-1eb02xj"),$(e,"href",C="/licenses/?id="+o[0].descriptor)},m(p,E){B(p,e,E),f(e,s),f(s,l),f(l,n),f(s,r),f(s,a),f(a,L),f(e,d),f(e,b),b.innerHTML=k},p(p,[E]){E&1&&t!==(t=p[0].name+"")&&x(n,t),E&1&&i!==(i=p[0].short+"")&&x(L,i),E&1&&k!==(k=p[0].description+"")&&(b.innerHTML=k),E&1&&C!==(C="/licenses/?id="+p[0].descriptor)&&$(e,"href",C)},i:Ee,o:Ee,d(p){p&&_(e)}}}function kt(o,e,s){let{license:l}=e;return o.$$set=t=>{"license"in t&&s(0,l=t.license)},[l]}class yt extends ue{constructor(e){super(),_e(this,e,kt,Et,he,{license:0})}}function Ke(o,e,s){const l=o.slice();return l[2]=e[s],l[3]=e,l[4]=s,l}function Xe(o){let e,s,l;function t(r){o[1](r,o[2],o[3],o[4])}let n={};return o[2]!==void 0&&(n.license=o[2]),e=new yt({props:n}),nt.push(()=>rt(e,"license",t)),{c(){q(e.$$.fragment)},l(r){O(e.$$.fragment,r)},m(r,a){R(e,r,a),l=!0},p(r,a){o=r;const i={};!s&&a&1&&(s=!0,i.license=o[2],st(()=>s=!1)),e.$set(i)},i(r){l||(y(e.$$.fragment,r),l=!0)},o(r){P(e.$$.fragment,r),l=!1},d(r){F(e,r)}}}function Lt(o){let e,s,l=o[0],t=[];for(let r=0;r<l.length;r+=1)t[r]=Xe(Ke(o,l,r));const n=r=>P(t[r],1,1,()=>{t[r]=null});return{c(){e=v("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=m(r,"DIV",{class:!0});var a=g(e);for(let i=0;i<t.length;i+=1)t[i].l(a);a.forEach(_),this.h()},h(){$(e,"class","licenses svelte-1rpbwjv")},m(r,a){B(r,e,a);for(let i=0;i<t.length;i+=1)t[i].m(e,null);s=!0},p(r,[a]){if(a&1){l=r[0];let i;for(i=0;i<l.length;i+=1){const L=Ke(r,l,i);t[i]?(t[i].p(L,a),y(t[i],1)):(t[i]=Xe(L),t[i].c(),y(t[i],1),t[i].m(e,null))}for(ae(),i=l.length;i<t.length;i+=1)n(i);ie()}},i(r){if(!s){for(let a=0;a<l.length;a+=1)y(t[a]);s=!0}},o(r){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)P(t[a]);s=!1},d(r){r&&_(e),be(t,r)}}}function wt(o,e,s){let{licenses:l}=e;function t(n,r,a,i){a[i]=n,s(0,l)}return o.$$set=n=>{"licenses"in n&&s(0,l=n.licenses)},[l,t]}class It extends ue{constructor(e){super(),_e(this,e,wt,Lt,he,{licenses:0})}}const Ht=o=>({}),ze=o=>({});function Pt(o){let e;const s=o[3].before,l=ot(s,o,o[2],ze);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,n){l&&l.m(t,n),e=!0},p(t,n){l&&l.p&&(!e||n&4)&&at(l,s,t,t[2],e?ct(s,t[2],n,Ht):it(t[2]),ze)},i(t){e||(y(l,t),e=!0)},o(t){P(l,t),e=!1},d(t){l&&l.d(t)}}}function Dt(o){let e;const s=o[3].default,l=ot(s,o,o[2],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,n){l&&l.m(t,n),e=!0},p(t,n){l&&l.p&&(!e||n&4)&&at(l,s,t,t[2],e?ct(s,t[2],n,null):it(t[2]),null)},i(t){e||(y(l,t),e=!0)},o(t){P(l,t),e=!1},d(t){l&&l.d(t)}}}function Vt(o){let e,s,l,t,n,r;const a=[Dt,Pt],i=[];function L(d,b){return d[0]?0:1}return s=L(o),l=i[s]=a[s](o),{c(){e=v("div"),l.c(),this.h()},l(d){e=m(d,"DIV",{class:!0});var b=g(e);l.l(b),b.forEach(_),this.h()},h(){$(e,"class","expandable svelte-bu7vs1")},m(d,b){B(d,e,b),i[s].m(e,null),t=!0,n||(r=Ne(e,"click",o[1]),n=!0)},p(d,[b]){let k=s;s=L(d),s===k?i[s].p(d,b):(ae(),P(i[k],1,1,()=>{i[k]=null}),ie(),l=i[s],l?l.p(d,b):(l=i[s]=a[s](d),l.c()),y(l,1),l.m(e,null))},i(d){t||(y(l),t=!0)},o(d){P(l),t=!1},d(d){d&&_(e),i[s].d(),n=!1,r()}}}function Tt(o,e,s){let{$$slots:l={},$$scope:t}=e,{expand:n=!1}=e;function r(){s(0,n=!n)}return o.$$set=a=>{"expand"in a&&s(0,n=a.expand),"$$scope"in a&&s(2,t=a.$$scope)},[n,r,t,l]}class Ue extends ue{constructor(e){super(),_e(this,e,Tt,Vt,he,{expand:0,toggle:1})}get toggle(){return this.$$.ctx[1]}}function Qe(o,e,s){const l=o.slice();return l[4]=e[s],l}function Ye(o,e,s){const l=o.slice();return l[7]=e[s],l}function Ze(o,e,s){const l=o.slice();return l[10]=e[s],l}function At(o){let e,s=o[10].description+"",l;return{c(){e=v("p"),l=D(s)},l(t){e=m(t,"P",{});var n=g(e);l=V(n,s),n.forEach(_)},m(t,n){B(t,e,n),f(e,l)},p(t,n){n&1&&s!==(s=t[10].description+"")&&x(l,s)},d(t){t&&_(e)}}}function Bt(o){let e,s=o[10].short+"",l;return{c(){e=v("p"),l=D(s),this.h()},l(t){e=m(t,"P",{slot:!0});var n=g(e);l=V(n,s),n.forEach(_),this.h()},h(){$(e,"slot","before")},m(t,n){B(t,e,n),f(e,l)},p(t,n){n&1&&s!==(s=t[10].short+"")&&x(l,s)},d(t){t&&_(e)}}}function et(o){let e,s,l,t;return s=new Ue({props:{$$slots:{before:[Bt],default:[At]},$$scope:{ctx:o}}}),{c(){e=v("li"),q(s.$$.fragment),l=T(),this.h()},l(n){e=m(n,"LI",{class:!0});var r=g(e);O(s.$$.fragment,r),l=A(r),r.forEach(_),this.h()},h(){$(e,"class","svelte-10yx6od")},m(n,r){B(n,e,r),R(s,e,null),f(e,l),t=!0},p(n,r){const a={};r&8193&&(a.$$scope={dirty:r,ctx:n}),s.$set(a)},i(n){t||(y(s.$$.fragment,n),t=!0)},o(n){P(s.$$.fragment,n),t=!1},d(n){n&&_(e),F(s)}}}function Ct(o){let e,s=o[7].short+"",l;return{c(){e=v("p"),l=D(s),this.h()},l(t){e=m(t,"P",{slot:!0});var n=g(e);l=V(n,s),n.forEach(_),this.h()},h(){$(e,"slot","before")},m(t,n){B(t,e,n),f(e,l)},p(t,n){n&1&&s!==(s=t[7].short+"")&&x(l,s)},d(t){t&&_(e)}}}function Nt(o){let e,s=o[7].description+"",l;return{c(){e=v("p"),l=D(s)},l(t){e=m(t,"P",{});var n=g(e);l=V(n,s),n.forEach(_)},m(t,n){B(t,e,n),f(e,l)},p(t,n){n&1&&s!==(s=t[7].description+"")&&x(l,s)},d(t){t&&_(e)}}}function tt(o){let e,s,l,t;return s=new Ue({props:{$$slots:{default:[Nt],before:[Ct]},$$scope:{ctx:o}}}),{c(){e=v("li"),q(s.$$.fragment),l=T(),this.h()},l(n){e=m(n,"LI",{class:!0});var r=g(e);O(s.$$.fragment,r),l=A(r),r.forEach(_),this.h()},h(){$(e,"class","svelte-10yx6od")},m(n,r){B(n,e,r),R(s,e,null),f(e,l),t=!0},p(n,r){const a={};r&8193&&(a.$$scope={dirty:r,ctx:n}),s.$set(a)},i(n){t||(y(s.$$.fragment,n),t=!0)},o(n){P(s.$$.fragment,n),t=!1},d(n){n&&_(e),F(s)}}}function Ut(o){let e,s=o[4].description+"",l;return{c(){e=v("p"),l=D(s)},l(t){e=m(t,"P",{});var n=g(e);l=V(n,s),n.forEach(_)},m(t,n){B(t,e,n),f(e,l)},p(t,n){n&1&&s!==(s=t[4].description+"")&&x(l,s)},d(t){t&&_(e)}}}function jt(o){let e,s=o[4].short+"",l;return{c(){e=v("p"),l=D(s),this.h()},l(t){e=m(t,"P",{slot:!0});var n=g(e);l=V(n,s),n.forEach(_),this.h()},h(){$(e,"slot","before")},m(t,n){B(t,e,n),f(e,l)},p(t,n){n&1&&s!==(s=t[4].short+"")&&x(l,s)},d(t){t&&_(e)}}}function lt(o){let e,s,l,t;return s=new Ue({props:{$$slots:{before:[jt],default:[Ut]},$$scope:{ctx:o}}}),{c(){e=v("li"),q(s.$$.fragment),l=T(),this.h()},l(n){e=m(n,"LI",{class:!0});var r=g(e);O(s.$$.fragment,r),l=A(r),r.forEach(_),this.h()},h(){$(e,"class","svelte-10yx6od")},m(n,r){B(n,e,r),R(s,e,null),f(e,l),t=!0},p(n,r){const a={};r&8193&&(a.$$scope={dirty:r,ctx:n}),s.$set(a)},i(n){t||(y(s.$$.fragment,n),t=!0)},o(n){P(s.$$.fragment,n),t=!1},d(n){n&&_(e),F(s)}}}function xt(o){let e,s,l,t=o[0].name+"",n,r,a,i=o[0].short+"",L,d,b,k=o[0].description+"",C,p,E,N,M,W,ce,ke,S,G,se,ye,Le,Q,we,J,ne,Ie,He,Y,Pe,K,re,De,Ve,Z,Te,X,Ae,fe=(o[1]?o[1]:"Downloading copy...")+"",de,Be,z,Ce,je,ee=o[0].permissions,w=[];for(let u=0;u<ee.length;u+=1)w[u]=et(Ze(o,ee,u));const ut=u=>P(w[u],1,1,()=>{w[u]=null});let te=o[0].conditions,I=[];for(let u=0;u<te.length;u+=1)I[u]=tt(Ye(o,te,u));const _t=u=>P(I[u],1,1,()=>{I[u]=null});let le=o[0].limitations,H=[];for(let u=0;u<le.length;u+=1)H[u]=lt(Qe(o,le,u));const ht=u=>P(H[u],1,1,()=>{H[u]=null});return{c(){e=v("div"),s=v("div"),l=v("h2"),n=D(t),r=T(),a=v("h3"),L=D(i),d=T(),b=v("p"),C=T(),p=v("div"),E=v("button"),N=D("Website"),M=T(),W=v("button"),ce=D("ChooseALicense"),ke=T(),S=v("div"),G=v("div"),se=v("h4"),ye=D("Permissions"),Le=T(),Q=v("ul");for(let u=0;u<w.length;u+=1)w[u].c();we=T(),J=v("div"),ne=v("h4"),Ie=D("Conditions"),He=T(),Y=v("ul");for(let u=0;u<I.length;u+=1)I[u].c();Pe=T(),K=v("div"),re=v("h4"),De=D("Limitations"),Ve=T(),Z=v("ul");for(let u=0;u<H.length;u+=1)H[u].c();Te=T(),X=v("pre"),Ae=D("        "),de=D(fe),Be=D(`
    `),this.h()},l(u){e=m(u,"DIV",{class:!0});var h=g(e);s=m(h,"DIV",{class:!0});var c=g(s);l=m(c,"H2",{class:!0});var U=g(l);n=V(U,t),U.forEach(_),r=A(c),a=m(c,"H3",{class:!0});var xe=g(a);L=V(xe,i),xe.forEach(_),c.forEach(_),d=A(h),b=m(h,"P",{class:!0});var dt=g(b);dt.forEach(_),C=A(h),p=m(h,"DIV",{class:!0});var pe=g(p);E=m(pe,"BUTTON",{});var Me=g(E);N=V(Me,"Website"),Me.forEach(_),M=A(pe),W=m(pe,"BUTTON",{});var Se=g(W);ce=V(Se,"ChooseALicense"),Se.forEach(_),pe.forEach(_),ke=A(h),S=m(h,"DIV",{class:!0});var oe=g(S);G=m(oe,"DIV",{class:!0});var ve=g(G);se=m(ve,"H4",{class:!0});var We=g(se);ye=V(We,"Permissions"),We.forEach(_),Le=A(ve),Q=m(ve,"UL",{class:!0});var qe=g(Q);for(let j=0;j<w.length;j+=1)w[j].l(qe);qe.forEach(_),ve.forEach(_),we=A(oe),J=m(oe,"DIV",{class:!0});var me=g(J);ne=m(me,"H4",{class:!0});var Oe=g(ne);Ie=V(Oe,"Conditions"),Oe.forEach(_),He=A(me),Y=m(me,"UL",{class:!0});var Re=g(Y);for(let j=0;j<I.length;j+=1)I[j].l(Re);Re.forEach(_),me.forEach(_),Pe=A(oe),K=m(oe,"DIV",{class:!0});var ge=g(K);re=m(ge,"H4",{class:!0});var Fe=g(re);De=V(Fe,"Limitations"),Fe.forEach(_),Ve=A(ge),Z=m(ge,"UL",{class:!0});var Ge=g(Z);for(let j=0;j<H.length;j+=1)H[j].l(Ge);Ge.forEach(_),ge.forEach(_),oe.forEach(_),Te=A(h),X=m(h,"PRE",{class:!0});var $e=g(X);Ae=V($e,"        "),de=V($e,fe),Be=V($e,`
    `),$e.forEach(_),h.forEach(_),this.h()},h(){$(l,"class","svelte-10yx6od"),$(a,"class","svelte-10yx6od"),$(s,"class","title svelte-10yx6od"),$(b,"class","short"),$(p,"class","controls svelte-10yx6od"),$(se,"class","svelte-10yx6od"),$(Q,"class","svelte-10yx6od"),$(G,"class","permissions svelte-10yx6od"),$(ne,"class","svelte-10yx6od"),$(Y,"class","svelte-10yx6od"),$(J,"class","conditions svelte-10yx6od"),$(re,"class","svelte-10yx6od"),$(Z,"class","svelte-10yx6od"),$(K,"class","limitations svelte-10yx6od"),$(S,"class","terms svelte-10yx6od"),$(X,"class","raw svelte-10yx6od"),$(e,"class","license svelte-10yx6od")},m(u,h){B(u,e,h),f(e,s),f(s,l),f(l,n),f(s,r),f(s,a),f(a,L),f(e,d),f(e,b),b.innerHTML=k,f(e,C),f(e,p),f(p,E),f(E,N),f(p,M),f(p,W),f(W,ce),f(e,ke),f(e,S),f(S,G),f(G,se),f(se,ye),f(G,Le),f(G,Q);for(let c=0;c<w.length;c+=1)w[c].m(Q,null);f(S,we),f(S,J),f(J,ne),f(ne,Ie),f(J,He),f(J,Y);for(let c=0;c<I.length;c+=1)I[c].m(Y,null);f(S,Pe),f(S,K),f(K,re),f(re,De),f(K,Ve),f(K,Z);for(let c=0;c<H.length;c+=1)H[c].m(Z,null);f(e,Te),f(e,X),f(X,Ae),f(X,de),f(X,Be),z=!0,Ce||(je=[Ne(E,"click",o[2]),Ne(W,"click",o[3])],Ce=!0)},p(u,[h]){if((!z||h&1)&&t!==(t=u[0].name+"")&&x(n,t),(!z||h&1)&&i!==(i=u[0].short+"")&&x(L,i),(!z||h&1)&&k!==(k=u[0].description+"")&&(b.innerHTML=k),h&1){ee=u[0].permissions;let c;for(c=0;c<ee.length;c+=1){const U=Ze(u,ee,c);w[c]?(w[c].p(U,h),y(w[c],1)):(w[c]=et(U),w[c].c(),y(w[c],1),w[c].m(Q,null))}for(ae(),c=ee.length;c<w.length;c+=1)ut(c);ie()}if(h&1){te=u[0].conditions;let c;for(c=0;c<te.length;c+=1){const U=Ye(u,te,c);I[c]?(I[c].p(U,h),y(I[c],1)):(I[c]=tt(U),I[c].c(),y(I[c],1),I[c].m(Y,null))}for(ae(),c=te.length;c<I.length;c+=1)_t(c);ie()}if(h&1){le=u[0].limitations;let c;for(c=0;c<le.length;c+=1){const U=Qe(u,le,c);H[c]?(H[c].p(U,h),y(H[c],1)):(H[c]=lt(U),H[c].c(),y(H[c],1),H[c].m(Z,null))}for(ae(),c=le.length;c<H.length;c+=1)ht(c);ie()}(!z||h&2)&&fe!==(fe=(u[1]?u[1]:"Downloading copy...")+"")&&x(de,fe)},i(u){if(!z){for(let h=0;h<ee.length;h+=1)y(w[h]);for(let h=0;h<te.length;h+=1)y(I[h]);for(let h=0;h<le.length;h+=1)y(H[h]);z=!0}},o(u){w=w.filter(Boolean);for(let h=0;h<w.length;h+=1)P(w[h]);I=I.filter(Boolean);for(let h=0;h<I.length;h+=1)P(I[h]);H=H.filter(Boolean);for(let h=0;h<H.length;h+=1)P(H[h]);z=!1},d(u){u&&_(e),be(w,u),be(I,u),be(H,u),Ce=!1,pt(je)}}}function Mt(o,e,s){let{license:l}=e,t;l.fetchCopy().then(a=>s(1,t=a));function n(){window.open(l.link,"_blank")}function r(){window.open(`https://choosealicense.com/licenses/${l.descriptor}`,"_blank")}return o.$$set=a=>{"license"in a&&s(0,l=a.license)},[l,t,n,r]}class St extends ue{constructor(e){super(),_e(this,e,Mt,xt,he,{license:0})}}function Wt(o){let e,s,l,t,n,r,a,i,L;return a=new gt({props:{texts:bt}}),{c(){e=v("h1"),s=D("Licenses"),l=T(),t=v("p"),n=D("A list of "),r=v("span"),q(a.$$.fragment),i=D(" Licenses"),this.h()},l(d){e=m(d,"H1",{class:!0});var b=g(e);s=V(b,"Licenses"),b.forEach(_),l=A(d),t=m(d,"P",{class:!0});var k=g(t);n=V(k,"A list of "),r=m(k,"SPAN",{class:!0});var C=g(r);O(a.$$.fragment,C),C.forEach(_),i=V(k," Licenses"),k.forEach(_),this.h()},h(){$(e,"class","header"),$(r,"class","svelte-tp341d"),$(t,"class","header")},m(d,b){B(d,e,b),f(e,s),B(d,l,b),B(d,t,b),f(t,n),f(t,r),R(a,r,null),f(t,i),L=!0},p:Ee,i(d){L||(y(a.$$.fragment,d),L=!0)},o(d){P(a.$$.fragment,d),L=!1},d(d){d&&_(e),d&&_(l),d&&_(t),F(a)}}}function qt(o){let e,s;return e=new It({props:{licenses:ft}}),{c(){q(e.$$.fragment)},l(l){O(e.$$.fragment,l)},m(l,t){R(e,l,t),s=!0},p:Ee,i(l){s||(y(e.$$.fragment,l),s=!0)},o(l){P(e.$$.fragment,l),s=!1},d(l){F(e,l)}}}function Ot(o){let e,s,l;function t(r){o[4](r)}let n={};return o[0]!==void 0&&(n.license=o[0]),e=new St({props:n}),nt.push(()=>rt(e,"license",t)),{c(){q(e.$$.fragment)},l(r){O(e.$$.fragment,r)},m(r,a){R(e,r,a),l=!0},p(r,a){const i={};!s&&a&1&&(s=!0,i.license=r[0],st(()=>s=!1)),e.$set(i)},i(r){l||(y(e.$$.fragment,r),l=!0)},o(r){P(e.$$.fragment,r),l=!1},d(r){F(e,r)}}}function Rt(o){let e,s,l,t,n,r,a,i,L,d;s=new vt({}),t=new $t({props:{$$slots:{default:[Wt]},$$scope:{ctx:o}}});const b=[Ot,qt],k=[];function C(p,E){return p[0]?0:1}return a=C(o),i=k[a]=b[a](o),{c(){e=v("main"),q(s.$$.fragment),l=T(),q(t.$$.fragment),n=T(),r=v("div"),i.c(),this.h()},l(p){e=m(p,"MAIN",{class:!0});var E=g(e);O(s.$$.fragment,E),l=A(E),O(t.$$.fragment,E),n=A(E),r=m(E,"DIV",{class:!0});var N=g(r);i.l(N),N.forEach(_),E.forEach(_),this.h()},h(){$(r,"class",L=Je(o[0]!==void 0?"content":"list")+" svelte-tp341d"),$(e,"class","svelte-tp341d")},m(p,E){B(p,e,E),R(s,e,null),f(e,l),R(t,e,null),f(e,n),f(e,r),k[a].m(r,null),d=!0},p(p,[E]){const N={};E&32&&(N.$$scope={dirty:E,ctx:p}),t.$set(N);let M=a;a=C(p),a===M?k[a].p(p,E):(ae(),P(k[M],1,1,()=>{k[M]=null}),ie(),i=k[a],i?i.p(p,E):(i=k[a]=b[a](p),i.c()),y(i,1),i.m(r,null)),(!d||E&1&&L!==(L=Je(p[0]!==void 0?"content":"list")+" svelte-tp341d"))&&$(r,"class",L)},i(p){d||(y(s.$$.fragment,p),y(t.$$.fragment,p),y(i),d=!0)},o(p){P(s.$$.fragment,p),P(t.$$.fragment,p),P(i),d=!1},d(p){p&&_(e),F(s),F(t),k[a].d()}}}function Ft(o,e,s){let l,t,n=window.location.search,r;mt(function({to:i}){s(1,n=i.search)});function a(i){r=i,s(0,r),s(2,t),s(3,l),s(1,n)}return o.$$.update=()=>{o.$$.dirty&2&&s(3,l=new URLSearchParams(n)),o.$$.dirty&8&&s(2,t=l.get("id")),o.$$.dirty&4&&s(0,r=t?ft.find(i=>i.descriptor===t):void 0)},[r,n,t,l,a]}class Qt extends ue{constructor(e){super(),_e(this,e,Ft,Rt,he,{})}}export{Qt as default};