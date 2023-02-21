const container = document.querySelector('.container');
let buttons = []
for (let i = 0; i < 19; i++) {
    buttons[i] = document.createElement('button');
    buttons[i].classList.add(`button${i}`);
    buttons[i].innerText = i;
    container.appendChild(buttons[i])
}

function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mult(x, y) {
    return x * y;
}

function div(x, y) {
    return x / y;
}