const groupByProperty = (user) => {
  const propertyObj = {};

  user.forEach((element) => {
    if (propertyObj[element.city]) {
      propertyObj[element.city] = [...propertyObj[element.city], element];
    } else {
      propertyObj[element.city] = [element];
    }
  });

  return propertyObj;
};
const user = [
  { name: "anu", city: "delhi" },
  { name: "abhi", city: "delhi" },
  { name: "murari", city: "bihar" },
  { name: "bis", city: "bihar" },
  { name: "bishnu", city: "bihar" },
];
console.log(groupByProperty(user));
