// You should have a function named fearNotLetter.
// The fearNotLetter function should accept one argument: a string representing a range of letters in alphabetical order which can have one letter missing.
// The function should find the missing letter in the passed letter range and return it.
// If all letters are present in the range, the function should return undefined.


function fearNotLetter(wordsLength){
  const full = "abcdefghijklmnopqrstuvwxyz"
  const firstIndex = full.indexOf(wordsLength[0])
  const lastIndex = full.indexOf(wordsLength[wordsLength.length-1]) 
  for(let i = firstIndex; i < lastIndex; i++){
    if(!wordsLength.includes(full[i])){
      return full[i]
    }
  }
  return undefined
}

console.log(fearNotLetter("bcdf"))

