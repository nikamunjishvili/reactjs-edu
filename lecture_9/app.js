// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const submit = document.getElementById("submit");

// function validateForm() {
//   const usernameRegex = /^[a-zA-Z0-9._]{3,15}$/;
//   const passwordRegex =
//     /^(?=.*[a-z].*[a-z])(?=.*[A-Z].*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//   const isValidUserName = usernameRegex.test(username.value);
//   const isValidEmail = emailRegex.test(email.value);
//   const isValidPassword = passwordRegex.test(password.value);

//   submit.disabled = true;

//   document.getElementById("username_error").style.display = isValidUserName
//     ? "none"
//     : "block";
//   document.getElementById("email_error").style.display = isValidEmail
//     ? "none"
//     : "block";
//   document.getElementById("password_error").style.display = isValidPassword
//     ? "none"
//     : "block";

//     submit.disabled = !(isValidUserName && isValidEmail && isValidPassword)
// }

// function validateForm() {
//   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
//   const passwordRegex = /^(?=.[0-9])(?=.[a-z])(?=.[A-Z])(?=.\W)(?!.* ).{8,16}$/;

//   const emailValue = e.target.value;
//   const passwordValue = e.target.value;
//   const validEmail = emailRegex.test(emailValue);
//   const validPassword = passwordRegex.test(passwordValue);

//   document.getElementById("email_error").style.display = validEmail
//     ? "none"
//     : "flex";
//   document.getElementById("password_error").style.display = validPassword
//     ? "none"
//     : "flex";
// }

// email.addEventListener("input", validateForm);
// password.addEventListener("input", validateForm);

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

submit.disabled = true;

function formValidate() {
  const usernameRegex = /^[a-zA-Z0-9._]{3,15}$/;
  const passwordRegex =
    /^(?=.*[a-z].*[a-z])(?=.*[A-Z].*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isUserNameValid = usernameRegex.test(username.value);
  const isEmailValid = emailRegex.test(email.value);
  const isPasswordValid = passwordRegex.test(password.value);
 

  document.getElementById("username_error").style.display = isUserNameValid
    ? "none"
    : "block";
  document.getElementById("email_error").style.display = isEmailValid
    ? "none"
    : "block";
  document.getElementById("password_error").style.display = isPasswordValid
    ? "none"
    : "block";

    submit.disabled = !(isUserNameValid && isEmailValid && isPasswordValid);
}

username.addEventListener("input", formValidate);
email.addEventListener("input", formValidate);
password.addEventListener("input", formValidate);
