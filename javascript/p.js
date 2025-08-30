
// // let array = [];
// // let input = require("readline-sync");
// // let a = input.questionInt("Enter the number");
// // for(let i = 0; i < a; i++){
// //     array[i] = input.questionInt("Enter the value");
// // }

// // let array = function(){

// // }

// //this is question numbber 1.
// // function pizza(n, x){
// //     let p = 1
// //     let cop = "";
// //     for(let i = 1; cop<(n*x); i++){
// //         p++;
// //         cop = p*4;
// //     }
// //     return p;
// // }

// // console.log(pizza(n, x));
// // //to there.

// // //Question number 2.
// // // count all prime number.
// // function s(n){
// //     let i=2;
// //     let j=1;
// //     let count1 = 0;
// //     let count = 0;
// //     while(i<=n){
// //         j=1;
// //         count = 0
// //         while(i>=j){
// //             if(i%j==0){
// //                 count+=1
// //             }
// //             j++
// //         }
// //         if(count==2){
// //             count1+=1;
// //         }
// //          i++;
        
// //     }
// //     return count1;
// // }
// // console.log(s(10));
// // //end

// // function ans(hasValidID, isAbove21, isInvited){
// //     if(hasValidID == true && isAbove21 == true && isInvited == true){
// //         return true;
// //     } else if(hasValidID == true && isAbove21 == true && isInvited == false) {
// //         return false;
// //     } else if(hasValidID == true && isAbove21 == false && isInvited == true){
// //         return true;
// //     } else if(hasValidID == true && isAbove21 == false && isInvited == false){
// //         return false;
// //     } else if(hasValidID == false && isAbove21 == true && isInvited == true){
// //         return false;
// //     }
// // }

// // console.log(ans(true, false, true));


// // function p(arr){
// //     let temp = '';
// //     let length = arr.length;
// //     if(arr.length%2 != 0){
// //         length = arr.length-1;
// //     }
// //     for(let i=0; i<length; i++)
// //             if(i%2==0){
// //                 temp = arr[i];
// //                 arr[i] = arr[i+1];
// //                 arr[i+1] = temp;
// //     }
// //     return arr;
// // }

// // console.log(p([1, 2, 3, 4, 5, 6]));

// // function p(n){
// //     let str = '';
// //     while(n != 1 && n != 0){
// //         if(n%2==0){
// //             n /= 2;
// //         }
// //         else {
// //             n = (n*3)+1;
// //         };
// //         str = str + n + ' ';
// //     };
// //     return str;
// // };

// // console.log(p(7));
// // console.log(p(8));

// // // ----------------------->

// // let rotationCount = 1;
// // let arr = [1, 2, 3, 4, 5,];
// // let k = (arr.length - rotationCount);
// // let arr2 = arr.splice(k);
// // const a =  arr2.concat(arr);
// // console.log(a);

// // // =--------------------------------->

// // let x = 1234567;
// // let y = 3;

// // let z = 10**y;
// // let w = x%z;
// // let v = Math.floor(x/z);
// // let o = w*10000;
// // console.log(o+v);

// // // =------------------------------------>

// // function p(n){
// //     if(n<20){
// //         for(let i=1; i<=n; i++){
// //             let sqrt = Math.sqrt(i)
// //             if(sqrt != parseInt(sqrt)){
// //                 console.log(i);
// //             }
// //         }
// //     } else {
// //         for(let i=1; i<=20; i++){
// //             let sqrt = Math.sqrt(i)
// //             // console.log(sqrt);
// //             if(sqrt != parseInt(sqrt)){
// //                 console.log(i);
// //             }
// //         }
// //     }
// // }

// // p(25);

// // --------------------------------------------->

// // let sum = 0;
// // for(let i = 1; i<=10; i++){
// //     sum += i;
// // }
// // console.log(sum);

// // ---------------------------------------------->

// // for(let i = 1; i<=10; i++){
// //     if(i%2==0){
// //         console.log(i);
        
// //     }
// // }

// // --------------------------------------------->

// // let n = 10;
// // for(let i=0; i<=n; n--){
// //     console.log(n)
// // }

// // --------------------------------------------->

// // let sum = 0;
// // for(let i=1; i<=10; i++){
// //     if(i%2!=0){
// //         sum+=i;
// //     }
// // }
// // console.log(sum);

// // -------------------------------------------->

// // let str = "";
// // for(let i=1; i<=3; i++){
// //     str += "\n"
// //     for(let j=1; j<=i; j++){
// //         str = str + "*";
// //     }
// //     // console.log(str);
// // }

// // console.log(str);

// // ----------------------------------------------->



