let prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number: "));
function printFactors(n) {
    // Write your logic here
    let ans = []
    for(let i = 1; i<=n; i++){
        if(n % i == 0){
            ans.push(i)
        }
    }
    process.stdout.write(ans.join(" "))
}

module.exports = { printFactors };