const divisionNum = (num1, num2)=> {
  return new Promise((resolve, reject) =>{
    if(num2 === 0){
      reject("Error: Division by zero is not allowed.");
    }else{
      resolve(num1/num2);
    }
  });
};

divisionNum(6,2)
.then(result => {
  console.log("1 Dividing 6 by 2");
  console.log("Result 1:", result)})
.catch(error => console.log("Result 1:",error));

divisionNum(2700,30)
.then(result => {
  console.log("2 Dividing 2700 by 30");
  console.log("Result 2:", result)})
.catch(error => console.log("Result 2:",error));

divisionNum(6,0)
.then(result => {
  console.log("3 Dividing 6 by 0");
  console.log("Result 3:", result)})
.catch(error => console.log("Result 3: ",error));

divisionNum(6,0.2)
.then(result => {
  console.log("4 Dividing 6 by 0.2");
  console.log("Result 4:", result)})
.catch(error => console.log("Result 4:",error));

divisionNum(10,0)
.then(result => {
  console.log("5 Dividing 10 by 0");
  console.log("Result 5:", result)})
.catch(error => console.log("Result 5",error));
