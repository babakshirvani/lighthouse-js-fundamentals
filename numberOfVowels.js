
let data = "lighthouse labs";


const numberOfVowels = function (data) {
  // Put your solution here
  let vowels = 0;
  for (i = 0; i < data.length; i++) {
    if (data[i] === "a" || data[i] === "e" || data[i] === "i" || data[i] === "o" || data[i] === "u") {
      vowels += 1;
    }
  }
  return vowels;

};

console.log(numberOfVowels(data));