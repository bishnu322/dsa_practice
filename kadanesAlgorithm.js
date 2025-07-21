//  * finding maximum of sub array

const maxSubArrSum = (arr) => {
  let currentSum = 0;
  let maxSum = null;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    maxSum = Math.max(currentSum, maxSum);

    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
};

let arr = [3, -4, 5, 4, -1, 7, -8];

console.log(maxSubArrSum(arr));
