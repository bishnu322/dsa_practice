const removeElemFromArr = (arrData, toRemove) => {
  if (!Array.isArray(arrData)) {
    throw new Error("First argument must be an array");
  }
  return arrData.filter((elem) => elem !== toRemove);
};
const array = [1, 3, 2, 3, 2, 5, 4, 54];
console.log(removeElemFromArr(array, 5));
