const slider = document.querySelector('.switch__input');

const currentTheme = localStorage.getItem('theme');

if (currentTheme == 'dark') {
  document.body.classList.add('theme-dark');
}

slider.addEventListener('click', function () {
  document.body.classList.toggle('theme-dark');

  let theme = 'light';

  if (document.body.classList.contains('theme-dark')) {
    theme = 'dark';
  }

  localStorage.setItem('theme', theme);
});
