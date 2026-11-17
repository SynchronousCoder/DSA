// let name = "JAI";
// let arr = name.split("")
// console.log("arr = >", arr)
// let n = name.length;
// let i = 0;
// let j = n - 1;

// while (j >= i) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   j--;
//   i++;
// }

// console.log(arr.join(""));

/**
 * TOGGLE APLHABET CASE
 */
// let str = "arYan123";

// let ans = ""
// for (let i = 0; i < str.length; i++) {
//   let ascii = str.charCodeAt(i);

//   if (ascii >= 97 && ascii <= 122) {
//     ans = ans + String.fromCharCode(ascii - 32);
//   } else if(ascii >= 65 && ascii <=90) {
//     ans = ans + String.fromCharCode(ascii + 32);
//   }else{
//     ans += String.fromCharCode(ascii)
//   }
// }
// console.log(ans)

/**
 * 
 */
let arr = ["java", "javascript", "python", "javadoc", "c"];
let prefix = "java";

let count = 0

for(let i = 0; i < arr.length; i++){
  let ans = ""
  let word = `${arr[i]}`
  for(let j = 0; j < prefix.length; j++){
    ans = ans + word[j]
  }
  ans == prefix ? count++ : "false"
}
console.log(count)