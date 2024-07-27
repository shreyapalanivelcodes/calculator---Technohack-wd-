let currentInput = '';
let operation = '';
let firstOperand = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(op) {
    if (currentInput === '') return;
    if (firstOperand !== '') {
        calculate();
    }
    firstOperand = currentInput;
    operation = op;
    currentInput = '';
}

function calculate() {
    if (currentInput === '' || firstOperand === '') return;
    const secondOperand = parseFloat(currentInput);
    const first = parseFloat(firstOperand);
    let result;

    switch (operation) {
        case '+':
            result = first + secondOperand;
            break;
        case '-':
            result = first - secondOperand;
            break;
        case '*':
            result = first * secondOperand;
            break;
        case '/':
            result = first / secondOperand;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = '';
    firstOperand = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operation = '';
    firstOperand = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
