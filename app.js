// // Global variables
// const freeTrialForm = document.querySelector(".free-trial");
// const formInputs = document.querySelectorAll("input");
// const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// // Helper functions
// function checkInputs(e) {
//   e.preventDefault();
//   formInputs.forEach((input) => {
//     let input = input.parentElement;
//     let changes = input.querySelector("p");
//     if (input.value.length === 0) {
//       input.classList.add("require-changes");
//       changes.innerHTML = `${input.dataset.input} cannot be empty`;
//     } else if (input.name === "email" && !emailReg.test(input.value)) {
//       input.classList.add("require-changes");
//       changes.innerHTML = `looks like this is not an email`;
//     }
//   });
// }

// function removeWarning() {
//   if (!this.parentElement.classList.contains("require-changes")) return;
//   this.parentElement.classList.remove("require-changes");
// }

// // Main
// freeTrialForm.addEventListener("submit", checkInputs);

// formInputs.forEach((input) => input.addEventListener("input", removeWarning));

// const btn = document.getElementById("btn");
// const textErr = document.getElementsByClassName("text-error");
// const inputs = document.querySelectorAll("input");
// const inputCont = document.getElementsByClassName("input");
// const iconR = document.getElementsByClassName("icon-error");

// btn.addEventListener("click", () => {
//   for (let i = 0; i < inputs.length; i++) {
//     if (inputs[i].value === "") {
//       textErr[i].style.display = "block";
//       inputCont[i].style.outline = ".3rem solid hsl(0, 100%, 74%)";
//       iconR[i].style.display = "block";
//     } else {
//       textErr[i].style.display = "none";
//       inputCont[i].style.outline = "1px solid hsl(246, 25%, 77%)";
//       iconR[i].style.display = "none";
//     }
//   }
// });

const signupForm = document.getElementsById("signup__form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const password = document.getElementById("password");
const email = document.getElementById("email");
// add an event listener to the form for the submit event
signupForm.addEventListener("submit", submitForm);

signupForm.addEventListener("input", (event) => {
  event.target.parentElement.classList.remove("invalid");
});

// handle form submission
function submitForm(event) {
  event.preventDefault();
  validateInput(lastName);
  validateInput(firstName);
  validateEmail(email);
  validatePassword(password);
  // if there is no invalid input, allow form to get submitted
  if (!document.getElementsByClassName("invalid").length) {
    signupForm.removeEventListener("submit", submitForm);
    signupForm.submit();
  }
}

function validateInput(element) {
  // check if input is empty
  if (!element.value) {
    return element.parentElement.classList.add("invalid");
  }
  // remove invalid class
  element.parentElement.classList.remove("invalid");
}

// validate email
function validateEmail(element) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(element.value)) {
    element.parentElement.classList.add("invalid");
    element.nextElementSibling.innerText = element.value
      ? "Looks like this is not an email"
      : "Email cannot be empty";
  } else {
    element.parentElement.classList.remove("invalid");
  }
}

// validate password
function validatePassword(element) {
  const lengthRegex = /^.{8,}$/;
  if (!lengthRegex.test(element.value)) {
    element.parentElement.classList.add("invalid");
    element.nextElementSibling.innerText = element.value
      ? "Password has to be at least 8 characters long"
      : "Password cannot be empty";
  } else {
    element.parentElement.classList.remove("invalid");
  }
}
