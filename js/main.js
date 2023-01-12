function add(x, y) {
    return x + y;
}
// console.log(add(2,3)); 

function substract(x, y) {
    return x - y;
}
// console.log(substract(10,8));
function multiply(x, y) {
    return x * y;
}
// console.log(multiply(2, 8));
function divide(x, y) {
    return x / y;
}
// console.log(divide(15, 2));

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
