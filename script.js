const container = document.querySelector('.container');
let buttons = []
for (let i = 0; i < 20; i++) {
    buttons[i] = document.createElement('button');
    buttons[i].classList.add(`button${i}`);
    container.appendChild(buttons[i])
}