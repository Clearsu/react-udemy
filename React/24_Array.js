const hobbies = ["Tennis", "Cooking", "Guitar"];

console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);

hobbies.push("Cleaning");

console.log(hobbies);

const index = hobbies.findIndex((item) => {
  return item === "Cooking";
})
//const index = hobbies.findIndex((item) => item === "Cooking");

console.log(index);

//const newHobbies = hobbies.map((item) => item + "!");
const newHobbies = hobbies.map((item) => ({text: item}));
console.log(newHobbies);