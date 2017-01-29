///////////////////////////////////////////////////////
// Code that meets Assignment Parameters in README.md//
///////////////////////////////////////////////////////

// establish a global variable to hold the total
var total;


// set event listeners on the buttons

document.getElementById("add").addEventListener("click", setDirection);
document.getElementById("subtract").addEventListener("click", setDirection);
document.getElementById("multiply").addEventListener("click", setDirection);
document.getElementById("divide").addEventListener("click", setDirection);
document.getElementById("clear").addEventListener("click", clear);


// determine whether the user has entered valid numbers in both fields

function checkValidity() {
	if (firstNumber == "" || secondNumber == "" || isNaN(firstNumber) || isNaN(secondNumber)) {
		alert("Please fill both fields with appropriate values.");
	}
}


//grab appropriate number inputs and send click event to appropriate function

function setDirection () {
	firstNumber = parseInt(document.getElementById("firstNumber").value);
	secondNumber = parseInt(document.getElementById("secondNumber").value);
	document.getElementById("solution").innerHTML = "";
	checkValidity();
	console.log(event.target.id);
	if (event.target.id === "add") {
		var solution = lambda(firstNumber, secondNumber, add);
	} else if (event.target.id === "subtract") {
		solution = lambda(firstNumber, secondNumber, subtract);
	} else if (event.target.id === "multiply") {
		solution = lambda(firstNumber, secondNumber, multiply);
	} else  solution = lambda(firstNumber, secondNumber, divide);
	
	var text = document.createTextNode(solution);
	document.getElementById("solution").appendChild(text);
	
}


// pass a function as data to meet exercise parameters

function lambda (numberOne, numberTwo, mathOperation) {
	var answer = mathOperation(numberOne, numberTwo);
	return answer;
}


// perform the appropriate mathematical operation on the two numbers, beginning with clearing the solution field. 
// this prevents the solutions from stacking left to right (e.g., 33333) for five separate 1 + 2 operations.

function add(one, two) {
	total = one + two;
	return total;
}

function subtract(one, two) {
	total = one - two;
	return total;
}

function multiply(one, two) {
	total = one * two;
	return total;
}

function divide(one, two) {
	total = one / two;
	return total;
}

// reset the window when the user clicks the "clear" button
function clear() {
	window.location.reload();
}


//////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////
// Initial Iteration of the Assignment //
/////////////////////////////////////////

// // establish a global variable to hold the total
// var total;


// // set event listeners on the buttons

// document.getElementById("add").addEventListener("click", add);
// document.getElementById("subtract").addEventListener("click", subtract);
// document.getElementById("multiply").addEventListener("click", multiply);
// document.getElementById("divide").addEventListener("click", divide);
// document.getElementById("clear").addEventListener("click", clear);


// // determine whether the user has entered valid numbers in both fields

// function checkValidity() {
// 	if (firstNumber == "" || secondNumber == "" || isNaN(firstNumber) 
//  || isNaN(secondNumber)) {
// 		alert("Please fill both fields with appropriate values.");
// 	}
// }


// // change the input to an integer to allow for math operations

// function parseValues() {
// 	firstNumber = parseInt(document.getElementById("firstNumber").value);
// 	secondNumber = parseInt(document.getElementById("secondNumber").value);
// }


// // reset the window when the user clicks the "clear" button
// function clear() {
// 	window.location.reload();
// }



// // perform the appropriate mathematical operation on the two numbers, beginning with clearing the solution field. 
// // this prevents the solutions from stacking left to right (e.g., 33333) for five separate 1 + 2 operations.

// function add() {
// 	document.getElementById("solution").innerHTML = "";
// 	parseValues();
// 	checkValidity();
// 	total = firstNumber + secondNumber;
// 	var text = document.createTextNode(total);
// 	document.getElementById("solution").appendChild(text);
// 	total = 0;
// }

// function subtract() {
// 	document.getElementById("solution").innerHTML = "";
// 	parseValues();
// 	checkValidity();
// 	total = firstNumber - secondNumber;
// 	var text = document.createTextNode(total);
// 	document.getElementById("solution").appendChild(text);
// 	total = 0;
// }

// function multiply() {
// 	document.getElementById("solution").innerHTML = "";
// 	parseValues();
// 	checkValidity();
// 	total = firstNumber * secondNumber;
// 	var text = document.createTextNode(total);
// 	document.getElementById("solution").appendChild(text);
// 	total = 0;
// }

// function divide() {
// 	document.getElementById("solution").innerHTML = "";
// 	parseValues();
// 	checkValidity();
// 	total = firstNumber / secondNumber;
// 	var text = document.createTextNode(total);
// 	document.getElementById("solution").appendChild(text);
// 	total = 0;
// }