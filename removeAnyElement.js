const removeElemFromArr = (arrData, toRemove) => {
  if (!Array.isArray(arrData)) {
    throw new Error("First argument must be an array");
  }
  return arrData.filter((elem) => elem !== toRemove);
};
console.log(removeElemFromArr([1, 3, 2, 3, 2, 5, 4, 54], 5));
