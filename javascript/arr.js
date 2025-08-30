// function a(n){
//     let j = 1;
//     let arr = []
//     for (let i=0; i<n; i++, j++){
//         arr.push(j);
//     }
//     return arr;
// }

// console.log(a(10));

// INPUIT IN ARRAY

const input = require("readline-synk");
let n = input.questionInt("enter the array length")
let arr = [];
for(let i=0; i<n; i++){
    arr[i] = input.questionInt("enter the array")
};