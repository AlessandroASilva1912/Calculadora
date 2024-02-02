let currentInput = '';
let operator = '';
let firstOperand = '';
let theme = 'light';

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    updateDisplay();
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function setOperator(op) {
    if (firstOperand === '') {
        firstOperand = currentInput;
        currentInput = '';
        operator = op;
        updateDisplay();
    } else {
        calculate();
        operator = op;
    }
}

function calculate() {
    if (currentInput !== '') {
        const secondOperand = currentInput;
        switch (operator) {
            case '+':
                currentInput = String(parseFloat(firstOperand) + parseFloat(secondOperand));
                break;
            case '-':
                currentInput = String(parseFloat(firstOperand) - parseFloat(secondOperand));
                break;
            case '*':
                currentInput = String(parseFloat(firstOperand) * parseFloat(secondOperand));
                break;
            case '/':
                if (parseFloat(secondOperand) !== 0) {
                    currentInput = String(parseFloat(firstOperand) / parseFloat(secondOperand));
                } else {
                    currentInput = 'Error';
                }
                break;
        }
        firstOperand = '';
        operator = '';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

function changeTheme(selectedTheme) {
    document.body.classList.remove(theme);
    theme = selectedTheme;
    document.body.classList.add(theme);
}

changeTheme(theme);
