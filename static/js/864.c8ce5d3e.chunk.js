"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[864],{864:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r,a,u=t(861),c=t(439),o=t(757),s=t.n(o),i=t(791),p=t(390),f=t(87),h=t(689),l=t(168),d=t(444),v=d.ZP.ul(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 15px;\n"]))),m=d.ZP.li(a||(a=(0,l.Z)(["\n\n&:hover,\n  &:focus {\n    color: blue;\n    font-weight: 500;\n  }\n"]))),x=t(184),g=function(){var e=(0,i.useState)(""),n=(0,c.Z)(e,2),t=n[0],r=n[1],a=(0,i.useState)([]),o=(0,c.Z)(a,2),l=o[0],d=o[1],g=(0,i.useState)(!1),y=(0,c.Z)(g,2),b=y[0],w=y[1],k=(0,i.useState)(!1),Z=(0,c.Z)(k,2),j=Z[0],S=Z[1],_=(0,i.useState)(!1),q=(0,c.Z)(_,2),P=q[0],U=q[1],C=(0,f.lr)(),D=(0,c.Z)(C,2),T=D[0],F=D[1],B=T.get("query"),E=(0,h.TH)();return(0,i.useEffect)((function(){if(B){var e=function(){var e=(0,u.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d([]),U(!1),w(!0),e.next=6,(0,p.on)(B);case 6:n=e.sent,d(n.results),console.log(n.results.length),""!==B&&0===n.results.length&&U(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),S(!0);case 15:return e.prev=15,w(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})));return function(){return e.apply(this,arguments)}}();e()}}),[B]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.trim()&&(F({query:t}),r(""))},children:[(0,x.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:t,onChange:function(e){return r(e.target.value)}}),(0,x.jsx)("button",{type:"submit",children:"Search"})]}),j&&(0,x.jsx)("p",{children:"Something went wrong please reload the page!"}),b&&(0,x.jsx)("p",{children:"Loading..."}),P&&(0,x.jsx)("p",{children:"There is not any movie for this request. Please, change the query!"}),(0,x.jsx)(v,{children:l.map((function(e){var n=e.id,t=e.title;return(0,x.jsx)(m,{children:(0,x.jsx)(f.rU,{to:"".concat(n),state:{from:E},children:t})},n)}))})]})}},390:function(e,n,t){t.d(n,{Bt:function(){return d},DD:function(){return s},Tg:function(){return c},on:function(){return p},y:function(){return h}});var r=t(861),a=t(757),u=t.n(a);function c(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("\n      https://api.themoviedb.org/3/trending/all/day?api_key=9736a35e31abd19d6144591c8e77ccff");case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(e){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("\n    https://api.themoviedb.org/3/movie/".concat(n,"?api_key=9736a35e31abd19d6144591c8e77ccff&language=en-US"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("\n      https://api.themoviedb.org/3/search/movie?api_key=9736a35e31abd19d6144591c8e77ccff&language=en-US&page=1&include_adult=false&query=".concat(n));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("    \n    https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=9736a35e31abd19d6144591c8e77ccff&language=en-US"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("    \n      https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=9736a35e31abd19d6144591c8e77ccff&language=en-US&page=1"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},861:function(e,n,t){function r(e,n,t,r,a,u,c){try{var o=e[u](c),s=o.value}catch(i){return void t(i)}o.done?n(s):Promise.resolve(s).then(r,a)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(a,u){var c=e.apply(n,t);function o(e){r(c,a,u,o,s,"next",e)}function s(e){r(c,a,u,o,s,"throw",e)}o(void 0)}))}}t.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=864.c8ce5d3e.chunk.js.map