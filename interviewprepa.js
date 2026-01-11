const interviewQuestion = (arr) => {
  let flattenArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArr = flattenArr.concat(interviewQuestion(arr[i]));
    } else {
      flattenArr.push(arr[i]);
    }
  }
  return flattenArr;
};

console.log(interviewQuestion([1, 2, [3, 4, [5, 6]]]));
