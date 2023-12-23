(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mobil-menu-open]'),
    closeModalBtn: document.querySelector('[data-mobil-menu-close]'),
    modal: document.querySelector('[data-mobil-menu-help]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();