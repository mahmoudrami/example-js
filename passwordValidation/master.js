let passwordInput = document.querySelector("#password");
let lengthValidation = document.querySelector("#lengthValidation");
let digitValidation = document.querySelector("#digitValidation");
let lowerValidation = document.querySelector("#lowerValidation");
let upperValidation = document.querySelector("#upperValidation");
let specialValidation = document.querySelector("#specialValidation");
let sendForm = document.querySelector("#sendForm");

passwordInput.onkeyup = (e) => {
  value = passwordInput.value;
  let errors = [];
  document.querySelector("#passwordValidation").style.display = "block";
  if (value.length >= 8) {
    lengthValidation.style.color = "green";
  } else {
    lengthValidation.style.color = "red";
    errors.push("lengthValidation");
  }
  if (value.match(/[0-9]/g)) {
    digitValidation.style.color = "green";
  } else {
    digitValidation.style.color = "red";
    errors.push("digitValidation");
  }
  if (value.match(/[a-z]/g)) {
    lowerValidation.style.color = "green";
  } else {
    lowerValidation.style.color = "red";
    errors.push("lowerValidation");
  }
  if (value.match(/[A-Z]/g)) {
    upperValidation.style.color = "green";
  } else {
    upperValidation.style.color = "red";
    errors.push("upperValidation");
  }
  if (value.match(/[@#%&$^*]/g)) {
    specialValidation.style.color = "green";
  } else {
    specialValidation.style.color = "red";
    errors.push("specialValidation");
  }
  if (errors.length > 0) {
    sendForm.setAttribute("disabled", "disabled");
  } else {
    sendForm.removeAttribute("disabled");
  }
};
