// Reference all the possible buttons from the DOM and declare as string variables into global scope 
// Numbers 
let one = document.querySelector("#one");
one = "1";
let two = document.querySelector("#two");
two = "2";
let three = document.querySelector("#three");
three = "3";
let four = document.querySelector("#four");
four = "4";
let five = document.querySelector("#five");
five = "5";
let six = document.querySelector("#six");
six = "6";
let seven = document.querySelector("#seven");
seven = "7";
let eight = document.querySelector("#eight");
eight = "8";
let nine = document.querySelector("#nine");
nine = "9";
//Same with operators 
let plus = document.querySelector("#plus");
plus = "+"
let divide = document.querySelector("#divide");
divide = "/"
let clear = document.querySelector("#clear");
clear = ""
let minus = document.querySelector("#minus");
minus = "-"
let multiply = document.querySelector("#multiply");
multiply = "*"
let decimal = document.querySelector("#decimal");
decimal = "."

let answer = document.querySelector("#calculator__answer")

// Get the button to print to the console. 

let printValue = (event) => {
    let value = event.target.value;
    answer.innerHTML += value;
}

let clearValues = (event) => {
    let value = event.target.value;
    answer.innerHTML = value;
}

let sum = ()=> {
    parseFloat(answer.nodeValue);
}




