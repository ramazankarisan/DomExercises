const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';
let button = document.querySelector('.btn');
let password = document.querySelector('.password');
let input = document.querySelector('.form-control');
let check = document.querySelector('#useMixedCase');

function createPass(length, mixedCase) {
  let newStr = '';
  for (let i = 1; i <= length; i++) {
    if ((i % 3 == 0) && mixedCase) {
      newStr += charset[getRandomInt()].toUpperCase();
    } else {

      newStr += charset[getRandomInt()]
    }
  }
  return newStr;
}

function getRandomInt() {
  return Math.floor(Math.random() * charset.length);
};


button.onclick = function () {
  password.innerText = createPass(input.value, check.checked)
}
function init() {
  password.innerText = createPass(20, true)
};
init();
;