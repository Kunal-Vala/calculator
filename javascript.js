function addition(n1, n2) {
    return n1 + n2;
}

function subtraction(n1, n2) {
    return n1 - n2;
}

function division(n1, n2) {
    if (n2 === 0) {
        return "Error"; // Handle division by zero
    }
    return n1 / n2;
}

function multiplication(n1, n2) {
    return n1 * n2;
}

function operate(op, n1, n2) {
    switch (op) {
        case '+':
            return addition(n1, n2);
        case '-':
            return subtraction(n1, n2);
        case '/':
            return division(n1, n2);
        case '*':
            return multiplication(n1, n2);
        default:
            return null;
    }
}

let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let shouldResetDisplay = false;

const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');

function clearCalculator() {
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    shouldResetDisplay = false;
    display.textContent = '';
}

function resetDisplayIfNeeded() {
    if (shouldResetDisplay) {
        display.textContent = '';
        shouldResetDisplay = false;
    }
}

function appendToDisplay(value) {
    if (display.textContent === "Error") {
        clearCalculator();
    }
    resetDisplayIfNeeded();
    display.textContent += value;
}

function handleOperator(operator) {
    if (currentOperator !== null && firstOperand !== null) {
        secondOperand = parseFloat(display.textContent);
        const result = operate(currentOperator, firstOperand, secondOperand);
        display.textContent = result === "Error" ? "Error" : Math.round(result * 100000) / 100000;
        firstOperand = result === "Error" ? null : result;
        secondOperand = null;
    } else {
        firstOperand = parseFloat(display.textContent);
    }
    currentOperator = operator;
    shouldResetDisplay = true;
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.textContent;

        if (!isNaN(value) || value === '.') {
            // Handle numbers and decimal points
            if (value === '.' && display.textContent.includes('.')) return;
            appendToDisplay(value);
        } else if (value === 'AC') {
            // Clear everything
            clearCalculator();
        } else if (value === 'X') {
            // Handle backspace functionality
            display.textContent = display.textContent.slice(0, -1);
        } else if (value === '=') {
            // Perform the calculation
            if (currentOperator !== null && firstOperand !== null) {
                secondOperand = parseFloat(display.textContent);
                const result = operate(currentOperator, firstOperand, secondOperand);
                display.textContent = result === "Error" ? "Error" : Math.round(result * 100000) / 100000;
                firstOperand = result === "Error" ? null : result;
                secondOperand = null;
                currentOperator = null;
                shouldResetDisplay = true;
            }
        } else if (value === '%') {
            // Handle percentage functionality
            if (display.textContent !== '') {
                const currentValue = parseFloat(display.textContent);
                display.textContent = Math.round((currentValue / 100) * 100000) / 100000;
                shouldResetDisplay = true;
            }
        } else if (value === '+/-') {
            // Handle toggle sign functionality
            if (display.textContent !== '') {
                const currentValue = parseFloat(display.textContent);
                display.textContent = currentValue * -1;
            }
        } else {
            // Handle operators
            handleOperator(value);
        }
    });
});


document.addEventListener('keydown', (e) => {
    const key = e.key;

    if (!isNaN(key) || key === '.') {
        // Handle numbers and decimal points
        if (key === '.' && display.textContent.includes('.')) return;
        appendToDisplay(key);
    } else if (key === 'Escape') {
        // Clear everything (AC)
        clearCalculator();
    } else if (key === 'Backspace') {
        // Handle backspace functionality (X)
        display.textContent = display.textContent.slice(0, -1);
    } else if (key === 'Enter' || key === '=') {
        // Perform the calculation
        if (currentOperator !== null && firstOperand !== null) {
            secondOperand = parseFloat(display.textContent);
            const result = operate(currentOperator, firstOperand, secondOperand);
            display.textContent = result === "Error" ? "Error" : Math.round(result * 100000) / 100000;
            firstOperand = result === "Error" ? null : result;
            secondOperand = null;
            currentOperator = null;
            shouldResetDisplay = true;
        }
    } else if (key === '%') {
        // Handle percentage functionality
        if (display.textContent !== '') {
            const currentValue = parseFloat(display.textContent);
            display.textContent = Math.round((currentValue / 100) * 100000) / 100000;
            shouldResetDisplay = true;
        }
    } else if (key === '+/-') {
        // Handle toggle sign functionality
        if (display.textContent !== '') {
            const currentValue = parseFloat(display.textContent);
            display.textContent = currentValue * -1;
        }
    } else if (['+', '-', '*', '/'].includes(key)) {
        // Handle operators
        handleOperator(key);
    }
});