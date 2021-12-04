# Baking Box

Populate a website with details of recipes!

**Installation**:

* clone the repository and run `npm install`


**Instructions**:
* In the `data.js` file, you can find a data structure for the details of recipes. 
* create `data.json` file using the `recipes` object from data.js
* Import the JSON file into the `index.js` file.
* you need to install bootstrap using npm and import the css file to `index.html`
```js
import 'bootstrap/dist/css/bootstrap.min.css' ;
```
* In the `index.js` file, create a program that populates the data from the JSON string onto the website page. The page should display every recipe as a card which includes  the recipe image, title, author and ingredients. 
* Make sure that each recipe is populated in the **correct** section, that is, cake recipes should be under the section "cakes" etc. 
> you can check the card component form bootstrap from this  : [link](https://getbootstrap.com/docs/5.0/components/card/)

![Populated baked goods](images/bakery.png)