const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelectorAll('.modal-btn-open');
const modalBtnClose = document.querySelectorAll('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen[0].addEventListener('click', toggleModal);
modalBtnOpen[1].addEventListener('click', toggleModal);

modalBtnClose[0].addEventListener('click', toggleModal);
modalBtnClose[1].addEventListener('click', toggleModal);
