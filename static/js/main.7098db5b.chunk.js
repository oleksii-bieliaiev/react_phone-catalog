(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var s=c(28),n=c.n(s),a=c(9),i=c(8),r=c(4),o=c(5),l=c.n(o),j=c(1),d=c(3),u=function(e){return fetch("".concat("https://mate-academy.github.io/react_phone-catalog/api").concat(e)).then((function(e){return e.ok||Promise.reject(new Error("error")),e.json()}))},b=function(e){return u("/products/".concat(e,".json"))},m=(c(34),c(35),c(36),c(6)),p=(c(37),c(0)),O=function(){return Object(p.jsx)(a.b,{to:"/",className:"logo",children:Object(p.jsxs)("svg",{width:"40",height:"11",viewBox:"0 0 40 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(p.jsx)("path",{d:"M2.93333 8.0966V0.254421H0V10.7306H6.65986V8.0966H2.93333Z",fill:"#313237"}),Object(p.jsx)("path",{d:"M11.6842 11C15.0516 11 17.4461 8.7102 17.4461 5.50748C17.4461 2.2898 15.0516 0 11.6842 0C8.31688 0 5.92232 2.30476 5.92232 5.50748C5.92232 8.69524 8.31688 11 11.6842 11ZM11.6842 8.32109C10.0978 8.32109 8.91552 7.12381 8.91552 5.50748C8.91552 3.87619 10.0978 2.67891 11.6842 2.67891C13.2856 2.67891 14.438 3.86122 14.438 5.50748C14.438 7.13878 13.2856 8.32109 11.6842 8.32109Z",fill:"#313237"}),Object(p.jsx)("path",{d:"M22.535 5.13333V6.95918H25.1391C24.8099 7.76735 23.867 8.30612 22.7595 8.30612C21.1731 8.30612 20.1405 7.16871 20.1405 5.50748C20.1405 3.83129 21.1881 2.69388 22.7595 2.69388C23.8221 2.69388 24.765 3.26258 25.1391 4.14558H28.1772C27.7282 1.72109 25.4833 0 22.7296 0C19.5119 0 17.1772 2.31973 17.1772 5.50748C17.1772 8.69524 19.5568 11 22.7595 11C26.0371 11 28.282 8.56054 28.282 5.13333H22.535Z",fill:"#313237"}),Object(p.jsx)("path",{d:"M33.7555 11C37.1229 11 39.5175 8.7102 39.5175 5.50748C39.5175 2.2898 37.1229 0 33.7555 0C30.3882 0 27.9936 2.30476 27.9936 5.50748C27.9936 8.69524 30.3882 11 33.7555 11ZM33.7555 8.32109C32.1692 8.32109 30.9868 7.12381 30.9868 5.50748C30.9868 3.87619 32.1692 2.67891 33.7555 2.67891C35.3569 2.67891 36.5093 3.86122 36.5093 5.50748C36.5093 7.13878 35.3569 8.32109 33.7555 8.32109Z",fill:"#313237"})]})})},h=(c(39),function(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsxs)("div",{className:"footer__content container",children:[Object(p.jsx)(O,{}),Object(p.jsx)("a",{href:"https://github.com/oleksii-bieliaiev",className:"footer__link",target:"_blank",rel:"noreferrer",children:"Github"}),Object(p.jsxs)("button",{type:"button",className:"footer__button",onClick:function(){window.scrollTo({top:0})},children:["Back to top",Object(p.jsx)("i",{className:"fas fa-angle-up"})]})]})})}),x=c(10),_=c.n(x),f=(c(26),function(e){var t=e.to,c=e.text;return Object(p.jsx)(a.b,{to:t,className:function(e){var t=e.isActive;return _()("navigation__link",{"navigation__link--active":t})},children:c})}),g=function(){return Object(p.jsx)("nav",{className:"navigation",children:Object(p.jsxs)("ul",{className:"navigation__list",children:[Object(p.jsx)("li",{className:"navigation__item",children:Object(p.jsx)(f,{to:"/",text:"Home"})}),Object(p.jsx)("li",{className:"navigation__item",children:Object(p.jsx)(f,{to:"/phones",text:"Phones"})}),Object(p.jsx)("li",{className:"navigation__item",children:Object(p.jsx)(f,{to:"/tablets",text:"Tablets"})}),Object(p.jsx)("li",{className:"navigation__item",children:Object(p.jsx)(f,{to:"/accessories",text:"Accessories"})})]})})},v=(c(40),function(){var e=JSON.parse(localStorage.getItem("favorites")||"").map((function(e){return e})),t=JSON.parse(localStorage.getItem("carts")||"").filter((function(e){return e.id}));return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsxs)("div",{className:"header-left",children:[Object(p.jsx)(O,{}),Object(p.jsx)(g,{})]}),Object(p.jsxs)("div",{className:"header-right",children:[Object(p.jsxs)(a.b,{to:"/favorites",className:"header__icon",children:[Object(p.jsx)("img",{src:"./img/icons/Like.svg",alt:"favorites"}),e.length>0&&Object(p.jsx)("span",{className:"header__counter",children:e.length})]}),Object(p.jsxs)(a.b,{to:"/cart",className:"header__icon",children:[Object(p.jsx)("img",{src:"./img/icons/Cart.svg",alt:"cart"}),t.length>0&&Object(p.jsx)("span",{className:"header__counter",children:t.length})]})]})]})}),N=(c(41),function(){var e=Object(j.useState)(0),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(p.jsxs)("div",{className:"banner container",children:[Object(p.jsxs)("div",{className:"banner__content",children:[Object(p.jsx)("button",{type:"button",className:"banner__button banner__button--left",onClick:function(){return s(0===c?2:c-1)},children:Object(p.jsx)("i",{className:"fas fa-chevron-left"})}),Object(p.jsxs)("div",{className:"banner__image",children:[Object(p.jsx)("img",{src:"./img/newBanners/banner1.png",alt:"Banner-1",className:_()("banner__img",{"banner__img--active":0===c})}),Object(p.jsx)("img",{src:"./img/newBanners/banner2.png",alt:"Banner-2",className:_()("banner__img",{"banner__img--active":1===c})}),Object(p.jsx)("img",{src:"./img/newBanners/banner3.png",alt:"Banner-3",className:_()("banner__img",{"banner__img--active":2===c})})]}),Object(p.jsx)("button",{type:"button",className:"banner__button banner__button--right",onClick:function(){return s(2===c?0:c+1)},children:Object(p.jsx)("i",{className:"fas fa-chevron-right"})})]}),Object(p.jsxs)("div",{className:"banner__pagination",children:[Object(p.jsx)("button",{type:"button",className:_()("banner__pagination-item",{"banner__pagination-item--active":0===c}),onClick:function(){return s(0)}}),Object(p.jsx)("button",{type:"button",className:_()("banner__pagination-item",{"banner__pagination-item--active":1===c}),onClick:function(){return s(1)}}),Object(p.jsx)("button",{type:"button",className:_()("banner__pagination-item",{"banner__pagination-item--active":2===c}),onClick:function(){return s(2)}})]})]})}),y=(c(27),function(e){var t,c,s,n=e.product,a=Object(j.useState)(!1),i=Object(r.a)(a,2),o=i[0],l=i[1];return Object(p.jsxs)("button",{className:_()("products-slider__item-button products-slider__item-button-cart",{"products-slider__item-button-cart--active":null===(t=localStorage.getItem("carts"))||void 0===t?void 0:t.includes(n.id)}),type:"button",onClick:function(){return function(e){var t=JSON.parse(localStorage.getItem("carts")||""),c={id:n.id,count:1,price:n.price-n.price/100*n.discount},s=t.find((function(t){return t.id===e}));s||localStorage.setItem("carts",JSON.stringify([].concat(Object(m.a)(t),[c]))),s&&localStorage.setItem("carts",JSON.stringify(Object(m.a)(t.filter((function(t){return t.id!==e}))))),l(!o)}(n.id)},children:[(null===(c=localStorage.getItem("carts"))||void 0===c?void 0:c.includes(n.id))&&"Added to cart",!(null!==(s=localStorage.getItem("carts"))&&void 0!==s&&s.includes(n.id))&&"Add to cart"]})}),S=function(e){var t,c=e.product,s=Object(j.useState)(!1),n=Object(r.a)(s,2),a=n[0],i=n[1];return Object(p.jsxs)("button",{className:_()("products-slider__item-button products-slider__item-button-favorite",{"products-slider__item-button-favorite--active":null===(t=localStorage.getItem("favorites"))||void 0===t?void 0:t.includes(c.id)}),type:"button",onClick:function(){if(localStorage.getItem("favorites")){var e=JSON.parse(localStorage.getItem("favorites")||""),t=e.includes(c.id);t||(localStorage.setItem("favorites",JSON.stringify([].concat(Object(m.a)(e),[c.id]))),i(!a)),t&&(localStorage.setItem("favorites",JSON.stringify(Object(m.a)(e.filter((function(e){return e!==c.id}))))),i(!a))}},children:[Object(p.jsx)("img",{src:"./img/icons/Like.svg",alt:"add"}),Object(p.jsx)("img",{src:"./img/icons/Red Like.svg",alt:"remove"})]})},C=function(e){var t=e.product,c=t.price-t.price/100*t.discount;return Object(p.jsxs)("div",{className:"products-slider__item",children:[Object(p.jsx)(a.b,{to:"/".concat(t.type,"s/").concat(t.id),className:"products-slider__item-link",onClick:function(){window.scrollTo({top:0})},children:Object(p.jsx)("i",{className:"fa-solid fa-crosshairs"})}),Object(p.jsx)("img",{src:t.imageUrl,alt:t.name,className:"products-slider__item-image"}),Object(p.jsx)("h2",{className:"products-slider__item-title",children:t.name}),Object(p.jsxs)("p",{className:"products-slider__item-price",children:[Object(p.jsx)("span",{className:"products-slider__item-current-price",children:"$".concat(c)}),t.price!==c&&Object(p.jsx)("span",{className:"products-slider__item-old-price",children:"$".concat(t.price)})]}),Object(p.jsxs)("div",{className:"products-slider__item-info",children:[Object(p.jsxs)("p",{className:"products-slider__item-info-text",children:["Screen",Object(p.jsx)("span",{children:t.screen||"-"})]}),Object(p.jsxs)("p",{className:"products-slider__item-info-text",children:["Capacity",Object(p.jsx)("span",{children:t.capacity||"-"})]}),Object(p.jsxs)("p",{className:"products-slider__item-info-text",children:["RAM",Object(p.jsx)("span",{children:t.ram||"-"})]})]}),Object(p.jsxs)("div",{className:"products-slider__item-buttons",children:[Object(p.jsx)(y,{product:t}),Object(p.jsx)(S,{product:t})]})]})},k=function(e){var t=e.products,c=e.title,s=Object(j.useState)(0),n=Object(r.a)(s,2),a=n[0],i=n[1];return Object(p.jsxs)("div",{className:"products-slider container",children:[Object(p.jsxs)("div",{className:"products-slider__header",children:[Object(p.jsx)("h2",{className:"products-slider__title",children:c}),Object(p.jsxs)("div",{className:"products-slider__buttons",children:[Object(p.jsx)("button",{type:"button",className:_()("products-slider__button",{"products-slider__button--active":a>0}),onClick:function(){var e=a-1;e<0&&(e=0),i(e)},children:Object(p.jsx)("i",{className:"fas fa-chevron-left"})}),Object(p.jsx)("button",{type:"button",className:_()("products-slider__button",{"products-slider__button--active":a<t.length-4}),onClick:function(){var e=a+1;e>t.length-4&&(e=t.length-4)<0&&(e=0),i(e)},children:Object(p.jsx)("i",{className:"fas fa-chevron-right"})})]})]}),Object(p.jsx)("div",{className:"products-slider__content",children:t.slice(a,a+4).map((function(e){return Object(p.jsx)(C,{product:e},e.id)}))})]})},w=(c(42),function(e){var t=e.products,c=t.filter((function(e){return"phone"===e.type})),s=t.filter((function(e){return"tablet"===e.type})),n=t.filter((function(e){return"accessories"===e.type}));return Object(p.jsxs)("div",{className:"category container",children:[Object(p.jsx)("h2",{className:"category__title",children:"Shop by category"}),Object(p.jsxs)("div",{className:"category__content",children:[Object(p.jsxs)("div",{className:"category__item",children:[Object(p.jsx)(a.b,{to:"/phones",className:"category__item-link",onClick:function(){window.scrollTo({top:0})}}),Object(p.jsx)("div",{className:"category__item-image category__item-image--phones"}),Object(p.jsx)("h2",{className:"category__item-title",children:"Mobile phones"}),Object(p.jsx)("p",{className:"category__item-count",children:"".concat(c.length," models")})]}),Object(p.jsxs)("div",{className:"category__item",children:[Object(p.jsx)(a.b,{to:"/tablets",className:"category__item-link",onClick:function(){window.scrollTo({top:0})}}),Object(p.jsx)("div",{className:"category__item-image category__item-image--tablets"}),Object(p.jsx)("h2",{className:"category__item-title",children:"Tablets"}),Object(p.jsx)("p",{className:"category__item-count",children:"".concat(s.length," models")})]}),Object(p.jsxs)("div",{className:"category__item",children:[Object(p.jsx)(a.b,{to:"/accessories",className:"category__item-link",onClick:function(){window.scrollTo({top:0})}}),Object(p.jsx)("div",{className:"category__item-image category__item-image--accessories"}),Object(p.jsx)("h2",{className:"category__item-title",children:"Accessories"}),Object(p.jsx)("p",{className:"category__item-count",children:"".concat(n.length," models")})]})]})]})}),I=function(e){var t=e.products,c=Object(m.a)(t).filter((function(e){return 0!==e.discount})).sort((function(e,t){return e.discount-t.discount})),s=Object(m.a)(t).filter((function(e){return 0===e.discount})).sort((function(e,t){return t.price-e.price}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(v,{}),Object(p.jsxs)("main",{children:[Object(p.jsx)(N,{}),Object(p.jsx)(k,{products:c,title:"Hot prices"}),Object(p.jsx)(w,{products:t}),Object(p.jsx)(k,{products:s,title:"Brand new models"})]}),Object(p.jsx)(h,{})]})},J=(c(43),c(44),function(){var e=Object(d.l)().pathname.split("/");return Object(p.jsxs)("div",{className:"breadcrumbs",children:[Object(p.jsx)(a.b,{to:"/",className:"breadcrumbs__link",children:Object(p.jsx)("i",{className:"fa-solid fa-house"})})," > ",Object(p.jsx)("span",{children:e})]})}),P=(c(45),function(e){var t=e.productsLength,c=e.list,s=e.currentPage,n=e.setCurrentPage,a=Math.ceil(t/c),i=Array.from({length:a},(function(e,t){return t+1}));return Object(p.jsxs)("div",{className:"pagination",children:[Object(p.jsx)("button",{type:"button",className:"pagination__button",disabled:1===s,onClick:function(){return n(s-1)},children:Object(p.jsx)("i",{className:"fas fa-chevron-left"})}),i.map((function(e){return Object(p.jsx)("button",{type:"button",className:_()("pagination__button",{"pagination__button--active":e===s}),onClick:function(){return n(e)},children:e})})),Object(p.jsx)("button",{type:"button",className:"pagination__button",disabled:s===a,onClick:function(){return n(s+1)},children:Object(p.jsx)("i",{className:"fas fa-chevron-right"})})]})}),B=function(e){var t=e.products,c=e.title,s=e.isloading,n=Object(d.n)(),i=Object(a.c)(),o=Object(r.a)(i,1)[0],l=Object(j.useState)("newest"),u=Object(r.a)(l,2),b=u[0],m=u[1],O=Object(j.useState)("100"),x=Object(r.a)(O,2),_=x[0],f=x[1],g=Object(j.useState)(1),N=Object(r.a)(g,2),y=N[0],S=N[1],k=function(){var e=o.get("sortBy")||"newest";switch(m(e),e){case"alphabetically":t.sort((function(e,t){return e.name.localeCompare(t.name)}));break;case"price":t.sort((function(e,t){return e.price-t.price}));break;default:t.sort((function(e,t){return e.age-t.age}))}n({search:o.toString()})},w=function(){var e=o.get("perPage")||"100";f(e),S(1),n({search:o.toString()})};return Object(j.useEffect)((function(){k(),w()}),[f]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(v,{}),Object(p.jsx)("main",{children:s?Object(p.jsx)("div",{className:"product-list__loader",children:Object(p.jsx)("i",{className:"fas fa-circle-notch fa-spin"})}):Object(p.jsxs)("div",{className:"product-list container",children:[Object(p.jsx)(J,{}),Object(p.jsx)("h1",{className:"product-list__title",children:c}),t.length>0?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{className:"product-list__count",children:"".concat(t.length," models")}),Object(p.jsxs)("div",{className:"product-list__menu",children:[Object(p.jsxs)("label",{htmlFor:"#",children:["Sort By",Object(p.jsxs)("select",{value:b,onChange:function(e){o.set("sortBy",e.target.value),k()},children:[Object(p.jsx)("option",{value:"newest",children:"Newest"}),Object(p.jsx)("option",{value:"alphabetically",children:"Alphabetically"}),Object(p.jsx)("option",{value:"price",children:"Price"})]})]}),Object(p.jsxs)("label",{htmlFor:"#",children:["Items on page",Object(p.jsxs)("select",{value:_,onChange:function(e){o.set("perPage",e.target.value),w()},children:[Object(p.jsx)("option",{value:"100",children:"all"}),Object(p.jsx)("option",{value:"4",children:"4"}),Object(p.jsx)("option",{value:"8",children:"8"}),Object(p.jsx)("option",{value:"16",children:"16"})]})]})]}),Object(p.jsx)("div",{className:"product-list__content",children:t.slice((y-1)*+_,+_*y).map((function(e){return Object(p.jsx)(C,{product:e},e.id)}))})]}):Object(p.jsx)("h2",{children:"Products not found"}),+_<t.length&&Object(p.jsx)(P,{productsLength:t.length,list:+_,currentPage:y,setCurrentPage:S})]})}),Object(p.jsx)(h,{})]})},F=(c(46),function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(v,{}),Object(p.jsx)("main",{className:"pageNotFound",children:"Page not found..."}),Object(p.jsx)(h,{})]})}),A=(c(47),c(48),function(){return Object(p.jsx)("button",{type:"button",className:"back-button",onClick:function(){window.history.back()},children:"< Back"})}),M=function(e){var t=e.products,c=Object(d.p)().productId,s=void 0===c?"":c,n=Object(j.useState)(null),a=Object(r.a)(n,2),o=a[0],u=a[1],m=t.find((function(e){return e.id===(null===o||void 0===o?void 0:o.id)})),O=Object(j.useState)(null===m||void 0===m?void 0:m.imageUrl),x=Object(r.a)(O,2),_=x[0],f=x[1],g=Object(j.useState)(!1),N=Object(r.a)(g,2),C=N[0],w=N[1],I=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,b(s);case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Promise.reject(new Error("error"));case 11:return e.prev=11,w(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(j.useEffect)((function(){I()}),[s]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(v,{}),Object(p.jsx)("main",{className:"container",children:C?Object(p.jsx)("div",{className:"product-details__loader",children:Object(p.jsx)("i",{className:"fas fa-circle-notch fa-spin"})}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"product-details-page",children:[Object(p.jsx)(J,{}),Object(p.jsx)(A,{}),m&&o&&Object(p.jsxs)("div",{className:"product-details",children:[Object(p.jsx)("h2",{className:"product-details__title",children:o.name}),Object(p.jsxs)("div",{className:"product-details__content",children:[Object(p.jsx)("div",{className:"product-details__photos",children:o.images.map((function(e){return Object(p.jsx)("button",{type:"button",onClick:function(){return f(e)},className:"product-details__set-photo",children:Object(p.jsx)("img",{src:e,alt:"#"})},e)}))}),Object(p.jsx)("img",{src:_||m.imageUrl,alt:"#",className:"product-details__photo"}),Object(p.jsxs)("div",{className:"product-details__main-info",children:[Object(p.jsxs)("p",{className:"products-slider__item-price",children:[Object(p.jsx)("span",{className:"products-slider__item-current-price",children:"$".concat(m.price-m.price/100*m.discount)}),m.price!==m.price-m.price/100*m.discount&&Object(p.jsx)("span",{className:"products-slider__item-old-price",children:"$".concat(m.price)})]}),Object(p.jsxs)("div",{className:"products-slider__item-buttons",children:[Object(p.jsx)(y,{product:m}),Object(p.jsx)(S,{product:m})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{className:"product-details__data",children:["Screen",Object(p.jsx)("span",{children:o.display.screenSize})]}),Object(p.jsxs)("p",{className:"product-details__data",children:["Resolution",Object(p.jsx)("span",{children:o.display.screenResolution})]}),Object(p.jsxs)("p",{className:"product-details__data",children:["Processor",Object(p.jsx)("span",{children:o.hardware.cpu})]}),Object(p.jsxs)("p",{className:"product-details__data",children:["RAM",Object(p.jsx)("span",{children:o.storage.ram})]})]})]}),Object(p.jsxs)("div",{className:"product-details__info",children:[Object(p.jsxs)("div",{className:"product-details__about",children:[Object(p.jsx)("h2",{className:"product-details__subtitle",children:"About"}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{className:"product-details__text",children:o.description})]}),Object(p.jsxs)("div",{className:"product-details__specs",children:[Object(p.jsx)("h2",{className:"product-details__subtitle",children:"Tech specs"}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{className:"product-details__data",children:["Screen",Object(p.jsx)("span",{children:o.display.screenSize})]}),Object(p.jsxs)("p",{className:"product-details__data",children:["Resolution",Object(p.jsx)("span",{children:o.display.screenResolution})]}),Object(p.jsxs)("p",{className:"product-details__data",children:["Processor",Object(p.jsx)("span",{children:o.hardware.cpu})]}),Object(p.jsxs)("p",{className:"product-details__data",children:["RAM",Object(p.jsx)("span",{children:o.storage.ram})]}),Object(p.jsxs)("p",{className:"product-details__data",children:["Built in memory",Object(p.jsx)("span",{children:o.storage.flash})]}),Object(p.jsxs)("p",{className:"product-details__data",children:["Camera",Object(p.jsx)("span",{children:o.camera.primary})]}),Object(p.jsxs)("p",{className:"product-details__data",children:["Cell",Object(p.jsx)("span",{children:o.connectivity.cell||"-"})]})]})]})]})]}),Object(p.jsx)(k,{products:t,title:"You may also like"})]})}),Object(p.jsx)(h,{})]})},T=c(20),H=(c(49),function(e){var t=e.products,c=Object(j.useState)(!1),s=Object(r.a)(c,2),n=s[0],a=s[1],i=JSON.parse(localStorage.getItem("carts")||""),o=t.filter((function(e){var t;return null===(t=localStorage.getItem("carts"))||void 0===t?void 0:t.includes(e.id)})),l=i.map((function(e){return e.price*e.count}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(v,{}),Object(p.jsx)("main",{children:Object(p.jsxs)("div",{className:"cart container",children:[Object(p.jsx)(A,{}),Object(p.jsx)("h2",{className:"cart__title",children:"Cart"}),o.length>0&&Object(p.jsxs)("div",{className:"cart__content",children:[Object(p.jsx)("div",{className:"cart__items",children:o.map((function(e){return Object(p.jsxs)("div",{className:"cart__item",children:[Object(p.jsx)("button",{type:"button",className:"cart__item-delete-btn",onClick:function(){!function(e){var t=JSON.parse(localStorage.getItem("carts")||"");localStorage.setItem("carts",JSON.stringify(Object(m.a)(t.filter((function(t){return t.id!==e}))))),a(!n)}(e.id)},children:"x"}),Object(p.jsx)("img",{src:e.imageUrl,alt:"#",className:"cart__item-image"}),Object(p.jsx)("h2",{className:"cart__item-title",children:e.name}),Object(p.jsxs)("div",{className:"cart__item-counter",children:[Object(p.jsx)("button",{type:"button",className:_()("cart__item-count-btn",{"cart__item-count-btn--active":i.find((function(t){return t.id===e.id})).count>1}),onClick:function(){!function(e){var t=i.find((function(t){return t.id===e})),c=JSON.parse(localStorage.getItem("carts")||"");localStorage.setItem("carts",JSON.stringify([].concat(Object(m.a)(c.filter((function(t){return t.id!==e}))),[Object(T.a)(Object(T.a)({},t),{},{count:t.count-1||1})]))),a(!n)}(e.id)},children:"-"}),i.find((function(t){return t.id===e.id})).count,Object(p.jsx)("button",{type:"button",className:"cart__item-count-btn cart__item-count-btn--active",onClick:function(){!function(e){var t=i.find((function(t){return t.id===e})),c=JSON.parse(localStorage.getItem("carts")||"");localStorage.setItem("carts",JSON.stringify([].concat(Object(m.a)(c.filter((function(t){return t.id!==e}))),[Object(T.a)(Object(T.a)({},t),{},{count:t.count+1})]))),a(!n)}(e.id)},children:"+"}),Object(p.jsx)("p",{className:"cart__item-price",children:"$".concat(e.price-e.price/100*e.discount)})]})]},e.id)}))}),Object(p.jsxs)("div",{className:"cart__sum",children:[Object(p.jsx)("h2",{className:"cart__sum-amout",children:"$".concat(l.reduce((function(e,t){return e+t})))}),Object(p.jsx)("p",{className:"cart__sum-items",children:"Total price for ".concat(i.length," items")}),Object(p.jsx)("button",{className:"cart__sum-button",type:"button",children:"Checkout"})]})]}),!o.length&&Object(p.jsx)("p",{children:"Products not found"})]})}),Object(p.jsx)(h,{})]})}),R=(c(50),function(e){var t=e.products.filter((function(e){var t;return null===(t=localStorage.getItem("favorites"))||void 0===t?void 0:t.includes(e.id)}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(v,{}),Object(p.jsx)("main",{children:Object(p.jsxs)("div",{className:"favorites container",children:[Object(p.jsx)(J,{}),Object(p.jsx)("h2",{className:"favorites__title",children:"Favourites"}),t.length>0?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{className:"favorites__count",children:"".concat(t.length," items")}),Object(p.jsx)("div",{className:"favorites__content",children:t.map((function(e){return Object(p.jsx)(C,{product:e},e.id)}))})]}):Object(p.jsx)("p",{children:"Products not found"})]})}),Object(p.jsx)(h,{})]})}),E=function(){var e=Object(j.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(j.useState)(!1),a=Object(r.a)(n,2),o=a[0],b=a[1],m=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,u("/products.json");case 4:t=e.sent,s(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Promise.reject(new Error("error"));case 11:return e.prev=11,b(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}(),O=c.filter((function(e){return"phone"===e.type})),h=c.filter((function(e){return"tablet"===e.type})),x=c.filter((function(e){return"accessories"===e.type}));return Object(j.useEffect)((function(){m()}),[]),Object(p.jsxs)(d.d,{children:[Object(p.jsx)(d.b,{path:"/",element:Object(p.jsx)(I,{products:c}),children:Object(p.jsx)(d.b,{path:"/home",element:Object(p.jsx)(d.a,{to:"/"})})}),Object(p.jsx)(d.b,{path:"/phones",element:Object(p.jsx)(B,{products:O,isloading:o,title:"Mobile phones"})}),Object(p.jsx)(d.b,{path:"/phones/:productId",element:Object(p.jsx)(M,{products:O})}),Object(p.jsx)(d.b,{path:"/tablets",element:Object(p.jsx)(B,{products:h,isloading:o,title:"Tablets"})}),Object(p.jsx)(d.b,{path:"/tablets/:productId",element:Object(p.jsx)(M,{products:h})}),Object(p.jsx)(d.b,{path:"/accessories",element:Object(p.jsx)(B,{products:x,isloading:o,title:"Accessories"})}),Object(p.jsx)(d.b,{path:"/cart",element:Object(p.jsx)(H,{products:c})}),Object(p.jsx)(d.b,{path:"/favorites",element:Object(p.jsx)(R,{products:c})}),Object(p.jsx)(d.b,{path:"/*",element:Object(p.jsx)(F,{})})]})};n.a.render(Object(p.jsx)(a.a,{children:Object(p.jsx)(E,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.7098db5b.chunk.js.map