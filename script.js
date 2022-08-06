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
    if (y !== "") {
        let newY = y.toString();
        console.log(newY);
        let newerY = newY.split("");
        console.log(newerY);

        newerY.pop();

        y = newerY.join("");
        console.log(y);
    } else if (operator !== "" && y == "") {
        let newOperator = "";
        operator = newOperator;
    } else {
        let newX = x.toString();
        console.log(newX);
        let newerX = newX.split("");
        console.log(newerX);

        newerX.pop();

        x = Number(newerX.join(""));
        console.log(x);
    }

    // create string
    // let newInputs = inputs.join("");
    // console.log(newInputs);
    // // split string into new array with all single digits
    // let newerInputs = newInputs.split("");
    // console.log(newerInputs);

    // newerInputs.pop();

    // inputs = Number(newerInputs.join(""));
    // console.log(inputs);
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
            // console.log(operator);
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
            equation.textContent = inputs;
        } else {
            result = operate(operator, x, y);
            displayResult.textContent = result;
            equation.textContent = "";

            inputs[3] = result;
        }
        // console.log(inputs);
        equation.textContent = x + operator + y;

        if (result !== "") {
            x = result;
            inputs = [];
            inputs[0] = x;
            y = "";
            operator = "";
            equation.textContent = "";
        }
    });
}
