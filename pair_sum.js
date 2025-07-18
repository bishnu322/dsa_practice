//* sum of two pair target is given if the element is sorted

const arr = [2, 7, 11, 15];
const target = 9;

const pairSumFunc = (arr, target) => {
  arr.sort((a, b) => a - b);
  let startIndex = 0;
  let lastIndex = arr.length - 1; //3
  let pairIndex = [];

  for (let i = 0; i < arr.length; i++) {
    let pairSum = arr[startIndex] + arr[lastIndex];

    if (pairSum == target) {
      pairIndex.push(startIndex);
      pairIndex.push(lastIndex);

      return pairIndex;
    }

    if (pairSum > target) {
      lastIndex--;
    }

    if (pairSum < target) {
      startIndex++;
    }
  }
};
console.log(pairSumFunc(arr, target));
