// how many times loop runs
const numberOfLoopRepeat = (count) => {
  for (let i = 0; i < 10; i += 2) {
    count++;
  }

  return count;
};
console.log(numberOfLoopRepeat(0));

// while using fetch header method should be mentioned
// fetch("https://api.myapp.com/login", {
//   method: "POST",
//   headers: {
//     "content-type": "application/json",
//   },
//   body: JSON.stringify({ email: "sam@test.com" }),
// });
