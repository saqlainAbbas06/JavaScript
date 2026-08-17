// Build the Largest Number Finder
// In this lab, you will build a function that returns an array consisting of the largest number from each provided sub-array.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// You should create a function largestOfAll that takes an array of arrays as an argument.
// The function should return an array containing the largest number from each sub-array.




function largestOfAll(arr){
  let largestNumArr = []
  for (let i = 0; i < arr.length; i++){
    largestNumArr.push(findMax(arr[i]))
  }
  return largestNumArr
}
function findMax(arr){
  let max = arr[0]
  for(const num of arr){
    if(max < num){
      max = num
    }
  }
  return max
}

