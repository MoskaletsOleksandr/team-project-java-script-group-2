function e(e,t,a,n){Object.defineProperty(e,t,{get:a,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=a.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},a.parcelRequired7c6=r),r.register("kyEFX",(function(t,a){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var r={};n=function(e){for(var t=Object.keys(e),a=0;a<t.length;a++)r[t[a]]=e[t[a]]},o=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("kyEFX").register(JSON.parse('{"1zJhX":"library.12c0b0e3.js","i2NY3":"noimage.abcafdb5.jpg","5UbS1":"index.b911722e.css","eM9ss":"library.ecfa9ccc.js"}'));var d=r("krGWQ");r("6NKwh"),r("eo4cx"),r("j7el6"),r("9OeKo");var i=r("7rYDH"),l=r("dbKnH"),c=r("boIUg"),s=r("31u3U");s=r("31u3U");s=r("31u3U"),s=r("31u3U");var u;u=new URL(r("kyEFX").resolve("i2NY3"),import.meta.url).toString();const m=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];function g(e){const a=m.slice(0,2).map((e=>` ${e.name}`));return m.length>2&&a.push("...other"),e.map((({poster_path:e,release_date:n,title:o,id:r})=>(""===n&&(n="None"),`<li class="gallery-item">\n                    <div class="gallery-container-img" data-id='${r}'>\n                    <div class="gallery-card" data-id='${r}'>\n                        <img class="gallery-img" src="${e?`https://image.tmdb.org/t/p/w500/${e}`:t(u)}" alt="${o}">\n                        </div>\n                        <div class="gallery-film" data-id='${r}'>\n                        <h3 class="film-title">${o}\n                        </h3>\n                        <span class="film-genres">${a}</span><span class="film-year"> | ${n.slice(0,4)}</span></div>\n                    </div>\n                </li>`))).join("")}d.default.movieModalEl.addEventListener("click",(function(e){const t=document.querySelector(".js-film-info__btns"),a=document.querySelector(".gallery-item");"add-to-watched"===e.target.dataset.watchedBtn?E.then((n=>{const o=(0,s.loadLocalStorage)("watched");o.forEach((e=>{Number(e.id)===Number(n.id)&&a.remove()})),o.push(n),(0,s.saveLocalStorage)("watched",o),e.target.textContent="Remove from watched",e.target.dataset.watchedBtn="remove-from-watched",e.target.classList.add("active-btn"),t.children[1].classList.remove("active-btn")})).catch((e=>{console.log(e)})):"remove-from-watched"===e.target.dataset.watchedBtn&&E.then((a=>{const n=(0,s.loadLocalStorage)("watched"),o=n.findIndex((e=>Number(e.id)===Number(a.id)));n.splice(o,1),localStorage.removeItem("watched"),(0,s.saveLocalStorage)("watched",n),e.target.textContent="Add to watched",e.target.dataset.watchedBtn="add-to-watched",e.target.classList.add("active-btn"),t.children[1].classList.remove("active-btn")})).catch((e=>{console.log(e)}))})),d.default.movieModalEl.addEventListener("click",(function(e){const t=document.querySelector(".js-film-info__btns");document.querySelector(".gallery-item"),"add-to-queue"===e.target.dataset.queueBtn?E.then((a=>{const n=(0,s.loadLocalStorage)("queue");n.push(a),(0,s.saveLocalStorage)("queue",n),e.target.textContent="Remove from queue",e.target.dataset.queueBtn="remove-from-queue",e.target.classList.add("active-btn"),t.children[0].classList.remove("active-btn")})).catch((e=>{console.log(e)})):"remove-from-queue"===e.target.dataset.queueBtn&&E.then((a=>{const n=(0,s.loadLocalStorage)("queue"),o=n.findIndex((e=>Number(e.id)===Number(a.id)));n.splice(o,1),localStorage.removeItem("queue"),(0,s.saveLocalStorage)("queue",n),e.target.textContent="Add to queue",e.target.dataset.queueBtn="add-to-queue",e.target.classList.add("active-btn"),t.children[0].classList.remove("active-btn")})).catch((e=>{console.log(e)}))}));const v=document.querySelector(".watched-btn"),f=document.querySelector(".queue-btn"),h=document.querySelector(".gallery-lib-list"),b=document.querySelector(".library-container");v.addEventListener("click",L),f.addEventListener("click",(function(){if(p=JSON.parse(localStorage.getItem("queue"))||[],b.style.display="none",p.length<=0)return b.style.display="block",void(h.innerHTML="");const e=g(p);h.innerHTML=e,(0,c.renderTrailerMarkup)(y)}));let y=[],p=[];function L(){if(b.style.display="none",y=JSON.parse(localStorage.getItem("watched"))||[],y.length<=0)return b.style.display="block",void(h.innerHTML="");const e=g(y);console.log(y),h.innerHTML=e,(0,c.renderTrailerMarkup)(y)}L();let w=null,E=null;function M(e){"backdrop"!==e.target.className&&"modal__close-btn"!==e.target.classList[0]&&"icon-close"!==e.target.classList[0]&&"svg-icon-close"!==e.target.classList[0]&&"Escape"!==e.code||(d.default.backdropMovieModal.classList.add("is-hidden"),d.default.movieModalEl.classList.add("is-hidden"),d.default.bodyLibEl.style.overflow="scroll",d.default.backdropMovieModal.removeEventListener("click",M),window.removeEventListener("keydown",M))}d.default.backdropMovieModal.addEventListener("click",M),window.addEventListener("keydown",M),d.default.galleryLibListEl.addEventListener("click",(function(e){if(function(e){if("DIV"===e.target.nodeName)return void(w=e.target.dataset.id);w=e.target.parentElement.dataset.id}(e),"IMG"!==e.target.nodeName&&"DIV"!==e.target.nodeName&&"H3"!==e.target.nodeName&&"SPAN"!==e.target.nodeName)return;E=(0,i.fetchDataById)(w).then((e=>{d.default.backdropMovieModal.classList.remove("is-hidden"),d.default.movieModalEl.classList.remove("is-hidden"),d.default.backdropMovieModal.addEventListener("click",M),window.addEventListener("keydown",M);const t=(0,l.createMoveModalMarkup)(e,w);return d.default.movieModalFilmInfoEl.innerHTML=t,d.default.bodyLibEl.style.overflow="hidden",e})).catch((e=>console.log(e)))}));
//# sourceMappingURL=library.12c0b0e3.js.map
