"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[689],{2046:function(n,t,e){e.d(t,{Z:function(){return w}});var r,a,o,i,c,u=e(8683),s=e(7689),p=e(168),f=e(6731),l=e(6444),d=l.ZP.li(r||(r=(0,p.Z)(["\n  box-shadow: rgb(204 204 204) 0px 0px 8px 1px;\n  border-radius: 5px;\n  /* & + & {\n    margin-left: 20px;\n  } */\n  margin-bottom: 10px;\n  width: 320px;\n"]))),x=l.ZP.img(a||(a=(0,p.Z)(["\n  width: 100%;\n  height: 400px;\n  /* object-fit: cover; */\n"]))),m=(0,l.ZP)(f.rU)(o||(o=(0,p.Z)(["\n  text-decoration: none;\n  color: black;\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',\n    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n"]))),b=l.ZP.h2(i||(i=(0,p.Z)(["\n  font-weight: 200;\n"]))),g=e(6939),h=e(184);function v(n){var t=n.id,e=n.original_title,r=n.poster_path,a=(0,s.TH)(),o=r?"".concat("https://image.tmdb.org/t/p/w500","/").concat(r):g;return(0,h.jsx)(d,{children:(0,h.jsxs)(m,{to:"/movies/".concat(t),state:{from:a},children:[(0,h.jsx)(x,{src:o,alt:""}),(0,h.jsx)(b,{children:e})]})},t)}var y=l.ZP.ul(c||(c=(0,p.Z)(["\n  /* list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  text-align: center; */\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  list-style: none;\n"])));function w(n){var t=n.items;return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(y,{children:t.map((function(n){return(0,h.jsx)(v,(0,u.Z)({},n),n.id)}))})})}},9689:function(n,t,e){e.r(t),e.d(t,{default:function(){return O}});var r,a,o,i,c=e(2982),u=e(5861),s=e(885),p=e(7757),f=e.n(p),l=e(2791),d=e(1414),x=e(168),m=e(6444),b=m.ZP.input(r||(r=(0,x.Z)(["\n  width: 400px;\n  font-size: 16px;\n  padding: 6px 80px 6px 6px;\n  outline: none;\n  border: 2px solid rgb(204, 204, 204);\n  border-radius: 5px;\n  transition: border-color 200ms linear 0s;\n"]))),g=m.ZP.div(a||(a=(0,x.Z)(["\n  display: block;\n  position: relative;\n"]))),h=m.ZP.button(o||(o=(0,x.Z)(["\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  height: 100%;\n  /* display: flex; */\n  /* -webkit-box-pack: center; */\n  justify-content: center;\n  /* -webkit-box-align: center; */\n  outline: none;\n  align-items: center;\n  border: 2px solid rgb(204, 204, 204);\n  /* border: none; */\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  background-color: rgb(255, 255, 255);\n  color: rgb(0, 109, 186);\n  font-size: 16px;\n  font-weight: 500;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: all 200ms linear 0s;\n  :hover {\n    background-color: #5e5eef;\n    color: white;\n    border: none;\n  }\n"]))),v=m.ZP.form(i||(i=(0,x.Z)(["\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n  padding: 20px 0px;\n"]))),y=e(184);function w(n){var t=n.submit,e=(0,l.useState)(""),r=(0,s.Z)(e,2),a=r[0],o=r[1];return(0,y.jsx)(v,{onSubmit:function(n){n.preventDefault(),t({moviesName:a}),o("")},children:(0,y.jsxs)(g,{children:[(0,y.jsx)(b,{name:"movieName",value:a,type:"text",onChange:function(n){o(n.target.value.toLowerCase())}}),(0,y.jsx)(h,{type:"submit",children:"Search"})]})})}var Z=e(2046),j=e(6731),k=e(4585);function O(){var n,t=(0,l.useState)([]),e=(0,s.Z)(t,2),r=e[0],a=e[1],o=(0,l.useState)(""),i=(0,s.Z)(o,2),p=i[0],x=i[1],m=(0,l.useState)(1),b=(0,s.Z)(m,2),g=b[0],h=b[1],v=(0,l.useState)(!1),O=(0,s.Z)(v,2),P=O[0],_=O[1],S=(0,j.lr)(),L=(0,s.Z)(S,2),C=L[0],D=L[1],z=null!==(n=C.get("name_film"))&&void 0!==n?n:"";return(0,l.useEffect)((function(){function n(){return(n=(0,u.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return _(!0),n.prev=1,n.next=4,(0,d.mv)(z,g);case 4:t=n.sent,a((function(n){return[].concat((0,c.Z)(n),(0,c.Z)(t.results))}));case 6:return n.prev=6,_(!1),n.finish(6);case 9:case"end":return n.stop()}}),n,null,[[1,,6,9]])})))).apply(this,arguments)}z&&function(){n.apply(this,arguments)}()}),[z,g]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(w,{submit:function(n){var t=n.moviesName;x(t),D({name_film:t})}}),P&&(0,y.jsx)(k.Z,{}),r&&(0,y.jsx)(Z.Z,{items:r}),p&&(0,y.jsx)("button",{type:"button",onClick:function(){h((function(n){return n+1}))},children:"Load more"})]})}},1414:function(n,t,e){e.d(t,{Bt:function(){return h},KS:function(){return p},SW:function(){return x},mv:function(){return l},z4:function(){return b}});var r=e(5861),a=e(7757),o=e.n(a),i=e(4569),c=e.n(i),u="4d4e27deea421fc269c2758df5384469",s="https://api.themoviedb.org/3";function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(s,"/trending/movie/week?api_key=").concat(u,"&page=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function n(t,e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(s,"/search/movie?api_key=").concat(u,"&query=").concat(t,"&page=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("\n  ".concat(s,"/movie/").concat(t,"?api_key=").concat(u,"\n  "));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c().get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(u));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c().get("\n    ".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(u,"\n    "));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},6939:function(n,t,e){n.exports=e.p+"static/media/default-poster.b98378e2328f30af55fe.jpg"},8683:function(n,t,e){function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}e.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=689.432009c9.chunk.js.map