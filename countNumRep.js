const count = (arr) => {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1;
    } else {
      obj[arr[i]] = 1;
    }
  }

  return obj;
};
let arr = [1, 2, 1, 4, 6, 1, 2];
console.log(count(arr));
