// Function to check if a person is eligible to vote using a ternary operator
function checkVotingEligibility(age) {
    var result = (age < 18) ? "You cannot vote" : "You can vote";
    console.log(result);
  }
  
  // Examples
  checkVotingEligibility(20);  // Output: You can vote
  checkVotingEligibility(15);  // Output: You cannot vote
  