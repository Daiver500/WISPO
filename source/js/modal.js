'"use strict';

const modal = () => {
  const openModalButton = document.querySelector('.intro__button');
  const headerButtonMobile = document.querySelector('.header__button-mobile');
  const closeModalButton = document.querySelector('.modal__close');
  const modalWindow = document.querySelector('.modal');
  const modalWindowSuccess = document.querySelector('.modal-success');
  const closeModalSuccessButton = document.querySelector('.modal-success__close');
  const body = document.getElementsByTagName('body');
  const submitButton = document.querySelector('.modal__button');
  const modalPhone = document.querySelector('.modal__phone');
  const MAX_CHARS = 16;

  const escPressHandler = (evt) => {
    if (evt.code === 'Escape' && modalWindow) {
      closeModal();
    }
    if (evt.code === 'Escape' && modalWindowSuccess) {
      closeModalSuccess();
    }
  };

  const windowClickHandler = (evt) => {
    const target = evt.target;
    if (target === modalWindow) {
      closeModal();
    }

    if (target === modalWindowSuccess) {
      closeModalSuccess();
    }
  };

  const openModal = () => {
    modalWindow.classList.add('is-active');
    document.addEventListener('submit', modalSubmit);
    document.addEventListener('keydown', escPressHandler);
    document.addEventListener('click', windowClickHandler);
    modalPhone.addEventListener('keyup', validateCardNumber);
    modalPhone.addEventListener('keydown', validateCardNumber);
    body[0].classList.add('no-scroll');
    body[0].style.paddingRight = '17px';
  };

  const closeModal = () => {
    modalWindow.classList.remove('is-active');
    document.removeEventListener('submit', modalSubmit);
    document.removeEventListener('keydown', escPressHandler);
    document.removeEventListener('click', windowClickHandler);
    modalPhone.addEventListener('keyup', validateCardNumber);
    modalPhone.addEventListener('keydown', validateCardNumber);
    body[0].classList.remove('no-scroll');
    body[0].style.paddingRight = '0';
  };


  const closeModalSuccess = () => {
    modalWindowSuccess.classList.remove('is-active');
    document.removeEventListener('keydown', escPressHandler);
    document.removeEventListener('click', windowClickHandler);
  };

  const validateCardNumber = () => {
    if (modalPhone.value.length === MAX_CHARS) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  };


  const modalSubmit = (evt) => {
    evt.preventDefault();
    closeModal();
    modalWindowSuccess.classList.add('is-active');
    document.addEventListener('keydown', escPressHandler);
    document.addEventListener('click', windowClickHandler);
  };

  openModalButton.addEventListener('click', openModal);
  headerButtonMobile.addEventListener('click', openModal);
  closeModalButton.addEventListener('click', closeModal);
  closeModalSuccessButton.addEventListener('click', closeModalSuccess);

};

export {modal};
