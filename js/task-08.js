const loginForm = document.querySelector('.login-form');

const dataForm = {}

const checkForm = function (event) {
   const {
    elements: { email, password }
  } = event.currentTarget;

    event.preventDefault();

    if (email.value === "" || password.value === "") {
        alert("Поле 'email' і поле 'password' повинні бути заповнені")
    } else {
        dataForm.email = email.value;
        dataForm.password = password.value;
        loginForm.reset();

    }
}



loginForm.addEventListener('submit', checkForm);


