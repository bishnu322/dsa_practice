const longestStringInArray = (array) => {
  if (!Array.isArray(array)) return "enter array";
  if (array.length === 0) return "there should be value in array";

  let stringVal = "";
  let maxLength = 0;

  for (let i = 0; i < array.length; i++) {
    if (maxLength < array[i].length) {
      maxLength = array[i].length;
      stringVal = array[i];
    }
  }

  return stringVal;
};
let array = ["JS", "JAVASCRIPT", "REACT"];
console.log(longestStringInArray(array));
