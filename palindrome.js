function isPalindrome(word) {
  let temporaryWord = "";
  let splitWord = word.split("");

  for (let i = splitWord.length - 1; i >= 0; i--) {
    temporaryWord += splitWord[i];
  }

  if (word === temporaryWord) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("kodok"));
