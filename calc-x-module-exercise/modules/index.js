import { modulo, percentage, percentageOf, difference } from "./percentage.js";
import { fixRoundingErrors, calculateAspectRatio } from "./aspect-ratio.js";

//Special operations

const operations = ['modulo', 'percentage', 'percentageOf', 'difference'];
operations.forEach(operation => {
  const input = [
    document.querySelector(`#${operation}_1`),
    document.querySelector(`#${operation}_2`)
  ];
  const result = document.querySelector(`#${operation}_result`);
  input.forEach(arg => {
    // clean the value of the selected field on focus
    arg.addEventListener("focus", e => {
      e.target.value = "";
    });
    //calculate 
    arg.addEventListener('keyup', () => {
      result.value = calculate(operation,
        Number(input[0].value),
        Number(input[1].value))
    })
  })
});

function calculate(operation, first, second) {
  switch (operation) {
    case "modulo":
      return modulo(first, second);
    case "percentage":
      return percentage(first, second);

    case "percentageOf":
      return percentageOf(first, second);

    case "difference":
      return difference(first, second);

    default:
      return 0;
  }
};

// aspect-ratio Calculations

let oWidth = document.querySelector('#ratio_1');
let oHeight = document.querySelector('#ratio_2');
let nWidth = document.querySelector('#ratio_result-width');
let nHeight = document.querySelector('#ratio_result-height');

nWidth.addEventListener('input', () => {
  nHeight.value = calculateAspectRatio(oWidth.value, oHeight.value, nWidth.value, 'w');

});
nHeight.addEventListener('input', () => {
  nWidth.value = calculateAspectRatio(oWidth.value, oHeight.value, nHeight.value, 'h');
});
