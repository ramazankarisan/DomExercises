let addition = document.querySelector('.addition');
let subtraction = document.querySelector('.subtraction');
let multiplication = document.querySelector('.multiplication');
let division = document.querySelector('.division');
let modulo = document.querySelector('.modulo');

function calculate() {
  addition.lastElementChild.value = parseFloat(addition.firstElementChild.value) + parseFloat(addition.firstElementChild.nextElementSibling.value);

  subtraction.lastElementChild.value = parseFloat(subtraction.firstElementChild.value) - parseFloat(subtraction.firstElementChild.nextElementSibling.value);

  multiplication.lastElementChild.value = parseFloat(multiplication.firstElementChild.value) * parseFloat(multiplication.firstElementChild.nextElementSibling.value);

  division.lastElementChild.value = parseFloat(division.firstElementChild.value) / parseFloat(division.firstElementChild.nextElementSibling.value);

  modulo.lastElementChild.value = parseFloat(modulo.firstElementChild.value) % parseFloat(modulo.firstElementChild.nextElementSibling.value);
}

document.addEventListener('keyup', calculate);

