function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,r=/^0o[0-7]+$/i,d=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),u=Object.prototype.toString,m=Math.max,f=Math.min,y=function(){return s.Date.now()};function p(e,t,n){var o,i,a,r,d,c,l=0,s=!1,u=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,a=i;return o=i=void 0,l=t,r=e.apply(a,n)}function g(e){return l=e,d=setTimeout(w,t),s?b(e):r}function S(e){var n=e-c;return void 0===c||n>=t||n<0||u&&e-l>=a}function w(){var e=y();if(S(e))return L(e);d=setTimeout(w,function(e){var n=t-(e-c);return u?f(n,a-(e-l)):n}(e))}function L(e){return d=void 0,p&&o?b(e):(o=i=void 0,r)}function q(){var e=y(),n=S(e);if(o=arguments,i=this,c=e,n){if(void 0===d)return g(c);if(u)return d=setTimeout(w,t),b(c)}return void 0===d&&(d=setTimeout(w,t)),r}return t=h(t)||0,v(n)&&(s=!!n.leading,a=(u="maxWait"in n)?m(h(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),q.cancel=function(){void 0!==d&&clearTimeout(d),l=0,o=c=i=d=void 0},q.flush=function(){return void 0===d?r:L(y())},q}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||r.test(e)?d(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};let b="https://image.tmdb.org/t/p/w400";const g=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];function S(e){const t=g.slice(0,2).map((e=>` ${e.name}`));return g.length>2&&t.push("...other"),e.map((({poster_path:e,release_date:n,title:o,id:i})=>(b="https://image.tmdb.org/t/p/w400",null===e&&(b="",e="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo-available_87543-11093.jpg?w=1480"),""===n&&(n="None"),`<li class="gallery-item">\n                    <div class="gallery-container-img" data-id='${i}'>\n                    <div class="gallery-card" data-id='${i}'>\n                        <img class="gallery-img" src="${b}${e}" alt="${o}">\n                        <a class="trailer-link tube" href="https://www.youtube.com/watch?v=${videoKey}">Trailer</a>\n                        </div>\n                        <div class="gallery-film" data-id='${i}'>\n                        <h3 class="film-title">${o}\n                        </h3>\n                        <span class="film-genres">${t}</span><span class="film-year"> | ${n.slice(0,4)}</span></div>\n                    </div>\n                </li>`))).join("")}const w={searchFormEl:document.querySelector(".form-search"),galleryContainerEl:document.querySelector(".gallery-container"),aboutTeamBtn:document.querySelector(".about-team"),backdropMovieModal:document.querySelector(".backdrop"),movieModalEl:document.querySelector("div[data-movie-modal]"),modalCloseBtn:document.querySelector("button[data-movie-modal-close]"),addToWatchedBtn:document.querySelector("button[data-btn-to-watched]"),addToQueueBtn:document.querySelector("button[data-btn-to-queue]"),removeFromWatchedBtn:document.querySelector(".remove-from-watched-btn"),removeFromQueueBtn:document.querySelector(".remove-from-queue-btn"),btnUpEl:document.querySelector(".btn-up")},L=document.querySelector(".header"),q=document.querySelector(".header-container"),k=document.querySelector(".header-logo"),T=document.querySelector(".header-text-logo"),x=document.querySelector(".icon-film");let E=L.offsetTop;window.addEventListener("scroll",(function(){window.pageYOffset>E?(L.classList.add("fixed"),q.classList.add("fixed-header"),k.classList.add("fixed-logo"),T.classList.add("text-logo-fixed"),x.classList.add("icon-film-fixed")):(L.classList.remove("fixed"),q.classList.remove("fixed-header"),q.classList.remove("fixed-header-dark"),k.classList.remove("fixed-logo")),window.pageYOffset>E&&"dark"===localStorage.theme&&q.classList.add("fixed-header-dark")})),w.btnUpEl.addEventListener("click",(function(){window.scrollTo({top:0,left:0,behavior:"smooth"})})),window.addEventListener("scroll",e(t)((()=>{(window.scrollY||document.documentElement.scrollTop)>400?w.btnUpEl.classList.remove("btn-up_hide"):w.btnUpEl.classList.add("btn-up_hide")}),500));const $=document.querySelector(".btn-theme"),M=document.querySelector(".header-container"),j=document.querySelector(".btn-icon-moon"),O=document.querySelector(".btn-icon-sun");function F(){document.body.classList.add("dark"),O.classList.remove("btn-icon-hidden"),j.classList.add("btn-icon-hidden"),M.classList.remove("header-container"),M.classList.add("header-container-dark"),localStorage.theme="dark"}$.addEventListener("click",(()=>{document.body.classList.contains("dark")?(document.body.classList.remove("dark"),j.classList.remove("btn-icon-hidden"),O.classList.add("btn-icon-hidden"),M.classList.remove("header-container-dark"),M.classList.add("header-container"),localStorage.theme="light"):F(),"dark"===localStorage.theme&&window.pageYOffset>E?q.classList.add("fixed-header-dark"):q.classList.remove("fixed-header-dark")})),"dark"===localStorage.theme&&F();const N=document.querySelector(".watched-btn"),W=document.querySelector(".queue-btn"),_=document.querySelector(".gallery-lib-list"),B=document.querySelector(".library-container");N.addEventListener("click",U),W.addEventListener("click",(function(){if(C=JSON.parse(localStorage.getItem("queue"))||[],B.style.display="none",C.length<=0)return B.style.display="block",void(_.innerHTML="");const e=S(C);_.innerHTML=e}));let H=[],C=[];function U(){if(B.style.display="none",H=JSON.parse(localStorage.getItem("watched"))||[],console.log(H),H.length<=0)return B.style.display="block",void(_.innerHTML="");const e=S(H);_.innerHTML=e}U();
//# sourceMappingURL=library.dfbbfbf2.js.map
