let heading1 = document.querySelector('h1');
let elemInfo = document.querySelector('.info');

// Select the header that is the closest to the first h1 heading. Give the header a solid border of 5px.
let closestHeader = heading1.closest('header');
closestHeader.style.border = "5px solid";

// If the .info section contains an .info-package, select all package-titles and give the title's previous element a border.
if ([...elemInfo.children].filter(elem => elem.closest('.info-package'))) {
  document.querySelectorAll('.package-title').forEach(element => element.previousElementSibling.style.border = '2px solid')
};

// Check if the label's class matches "mild". If so, give the label a yellow solid border. If the label's class matches "intense", give the label an orange solid border. If the class does not match either, give the label a red solid border.
let elemLabel = document.getElementsByTagName('label');
[...elemLabel].forEach(elem => {
  if (elem.classList.contains('mild')) {
    elem.style.border = "yellow solid 3px"
  } else if (elem.classList.contains('intense')) {
    elem.style.border = "orange solid 3px"
  } else {
    elem.style.border = "red solid 3px"
  }
});

// Add all the children of the .nav-list to the footer's unordered list, .site-map. Note: the .nav-list should still contain its children.
let elemNavList = document.querySelector('.nav-list');
let elemFooter = document.querySelector('.site-map');

let elemNavList_clone = elemNavList.cloneNode(true); // to keep the original ones still inside of the nav-list
elemFooter.append(...[...elemNavList_clone.children]);

