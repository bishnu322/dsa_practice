const swapMinMaxVal = (arr) => {
  let minVal = Math.min(...arr);
  let maxVal = Math.max(...arr);

  let minIndex = arr.findIndex((val) => val === minVal);
  let maxIndex = arr.findIndex((val) => val === maxVal);

  if (minVal === maxVal) return arr;

  [arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];

  return arr;
};

let arr = [2, 20, 12, 90, 50, 201, 77];
console.log(swapMinMaxVal(arr));
