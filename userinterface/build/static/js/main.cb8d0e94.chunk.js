(this.webpackJsonpuserinterface=this.webpackJsonpuserinterface||[]).push([[0],{112:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(22),o=n.n(i),s=(n(69),n(8)),l=(n(70),n(24)),a=n(9),j="http://tmcpages.com:8880/php/Library/rpc.php",d="whitesmoke",u="#ee9090",b=n(18),h=n.n(b),f=n(125),O=n(58),x=n(61),g=n(60),v=n(2),p=function(e){return Object(v.jsxs)(g.elastic,{children:[Object(v.jsx)("a",{className:"menu-item",href:"/home",children:"Home"}),Object(v.jsx)("a",{className:"menu-item",href:"/drinks",children:"Drinks"})]})};n(112);function y(e){var t=Object(c.useState)(0),n=Object(s.a)(t,2),r=n[0],i=n[1];Object(c.useEffect)((function(){i(e.countNotify)}),[e.countNotify]);var o={color:"red",marginTop:"4px",marginLeft:"-7px",fontSize:"32px"};return r<1&&(o={color:"white",marginTop:"4px",marginLeft:"-7px",fontSize:"32px"}),Object(v.jsxs)("div",{style:{display:"flex",width:"100%",backgroundColor:"#3490dc"},children:[Object(v.jsx)("div",{style:{width:"30%",display:"flex",textAlign:"center"},children:Object(v.jsx)(p,{})}),Object(v.jsxs)("div",{id:"ctcTitle",style:{width:"100%",display:"flex",textAlign:"center",paddingBottom:"5px"},children:[Object(v.jsxs)("div",{style:{width:"80%"},children:[Object(v.jsx)("h4",{style:{margin:"auto",marginRight:"12%",color:"whitesmoke",overflow:"visible"},children:"My Bar"}),Object(v.jsxs)("h6",{style:{margin:"auto",marginRight:"10%",color:"whitesmoke",overflow:"visible"},children:[Object(v.jsx)("b",{children:"Current User: "}),"bill"]})]}),Object(v.jsx)("div",{style:{marginLeft:"auto"},children:Object(v.jsx)("div",{style:{marginTop:"7px",display:"flex",textAlign:"center"},children:Object(v.jsx)(O.LinkContainer,{to:"/logout",className:"active navbar-brand",style:{color:"whitesmoke"},children:Object(v.jsx)(f.a.Link,{id:"logoutButton",onClick:e.handleLogout,children:"Logout"})})})}),Object(v.jsx)("div",{children:Object(v.jsxs)("div",{style:{marginTop:"7px",display:"flex",textAlign:"center",marginRight:"2rem",marginLeft:"-5px"},onClick:function(){e.toggleShowNotify()},children:[Object(v.jsx)(x.a,{style:o}),Object(v.jsx)("div",{style:{cursor:"pointer",width:"30px",marginLeft:"-6px",marginTop:"-8px",position:"absolute"},children:function(){var e=r;return 0==r&&(e=""),Object(v.jsx)("p",{style:{fontSize:"14px",color:"white"},children:Object(v.jsx)("b",{children:e})})}()})]})})]})]})}var m=n(119),w=n(124),S=(n(120),n(121)),C=n(122),N=n(127);n(62);function k(e){var t=Object(c.useState)(),n=Object(s.a)(t,2),r=(n[0],n[1]),i=Object(c.useState)(!1),o=Object(s.a)(i,2),l=(o[0],o[1]),a=Object(c.useState)(!1),d=Object(s.a)(a,2),u=(d[0],d[1],Object(c.useState)("")),b=Object(s.a)(u,2);b[0],b[1];return Object(c.useEffect)((function(){h.a.get(j+"?action=recentUpdates").then((function(e){console.log(e.data),r(e.data)}))}),[]),Object(c.useEffect)((function(){l(e.showNotify)}),[e.showNotify]),Object(v.jsx)("div",{children:Object(v.jsx)("h3",{children:"Bar Front Page"})})}var E=n(43),_=n.n(E),L=n(126),B=n(123),F=(n(57),n(64)),T=n(5),D=n.n(T),I=function(){return Object(v.jsx)(v.Fragment,{children:"\ud83d\udea9"})},R=function(){return Object(v.jsx)(v.Fragment,{children:"\ud83c\udf00"})},A=function e(t){var n=Object(c.useState)(!1),r=Object(s.a)(n,2),i=r[0],o=r[1],l=t.defaultChecked,a=t.onChange,j=t.disabled,d=t.className;Object(c.useEffect)((function(){l&&o(l)}),[l]);var u=function(n){var c=t.icons;return c?void 0===c[n]?e.defaultProps.icons[n]:c[n]:null},b=D()("wrg-toggle",{"wrg-toggle--checked":i,"wrg-toggle--disabled":j},d);return Object(v.jsxs)("div",{onClick:function(){j||(o(!i),"function"===typeof a&&a(!i))},className:b,children:[Object(v.jsxs)("div",{className:"wrg-toggle-container",children:[Object(v.jsx)("div",{className:"wrg-toggle-check",children:Object(v.jsx)("span",{children:u("checked")})}),Object(v.jsx)("div",{className:"wrg-toggle-uncheck",children:Object(v.jsx)("span",{children:u("unchecked")})})]}),Object(v.jsx)("div",{className:"wrg-toggle-circle"}),Object(v.jsx)("input",{type:"checkbox","aria-label":"Toggle Button",className:"wrg-toggle-input"})]})};A.defaultProps={icons:{checked:Object(v.jsx)(I,{}),unchecked:Object(v.jsx)(R,{})}};var U=A;function H(){var e=Object(c.useState)(),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(),o=Object(s.a)(i,2),l=o[0],b=o[1],f=Object(c.useState)(!1),O=Object(s.a)(f,2),x=O[0],g=O[1],p=Object(c.useState)(""),y=Object(s.a)(p,2),k=y[0],E=y[1],T=Object(c.useState)(""),D=Object(s.a)(T,2),I=D[0],R=D[1],A=Object(c.useState)(!1),H=Object(s.a)(A,2),J=H[0],K=H[1],z=function(e){return E(e)};Object(a.k)();function P(){h.a.get(j+"?action=viewAllContainers").then((function(e){console.log(e),r(e.data)}))}function V(e){for(var t=[],n=0;n<Object.values(e).length-1;n++)W(e,n,t);return t}function M(e,t){for(var n=[],c=0;c<Object.values(e).length-1;c++)G(t,e[c])&&W(e,c,n);return n}function W(e,t,n){var c={cursor:"pointer"};return"f"===e[t][2]&&(c={backgroundColor:u,cursor:"pointer"}),n.push(Object(v.jsxs)("tr",{style:c,onClick:function(){g(!0),function(e,t){var n={facilityID:e,containerID:t[4]};h.a.get(j+"?action=getContainerHistory&data="+JSON.stringify(n)).then((function(e){console.log(e),e.data[0][4]=t[0],e.data[0][5]=t[1],console.log("here: "),console.log(e.data),b(e.data)}))}(e.facility_info.facility_id,e[t]),Z()},children:[Object(v.jsx)("td",{children:e[t][0]}),Object(v.jsx)("td",{children:e[t][1]}),Object(v.jsx)("td",{children:e[t][3]})]})),n}function $(){for(var e=[],t=0;t<n.length;t++){for(var c=!1,r=0;r<Object.values(n[t]).length-1;r++)"f"===n[t][r][2]&&(c=!0);e.push(c)}return e}function q(e,t){function n(e){return e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}var c=e.split(/\s+/g).map((function(e){return e.trim()})).filter((function(e){return!!e})),r=e.endsWith(" "),i=new RegExp(c.map((function(e,t){return t+1!=c.length||r?"(?=.*\\b\\w*".concat(n(e),"\\b)"):"(?=.*\\b\\w*".concat(n(e),")")})).join("")+".+","gi");return t.filter((function(e){return i.test(e)}))}function G(e,t){for(var n={},c=0;c<e.length;c++){if(!n[e[c]])n[e[c]]=!0}for(var r=0;r<t.length;r++)if(n[t[r]])return!0;return!1}function Q(e){var t=JSON.parse(e[2]),n=JSON.parse(e[3]);if(null==t)return X(e[4])+" (Version: "+X(e[5])+")\nRunning = "+X(n.running);if(null==n)return X(e[4])+" (Version: "+X(e[5])+")\nRunning = "+X(n.running);for(var c=Object.keys(t),r=0;r<c.length;r++){var i=c[r];if(t[i]!==n[i])return 1==t[i]&&0==n[i]?"Container Stopped Running":0==t[i]&&1==n[i]?"Container Started Running":i+" changed from "+X(t[i])+" to "+X(n[i])}}function X(e){return null==e?"N/A":JSON.stringify(e)}function Y(){var e=[];e.push(Object(v.jsx)("option",{value:"",children:"Not Set"}));for(var t=0;t<n.length;t++)e.push(Object(v.jsx)("option",{value:n[t].facility_info.facility_name+" - "+n[t].facility_info.facility_id,children:n[t].facility_info.facility_name+" - "+n[t].facility_info.facility_id}));return e}function Z(){var e=[];return e.push(Object(v.jsxs)(w.a,{show:x,onHide:function(){g(!1)},children:[Object(v.jsx)(w.a.Header,{closeButton:!0,children:Object(v.jsx)(w.a.Title,{children:"Container History"})}),Object(v.jsx)(w.a.Body,{children:Object(v.jsx)("div",{children:Object(v.jsxs)(B.a,{style:{margin:"auto",width:"90%"},children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{style:{backgroundColor:"#3490dc",padding:"5rem"},children:[Object(v.jsx)("th",{style:{color:"#fff"},children:Object(v.jsx)("p",{children:"Event"})}),Object(v.jsx)("th",{style:{color:"#fff"},children:Object(v.jsx)("p",{children:"Action"})}),Object(v.jsx)("th",{style:{color:"#fff"},children:Object(v.jsx)("p",{children:"Date"})})]})}),Object(v.jsx)("tbody",{children:ee()})]})})})]})),e}function ee(){if(null==l||Object.values(l).length<=0)return Object(v.jsx)("tr",{children:"No History"});for(var e=[],t=0;t<Object.values(l).length;t++){var n=l[t][1];"INSERT"===l[t][1]&&(n="ADDED"),"DELETE"===l[t][1]&&(n="REMOVED"),e.push(Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:n}),Object(v.jsx)("td",{style:{overflowWrap:"break-word"},children:Q(l[t])}),Object(v.jsx)("td",{children:l[t][0].substring(0,l[t][0].indexOf("."))})]},t))}return e}return Object(c.useEffect)((function(){P();var e=setInterval((function(){return P()}),6e4);return function(){clearInterval(e)}}),[]),n&&""===k&&""===I?Object(v.jsxs)(S.a,{children:[Object(v.jsx)(C.a,{children:Object(v.jsx)(m.a,{lg:"5",children:Object(v.jsx)("h3",{children:"Container Status"})})}),Object(v.jsxs)(C.a,{children:[Object(v.jsxs)(m.a,{md:"8",children:[Object(v.jsxs)("div",{style:{width:"fit-content",float:"left"},children:[Object(v.jsx)("label",{children:"Flagged Only"}),Object(v.jsx)("br",{}),Object(v.jsx)(U,{onChange:function(e){return K(e)}})]}),Object(v.jsx)(_.a,{placeholder:"Search",value:k,onChange:z})]}),Object(v.jsx)(m.a,{md:"1"}),Object(v.jsx)(m.a,{md:"3",children:Object(v.jsx)("select",{onChange:function(e){return R(e.target.value)},name:"FacilityID",value:I,children:Y()})})]}),Object(v.jsx)("br",{}),Object(v.jsx)(C.a,{children:Object(v.jsx)(m.a,{lg:"12",children:Object(v.jsxs)(L.a,{defaultActiveKey:0,children:[function(){for(var e=[],t=$(),c=0;c<n.length;c++){var r=V(n[c]),i=n[c].facility_info.facility_name+" - "+n[c].facility_info.facility_id,o={backgroundColor:d,cursor:"pointer"};J&&!t[c]||(t[c]&&(o={backgroundColor:u,cursor:"pointer"}),e.push(Object(v.jsx)(N.a,{children:Object(v.jsxs)(N.a.Header,{children:[Object(v.jsx)("div",{style:o,children:Object(v.jsx)(L.a.Toggle,{as:N.a.Header,variant:"Button",eventKey:c+1,children:i})}),Object(v.jsx)(L.a.Collapse,{eventKey:c+1,children:Object(v.jsx)(N.a.Body,{children:Object(v.jsx)(B.a,{responsive:!0,children:Object(v.jsxs)("tbody",{children:[Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Name"}),Object(v.jsx)("th",{children:"Version"}),Object(v.jsx)("th",{children:"Created"})]}),r]})})})})]})})))}return e}(),Z()]})})})]}):!n||""===k&&""===I?Object(v.jsx)(S.a,{children:Object(v.jsx)("div",{id:"loadingDiv",style:{textAlign:"center",marginTop:"15%"},children:Object(v.jsx)(F.a,{size:"250px",color:"3498FF"})})}):Object(v.jsxs)(S.a,{children:[Object(v.jsx)(C.a,{children:Object(v.jsx)(m.a,{lg:"5",children:Object(v.jsx)("h3",{children:"Container Status"})})}),Object(v.jsxs)(C.a,{children:[Object(v.jsxs)(m.a,{md:"8",children:[Object(v.jsxs)("div",{style:{width:"fit-content",float:"left"},children:[Object(v.jsx)("label",{children:"Flagged Only"}),Object(v.jsx)("br",{}),Object(v.jsx)(U,{onChange:function(e){return K(e)}})]}),Object(v.jsx)(_.a,{placeholder:"Search",value:k,onChange:z})]}),Object(v.jsx)(m.a,{md:"1"}),Object(v.jsx)(m.a,{md:"3",children:Object(v.jsx)("select",{onChange:function(e){return R(e.target.value)},name:"FacilityID",value:I,children:Y()})})]}),Object(v.jsx)("br",{}),Object(v.jsx)(C.a,{children:Object(v.jsx)(m.a,{lg:"12",children:Object(v.jsxs)(L.a,{defaultActiveKey:0,children:[function(){for(var e=[],t=!1,c=$(),r=0;r<n.length;r++){var i=n[r].facility_info.facility_name+" - "+n[r].facility_info.facility_id,o={backgroundColor:d,cursor:"pointer"},s=V(n[r]);if((""===I||I===i)&&(!J||c[r])){if(c[r]&&(o={backgroundColor:u,cursor:"pointer"}),""!==k){for(var l=[],a=0;a<Object.values(n[r]).length-1;a++)l=l.concat(n[r][a]);var j=q(k,l);if(!(j.length>0)||j.includes(null)||j.includes(void 0))continue;s=M(n[r],j),t=!0}e.push(Object(v.jsx)(L.a,{defaultActiveKey:1,children:Object(v.jsx)(N.a,{children:Object(v.jsxs)(N.a.Header,{children:[Object(v.jsx)("div",{style:o,children:Object(v.jsx)(L.a.Toggle,{as:N.a.Header,variant:"Button",eventKey:1,children:i})}),Object(v.jsx)(L.a.Collapse,{eventKey:1,children:Object(v.jsx)(N.a.Body,{children:Object(v.jsx)(B.a,{responsive:!0,children:Object(v.jsxs)("tbody",{id:r+1,children:[Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Name"}),Object(v.jsx)("th",{children:"Version"}),Object(v.jsx)("th",{children:"Created"})]}),s]})})})})]})})}))}}return t||""===k||e.push("No Results Found"),e}(),Z()]})})})]})}function J(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),r=n[0],i=n[1],o=Object(c.useState)([]),d=Object(s.a)(o,2),u=d[0];d[1];function b(){i(!r)}function f(){for(var t=[],n=function(n){u[n].description.includes(e.currentUser.name)||t.push(Object(v.jsx)("div",{onClick:function(){return function(e){var t={id:e};t=JSON.stringify(t),h.a.post(j+"?action=viewNotify",t).then((function(e){}))}(u[n].id)},style:{borderBottom:"1px groove"},children:Object(v.jsx)("p",{children:u[n].description})}))},c=0;c<u.length;c++)n(c);return t}return Object(c.useEffect)((function(){e.setCurrentComponent()}),[]),Object(v.jsx)("div",{children:Object(v.jsx)("div",{children:Object(v.jsxs)(l.BrowserRouter,{children:[Object(v.jsx)(y,{countNotify:function(){for(var t=0,n=0;n<u.length;n++)u[n].description.includes(e.currentUser.name)||t++;return t}(),showNotify:r,toggleShowNotify:function(){return b()},currentUser:e.currentUser,handleLogout:function(){e.logout()}}),Object(v.jsx)("div",{children:function(){var e=[];return r?(e.push(Object(v.jsx)("label",{className:"mainFocus",onClick:function(){return b()},for:"btnControl"})),u.length>0?e.push(Object(v.jsx)("div",{className:"notifySide",style:{backgroundColor:"whitesmoke"},children:f()})):e.push(Object(v.jsx)("div",{className:"notifySide",style:{backgroundColor:"whitesmoke"},children:Object(v.jsx)("p",{children:"No Notifications"})}))):e=[],e}()}),Object(v.jsxs)(a.g,{style:{zIndex:"9"},children:[Object(v.jsx)(a.d,{path:"/logout",children:Object(v.jsx)(a.c,{to:"/"})}),Object(v.jsx)(a.d,{path:"/drinks",children:Object(v.jsx)(H,{})}),Object(v.jsx)(a.d,{path:"/",children:Object(v.jsx)(k,{showNotify:r,toggleShowNotify:function(){return b()},currentUser:e.currentUser})})]})]})})})}function K(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=(t[0],t[1]),r=Object(c.useState)(),i=Object(s.a)(r,2),o=i[0],l=i[1],a=Object(c.useState)("Login"),j=Object(s.a)(a,2),d=j[0],u=j[1];return Object(c.useEffect)((function(){!function(){var e=localStorage.getItem("currentUser");if(console.log(e),console.log(typeof e),"undefined"!==e&&e){console.log("firing");var t=JSON.parse(e);l(t),n(t.login)}}()}),[]),window.addEventListener("beforeunload",(function(e){e.preventDefault(),"Login"===d?localStorage.setItem("currentUser",JSON.stringify("")):localStorage.setItem("currentUser",JSON.stringify(o))})),Object(v.jsx)(J,{setCurrentComponent:function(){u("Routes")}})}var z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,128)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))};o.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(K,{})}),document.getElementById("root")),z()},57:function(e,t,n){},69:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.cb8d0e94.chunk.js.map