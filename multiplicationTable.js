let maxValue = 1;

const multiplicationTable = function (maxValue) {
  let result = "\n";
  for (let i = 1; i < maxValue + 1; i++) {
    for (let j = 1; j < maxValue + 1; j++) {
      result += (i * j) + " ";
    }
    result += "\n"
  }
  return result
}

console.log(multiplicationTable(maxValue));