// Question no. 1;

// function gcd(a, b, c){
//     for(let i=a; i>=1;i--){
//         if(a%i==0){
//             if(b%i==0){
//                 if(c%i==0){
//                     return i;
//                 }
//             }
//         }
//     }
// }

// console.log(gcd());

// end;


// Question no. 2;


function tf(arr){
    let length = arr.length;
    let i = 0;
    let p = 0;
    let x = 1;
    while(i<(Math.floor(length/2))){
        if(arr[i]==arr[length-x]){
            p++;
        }
        i++;
        x++;
    }
     if(p==(Math.floor(length/2))){
        return true;
      } else {
        return false;
    }
}

console.log(tf([0]));

// end;


// Question no. 3;

// function size(a, b, c){
//     let big = '';
//     let large;
//     if(a<b){
//         big = b;
//     } else {
//         big = a;
//     };
//     if(big<c){
//         large = c;
//     } else {
//         large = big;
//     }
//     if(large%2==0){
//         large = "Even";
//     } else{
//         large = "Odd"
//     }
//     if(a==b && b==c){
//         return "Equal"
//     } else if (a==b || b==c || c==a){
//         return "Two Equal"
//     } else {
//         return "Largest " + large;
//     }
// }

// console.log(size(2, 2, 2));
// console.log(size(3, 3, 5));
// console.log(size(-2, -2, 2));
// console.log(size(1000, 1, 2));