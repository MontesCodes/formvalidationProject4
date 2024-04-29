const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
// Prevent browser default behaviour
form.addEventListener('submit', e => {
  e.preventDefault();
  let validationResults = checkInputValidations();
  if (validationResults) {
    swal('Form Submitted!', ' Successfully', 'success');
  } else {
    swal('Form Submission!', 'Was a Failure', 'error');
  }
});
function checkInputValidations() {
  let isThisValid = new Array();
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();
  // checking if the name field is empty
  if (nameValue === '') {
    setErrorFor(name, 'Name field cannot be blank');
    isThisValid.push(false);
  } else {
    isThisValid.push(true);
    setSuccessFor(name);
  }
  // checking if the email field is empty or a valid email
  if (emailValue === '') {
    isThisValid.push(false);
    setErrorFor(email, 'Email field cannot be blank');
  } else if (
    emailValue.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
  ) {
    isThisValid.push(true);
    setSuccessFor(email);
  } else {
    isThisValid.push(false);
    setErrorFor(email, 'Received Email is not valid');
  }

  // checking if the password field is empty
  if (passwordValue === '') {
    isThisValid.push(false);
    setErrorFor(password, 'Password field cannot be blank');
  } else {
    isThisValid.push(true);
    setSuccessFor(password);
  }
  if (confirmPasswordValue === '') {
    isThisValid.push(false);
    setErrorFor(confirmPassword, 'Confirm Password field cannot be blank');
  } else if (passwordValue !== confirmPasswordValue) {
    isThisValid.push(false);
    setErrorFor(confirmPassword, 'Passwords do not match');
  } else {
    isThisValid.push(true);
    setSuccessFor(confirmPassword);
  }
  if (isThisValid.includes(false)) {
    return false;
  } else {
    return true;
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control error';
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
