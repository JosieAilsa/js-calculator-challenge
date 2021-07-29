
//Declare all the numbers as a node list 
let calcNumber = document.querySelectorAll(".calculator__number");
//Reference operators as a node list 
let calcOperators = document.querySelectorAll(".calculator__operator");
//Reference equals and clear buttons
let clear = document.querySelector("#clear");
let equals = document.querySelector("#equals");
//Reference the calculator display 
let display = document.querySelector("#calculator__display");

// Declare current/prev value variables and the sum array 
let currentValue = display.innerHTML; 
let previousValue = "";
let sumArray  = []

// When each number is pressed the add the number to the display 
calcNumber.forEach((number) => {
    number.addEventListener("click", (event) => {
    let number = event.target.value;
    console.dir(number);
    display.innerHTML += number;
    });
});

//Add a function to clear the display 
let clearValues = () => {
    sumArray = [];
    display.innerHTML = "";
}

//For every operator
calcOperators.forEach((operator) => {
//Add an event listener to it 
    operator.addEventListener("click", (event) => {
//When an operator is pressed change the current display value into the previous value var
    previousValue = display.innerHTML;
//Push this value to element 0 in the sum array 
    sumArray.push(previousValue);
// Then get the value of the operator that was hit and store that in the array 
    operatorValue = event.target.value;
    sumArray.push(operatorValue);
    console.dir(sumArray)
//Clear the display to allow a new value to be added 
    currentValue = "";
    display.innerHTML = currentValue;
    });
});
///Check if there is at least a previous value and an operator length is more than 
equals.addEventListener("click", () => {
    //Add the new value to the array but don't overwrite the old one
    if (sumArray.length < 2){
        stop
    } else {
        currentValue = display.innerHTML
        sumArray.push(currentValue);
    }
    // Now change the numbers in the array to numbers
    let firstNumber = parseFloat(sumArray[0]);
    let secondNumber = parseFloat(sumArray [2]);
    // And read the operator
    let operatorInArray = sumArray[1];

    switch (operatorInArray) {
        case "+":
        return display.innerHTML = firstNumber + secondNumber
        break;
        case "-":
        return display.innerHTML = firstNumber - secondNumber
        break;
        case "/":
        return display.innerHTML = firstNumber / secondNumber
        break;
        case "*":
        return display.innerHTML = firstNumber * secondNumber
        break;
        default:
        return display.innerHTML = "error"
    }
});