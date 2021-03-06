
/********************

In this exercise, we will be creating a function that takes in two numbers and returns the sum

Step 1. Create and declare a function,
that takes in two parameters

Step 2. In the function body, add both
numbers together and return the sum

Step 3. Call the function

For extra credit, create a conditional that executes a message if the sum is over 10 or less than 100 

********************/

// Your Solution:
function jsSum (num1, num2) {
  let result = num1 + num2;
  if (result > 10 || result < 100) {
    return "This result is within bounds!";
  }
  return result;
}
console.log(jsSum(10, 3));