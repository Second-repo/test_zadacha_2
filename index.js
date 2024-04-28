let display = document.getElementById('display');
let finish = false;

function addToDisplay(value) {
    //display.value += value;
    if (value >= '0' && value <= '9' || value === '(' || value === ')' || value === '.')
    {
        if (finish)
        {
            if (value == '.')
            {
                display.value = "0";
            } else
            display.value = "";
            finish = false;
        }
        display.value += value;
    }
    else if (value === '+' || value === '-' || value === '*' || value === '/' )
    {
        display.value += value;
        finish = false;
    }
}

function clearAll() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function copyResult() {
    display.select();
    document.execCommand('copy');
}

function calculate() {
    try {
        display.value = eval(display.value);
        finish = true;
    } catch (error) {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9' || key === '(' || key === ')' || key === '.')
    {
        if (finish)
        {
            if (key == '.')
            {
                display.value = "0";
            } else
            display.value = "";
            finish = false;
        }
        display.value += key;
    }
    else if (key === '+' || key === '-' || key === '*' || key === '/' )
    {
        display.value += key;
        finish = false;
    }
    else if (key === 'Enter' || key === '=') {
        finish = false;
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    }
    
});


// let display = document.getElementById('display');
// let finish = false;

// function addToDisplay(value) {
//     display.value += value;
// }

// function clearAll() {
//     display.value = '';
// }

// function deleteLast() {
//     display.value = display.value.slice(0, -1);
// }

// function copyResult() {
//     display.select();
//     document.execCommand('copy');
// }

// function calculate() {
//     try {
//         display.value = eval(display.value);
//         finish = true;
//     } catch (error) {
//         display.value = 'Error';
//     }
// }

// document.addEventListener('keydown', function(event) {
//     const key = event.key;
//     if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '(' || key === ')') {
//         addToDisplay(key);
//     } else if (key === 'Enter' || key === '=') {
//         calculate();
//     } else if (key === 'Backspace') {
//         deleteLast();
//     }
// });