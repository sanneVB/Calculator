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

// function numberCheck(newValue) {
//   const typeCheck = (typeof newValue)
//   if (typeCheck !== number) {
//     window.alert('Please enter a number')
//   }
// }
// tiles.forEach(
//   // Tracks all the tiles and their index (0-8)
//   (tileDivElement, i) =>
//   // Tracks which tile has been clicked and returns the index
//     tileDivElement.addEventListener('click', ((e) => {
//       // Function that changes the input field
//       addInput(i);
//     })),
// );

console.log(addition(500.1547, -30156.15489496));
console.log(subtraction(500.1547, -30156.15489496));
