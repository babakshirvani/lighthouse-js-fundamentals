
const urlDecode = function (text) {
  const output = {};
  let key = [];
  let value = [];
  let inputText = text.replace(/%20/g, " ").split("&")
  for (let i = 0; i < inputText.length; i++) {
    key = inputText[i].slice(0, inputText[i].search("="));
    value = inputText[i].slice((inputText[i].search("=") + 1), inputText[i].length);
    output[key] = value;
  };
  return output;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);