// Testing dynamically created content
// const rootId = document.getElementById('root');
const containerId = document.getElementById('container');
// console.log(document.getElementsByClassName('container'));

function buttonCreation(symbol) {
  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('button-div');
  buttonDiv.id = `button${symbol}`;

  containerId.appendChild(buttonDiv);

  const buttonDivId = document.getElementById(`button${symbol}`);

  const calcButton = document.createElement('button');
  calcButton.textContent = `${symbol}`;
  calcButton.classList.add('button');

  buttonDivId.appendChild(calcButton);
}

function numberButtonCreation(start, end) {
  for (let i = start; i <= end; i += 1) {
    buttonCreation(i);
  }
}

numberButtonCreation(7, 9);
buttonCreation('CE')
numberButtonCreation(4, 6);
buttonCreation('-')
numberButtonCreation(1, 3);
buttonCreation('+')
buttonCreation(0);
buttonCreation('.');
buttonCreation('=');

// function buttonOrder(start, end, row) {
//   for (let i = start, i <= end; i += 1){
//     const buttonId = document.getElementById(`${i}`)
//     buttonId.classList.add
//   }
// }
// const calcButton = document.createElement('button');

// calcButton.textContent = '7';
// containerId.appendChild(calcButton);
// calcButton.textContent = '8';
// getElementsByClassName.appendChild(calcButton);
// calcButton.textContent = '9';
// getElementsByClassName.appendChild(calcButton);

// calcContainer.classList.add('container');
// rootId.appendChild(calcContainer)

// const numberButton =

// const calculator = document.createElement;

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