// function d(e){
// let a = 0;
// var b = 1;
// const c= 2;
// var b = 5;
// console.log(b)
// }
// d(3);

// // -------------------------------------------------------->

// // function generateDiagonalMatrix(n) {
// //     let matrix = Array.from({ length: n }, () => Array(n).fill(0));
// //     let num = 1;
// //     let row = 0, col = 0;
    
// //     // Filling the diagonal from top-right to bottom-left
// //     for (let diag = 0; diag < 2 * n - 1; diag++) {
// //         let r = diag < n ? diag : n - 1;
// //         let c = diag < n ? 0 : diag - n + 1;
        
// //         while (r >= 0 && c < n) {
// //             matrix[r][c] = num++;
// //             r--;
// //             c++;
// //         }
// //     }

// //     return matrix;
// // }

// // function printMatrix(matrix) {
// //     for (let row of matrix) {
// //         console.log(row.join('\t'));
// //     }
// // }

// // let n = 5;
// // let resultMatrix = generateDiagonalMatrix(n);
// // printMatrix(resultMatrix);

// // -------------------------------------------------------->


// // // INPUT = 5
// // // OUTPUT =>
// // // 1   6   10  13  15
// // // 16  2   7   11  14
// // // 20  17  3   8   12
// // // 23  21  18  4   9
// // // 25  24  22  19  5

// // let n = 5;
// // let arr = [];
// // let arr2 = []
// // let i = 0;
// // let j = 0;
// // while(i < n){
// //     while(j < n){
// //         arr.push(1);
// //         j++;
// //     }
// //     i++
// //     j = 0;
// //     arr2.push(arr);
// //     arr = [];
// // }

// // console.log(arr);
// // console.log(arr2);

// // i=0;
// // j=0;
// // let a=1;
// // let p=1;
// // let m=n;
// // let count=0;
// // while(m>0){
// // while(a<=m){
// //     arr2[i][j]=p;
// //     i++;
// //     j++;
// //     a++;
// //     p++;
// // }
// // count++
// // j=count;
// // i=0;
// // m--;
// // a=1;
// // }
// // console.log(arr2);

// // i=1;
// // j=0;
// // a=1;
// // m=n-1;
// // count=1;
// // while(m>0){
// // while(a<=m){
// //     arr2[i][j]=p;
// //     i++;
// //     j++;
// //     a++;
// //     p++;
// // }
// // count++
// // i=count;
// // j=0;
// // m--;
// // a=1;
// // }

// // console.log(arr2)

// // ------------------------------------------------------------->

// // let a = "dsakhfkdsgf";
// // console.log(typeof(a));

// // let arr = ["a","b","c"];
// // for(let i=0; i<arr.length; i++){
// //     console.log(arr[i]);
// // };

// // --------------------------------------------------------------->

// // let num = 19;
// // let colour = "Yellow";
// // if(colour == "Red" && num<15 && num>=0){
// //     console.log("Stop");
// // } else if(colour == "Yellow" && num<20 && num>=15){
// //     console.log("Get ready to go");
// // } else if(colour == "Green" && num<30 && num>=20){
// //     console.log("Go");
// // } else {
// //     console.log("invalid input");
// // };

// // // --------------------------------------------------------------->

// // let a = 5;
// // let b = 10;
// // let c = 4;

// // if(a>=(b+c) || b>=(c+a) || c>=(a+b)){
// //     console.log("Not a valid triangle");
// // } else if((a==b && b!=c) || (b==c && c!=a) || (c==a && a!=b)){
// //     console.log("Isosceles Triangle");
// // } else if ( a!=b && b!=c){
// //     console.log("Scalene Triangle");
// // } else if(a==b && b==c){
// //     console.log("Equilateral Triangle");
// // } 


// // ------------------------------------------------------------------------>


// // let n = 1000;
// // if(n>1000){
// //     console.log(n-(10*n/100));
// // } else if (n>500){
// //     console.log(n-(5*n/100));
// // } else {
// //     console.log(n);  
// // }


// // ------------------------------------------------------------------------>


// // function arr(arr){
// //     let ans = [];
// //     for(let i=0;i<arr.length;i++){
// //         ans.push(arr[i]*2);
// //     }
// //     return ans;
// // }

// // console.log(arr([]));

// // ------------------------------------------------------------------------>

// function sol(num1, num2, Oper){
//     if(Oper === '*'){
//         return num2*num1;
//     } else if(Oper === '+'){
//         return num2+num1;
//     }else if(Oper === '/'){
//         return num2/num1;
//     }else if(Oper === '-'){
//         return num1-num2;
//     }
// }

