const isEven = (n) => n % 2 === 0;

let marks = 40;
let result = marks >= 35 ? "Pass" : "Fail";

const greet = (name) => {
  const greeting = name ? `Hello, ${name}` : "Hello, Guest";
  console.log(greeting);
};

const greetConcise = (name) => console.log(`Hello, ${name ? name : "Guest"}`);

console.log(isEven(4))
console.log(isEven(7))

console.log(result)

greet("Naga Lakshmi")
greet()
greetConcise("Navya")
greetConcise()