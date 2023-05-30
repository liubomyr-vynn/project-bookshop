const formEl = document.querySelector('.modal-start');
const backdropEl = document.querySelector('.backdrop-start');
const btnSingUp = document.querySelector('.login-btn');
const btnCloseXEl = document.querySelector('.modal__button-x');
const divDataModalStartEl = document.querySelector('div[data-modal-start]');

const nameLabelEl = document.querySelector('label[for="user_person"]');
const nameInputEl = document.querySelector('#user_person');

const emailLabelEl = document.querySelector('label[for="user_email"]');
const emailInputEl = document.querySelector('#user_email');

const passwordLabelEl = document.querySelector('label[for="user_password"]');
const passwordInputEl = document.querySelector('#user_password');

nameInputEl.addEventListener('focus', e =>
  console.log((nameLabelEl.style.top = '5%'))
);
emailInputEl.addEventListener('focus', e =>
  console.log((emailLabelEl.style.top = '5%'))
);
passwordInputEl.addEventListener('focus', e =>
  console.log((passwordLabelEl.style.top = '5%'))
);

function validateForm() {
  let isValid = true;

  if (nameInputEl.value.trim() === '') {
    nameInputEl.classList.add('modal-form__field-input--error');
    isValid = false;
  } else {
    nameInputEl.classList.remove('modal-form__field-input--error');
  }

  if (emailInputEl.value.trim() === '' || !emailInputEl.checkValidity()) {
    emailInputEl.classList.add('modal-form__field-input--error');
    isValid = false;
  } else {
    emailInputEl.classList.remove('modal-form__field-input--error');
  }

  if (
    passwordInputEl.value.trim() === '' ||
    passwordInputEl.length < 5 ||
    passwordInputEl.value.length > 12
  ) {
    passwordInputEl.classList.add('modal-form__field-input--error');
    isValid = false;
  } else {
    passwordInputEl.classList.remove('modal-form__field-input--error');
  }

  return isValid;
}

formEl.addEventListener('submit', handleOnSendForm);

function handleOnSendForm(e) {
  e.preventDefault();

  if (validateForm()) {
    console.log('Form send!');

    backdropEl.classList.add('is-hidden-start');
    backdropEl.style.display = 'none';
  } else {
    console.log('Error!');
  }
}

btnSingUp.addEventListener('click', e => {
  formEl.style.display = 'block';
});

btnCloseXEl.addEventListener('click', e => {
  formEl.style.display = 'none';
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (e.key === 'Escape' && !formEl.contains(document.activeElement)) {
      formEl.classList.add('is-hidden-start');
      backdropEl.classList.add('is-hidden-start');
    }
  }
});

backdropEl.addEventListener('click', e => {
  if (formEl && e.target === backdropEl) {
    formEl.classList.add('is-hidden-start');
    backdropEl.classList.add('is-hidden-start');
  }
});

btnSingUp.addEventListener('click', e => {
  if (divDataModalStartEl.style.display === 'none') {
    divDataModalStartEl.removeAttribute('style');
    formEl.removeAttribute('style');
  }
});

const singUpEl = document.querySelector('button[aria-label="link sing up"]');
const singInEl = document.querySelector('button[aria-label="link sing in"]');

singUpEl.classList.add('active');

singUpEl.addEventListener('click', handleOnBtnSingUp);

function handleOnBtnSingUp(e) {
  e.preventDefault();
  formEl.style.height = '516px';
  singUpEl.classList.add('active');
  singInEl.classList.remove('active');
  formEl.classList.remove('sing-in');
  nameLabelEl.style.display = 'block';
  nameInputEl.style.display = 'block';
  nameInputEl.parentElement.parentElement.classList.remove('is-invalid');
  nameInputEl.parentElement.parentElement.classList.add('is-valid');
  formEl.style.height = '516px';
}

singInEl.addEventListener('click', handleOnBtnSingIn);

function handleOnBtnSingIn(e) {
  e.preventDefault();
  singInEl.classList.add('active');
  singUpEl.classList.remove('active');
  formEl.classList.remove('sing-in');

  formEl.style.height = '450px';
  nameLabelEl.style.display = 'none';
  nameInputEl.style.display = 'none';
  nameInputEl.parentElement.parentElement.classList.add('is-invalid');
  nameInputEl.parentElement.parentElement.classList.remove('is-valid');
  validateForm();
}
