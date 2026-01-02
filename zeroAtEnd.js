const moveZeroAtEnd = (array) => {
  if (!Array.isArray(array) || array.length === 0) return null;

  let zerosElement = array.filter((value) => value === 0);
  let nonZerosElement = array.filter((value) => value !== 0);

  let tempArr = [...nonZerosElement, ...zerosElement];

  return tempArr;
};
console.log(moveZeroAtEnd([1, 0, 2, 0, 3]));

//other way

// const moveZeroAtEnd = (arr) => {
//   if (!Array.isArray(arr) || arr.length === 0) return null;

//   return [
//     ...arr.filter(value => value !== 0),
//     ...arr.filter(value => value === 0)
//   ];
// };

// ways

// const moveZeroAtEnd = (arr) => {
//   if (!Array.isArray(arr) || arr.length === 0) return null;

//   const nonZeros = [];
//   let zeroCount = 0;

//   for (const value of arr) {
//     if (value === 0) {
//       zeroCount++;
//     } else {
//       nonZeros.push(value);
//     }
//   }

//   return [...nonZeros, ...Array(zeroCount).fill(0)];
// };

// console.log(moveZeroAtEnd([1, 0, 2, 0, 3]));
