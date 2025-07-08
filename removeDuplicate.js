const arr = [1, 2, 2, 3, 4, 4, 5];

const removeDuplicate = (data) => {
  const uniqueArr = [];
  const seenObj = {};
  for (let i = 0; i < data.length; i++) {
    let newData = data[i];
    if (!seenObj[newData]) {
      uniqueArr.push(newData);
      seenObj[newData] = true;
    }
  }
  console.log(seenObj);
  return uniqueArr;
};
const data = removeDuplicate(arr);
console.log(data);

// BY using Set method and destructuring inside array
const arr1 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [...new Set(arr1)];
console.log(uniqueArr);
