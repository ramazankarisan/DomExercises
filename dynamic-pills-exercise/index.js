let aside = document.querySelector('aside');
let movies = document.querySelectorAll('section');

aside.addEventListener('click', e => {
  if (e.target.tagName == 'LI') {
    [...aside.children].map(item => {
      if (item.classList.contains('selected')) {
        item.classList.remove('selected')
      }
    });
    [...movies].map(item => {
      if (item.firstElementChild.innerText == e.target.innerText) {
        item.classList.add('active')
      } else {
        item.classList.remove('active')
      }
    });
    e.target.classList.toggle('selected');
  }
});
