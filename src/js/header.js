const refs = {
  openMenuBtn: document.querySelector('[data-menu-open]'),

  openModalBtnSingUp: document.querySelector(
    'button[data-modal-start-open--sing-up]'
  ),
  navBtn: document.querySelector('.nav-list__button'),
  loginBtn: document.querySelector('.login-btn'),
  menu: document.querySelector('[data-menu]'),
  body: document.querySelector('body'),
  menuList: document.querySelector('.nav-list'),
  logOutBtn: document.querySelector('.login-btn-out'),
};

refs.openMenuBtn.addEventListener('click', () => {
  refs.menu.classList.toggle('mobile-is-hidden');
  refs.body.classList.toggle('no-scroll');

  refs.menuList.classList.toggle('nav-hidden');
  refs.logOutBtn.classList.toggle('nav-hidden');
  refs.loginBtn.classList.toggle('nav-hidden');
});

refs.navBtn.addEventListener('click', () => {
  refs.logOutBtn.classList.toggle('nav-hidden');
  refs.loginBtn.classList.toggle('nav-hidden');
  refs.menuList.classList.toggle('nav-hidden');
});
