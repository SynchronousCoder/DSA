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

//3.1) Reverse Array [without extra array]
// let arr = [10, 20, 30,40,50,60];
// let i = 0
// let n = arr.length-1

// console.log("original : ", arr)

// while(n > i){
//   let a = arr[i];
//   arr[i] = arr[n];
//   arr[n] = a;

//   i++;
//   n--;
// }

// console.log("Reversed : ", arr)

//3.1) Reverse Array [with extra array]
// let arr = [10, 20, 30,40,50,60];
// let temp = new Array(arr.length)
// let j = 0
// for(let i = arr.length-1; i >= 0; i--){
//   temp[j] = arr[i]
//   j++
// }
// console.log(temp)

//4) Array Left Rotation
// let arr = [1,2,3,4]
// let i = 0;

// while(arr.length-1 > i){
//   let first = arr[i]
//   arr[i] = arr[i+1]
//   arr[i+1] = first
//   i++
// }

// console.log(arr)

/**
 * 5.1)Moves 0 [with extra space]
 */
// let arr = [0, 1, 0, 1, 1];
//      let temp = new Array(arr.length);

//      let zero = 0;
//      let one = 0;

//      let i = 0, j = 0;

//      while (j < arr.length) {
//           if (arr[j] == 0) {
//                zero++;
//                j++
//           } else {
//                one++;
//                j++
//           }
//      }
// console.log(zero, one)
//      while (i < temp.length) {
//           if (one > 0) {
//                temp[i] = 1;
//                i++;
//                one--;
//           } else if (zero > 0) {
//                temp[i] = 0;
//                i++;
//                zero--;
//           } else {
//                break;
//           }
//      }

/**
 * 5.2)Moves 0 [without extra space]
 */
// let arr = [1 ,0 ,1 ,0 ,1 ,0];

// let i = 0;
// let j = i+1;

// while(j < arr.length){
//   // 0 < 1
//   if(arr[i] < arr[j]){
//     let zero = arr[i]
//     arr[i] = arr[j]
//     arr[j] = zero

//     i++, j++;
//   }
//   // 0 = 0
//   else if(arr[i] == arr[j]){
//     j++
//   }
//   // 1 > 0
//   else{
//     i++, j++;
//   }
// }
// console.log(arr)

/**
 * 6) Array Rotation [right]
 */
// let arr = [1,2,3,4,5]
// let n = arr.length - 1

// for(let i = n; i > 0; i--){
//   let swap = arr[i] //5
//   arr[i] = arr[i-1] //5->4
//   arr[i-1] = swap   //4->5

//   console.log(arr)
// }

/**
 *
 */
// let arr = [-1, 3, -2, 5]
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//   for(let j = i+1; j< arr.length; j++){
//     let difference = Math.abs(arr[i] - arr[j])
//     sum += difference
//   }
// }
// console.log(sum)

/**
 *
 */
// let arr = [1, 2, 1, 2, 1, 3];
// Write your code here
// let sumL = 0,sumR = 0;
// let mid = arr.length / 2 - 1;

// console.log("mid : ", mid)

// for (let i = 0; i <= mid; i++) {
//   sumL += arr[i];
// }

// for (let i = mid+1; i < arr.length; i++) {
//   sumR += arr[i];
// }

// if (sumL > sumR || sumL < sumR) {
//   console.log( Math.abs(sumL - sumR))
// } else {
//   console.log(0);
// }
