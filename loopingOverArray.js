//Traditional for Loops:
const amounts = [61.00, 52.25, 112.99, 5.00];

let total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log("Order total is: ", total);


// Newer for..of Loops:

let totalNew = 0;
for (let amount of amounts) {
  totalNew += amount;
}
console.log("Order New total is: ", totalNew);