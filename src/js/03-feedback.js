import throttle from 'lodash.throttle';

const refs = {
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
  form: document.querySelector('.feedback-form'),
};
const formdata = {};

onDownloadPage();

function onFormInput(e) {
  formdata[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formdata));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onDownloadPage() {
  const savedDataForm = localStorage.getItem('feedback-form-state');

  if (savedDataForm) {
    formdata.email = JSON.parse(localStorage.getItem('feedback-form-state')).email;
    formdata.message = JSON.parse(localStorage.getItem('feedback-form-state')).message;
    refs.input.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
    refs.textarea.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;
  }
}

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);
