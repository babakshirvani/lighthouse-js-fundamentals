let data = [1, 2, 3, 4, 5];

const sumLargestNumbers = function (data) {
  let largestNumberOne = 0;
  let largestNumberTwo = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] > largestNumberOne) {
      largestNumberOne = data[i]
    }
  }

  let newData = data
  newData.splice(newData.indexOf(largestNumberOne), 1);

  for (j = 0; j < newData.length; j++) {
    if (j > largestNumberTwo) {
      largestNumberTwo = newData[j];
    }
  }

  return largestNumberOne + largestNumberTwo
}

console.log(sumLargestNumbers(data))