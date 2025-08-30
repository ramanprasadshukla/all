// INPUT = 5
// OUTPUT =>
// 1   6   10  13  15
// 16  2   7   11  14
// 20  17  3   8   12
// 23  21  18  4   9
// 25  24  22  19  5

let n = 5;
let arr = [];
let arr2 = []
let i = 0;
let j = 0;
while(i < n){
    while(j < n){
        arr.push(1);
        j++;
    }
    i++
    j = 0;
    arr2.push(arr);
    arr = [];
}

console.log(arr);
console.log(arr2);

i=0;
j=0;
let a=1;
let p=1;
let m=n;
let count=0;
while(m>0){
    while(a<=m){
        arr2[i][j]=p;
        i++;
        j++;
        a++;
        p++;
    }
    count++
    j=count;
    i=0;
    m--;
    a=1;
}
console.log(arr2);

i=1;
j=0;
a=1;
m=n-1;
count=1;
while(m>0){
    while(a<=m){
        arr2[i][j]=p;
        i++;
        j++;
        a++;
        p++;
    }
    count++
    i=count;
    j=0;
    m--;
    a=1;
}

console.log(arr2)