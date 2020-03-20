//Add
function add(num1, num2) {
    return num1 + num2;
}


//Subtract

function subtract(num1, num2) {
    return num1 - num2;
}



//Multiply

function multiply(num1, num2) {
    return num1 * num2;
}


//Divide

function divide(num1, num2) {
    return num1 / num2;
}

var x = prompt('Please enter number');
var operator = prompt('Please Put Operator');
var y = prompt('Please enter number');
x = parseInt(x);
y = parseInt(y);

switch (operator) {
    case '+':
        console.log(add(x, y));
        break;
    case '-':
        console.log(subtract(x, y));
        break;
    case '*':
        console.log(multiply(x, y));
        break;
    case '/':
        console.log(divide(x, y));
        break;
}
