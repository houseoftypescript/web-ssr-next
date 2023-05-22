(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3321:function(e,t,a){"use strict";a.d(t,{Z:function(){return C}});var o=a(7294),n=a(6010),r=a(7925),i=a(4780),l=a(1796),s=a(948),d=a(1657),c=a(7739),p=a(8216),u=a(1588),h=a(4867);function v(e){return(0,h.Z)("MuiButton",e)}let x=(0,u.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),m=o.createContext({});var g=a(5893);let b=e=>{let{color:t,disableElevation:a,fullWidth:o,size:n,variant:r,classes:l}=e,s={root:["root",r,`${r}${(0,p.Z)(t)}`,`size${(0,p.Z)(n)}`,`${r}Size${(0,p.Z)(n)}`,"inherit"===t&&"colorInherit",a&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,p.Z)(n)}`],endIcon:["endIcon",`iconSize${(0,p.Z)(n)}`]},d=(0,i.Z)(s,v,l);return{...l,...d}},S=e=>({..."small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},..."medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},..."large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}}),f=(0,s.ZP)(c.Z,{shouldForwardProp:e=>(0,s.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,t[a.variant],t[`${a.variant}${(0,p.Z)(a.color)}`],t[`size${(0,p.Z)(a.size)}`],t[`${a.variant}Size${(0,p.Z)(a.size)}`],"inherit"===a.color&&t.colorInherit,a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var a,o;let n="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],r="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return{...e.typography.button,minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},..."text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},..."outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},..."contained"===t.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:r,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},..."contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}},"&:active":{..."contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}},[`&.${x.focusVisible}`]:{..."contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}},[`&.${x.disabled}`]:{color:(e.vars||e).palette.action.disabled,..."outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},..."contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}},..."text"===t.variant&&{padding:"6px 8px"},..."text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},..."outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},..."outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,l.Fq)(e.palette[t.color].main,.5)}`},..."contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(a=(o=e.palette).getContrastText)?void 0:a.call(o,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:n,boxShadow:(e.vars||e).shadows[2]},..."contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},..."inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},..."small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},..."large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},..."small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},..."large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},..."small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},..."large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},...t.fullWidth&&{width:"100%"}}},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${x.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${x.disabled}`]:{boxShadow:"none"}}),z=(0,s.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.startIcon,t[`iconSize${(0,p.Z)(a.size)}`]]}})(({ownerState:e})=>({display:"inherit",marginRight:8,marginLeft:-4,..."small"===e.size&&{marginLeft:-2},...S(e)})),y=(0,s.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.endIcon,t[`iconSize${(0,p.Z)(a.size)}`]]}})(({ownerState:e})=>({display:"inherit",marginRight:-4,marginLeft:8,..."small"===e.size&&{marginRight:-2},...S(e)})),w=o.forwardRef(function(e,t){let a=o.useContext(m),i=(0,r.Z)(a,e),l=(0,d.Z)({props:i,name:"MuiButton"}),{children:s,color:c="primary",component:p="button",className:u,disabled:h=!1,disableElevation:v=!1,disableFocusRipple:x=!1,endIcon:S,focusVisibleClassName:w,fullWidth:C=!1,size:$="medium",startIcon:I,type:Z,variant:k="text",...R}=l,N={...l,color:c,component:p,disabled:h,disableElevation:v,disableFocusRipple:x,fullWidth:C,size:$,type:Z,variant:k},E=b(N),B=I&&(0,g.jsx)(z,{className:E.startIcon,ownerState:N,children:I}),M=S&&(0,g.jsx)(y,{className:E.endIcon,ownerState:N,children:S});return(0,g.jsxs)(f,{ownerState:N,className:(0,n.Z)(a.className,E.root,u),component:p,disabled:h,focusRipple:!x,focusVisibleClassName:(0,n.Z)(E.focusVisible,w),ref:t,type:Z,...R,classes:E,children:[B,s,M]})});var C=w},8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(85)}])},85:function(e,t,a){"use strict";a.r(t);var o=a(5893),n=a(3321),r=a(1664),i=a.n(r);let l=()=>(0,o.jsx)("main",{className:"w-full h-screen flex items-center justify-center",children:(0,o.jsxs)("div",{className:"flex flex-col gap-4 text-center uppercase",children:[(0,o.jsx)("h1",{className:"text-9xl font-bold uppercase",children:"Next.js"}),(0,o.jsx)("p",{className:"text-3xl",children:"TypeScript + Tailwind CSS + Material UI"}),(0,o.jsx)(i(),{href:"/auth/sign-in",children:(0,o.jsx)(n.Z,{variant:"contained",fullWidth:!0,children:"Sign In"})})]})});t.default=l}},function(e){e.O(0,[324,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);