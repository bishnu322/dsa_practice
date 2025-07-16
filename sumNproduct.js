const sumAndProduct = (arr) => {
  let product = 1;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    product = product * arr[i];
  }
  return `${sum}, ${product}`;
};
const arr = [2, 5, 9];
console.log(sumAndProduct(arr));
