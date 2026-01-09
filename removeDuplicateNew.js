const removeDuplicateElement = (arr) => {
  if (!Array.isArray(arr)) return null;
  if (!arr.every((item) => typeof item === "number")) return [];

  let obj = {};
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      uniqueArr.push(arr[i]);
      obj[arr[i]] = true;
    }
  }

  return uniqueArr;
};
const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicateElement(arr));
