(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,n,t){e.exports=t.p+"static/media/search.c4127766.svg"},30:function(e,n,t){e.exports=t(46)},35:function(e,n,t){},37:function(e,n,t){},44:function(e,n,t){e.exports=t.p+"static/media/devdash.6c365d04.svg"},45:function(e,n,t){e.exports=t.p+"static/media/refresh.f2ef4583.svg"},46:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(18),c=t.n(i),o=(t(35),t(3)),l=t(19),u=t.n(l),s=t(2),f=(t(37),t(49)),p=Object(a.createContext)(),d=function(e){var n=Object(a.useState)(),t=Object(s.a)(n,2),i=t[0],c=t[1],o=Object(a.useState)(),l=Object(s.a)(o,2),u=(l[0],l[1]);return r.a.createElement(p.Provider,{value:{user:i,fetchUser:function(){fetch("/auth/login/success",{method:"GET",credentials:"include",headers:{accepts:"application/json","Content-Type":"application/json","Access-Control-Allow-Credentials":!0}}).then((function(e){if(200===e.status)return e.json()})).then((function(e){e&&(u(e.message),c(e.user))}))},handleLogin:function(){window.open("/auth/login/google","_self")},handleLogout:function(){window.open("/auth/logout","_self")},handleRedirect:function(){return r.a.createElement(f.a,{to:"/"})}}},e.children)},h=t(4);function m(){var e=Object(o.a)(["\n  color: white;\n  font-size: 40px;\n  margin: 50px 0 0 0;\n  text-align: center;\n  span {\n    border-bottom: 2px solid white;\n    cursor: pointer;\n  }\n"]);return m=function(){return e},e}var g=h.a.p(m()),b=function(){var e=Object(a.useContext)(p),n=e.user,t=e.fetchUser,i=e.handleLogin;e.handleLogout;return Object(a.useEffect)((function(){t()}),[]),n?r.a.createElement(g,null,"Features in development."):r.a.createElement(g,null,r.a.createElement("span",{onClick:i},"Log in,")," for more features")},x=(t(44),t(47)),v=t(26);function j(){var e=Object(o.a)(["\n  h3 {\n    text-align: center;\n    font-size: 70px;\n    color: white;\n    font-weight: 400;\n    margin-top: -50px;\n    top: 10px;\n  }\n"]);return j=function(){return e},e}function w(){var e=Object(o.a)(["\n  color: white;\n  font-size: 130px;\n  font-weight: 400;\n  margin-bottom: 0;\n  text-align: center;\n"]);return w=function(){return e},e}var E=h.a.h1(w()),O=h.a.div(j()),y=function(){Object(a.useContext)(p).user;var e=Object(a.useState)(""),n=Object(s.a)(e,2),t=n[0],i=n[1],c=new Date,o=Object(a.useState)((function(){return c.getHours()})),l=Object(s.a)(o,2),u=l[0],f=(l[1],Object(a.useState)((c.getMinutes()<10?"0":"")+c.getMinutes())),d=Object(s.a)(f,2),h=d[0],m=d[1];Object(a.useEffect)((function(){i(u>=3&&u<10?"morning":u>=10&&u<17?"day":"evening")}),[h]);return setInterval((function(){var e=new Date;if(0===e.getSeconds()){var n=(e.getMinutes()<10?"0":"")+e.getMinutes();m(n)}}),1e3),r.a.createElement(O,null,r.a.createElement(E,null,c.getHours()+" : "+h),r.a.createElement("h3",null,"Have a good ",t,"."))},k=t(16),S=t(24);function z(){var e=Object(o.a)(['\n  font-family: "helvetica";\n  z-index: 1;\n  padding: 15px;\n  margin: 10px 0;\n  display: flex;\n  color: #0a1826;\n  font-weight: 500;\n  a {\n    text-decoration: none;\n    font-weight: 600;\n  }\n  img {\n    height: 64px;\n    width: 64px;\n    object-fit: cover;\n  }\n  .article-details-container {\n    display: flex;\n    flex-direction: column;\n    padding: 0 5px;\n    justify-content: space-between;\n  }\n  h4 {\n    margin: 0 0 0 12px;\n    font-size: 16px;\n  }\n  span {\n    color: #1b1e23;\n    padding: 0px 0px 0 10px;\n    margin: 0 2px;\n    font-size: 14px;\n    color: #797979;\n  }\n  .article-details {\n    display: flex;\n    flex-direction: row;\n  }\n']);return z=function(){return e},e}var C=h.a.div(z()),N=function(e){var n=e.article,t=Object(a.useState)({title:n.title,image:n.cover_image,user_image:n.user.profile_image,published:n.readable_publish_date,tags:n.tag_list.slice(0,3),user:n.user.name,link:n.url}),i=Object(s.a)(t,2),c=i[0],o=i[1];Object(a.useEffect)((function(){var e=n.title.split(/(\S+\s+)/).filter((function(e){return e}));e.length=6,e=e.join(" "),o((function(n){return Object(S.a)({},n,{title:e})}))}),[]);return r.a.createElement(C,null,c.image?r.a.createElement("img",{src:c.image,alt:""}):r.a.createElement("img",{src:c.user_image}),r.a.createElement("div",{className:"article-details-container"},r.a.createElement("div",{className:"article-details"},c.tags?c.tags.map((function(e){return r.a.createElement("span",{key:e},"string"!==typeof(n=e)?"":n.charAt(0).toUpperCase()+n.slice(1));var n})):null),r.a.createElement("h4",null,c.title),r.a.createElement("span",null,c.published," by ",c.user," -"," ",r.a.createElement("a",{href:c.link,target:"_blank"},"Read article."))))},_=(t(45),t(25)),D=t.n(_);function L(){var e=Object(o.a)(["\n  width: 80%;\n  margin-top: 20px;\n  display: flex;\n  justify-content: flex-end;\n  input {\n    width: 68%;\n    margin-right: 5px;\n  }\n  img {\n    width: 20px;\n  }\n  button,\n  input {\n    background-color: #e1e1e1;\n    border: none;\n    padding: 5px;\n  }\n"]);return L=function(){return e},e}var H=h.a.form(L()),M=function(e){var n=e.searchNews,t=Object(a.useState)(""),i=Object(s.a)(t,2),c=i[0],o=i[1];return r.a.createElement(H,{onSubmit:function(e){return function(e){e.preventDefault(),n(c)}(e)}},r.a.createElement("input",{type:"text",onChange:function(e){return o(e.target.value)},placeholder:"search for articles"}),r.a.createElement("button",{type:"submit"},r.a.createElement("img",{src:D.a,alt:""})))};function R(){var e=Object(o.a)(["\n  position: absolute;\n  right: -2px;\n  width: 400px;\n  height: auto;\n  max-height: 400px;\n  background-color: white;\n  margin-top: -22px;\n  transition: all 0.3s ease;\n  .show {\n    height: 180px;\n  }\n  .refresh {\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n    img {\n      height: 22px;\n      width: 22px;\n      padding: 30px 50px 0px 15px;\n      cursor: pointer;\n      transition: all 0.3s ease;\n    }\n  }\n  .searchbar-container {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n  }\n"]);return R=function(){return e},e}function W(){var e=Object(o.a)(['\n  p {\n    position: relative;\n    color: white;\n    font-size: 25px;\n    cursor: pointer;\n    &:hover {\n      &:before {\n        width: 155px;\n      }\n    }\n    &:before {\n      position: absolute;\n      content: "";\n      top: 40px;\n      height: 2.5px;\n      background-color: white;\n      width: 70px;\n      transition: all 0.3s ease;\n    }\n  }\n']);return W=function(){return e},e}var q=h.a.div(W()),A=h.a.div(R()),J=function(){var e=Object(a.useState)(),n=Object(s.a)(e,2),t=n[0],i=n[1],c=Object(a.useState)(!1),o=Object(s.a)(c,2),l=o[0],u=o[1],f=Object(k.b)(l,null,{from:{transform:"translate3d(0,-20px,0)",opacity:0},enter:{transform:"translate3d(0,0px,0)",opacity:1},leave:{transform:"translate3d(0,-20px,0)",opacity:0}}),p=function(e){fetch("https://dev.to/api/articles/?tag=".concat(e)).then((function(e){return e.json()})).then((function(e){e.length=3,i(e)})).catch((function(e){console.log(e)}))};return Object(a.useEffect)((function(){fetch("https://dev.to/api/articles/?key=Xjuj2yoRk6JWFpXNHEWWLnBj").then((function(e){return e.json()})).then((function(e){e.length=3,i(e)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement(q,null,r.a.createElement("p",{onClick:function(){return u(!l)}},"Read some dev news"),f.map((function(e){var n=e.item,a=(e.key,e.props);return n?r.a.createElement(k.a.div,{style:a},r.a.createElement(A,null,r.a.createElement("div",{className:"searchbar-container"},r.a.createElement(M,{searchNews:p})),t.map((function(e){return r.a.createElement(N,{key:e.title,article:e})})))):null})))};function T(){var e=Object(o.a)(["\n  font-family: helvetica;\n  color: white;\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 10px;\n  margin-bottom: 30px;\n  opacity: 0.9;\n"]);return T=function(){return e},e}function U(){var e=Object(o.a)(["\n  max-width: 500px;\n"]);return U=function(){return e},e}var B=h.a.div(U()),F=h.a.p(T()),I=function(){var e=Object(a.useState)(""),n=Object(s.a)(e,2),t=n[0],i=n[1];return Object(a.useEffect)((function(){fetch("https://favqs.com/api/qotd").then((function(e){return e.json()})).then((function(e){return i(e.quote)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement(B,null,r.a.createElement(F,null,'"',t.body,'" ',r.a.createElement("br",null)," ",r.a.createElement("br",null),"- ",t.author))};function X(){var e=Object(o.a)(["\n  position: relative;\n  overflow: hidden;\n  height: 100vh;\n  width: 100%;\n  background-image: url('","');\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  font-family: 'Teko', sans-serif;\n  .upper-row {\n    width: 90%;\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 10px;\n    z-index: 1;\n    img {\n      opacity: 0.8;\n    }\n  }\n  .middle-row {\n    height: 80vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    z-index: 0;\n  }\n  .bottom-row {\n    display: flex;\n    justify-content: center;\n    z-index: 0;\n  }\n .background-opacity {\n    position: absolute;\n    height: 100vh;\n    width: 100%;\n    opacity: 0.2;\n    background-color: black;\n  }\n"]);return X=function(){return e},e}var G=h.a.div(X(),(function(e){return e.background})),P=function(){var e=Object(a.useState)(""),n=Object(s.a)(e,2),t=n[0],i=n[1],c=Object(x.a)(["background"]),o=Object(s.a)(c,3),l=(o[0],o[1]),f=(o[2],new v.a);return Object(a.useEffect)((function(){!function(){var e,n;u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e=f.get("background-cookie"),(n=new Date).setDate((new Date).getDate()+1),void 0!==e?i(e):fetch("https://source.unsplash.com/".concat(window.innerWidth,"x").concat(window.innerHeight,"/?background,relax")).then((function(e){i(e.url),l("background-cookie",e.url,{expires:n})}));case 4:case"end":return t.stop()}}))}()}),[]),r.a.createElement(d,null,r.a.createElement(G,{background:t},r.a.createElement("div",{className:"background-opacity"}),r.a.createElement("div",{className:"upper-row"},r.a.createElement(J,null)),r.a.createElement("div",{className:"middle-row"},r.a.createElement(y,null),r.a.createElement(b,null)),r.a.createElement("div",{className:"bottom-row"},r.a.createElement(I,null))))},K=t(48);c.a.render(r.a.createElement(K.a,null,r.a.createElement(P,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.ab03ac6a.chunk.js.map