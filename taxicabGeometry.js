const blocksAway = function (directions) {
  let x = 0;
  let y = 0;

  for (let i = 0; i < directions.length; i++) {
    // console.log(directions[i])
    if (directions[i] === "right") {
      y = directions[i + 1];
      console.log("y: ", y)
    } else if (directions[i] === "left") {
      x = directions[i + 1]
      console.log("x: ", x)
    }
  }
  return [y, x]




};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));