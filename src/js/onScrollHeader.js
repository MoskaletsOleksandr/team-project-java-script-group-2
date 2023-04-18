import refs from './refs';

let positionHeader = refs.headerEl.offsetTop;
function onScrollHeader() {
  if (window.pageYOffset > positionHeader) {
    refs.headerEl.classList.add('fixed');
    refs.headerContainerEl.classList.add('fixed-header');
    refs.logoHeader.classList.add('fixed-logo');
    refs.logoTextHeader.classList.add('text-logo-fixed');
    // refs.iconFilmHeader.classList.add('icon-film-fixed');
    localStorage.setItem('pageYOffset', JSON.stringify(window.pageYOffset));
    // refs.galleryContainerEl.classList.add('gallery-fixed');
  } else {
    refs.headerEl.classList.remove('fixed');
    refs.headerContainerEl.classList.remove('fixed-header');
    refs.headerContainerEl.classList.remove('fixed-header-dark');
    refs.logoHeader.classList.remove('fixed-logo');
    refs.logoTextHeader.classList.remove('text-logo-fixed');
    // refs.iconFilmHeader.classList.remove('icon-film-fixed');
    localStorage.removeItem('pageYOffset');
    // refs.galleryContainerEl.classList.remove('gallery-fixed');
  }

  if (window.pageYOffset > positionHeader && localStorage.theme === 'dark') {
    refs.headerContainerEl.classList.add('fixed-header-dark');
    // localStorage.setItem('pageYOffset', JSON.stringify(window.pageYOffset));
  }
}

window.addEventListener('scroll', onScrollHeader);
