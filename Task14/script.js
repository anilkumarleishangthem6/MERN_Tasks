// Variables
let n = 5;          // for sum and table
let num = 139;      // for digit operations
let checkNum = 17;  // for prime & factors
let armNum = 153;   // for Armstrong

// 1. Sum of first n numbers
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(`Sum of first ${n} numbers is:${sum}`);


// 2. Table of n
console.log(`Table of ${n}`);
for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}


// 3. Check Prime Number
let isPrime = true;

if (checkNum <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < checkNum; i++) {
        if (checkNum % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(checkNum, "is a Prime Number");
} else {
    console.log(checkNum, "is NOT a Prime Number");
}


// 4. Print all factors
console.log("Factors of", checkNum, "are:");
for (let i = 1; i <= checkNum; i++) {
    if (checkNum % i === 0) {
        console.log(i);
    }
}


// 5. Sum of digits
let temp = num;
let digitSum = 0;

while (temp > 0) {
    let digit = temp % 10;
    digitSum += digit;
    temp = Math.floor(temp / 10);
}
console.log("Sum of digits of", num, "is:", digitSum);


// 6. Armstrong Number Check
let tempArm = armNum;
let armSum = 0;

while (tempArm > 0) {
    let digit = tempArm % 10;
    armSum += digit **3;  // cube using loop logic
    tempArm = Math.floor(tempArm / 10);
}

if (armSum === armNum) {
    console.log(armNum, "is an Armstrong Number");
} else {
    console.log(armNum, "is NOT an Armstrong Number");
}