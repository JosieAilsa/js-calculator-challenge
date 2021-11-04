"use strict";

//Declare all the numbers as a node list 
var calcNumber = document.querySelectorAll(".calculator__number"); //Reference operators as a node list 

var calcOperators = document.querySelectorAll(".calculator__operator"); //Reference equals and clear buttons

var clear = document.querySelector("#clear");
var equals = document.querySelector("#equals"); //Reference the calculator display 

var display = document.querySelector("#calculator__display"); // Declare current/prev value variables and the sum array 

var currentValue = display.innerHTML;
var previousValue = "";
var sumArray = [];
var operatorValue = "";

var plusSum = function plusSum(acc, curr) {
  if (Number.isInteger(acc) == false || Number.isInteger(curr) == false) {
    var number = parseFloat(acc.toFixed(3)) + parseFloat(curr.toFixed(3));
    return number;
  } else {
    return acc += curr;
  }
};

var minusSum = function minusSum(acc, curr) {
  if (Number.isInteger(acc) == false || Number.isInteger(curr) == false) {
    var number = parseFloat(acc.toFixed(3)) - parseFloat(curr.toFixed(3));
    return number;
  } else {
    return acc -= curr;
  }
};

var multiplySum = function multiplySum(acc, curr) {
  if (Number.isInteger(acc) == false || Number.isInteger(curr) == false) {
    var number = parseFloat(acc.toFixed(3)) * parseFloat(curr.toFixed(3));
    return number;
  } else {
    return acc * curr;
  }
};

var divideSum = function divideSum(acc, curr) {
  if (Number.isInteger(acc) == false || Number.isInteger(curr) == false) {
    var number = parseFloat(acc.toFixed(3)) / parseFloat(curr.toFixed(3));
    return number;
  } else {
    return acc / curr;
  }
}; // When each number is pressed the add the number to the display 


calcNumber.forEach(function (number) {
  number.addEventListener("click", function (event) {
    var number = event.target.value;
    console.dir(number);
    display.innerHTML += number;
  });
}); //Add a function to clear the display 

var clearValues = function clearValues() {
  sumArray = [];
  currentValue = "";
  previousValue = "";
  display.innerHTML = "";
}; //For every operator


calcOperators.forEach(function (operator) {
  //Add an event listener to it 
  operator.addEventListener("click", function (event) {
    //When an operator is pressed change the current display value into the previous value var
    previousValue = display.innerHTML; //Push this value to element 0 in the sum array 

    sumArray.push(parseFloat(previousValue)); // Then get the value of the operator that was hit and store that in the array 

    operatorValue = event.target.value;
    console.dir(sumArray); //Clear the display to allow a new value to be added 

    currentValue = "";
    display.innerHTML = currentValue;
  });
}); ///Check if there is at least a previous value and an operator length is more than 

equals.addEventListener("click", function () {
  //Add the new value to the array but don't overwrite the old one
  if (sumArray.length < 1) {
    stop;
  } else {
    currentValue = display.innerHTML;
    sumArray.push(parseFloat(currentValue));
  } // Now change the strings in the array to numbers
  // And read the operator


  var answer = 0;

  switch (operatorValue) {
    case "+":
      answer = sumArray.reduce(plusSum);
      sumArray = [];
      previousValue = 0;
      return display.innerHTML = answer;
      break;

    case "-":
      answer = sumArray.reduce(minusSum);
      sumArray = [];
      previousValue = 0;
      return display.innerHTML = answer;
      break;

    case "*":
      answer = sumArray.reduce(multiplySum);
      sumArray = [];
      previousValue = 0;
      return display.innerHTML = answer;
      break;

    case "/":
      answer = sumArray.reduce(divideSum);
      sumArray = [];
      previousValue = 0;
      return display.innerHTML = answer;
      break;

    default:
      return display.innerHTML = "error";
  }
});