const num1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const num2 = [2, 5, 6];
const n = 3;

const mergeSortedArr = (num1, m, num2, n) => {
  //initializing from where to start
  let pointer1 = m - 1;
  let pointer2 = n - 1;
  let current = m + n - 1;

  while (pointer1 >= 0 && pointer2 >= 0) {
    if (num1[pointer1] > num2[pointer2]) {
      num1[current] = num1[pointer1];
      pointer1--;
      current--;
    } else {
      num1[current] = num2[pointer2];
      pointer2--;
      current--;
    }
  }

  while (pointer2 >= 0) {
    num1[current] = num2[pointer2];
    pointer2--;
    current--;
  }

  return num1;
};
console.log(mergeSortedArr(num1, m, num2, n));
