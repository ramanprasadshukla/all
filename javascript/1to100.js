/*Array(100).fill().map((_, i) => console.log(i + 1));*/

/*function printNumbers(n) {
    if (n > 100) {
        return;
    }
    console.log(n);
    printNumbers(n + 1);
}
// Start the recursive function with the initial number 1
printNumbers(1);*/



document.write(
    Array(100)
        .fill()
        .map((_, i) => i + 1)
        .join('<br>')
);
console.log(i+1);
