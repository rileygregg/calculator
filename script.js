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

function deleteKey() {
    let newInputs = inputs.toString();
    let newerInputs = newInputs.split("");
    // console.log(newerInputs);
    newerInputs.pop();
    console.log(newerInputs);
    let newestInputs = newerInputs.join("");
    console.log(newestInputs);
    inputs = newestInputs;
    x = inputs[0];
    operator = inputs[1];
    y = inputs[2];

    // if y isnt empty, remove one from y, else remove one from x
    // if (inputs[2] !== "") {
    //     y = y.toString();
    //     newY = y.split("");
    //     newY.pop();
    //     y = newY.join("");
    // } else if (inputs[1] !== "") {
    //     newOperator = inputs.pop();
    //     operator = newOperator;
    // } else if (inputs[0] !== "") {
    //     x = x.toString();
    //     newX = x.split("");
    //     newX.pop();
    //     x = newX.join("");
    // } else {
    //     return;
    // }
}

for (const button of buttons) {
    let result = "";
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
            // set operator
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
            deleteKey();
            equation.textContent = x + operator + y;
        } else {
            result = operate(operator, x, y);
            displayResult.textContent = result;
            equation.textContent = "";

            inputs[3] = result;
        }
        console.log(inputs);
        equation.textContent = x + operator + y;

        if (result !== "") {
            x = result;
            inputs = [];
            inputs[0] = x;
            y = "";
            operator = "";
            equation.textContent = x;
        }
    });
}
