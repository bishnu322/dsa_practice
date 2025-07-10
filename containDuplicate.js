//? check whether the give array of element contains duplicate or not
const checkDuplicate = (arr) => {
  let obj = {};

  arr.forEach((elem, i) => {
    if (obj[elem]) {
      obj[elem] = obj[elem] + 1;
    } else {
      obj[elem] = 1;
    }
  });

  for (let key in obj) {
    if (obj[key] > 1) return true;
    return false;
  }
};
console.log(checkDuplicate([1, 2, 3, 4, 1]));
