(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,n,t){e.exports=t.p+"static/media/devdash.6c365d04.svg"},24:function(e,n,t){e.exports=t(37)},29:function(e,n,t){},30:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),c=t(12),r=t.n(c),u=(t(29),t(13)),i=t(2),l=(t(30),t(40)),s=Object(o.createContext)(),d=function(e){var n=Object(o.useState)(),t=Object(i.a)(n,2),c=t[0],r=t[1],u=Object(o.useState)(),d=Object(i.a)(u,2),f=(d[0],d[1]);return a.a.createElement(s.Provider,{value:{user:c,fetchUser:function(){fetch("/auth/login/success",{method:"GET",credentials:"include",headers:{accepts:"application/json","Content-Type":"application/json","Access-Control-Allow-Credentials":!0}}).then((function(e){if(console.log(e),200===e.status)return e.json()})).then((function(e){r(e.user),f(e.message)}))},handleLogin:function(){window.open("/auth/login/google","_self")},handleLogout:function(){window.open("/auth/logout","_self")},handleRedirect:function(){return a.a.createElement(l.a,{to:"/"})}}},e.children)},f=function(){var e=Object(o.useContext)(s),n=e.user,t=(e.fetchUser,e.handleLogin),c=e.handleLogout;return n?a.a.createElement("button",{onClick:c},"Logout"):a.a.createElement("button",{onClick:t},"Login")},g=t(17),h=t(15),b=t.n(h),m=t(38),p=t(16);function v(){var e=Object(u.a)(["\n  height: 100vh;\n  width: 100%;\n  background-image: url('","');\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  .first-row {\n    width: 90%;\n    img {\n      opacity: 0.8;\n    }\n  }\n"]);return v=function(){return e},e}var j=g.a.div(v(),(function(e){return e.background})),w=function(){var e=Object(o.useState)(),n=Object(i.a)(e,2),t=n[0],c=n[1],r=Object(m.a)(["background"]),u=Object(i.a)(r,3),l=(u[0],u[1]),s=(u[2],new p.a);return Object(o.useEffect)((function(){!function(){var e=s.get("background-cookie");console.log(t,e);var n=new Date;n.setDate((new Date).getDate()+1),void 0!==e?c(e):fetch("https://source.unsplash.com/1600x900/?background,relax").then((function(e){c(e.url),l("background-cookie",e.url,{expires:n})}))}(),console.log(t)}),[]),a.a.createElement(d,null,a.a.createElement(j,{background:t},a.a.createElement("div",{className:"first-row"},a.a.createElement("img",{src:b.a,alt:"Dev dash logo"})),a.a.createElement(f,null)))},E=t(39);r.a.render(a.a.createElement(E.a,null,a.a.createElement(w,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.3cd0df01.chunk.js.map