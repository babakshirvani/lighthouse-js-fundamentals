

const squareCode = function (message) {
  // Put your solution here
  let input = message.replace(/ +/g, "");
  let squareRoot = Math.ceil(Math.sqrt(input.length));
  let output = "";
  let arrayOfSqrt = [];
  while (input !== '') {
    //add the characters to our arrayOfSqrt (start index = zero, end index = squareRoot)
    arrayOfSqrt.push(input.slice(0, squareRoot));
    //slice the input by squareRoot
    input = input.slice(squareRoot, input.length);
  };
  for (let i = 0; i < arrayOfSqrt[0].length; i++) {
    output += arrayOfSqrt[0][i];
    for (let j = 1; j < arrayOfSqrt.length; j++) {
      if (arrayOfSqrt[j][i]) {
        output += arrayOfSqrt[j][i];
      };
    };
    output += " ";
  };
  return output;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));



//remove space from english text
//square root the number (round the number up)
//use the number of characters on each line (the number of columns).
