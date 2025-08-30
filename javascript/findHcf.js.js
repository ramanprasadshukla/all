// Function to find the GCD of two numbers using the Euclidean algorithm
function gcd(x, y) {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

// Function to find the GCD of multiple numbers
function gcdOfFourNumbers(a, b, c, d) {
    return gcd(gcd(gcd(a, b), c), d);
}
let a = 4;
let b = 4;
let c = 6;
let d = 8;
console.log(gcdOfFourNumbers(a, b,  c,  d));