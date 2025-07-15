const reverseArr = (arr) => {
  let startIndex = 0;
  let lastIndex = arr.length - 1;
  while (startIndex < lastIndex) {
    [arr[startIndex], arr[lastIndex]] = [arr[lastIndex], arr[startIndex]];
    console.log(startIndex);
    console.log(lastIndex);
    startIndex++;
    lastIndex--;
  }
  return arr;
};
let arr = [23, 54, 80, 5, 4];
console.log(reverseArr(arr));
