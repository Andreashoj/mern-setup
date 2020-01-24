(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,n,t){e.exports=t(42)},33:function(e,n,t){},34:function(e,n,t){},41:function(e,n,t){e.exports=t.p+"static/media/devdash.6c365d04.svg"},42:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(18),i=t.n(o),c=(t(33),t(3)),l=t(2),u=(t(34),t(45)),s=Object(a.createContext)(),f=function(e){var n=Object(a.useState)(),t=Object(l.a)(n,2),o=t[0],i=t[1],c=Object(a.useState)(),f=Object(l.a)(c,2),p=(f[0],f[1]);return r.a.createElement(s.Provider,{value:{user:o,fetchUser:function(){fetch("/auth/login/success",{method:"GET",credentials:"include",headers:{accepts:"application/json","Content-Type":"application/json","Access-Control-Allow-Credentials":!0}}).then((function(e){if(200===e.status)return e.json()})).then((function(e){e&&(p(e.message),i(e.user))}))},handleLogin:function(){window.open("/auth/login/google","_self")},handleLogout:function(){window.open("/auth/logout","_self")},handleRedirect:function(){return r.a.createElement(u.a,{to:"/"})}}},e.children)},p=t(4);function d(){var e=Object(c.a)(["\n  color: white;\n  font-size: 40px;\n  margin: 50px 0 0 0;\n  text-align: center;\n  span {\n    border-bottom: 2px solid white;\n    cursor: pointer;\n  }\n"]);return d=function(){return e},e}var h=p.a.p(d()),m=function(){var e=Object(a.useContext)(s),n=e.user,t=e.fetchUser,o=e.handleLogin;e.handleLogout;return Object(a.useEffect)((function(){t()}),[]),n?r.a.createElement(h,null,"Features in development."):r.a.createElement(h,null,r.a.createElement("span",{onClick:o},"Log in,")," for more features")},g=(t(41),t(43)),b=t(24);function v(){var e=Object(c.a)(["\n  h3 {\n    text-align: center;\n    font-size: 70px;\n    color: white;\n    font-weight: 400;\n    margin-top: -50px;\n    top: 10px;\n  }\n"]);return v=function(){return e},e}function x(){var e=Object(c.a)(["\n  color: white;\n  font-size: 130px;\n  font-weight: 400;\n  margin-bottom: 0;\n  text-align: center;\n"]);return x=function(){return e},e}var j=p.a.h1(x()),w=p.a.div(v()),E=function(){Object(a.useContext)(s).user;var e=Object(a.useState)(""),n=Object(l.a)(e,2),t=n[0],o=n[1],i=new Date,c=Object(a.useState)((function(){return i.getHours()})),u=Object(l.a)(c,2),f=u[0],p=(u[1],Object(a.useState)((i.getMinutes()<10?"0":"")+i.getMinutes())),d=Object(l.a)(p,2),h=d[0],m=d[1];Object(a.useEffect)((function(){o(f>=3&&f<10?"morning":f>=10&&f<=18?"day":"evening")}),[h]);return setInterval((function(){var e=new Date;if(0===e.getSeconds()){var n=(e.getMinutes()<10?"0":"")+e.getMinutes();m(n)}}),1e3),r.a.createElement(w,null,r.a.createElement(j,null,i.getHours()+" : "+h),r.a.createElement("h3",null,"Have a good ",t,"."))},O=t(16),y=t(23);function k(){var e=Object(c.a)(['\n  font-family: "helvetica";\n  padding: 10px;\n  margin: 10px 0;\n  display: flex;\n  color: #0a1826;\n  font-weight: 500;\n  img {\n    height: 64px;\n    width: 64px;\n    object-fit: cover;\n  }\n  .article-details-container {\n    display: flex;\n    flex-direction: column;\n    padding: 0 5px;\n    justify-content: space-between;\n    width: 100%;\n  }\n  h4 {\n    margin: 0;\n    font-size: 16px;\n  }\n  span {\n    color: #1b1e23;\n    padding: 5px 10px;\n    margin: 0 2px;\n    border: 1px solid black;\n    color: black;\n  }\n  .article-details {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n']);return k=function(){return e},e}var S=p.a.div(k()),z=function(e){var n=e.article,t=Object(a.useState)({title:n.title,image:n.cover_image,published:n.readable_publish_date,tags:n.tag_list}),o=Object(l.a)(t,2),i=o[0],c=o[1];Object(a.useEffect)((function(){var e=n.title.split(/(\S+\s+)/).filter((function(e){return e}));e.length=6,e=e.join(" "),c((function(n){return Object(y.a)({},n,{title:e})}))}),[]);return r.a.createElement(S,null,r.a.createElement("img",{src:i.image,alt:""}),r.a.createElement("div",{className:"article-details-container"},r.a.createElement("h4",null,i.title),r.a.createElement("div",{className:"article-details"},i.tags?i.tags.map((function(e){return r.a.createElement("span",{key:e},"string"!==typeof(n=e)?"":n.charAt(0).toUpperCase()+n.slice(1));var n})):null,r.a.createElement("span",null,i.published))))};function C(){var e=Object(c.a)(["\n  position: absolute;\n  right: -2px;\n  width: 400px;\n  height: auto;\n  max-height: 400px;\n  background-color: white;\n  margin-top: -22px;\n  transition: all 0.3s ease;\n  .show {\n    height: 180px;\n  }\n"]);return C=function(){return e},e}function N(){var e=Object(c.a)(['\n  p {\n    position: relative;\n    color: white;\n    font-size: 25px;\n    cursor: pointer;\n    &:hover {\n      &:before {\n        width: 155px;\n      }\n    }\n    &:before {\n      position: absolute;\n      content: "";\n      top: 40px;\n      height: 2.5px;\n      background-color: white;\n      width: 70px;\n      transition: all 0.3s ease;\n    }\n  }\n']);return N=function(){return e},e}var D=p.a.div(N()),L=p.a.div(C()),_=function(){var e=Object(a.useState)(),n=Object(l.a)(e,2),t=n[0],o=n[1],i=Object(a.useState)(!1),c=Object(l.a)(i,2),u=c[0],s=c[1],f=Object(O.b)(u,null,{from:{transform:"translate3d(0,-20px,0)",opacity:0},enter:{transform:"translate3d(0,0px,0)",opacity:1},leave:{transform:"translate3d(0,-20px,0)",opacity:0}});return Object(a.useEffect)((function(){fetch("https://dev.to/api/articles/?key=Xjuj2yoRk6JWFpXNHEWWLnBj").then((function(e){return e.json()})).then((function(e){e.length=3,o(e)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement(D,null,r.a.createElement("p",{onClick:function(){return s(!u)}},"Read some dev news"),f.map((function(e){var n=e.item,a=(e.key,e.props);return n?r.a.createElement(O.a.div,{style:a},r.a.createElement(L,null,t.map((function(e){return r.a.createElement(z,{article:e})})))):null})))};function H(){var e=Object(c.a)(["\n  font-family: helvetica;\n  color: white;\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 10px;\n  margin-bottom: 30px;\n  opacity: 0.9;\n"]);return H=function(){return e},e}function M(){var e=Object(c.a)(["\n  max-width: 500px;\n"]);return M=function(){return e},e}var W=p.a.div(M()),q=p.a.p(H()),A=function(){var e=Object(a.useState)(""),n=Object(l.a)(e,2),t=n[0],o=n[1];return Object(a.useEffect)((function(){fetch("https://favqs.com/api/qotd").then((function(e){return e.json()})).then((function(e){return o(e.quote)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement(W,null,r.a.createElement(q,null,'"',t.body,'" ',r.a.createElement("br",null)," ",r.a.createElement("br",null),"- ",t.author))};function J(){var e=Object(c.a)(["\nposition: relative;\noverflow: hidden;\n  height: 100vh;\n  width: 100%;\n  background-image: url('","');\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  font-family: 'Teko', sans-serif;\n  .upper-row {\n    width: 90%;\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 10px;\n    z-index: 0;\n    img {\n      opacity: 0.8;\n    }\n  }\n  .middle-row {\n    height: 80vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    z-index: 0;\n  }\n  .bottom-row {\n    display: flex;\n    justify-content: center;\n    z-index: 0;\n  }\n .background-opacity {\n    position: absolute;\n    height: 100vh;\n    width: 100%;\n    opacity: 0.2;\n    background-color: black;\n  }\n"]);return J=function(){return e},e}var R=p.a.div(J(),(function(e){return e.background})),T=function(){var e=Object(a.useState)(),n=Object(l.a)(e,2),t=n[0],o=n[1],i=Object(g.a)(["background"]),c=Object(l.a)(i,3),u=(c[0],c[1]),s=(c[2],new b.a);return Object(a.useEffect)((function(){!function(){var e=s.get("background-cookie"),n=new Date;n.setDate((new Date).getDate()+1),void 0!==e?o(e):fetch("https://source.unsplash.com/".concat(window.innerWidth,"x").concat(window.innerHeight,"/?background,relax")).then((function(e){o(e.url),u("background-cookie",e.url,{expires:n})}))}()}),[]),r.a.createElement(f,null,r.a.createElement(R,{background:t},r.a.createElement("div",{className:"background-opacity"}),r.a.createElement("div",{className:"upper-row"},r.a.createElement(_,null)),r.a.createElement("div",{className:"middle-row"},r.a.createElement(E,null),r.a.createElement(m,null)),r.a.createElement("div",{className:"bottom-row"},r.a.createElement(A,null))))},U=t(44);i.a.render(r.a.createElement(U.a,null,r.a.createElement(T,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.ec1f3cf1.chunk.js.map