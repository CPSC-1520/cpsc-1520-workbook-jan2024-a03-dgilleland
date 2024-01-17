/*

	Create variables to hold the receiving party's name, disclosing party's name, and the date

	Prompt the user for the values to be used for these variables (i.e. prompt for disclosing party's name, date, etc.)

	Update the document with the entered values in the places indicated by brackets (i.e. [the Disclosing Party] should be replaced by the disclosing party's name)

	Use the skills you have learned up to this point.
*/
let receiving = prompt("Enter the receiving party's name");
let disclosing = prompt("Enter the disclosing party's name");
let theDate = prompt("Enter the date");

// String interpolation in ES6
// - Use backticks ` to wrap the string
// - Use ${} to insert variables/expressions

// Version 1.0.0
// document.querySelector('.receiving-party').innerHTML = `<b>${receiving}</b>`;
document.querySelector('.disclosing-party').innerHTML = `<b>${disclosing}</b>`;
document.querySelector('.date').innerHTML = `<b>${theDate}</b>`;

// Version 1.0.1
// My callback function
//  name of the function: setReceiver
//     |             signature of the function
//     |________     |__________
//    /         \   /           \
const setReceiver = function(el, index, array, otherStuff) {
	el.innerHTML = `<b>${receiving}</b>`;
	// console.log(el, index, array);
	console.log(otherStuff);
}

document // my whole document
	.querySelectorAll('.receiving-party') // []
	.forEach(setReceiver);                // Callback function