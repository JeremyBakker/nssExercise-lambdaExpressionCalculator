<<<<<<< HEAD
// establish a global variable to hold the total
var total;

// add event listeners to each button
=======
// set a global variable for the total
var total;

// set event listeners on the buttons
>>>>>>> af322d976727c3b7052cd0e69520bd44dc47e79b
document.getElementById("add").addEventListener("click", add);
document.getElementById("subtract").addEventListener("click", subtract);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);
document.getElementById("clear").addEventListener("click", clear);

<<<<<<< HEAD
// check whether the user has entered a valid number and alert if error
=======
// determine whether the user has entered valid numbers in both fields
>>>>>>> af322d976727c3b7052cd0e69520bd44dc47e79b
function checkValidity() {
	if (firstNumber == "" || secondNumber == "" || isNaN(firstNumber) || isNaN(secondNumber)) {
		alert("Please fill both fields with appropriate values.");
	}
}

<<<<<<< HEAD
// change input to integers
=======
// change the input to an integer to allow for math operations
>>>>>>> af322d976727c3b7052cd0e69520bd44dc47e79b
function parseValues() {
	firstNumber = parseInt(document.getElementById("firstNumber").value);
	secondNumber = parseInt(document.getElementById("secondNumber").value);
}

<<<<<<< HEAD
// clear the window when the clear button is pressed
=======
// reset the window when the user clicks the "clear" button
>>>>>>> af322d976727c3b7052cd0e69520bd44dc47e79b
function clear() {
	window.location.reload();
}

<<<<<<< HEAD
// each function below resets the solution field, grabs the input, parses them into numbers, checks their validity, 
	// performs a math operation on them, puts the solution in the DOM, and resets the total to await the next
	// calculation

=======
// perform the appropriate mathematical operation on the two numbers, beginning with clearing the solution field. 
// this prevents the solutions from stacking left to right (e.g., 33333) for five separate 1 + 2 operations.
>>>>>>> af322d976727c3b7052cd0e69520bd44dc47e79b
function add() {
	document.getElementById("solution").innerHTML = "";
	parseValues();
	checkValidity();
	total = firstNumber + secondNumber;
	var text = document.createTextNode(total);
	document.getElementById("solution").appendChild(text);
	total = 0;
}

function subtract() {
	document.getElementById("solution").innerHTML = "";
	parseValues();
	checkValidity();
	total = firstNumber - secondNumber;
	var text = document.createTextNode(total);
	document.getElementById("solution").appendChild(text);
	total = 0;
}

function multiply() {
	document.getElementById("solution").innerHTML = "";
	parseValues();
	checkValidity();
	total = firstNumber * secondNumber;
	var text = document.createTextNode(total);
	document.getElementById("solution").appendChild(text);
	total = 0;
}

function divide() {
	document.getElementById("solution").innerHTML = "";
	parseValues();
	checkValidity();
	total = firstNumber / secondNumber;
	var text = document.createTextNode(total);
	document.getElementById("solution").appendChild(text);
	total = 0;
}