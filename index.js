let user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main Street",
    city: "Anytown",
    country: "USA",
    postalCode: "12345",
    state: "California",
    coordinates: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
  },
  contacts: {
    email: "john.doe@example.com",
    phone: "123-456-7890",
    social: {
      facebook: "john.doe.123",
      twitter: "@johndoe",
      instagram: "@johndoe123",
    },
  },
  hobbies: ["reading", "traveling", "hiking"],
  education: {
    degree: "Bachelor's",
    field: "Computer Science",
    university: "University of California, Berkeley",
  },
  work: {
    company: "ABC Corp",
    position: "Software Engineer",
    experience: "5 years",
  },
  family: {
    spouse: {
      firstName: "Jane",
      lastName: "Doe",
      age: 28,
    },
    children: [
      { name: "Emily", age: 5 },
      { name: "Michael", age: 3 },
    ],
  },
};

// За допомогою деструктуризації дістати з об'єкту слідуючі данні і покласти їх у змінні з відповідними іменами:
// // university,
// const {
//   education: { university },
// } = user;
// console.log(university);

// // city,
// const {
//   address: { city },
// } = user;
// console.log(city);

// // latitude,
// const {
//   address: {
//     coordinates: { latitude },
//   },
// } = user;
// console.log(latitude);

// // пошту з назвою userEmail,
// const {
//   contacts: { email: userEmail },
// } = user;
// console.log(userEmail);

// // друге хобі з назвою secondHobbie,
// const {
//   hobbies: [, secondHobbie],
// } = user;
// console.log(secondHobbie);

// // ім'я першої дитини з назвою firstChildName
// const {
//   family: {
//     children: [{ name: firstChildName }],
//   },
// } = user;
// console.log(firstChildName);

// or:
const {
  education: { university },
  address: {
    city,
    coordinates: { latitude },
  },
  contacts: { email: userEmail },
  hobbies: [, secondHobbie],
  family: {
    children: [{ name: firstChildName }],
  },
} = user;

console.log(university);
console.log(city);
console.log(latitude);
console.log(userEmail);
console.log(secondHobbie);
console.log(firstChildName);
