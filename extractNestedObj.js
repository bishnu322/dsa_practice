const userProfile = {
  id: 101,
  personalInfo: {
    name: "Bishnu",
    contact: {
      email: "bishnu@example.com",
      address: {
        country: "Nepal",
        city: "Kathmandu",
        zipCode: 21900,
      },
    },
  },
};

const extractObj = (obj) => {
  for (key in obj) {
    if (typeof obj[key] === "object") {
      extractObj(obj[key]);
    } else {
      console.log(key, ":", obj[key]);
    }
  }
};
extractObj(userProfile);
