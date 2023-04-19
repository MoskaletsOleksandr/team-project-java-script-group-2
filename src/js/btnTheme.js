import refs from './refs';
// import { onScrollHeader } from '../index';

// window.addEventListener('scroll', onScrollHeader);

// import { headerEl, headerContainer, logoHeader, logoTextHeader, iconFilmHeader } from '../index';

function setDarkTheme() {
  document.body.classList.add('dark');

  refs.btnIconMoonEl.classList.remove('btn-icon-hidden');
  refs.btnIconSunEl.classList.add('btn-icon-hidden');
  refs.headerContainerEl.classList.remove('header-filmoteka');
  refs.headerContainerEl.classList.add('header-container-dark');
  localStorage.theme = 'dark';
}

function setLightTheme() {
  document.body.classList.remove('dark');

  refs.btnIconSunEl.classList.remove('btn-icon-hidden');
  refs.btnIconMoonEl.classList.add('btn-icon-hidden');
  refs.headerContainerEl.classList.remove('header-container-dark');
  refs.headerContainerEl.classList.add('header-filmoteka');
  localStorage.theme = 'light';
}

refs.btnThemeEl.addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    setLightTheme();
  } else {
    setDarkTheme();
  }

  if (
    localStorage.theme === 'dark' &&
    JSON.parse(localStorage.getItem('pageYOffset')) > refs.headerEl.offsetTop
  ) {
    refs.headerContainerEl.classList.add('fixed-header-dark');
    //   localStorage.setItem('pageYOffset', JSON.stringify(window.pageYOffset));
  } else {
    refs.headerContainerEl.classList.remove('fixed-header-dark');
  }
});

if (localStorage.theme === 'dark') {
  setDarkTheme();
}
