// Form Validation in DOM in Javascript

let form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = false;
  let formData = [];
  [...this.elements].forEach((el) => {
    if (el.type !== "submit") {
      isValid = Validator(el);
      if (isValid) {
        formData[el.name] = el.value;
      } else {
        //   alert(`${el.name} is required`);
        el.classList.add("is-invalid");
      }
    }
  });
  if (isValid) {
    console.log(formData);
    this.reset();
  }
});

function Validator(el) {
  if (!el.value) {
    return false;
  }
  return true;
}
