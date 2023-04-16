
import renderMarkup from './index.js'
    
function handleLibrary() {

    const watchedBtn = document.querySelector('.watched');
    const queueBtn = document.querySelector('.queue');

    renderLibrary();

    watchedBtn.addEventListener('click', handleWatchedBtn);
    queueBtn.addEventListener('click',  handleQueueBtn);
};

    // перевірка сховища
function renderLibrary() {
    const watchedFilms = JSON.parse(localStorage.getItem('назва ключа або обєкту збереженого в сховищі '));
    const queueFilms = JSON.parse(localStorage.getItem('назва ключа або обєкту збереженого в сховищі '));
  
    if (watchedFilms.length <= 0 && queueFilms.length <= 0) {

  refs.galleryContainerEl.style.backgroundImage = 'url("./images/Creyhound-film.jpg")';
  refs.galleryContainerEl.style.backgroundPosition = 'center';
  refs.galleryContainerEl.style.backgroundSize = 'cover';
       
    }
    else {
        renderMarkup(watchedFilms)
    }
};
    
    function handleWatchedBtn() {
        renderMarkup(watchedFilms)
};
    
    function handleQueueBtn() {
     renderMarkup(queueFilms)
};

