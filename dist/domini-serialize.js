(()=>{"use strict";var e={n:n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},d:(n,t)=>{for(var s in t)e.o(t,s)&&!e.o(n,s)&&Object.defineProperty(n,s,{enumerable:!0,get:t[s]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)},n={};e.d(n,{default:()=>o});const t=window.DoMini;var s=e.n(t);s().fn.serialize=function(){let e=this.get(0);if(!e||"FORM"!==e.nodeName)return;let n,t,s=[];for(n=e.elements.length-1;n>=0;n-=1)if(""!==e.elements[n].name)switch(e.elements[n].nodeName){case"INPUT":switch(e.elements[n].type){case"text":case"hidden":case"password":case"button":case"reset":case"submit":s.push(e.elements[n].name+"="+encodeURIComponent(e.elements[n].value));break;case"checkbox":case"radio":e.elements[n].checked&&s.push(e.elements[n].name+"="+encodeURIComponent(e.elements[n].value))}break;case"TEXTAREA":s.push(e.elements[n].name+"="+encodeURIComponent(e.elements[n].value));break;case"SELECT":switch(e.elements[n].type){case"select-one":s.push(e.elements[n].name+"="+encodeURIComponent(e.elements[n].value));break;case"select-multiple":for(t=e.elements[n].options.length-1;t>=0;t-=1)e.elements[n].options[t].selected&&s.push(e.elements[n].name+"="+encodeURIComponent(e.elements[n].options[t].value))}break;case"BUTTON":switch(e.elements[n].type){case"reset":case"submit":case"button":s.push(e.elements[n].name+"="+encodeURIComponent(e.elements[n].value))}}return s.join("&")},s().fn.serializeForAjax=function(e,n){let t,o=[];for(t in e)if(e.hasOwnProperty(t)){let a=n?n+"["+t+"]":t,l=e[t];o.push(null!==l&&"object"==typeof l?s().fn.serializeForAjax(l,a):encodeURIComponent(a)+"="+encodeURIComponent(l))}return o.join("&")};const o=s();window.DoMini=n.default})();