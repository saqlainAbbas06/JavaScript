// Build a Symmetric Difference Function
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Example:

// Array A: ["diamond", "stick", "apple"]

// Array B: ["stick", "emerald", "bread"]

// Result: ["diamond", "apple", "emerald", "bread"]

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// Your function diffArray should return an array.
// Your function should take two arguments, both of which are arrays.
// Your function should make use of the filter method.
// Your function should return the symmetric difference of the two arrays.
// Your function should return an empty array if there is no symmetric difference.




function diffArray(arr1, arr2){
  let arr = arr1.filter(a => !arr2.includes(a))
  arr = arr.concat(arr2.filter(a=> !arr1.includes(a)))
  return arr

}

console.log(diffArray(["diamond", "stick", "apple"], ["stick", "emerald", "bread"]))