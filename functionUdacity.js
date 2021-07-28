/*
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

//console.log(makeLine(10));

function buildTriangle(length) {
  var triangle = "";
  var lineNumber = 1;
  for (lineNumber=1; lineNumber<=length; lineNumber++) {
    triangle = triangle + makeLine(lineNumber);

  }
  return triangle;
}

console.log(buildTriangle(10));

*/

var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};


function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
console.log(helloCat(catSays));
