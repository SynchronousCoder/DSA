// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter the lenght of array: "));

// let arr = new Array(n);
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Number(prompt(`Enter ${i + 1} value of array : `));
// }
// console.log(arr);

// 1) Sum and Mean of array
// let sum = 0
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }
// let mean = (sum/arr.length).toFixed(1)
// console.log("SUM : ", sum, "Mean : ", mean)

// 2) 2 Greatest number
// let arr = [10, 23, 45, 67, 89];

// let max, sMax;

// //defining greater and greatest
// if (arr[0] > arr[1]) {
//   max = arr[0];
//   sMax = arr[1];
// }else{
//   max = arr[1];
//   sMax = arr[0];
// }

// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] > max) {
//     sMax = max;
//     max = arr[i];
//   } else if (arr[i] > sMax && arr[i] != max) {
//     sMax = arr[i];
//   }
// }
// console.log("2nd greatest : ", sMax);
// console.log("1st greatest : ", max);



//3) Reverse Array
let arr = [10, 20, 30,40,50,60];
let i = 0
let n = arr.length-1

console.log("original : ", arr)

while(n > i){
  let a = arr[i];
  arr[i] = arr[n];
  arr[n] = a;

  i++;
  n--;
}

console.log("Reversed : ", arr)