import{M as $e,S as fe,i as ue,s as he,N as re,e as E,c as T,a as g,d as l,f as j,g as M,k as A,t as C,w as Q,l as ne,m as z,h as L,x as J,b as u,O as V,F as o,y as x,G as B,q as ee,o as te,B as se,P as me,Q as Z,R as F,E as pe,T as ye}from"../chunks/index-d15df9b9.js";import{T as we,g as Ee,N as Te}from"../chunks/navbar-6cfd8896.js";import{w as Pe}from"../chunks/index-ebc3c2b3.js";import{a as qe}from"../chunks/config-9b914339.js";import"../chunks/singletons-d1fb5791.js";class be{constructor(t=[]){this.triggers=Pe(t)}trigger(t,s){if($e(this.triggers).includes(t))return!0;if(s)return this.triggers.update(h=>(h.push(t),h)),!0}resetTriggers(){this.triggers.set([])}}function de(e){let t;return{c(){t=E("div"),this.h()},l(s){t=T(s,"DIV",{}),g(t).forEach(l),this.h()},h(){j(t,"height","100vh",!1)},m(s,h){M(s,t,h)},d(s){s&&l(t)}}}function ge(e){let t;return{c(){t=E("div"),this.h()},l(s){t=T(s,"DIV",{}),g(t).forEach(l),this.h()},h(){j(t,"height",e[4]?"200vh":"100vh",!1)},m(s,h){M(s,t,h)},p(s,h){h&16&&j(t,"height",s[4]?"200vh":"100vh",!1)},d(s){s&&l(t)}}}function Ie(e){let t=!1,s=()=>{t=!1},h,c,n,i,m,v,w,p,_,I,P,Y,G,q,k,D,S,H,O,$,d,a,b,R;re(e[8]),re(e[9]);let N=!e[2]&&de();P=new we({props:{texts:e[6]}});let f=e[2]&&ge(e);return{c(){N&&N.c(),c=A(),n=E("main"),i=E("div"),m=E("h1"),v=C("Opensource"),w=A(),p=E("p"),_=C("We are "),I=E("span"),Q(P.$$.fragment),Y=C(` and dream of a world where everybody can contribute to make
			software and IT better.`),G=A(),q=E("div"),k=E("h1"),D=C("Non profit"),S=A(),H=E("p"),O=C(`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati deserunt esse,
			doloribus assumenda iure fugiat neque at, quidem nihil eveniet doloremque mollitia magnam modi
			dolores distinctio earum quo cupiditate.`),$=A(),f&&f.c(),d=ne(),this.h()},l(r){N&&N.l(r),c=z(r),n=T(r,"MAIN",{class:!0});var y=g(n);i=T(y,"DIV",{class:!0});var K=g(i);m=T(K,"H1",{class:!0});var X=g(m);v=L(X,"Opensource"),X.forEach(l),w=z(K),p=T(K,"P",{class:!0});var W=g(p);_=L(W,"We are "),I=T(W,"SPAN",{class:!0});var ie=g(I);J(P.$$.fragment,ie),ie.forEach(l),Y=L(W,` and dream of a world where everybody can contribute to make
			software and IT better.`),W.forEach(l),K.forEach(l),G=z(y),q=T(y,"DIV",{class:!0});var U=g(q);k=T(U,"H1",{class:!0});var le=g(k);D=L(le,"Non profit"),le.forEach(l),S=z(U),H=T(U,"P",{class:!0});var ae=g(H);O=L(ae,`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati deserunt esse,
			doloribus assumenda iure fugiat neque at, quidem nihil eveniet doloremque mollitia magnam modi
			dolores distinctio earum quo cupiditate.`),ae.forEach(l),U.forEach(l),y.forEach(l),$=z(r),f&&f.l(r),d=ne(),this.h()},h(){u(m,"class","svelte-2gyya8"),V(m,"show",e[7].trigger(0,e[5]>0)),u(I,"class","svelte-2gyya8"),u(p,"class","svelte-2gyya8"),V(p,"show",e[7].trigger(1,e[5]>.2)),u(i,"class","category left svelte-2gyya8"),u(k,"class","svelte-2gyya8"),V(k,"show",e[7].trigger(2,e[5]>.4)),u(H,"class","svelte-2gyya8"),V(H,"show",e[7].trigger(3,e[5]>.6)),u(q,"class","category right svelte-2gyya8"),u(n,"class","svelte-2gyya8"),j(n,"position",e[4]?"fixed":"relative",!1),j(n,"opacity",1-Math.max(0,e[0]-1.8*e[1]-e[3])/e[3],!1)},m(r,y){N&&N.m(r,y),M(r,c,y),M(r,n,y),o(n,i),o(i,m),o(m,v),o(i,w),o(i,p),o(p,_),o(p,I),x(P,I,null),o(p,Y),o(n,G),o(n,q),o(q,k),o(k,D),o(q,S),o(q,H),o(H,O),M(r,$,y),f&&f.m(r,y),M(r,d,y),a=!0,b||(R=[B(window,"scroll",()=>{t=!0,clearTimeout(h),h=setTimeout(s,100),e[8]()}),B(window,"resize",e[9])],b=!0)},p(r,[y]){y&1&&!t&&(t=!0,clearTimeout(h),scrollTo(window.pageXOffset,r[0]),h=setTimeout(s,100)),r[2]?N&&(N.d(1),N=null):N||(N=de(),N.c(),N.m(c.parentNode,c)),y&160&&V(m,"show",r[7].trigger(0,r[5]>0)),y&160&&V(p,"show",r[7].trigger(1,r[5]>.2)),y&160&&V(k,"show",r[7].trigger(2,r[5]>.4)),y&160&&V(H,"show",r[7].trigger(3,r[5]>.6)),y&16&&j(n,"position",r[4]?"fixed":"relative",!1),y&11&&j(n,"opacity",1-Math.max(0,r[0]-1.8*r[1]-r[3])/r[3],!1),r[2]?f?f.p(r,y):(f=ge(r),f.c(),f.m(d.parentNode,d)):f&&(f.d(1),f=null)},i(r){a||(ee(P.$$.fragment,r),a=!0)},o(r){te(P.$$.fragment,r),a=!1},d(r){N&&N.d(r),r&&l(c),r&&l(n),se(P),r&&l($),f&&f.d(r),r&&l(d),b=!1,me(R)}}}function ke(e,t,s){let h,c,n,i;const m=["creators","creative","developers","designers","dreamers","creators","programmers"];let v,w;const p=new be;function _(){s(0,v=window.pageYOffset)}function I(){s(1,w=window.innerHeight)}return e.$$.update=()=>{e.$$.dirty&3&&s(5,h=v/w-1.085),e.$$.dirty&1&&v<10&&p.resetTriggers(),e.$$.dirty&3&&s(2,c=v-80<w*2),e.$$.dirty&7&&s(4,n=v-80>w&&c),e.$$.dirty&2&&s(3,i=w*.45)},[v,w,c,i,n,h,m,p,_,I]}class Ne extends fe{constructor(t){super(),ue(this,t,ke,Ie,he,{})}}function Oe(e){let t=!1,s=()=>{t=!1},h,c,n,i,m,v,w,p,_,I,P,Y,G,q,k,D,S,H,O,$,d,a,b,R,N;return re(e[3]),re(e[4]),Y=new we({props:{texts:qe}}),{c(){c=E("div"),n=A(),i=E("header"),m=E("div"),v=E("h1"),w=C("KotwOSS"),p=A(),_=E("p"),I=C("The "),P=E("span"),Q(Y.$$.fragment),G=C(" Github organization."),q=A(),k=E("div"),D=Z("svg"),S=Z("defs"),H=Z("clipPath"),O=Z("pattern"),$=Z("path"),d=Z("rect"),a=Z("rect"),this.h()},l(f){c=T(f,"DIV",{class:!0}),g(c).forEach(l),n=z(f),i=T(f,"HEADER",{class:!0});var r=g(i);m=T(r,"DIV",{class:!0});var y=g(m);v=T(y,"H1",{class:!0});var K=g(v);w=L(K,"KotwOSS"),K.forEach(l),p=z(y),_=T(y,"P",{class:!0});var X=g(_);I=L(X,"The "),P=T(X,"SPAN",{class:!0});var W=g(P);J(Y.$$.fragment,W),W.forEach(l),G=L(X," Github organization."),X.forEach(l),y.forEach(l),q=z(r),k=T(r,"DIV",{class:!0});var ie=g(k);D=F(ie,"svg",{xmlns:!0,height:!0,preserveAspectRatio:!0,class:!0});var U=g(D);S=F(U,"defs",{});var le=g(S);H=F(le,"clipPath",{id:!0});var ae=g(H);O=F(ae,"pattern",{id:!0,x:!0,y:!0,width:!0,height:!0,patternUnits:!0,patternTransform:!0});var ce=g(O);$=F(ce,"path",{transform:!0,d:!0,fill:!0}),g($).forEach(l),d=F(ce,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0}),g(d).forEach(l),ce.forEach(l),ae.forEach(l),le.forEach(l),a=F(U,"rect",{fill:!0,width:!0,height:!0}),g(a).forEach(l),U.forEach(l),ie.forEach(l),r.forEach(l),this.h()},h(){u(c,"class","spacer svelte-7mqsw3"),u(v,"class","header"),u(P,"class","svelte-7mqsw3"),u(_,"class","header"),u(m,"class","content svelte-7mqsw3"),u($,"transform","scale(2, 1)"),u($,"d","M314,200L628,200L628,0C584.226,0.093 548.349,22.651 471,100C393.651,177.349 354.713,200 314,200ZM0.472,0.001L0,0L0,200L314,200C273.287,200 238.424,181.424 157,100C75.894,18.894 40.609,0.146 0.472,0.001Z"),u($,"fill","currentColor"),u(d,"x","0"),u(d,"y","200"),u(d,"width","1256"),u(d,"height","200"),u(d,"fill","currentColor"),u(O,"id","Pattern"),u(O,"x","0"),u(O,"y","0"),u(O,"width","1256"),u(O,"height","400"),u(O,"patternUnits","userSpaceOnUse"),u(O,"patternTransform","scale(0.1)"),u(H,"id","svgPath"),u(a,"fill","url(#Pattern)"),u(a,"width","100%"),u(a,"height","40"),u(D,"xmlns","http://www.w3.org/2000/svg"),u(D,"height","40"),u(D,"preserveAspectRatio","none"),u(D,"class","svelte-7mqsw3"),u(k,"class","wrapper svelte-7mqsw3"),j(k,"top",e[0]-e[1]-40+"px",!1),u(i,"class","svelte-7mqsw3"),j(i,"opacity",1-(e[1]-e[2])/e[2],!1),j(i,"height",e[0]-e[1]+"px",!1)},m(f,r){M(f,c,r),M(f,n,r),M(f,i,r),o(i,m),o(m,v),o(v,w),o(m,p),o(m,_),o(_,I),o(_,P),x(Y,P,null),o(_,G),o(i,q),o(i,k),o(k,D),o(D,S),o(S,H),o(H,O),o(O,$),o(O,d),o(D,a),b=!0,R||(N=[B(window,"scroll",()=>{t=!0,clearTimeout(h),h=setTimeout(s,100),e[3]()}),B(window,"resize",e[4])],R=!0)},p(f,[r]){r&2&&!t&&(t=!0,clearTimeout(h),scrollTo(window.pageXOffset,f[1]),h=setTimeout(s,100)),r&3&&j(k,"top",f[0]-f[1]-40+"px",!1),r&6&&j(i,"opacity",1-(f[1]-f[2])/f[2],!1),r&3&&j(i,"height",f[0]-f[1]+"px",!1)},i(f){b||(ee(Y.$$.fragment,f),b=!0)},o(f){te(Y.$$.fragment,f),b=!1},d(f){f&&l(c),f&&l(n),f&&l(i),se(Y),R=!1,me(N)}}}function De(e,t,s){let h,c,n;function i(){s(1,c=window.pageYOffset)}function m(){s(0,n=window.innerHeight)}return e.$$.update=()=>{e.$$.dirty&1&&s(2,h=n*.45)},[n,c,h,i,m]}class He extends fe{constructor(t){super(),ue(this,t,De,Oe,he,{})}}const{window:oe}=ye;function ve(e){let t;return{c(){t=E("div"),this.h()},l(s){t=T(s,"DIV",{}),g(t).forEach(l),this.h()},h(){j(t,"height","100vh",!1)},m(s,h){M(s,t,h)},d(s){s&&l(t)}}}function _e(e){let t;return{c(){t=E("div"),this.h()},l(s){t=T(s,"DIV",{}),g(t).forEach(l),this.h()},h(){j(t,"height",e[3]?"200vh":"100vh",!1)},m(s,h){M(s,t,h)},p(s,h){h&8&&j(t,"height",s[3]?"200vh":"100vh",!1)},d(s){s&&l(t)}}}function je(e){let t=!1,s=()=>{t=!1},h,c,n,i,m,v,w,p,_,I,P,Y,G,q,k,D,S,H,O;re(e[7]),re(e[8]);let $=!e[2]&&ve(),d=e[2]&&_e(e);return{c(){$&&$.c(),c=A(),n=E("main"),i=E("h1"),m=C("Projects"),v=A(),w=E("p"),p=C("You can find our projects on here"),_=A(),I=E("div"),P=E("button"),Y=C("Projects"),G=A(),q=E("button"),k=C("Github"),D=A(),d&&d.c(),S=ne(),this.h()},l(a){$&&$.l(a),c=z(a),n=T(a,"MAIN",{class:!0});var b=g(n);i=T(b,"H1",{class:!0});var R=g(i);m=L(R,"Projects"),R.forEach(l),v=z(b),w=T(b,"P",{class:!0});var N=g(w);p=L(N,"You can find our projects on here"),N.forEach(l),_=z(b),I=T(b,"DIV",{class:!0});var f=g(I);P=T(f,"BUTTON",{class:!0});var r=g(P);Y=L(r,"Projects"),r.forEach(l),G=z(f),q=T(f,"BUTTON",{class:!0});var y=g(q);k=L(y,"Github"),y.forEach(l),f.forEach(l),b.forEach(l),D=z(a),d&&d.l(a),S=ne(),this.h()},h(){u(i,"class","svelte-l4uvob"),V(i,"show",e[5].trigger(0,e[4]>0)),u(w,"class","svelte-l4uvob"),V(w,"show",e[5].trigger(1,e[4]>.2)),u(P,"class","svelte-l4uvob"),V(P,"show",e[5].trigger(2,e[4]>.4)),u(q,"class","svelte-l4uvob"),V(q,"show",e[5].trigger(3,e[4]>.6)),u(I,"class","buttons svelte-l4uvob"),u(n,"class","svelte-l4uvob"),j(n,"position",e[3]?"fixed":"relative",!1)},m(a,b){$&&$.m(a,b),M(a,c,b),M(a,n,b),o(n,i),o(i,m),o(n,v),o(n,w),o(w,p),o(n,_),o(n,I),o(I,P),o(P,Y),o(I,G),o(I,q),o(q,k),M(a,D,b),d&&d.m(a,b),M(a,S,b),H||(O=[B(oe,"scroll",()=>{t=!0,clearTimeout(h),h=setTimeout(s,100),e[7]()}),B(oe,"resize",e[8]),B(P,"click",e[6]),B(q,"click",Se)],H=!0)},p(a,[b]){b&1&&!t&&(t=!0,clearTimeout(h),scrollTo(oe.pageXOffset,a[0]),h=setTimeout(s,100)),a[2]?$&&($.d(1),$=null):$||($=ve(),$.c(),$.m(c.parentNode,c)),b&48&&V(i,"show",a[5].trigger(0,a[4]>0)),b&48&&V(w,"show",a[5].trigger(1,a[4]>.2)),b&48&&V(P,"show",a[5].trigger(2,a[4]>.4)),b&48&&V(q,"show",a[5].trigger(3,a[4]>.6)),b&8&&j(n,"position",a[3]?"fixed":"relative",!1),a[2]?d?d.p(a,b):(d=_e(a),d.c(),d.m(S.parentNode,S)):d&&(d.d(1),d=null)},i:pe,o:pe,d(a){$&&$.d(a),a&&l(c),a&&l(n),a&&l(D),d&&d.d(a),a&&l(S),H=!1,me(O)}}}function Se(){window.location.assign("https://github.com/orgs/KotwOSS/repositories")}function Ve(e,t,s){let h,c,n,i,m;const v=new be;function w(){Ee("/projects")}function p(){s(0,i=oe.pageYOffset)}function _(){s(1,m=oe.innerHeight)}return e.$$.update=()=>{e.$$.dirty&3&&s(4,h=i/m-3.085),e.$$.dirty&3&&i<10+m*2&&v.resetTriggers(),e.$$.dirty&3&&s(2,c=i-80<m*4),e.$$.dirty&7&&s(3,n=i-80>m*3&&c)},[i,m,c,n,h,v,w,p,_]}class Ae extends fe{constructor(t){super(),ue(this,t,Ve,je,he,{})}}function ze(e){let t,s,h,c,n,i,m,v,w;return s=new Te({}),c=new He({}),i=new Ne({}),v=new Ae({}),{c(){t=E("main"),Q(s.$$.fragment),h=A(),Q(c.$$.fragment),n=A(),Q(i.$$.fragment),m=A(),Q(v.$$.fragment),this.h()},l(p){t=T(p,"MAIN",{class:!0});var _=g(t);J(s.$$.fragment,_),h=z(_),J(c.$$.fragment,_),n=z(_),J(i.$$.fragment,_),m=z(_),J(v.$$.fragment,_),_.forEach(l),this.h()},h(){u(t,"class","svelte-qlp5r")},m(p,_){M(p,t,_),x(s,t,null),o(t,h),x(c,t,null),o(t,n),x(i,t,null),o(t,m),x(v,t,null),w=!0},p:pe,i(p){w||(ee(s.$$.fragment,p),ee(c.$$.fragment,p),ee(i.$$.fragment,p),ee(v.$$.fragment,p),w=!0)},o(p){te(s.$$.fragment,p),te(c.$$.fragment,p),te(i.$$.fragment,p),te(v.$$.fragment,p),w=!1},d(p){p&&l(t),se(s),se(c),se(i),se(v)}}}class Re extends fe{constructor(t){super(),ue(this,t,null,ze,he,{})}}export{Re as default};
