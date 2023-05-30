(() => {
  const refs = {
    openModalBtnSingUp: document.querySelector(
      'button[data-modal-start-open--sing-up]'
    ),
    closeModalBtnXClose: document.querySelector(
      'button[data-modal-start-close]'
    ),
    formEl: document.querySelector('[data-modal-start]'),
    // Mobile menu 
    menu: document.querySelector('[data-menu]'),
    menuList: document.querySelector('.nav-list'),
    loginBtn: document.querySelector('.login-btn'),
    logOutBtn: document.querySelector('.login-btn-out'),
  };

  refs.openModalBtnSingUp.addEventListener('click', toggleModal);
  refs.closeModalBtnXClose.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.formEl.classList.toggle('is-hidden-start');
    refs.formEl.classList.toggle('display');
    
 
    if (refs.formEl.classList.contains('display')) {
      refs.logOutBtn.classList.add('nav-hidden');
      refs.loginBtn.classList.add('nav-hidden');
      refs.menuList.classList.add('nav-hidden');
      refs.menu.classList.add('mobile-is-hidden');
}
  }
})();





