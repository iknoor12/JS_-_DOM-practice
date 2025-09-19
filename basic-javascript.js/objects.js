//  Basic 

//  1. The Personal Profile:  Create an object called myProfile with the following properties: (name, age, city, isStudent).
const obj1 = {
    name: "iknoor",
    age: 18,
    city: "Solan",
    isStudent: true
};
// console.log(obj1);         // { name: 'iknoor', age: 18, city: 'Solan', isStudent: true }
for(let key in obj1){
    // console.log(key);                     // name  age  city  isStudent
    // console.log("value:", obj1[key]);    // value: iknoor  value: 18  value: Solan   value: true
    // console.log(key,":", obj1[key]);     // name : iknoor  age : 18   city : Solan   isStudent : true
};



//  2.  The Shopping Cart: that takes this item object and returns the total cost of the item.
const item = {
  productName: 'Laptop',
  price: 1200,
  quantity: 2
};

// console.log("Price:", item.price,"\nQuantity:", item.quantity, "\nTotal cost:", item.price * item.quantity);

// 2nd approach:
let price, quantity;
for (let key in item) {
  if (key === "price") {
    price = item[key];
  } else if (key === "quantity") {
    quantity = item[key];
  }
}
// console.log("Total cost:", price * quantity);



// 3. The Recipe Book: Add a new property called "prepTime" and set its value to 20(minutes) and modify the servings to be 6 from 4.
const recipe = {
  title: 'Pancakes',
  servings: 4,
  ingredients: ['flour', 'milk', 'eggs', 'sugar']
};

recipe.prepTime = "20 minutes";
recipe.servings = 4;
// console.log(recipe);



// 4. The Pet Owner: an object with name, type, and age properties, That should return a string that describes the pet.
const myPet = {
  name: 'Buddy',
  type: 'dog',
  age: 5
};

// console.log(myPet.name, "is a", myPet.age, "year old", myPet.type);     // Buddy is a 5 year old dog

