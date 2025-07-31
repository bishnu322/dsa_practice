let array = [2, "hello ", 9, "hi", 1, 1, 23, "bishnu", "bishnu", "Rahul", 23];

const checkNumStringSep = (array) => {
  const newArr = [...new Set(array)];
  const numberArr = [];
  const stringArr = [];

  newArr.forEach((data) => {
    if (typeof data === "number") {
      numberArr.push(data);
    } else stringArr.push(data);
  });
  console.log(numberArr.sort((a, b) => a - b));
  console.log(stringArr.sort());
};
checkNumStringSep(array);
