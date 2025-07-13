const targetValueIndex = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      return i;
    }
  }

  return -1;
};
const arr = [2, 5, 8, 90, 45];
const target = 45;
console.log(targetValueIndex(arr, target));
