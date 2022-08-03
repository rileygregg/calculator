// Dom elements
const buttons = document.querySelectorAll("#btn");
const equation = document.querySelector(".container-display");
const displayResult = document.querySelector(".container-result");
const inputs = {};

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
    } else {
        console.log("choose an operator");
    }

    return (displayResult.textContent = answer);
}

// select buttons and log value

for (const button of buttons) {
    button.addEventListener("click", () => {
        inputs.inputOne = button.value;
        equation.textContent = inputs.inputOne;
    });

    // button.addEventListener("click", () => {
    //     inputs.operator = button.value;
    //     equation.textContent = `${inputs.inputOne} ${operator}`;
    // });
}
