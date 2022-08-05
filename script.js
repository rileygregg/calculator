// Dom elements
const buttons = document.querySelectorAll("#btn");
const buttonOperators = document.querySelectorAll("#btn-op");
const equation = document.querySelector(".container-display");
const displayResult = document.querySelector(".container-result");
const clearAll = document.querySelector(".clear-all");

let x = "";
let y = "";
let operator = "";
let inputs = [];

// create functions to calculate arguments
function add(x, y) {
    let answer = x + y;
    return answer;
}

function subtract(x, y) {
    let answer = x - y;
    return answer;
}

function multiply(x, y) {
    let answer = x * y;
    return answer;
}

function divide(x, y) {
    let answer = x / y;
    return answer;
}

function squared(x, y) {
    let answer = x ** y;
    return answer;
}

function remainder(x, y) {
    let answer = x % y;
    return answer;
}

function operate(operator, x, y) {
    let answer = "";

    if (operator == "+") {
        answer = add(x, y);
    } else if (operator == "-") {
        answer = subtract(x, y);
    } else if (operator == `*`) {
        answer = multiply(x, y);
    } else if (operator == `/`) {
        answer = divide(x, y);
    } else if (operator == `**`) {
        answer = squared(x, y);
    } else if (operator == `%`) {
        answer = remainder(x, y);
    } else {
        console.log("choose an operator");
    }

    return (displayResult.textContent = answer);
}

function calculate() {
    for (const button of buttons) {
        button.addEventListener("click", () => {
            if (
                // if you select a number and there hasnt been an operator selected yet, this will run
                (button.value == "1" ||
                    button.value == "2" ||
                    button.value == "3" ||
                    button.value == "4" ||
                    button.value == "5" ||
                    button.value == "6" ||
                    button.value == "7" ||
                    button.value == "8" ||
                    button.value == "9" ||
                    button.value == "0") &&
                operator == ""
            ) {
                x += button.value;
                // turn string into integer
                let newX = parseInt(x);
                x = newX;

                inputs[0] = x;

                equation.textContent = x + operator + y;
                console.log(inputs);
                return;
            } else if (
                (button.value == "+" ||
                    button.value == "-" ||
                    button.value == "*" ||
                    button.value == "/" ||
                    button.value == "**" ||
                    button.value == "%") &&
                operator == ""
            ) {
                operator += button.value;
                inputs[1] = operator;
                equation.textContent = x + operator + y;
                console.log(operator);
                return;
            } else if (
                // if you select a number and there has been an operator selected, this will run
                (button.value == "1" ||
                    button.value == "2" ||
                    button.value == "3" ||
                    button.value == "4" ||
                    button.value == "5" ||
                    button.value == "6" ||
                    button.value == "7" ||
                    button.value == "8" ||
                    button.value == "9" ||
                    button.value == "0") &&
                operator !== ""
            ) {
                y += button.value;
                let newY = parseInt(y);
                y = newY;

                inputs[2] = y;
                equation.textContent = x + operator + y;
                console.log(inputs);
                return;
            } else if (button.value == "CA") {
                x = "";
                y = "";
                operator = "";

                inputs = [];

                displayResult.textContent = "";
                equation.textContent = "";
                console.log(inputs);
            } else if (button.value == "DEL") {
                console.log(x);
                // turns into array
                x = x.split("");
                console.log(x);
                // removes last item in array
                x.pop();
                console.log(x);
                // create new variable with new array without last item
                newX = x.join("");
                // convert new variable to old variable as string
                x = newX;
                console.log(x);
                equation.textContent = x;
            } else {
                let result = operate(operator, x, y);
                displayResult.textContent = result;
                inputs[3] = result;
            }
            console.log(inputs);
            equation.textContent = x + operator + y;
            return;
        });
    }
}

calculate();
