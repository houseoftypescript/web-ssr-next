(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[752],{6172:function(e,t,a){"use strict";var n=a(4836);t.Z=void 0;var r=n(a(4938)),i=a(5893),o=(0,r.default)((0,i.jsx)("path",{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeft");t.Z=o},8317:function(e,t,a){"use strict";var n=a(4836);t.Z=void 0;var r=n(a(4938)),i=a(5893),o=(0,r.default)((0,i.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight");t.Z=o},3321:function(e,t,a){"use strict";a.d(t,{Z:function(){return C}});var n=a(3366),r=a(7462),i=a(7294),o=a(6010),s=a(7925),l=a(4780),d=a(1796),c=a(948),h=a(1657),p=a(7739),x=a(8216),m=a(1588),u=a(4867);function v(e){return(0,u.Z)("MuiButton",e)}let g=(0,m.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),y=i.createContext({});var j=a(5893);let b=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],f=e=>{let{color:t,disableElevation:a,fullWidth:n,size:i,variant:o,classes:s}=e,d={root:["root",o,`${o}${(0,x.Z)(t)}`,`size${(0,x.Z)(i)}`,`${o}Size${(0,x.Z)(i)}`,"inherit"===t&&"colorInherit",a&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,x.Z)(i)}`],endIcon:["endIcon",`iconSize${(0,x.Z)(i)}`]},c=(0,l.Z)(d,v,s);return(0,r.Z)({},s,c)},N=e=>(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),S=(0,c.ZP)(p.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,t[a.variant],t[`${a.variant}${(0,x.Z)(a.color)}`],t[`size${(0,x.Z)(a.size)}`],t[`${a.variant}Size${(0,x.Z)(a.size)}`],"inherit"===a.color&&t.colorInherit,a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var a,n;let i="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],o="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,r.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:o,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${g.focusVisible}`]:(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${g.disabled}`]:(0,r.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(a=(n=e.palette).getContrastText)?void 0:a.call(n,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:i,boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${g.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${g.disabled}`]:{boxShadow:"none"}}),Z=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.startIcon,t[`iconSize${(0,x.Z)(a.size)}`]]}})(({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},N(e))),z=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.endIcon,t[`iconSize${(0,x.Z)(a.size)}`]]}})(({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},N(e))),w=i.forwardRef(function(e,t){let a=i.useContext(y),l=(0,s.Z)(a,e),d=(0,h.Z)({props:l,name:"MuiButton"}),{children:c,color:p="primary",component:x="button",className:m,disabled:u=!1,disableElevation:v=!1,disableFocusRipple:g=!1,endIcon:N,focusVisibleClassName:w,fullWidth:C=!1,size:k="medium",startIcon:I,type:$,variant:M="text"}=d,D=(0,n.Z)(d,b),R=(0,r.Z)({},d,{color:p,component:x,disabled:u,disableElevation:v,disableFocusRipple:g,fullWidth:C,size:k,type:$,variant:M}),E=f(R),T=I&&(0,j.jsx)(Z,{className:E.startIcon,ownerState:R,children:I}),F=N&&(0,j.jsx)(z,{className:E.endIcon,ownerState:R,children:N});return(0,j.jsxs)(S,(0,r.Z)({ownerState:R,className:(0,o.Z)(a.className,E.root,m),component:x,disabled:u,focusRipple:!g,focusVisibleClassName:(0,o.Z)(E.focusVisible,w),ref:t,type:$},D,{classes:E,children:[T,c,F]}))});var C=w},7975:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apps/calendar",function(){return a(8763)}])},9665:function(e,t,a){"use strict";var n=a(5893),r=a(3156);let i=()=>(0,n.jsx)("footer",{children:(0,n.jsx)("div",{className:"py-8 border-t",children:(0,n.jsx)(r.Z,{children:(0,n.jsx)("p",{children:"\xa9 2023 Solid"})})})});t.Z=i},4960:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(5893),r=a(3156),i=a(1664),o=a.n(i),s=a(8201),l=a(7720),d=a(3946),c=a(5709),h=a(3599),p=a(7294);let x=()=>{let[e,t]=(0,p.useState)(null),a=e=>t(e.currentTarget),r=()=>t(null);return(0,n.jsxs)("div",{children:[(0,n.jsx)(d.Z,{onClick:a,sx:{padding:0},children:(0,n.jsx)(s.Z,{fontSize:"large"})}),(0,n.jsxs)(c.Z,{id:"basic-menu",anchorEl:e,open:!!e,onClose:r,children:[(0,n.jsx)(h.Z,{onClick:r,children:(0,n.jsx)(o(),{href:"/user/profile",children:"Profile"})}),(0,n.jsx)(h.Z,{onClick:r,children:(0,n.jsx)(o(),{href:"/user/settings",children:"Settings"})}),(0,n.jsx)(l.Z,{}),(0,n.jsx)(h.Z,{onClick:r,children:"Sign Out"})]})]})},m=()=>(0,n.jsx)("nav",{children:(0,n.jsx)("div",{className:"py-8 border-b",children:(0,n.jsx)(r.Z,{children:(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsxs)("div",{className:"flex items-center gap-4 uppercase",children:[(0,n.jsx)("h1",{className:"text-2xl",children:(0,n.jsx)(o(),{href:"/apps",children:"Solid"})}),(0,n.jsx)(o(),{href:"/apps/chart",children:"Chart"}),(0,n.jsx)(o(),{href:"/apps/table",children:"Table"}),(0,n.jsx)(o(),{href:"/apps/calendar",children:"Calendar"})]}),(0,n.jsx)("div",{children:(0,n.jsx)(x,{})})]})})})});var u=m},8763:function(e,t,a){"use strict";a.r(t),a.d(t,{CalendarPage:function(){return z},default:function(){return w}});var n=a(5893),r=a(3156),i=a(629),o=a(6172),s=a(8317),l=a(3321),d=a(4054),c=a(3946),h=a(3841),p=a(3599),x=a(315);let m=e=>e>9?"".concat(e):"0".concat(e),u=e=>{let{type:t,date:a,month:r,year:i,iDate:o,iMonth:s,iYear:l,description:d=""}=e;return"yearly"===t&&r===s&&a===o||i===l&&r===s&&a===o?(0,n.jsxs)("div",{className:"rounded p-2 truncate bg-blue-500 text-white flex items-center gap-2 cursor-pointer",onClick:()=>{},children:[(0,n.jsx)("div",{className:"w-4 h-4 bg-white rounded-full"}),(0,n.jsx)("div",{className:"text-sm",children:d})]}):(0,n.jsx)(n.Fragment,{})};var v=a(7294);let g=[{short:"Jan",long:"January"},{short:"Feb",long:"February"},{short:"Mar",long:"March"},{short:"Apr",long:"April"},{short:"May",long:"May"},{short:"Jun",long:"June"},{short:"Jul",long:"July"},{short:"Aug",long:"August"},{short:"Sep",long:"September"},{short:"Oct",long:"October"},{short:"Nov",long:"November"},{short:"Dec",long:"December"}],y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],j={1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31},b=(e,t)=>{let a=new Date(t,e-1,1),n=a.getDay(),r=Array.from(Array(n).keys()).map((a,n,r)=>{let i=1===e?12:e-1,o=1===e?t-1:t,s=j[i],l=s-r.length+a+1,d=new Date(o,i-1,l).getDay();return{day:d,date:l,month:i,year:o}});for(let a=1;a<=j[e];a++){let n=new Date(t,e-1,a).getDay();r.push({day:n,date:a,month:e,year:t})}let i=new Date(t,e-1,j[e]),o=i.getDay();if(o<6){let a=12===e?1:e+1,n=12===e?t+1:t;for(let e=0;e<6-o;e++){let t=new Date(n,a-1,e+1).getDay();r.push({day:t,date:e+1,month:a,year:n})}}return r},f=e=>{let{day:t,date:a,month:r,year:i}=e;return(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)("p",{children:y[t]}),(0,n.jsxs)("p",{children:[m(a),"/",m(r),"/",i]})]})},N=e=>{let{day:t,date:a,month:r,year:i,initDate:o,initMonth:s,initYear:l,currentMonth:d,currentYear:c}=e;return a===o&&r===s&&i===l?(0,n.jsxs)("div",{className:"text-right font-bold px-2",children:[(0,n.jsx)("div",{className:"hidden md:block",children:a}),(0,n.jsx)("div",{className:"block md:hidden",children:(0,n.jsx)(f,{day:t,date:a,month:r,year:i})})]}):i!==c?(0,n.jsxs)("div",{className:"text-right text-black/50 px-2",children:[(0,n.jsxs)("div",{className:"hidden md:block",children:[a,"/",r,"/",i.toString().slice(2)]}),(0,n.jsx)("div",{className:"block md:hidden",children:(0,n.jsx)(f,{day:t,date:a,month:r,year:i})})]}):r!==d?(0,n.jsxs)("div",{className:"text-right text-black/50 px-2",children:[(0,n.jsxs)("div",{className:"hidden md:block",children:[a,"/",r]}),(0,n.jsx)("div",{className:"block md:hidden",children:(0,n.jsx)(f,{day:t,date:a,month:r,year:i})})]}):(0,n.jsxs)("div",{className:"text-right px-2",children:[(0,n.jsx)("div",{className:"hidden md:block",children:a}),(0,n.jsx)("div",{className:"block md:hidden",children:(0,n.jsx)(f,{day:t,date:a,month:r,year:i})})]})},S=e=>{let{events:t=[]}=e,a=new Date,r=a.getDate(),i=a.getMonth()+1,y=a.getFullYear(),j=b(i,y),[f,S]=(0,v.useState)(i),[Z,z]=(0,v.useState)(y),[w,C]=(0,v.useState)(j),k=e=>{12===f&&1===e?(S(1),z(Z+1)):1===f&&-1===e?(S(12),z(Z-1)):S(f+e);let t=b(f,Z);C(t)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"grid grid-cols-7",children:(0,n.jsx)("div",{className:"col-span-7",children:(0,n.jsx)("div",{className:"p-4",children:(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(h.Z,{id:"month-select-label",children:"Month"}),(0,n.jsx)(x.Z,{type:"number",labelId:"month-select-label",id:"demo-simple-select",value:f,label:"Month",onChange:e=>{S(parseInt(e.target.value.toString(),10));let t=b(parseInt(e.target.value.toString(),10),Z);C(t)},size:"small",children:g.map((e,t)=>{let{short:a,long:r}=e;return(0,n.jsxs)(p.Z,{value:t+1,children:[(0,n.jsx)("span",{className:"inline md:hidden",children:a}),(0,n.jsx)("span",{className:"hidden md:inline",children:r})]},"value-".concat(t+1))})})]}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(c.Z,{onClick:()=>{k(-1)},children:(0,n.jsx)(o.Z,{})}),(0,n.jsxs)("p",{className:"font-bold text-md md:text-xl",children:[(0,n.jsxs)("span",{children:[f===i&&Z===y?m(r):m(1)," "]}),(0,n.jsxs)("span",{className:"inline md:hidden",children:[g[f-1].short," "]}),(0,n.jsxs)("span",{className:"hidden md:inline",children:[g[f-1].long," "]}),(0,n.jsx)("span",{children:Z})]}),(0,n.jsx)(c.Z,{onClick:()=>{k(1)},children:(0,n.jsx)(s.Z,{})})]}),(0,n.jsx)(l.Z,{variant:"contained",onClick:()=>{let e=b(i,y);S(i),z(y),C(e)},children:"Today"})]})})})}),(0,n.jsx)("div",{className:"hidden md:block border-t",children:(0,n.jsxs)("div",{className:"grid grid-cols-7",children:[(0,n.jsx)("div",{className:"col-span-1",children:(0,n.jsx)("p",{className:"text-center p-4 font-medium",children:"Sunday"})}),(0,n.jsx)("div",{className:"col-span-1",children:(0,n.jsx)("p",{className:"text-center p-4 font-medium",children:"Monday"})}),(0,n.jsx)("div",{className:"col-span-1",children:(0,n.jsx)("p",{className:"text-center p-4 font-medium",children:"Tuesday"})}),(0,n.jsx)("div",{className:"col-span-1",children:(0,n.jsx)("p",{className:"text-center p-4 font-medium",children:"Wednesday"})}),(0,n.jsx)("div",{className:"col-span-1",children:(0,n.jsx)("p",{className:"text-center p-4 font-medium",children:"Thursday"})}),(0,n.jsx)("div",{className:"col-span-1",children:(0,n.jsx)("p",{className:"text-center p-4 font-medium",children:"Friday"})}),(0,n.jsx)("div",{className:"col-span-1",children:(0,n.jsx)("p",{className:"text-center p-4 font-medium",children:"Saturday"})})]})}),(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-7",children:w.map(e=>{let{day:a,date:o,month:s,year:l}=e;return(0,n.jsx)("div",{className:"col-span-1 border-t",children:(0,n.jsxs)("div",{className:"py-4 px-2 flex flex-col gap-2",children:[(0,n.jsx)(N,{day:a,date:o,month:s,year:l,initDate:r,initMonth:i,initYear:y,currentMonth:f,currentYear:Z}),t.map(e=>{let{type:t,date:a,month:r,year:i,description:d}=e;return(0,n.jsx)(u,{type:t,date:a,month:r,year:i,iDate:o,iMonth:s,iYear:l,description:d},"event-".concat(o,"-").concat(s,"-").concat(l))})]})},"".concat(o,"-").concat(s,"-").concat(l))})})]})};var Z=a(8953);let z=()=>(0,n.jsx)(Z.Z,{children:(0,n.jsx)(r.Z,{className:"py-8",children:(0,n.jsx)(i.Z,{className:"border",children:(0,n.jsx)(S,{events:[{type:"yearly",date:1,month:1,description:"New Year"},{type:"yearly",date:30,month:4,description:"Reunification Day"},{type:"yearly",date:1,month:5,description:"Labour Day"},{type:"yearly",date:2,month:9,description:"National Day"},{type:"yearly",date:24,month:12,description:"Christmas Eve"},{type:"yearly",date:25,month:12,description:"Christmas"},{type:"yearly",date:31,month:12,description:"New Year Eve"}]})})})});var w=z},8953:function(e,t,a){"use strict";var n=a(5893),r=a(9665),i=a(4960);let o=e=>{let{children:t=(0,n.jsx)(n.Fragment,{})}=e;return(0,n.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,n.jsx)(i.Z,{}),(0,n.jsx)("main",{className:"grow",children:t}),(0,n.jsx)(r.Z,{})]})};t.Z=o}},function(e){e.O(0,[324,400,635,708,774,888,179],function(){return e(e.s=7975)}),_N_E=e.O()}]);