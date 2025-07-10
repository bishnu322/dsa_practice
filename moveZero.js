const moveZeros = (arr) => {
  let nonZeroElem = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeroElem] = arr[i];
      nonZeroElem++;
    }
  }

  for (let i = nonZeroElem; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
};
let arr = [0, 1, 0, 3, 12];
console.log(moveZeros(arr));
