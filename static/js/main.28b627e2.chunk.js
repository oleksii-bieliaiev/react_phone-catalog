(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{26:function(t,e,c){},27:function(t,e,c){},36:function(t,e,c){},37:function(t,e,c){},39:function(t,e,c){},40:function(t,e,c){},41:function(t,e,c){},42:function(t,e,c){},43:function(t,e,c){},44:function(t,e,c){},45:function(t,e,c){},46:function(t,e,c){},47:function(t,e,c){},48:function(t,e,c){},49:function(t,e,c){},50:function(t,e,c){},51:function(t,e,c){"use strict";c.r(e);var s=c(28),n=c.n(s),a=c(6),i=c(9),r=c(24),o=c(4),l=c(5),j=c.n(l),d=c(1),u=c(3),b=function(t){return fetch("".concat("https://mate-academy.github.io/react_phone-catalog/api").concat(t)).then((function(t){return t.ok||Promise.reject(new Error("error")),t.json()}))},m=function(t){return b("/products/".concat(t,".json"))},p=(c(34),c(35),c(36),c(10)),O=(c(37),c(0)),h=function(){return Object(O.jsx)(a.c,{to:"/",className:"logo",onClick:function(){window.scrollTo({top:0})},children:Object(O.jsxs)("svg",{width:"40",height:"11",viewBox:"0 0 40 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(O.jsx)("path",{d:"M2.93333 8.0966V0.254421H0V10.7306H6.65986V8.0966H2.93333Z",fill:"#313237"}),Object(O.jsx)("path",{d:"M11.6842 11C15.0516 11 17.4461 8.7102 17.4461 5.50748C17.4461 2.2898 15.0516 0 11.6842 0C8.31688 0 5.92232 2.30476 5.92232 5.50748C5.92232 8.69524 8.31688 11 11.6842 11ZM11.6842 8.32109C10.0978 8.32109 8.91552 7.12381 8.91552 5.50748C8.91552 3.87619 10.0978 2.67891 11.6842 2.67891C13.2856 2.67891 14.438 3.86122 14.438 5.50748C14.438 7.13878 13.2856 8.32109 11.6842 8.32109Z",fill:"#313237"}),Object(O.jsx)("path",{d:"M22.535 5.13333V6.95918H25.1391C24.8099 7.76735 23.867 8.30612 22.7595 8.30612C21.1731 8.30612 20.1405 7.16871 20.1405 5.50748C20.1405 3.83129 21.1881 2.69388 22.7595 2.69388C23.8221 2.69388 24.765 3.26258 25.1391 4.14558H28.1772C27.7282 1.72109 25.4833 0 22.7296 0C19.5119 0 17.1772 2.31973 17.1772 5.50748C17.1772 8.69524 19.5568 11 22.7595 11C26.0371 11 28.282 8.56054 28.282 5.13333H22.535Z",fill:"#313237"}),Object(O.jsx)("path",{d:"M33.7555 11C37.1229 11 39.5175 8.7102 39.5175 5.50748C39.5175 2.2898 37.1229 0 33.7555 0C30.3882 0 27.9936 2.30476 27.9936 5.50748C27.9936 8.69524 30.3882 11 33.7555 11ZM33.7555 8.32109C32.1692 8.32109 30.9868 7.12381 30.9868 5.50748C30.9868 3.87619 32.1692 2.67891 33.7555 2.67891C35.3569 2.67891 36.5093 3.86122 36.5093 5.50748C36.5093 7.13878 35.3569 8.32109 33.7555 8.32109Z",fill:"#313237"})]})})},_=(c(39),function(){return Object(O.jsx)("footer",{className:"footer",children:Object(O.jsxs)("div",{className:"footer__content container",children:[Object(O.jsx)(h,{}),Object(O.jsx)("a",{href:"https://github.com/oleksii-bieliaiev",className:"footer__link",target:"_blank",rel:"noreferrer",children:"Github"}),Object(O.jsxs)("button",{type:"button",className:"footer__button",onClick:function(){window.scrollTo({top:0})},children:["Back to top",Object(O.jsx)("i",{className:"fas fa-angle-up"})]})]})})}),x=c(8),f=c.n(x),g=(c(26),function(t){var e=t.to,c=t.text;return Object(O.jsx)(a.c,{to:e,className:function(t){var e=t.isActive;return f()("navigation__link",{"navigation__link--active":e})},children:c})}),v=function(){return Object(O.jsx)("nav",{className:"navigation",children:Object(O.jsxs)("ul",{className:"navigation__list",children:[Object(O.jsx)("li",{className:"navigation__item",children:Object(O.jsx)(g,{to:"/",text:"Home"})}),Object(O.jsx)("li",{className:"navigation__item",children:Object(O.jsx)(g,{to:"/phones",text:"Phones"})}),Object(O.jsx)("li",{className:"navigation__item",children:Object(O.jsx)(g,{to:"/tablets",text:"Tablets"})}),Object(O.jsx)("li",{className:"navigation__item",children:Object(O.jsx)(g,{to:"/accessories",text:"Accessories"})})]})})},N=(c(40),Object(d.createContext)({cart:[],fav:[],toggleCart:function(){},setFav:function(){},toggleFav:function(){},setCart:function(){return[]},totalCount:function(){return 0},totalPrice:function(){return 0},updateCount:function(){},deleteItem:function(){}})),y=function(){var t=Object(d.useContext)(N).cart,e=Object(d.useContext)(N).fav;return Object(O.jsxs)("header",{className:"header",children:[Object(O.jsxs)("div",{className:"header-left",children:[Object(O.jsx)(h,{}),Object(O.jsx)(v,{})]}),Object(O.jsxs)("div",{className:"header-right",children:[Object(O.jsxs)(a.c,{to:"/favorites",className:"header__icon",children:[Object(O.jsx)("img",{src:"./img/icons/Like.svg",alt:"favorites"}),e.length>0&&Object(O.jsx)("span",{className:"header__counter",children:e.length})]}),Object(O.jsxs)(a.c,{to:"/cart",className:"header__icon",children:[Object(O.jsx)("img",{src:"./img/icons/Cart.svg",alt:"cart"}),t.length>0&&Object(O.jsx)("span",{className:"header__counter",children:t.length})]})]})]})},C=(c(41),function(){var t=Object(d.useState)(0),e=Object(o.a)(t,2),c=e[0],s=e[1];return Object(O.jsxs)("div",{className:"banner container",children:[Object(O.jsxs)("div",{className:"banner__content",children:[Object(O.jsx)("button",{type:"button",className:"banner__button banner__button--left",onClick:function(){return s(0===c?2:c-1)},children:Object(O.jsx)("i",{className:"fas fa-chevron-left"})}),Object(O.jsxs)("div",{className:"banner__image",children:[0===c&&Object(O.jsx)(a.b,{to:"/phones",className:"banner__item",children:Object(O.jsx)("img",{src:"./img/newBanners/banner1.png",alt:"phones",className:f()("banner__img",{"banner__img--active":0===c})})}),1===c&&Object(O.jsx)(a.b,{to:"/tablets",className:"banner__item",children:Object(O.jsx)("img",{src:"./img/newBanners/banner2.png",alt:"tablets",className:f()("banner__img",{"banner__img--active":1===c})})}),2===c&&Object(O.jsx)(a.b,{to:"/accessories",className:"banner__item",children:Object(O.jsx)("img",{src:"./img/newBanners/banner3.png",alt:"accessories",className:f()("banner__img",{"banner__img--active":2===c})})})]}),Object(O.jsx)("button",{type:"button",className:"banner__button banner__button--right",onClick:function(){return s(2===c?0:c+1)},children:Object(O.jsx)("i",{className:"fas fa-chevron-right"})})]}),Object(O.jsxs)("div",{className:"banner__pagination",children:[Object(O.jsx)("button",{type:"button",className:f()("banner__pagination-item",{"banner__pagination-item--active":0===c}),onClick:function(){return s(0)}}),Object(O.jsx)("button",{type:"button",className:f()("banner__pagination-item",{"banner__pagination-item--active":1===c}),onClick:function(){return s(1)}}),Object(O.jsx)("button",{type:"button",className:f()("banner__pagination-item",{"banner__pagination-item--active":2===c}),onClick:function(){return s(2)}})]})]})}),k=(c(27),function(t){var e=t.product,c=Object(d.useContext)(N),s=c.cart,n=c.toggleCart,a=s.find((function(t){return t.item.id===e.id}));return Object(O.jsxs)("button",{className:f()("products-slider__item-button products-slider__item-button-cart",{"products-slider__item-button-cart--active":a}),type:"button",onClick:function(){return n(e)},children:[a&&"Added to cart",!a&&"Add to cart"]})}),w=function(t){var e=t.product,c=t.id,s=Object(d.useContext)(N),n=s.fav,a=s.toggleFav,i=n.find((function(t){return t.id===c}));return Object(O.jsxs)("button",{className:f()("products-slider__item-button products-slider__item-button-favorite",{"products-slider__item-button-favorite--active":i}),type:"button","data-cy":"addToFavorite",onClick:function(){return a(e)},children:[Object(O.jsx)("img",{src:"./img/icons/Like.svg",alt:"add"}),Object(O.jsx)("img",{src:"./img/icons/Red Like.svg",alt:"remove"})]})},S=function(t){var e=t.product,c=e.price-e.price/100*e.discount;return Object(O.jsxs)("div",{className:"products-slider__item","data-cy":"cardsContainer",children:[Object(O.jsx)(a.c,{to:"/".concat(e.type,"s/").concat(e.id),className:"products-slider__item-link",onClick:function(){window.scrollTo({top:0})},children:Object(O.jsx)("i",{className:"fa-solid fa-crosshairs"})}),Object(O.jsx)("img",{src:e.imageUrl,alt:e.name,className:"products-slider__item-image"}),Object(O.jsx)("h2",{className:"products-slider__item-title",children:e.name}),Object(O.jsxs)("p",{className:"products-slider__item-price",children:[Object(O.jsx)("span",{className:"products-slider__item-current-price",children:"$".concat(c)}),e.price!==c&&Object(O.jsx)("span",{className:"products-slider__item-old-price",children:"$".concat(e.price)})]}),Object(O.jsxs)("div",{className:"products-slider__item-info",children:[Object(O.jsxs)("p",{className:"products-slider__item-info-text",children:["Screen",Object(O.jsx)("span",{children:e.screen||"-"})]}),Object(O.jsxs)("p",{className:"products-slider__item-info-text",children:["Capacity",Object(O.jsx)("span",{children:e.capacity||"-"})]}),Object(O.jsxs)("p",{className:"products-slider__item-info-text",children:["RAM",Object(O.jsx)("span",{children:e.ram||"-"})]})]}),Object(O.jsxs)("div",{className:"products-slider__item-buttons",children:[Object(O.jsx)(k,{product:e}),Object(O.jsx)(w,{id:e.id,product:e})]})]})},I=function(t){var e=t.products,c=t.title,s=Object(d.useState)(0),n=Object(o.a)(s,2),a=n[0],i=n[1];return Object(O.jsxs)("div",{className:"products-slider container",children:[Object(O.jsxs)("div",{className:"products-slider__header",children:[Object(O.jsx)("h2",{className:"products-slider__title",children:c}),Object(O.jsxs)("div",{className:"products-slider__buttons",children:[Object(O.jsx)("button",{type:"button",className:f()("products-slider__button",{"products-slider__button--active":a>0}),onClick:function(){var t=a-1;t<0&&(t=0),i(t)},children:Object(O.jsx)("i",{className:"fas fa-chevron-left"})}),Object(O.jsx)("button",{type:"button",className:f()("products-slider__button",{"products-slider__button--active":a<e.length-4}),onClick:function(){var t=a+1;t>e.length-4&&(t=e.length-4)<0&&(t=0),i(t)},children:Object(O.jsx)("i",{className:"fas fa-chevron-right"})})]})]}),Object(O.jsx)("div",{className:"products-slider__content",children:e.slice(a,a+4).map((function(t){return Object(O.jsx)(S,{product:t},t.id)}))})]})},F=(c(42),function(t){var e=t.products,c=e.filter((function(t){return"phone"===t.type})),s=e.filter((function(t){return"tablet"===t.type})),n=e.filter((function(t){return"accessories"===t.type}));return Object(O.jsxs)("div",{className:"category container","data-cy":"categoryLinksContainer",children:[Object(O.jsx)("h2",{className:"category__title",children:"Shop by category"}),Object(O.jsxs)("div",{className:"category__content",children:[Object(O.jsxs)("div",{className:"category__item",children:[Object(O.jsx)(a.c,{to:"/phones",className:"category__item-link",onClick:function(){window.scrollTo({top:0})}}),Object(O.jsx)("div",{className:"category__item-image category__item-image--phones"}),Object(O.jsx)("h2",{className:"category__item-title",children:"Mobile phones"}),Object(O.jsx)("p",{className:"category__item-count",children:"".concat(c.length," models")})]}),Object(O.jsxs)("div",{className:"category__item",children:[Object(O.jsx)(a.c,{to:"/tablets",className:"category__item-link",onClick:function(){window.scrollTo({top:0})}}),Object(O.jsx)("div",{className:"category__item-image category__item-image--tablets"}),Object(O.jsx)("h2",{className:"category__item-title",children:"Tablets"}),Object(O.jsx)("p",{className:"category__item-count",children:"".concat(s.length," models")})]}),Object(O.jsxs)("div",{className:"category__item",children:[Object(O.jsx)(a.c,{to:"/accessories",className:"category__item-link",onClick:function(){window.scrollTo({top:0})}}),Object(O.jsx)("div",{className:"category__item-image category__item-image--accessories"}),Object(O.jsx)("h2",{className:"category__item-title",children:"Accessories"}),Object(O.jsx)("p",{className:"category__item-count",children:"".concat(n.length," models")})]})]})]})}),P=function(t){var e=t.products,c=Object(p.a)(e).filter((function(t){return 0!==t.discount})).sort((function(t,e){return t.discount-e.discount})),s=Object(p.a)(e).filter((function(t){return 0===t.discount})).sort((function(t,e){return e.price-t.price}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(y,{}),Object(O.jsxs)("main",{children:[Object(O.jsx)(C,{}),Object(O.jsx)(I,{products:c,title:"Hot prices"}),Object(O.jsx)(F,{products:e}),Object(O.jsx)(I,{products:s,title:"Brand new models"})]}),Object(O.jsx)(_,{})]})},B=(c(43),c(44),function(){var t=Object(u.l)().pathname.split("/");return Object(O.jsxs)("div",{className:"breadcrumbs","data-cy":"breadCrumbs",children:[Object(O.jsx)(a.c,{to:"/",className:"breadcrumbs__link",children:Object(O.jsx)("i",{className:"fa-solid fa-house"})}),t.slice(1).map((function(t){return Object(O.jsx)(a.c,{to:"/".concat(t),className:"breadcrumbs__link",children:" > ".concat(t," ")},t)}))]})}),T=(c(45),function(t){var e=t.productsLength,c=t.list,s=t.currentPage,n=t.setCurrentPage,a=Math.ceil(e/c),i=Array.from({length:a},(function(t,e){return e+1}));return Object(O.jsxs)("div",{className:"pagination","data-cy":"pagination",children:[Object(O.jsx)("button",{type:"button",className:"pagination__button","data-cy":"paginationLeft",disabled:1===s,onClick:function(){return n(s-1)},children:Object(O.jsx)("i",{className:"fas fa-chevron-left"})}),i.map((function(t){return Object(O.jsx)("button",{type:"button","data-cy":"paginationRight",className:f()("pagination__button",{"pagination__button--active":t===s}),onClick:function(){return n(t)},children:t})})),Object(O.jsx)("button",{type:"button",className:"pagination__button",disabled:s===a,onClick:function(){return n(s+1)},children:Object(O.jsx)("i",{className:"fas fa-chevron-right"})})]})}),A=function(t){var e=t.products,c=t.title,s=t.isloading,n=Object(u.n)(),i=Object(a.d)(),r=Object(o.a)(i,1)[0],l=Object(d.useState)("newest"),j=Object(o.a)(l,2),b=j[0],m=j[1],p=Object(d.useState)("100"),h=Object(o.a)(p,2),x=h[0],f=h[1],g=Object(d.useState)(1),v=Object(o.a)(g,2),N=v[0],C=v[1],k=function(){var t=r.get("sortBy")||"newest";switch(m(t),t){case"alphabetically":e.sort((function(t,e){return t.name.localeCompare(e.name)}));break;case"price":e.sort((function(t,e){return t.price-e.price}));break;default:e.sort((function(t,e){return t.age-e.age}))}n({search:r.toString()})},w=function(){var t=r.get("perPage")||"100";f(t),C(1),n({search:r.toString()})};return Object(d.useEffect)((function(){k(),w()}),[f]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(y,{}),Object(O.jsx)("main",{children:s?Object(O.jsx)("div",{className:"product-list__loader",children:Object(O.jsx)("i",{className:"fas fa-circle-notch fa-spin"})}):Object(O.jsxs)("div",{className:"product-list product-list__container","data-cy":"productList",children:[Object(O.jsx)(B,{}),Object(O.jsx)("h1",{className:"product-list__title",children:c}),e.length>0?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{className:"product-list__count",children:"".concat(e.length," models")}),Object(O.jsxs)("div",{className:"product-list__menu",children:[Object(O.jsxs)("label",{htmlFor:"#",children:["Sort By",Object(O.jsxs)("select",{value:b,onChange:function(t){r.set("sortBy",t.target.value),k()},children:[Object(O.jsx)("option",{value:"newest",children:"Newest"}),Object(O.jsx)("option",{value:"alphabetically",children:"Alphabetically"}),Object(O.jsx)("option",{value:"price",children:"Price"})]})]}),Object(O.jsxs)("label",{htmlFor:"#",children:["Items on page",Object(O.jsxs)("select",{value:x,onChange:function(t){r.set("perPage",t.target.value),w()},children:[Object(O.jsx)("option",{value:"100",children:"all"}),Object(O.jsx)("option",{value:"4",children:"4"}),Object(O.jsx)("option",{value:"8",children:"8"}),Object(O.jsx)("option",{value:"16",children:"16"})]})]})]}),Object(O.jsx)("div",{className:"product-list__content",children:e.slice((N-1)*+x,+x*N).map((function(t){return Object(O.jsx)(S,{product:t},t.id)}))})]}):Object(O.jsx)("h2",{children:"Products not found"}),+x<e.length&&Object(O.jsx)(T,{productsLength:e.length,list:+x,currentPage:N,setCurrentPage:C})]})}),Object(O.jsx)(_,{})]})},E=(c(46),function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(y,{}),Object(O.jsx)("main",{className:"pageNotFound",children:"Page not found..."}),Object(O.jsx)(_,{})]})}),M=(c(47),c(48),function(){return Object(O.jsx)("button",{type:"button","data-cy":"backButton",className:"back-button",onClick:function(){window.history.back()},children:"< Back"})}),J=function(t){var e=t.products,c=Object(u.p)().productId,s=void 0===c?"":c,n=Object(d.useState)(null),a=Object(o.a)(n,2),r=a[0],l=a[1],b=e.find((function(t){return t.id===(null===r||void 0===r?void 0:r.id)})),p=Object(d.useState)(null===b||void 0===b?void 0:b.imageUrl),h=Object(o.a)(p,2),x=h[0],f=h[1],g=Object(d.useState)(!1),v=Object(o.a)(g,2),N=v[0],C=v[1],S=e.find((function(t){return t.id===s})),F=function(){var t=Object(i.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,C(!0),t.next=4,m(s);case 4:e=t.sent,l(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),Promise.reject(new Error("error"));case 11:return t.prev=11,C(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();return Object(d.useEffect)((function(){F()}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(y,{}),Object(O.jsx)("main",{className:"container",children:N?Object(O.jsx)("div",{className:"product-details__loader",children:Object(O.jsx)("i",{className:"fas fa-circle-notch fa-spin"})}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"product-details-page",children:[Object(O.jsx)(B,{}),Object(O.jsx)(M,{}),!S&&Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("h2",{className:"product-details__problem",children:"It's fuckin problem"})}),S&&b&&r&&Object(O.jsxs)("div",{className:"product-details",children:[Object(O.jsx)("h2",{className:"product-details__title",children:r.name}),Object(O.jsxs)("div",{className:"product-details__content",children:[Object(O.jsx)("div",{className:"product-details__photos",children:r.images.map((function(t){return Object(O.jsx)("button",{type:"button",onClick:function(){return f(t)},className:"product-details__set-photo",children:Object(O.jsx)("img",{src:t,alt:"#"})},t)}))}),Object(O.jsx)("img",{src:x||b.imageUrl,alt:"#",className:"product-details__photo"}),Object(O.jsxs)("div",{className:"product-details__main-info",children:[Object(O.jsxs)("p",{className:"products-slider__item-price",children:[Object(O.jsx)("span",{className:"products-slider__item-current-price",children:"$".concat(b.price-b.price/100*b.discount)}),b.price!==b.price-b.price/100*b.discount&&Object(O.jsx)("span",{className:"products-slider__item-old-price",children:"$".concat(b.price)})]}),Object(O.jsxs)("div",{className:"products-slider__item-buttons",children:[Object(O.jsx)(k,{product:b}),Object(O.jsx)(w,{id:b.id,product:b})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("p",{className:"product-details__data",children:["Screen",Object(O.jsx)("span",{children:r.display.screenSize})]}),Object(O.jsxs)("p",{className:"product-details__data",children:["Resolution",Object(O.jsx)("span",{children:r.display.screenResolution})]}),Object(O.jsxs)("p",{className:"product-details__data",children:["Processor",Object(O.jsx)("span",{children:r.hardware.cpu})]}),Object(O.jsxs)("p",{className:"product-details__data",children:["RAM",Object(O.jsx)("span",{children:r.storage.ram})]})]})]}),Object(O.jsxs)("div",{className:"product-details__info",children:[Object(O.jsxs)("div",{className:"product-details__about","data-cy":"productDescription",children:[Object(O.jsx)("h2",{className:"product-details__subtitle",children:"About"}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{className:"product-details__text",children:r.description})]}),Object(O.jsxs)("div",{className:"product-details__specs",children:[Object(O.jsx)("h2",{className:"product-details__subtitle",children:"Tech specs"}),Object(O.jsx)("br",{}),Object(O.jsxs)("p",{className:"product-details__data",children:["Screen",Object(O.jsx)("span",{children:r.display.screenSize})]}),Object(O.jsxs)("p",{className:"product-details__data",children:["Resolution",Object(O.jsx)("span",{children:r.display.screenResolution})]}),Object(O.jsxs)("p",{className:"product-details__data",children:["Processor",Object(O.jsx)("span",{children:r.hardware.cpu})]}),Object(O.jsxs)("p",{className:"product-details__data",children:["RAM",Object(O.jsx)("span",{children:r.storage.ram})]}),Object(O.jsxs)("p",{className:"product-details__data",children:["Built in memory",Object(O.jsx)("span",{children:r.storage.flash})]}),Object(O.jsxs)("p",{className:"product-details__data",children:["Camera",Object(O.jsx)("span",{children:r.camera.primary})]}),Object(O.jsxs)("p",{className:"product-details__data",children:["Cell",Object(O.jsx)("span",{children:r.connectivity.cell||"-"})]})]})]})]})]}),Object(O.jsx)(I,{products:e,title:"You may also like"})]})}),Object(O.jsx)(_,{})]})},R=(c(49),function(t){var e=t.cartItem,c=Object(d.useState)(+e.count),s=Object(o.a)(c,2),n=s[0],a=s[1],i=Object(d.useContext)(N),r=i.updateCount,l=i.deleteItem;Object(d.useEffect)((function(){r(e.item.id,n)}),[n]);return Object(O.jsxs)("div",{className:"cart__item",children:[Object(O.jsx)("button",{type:"button","data-cy":"cartDeleteButton",className:"cart__item-delete-btn",onClick:function(){return l(e.item.id)},children:"x"}),Object(O.jsx)("img",{src:e.item.imageUrl,alt:"#",className:"cart__item-image"}),Object(O.jsx)("h2",{className:"cart__item-title",children:e.item.name}),Object(O.jsxs)("div",{className:"cart__item-counter",children:[Object(O.jsx)("button",{type:"button",className:f()("cart__item-count-btn",{"cart__item-count-btn--active":n>1}),onClick:function(){n>1&&a(n-1)},children:"-"}),n,Object(O.jsx)("button",{type:"button",className:"cart__item-count-btn cart__item-count-btn--active",onClick:function(){a(n+1)},children:"+"}),Object(O.jsx)("p",{className:"cart__item-price",children:"$".concat(e.item.price-e.item.price/100*e.item.discount)})]})]})}),H=function(){var t=Object(d.useState)(!1),e=Object(o.a)(t,2),c=e[0],s=e[1],n=Object(d.useContext)(N),a=n.cart,i=n.totalPrice,r=n.totalCount;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(y,{}),Object(O.jsx)("main",{children:Object(O.jsxs)("div",{className:"cart container",children:[Object(O.jsx)(M,{}),Object(O.jsx)("h2",{className:"cart__title",children:"Cart"}),a.length>0&&Object(O.jsxs)("div",{className:"cart__content",children:[Object(O.jsx)("div",{className:"cart__items",children:a.map((function(t){return Object(O.jsx)(R,{cartItem:t},t.item.id)}))}),Object(O.jsxs)("div",{className:"cart__sum",children:[Object(O.jsx)("h2",{className:"cart__sum-amout","data-cy":"productQauntity",children:"$".concat(i())}),Object(O.jsx)("p",{className:"cart__sum-items",children:"Total price for ".concat(r()," items")}),Object(O.jsxs)("button",{className:f()("cart__sum-button",{"cart__sum-button--active":c}),type:"button",onClick:function(){return s(!c)},children:[!c&&"Checkout",c&&"Order is processed"]})]})]}),!a.length&&Object(O.jsx)("p",{className:"cart__subtitle",children:"The list is empty"})]})}),Object(O.jsx)(_,{})]})},L=(c(50),function(){var t=Object(d.useContext)(N).fav;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(y,{}),Object(O.jsx)("main",{children:Object(O.jsxs)("div",{className:"favorites container",children:[Object(O.jsx)(B,{}),Object(O.jsx)("h2",{className:"favorites__title",children:"Favourites"}),t.length>0?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{className:"favorites__count",children:"".concat(t.length," items")}),Object(O.jsx)("div",{className:"favorites__content",children:t.map((function(t){return Object(O.jsx)(S,{product:t},t.id)}))})]}):Object(O.jsx)("p",{className:"favorites__subtitle",children:"The list is empty"})]})}),Object(O.jsx)(_,{})]})}),Z=function(){var t=Object(d.useState)([]),e=Object(o.a)(t,2),c=e[0],s=e[1],n=Object(d.useState)(!1),a=Object(o.a)(n,2),l=a[0],m=a[1],p=Object(d.useState)([]),h=Object(o.a)(p,2),_=h[0],x=h[1],f=Object(d.useState)([]),g=Object(o.a)(f,2),v=g[0],y=g[1],C=Object(d.useState)(!1),k=Object(o.a)(C,2),w=k[0],S=k[1];Object(d.useEffect)((function(){var t=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")||""):[];x(t)}),[]),Object(d.useEffect)((function(){var t=localStorage.getItem("favourite")?JSON.parse(localStorage.getItem("favourite")||""):[];y(t)}),[]),Object(d.useEffect)((function(){window.localStorage.setItem("favourite",JSON.stringify(v))}),[v]),Object(d.useEffect)((function(){window.localStorage.setItem("cart",JSON.stringify(_))}),[_]);var I=function(){var t=Object(i.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,b("/products.json");case 4:e=t.sent,s(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),Promise.reject(new Error("error"));case 11:return t.prev=11,m(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}(),F=c.filter((function(t){return"phone"===t.type})),B=c.filter((function(t){return"tablet"===t.type})),T=c.filter((function(t){return"accessories"===t.type}));return Object(d.useEffect)((function(){I()}),[]),Object(O.jsx)(N.Provider,{value:{cart:_,fav:v,setFav:y,toggleCart:function(t){_.find((function(e){return e.item.id===t.id}))?(x(_.filter((function(e){return e.item.id!==t.id}))),window.localStorage.setItem("cart",JSON.stringify(_)),S(!w)):(_.push({count:1,item:Object(r.a)({},t)}),window.localStorage.setItem("cart",JSON.stringify(_)),S(!w))},toggleFav:function(t){v.find((function(e){return e.id===t.id}))?(y(v.filter((function(e){return e.id!==t.id}))),window.localStorage.setItem("favourite",JSON.stringify(v)),S(!w)):(v.push(t),window.localStorage.setItem("favourite",JSON.stringify(v)),S(!w))},setCart:x,totalCount:function(){return _.reduce((function(t,e){return t+ +e.count}),0)},totalPrice:function(){return _.reduce((function(t,e){return t+(e.item.price-e.item.price/100*e.item.discount)*+e.count}),0)},updateCount:function(t,e){x(_.map((function(c){return t===c.item.id?Object(r.a)(Object(r.a)({},c),{},{count:e}):c})))},deleteItem:function(t){x(_.filter((function(e){return e.item.id!==t})))}},children:Object(O.jsxs)(u.d,{children:[Object(O.jsx)(u.b,{path:"/",element:Object(O.jsx)(P,{products:c}),children:Object(O.jsx)(u.b,{path:"/home",element:Object(O.jsx)(u.a,{to:"/"})})}),Object(O.jsx)(u.b,{path:"/phones",element:Object(O.jsx)(A,{products:F,isloading:l,title:"Mobile phones"})}),Object(O.jsx)(u.b,{path:"/phones/:productId",element:Object(O.jsx)(J,{products:F})}),Object(O.jsx)(u.b,{path:"/tablets",element:Object(O.jsx)(A,{products:B,isloading:l,title:"Tablets"})}),Object(O.jsx)(u.b,{path:"/tablets/:productId",element:Object(O.jsx)(J,{products:B})}),Object(O.jsx)(u.b,{path:"/accessories",element:Object(O.jsx)(A,{products:T,isloading:l,title:"Accessories"})}),Object(O.jsx)(u.b,{path:"/cart",element:Object(O.jsx)(H,{})}),Object(O.jsx)(u.b,{path:"/favorites",element:Object(O.jsx)(L,{})}),Object(O.jsx)(u.b,{path:"*",element:Object(O.jsx)(E,{})})]})})};n.a.render(Object(O.jsx)(a.a,{children:Object(O.jsx)(Z,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.28b627e2.chunk.js.map