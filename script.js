let expression = "";
let display = document.querySelector('#display-text');

function addToExpression(char) {
    return expression + char;
}

function evaluate(expression) {
    return 0;
}

function clear() {
    expression = "";
}

const buttons = document.querySelectorAll('#eq');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        expression = addToExpression(buttons[i].textContent);
        display.textContent = expression;
    })
}

const solve = document.querySelector('#solve')
solve.addEventListener('click', () => {
     console.log('click')
})

const clearDisplay = document.querySelector('#clear-display');
clearDisplay.addEventListener('click', () => {
    expression = "";
    display.textContent = expression;
})