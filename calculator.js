
// establish a global variable to hold the total
var total;


// set event listeners on the buttons

document.getElementById("add").addEventListener("click", add);
document.getElementById("subtract").addEventListener("click", subtract);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);
document.getElementById("clear").addEventListener("click", clear);


// determine whether the user has entered valid numbers in both fields

function checkValidity() {
	if (firstNumber == "" || secondNumber == "" || isNaN(firstNumber) || isNaN(secondNumber)) {
		alert("Please fill both fields with appropriate values.");
	}
}


// change the input to an integer to allow for math operations

function parseValues() {
	firstNumber = parseInt(document.getElementById("firstNumber").value);
	secondNumber = parseInt(document.getElementById("secondNumber").value);
}


// reset the window when the user clicks the "clear" button
function clear() {
	window.location.reload();
}



// perform the appropriate mathematical operation on the two numbers, beginning with clearing the solution field. 
// this prevents the solutions from stacking left to right (e.g., 33333) for five separate 1 + 2 operations.

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