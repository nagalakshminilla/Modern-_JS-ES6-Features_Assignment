const profile = { 
  name: "Naga Lakshmi", 
  age: 29, 
  address: { 
    city: "Menavilluru", 
    zipcode: "534202", 
  } 
};

const updates = { 
  age: 30, 
  address: { 
    zipcode: "534201", 
    country: "India" 
  } 
};

const mergedProfile = {
  ...profile,
  ...updates,
  address: {
    ...profile.address,
    ...updates.address
  }
};

console.log(mergedProfile);