let display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = null;

function appendNumber(num) {
    // Prevent multiple decimal points
    if (num === '.' && currentInput.includes('.')) return;
    
    currentInput += num;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '') return;
    
    if (previousInput !== '') {
        calculate();
    }
    
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (previousInput === '' || currentInput === '' || operator === null) return;
    
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    switch(operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current === 0 ? 'Error' : prev / current;
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay();
}

function deleteLastChar() {
    currentInput = currentInput.toString().slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput || '0';
}
