// how many times loop runs
const numberOfLoopRepeat = (count) => {
  for (let i = 0; i < 10; i += 2) {
    count++;
  }

  return count;
};
console.log(numberOfLoopRepeat(0));
