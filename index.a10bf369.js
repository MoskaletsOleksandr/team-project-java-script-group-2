function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};async function n(e){const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=18d2ef0015120b4f2a7b992abe7c1251`);if(!t.ok)throw new Error(t.statusText);return await t.json()}async function o(e){const t=`https://api.themoviedb.org/3/search/movie?api_key=18d2ef0015120b4f2a7b992abe7c1251&query=${e}`,n=await fetch(t);if(!n.ok)throw new Error(n.statusText);return await n.json()}let a="https://image.tmdb.org/t/p/w400";const i=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];function r({results:e}){return e.map((({poster_path:e,genre_ids:t,release_date:n,title:o,id:r})=>{a="https://image.tmdb.org/t/p/w400",null===e&&(a="",e="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo-available_87543-11093.jpg?w=1480"),""===n&&(n="None");let s=function(e){const t=[];for(const n of e)i.forEach((e=>{e.id===n&&t.push(` ${e.name}`)}));return t}(t);return s=function(e){if(e.length>2){let t=e.slice(0,2);return t.push(" ...other"),t}return e}(s),0===s.length&&(s="Unknown genres"),`<li class="gallery-item">\n                    <div class="gallery-container-img" data-id='${r}'>\n                    <div class="gallery-card" data-id='${r}'>\n                        <img class="gallery-img" src="${a}${e}" alt="${o}">\n                        <button class="trailer-button" type="button">Trailer</button> \n                        </div>\n                        <div class="gallery-film" data-id='${r}'>\n                        <h3 class="film-title">${o}\n                        </h3>\n                        <span class="film-genres">${s}</span><span class="film-year"> | ${n.slice(0,4)}</span></div>\n                    </div>\n                </li>`})).join("")}var s,l=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,m=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,g="object"==typeof self&&self&&self.Object===Object&&self,h=f||g||Function("return this")(),p=Object.prototype.toString,v=Math.max,b=Math.min,y=function(){return h.Date.now()};function w(e,t,n){var o,a,i,r,s,l,d=0,c=!1,u=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=o,i=a;return o=a=void 0,d=t,r=e.apply(i,n)}function g(e){return d=e,s=setTimeout(p,t),c?f(e):r}function h(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-d>=i}function p(){var e=y();if(h(e))return w(e);s=setTimeout(p,function(e){var n=t-(e-l);return u?b(n,i-(e-d)):n}(e))}function w(e){return s=void 0,m&&o?f(e):(o=a=void 0,r)}function L(){var e=y(),n=h(e);if(o=arguments,a=this,l=e,n){if(void 0===s)return g(l);if(u)return s=setTimeout(p,t),f(l)}return void 0===s&&(s=setTimeout(p,t)),r}return t=S(t)||0,_(n)&&(c=!!n.leading,i=(u="maxWait"in n)?v(S(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),L.cancel=function(){void 0!==s&&clearTimeout(s),d=0,o=l=a=s=void 0},L.flush=function(){return void 0===s?r:w(y())},L}function _(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(_(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=_(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=c.test(e);return n||u.test(e)?m(e.slice(2),n?2:8):d.test(e)?NaN:+e}function L(e,t){const{poster_path:n,title:o,vote_average:a,vote_count:i,popularity:r,original_title:s,genres:l,overview:d}=e,c=l.map((e=>e.name)).join(", ");let u="add-to-watched",m="add to watched";if(localStorage.watched||localStorage.queue){const e=localStorage.getItem("watched"),n=JSON.parse(e),o=[];n.map((e=>{const{id:t}=e;o.push(t)}));o.find((e=>e===Number(t)))&&(u="remove-from-watched",m="remove from watched")}else{let e=[];localStorage.setItem("watched",JSON.stringify(e)),localStorage.setItem("queue",JSON.stringify(e))}return`\n                   <div class="js-film-info__thumb">\n                     <img\n                       src="https://image.tmdb.org/t/p/original${n}"\n                       alt="${o}"\n                       width="240"\n                       class="js-film-info__poster"\n                     />\n                  </div>\n                  <div class="js-film-info__content">\n                    <h2 class="js-film-info__name">${o}</h2>\n                    <table class="js-film-info__table-thumb">\n                      <tr class="js-film-info__item">\n                        <td class="js-film-info__title">Vote / Votes</td>\n                        <td>\n                          <span class="js-film-info__vote">${a}</span>\n                          <span class="slash">/</span>\n                          <span class="js-film-info__votes">${i}</span>\n                        </td>\n                      </tr>\n                      <tr class="js-film-info__item">\n                        <td class="js-film-info__title">Popularity</td>\n                        <td class="js-film-info__popularity">${r}</td>\n                      </tr>\n                      <tr class="js-film-info__item">\n                        <td class="js-film-info__title">Original Title</td>\n                        <td class="js-film-info__original-title">${s}</td>\n                      </tr>\n                      <tr class="js-film-info__item">\n                        <td class="js-film-info__title">Genre</td>\n                        <td class="js-film-info__genre">${c}</td>\n                      </tr>\n                    </table>\n                    <h3 class="js-film-info__description-title">About</h3>\n                    <p class="js-film-info__description-text">${d}\n                    </p>\n                    <div class="js-film-info__btns">\n                      <button\n                        type="button"\n                        class="js-film-info__btn active-btn"\n                        data-watched-btn=${u}\n                      >\n                        ${m}\n                      </button>\n                      <button type="button" class="js-film-info__btn" data-queue-btn=add-to-queue>\n                        add to queue\n                      </button>\n                    </div>\n                  </div>`}s=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return _(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),w(e,t,{leading:o,maxWait:t,trailing:a})};const E={searchFormEl:document.querySelector(".form-search"),searchInputEl:document.querySelector(".input-search"),galleryContainerEl:document.querySelector(".gallery-container"),galleryListEl:document.querySelector(".gallery-list"),aboutTeamBtn:document.querySelector(".about-team"),btnUpEl:document.querySelector(".btn-up"),backdropMovieModal:document.querySelector(".backdrop"),movieModalEl:document.querySelector("div[data-movie-modal]"),movieModalFilmInfoEl:document.querySelector(".js-film-info"),modalCloseBtn:document.querySelector("button[data-movie-modal-close]"),teamModalOpenBtn:document.querySelector("button[data-team-modal-open]"),teamModalCloseBtn:document.querySelector("button[data-team-modal-close]"),teamModal:document.querySelector("div[data-team-modal]")};let q=null,j=null;const k=document.querySelector(".header"),M=document.querySelector(".header-container"),$=document.querySelector(".header-logo"),x=document.querySelector(".header-text-logo"),N=document.querySelector(".icon-film");let T=k.offsetTop;function O(){window.scrollTo({top:0,left:0,behavior:"smooth"})}window.addEventListener("scroll",(function(){window.pageYOffset>T?(k.classList.add("fixed"),M.classList.add("fixed-header"),$.classList.add("fixed-logo"),x.classList.add("text-logo-fixed"),N.classList.add("icon-film-fixed")):(k.classList.remove("fixed"),M.classList.remove("fixed-header"),$.classList.remove("fixed-logo"))})),E.btnUpEl.addEventListener("click",O),window.addEventListener("scroll",e(s)((()=>{(window.scrollY||document.documentElement.scrollTop)>400?E.btnUpEl.classList.remove("btn-up_hide"):E.btnUpEl.classList.add("btn-up_hide")}),500));const I=document.querySelector(".btn-theme"),B=document.querySelector(".header-container"),C=document.querySelector(".btn-icon-moon"),J=document.querySelector(".btn-icon-sun");function A(){document.body.classList.add("dark"),J.classList.remove("btn-icon-hidden"),C.classList.add("btn-icon-hidden"),B.classList.add("header-container-dark"),localStorage.theme="dark"}function F(){E.teamModal.classList.add("is-hidden-team")}function D(e){const t=r(e);E.galleryListEl.innerHTML="",E.galleryListEl.insertAdjacentHTML("beforeend",t)}function H(e){"backdrop"!==e.target.className&&"modal__close"!==e.target.classList[0]&&"icon-close"!==e.target.classList[0]&&"svg-icon-close"!==e.target.classList[0]&&"Escape"!==e.code||(E.backdropMovieModal.classList.add("is-hidden"),E.movieModalEl.classList.add("is-hidden"),E.backdropMovieModal.removeEventListener("click",H),window.removeEventListener("keydown",H))}I.addEventListener("click",(()=>{document.body.classList.contains("dark")?(document.body.classList.remove("dark"),C.classList.remove("btn-icon-hidden"),J.classList.add("btn-icon-hidden"),B.classList.remove("header-container-dark"),localStorage.theme="light"):A()})),"dark"===localStorage.theme&&A(),E.teamModalOpenBtn.addEventListener("click",(function(){E.teamModal.classList.remove("is-hidden-team")})),E.teamModalCloseBtn.addEventListener("click",F),E.teamModal.addEventListener("click",(function(e){e.target===E.teamModal&&F()})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&F()})),E.movieModalEl.addEventListener("click",(function(e){"add-to-watched"===e.target.dataset.watchedBtn?(console.log(e.target.dataset),j.then((t=>{const n=localStorage.getItem("watched"),o=JSON.parse(n);o.push(t),localStorage.setItem("watched",JSON.stringify(o)),e.target.textContent="Remove from watched",e.target.dataset.watchedBtn="remove-from-watched"})).catch((e=>{console.log(e)}))):"remove-from-watched"===e.target.dataset.watchedBtn&&(console.log(e.target.dataset),j.then((t=>{const n=localStorage.getItem("watched"),o=JSON.parse(n);o.push(t),localStorage.setItem("watched",JSON.stringify(o)),e.target.textContent="Add to watched",e.target.dataset.watchedBtn="add-to-watched"})).catch((e=>{console.log(e)})));return})),E.movieModalEl.addEventListener("click",(function(e){"add-to-queue"===e.target.dataset.queueBtn?(console.log(e.target.dataset),j.then((t=>{const n=localStorage.getItem("queue"),o=JSON.parse(n);o.push(t),localStorage.setItem("queue",JSON.stringify(o)),e.target.textContent="Remove from queue",e.target.dataset.queueBtn="remove-from-queue"})).catch((e=>{console.log(e)}))):"remove-from-queue"===e.target.dataset.queueBtn&&(console.log(e.target.dataset),j.then((t=>{const n=localStorage.getItem("queue"),o=JSON.parse(n);o.push(t),localStorage.setItem("queue",JSON.stringify(o)),e.target.textContent="Add to queue",e.target.dataset.queueBtn="add-to-queue"})).catch((e=>{console.log(e)})));return})),async function(){const e=await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=18d2ef0015120b4f2a7b992abe7c1251");if(!e.ok)throw new Error(e.statusText);return await e.json()}().then((e=>{D(e)})).catch((e=>console.log(e))),E.searchFormEl.addEventListener("submit",(function(e){e.preventDefault();const t=E.searchInputEl.value;if(""===t)return void alert("Please try again");o(t.trim()).then((e=>{console.log(e),0!==e.results.length?(D(e),O()):alert("Please try again")})).catch((e=>console.log(e)))})),E.backdropMovieModal.addEventListener("click",H),window.addEventListener("keydown",H),E.galleryContainerEl.addEventListener("click",(function(e){if(function(e){if("DIV"===e.target.nodeName)return void(q=e.target.dataset.id);q=e.target.parentElement.dataset.id}(e),"IMG"!==e.target.nodeName&&"DIV"!==e.target.nodeName&&"H3"!==e.target.nodeName&&"SPAN"!==e.target.nodeName)return;j=n(q).then((e=>{E.backdropMovieModal.classList.remove("is-hidden"),E.movieModalEl.classList.remove("is-hidden"),E.backdropMovieModal.addEventListener("click",H),window.addEventListener("keydown",H);const t=L(e,q);return E.movieModalFilmInfoEl.innerHTML=t,e})).catch((e=>console.log(e)))}));
//# sourceMappingURL=index.a10bf369.js.map
