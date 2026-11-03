/**
 * MULTIPLICATION OF PREVIOUS AND NEXT ELEMENTS IN AN ARRAY
 **/
//    let arr = [1, 2, 3, 4, 5];
//     let temp = [...arr];

//     let prev;

//     for (let i = 0; i <= arr.length-1; i++) {
//     //first element
//     if(i == 0){
//         arr[i] = arr[i]*arr[i+1]
//     }
//     //last element
//     else if(i == arr.length - 1){
//         prev = temp[arr.length - 1-1]
//         arr[i] = prev*arr[i]
//         console.log(arr[i])
//     }
//     //midElement
//     else{
//         prev = temp[i-1]
//         arr[i] = prev*arr[i+1]
//     }
// }

// console.log(arr)


/**
 * Sort 1st half Asec and 2nd half Descending of an array
 */
// let arr = [2, 6, 3, 1, 9, 8, 5];
// let mid = Math.floor(arr.length/2)

// //1st half
// for(let i = 0; i < mid; i++){
//     for(let j = i+1; j < mid; j++){
//         if(arr[i] > arr[j]){
//             let swap = arr[j]
//             arr[j] = arr[i]
//             arr[i] = swap
//         }
//     }
// }

// //2nd half
// for(let i = mid; i < arr.length; i++){
//     for(let j = i+1; j < arr.length; j++){
//         if(arr[i] < arr[j]){
//             let swap = arr[i]
//             arr[i] = arr[j]
//             arr[j] = swap
//         }
//     }
// }
// return
// console.log(arr)