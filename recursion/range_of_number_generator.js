function rangeOfNumbers(num1, num2){
  let array = []
  if(num2 < num1){
    return []
  }
  array = rangeOfNumbers(num1, num2-1, array)
  array.push(num2)
  return array
}

console.log(rangeOfNumbers(1, 5))