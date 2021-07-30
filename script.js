
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
let sumArray  = [];
let operatorValue = "";

const plusSum = (acc, curr) => {
    return acc += curr;
    };
const minusSum = (acc, curr) => {
    return acc - curr;
    };
const multiplySum = (acc, curr) => {
    return acc * curr;
    };
const divideSum = (acc, curr) => {
    return acc / curr;
    };


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
    sumArray.push(parseInt(previousValue));
// Then get the value of the operator that was hit and store that in the array 
    operatorValue = event.target.value;
    console.dir(sumArray)

//Clear the display to allow a new value to be added 
    currentValue = "";
    display.innerHTML = currentValue;
    });
});
///Check if there is at least a previous value and an operator length is more than 
equals.addEventListener("click", () => {
    //Add the new value to the array but don't overwrite the old one
    if (sumArray.length < 1){
        stop
    } else {
        currentValue = display.innerHTML
        sumArray.push(parseInt(currentValue));
    }

    // Now change the strings in the array to numbers
    // And read the operator
    let answer = 0;
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
        return display.innerHTML = "error"
    }
});

//   let operatorInArray = operatorArray[0];
//     switch (operatorInArray) {
//         case "+":
//         let answer = sumArray.reduce(plusSum);
//         return display.innerHTML = answer;
//         break;
//         case "-":
//         let answer = sumArray.reduce(minusSum);
//         return display.innerHTML = answer;
//         break;
//         case "*":
//         let answer = sumArray.reduce(multiplySum);
//         return display.innerHTML = answer;
//         break;
//         case "/":
//         let answer = sumArray.reduce(divideSum);
//         return display.innerHTML = answer;
//         break;
//         default:
//         return display.innerHTML = "error"
// //     }
// });



  
