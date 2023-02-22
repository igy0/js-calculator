const container = document.querySelector('.container');
const display = document.querySelector(".display");
let buttons = []

//creating buttons
for (let i = 0; i < 19; i++) {
    buttons[i] = document.createElement('button');
    buttons[i].classList.add(`button${i}`);
    // buttons[i].innerText = i;
    container.appendChild(buttons[i])
}

//assigning values to buttons
let j = 1;
for (let i = 12; i <=14; i++) {
    buttons[i].innerText = j;
    buttons[i].addEventListener('click', () => {
        updateDisplay(buttons[i].innerText);
    });
    j++;
}
for (let i = 8; i <=10; i++) {
    buttons[i].innerText = j;
    buttons[i].addEventListener('click', () => {
        updateDisplay(buttons[i].innerText);
    });
    j++;
}
for (let i = 4; i <=6; i++) {
    buttons[i].innerText = j;
    buttons[i].addEventListener('click', () => {
        updateDisplay(buttons[i].innerText);
    });
    j++;
}
buttons[0].innerText = "AC";
buttons[1].innerText = "C";
buttons[2].innerText = "%";
buttons[3].innerText = "+";
buttons[7].innerText = "-";
buttons[11].innerText = "X";
buttons[15].innerText = "/";
buttons[16].innerText = 0;
buttons[17].innerText = ".";
buttons[18].innerText = "=";

//calculation functions
function add(x, y) {
    x = +x;
    y = +y;
    return x + y;
}

function sub(x, y) {
    x = +x;
    y = +y;
    console.log(x);
    console.log(y);
    return x - y;
}

function mult(x, y) {
    x = +x;
    y = +y;
    return x * y;
}

function div(x, y) {
    x = +x;
    y = +y;
    return x / y;
}

//updating display with button presses
function updateDisplay(x) {
    if (display.innerText.length < 16) {
        display.innerText += x;
    }
    else {
        alert("Number Limit for Calculator Reached");
        return;
    }
    
}

function delDisplay() {
    let disp = display.innerText;
    disp = Math.floor(disp / 10);
    display.innerText = disp;
}

function clearDisplay() {
    // display.innerText = "\u00A0"; 
    display.innerText = 0;
    haveSub = false;
}
 //functionality for 0, AC, C
buttons[16].addEventListener('click', () => {
    updateDisplay(buttons[16].innerText);
});

buttons[0].addEventListener('click', () => {
    clearDisplay();
});

buttons[1].addEventListener('click', () => {
    delDisplay();
});

//functionality for operation buttons
//add
let dispValue;
let operation;
buttons[3].addEventListener('click', () => {
    dispValue = display.innerText;
    clearDisplay();
    operation = "add";
});

//sub
let subber;
let haveSub = false;
buttons[7].addEventListener('click', () => {
    dispValue = display.innerText;
    clearDisplay();
    operation = "sub";
});

//mult
buttons[11].addEventListener('click', () => {
    dispValue = display.innerText;
    clearDisplay();
    operation = "mult";
});

//equal
//doesnt work for chained operations yet maybe work into seperate function?
buttons[18].addEventListener('click', () => {
    switch(operation) {
        case "add":
            const sum = add(dispValue,display.innerText);
            display.innerText = sum; 
            break;

        case "sub":
            //issue is subber is reintialized to innertext everytime
            if (haveSub) {
                dispValue = display.innerText;
                const diff = sub(dispValue,subber);
                display.innerText = diff;
                break;
            } else {
                subber = display.innerText;  
                const diff = sub(dispValue,subber);
                display.innerText = diff;
                haveSub = true;
                break;  
            }

        case "mult":
            //multiplies by first value not second everytime
            //use have sub and subber again?
            const prod = mult(dispValue,display.innerText);
            display.innerText = prod; 
            break;

        case "div":
            const div = add(dispValue,display.innerText);
            display.innerText = sum; 
            break;
    }
    
});

// function operate() {

// }

