const rotateArray = (array, target) => {
  if (!Array.isArray(array)) {
    console.error("please, provide valid array");
    return null;
  }
  if (typeof target !== "number") {
    console.error("target value should be number");
    return null;
  }

  let tempArr = [...array];
  for (let i = 0; i < target; i++) {
    let shiftedValue = tempArr.shift();
    tempArr.push(shiftedValue);
  }

  return tempArr;
};
let target = 2;
let array = [2, 3, 4, 5, 1, 5, 8];
console.log(rotateArray(array, target));
console.log(array);

// other method

const otherRotationMethod = (array, target) => {
  if (!Array.isArray(array)) {
    console.error("please, provide valid array");
    return null;
  }
  if (typeof target !== "number") {
    console.error("target value should be number");
    return null;
  }

  if (array.length === 0) {
    console.error("array cannot be empty ");
    return [];
  }

  let tempArr = [...array];

  //   let rotatedArray = tempArr.slice(target).concat(tempArr.slice(0, target));

  return [...tempArr.slice(target), ...tempArr.slice(0, target)];
};
console.log(otherRotationMethod(array, target));
