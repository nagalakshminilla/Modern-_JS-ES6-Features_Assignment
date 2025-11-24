const username = "NagaLakshmi";
const course = "Masai Empowerher Program";
console.log(`Hello ${username}, welcome to the ${course} course!`);

const name = "Navya";
const age = 23;
const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};

const getFullName = (first, last) => `${first} ${last}`;

console.log(getFullName("Naga Lakshmi", "Nilla"))
student.greet()