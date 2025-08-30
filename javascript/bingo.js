const arr = [];
for (let i = 0; i < 100; i++) {
    arr[i] = i + 1;
}
while (arr.length != 0) {
    let i = Math.floor(Math.random()*arr.length);
    let a = input.question('please press enter: ');
    console.log(arr[i]);
    arr.splice(arr.indexOf(arr[i]), 1);
}