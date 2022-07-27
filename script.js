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

    return answer;
}

console.log(operate("+", 10, 6));
