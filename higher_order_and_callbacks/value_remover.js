// Implement a Value Remover Function
// In this lab, you will create a function that takes an initial array as its first argument, followed by one or more additional arguments representing the values to remove.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// You should have a destroyer function that accepts an array and one or more additional arguments.
// The destroyer function should return a new array excluding all elements from the first argument that match any of the subsequent arguments.
// The function must accept an indeterminate number of arguments.




function destroyer(arr, ...arg1){
  const args = [...arg1]

  return arr.filter(a=>!args.includes(a))
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))