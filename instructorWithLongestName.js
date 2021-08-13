
let instructors = [
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
];


const instructorWithLongestName = function (instructors) {
  // Put your solution here
  let longestName = instructors[0].name;
  for (let i = 0; i < instructors.length; i++) {
    let name = instructors[i].name;
    if (name.length > longestName.length) {
      longestName = instructors[i];
    }
  }
  return console.log(longestName);
}

instructorWithLongestName(instructors)