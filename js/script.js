let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let zero = document.querySelector('.zero')
let decimal = document.querySelector('.decimal');
let clear = document.querySelector('.clear');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let equal = document.querySelector('.equal');
let display = document.querySelector('.display');

one.addEventListener('click', () => {
    console.log("button clicked");
    display.innerText = '1';
})