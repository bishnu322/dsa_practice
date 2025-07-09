//  Majority Element Given an array numbers of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority
// element always exists in the array.

const majorityElem = (array) => {
  let obj = {};
  array.forEach((val) => {
    if (obj[val]) {
      obj[val] = obj[val] + 1;
    } else {
      obj[val] = 1;
    }
  });
  for (let key in obj) {
    if (obj[key] > array.length / 2) {
      return parseInt(key);
    }
  }
};
const numbersArr = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElem(numbersArr));
