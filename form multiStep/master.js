let currentStep = 0;
let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");
let indicators = document.querySelectorAll(".indicator ul li");
let steps = document.querySelectorAll(".step");

prevBtn.onclick = (e) => {
  e.preventDefault();
  currentStep--;
  updateStep();
};
nextBtn.onclick = (e) => {
  let errors = [];
  steps[currentStep].querySelectorAll("input").forEach((el) => {
    if (el.value == "") {
      errors.push(el.name + "required");
      el.style.borderColor = "red";
    } else {
      el.style.border = "#eee";
    }
  });
  if (errors.length > 0) {
    e.preventDefault();
    return;
  }

  if (currentStep == steps.length - 1) return;
  e.preventDefault();

  currentStep++;
  updateStep();
};

function updateStep() {
  if (currentStep == 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }
  indicators.forEach((el) => el.classList.remove("active"));
  for (let i = 0; i <= currentStep; i++) {
    indicators[i].classList.add("active");
  }
  steps.forEach((el) => el.classList.remove("active"));
  indicators[currentStep].classList.add("active");
  steps[currentStep].classList.add("active");
}

updateStep();