// console.log(sol(20, 40, '*'));
// console.log(sol(20, 33, '+'));
// console.log(sol(10, 20, '/'));
// console.log(sol(2, 3, '-'));
// console.log(sol(20, 83, '/'));


// // ----------------------------------------------------------------------------->


// // function volumeOf(r){
// //     if(!r){
// //         return 4/3*(22/7)*5**3;
// //     }
// //     return 4/3*(22/7)*r**3;
// // }

// // console.log(volumeOf());
// // console.log(volumeOf(6));

// // =------------------------------------------------------------------------------>

// // let arr = [1, [2, [3, 4], 5], 6]
// // let arr2 = arr.flat(arr.length)
// // console.log(arr2);

// // ------------------------------------------------------------------------------->

// const person = {
//     name: "Bablu",
//     age: 32,
//     address: {
//         street: "23 Abc Street",
//         city: "XYZ"
//     }
// };

// console.log(person);
// console.log(person.address);



// console.log(`Hi I'm ${person["name"]}, ${person["age"]} years old, living at ${person.address.street}, ${person.address.city}`);

// //--------------------------------------------------------------------------------->

// function createPersonObject(name, age, address) {
//     const person = {
//         name: name,
//         age: age,
//         address: address,

//         addFriend: function(friend) {
//             if (!this.friends) {
//                 this.friends = [];
//             }
//             this.friends.push(friend);
//         }
//     };
//     return person;
// }

// const person1 = createPersonObject("John Doe", 30, { street: "123 Elm Street", city: "Somewhere" });
// const person2 = createPersonObject("Jane Smith", 28, { street: "456 Oak Avenue", city: "Anywhere" });

// person1.addFriend(person2);

// console.log(person1.friends); 

// ----------------------------------------------------------------------------------------------------------------------------------------------------->

// let fruits = ['Apple', 'Banana', 'Orange'];
// for (let fruit of fruits) {
//   console.log(fruit);
// }


// let fruits = ['Apple', 'Banana', 'Orange'];
// fruits.forEach(function(f) {
//   console.log(f);
// });

// _----------------------------------------------------------------------------------------------------------->


// const readlineSync = require('readline-sync');
// let objectLength = readlineSync.questionInt('How many things you want? ');
// let arr = [];
// for(let i=0; i<objectLength; i++){
//     let list = {
//         name: readlineSync.question(`${i+1} Item name? `),
//         quantity: readlineSync.questionInt(`${i+1} Item quantity? `)
//     }
//     arr.push(list);
// }
// console.log(arr);

// // THE TOTAL COST
//     let displayTotal = readlineSync.question("do you want to see total? Only yes or no. ");
//     let total = 0;
//     if(displayTotal == 'yes'){for(let j=0; j<objectLength; j++){
//             total+=arr[j].quantity;}
//     };
    // console.log(total);
    

    // List of shopingg list
    // let displayDetailedList = readlineSync.question("do you want to see shopingList? Only yes or no. ")
    // if(displayDetailedList == 'yes'){for(let j=0; j<objectLength; j++){
    //         console.log(arr[j].name + ':' + arr[j].quantity);};
    // };


// CHECK ITEMS 
// function item(checkName){
// for(let j=0; j<objectLength; j++){
//     if(arr[j].name == checkName){
//         return true;
//     }
// } return false;
// };
// console.log(item(readlineSync.question("Item name? ")));


// Update Element
// while(true){
// let j = readlineSync.questionInt(`The array no. you want to update from 0 - ${objectLength-1} `);
// arr[j] = {
//     name: readlineSync.question("Item name? "),
//     quantity: readlineSync.questionInt("The quantity? ")
// }
// console.log(arr);
// }


//------------------------------------------------------------------------------------------------------------------------------------------------------->

// function capitalizeFirstLetter(str) {
//     return str
//       .split(' ')
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');
//   }
  
//   const str = "this is my first code";
//   const capitalizedSentence = capitalizeFirstLetter(str);
//   console.log(capitalizedSentence);
  
// function isPalindrome(str) {
//     let cleanedStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
//     console.log(str);
//     console.log(cleanedStr);

//     let reversedStr = cleanedStr.split('').reverse().join('');
//     console.log(reversedStr);

//     return cleanedStr === reversedStr;
// }


// console.log(isPalindrome("A man2 a plan a canal, PAnamam"));
// console.log(isPalindrome("qwertyuiOOiuytrewq")); 

// function forCount(str){
//     let count = 1;
//     let newStr = '';
//     for(let i=0; i<str.length; i++){
//         if(str[i] == str[i+1]){
//             count++;
//         } else {
//             newStr = newStr+str[i]+count;
//             count = 1;
//         }
//     }
//     return newStr;
// }

// console.log(forCount("aabcccccaaa"));


