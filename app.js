debugger;

// selects all the buttons and stores into array named buttons
const buttons = document.querySelectorAll('button');
// grabs the numbers in .display and stores into constant named display
const display = document.querySelector('.display');

// loops through each button element inside the buttons array and activates the inner function
buttons.forEach(function(button){
    // takes each button and uses a click event listener.
    // If it detects a click event, it activates the calculate function
    button.addEventListener('click', calculate)
});

// function that calculates stuff
function calculate(event) {
    // stored clicked button values
    const clickedButtonValue = event.target.value;

    if (clickedButtonValue === '=') {
        // makes sure the display isn't empty and shows the answer
        if (display.value !== '') {
            // calculates and shows answer on display
            display.value = eval(display.value);
        }
    } else if (clickedButtonValue === 'C') {
        // clears everything on display
        display.value = '';
    } else {

        display.value += clickedButtonValue;
    }
}
