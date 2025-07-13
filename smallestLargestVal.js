//! find smallest and largest value from array

const smallestAndLargest = (arr) => {
  let smallest = Math.min(...arr);
  let largest = Math.max(...arr);
  return `smallest: ${smallest}, largest: ${largest}`;
};
let arr = [-2, 38, 2783, 0, 662, -15];
console.log(smallestAndLargest(arr));
