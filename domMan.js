

// get element by id
const listDesc = document.getElementById('section-list');

console.log(listDesc);

// getElementByClassname
const pTags = document.getElementsByClassName('content');
console.log(pTags);


// getElementByName  // searches the name attribut (input elements)
// getElementsByTagname

// querySelector  Search element by the css syntax
// takes a string 
// is applicable on HTML as well as the document object
const item = document.querySelector('.item'); // CSS syntax selector, same as stylesheet
console.log(item);

const mainSection = document.querySelector("#main-section");
console.log(mainSection);

// alternative 1  searching from document top
const nestedItem = document.querySelector("#main-section .item"); // Id selector CSS style
// gets the span element hits section on ID and the class selector "item" get the span element
console.log(nestedItem);

// alternative way search from parent element
const nestedItem2 = mainSection.querySelector(".item");
console.log(nestedItem2);

// querySelectorAll  takes css selector returns nodelist
const paragraphs = document.querySelectorAll(".para");
console.log(paragraphs);
const firstParag = paragraphs[1];
console.log(firstParag);

//
// 




