/**
 * Whether a number is even or odd
 */

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter the number: "));

// if (n % 2 == 0) {
//   console.log(`${n} is Even no`);
// } else {
//   console.log(`${n} is Odd no`);
// }

/**
 * Leap year or not
 */
// let prompt = require("prompt-sync")();
// let year = Number(prompt("Enter year : "));

// if (year % 4 == 0 && year % 100 != 0) {
//   console.log(`${year} is leap year`);
// } else if (year % 400 == 0) {
//   console.log(`${year} is leap year`);
// } else {
//   console.log(`${year} is not a leap year`);
// }

/**
 * DISCOUNT Q.
 * 0-5000 0%
 * 5001 - 7000 5%
 */

// let prompt = require("prompt-sync")();
// let expenditure = Number(prompt("Enter your total bill : "));

// let discountAmmount, discont, total;

// if (expenditure > 0 && expenditure <= 5000) {
//   total = expenditure;
//   console.log(`Total amount : ${total}`);
// } else if (expenditure > 5000 && expenditure <= 7000) {
//   discont = 5 / 100;
//   discountAmmount = expenditure * discont;
//   total = expenditure - discountAmmount;
//   console.log(`Total amount : ${total}`);
// } else if (expenditure > 7000 && expenditure <= 9000) {
//   discont = 10 / 100;
//   discountAmmount = expenditure * discont;
//   total = expenditure - discountAmmount;
//   console.log(`Total amount : ${total}`);
// } else if (expenditure > 9000) {
//   discont = 20 / 100;
//   discountAmmount = expenditure * discont;
//   total = expenditure - discountAmmount;
//   console.log(`Total amount : ${total}`);
// }

/**
 * BIJLI BILL
 * upto 100 - Rs 4.2/unit
 * upto 101-200 - Rs 6/unit
 * upto 201-400 - Rs8/unit
 * upto 400 - Rs13/unit
 */

let prompt = require("prompt-sync")();
let totalUnit = Number(prompt("Enter total unit used : "));
let totalAmount;

//Normal Approach
// if (totalUnit <= 100) totalAmount = 4.2 * totalUnit;
// else if (totalUnit > 100 && totalUnit <= 200)
//   totalAmount = 4.2 * 100 + 6 * (totalUnit - 100);
// else if (totalUnit > 200 && totalUnit <= 400)
//   totalAmount = 4.2 * 100 + 6 * 100 + 8 * (totalUnit - 200);
// else totalAmount = 4.2 * 100 + 6 * 100 + 8 * 200 + 13 * (totalUnit - 400);

//Mentos Approach 700
if (totalUnit > 400) {
  totalAmount = (totalUnit - 400) * 13; //700-400 = 300
  totalUnit = 400;
}
if (totalUnit > 200 && totalUnit <= 400) {
  totalAmount += (totalUnit - 200) * 8;
  totalUnit = 200;
}
if (totalUnit > 100 && totalUnit <= 200) {
  totalAmount += (totalUnit - 100) * 6;
  totalUnit = 100;
}
totalAmount += totalUnit * 4.2;

console.log(`Rs. ${totalAmount} you have to pay for ${totalUnit} units`);
