(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[214],{388:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gallery",function(){return r(9821)}])},1838:function(e,t,r){"use strict";var s;s="nocus"===r(4155).env.BTYPE?"/SoarWebsite2021":"",e.exports={basePath:s}},3383:function(e,t,r){"use strict";function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var n=r(1838).basePath,a=[{year:2017,photos:["/assets/gallery/2017_picture_1.jpg","/assets/gallery/2017_picture_10.jpg","/assets/gallery/2017_picture_2.jpg","/assets/gallery/2017_picture_3.jpg","/assets/gallery/2017_picture_4.jpg","/assets/gallery/2017_picture_5.jpg","/assets/gallery/2017_picture_6.jpg","/assets/gallery/2017_picture_7.jpg","/assets/gallery/2017_picture_8.jpg","/assets/gallery/2017_picture_9.jpg"]},{year:2018,photos:["/assets/gallery/2018_picture_1.jpg","/assets/gallery/2018_picture_10.jpg","/assets/gallery/2018_picture_11.jpg","/assets/gallery/2018_picture_12.jpg","/assets/gallery/2018_picture_13.jpg","/assets/gallery/2018_picture_14.jpg","/assets/gallery/2018_picture_15.jpg","/assets/gallery/2018_picture_16.jpg","/assets/gallery/2018_picture_2.jpg","/assets/gallery/2018_picture_3.jpg","/assets/gallery/2018_picture_4.jpg","/assets/gallery/2018_picture_5.jpg","/assets/gallery/2018_picture_6.jpg","/assets/gallery/2018_picture_7.jpg","/assets/gallery/2018_picture_8.jpg","/assets/gallery/2018_picture_9.jpg"]},{year:2019,photos:["/assets/gallery/2019_picture_1.jpg","/assets/gallery/2019_picture_10.jpg","/assets/gallery/2019_picture_11.jpg","/assets/gallery/2019_picture_12.jpg","/assets/gallery/2019_picture_13.jpg","/assets/gallery/2019_picture_14.jpg","/assets/gallery/2019_picture_15.jpg","/assets/gallery/2019_picture_16.jpg","/assets/gallery/2019_picture_17.jpg","/assets/gallery/2019_picture_18.jpg","/assets/gallery/2019_picture_19.jpg","/assets/gallery/2019_picture_2.jpg","/assets/gallery/2019_picture_20.jpg","/assets/gallery/2019_picture_21.jpg","/assets/gallery/2019_picture_22.jpg","/assets/gallery/2019_picture_23.jpg","/assets/gallery/2019_picture_24.jpg","/assets/gallery/2019_picture_25.jpg","/assets/gallery/2019_picture_26.jpg","/assets/gallery/2019_picture_27.jpg","/assets/gallery/2019_picture_28.jpg","/assets/gallery/2019_picture_29.jpg","/assets/gallery/2019_picture_3.jpg","/assets/gallery/2019_picture_30.jpg","/assets/gallery/2019_picture_31.jpg","/assets/gallery/2019_picture_32.jpg","/assets/gallery/2019_picture_33.jpg","/assets/gallery/2019_picture_34.jpg","/assets/gallery/2019_picture_35.jpg","/assets/gallery/2019_picture_36.jpg","/assets/gallery/2019_picture_37.jpg","/assets/gallery/2019_picture_38.jpg","/assets/gallery/2019_picture_39.jpg","/assets/gallery/2019_picture_4.jpg","/assets/gallery/2019_picture_40.jpg","/assets/gallery/2019_picture_41.jpg","/assets/gallery/2019_picture_42.jpg","/assets/gallery/2019_picture_43.jpg","/assets/gallery/2019_picture_5.jpg","/assets/gallery/2019_picture_6.jpg","/assets/gallery/2019_picture_7.jpg","/assets/gallery/2019_picture_8.jpg","/assets/gallery/2019_picture_9.jpg"]}];a=a.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({},e,{photos:e.photos.map((function(e){return"".concat(n).concat(e)}))})}));var l=["/assets/previews/2017_picture_1.jpg","/assets/previews/2018_picture_1.jpg","/assets/previews/2019_picture_1.jpg"];l=l.map((function(e){return"".concat(n).concat(e)})),e.exports={galleryData:a,preview:l}},9821:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return R}});var s=r(5893),n=r(7294),a=r(5585);function l(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(e){var t=e.chunkSize,r=e.images;return(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 md:grid-rows-2 lg:grid-rows-2",children:[r.map((function(e,t){return(0,s.jsx)("div",{className:"m-4",children:(0,s.jsx)("img",{src:e,className:"w-full h-full"})},t)})),l(Array(t-r.length)).map((function(e,t){return(0,s.jsx)("div",{className:"w-full h-full"},t+r.length)}))]})}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],s=!0,n=!1,a=void 0;try{for(var l,c=e[Symbol.iterator]();!(s=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);s=!0);}catch(i){n=!0,a=i}finally{try{s||null==c.return||c.return()}finally{if(n)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(e,t){return e.reduce((function(e,r){return e[e.length-1].length===t&&e.push([]),e[e.length-1].push(r),e}),[[]])}function u(e){var t=e.chunkSize,r=e.year,l=i((0,a.Z)({loop:!0,skipSnaps:!1}),2),u=l[0],p=l[1],f=(0,n.useState)(0),g=f[0],y=f[1],_=(0,n.useState)([]),j=_[0],h=_[1],d=(0,n.useCallback)((function(e){return p&&p.scrollTo(e)}),[p]),m=(0,n.useCallback)((function(){p&&p.scrollPrev()}),[p]),v=(0,n.useCallback)((function(){p&&(p.scrollNext(),console.log("next pressed"))}),[p]),x=(0,n.useCallback)((function(){p&&y(p.selectedScrollSnap())}),[p,y]);return(0,n.useEffect)((function(){p&&(x(),p.on("select",x))}),[p,x]),(0,n.useEffect)((function(){p&&(h(p.scrollSnapList()),p.on("reInit",(function(){return h(p.scrollSnapList())})))}),[p]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"grid place-items-center",children:[(0,s.jsxs)("div",{className:"flex flex-nowrap px-4",children:[(0,s.jsx)("div",{className:"self-stretch flex justify-center",children:(0,s.jsx)("button",{className:"text-gray-700 hover:text-primary transform transition duration-200 hover:scale-150",onClick:m,style:{width:"24px"},children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})})}),(0,s.jsx)("div",{className:"overflow-hidden",ref:u,style:{width:"88vw"},children:(0,s.jsxs)("div",{className:"flex",children:["                        ",o(r.photos,t).map((function(e,r){return(0,s.jsx)("div",{className:"relative flex flex-none mx-10",style:{width:"88vw"},children:(0,s.jsx)(c,{chunkSize:t,images:e})},r)}))]})}),(0,s.jsx)("div",{className:"self-stretch flex justify-center",children:(0,s.jsx)("button",{className:"text-gray-700 hover:text-primary transform transition duration-200 hover:scale-150",onClick:v,style:{width:"24px"},children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})})]}),(0,s.jsx)("div",{className:"flex items-center justify-center mt-5 space-x-2",children:j.map((function(e,t){return(0,s.jsx)("button",{className:"w-3 h-3 rounded-full ".concat(t===g?"bg-primary":"bg-gray-400"),onClick:function(){return d(t)}},t)}))})]})})}function p(){return(0,s.jsx)("div",{style:{height:"120px"},className:"flex justify-around w-full",children:(0,s.jsx)("div",{className:"inline-flex h-full w-full mx-5 shadow-lg border-2 border-primary rounded-md",children:(0,s.jsx)("div",{className:"flex justify-center w-full items-center rounded-lg",children:(0,s.jsxs)("svg",{style:{height:"40px"},className:"animate-spin text-primary",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 25 25",children:[(0,s.jsx)("circle",{className:"opacity-5",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,s.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})})})})}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?f(e):t}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,s=j(e);if(t){var n=j(this).constructor;r=Reflect.construct(s,arguments,n)}else r=s.apply(this,arguments);return h(this,r)}}var x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(l,e);var t,r,n,a=v(l);function l(){var e;return g(this,l),_(f(e=a.apply(this,arguments)),"state",{inBrowser:!1}),e}return t=l,(r=[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){return e.setState({inBrowser:!0})}),0)}},{key:"render",value:function(){var e=this.props,t=e.chunkSize,r=e.year;return(0,s.jsxs)("div",{className:"my-12",children:[(0,s.jsx)("div",{className:"flex justify-center px-4",children:(0,s.jsx)("h3",{className:"text-2xl text-black font-bold",children:"SOAR ".concat(r.year)})}),this.state.inBrowser?(0,s.jsx)(u,{chunkSize:t,year:r}):(0,s.jsx)(p,{})]})}}])&&y(t.prototype,r),n&&y(t,n),l}(n.Component),b=r(3383);function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return!t||"object"!==E(t)&&"function"!==typeof t?w(e):t}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,s=S(e);if(t){var n=S(this).constructor;r=Reflect.construct(s,arguments,n)}else r=s.apply(this,arguments);return P(this,r)}}var R=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(l,e);var t,r,n,a=z(l);function l(){var e;return k(this,l),N(w(e=a.apply(this,arguments)),"state",{chunkSize:2}),N(w(e),"recalculateChunks",(function(){var t=window.innerWidth;t>=1024?e.setState({chunkSize:6}):t>=768?e.setState({chunkSize:4}):e.setState({chunkSize:2})})),e}return t=l,(r=[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.recalculateChunks),this.recalculateChunks()}},{key:"render",value:function(){var e=this;return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"mt-20 flex justify-center",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"text-4xl text-center font-bold text-black",children:"Gallery!"}),(0,s.jsx)("h5",{className:"mt-3 text-lg text-gray-600 txt-center max-w-w360",children:"Explore our past conferences since 2017!"})]})}),(0,s.jsx)("div",{className:"mt-12",children:b.galleryData.map((function(t,r){return(0,s.jsx)(x,{chunkSize:e.state.chunkSize,year:t},r)}))})]})}}])&&O(t.prototype,r),n&&O(t,n),l}(n.Component)}},function(e){e.O(0,[585,774,888,179],(function(){return t=388,e(e.s=t);var t}));var t=e.O();_N_E=t}]);