function k(){}const rt=t=>t;function st(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function F(){return Object.create(null)}function x(t){t.forEach(J)}function K(t){return typeof t=="function"}function Pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function lt(t){return Object.keys(t).length===0}function ot(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Dt(t){let e;return ot(t,n=>e=n)(),e}function Lt(t,e,n,s){if(t){const r=Q(t,e,n,s);return t[0](r)}}function Q(t,e,n,s){return t[1]&&s?st(n.ctx.slice(),t[1](s(e))):n.ctx}function zt(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],i=Math.max(e.dirty.length,r.length);for(let o=0;o<i;o+=1)c[o]=e.dirty[o]|r[o];return c}return e.dirty|r}return e.dirty}function Bt(t,e,n,s,r,c){if(r){const i=Q(e,n,s,c);t.p(i,r)}}function qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}const U=typeof window!="undefined";let ct=U?()=>window.performance.now():()=>Date.now(),z=U?t=>requestAnimationFrame(t):k;const b=new Set;function V(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&z(V)}function ut(t){let e;return b.size===0&&z(V),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}let T=!1;function at(){T=!0}function ft(){T=!1}function dt(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function _t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const d=e[u];d.claim_order!==void 0&&l.push(d)}e=l}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,d=(r>0&&e[n[r]].claim_order<=u?r+1:dt(1,r,a=>e[n[a]].claim_order,u))-1;s[l]=n[d]+1;const f=d+1;n[f]=l,r=Math.max(f,r)}const c=[],i=[];let o=e.length-1;for(let l=n[r]+1;l!=0;l=s[l-1]){for(c.push(e[l-1]);o>=l;o--)i.push(e[o]);o--}for(;o>=0;o--)i.push(e[o]);c.reverse(),i.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<i.length;l++){for(;u<c.length&&i[l].claim_order>=c[u].claim_order;)u++;const d=u<c.length?c[u]:null;t.insertBefore(i[l],d)}}function ht(t,e){t.appendChild(e)}function W(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function mt(t){const e=X("style");return pt(W(t),e),e.sheet}function pt(t,e){ht(t.head||t,e)}function yt(t,e){if(T){for(_t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ft(t,e,n){T&&!n?yt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function gt(t){t.parentNode.removeChild(t)}function Ht(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function bt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function B(t){return document.createTextNode(t)}function It(){return B(" ")}function Gt(){return B("")}function Jt(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function xt(t){return Array.from(t.childNodes)}function wt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Y(t,e,n,s,r=!1){wt(t);const c=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const o=t[i];if(e(o)){const l=n(o);return l===void 0?t.splice(i,1):t[i]=l,r||(t.claim_info.last_index=i),o}}for(let i=t.claim_info.last_index-1;i>=0;i--){const o=t[i];if(e(o)){const l=n(o);return l===void 0?t.splice(i,1):t[i]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,o}}return s()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function Z(t,e,n,s){return Y(t,r=>r.nodeName===e,r=>{const c=[];for(let i=0;i<r.attributes.length;i++){const o=r.attributes[i];n[o.name]||c.push(o.name)}c.forEach(i=>r.removeAttribute(i))},()=>s(e))}function Qt(t,e,n){return Z(t,e,n,X)}function Ut(t,e,n){return Z(t,e,n,bt)}function $t(t,e){return Y(t,n=>n.nodeType===3,n=>{const s=""+e;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>B(e),!0)}function Vt(t){return $t(t," ")}function Wt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Xt(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function Yt(t,e,n){t.classList[n?"add":"remove"](e)}function vt(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}const S=new Map;let M=0;function Et(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function kt(t,e){const n={stylesheet:mt(e),rules:{}};return S.set(t,n),n}function H(t,e,n,s,r,c,i,o=0){const l=16.666/s;let u=`{
`;for(let p=0;p<=1;p+=l){const g=e+(n-e)*c(p);u+=p*100+`%{${i(g,1-g)}}
`}const d=u+`100% {${i(n,1-n)}}
}`,f=`__svelte_${Et(d)}_${o}`,a=W(t),{stylesheet:_,rules:h}=S.get(a)||kt(a,t);h[f]||(h[f]=!0,_.insertRule(`@keyframes ${f} ${d}`,_.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${s}ms linear ${r}ms 1 both`,M+=1,f}function Nt(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-s.length;r&&(t.style.animation=s.join(", "),M-=r,M||jt())}function jt(){z(()=>{M||(S.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),S.clear())})}let E;function v(t){E=t}function q(){if(!E)throw new Error("Function called outside component initialization");return E}function Zt(t){q().$$.on_mount.push(t)}function te(t){q().$$.after_update.push(t)}function ee(t,e){return q().$$.context.set(t,e),e}const $=[],I=[],A=[],G=[],tt=Promise.resolve();let L=!1;function et(){L||(L=!0,tt.then(nt))}function ne(){return et(),tt}function R(t){A.push(t)}const P=new Set;let j=0;function nt(){const t=E;do{for(;j<$.length;){const e=$[j];j++,v(e),At(e.$$)}for(v(null),$.length=0,j=0;I.length;)I.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];P.has(n)||(P.add(n),n())}A.length=0}while($.length);for(;G.length;)G.pop()();L=!1,P.clear(),v(t)}function At(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}let w;function Ct(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function D(t,e,n){t.dispatchEvent(vt(`${e?"intro":"outro"}${n}`))}const C=new Set;let m;function ie(){m={r:0,c:[],p:m}}function re(){m.r||x(m.c),m=m.p}function St(t,e){t&&t.i&&(C.delete(t),t.i(e))}function se(t,e,n,s){if(t&&t.o){if(C.has(t))return;C.add(t),m.c.push(()=>{C.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const Mt={duration:0};function le(t,e,n,s){let r=e(t,n),c=s?0:1,i=null,o=null,l=null;function u(){l&&Nt(t,l)}function d(a,_){const h=a.b-c;return _*=Math.abs(h),{a:c,b:a.b,d:h,duration:_,start:a.start,end:a.start+_,group:a.group}}function f(a){const{delay:_=0,duration:h=300,easing:y=rt,tick:p=k,css:g}=r||Mt,O={start:ct()+_,b:a};a||(O.group=m,m.r+=1),i||o?o=O:(g&&(u(),l=H(t,c,a,h,_,y,g)),a&&p(0,1),i=d(O,h),R(()=>D(t,a,"start")),ut(N=>{if(o&&N>o.start&&(i=d(o,h),o=null,D(t,i.b,"start"),g&&(u(),l=H(t,c,i.b,i.duration,0,y,r.css))),i){if(N>=i.end)p(c=i.b,1-c),D(t,i.b,"end"),o||(i.b?u():--i.group.r||x(i.group.c)),i=null;else if(N>=i.start){const it=N-i.start;c=i.a+i.d*y(it/i.duration),p(c,1-c)}}return!!(i||o)}))}return{run(a){K(r)?Ct().then(()=>{r=r(),f(a)}):f(a)},end(){u(),i=o=null}}}const oe=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function ce(t,e){const n={},s={},r={$$scope:1};let c=t.length;for(;c--;){const i=t[c],o=e[c];if(o){for(const l in i)l in o||(s[l]=1);for(const l in o)r[l]||(n[l]=o[l],r[l]=1);t[c]=o}else for(const l in i)r[l]=1}for(const i in s)i in n||(n[i]=void 0);return n}function ue(t){return typeof t=="object"&&t!==null?t:{}}function ae(t){t&&t.c()}function fe(t,e){t&&t.l(e)}function Rt(t,e,n,s){const{fragment:r,on_mount:c,on_destroy:i,after_update:o}=t.$$;r&&r.m(e,n),s||R(()=>{const l=c.map(J).filter(K);i?i.push(...l):x(l),t.$$.on_mount=[]}),o.forEach(R)}function Tt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&($.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function de(t,e,n,s,r,c,i,o=[-1]){const l=E;v(t);const u=t.$$={fragment:null,ctx:null,props:c,update:k,not_equal:r,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:F(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};i&&i(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(f,a,..._)=>{const h=_.length?_[0]:a;return u.ctx&&r(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),d&&Ot(t,f)),a}):[],u.update(),d=!0,x(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){at();const f=xt(e.target);u.fragment&&u.fragment.l(f),f.forEach(gt)}else u.fragment&&u.fragment.c();e.intro&&St(t.$$.fragment),Rt(t,e.target,e.anchor,e.customElement),ft(),nt()}v(l)}class _e{$destroy(){Tt(this,1),this.$destroy=k}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ue as A,Tt as B,st as C,ne as D,k as E,yt as F,Jt as G,Ht as H,Lt as I,Bt as J,qt as K,zt as L,Yt as M,Dt as N,R as O,x as P,bt as Q,Ut as R,_e as S,oe as T,rt as U,le as V,xt as a,Kt as b,Qt as c,gt as d,X as e,Xt as f,Ft as g,$t as h,de as i,Wt as j,It as k,Gt as l,Vt as m,ie as n,se as o,re as p,St as q,ee as r,Pt as s,B as t,te as u,Zt as v,ae as w,fe as x,Rt as y,ce as z};
