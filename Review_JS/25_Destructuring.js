// const userNameData = ["Jincheol", "Park"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

// destructuring array
const [firstName, lastName] = ["Jincheol", "Park"];

console.log(firstName);
console.log(lastName);

// destructuring object
const {name: userName, age} = {
    name: "Jincpark",
    age: 27
};

console.log(userName);
console.log(age);
