
let text = " Lighthouse Labs ";


const urlEncode = function (text) {
  // Put your solution here
  let newWord = "";
  for (i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      if (i === 0 || i === text.length - 1) {
        newWord += "";
      } else {
        newWord += "%20"
      }
    } else {
      newWord += text[i]
    }
  }
  return newWord
};

console.log(urlEncode(text))