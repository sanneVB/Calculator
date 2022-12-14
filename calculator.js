// Creating a list of symbols that should appear on the number buttons
// Should be listed in the order that they appear from top left
const numberButtonSymbols = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];

// Creating a list of symbols that should appear on the function buttons
// Should be list from top to bottom
const functionButtonSymbols = ['CE', '-', '+', '='];

// Make the text in the calculationField targetable for innerHTML

let newNumberCreation = true;
// let operatorPressed = false;
let currentValue = '0';
let formerValue = '';

function clearEverything() {
  const currentParagraphID = document.getElementById('currentCalcParagraph');
  const historyFieldTextID = document.getElementById('historyFieldText');
  currentValue = '0';
  formerValue = '';
  newNumberCreation = true;
  currentParagraphID.innerHTML = currentValue;
  historyFieldTextID.innerHTML = formerValue;
}

function minus() {
  const currentParagraphID = document.getElementById('currentCalcParagraph');
  const historyFieldTextID = document.getElementById('historyFieldText');
  if (!newNumberCreation) {
    formerValue += `${currentValue} - `;
    currentValue = '';
    historyFieldTextID.innerHTML = formerValue;
    currentParagraphID.innerHTML = currentValue;
    newNumberCreation = true;
  }
}

function plus() {
  const currentParagraphID = document.getElementById('currentCalcParagraph');
  const historyFieldTextID = document.getElementById('historyFieldText');
  if (!newNumberCreation) {
    formerValue += `${currentValue} + `;
    currentValue = '';
    historyFieldTextID.innerHTML = formerValue;
    currentParagraphID.innerHTML = currentValue;
    newNumberCreation = true;
  }
}

function equals() {
  if (!newNumberCreation && currentValue.length !== 0) {
    const currentParagraphID = document.getElementById('currentCalcParagraph');
    const historyFieldTextID = document.getElementById('historyFieldText');
    historyFieldTextID.innerHTML += `${currentValue} = `;
    // eslint-disable-next-line no-eval
    currentValue = eval(formerValue + currentValue);
    formerValue = currentValue;
    currentParagraphID.innerHTML = currentValue;
    currentValue = '';
  }
}

function numberButtonResponse(e) {
  const currentParagraphID = document.getElementById('currentCalcParagraph');
  if (newNumberCreation) {
    currentValue = e.target.innerHTML;
    currentParagraphID.innerHTML = currentValue;
    newNumberCreation = false;
  } else {
    currentValue += e.target.innerHTML;
    currentParagraphID.innerHTML = currentValue;
  }
}

const buttonPressed = function presser(e) {
  if (e.target.parentNode.id === 'numberButtonContainer') {
    numberButtonResponse(e);
  } else {
    const functionPressed = e.target.id;
    switch (functionPressed) {
      case 'buttonCE':
        clearEverything();
        break;
      case 'button-':
        minus();
        break;
      case 'button+':
        plus();
        break;
      case 'button=':
        equals();
        break;
      default:
    }
  }
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

// Target the main calculationFieldContainer
const calcDivId = document.getElementById('calculationFieldContainer');

// Create a div for the history paragraph to live in
const historyCalcTextDiv = document.createElement('div');
historyCalcTextDiv.id = 'historyCalcTextDiv';
historyCalcTextDiv.classList.add('calculationDiv');
calcDivId.appendChild(historyCalcTextDiv);

const historyCalcTextDivId = document.getElementById('historyCalcTextDiv');

const historyFieldText = document.createElement('p');
historyFieldText.id = 'historyFieldText';
historyFieldText.textContent = `${formerValue}`;

historyCalcTextDivId.appendChild(historyFieldText);

const currentCalcTextDiv = document.createElement('div');
currentCalcTextDiv.id = 'currentCalcTextDiv';
currentCalcTextDiv.classList.add('calculationDiv');
calcDivId.appendChild(currentCalcTextDiv);

const currentCalcDivId = document.getElementById('currentCalcTextDiv');

const currentCalcText = document.createElement('p');
currentCalcText.id = 'currentCalcParagraph';
currentCalcText.textContent = `${currentValue}`;

currentCalcDivId.appendChild(currentCalcText);
