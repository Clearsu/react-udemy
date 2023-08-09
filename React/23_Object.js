const user = {
    name: "Max",
    age: 34,
    greet() {
        console.log("Hello");
        console.log(this.age);
    }
};

console.log(user.name);
user.greet();

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(this.name, this.age);
    }
}

const user1 = new User("Jincpark", 27);
user1.greet();