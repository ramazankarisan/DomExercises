let button = document.querySelector('.btn');
let list = document.querySelector('.list-group');
let listAll = document.querySelectorAll('.list-group-item');
let elemP = document.querySelector('.selected');


function btnClick() {
  list.classList.toggle('d-none');
  button.innerText = btnNameChange(button)
  elemP.innerHTML = ''
}
function btnNameChange(param) {
  if (param.innerText == 'Hide Destinations') {
    return 'Show Destinations';
  } else {
    return 'Hide Destinations';
  }
}

listAll.forEach(item => item.addEventListener('click', () => {
  if (item.classList.contains('active')) {
    item.classList.remove('active');
    elemP.innerHTML = ''

  } else {
    item.classList.add('active');
    elemP.innerHTML = `<b><i> You selected ${item.innerText}!</i ></b >`;
    elemP.style.background = 'lightgreen'


  }
}))

// list.addEventListener('click', e => {
//   if (e.target.tagName == 'LI' && toString([...listAll].filter(i => { return i.classList.contains('active') }))) {
//     e.target.classList.toggle('active');
//   }
// })
// console.log([...listAll].filter(i => { return console.log(i.classList.contains('active')) }));
// console.log([...listAll]);