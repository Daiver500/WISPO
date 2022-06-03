const mask = () => {

  const modalPhone = document.querySelector('.modal__phone');

  let maskOptionsPhone = {
    mask: '+0 000 000 00 00',
  };

  const maskCard = IMask(modalPhone, maskOptionsPhone);
};

export {mask};
