// Dom elements
const buttons = document.querySelectorAll("#btn");
const equation = document.querySelector(".container-display");
const displayResult = document.querySelector(".container-result");
const clearAll = document.querySelector(".clear-all");

let x = "";
let y = "";
let operator = "";

let stillTyping = false;

// Object.keys(inputs).forEach(function (keys) {
//     inputs[keys] = parseInt(inputs[keys]);
// });

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

function makeX() {
    for (const button of buttons) {
        button.addEventListener("click", () => {
            // for x
            if (
                button.value == "1" ||
                button.value == "2" ||
                button.value == "3" ||
                button.value == "4" ||
                button.value == "5" ||
                button.value == "6" ||
                button.value == "7" ||
                button.value == "8" ||
                button.value == "9" ||
                button.value == "0"
            ) {
                x += button.value;
                // equation.textContent = x;
                console.log(x);

                // console.log(x);
                //
            } else if (button.value == "CA") {
                x = "";
                // displayResult.textContent = x;
                // equation.textContent = x;
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
                // displayResult.textContent = x;
                // operator = button.value;
                // equation.textContent = x + button.value;
                return x;
            }
        });
    }
    return x;
}

// makeX();

function makeY() {
    for (const button of buttons) {
        button.addEventListener("click", () => {
            if (
                button.value == "1" ||
                button.value == "2" ||
                button.value == "3" ||
                button.value == "4" ||
                button.value == "5" ||
                button.value == "6" ||
                button.value == "7" ||
                button.value == "8" ||
                button.value == "9" ||
                button.value == "0"
            ) {
                y += button.value;
                // equation.textContent = x;
                console.log(y);

                // console.log(x);
                //
            } else if (button.value == "CA") {
                y = "";
                // displayResult.textContent = x;
                // equation.textContent = x;
            } else if (button.value == "DEL") {
                console.log(x);
                // turns into array
                y = y.split("");
                console.log(x);
                // removes last item in array
                y.pop();
                console.log(y);
                // create new variable with new array without last item
                newY = y.join("");
                // convert new variable to old variable as string
                y = newY;
                console.log(y);
                // equation.textContent = y;
            } else {
                // displayResult.textContent = x;
                // operator = button.value;
                // equation.textContent = x + button.value;
                return y;
            }
        });
    }
    return y;
}

function makeOperator() {
    for (const button of buttons) {
        button.addEventListener("click", () => {
            if (
                button.value == "+" ||
                button.value == "-" ||
                button.value == "*" ||
                button.value == "/" ||
                button.value == "**" ||
                button.value == "%"
            ) {
                operator = button.value;
            }
        });
    }
    return operator;
}
