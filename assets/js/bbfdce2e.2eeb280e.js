"use strict";(self.webpackChunkspec_untp_website=self.webpackChunkspec_untp_website||[]).push([[6785],{5318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5611:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(5773),r=(n(7378),n(5318));const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses.")))}l.isMDXComponent=!0},7551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(5773),r=(n(7378),n(5318)),o=n(5611);const l={sidebar_position:10,title:"Governance"},i=void 0,s={unversionedId:"about/Governance",id:"about/Governance",title:"Governance",description:"Management process",source:"@site/docs/about/Governance.md",sourceDirName:"about",slug:"/about/Governance",permalink:"/spec-untp/docs/about/Governance",draft:!1,editUrl:"https://github.com/uncefact/spec-untp/edit/main/website/docs/about/Governance.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Governance"},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/spec-untp/docs/about/Requirements"},next:{title:"Pledge",permalink:"/spec-untp/docs/about/Pledge"}},p={},u=[{value:"Management process",id:"management-process",level:2},{value:"Releases",id:"releases",level:2},{value:"Meetings",id:"meetings",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.ZP,{mdxType:"Disclaimer"}),(0,r.kt)("h2",{id:"management-process"},"Management process"),(0,r.kt)("p",null,"The UNTP development follows the same ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/uncefact/governance?tab=readme-ov-file#governance"},"standard governance rules"))," as any UN/CEFACT project. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Free to use, "),(0,r.kt)("li",{parentName:"ul"},"Open source licensed, "),(0,r.kt)("li",{parentName:"ul"},"Maintained via an open process"),(0,r.kt)("li",{parentName:"ul"},"Version controlled"),(0,r.kt)("li",{parentName:"ul"},"Lifecycle managed")),(0,r.kt)("h2",{id:"releases"},"Releases"),(0,r.kt)("p",null,"As per ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/versioning"},"docusaurus version management practices"),", the latest stable version of UNTP will always be shown be default at /docs (this site). In-progress future version will be hosted at /docs/next and previous versions at /versioned-docs/version-x.y. The version history includes major versions (breaking) and minor versions (non-breaking but with functional change) but not patch versions (bug fixes and typos) which overwrite the relevant minor version."),(0,r.kt)("p",null,"The UNTP includes a number of distinct and separately versioned components such as passport schema, traceability event schema and so on. To simplify implementaiton management, all seaprate component versions are grouped together and listed under each aggregated UNTP version."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"UNTP Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Date"),(0,r.kt)("th",{parentName:"tr",align:null},"Componenets"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Raw"),(0,r.kt)("td",{parentName:"tr",align:null},"2024-01-01"),(0,r.kt)("td",{parentName:"tr",align:null},"TBA"),(0,r.kt)("td",{parentName:"tr",align:null},"Empty framework")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"meetings"},"Meetings"),(0,r.kt)("p",null,"UNTP development ",(0,r.kt)("a",{parentName:"p",href:"https://us02web.zoom.us/j/85091806131"},"team meetings")," are held every fortnight from thursday 18 Jan at 7:00am UTC. Each meeting will generally work through open ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/uncefact/spec-untp/issues"},"issues")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/uncefact/spec-untp/pulls"},"pull requests"),". "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Meeting"),(0,r.kt)("th",{parentName:"tr",align:null},"Agenda"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"),(0,r.kt)("th",{parentName:"tr",align:null},"Recording"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2024-01-18"),(0,r.kt)("td",{parentName:"tr",align:null},"kick-off"),(0,r.kt)("td",{parentName:"tr",align:null},"TBA"),(0,r.kt)("td",{parentName:"tr",align:null},"TBA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);