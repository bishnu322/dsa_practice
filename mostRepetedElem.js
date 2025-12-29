const mostRepeatedElem = (arr) => {
  //   return arr.reduce((acc, val) => {
  //     acc[val] = (acc[val] || 0) + 1;

  //     return acc;
  //   }, {})

  if (!Array.isArray(arr) || arr.length === 0) return "Enter array";

  let obj = {};
  let max = 0;
  let objKey = null;

  arr.forEach((value) => {
    if (obj[value]) {
      obj[value] = obj[value] + 1;
    } else {
      obj[value] = 1;
    }
  });

  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      objKey = key;
    }
  }

  return objKey;
};
const arr = [5, 3, 2, 2, 2, 5, 1, 4];
console.log(mostRepeatedElem(arr));
