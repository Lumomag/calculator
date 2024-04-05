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

function displayNumber(value){
  displayEl.innerHTML += value;
  
}

function clearDisplay(){
  displayEl.innerHTML = '';
}

function operate(firstNumb, operator, secondNumb){
  switch (operator) {
    case '+':
      return add(firstNumb, secondNumb);
      break;
    
    case '-':
      return subtract(firstNumb, secondNumb);
      break;

    case '*':
      return multiply(firstNumb, secondNumb);
      break;

    case '/':
      return divide(firstNumb, secondNumb);
      break;

    default: alert('Invalid operation');
      break;
  }
}

let firstNumber;
let operator;
let secondNumber;

const displayEl = document.querySelector('.numbers');