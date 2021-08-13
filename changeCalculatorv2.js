const calculateChange = function (totalAmount, cashGiven) {

  let change = {};
  let difference = cashGiven - totalAmount;
  const currency = [
    { name: "twentyDollar", value: 2000 },
    { name: "tenDollar", value: 1000 },
    { name: "fiveDollar", value: 500 },
    { name: "twoDollar", value: 200 },
    { name: "oneDollar", value: 100 },
    { name: "quarter", value: 25 },
    { name: "dime", value: 10 },
    { name: "nickel", value: 5 },
    { name: "penny", value: 1 },
  ];
  for (let i = 0; i < currency.length; i++) {
    //e.g: Math.floor(213/2000) = 0 , and Math.floor(213/200)= 1
    change[currency[i].name] = Math.floor(difference / currency[i].value)
    // depends on line 18, if our output equals to 0 then nothing will be minus from our value (213)
    // so if we take value 2000, then 2000 * (output of the line 18 which is 0) = 0
    // if we go with value 200, then 200 * (output of the line 18 which is 1) = 200
    //so we have 213-200 = 13, 
    difference -= currency[i].value * change[currency[i].name]
  }
  // to clean our output. we need to loop in value in change object and remove those with value: 0
  for (const value in change) {
    if (change[value] === 0) {
      delete change[value]
    }
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));