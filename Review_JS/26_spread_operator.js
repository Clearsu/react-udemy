const hobbies = ["Sports", "Cooking"];
const newHobbies = ["Reading"];

const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);

const user = {
    name: "Jin",
    age: 27
};

const extendedUser = {
    isAdmin: true,
    ...user
}
console.log(extendedUser);