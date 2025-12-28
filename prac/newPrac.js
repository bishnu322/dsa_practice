// rest parameter

// function arrFn(a, ...other) {
//   console.log(a, other);
// }

// arrFn(12, 3, 8, 10);

// deep copy and shallow copy

// const obj = {
//   name: "bis",
//   address: {
//     city: "ktm",
//     street: "baluwatar",
//   },
// };

// const obj2 = structuredClone(obj);

// obj2.name = "abhi";
// obj2.address.city = "btl";

// console.log(obj);
// console.log(obj2);

// closure

// function sumFun() {
//     let a = 10
//   return {
//     name: "bishnu",
//     age: 28,
//   };
// }

// const newFun = sumFun();

//promise

// const promise = new Promise((resolve, reject) => {
//   let success = true;

//   setTimeout(() => {
//     if (success) {
//       resolve("data fetched..");
//     } else {
//       reject("data cannot be fetched");
//     }
//   }, 2000);
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("promise done");
//   });

//* asynchronous
// async await
// set interval
// set timeout
// promise

// let ram = "my name is ram";

// function isPresent(data) {
//   for (let key of data) {
//     console.log(ram.includes(key));
//   }
// }

// console.log(isPresent("am"));

const obj = {
  name: "bishnu",
};
console.log(Object.entries(obj));
console.log(Array.isArray([1, 2, 3]));
