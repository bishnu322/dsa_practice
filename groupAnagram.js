const groupAnagram = (arr) => {
  const obj = {};
  const groupedAnagram = [];

  for (let i = 0; i < arr.length; i++) {
    const data = arr[i].split("").sort().join("");

    if (obj[data]) {
      obj[data] = [...obj[data], arr[i]];
    } else {
      obj[data] = [arr[i]];
    }
  }

  for (let key in obj) {
    groupedAnagram.push(obj[key]);
  }

  return groupedAnagram;
};
let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagram(arr));
