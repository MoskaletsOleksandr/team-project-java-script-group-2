import refs from './refs';

let positionHeader = refs.headerEl.offsetTop;
// console.log(refs.galleryFixed);
export function onScrollHeader() {
  if (window.pageYOffset > positionHeader) {
    refs.headerEl.classList.add('fixed');
    refs.headerContainerEl.classList.add('fixed-header');
    //refs.headerContainerEl.classList.add('fixed-header-dark');
    refs.logoHeader.classList.add('fixed-logo');
    refs.logoTextHeader.classList.add('text-logo-fixed');
    refs.iconFilmHeader.classList.add('icon-film-fixed');
    refs.galleryFixed.classList.add('gallery-fixed');
    refs.galleryFixed.classList.remove('gallery-no-fixed');
    //refs.libraryBtn.classList.add('library-buttons-fixed');
    refs.btnThemeEl.classList.add('btn-theme-lib-fixed');
    //refs.searchLib.classList.add('search-lib-fixed');
    localStorage.setItem('pageYOffset', JSON.stringify(window.pageYOffset));
    // refs.galleryContainerEl.classList.add('gallery-fixed');
  } else {
    refs.headerEl.classList.remove('fixed');
    refs.headerContainerEl.classList.remove('fixed-header');
    refs.headerContainerEl.classList.remove('fixed-header-dark');
    refs.logoHeader.classList.remove('fixed-logo');
    refs.logoTextHeader.classList.remove('text-logo-fixed');
    refs.iconFilmHeader.classList.remove('icon-film-fixed');
    refs.galleryFixed.classList.remove('gallery-fixed');
    refs.galleryFixed.classList.add('gallery-no-fixed');
    // refs.libraryBtn.classList.remove('library-buttons-fixed');
    refs.btnThemeEl.classList.remove('btn-theme-lib-fixed');
    //refs.searchLib.classList.remove('search-lib-fixed');
    refs.iconFilmHeader.classList.remove('icon-film-fixed');
    localStorage.removeItem('pageYOffset');
    // refs.galleryContainerEl.classList.remove('gallery-fixed');
  }

  if (window.pageYOffset > positionHeader && localStorage.theme === 'dark') {
    refs.headerContainerEl.classList.add('fixed-header-dark');
    // localStorage.setItem('pageYOffset', JSON.stringify(window.pageYOffset));
  }
}

window.addEventListener('scroll', onScrollHeader);
