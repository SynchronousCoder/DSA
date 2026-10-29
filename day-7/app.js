/**
 * Find the only prime factors of a given number
 */
// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter the number: "));
// let arr = [];
// let i = 2;

// for (let j = 2; j <= Math.sqrt(n); j++) {

// }

// while (n > 1) {
//   if (n % i === 0) {
//     arr.push(i);
//     n = Math.floor(n / i);
//     console.log(
//       "n after divide by current factor : ",
//       n,
//       "current factor : ",
//       i,
//     );
//   } else {
//     i++;
//   }
// }

// console.log(arr.join(" "));

/**
 * Check whether the code is ISTD or not ?
 */
// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter the number: "));

// let temp = n;

// let count = 10;
// let sum = 0;

// while(temp > 0){
//   let digit = temp%10
//   console.log("digit = ", digit)
//   sum += digit*count

//   console.log(`${count} X ${digit} = `, sum)

//   count--
//   temp = Math.floor(temp/10)
// }

// console.log("FINAL SUM : ", sum)

// sum % 11 == 0 ? console.log("Yes") : console.log("No")

/**
 * RESTURANT WITH DO-while
 */
// let prompt = require("prompt-sync")();
// let n, i;
// do {
//   console.log("Enter 1 for Indian Food");
//   console.log("Enter 2 for Chinese Food");
//   n = Number(prompt("Enter the number: "));

//   switch (n) {
//     case 1: {
//       do {
//         console.log("Click 1 For : Rajma Chawal");
//         console.log("Click 2 For : Chole Bhature");
//         console.log("Click 3 For : Dal Makhani");

//         i = Number(prompt("Enter the number : "));
//         i = Number(prompt("Enter the number 10 to order again : "));
//       } while (i == 10);
//       console.log("Congratulations, Wait your order is prepraing");
//       break;
//     }
//     case 2: {
//       do {
//         console.log("Click 1 For : Chilly Potato");
//         console.log("Click 2 For : Spring Roll");
//         console.log("Click 3 For : Momos");

//         i = Number(prompt("Enter the number : "));
//         i = Number(prompt("Enter the number 10 to order again : "));
//       } while (i == 10);
//       console.log("Congratulations, Wait your order is prepraing");
//       break;
//     }
//     case 0:
//       console.log("Thank you!");
//       break;

//     default:
//       console.log("Invalid choice!");
//   }
// } while (n !== 0);

/**
 * DRAW PATTERN'
 */
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number: "));

//1
// for(let i = 1; i <= n; i++){
//   for(let j = n; j >= i; j--){
//     process.stdout.write("* ")
//   }
//   console.log()
// }

//2
// for (let i = 1; i <= n; i++) {
//   for (let s = n - 1; s >= i; s--) {
//     process.stdout.write(" ");
//   }
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

//3 V shape
// let end = 2 * n - 1; // end = 5 & start = 1
// let start = 1;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= 2 * n - 1; j++) {
//     if (start == j || j == end) {
//       process.stdout.write("*");
//     } else if (start > end) {
//       break;
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
//   start++;
//   end--;
// }


//4 X Shape
let start = 1;
let end = n;
for(let i = 1; i <= n; i++){
  for(let j = 1; j <= n; j++){
    if(start == j || end == j){
      process.stdout.write("*")
    }
    else if(start > n || end < 0){
      break
    }
    else{
      process.stdout.write(" ")
    }
  }
  start++, end--;
  console.log()
}