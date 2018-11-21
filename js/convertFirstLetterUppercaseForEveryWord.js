var sentence = 'good afternoon, mr mike.';

function convertFirstLetterUppercaseForEveryWord() {
  let words = sentence.split(' ');
  for (var i = 0; i < words.length; i++) {
    let uppercaseFirstLetter = words[i].slice(0, 1).toUpperCase();
    let otherLetters = words[i].slice(1);
    words[i] = uppercaseFirstLetter + otherLetters;
  }
  let resultSentence = words.join(' ');
  return resultSentence;
}
console.log(convertFirstLetterUppercaseForEveryWord(sentence));