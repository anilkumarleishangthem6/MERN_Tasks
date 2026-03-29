let arr = [8, 9, 5, 2, 7, 10]
console.log("The array is: "+ arr);

//to find the maximum number in the array
function maxNum(num){
  const result = Math.max(...num);
  console.log("The Maximum number is: "+result);
} 

maxNum(arr);

//To find the sum of the array elements
//we can also use reduce method to find the sum of the array elements

// function sumNum(num){
//   const result = num.reduce((a, b) => a + b, 0);
//   console.log(result);
// }
// sumNum(arr);

//or we can use for loop too
const sumNum = (num) =>{
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }

  console.log("The sum of elements is: "+sum);
}

sumNum(arr);


//to find the number of odd numbers in the array
function oddNum(num){
  let count = 0;
  for(let i =0; i< num.length; i++){
    if(num[i] % 2 == 0){
      count++;
    }
  }
  console.log("The number of odd numbers in the array is:"+ count);
}
oddNum(arr);
