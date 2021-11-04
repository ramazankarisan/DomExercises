// The following line makes sure your styles are included in the project. Don't remove this.
// Import any additional modules you want to include below \/
import 'bootstrap/dist/css/bootstrap.min.css';
import { cakes, biscuits, bread } from '../../data.json';
// import dataJson  from './data';
// const dataObj = JSON.parse(dataJson)
import '../styles/main.scss';


// \/ All of your javascript should go here \/
let sectionCakes = document.querySelector('#cakes');
let sectionBiscuits = document.querySelector('#biscuits');
let sectionBread = document.querySelector('#bread');


function populatePage(arr) {
  const myLargestDiv = document.createElement('div');
  myLargestDiv.classList.add('row');
  myLargestDiv.classList.add('border-bottom');
  myLargestDiv.classList.add('py-3');
  myLargestDiv.classList.add('my-3');
  myLargestDiv.classList.add('border-warning');

  for (let i = 0; i < arr.length; i++) {
    const mySecondDiv = document.createElement('div');
    const myDiv = document.createElement('div');
    const myImg = document.createElement('img');
    const myInnerDiv = document.createElement('div');
    const myTitle = document.createElement('h5');
    const myAuthor = document.createElement('p');
    const myIngredients = document.createElement('p');

    mySecondDiv.classList.add('col-4')
    myDiv.classList.add('card');
    myDiv.classList.add('h-100');
    myDiv.style.width = '18rem';
    myImg.setAttribute('src', arr[i].image);
    myImg.classList.add('card-img-top');
    myImg.style.height = '200px'
    myInnerDiv.classList.add('card-body');
    myTitle.classList.add('card-title');
    myTitle.innerText = arr[i].title;
    myTitle.classList.add('card-text');
    myAuthor.innerText = arr[i].author;
    myAuthor.classList.add('border-bottom')
    myAuthor.classList.add('py-2')
    myIngredients.classList.add('card-text');
    myIngredients.innerText = arr[i].ingredients;

    myLargestDiv.appendChild(mySecondDiv);
    mySecondDiv.appendChild(myDiv);
    myDiv.appendChild(myImg);
    myDiv.appendChild(myInnerDiv);
    myInnerDiv.appendChild(myTitle);
    myInnerDiv.appendChild(myAuthor);
    myInnerDiv.appendChild(myIngredients);

  }
  let nameObj = arr[0].type
  switch (nameObj) {
    case 'cakes':
      sectionCakes.appendChild(myLargestDiv);
      break;

    case 'biscuits':
      sectionBiscuits.appendChild(myLargestDiv);
      break;

    case 'bread':
      sectionBread.appendChild(myLargestDiv);
      break;
    default:
      console.log('hey error');
  }

};
populatePage(cakes);
populatePage(biscuits);
populatePage(bread);
