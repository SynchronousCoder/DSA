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


/**
 * ROCK, PAPER, SCISSORS
 */
// let arr = ["rock","rock","rock","rock","rock","paper","paper","paper","scissors","scissors",];
// let r = p = s = 0;

// let temp = new Array;
// function myResult(string){
//         for(let i = 0; i < arr.length; i++){
//         temp[i] = string
//     }
// }

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == "rock"){
//         r++
//     }else if(arr[i] == "paper"){
//         p++
//     }else{
//         s++
//     }
// }
// // console.log(r,p,s);
// if(r > p && r > s){
//     myResult("paper")
// }else if(p > r && p > s){
//     myResult("scissors")
// }else{
//     myResult("rock")
// }

// console.log(temp)


/**
 * SORTING
 * Selection Sort
 */
// let arr = [9,10,2,3,7]

// for(let i = 0; i < arr.length; i++){
//     let smallest = arr[i]
//     let sIndex = i
//     for(let j = i+1; j < arr.length; j++){
//         if(smallest > arr[j]){
//             smallest = arr[j]
//             sIndex = j
//         }
//     }
//     let temp = arr[i]
//     arr[i] = arr[sIndex]
//     arr[sIndex] = temp
//     console.log(arr)
//     console.log("  ")
// }


/**
 * SORTING
 * Bubble Sort
 */
// let arr = [5,3,8,1,6]
// let n = arr.length

// for(let i = 0; i < n; i++){
//     let bIndex = 0
//     for(let j = 1; j <= n-i-1; j++){
//         if(arr[bIndex] > arr[j]){
//             let temp = arr[bIndex]
//             arr[bIndex] = arr[j]
//             arr[j] = temp

//             bIndex = j
//         }else{
//             bIndex = j
//         }
//         console.log("bindex : ",arr[bIndex],bIndex,j, arr)
//     }
//     console.log(" ")
// }


/**
 * SORTING
 * Insertion Sort
 */
let arr = [5,8,1,10,15,7]
let n = arr.length

for(let i = 1; i < n; i++){
    let key = i
    let j = i-1

    while(j >= 0){
        if(arr[j] < arr[key]) break;
        else if(arr[j] > arr[key]){
            let temp = arr[j]
            arr[j] = arr[key]
            arr[key] = temp

            j--
            key--
        }
    }
    console.log(arr)
    // console.log(" ")
}
// console.log(arr)