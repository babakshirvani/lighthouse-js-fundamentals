
let generateBoard = function (whiteQueen, blackQueen) {
  // creating a two-dimensional array of 8*8
  // [0, 0, 0, 0, 0, 0, 0, 0],
  // [0, 0, 0, 0, 0, 0, 0, 0],
  // [0, 0, 0, 0, 0, 0, 0, 0],
  // [0, 0, 0, 0, 0, 0, 0, 0],
  // [0, 0, 0, 0, 0, 0, 0, 0],
  // [0, 0, 0, 0, 0, 0, 0, 0],
  // [0, 0, 0, 0, 0, 0, 0, 0],
  // [0, 0, 0, 0, 0, 0, 0, 0]

  const myBoard = [];
  for (let i = 0; i < 8; i++) {
    myBoard.push([]);
    for (let j = 0; j < 8; j++) {
      myBoard[i].push(0)
    };
  };
  myBoard[whiteQueen[0]][whiteQueen[1]] = 1;
  myBoard[blackQueen[0]][blackQueen[1]] = 1;
  return myBoard;
};

let queenThreat = function (generatedBoard) {
  if (whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1]) {
    return true;
  } else if (whiteQueen[0] + blackQueen[1] === whiteQueen[1] + blackQueen[0]) {
    return true;
  } else if (whiteQueen[0] + whiteQueen[1] === blackQueen[0] + blackQueen[1]) {
    return true;
  };
  return false;
};


// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));


let whiteQueen = [0, 4];
let blackQueen = [3, 1];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));