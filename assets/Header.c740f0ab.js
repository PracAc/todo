import{c as A,h as Ce,a as $t,Q as Mt,b as Pt,d as vt,e as Ze,f as Bt,R as xe}from"./QBtn.9c3c5436.js";import{c as f,h as C,r as q,z as ft,o as ve,v as ie,A as Ye,q as ze,g as Z,B as Ue,i as Ge,C as I,D as we,w as L,P as Ot,E as se,G as Vt,H as be,I as $e,J as et,K as Me,L as Xe,M as Pe,N as Et,O as Ht,Q as Qt,R as Rt,x as ne,S as ht,U as Dt,n as ge,a as At,_ as Ft,m as It,V as Nt,W as D,X as K,Y as g,d as p,Z as J,$ as Be,a0 as Oe,F as Ve,a1 as Wt,a2 as te,a3 as Ee}from"./index.0094b0f1.js";import{u as jt,a as Ut,b as Xt,g as Yt,c as Gt,d as Kt,e as mt,f as bt,s as He,h as tt,i as Jt,j as Zt,k as ea,l as ta,m as aa,n as la,o as Qe,Q as pe,p as Re,q as De,r as Ae,t as Fe,v as X,w as ae}from"./use-timeout.c94f9e55.js";import{oTodosinDB as Ie,database as le}from"./firebase.1a555a70.js";import{M as at,R as oe,U as ye,J as lt}from"./index.esm2017.7ab66dc7.js";var oa=A({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const n=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>C("div",{class:n.value},Ce(o.default))}}),na=A({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const n=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>C("div",{class:n.value,role:"toolbar"},Ce(o.default))}});function ia(){const e=q(!ft.value);return e.value===!1&&ve(()=>{e.value=!0}),e}const gt=typeof ResizeObserver!="undefined",ot=gt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var fe=A({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,c,t={width:-1,height:-1};function l(s){s===!0||e.debounce===0||e.debounce==="0"?i():n===null&&(n=setTimeout(i,e.debounce))}function i(){if(n!==null&&(clearTimeout(n),n=null),c){const{offsetWidth:s,offsetHeight:v}=c;(s!==t.width||v!==t.height)&&(t={width:s,height:v},o("resize",t))}}const{proxy:a}=Z();if(gt===!0){let s;const v=u=>{c=a.$el.parentNode,c?(s=new ResizeObserver(l),s.observe(c),i()):u!==!0&&ze(()=>{v(!0)})};return ve(()=>{v()}),ie(()=>{n!==null&&clearTimeout(n),s!==void 0&&(s.disconnect!==void 0?s.disconnect():c&&s.unobserve(c))}),Ye}else{let u=function(){n!==null&&(clearTimeout(n),n=null),v!==void 0&&(v.removeEventListener!==void 0&&v.removeEventListener("resize",l,Ue.passive),v=void 0)},T=function(){u(),c&&c.contentDocument&&(v=c.contentDocument.defaultView,v.addEventListener("resize",l,Ue.passive),i())};const s=ia();let v;return ve(()=>{ze(()=>{c=a.$el,c&&T()})}),ie(u),a.trigger=l,()=>{if(s.value===!0)return C("object",{style:ot.style,tabindex:-1,type:"text/html",data:ot.url,"aria-hidden":"true",onLoad:T})}}}}),ra=A({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:c}}=Z(),t=Ge(we,I);if(t===I)return console.error("QHeader needs to be child of QLayout"),I;const l=q(parseInt(e.heightHint,10)),i=q(!0),a=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||c.platform.is.ios&&t.isContainer.value===!0),s=f(()=>{if(e.modelValue!==!0)return 0;if(a.value===!0)return i.value===!0?l.value:0;const h=l.value-t.scroll.value.position;return h>0?h:0}),v=f(()=>e.modelValue!==!0||a.value===!0&&i.value!==!0),u=f(()=>e.modelValue===!0&&v.value===!0&&e.reveal===!0),T=f(()=>"q-header q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(v.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),S=f(()=>{const h=t.rows.value.top,M={};return h[0]==="l"&&t.left.space===!0&&(M[c.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),h[2]==="r"&&t.right.space===!0&&(M[c.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),M});function b(h,M){t.update("header",h,M)}function y(h,M){h.value!==M&&(h.value=M)}function B({height:h}){y(l,h),b("size",h)}function $(h){u.value===!0&&y(i,!0),n("focusin",h)}L(()=>e.modelValue,h=>{b("space",h),y(i,!0),t.animate()}),L(s,h=>{b("offset",h)}),L(()=>e.reveal,h=>{h===!1&&y(i,e.modelValue)}),L(i,h=>{t.animate(),n("reveal",h)}),L(t.scroll,h=>{e.reveal===!0&&y(i,h.direction==="up"||h.position<=e.revealOffset||h.position-h.inflectionPoint<100)});const k={};return t.instances.header=k,e.modelValue===!0&&b("size",l.value),b("space",e.modelValue),b("offset",s.value),ie(()=>{t.instances.header===k&&(t.instances.header=void 0,b("size",0),b("offset",0),b("space",!1))}),()=>{const h=$t(o.default,[]);return e.elevated===!0&&h.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),h.push(C(fe,{debounce:0,onResize:B})),C("header",{class:T.value,style:S.value,onFocusin:$},h)}}});const ua=C("div",{key:"svg",class:"q-checkbox__bg absolute"},[C("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[C("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),C("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var ce=A({name:"QCheckbox",props:jt,emits:Ut,setup(e){function o(n,c){const t=f(()=>(n.value===!0?e.checkedIcon:c.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>t.value!==null?[C("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[C(Mt,{class:"q-checkbox__icon",name:t.value})])]:[ua]}return Xt("checkbox",o)}});const{passive:nt}=Ue,sa=["both","horizontal","vertical"];var pt=A({name:"QScrollObserver",props:{axis:{type:String,validator:e=>sa.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let c=null,t,l;L(()=>e.scrollTarget,()=>{s(),a()});function i(){c!==null&&c();const T=Math.max(0,Gt(t)),S=Kt(t),b={top:T-n.position.top,left:S-n.position.left};if(e.axis==="vertical"&&b.top===0||e.axis==="horizontal"&&b.left===0)return;const y=Math.abs(b.top)>=Math.abs(b.left)?b.top<0?"up":"down":b.left<0?"left":"right";n.position={top:T,left:S},n.directionChanged=n.direction!==y,n.delta=b,n.directionChanged===!0&&(n.direction=y,n.inflectionPoint=n.position),o("scroll",{...n})}function a(){t=Yt(l,e.scrollTarget),t.addEventListener("scroll",v,nt),v(!0)}function s(){t!==void 0&&(t.removeEventListener("scroll",v,nt),t=void 0)}function v(T){if(T===!0||e.debounce===0||e.debounce==="0")i();else if(c===null){const[S,b]=e.debounce?[setTimeout(i,e.debounce),clearTimeout]:[requestAnimationFrame(i),cancelAnimationFrame];c=()=>{b(S),c=null}}}const{proxy:u}=Z();return L(()=>u.$q.lang.rtl,i),ve(()=>{l=u.$el.parentNode,a()}),ie(()=>{c!==null&&c(),s()}),Object.assign(u,{trigger:v,getPosition:()=>n}),Ye}});const Ke={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},ca=Object.keys(Ke);Ke.all=!0;function it(e){const o={};for(const n of ca)e[n]===!0&&(o[n]=!0);return Object.keys(o).length===0?Ke:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const da=["INPUT","TEXTAREA"];function rt(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&da.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function va(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Ot.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Ne(e,o,n){const c=Xe(e);let t,l=c.left-o.event.x,i=c.top-o.event.y,a=Math.abs(l),s=Math.abs(i);const v=o.direction;v.horizontal===!0&&v.vertical!==!0?t=l<0?"left":"right":v.horizontal!==!0&&v.vertical===!0?t=i<0?"up":"down":v.up===!0&&i<0?(t="up",a>s&&(v.left===!0&&l<0?t="left":v.right===!0&&l>0&&(t="right"))):v.down===!0&&i>0?(t="down",a>s&&(v.left===!0&&l<0?t="left":v.right===!0&&l>0&&(t="right"))):v.left===!0&&l<0?(t="left",a<s&&(v.up===!0&&i<0?t="up":v.down===!0&&i>0&&(t="down"))):v.right===!0&&l>0&&(t="right",a<s&&(v.up===!0&&i<0?t="up":v.down===!0&&i>0&&(t="down")));let u=!1;if(t===void 0&&n===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,u=!0,t==="left"||t==="right"?(c.left-=l,a=0,l=0):(c.top-=i,s=0,i=0)}return{synthetic:u,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:c,direction:t,isFirst:o.event.isFirst,isFinal:n===!0,duration:Date.now()-o.event.time,distance:{x:a,y:s},offset:{x:l,y:i},delta:{x:c.left-o.event.lastX,y:c.top-o.event.lastY}}}}let fa=0;var de=Pt({name:"touch-pan",beforeMount(e,{value:o,modifiers:n}){if(n.mouse!==!0&&se.has.touch!==!0)return;function c(l,i){n.mouse===!0&&i===!0?Et(l):(n.stop===!0&&Me(l),n.prevent===!0&&et(l))}const t={uid:"qvtp_"+fa++,handler:o,modifiers:n,direction:it(n),noop:Ye,mouseStart(l){rt(l,t)&&Vt(l)&&(be(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(rt(l,t)){const i=l.target;be(t,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,i){if(se.is.firefox===!0&&$e(e,!0),t.lastEvt=l,i===!0||n.stop===!0){if(t.direction.all!==!0&&(i!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const v=l.type.indexOf("mouse")>-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&et(v),l.cancelBubble===!0&&Me(v),Object.assign(v,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:v}}Me(l)}const{left:a,top:s}=Xe(l);t.event={x:a,y:s,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:s}},move(l){if(t.event===void 0)return;const i=Xe(l),a=i.left-t.event.x,s=i.top-t.event.y;if(a===0&&s===0)return;t.lastEvt=l;const v=t.event.mouse===!0,u=()=>{c(l,v);let b;n.preserveCursor!==!0&&n.preservecursor!==!0&&(b=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),v===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),va(),t.styleCleanup=y=>{if(t.styleCleanup=void 0,b!==void 0&&(document.documentElement.style.cursor=b),document.body.classList.remove("non-selectable"),v===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};y!==void 0?setTimeout(()=>{B(),y()},50):B()}else y!==void 0&&y()}};if(t.event.detected===!0){t.event.isFirst!==!0&&c(l,t.event.mouse);const{payload:b,synthetic:y}=Ne(l,t,!1);b!==void 0&&(t.handler(b)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&u(),t.event.lastX=b.position.left,t.event.lastY=b.position.top,t.event.lastDir=y===!0?void 0:b.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||v===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){u(),t.event.detected=!0,t.move(l);return}const T=Math.abs(a),S=Math.abs(s);T!==S&&(t.direction.horizontal===!0&&T>S||t.direction.vertical===!0&&T<S||t.direction.up===!0&&T<S&&s<0||t.direction.down===!0&&T<S&&s>0||t.direction.left===!0&&T>S&&a<0||t.direction.right===!0&&T>S&&a>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,i){if(t.event!==void 0){if(Pe(t,"temp"),se.is.firefox===!0&&$e(e,!1),i===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Ne(l===void 0?t.lastEvt:l,t).payload);const{payload:a}=Ne(l===void 0?t.lastEvt:l,t,!0),s=()=>{t.handler(a)};t.styleCleanup!==void 0?t.styleCleanup(s):s()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const l=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";be(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}se.has.touch===!0&&be(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const n=e.__qtouchpan;n!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&n.end(),n.handler=o.value),n.direction=it(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),Pe(o,"main"),Pe(o,"temp"),se.is.firefox===!0&&$e(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function Y(e,o,n){return n<=o?o:Math.min(n,Math.max(o,e))}const ut=["vertical","horizontal"],We={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},st={prevent:!0,mouse:!0,mouseAllDir:!0},ct=e=>e>=250?50:Math.ceil(e/5);var je=A({name:"QScrollArea",props:{...mt,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:o,emit:n}){const c=q(!1),t=q(!1),l=q(!1),i={vertical:q(0),horizontal:q(0)},a={vertical:{ref:q(null),position:q(0),size:q(0)},horizontal:{ref:q(null),position:q(0),size:q(0)}},{proxy:s}=Z(),v=bt(e,s.$q);let u=null,T;const S=q(null),b=f(()=>"q-scrollarea"+(v.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=f(()=>{const d=a.vertical.size.value-i.vertical.value;if(d<=0)return 0;const m=Y(a.vertical.position.value/d,0,1);return Math.round(m*1e4)/1e4}),a.vertical.thumbHidden=f(()=>(e.visible===null?l.value:e.visible)!==!0&&c.value===!1&&t.value===!1||a.vertical.size.value<=i.vertical.value+1),a.vertical.thumbStart=f(()=>a.vertical.percentage.value*(i.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=f(()=>Math.round(Y(i.vertical.value*i.vertical.value/a.vertical.size.value,ct(i.vertical.value),i.vertical.value))),a.vertical.style=f(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=f(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=f(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=f(()=>{const d=a.horizontal.size.value-i.horizontal.value;if(d<=0)return 0;const m=Y(Math.abs(a.horizontal.position.value)/d,0,1);return Math.round(m*1e4)/1e4}),a.horizontal.thumbHidden=f(()=>(e.visible===null?l.value:e.visible)!==!0&&c.value===!1&&t.value===!1||a.horizontal.size.value<=i.horizontal.value+1),a.horizontal.thumbStart=f(()=>a.horizontal.percentage.value*(i.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=f(()=>Math.round(Y(i.horizontal.value*i.horizontal.value/a.horizontal.size.value,ct(i.horizontal.value),i.horizontal.value))),a.horizontal.style=f(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[s.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=f(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=f(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const y=f(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),B=[[de,d=>{R(d,"vertical")},void 0,{vertical:!0,...st}]],$=[[de,d=>{R(d,"horizontal")},void 0,{horizontal:!0,...st}]];function k(){const d={};return ut.forEach(m=>{const _=a[m];d[m+"Position"]=_.position.value,d[m+"Percentage"]=_.percentage.value,d[m+"Size"]=_.size.value,d[m+"ContainerSize"]=i[m].value}),d}const h=Ht(()=>{const d=k();d.ref=s,n("scroll",d)},0);function M(d,m,_){if(ut.includes(d)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(d==="vertical"?tt:He)(S.value,m,_)}function z({height:d,width:m}){let _=!1;i.vertical.value!==d&&(i.vertical.value=d,_=!0),i.horizontal.value!==m&&(i.horizontal.value=m,_=!0),_===!0&&Q()}function x({position:d}){let m=!1;a.vertical.position.value!==d.top&&(a.vertical.position.value=d.top,m=!0),a.horizontal.position.value!==d.left&&(a.horizontal.position.value=d.left,m=!0),m===!0&&Q()}function P({height:d,width:m}){a.horizontal.size.value!==m&&(a.horizontal.size.value=m,Q()),a.vertical.size.value!==d&&(a.vertical.size.value=d,Q())}function R(d,m){const _=a[m];if(d.isFirst===!0){if(_.thumbHidden.value===!0)return;T=_.position.value,t.value=!0}else if(t.value!==!0)return;d.isFinal===!0&&(t.value=!1);const V=We[m],ee=i[m].value,Se=(_.size.value-ee)/(ee-_.thumbSize.value),ke=d.distance[V.dist],he=T+(d.direction===V.dir?1:-1)*ke*Se;re(he,m)}function N(d,m){const _=a[m];if(_.thumbHidden.value!==!0){const V=d[We[m].offset];if(V<_.thumbStart.value||V>_.thumbStart.value+_.thumbSize.value){const ee=V-_.thumbSize.value/2;re(ee/i[m].value*_.size.value,m)}_.ref.value!==null&&_.ref.value.dispatchEvent(new MouseEvent(d.type,d))}}function F(d){N(d,"vertical")}function H(d){N(d,"horizontal")}function Q(){c.value=!0,u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,c.value=!1},e.delay),e.onScroll!==void 0&&h()}function re(d,m){S.value[We[m].scroll]=d}function W(){l.value=!0}function ue(){l.value=!1}let G=null;return L(()=>s.$q.lang.rtl,d=>{S.value!==null&&He(S.value,Math.abs(a.horizontal.position.value)*(d===!0?-1:1))}),Qt(()=>{G={top:a.vertical.position.value,left:a.horizontal.position.value}}),Rt(()=>{if(G===null)return;const d=S.value;d!==null&&(He(d,G.left),tt(d,G.top))}),ie(h.cancel),Object.assign(s,{getScrollTarget:()=>S.value,getScroll:k,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:M,setScrollPercentage(d,m,_){M(d,m*(a[d].size.value-i[d].value)*(d==="horizontal"&&s.$q.lang.rtl===!0?-1:1),_)}}),()=>C("div",{class:b.value,onMouseenter:W,onMouseleave:ue},[C("div",{ref:S,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[C("div",{class:"q-scrollarea__content absolute",style:y.value},vt(o.default,[C(fe,{debounce:0,onResize:P})])),C(pt,{axis:"both",onScroll:x})]),C(fe,{debounce:0,onResize:z}),C("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:F}),C("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:H}),ne(C("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),B),ne(C("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),$)])}});const dt=150;var ha=A({name:"QDrawer",inheritAttrs:!1,props:{...Jt,...mt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Zt,"onLayout","miniState"],setup(e,{slots:o,emit:n,attrs:c}){const t=Z(),{proxy:{$q:l}}=t,i=bt(e,l),{preventBodyScroll:a}=la(),{registerTimeout:s,removeTimeout:v}=ea(),u=Ge(we,I);if(u===I)return console.error("QDrawer needs to be child of QLayout"),I;let T,S=null,b;const y=q(e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint),B=f(()=>e.mini===!0&&y.value!==!0),$=f(()=>B.value===!0?e.miniWidth:e.width),k=q(e.showIfAbove===!0&&y.value===!1?!0:e.modelValue===!0),h=f(()=>e.persistent!==!0&&(y.value===!0||ee.value===!0));function M(r,w){if(R(),r!==!1&&u.animate(),E(0),y.value===!0){const O=u.instances[d.value];O!==void 0&&O.belowBreakpoint===!0&&O.hide(!1),j(1),u.isContainer.value!==!0&&a(!0)}else j(0),r!==!1&&_e(!1);s(()=>{r!==!1&&_e(!0),w!==!0&&n("show",r)},dt)}function z(r,w){N(),r!==!1&&u.animate(),j(0),E(Q.value*$.value),Te(),w!==!0?s(()=>{n("hide",r)},dt):v()}const{show:x,hide:P}=ta({showing:k,hideOnRouteChange:h,handleShow:M,handleHide:z}),{addToHistory:R,removeFromHistory:N}=aa(k,P,h),F={belowBreakpoint:y,hide:P},H=f(()=>e.side==="right"),Q=f(()=>(l.lang.rtl===!0?-1:1)*(H.value===!0?1:-1)),re=q(0),W=q(!1),ue=q(!1),G=q($.value*Q.value),d=f(()=>H.value===!0?"left":"right"),m=f(()=>k.value===!0&&y.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:$.value:0),_=f(()=>e.overlay===!0||e.miniToOverlay===!0||u.view.value.indexOf(H.value?"R":"L")>-1||l.platform.is.ios===!0&&u.isContainer.value===!0),V=f(()=>e.overlay===!1&&k.value===!0&&y.value===!1),ee=f(()=>e.overlay===!0&&k.value===!0&&y.value===!1),Se=f(()=>"fullscreen q-drawer__backdrop"+(k.value===!1&&W.value===!1?" hidden":"")),ke=f(()=>({backgroundColor:`rgba(0,0,0,${re.value*.4})`})),he=f(()=>H.value===!0?u.rows.value.top[2]==="r":u.rows.value.top[0]==="l"),yt=f(()=>H.value===!0?u.rows.value.bottom[2]==="r":u.rows.value.bottom[0]==="l"),zt=f(()=>{const r={};return u.header.space===!0&&he.value===!1&&(_.value===!0?r.top=`${u.header.offset}px`:u.header.space===!0&&(r.top=`${u.header.size}px`)),u.footer.space===!0&&yt.value===!1&&(_.value===!0?r.bottom=`${u.footer.offset}px`:u.footer.space===!0&&(r.bottom=`${u.footer.size}px`)),r}),Ct=f(()=>{const r={width:`${$.value}px`,transform:`translateX(${G.value}px)`};return y.value===!0?r:Object.assign(r,zt.value)}),wt=f(()=>"q-drawer__content fit "+(u.isContainer.value!==!0?"scroll":"overflow-auto")),St=f(()=>`q-drawer q-drawer--${e.side}`+(ue.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(i.value===!0?" q-drawer--dark q-dark":"")+(W.value===!0?" no-transition":k.value===!0?"":" q-layout--prevent-focus")+(y.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(_.value===!0||V.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(he.value===!0?" q-drawer--top-padding":""))),kt=f(()=>{const r=l.lang.rtl===!0?e.side:d.value;return[[de,Lt,void 0,{[r]:!0,mouse:!0}]]}),qt=f(()=>{const r=l.lang.rtl===!0?d.value:e.side;return[[de,Je,void 0,{[r]:!0,mouse:!0}]]}),_t=f(()=>{const r=l.lang.rtl===!0?d.value:e.side;return[[de,Je,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function qe(){xt(y,e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint)}L(y,r=>{r===!0?(T=k.value,k.value===!0&&P(!1)):e.overlay===!1&&e.behavior!=="mobile"&&T!==!1&&(k.value===!0?(E(0),j(0),Te()):x(!1))}),L(()=>e.side,(r,w)=>{u.instances[w]===F&&(u.instances[w]=void 0,u[w].space=!1,u[w].offset=0),u.instances[r]=F,u[r].size=$.value,u[r].space=V.value,u[r].offset=m.value}),L(u.totalWidth,()=>{(u.isContainer.value===!0||document.qScrollPrevented!==!0)&&qe()}),L(()=>e.behavior+e.breakpoint,qe),L(u.isContainer,r=>{k.value===!0&&a(r!==!0),r===!0&&qe()}),L(u.scrollbarWidth,()=>{E(k.value===!0?0:void 0)}),L(m,r=>{U("offset",r)}),L(V,r=>{n("onLayout",r),U("space",r)}),L(H,()=>{E()}),L($,r=>{E(),Le(e.miniToOverlay,r)}),L(()=>e.miniToOverlay,r=>{Le(r,$.value)}),L(()=>l.lang.rtl,()=>{E()}),L(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Tt(),u.animate())}),L(B,r=>{n("miniState",r)});function E(r){r===void 0?ze(()=>{r=k.value===!0?0:$.value,E(Q.value*r)}):(u.isContainer.value===!0&&H.value===!0&&(y.value===!0||Math.abs(r)===$.value)&&(r+=Q.value*u.scrollbarWidth.value),G.value=r)}function j(r){re.value=r}function _e(r){const w=r===!0?"remove":u.isContainer.value!==!0?"add":"";w!==""&&document.body.classList[w]("q-body--drawer-toggle")}function Tt(){S!==null&&clearTimeout(S),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ue.value=!0,S=setTimeout(()=>{S=null,ue.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Lt(r){if(k.value!==!1)return;const w=$.value,O=Y(r.distance.x,0,w);if(r.isFinal===!0){O>=Math.min(75,w)===!0?x():(u.animate(),j(0),E(Q.value*w)),W.value=!1;return}E((l.lang.rtl===!0?H.value!==!0:H.value)?Math.max(w-O,0):Math.min(0,O-w)),j(Y(O/w,0,1)),r.isFirst===!0&&(W.value=!0)}function Je(r){if(k.value!==!0)return;const w=$.value,O=r.direction===e.side,me=(l.lang.rtl===!0?O!==!0:O)?Y(r.distance.x,0,w):0;if(r.isFinal===!0){Math.abs(me)<Math.min(75,w)===!0?(u.animate(),j(1),E(0)):P(),W.value=!1;return}E(Q.value*me),j(Y(1-me/w,0,1)),r.isFirst===!0&&(W.value=!0)}function Te(){a(!1),_e(!0)}function U(r,w){u.update(e.side,r,w)}function xt(r,w){r.value!==w&&(r.value=w)}function Le(r,w){U("size",r===!0?e.miniWidth:w)}return u.instances[e.side]=F,Le(e.miniToOverlay,$.value),U("space",V.value),U("offset",m.value),e.showIfAbove===!0&&e.modelValue!==!0&&k.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),ve(()=>{n("onLayout",V.value),n("miniState",B.value),T=e.showIfAbove===!0;const r=()=>{(k.value===!0?M:z)(!1,!0)};if(u.totalWidth.value!==0){ze(r);return}b=L(u.totalWidth,()=>{b(),b=void 0,k.value===!1&&e.showIfAbove===!0&&y.value===!1?x(!1):r()})}),ie(()=>{b!==void 0&&b(),S!==null&&(clearTimeout(S),S=null),k.value===!0&&Te(),u.instances[e.side]===F&&(u.instances[e.side]=void 0,U("size",0),U("offset",0),U("space",!1))}),()=>{const r=[];y.value===!0&&(e.noSwipeOpen===!1&&r.push(ne(C("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),kt.value)),r.push(Ze("div",{ref:"backdrop",class:Se.value,style:ke.value,"aria-hidden":"true",onClick:P},void 0,"backdrop",e.noSwipeBackdrop!==!0&&k.value===!0,()=>_t.value)));const w=B.value===!0&&o.mini!==void 0,O=[C("div",{...c,key:""+w,class:[wt.value,c.class]},w===!0?o.mini():Ce(o.default))];return e.elevated===!0&&k.value===!0&&O.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Ze("aside",{ref:"content",class:St.value,style:Ct.value},O,"contentclose",e.noSwipeClose!==!0&&y.value===!0,()=>qt.value)),C("div",{class:"q-drawer-container"},r)}}}),ma=A({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=Z(),c=Ge(we,I);if(c===I)return console.error("QPageContainer needs to be child of QLayout"),I;ht(Dt,!0);const t=f(()=>{const l={};return c.header.space===!0&&(l.paddingTop=`${c.header.size}px`),c.right.space===!0&&(l[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${c.right.size}px`),c.footer.space===!0&&(l.paddingBottom=`${c.footer.size}px`),c.left.space===!0&&(l[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${c.left.size}px`),l});return()=>C("div",{class:"q-page-container",style:t.value},Ce(o.default))}}),ba=A({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:c}}=Z(),t=q(null),l=q(c.screen.height),i=q(e.container===!0?0:c.screen.width),a=q({position:0,direction:"down",inflectionPoint:0}),s=q(0),v=q(ft.value===!0?0:Qe()),u=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),T=f(()=>e.container===!1?{minHeight:c.screen.height+"px"}:null),S=f(()=>v.value!==0?{[c.lang.rtl===!0?"left":"right"]:`${v.value}px`}:null),b=f(()=>v.value!==0?{[c.lang.rtl===!0?"right":"left"]:0,[c.lang.rtl===!0?"left":"right"]:`-${v.value}px`,width:`calc(100% + ${v.value}px)`}:null);function y(z){if(e.container===!0||document.qScrollPrevented!==!0){const x={position:z.position.top,direction:z.direction,directionChanged:z.directionChanged,inflectionPoint:z.inflectionPoint.top,delta:z.delta.top};a.value=x,e.onScroll!==void 0&&n("scroll",x)}}function B(z){const{height:x,width:P}=z;let R=!1;l.value!==x&&(R=!0,l.value=x,e.onScrollHeight!==void 0&&n("scrollHeight",x),k()),i.value!==P&&(R=!0,i.value=P),R===!0&&e.onResize!==void 0&&n("resize",z)}function $({height:z}){s.value!==z&&(s.value=z,k())}function k(){if(e.container===!0){const z=l.value>s.value?Qe():0;v.value!==z&&(v.value=z)}}let h=null;const M={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:l,containerHeight:s,scrollbarWidth:v,totalWidth:f(()=>i.value+v.value),rows:f(()=>{const z=e.view.toLowerCase().split(" ");return{top:z[0].split(""),middle:z[1].split(""),bottom:z[2].split("")}}),header:ge({size:0,offset:0,space:!1}),right:ge({size:300,offset:0,space:!1}),footer:ge({size:0,offset:0,space:!1}),left:ge({size:300,offset:0,space:!1}),scroll:a,animate(){h!==null?clearTimeout(h):document.body.classList.add("q-body--layout-animate"),h=setTimeout(()=>{h=null,document.body.classList.remove("q-body--layout-animate")},155)},update(z,x,P){M[z][x]=P}};if(ht(we,M),Qe()>0){let P=function(){z=null,x.classList.remove("hide-scrollbar")},R=function(){if(z===null){if(x.scrollHeight>c.screen.height)return;x.classList.add("hide-scrollbar")}else clearTimeout(z);z=setTimeout(P,300)},N=function(F){z!==null&&F==="remove"&&(clearTimeout(z),P()),window[`${F}EventListener`]("resize",R)},z=null;const x=document.body;L(()=>e.container!==!0?"add":"remove",N),e.container!==!0&&N("add"),At(()=>{N("remove")})}return()=>{const z=vt(o.default,[C(pt,{onScroll:y}),C(fe,{onResize:B})]),x=C("div",{class:u.value,style:T.value,ref:e.container===!0?void 0:t,tabindex:-1},z);return e.container===!0?C("div",{class:"q-layout-container overflow-hidden",ref:t},[C(fe,{onResize:$}),C("div",{class:"absolute-full",style:S.value},[C("div",{class:"scroll",style:b.value},[x])])]):x}}});const ga=It({name:"MainLayout",data(){return{oTodos:[],ListChk:q(this.FinishList),ImportChk:q(this.ImportantList)}},firestore:{oTodos:Ie},methods:{fnChkFinish:async function(e){(await at(oe(le,"Lists",e))).data().finishChk===!0?ye(oe(le,"Lists",e),{finishChk:!1}):ye(oe(le,"Lists",e),{finishChk:!0})},fnChkImportant:async function(e){(await at(oe(le,"Lists",e))).data().important===!0?ye(oe(le,"Lists",e),{important:!1}):ye(oe(le,"Lists",e),{important:!0})}},setup(){const e=q(!1),o=[],n=[];let c=async function(){(await lt(Ie)).forEach(function(i){i.data().finishChk===!0&&o.push(i.data().id)})},t=async function(){(await lt(Ie)).forEach(function(i){i.data().important===!0&&n.push(i.data().id)})};return c(),t(),{drawerRight:e,FinishList:o,ImportantList:n,toggleRightDrawer(){e.value=!e.value}}}});function pa(e,o,n,c,t,l){const i=Nt("router-view");return D(),K(ba,{view:"lHh Lpr lFf"},{default:g(()=>[p(ra,{elevated:""},{default:g(()=>[p(na,null,{default:g(()=>[p(oa,null,{default:g(()=>[J(" \uCE98\uB9B0\uB354 ")]),_:1}),p(Bt,{flat:"",onClick:e.toggleRightDrawer,round:"",dense:"",icon:"menu","aria-label":"Menu"},null,8,["onClick"])]),_:1})]),_:1}),p(ha,{side:"right",modelValue:e.drawerRight,"onUpdate:modelValue":o[5]||(o[5]=a=>e.drawerRight=a),"show-if-above":"",overlay:"",width:300,bordered:"",class:Wt(e.$q.dark.isActive?"bg-grey-9":"bg-grey-3")},{default:g(()=>[p(pe,null,{default:g(()=>[p(Re,{group:"ListGroup",clickable:"",icon:"inbox",label:"\uC804\uCCB4 \uB9AC\uC2A4\uD2B8"},{default:g(()=>[p(je,{style:{height:"400px","max-width":"300px"}},{default:g(()=>[(D(!0),Be(Ve,null,Oe(this.oTodos,a=>(D(),K(De,{key:a.key},{default:g(()=>[p(Ae,{class:"no-padding"},{default:g(()=>[p(pe,null,{default:g(()=>[a.finishChk===!1?ne((D(),K(Fe,{key:0,tag:"label"},{default:g(()=>[p(X,{side:""},{default:g(()=>[p(ce,{modelValue:e.ListChk,"onUpdate:modelValue":o[0]||(o[0]=s=>e.ListChk=s),val:a.id,onClick:s=>e.fnChkFinish(a.id)},null,8,["modelValue","val","onClick"])]),_:2},1024),p(X,null,{default:g(()=>[p(ae,null,{default:g(()=>[J(te(a.title),1)]),_:2},1024),p(ae,{caption:""},{default:g(()=>[J(" \uC2DC\uC791\uB0A0\uC9DC : "+te(a.start),1)]),_:2},1024)]),_:2},1024),p(X,{side:""},{default:g(()=>[p(ce,{modelValue:e.ImportChk,"onUpdate:modelValue":o[1]||(o[1]=s=>e.ImportChk=s),val:a.id,"checked-icon":"star","unchecked-icon":"star_border","indeterminate-icon":"help",onClick:s=>e.fnChkImportant(a.id)},null,8,["modelValue","val","onClick"])]),_:2},1024)]),_:2},1024)),[[xe]]):Ee("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),p(Re,{group:"ListGroup",clickable:"",icon:"star",label:"\uC911\uC694\uD55C \uB9AC\uC2A4\uD2B8"},{default:g(()=>[p(je,{style:{height:"300px","max-width":"300px"}},{default:g(()=>[(D(!0),Be(Ve,null,Oe(this.oTodos,a=>(D(),K(De,{key:a.key},{default:g(()=>[p(Ae,{class:"no-padding"},{default:g(()=>[p(pe,null,{default:g(()=>[a.finishChk===!1&&a.important===!0?ne((D(),K(Fe,{key:0,tag:"label"},{default:g(()=>[p(X,{side:""},{default:g(()=>[p(ce,{modelValue:e.ListChk,"onUpdate:modelValue":o[2]||(o[2]=s=>e.ListChk=s),val:a.id,onClick:s=>e.fnChkFinish(a.id)},null,8,["modelValue","val","onClick"])]),_:2},1024),p(X,null,{default:g(()=>[p(ae,null,{default:g(()=>[J(te(a.title),1)]),_:2},1024),p(ae,{caption:""},{default:g(()=>[J(" \uC2DC\uC791\uB0A0\uC9DC : "+te(a.start),1)]),_:2},1024)]),_:2},1024),p(X,{side:""},{default:g(()=>[p(ce,{modelValue:e.ImportChk,"onUpdate:modelValue":o[3]||(o[3]=s=>e.ImportChk=s),val:a.id,"checked-icon":"star","unchecked-icon":"star_border","indeterminate-icon":"help",onClick:s=>e.fnChkImportant(a.id)},null,8,["modelValue","val","onClick"])]),_:2},1024)]),_:2},1024)),[[xe]]):Ee("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),p(Re,{group:"ListGroup",class:"fixed-bottom",clickable:"",icon:"add_task",label:"\uC644\uB8CC\uD55C \uB9AC\uC2A4\uD2B8"},{default:g(()=>[p(je,{style:{height:"300px","max-width":"300px"}},{default:g(()=>[(D(!0),Be(Ve,null,Oe(this.oTodos,a=>(D(),K(De,{key:a.key},{default:g(()=>[p(Ae,{class:"no-padding"},{default:g(()=>[p(pe,{class:"FinishList"},{default:g(()=>[a.finishChk===!0?ne((D(),K(Fe,{key:0,tag:"label"},{default:g(()=>[p(X,{side:""},{default:g(()=>[p(ce,{modelValue:e.ListChk,"onUpdate:modelValue":o[4]||(o[4]=s=>e.ListChk=s),val:a.id,onClick:s=>e.fnChkFinish(a.id)},null,8,["modelValue","val","onClick"])]),_:2},1024),p(X,null,{default:g(()=>[p(ae,null,{default:g(()=>[J(te(a.title),1)]),_:2},1024),p(ae,{caption:""},{default:g(()=>[J(" \uC2DC\uC791\uB0A0\uC9DC : "+te(a.start),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[xe]]):Ee("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","class"]),p(ma,null,{default:g(()=>[p(i)]),_:1})]),_:1})}var qa=Ft(ga,[["render",pa]]);export{qa as default};
