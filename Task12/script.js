
// A = P(1 + r/n)^(nt)
// A = final amount
// P = principal
// r = annual interest rate 
// n = number of times interest compounded per year
// t = time in years

let P = 50000;   
let r = 0.03;    // 3% interest
let n = 4;      
let t = 5;   

// Calculate compound interest
let A = P * (1 + (r / n)) ** (n * t);

// Calculate actual interest earned
let interest = A - P;

console.log(`Total amount after ${t} years: ${A.toFixed(2)}`);
console.log(`Compound interest earned: ${interest.toFixed(2)}`);
