const str = "HI JS you are amazing";

const vowel = ["a", "e", "i", "o", "u"];

const countVowels = (data) => {
  let count = 0;
  for (let str of data.toLowerCase()) {
    if (vowel.includes(str)) {
      count++;
    }
  }
  return count;
};
const numOfVowels = countVowels(str);
console.log(numOfVowels);
