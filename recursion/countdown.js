function countdown(n, countArray = []){

  if(n < 1){
    return []
  }
  countArray.push(n)
  countdown(n-1, countArray) 
  return countArray
}

console.log(countdown(-1))
