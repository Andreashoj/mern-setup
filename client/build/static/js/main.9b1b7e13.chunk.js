(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,n,t){e.exports=t(40)},31:function(e,n,t){},32:function(e,n,t){},39:function(e,n,t){e.exports=t.p+"static/media/devdash.6c365d04.svg"},40:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(17),c=t.n(o),i=(t(31),t(4)),u=t(2),l=(t(32),t(43)),s=Object(a.createContext)(),f=function(e){var n=Object(a.useState)(),t=Object(u.a)(n,2),o=t[0],c=t[1],i=Object(a.useState)(),f=Object(u.a)(i,2),p=(f[0],f[1]);return r.a.createElement(s.Provider,{value:{user:o,fetchUser:function(){fetch("/auth/login/success",{method:"GET",credentials:"include",headers:{accepts:"application/json","Content-Type":"application/json","Access-Control-Allow-Credentials":!0}}).then((function(e){if(200===e.status)return e.json()})).then((function(e){e&&(p(e.message),c(e.user))}))},handleLogin:function(){window.open("/auth/login/google","_self")},handleLogout:function(){window.open("/auth/logout","_self")},handleRedirect:function(){return r.a.createElement(l.a,{to:"/"})}}},e.children)},p=t(5);function d(){var e=Object(i.a)(["\n  color: white;\n  font-size: 40px;\n  margin: 50px 0 0 0;\n  text-align: center;\n  span {\n    border-bottom: 2px solid white;\n    cursor: pointer;\n  }\n"]);return d=function(){return e},e}var h=p.a.p(d()),m=function(){var e=Object(a.useContext)(s),n=e.user,t=e.fetchUser,o=e.handleLogin;e.handleLogout;return Object(a.useEffect)((function(){t()}),[]),n?r.a.createElement(h,null,"Features in development."):r.a.createElement(h,null,r.a.createElement("span",{onClick:o},"Log in,")," for more features")},b=(t(39),t(41)),g=t(22);function v(){var e=Object(i.a)(["\n  h3 {\n    text-align: center;\n    font-size: 70px;\n    color: white;\n    font-weight: 400;\n    margin-top: -50px;\n    top: 10px;\n  }\n"]);return v=function(){return e},e}function j(){var e=Object(i.a)(["\n  color: white;\n  font-size: 130px;\n  font-weight: 400;\n  margin-bottom: 0;\n  text-align: center;\n"]);return j=function(){return e},e}var x=p.a.h1(j()),w=p.a.div(v()),O=function(){Object(a.useContext)(s).user;var e=Object(a.useState)(""),n=Object(u.a)(e,2),t=n[0],o=n[1],c=new Date,i=Object(a.useState)((function(){return c.getHours()})),l=Object(u.a)(i,2),f=l[0],p=(l[1],Object(a.useState)((c.getMinutes()<10?"0":"")+c.getMinutes())),d=Object(u.a)(p,2),h=d[0],m=d[1];Object(a.useEffect)((function(){o(f>=3&&f<10?"morning":f>=10&&f<=18?"day":"evening")}),[h]);return setInterval((function(){var e=new Date;if(0===e.getSeconds()){var n=(e.getMinutes()<10?"0":"")+e.getMinutes();m(n)}}),1e3),r.a.createElement(w,null,r.a.createElement(x,null,c.getHours()+" : "+h),r.a.createElement("h3",null,"Have a good ",t,"."))},E=t(15);function y(){var e=Object(i.a)(["\n  position: absolute;\n  right: -2px;\n  width: 300px;\n  height: 500px;\n  background-color: white;\n  margin-top: -22px;\n  transition: all 0.3s ease;\n  .show {\n    height: 180px;\n  }\n"]);return y=function(){return e},e}function k(){var e=Object(i.a)(['\n  p {\n    position: relative;\n    color: white;\n    font-size: 25px;\n    cursor: pointer;\n    &:hover {\n      &:before {\n        width: 155px;\n      }\n    }\n    &:before {\n      position: absolute;\n      content: "";\n      top: 40px;\n      height: 2.5px;\n      background-color: white;\n      width: 70px;\n      transition: all 0.3s ease;\n    }\n  }\n']);return k=function(){return e},e}var S=p.a.div(k()),C=p.a.div(y()),q=function(){var e=Object(a.useState)(),n=Object(u.a)(e,2),t=(n[0],n[1]),o=Object(a.useState)(!1),c=Object(u.a)(o,2),i=c[0],l=c[1],s=Object(E.b)(i,null,{from:{transform:"translate3d(0,-20px,0)",opacity:0},enter:{transform:"translate3d(0,0px,0)",opacity:1},leave:{transform:"translate3d(0,-20px,0)",opacity:0}});return Object(a.useEffect)((function(){fetch("https://favqs.com/api/qotd").then((function(e){return e.json()})).then((function(e){return t(e.quote)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement(S,null,r.a.createElement("p",{onClick:function(){return l(!i)}},"Read some dev news"),s.map((function(e){var n=e.item,t=(e.key,e.props);return n?r.a.createElement(E.a.div,{style:t},r.a.createElement(C,null,"yo")):null})))};function D(){var e=Object(i.a)(["\n  font-family: helvetica;\n  color: white;\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 10px;\n  margin-bottom: 30px;\n"]);return D=function(){return e},e}function z(){var e=Object(i.a)(["\n  width: 50%;\n"]);return z=function(){return e},e}var L=p.a.div(z()),H=p.a.p(D()),M=function(){var e=Object(a.useState)(""),n=Object(u.a)(e,2),t=n[0],o=n[1];return Object(a.useEffect)((function(){fetch("https://favqs.com/api/qotd").then((function(e){return e.json()})).then((function(e){return o(e.quote)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement(L,null,r.a.createElement(H,null,'"',t.body,'" ',r.a.createElement("br",null)," ",r.a.createElement("br",null),"- ",t.author))};function N(){var e=Object(i.a)(["\n  height: 100vh;\n  width: 100%;\n  background-image: url('","');\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  font-family: 'Teko', sans-serif;\n  .upper-row {\n    width: 90%;\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 10px;\n    img {\n      opacity: 0.8;\n    }\n  }\n  .middle-row {\n    height: 80vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .bottom-row {\n    display: flex;\n    justify-content: center;\n  }\n"]);return N=function(){return e},e}var T=p.a.div(N(),(function(e){return e.background})),A=function(){var e=Object(a.useState)(),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(b.a)(["background"]),i=Object(u.a)(c,3),l=(i[0],i[1]),s=(i[2],new g.a);return Object(a.useEffect)((function(){!function(){var e=s.get("background-cookie"),n=new Date;n.setDate((new Date).getDate()+1),void 0!==e?o(e):fetch("https://source.unsplash.com/".concat(window.innerWidth,"x").concat(window.innerHeight,"/?background,relax")).then((function(e){o(e.url),l("background-cookie",e.url,{expires:n})}))}()}),[]),r.a.createElement(f,null,r.a.createElement(T,{background:t},r.a.createElement("div",{className:"upper-row"},r.a.createElement(q,null)),r.a.createElement("div",{className:"middle-row"},r.a.createElement(O,null),r.a.createElement(m,null)),r.a.createElement("div",{className:"bottom-row"},r.a.createElement(M,null))))},I=t(42);c.a.render(r.a.createElement(I.a,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.9b1b7e13.chunk.js.map