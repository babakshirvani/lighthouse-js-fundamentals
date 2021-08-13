


const makeCase = function (input, style) {
  if (typeof style === "string") {
    switch (style) {
      case "camel":
        return camel(input);
      case "pascal":
        return pascal(input);
      case "snake":
        return snake(input);
      case "kebab":
        return kebab(input);
      case "title":
        return title(input);
      case "vowel":
        return vowel(input);
      case "consonant":
        return consonant(input);
      case "upper":
        return upper(input);
    };
  } else if (typeof style === "object") {
    let output = input;
    for (let i = 0; i < style.length; i++) {
      let myOutput = style[i];
      switch (myOutput) {
        case "camel":
          output = camel(output);
          break;
        case "pascal":
          output = pascal(output);
          break;
        case "snake":
          output = snake(output);
          break;
        case "kebab":
          output = kebab(output);
          break;
        case "title":
          output = title(output);
          break;
        case "vowel":
          output = vowel(output);
          break;
        case "consonant":
          output = consonant(output);
          break;
        case "upper":
          output = upper(output);
          break;
      };
    };
    return output;
  };
};

let camel = function (input) {
  const myInput = input.split(" ");
  for (let i = 1; i < myInput.length; i++) {
    myInput[i] = myInput[i].charAt(0).toUpperCase() + myInput[i].slice(1);
  };
  const JoinAllTheStrings = myInput.join("");
  return JoinAllTheStrings;
};

let pascal = function (input) {
  const myInput = input.split(" ");
  for (let i = 0; i < myInput.length; i++) {
    myInput[i] = myInput[i].charAt(0).toUpperCase() + myInput[i].slice(1);
  };
  const JoinAllTheStrings = myInput.join("");
  return JoinAllTheStrings;
};

let snake = function (input) {
  const output = input.split(" ").join("_");
  return output;
};

let kebab = function (input) {
  const output = input.split(" ").join("-");
  return output;
};

let title = function (input) {
  const myInput = input.split(" ");
  for (let i = 0; i < myInput.length; i++) {
    myInput[i] = myInput[i].charAt(0).toUpperCase() + myInput[i].slice(1);
  };
  const JoinAllTheStrings = myInput.join(" ");
  return JoinAllTheStrings;
};

let vowel = function (input) {
  let myInput = input.split(" ");
  let output = [];
  for (let i = 0; i < myInput.length; i++) {
    let eachElement = myInput[i].split("");
    for (let j = 0; j < eachElement.length; j++) {
      if (eachElement[j] === "a" || eachElement[j] === "e" || eachElement[j] === "i" || eachElement[j] === "o" || eachElement[j] === "u") {
        eachElement[j] = eachElement[j].toUpperCase();
      };
    };
    output.push(eachElement.join(""));
  };
  const JoinAllTheStrings = output.join(" ");
  return JoinAllTheStrings;
};

let consonant = function (input) {
  let myInput = input.split(" ");
  let output = [];
  for (let i = 0; i < myInput.length; i++) {
    let eachElement = myInput[i].split("");
    for (let j = 0; j < eachElement.length; j++) {
      if (!(eachElement[j] === "a" || eachElement[j] === "e" || eachElement[j] === "i" || eachElement[j] === "o" || eachElement[j] === "u")) {
        eachElement[j] = eachElement[j].toUpperCase();
      };
    };
    output.push(eachElement.join(""));
  };
  const JoinAllTheStrings = output.join(" ");
  return JoinAllTheStrings;
};

let upper = function (input) {
  let output = input.split(" ");
  for (let i = 0; i < output.length; i++) {
    output[i] = output[i].toUpperCase();
  };
  const JoinAllTheStrings = output.join(" ");
  return JoinAllTheStrings;
};



console.log(makeCase("this is a string", "upper"));
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));