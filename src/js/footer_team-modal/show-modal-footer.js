export class Modal {
  constructor({ onShow, onClose } = {}) {
    this.onShow = onShow;
    this.onClose = onClose;
    this.backdrop = null;
  }
  async open(markup) {
    const template = modalTemplate(markup);
    document.body.insertAdjacentHTML('afterend', template);
    document.body.classList.add('modal-open');
    this.backdrop = document.querySelector('.backdrop');

    this.backdrop.addEventListener('click',  this.onBackdropClose);
    document.querySelector('.modal-close').addEventListener('click', this.onCloseClick);
    window.addEventListener('keyup', this.onEscClose);
    if (this.onShow) this.onShow();

  }

  close() {
    const backdrop = document.querySelector('.backdrop');
    backdrop.remove();
    document.body.classList.remove('modal-open');
    this.backdrop.removeEventListener('click', this.onBackdropClose);
    document.querySelector('.modal-close').removeEventListener('click', this.onCloseClick);
    window.removeEventListener('keyup', this.onEscClose);

    if (this.onClose) this.onClose();
  }

  onBackdropClose = (e) => {
    this.close();
  };
}