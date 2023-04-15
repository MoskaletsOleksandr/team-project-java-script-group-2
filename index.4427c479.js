function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const n=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];function o({results:e}){return e.map((({backdrop_path:e,genre_ids:t,release_date:o,title:a,id:i})=>{let r=function(e){const t=[];for(const o of e)n.forEach((e=>{e.id===o&&t.push(` ${e.name}`)}));return t}(t);return r=function(e){if(e.length>2){let t=e.slice(0,2);return t.push(" ...other"),t}return e}(r),`<li class="gallery-item">\n                    <div class="gallery-card" data-id='${i}'>\n                        <img src="https://image.tmdb.org/t/p/w400${e}" width="395" alt="${a}">\n                        <button class="trailer-button" type="button">Trailer</button>\n                        <h3 class="film-title">${a}</h3>\n                        <span class="film-genres">${r}</span> | <span class="film-year">${o.slice(0,4)}</span>\n                    </div>\n                </li>`})).join("")}async function a(e){const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=18d2ef0015120b4f2a7b992abe7c1251`);if(!t.ok)throw new Error(t.statusText);return await t.json()}var i,r=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,d=/^0o[0-7]+$/i,u=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,f=s||m||Function("return this")(),g=Object.prototype.toString,h=Math.max,p=Math.min,y=function(){return f.Date.now()};function b(e,t,n){var o,a,i,r,c,l,d=0,u=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=o,i=a;return o=a=void 0,d=t,r=e.apply(i,n)}function g(e){return d=e,c=setTimeout(S,t),u?f(e):r}function b(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-d>=i}function S(){var e=y();if(b(e))return T(e);c=setTimeout(S,function(e){var n=t-(e-l);return s?p(n,i-(e-d)):n}(e))}function T(e){return c=void 0,m&&o?f(e):(o=a=void 0,r)}function E(){var e=y(),n=b(e);if(o=arguments,a=this,l=e,n){if(void 0===c)return g(l);if(s)return c=setTimeout(S,t),f(l)}return void 0===c&&(c=setTimeout(S,t)),r}return t=w(t)||0,v(n)&&(u=!!n.leading,i=(s="maxWait"in n)?h(w(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),E.cancel=function(){void 0!==c&&clearTimeout(c),d=0,o=l=a=c=void 0},E.flush=function(){return void 0===c?r:T(y())},E}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==g.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=l.test(e);return n||d.test(e)?u(e.slice(2),n?2:8):c.test(e)?NaN:+e}i=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),b(e,t,{leading:o,maxWait:t,trailing:a})};const S={searchFormEl:document.querySelector(".form-search"),galleryContainerEl:document.querySelector(".gallery-container"),galleryListEl:document.querySelector(".gallery-list"),aboutTeamBtn:document.querySelector(".about-team"),modalCloseBtn:document.querySelector(".modal__close"),btnUpEl:document.querySelector(".btn-up"),addToWatchedBtn:document.querySelector("button[data-btn-to-watched]"),addToQueueBtn:document.querySelector("button[data-btn-to-queue]"),movieModalEl:document.querySelector("div[data-movie-modal]")};let T=null,E=null;function N(){S.movieModalEl.classList.toggle("is-hidden")}S.btnUpEl.addEventListener("click",(function(){window.scrollTo({top:0,left:0,behavior:"smooth"})})),window.addEventListener("scroll",e(i)((()=>{(window.scrollY||document.documentElement.scrollTop)>400?S.btnUpEl.classList.remove("btn-up_hide"):S.btnUpEl.classList.add("btn-up_hide")}),500)),S.addToWatchedBtn.addEventListener("click",(function(){E.then((e=>{const t=localStorage.getItem("watched"),n=JSON.parse(t);n.push(e),localStorage.setItem("watched",JSON.stringify(n)),S.addToWatchedBtn.textContent="Remove from watch"})).catch((e=>{console.log(e)}))})),S.addToQueueBtn.addEventListener("click",(function(){E.then((e=>{const t=localStorage.getItem("queue"),n=JSON.parse(t);n.push(e),localStorage.setItem("queue",JSON.stringify(n)),S.addToQueueBtn.textContent="Remove from queue"})).catch((e=>{console.log(e)}))})),async function(){const e=await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=18d2ef0015120b4f2a7b992abe7c1251");if(!e.ok)throw new Error(e.statusText);return await e.json()}().then((e=>{!function(e){const t=o(e);S.galleryListEl.insertAdjacentHTML("beforeend",t)}(e)})).catch((e=>console.log(e))),S.galleryContainerEl.addEventListener("click",(function(e){!function(e){"IMG"!==e.target.nodeName&&"DIV"!==e.target.nodeName&&"H3"!==e.target.nodeName&&"SPAN"!==e.target.nodeName||(N(),T="DIV"!==e.target.nodeName?e.target.parentElement.dataset.id:e.target.dataset.id)}(e),E=a(T).then((e=>(console.log(e),e))).catch((e=>console.log(e))),function(){if(localStorage.watched||localStorage.queue){const e=localStorage.getItem("watched"),t=JSON.parse(e);console.log(t),t.map((e=>{const{id:t}=e;t===Number(T)?S.addToWatchedBtn.textContent="Remove from watch":S.addToWatchedBtn.textContent="Add to watch"}));const n=localStorage.getItem("queue"),o=JSON.parse(n);console.log(o),o.map((e=>{const{id:t}=e;t===Number(T)?S.addToQueueBtn.textContent="Add to Queue":S.addToQueueBtn.textContent="Remove from Queue"}))}else{let e=[];localStorage.setItem("watched",JSON.stringify(e)),localStorage.setItem("queue",JSON.stringify(e)),S.addToWatchedBtn.textContent="Add to watch",S.addToQueueBtn.textContent="Add to Queue"}}(),console.log(E)})),S.modalCloseBtn.addEventListener("click",N);
//# sourceMappingURL=index.4427c479.js.map
