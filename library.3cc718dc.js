!function(){function e(e,t,a,n){Object.defineProperty(e,t,{get:a,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=a.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},a.parcelRequired7c6=o),o.register("iE7OH",(function(t,a){var n,r;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var o={};n=function(e){for(var t=Object.keys(e),a=0;a<t.length;a++)o[t[a]]=e[t[a]]},r=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("aNJCr",(function(t,a){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var r={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=r[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),r[e]=t),t}})),o("iE7OH").register(JSON.parse('{"2Y0K8":"library.3cc718dc.js","1sXxD":"noimage.abcafdb5.jpg","5UbS1":"index.d1f1b2df.css","7nwxg":"library.6e85ba31.js"}'));var i=o("4Nugj");o("8yvZn"),o("dDtOD"),o("b5l1s"),o("dCfNN");var d=o("b7ONl"),c=o("Dfy6j"),l=o("j2NRO"),s=o("UL92Z"),u=(s=o("UL92Z"),"watched");s=o("UL92Z"),s=o("UL92Z");var f="queue";var m;m=o("aNJCr").getBundleURL("2Y0K8")+o("iE7OH").resolve("1sXxD");var v=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];function g(e){var a=v.slice(0,2).map((function(e){return" ".concat(e.name)}));return v.length>2&&a.push("...other"),e.map((function(e){var n=e.poster_path,r=e.release_date,o=e.title,i=e.id,d=n?"https://image.tmdb.org/t/p/w500/".concat(n):t(m);return""===r&&(r="None"),'<li class="gallery-item">\n                    <div class="gallery-container-img" data-id=\''.concat(i,"'>\n                    <div class=\"gallery-card\" data-id='").concat(i,'\'>\n                        <img class="gallery-img" src="').concat(d,'" alt="').concat(o,'">\n                        </div>\n                        <div class="gallery-film" data-id=\'').concat(i,'\'>\n                        <h3 class="film-title">').concat(o,'\n                        </h3>\n                        <span class="film-genres">').concat(a,'</span><span class="film-year"> | ').concat(r.slice(0,4),"</span></div>\n                    </div>\n                </li>")})).join("")}var h=null,p=null;function y(){i.default.teamModal.classList.add("is-hidden-team")}i.default.teamModalOpenBtn.addEventListener("click",(function(){i.default.teamModal.classList.remove("is-hidden-team")})),i.default.teamModalCloseBtn.addEventListener("click",y),i.default.teamModal.addEventListener("click",(function(e){e.target===i.default.teamModal&&y()})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&y()})),i.default.movieModalEl.addEventListener("click",(function(e){var t=document.querySelector(".js-film-info__btns"),a=document.querySelector(".gallery-item");"add-to-watched"===e.target.dataset.watchedBtn?p.then((function(n){var r=(0,s.loadLocalStorage)(u);r.forEach((function(e){Number(e.id)===Number(n.id)&&a.remove()})),r.push(n),(0,s.saveLocalStorage)(u,r),e.target.textContent="Remove from watched",e.target.dataset.watchedBtn="remove-from-watched",e.target.classList.add("active-btn"),t.children[1].classList.remove("active-btn")})).catch((function(e){console.log(e)})):"remove-from-watched"===e.target.dataset.watchedBtn&&p.then((function(a){var n=(0,s.loadLocalStorage)(u),r=n.findIndex((function(e){return Number(e.id)===Number(a.id)}));n.splice(r,1),localStorage.removeItem(u),(0,s.saveLocalStorage)(u,n),e.target.textContent="Add to watched",e.target.dataset.watchedBtn="add-to-watched",e.target.classList.add("active-btn"),t.children[1].classList.remove("active-btn")})).catch((function(e){console.log(e)}))})),i.default.movieModalEl.addEventListener("click",(function(e){var t=document.querySelector(".js-film-info__btns");document.querySelector(".gallery-item"),"add-to-queue"===e.target.dataset.queueBtn?p.then((function(a){var n=(0,s.loadLocalStorage)(f);n.push(a),(0,s.saveLocalStorage)(f,n),e.target.textContent="Remove from queue",e.target.dataset.queueBtn="remove-from-queue",e.target.classList.add("active-btn"),t.children[0].classList.remove("active-btn")})).catch((function(e){console.log(e)})):"remove-from-queue"===e.target.dataset.queueBtn&&p.then((function(a){var n=(0,s.loadLocalStorage)(f),r=n.findIndex((function(e){return Number(e.id)===Number(a.id)}));n.splice(r,1),localStorage.removeItem(f),(0,s.saveLocalStorage)(f,n),e.target.textContent="Add to queue",e.target.dataset.queueBtn="add-to-queue",e.target.classList.add("active-btn"),t.children[0].classList.remove("active-btn")})).catch((function(e){console.log(e)}))}));var L=document.querySelector(".watched-btn"),b=document.querySelector(".queue-btn"),w=document.querySelector(".gallery-lib-list"),E=document.querySelector(".library-container");L.addEventListener("click",k),b.addEventListener("click",(function(){if(S=JSON.parse(localStorage.getItem("queue"))||[],E.style.display="none",S.length<=0)return E.style.display="block",void(w.innerHTML="");var e=g(S);w.innerHTML=e,(0,l.renderTrailerMarkup)(M)}));var M=[],S=[];function k(){if(E.style.display="none",(M=JSON.parse(localStorage.getItem("watched"))||[]).length<=0)return E.style.display="block",void(w.innerHTML="");var e=g(M);w.innerHTML=e,(0,l.renderTrailerMarkup)(M)}function N(e){"backdrop"!==e.target.className&&"modal__close-btn"!==e.target.classList[0]&&"icon-close"!==e.target.classList[0]&&"svg-icon-close"!==e.target.classList[0]&&"Escape"!==e.code||(i.default.backdropMovieModal.classList.add("is-hidden"),i.default.movieModalEl.classList.add("is-hidden"),i.default.bodyEl.style.overflow="scroll",i.default.backdropMovieModal.removeEventListener("click",N),window.removeEventListener("keydown",N))}k(),i.default.backdropMovieModal.addEventListener("click",N),window.addEventListener("keydown",N),i.default.galleryLibListEl.addEventListener("click",(function(e){if(function(e){if("DIV"===e.target.nodeName)return void(h=e.target.dataset.id);h=e.target.parentElement.dataset.id}(e),"IMG"!==e.target.nodeName&&"DIV"!==e.target.nodeName&&"H3"!==e.target.nodeName&&"SPAN"!==e.target.nodeName)return;p=(0,d.fetchDataById)(h).then((function(e){i.default.backdropMovieModal.classList.remove("is-hidden"),i.default.movieModalEl.classList.remove("is-hidden"),i.default.backdropMovieModal.addEventListener("click",N),window.addEventListener("keydown",N);var t=(0,c.createMoveModalMarkup)(e,h);return i.default.movieModalFilmInfoEl.innerHTML=t,i.default.bodyEl.style.overflow="hidden",e})).catch((function(e){return console.log(e)}))}))}();
//# sourceMappingURL=library.3cc718dc.js.map
