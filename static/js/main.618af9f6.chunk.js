(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(7),s=n.n(c),o=n(6),i=n(8),r=(n(13),n(14),n(1)),a=n(3),l=n.n(a),u=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j="alph",h="length";var d=function(){var t=Object(r.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1],s=Object(r.useState)(!1),a=Object(o.a)(s,2),d=a[0],f=a[1],p=function(t,e,n){var c=Object(i.a)(t);if(e)switch(e){case j:c.sort((function(t,e){return t.localeCompare(e)}));break;case h:c.sort((function(t,e){return t.length-e.length}))}return n&&c.reverse(),c}(b,n,d),g=!(!d&&!n);return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:l()("button","is-info",{"is-light":n!==j}),onClick:function(){return c(j)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:l()("button","is-info",{"is-light":n!==h}),onClick:function(){return c(h)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:l()("button","is-info",{"is-light":!d}),onClick:function(){return f(!d)},children:"Reverse"}),g&&Object(u.jsx)("button",{type:"button",className:l()("button","is-danger","is-light"),onClick:function(){c(""),f(!1)},children:"Reset"})]}),Object(u.jsx)("ul",{children:p.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};s.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.618af9f6.chunk.js.map