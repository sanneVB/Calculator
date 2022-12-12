// const containerId = document.getElementById('numberButtonContainer');

// Creating a list of symbols that should appear on the number buttons
// Should be listed in the order that they appear from top left
const numberButtonSymbols = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];

// Creating a list of symbols that should appear on the function buttons
// Should be list from top to bottom
const functionButtonSymbols = ['CE', '-', '+', '='];

// Function that will take symbol input and then create a button with that symbol
function buttonCreation(symbol, targetID) {
  const containerId = document.getElementById(targetID);
  // Creating seperate divs for each button to live
  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('button-div');
  buttonDiv.id = `button${symbol}`;

  containerId.appendChild(buttonDiv);

  // Then creating the button inside each of those divs
  const buttonDivId = document.getElementById(`button${symbol}`);

  const calcButton = document.createElement('button');
  calcButton.textContent = `${symbol}`;
  calcButton.classList.add('button');

  buttonDivId.appendChild(calcButton);
}

// Iterate through the array and create each button
function numberButtonCreation(list, ID) {
  for (let i = 0; i < list.length; i += 1) {
    buttonCreation(list[i], ID);
  }
}

// create the numberButtons in the left container
numberButtonCreation(functionButtonSymbols, 'symbolButtonContainer');

// create the symbolButtons in the right container
numberButtonCreation(numberButtonSymbols, 'numberButtonContainer');

// create calculation field
const calcDivId = document.getElementById('calculationFieldContainer');

const calculationField = document.createElement('p');
calculationField.id = 'calculationFieldText';
calculationField.textContent = '0';

calcDivId.appendChild(calculationField);

function addition(currentValue, newValue) {
  let addedValue = currentValue + newValue;
  addedValue = addedValue.toFixed(2);
  return addedValue;
}

function subtraction(currentValue, newValue) {
  let subractedValue = currentValue - newValue;
  subractedValue = subractedValue.toFixed(2);
  return subractedValue;
}

// Don't need this seeing only button preses will be processed
// function numberCheck(newValue) {
//   const typeCheck = (typeof newValue)
//   if (typeCheck !== number) {
//     window.alert('Please enter a number')
//   }
// }

// Tracking tile clicked by ID seems more logical
// tiles.forEach(
//   // Tracks all the tiles and their index (0-8)
//   (tileDivElement, i) =>
//   // Tracks which tile has been clicked and returns the index
//     tileDivElement.addEventListener('click', ((e) => {
//       // Function that changes the input field
//       addInput(i);
//     })),
// );

// console.log(addition(500.1547, -30156.15489496));
// console.log(subtraction(500.1547, -30156.15489496));
