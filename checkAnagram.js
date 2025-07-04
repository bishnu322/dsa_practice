const isAnagram = (s, t) => {
  let firstArg = s.split("").sort().join("");
  let secondArg = t.split("").sort().join("");
  if (firstArg !== secondArg) return false;
  return true;
};
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
