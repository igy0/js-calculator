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
// let subber;
// let haveSub = false;
buttons[7].addEventListener('click', () => {
    // dispValue = display.innerText;
    // clearDisplay();
    // operation = "sub";
    if (operating) {
        nowOp = true;
        secondVal = display.innerText;
        operate(firstVal, secondVal,operation);
    } else {
        operating = true;
        
        firstVal = display.innerText;
        nowOp = true;
        console.log(firstVal);
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
        console.log(firstVal);
    }
    operation = "mult";
});

buttons[15].addEventListener('click', () => {
    if (operating) {
        nowOp = true;
        secondVal = display.innerText;
        operate(firstVal, secondVal,operation);
    } else {
        operating = true;
       
        firstVal = display.innerText;
        nowOp = true;
        console.log(firstVal);
    }
    operation = "div";
});

//equal
//doesnt work for chained operations yet maybe work into seperate function?
buttons[18].addEventListener('click', () => {
    if (!haveEqualed) {
        secondVal = display.innerText;
        haveEqualed = true;
    }
    
    console.log("equal x:" + firstVal);
    console.log("equal y: " + secondVal);
    operate(firstVal,secondVal,operation);
    operating = false;
    console.log(operation);
    // secondVal = firstVal;
    // firstVal = display.innerText;
    // operate(secondVal,firstVal,operation);
});

function operate(x,y,operation) {
    switch(operation) {
        case "add":
            const sum = add(x,y);
            // console.log(x);
            // console.log(y);
            display.innerText = sum; 
            firstVal = sum;
            break;

        case "sub":
            console.log("sub x:" + x);
            console.log("sub y: " + y);
            const diff = sub(x,y);
            display.innerText = diff;
            firstVal = diff;
            break;

        case "mult":
            //multiplies by first value not second everytime
            //use have sub and subber again?
            const prod = mult(x,y);
            display.innerText = prod; 
            firstVal = prod;
            break;

        case "div":
            const divisor = div(x,y);
            display.innerText = divisor; 
            firstVal = divisor;
            break;
    }
}

