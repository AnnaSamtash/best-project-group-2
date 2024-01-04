(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mobil-menu-open]'),
    closeModalBtn: document.querySelector('[data-mobil-menu-close]'),
    modal: document.querySelector('[data-mobil-menu]'),
    menuLinks: document.querySelectorAll('.mob-menu-navigation-link'), // Додано цей рядок
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  // Додаємо обробники подій для кожного посилання в меню
  refs.menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleModal(); // Закриваємо меню при кліці на посилання
    });
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
