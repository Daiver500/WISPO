'"use strict';

const modal = () => {
  const openModalButton = document.querySelector('.intro__button');
  const closeModalButton = document.querySelector('.modal__close');
  const modalWindow = document.querySelector('.modal');
  const modalWindowSuccess = document.querySelector('.modal-success');
  const body = document.getElementsByTagName('body');

  const escPressHandler = (evt) => {
    if (evt.code === 'Escape') {
      closeModal();
    }
  };

  const windowClickHandler = (evt) => {
    const target = evt.target;
    if (target === modalWindow) {
      closeModal();
    }
  };

  const openModal = () => {
    modalWindow.classList.add('is-active');
    document.addEventListener('submit', modalSubmit);
    document.addEventListener('keydown', escPressHandler);
    document.addEventListener('click', windowClickHandler);
    body[0].classList.add('no-scroll');
  };

  const closeModal = () => {
    modalWindow.classList.remove('is-active');
    document.removeEventListener('submit', modalSubmit);
    document.removeEventListener('keydown', escPressHandler);
    document.removeEventListener('click', windowClickHandler);
    body[0].classList.remove('no-scroll');
  };

  const modalSubmit = (evt) => {
    evt.preventDefault();
    closeModal();
    body[0].classList.add('no-scroll');
    modalWindowSuccess.classList.add('is-active');
  };

  openModalButton.addEventListener('click', openModal);
  closeModalButton.addEventListener('click', closeModal);

};

export {modal};
