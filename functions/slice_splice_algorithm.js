// Implement the Slice and Splice Algorithm
// In this lab, you will need to create an algorithm to merge two arrays.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// Create a frankenSplice function that accepts two arrays and an index.
// Copy each element of the first array into the second array, in order, beginning at the given index, and return the resulting array.
// The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, index){
let arr3 = []
let arr2Index = 0
do{

  if(arr2Index == index){
    for(const item of arr1){
      arr3.push(item)
    }
  }
  if(arr2.length>0){
  arr3.push(arr2[arr2Index])
  }

  ++arr2Index

}
while(arr2Index < arr2.length)

return arr3
}

console.log( frankenSplice([1, 2, 3, 4], [], 0))






