// string, number, bool -> default type
// they are initialized everytime when you want to change it's value
// but objects are different.

// in a variable for an object, the memory address is stored

const hobbies = ["Sports", "Cooking"];
// hobbies = []; // impossible
hobbies.push("Working"); // the address is constant, so you can edit values
console.log(hobbies);