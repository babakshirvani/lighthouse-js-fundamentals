let input = "this is a string";

const camelCase = function (input) {
  const NewStrings = input.split(" ");
  for (var i = 1; i < NewStrings.length; i++) {
    NewStrings[i] = NewStrings[i].charAt(0).toUpperCase() + NewStrings[i].slice(1);
  }
  const JoinAllTheStrings = NewStrings.join("");
  return JoinAllTheStrings
}

console.log(camelCase(input));