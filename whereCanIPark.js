
let spots = [
  ['s', 's', 's', 's', 's', 's'],
  ['s', 'm', 's', 'S', 'r', 's'],
  ['s', 'm', 's', 'S', 'r', 's'],
  ['S', 'r', 's', 'm', 'r', 's'],
  ['S', 'r', 's', 'm', 'R', 's'],
  ['S', 'r', 'S', 'M', 'm', 'S']
];

let vehicle = 'motorcycle';


const whereCanIPark = function (spots, vehicle) {
  for (let i = 0; i < spots.length; i++) {
    for (let j = 0; j < spots.length; j++) {
      let locationSpot = spots[i][j];
      if (vehicle === "regular" && locationSpot === "R") {
        return [j, i];
      } else if ((vehicle === "small") && (locationSpot === "R" || locationSpot === "S")) {
        return [j, i];
      } else if ((vehicle === "motorcycle") && (locationSpot === "R" || locationSpot === "S" || locationSpot === "M")) {
        return [j, i];
      }
    }
  }
  return false;
}
console.log(whereCanIPark(spots, vehicle))