(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[545],{7922:function(e,i,n){"use strict";n.d(i,{Z:function(){return b}});var r=n(3366),t=n(7462),o=n(7294),s=n(6010),c=n(8885),l=n(4780),d=n(1496),a=n(7623),h=n(6067),x=n(577),p=n(2734),u=n(1705),j=n(4867);function m(e){return(0,j.Z)("MuiCollapse",e)}(0,n(1588).Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var g=n(5893);const f=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],w=(0,d.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,i)=>{const{ownerState:n}=e;return[i.root,i[n.orientation],"entered"===n.state&&i.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&i.hidden]}})((({theme:e,ownerState:i})=>(0,t.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===i.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===i.state&&(0,t.Z)({height:"auto",overflow:"visible"},"horizontal"===i.orientation&&{width:"auto"}),"exited"===i.state&&!i.in&&"0px"===i.collapsedSize&&{visibility:"hidden"}))),Z=(0,d.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,i)=>i.wrapper})((({ownerState:e})=>(0,t.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),v=(0,d.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,i)=>i.wrapperInner})((({ownerState:e})=>(0,t.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),y=o.forwardRef((function(e,i){const n=(0,a.Z)({props:e,name:"MuiCollapse"}),{addEndListener:d,children:j,className:y,collapsedSize:b="0px",component:P,easing:C,in:A,onEnter:D,onEntered:S,onEntering:k,onExit:O,onExited:V,onExiting:E,orientation:z="vertical",style:N,timeout:I=h.x9.standard,TransitionComponent:T=c.ZP}=n,_=(0,r.Z)(n,f),W=(0,t.Z)({},n,{orientation:z,collapsedSize:b}),L=(e=>{const{orientation:i,classes:n}=e,r={root:["root",`${i}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${i}`],wrapperInner:["wrapperInner",`${i}`]};return(0,l.Z)(r,m,n)})(W),R=(0,p.Z)(),G=o.useRef(),M=o.useRef(null),$=o.useRef(),q="number"===typeof b?`${b}px`:b,H="horizontal"===z,U=H?"width":"height";o.useEffect((()=>()=>{clearTimeout(G.current)}),[]);const F=o.useRef(null),B=(0,u.Z)(i,F),J=e=>i=>{if(e){const n=F.current;void 0===i?e(n):e(n,i)}},X=()=>M.current?M.current[H?"clientWidth":"clientHeight"]:0,K=J(((e,i)=>{M.current&&H&&(M.current.style.position="absolute"),e.style[U]=q,D&&D(e,i)})),Q=J(((e,i)=>{const n=X();M.current&&H&&(M.current.style.position="");const{duration:r,easing:t}=(0,x.C)({style:N,timeout:I,easing:C},{mode:"enter"});if("auto"===I){const i=R.transitions.getAutoHeightDuration(n);e.style.transitionDuration=`${i}ms`,$.current=i}else e.style.transitionDuration="string"===typeof r?r:`${r}ms`;e.style[U]=`${n}px`,e.style.transitionTimingFunction=t,k&&k(e,i)})),Y=J(((e,i)=>{e.style[U]="auto",S&&S(e,i)})),ee=J((e=>{e.style[U]=`${X()}px`,O&&O(e)})),ie=J(V),ne=J((e=>{const i=X(),{duration:n,easing:r}=(0,x.C)({style:N,timeout:I,easing:C},{mode:"exit"});if("auto"===I){const n=R.transitions.getAutoHeightDuration(i);e.style.transitionDuration=`${n}ms`,$.current=n}else e.style.transitionDuration="string"===typeof n?n:`${n}ms`;e.style[U]=q,e.style.transitionTimingFunction=r,E&&E(e)}));return(0,g.jsx)(T,(0,t.Z)({in:A,onEnter:K,onEntered:Y,onEntering:Q,onExit:ee,onExited:ie,onExiting:ne,addEndListener:e=>{"auto"===I&&(G.current=setTimeout(e,$.current||0)),d&&d(F.current,e)},nodeRef:F,timeout:"auto"===I?null:I},_,{children:(e,i)=>(0,g.jsx)(w,(0,t.Z)({as:P,className:(0,s.Z)(L.root,y,{entered:L.entered,exited:!A&&"0px"===q&&L.hidden}[e]),style:(0,t.Z)({[H?"minWidth":"minHeight"]:q},N),ownerState:(0,t.Z)({},W,{state:e}),ref:B},i,{children:(0,g.jsx)(Z,{ownerState:(0,t.Z)({},W,{state:e}),className:L.wrapper,ref:M,children:(0,g.jsx)(v,{ownerState:(0,t.Z)({},W,{state:e}),className:L.wrapperInner,children:j})})}))}))}));y.muiSupportAuto=!0;var b=y},6971:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/save",function(){return n(9437)}])},174:function(e,i,n){"use strict";n.d(i,{S:function(){return d}});var r=n(4924),t=n(5893),o=n(7357),s=n(4901),c=n(600),l=s.O9.white,d=function(e){var i,n=e.backgroundColor,d=void 0===n?l:n,a=e.backgroundImage,h=e.sx,x=void 0===h?{}:h,p=e.children,u=s.AV.ps,j=s.AV.ts,m=s.AV.dl;return(0,t.jsx)(c.N,{backgroundColor:d,backgroundImage:a,sx:x,children:(0,t.jsx)(o.Z,{sx:(i={pt:"90px"},(0,r.Z)(i,u,{pt:"50px"}),(0,r.Z)(i,j,{pt:"80px"}),(0,r.Z)(i,m,{pt:"90px"}),i),children:p})})}},3559:function(e,i,n){"use strict";n.d(i,{U:function(){return v}});var r=n(6042),t=n(9396),o=n(5893),s=n(1664),c=n.n(s),l=n(5675),d=n.n(l),a=n(3321),h=n(7357),x=n(4901),p=n(7066),u=n(2778),j=x.O9.black,m=x.O9.white,g=x.O9.mediumGrey,f=x.O9.turquoise,w=x.cp.body,Z=function(e){var i=e.textColor,n=void 0===i?j:i,s=e.borderColor,c=void 0===s?g:s,l=e.arrowDirection,Z=void 0===l?"none":l,v=e.onClick,y=e.children;return(0,o.jsxs)(a.Z,{onClick:v,sx:(0,t.Z)((0,r.Z)({border:"1px solid ".concat(c)},w),{borderRadius:"500px",fontWeight:700,textTransform:"none",color:n,p:1.25,pl:"40px",pr:"40px","&:hover":{backgroundColor:f,border:"1px solid ".concat(f),color:m,img:{filter:"brightness(0) saturate(100%) invert(93%) sepia(93%) saturate(27%) hue-rotate(99deg) brightness(107%) contrast(105%)"}}}),children:[y,"right"===Z&&(0,o.jsx)(h.Z,{sx:{ml:"8px",mt:"-3px"},children:(0,o.jsx)(d(),{src:p.default,alt:"",loader:x._m})}),"down"===Z&&(0,o.jsx)(h.Z,{sx:{ml:"8px",mt:"-3px"},children:(0,o.jsx)(d(),{src:u.default,alt:"",loader:x._m})})]})},v=function(e){var i=e.textColor,n=e.borderColor,r=e.arrowDirection,t=e.href,s=e.onClick,l=e.children;return t?(0,o.jsx)(c(),{href:t,passHref:!0,children:(0,o.jsx)(Z,{textColor:i,borderColor:n,arrowDirection:r,children:l})}):(0,o.jsx)(Z,{textColor:i,borderColor:n,arrowDirection:r,onClick:s,children:l})}},8284:function(e,i,n){"use strict";n.d(i,{Ax:function(){return t},po:function(){return r}});var r=function(e){return n(425)("./".concat(e.props.children.props.src)).default},t=function(e){return e.props.children.props.href}},9437:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return q}});var r=n(5893),t=n(1151),o=n(4924),s=n(9637),c=n(7294),l=n(5675),d=n.n(l),a=n(6886),h=n(7357),x=n(7922),p=n(4408),u=n(4901),j=n(174),m=n(600),g=n(3559),f=n(8864),w=n(3724),Z=n(6693),v=function(e){var i,n,t,l,v=e.children,y=(0,c.useState)(!1),b=y[0],P=y[1],C=(0,p.qM)(),A=u.O9.lightGrey,D=u.O9.mediumGrey,S=u.O9.white,k=u.cp.bodyLarge,O=u.AV.ps,V=u.AV.pl,E=u.AV.ts,z=u.AV.tl,N=u.AV.ds,I=u.AV.dl,T=(0,s.Z)(v),_=T[0],W=T[1],L=T.slice(2);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j.S,{backgroundColor:A,sx:(i={mb:-1,py:13,pb:0,px:11.25},(0,o.Z)(i,O,{py:6,px:3,pb:0}),(0,o.Z)(i,V,{py:6,px:3,pb:0}),(0,o.Z)(i,E,{py:7,px:4.375,pb:0}),(0,o.Z)(i,z,{py:9,px:4.375,pb:0}),(0,o.Z)(i,N,{py:13,px:6.25,pb:0}),(0,o.Z)(i,I,{py:13,px:11.25,pb:0}),i),children:(0,r.jsxs)(a.ZP,{container:!0,sx:(n={flexDirection:"row"},(0,o.Z)(n,O,{flexDirection:"column"}),(0,o.Z)(n,E,{flexDirection:"row"}),n),children:[(0,r.jsxs)(a.ZP,{container:!0,direction:"column",item:!0,sx:(t={width:"50%"},(0,o.Z)(t,O,{width:"100%"}),(0,o.Z)(t,E,{width:"50%"}),t),children:[(0,r.jsxs)(a.ZP,{item:!0,container:!0,direction:"row",spacing:"30px",children:[(0,r.jsx)(a.ZP,{item:!0,children:(0,r.jsx)(h.Z,{sx:{width:"90px",mt:"12px"},children:(0,r.jsx)(d(),{src:w.default,loader:u._m,alt:"Save logo"})})}),(0,r.jsx)(a.ZP,{item:!0,children:(0,r.jsx)(h.Z,{sx:{width:"1px",mt:"12px",height:"70%",backgroundColor:D}})}),(0,r.jsx)(a.ZP,{item:!0,children:_})]}),(0,r.jsxs)(a.ZP,{item:!0,container:!0,direction:"column",children:[(0,r.jsx)(a.ZP,{item:!0,children:(0,r.jsx)(h.Z,{component:"p",sx:{"> p":k,maxWidth:"550px",mb:"60px"},children:W})}),(0,r.jsx)(a.ZP,{item:!0,children:(0,r.jsx)(g.U,{arrowDirection:"down",onClick:function(){return P(!b)},children:C("more")})})]})]}),(0,r.jsx)(a.ZP,{item:!0,container:!0,direction:"column",sx:{width:"50%"},children:(0,r.jsx)(a.ZP,{item:!0,children:(0,r.jsx)(h.Z,{sx:(0,o.Z)({width:"100%"},O,{width:"100%"}),children:(0,r.jsx)(d(),{src:f.default,loader:u._m,alt:""})})})})]})}),(0,r.jsx)(x.Z,{in:b,children:(0,r.jsx)(m.N,{backgroundColor:S,children:(0,r.jsxs)(a.ZP,{container:!0,sx:(l={flexDirection:"row"},(0,o.Z)(l,O,{flexDirection:"column"}),(0,o.Z)(l,E,{flexDirection:"row"}),l),children:[(0,r.jsx)(a.ZP,{item:!0,sx:{width:"50%"},children:(0,r.jsx)(h.Z,{sx:{width:"100%",height:"100%",backgroundImage:"url(".concat(Z.default.src,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover"}})}),(0,r.jsx)(a.ZP,{item:!0,sx:{width:"50%"},children:(0,r.jsx)(h.Z,{sx:{p:3},children:L})})]})})})]})},y=n(8116),b=n(8494),P=(n(933),n(9846),function(e){var i=e.children,n=u.O9.white,t=i;return(0,r.jsx)(m.N,{backgroundColor:n,sx:{pb:0,mb:-13},children:(0,r.jsx)(h.Z,{sx:{height:500,overflow:"hidden"},children:(0,r.jsx)(b.tq,{modules:[y.pt,y.xW],direction:"vertical",autoHeight:!0,effect:"fade",slidesPerView:1,autoplay:{delay:4e3},fadeEffect:{crossFade:!0},loop:!0,onSlideChange:function(){return console.log("slide change")},onSwiper:function(e){return console.log(e)},children:t.map((function(e,i){return(0,r.jsx)(b.o5,{children:e},i)}))})})})}),C=n(8284),A=function(e){var i,n=e.children,t=u.cp.bodyLarge,c=u.AV.ps,l=u.AV.tl,x=(0,s.Z)(n),p=x[0],j=x[1],m=x.slice(2),g=(0,C.po)(p);return(0,r.jsxs)(a.ZP,{item:!0,container:!0,direction:"column",spacing:0,children:[(0,r.jsx)(a.ZP,{item:!0,children:(0,r.jsx)(h.Z,{sx:{textAlign:"center","> h2":{mb:3}},children:j})}),(0,r.jsxs)(a.ZP,{item:!0,container:!0,direction:"row",flexWrap:"nowrap",sx:(i={pt:"70px",flexDirection:"row"},(0,o.Z)(i,c,{flexDirection:"column"}),(0,o.Z)(i,l,{flexDirection:"row"}),i),children:[(0,r.jsx)(a.ZP,{item:!0,sx:{width:"50%"},children:(0,r.jsx)(h.Z,{sx:{"> p":t},children:m})}),(0,r.jsx)(a.ZP,{container:!0,item:!0,sx:{width:"50%",overflow:"visible"},justifyContent:"flex-end",children:(0,r.jsx)(a.ZP,{item:!0,children:(0,r.jsx)(h.Z,{sx:{overflow:"visible",width:"100%",mt:"-104px"},children:(0,r.jsx)(d(),{src:g,alt:"",loader:u._m})})})})]})]})},D=n(6042),S=n(9396),k=function(e){var i,n=e.children,t=u.O9.white,s=u.O9.lightGrey,c=u.O9.turquoise,l=u.cp.bodyLarge,d=u.AV.ps,a=u.AV.tl,x=u.AV.ds;return(0,r.jsx)(m.N,{backgroundColor:s,children:(0,r.jsx)(h.Z,{sx:{h5:{width:"50%"},ul:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start",counterReset:"whoCounter"},li:(i={counterIncrement:"whoCounter",backgroundColor:t,display:"flex",p:3,m:3,width:"30%"},(0,o.Z)(i,d,{width:"100%"}),(0,o.Z)(i,a,{width:"50%"}),(0,o.Z)(i,x,{width:"30%"}),i),"li::before":(0,S.Z)((0,D.Z)({},l),{content:"counter(whoCounter, decimal-leading-zero)",color:c,display:"block",width:"100%"})},children:n})})},O=n(6987),V=function(e){var i,n,t,c,l,d=e.children,x=u.O9.white,p=u.cp.bodyLarge,j=u.AV.ps,g=u.AV.tl,f=(0,s.Z)(d),w=f[0],Z=f[1],v=f.slice(2);return(0,r.jsx)(m.N,{backgroundColor:x,children:(0,r.jsxs)(a.ZP,{container:!0,direction:"column",children:[(0,r.jsxs)(a.ZP,{container:!0,item:!0,sx:(i={flexDirection:"row"},(0,o.Z)(i,j,{flexDirection:"column"}),(0,o.Z)(i,g,{flexDirection:"row"}),i),children:[(0,r.jsx)(a.ZP,{container:!0,direction:"column",item:!0,sx:(n={width:"50%"},(0,o.Z)(n,j,{width:"100%"}),(0,o.Z)(n,g,{width:"50%"}),n),children:w}),(0,r.jsx)(a.ZP,{item:!0,sx:(t={width:"50%"},(0,o.Z)(t,j,{width:"100%"}),(0,o.Z)(t,g,{width:"50%"}),t),children:(0,r.jsx)(h.Z,{sx:{"> p":p},children:Z})})]}),(0,r.jsx)(a.ZP,{container:!0,item:!0,spacing:8,sx:(c={mt:"100px",flexDirection:"row"},(0,o.Z)(c,j,{flexDirection:"column"}),(0,o.Z)(c,g,{flexDirection:"row"}),(0,o.Z)(c,"backgroundImage","url(".concat(O.default.src,")")),(0,o.Z)(c,"backgroundPosition","100% 100%"),(0,o.Z)(c,"backgroundSize","50%"),(0,o.Z)(c,"backgroundRepeat","no-repeat"),c),children:(0,r.jsx)(a.ZP,{container:!0,item:!0,sx:(l={width:"70%",zIndex:100,flexDirection:"row"},(0,o.Z)(l,j,{flexDirection:"column",width:"100%"}),(0,o.Z)(l,g,{flexDirection:"row",width:"70%"}),l),spacing:6,children:v})})]})})},E=function(e){var i,n=e.children,t=u.cp.bodyLarge,c=u.O9.lightGrey,l=u.O9.turquoise,d=u.O9.white,x=u.AV.ps,p=u.AV.tl,j=(0,s.Z)(n),m=j[0],g=j[1],f=j.slice(2);return(0,r.jsx)(a.ZP,{item:!0,sx:(i={width:"50%",height:"400px"},(0,o.Z)(i,x,{width:"100%"}),(0,o.Z)(i,p,{width:"50%"}),i),children:(0,r.jsxs)(h.Z,{sx:{backgroundColor:c,width:"100%",height:"100%","&:hover .slide":{transition:"1s",bottom:"0px"},position:"relative",overflow:"hidden"},children:[(0,r.jsx)(a.ZP,{container:!0,direction:"column",justifyContent:"space-around",children:(0,r.jsx)(a.ZP,{item:!0,children:(0,r.jsxs)(h.Z,{sx:{p:6,pb:0},children:[m,g]})})}),(0,r.jsx)(h.Z,{className:"slide",sx:{width:"100%",backgroundColor:l,color:d,height:"400px",position:"absolute",bottom:"-400px",transition:"1s"},children:(0,r.jsx)(h.Z,{sx:(0,S.Z)((0,D.Z)({},t),{color:d,p:6}),children:f})})]})})},z=function(e){var i,n=e.children,t=u.O9.lightGrey,c=u.AV.ps,l=u.AV.tl,d=(0,s.Z)(n),x=d[0],p=d.slice(1);return(0,r.jsx)(m.N,{backgroundColor:t,children:(0,r.jsxs)(a.ZP,{container:!0,sx:{flexDirection:"column"},children:[(0,r.jsx)(a.ZP,{item:!0,children:(0,r.jsx)(h.Z,{sx:{mb:"120px"},children:x})}),(0,r.jsx)(a.ZP,{item:!0,container:!0,direction:"row",spacing:8,sx:(i={flexDirection:"row"},(0,o.Z)(i,c,{flexDirection:"column"}),(0,o.Z)(i,l,{flexDirection:"row"}),i),children:p})]})})},N=function(e){var i,n=e.children,t=u.O9.white,c=u.AV.ps,l=u.AV.tl,d=(0,s.Z)(n),x=d[0],p=d[1],j=d.slice(2);return(0,r.jsx)(a.ZP,{item:!0,sx:(i={width:"50%"},(0,o.Z)(i,c,{width:"100%"}),(0,o.Z)(i,l,{width:"50%"}),i),children:(0,r.jsxs)(h.Z,{sx:{p:6,backgroundColor:t,width:"100%",height:"100%"},children:[x,p,j]})})},I=function(e){var i,n=e.children,t=u.O9.white,c=u.cp.bodyLarge,l=u.AV.ps,d=u.AV.tl,x=(0,s.Z)(n),p=x[0],j=x[1],g=x.slice(2);return(0,r.jsx)(m.N,{backgroundColor:t,children:(0,r.jsxs)(a.ZP,{container:!0,sx:{flexDirection:"column"},children:[(0,r.jsx)(a.ZP,{item:!0,sx:{textAlign:"center"},children:p}),(0,r.jsx)(a.ZP,{item:!0,children:(0,r.jsx)(h.Z,{sx:{textAlign:"center",maxWidth:700,margin:"auto","> p":c},children:j})}),(0,r.jsx)(a.ZP,{item:!0,container:!0,columnSpacing:6,sx:(i={mt:6,flexDirection:"row"},(0,o.Z)(i,l,{flexDirection:"column"}),(0,o.Z)(i,d,{flexDirection:"row"}),i),children:g})]})})},T=n(253),_=n(1664),W=n.n(_),L=n(7066),R=function(e){var i,n=e.children,t=u.O9.lightGrey,s=u.AV.ps,c=u.AV.tl,l=(0,T.Z)(n,3),x=l[0],p=l[1],j=l[2],m=(0,C.po)(x),g=(0,C.Ax)(j);return(0,r.jsx)(a.ZP,{item:!0,sx:(i={width:"33%"},(0,o.Z)(i,s,{width:"100%"}),(0,o.Z)(i,c,{width:"33%"}),i),children:(0,r.jsx)(W(),{href:g,children:(0,r.jsxs)(a.ZP,{container:!0,direction:"column",sx:{backgroundColor:t},children:[(0,r.jsxs)(a.ZP,{item:!0,container:!0,direction:"row",justifyContent:"space-between",children:[(0,r.jsx)(a.ZP,{item:!0,children:(0,r.jsx)(h.Z,{sx:{width:"100%",backgroundColor:t,p:3},children:p})}),(0,r.jsx)(a.ZP,{item:!0,children:(0,r.jsx)(h.Z,{sx:{px:3,py:5},children:(0,r.jsx)(d(),{src:L.default,alt:"",loader:u._m,width:20,height:20})})})]}),(0,r.jsx)(a.ZP,{item:!0,children:(0,r.jsx)(h.Z,{sx:{height:"300px",width:"100%",backgroundImage:"url(".concat(m.src,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",p:3}})})]})})})},G=function(e){var i,n,t,c,l=e.children,d=u.O9.lightGrey,x=u.O9.mediumGrey,p=u.O9.turquoise,j=u.cp.bodyLarge,g=u.cp.outlinedButton,f=u.AV.ps,w=u.AV.tl,Z=(0,s.Z)(l),v=Z[0],y=Z[1],b=Z.slice(2);return(0,r.jsx)(m.N,{backgroundColor:d,children:(0,r.jsxs)(a.ZP,{container:!0,direction:"column",children:[(0,r.jsxs)(a.ZP,{container:!0,item:!0,sx:(i={borderBottom:"1px solid ".concat(x),pb:3,mb:2,flexDirection:"row"},(0,o.Z)(i,f,{flexDirection:"column"}),(0,o.Z)(i,w,{flexDirection:"row"}),i),children:[(0,r.jsx)(a.ZP,{container:!0,direction:"column",item:!0,sx:(n={width:"50%"},(0,o.Z)(n,f,{width:"100%"}),(0,o.Z)(n,w,{width:"50%"}),n),children:v}),(0,r.jsx)(a.ZP,{item:!0,sx:(t={width:"50%"},(0,o.Z)(t,f,{width:"100%"}),(0,o.Z)(t,w,{width:"50%"}),t),children:(0,r.jsx)(h.Z,{sx:{"> p":j},children:y})})]}),(0,r.jsx)(a.ZP,{container:!0,item:!0,spacing:8,sx:(c={mt:0,flexDirection:"row"},(0,o.Z)(c,f,{flexDirection:"column"}),(0,o.Z)(c,w,{flexDirection:"row"}),(0,o.Z)(c,"counterReset","stepCounter"),(0,o.Z)(c,".step",{counterIncrement:"stepCounter"}),(0,o.Z)(c,".step::before",(0,S.Z)((0,D.Z)({},j),{content:"counter(stepCounter, decimal-leading-zero)",color:p,fontWeight:"bold",display:"flex",pl:"10px",pt:"9px"})),(0,o.Z)(c,"a",g),c),children:b})]})})},M=function(e){var i,n=e.children,t=(0,p.qM)(),s=u.cp.body,c=u.O9.white,l=u.AV.ps,d=u.AV.tl;return(0,r.jsx)(a.ZP,{item:!0,flexGrow:1,sx:(i={width:"50%"},(0,o.Z)(i,l,{width:"100%"}),(0,o.Z)(i,d,{width:"50%"}),i),children:(0,r.jsxs)(a.ZP,{container:!0,direction:"column",sx:{backgroundColor:c,p:3,height:"100%"},children:[(0,r.jsxs)(a.ZP,{container:!0,item:!0,direction:"row",spacing:1,alignItems:"center",children:[(0,r.jsx)(a.ZP,{item:!0,children:(0,r.jsx)(h.Z,{className:"step"})}),(0,r.jsx)(a.ZP,{item:!0,children:(0,r.jsx)(h.Z,{component:"p",sx:(0,D.Z)({},s),children:t("step")})})]}),(0,r.jsx)(a.ZP,{item:!0,children:n})]})})};function $(e){var i=Object.assign({h1:"h1",em:"em",strong:"strong",p:"p",h2:"h2",img:"img",h5:"h5",ul:"ul",li:"li",a:"a",hr:"hr"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(v,{children:[(0,r.jsxs)(i.h1,{children:["Our App, ",(0,r.jsx)(i.em,{children:(0,r.jsx)(i.strong,{children:"Save"})})]}),(0,r.jsx)(i.p,{children:"Anyone with a phone can expose global injustice. Anyone with Save can preserve truth to power."}),(0,r.jsx)(i.h2,{children:"More"}),(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.em,{children:(0,r.jsx)(i.strong,{children:"Save"})})," is an easy-to-use mobile app designed to help you store, share, and amplify your mobile media while protecting your identity. It's also free, open-source, and available for iOS. Watch out for our new Android app, coming soon!"]}),(0,r.jsxs)(i.p,{children:["Our smartphone media plays a critical role in exposing global injustice every day \u2014 however eyewitnesses and human rights defenders need better tools  to ensure the evidence they've captured is shared and stored securely. Enter ",(0,r.jsx)(i.em,{children:(0,r.jsx)(i.strong,{children:"Save"})}),". Designed with extensive community input, the app shifts power into the hands of those on the frontlines by streamlining media workflows to facilitate rapid response and reporting. With ",(0,r.jsx)(i.em,{children:(0,r.jsx)(i.strong,{children:"Save"})}),", you can now safely share, archive, verify, and encrypt your media without fear of censorship, surveillance, or retribution."]})]}),"\n",(0,r.jsxs)(P,{children:[(0,r.jsxs)(A,{children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"save-share.svg",alt:"",width:"588",height:"429"})}),(0,r.jsxs)(i.h2,{children:[(0,r.jsx)(i.strong,{children:"S"}),"hare"]}),(0,r.jsx)(i.p,{children:"Upload your verified media to your own secure server such as Nextcloud, Internet Archive, or DropBox."}),(0,r.jsx)(i.p,{children:"Access your shared media and communicate your intentions for future use by adding a Creative Commons license, allowing others to reuse or remix it."})]}),(0,r.jsxs)(A,{children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"save-archive.svg",alt:"",width:"588",height:"429"})}),(0,r.jsxs)(i.h2,{children:[(0,r.jsx)(i.strong,{children:"A"}),"rchive"]}),(0,r.jsx)(i.p,{children:"Keep your media safe and organized for the long-term by saving multiple copies on non-commercial secure servers."}),(0,r.jsx)(i.p,{children:"Create in-app project folders that map to your personal or organizational media archive."})]}),(0,r.jsxs)(A,{children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"save-verify.svg",alt:"",width:"588",height:"429"})}),(0,r.jsxs)(i.h2,{children:[(0,r.jsx)(i.strong,{children:"V"}),"erify"]}),(0,r.jsx)(i.p,{children:"Authenticate and verify your media with sha256 hashes and optional ProofMode."}),(0,r.jsx)(i.p,{children:"Capture and include critical metadata like notes, people, and location with each upload."})]}),(0,r.jsxs)(A,{children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"save-encrypt.svg",alt:"",width:"588",height:"429"})}),(0,r.jsxs)(i.h2,{children:[(0,r.jsx)(i.strong,{children:"E"}),"ncrypt"]}),(0,r.jsx)(i.p,{children:"Automatically upload over TLS (Transport Layer Security) to protect your media in transit."}),(0,r.jsx)(i.p,{children:"To further enhance security, install Orbot on Android (a.k.a Tor for mobile) to prevent interception of your media while it travels from your phone to its destination."})]})]}),"\n",(0,r.jsxs)(k,{children:[(0,r.jsxs)(i.h2,{children:[(0,r.jsx)(i.strong,{children:"Who"})," we serve"]}),(0,r.jsx)(i.h5,{children:"We designed Save with and for human rights defenders worldwide, including:"}),(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Human rights organizations collecting evidence of human rights violations"}),"\n",(0,r.jsx)(i.li,{children:"Academic organizations accepting targeted media from the field"}),"\n",(0,r.jsx)(i.li,{children:"Journalists and news organizations receiving sensitive information from vulnerable sources whose identity and information must be protected from interception;"}),"\n",(0,r.jsx)(i.li,{children:"Archivists and librarians creating community collections at the Internet Archive or other digital libraries"}),"\n",(0,r.jsx)(i.li,{children:"Individuals, freelance documentarians, and citizen journalists curating their own mobile media collections."}),"\n"]})]}),"\n",(0,r.jsxs)(V,{children:[(0,r.jsxs)(i.h2,{children:[(0,r.jsx)(i.strong,{children:"Core"})," features"]}),(0,r.jsx)(i.p,{children:"Unlike other media-sharing tools, Save offers a suite of responsive features that streamline secure preservation based on community input and our commitment to digital inclusion."}),(0,r.jsxs)(E,{children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"core-authenticate.svg",alt:"",width:"60",height:"60"})}),(0,r.jsx)(i.h5,{children:"Authenticate media"}),(0,r.jsx)(i.p,{children:"Description goes here"})]}),(0,r.jsxs)(E,{children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"core-transit.svg",alt:"",width:"60",height:"60"})}),(0,r.jsx)(i.h5,{children:"Secure transit"}),(0,r.jsx)(i.p,{children:"Save always uses TLS (Transport Layer Security) to ensure in-transit security and encryption. When you enable Tor for mobile (either via Orbot: Tor for Android or Onion Browser for iOS), you add an additional layer of protection to ensure no one intercepts your media as it travels from your phone to the Internet Archive or your server of choice."})]}),(0,r.jsxs)(E,{children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"core-preservation.svg",alt:"",width:"60",height:"60"})}),(0,r.jsx)(i.h5,{children:"Long-term Preservation"}),(0,r.jsx)(i.p,{children:"Description goes here"})]}),(0,r.jsxs)(E,{children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"core-licensing.svg",alt:"",width:"60",height:"60"})}),(0,r.jsx)(i.h5,{children:"Licensing"}),(0,r.jsx)(i.p,{children:"Description goes here"})]}),(0,r.jsxs)(E,{children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"core-organized.svg",alt:"",width:"60",height:"60"})}),(0,r.jsx)(i.h5,{children:"Stay Organized"}),(0,r.jsx)(i.p,{children:"Description goes here"})]})]}),"\n",(0,r.jsxs)(z,{children:[(0,r.jsxs)(i.h2,{children:[(0,r.jsx)(i.strong,{children:"Additional"})," features"]}),(0,r.jsxs)(N,{children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"additional-metadata.svg",alt:"",width:"60",height:"60"})}),(0,r.jsx)(i.h5,{children:"Add metadata"}),(0,r.jsx)(i.p,{children:"Description goes here"})]}),(0,r.jsxs)(N,{children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"additional-flag.svg",alt:"",width:"60",height:"60"})}),(0,r.jsx)(i.h5,{children:"Flag significant content"}),(0,r.jsx)(i.p,{children:"Description goes here"})]})]}),"\n",(0,r.jsxs)(I,{children:[(0,r.jsxs)(i.h2,{children:["More about ",(0,r.jsx)(i.em,{children:(0,r.jsx)(i.strong,{children:"Save"})})]}),(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.em,{children:(0,r.jsx)(i.strong,{children:"Save"})})," protects internet freedom by leveraging a suite of privacy-enhancing technologies to safeguard your media and identity in the event of internet shutdowns, surveillance, device confiscations, content takedowns, limited bandwidth, and data loss."]}),(0,r.jsxs)(R,{children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"more-press.png",alt:"",width:"780",height:"576"})}),(0,r.jsx)(i.h5,{children:"Press"}),(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"/news"})})]}),(0,r.jsxs)(R,{children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"more-guides.png",alt:"",width:"752",height:"608"})}),(0,r.jsx)(i.h5,{children:"Guides"}),(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"/guides"})})]}),(0,r.jsxs)(R,{children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"more-videos.png",alt:"",width:"780",height:"576"})}),(0,r.jsx)(i.h5,{children:"Videos"}),(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"https://youtube.com/channel/UCE91tUcpuC93VtcBvJ8vqcQ"})})]})]}),"\n",(0,r.jsxs)(G,{children:[(0,r.jsxs)(i.h2,{children:["Getting ",(0,r.jsx)(i.strong,{children:"Started"})]}),(0,r.jsx)(i.p,{children:"To get started, simply follow these easy steps!"}),(0,r.jsxs)(M,{children:[(0,r.jsx)(i.p,{children:"Download Save from the iOS App store and watch for our new android app, coming soon!"}),(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"https://apps.apple.com/us/app/save-by-openarchive/id1462212414",children:"App Store"})}),(0,r.jsx)(i.hr,{}),(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"https://github.com/OpenArchive/Save-app-android",children:"Android"}),"\n",(0,r.jsx)(i.a,{href:"https://apps.apple.com/us/app/save-by-openarchive/id1462212414",children:"iOS"})]})]}),(0,r.jsxs)(M,{children:[(0,r.jsx)(i.p,{children:"Maximize the effects of Save's privacy-enhancing features by downloading Orbot (Tor for mobile)"}),(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"https://play.google.com/store/apps/details?id=org.torproject.android&hl=en&gl=US",children:"Google Play"}),"\n",(0,r.jsx)(i.a,{href:"https://apps.apple.com/us/app/orbot/id1609461599",children:"App Store"})]})]}),(0,r.jsxs)(M,{children:[(0,r.jsx)(i.p,{children:"Watch our video tutorials and follow along on your phone"}),(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"https://youtu.be/dOG0_4wVgT8"})})]})]})]})}var q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=Object.assign({},(0,t.ah)(),e.components),n=i.wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)($,e)})):$(e)}},9846:function(){}},function(e){e.O(0,[928,774,888,179],(function(){return i=6971,e(e.s=i);var i}));var i=e.O();_N_E=i}]);