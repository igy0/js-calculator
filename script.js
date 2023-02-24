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

function mod(x,y) {
    x = +x;
    y = +y;
    return x % y;
}

//updating display with button presses
function updateDisplay(x) {
    if (nowOp) {
        display.innerText = x;
        nowOp = false;
    } else if (display.innerText.length > 15) {
        alert("Number Limit for Calculator Reached");
        return;
    } else {
        display.innerText += x;
    }
}

//update with other states
function delDisplay() {
    let disp = display.innerText;
    disp = Math.floor(disp / 10);
    display.innerText = disp;
}

function clearDisplay() {
    // display.innerText = "\u00A0"; 
    display.innerText = 0;
    operating = false;
    haveEqualed = false;
    nowOp = false;
}
 //functionality for 0, AC, C, .
buttons[16].addEventListener('click', () => {
    updateDisplay(buttons[16].innerText);
});

buttons[0].addEventListener('click', () => {
    clearDisplay();
});


buttons[1].addEventListener('click', () => {
    delDisplay();
});

buttons[17].addEventListener('click', () => {
    updateDisplay(buttons[17].innerText);
});

//functionality for operation buttons
let firstVal;
let secondVal;
let operation;
let operating = false;
let nowOp = false;
let haveEqualed = false;

//add
buttons[3].addEventListener('click', () => {
    if (operating) {
        nowOp = true;
        secondVal = display.innerText;
        operate(firstVal, secondVal,operation);
    } else {
        operating = true;
        
        firstVal = display.innerText;
        nowOp = true;
    }
    operation = "add";
});

//sub
buttons[7].addEventListener('click', () => {
    if (operating) {
        nowOp = true;
        secondVal = display.innerText;
        operate(firstVal, secondVal,operation);
    } else {
        operating = true;
        firstVal = display.innerText;
        nowOp = true;
    }
    operation = "sub";
});

//mult
buttons[11].addEventListener('click', () => {
    if (operating) {
        nowOp = true;
        secondVal = display.innerText;
        operate(firstVal, secondVal,operation);
    } else {
        operating = true;
        firstVal = display.innerText;
        nowOp = true;
    }
    operation = "mult";
});

//div
buttons[15].addEventListener('click', () => {
    if (operating) {
        nowOp = true;
        secondVal = display.innerText;
        operate(firstVal, secondVal,operation);
    } else {
        operating = true;
        firstVal = display.innerText;
        nowOp = true;
    }
    operation = "div";
});

//mod
buttons[2].addEventListener('click', () => {
    if (operating) {
        nowOp = true;
        secondVal = display.innerText;
        operate(firstVal, secondVal,operation);
    } else {
        operating = true;
        firstVal = display.innerText;
        nowOp = true;
    }
    operation = "mod";
});

//equal
buttons[18].addEventListener('click', () => {
    if (!haveEqualed) {
        secondVal = display.innerText;
        haveEqualed = true;
    }
    operate(firstVal,secondVal,operation);
    operating = false;
});

function operate(x,y,operation) {
    switch(operation) {
        case "add":
            const sum = add(x,y);
            display.innerText = sum; 
            firstVal = sum;
            break;

        case "sub":
            const diff = sub(x,y);
            display.innerText = diff;
            firstVal = diff;
            break;

        case "mult":
            const prod = mult(x,y);
            display.innerText = prod; 
            firstVal = prod;
            break;

        case "div":
            const divisor = div(x,y);
            display.innerText = divisor; 
            firstVal = divisor;
            break;

        case "mod":
            const remainder = mod(x,y);
            display.innerText = remainder; 
            firstVal = remainder;
            break;
    }
}

