(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[953],{4034:(e,t,a)=>{Promise.resolve().then(a.bind(a,774))},6046:(e,t,a)=>{"use strict";var s=a(6658);a.o(s,"usePathname")&&a.d(t,{usePathname:function(){return s.usePathname}}),a.o(s,"useRouter")&&a.d(t,{useRouter:function(){return s.useRouter}})},774:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>A});var s=a(5155),i=a(1305),r=a(5565),n=a(8173),l=a.n(n),o=a(5087),c=a(6575),d=a(2115),m=a(9656),h=a(9234),u=a(7249);class x extends d.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function p(e){let{children:t,isPresent:a}=e,i=(0,d.useId)(),r=(0,d.useRef)(null),n=(0,d.useRef)({width:0,height:0,top:0,left:0}),{nonce:l}=(0,d.useContext)(u.Q);return(0,d.useInsertionEffect)(()=>{let{width:e,height:t,top:s,left:o}=n.current;if(a||!r.current||!e||!t)return;r.current.dataset.motionPopId=i;let c=document.createElement("style");return l&&(c.nonce=l),document.head.appendChild(c),c.sheet&&c.sheet.insertRule('\n          [data-motion-pop-id="'.concat(i,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(s,"px !important;\n            left: ").concat(o,"px !important;\n          }\n        ")),()=>{document.head.removeChild(c)}},[a]),(0,s.jsx)(x,{isPresent:a,childRef:r,sizeRef:n,children:d.cloneElement(t,{ref:r})})}let g=e=>{let{children:t,initial:a,isPresent:i,onExitComplete:r,custom:n,presenceAffectsLayout:l,mode:o}=e,c=(0,h.M)(f),u=(0,d.useId)(),x=(0,d.useCallback)(e=>{for(let t of(c.set(e,!0),c.values()))if(!t)return;r&&r()},[c,r]),g=(0,d.useMemo)(()=>({id:u,initial:a,isPresent:i,custom:n,onExitComplete:x,register:e=>(c.set(e,!1),()=>c.delete(e))}),l?[Math.random(),x]:[i,x]);return(0,d.useMemo)(()=>{c.forEach((e,t)=>c.set(t,!1))},[i]),d.useEffect(()=>{i||c.size||!r||r()},[i]),"popLayout"===o&&(t=(0,s.jsx)(p,{isPresent:i,children:t})),(0,s.jsx)(m.t.Provider,{value:g,children:t})};function f(){return new Map}var y=a(4710),v=a(5107);let b=e=>e.key||"";function w(e){let t=[];return d.Children.forEach(e,e=>{(0,d.isValidElement)(e)&&t.push(e)}),t}var j=a(5403);let k=e=>{let{children:t,exitBeforeEnter:a,custom:i,initial:r=!0,onExitComplete:n,presenceAffectsLayout:l=!0,mode:o="sync"}=e;(0,v.V)(!a,"Replace exitBeforeEnter with mode='wait'");let c=(0,d.useMemo)(()=>w(t),[t]),m=c.map(b),u=(0,d.useRef)(!0),x=(0,d.useRef)(c),p=(0,h.M)(()=>new Map),[f,k]=(0,d.useState)(c),[N,C]=(0,d.useState)(c);(0,j.E)(()=>{u.current=!1,x.current=c;for(let e=0;e<N.length;e++){let t=b(N[e]);m.includes(t)?p.delete(t):!0!==p.get(t)&&p.set(t,!1)}},[N,m.length,m.join("-")]);let M=[];if(c!==f){let e=[...c];for(let t=0;t<N.length;t++){let a=N[t],s=b(a);m.includes(s)||(e.splice(t,0,a),M.push(a))}"wait"===o&&M.length&&(e=M),C(w(e)),k(c);return}let{forceRender:P}=(0,d.useContext)(y.L);return(0,s.jsx)(s.Fragment,{children:N.map(e=>{let t=b(e),a=c===N||m.includes(t);return(0,s.jsx)(g,{isPresent:a,initial:(!u.current||!!r)&&void 0,custom:a?void 0:i,presenceAffectsLayout:l,mode:o,onExitComplete:a?void 0:()=>{if(!p.has(t))return;p.set(t,!0);let e=!0;p.forEach(t=>{t||(e=!1)}),e&&(null==P||P(),C(x.current),n&&n())},children:e},t)})})};var N=a(6733),C=a(7031);function M(e){let{id:t,text:a,level:i,activeId:r,isPending:n,onClick:l}=e;return(0,s.jsx)(N.P.li,{className:"cursor-pointer transition-colors ".concat(2===i?"ml-0":3===i?"ml-4":"ml-8"," ").concat(n?"opacity-50":""),whileHover:{x:4},children:(0,s.jsx)("button",{onClick:()=>l(t),className:"text-left w-full py-1 ".concat(r===t?"text-primary-600 dark:text-primary-400 font-medium":"text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"),children:a})})}function P(){let[e,t]=(0,d.useState)([]),[a,i]=(0,d.useState)(""),[r,n]=(0,d.useTransition)(),l=(0,d.useCallback)(()=>{let e=Array.from(document.querySelectorAll("h2, h3, h4")).filter(e=>e.textContent).map((e,t)=>{let a=e.textContent||"";return e.id||(e.id="heading-".concat(t,"-").concat(a.toLowerCase().replace(/\s+/g,"-"))),{id:e.id,text:a,level:parseInt(e.tagName[1])}});n(()=>{t(e)})},[]);(0,d.useEffect)(()=>(l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)),[l]),(0,d.useEffect)(()=>{let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&n(()=>{i(e.target.id)})})},{rootMargin:"-20% 0px -80% 0px"});return e.forEach(e=>{let{id:a}=e,s=document.getElementById(a);s&&t.observe(s)}),()=>t.disconnect()},[e]);let o=(0,d.useCallback)(e=>{let t=document.getElementById(e);if(t){let e=t.getBoundingClientRect().top+window.pageYOffset-100;window.scrollTo({top:e,behavior:"smooth"})}},[]);return 0===e.length?null:(0,s.jsxs)(N.P.nav,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},className:"hidden xl:block fixed right-8 top-32 w-64 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg",children:[(0,s.jsx)("h4",{className:"text-lg font-semibold mb-4",children:"Table of Contents"}),(0,s.jsx)("ul",{className:"space-y-2",children:e.map(e=>(0,s.jsx)(M,{...e,activeId:a,isPending:r,onClick:o},e.id))})]})}function S(){let{progress:e,isVisible:t}=function(){let[e,t]=(0,d.useState)(0),[a,s]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{let e=()=>{let e=document.documentElement.scrollHeight-window.innerHeight,a=window.scrollY;t(a/e*100),s(a>100)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),{progress:e,isVisible:a}}(),[a]=(0,d.useOptimistic)(e);return(0,s.jsx)(k,{children:t&&(0,s.jsxs)(N.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed bottom-8 right-8 flex items-center justify-center z-50",children:[(0,s.jsxs)("svg",{className:"w-12 h-12 transform -rotate-90",children:[(0,s.jsx)("circle",{cx:"24",cy:"24",r:"20",className:"stroke-gray-200 dark:stroke-gray-700",strokeWidth:"2",fill:"none"}),(0,s.jsx)(N.P.circle,{cx:"24",cy:"24",r:"20",className:"stroke-primary-500",strokeWidth:"2",fill:"none",initial:{pathLength:0},animate:{pathLength:a/100},transition:{duration:.1,ease:"linear"},style:{strokeDasharray:"126",strokeDashoffset:"126"}})]}),(0,s.jsxs)(N.P.span,{className:"absolute text-sm font-medium text-primary-600 dark:text-primary-400",initial:{opacity:0},animate:{opacity:1},children:[Math.round(a),"%"]})]})})}function E(e){let{currentPost:t,posts:a}=e,[i,n]=(0,d.useState)(new Set),[o,c]=(0,d.useTransition)(),[m,h]=(0,d.useOptimistic)(i,(e,t)=>new Set([...e,t])),u=(0,d.useCallback)(e=>{c(()=>{n(t=>new Set([...t,e])),h(e)})},[h]),x=a.filter(e=>e.slug!==t.slug).filter(e=>e.categories.some(e=>t.categories.includes(e))).slice(0,3);return 0===x.length?null:(0,s.jsxs)(N.P.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7},className:"mt-16 pt-8 border-t border-gray-200 dark:border-gray-700",children:[(0,s.jsx)("h3",{className:"text-2xl font-bold mb-8",children:"Related Posts"}),(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:x.map((e,t)=>(0,s.jsx)(N.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8+.1*t},children:(0,s.jsxs)(l(),{href:"/blog/".concat(e.slug),className:"block group",children:[(0,s.jsxs)("div",{className:"relative h-48 mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800",children:[(0,s.jsx)(r.default,{src:e.coverImage,alt:e.title,fill:!0,className:"object-cover transition-all duration-300 ".concat(m.has(e.coverImage)?"opacity-100 scale-100":"opacity-0 scale-105"," group-hover:scale-105 ").concat(o?"opacity-50":""),onLoad:()=>u(e.coverImage)}),!m.has(e.coverImage)&&(0,s.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,s.jsx)("div",{className:"w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"})})]}),(0,s.jsx)("h4",{className:"text-lg font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors",children:e.title}),(0,s.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400 line-clamp-2",children:e.excerpt}),(0,s.jsxs)("div",{className:"flex items-center mt-4 text-sm text-gray-500 dark:text-gray-400",children:[(0,s.jsx)("span",{children:e.date}),(0,s.jsx)("span",{className:"mx-2",children:"•"}),(0,s.jsxs)("span",{children:[e.readTime," read"]})]})]})},e.slug))})]})}var L=a(6046);let I={Twitter:(0,s.jsx)("svg",{className:"w-5 h-5 mr-2",fill:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),LinkedIn:(0,s.jsx)("svg",{className:"w-5 h-5 mr-2",fill:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),Facebook:(0,s.jsx)("svg",{className:"w-5 h-5 mr-2",fill:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),WhatsApp:(0,s.jsx)("svg",{className:"w-5 h-5 mr-2",fill:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})})},T=["Twitter","LinkedIn","Facebook","WhatsApp"];function R(e){let{post:t,children:a}=e,[n,m]=(0,d.useState)(!1),[h,u]=(0,d.useState)(!1),[x,p]=(0,d.useState)(!1),[g,f]=(0,d.useState)(null),[y,v]=(0,d.useState)(null),b=(0,L.useRouter)(),{scrollYProgress:w}=(0,o.L)(),j=(0,c.G)(w,[0,.2],[1,0]),M=(0,c.G)(w,[0,.2],[1,.95]),[R,z]=(0,d.useTransition)(),[A,B]=(0,d.useState)(null),[H,W]=(0,d.useState)({total:0,platforms:{}}),[D,F]=(0,d.useState)({scale:1,x:0,y:0}),[O,Y]=(0,d.useState)(0),[X,U]=(0,d.useState)(1),[_,V]=(0,d.useState)(0),[q,G]=(0,d.useState)(null);(0,d.useEffect)(()=>{let e=localStorage.getItem("blog-share-".concat(t.slug));e&&W(JSON.parse(e))},[t.slug]);let[J,Q]=(0,d.useOptimistic)(H,(e,t)=>{let{platform:a}=t,s=(e.platforms[a]||0)+1;return{total:e.total+1,platforms:{...e.platforms,[a]:s}}}),Z=async e=>{z(()=>{Q({platform:e})});try{let a="".concat(window.location.origin,"/blog/").concat(t.slug),s=encodeURIComponent(t.title),i=encodeURIComponent(a),r="";switch(e){case"Twitter":r="https://twitter.com/intent/tweet?text=".concat(s,"&url=").concat(i);break;case"LinkedIn":r="https://www.linkedin.com/shareArticle?mini=true&url=".concat(i,"&title=").concat(s,"&summary=").concat(encodeURIComponent(t.excerpt));break;case"Facebook":r="https://www.facebook.com/sharer/sharer.php?u=".concat(i,"&quote=").concat(s);break;case"WhatsApp":r=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)?"whatsapp://send?text=".concat(encodeURIComponent("".concat(t.title,"\n\n").concat(a))):"https://wa.me/?text=".concat(encodeURIComponent("".concat(t.title,"\n\n").concat(a)))}let n=window.open(r,"_blank","width=600,height=400,resizable=yes"),l=setInterval(()=>{if(null==n?void 0:n.closed){clearInterval(l);let a={total:H.total+1,platforms:{...H.platforms,[e]:(H.platforms[e]||0)+1}};W(a),localStorage.setItem("blog-share-".concat(t.slug),JSON.stringify(a)),B({type:"success",message:"Successfully shared on ".concat(e,"!")}),setTimeout(()=>B(null),3e3)}},1e3)}catch(t){console.error("Error sharing:",t),B({type:"error",message:"Failed to share on ".concat(e,". Please try again.")}),setTimeout(()=>B(null),3e3)}},K=e=>{2===e.touches.length&&(Y(Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY)),U(D.scale))},$=e=>{let t=new Date().getTime(),a=t-_;if(a<300&&a>0){e.preventDefault();let t=e.touches[0];if(D.scale>1)F({scale:1,x:0,y:0});else{let a=e.currentTarget.getBoundingClientRect(),s=t.clientX-a.left,i=t.clientY-a.top;G({x:s,y:i}),F({scale:2,x:(a.width/2-s)*2,y:(a.height/2-i)*2})}}V(t)};return(0,s.jsxs)("article",{className:"min-h-screen py-12 sm:py-20 px-4 sm:px-6 lg:px-8",onTouchStart:e=>{f({x:e.touches[0].clientX,y:e.touches[0].clientY})},onTouchMove:e=>{v({x:e.touches[0].clientX,y:e.touches[0].clientY})},onTouchEnd:()=>{if(!g||!y)return;let e=g.x-y.x;if(Math.abs(e)>Math.abs(g.y-y.y)&&Math.abs(e)>50){if(e>0){let e=i.A.findIndex(e=>e.slug===t.slug);e<i.A.length-1&&b.push("/blog/".concat(i.A[e+1].slug))}else{let e=i.A.findIndex(e=>e.slug===t.slug);e>0&&b.push("/blog/".concat(i.A[e-1].slug))}}f(null),v(null)},children:[(0,s.jsx)(S,{}),(0,s.jsx)("div",{className:"hidden lg:block",children:(0,s.jsx)(P,{})}),(0,s.jsx)(k,{children:A&&(0,s.jsx)(N.P.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},exit:{opacity:0,y:50},className:"fixed bottom-4 left-4 right-4 sm:left-1/2 sm:right-auto sm:transform sm:-translate-x-1/2 px-4 sm:px-6 py-3 rounded-lg shadow-lg z-50 ".concat("success"===A.type?"bg-green-500 text-white":"bg-red-500 text-white"," text-center"),children:A.message})}),(0,s.jsx)(k,{children:x&&(0,s.jsxs)(N.P.div,{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{y:"100%",opacity:0},visible:{y:0,opacity:1},exit:{y:"100%",opacity:0}},className:"fixed inset-x-0 bottom-0 bg-white dark:bg-gray-800 rounded-t-2xl shadow-lg z-50 p-4",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,s.jsx)("h3",{className:"text-lg font-semibold",children:"Share this post"}),(0,s.jsx)("button",{onClick:()=>p(!1),className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full",children:(0,s.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),(0,s.jsx)("div",{className:"grid grid-cols-2 gap-4",children:T.map(e=>(0,s.jsxs)(N.P.button,{onClick:()=>{Z(e),p(!1)},whileTap:{scale:.95},className:"flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700",children:[(0,s.jsx)("div",{className:"w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900 mb-2",children:I[e]}),(0,s.jsx)("span",{className:"text-sm",children:e}),J.platforms[e]>0&&(0,s.jsxs)("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:[J.platforms[e]," shares"]})]},e))})]})}),(0,s.jsx)(k,{children:h&&(0,s.jsx)(N.P.div,{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1},exit:{opacity:0,scale:.9}},className:"fixed inset-0 bg-black bg-opacity-90 z-50 p-4 flex items-center justify-center touch-none",onClick:e=>{e.target===e.currentTarget&&(u(!1),F({scale:1,x:0,y:0}))},children:(0,s.jsxs)("div",{className:"relative w-full h-full max-w-4xl mx-auto overflow-hidden",onTouchStart:e=>{K(e),$(e)},onTouchMove:e=>{if(2===e.touches.length){e.preventDefault();let t=Math.min(Math.max(Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY)/O*X,1),3);F(e=>({...e,scale:t}))}else if(1===e.touches.length&&D.scale>1){let t=e.touches[0],a=t.clientX-((null==g?void 0:g.x)||0),s=t.clientY-((null==g?void 0:g.y)||0);F(e=>({...e,x:a,y:s}))}},onTouchEnd:()=>{D.scale<=1&&F({scale:1,x:0,y:0})},children:[(0,s.jsx)(N.P.div,{style:{scale:D.scale,x:D.x,y:D.y},transition:{type:"spring",stiffness:300,damping:30,duration:q?.2:void 0},className:"relative w-full h-full",onAnimationComplete:()=>{G(null)},children:(0,s.jsx)(r.default,{src:t.coverImage,alt:t.title,fill:!0,className:"object-contain",sizes:"100vw",priority:!0,draggable:!1})}),(0,s.jsx)("button",{onClick:()=>{u(!1),F({scale:1,x:0,y:0})},className:"absolute top-4 right-4 p-2 bg-white/10 rounded-full",children:(0,s.jsx)("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),D.scale>1&&(0,s.jsxs)("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm",children:[Math.round(100*D.scale),"%"]}),(0,s.jsx)(N.P.div,{initial:{opacity:1},animate:{opacity:0},transition:{delay:1.5,duration:.5},className:"absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap",children:"Double-tap to zoom"})]})})}),(0,s.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,s.jsxs)(N.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,s.jsxs)(l(),{href:"/blog",className:"inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-6 sm:mb-8 group touch-manipulation",children:[(0,s.jsx)(N.P.svg,{className:"w-5 h-5 mr-2 transition-transform",whileHover:{x:-4},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"Back to Blog"]}),(0,s.jsxs)(N.P.div,{style:{opacity:j,scale:M},className:"mb-8 sm:mb-12",children:[(0,s.jsx)("div",{className:"flex flex-wrap gap-2 mb-4 sm:mb-6",children:t.categories.map(e=>(0,s.jsx)(N.P.span,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},whileHover:{scale:1.05},className:"px-3 py-1.5 text-sm rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 touch-manipulation",children:e},e))}),(0,s.jsx)("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight",children:t.title}),(0,s.jsxs)("div",{className:"flex flex-wrap items-center gap-2 sm:gap-0 text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base",children:[(0,s.jsx)("span",{children:t.date}),(0,s.jsx)("span",{className:"hidden sm:inline mx-2",children:"•"}),(0,s.jsxs)("span",{children:[t.readTime," read"]}),(0,s.jsx)("span",{className:"hidden sm:inline mx-2",children:"•"}),(0,s.jsxs)(N.P.div,{className:"flex items-center gap-2 ".concat(R?"opacity-50":""),animate:{scale:R?.95:1},children:[(0,s.jsxs)("span",{children:[J.total," shares"]}),J.total>0&&(0,s.jsx)("div",{className:"flex -space-x-2 overflow-hidden",children:Object.entries(J.platforms).map(e=>{let[t,a]=e;return a>0&&(0,s.jsx)("div",{className:"w-7 h-7 sm:w-6 sm:h-6 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-xs ring-2 ring-white dark:ring-gray-800 touch-manipulation",title:"".concat(a," shares on ").concat(t),children:I[t]},t)})})]})]})]})]}),(0,s.jsx)(C.A,{offset:20,children:(0,s.jsxs)(N.P.div,{initial:{opacity:0,scale:.95},animate:{opacity:n?1:0,scale:n?1:.95},transition:{duration:.5},className:"relative h-[250px] sm:h-[400px] w-full mb-8 sm:mb-12 rounded-xl overflow-hidden shadow-lg",onClick:()=>u(!0),children:[(0,s.jsx)(r.default,{src:t.coverImage,alt:t.title,fill:!0,className:"object-cover transition-transform duration-300 hover:scale-105",priority:!0,sizes:"(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px",onLoad:()=>m(!0)}),(0,s.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity flex items-center justify-center",children:(0,s.jsx)("svg",{className:"w-8 h-8 text-white opacity-0 transform scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]})}),a,(0,s.jsx)(N.P.button,{onClick:()=>p(!0),className:"fixed bottom-4 right-4 sm:hidden bg-primary-500 text-white p-4 rounded-full shadow-lg",whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,s.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"})})}),(0,s.jsx)("div",{className:"hidden sm:block",children:(0,s.jsxs)(N.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},className:"mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700",children:[(0,s.jsx)("h3",{className:"text-xl sm:text-2xl font-bold mb-4",children:"Share this post"}),(0,s.jsx)("div",{className:"grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4",children:T.map(e=>(0,s.jsx)(N.P.button,{onClick:()=>Z(e),whileHover:{scale:1.02},whileTap:{scale:.98},className:"inline-flex items-center justify-center w-full sm:w-auto min-h-[44px] px-3 sm:px-4 py-2.5 sm:py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors touch-manipulation ".concat(R?"opacity-50":""),disabled:R,children:(0,s.jsxs)("div",{className:"flex items-center",children:[I[e],(0,s.jsxs)("span",{className:"whitespace-nowrap text-sm sm:text-base",children:["Share on ",e]}),J.platforms[e]>0&&(0,s.jsx)("span",{className:"ml-2 px-2 py-0.5 text-xs rounded-full bg-primary-100 dark:bg-primary-900 min-w-[1.5rem] text-center",children:J.platforms[e]})]})},e))}),(0,s.jsxs)("div",{className:"mt-12 mb-8",children:[(0,s.jsx)("h3",{className:"text-xl sm:text-2xl font-bold mb-4",children:"About this post"}),(0,s.jsx)("p",{className:"text-lg text-gray-700 dark:text-gray-300 leading-relaxed",children:t.excerpt})]}),(0,s.jsx)("div",{className:"mt-12",children:(0,s.jsx)("article",{className:"prose dark:prose-invert max-w-none",children:t.content})})]})}),(0,s.jsx)(E,{currentPost:t,posts:i.A})]})]})}var z=a(9319);function A(e){let{params:t}=e,{slug:a}=(0,d.use)(t),r=i.A.find(e=>e.slug===a);return r?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(z.A,{}),(0,s.jsx)("div",{className:"min-h-screen relative",children:(0,s.jsx)("div",{className:"relative z-10",children:(0,s.jsx)("div",{className:"dark:bg-gray-900/40 bg-gray-900/10",children:(0,s.jsx)(R,{post:r})})})})]}):(0,s.jsx)("div",{className:"min-h-screen flex items-center justify-center",children:(0,s.jsx)("h1",{className:"text-2xl font-bold",children:"Blog post not found"})})}},9319:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var s=a(5155),i=a(2115),r=a(6825);let n=()=>{let e=(0,i.useRef)(null),{theme:t}=(0,r.D)();return(0,i.useEffect)(()=>{let a;let s=e.current;if(!s)return;let i=s.getContext("2d");if(!i)return;let r=()=>{s.width=window.innerWidth,s.height=window.innerHeight};r(),window.addEventListener("resize",r);let n=[],l=Math.floor(window.innerWidth*window.innerHeight/8e3);for(let e=0;e<l;e++)n.push({x:Math.random()*s.width,y:Math.random()*s.height,radius:2.5*Math.random()+1,alpha:.4*Math.random()+.1,velocity:.15*Math.random()+.05});let o=()=>{i.clearRect(0,0,s.width,s.height),n.forEach(e=>{i.beginPath(),i.arc(e.x,e.y,e.radius,0,2*Math.PI),i.fillStyle="light"===t?"rgba(0, 0, 0, ".concat(e.alpha,")"):"rgba(255, 255, 255, ".concat(e.alpha,")"),i.fill(),e.y-=e.velocity,e.alpha=Math.max(.1,Math.min(.5,e.alpha+.01*Math.sin(Date.now()/1e3))),e.y<-10&&(e.y=s.height+10,e.x=Math.random()*s.width)}),a=requestAnimationFrame(o)};return o(),()=>{window.removeEventListener("resize",r),cancelAnimationFrame(a)}},[t]),(0,s.jsx)("canvas",{ref:e,className:"fixed inset-0 w-full h-full z-[-1] bg-transparent pointer-events-none",style:{position:"fixed"}})}},7031:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});var s=a(5155),i=a(5087),r=a(6575),n=a(6733),l=a(2115);function o(e){let{children:t,offset:a=50,className:o=""}=e,c=(0,l.useRef)(null),{scrollYProgress:d}=(0,i.L)({target:c,offset:["start end","end start"]}),m=(0,r.G)(d,[0,1],[-a,a]);return(0,s.jsx)(n.P.div,{ref:c,style:{y:m},className:o,children:t})}},6825:(e,t,a)=>{"use strict";a.d(t,{D:()=>l,ThemeProvider:()=>n});var s=a(5155),i=a(2115);let r=(0,i.createContext)(void 0);function n(e){let{children:t}=e,[a,n]=(0,i.useState)("dark"),[l,o]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{let e=localStorage.getItem("theme")||"dark";n(e),document.documentElement.classList.toggle("dark","dark"===e),o(!0)},[]),l)?(0,s.jsx)(r.Provider,{value:{theme:a,toggleTheme:()=>{let e="light"===a?"dark":"light";n(e),localStorage.setItem("theme",e),document.documentElement.classList.toggle("dark")}},children:t}):null}function l(){let e=(0,i.useContext)(r);if(void 0===e)throw Error("useTheme must be used within a ThemeProvider");return e}},1305:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=[{title:"Building Scalable Web Applications with Next.js",excerpt:"Learn how to create performant and scalable web applications using Next.js and React. We'll cover best practices, optimization techniques, and advanced features.",date:"2024-01-15",readTime:"8 min",slug:"building-scalable-web-applications-nextjs",coverImage:"/images/blog/1.jpg",categories:["Next.js","React","Web Development"]},{title:"The Power of TypeScript in Modern Development",excerpt:"Discover how TypeScript can improve your development workflow, catch errors early, and make your code more maintainable.",date:"2024-01-10",readTime:"6 min",slug:"power-of-typescript",coverImage:"/images/blog/2.jpg",categories:["TypeScript","JavaScript","Programming"]},{title:"Mastering State Management in React",excerpt:"An in-depth guide to managing state in React applications. From useState and useContext to Redux and Zustand.",date:"2024-01-05",readTime:"10 min",slug:"mastering-state-management-react",coverImage:"/images/blog/3.jpg",categories:["React","State Management","Frontend"]}]}},e=>{var t=t=>e(e.s=t);e.O(0,[173,89,557,441,517,358],()=>t(4034)),_N_E=e.O()}]);