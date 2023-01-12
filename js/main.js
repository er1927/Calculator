function add(x, y) {
    return x + y;
}
function substract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
function operate(x, y, operator) {
    x=Number(x);
    y=Number(y)
    switch(operator) {
        case "+":
            return add(x, y);
        case "-":
            return substract(x, y);
        case "*":
            return multiply(x, y);
        case "/":
            return divide(x, y);
        default:
            return null;
    }
}
let previousOperation = document.querySelector(".previousOperation");
let currentResult = document.querySelector(".currentResult");

function showOnDisplay() {
    // previousOperation.innerHTML= "testing prevOp"; // WORKS
    // currentResult.innerHTML= "testing currRes"; // WORKS
}
showOnDisplay();
