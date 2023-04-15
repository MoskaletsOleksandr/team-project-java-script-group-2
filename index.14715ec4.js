function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const n=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];function o({results:e}){return e.map((({poster_path:e,genre_ids:t,release_date:o,title:a,id:i})=>{let l=function(e){const t=[];for(const o of e)n.forEach((e=>{e.id===o&&t.push(` ${e.name}`)}));return t}(t);return l=function(e){if(e.length>2){let t=e.slice(0,2);return t.push(" ...other"),t}return e}(l),`<li class="gallery-item">\n                    <div class="gallery-container-img"\n                    <div class="gallery-card" data-id='${i}'>\n                        <img class="gallery-img" src="https://image.tmdb.org/t/p/w400${e}" alt="${a}">\n                        <button class="trailer-button" type="button">Trailer</button> \n                        </div>\n                        <div class="gallery-film">\n                        <h3 class="film-title">${a}\n                        </h3>\n                        <span class="film-genres">${l}</span><span class="film-year"> | ${o.slice(0,4)}</span></div>\n                    </div>\n                </li>`})).join("")}async function a(e){const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=18d2ef0015120b4f2a7b992abe7c1251`);if(!t.ok)throw new Error(t.statusText);return await t.json()}var i,l=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,f=u||m||Function("return this")(),p=Object.prototype.toString,v=Math.max,g=Math.min,h=function(){return f.Date.now()};function y(e,t,n){var o,a,i,l,r,d,s=0,c=!1,u=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=o,i=a;return o=a=void 0,s=t,l=e.apply(i,n)}function p(e){return s=e,r=setTimeout(w,t),c?f(e):l}function y(e){var n=e-d;return void 0===d||n>=t||n<0||u&&e-s>=i}function w(){var e=h();if(y(e))return E(e);r=setTimeout(w,function(e){var n=t-(e-d);return u?g(n,i-(e-s)):n}(e))}function E(e){return r=void 0,m&&o?f(e):(o=a=void 0,l)}function S(){var e=h(),n=y(e);if(o=arguments,a=this,d=e,n){if(void 0===r)return p(d);if(u)return r=setTimeout(w,t),f(d)}return void 0===r&&(r=setTimeout(w,t)),l}return t=_(t)||0,b(n)&&(c=!!n.leading,i=(u="maxWait"in n)?v(_(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),S.cancel=function(){void 0!==r&&clearTimeout(r),s=0,o=d=a=r=void 0},S.flush=function(){return void 0===r?l:E(h())},S}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function _(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=d.test(e);return n||s.test(e)?c(e.slice(2),n?2:8):r.test(e)?NaN:+e}function w(e){const{poster_path:t,title:n,vote_average:o,vote_count:a,popularity:i,original_title:l,genres:r,overview:d}=e;return`<div class="js-film-info__thumb">\n                     <img\n                       src="https://image.tmdb.org/t/p/original${t}"\n                       alt="${n}"\n                       width="240"\n                       class="js-film-info__poster"\n                     />\n                  </div>\n                  <div class="js-film-info__content">\n                    <h2 class="js-film-info__name">${n}</h2>\n                    <table class="js-film-info__table-thumb">\n                      <tr class="js-film-info__item">\n                        <td class="js-film-info__title">Vote / Votes</td>\n                        <td>\n                          <span class="js-film-info__vote">${o}</span>\n                          <span class="slash">/</span>\n                          <span class="js-film-info__votes">${a}</span>\n                        </td>\n                      </tr>\n                      <tr class="js-film-info__item">\n                        <td class="js-film-info__title">Popularity</td>\n                        <td class="js-film-info__popularity">${i}</td>\n                      </tr>\n                      <tr class="js-film-info__item">\n                        <td class="js-film-info__title">Original Title</td>\n                        <td class="js-film-info__original-title">${l}</td>\n                      </tr>\n                      <tr class="js-film-info__item">\n                        <td class="js-film-info__title">Genre</td>\n                        <td class="js-film-info__genre">${r.map((e=>e.name)).join(", ")}</td>\n                      </tr>\n                    </table>\n                    <h3 class="js-film-info__description-title">About</h3>\n                    <p class="js-film-info__description-text">${d}\n                    </p>                    \n                  </div>`}i=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),y(e,t,{leading:o,maxWait:t,trailing:a})};const E={searchFormEl:document.querySelector(".form-search"),galleryContainerEl:document.querySelector(".gallery-container"),galleryListEl:document.querySelector(".gallery-list"),aboutTeamBtn:document.querySelector(".about-team"),btnUpEl:document.querySelector(".btn-up"),backdropMovieModal:document.querySelector(".backdrop"),movieModalEl:document.querySelector("div[data-movie-modal]"),movieModalFilmInfoEl:document.querySelector(".wrap"),modalCloseBtn:document.querySelector("button[data-movie-modal-close]"),addToWatchedBtn:document.querySelector("button[data-btn-to-watched]"),addToQueueBtn:document.querySelector("button[data-btn-to-queue]"),teamOpenModalBtn:document.querySelector("button[data-team-modal-open]"),teamCloseModalBtn:document.querySelector("div[data-team-modal-close]"),teamModal:document.querySelector("div[data-team-modal]")};let S=null,j=null;function T(e){"backdrop"!==e.target.className&&"modal__close"!==e.target.classList[0]&&"icon-close"!==e.target.classList[0]&&"svg-icon-close"!==e.target.classList[0]&&"Escape"!==e.code||(E.backdropMovieModal.classList.add("is-hidden"),E.movieModalEl.classList.add("is-hidden"),E.backdropMovieModal.removeEventListener("click",T),window.removeEventListener("keydown",T))}function M(e){!function(e){"IMG"!==e.target.nodeName&&"DIV"!==e.target.nodeName&&"H3"!==e.target.nodeName&&"SPAN"!==e.target.nodeName||(S="DIV"!==e.target.nodeName?e.target.parentElement.dataset.id:e.target.dataset.id)}(e),j=a(S).then((e=>{E.backdropMovieModal.classList.remove("is-hidden"),E.movieModalEl.classList.remove("is-hidden"),E.backdropMovieModal.addEventListener("click",T),window.addEventListener("keydown",T);const t=w(e);return E.movieModalFilmInfoEl.innerHTML=t,e})).catch((e=>console.log(e))),function(){if(localStorage.watched||localStorage.queue){const e=localStorage.getItem("watched");JSON.parse(e).map((e=>{const{id:t}=e;t===Number(S)?E.addToWatchedBtn.textContent="Remove from watch":E.addToWatchedBtn.textContent="Add to watch"}));const t=localStorage.getItem("queue");JSON.parse(t).map((e=>{const{id:t}=e;t===Number(S)?E.addToQueueBtn.textContent="Add to Queue":E.addToQueueBtn.textContent="Remove from Queue"}))}else{let e=[];localStorage.setItem("watched",JSON.stringify(e)),localStorage.setItem("queue",JSON.stringify(e)),E.addToWatchedBtn.textContent="Add to watch",E.addToQueueBtn.textContent="Add to Queue"}}()}E.btnUpEl.addEventListener("click",(function(){window.scrollTo({top:0,left:0,behavior:"smooth"})})),window.addEventListener("scroll",e(i)((()=>{(window.scrollY||document.documentElement.scrollTop)>400?E.btnUpEl.classList.remove("btn-up_hide"):E.btnUpEl.classList.add("btn-up_hide")}),500)),teamOpenModalBtn.addEventListener("click",(e=>{})),E.galleryContainerEl.addEventListener("click",M),E.modalCloseBtn.addEventListener("click",toggleModal),E.addToWatchedBtn.addEventListener("click",(function(){j.then((e=>{const t=localStorage.getItem("watched"),n=JSON.parse(t);n.push(e),localStorage.setItem("watched",JSON.stringify(n)),E.addToWatchedBtn.textContent="Remove from watch"})).catch((e=>{console.log(e)}))})),E.addToQueueBtn.addEventListener("click",(function(){j.then((e=>{const t=localStorage.getItem("queue"),n=JSON.parse(t);n.push(e),localStorage.setItem("queue",JSON.stringify(n)),E.addToQueueBtn.textContent="Remove from queue"})).catch((e=>{console.log(e)}))})),async function(){const e=await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=18d2ef0015120b4f2a7b992abe7c1251");if(!e.ok)throw new Error(e.statusText);return await e.json()}().then((e=>{!function(e){const t=o(e);E.galleryListEl.insertAdjacentHTML("beforeend",t)}(e)})).catch((e=>console.log(e))),E.backdropMovieModal.addEventListener("click",T),window.addEventListener("keydown",T),E.galleryContainerEl.addEventListener("click",M);
//# sourceMappingURL=index.14715ec4.js.map
