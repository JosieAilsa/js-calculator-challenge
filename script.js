// Reference all the possible buttons from the DOM and declare as string variables into global scope 
let clear = document.querySelector("#clear");
let multiply = document.querySelector("#multiply");
multiply = "*"
let decimal = document.querySelector("#decimal");
decimal = "."
//Declare all the numbers as a node list 
let calcNumber = document.querySelectorAll(".calculator__number");
let calcOperators = document.querySelectorAll(".calculator__operator")

let display = document.querySelector("#calculator__display");

// Declare current and previous value 

let currentValue = display.innerHTML; 
let previousValue = "";
let evalArray  = []

// let printNumber = (event) => {
//     let value = event.target.value;
//     display.innerHTML += value;
// }
calcNumber.forEach((number) => {
    number.addEventListener("click", (event) => {
    let number = event.target.value;
    console.dir(number);
    display.innerHTML += number;
    });
});

let clearValues = () => {
    currentValue = "";
    previousValue = "";
    display.innerHTML = "";
}

//When operator is pressed push current value to prev value 
//Log operator. 
calcOperators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
    operatorValue = event.target.value;
    console.dir(operatorValue)
    previousValue = display.innerHTML;
    console.dir(`Previous value is ${previousValue}`)
    currentValue = "";
    display.innerHTML = currentValue;
    });
});