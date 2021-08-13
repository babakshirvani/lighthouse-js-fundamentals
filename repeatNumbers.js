let data = [[10, 4], [34, 6], [92, 2]];

const repeatNumbers = function (data) {
  let numberOfRepeat = 0;
  let newNumber = "";
  for (let i = 0; i < data.length; i++) {
    numberOfRepeat = data[i][1];
    for (let k = 0; k < numberOfRepeat; k++) {
      newNumber += data[i][0];
    }
    console.log(data.indexOf(data[i]))
    if (data.indexOf(data[i]) < data.length - 1) {
      newNumber += ", ";
    }
  }
  return newNumber;
}

console.log(repeatNumbers(data));