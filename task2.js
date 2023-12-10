// Using the comma operator to combine expressions
var a = 1, b = 2, c = 3;

// The comma operator is used in the initialization of the variable 'a'
// The value of 'a' will be the result of the last expression, which is 'c'
console.log(a = (b += 1, c += 2));

// Output: 5
console.log("a:", a); // The value of 'a' is now 5
console.log("b:", b); // The value of 'b' is now 3
console.log("c:", c); // The value of 'c' is now 5
