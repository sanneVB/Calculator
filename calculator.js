// Creating a list of symbols that should appear on the number buttons
// Should be listed in the order that they appear from top left
const numberButtonSymbols = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];

// Creating a list of symbols that should appear on the function buttons
// Should be list from top to bottom
const functionButtonSymbols = ['CE', '-', '+', '='];

const calculationsHistory = [];
let currentValue = '0';

const buttonPressed = function presser(e) {
  const paragraphID = document.getElementById('calculationFieldText');
  if (e.target.parentNode.id === 'numberButtonContainer') {
    if (currentValue === '0') {
      currentValue = e.target.innerHTML;
      paragraphID.innerHTML = currentValue;
    } else {
      currentValue += `${e.target.innerHTML}`;
      paragraphID.innerHTML = currentValue;
    }
    calculationsHistory.push(`${e.target.innerHTML}`);
  }
  calculationsHistory.push(`${e.target.innerHTML}`);
  paragraphID.innerHTML = currentValue;
};

// Function that will take symbol input and then create a button with that symbol
function buttonCreation(symbol, targetID) {
  const containerId = document.getElementById(targetID);

  const calcButton = document.createElement('button');
  calcButton.textContent = `${symbol}`;
  calcButton.id = `button${symbol}`;
  calcButton.addEventListener('click', buttonPressed);
  calcButton.classList.add('button');

  containerId.appendChild(calcButton);
}

// const buttonSummaries = [];
// Iterate through the array and create each button in their own container
function numberButtonCreation(list, ID) {
  for (let i = 0; i < list.length; i += 1) {
    buttonCreation(list[i], ID);
  }
}

// create the numberButtons in the left container
numberButtonCreation(functionButtonSymbols, 'functionButtonContainer');

// create the symbolButtons in the right container
numberButtonCreation(numberButtonSymbols, 'numberButtonContainer');

// create calculation field
const calcDivId = document.getElementById('calculationFieldContainer');

const calculationField = document.createElement('p');
calculationField.id = 'calculationFieldText';
calculationField.textContent = `${currentValue}`;

calcDivId.appendChild(calculationField);

// function displayValue()

// function addition(currentValue, newValue) {
//   let addedValue = currentValue + newValue;
//   addedValue = addedValue.toFixed(2);
//   return addedValue;
// }

// function subtraction(currentValue, newValue) {
//   let subractedValue = currentValue - newValue;
//   subractedValue = subractedValue.toFixed(2);
//   return subractedValue;
// }
