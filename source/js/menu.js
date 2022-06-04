'use strict';

const mainMenu = () => {

  const headerButtonMobile = document.querySelector('.header__button-mobile');
  const openMenuButton = document.querySelector('.header__toggle--open');
  const closeMenuButton = document.querySelector('.header__toggle--close');
  const navigationMenu = document.querySelector('.navigation__list');
  const headerTopWrapper = document.querySelector('.header__top-wrapper');
  const headerBottom = document.querySelector('.header__bottom');
  const headerLogoMobile = document.querySelector('.header__logo');
  const headerTitleMobile = document.querySelector('.header__title-mobile');
  const headerContacts = document.querySelector('.header__contacts');
  const navigationItemApple = document.querySelector('.navigation__item--apple');
  const navigationLinkApple = document.querySelector('.navigation__item--apple .navigation__link');
  const navigationSubLinkIphone = document.querySelector('.navigation__item--apple .navigation__sublink--iphone');
  const navigationSubLinkIpad = document.querySelector('.navigation__item--apple .navigation__sublink--ipad');
  const navigationSubLinkMacbook = document.querySelector('.navigation__item--apple .navigation__sublink--macbook');
  const navigationItemCatalog = document.querySelector('.navigation__item--catalog');
  const navigationItems = document.querySelectorAll('.navigation__item');
  const navigationItemsMobile = document.querySelectorAll('.navigation__item--add');
  const headerArrowButton = document.querySelector('.header__arrow-button');

  const body = document.getElementsByTagName('body');

  navigationItemsMobile.forEach((item) => {
    item.classList.add('is-hidden');
  });

  const productArray = [
    {
      product: 'Iphone',
      class: 'navigation__item--iphone',
    },
    {
      product: 'Ipad',
      class: 'navigation__item--ipad',
    },
    {
      product: 'Macbook',
      class: 'navigation__item--macbook',
    }
  ];

  const iphones = [
    {
      product: 'iphone 4',
      class: 'navigation__item--phone',
    },
    {
      product: 'iphone 5',
      class: 'navigation__item--phone',
    },
    {
      product: 'iphone 6',
      class: 'navigation__item--phone',
    },
    {
      product: 'iphone 7',
      class: 'navigation__item--phone',
    },
    {
      product: 'iphone 8',
      class: 'navigation__item--phone',
    }
  ];

  const ipads = [
    {
      product: 'ipad5',
    },
    {
      product: 'ipad6',
    },
    {
      product: 'ipad7',
    },
    {
      product: 'ipad8',
    },
    {
      product: 'ipad9',
    }
  ];

  const macbooks = [
    {
      product: 'macbook',
    },
    {
      product: 'macbook air',
    },
    {
      product: 'macbook pro',
    }
  ];

  const openMenu = () => {
    openMenuButton.classList.add('is-hidden');
    headerLogoMobile.classList.add('is-hidden');
    headerContacts.classList.add('is-hidden');
    headerButtonMobile.classList.add('is-hidden');
    closeMenuButton.classList.remove('is-hidden');
    headerTitleMobile.classList.remove('is-hidden');
    headerTopWrapper.style.flexDirection = 'row';
    headerBottom.classList.add('is-open');
    navigationMenu.classList.add('is-active');
    body[0].classList.add('no-scroll');
    navigationItemsMobile.forEach((item) => {
      item.classList.remove('is-hidden');
    });
  };

  const closeMenu = () => {
    openMenuButton.classList.remove('is-hidden');
    headerLogoMobile.classList.remove('is-hidden');
    headerContacts.classList.remove('is-hidden');
    headerButtonMobile.classList.remove('is-hidden');
    closeMenuButton.classList.add('is-hidden');
    headerTitleMobile.classList.add('is-hidden');
    headerTopWrapper.style.flexDirection = 'column';
    headerBottom.classList.remove('is-open');
    navigationMenu.classList.remove('is-active');
    body[0].classList.remove('no-scroll');
    navigationItems.forEach((item) => {
      item.classList.remove('is-hidden');
    });
    navigationItemsMobile.forEach((item) => {
      item.classList.add('is-hidden');
    });
    headerTitleMobile.textContent = 'Меню';
    headerTitleMobile.style.fontSize = '24px';
    headerTitleMobile.style.lineHeight = '29px';
    headerTitleMobile.style.paddingLeft = '0';
    headerArrowButton.style.display = 'none';
  };

  openMenuButton.addEventListener('click', openMenu);
  closeMenuButton.addEventListener('click', closeMenu);

  let menuCards;
  const createCard = (item) => {
    const newCard = document.createElement('li');
    newCard.classList.add('navigation__item');
    newCard.classList.add('navigation__item--new');
    newCard.classList.add(`${item.class}`);
    newCard.innerHTML = `
    <a class="navigation__link" href="#" target="_blank">${item.product}</a>`;
    navigationMenu.append(newCard);
  };

  const fillCardsList = (data) => {
    data.forEach((item) => {
      createCard(item);
    });
    menuCards = document.querySelectorAll('.navigation__item');
  };


  navigationItemApple.addEventListener('click', (evt) => {
    evt.preventDefault();
    navigationItems.forEach((item) => {
      item.classList.add('is-hidden');
    });
    fillCardsList(productArray);
    headerTitleMobile.textContent = navigationLinkApple.textContent;
    headerTitleMobile.style.fontSize = '14px';
    headerTitleMobile.style.lineHeight = '17px';
    headerTitleMobile.style.paddingLeft = '15px';
  });

  navigationMenu.addEventListener('click', (evt) => {
    let target = evt.target.closest('.navigation__item--iphone');
    let targetIpad = evt.target.closest('.navigation__item--ipad');
    let targetIphone = evt.target.closest('.navigation__item--macbook');
    headerArrowButton.style.display = 'block';
    const navigationItemsNew = document.querySelectorAll('.navigation__item--new');
    if (target) {
      evt.preventDefault();
      navigationItemsNew.forEach((item) => {
        item.style.display = 'none';
      });
      fillCardsList(iphones);
      headerTitleMobile.textContent = navigationSubLinkIphone.textContent;
    }
    if (targetIpad) {
      evt.preventDefault();
      navigationItemsNew.forEach((item) => {
        item.style.display = 'none';
      });
      fillCardsList(ipads);
      headerTitleMobile.textContent = navigationSubLinkIpad.textContent;
    }
    if (targetIphone) {
      evt.preventDefault();
      navigationItemsNew.forEach((item) => {
        item.style.display = 'none';
      });
      fillCardsList(macbooks);
      headerTitleMobile.textContent = navigationSubLinkMacbook.textContent;
    }
    closeMenuButton.addEventListener('click', () => {
      const navigationItemsNewNew = document.querySelectorAll('.navigation__item--new');
      navigationItemsNewNew.forEach((item) => {
        item.remove();
      });
      navigationItemCatalog.style.display = 'none';
    });
  });
};


export {mainMenu};
