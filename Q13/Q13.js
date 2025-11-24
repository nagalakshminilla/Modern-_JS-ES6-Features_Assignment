const people = [
  { 
    name: "NagaLakshmi", 
    address: { 
      city: "Tanuku", 
      street: { 
        name: "Meenavilluru Road", 
        number: 123 
      } 
    } 
  }, 
  { 
    name: "Manikanta", 
    address: { 
      city: "Hyderabad", 
      street: { 
        name: "Gachibowli", 
        number: 456 
      } 
    } 
  }
];

const result = people.map(({ 
  name, 
  address: { 
    city, 
    street: { 
      name: streetName 
    } 
  } 
}) => `${name} lives in ${city} on ${streetName}`);

console.log(result);