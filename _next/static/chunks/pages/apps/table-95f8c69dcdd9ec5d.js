(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[423],{8456:function(e,r,t){"use strict";t.d(r,{Z:function(){return R}});var a=t(3366),i=t(7462),o=t(7294),n=t(6010),l=t(4780),s=t(917),c=t(8216),d=t(1657),u=t(948),p=t(1588),h=t(4867);function g(e){return(0,h.Z)("MuiCircularProgress",e)}(0,p.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var m=t(5893);let x=["className","color","disableShrink","size","style","thickness","value","variant"],v=e=>e,f,Z,b,y,j=(0,s.F4)(f||(f=v`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),k=(0,s.F4)(Z||(Z=v`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),w=e=>{let{classes:r,variant:t,color:a,disableShrink:i}=e,o={root:["root",t,`color${(0,c.Z)(a)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(t)}`,i&&"circleDisableShrink"]};return(0,l.Z)(o,g,r)},C=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,c.Z)(t.color)}`]]}})(({ownerState:e,theme:r})=>(0,i.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:(r.vars||r).palette[e.color].main}),({ownerState:e})=>"indeterminate"===e.variant&&(0,s.iv)(b||(b=v`
      animation: ${0} 1.4s linear infinite;
    `),j)),N=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),M=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.circle,r[`circle${(0,c.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})(({ownerState:e,theme:r})=>(0,i.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,s.iv)(y||(y=v`
      animation: ${0} 1.4s ease-in-out infinite;
    `),k)),T=o.forwardRef(function(e,r){let t=(0,d.Z)({props:e,name:"MuiCircularProgress"}),{className:o,color:l="primary",disableShrink:s=!1,size:c=40,style:u,thickness:p=3.6,value:h=0,variant:g="indeterminate"}=t,v=(0,a.Z)(t,x),f=(0,i.Z)({},t,{color:l,disableShrink:s,size:c,thickness:p,value:h,variant:g}),Z=w(f),b={},y={},j={};if("determinate"===g){let e=2*Math.PI*((44-p)/2);b.strokeDasharray=e.toFixed(3),j["aria-valuenow"]=Math.round(h),b.strokeDashoffset=`${((100-h)/100*e).toFixed(3)}px`,y.transform="rotate(-90deg)"}return(0,m.jsx)(C,(0,i.Z)({className:(0,n.Z)(Z.root,o),style:(0,i.Z)({width:c,height:c},y,u),ownerState:f,ref:r,role:"progressbar"},j,v,{children:(0,m.jsx)(N,{className:Z.svg,ownerState:f,viewBox:"22 22 44 44",children:(0,m.jsx)(M,{className:Z.circle,style:b,ownerState:f,cx:44,cy:44,r:(44-p)/2,fill:"none",strokeWidth:p})})}))});var R=T},2981:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apps/table",function(){return t(7617)}])},9665:function(e,r,t){"use strict";var a=t(5893),i=t(3156);let o=()=>(0,a.jsx)("footer",{children:(0,a.jsx)("div",{className:"py-8 border-t",children:(0,a.jsx)(i.Z,{children:(0,a.jsx)("p",{children:"\xa9 2023 Solid"})})})});r.Z=o},4960:function(e,r,t){"use strict";t.d(r,{Z:function(){return m}});var a=t(5893),i=t(3156),o=t(1664),n=t.n(o),l=t(8201),s=t(7720),c=t(3946),d=t(8892),u=t(3599),p=t(7294);let h=()=>{let[e,r]=(0,p.useState)(null),t=e=>r(e.currentTarget),i=()=>r(null);return(0,a.jsxs)("div",{children:[(0,a.jsx)(c.Z,{onClick:t,sx:{padding:0},children:(0,a.jsx)(l.Z,{fontSize:"large"})}),(0,a.jsxs)(d.Z,{id:"basic-menu",anchorEl:e,open:!!e,onClose:i,children:[(0,a.jsx)(u.Z,{onClick:i,children:(0,a.jsx)(n(),{href:"/user/profile",children:"Profile"})}),(0,a.jsx)(u.Z,{onClick:i,children:(0,a.jsx)(n(),{href:"/user/settings",children:"Settings"})}),(0,a.jsx)(s.Z,{}),(0,a.jsx)(u.Z,{onClick:i,children:"Sign Out"})]})]})},g=()=>(0,a.jsx)("nav",{children:(0,a.jsx)("div",{className:"py-8 border-b",children:(0,a.jsx)(i.Z,{children:(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4 uppercase",children:[(0,a.jsx)("h1",{className:"text-2xl",children:(0,a.jsx)(n(),{href:"/apps",children:"Solid"})}),(0,a.jsx)(n(),{href:"/apps/chart",children:"Chart"}),(0,a.jsx)(n(),{href:"/apps/table",children:"Table"}),(0,a.jsx)(n(),{href:"/apps/calendar",children:"Calendar"})]}),(0,a.jsx)("div",{children:(0,a.jsx)(h,{})})]})})})});var m=g},5131:function(e,r,t){"use strict";var a=t(7294);let i=e=>{let[r,t]=(0,a.useState)({loading:!1,error:null,data:null}),[i,o]=(0,a.useState)(0),n=(0,a.useCallback)(()=>o(e=>e+1),[]);return(0,a.useEffect)(()=>{let r=async()=>{t({loading:!0,error:null,data:null});try{let r=await fetch(e),a=await r.json();t({loading:!1,error:null,data:a})}catch(e){t({loading:!1,error:e,data:null})}};r()},[i]),{...r,refetch:n}};r.Z=i},7617:function(e,r,t){"use strict";t.r(r),t.d(r,{TablePage:function(){return en},default:function(){return el}});var a=t(5893),i=t(8456),o=t(3156),n=t(629),l=t(3366),s=t(7462),c=t(7294),d=t(6010),u=t(4780);let p=c.createContext();var h=t(1657),g=t(948),m=t(1588),x=t(4867);function v(e){return(0,x.Z)("MuiTable",e)}(0,m.Z)("MuiTable",["root","stickyHeader"]);let f=["className","component","padding","size","stickyHeader"],Z=e=>{let{classes:r,stickyHeader:t}=e;return(0,u.Z)({root:["root",t&&"stickyHeader"]},v,r)},b=(0,g.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,t.stickyHeader&&r.stickyHeader]}})(({theme:e,ownerState:r})=>(0,s.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,s.Z)({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},r.stickyHeader&&{borderCollapse:"separate"})),y="table",j=c.forwardRef(function(e,r){let t=(0,h.Z)({props:e,name:"MuiTable"}),{className:i,component:o=y,padding:n="normal",size:u="medium",stickyHeader:g=!1}=t,m=(0,l.Z)(t,f),x=(0,s.Z)({},t,{component:o,padding:n,size:u,stickyHeader:g}),v=Z(x),j=c.useMemo(()=>({padding:n,size:u,stickyHeader:g}),[n,u,g]);return(0,a.jsx)(p.Provider,{value:j,children:(0,a.jsx)(b,(0,s.Z)({as:o,role:o===y?null:"table",ref:r,className:(0,d.Z)(v.root,i),ownerState:x},m))})}),k=c.createContext();function w(e){return(0,x.Z)("MuiTableBody",e)}(0,m.Z)("MuiTableBody",["root"]);let C=["className","component"],N=e=>{let{classes:r}=e;return(0,u.Z)({root:["root"]},w,r)},M=(0,g.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,r)=>r.root})({display:"table-row-group"}),T={variant:"body"},R="tbody",S=c.forwardRef(function(e,r){let t=(0,h.Z)({props:e,name:"MuiTableBody"}),{className:i,component:o=R}=t,n=(0,l.Z)(t,C),c=(0,s.Z)({},t,{component:o}),u=N(c);return(0,a.jsx)(k.Provider,{value:T,children:(0,a.jsx)(M,(0,s.Z)({className:(0,d.Z)(u.root,i),as:o,ref:r,role:o===R?null:"rowgroup",ownerState:c},n))})});var P=t(1796),$=t(8216);function H(e){return(0,x.Z)("MuiTableCell",e)}let z=(0,m.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),_=["align","className","component","padding","scope","size","sortDirection","variant"],D=e=>{let{classes:r,variant:t,align:a,padding:i,size:o,stickyHeader:n}=e,l={root:["root",t,n&&"stickyHeader","inherit"!==a&&`align${(0,$.Z)(a)}`,"normal"!==i&&`padding${(0,$.Z)(i)}`,`size${(0,$.Z)(o)}`]};return(0,u.Z)(l,H,r)},O=(0,g.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[t.variant],r[`size${(0,$.Z)(t.size)}`],"normal"!==t.padding&&r[`padding${(0,$.Z)(t.padding)}`],"inherit"!==t.align&&r[`align${(0,$.Z)(t.align)}`],t.stickyHeader&&r.stickyHeader]}})(({theme:e,ownerState:r})=>(0,s.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${"light"===e.palette.mode?(0,P.$n)((0,P.Fq)(e.palette.divider,1),.88):(0,P._j)((0,P.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===r.variant&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===r.variant&&{color:(e.vars||e).palette.text.primary},"footer"===r.variant&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===r.size&&{padding:"6px 16px",[`&.${z.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===r.padding&&{width:48,padding:"0 0 0 4px"},"none"===r.padding&&{padding:0},"left"===r.align&&{textAlign:"left"},"center"===r.align&&{textAlign:"center"},"right"===r.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===r.align&&{textAlign:"justify"},r.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),F=c.forwardRef(function(e,r){let t;let i=(0,h.Z)({props:e,name:"MuiTableCell"}),{align:o="inherit",className:n,component:u,padding:g,scope:m,size:x,sortDirection:v,variant:f}=i,Z=(0,l.Z)(i,_),b=c.useContext(p),y=c.useContext(k),j=y&&"head"===y.variant,w=m;"td"===(t=u||(j?"th":"td"))?w=void 0:!w&&j&&(w="col");let C=f||y&&y.variant,N=(0,s.Z)({},i,{align:o,component:t,padding:g||(b&&b.padding?b.padding:"normal"),size:x||(b&&b.size?b.size:"medium"),sortDirection:v,stickyHeader:"head"===C&&b&&b.stickyHeader,variant:C}),M=D(N),T=null;return v&&(T="asc"===v?"ascending":"descending"),(0,a.jsx)(O,(0,s.Z)({as:t,ref:r,className:(0,d.Z)(M.root,n),"aria-sort":T,scope:w,ownerState:N},Z))});function A(e){return(0,x.Z)("MuiTableContainer",e)}(0,m.Z)("MuiTableContainer",["root"]);let E=["className","component"],B=e=>{let{classes:r}=e;return(0,u.Z)({root:["root"]},A,r)},q=(0,g.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,r)=>r.root})({width:"100%",overflowX:"auto"}),I=c.forwardRef(function(e,r){let t=(0,h.Z)({props:e,name:"MuiTableContainer"}),{className:i,component:o="div"}=t,n=(0,l.Z)(t,E),c=(0,s.Z)({},t,{component:o}),u=B(c);return(0,a.jsx)(q,(0,s.Z)({ref:r,as:o,className:(0,d.Z)(u.root,i),ownerState:c},n))});function W(e){return(0,x.Z)("MuiTableHead",e)}(0,m.Z)("MuiTableHead",["root"]);let X=["className","component"],J=e=>{let{classes:r}=e;return(0,u.Z)({root:["root"]},W,r)},L=(0,g.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,r)=>r.root})({display:"table-header-group"}),G={variant:"head"},K="thead",Q=c.forwardRef(function(e,r){let t=(0,h.Z)({props:e,name:"MuiTableHead"}),{className:i,component:o=K}=t,n=(0,l.Z)(t,X),c=(0,s.Z)({},t,{component:o}),u=J(c);return(0,a.jsx)(k.Provider,{value:G,children:(0,a.jsx)(L,(0,s.Z)({as:o,className:(0,d.Z)(u.root,i),ref:r,role:o===K?null:"rowgroup",ownerState:c},n))})});function U(e){return(0,x.Z)("MuiTableRow",e)}let V=(0,m.Z)("MuiTableRow",["root","selected","hover","head","footer"]),Y=["className","component","hover","selected"],ee=e=>{let{classes:r,selected:t,hover:a,head:i,footer:o}=e;return(0,u.Z)({root:["root",t&&"selected",a&&"hover",i&&"head",o&&"footer"]},U,r)},er=(0,g.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,t.head&&r.head,t.footer&&r.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${V.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${V.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,P.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,P.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),et=c.forwardRef(function(e,r){let t=(0,h.Z)({props:e,name:"MuiTableRow"}),{className:i,component:o="tr",hover:n=!1,selected:u=!1}=t,p=(0,l.Z)(t,Y),g=c.useContext(k),m=(0,s.Z)({},t,{component:o,hover:n,selected:u,head:g&&"head"===g.variant,footer:g&&"footer"===g.variant}),x=ee(m);return(0,a.jsx)(er,(0,s.Z)({as:o,ref:r,className:(0,d.Z)(x.root,i),role:"tr"===o?null:"row",ownerState:m},p))});var ea=t(9665),ei=t(4960),eo=t(5131);let en=()=>{var e;let{loading:r,data:t}=(0,eo.Z)("https://restcountries.com/v3.1/all");return(0,a.jsxs)("main",{className:"min-h-screen flex flex-col",children:[(0,a.jsx)(ei.Z,{}),(0,a.jsxs)("div",{className:"grow",children:[r?(0,a.jsx)(o.Z,{className:"py-8",children:(0,a.jsx)("div",{className:"h-full flex items-center justify-center",children:(0,a.jsx)("div",{className:"w-16 mx-auto",children:(0,a.jsx)(i.Z,{size:"4rem",className:"mx-auto block"})})})}):(0,a.jsx)(a.Fragment,{}),(0,a.jsx)("section",{className:"py-8",children:(0,a.jsx)(o.Z,{children:(0,a.jsx)(n.Z,{className:"border",children:(0,a.jsx)(I,{children:(0,a.jsxs)(j,{children:[(0,a.jsx)(Q,{children:(0,a.jsxs)(et,{children:[(0,a.jsx)(F,{children:"Name"}),(0,a.jsx)(F,{align:"center",children:"ISO 3166-1"}),(0,a.jsx)(F,{align:"right",children:"Region"}),(0,a.jsx)(F,{align:"right",children:"Subregion"})]})}),(0,a.jsx)(S,{children:null===(e=t||[])||void 0===e?void 0:e.sort((e,r)=>e.region===r.region?e.subregion===r.subregion?e.name.common>r.name.common?1:-1:e.subregion>r.subregion?1:-1:e.region>r.region?1:-1).map(e=>(0,a.jsxs)(et,{children:[(0,a.jsxs)(F,{children:[e.flag," ",e.name.common]}),(0,a.jsxs)(F,{align:"center",children:[e.cca2," - ",e.cca3]}),(0,a.jsx)(F,{align:"right",children:e.region}),(0,a.jsx)(F,{align:"right",children:e.subregion})]},"country-".concat(e.cca2)))})]})})})})})]}),(0,a.jsx)(ea.Z,{})]})};var el=en}},function(e){e.O(0,[324,709,708,774,888,179],function(){return e(e.s=2981)}),_N_E=e.O()}]);