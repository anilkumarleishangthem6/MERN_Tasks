let A;
let p;
let t; 
let r;
let n; 

p = 50000;
r = 3;
n = 4;
t = 5;

A = p*(1+(r/n))**n*t;

console.log("The compound interest after "+t+" years is: "+ A);