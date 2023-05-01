(()=>{"use strict";const e={services:{AltRight:"alt",ControlRight:"ctrl",Backspace:"",Enter:"",ShiftRight:"",ArrowLeft:"",ArrowRight:"",ArrowUp:"",ArrowDown:"",CapsLock:"caps lock",ShiftLeft:"",ControlLeft:"ctrl",MetaLeft:"",AltLeft:"alt",Tab:"",Delete:"del"},digits:{Digit1:"1",Digit5:"5",Digit8:"8",Digit9:"9",Digit0:"0",Minus:"-",Equal:"=",Space:" "},shifted:{Digit1:"!",Digit5:"%",Digit8:"*",Digit9:"(",Digit0:")",Minus:"_",Equal:"+"}},t={en:{keys:{KeyQ:"q",KeyW:"w",KeyE:"e",KeyR:"r",KeyT:"t",KeyY:"y",KeyU:"u",KeyI:"i",KeyO:"o",KeyP:"p",KeyA:"a",KeyS:"s",KeyD:"d",KeyF:"f",KeyG:"g",KeyH:"h",KeyJ:"j",KeyK:"k",KeyL:"l",KeyZ:"z",KeyX:"x",KeyC:"c",KeyV:"v",KeyB:"b",KeyN:"n",KeyM:"m"},digits:{Backquote:"`",Digit2:"2",Digit3:"3",Digit4:"4",Digit6:"6",Digit7:"7",Backslash:"\\",BracketLeft:"[",BracketRight:"]",Semicolon:";",Quote:"'",Comma:",",Period:".",Slash:"/"},shifted:{Backquote:"~",Digit2:"@",Digit3:"#",Digit4:"$",Digit6:"^",Digit7:"&",Backslash:"|",BracketLeft:"{",BracketRight:"}",Semicolon:":",Quote:'"',Comma:"<",Period:">",Slash:"?"}},ru:{keys:{KeyQ:"й",KeyW:"ц",KeyE:"у",KeyR:"к",KeyT:"е",KeyY:"н",KeyU:"г",KeyI:"ш",KeyO:"щ",KeyP:"з",BracketLeft:"х",BracketRight:"ъ",KeyA:"ф",KeyS:"ы",KeyD:"в",KeyF:"а",KeyG:"п",KeyH:"р",KeyJ:"о",KeyK:"л",KeyL:"д",Semicolon:"ж",Quote:"э",KeyZ:"я",KeyX:"ч",KeyC:"с",KeyV:"м",KeyB:"и",KeyN:"т",KeyM:"ь",Comma:"б",Period:"ю",Backquote:"ё"},digits:{Slash:".",Backslash:"\\",Digit2:"2",Digit3:"3",Digit4:"4",Digit6:"6",Digit7:"7"},shifted:{Slash:",",Backslash:"/",Digit2:'"',Digit3:"№",Digit4:";",Digit6:":",Digit7:"*"}},services:e.services,digits:e.digits,shifted:e.shifted},i=function(e,t){var i=e.value.split("").filter((function(e,i){return e&&i!==t})).join("");e.value=i,e.setSelectionRange(t,t)},r=function(e,t,i){var r=e.selectionStart,n=e.value.split(""),a=n.slice(0,r),o=n.slice(r),s=a.concat(i).concat(o).join("");e.value=s,e.setSelectionRange(t,t)},n=function(e){var t=e.value,i=e.selectionStart;return{data:t.split("\n"),splittedData:t.substring(0,i).split("\n")}};function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){c(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t,i){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const l=function(e,i,r,n){var a=function(e,t){return e.hasOwnProperty(t)},o=s(s(s(s({},t[i].keys),t[i].digits),t.digits),t.services),c=s(s(s({},t[i].keys),t[i].shifted),t.shifted),l=t[i].keys,d=o[e],u=l[e],y=c[e];return r||n?r&&n?a(c,e)?y.toLowerCase():d:r?a(l,e)?u.toUpperCase():d:n?a(c,e)?y.toUpperCase():d:void 0:d};function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}const u=function(e,a){var o,s=a.querySelector(".field"),c=a.querySelectorAll(".key");s.focus(),s.scrollTop=e.carretPosition;var u,y=e.pressedKey.code,f=e.lang,g=e.isCapsLock,p=e.isShifted,h=e.pressedKeys;c.forEach((function(e){var t=l(e.id,f,g,p);e.textContent=t,e.classList.remove("active")})),(u=h,function(e){if(Array.isArray(e))return d(e)}(u)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(u)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?d(e,t):void 0}}(u)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){a.querySelector("#".concat(e)).classList.add("active")}));var v=t.services,K=null!==(o=l(y,f,g,p))&&void 0!==o?o:"",m=v.hasOwnProperty(y)?"":K,S=a.querySelector("#CapsLock");g?S.classList.add("higlight"):S.classList.remove("higlight");var L=s.selectionStart,b=s.selectionEnd;s.setRangeText(m,L,b,"end");var D={Backspace:function(e){return function(e){var t=e.selectionStart;i(e,0===t?null:t-1)}(e)},Delete:function(e){return function(e){var t=e.selectionStart;i(e,t)}(e)},Enter:function(e){return function(e){var t=e.selectionStart,i=e.value.split("").slice(0,t).length+1;r(e,i,"\n")}(e)},Tab:function(e){return function(e){var t=e.selectionStart,i=e.value.split("").slice(0,t).length+4;r(e,i,"    ")}(e)},ArrowLeft:function(e){return function(e){var t=e.selectionStart,i=0===t?0:t-1;e.setSelectionRange(i,i)}(e)},ArrowRight:function(e){return function(e){var t=e.selectionStart,i=e.value.length,r=t===i?i:t+1;e.setSelectionRange(r,r)}(e)},ArrowDown:function(e){return function(e){var t,i,r=n(e),a=r.data,o=r.splittedData,s=o.length,c=(null===(t=o[s-1])||void 0===t?void 0:t.length)||null,l=a.slice(0,s).join("\n").length,d=(null===(i=a[s])||void 0===i?void 0:i.length)||null,u=d<=c?d+l+1:c+l+1;e.setSelectionRange(u,u)}(e)},ArrowUp:function(e){return function(e){var t,i=n(e),r=i.data,a=i.splittedData,o=a.length-1,s=a[o].length,c=r.slice(0,o).join("\n").length,l=(null===(t=r[o-1])||void 0===t?void 0:t.length)||null,d=l>=s?c-l+s:c;e.setSelectionRange(d,d)}(e)}};({Backspace:v.Backspace,Delete:v.Delete,ArrowLeft:v.ArrowLeft,ArrowRight:v.ArrowRight,ArrowUp:v.ArrowUp,ArrowDown:v.ArrowDown,Tab,Enter}).hasOwnProperty(y)&&D[y](s)},y=function(e,t){var i=e.querySelector(".field"),r=n(i).splittedData;t.carretPosition=18*(r.length-1)},f=function(e,t){e.isOpen?t.classList.remove("hidden"):t.classList.add("hidden"),t.querySelector(".field").classList.toggle("hidden-field")};var g=document.createElement("div");g.classList.add("board");var p=function(e){var t=document.createElement("button");return t.classList.add("key"),t.setAttribute("id",e),t};[["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace"],["Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","Delete"],["CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter"],["ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ShiftRight"],["ControlLeft","MetaLeft","AltLeft","Space","AltRight","ArrowLeft","ArrowUp","ArrowDown","ArrowRight","ControlRight"]].forEach((function(e){var t=document.createElement("div");t.classList.add("row");var i=document.createElement("div");i.classList.add("arrows"),e.forEach((function(e){e.includes("Arrow")?function(e,t,i){t.append(p(i)),e.append(t)}(t,i,e):t.append(p(e))})),g.append(t)}));var h=document.createElement("main");h.classList.add("main");var v=document.createElement("section");v.classList.add("keyboard");var K=document.createElement("div");K.classList.add("author-info");var m=document.createElement("span");m.textContent="creeted by ";var S=document.createElement("a");S.classList.add("link"),S.setAttribute("href","https://github.com/Pavelvl21"),S.setAttribute("target","_blank"),S.setAttribute("name","author"),S.textContent="Pavel Yudenka",K.append(m,S);var L=document.createElement("textarea");L.classList.add("field");var b=document.createElement("div");b.classList.add("wrapper");var D=document.createElement("button");D.classList.add("wrapper-button"),b.append(D,L),v.append(b,K,g),h.append(v);const k=h;var w=document.createElement("footer");w.classList.add("footer");var A=document.createElement("h1");A.classList.add("title"),A.textContent="Windows 10 Keyboard";var E=document.createElement("h2");E.classList.add("description"),E.textContent='To change the Keyboard Language press "alt" + "shift" or "ctrl" + "shift"',w.append(A,E);const C=w;var O=document.body;O.classList.add("body"),O.append(k,C);var R=k.querySelector(".board"),P=k.querySelector(".wrapper-button"),B=k.querySelector(".wrapper"),j={lang:(0===localStorage.length?{lang:"en"}:JSON.parse(localStorage.getItem("locale"))).lang,pressedKey:{},pressedKeys:new Set,isCapsLock:!1,isShifted:!1,isOpen:!1,carretPosition:0};f(j,B),setTimeout((function(){j.isOpen=!0,f(j,B)}),1e3);var q=function(){j.isOpen=!j.isOpen,f(j,B)},T=function(e){var t=e.target,i=t.textContent,r=t.id;j.pressedKey={code:r,key:i},"CapsLock"===r&&!e.repeat&&(j.isCapsLock=!j.isCapsLock);var n=j.isShifted&&"AltLeft"===r||j.isShifted&&"AltRight"===r,a=j.isShifted&&"ControlLeft"===r||j.isShifted&&"ControlRight"===r;(n||a)&&(j.lang="en"===j.lang?"ru":"en",y(j.lang),u(j,k)),y(k,j),u(j,k)},U=function(e){var t=e.target.id;t&&j.pressedKeys.add(t),"ShiftLeft"!==t&&"ShiftRight"!==t||(j.isShifted=!j.isShifted,u(j,k))},x=function(e){var t=e.target.id;j.pressedKeys.delete(t),"ShiftLeft"!==t&&"ShiftRight"!==t||(j.isShifted=!j.isShifted,u(j,k))},M=function(e){e.preventDefault();var t=e.code,i=e.key,r=e.altKey,n=e.ctrlKey,a=e.shiftKey,o=e.location,s=e.metaKey;t&&(j.pressedKey={code:t,key:i},j.pressedKeys.add(t));var c,l,d=!e.repeat&&1===o&&!s,f=n&&a&&d,g=r&&a&&d;(f||g)&&(j.lang="en"===j.lang?"ru":"en",c=j.lang,l={lang:c},localStorage.setItem("locale",JSON.stringify(l))),a&&!e.repeat&&!f&&!g&&(j.isShifted=!0),"CapsLock"===t&&!e.repeat&&(j.isCapsLock=!j.isCapsLock),y(k,j),u(j,k)},I=function(e){var t=e.code;j.pressedKey={},j.pressedKeys.delete(t),u(j,k),("ShiftLeft"===t||"ShiftRight"===t)&&j.isShifted&&(j.isShifted=!1,u(j,k))};P.addEventListener("click",q),R.addEventListener("click",T),R.addEventListener("mousedown",U),R.addEventListener("mouseup",x),O.addEventListener("keydown",M),O.addEventListener("keyup",I),u(j,k)})();