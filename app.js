debugger;

const buttons = document.querySelectorAll('button')
const display = document.querySelector('.display')

buttons.forEach(function(button){
    button.addEventListener('click', calculate)
})

function calculate(event) {
    const buttonValue = event.target.value
}