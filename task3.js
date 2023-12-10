// Function to check if a number is positive, negative, or zero using nested ternary operators
function checkNumber(value) {
    var result = (value > 0) ? "positive" : (value < 0) ? "negative" : "zero";
    console.log("The number is " + result + ".");
  }
  
  // Examples
  checkNumber(5);     // Output: The number is positive.
  checkNumber(-3);    // Output: The number is negative.
  checkNumber(0);     // Output: The number is zero.
  