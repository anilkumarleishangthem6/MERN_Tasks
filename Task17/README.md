### Task17 (Using promises)


##  Objective

Create a JavaScript function using **Promises** to perform division of two numbers with proper error handling.

---

## Features

* Uses **arrow function**
* Implements **Promise (resolve & reject)**
* Handles **division by zero error**
* Demonstrates **async/await for sequential execution**
* Includes multiple test cases

---

## Function Description

* Takes two numbers as input
* Returns a Promise:

  * ✅ Resolves with result if divisor ≠ 0
  * ❌ Rejects with error if divisor = 0

---

## Error Example

```Javascript 

divisionNum(6,0)
.then(result => {
  console.log("3 Dividing 6 by 0");
  console.log("Result 3:", result)})
.catch(error => console.log("Result 3: ",error));
// Output: Error: Division by zero is not allowed.

```