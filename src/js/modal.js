(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-help-open]'),
    closeModalBtn: document.querySelector('[data-modal-help-close]'),
    modal: document.querySelector('[data-modal-help]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();