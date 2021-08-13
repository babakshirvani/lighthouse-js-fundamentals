
const talkingCalendar = function (date) {
  // Your code here
  let parts = date.split('/');
  let month = Number(parts[1]);
  let day = Number(parts[2]);
  let year = parts[0];
  const days = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  /*
  for (let i = 0; i < months.length; i++) {
    if (month - 1 === months.indexOf(months[i])) {
      month = months[i];
    };
  };
  for (let j = 0; j < days.length; j++) {
    if (day - 1 === days.indexOf(days[j])) {
      day = days[j];
    };
  };
*/
  // OR

  month = months[month - 1];
  day = days[day - 1];
  return month + " " + day + ", " + year

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));