function chunkArrayInGroups(arr, num){
  let arr2D = []   
  for(let i = 0; i < arr.length; i+=num){
    arr2D.push(arr.slice(i, i+num))
  }
  return arr2D
}

console.log(chunkArrayInGroups(["a", "b", "c", "d","e"], 3))