let values = [];
let condition = "odd"

const conditionalSum = function (values, condition) {
  let sumNumbers = 0;

  for (i = 0; i < values.length; i++) {
    if ((values[i] % 2 === 0) && (condition === "even")) {
      sumNumbers += values[i];
    } else if ((values[i] % 2 !== 0) && (condition === "odd")) {
      sumNumbers += values[i];
      // console.log(sumNumbers)
    } else {
      sumNumbers = 0
    }
  }
  return sumNumbers

};

console.log(conditionalSum(values, condition))