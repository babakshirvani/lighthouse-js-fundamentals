
const organizeInstructors = function (instructors) {
  // we need empty object to store our data by course
  let organizedByCourse = {};

  for (let i = 0; i < instructors.length; i++) {
    let course = instructors[i].course;
    // check if course exist in organizedByCourse or not? if exist then push the instructor name.
    if (course in organizedByCourse) {
      organizedByCourse[course].push(instructors[i].name);
    } else { // if doesnt exist then add it to the object "orgnizedByCourse"
      organizedByCourse[course] = [instructors[i].name];
    }
  }
  return organizedByCourse;
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));