// function caesarCipher(str, shift) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (char.match(/[a-z]/i)) {
//             let asciiCode = str.charCodeAt(i);
//             console.log(asciiCode);
//             if (asciiCode >= 65 && asciiCode <= 90) {
//                 char = String.fromCharCode(((asciiCode - 65 + shift) % 26) + 65);
//             }
//             else if (asciiCode >= 97 && asciiCode <= 122) {
//                 char = String.fromCharCode(((asciiCode - 97 + shift) % 26) + 97);
//             }
//         }
//         result += char;
//     }
//     return result;
// }

// console.log(caesarCipher("Let's find out", 4));  



// function addDate(date, add){
//     const newDate = new Date(date);

//     newDate.setDate(newDate.getDate()+add);

//     return newDate
// }

// const today = new Date();
// const addDays = 5;
// newDate2 = addDate(today, addDays);
// console.log(newDate2);

// console.log(newDate2.toISOString().split('T')[0]);


// function inpDate(yy, mm, dd){
// const date = new Date(yy, mm-1, dd);
// if(date.getDay()==0 || date.getDay()==6){
//     return true
// } else {
//     return false
// };
// }

// console.log(inpDate(2003, 10, 11));


// function daysUntilBirthday(birthdayString) {
//     const today = new Date();
//     const birthDate = new Date(birthdayString);

//     birthDate.setFullYear(today.getFullYear());

//     if (today > birthDate) {
//         birthDate.setFullYear(today.getFullYear() + 1);
//     }

//     const diffTime = birthDate - today;

//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

//     return diffDays === 1 ? `${diffDays} day` : `${diffDays} days`;
// }

// const birthdayString = "2023-10-04";
// console.log(daysUntilBirthday(birthdayString));

// function customDateFormatter(date, formatString) {
//     const pad = (number) => (number < 10 ? '0' + number : number);

//     const replacements = {
//         YYYY: date.getFullYear(),
//         YY: String(date.getFullYear()).slice(-2),
//         MM: pad(date.getMonth() + 1),
//         DD: pad(date.getDate()),
//         HH: pad(date.getHours()),
//         mm: pad(date.getMinutes()),
//         A: date.getHours() >= 12 ? 'PM' : 'AM',
//     };

//     return formatString.replace(/YYYY|YY|MM|DD|HH|mm|A/g, match => replacements[match]);
// }


// const today = new Date();
// const formatString1 = "DD/MM/YYYY";
// const formatString2 = "HH:mm A";

// const formattedDate1 = customDateFormatter(today, formatString1);
// const formattedDate2 = customDateFormatter(today, formatString2);

// console.log(formattedDate1);
// console.log(formattedDate2);


// const r = 5;

// const area = Math.PI*r*2;
// console.log(area);


// function getDistance(x1, y1, x2, y2) {
//     const dx = x2 - x1;
//     const dy = y2 - y1;
//     return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
// }


// const x1 = 1;
// const y1 = 2;
// const x2 = 4;
// const y2 = 6;

// console.log(getDistance(x1, y1, x2, y2));


// function rollDie() {
//     return Math.floor(Math.random() * 6) + 1;
// }

// function diceGame(rounds, targetScore) {
//     let player1Score = 0;
//     let player2Score = 0;

//     for (let round = 1; round <= rounds; round++) {
//         const player1Roll = rollDie();
//         const player2Roll = rollDie();

//         console.log(`Round ${round}: Player 1 rolls ${player1Roll}, Player 2 rolls ${player2Roll}`);

//         if (player1Roll > player2Roll) {
//             player1Score++;
//             console.log("Player 1 wins this round!");
//         } else if (player2Roll > player1Roll) {
//             player2Score++;
//             console.log("Player 2 wins this round!");
//         } else {
//             console.log("It's a draw!");
//         }


//         if (player1Score === targetScore) {
//             console.log(`Player 1 reaches the target score of ${targetScore}!`);
//             break;
//         } else if (player2Score === targetScore) {
//             console.log(`Player 2 reaches the target score of ${targetScore}!`);
//             break;
//         }
//     }


//     console.log(`Final Scores: Player 1: ${player1Score}, Player 2: ${player2Score}`);


//     if (player1Score > player2Score) {
//         console.log("Player 1 wins the game!");
//     } else if (player2Score > player1Score) {
//         console.log("Player 2 wins the game!");
//     } else {
//         console.log("The game is a tie!");
//     }
// }


// let rounds = 5;
// let targetScore = 1;

// diceGame(rounds, targetScore);


let arr = [1,2,3,4,5,6,7,8,9];

const newNum = arr.filter( (num)=> num !== 4 );
console.log(newNum);


