!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.getDailyColor=t():e.getDailyColor=t()}(self,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function o(){const e=function(e){const t=e.getDate(),o=e.getMonth()+1,r=`${e.getFullYear()}-${o}-${t}`;let n=0;for(let e=0;e<r.length;e++)n=(n<<5)-n+r.charCodeAt(e),n|=0;return Math.abs(n)}(new Date),t=e>>8&255,o=255&e;return`#${(e>>16&255).toString(16).padStart(2,"0")}${t.toString(16).padStart(2,"0")}${o.toString(16).padStart(2,"0")}`}return e.r(t),e.d(t,{getDailyColor:()=>o}),t})()));