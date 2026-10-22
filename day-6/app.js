// function printFactors(n) {
//   // Write your logic here
//   let ans = [];
//   for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//       ans.push(i)
//     }
//   }
//   process.stdout.write(ans.join(" "));
// }
// printFactors(10);


//draw patter :
//   *
//  ***
// *****

// for (let i = 0; i <= 2; i++) {
//   for (let s = 0; s < 2 - i; s++) {
//     process.stdout.write(" ");
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }


/**
 * DRAW PATTER : 
*********
 *******
  *****
   ***
    *
 */
let n = 5; //how many rows should exist
let star = 2 * n - 1; //how many star in 1st line

for (let i = 0; i < n; i++) {
  for (let s = 0; s < i; s++) {
    process.stdout.write(" ");
  }

  for (let j = 0; j < star - 2 * i; j++) {
    process.stdout.write("*");
  }

  console.log();
}
