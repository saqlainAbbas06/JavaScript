function permuteString(string) {

  if (string.length <= 1) {
    return [string];
  }

  let uniquePermutations = new Set();

  for (let i = 0; i < string.length; i++) {
    let anchorChar = string[i];
    
    let remainingChars = string.slice(0, i) + string.slice(i + 1);
    
    let innerPermutations = permuteString(remainingChars);
    
    for (let perm of innerPermutations) {
      uniquePermutations.add(anchorChar + perm);
    }
  }

  return Array.from(uniquePermutations);
}

console.log(permuteString("good")); 
