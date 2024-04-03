function add(first, second){
  return first + second;
}

function subtract(first, second){
  return first - second;
}

function multiply(first, second){
  return first * second;
}

function divide(first, second){
  return first / second;
}

function operate(firstNumb, operator, secondNumb){
  switch (operator) {
    case '+':
      add(firstNumb, secondNumb);
      break;
    
    case '-':
      subtract(firstNumb, secondNumb);
      break;

    case '*':
      multiply(firstNumb, secondNumb);
      break;

    case '/':
      divide(firstNumb, secondNumb);
      break;

    default: alert('Invalid operation');
      break;
  }
}

function displayNumber(value){
  displayEl.innerHTML += value;
}

let firstNumber;
let operator;
let secondNumber;

const displayEl = document.querySelector('.numbers');