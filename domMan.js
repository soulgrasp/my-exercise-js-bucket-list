/* 

// get element by id
const listDesc = document.getElementById('section-list');

//console.log(listDesc);

// getElementByClassname
const pTags = document.getElementsByClassName('content');
// console.log(pTags);


// getElementByName  // searches the name attribut (input elements)
// getElementsByTagname

// querySelector  Search element by the css syntax
// takes a string 
// is applicable on HTML as well as the document object
const item = document.querySelector('.item'); // CSS syntax selector, same as stylesheet
// console.log(item);

const mainSection = document.querySelector("#main-section");
// console.log(mainSection);

// alternative 1  searching from document top
const nestedItem = document.querySelector("#main-section .item"); // Id selector CSS style
// gets the span element hits section on ID and the class selector "item" get the span element
// console.log(nestedItem);

// alternative way search from parent element
const nestedItem2 = mainSection.querySelector(".item");
// console.log(nestedItem2);

// querySelectorAll  takes css selector returns nodelist
const paragraphs = document.querySelectorAll(".para");
// console.log(paragraphs);
const firstParag = paragraphs[1];
// console.log(firstParag);

// innerText  respect display: none
const article = document.querySelector(".article");
// console.log(article);
// console.log(article.innerHTML); // print the text


article.innerText = "This is the modded text of article";
// console.log(article.innerText);


// textContent prints it all
const anotherArticle = document.querySelector(".another-article");
// console.log(anotherArticle);
// console.log(anotherArticle.innerText);
// console.log(anotherArticle.textContent);


// Style
const paragraph = document.querySelector(".paragraph");
// console.log(paragraph);
paragraph.style.color = "green";  // color
// console.log("color of p tag is: ", paragraph.style.color);
// console.log(paragraph.style); // shows all styling in styling object
paragraph.style.fontSize = "2rem"; // font size  Camelcase convention from "style="color: red""

//  createElement   
const article2 = document.createElement("article");  // exists now in memory not attached to DOM
// article2.innerText = "this is an article";
console.log(article2);

// appendChild  add a node as the last child of an element
document.body  // get element

// attach to existing element
document.body.appendChild(article2); */

// in most cases we don't want to use the body element
// add article inside the section element

/* const article3 = document.createElement("article");
article3.innerText = "This is the modded text of article, Delete me";
const section = document.querySelector(".section-new");
section.appendChild(article3); */


// classlist  property on every element, class="something" is contained within this, dom-token-list arraytype
// read only but have access functions/methods to manipulate it.
// use list-name class

/* article3.classList.add("green-bg", "show"); // add classes
console.log(article3);
console.log(article3.classList); // output classes
article3.classList.remove("show"); // remove
console.log(article3.classList); // output classes */

// insertAdjacentElement  Add element on a spec position with more precistion
// afterbegin   first child
// afterend     after the element
// beforebegin  before the element
// beforeend    last child


/* const div = document.createElement("div");
div.innerText= "this is a div innerText";
div.classList.add("div-content");


const sectionL1 = document.querySelector(".list");
console.log(sectionL1);
sectionL1.insertAdjacentElement("beforeend", div); */


// 




