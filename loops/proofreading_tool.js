// User Stories:

// You should define a function named isPalindrome that takes a word string as its argument. It should return true if the word reads the same forwards and backwards (case-insensitive), and false otherwise.

// You should define a function named findPalindromeBreaks that takes a words array as its argument. It should return an array of indices of words that are not palindromes. It should return an empty array if the input is empty.

// You should define a function named findRepeatedPhrases that takes a words array and a phraseLength number as arguments. It should return an array of all start indices where a sequence of phraseLength consecutive words appears more than once in the array — including the index of the first occurrence. It should return an empty array if phraseLength is greater than or equal to the length of words. Overlapping sequences should also be counted.

// You should define a function named analyzeTexts that takes a texts array and a phraseLength number as arguments. It should process each element of texts (each an array of words) and return an array of objects, each with repeatedPhrases and palindromeBreaks properties. It should return an empty array if texts is empty.

function isPalindrome(word) {
  const reverseWord = word.split("").reverse().join("").toLowerCase();

  if (reverseWord == word.toLowerCase()) {
    return true;
  }

  return false;
}

function findPalindromeBreaks(words) {
  const result = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      result.push(i);
    }
  }

  return result;
}

function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) {
    return [];
  }

  const phrases = {};
  const result = [];

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");

    if (phrases[phrase] !== undefined) {
      if (!result.includes(phrases[phrase])) {
        result.push(phrases[phrase]);
      }

      result.push(i);
    } else {
      phrases[phrase] = i;
    }
  }

  return result;
}

function analyzeTexts(texts, phraseLength) {
  if (texts.length === 0) {
    return [];
  }

  const result = [];

  for (const words of texts) {
    const repeatedPhrases = findRepeatedPhrases(words, phraseLength);
    const palindromeBreaks = findPalindromeBreaks(words);

    result.push({
      repeatedPhrases: repeatedPhrases,
      palindromeBreaks: palindromeBreaks
    });
  }

  return result;
}
