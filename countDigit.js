//! counting number of digits by converting it to string
const countDigit = (num) => {
  const newNum = num.toString();
  return newNum.length;
};
console.log(countDigit(0));

//! in number only
const digitCount = (num) => {
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
};
console.log(digitCount(23782739798737));
